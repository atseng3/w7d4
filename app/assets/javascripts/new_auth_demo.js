window.NewAuthDemo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    NewAuthDemo.gists = new NewAuthDemo.Collections.Gists();
    NewAuthDemo.gists.fetch({
      success: function () {
        new NewAuthDemo.AppRouter();
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  NewAuthDemo.initialize();
});
