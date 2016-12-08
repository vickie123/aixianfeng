define(['text!../supermarket.html','$css!../css/supermarket.css'],function(html){
	function render(){
		$('#container').html(html);
	}
	
	function downData(){
		function Ajax(urlStr,fn){
			$.ajax({
				type:"get",
				url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?"+urlStr,
				async:true,
				success:fn
			});
		}
		
		Ajax('category=热销榜',marketFn);
		function marketFn(data){
			var dataJson = JSON.parse(data);
			var dataObj = dataJson.data;
			for (var i=0;i<dataObj.length;i++) {
				var img = dataObj[i].img;	// 图片
				var name = dataObj[i].name;		// 名字
				var pm_desc = dataObj[i].pm_desc;	// 买一赠一
				var specifics = dataObj[i].specifics;	// 重量
				var price = dataObj[i].price;	// 实际价钱
				var market_price = dataObj[i].market_price;		// 原价
				
				var $li = $('<li></li>');
				var $imgDiv = $('<div></div>').addClass('imgDiv');
				$($imgDiv).css({
					'background':'url('+img+') no-repeat',
					'background-position': 'center',
					'background-size': '100%'
				})	
				var $xinxiDiv = $('<div></div>').addClass('xinxi');
				var $titleDiv = $('<div></div>').addClass('topic').html(name); 
				var $divEles = $('<div></div>').addClass('selec');
				var $jingxuan = $('<span></span>').addClass('choiceness').html('精选');
				var $present = $('<span></span>').addClass('present').html(pm_desc);
				var $weight = $('<div></div>').addClass('weight').html(specifics);
				var $price = $('<div></div>').addClass('price').html('￥'+price);
				var $emEle = $('<em></em>').html('￥'+market_price);
				
				// +
				var $addDiv = $('<div></div>').addClass('add');
				var $addPic = $('<div></div>');
				
				$('#bigList ul').append($li);
				$($li).append($imgDiv);
				$($li).append($xinxiDiv);
				$($xinxiDiv).append($titleDiv);
				$($xinxiDiv).append($divEles);
				$($divEles).append($jingxuan);
				if (pm_desc != '') {
					$($divEles).append($present);
				}
				$($xinxiDiv).append($weight);
				$($xinxiDiv).append($price);
				$($price).append($emEle);
				$($xinxiDiv).append($addDiv);
				$($addDiv).append($addPic);
				
			}
			
		}
		var $sidebarLi = $('#sidebar ul li');
		$($sidebarLi).on('touchstart',function(){
			$('#bigList ul').html('');
			for (var j=0;j<$sidebarLi.length;j++) {
				$($sidebarLi).find('b').removeClass('sign');
			}
			$(this).find('b').addClass('sign');
			
			if ($(this).index() == 0) {
				$('#bigList ul').html('');
				Ajax('category=热销榜',marketFn);
			}else if($(this).index() == 1){
				$('#bigList ul').html('');
				Ajax('category=天天特价',marketFn);
			}else if ($(this).index() == 2) {
				$('#bigList ul').html('');
				Ajax('category=优选水果',marketFn);
			}else if($(this).index() == 3){
				$('#bigList ul').html('');
				Ajax('category=牛奶面包',marketFn);
			}
		})
	}
	
	return {
		render : render,
		downData : downData
	}
})