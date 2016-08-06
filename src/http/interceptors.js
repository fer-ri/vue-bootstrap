module.exports = [
  {
    request: function (request) {
      return request
    },

    response: function (response) {
      if ([400, 401].find(x => response.status === x)) {
        //
      }

      if (response.status === 500) {
        //
      }

      return response
    }
  }
]
