NewAuthDemo.Models.Favorite = Backbone.Model.extend({
  initialize: function (options) {
    this.gist = options.gist;
  },

  url: function (){
    return "users/" + userId + "/gists/" + this.gist.id + "/favorite";
  }
});