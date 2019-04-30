<template>
  <div id="app">

    <sa-header id="header"></sa-header>

    <router-view id="router"/>
    <!--sa-footer id="footer"></sa-footer-->

  </div>
</template>

<script>

import SaHeader from '@/components/layout/SaHeader'
import SaFooter from '@/components/layout/SaFooter'

export default {
  name: 'App',
  components: {
    SaHeader,
    SaFooter
  }
}
</script>

<style>

@import './assets/style/layout.css';
@import './assets/style/text.css';
@import './assets/style/form.css';
@import './assets/style/screens.css';

</style>
