<template>
  <div class="FeedStats">

    <div v-for="bubble in bubbles" class="bubble" :style="{'background': bubble.color, 'border-color': bubble.colorBorder, 'flex': bubble.postCount}">
      <feed-stats-bubble :bubble="bubble">
      </feed-stats-bubble>
    </div>

  </div>
</template>

<script>

import { store } from '@/store';
import FeedStatsBubble from '@/components/feed/FeedStatsBubble'

export default {
  name: 'FeedStats',
  components: {
    FeedStatsBubble
  },
  data () {
    return {
    }
  },
  computed: {
    feed: function () {
      return store.state.feed
    },
    bubbles: function () {
      return store.state.bubbles
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.FeedStats{
  display: flex;
  flex-direction: row;
  max-width: 100%;
  border-top: 2px solid black;
}

.bubble{
  flex: 1;
  border-bottom: 0px solid lightgray;
  border-right: 0;
  border-left: 0;
  overflow-x: hidden;
  transition: flex 1s ease-out;
}

</style>
