<template>
  <div class="TwoCols">

    <div class="left">
      <slot name="left">
      </slot>
    </div>
    <div class="right">
      <slot name="right">
      </slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TwoCols',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.TwoCols{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.left, .right{
  flex: 1;
  height: 100%;
}

</style>
