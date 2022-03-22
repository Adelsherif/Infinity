let mymenu=document.getElementById('menu');
let mylist=document.getElementById('content');
let myfinish=document.getElementById('finish');
let addressp01=document.getElementById('address01');
let addressp02=document.getElementById('address02');
let btn=document.getElementById('btn');
let scroller=document.getElementById('scroller');
let icons01=document.querySelectorAll('#icons01 i');
let services=document.querySelectorAll('.serv div');
let about=document.getElementById('about-01');
let worksgroup=document.getElementById('textworks');
let worksimg=Array.from( document.querySelectorAll('.works .img'));
let servicesaddress=document.getElementById('services-text');
let shapes=document.getElementById('shapes');
let contactaddress=document.getElementById('contactaddress');
let contactform=document.getElementById('contactform');


mymenu.addEventListener('click',function (){
    mylist.classList.add('extend01');
})
myfinish.addEventListener('click',function (){
    mylist.classList.remove('extend01');
})

window.onload=function (){
   let loader=document.querySelector('.loader');
   loader.style.display='block';
    setTimeout(()=>{
        loader.style.display='none';
    },2000)
    setTimeout(()=>{
    let windowposition=window.scrollY+window.innerHeight;
    let addressposition00=addressp01.offsetHeight+addressp01.getBoundingClientRect().top;
    let addressposition01=addressp02.offsetHeight+addressp02.getBoundingClientRect().top;
    if(windowposition>addressposition00){
        addressp01.classList.add('animate05')
    }
    if(windowposition>addressposition01){
        addressp02.classList.add('animate06')
    }
    icons01[0].classList.add('animate01');
    icons01[1].classList.add('animate02');
    icons01[2].classList.add('animate03');
    icons01[3].classList.add('animate04');
    icons01[4].classList.add('animate05');
},2000)
}
window.onscroll=function (){
    if(window.scrollY >=100){
                mymenu.classList.add('extend');
            }
        else{
                mymenu.classList.remove('extend');
    }
    let windowposition=window.scrollY+window.innerHeight;
    let about01=(about.offsetHeight/2)+about.getBoundingClientRect().top+window.scrollY ;
    let serve01=(servicesaddress.offsetHeight/2)+servicesaddress.getBoundingClientRect().top+window.scrollY;
    let serve02=(services[0].offsetHeight/2)+services[0].getBoundingClientRect().top+window.scrollY;
    let works=(worksgroup.offsetHeight/2)+worksgroup.getBoundingClientRect().top+window.scrollY;
    let works00=(worksimg[0].offsetHeight/2)+worksimg[0].getBoundingClientRect().top+window.scrollY;
    let shape=(shapes.offsetHeight/2)+shapes.getBoundingClientRect().top+window.scrollY;
    let contact01=(contactaddress.offsetHeight/2)+contactaddress.getBoundingClientRect().top+window.scrollY;
    let contact02=(contactform.offsetHeight/2)+contactform.getBoundingClientRect().top +window.scrollY;


    if(windowposition>about01){
        about.classList.add('animate03')
    }
    if(windowposition>serve01){
        servicesaddress.classList.add('animate02')
    }
    if(windowposition>serve02){
    services[0].classList.add('animate03');
    services[1].classList.add('animate04');
    services[2].classList.add('animate05');
    services[3].classList.add('animate06');
    }
    if(windowposition>works){
       worksgroup.classList.add('animate04')
    }
    if(windowposition>works00){
        worksimg[0].classList.add('animate06');
        worksimg[1].classList.add('animate03');
        worksimg[2].classList.add('animate06');
        worksimg[3].classList.add('animate03');
        worksimg[4].classList.add('animate06');
        worksimg[5].classList.add('animate03');
    }
    if(windowposition>shape){
        shapes.classList.add('animate02')
     }
     if(windowposition>contact01){
        contactaddress.classList.add('animate03')
     }
     if(windowposition>contact02){
        contactform.classList.add('animate04')
     }
    if(window.scrollY >=600){
       btn.style.right='30px';
    }
    else{
       btn.style.right='-100px';
    }
}
btn.onclick=function (){
    window.scrollTo(0,0);
}

