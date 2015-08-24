var ViewManager = Backbone.View.extend({
	appEntryPoint : '.page',	

	render : function(){},

	appStageRender : function( data ){
		$(this.appEntryPoint).html( data );
	} 
});