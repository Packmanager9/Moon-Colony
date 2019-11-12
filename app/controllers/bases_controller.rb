class BasesController < ApplicationController
  def index
    @bases = Base.all
    render json: @bases
  end

  def show
    @base = Base.find(params[:id])
    render json: @base
  end
end
