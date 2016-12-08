define(['backbone'], function (Backbone) {
	var Router = Backbone.Router.extend({
		  routes: {
		    "crazyKill" : "crazyKill",
		  },
			
		  crazyKill: function() {
			var url = './crazyKill/js/crazyKill.js';
			require([url], function (crazyKill) {
				crazyKill.render();
				crazyKill.downData();
			})
		  }
	});
	
	//这里需要实例化下刚才的路由对象
	var router = new Router();

})