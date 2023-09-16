var cont = document.querySelector("#content");
var dil = document.querySelector("i");
cont.addEventListener("dblclick",function(){
   
    dil.style.transform=" translate(-50%,-50%) scale(1)";   
    dil.style.opacity=0.8;

    setTimeout(function(){
        dil.style.opacity=0;
    },500)
    setTimeout(function(){
        dil.style.transform=" translate(-50%,-50%) scale(0)";   
    }, 600)
})

