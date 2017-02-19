 var lis=document.getElementsByTagName("li");
 var menu=document.getElementsByClassName("menu")[0];
 var r=180;
 var Ang=360/(lis.length);
 function getXY(ang){
 	var hd=Math.PI/180*ang;
 	var x=Math.sin(hd)*r;
 	var y=Math.cos(hd)*r;
 	return {x:-x,y:-y};
 }
 var flag=false;
 menu.onclick=function(){

 	if (!flag) {
 		flag=true;
 		for (var i = 0; i < lis.length; i++) {
 			menu.style.transform="rotate(360deg)";
			var w=getXY(i*Ang)
			lis[i].style.transform="rotate(360deg) translate("+w.x+"px,"+w.y+"px)";
			lis[i].style.transition="transform .3s "+i*100+"ms";	
		};
 	}else{
 		flag=false;
 		for (var i = 0; i < lis.length; i++) {
 			menu.style.transform="rotate(0deg)";
			var w=getXY(i*Ang)
			lis[i].style.transform="rotate(0deg) translate(0,0)"
			lis[i].style.transition="transform .3s "+(lis.length-i)*100+"ms";
		};
 	}
 	 
}
for (var j = 0; j < lis.length; j++) {
	lis[j].onclick=function(){
		flag=false;
		for (var i = 0; i < lis.length; i++) {
 			menu.style.transform="rotate(0deg)";
			var w=getXY(i*Ang)
			lis[i].style.transform="rotate(0deg) translate(0,0)"
			lis[i].style.transition="transform .3s "+(lis.length-i)*100+"ms";
		};
	}
};