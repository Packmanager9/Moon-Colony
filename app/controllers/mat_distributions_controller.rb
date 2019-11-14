class MatDistributionsController < ApplicationController

    def set_param
        params.require(:mat_distribution).permit(:amount)
    end

    def index
        @mat_dists = MatDistribution.all
        render json: @mat_dists
    end

    def show
        @mat_dist = MatDistribution.find(params[:id])
        render json: @mat_dist
    end

    def update
        mat_dist = MatDistribution.find(params[:id])

        mat_dist.update(set_param)
        render :json => mat_dist
    end
end
