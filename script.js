//your JS code here. If required.

let ip=document.querySelector('#fname')

ip.addEventListener('blur',()=>{
  ip.value=ip.value.toUpperCase();
})