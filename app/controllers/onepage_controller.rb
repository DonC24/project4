class OnepageController < ApplicationController
  def index
    email = current_user.email
    p email
    domain = email.split("@").last
    p domain
    @users = User.where("email like ? ", "%#{domain}%")

  end
end