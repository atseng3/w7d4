class FavoritesController < ApplicationController
  def index
    @favorites = Favorite.all
    render :json => @favorites
  end

  def create
    @favorite = Favorite.new(
                    user_id: params[:user_id],
                    gist_id: params[:gist_id])
    if @favorite.save
      render :json => @favorite
    else
      render :json => @favorite.errors.full_messages,
             :status => :unprocessable_entity
    end
  end

  def destroy
    @favorite = Favorite.find_by_user_id_and_gist_id(params[:user_id], params[:gist_id])
    @favorite.destroy
    render :json => {}
  end
end
