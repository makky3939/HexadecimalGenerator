var app = (function(){

function _init() {

document.onkeydown = function (e){

if (!e)	e = window.event;
var str = "";

for(var i=0;i<10000;i++){
var hage = Math.floor(Math.random()*255+1).toString(16);
str = str+" "+hage;
}
console.log(hage.toString(16));

$("body").html(str);

};
}

_init();
  
return 0;

}());

