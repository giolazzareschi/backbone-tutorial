// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery2
//= require jquery_ujs
//= require turbolinks
//= require handlebars.runtime
//= require_directory ./lib
//= require_directory ./zviews
//= require_directory ./zcollections
//= require_tree .

;(function( window ){
	jQuery(document).ready(function( $ ){

		var Router = Backbone.Router.extend({
			routes : {
				'' : 'home',
				'new' : 'editUser',
				'edit/:id' : 'editUser'
			}
		});

		window.router = new Router();

		var userList = new UserList();		
		router.on('route:home', function(){
			userList.render({});
		});

		var editUser = new EditUser();		
		router.on('route:editUser', function( id ){		
			editUser.render({id: id});
		});

		Backbone.history.start();

	});

})(window);