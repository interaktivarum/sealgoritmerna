<template>
  <div class="Feed">

    <feed-post :post="post" v-for="post in feed.posts" class="post" tabindex="0">
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
    length: function (val) {
      this.$nextTick(function () {
        this.setFocusToLastPost()
      })
    }
  },
  methods: {

    loadPosts: function () {
      store.commit('initLoadPosts',{nPosts: 10});
    },
    setFocusToLastPost: function () {
      let posts = this.$el.getElementsByClassName('post');
      let last = posts[posts.length - 1];
      last.focus({'preventScroll': true});
    }

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
