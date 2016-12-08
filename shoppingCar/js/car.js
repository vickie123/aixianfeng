define(['text!../shoppingCar.html','$css!../css/shoppingCar.css'],function(html){
	function render(){
		$('#container').html(html);
	}
	
	function shoppingFn() {
	var all = document.querySelector('.all');
	var allImg = document.querySelector('.all img');
	var selectImg = document.querySelectorAll('.selectImg');
	var prices = document.querySelectorAll('.priceSpan');
	var moneyAll = document.querySelector('.money');
	var confirm = document.querySelector('#confirm');
	
	var footListLi = document.querySelectorAll('#footList li');
	
	
	var flag = false,
		sum = 0;
	all.addEventListener('touchstart', function() {
		//全选按钮
		if(!flag) {
			for(var i = 0; i < selectImg.length; i++) {
				var count = Number($('.number').html());
				allImg.src = './shoppingCar/img/下载-3.png';
				selectImg[i].src = './shoppingCar/img/下载-3.png';
				confirm.style.background = '#ffd600';

				moneyAll.innerHTML = parseFloat(cost(count)).toFixed(1);
				confirm.innerHTML = '选好了';
				flag = true;
			}
		} else {
			for(var k = 0; k < selectImg.length; k++) {
				allImg.src = './shoppingCar/img/下载-4.png';
				selectImg[k].src = './shoppingCar/img/下载-4.png';
				confirm.style.background = 'gray';
				flag = false;
				moneyAll.innerHTML = '0';
				confirm.innerHTML = '满￥0起送';
			}
		}
	});

	// 全选后总计的价格函数
	function cost(value) {
		var pricesArr = [],
			sum = 0;
			
		var zongji = Number(moneyAll.innerHTML);
		for(var j = 0; j < prices.length; j++) {
			pricesArr.push(prices[j].innerHTML);
		}
		for(var p of pricesArr) {
			sum += Number(p) * value;
		}
		return sum;
	}
	
	// 单选按钮
	var flag01 = false;
	$(selectImg).on('touchstart', function() {
		if(!flag01) {
			
			var count = Number($(this).parent().parent().find('.count').children('.number').html());
			this.src = './shoppingCar/img/下载-3.png';
			var price = $(this).parent().parent().find('.foot_price').find('.priceSpan').html();
			
			moneyAll.innerHTML = parseFloat(cost(count)).toFixed(1);
			flag01 = true;
		} else {
			this.src = './shoppingCar/img/下载-4.png';
			allImg.src = './shoppingCar/img/下载-4.png';
			flag01 = false;
			moneyAll.innerHTML = '0';
		}
	})

	// + -
	var plus = document.querySelectorAll('.plus');
	var subtract = document.querySelectorAll('.subtract');
	$(plus).on('touchstart', function() {
	var num = Number($('.number').html());
		var count = Number($(this).prev().html());
		var price = $(this).parent().parent().find('.foot_price').find('.priceSpan').html();
		count++;
		$(this).prev().html(count);
		moneyAll.innerHTML = parseFloat(count*price).toFixed(1);
		$(this).parent().parent().children('.select').children().attr('src', './shoppingCar/img/下载-3.png');
		confirm.style.background = '#ffd600';
		confirm.innerHTML = '选好了';
	})
	$(subtract).on('touchstart', function() {
		var zongji = Number(moneyAll.innerHTML);
		var count = Number($(this).next().html());
		var price = $(this).parent().parent().find('.foot_price').find('.priceSpan').html();
		count--;
		$(this).next().html(count);
		moneyAll.innerHTML = parseFloat(count*price).toFixed(1);
		if(count < 1) {
			$(this).parent().parent().css('display', 'none');
		}
	})
}

	
	return {
		render:render,
		shoppingFn:shoppingFn
	}
})
