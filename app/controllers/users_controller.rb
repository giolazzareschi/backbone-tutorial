class UsersController < ApplicationController
  
  def index    
    require 'open3'

    result = Open3.capture2('tsc --out /vagrant/myapp/app/assets/javascripts/ztypescript/compiled/classes /vagrant/myapp/app/assets/javascripts/ztypescript/source/classes/HelloDaddy.ts /vagrant/myapp/app/assets/javascripts/ztypescript/source/classes/zHello.ts')
    result = Open3.capture2('tsc --out /vagrant/myapp/app/assets/javascripts/ztypescript/compiled/classes /vagrant/myapp/app/assets/javascripts/ztypescript/source/classes/zHello.ts')
    
    #js = File.read('/vagrant/myapp/app/assets/javascripts/ztypescript/source/classes/zHello.js')    

  	users = User.all
  	render :json => [{'firstname': ENV['TS_APP_ROOT']}]
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
