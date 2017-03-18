console.log('Loaded!');
var img=document.getElementById('nn');
var margin=0;
function moveRight(){
    margin=margin+10;
    img.style.margin=margin+'px'; 
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
}