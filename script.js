//your JS code here. If required.

let ip=document.querySelector('#fname')

ip.addEventListener('blur',()=>{
  ip.uvalue=ip.value.toUpperCase();
})