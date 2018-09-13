var num = 0;
setInterval(function(){
    if(window.innerWidth <= 724){
        console.log('mobile');
        if(num === 0 || num === 2 || num === 11){
            num++;
        }
    }
    $('.wrapper').css("background-image", "url(../images/"+ num +".jpg)");
    num++;
    if(num === 13){
        num = 0;
    }
}, 3000)