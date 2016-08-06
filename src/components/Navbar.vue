<template>
  <nav class="navbar navbar-fixed-top" v-bind:class="isNavbarInverse ? 'navbar-inverse' : 'navbar-default'">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" v-link="{ path: '/' }">Vue Bootstrap</a>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li v-link-active><a v-link="{ path: '/', exact: true }">Home</a></li>
          <li v-link-active><a v-link="{ path: '/about' }">About</a></li>
          <li><a v-link="{ path: '/404' }">404</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a class="btn btn-link" v-on:click.prevent="navbarInverse">INVERSE</a></li>
          <li><a class="btn btn-link" v-on:click.prevent="navbarDefault">DEFAULT</a></li>
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </nav>
</template>

<script>
  import { isNavbarInverse } from '../vuex/getters'
  import { navbarDefault, navbarInverse } from '../vuex/actions'

  export default {
    ready () {
      if (window.localStorage.getItem('navbar_inverse') === 'true') {
        this.navbarInverse()
      }
    },
    vuex: {
      getters: {
        isNavbarInverse
      },
      actions: {
        navbarDefault,
        navbarInverse
      }
    }
  }
</script>