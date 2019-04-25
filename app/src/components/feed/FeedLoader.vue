<template>
  <div class="FeedLoader">

    <button @click="loadPosts()">
      {{msg}}
    </button>

  </div>
</template>

<script>

import { store } from '@/store';
//import Component from '@/components/Component'

export default {
  name: 'FeedLoader',
  /*components: {
    Component
  },*/
  data () {
    return {
      lockLoad: false
    }
  },
  props: {
  },
  computed: {
    msg: function () {
      //return store.state.loadingPosts ? "Laddar nya inlägg" : "Scrolla ner för att ladda nya inlägg";
      //return store.state.loadingPosts ? "Laddar nya inlägg" : "Ladda nya inlägg";
      return "Ladda nya inlägg"
    }
  },
  methods: {

    loadPosts: function () {
      store.commit('initLoadPosts',{nPosts: 10});
    },

    unlockLoad: function () {
      this.lockLoad = false;
    }
  },
  created () {
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.FeedLoader{
  text-align: center;
  padding: 10px;
}

</style>
