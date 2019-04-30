import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Factory from '@/Factory';
import Script from './components/script/Script';
import bubbles from './assets/bubbles.json'
import script from './assets/script.json'

var convert = require('color-convert');

export const store = new Vuex.Store({
  state: {
    feed: "",
    bubbles: "",
    script: "",
    loadingPosts: true,
    scroll: false,
    savedPost: ""
  },
  mutations: {

    init: (state, {}) => {
      store.commit('initBubbles',{nBubbles: 4});
      store.commit('initScript',{});
      store.commit('initFeed',{});
      store.commit('pushScriptItemToFeed',{id: "initial"});
      //store.commit('finishLoadPosts',{nPosts: 3});
    },

    initBubbles: (state, {nBubbles}) => {
      state.bubbles = Factory.Bubbles();
      /*for(var i = 0; i < nBubbles; i++){
        let color = "#"+convert.hsv.hex(i * 300 / nBubbles + 330, 30, 100);
        let colorBorder = "#"+convert.hsv.hex(i * 300 / nBubbles + 330, 100, 80);
        state.bubbles.push(Factory.Bubble(color, colorBorder));
      }*/

      bubbles.bubbles.forEach((bubble,iBubble) => {
        let color = "#"+convert.hsv.hex(iBubble * 135, 10, 100);
        let colorBorder = "#"+convert.hsv.hex(iBubble * 135, 100, 80);
        //let color = "#ffffff";
        //let colorBorder = "#cccccc";
        state.bubbles.push(Factory.Bubble({
          color:color,
          colorBorder:colorBorder,
          name:bubble.name,
          image:bubble.image,
          posts:bubble.posts,
          risks:bubble.risks,
          mandatory: bubble.mandatory,
          following: bubble.following
        }));
      })

    },

    initFeed: (state, {}) => {
      state.feed = Factory.Feed();
    },

    initScript: (state, {}) => {
      state.script = script;
    },

    resetFeed: (state, {}) => {
      store.commit('initBubbles',{nBubbles: state.bubbles.length});
      store.commit('initFeed',{});
    },

    initLoadPosts: (state, {nPosts}) => {
      state.loadingPosts = true;
      setTimeout(function(){
        store.commit('finishLoadPosts',{nPosts: nPosts + Math.floor(4*Math.random())});
      }, 0);
    },

    finishLoadPosts: (state, {nPosts, scroll}) => {
      store.commit('pushToFeed',{nPosts: nPosts});
      state.loadingPosts = false;
    },

    pushScriptItemToFeed: (state, {id,content,dontSave}) => {

      let item = state.script.script.items.find(item => item.id == id);

      let post = Factory.FeedPost({
        bubbleId: 0,
        body: content ? content : item.content,
        buttons: item.buttons,
        notification: true,
        images: item.images
      })

      state.feed.posts.push(post);

      state.bubbles[0].postCount++;

      if(!dontSave){
        state.savedPost = post;
      }

    },

    repeatSavedPost: (state, {}) => {

      state.bubbles[state.savedPost.bubbleId].postCount++;

      if(state.savedPost){
        state.feed.posts.push(state.savedPost);
      }
    },

    pushToFeed: (state, {nPosts}) => {
      for(var i = 0; i < nPosts; i++){

        let bubbleId = store.getters.getNextBubbleId();
        store.commit('decreaseBubbleScore',{bubbleId: bubbleId});

        let bubble = state.bubbles[bubbleId];
        bubble.postCount++;

        let post = bubble.posts[Math.floor(Math.random()*bubble.posts.length)];

        state.feed.posts.push(Factory.FeedPost({
          bubbleId: bubbleId,
          body: post.text,
          images: post.images
        }));

      }
    },

    increaseBubbleScore: (state, {bubbleId}) => {
      let val = state.bubbles[bubbleId].temp * 2;
      //val = Math.min(10,val);
      state.bubbles[bubbleId].temp = val;
    },

    decreaseBubbleScore: (state, {bubbleId}) => {
      let val = state.bubbles[bubbleId].temp / 1.03;
      val = Math.max(1,val);
      state.bubbles[bubbleId].temp = val;
    },

    setScroll: (state, {scroll}) => {
      state.scroll = scroll;
    },

    performButtonAction: (state, {func}) => {
      Script.ScriptItems[func]();
    },

    setBubbleFollowing: (state, {bubble,following}) => {
      Vue.set(bubble,'following',following)
    },

  },
  actions: {
    myAction (context) {
      context.commit('myMutation')
    }
  },
  getters: {

    getTotalScore: state => () => {
      let total = 0;
      for(var i = 0; i < state.bubbles.length; i++){
        total += state.bubbles[i].calc();
      }
      return total;
    },

    getNextBubbleId: state => () => {

      let total = store.getters.getTotalScore();
      let r = Math.random();
      let acc = 0;

      for(var i = 0; i < state.bubbles.length; i++){
        acc += state.bubbles[i].calc() / total;
        if(r <= acc){
          return i;
        }
      }

      return i;
    },

    getBubblesFollowing: state => () => {
      return state.bubbles.filter(bubble => bubble.following)
    },

    getBubbleBiggest: state => () => {
      return state.bubbles.filter(bubble => !bubble.mandatory).sort((b0, b1) => b1.postCount - b0.postCount)[0]
    },

    getBubbleRandom: state => () => {
      return state.bubbles[Math.floor(Math.random()*state.bubbles.length)];
    }

  },
});
