define(['text!../index.html','$css!../css/index.css','$css!../css/swiper.min.css'],function(html){
	function render(){
		$('#container').html(html);
	}
	
	function downData(){
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
			async:true,
			success : indexFn
		});
		
		function indexFn(data){
			
			// 轮播图
			var dataJson = JSON.parse(data);
			var dataObj = dataJson.data;
			var slideObj = dataObj.slide;
			
			var str1 = '';
			for (var slide of slideObj) {
				str1 += `<div class="swiper-slide"><img src="${slide.activity.img}" /></div>`;
			
			}
			
			$('.swiper-wrapper').html(str1);
			
			var dotDiv = $('<div></div>').addClass('swiper-pagination');
			$('.swiper-wrapper').after(dotDiv);
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				autoplay: 2500,
				autoplayDisableOnInteraction:false,
				loop: true
			});
			$('.swiper-pagination').css('text-align','right');

			
			// menu菜单
			var menuObj = dataObj.menu;
//			for (var j =0;j < menuObj.length;j++) {
//				var menuImg = menuObj[j].activity.img;
//				var menuName = menuObj[j].activity.name;
//				var $menuImg = $('<img />').attr('src',menuImg);
//				var $menuLi = $('<li></li>').html(menuName);
//				$('#subheading').append($menuLi);
//				$($menuLi).prepend($menuImg);
//				
//				if (menuName == '疯狂秒杀') {
//					var $aEle = $("<a href='#crazyKill'></a>");
//					$($menuLi).wrapInner($aEle);
//				}
//			}
			
			
			var str = '';
			for (var data of menuObj) {
				
				// ES6的模板字符串
				if (data.activity.name == '疯狂秒杀'){
					str += `<li>
							<a href="#crazyKill"><img src="${data.activity.img}"/>
							${data.activity.name}</a>
						</li>`;
				}else{
					str += `<li>
								<img src="${data.activity.img}"/>${data.activity.name}
						</li>`;
				}


				// 字符串拼接
//				str += '<li>';
//				if (data.activity.name == '疯狂秒杀') {
//					str += '<a href=#crazyKill><img src='+data.activity.img+' />'+data.activity.name+'</a>';
//				}else{
//					str += '<img src='+data.activity.img+' />'+data.activity.name;
//				}
//				str += '</li>'
			}
			
			
			$('#subheading').html(str);
		}
	}
	
	return {
		render : render,
		downData : downData
	}
})