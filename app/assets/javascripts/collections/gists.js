NewAuthDemo.Collections.Gists = Backbone.Collection.extend({
  model: NewAuthDemo.Models.Gist,
  url: function () {
    return "/users/" + userId + "/gists";
  }
});