var UserList = ViewManager.extend({
	el : '.page',

	render : function(){		
		var users = new Users(), me = this;
		users.fetch({
			success : function( users ){				
				var tpl = new Templater(), 
					html =  tpl.load({tplName : 'UserList', data : users.models});

				me.appStageRender( html );
			}
		});
	}
});