define(['backbone'],function(Backbone){
	var Router = Backbone.Router.extend({
		routes : {
			'index' : 'index',
			'supermarket' : 'supermarket',
			'shoppingCar' : 'shoppingCar',
			'my' : 'my',
			"*action" : "defaultAction"
		},
		
		index : function(){
			var url = './index/js/index.js';
			var swiper = './index/js/swiper.min.js';
			var kill = './index/js/index_router.js';
			require([url,swiper,kill],function(index){
				index.downData();
				index.render();
			})
		},
		
		my : function(){
			var url = './my/js/my.js';
			require([url],function(my){
				my.render();
			})
		},
		
		shoppingCar : function(){
			var url = './shoppingCar/js/car.js';
			require([url],function(shoppingCar){
				shoppingCar.render();
				shoppingCar.shoppingFn();
			})
		},
		
		supermarket : function(){
			var url = './supermarket/js/supermarket.js';
			require([url],function(supermarket){
				supermarket.render();
				supermarket.downData();
			})
		},
		
		defaultAction : function () {
		  	location.hash = "index";
		}
	})
	
	var router = new Router();
})

