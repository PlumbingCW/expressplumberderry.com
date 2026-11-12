(function(){
var d=document,b=d.body;
function setMenu(o){b.classList.toggle('menu-open',o);d.documentElement.style.overflow=o?'hidden':'';var t=d.querySelector('.menu-toggle');if(t)t.setAttribute('aria-expanded',o?'true':'false');}
var t=d.querySelector('.menu-toggle');
if(t)t.addEventListener('click',function(){setMenu(!b.classList.contains('menu-open'));});
d.querySelectorAll('[data-close]').forEach(function(e){e.addEventListener('click',function(){setMenu(false);});});
d.querySelectorAll('.mob-drawer a').forEach(function(a){a.addEventListener('click',function(){setMenu(false);});});
d.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false);});
window.addEventListener('resize',function(){if(window.innerWidth>768)setMenu(false);});
d.querySelectorAll('.faq-q').forEach(function(q){q.addEventListener('click',function(){
 var a=d.getElementById(q.getAttribute('aria-controls'));var open=q.getAttribute('aria-expanded')==='true';
 q.setAttribute('aria-expanded',open?'false':'true');a.style.maxHeight=open?'0px':a.scrollHeight+'px';});});
})();
