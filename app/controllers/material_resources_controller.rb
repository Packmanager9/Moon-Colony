class MaterialResourcesController < ApplicationController
  def index
    @mat = MaterialResource.all
    render json: @mat
  end
end
