//= require jquery2
//= require jquery_ujs
//= require turbolinks
//= require handlebars.runtime
//= require_directory ./lib
//= require_directory ./dev
//= require_tree .

;(function( window ){
	jQuery(document).ready(function( $ ){
		$(window).on('load',function(){

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
	});
})(window);