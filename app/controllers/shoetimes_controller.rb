class ShoetimesController < ApplicationController

  def index
        shoelist = Shoetime.all
        render json: shoelist
    end

    def show
        shoelist = current_user.shoetimes.find_by(id: params[:user_id])
        if shoelist
            render json: shoelist
            else
            render json: {error: "Shoelist not found"}, status: :not_found
        end
    end

    def create
        shoelist = current_user.shoetimes.create(shoelist_params)
        if shoelist.valid?
            render json: shoelist, status: :ok
        else
            render json: shoelist.errors.full_messages, status: :unprocessable_entity
        end
    end

    
    def destroy
        Shoetime.find(params[:id]).destroy
    end

    private

    def shoelist_params
        params.permit(:shoe_id)
    end
end