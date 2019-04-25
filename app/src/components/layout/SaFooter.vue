<template>
  <div class="SaFooter">

    <three-cols>
      Se algoritmerna, sidfot
    </three-cols>


  </div>
</template>

<script>

//import { store } from '@/store';
//import Component from '@/components/Component'

import ThreeCols from '@/components/ThreeCols'

export default {
  name: 'SaFooter',
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

.SaFooter{
  background: rgb(230,230,230);
  height: 50px;
}

</style>
