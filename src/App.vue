<template>
  <div class="jumbotron">
    <div class="container">
      <hello></hello>
      <p>This is a Vue Js Webpack template with jQuery, Bootstrap Sass, and Font Awesome.</p>
    </div>
  </div>

  <div class="container">
    <div class="text-center">
      <button class="btn btn-lg btn-primary" data-toggle="modal" data-target="#myModal">
        <i class="fa fa-folder-o"></i>
        Open Modal
      </button>

      <button type="button" class="btn btn-lg btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
    </div>
  </div>

  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Modal title</h4>
        </div>
        <div class="modal-body">
          Hello Modal
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Hello from './components/Hello'

export default {
  components: {
    Hello
  },
  ready () {
    $('[data-toggle="tooltip"]').tooltip()
  }
}
</script>

<style lang="sass">
  @import "~assets/scss/app";

  i.fa-folder-o
    margin-right: 10px;
</style>
