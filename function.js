const clock = document.querySelector('.clock-wrap');

const h = clock.querySelector('#h');
const m = clock.querySelector('#m');
const s = clock.querySelector('#s');
const amp = clock.querySelector('#amp');

setInterval(() => {

     let date = new Date();

let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

if (h > 12) {

     amp.innerHTML = "AM";
     
}else{
     amp.innerHTML = "PM";
}

h.innerHTML = `${hour < 10 ? "0" + hour : hour }:`;
m.innerHTML = `${min < 10 ? "0" + min : min }:`;
s.innerHTML = `${sec < 10 ? "0" + sec : sec }`;


     
}, 1000);
