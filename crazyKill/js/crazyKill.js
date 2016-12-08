define(['text!../crazyKill.html','$css!../css/crazyKill.css'],function(html) {
	
	//渲染页面
	function render () {
		$("body").html(html);
		
	}
	
	function downData(){
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apimiaosha.php",
			async:true,
			success : killFn
		});
		
		function killFn(data){
			var dataJson = JSON.parse(data);
			var product = dataJson.product;
			for (var i=0;i<product.length;i++) {
				var img = product[i].img;	//图片
				var name = product[i].name;		//标题
				var specifics = product[i].specifics;	//数量
				var price = product[i].price;	//实际价钱
				var market_price = product[i].market_price;		//原价
				var enable = product[i].enable;		//布尔值
				var btnText = product[i].btnText;	//	是否可抢
				
				var $seckill_div = $('<div></div>').addClass('seckill_div');
				var $imgDiv = $("<div class='killPic'></div>").css({
					'background': 'url('+img+') no-repeat',
					'background-size': '100%'
				})	
				var $kill = $('<div></div>').addClass('kill');
				var $timuP = $('<p></p>').addClass('timu').html(name);
				var $numP = $('<p></p>').addClass('num').html(specifics);
				var $moneyP = $('<p></p>').addClass('money').html(' / 原价：'+market_price+'元');
				var $moneySpan = $('<span></span>').html('￥');
				var $moneyEm = $('<em></em>').html(price);
				var $divEle = $('<div></div>').html(btnText);
				if (enable) {
					$($divEle).css('background','#FF602C');
				}else{
					$($divEle).css('background','#aaa');
				}
				
				$('#seckill').append($seckill_div);
				$($seckill_div).append($imgDiv);
				$($seckill_div).append($kill);
				$($kill).append($timuP);
				$($kill).append($numP);
				$($kill).append($moneyP);
				$($moneyP).prepend($moneySpan);
				$($moneySpan).append($moneyEm);
				$($kill).append($divEle);
				
			}
		}
	
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php",
			async:true,
			success : hotSetFn
		});
		
		function hotSetFn(data){
			var dataJson = JSON.parse(data);
			var dataObj = dataJson.data;
			
			for (var j = 0;j < dataObj.length;j++) {
				var img = dataObj[j].img;	// 图片
				var name = dataObj[j].name;		//标题
				var specifics = dataObj[j].specifics;	//重量
				var market_price = dataObj[j].market_price;		//原价
				var price = dataObj[j].price;	// 实际价钱
				var pm_desc = dataObj[j].pm_desc;	//买一赠一
				
				var $li = $('<li></li>');
				var $imgDiv = $('<div></div>').addClass('hotFoodPics').css({
					'background':'url('+img+')',
					'background-size': '100% 100%'
				});
				if (pm_desc != '') {
					var $zengDiv = $("<div></div>").addClass('zeng').html(pm_desc);
				}
				var $message = $('<div></div>').addClass('message');
				var $titleP = $('<p></p>').addClass('foodTitle').html(name);
				var $wightP = $('<p></p>').addClass('foodNum').html(specifics);
				var $foodPricesP = $('<p></p>').addClass('foodPrices').html('￥'+price);
				var $foodPricesEm = $("<em></em>").html('￥'+market_price);
				var $addDiv = $('<div></div>').html('+');
			
				$('#hotFood ul').append($li);
				$($li).append($imgDiv);
				$($imgDiv).append($zengDiv);
				$($li).append($message);
				$($message).append($titleP);
				$($message).append($wightP);
				$($message).append($foodPricesP);
				$($foodPricesP).append($foodPricesEm);
				$($message).append($addDiv);
			}
		}
	}
	
	return {
		render : render,
		downData : downData 
	}
});