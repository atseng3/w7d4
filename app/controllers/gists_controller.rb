class GistsController < ApplicationController
  before_filter :require_current_user!
  def index
    @gists = Gist.includes(:favorite).all

    render :json => @gists, :include => :favorite
  end

end
