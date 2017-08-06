// JavaScript Document
$(document).ready(function(e) {
	var intDiff=parseInt(20000);
function timer(intDiff){
	window.setInterval(function(){
		var day=0,
		hour=0,
		minute=0,
		second=0;
		if(intDiff>0){
			day=Math.floor(intDiff/(60*60*24));
			hour=Math.floor(intDiff/(60*60))-(day*24);
			minute=Math.floor(intDiff/60)-(day*24*60)-(hour*60);
			second=Math.floor(intDiff)-(day*24*60*60)-(hour*60*60)-(minute*60);
		}
		if(minute<=9) minute='0'+minute;
		if(second<=9) second='0'+second;
		
		$(".timeHour").html(hour);
		$(".timeMinute").html(minute);
		$(".timeSeconds").html(second);
		
		intDiff--;
	},1000);
}
$(function(){
	timer(intDiff);
});
	
	$(".outer_image").hover(function(){
	$(this).children().children().css("visibility","visible");
	},
	function(){
		$(this).children().children().css("visibility","hidden");
		
	}
	);
	
	var i;
	$(".right_menu li").hover(function(){
		if($(this).index()>=2){
			i=$(this).index()-1;
			$(".aside"+i).css("visibility","visible");
			}
		
	},
	function(){
		$(".aside"+i).css("visibility","hidden");
	});
	
	
	
	$(".last_ul li").hover(function(){
		if($(this).index()==0){
	$(".erweima").css("visibility","visible").hover(function(){
		$(this).css("visibility","visible");
	},
	function(){
		$(this).css("visibility","visible");
		});;
		}
	},function(){
		$(".erweima").css("visibility","hidden");
		
		});
		
		
	$(".total div").hover(function(){
		$(this).children(":last").css("display","block");
		$(this).children(":first").css("display","block");
		
		},
		function(){
			$(this).children(":last").css("display","none");
			$(this).children(":first").css("display","block");
			
			
		
		
});
});