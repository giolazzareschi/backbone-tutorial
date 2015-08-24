var Templater;
;(Templater = function( w ){

	this.loadTemplate = function( config ){
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
	};

	return {
		load : this.loadTemplate
	}

})(window);