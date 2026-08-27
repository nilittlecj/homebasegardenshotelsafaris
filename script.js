const header=document.getElementById('header');
const toggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
function closeMenu(){ if(!nav||!toggle)return; nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.innerHTML="<i class='bx bx-menu'></i>"; document.body.classList.remove('menu-open'); }
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false');toggle.innerHTML=open?"<i class='bx bx-x'></i>":"<i class='bx bx-menu'></i>";document.body.classList.toggle('menu-open',open);});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));}
window.addEventListener('scroll',()=>{if(header)header.classList.toggle('scrolled',window.scrollY>12);},{passive:true});
const year=document.getElementById('year'); if(year)year.textContent=new Date().getFullYear();
const form=document.getElementById('bookingForm');
if(form){form.addEventListener('submit',()=>{const btn=form.querySelector('button[type="submit"]');if(btn){btn.disabled=true;btn.innerHTML="Sending enquiry <i class='bx bx-loader-alt bx-spin'></i>";}});}


// Landing-page scroll reveals
(function(){
  const revealItems = document.querySelectorAll('.reveal');
  if(!revealItems.length) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    revealItems.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -45px 0px' });
  revealItems.forEach(el => observer.observe(el));
})();

// Gentle hero depth effect on desktop
(function(){
  const hero = document.querySelector('.hero-sarova');
  const media = hero && hero.querySelector('.hero-media');
  if(!hero || !media || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      if(window.innerWidth > 900){
        const y = Math.min(window.scrollY, hero.offsetHeight) * 0.10;
        media.style.transform = `scale(1.04) translateY(${y}px)`;
      }
      ticking = false;
    });
  }, {passive:true});
})();
