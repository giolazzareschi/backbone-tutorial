class UsersController < ApplicationController
  
  def index
  	users = User.all
  	render :json => users.as_json
  end

  def create  	
  	user = User.new(permit_save)
  	user.save
  	render :json => user.as_json
  end

  def show  	
  	user = User.find(params[:id])  	
  	render :json => user.as_json
  end

  def update  	
  	user = User.find(params[:id])
  	user.update(permit_save)	
  	render :json => user.as_json
  end

  def destroy  	
  	user = User.find(params[:id])
  	user.destroy
  	render :json => true
  end

  private

  	def permit_save
  		params.permit(:firstname,:lastname,:age)
  	end

end
