<template>
  <div class="FeedStatsBubble">

    <div class="img" :style="{'background-image': 'url('+img+')','background-color': bubble.color}">
    </div>

    <div class="color" :style="{'background-color': bubble.colorBorder}">
      <span class="text">
        {{bubble.postCount}}
      </span>
    </div>

    <!--img :src="img" /-->



  </div>
</template>

<script>

//import { store } from '@/store';
//import Component from '@/components/Component'

export default {
  name: 'Bubble',
  /*components: {
    Component
  },*/
  data () {
    return {
    }
  },
  props: {
    bubble: ""
  },
  computed: {
    img: function () {
      return require('@/assets/graphics/bubbles/' + this.bubble.image)
    }
  },
  watch: {
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.FeedStatsBubble{
}

.img{
  background-position: left center;
  background-repeat: no-repeat;
  height: 50px;
}

.color {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
}

.text{
  /*background: rgba(255,255,255,0.75);*/
  color: white;
  padding: 2px;
}


</style>
