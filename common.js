//点击菜单换页面
var menu_lis = document.querySelectorAll('#menu_bar li');
$(menu_lis).on('touchstart',function(){
	for (var i=0;i < $(menu_lis).length;i++) {
		menu_lis[i].style.background = 'url(./img/'+(i+1)+'.png) no-repeat';
		menu_lis[i].style.backgroundPosition = 'center 25%';
		menu_lis[i].style.backgroundSize = 'auto 2rem';
	}
	
	$(this).css({
		'background':'url(./img/' + ($(this).index()+1) + '-1.png) no-repeat',
		'background-position':'center 25%',
		'background-size':'auto 2rem'
	});
})
