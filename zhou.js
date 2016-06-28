;$(function(){
	$.getJSON("demo1.json",function(data){
		for(var i=0;i<107;i++){
			if(i==3||i==13||i==23||i==41||i==59||i==60||i==77||i==78||i>7&&i<11||i>17&&i<21||i>35&&i<39||i>54&&i<57||i>72&&i<75||i>90&&i<93){
				$(".content").append('<div class="blue1">'+data[i].p0+
				'<div>'+
					'<strong>'+data[i].p1+'</strong>'+
					'<h4>'+data[i].p2+'</h4>'+
					'<p>'+data[i].p3+'</p>'+
				'</div>'+
				'</div>')
			}else if(i==1||i==2||i==5||i==15||i==11||i==12||i==21||i==22||i==40||i==58||i==76||i==94||i>30&&i<34||i>48&&i<52||i>66&&i<70||i>84&&i<88){
				$(".content").append('<div class="pink1">'+data[i].p0+
				'<div>'+
					'<strong>'+data[i].p1+'</strong>'+
					'<h4>'+data[i].p2+'</h4>'+
					'<p>'+data[i].p3+'</p>'+
					'</div>'+
					'</div>')
			}else if(i==39||i==57||i==75||i==93){
				$(".content").append('<div class="d1">'+data[i].p0+
					'<div>'+
					'<strong>'+data[i].p1+'</strong>'+
					'<h4>'+data[i].p2+'</h4>'+
					'<p>'+data[i].p3+'</p>'+
					'</div>'+
					'</div>')
			}else if(i>5&&i<8||i>15&&i<18||i>33&&i<36||i>51&&i<55||i>69&&i<73||i>87&&i<91){
				$(".content").append('<div class="green1">'+data[i].p0+
					'<div>'+
					'<strong>'+data[i].p1+'</strong>'+
					'<h4>'+data[i].p2+'</h4>'+
					'<p>'+data[i].p3+'</p>'+
					'</div>'+
					'</div>')
			}else if(i>=95){
				$(".content").append('<div class="d17">'+data[i].p0+
					'<div>'+
					'<strong>'+data[i].p1+'</strong>'+
					'<h4>'+data[i].p2+'</h4>'+
					'<p>'+data[i].p3+'</p>'+
					'</div>'+
					'</div>')
			}
			else{
				$(".content").append('<div>'+data[i].p0+
					'<div>'+
					'<strong>'+data[i].p1+'</strong>'+
					'<h4>'+data[i].p2+'</h4>'+
					'<p>'+data[i].p3+'</p>'+
					'</div>'+
					'</div>')
			}
		}
		$(".content>div").css("opacity","0.7");
		$(".content>div").hover(function(){
			
			$(this).css("opacity","1");
		},function(){
			$(this).css("opacity",".7");
			$(".content>div div").css("display","none");
		})
		$(".content>div").each(function(index){
			$(this).click(function(){
			$(this).find("div").css("display","block");
			var k=$(this).find("div").html();
			})
		})
		$(".d17").eq(0).css("margin-left","312px")
		$(".d17").css({"margin-top":"53px","background-color":"#d17dd3"})
	})
});