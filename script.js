const services=[
{title:'Trendy Haircut',cat:'hair',desc:'Cut, styling & finish',price:'₹499'},
{title:'Hair Color',cat:'hair',desc:'Global color & highlights',price:'₹1,999'},
{title:'Facial Cleanup',cat:'skin',desc:'Cleanup, facial & skin care',price:'₹1,499'},
{title:'Bridal Makeup',cat:'makeup',desc:'HD bridal & party makeup',price:'₹4,999'},
{title:'Beard Styling',cat:'grooming',desc:'Beard trim, shave & styling',price:'₹599'},
{title:'Nail Care',cat:'nails',desc:'Manicure & pedicure',price:'₹899'},
{title:'Hair Treatment',cat:'hair',desc:'Smoothening & keratin',price:'₹2,499'},
{title:'Body Care',cat:'skin',desc:'Waxing & polishing',price:'₹1,299'}
];
const grid=document.querySelector('#serviceGrid');
function render(cat='all'){
 grid.innerHTML=services.filter(s=>cat==='all'||s.cat===cat).map(s=>`<article class="service-card"><div class="service-img">${s.title.toUpperCase()}<br>IMAGE</div><div class="service-body"><h3>${s.title}</h3><p>${s.desc}</p><span class="price">${s.price}</span></div></article>`).join('');
}
render();
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
 document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));
 if(b.closest('.filters')) b.classList.add('active'); render(b.dataset.filter);
}));
document.querySelector('.menu').addEventListener('click',()=>document.querySelector('.header').classList.toggle('open'));
document.querySelectorAll('.header nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.header').classList.remove('open')));
document.querySelector('#bookingForm').addEventListener('submit',e=>{e.preventDefault();document.querySelector('#formMessage').textContent='Appointment request saved! Connect this form to WhatsApp, email, or your backend for live bookings.';e.target.reset();});
