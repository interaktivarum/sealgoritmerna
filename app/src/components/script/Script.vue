<script>

  import { store } from '@/store';

  export default {
    ScriptItems: {
      'initial_0': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('finishLoadPosts',{nPosts: 2});
        store.commit('pushScriptItemToFeed',{id: "pages"});
      },
      'initial_1': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('pushScriptItemToFeed',{id: "unguided"});
      },
      'initial_2': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('pushScriptItemToFeed',{id: "about"});
      },
      'unguided_0': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('finishLoadPosts',{nPosts: 10});
        store.commit('pushScriptItemToFeed',{id: "unguided"});
      },
      'unguided_1': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('finishLoadPosts',{nPosts: 100});
        store.commit('pushScriptItemToFeed',{id: "unguided"});
      },
      'unguided_2': function () {
        store.commit('resetFeed',{});
        store.commit('pushScriptItemToFeed',{id: "initial"});
      },
      'about_0': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('pushScriptItemToFeed',{id: "guided"});
      },
      'pages_0': function () {
        store.commit('setScroll',{scroll: true});
        let following = store.getters.getBubblesFollowing();
        if(following.length == 1){
          store.commit('pushScriptItemToFeed',{id: "single"});
        }
        else{
          store.commit('pushScriptItemToFeed',{id: "size"});
        }
      },
      'single_0': function () {
        store.commit('setScroll',{scroll: true});
        let following = store.getters.getBubblesFollowing();
        if(following.length < 4){
          store.commit('finishLoadPosts',{nPosts: 2});
          store.commit('pushScriptItemToFeed',{id: "size"});
        }
        else{
          store.commit('finishLoadPosts',{nPosts: 2});
          store.commit('pushScriptItemToFeed',{id: "loadMany"});
        }
      },
      'size_0': function () {
        store.commit('setScroll',{scroll: true});
        let following = store.getters.getBubblesFollowing();
        if(following.length < 3){
          store.commit('finishLoadPosts',{nPosts: 2});
          store.commit('pushScriptItemToFeed',{id: "followMore"});
        }
        else{
          store.commit('finishLoadPosts',{nPosts: 2});
          store.commit('pushScriptItemToFeed',{id: "loadMany"});
        }
      },
      'size_1': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('finishLoadPosts',{nPosts: 10});
        store.commit('pushScriptItemToFeed',{id: "size"});
      },
      'followMore_0': function () {
        store.commit('setScroll',{scroll: true});
        let following = store.getters.getBubblesFollowing();
        if(following.length < 3){
          store.commit('finishLoadPosts',{nPosts: 2});
          store.commit('pushScriptItemToFeed',{id: "followMore"});
        }
        else{
          store.commit('finishLoadPosts',{nPosts: 2});
          store.commit('pushScriptItemToFeed',{id: "loadMany"});
        }
      },
      'loadMany_0': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('finishLoadPosts',{nPosts: 100});
        store.commit('pushScriptItemToFeed',{id: "graph"});
      },
      'loadMany_1': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('finishLoadPosts',{nPosts: 250});
        store.commit('pushScriptItemToFeed',{id: "graph"});
      },
      'graph_0': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('pushScriptItemToFeed',{id: "benefits"});
      },
      'graph_1': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('finishLoadPosts',{nPosts: 100});
        store.commit('pushScriptItemToFeed',{id: "graph"});
      },
      'benefits_0': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('pushScriptItemToFeed',{id: "risks"});
      },
      'benefits_1': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('pushScriptItemToFeed',{id: "risks"});
      },
      'risks_0': function () {
        store.commit('setScroll',{scroll: true});
        let bubble = store.getters.getBubbleBiggest();

        let content = "<p>Du har mycket inlägg från sidan: " + bubble.name + ".</p>";
        content += "<p>" + bubble.risks[0] + "</p>";
        content += "<p>Fundera på om det finns några perspektiv du eller dina vänner inte får ta del av i era flöden.</p>";

        store.commit('pushScriptItemToFeed',{id: "risksUnderstand", content: content});
      },
      'risksUnderstand_0': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('pushScriptItemToFeed',{id: "interact"});
      },
      'risksUnderstand_1': function () {
        store.commit('setScroll',{scroll: true});
        let bubble = store.getters.getBubbleRandom();

        let content = "<p>Tänk dig att du får se mycket inlägg från sidan: " + bubble.name + ".</p>";
        content += "<p>" + bubble.risks[0] + "</p>";
        content += "<p>Fundera på om det finns det några perspektiv du eller dina vänner inte får ta del av i era flöden.</p>";

        store.commit('pushScriptItemToFeed',{id: "risksUnderstand", content: content});
      },
      'interact_0': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('pushScriptItemToFeed',{id: "likeInit"});
      },
      'likeInit_0': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('finishLoadPosts',{nPosts: 20});
        store.commit('pushScriptItemToFeed',{id: "like"});
      },
      'like_0': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('pushScriptItemToFeed',{id: "likeLoad"});
      },
      'like_1': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('pushScriptItemToFeed',{id: "sizeReminder"});
      },
      'likeLoad_0': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('finishLoadPosts',{nPosts: 100});
        store.commit('pushScriptItemToFeed',{id: "summary"});
      },
      'summary_0': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('pushScriptItemToFeed',{id: "finish"});
      },
      'summary_1': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('finishLoadPosts',{nPosts: 100});
        store.commit('pushScriptItemToFeed',{id: "summary"});
      },
      'finish_0': function () {
        store.commit('setScroll',{scroll: true});
        store.commit('pushScriptItemToFeed',{id: "unguided"});
      },
    }
  }

</script>
