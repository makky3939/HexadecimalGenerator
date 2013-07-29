var app = (function(){

var gg = 16;
document.onkeydown = function (e){


	if (!e)	e = window.event;

	if(event.keyCode == 49){
		gg = 16;
	}else if(event.keyCode == 50){
		gg = 10;
	}else if(event.keyCode == 51){
		gg = 2;
	}
	
		var str = "";

	for(var i=0;i<10000;i++){
		var hage = Math.floor(Math.random()*255+1).toString(gg);
		str = str+" "+hage;
	}

	//console.log(hage.toString(16));

$("body").html(str);
//console.log(event.keyCode);

};
  
return 0;

}());

