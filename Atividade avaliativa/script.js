
const hero = document.querySelector('.hero');
const img = document.getElementById('heroImg');
hero.addEventListener('mousemove', (e)=>{
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  img.style.transform = `translate(${x}px, ${y}px)`;
});


const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.style.opacity=1; e.target.style.transform='translateY(0)'; }
  });
});
document.querySelectorAll('.card').forEach(c=>{
  c.style.opacity=0; c.style.transform='translateY(30px)'; c.style.transition='0.8s';
  observer.observe(c);
});
