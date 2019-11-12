class MatDistributionsController < ApplicationController
  def index
    @mat_dists = MatDistribution.all
    render json: @mat_dists
  end

  def show
    @mat_dist = MatDistribution.find(params[:id])
    render json: @mat_dist
  end
end
