class Api::UsersController < ApplicationController
  def create
    # debugger
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.messages, status: 422
    end
  end

  # def show
  #   # show the user's details (just their username)
  #   if current_user.nil?
  #     # let them log in
  #     render json: @user
  #     return
  #   end

  #   @user = current_user
  #   render :show
  # end

  protected
  def user_params
    self.params.require(:user).permit(:username, :password)
  end
end
