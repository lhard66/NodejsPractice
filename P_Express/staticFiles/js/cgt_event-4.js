// JavaScript Document
function position(){
	 var winWidth=$(window).width();
	 var positionpVal=((winWidth-1100)/2)-49;
	 $('.goTop').css('right',positionpVal);
	
}

$(function(){	 

	 position();
	 $(window).resize(function(){
		position();	 
	 });
	 //返回顶部
	 $(window).scroll(function(){
		 var scrollTop=$(window).scrollTop();
		 if(scrollTop>=800){
			 $('.goTop').fadeIn(500);
			}
		 else{
			 $('.goTop').fadeOut(500);
			}
	 });
	 $('.goTop').click(function(){
		$('html,body').animate({scrollTop:0},500);
		
	 });
 
	 	 
	//滚动实时加载动画  
	animate();
	var s=$(window).scrollTop();
	if(s==0){
		$('html,body').animate({scrollTop:s+1});
	}
	else{
		$('html,body').animate({scrollTop:s-1});
	}	
	
	
	
});


//监听动画
function animate(){
	$(window).scroll(function(){
		var adObj = $("[name='am']");
		adObj.each(function(){
			var p=$(this).offset().top+50;
			var w=$(window).height();
			var s=$(window).scrollTop();
			var _p=p+w+$(this).height();
			var val=w+s;
			if(val>p&&val<_p){
				$(this).addClass('animation');
				$(this).css("visibility","visible");
			}
			else{
				$(this).removeClass('animation');
				$(this).css("visibility","hidden");
			}
		});
		
	});
}
