function getXY(ang) {
    var hd=Math.PI/180*ang;
    var x=Math.sin(hd)*r;
    var y=Math.cos(hd)*r;
    return {x:-x,y:-y};
}
var lis=document.getElementsByTagName('ul')[0].getElementsByTagName('li');
var menu=document.getElementsByClassName('menu')[0];
// console.log(lis)
var r=180;
var Ang=90/(lis.length-1);

var flag=false;
menu.onclick=function () {
    if(!flag){
        flag=true;
        for(var i=0;i<lis.length;i++){
            var w=getXY(i*Ang);
            console.log(w)
            lis[i].style.transform='translate('+w.x+'px,'+w.y+'px)';
            lis[i].style.transition='transform .3s '+i*100+'ms';
        }
    }else{
        flag=false;
        for(var i=0;i<lis.length;i++){
            var w=getXY(i*Ang);
            lis[i].style.transform='translate(0,0)'
            lis[i].style.transition='transform .3s '+(lis.length-i)*100+'ms';
        }
    }

}