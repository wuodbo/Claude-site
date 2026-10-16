const INK='#2B1019',BERRY='#7A1F3D';
const PAL=[{bg:'#FFD4DC',a:'#F28BA0',b:'#FFE08A'},{bg:'#FFE08A',a:'#C9773B',b:'#FFFFFF'},{bg:'#CDE7D3',a:'#8CBF9A',b:'#FFD4DC'},{bg:'#E6D5F5',a:'#B28DE0',b:'#FFE08A'}];
const CATS={all:'Все',kids:'Детские',wedding:'Свадебные',jubilee:'Юбилей',bento:'Бенто',cup:'Капкейки',sweet:'Сладкие столы'};
const ITEMS=[
{id:1,name:'Торт «Единорог»',cat:'kids',type:'tier',desc:'Детский · от 2 кг',price:3500,p:0,img:'image/photo-popular-1.png'},
{id:2,name:'Ягодная нежность',cat:'jubilee',type:'tier',desc:'Ваниль и ягоды · от 1,5 кг',price:3200,p:2,img:'image/photo-catalog-2.png'},
{id:3,name:'Свадебный двухъярусный',cat:'wedding',type:'tier',desc:'От 4 кг',price:9800,p:3,img:'image/photo-catalog-3.png'},
{id:4,name:'Бенто «Сердце»',cat:'bento',type:'bento',desc:'Для двоих · 500 г',price:1400,p:0,img:'image/photo-popular-2.png'},
{id:5,name:'Капкейки, 6 шт.',cat:'cup',type:'cup',desc:'Крем-чиз и ягоды',price:1800,p:1,img:'image/photo-popular-3.png'},
{id:6,name:'Шоколадный трюфель',cat:'jubilee',type:'tier',desc:'Ганаш и вишня · от 2 кг',price:3600,p:1,img:'image/photo-popular-4.png'},
{id:7,name:'Юбилейный торт',cat:'jubilee',type:'tier',desc:'Любой декор · от 2 кг',price:4200,p:3,img:'image/photo-catalog-7.png'},
{id:8,name:'Макарон, 12 шт.',cat:'sweet',type:'mac',desc:'Ассорти вкусов',price:1600,p:2,img:'image/photo-catalog-8.png'},
{id:9,name:'Бенто «Привет»',cat:'bento',type:'bento',desc:'С надписью · 500 г',price:1500,p:2,img:'image/photo-catalog-9.png'}];
const fmt=n=>n.toLocaleString('ru-RU')+' ₽';
const st=`stroke="${INK}" stroke-width="3" stroke-linejoin="round"`;
function art(t,p){const c=PAL[p];const plate=`<ellipse cx="100" cy="178" rx="82" ry="8" fill="#fff" ${st}/>`;let s='';
if(t==='tier')s=`<rect x="30" y="112" width="140" height="62" rx="14" fill="${c.a}" ${st}/><path d="M30 118h140v14q-10 14-20 0t-20 0t-20 0t-20 0t-20 0t-20 0t-20 0z" fill="#fff" ${st}/><rect x="55" y="62" width="90" height="52" rx="12" fill="${c.b}" ${st}/><path d="M55 68h90v14q-7.5 12-15 0t-15 0t-15 0t-15 0t-15 0t-15 0z" fill="#fff" ${st}/><circle cx="100" cy="52" r="9" fill="${BERRY}" ${st}/><path d="M100 43q2-9 10-11" fill="none" ${st}/>`;
if(t==='bento')s=`<rect x="46" y="92" width="108" height="82" rx="24" fill="${c.a}" ${st}/><path d="M46 102h108v10q-13.5 11-27 0t-27 0t-27 0t-27 0z" fill="#fff" ${st}/><path d="M100 164c-26-16-20-36-5-33 4 1 5 4 5 6 0-2 1-5 5-6 15-3 21 17-5 33z" fill="${BERRY}" ${st}/>`;
if(t==='cup')s=`<path d="M60 118h80l-10 54H70z" fill="${c.b}" ${st}/><ellipse cx="100" cy="114" rx="46" ry="18" fill="${c.a}" ${st}/><ellipse cx="100" cy="88" rx="35" ry="16" fill="${c.a}" ${st}/><ellipse cx="100" cy="64" rx="22" ry="14" fill="${c.a}" ${st}/><circle cx="100" cy="46" r="8" fill="${BERRY}" ${st}/>`;
if(t==='mac'){const m=(y,f)=>`<rect x="56" y="${y}" width="88" height="20" rx="14" fill="${f}" ${st}/><rect x="64" y="${y+20}" width="72" height="9" rx="4" fill="#fff" ${st}/><rect x="56" y="${y+29}" width="88" height="20" rx="14" fill="${f}" ${st}/>`;s=m(24,c.a)+m(76,c.b)+m(126,'#CDE7D3').replace('y="126"','y="126"');}
return `<svg viewBox="0 0 200 200" role="img" aria-label="Иллюстрация десерта">${t==='mac'?'':plate}${s}</svg>`}
function card(i){const c=PAL[i.p];return `<article class="card" data-cat="${i.cat}" data-price="${i.price}"><div class="card__art" style="background:${c.bg}">${i.img?`<img src="${i.img}" alt="${i.name}">`:art(i.type,i.p)}</div><div class="card__body"><h3>${i.name}</h3><p>${i.desc}</p><div class="card__row"><b>от ${fmt(i.price)}</b><a class="btn btn--sm" href="order.html?item=${i.id}">Заказать</a></div></div></article>`}
const mark=`<svg width="40" height="40" viewBox="0 0 200 200"><rect x="30" y="112" width="140" height="62" rx="14" fill="#F28BA0" ${st} stroke-width="9"/><rect x="55" y="62" width="90" height="52" rx="12" fill="#FFE08A" ${st} stroke-width="9"/><circle cx="100" cy="44" r="14" fill="${BERRY}" ${st} stroke-width="9"/></svg>`;
const logo=`<a class="logo" href="index.html" aria-label="Мадлен, на главную">${mark}<span>мадлен<small>кондитерская на заказ</small></span></a>`;
const page=document.body.dataset.page;
const NAV=[['home','index.html','Главная'],['catalog','catalog.html','Каталог'],['order','order.html','На заказ'],['about','about.html','О кондитерской']];
document.getElementById('site-header').outerHTML=`<header class="hd"><div class="wrap">${logo}<nav class="nav" id="nav">${NAV.map(n=>`<a href="${n[1]}" class="${n[0]===page?'on':''}">${n[2]}</a>`).join('')}</nav><a class="phone" href="tel:+79000000000">+7 (900) 000-00-00</a><a class="btn btn--sm btn--berry" href="order.html">Заказать</a><button class="burger" id="burger" aria-label="Меню">☰</button></div></header>`;
document.getElementById('site-footer').outerHTML=`<footer class="ft"><div class="wrap"><div class="cols"><div>${logo}<p style="margin-top:16px">Печём только на заказ из натуральных продуктов.</p></div><div><h4>Разделы</h4>${NAV.map(n=>`<a href="${n[1]}">${n[2]}</a>`).join('')}</div><div><h4>Информация</h4><a href="order.html#faq">Вопросы и ответы</a><a href="order.html#terms">Условия заказа</a><a href="#">Политика конфиденциальности</a></div><div><h4>Связаться</h4><a href="tel:+79000000000">+7 (900) 000-00-00</a><a href="#">Telegram</a><a href="#">WhatsApp</a><p>Ежедневно, 9:00–20:00</p></div></div><p class="copy">© 2026 Мадлен. Самозанятый, ИНН 000000000000</p></div></footer>`;
document.getElementById('burger').onclick=()=>document.getElementById('nav').classList.toggle('open');
document.querySelectorAll('[data-art]').forEach(e=>{const[t,p]=e.dataset.art.split(',');e.innerHTML=art(t,+p)});
const pop=document.getElementById('popular');if(pop)pop.innerHTML=[1,4,5,6].map(id=>card(ITEMS.find(i=>i.id===id))).join('');
// catalog
const grid=document.getElementById('grid');
if(grid){const chips=document.getElementById('chips'),sort=document.getElementById('sort'),count=document.getElementById('count');
let cat=new URLSearchParams(location.search).get('cat')||'all';if(!CATS[cat])cat='all';
chips.innerHTML=Object.entries(CATS).map(([k,v])=>`<button class="chip" data-k="${k}">${v}</button>`).join('');
const draw=()=>{let l=ITEMS.filter(i=>cat==='all'||i.cat===cat);if(sort.value==='asc')l.sort((a,b)=>a.price-b.price);if(sort.value==='desc')l.sort((a,b)=>b.price-a.price);
grid.innerHTML=l.map(card).join('');count.textContent=`Найдено: ${l.length}`;chips.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c.dataset.k===cat))};
chips.onclick=e=>{if(e.target.dataset.k){cat=e.target.dataset.k;draw()}};sort.onchange=draw;draw()}
// order
const form=document.getElementById('orderForm');
if(form){const $=n=>form.elements[n];const d=new Date(Date.now()+3*864e5).toISOString().slice(0,10);$('date').min=d;
const item=ITEMS.find(i=>i.id==new URLSearchParams(location.search).get('item'));
if(item){const m={kids:'Торт',wedding:'Торт',jubilee:'Торт',bento:'Бенто-торт',cup:'Капкейки',sweet:'Сладкий стол'};$('kind').value=m[item.cat];document.getElementById('chosen').textContent='Вы выбрали: '+item.name}
const calc=()=>{const f=+$('filling').selectedOptions[0].dataset.p,w=+$('weight').value,dec=+form.querySelector('[name=decor]:checked').value,dl=form.querySelector('[name=delivery]:checked').value==='yes'?300:0;
document.getElementById('wOut').textContent=w.toString().replace('.',',')+' кг';document.getElementById('total').textContent='≈ '+fmt(Math.round(f*w+dec+dl))};
form.addEventListener('input',calc);calc();
const need=(n,ok,msg)=>{const e=form.querySelector(`[data-err=${n}]`);e.textContent=ok?'':msg;return ok};
form.addEventListener('submit',e=>{e.preventDefault();
const ok=[need('name',$('name').value.trim().length>1,'Укажите имя'),need('contact',/[\d@]{5,}/.test($('contact').value),'Телефон или @username в Telegram'),need('date',!!$('date').value&&$('date').value>=d,'Дата не раньше '+new Date(d).toLocaleDateString('ru-RU')),need('agree',$('agree').checked,'Нужно согласие')].every(Boolean);
if(!ok)return;
document.getElementById('formBox').innerHTML=`<div class="ok"><svg style="width:140px;margin:auto" viewBox="0 0 200 200">${art('bento',1).replace(/<\/?svg[^>]*>/g,'')}</svg><h2>Заявка отправлена</h2><p>${$('name').value}, мы напишем вам в течение часа и уточним детали.<br>Ориентировочная цена: <b>${document.getElementById('total').textContent.slice(2)}</b></p></div>`;scrollTo({top:0,behavior:'smooth'})})}
// counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const t=+e.target.dataset.count,f=e.target.dataset.f||'';let n=0;const step=()=>{n+=Math.ceil(t/40);if(n>=t)n=t;e.target.textContent=n.toLocaleString('ru-RU')+f;if(n<t)requestAnimationFrame(step)};step()}));
document.querySelectorAll('[data-count]').forEach(e=>io.observe(e));
