NewAuthDemo.AppRouter = Backbone.Router.extend({
  routes: {
   "": "showGistsIndex"
  },

  showGistsIndex: function () {
    var indexView = new NewAuthDemo.Views.GistsIndex({
      collection: NewAuthDemo.gists
    });

    $(".content").html(indexView.render().$el)
  }
});