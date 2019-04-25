<template>
  <div class="Bubbles" @mouseover="hovering = true" @mouseout="hovering = false">

    <bubble v-for="bubble in bubbles" :bubble="bubble" :scoreTotal="scoreTotal" :nBubbles="bubbles.length" :pHover="hovering" class="bubble">
    </bubble>

  </div>
</template>

<script>

import { store } from '@/store';

import Bubble from '@/components/bubbles/Bubble'

export default {
  name: 'Bubbles',
  components: {
    Bubble,
  },
  data () {
    return {
      hovering: false
    }
  },
  props: {
  },
  computed: {
    bubbles: function () {
      return store.state.bubbles;
    },
    scoreTotal: function () {
      return store.getters.getTotalScore();
    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.Bubbles{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: hidden;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
}

.bubble{
  flex: 1;
}

</style>
