NewAuthDemo.Views.GistDetail = Backbone.View.extend({
  template : JST["gists/detail"],

  events: {
    "click .fav-unfav": "toggleButtons"
  },

  toggleButtons: function (event) {
    if ($(event.target).attr("data-id") === "favorite") {
      this.favoriteGist();
      $(event.currentTarget).find(".hidden").toggleClass("hidden");
      $(event.target).toggleClass("hidden");
      alert("you clicked favorite!");
    } else {
      this.unfavoriteGist(event);
      $(event.currentTarget).find(".hidden").toggleClass("hidden");
      $(event.target).toggleClass("hidden");
      alert("you clicked unfavorite!");
    }

  },

  favoriteGist: function () {
    // $(event.currentTarget).css("display", "none")
    var newFav = new NewAuthDemo.Models.Favorite({
        gist: this.model
      });

    var that = this;
    newFav.save({}, {
      success: function (result){
        that.favorite = result;
        alert ("Saved!");
      }
    });
  },

  unfavoriteGist: function (event) {
    event.preventDefault();
    //var oldFav = NewAuthDemo.favorites.get($(event.currentTarget).data("id"));
    this.favorite.destroy({
      success: function (){
        alert ("destroyed!");
      },
      error: function (model, response) {
        console.log(model);
        console.log(response);
        alert("error");
      }
    });

  },

  render: function (){
    var renderedContent = this.template({
      gist: this.model
    });
    //if the gist is favorited by the current user, make unfav button visible
    //otherwise, make fav button visible

    if(this.model.favorite()) {
      //make the button to be unfav
      debugger
    } else {
      //make the button to be fav
    }

    this.$el.html(renderedContent);
    return this;
  }

});