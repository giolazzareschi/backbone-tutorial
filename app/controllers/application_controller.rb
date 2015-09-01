class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  before_action :authenticate_user!

  protect_from_forgery with: :exception

  layout :define_layout

  protected
  	def define_layout
  		if devise_controller?
  			"outside"
  		else
  			"application"
  		end
  	end
end
