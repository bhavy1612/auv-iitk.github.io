var page=["#Faculty_Advisors","#a"];
function animate2(x,navhover){
		//$('#Faculty_Advisors').css({"transform":"rotateY(180deg)","transition": "all 0.6s ease-in 0.2s"});
		if(x==page[0]){
			return;
		}
		else{
			$(navhover).css({"backgroundColor":"#4dc9ff","color":"black"});
			$(page[1]).css({"backgroundColor":"rgba(17, 38, 100,1)","color":"white"});
			//$(x).css({"display":"none"});
			$('.desc').fadeTo(100,'0');
			$(x).animate({top:'30%',height: '0.3%'},"200");
			$(page[0]).animate({top:'30%',height: '0.3%'},"200");
			 $(page[0]).delay().queue(function(next){$(this).css({"backgroundColor":"rgba(17, 38, 100,1)"});next();});
			//$('.menuoptions').css({"display":"none"});
			 $(x).animate({left:'40%',width: '20%'},200);
			 $(page[0]).animate({left:'40%',width: '20%'},200);
			 $("img,#facultyadvisors,#softteam,#mechteam,#electteam,#bussteam,.container1").delay().fadeOut();
			 //$("#div4").css({"width":"0","left":"40%"});
			 //$('#div4').css({'backgroundColor':' #FFD500'});
			 //$(x).delay(1000);
			 //$(page).delay(1000);
			 $(page[0]).delay().queue(function(next){$(this).css({"width":"0","zIndex":"20","backgroundColor":"#4dc9ff"});next();});
			 $(page[0]).animate({width:"20%"},300);
			 $(page[0]).delay().queue(function(next){$(this).css({"display":"none"});next();});
			 //$("#div4").animate({width: '+=20%'},"1000");
			 //$(x).delay(10).queue(function(next){$(this).css({'backgroundColor':'#f2f2f2'}); next();}); 
			$('.desc').delay(1200).fadeTo(100,'1');
			$(x).queue(function(next){$(x).css({'display':'block','zIndex':'10'}); next();}); 
			 //$('#div').delay(100);
			// $('#div1').delay(10).queue(function(next){$(this).css({'backgroundColor':'white'}); next();}); 
			//  $('#div4').delay(10).queue(function(next){$(this).css({'backgroundColor':''}); next();}); 
			 $(x).delay(300).animate({left:'15%',width: '72%'},200);
			 $("img,#facultyadvisors,#softteam,#mechteam,#electteam,#bussteam,.container1").delay(600).fadeIn();
			 $(x).animate({top:'11.8%',height: '40%'},200); 
			 $(page[0]).delay(200).queue(function(next){$(this).css({"backgroundColor":"rgba(17, 38, 100,1)"});next();});
			page=[x,navhover]; 
		}
		
		 
}
