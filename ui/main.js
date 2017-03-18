console.log('Loaded!');
var img=document.getElementById('nn');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px'; 
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
}

var button=document.getElementById("b1");
button.onclick=function(){
//Create Request Object
var request=new XmlHttpRequest();
 //capture value
 request.onreadystatechange=function(){
     if(request.readystate==XmlRequest.DONE){
         if(request.status==200){
             var counter=request.responseText;
             var span=document.getElementById("count");
             span.innerHtml=counter.toString();
         }
     }
 }
 request.open('GET','http://neha123s.imad.hasura-app.io/counter',true);
 request.send(null);
    
}