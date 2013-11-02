NewAuthDemo.Views.GistsIndex = Backbone.View.extend({
  template : JST["gists/index"],

  render: function (){
    var renderedContent = this.template({
      gists: this.collection
    });
    this.$el.html(renderedContent);

    //loop through all gists
    //call the render function on each gist
    //add the info to the el
    var that = this;
    this.collection.each(function (gist){
      var gistView = new NewAuthDemo.Views.GistDetail({
        model: gist
      });
      // debugger
      that.$el.append(gistView.render().$el);
    });


    return this;
  }

});