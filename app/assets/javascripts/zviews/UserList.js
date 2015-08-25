var UserList = Backbone.View.extend({

	tplName : 'UserList',

	params : {},

	render : function(){
		var users = new Users(), me = this;
		users.fetch({
			success : function( users ){
				me.superRender({users: users.models});
			}
		});
	}

});