define(['text!../my.html','$css!../css/my.css'],function(html){
	function render(){
		$("#container").html(html);
	}
	
	return {
		render : render
	}
})