"use strict"

$(document).ready(function()
{
    let _btnIndietro=$("#btnIndietro");
    let _img=$("#img");
    let _btnAvanti=$("#btnAvanti");
    _btnIndietro.css("visibility","hidden");
    let imgIndex=1;
    _img.css("width","400px");
    _img.css("src","img/img.jpg");
    _img.prop("src", "img/img1.jpg");
    let buttonsCSS=
    {
        "width":"140px",
        "height":"40px",
        "font-weight":"bold",
        "background-color":"orange",
        "border-radius":"50%",
        "align":"center"
    };
    _btnIndietro.css(buttonsCSS);
    _btnAvanti.css(buttonsCSS);

    _btnAvanti.on("click",function(){
        imgIndex++;
        _img.prop("src","img/img"+ imgIndex +".jpg") 
        if(imgIndex==7)
        { 
            _btnAvanti.css("visibility","hidden");
        }
        _btnIndietro.css("visibility","visible");
    })

    _btnIndietro.on("click",function(){
        imgIndex--;
        _img.prop("src","img/img"+ imgIndex +".jpg") 
        if(imgIndex==1)
        { 
         _btnIndietro.css("visibility","hidden");
        }
         _btnAvanti.css("visibility","visible");
    })
})