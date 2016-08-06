<template>
  <div class="container container-404">
    <div class="text-center">
      <h1>404</h1>

      <h3>Page not found</h3>

      <p>
        <a class="btn btn-lg btn-danger" v-link="{ path: '/' }">Back to home</a>
      </p>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    head: {
      title: {
        inner: '404'
      }
    },
    ready () {
      $('.container-404').css('height', $(window).height())
    }
  }
</script>

<style lang="sass" scoped>
  h1, h3
    font-weight: 300;

  h1
    font-size: 6em;

  .container-404
    margin-top: -85px;
    display: flex;
    align-items: center;
    justify-content: center;

  a.btn
    margin-top: 30px;
</style>