NewAuthDemo.Models.Gist = Backbone.Model.extend({
  urlRoot: "/gists",

  favorite: function () {
    if (!this._favorite) {
      this._favorite = new NewAuthDemo.Models.Favorite({
        gist: this
      });
    }
    return this._favorite;
  },

  isFavorited: function () {

  },

  // { ... favorite: {}}

  parse: function (serverAttributes, options) {
    this.favorite().set(serverAttributes.favorite);
    delete serverAttributes.favorite;
    return serverAttributes;
  }


  // favorite: function (){
  //   if(!this._favorite){
  //     this._favorite = new NewAuthDemo.Models.Favorite({
  //       // user_id: userId,
  //       gist: this
  //     });
  //   }
  //   return this._favorite;
  // }
  //
  // toJSON: function (){
  //   var json = _.extend({}, this.attributes);
  //   json.favorite = this.favorite().toJSON();
  //   return json;
  // }
});