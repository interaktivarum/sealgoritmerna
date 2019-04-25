<template>
  <div class="Bubble">

    <div class="bubble" :style="{'width': width}" :class="{'pHover': pHover, 'unfollowing': !bubble.following}" @click="toggleBubbleFollowing()" :title="bubble.name">
      <div class="content" :style="{'background-image': 'url('+img+')', 'border-color': bubble.colorBorder}" :class="{'pHover': pHover}">
        <span class="text screenLarge" :style="{'background-color': bubble.colorBorder}">
          {{bubble.name}}
        </span>
      </div>
    </div>

  </div>
</template>

<script>

import { store } from '@/store';

export default {
  name: 'Bubble',
  data () {
    return {
      isMounted: false
    }
  },
  props: {
    bubble: "",
    scoreTotal: "",
    nBubbles: "",
    pHover: false
  },
  computed: {
    percent: function () {
      return this.bubble.calc() / this.scoreTotal;
    },
    percentStr: function () {
      return Math.floor(this.percent*100) + "%"
    },
    width: function () {
      return this.isMounted ? Math.sqrt(this.percent)*100+'%' : "0%";
    },
    img: function () {
      return require('@/assets/graphics/bubbles/' + this.bubble.image)
    }
  },
  methods: {
    setMounted: function () {
      this.isMounted = true;
    },
    toggleBubbleFollowing: function (following) {
      store.commit('setBubbleFollowing',{bubble: this.bubble, following: !this.bubble.following})
    }
  },
  created: function (){
  },
  mounted: function () {
    setTimeout(this.setMounted,200)
  }
}
</script>

<style scoped>

.Bubble{
  max-height: 100px;
  overflow-y: hidden;
  cursor: pointer;
}

.unfollowing{
  filter: saturate(0) opacity(50%);
}

.unfollowing:hover{
  filter: saturate(0.25) opacity(100%);
}

.bubble{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
}

.bubble:before{
	content: "";
	display: block;
	padding-top: 100%; 	/* initial ratio of 1:1*/
  position: relative;
  border: 0;
}

.content{
  position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  border-radius: 50%;
  background-position: center;
  background-size: contain;
  font-size: 1em;
  box-sizing: border-box;
  color: rgba(255,255,255,0);
  transition: color 0.5s;
  text-align: center;
}

.text{
  background: white;
  font-weight: 400;
  color: white;
  padding: 5px;
  display: none;
}

.pHover{
  width: 100% !important;
  color: rgba(255,255,255,1);
}

.pHover .text{
  display: inline;
}

</style>
