class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    before_action :authorized

    # def current_user
    #     User.find_by(id: session[:user_id])
    # end
    
    def authorized
        # debugger
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    private

    def render_unprocessable_entity invalid
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found invalid 
        render json: { error: "#{invalid.model} not found"}, status: :not_found
    end

end
