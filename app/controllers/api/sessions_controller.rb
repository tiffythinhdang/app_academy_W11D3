class Api::SessionsController < ApplicationController
  def create
    # signs a user in
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user.nil?
      # no user with the given name!
      @errors = ["Invalid username or password"]
      render json: @errors, status: 422
    else
      # sign the user in
      log_in!(@user)
      render :show
    end
  end

  def destroy
    # sign a user out
    log_out!
    render json: {}
  end
end
