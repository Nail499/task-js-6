


document.addEventListener("DOMContentLoaded", function () {
    let text = document.getElementById("metin");
    let fontsizeartir= document.getElementById("fontartir");
    let fontsizeazalt = document.getElementById("fontazalt");
    let borderartir = document.getElementById("borderartir");
    let borderazalt = document.getElementById("borderazalt");
    let heightartir = document.getElementById("heightartir");
    let heightazalt = document.getElementById("heightazalt");
    let widthartir = document.getElementById("widthartir");
    let widthazalt = document.getElementById("widthazalt");
    let textcolor = document.getElementById("textcolor");
    let bgcolor = document.getElementById("backcolor");

  
  
    fontsizeartir.addEventListener("click", function () {
      let nowsize = window.getComputedStyle(text, null).getPropertyValue('font-size');
      let newsize = (parseFloat(nowsize) + 5) + 'px';
      text.style.fontSize = newsize;
    });
    fontsizeazalt.addEventListener("click",function(){
        let nowsize = window.getComputedStyle(text,null).getPropertyValue('font-size');
        let newsize =(parseFloat(nowsize)-5)+'px';
        text.style.fontSize = newsize; 
    });
    borderartir.addEventListener("click",function(){
        let nowborder = window.getComputedStyle(text,null).getPropertyValue('border-radius');
        let newborder = (parseFloat(nowborder)+5)+'px';
        text.style.borderRadius=newborder;
    });
    borderazalt.addEventListener("click",function(){
        let nowborder = window.getComputedStyle(text,null).getPropertyValue('border-radius');
        let newborder = (parseFloat(nowborder)-5)+'px';
        text.style.borderRadius=newborder;
    });
    heightartir.addEventListener("click",function(){
        let nowheight = window.getComputedStyle(text,null).getPropertyValue('height');
        let newheight = (parseFloat(nowheight)+5)+ 'px';
        text.style.height=newheight;
    });
    heightazalt.addEventListener("click",function(){
        let nowheight = window.getComputedStyle(text,null).getPropertyValue('height');
        let newheight = (parseFloat(nowheight)-5)+'px';
        text.style.height = newheight;
    })
    widthartir.addEventListener("click",function(){
        let nowwidth = window.getComputedStyle(text,null).getPropertyValue('width');
        let newwidth = (parseFloat(nowwidth)+5)+'px';
        text.style.width=newwidth;
    })
    widthazalt.addEventListener("click",function(){
        let nowwidth = window.getComputedStyle(text,null).getPropertyValue('width');
        let newwidth = (parseFloat(nowwidth)-5)+'px';
        text.style.width=newwidth;
    })
    textcolor.addEventListener("input",function(){
        let newcolor = textcolor.value;
        text.style.color= newcolor;
    })
    bgcolor.addEventListener("input",function(){
        let newbgcolor = bgcolor.value;
        text.style.backgroundColor=newbgcolor;
    })

  });
