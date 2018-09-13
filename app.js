var num = 0;
setInterval(function(){
    $('.wrapper').css("background-image", "url(../images/"+ num +".jpg)");
    num++;
    if(num === 13){
        num = 0;
    }
}, 2500)