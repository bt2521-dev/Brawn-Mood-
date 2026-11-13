const D={
drinks:`Капучино|☕|85|200 мл|120|6|6|10|Еспресо з арабіки, молоко, молочна пінка|Арабіка Ефіопія; молоко: коров'яче, мигдальне, вівсяне, кокосове, безлактозне
Лате|🥛|95|300 мл|150|8|7|12|Еспресо, гаряче молоко, легка пінка|Арабіка Бразилія; молоко: коров'яче, соєве, вівсяне, мигдальне
Флет вайт|☕|100|180 мл|110|6|6|8|Подвійний рістретто, мікропінка з молока|Арабіка Колумбія; молоко: коров'яче, вівсяне, безлактозне
Американо|☕|60|250 мл|10|0|0|2|Еспресо, гаряча вода|Арабіка 100% або суміш арабіка/робуста; молоко за бажанням
Раф|🍯|115|250 мл|230|7|12|22|Еспресо, вершки 10%, ванільний цукор|Арабіка Бразилія; вершки або вівсяне молоко
Еспресо|☕|50|30 мл|3|0|0|0|Молота арабіка|Арабіка Ефіопія; можна подвійний
Гарячий шоколад|🍫|105|250 мл|290|8|13|34|Темний шоколад 55%, молоко, вершки|Молоко: коров'яче, вівсяне, кокосове
Матча лате|🍵|120|300 мл|160|6|6|20|Японська матча, молоко, сироп агави|Молоко: вівсяне, мигдальне, коров'яче
Чорний чай з бергамотом|🫖|70|400 мл|2|0|0|0|Чорний чай Ерл Грей, бергамот, цедра лимона|Мед, лимон, імбир
Зелений чай з жасмином|🍵|70|400 мл|2|0|0|0|Зелений чай, квіти жасмину|Мед, м'ята
Лимонад цитрусовий|🍋|85|400 мл|120|0|0|30|Лимон, лайм, апельсин, содова, м'ята|Сік: лимон, апельсин, грейпфрут, лайм
Лимонад полуничний|🍓|90|400 мл|140|0|0|35|Полуничне пюре, лимонний сік, содова, м'ята|Сік: полуниця, лимон, ківі, малина
Бабл ті манго|🥭|110|500 мл|230|1|1|55|Чай, манго пюре, тапіока, лід|Сік манго або маракуйя; тапіока, желе, попінг-боби
Бабл ті таро|🧋|115|500 мл|280|3|5|52|Таро, чорна тапіока, молоко, лід|Молоко: коров'яче, вівсяне, кокосове
Бабл ті класичний|🧋|105|500 мл|260|3|4|50|Чорний чай, молоко, карамельна тапіока|Молоко: коров'яче, вівсяне, мигдальне`,
sweets:`Горішок зі згущонкою|🌰|45|1 шт, 60 г|280|4|13|36|Пісочне тісто, варена згущенка, горіхи|
Еклер заварний|🥐|55|1 шт, 80 г|260|5|14|28|Заварне тісто, ванільний крем, глазур|
Профітролі|🍮|70|3 шт, 90 г|290|5|16|30|Заварне тісто, крем пломбір, шоколад|
Тірамісу|🍰|120|130 г|390|6|24|36|Савоярді, маскарпоне, кава, какао|
Чізкейк Нью-Йорк|🍰|115|130 г|410|7|27|35|Вершковий сир, пісочна основа, вершки|
Медовик|🍯|95|130 г|350|5|17|44|Медові коржі, сметанний крем|
Наполеон|🍰|90|130 г|370|5|20|42|Листкове тісто, заварний крем|
Київський торт|🎂|105|120 г|420|6|26|40|Безе, горіхи, масляний крем|
Брауні|🍫|80|90 г|380|5|22|40|Темний шоколад, масло, яйця, горіхи|
Макарон|🍬|50|1 шт, 25 г|110|2|5|15|Мигдальне борошно, білок, крем-ганаш|
Круасан мигдальний|🥐|75|110 г|430|8|24|44|Листкове тісто, мигдальний франжипан|
Сирник|🥞|70|120 г|290|14|13|28|Сир 5%, яйця, манка, ваніль|
Яблучний штрудель|🥧|75|130 г|260|3|10|40|Тісто, яблука, кориця, родзинки|
Панна-кота|🍮|85|120 г|240|4|15|22|Вершки, желатин, ваніль, ягідний соус|
Капкейк ванільний|🧁|65|90 г|320|4|15|42|Ванільний бісквіт, вершковий крем|`,
food:`Сендвіч з куркою|🥪|130|220 г|390|24|14|40|Хліб чіабата, куряче філе, салат, томат, соус|
Сендвіч з лососем|🥪|165|210 г|410|22|18|38|Бріош, слабосолоний лосось, крем-сир, огірок|
Круасан з шинкою і сиром|🥐|105|160 г|420|16|24|34|Круасан, шинка, сир чеддер, салат|
Паніні з моцарелою|🥙|125|220 г|450|20|20|45|Хліб, моцарела, томати, песто|
Клаб-сендвіч|🥪|150|260 г|520|26|24|46|Тост, курка, бекон, яйце, томат, салат|
Салат Цезар|🥗|140|230 г|320|18|20|16|Ромен, курка, пармезан, грінки, соус цезар|
Грецький салат|🥗|120|220 г|230|7|18|10|Огірок, томат, фета, оливки, оливкова олія|
Салат з тунцем|🥗|145|230 г|260|20|14|12|Тунець, мікс салату, яйце, кукурудза, лимон|
Боул з кіноа|🥣|155|280 г|380|14|16|44|Кіноа, авокадо, нут, томати, тахіні|
Салат з буряком і козячим сиром|🥗|135|210 г|250|9|15|20|Печений буряк, козячий сир, горіхи, рукола|`};
const IMG={
  "drinks0": ["images/drinks/kapuchyno-1.jpg", "images/drinks/kapuchyno-2.jpg"],
  "drinks1": ["images/drinks/late-1.jpg", "images/drinks/late-2.jpg"],
  "drinks2": ["images/drinks/flet-vait-1.jpg", "images/drinks/flet-vait-2.jpg"],
  "drinks3": ["images/drinks/amerykano-1.jpg", "images/drinks/amerykano-2.jpg"],
  "drinks4": ["images/drinks/raf-1.jpg", "images/drinks/raf-2.jpg"],
  "drinks5": ["images/drinks/espreso-1.jpg", "images/drinks/espreso-2.jpg"],
  "drinks6": ["images/drinks/hariachyi-shokolad-1.jpg", "images/drinks/hariachyi-shokolad-2.jpg"],
  "drinks7": ["images/drinks/matcha-late-1.jpg", "images/drinks/matcha-late-2.jpg"],
  "drinks8": ["images/drinks/chornyi-chai-z-berhamotom-1.jpg", "images/drinks/chornyi-chai-z-berhamotom-2.jpg"],
  "drinks9": ["images/drinks/zelenyi-chai-z-zhasmynom-1.jpg", "images/drinks/zelenyi-chai-z-zhasmynom-2.jpg"],
  "drinks10": ["images/drinks/lymonad-tsytrusovyi-1.jpg", "images/drinks/lymonad-tsytrusovyi-2.jpg"],
  "drinks11": ["images/drinks/lymonad-polunychnyi-1.jpg", "images/drinks/lymonad-polunychnyi-2.jpg"],
  "drinks12": ["images/drinks/babl-ti-manho-1.jpg", "images/drinks/babl-ti-manho-2.jpg"],
  "drinks13": ["images/drinks/babl-ti-taro-1.jpg", "images/drinks/babl-ti-taro-2.jpg"],
  "drinks14": ["images/drinks/babl-ti-klasychnyi-1.jpg", "images/drinks/babl-ti-klasychnyi-2.jpg"],
  "sweets0": ["images/sweets/horishok-zi-zhushchonkoiu-1.jpg", "images/sweets/horishok-zi-zhushchonkoiu-2.jpg"],
  "sweets1": ["images/sweets/ekler-zavarnyi-1.jpg", "images/sweets/ekler-zavarnyi-2.jpg"],
  "sweets2": ["images/sweets/profitroli-1.jpg", "images/sweets/profitroli-2.jpg"],
  "sweets3": ["images/sweets/tiramisu-1.jpg", "images/sweets/tiramisu-2.jpg"],
  "sweets4": ["images/sweets/chizkeik-niu-iork-1.jpg", "images/sweets/chizkeik-niu-iork-2.jpg"],
  "sweets5": ["images/sweets/medovyk-1.jpg", "images/sweets/medovyk-2.jpg"],
  "sweets6": ["images/sweets/napoleon-1.jpg", "images/sweets/napoleon-2.jpg"],
  "sweets7": ["images/sweets/kyivskyi-tort-1.jpg", "images/sweets/kyivskyi-tort-2.jpg"],
  "sweets8": ["images/sweets/brauni-1.jpg", "images/sweets/brauni-2.jpg"],
  "sweets9": ["images/sweets/makaron-1.jpg", "images/sweets/makaron-2.jpg"],
  "sweets10": ["images/sweets/kruasan-myhdalnyi-1.jpg", "images/sweets/kruasan-myhdalnyi-2.jpg"],
  "sweets11": ["images/sweets/syrnyk-1.jpg", "images/sweets/syrnyk-2.jpg"],
  "sweets12": ["images/sweets/iabluchnyi-shtrudel-1.jpg", "images/sweets/iabluchnyi-shtrudel-2.jpg"],
  "sweets13": ["images/sweets/panna-kota-1.jpg", "images/sweets/panna-kota-2.jpg"],
  "sweets14": ["images/sweets/kapkeik-vanilnyi-1.jpg", "images/sweets/kapkeik-vanilnyi-2.jpg"],
  "food0": ["images/food/sendvich-z-kurkoiu-1.jpg", "images/food/sendvich-z-kurkoiu-2.jpg"],
  "food1": ["images/food/sendvich-z-lososem-1.jpg", "images/food/sendvich-z-lososem-2.jpg"],
  "food2": ["images/food/kruasan-z-shynkoiu-i-syrom-1.jpg", "images/food/kruasan-z-shynkoiu-i-syrom-2.jpg"],
  "food3": ["images/food/panini-z-motsareloiu-1.jpg", "images/food/panini-z-motsareloiu-2.jpg"],
  "food4": ["images/food/klab-sendvich-1.jpg", "images/food/klab-sendvich-2.jpg"],
  "food5": ["images/food/salat-tsezar-1.jpg", "images/food/salat-tsezar-2.jpg"],
  "food6": ["images/food/hretskyi-salat-1.jpg", "images/food/hretskyi-salat-2.jpg"],
  "food7": ["images/food/salat-z-tuntsem-1.jpg", "images/food/salat-z-tuntsem-2.jpg"],
  "food8": ["images/food/boul-z-kinoa-1.jpg"],
  "food9": ["images/food/salat-z-buriakom-i-koziachym-syrom-1.jpg"]
};
const T={drinks:'🥤 Напої',sweets:'🍰 Солодке до чаю',food:'🥪 Сендвічі / салати'};
const items={};for(const k in D)items[k]=D[k].split('\n').map((l,i)=>{const a=l.split('|');return{id:k+i,n:a[0],e:a[1],p:+a[2],v:a[3],k:a[4],b:a[5],f:a[6],c:a[7],s:a[8],o:a[9]}});
let cur='drinks',S={o:0,ph:'',used:0};
try{Object.assign(S,JSON.parse(localStorage.getItem('ar')||'{}'))}catch(e){}
const sv=()=>{try{localStorage.setItem('ar',JSON.stringify(S))}catch(e){}};
const $=i=>document.getElementById(i);
function go(i){document.querySelector('nav').classList.remove('on');$(i).scrollIntoView({behavior:'smooth'})}
function toast(t){const e=$('ts');e.textContent=t;e.style.display='block';setTimeout(()=>e.style.display='none',4000)}
function card(x){return `<div class="card"><div class="pic">${IMG[x.id]?`<img src="${IMG[x.id][0]}" alt="${x.n}" loading="lazy">`:x.e}</div><div class="b"><h3>${x.n}</h3><small>${x.v} · ${x.k} ккал</small><div class="row"><span class="pr">${x.p} ₴</span></div><div class="bt"><button class="btn o" onclick="openP('${x.id}')">Детальніше</button><button class="btn" onclick="add('${x.id}')">🛒 В кошик</button></div></div></div>`}
function tabs(){$('tabs').innerHTML=Object.keys(T).map(k=>`<button class="tab ${k==cur?'on':''}" onclick="cur='${k}';$('q').value='';tabs()">${T[k]}</button>`).join('');
const q=($('q').value||'').trim().toLowerCase(),so=$('so').value;
let L=q?[].concat(...Object.values(items)).filter(x=>x.n.toLowerCase().includes(q)):items[cur].slice();
if(so)L.sort((a,b)=>so=='a'?a.p-b.p:b.p-a.p);
$('list').innerHTML=L.length?L.map(card).join(''):'<p style="color:var(--mu)">Нічого не знайдено 😔 Спробуйте іншу назву.</p>'}
function find(id){return items[id.replace(/\d+$/,'')].find(x=>x.id==id)}
function openP(id){const x=find(id),im=IMG[id],opts=x.o?x.o.split(';').map(s=>s.trim()):[];
$('mb').innerHTML=`<button class="x" onclick="md.classList.remove('on')">×</button><h2 style="color:var(--gold);margin-bottom:12px">${x.n}</h2>
<img class="gm" id="gm" alt="${x.n}" src="${im[0]}"><div class="th">${im.map((s,i)=>`<img alt="" src="${s}" onclick="gm.src=this.src">`).join('')}</div>
<div class="kb"><span><b>${x.k}</b>ккал</span><span><b>${x.b} г</b>білки</span><span><b>${x.f} г</b>жири</span><span><b>${x.c} г</b>вуглеводи</span></div>
<p><b>КБЖВ на порцію:</b> ${x.v}</p><p><b>Склад:</b> ${x.s}</p>
${opts.length?`<p><b>Варіанти:</b> ${opts.join('. ')}</p>`:''}
<div class="row"><span class="pr" style="font-size:20px">${x.p} ₴</span><button class="btn" onclick="add('${x.id}')">🛒 Додати в кошик</button></div>`;$('md').classList.add('on')}
let cart=[],last=null,step=0,F={fn:"",ln:"",ph:"",day:"",tm:"",cm:""};
function add(id){const c=cart.find(i=>i.id==id);c?c.q++:cart.push({id,q:1});last=null;step=0;md.classList.remove('on');drawCart();toast('Додано в кошик 🛒')}
function qty(id,d){const c=cart.find(i=>i.id==id);if(!c)return;c.q+=d;if(c.q<1)cart=cart.filter(i=>i.id!=id);drawCart()}
function toggleCart(){$('cart').classList.toggle('on')}
const esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
const DAYS=['неділя','понеділок','вівторок','середа','четвер','пʼятниця','субота'];
function slots(i){const r=[],n=new Date(),lim=n.getHours()*60+n.getMinutes()+30;for(let m=480;m<=1290;m+=30){if(i==0&&m<lim)continue;r.push(String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0'))}return r}
function days(){const a=[],n=new Date();for(let i=0;i<7;i++){if(i==0&&!slots(0).length)continue;const d=new Date(n.getFullYear(),n.getMonth(),n.getDate()+i);a.push({v:String(i),l:(i==0?'Сьогодні':i==1?'Завтра':DAYS[d.getDay()])+', '+String(d.getDate()).padStart(2,'0')+'.'+String(d.getMonth()+1).padStart(2,'0')})}return a}
function totals(){const t=cart.reduce((s,c)=>s+find(c.id).p*c.q,0),d=S.ph&&!S.used?Math.round(t*.1):0;return{t,d,s:t-d}}
function saveF(){['fn','ln'].forEach(k=>{if($(k))F[k]=$(k).value});if($('fp'))F.ph=$('fp').value;if($('fd'))F.day=$('fd').value;if($('ft'))F.tm=$('ft').value;if($('cm'))F.cm=$('cm').value}
function setStep(n){saveF();step=n;drawCart();$('cart').scrollTop=0}
function drawCart(){saveF();{const n=cart.reduce((s,c)=>s+c.q,0);document.querySelectorAll('.cc').forEach(e=>e.textContent=n)}
const T0=totals();if(!cart.length)step=0;
let o='<button class="x" onclick="toggleCart()">×</button><h2 style="color:var(--gold);margin-bottom:10px">Кошик</h2>';
if(last)o+=`<div class="rev" style="margin-bottom:12px"><b>✅ Замовлення №${last.n} оплачено!</b><p style="margin:6px 0 0;font-size:14px">${esc(last.fn)} ${esc(last.ln)}, забрати: ${esc(last.day)} о ${esc(last.tm)}.<br>Сума: ${last.t} ₴. Назвіть номер замовлення на касі.</p></div>`;
if(!cart.length){o+='<p style="color:var(--mu)">Кошик порожній</p>'}
else if(step==0){
o+=cart.map(c=>{const x=find(c.id);return `<div class="ci"><span>${x.n}<br><small style="color:var(--mu)">${x.p} ₴</small></span><span class="qc"><button onclick="qty('${c.id}',-1)">−</button> ${c.q} <button onclick="qty('${c.id}',1)">+</button></span><b>${x.p*c.q} ₴</b></div>`}).join('');
o+=`<textarea id="cm" rows="2" placeholder="Коментар (напр., вид молока, без цукру)">${esc(F.cm)}</textarea>`;
if(T0.d)o+=`<p class="st">Знижка 10% (одноразова): −${T0.d} ₴</p>`;
o+=`<h3 style="margin:10px 0">Разом: ${T0.s} ₴</h3><button class="btn" style="width:100%" onclick="setStep(1)">Оформити замовлення</button>`}
else if(step==1){
const ds=days();if(!ds.some(d=>d.v==F.day)){F.day=ds[0].v;F.tm=''}
const sl=slots(+F.day);if(!sl.includes(F.tm))F.tm=sl[0];
if(!F.ph&&S.ph)F.ph=S.ph;
o+=`<h3 style="margin-bottom:4px">Дані для замовлення</h3>
<input id="fn" placeholder="Ім'я" autocomplete="given-name" value="${esc(F.fn)}"><input id="ln" placeholder="Прізвище" autocomplete="family-name" value="${esc(F.ln)}"><input id="fp" type="tel" placeholder="Номер телефону +380..." autocomplete="tel" value="${esc(F.ph)}">
<label>День, коли заберете замовлення</label><select id="fd" onchange="saveF();F.tm='';drawCart()">${ds.map(d=>`<option value="${d.v}" ${d.v==F.day?'selected':''}>${d.l}</option>`).join('')}</select>
<label>Час (кав'ярня працює 08:00–22:00)</label><select id="ft">${sl.map(s=>`<option ${s==F.tm?'selected':''}>${s}</option>`).join('')}</select>
<h3 style="margin:12px 0">До сплати: ${T0.s} ₴</h3><button class="btn" style="width:100%" onclick="toPay()">Оплатити</button><button class="btn o" style="width:100%;margin-top:8px" onclick="setStep(0)">← Назад до кошика</button>`}
else{
const dl=days().find(d=>d.v==F.day);
o+=`<h3 style="margin-bottom:4px">Оплата карткою</h3><p style="font-size:14px;color:var(--mu);margin:0 0 6px">${esc(F.fn)} ${esc(F.ln)} · ${dl?dl.l:''} о ${esc(F.tm)}<br>До сплати: <b class="pr">${T0.s} ₴</b></p>
<input id="cn" inputmode="numeric" autocomplete="off" maxlength="19" placeholder="Номер картки 0000 0000 0000 0000" oninput="fmtCard(this)">
<p class="demo">⚠️ Демо-режим: реальна оплата не проводиться, номер картки нікуди не передається і не зберігається. Не вводьте справжню картку. Для тесту підійде 4242 4242 4242 4242.</p>
<button class="btn" style="width:100%" onclick="pay()">Підтвердити оплату ${T0.s} ₴</button><button class="btn o" style="width:100%;margin-top:8px" onclick="setStep(1)">← Назад</button>`}
$('cart').innerHTML=o}
function toPay(){saveF();if(F.fn.trim().length<2||F.ln.trim().length<2){toast('Введіть ім\'я та прізвище');return}
if(F.ph.replace(/\D/g,'').length<10){toast('Введіть коректний номер телефону');return}
if(!F.day||!F.tm){toast('Оберіть день і час');return}setStep(2)}
function fmtCard(e){e.value=e.value.replace(/\D/g,'').slice(0,16).replace(/(.{4})/g,'$1 ').trim()}
function luhn(s){let t=0,d=false;for(let i=s.length-1;i>=0;i--){let n=+s[i];if(d){n*=2;if(n>9)n-=9}t+=n;d=!d}return t%10==0}
function pay(){const v=$('cn').value.replace(/\D/g,'');if(v.length!=16||!luhn(v)){toast('Перевірте номер картки');return}
$('cn').value='';const T1=totals(),dl=days().find(d=>d.v==F.day);
S.n=(S.n||0)+1;if(T1.d)S.used=1;sv();
last={n:S.n,t:T1.s,fn:F.fn.trim(),ln:F.ln.trim(),day:dl?dl.l:'',tm:F.tm};
cart=[];step=0;F.cm='';F.day='';F.tm='';dots();drawCart();$('cart').scrollTop=0;toast('Оплачено! Замовлення прийнято')}
const PIN='1234';
function dlg(x){$('mb').innerHTML='<button class="x" onclick="$(\'md\').classList.remove(\'on\')">×</button>'+x;$('md').classList.add('on')}
function openReg(){dlg(`<h2 style="color:var(--gold);margin-bottom:8px">🎁 Знижка 10%</h2><p>Зареєструйте номер телефону — знижка 10% на одне замовлення. Кожне замовлення дає кружечок, а за 7 — горішок у подарунок!</p><input id="ph2" type="tel" placeholder="+380..." value="${esc(S.ph||'')}"><button class="btn" style="width:100%;margin-top:8px" onclick="reg('ph2')">Зареєструватись</button>`)}
function openPin(){dlg(`<h2 style="color:var(--gold);margin-bottom:8px">Касир</h2><p>Введіть PIN, щоб зарахувати замовлення.</p><input id="pin2" type="password" inputmode="numeric" autocomplete="off" placeholder="PIN"><button class="btn" style="width:100%;margin-top:8px" onclick="cashier()">Зарахувати замовлення</button>`)}
function cashier(){const p=$('pin2')?$('pin2').value:'';if(p!==PIN){toast('Невірний PIN');return}$('md').classList.remove('on');
let m='Замовлення зараховано.';
if(S.ph&&!S.used){S.used=1;m+=' Застосовано знижку 10%.'}
if(S.o>=7){S.o=0;m+=' 🎁 Видайте горішок у подарунок!'}else{S.o++;m+=' Кружечок '+S.o+'/7'}
sv();dots();toast(m)}
function dots(){const rb=$('rb');if(rb)rb.textContent=S.ph?'✓ Номер зареєстровано · змінити':'Зареєструвати номер (−10%)';$('dots').innerHTML=[...Array(7)].map((_,i)=>`<div class="dot ${i<S.o?'f':''}"></div>`).join('');$('lt').textContent=S.o>=7?'🎁 Наступне замовлення — з горішком у подарунок!':`Зафарбовано ${S.o} з 7`+(S.ph?'':' · Зареєструйте номер, щоб отримати знижку 10%')}
function showSide(v){$('side').classList.toggle('on',!!v)}
function reg(id){const p=$(id||'ph').value.trim();if(p.replace(/\D/g,'').length<10){toast('Введіть коректний номер');return}S.ph=p;sv();showSide(0);$('md').classList.remove('on');dots();drawCart();toast('Готово! Знижка 10% на одне замовлення')}
const R=[['Олена',5,'Найсмачніший раф у місті! Затишна атмосфера.'],['Андрій',5,'Бабл ті з манго — супер, а горішок як у дитинстві.'],['Марина',4,'Гарні десерти та привітний персонал.']];
function revs(){$('revs').innerHTML=R.map(r=>`<div class="rev"><b>${r[0]}</b> <span class="st">${'★'.repeat(r[1])}${'☆'.repeat(5-r[1])}</span><p>${r[2]}</p></div>`).join('')}
function addRev(){const n=$('rn').value.trim(),t=$('rt').value.trim();if(!n||!t){toast('Заповніть імʼя та відгук');return}R.unshift([n.replace(/</g,'&lt;'),+$('rs').value,t.replace(/</g,'&lt;')]);$('rn').value=$('rt').value='';revs();toast('Дякуємо за відгук!')}
tabs();dots();revs();drawCart();const inView=()=>{const r=$('loy').getBoundingClientRect();return r.top<innerHeight&&r.bottom>0};
if(!S.ph){setTimeout(()=>{if(!inView())showSide(1)},1200);setTimeout(()=>showSide(0),10000)}
try{new IntersectionObserver(e=>{if(e[0].isIntersecting)showSide(0)}).observe($('loy'))}catch(e){}
