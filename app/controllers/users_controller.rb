class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]


    def show
        current_user = User.find(session[:user_id])
        render json: current_user, status: :ok
    end

    def create 
        render json: User.create!(user_params), status: :created
        # This is where the user account should be created!
        
    end

    def update
        user = User.find(session[:user_id])
        user.update!(user_params)
        render json: user, status: :ok
    end


    # Login and Logout needs to go in Sessions controller
    #secret page that you can only see if you're logged in
    private 

    def user_params
        params.permit(:password, :email, :age, :name, :credit_score)
        # password digest?
    end

end
