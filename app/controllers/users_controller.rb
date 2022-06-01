class UsersController < ApplicationController
    skip_before_action :authorized, only: :create



    def show
        current_user = find_user
        render json: current_user, status: :ok
    end

    def create 
        render json: User.create!(user_params), status: :created
        # This is where the user account should be created!
        
    end

    def update
        # User info not updating (Rendered ActiveModel Serializer Null with Hash) (took out bang operator!)
        current_user = find_user
        current_user.update!(user_params)
        render json: current_user, status: :ok
    end

    def destroy 
        current_user = find_user
        current_user.destroy
        head :no_content
    end


    # Login and Logout needs to go in Sessions controller
    #secret page that you can only see if you're logged in
    private

    def find_user
        user = User.find(session[:user_id])
    end

    def user_params
        params.permit(:password, :email, :age, :name, :credit_score)
        # password digest?
    end

end
