module.exports = function (router) {
  router.beforeEach(function (transition) {
    if (transition.to.auth) {
      //
    }

    transition.next()
  })
}
