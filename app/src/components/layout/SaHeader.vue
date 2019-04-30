<template>
  <div class="SaHeader">

    <three-cols class="cols">
      <img src="/static/graphics/se-algoritmerna-logo_1_line.png" @click="resetFeed"/>
    </three-cols>


  </div>
</template>

<script>

import { store } from '@/store';
//import Component from '@/components/Component'

import ThreeCols from '@/components/ThreeCols'

export default {
  name: 'SaHeader',
  components: {
    ThreeCols
  },
  data () {
    return {
    }
  },
  props: {
  },
  computed: {
  },
  methods: {
    resetFeed: function () {
      store.commit('setScroll',{scroll: true});
      //store.commit('resetFeed',{});
      store.commit('pushScriptItemToFeed',{id: "logo", dontSave: true});
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.SaHeader{
  padding: 5px;
}

.cols{
}

img{
  width: 100%;
  cursor: pointer;
}

</style>
