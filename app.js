const clock = document.querySelector('.clock');
const hours = document.querySelector('.hours');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const ampm = document.querySelector('.ampm');
const day = document.querySelector('.day');
const date2 = document.querySelector('.date');


setInterval(function(){

    

let date = new Date();



hours.innerHTML = zero(date.getHours() > 12 ? date.getHours() -12 : date.getHours());
min.innerHTML = zero(date.getMinutes()) ;
sec.innerHTML = zero(date.getSeconds());
day.innerHTML = wick(date.getDay());

date2.innerHTML =  `${zero(date.getDate())}/${zero(date.getMonth() == date.getMonth() ? date.getMonth() + 1 : date.getMonth())}/${date.getFullYear()}` ;

ampm.innerHTML = date.getHours > 12 ? 'AM' : 'PM';



}, 1000);