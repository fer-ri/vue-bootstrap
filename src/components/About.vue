<template>
  <navbar></navbar>

  <div class="container">
    <h1>About</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ab dolores asperiores aliquam deleniti saepe. Ipsam, cum possimus nihil iure quidem nobis ex earum dolor, at odio dolores perspiciatis. Quasi.</p>
  </div>
</template>

<script>
  import Navbar from './Navbar'

  export default {
    components: {
      Navbar
    },
    head: {
      title: {
        inner: 'About'
      }
    }
  }
</script>