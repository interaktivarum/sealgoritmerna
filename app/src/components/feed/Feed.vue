<template>
  <div class="Feed">

    <feed-post :post="post" v-for="post in feed.posts" class="post">
    </feed-post>

    <!--feed-loader></feed-loader-->

  </div>
</template>

<script>

import { store } from '@/store';

import FeedPost from '@/components/feed/FeedPost'
import FeedLoader from '@/components/feed/FeedLoader'

export default {
  name: 'Feed',
  components: {
    FeedPost,
    FeedLoader
  },
  data () {
    return {
    }
  },
  props: {
    scrollElement: ""
  },
  computed: {
    feed: function () {
      return store.state.feed
    },
    length: function () {
      if(this.feed){
        return this.feed.posts.length
      }
    }
  },
  watch: {
    /*length: function (val) {
      if(store.state.scroll){
        this.$nextTick(function (self) {
          setTimeout(function () {
          self.scrollElement.scrollTo({
            top: self.scrollElement.scrollHeight,
            behavior: 'smooth'
          });
        }, 100) //Delay to load posts before calculating scrollHeight
      }(this))
        store.commit('setScroll',{scroll: false});
      }
    }*/
  },
  methods: {

    loadPosts: function () {
      store.commit('initLoadPosts',{nPosts: 10});
    },

  },
  created () {

  },
  mounted: function () {
  }
}
</script>

<style scoped>

.Feed{
  overflow-y: scroll;
}

.post{
  margin-bottom: 5px;
}

</style>
