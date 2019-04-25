<template>
  <div class="SaHeader">

    <three-cols class="cols">
      <h1>
        Se algoritmerna!
      </h1>
    </three-cols>


  </div>
</template>

<script>

//import { store } from '@/store';
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
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.SaHeader{
  background: rgb(230,230,230);
}

.cols{
  padding-left: 10px;
}

</style>
