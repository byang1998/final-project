class ShoesController < ApplicationController
    def index
        shoes = Shoe.all
        render json: shoes
    end

    def show
        shoe = Shoe.find_by(id: params[:id])
        if shoe
        render json: shoe
        else
        render json: {error: "Shoe not found"}, status: :not_found
        end
    end

    def create
        shoe = Shoe.create(shoe_params)
        if shoe.valid?
            render json: shoe, status: :ok
        else
            render json: shoe.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        shoe = Shoe.find_by(id: params[:id])
        if shoe.update(rating: params[:rating])
            render json: event, status: :ok
        else
          render json: event.errors, status: :unprocessable_entity
        end
    end

    def destroy
        Shoe.find(params[:id]).destroy
    end

    private

    def shoe_params
        params.permit(:title, :image, :desc, :price)
    end

end