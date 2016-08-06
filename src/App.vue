<template>
  <router-view></router-view>
</template>

<script>
  import store from './vuex/store'

  export default {
    store
  }
</script>

<style lang="sass">
  @import "~assets/scss/app";
</style>
