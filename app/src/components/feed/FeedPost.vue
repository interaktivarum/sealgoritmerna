<template>
  <div class="FeedPost">

    <div class="feedPost" :style="{'border-color': bubbleBg}" :class="{'notification': post.notification, 'following': bubble.following}">

        <div class="header_flex">

          <div class="header_left">

            <div>
              <img :src="bubbleimg" class="img-bubble" :alt="'Profilbild för ' + bubble.name"/>
            </div>

            <div>
              <strong>
                {{bubble.name}}
              </strong>

              <div class="reccomendation" v-if="!bubble.following">
                Andra följer denna sida
              </div>
            </div>

          </div>

          <div class="follow">
            <button v-if="bubble.following" @click="setBubbleFollowing(false)"  class="unfollow">Följer</button>
            <button v-else @click="setBubbleFollowing(true)">Följ</button>
          </div>

        </div>

        <div class="images">
          <div v-for="image in images">
            <img :src="image.img" :alt="image.alt"/>
          </div>
        </div>

        <div v-html="body" class="body" :class="{center: !post.notification}">
        </div>

        <div class="buttons">
          <button v-if="bubble.following && !post.buttons.length" @click="increaseBubbleScore($event)" class="like">
            👍
          </button>

          <button v-for="button in post.buttons" @click="performButtonAction(button,$event)" :class="button.class">
            {{button.text}}
          </button>
        </div>

    </div>

  </div>
</template>

<script>

import { store } from '@/store';
//import FeedPost from '@/components/FeedPost'

export default {
  name: 'FeedPost',
  components: {
    //FeedPost
  },
  data () {
    return {
    }
  },
  props: {
    post: ""
  },
  computed: {
    bubble: function () {
      return store.state.bubbles[this.post.bubbleId];
    },
    bubbleimg: function () {
      return require('@/assets/graphics/bubbles/' + this.bubble.image)
    },
    bubbleBg: function () {
      return this.post.notification ? this.bubble.colorBorder : "#cccccc";
    },
    body: function () {
      if(this.post.body){
        return this.post.body
      }
      else if(this.bubble.posts.length){
        return this.bubble.posts[Math.floor(Math.random()*this.bubble.posts.length)];
      }
    },
    images: function () {
      let imgs = [];
      this.post.images.forEach((img,iImg) => {
        let im = {}
        im.img = require('@/assets/graphics/' + img.url)
        im.alt = img.alt ? img.alt : "Bild för inlägg";
        im.href = img.href;
        imgs.push(im)
      })
      return imgs;
    }
  },
  methods: {
    increaseBubbleScore: function (e) {
      e.target.setAttribute('disabled','disabled')
      store.commit('increaseBubbleScore',{bubbleId: this.post.bubbleId})
    },
    performButtonAction: function (button,e) {
      e.target.setAttribute('disabled','disabled')
      store.commit('performButtonAction',{func: button.func})
    },
    setBubbleFollowing: function (following) {
      store.commit('setBubbleFollowing',{bubble: this.bubble, following: following})
    },
    resetPost: function () {
      let buttons = this.$el.getElementsByTagName("button");
      for (let button of buttons) {
        button.removeAttribute('disabled')
      }
    }
  },
  updated: function () {
    this.resetPost()
  }
}
</script>

<style scoped>

.feedPost{
  background: white;
  border: 2px solid lightgray;
  padding: 5px;
  margin: 0 5px 0 5px;
}

.feedPost:not(.following){
  background: #dddddd !important;
}

.notification{
  border-top-width: 20px;
  padding: 10px;
  box-shadow: 3px 3px 0px darkred;
  /*background: coral !important;*/
}

.left{
  flex: 0;
}

.img-bubble{
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.right{
  padding-left: 10px;
  flex: 0 1 100%;
}

.header_flex{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.header_left{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.reccomendation{
  font-size: smaller;
  color: gray;
}

.follow{
}

.unfollow{
  background: white;
  color: gray;
}

.unfollow:hover{
  background: red;
}

.images{
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
}

.images div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0px solid gray;
  box-sizing: border-box;
  flex: 1;
  /*height: 400px;*/
  overflow-y: hidden;
}

.images div:not(:last-child){
  padding-right: 20px;
}

.images div img{
  width: 100%;
}

.body{
  margin: 20px 0 10px 0;
  font-weight: 400;
}

.center{
  text-align: center;
}

.buttons{
  margin-top: 10px;
}

.buttons button{
  margin-right: 5px;
  margin-bottom: 5px;
}

.like, .like:hover{
  border: 1px solid lightgray;
  background: white;
  filter: saturate(0);
}

.like:hover:not(:disabled){
  border-color: gray;
}

.like:disabled{
  filter: saturate(1);
}

</style>
