require.config({
	paths : {
		'jquery' : './lib/jquery',
		'$css' : './lib/css',
		'text' : './lib/text',
		'underscore' : './lib/underscore',
		'backbone' : './lib/backbone',
		'router' : './router'
	}
});

require(['jquery','backbone','router'],function($,Backbone){
	
	Backbone.history.start();
	
})
