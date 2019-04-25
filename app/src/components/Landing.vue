<template>
  <div class="Landing">
    <!--h3>
      Sannolikhet att nya inlägg berör ett visst ämne:
    </h3-->
    <bubbles></bubbles>


    <three-cols class="threecols" ref="scrollElement">

      <div slot="left" class="left">
      </div>

      <div class="container">

        <feed class="feed" :scrollElement="scrollElement"></feed>

      </div>

      <div slot="right" class="right">
      </div>

    </three-cols>

    <!--h3>
      Fördelning av flödets {{nPosts}} inlägg:
    </h3-->

    <feed-stats></feed-stats>

  </div>
</template>

<script>

import { store } from '@/store';

import ThreeCols from '@/components/ThreeCols'
import TwoCols from '@/components/TwoCols'
import Bubbles from '@/components/bubbles/Bubbles'
import FeedStats from '@/components/feed/FeedStats'
import Feed from '@/components/feed/Feed'
import FeedScript from '@/components/script/FeedScript'

export default {
  name: 'Landing',
  components: {
    ThreeCols,
    TwoCols,
    Bubbles,
    FeedStats,
    Feed,
    FeedScript
  },
  data () {
    return {
      scrollElement: ""
    }
  },
  computed: {
    bubbles: function () {
      return store.state.bubbles
    },
    nPosts: function () {
      let n = 0;
      if(this.bubbles){
        this.bubbles.forEach((bubble,iBubble) => {
          n += bubble.postCount;
        })
      }
      return n;
    },
    feedlength: function () {
      if(store.state.feed){
        return store.state.feed.posts.length
      }
    }
  },
  watch: {
    feedlength: function (val) {
      if(store.state.scroll){
        this.$nextTick(function (self) {
          setTimeout(function () {
          self.scrollElement.scrollTo({
            top: self.scrollElement.scrollHeight,
            behavior: 'smooth'
          });
        }, 250) //Delay to load posts before calculating scrollHeight
      }(this))
        store.commit('setScroll',{scroll: false});
      }
    }
  },
  methods: {
    loadPosts: function () {
      store.commit('finishLoadPosts',{nPosts: 100});
    },
    resetFeed: function () {
      store.commit('resetFeed',{});
    }
  },
  mounted: function () {
    store.commit('init',{});
    this.scrollElement = this.$refs.scrollElement.$el;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Landing{
  display: flex;
  flex-direction: column;
  background: #eeeeee;
}

.threecols{
  flex: 1;
  overflow-y: scroll;
}

.left, .right {
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.left {
  justify-content: space-between;
}

.right {
  justify-content: center;
}

.container{
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 0;
  box-sizing: border-box;
}

.feed{
  flex: 1;
  overflow-y: scroll;
}

.bubbles{
}

</style>
