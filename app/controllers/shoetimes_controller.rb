class ShoetimesController < ApplicationController
        
  def index
        collectionlist = current_user.shoetimes
        render json: collectionlist
    end

    def show
        collectionlist = current_user.shoetimes.find_by(id: params[:user_id])
        if collectionlist
            render json: collectionlist
            else
            render json: {error: "Collectionlist not found"}, status: :not_found
        end
    end

    def create
      
        collectionlist = Shoetime.create(collectionlist_params)
        
        if collectionlist.valid?
            render json: collectionlist, status: :ok
        else
            render json: collectionlist.errors.full_messages, status: :unprocessable_entity
        end
    end

    
    def destroy
        Shoetime.find(params[:id]).destroy
    end

    private

    def collectionlist_params
        params.permit(:shoe_id, :user_id)
    end
end