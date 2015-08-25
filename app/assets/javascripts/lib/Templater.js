_.extend(Backbone.View.prototype, {

	el : '.page',

	appEntryPoint : '.page',

	initialize : function(){
		this.super = this.constructor.__super__;
		this.template = this.hbs({tplName: this.tplName});
	},

	loadTemplate : function( config ){
		var tpl = "";
		$.ajax({
			url  : '/assets/ztemplates/' + config.tplName + '.html',
			tpye : 'GET',
			dataType : 'html',
			async   : false,
			success : function( data ){
				tpl = data;
			}
		});

		return _.template( tpl )({data: config.data});
	},

	hbs : function( config ){
		return HandlebarsTemplates[ config.tplName ];
	},

	render : function( config ){
		this.appStageRender( this.template(!config ? {} : config) );
	},

	events : {
		'submit form' : 'save',
		'click button.destroy' : 'destroy'
	},

	appStageRender : function( data ){		
		$(this.appEntryPoint).html( data );
		var params = this.params;
		this.fields = {};
		for(var p in params){
			this.fields[ p ] = this.$el.find('[name='+ p + ']');
		};
	},

	stopsubmit : function(e){
		e.preventDefault();
	},

	superRender : function( config ){		
		this.super.render.call(this, config);
	}
});