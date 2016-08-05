<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>

  <div id="should-fade-out">
    <p>This should fade out</p>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  ready () {
    $('#should-fade-out').fadeOut(2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "~assets/scss/bootstrap/variables";

  h1
    color: #42b983;
    font-weight: 300;

  #should-fade-out
    color: $brand-danger;
</style>
