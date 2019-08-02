let btn = document.getElementById("mybtn");

btn.onclick = function()
    {
     let myaudio = document.getElementById("myaudio");
     myaudio.volume = 0.05;
    if(myaudio.paused == true)
    {
    document.getElementById("myaudio").play();
    }
      else if (myaudio.paused == false)
    {
     document.getElementById("myaudio").pause();

     }
}
//
var x=false

function imgchange(obj,imgX,imgY) {

 if  (x){

 obj.src=imgX

 } else {

 obj.src=imgY

 }

x=!x
}
// 
function parallax(e){
    this.querySelectorAll('.parallax').forEach(layer=>{
        let speed = layer.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 500;
        let y = (window.innerWidth - e.pageY * speed) / 500;

        layer.style.transform = `translateX(${x}px)
                                 translateY(${y}px)`
    })
}
document.addEventListener('mousemove', parallax);

//clock 
let clock = document.querySelector('.clock');

function myClock() {
    let time = new Date();
    let h = time.getHours().toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();

    if(h.length < 2){
        h = '0' + h;
    }
    if(m.length < 2) {
        m = '0' + m;
    }
    if(s.length < 2){
        s = '0' + s;
    }

    let clockString = h + ':' + m + ':' + s;
    clock.textContent = clockString;
}
setInterval(myClock, 1000);

//cursor
let cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(e){
   cursor.setAttribute('style', 'top: '+(e.pageY - 5)+'px; left:'+(e.pageX - 5)+'px;')
})

document.addEventListener('click', ()=> {
    cursor.classList.add('blow');

    setTimeout(()=>{
        cursor.classList.remove('blow');
    },650)
})