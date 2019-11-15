class ColoniesController < ApplicationController

  def set_params
    params.fetch(:colony, {}).permit(:name, :population, :happiness, :waste_management, :solar_power, :nuclear_power, :material_production, :food_production, :housing, :luxury, :misc)
end


def update
  base = Colony.find(1)

  base.update(set_params)
  render :json => base
end


  def index
    @bases = Colony.all
    render json: @bases
  end

  def show
    @base = Colony.find(params[:id])
    render json: @base
  end
end
