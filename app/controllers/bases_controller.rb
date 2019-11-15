class BasesController < ApplicationController

    def set_param
        params.require(:popultion, :happiness, :waste_management, :solar_power, :nuclear_power,  :material_production, :food_production, :housing, :luxury, :misc)
    end

    def index
        @bases = Base.all
        render json: @bases
    end

    def show
        @base = Base.find(params[:id])
        render json: @base
    end

    def update
        bases = Base.find(params[:id])

        bases.update(set_param)
        render :json => bases
    end
end
