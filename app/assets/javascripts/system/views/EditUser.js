var EditUser = Backbone.View.extend({

	el : '.page',

	tplName : 'EditUser',

	params : {
		'firstname' : '',
		'lastname' : '',
		'age' : ''
	},

	render : function( config ){
		var me = this;
		if( config.id ){
			me.user = new User({id:config.id});
			me.user.fetch({
				success : function( user ){
					me.superRender( user.attributes );
				}
			})
		}else{
			me.superRender( config );
		}
	},

	validate : function(){
		var firstname = this.fields.firstname;
		if( !firstname.val() ){
			firstname.addClass('userinfo-required-field');
			setTimeout(function(){
				firstname.removeClass('userinfo-required-field');
			},4000);
			return false;
		}
	},

	save : function( e ){		
		e.preventDefault();		
		var data = {};		
		$(e.currentTarget).serializeArray().map(function(x){data[x.name] = x.value;});
		if( this.validate() !== false ){
			var user = new User();
			user.save( data, {
				success : function( user ){					
					router.navigate("", {trigger : true});
				}
			});
		};
		return false;
	},

	destroy : function( e ){		
		e.preventDefault();
		this.user.destroy({
			success : function(){
				router.navigate("", {trigger : true});
			}
		});
		return false;
	}

});