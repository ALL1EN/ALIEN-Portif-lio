
(()=>{
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE=matchMedia('(pointer:fine)').matches;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const DPR=Math.min(2,window.devicePixelRatio||1);
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const lerp=(a,b,t)=>a+(b-a)*t;
const seg=(p,a,b)=>clamp((p-a)/(b-a));
const eo=x=>1-Math.pow(1-clamp(x),3);
const eio=x=>{x=clamp(x);return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2};
let VW=innerWidth,VH=innerHeight;

/* ---- sky ---- */
const sky=$('#sky'),sg=sky.getContext('2d');let SW,SH;const ST=[];
function sizeSky(){SW=innerWidth;SH=innerHeight;sky.width=SW*DPR;sky.height=SH*DPR;sg.setTransform(DPR,0,0,DPR,0,0)}
sizeSky();for(let i=0;i<(innerWidth<700?200:420);i++)ST.push({x:Math.random(),y:Math.random(),z:.15+Math.random()*.85,tw:Math.random()*6.28});
let vel=0,lastSY=scrollY,mX=.5,mY=.5,sX=.5,sY=.5;
function drawSky(t,dt){
  sg.clearRect(0,0,SW,SH);
  const T=t*.00005;
  const NEB=[[.16+.12*Math.sin(T*1.3),.12+.1*Math.cos(T),.55,'18,58,134'],[.88+.08*Math.cos(T*1.1),.52+.15*Math.sin(T*.8),.5,'11,47,110'],[.5+.15*Math.sin(T*.7),1.02+.05*Math.cos(T),.45,'27,44,107']];
  for(const n of NEB){const x=n[0]*SW,y=n[1]*SH,r=n[2]*Math.max(SW,SH);const gr=sg.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,`rgba(${n[3]},.4)`);gr.addColorStop(1,`rgba(${n[3]},0)`);sg.fillStyle=gr;sg.fillRect(0,0,SW,SH)}
  sg.fillStyle='rgb(210,228,255)';
  const v=clamp(vel,-60,60);
  for(const s of ST){
    s.y-=(v*.0009+.00002*dt)*s.z;if(s.y<-.02)s.y+=1.04;if(s.y>1.02)s.y-=1.04;
    const x=(s.x+(sX-.5)*.03*s.z)*SW,y=s.y*SH+(sY-.5)*18*s.z;
    const a=(.25+.75*s.z)*(.65+.35*Math.sin(t*.002+s.tw));
    const len=Math.abs(v)*s.z*1.6;
    if(len>2){sg.strokeStyle=`rgba(190,215,255,${a.toFixed(2)})`;sg.lineWidth=s.z*1.3;sg.beginPath();sg.moveTo(x,y);sg.lineTo(x,y+len*Math.sign(v));sg.stroke()}
    else{sg.globalAlpha=a;const r=s.z*1.3;sg.fillRect(x,y,r,r);sg.globalAlpha=1}
  }
}

/* ---- cover halo ---- */
const halo=$('#halo'),hg=halo.getContext('2d');let HW,HH;
function sizeHalo(){const r=halo.getBoundingClientRect();HW=r.width;HH=r.height;halo.width=HW*DPR;halo.height=HH*DPR;hg.setTransform(DPR,0,0,DPR,0,0)}
sizeHalo();
function drawHalo(t,k){
  hg.clearRect(0,0,HW,HH);
  const cx=HW/2+(sX-.5)*26,cy=HH*.42+(sY-.5)*18;
  const R=Math.min(HW,HH)*(.30+.04*Math.sin(t*.0006));
  const g1=hg.createRadialGradient(cx,cy,R*.1,cx,cy,R*2.1);
  g1.addColorStop(0,`rgba(90,162,255,${.3*k})`);g1.addColorStop(.35,`rgba(46,123,255,${.14*k})`);g1.addColorStop(1,'rgba(27,111,255,0)');
  hg.fillStyle=g1;hg.fillRect(0,0,HW,HH);
  hg.save();hg.globalAlpha=k;
  for(let i=0;i<3;i++){const p=((t/5200)+i/3)%1;hg.strokeStyle=`rgba(156,196,255,${(1-p)*.3})`;hg.lineWidth=1;hg.beginPath();hg.arc(cx,cy,R*(.7+p*1.6),0,7);hg.stroke()}
  hg.restore();
}

/* ---- split ---- */
function splitWords(el){const w=el.textContent.trim().split(/\s+/);el.setAttribute('aria-label',el.textContent.trim());el.innerHTML=w.map((x,i)=>`<span class="sw-w" aria-hidden="true"><span style="--i:${i}">${x}</span></span>`).join(' ')}
$$('.split').forEach(splitWords);
{const h=$('#cvTitle span[aria-hidden]');let i=0;const f=document.createDocumentFragment();
 [...h.textContent].forEach(c=>{if(c===' '){f.appendChild(document.createTextNode(' '));return}const s=document.createElement('span');s.className='ch';s.style.setProperty('--i',i++);s.textContent=c;f.appendChild(s)});
 h.textContent='';h.appendChild(f)}

/* ---- cover scroll ---- */
const cover=$('#cover'),cvIn=$('#cvIn'),cue=$('#cue');
let coverVisible=true;
function updCover(){
  const r=cover.getBoundingClientRect();const total=cover.offsetHeight-VH*2;
  const p=clamp(-r.top/Math.max(1,total));
  const cover2=clamp((-r.top-total)/VH);
  const a=seg(p,.05,.9);
  cvIn.style.opacity=1-a;cvIn.style.transform=`translateY(${-a*70}px) scale(${1-a*.07})`;cvIn.style.filter=a>0?`blur(${a*7}px)`:'';
  cue.style.opacity=1-seg(p,0,.12);
  coverVisible=r.bottom>0&&cover2<1;
  return 1-a;
}

/* ---- symbol ---- */
const stage=$('#symStage'),bFill=$('#bFill'),bGrid=$('#bGrid');
const setSym=g=>{stage.classList.toggle('g',g);bGrid.setAttribute('aria-pressed',g);bFill.setAttribute('aria-pressed',!g);stage.dataset.label=g?'Ver cheio':'Ver grade'};
bFill.addEventListener('click',()=>setSym(false));bGrid.addEventListener('click',()=>setSym(true));
stage.addEventListener('click',e=>{if(!e.target.closest('.sym-ctl'))setSym(!stage.classList.contains('g'))});

/* ---- colors ---- */
const COLORS=[
 {n:'Primary Blue',h:'#1B6FFF',cls:'big',bg:'#1B6FFF',note:'Ação'},
 {n:'Gradiente',h:'#2E7BFF → #005AF2',cls:'w2',bg:'linear-gradient(135deg,#2E7BFF,#005AF2)'},
 {n:'Background',h:'#0E1923',bg:'#0E1923'},
 {n:'Card',h:'#FFFFFF 10%',bg:'rgba(255,255,255,.1)',alpha:1},
 {n:'Primary Text',h:'#FFFFFF 96%',bg:'rgba(255,255,255,.96)',dark:1},
 {n:'Secondary Text',h:'#FFFFFF 40%',bg:'rgba(255,255,255,.4)',alpha:1},
 {n:'Color Text',h:'#2E7BFF',bg:'#2E7BFF'},
 {n:'Warning Red',h:'#FF383C',bg:'#FF383C'},
 {n:'Alert Yellow',h:'#ECCD00',cls:'w3',bg:'#ECCD00',dark:1},
 {n:'Good Green',h:'#33D539',cls:'w3',bg:'#33D539',dark:1}];
$('#pal').innerHTML=COLORS.map((c,i)=>`<button class="sw rv ${c.cls||''} ${c.dark?'dark':''} ${c.alpha?'alpha':''}" type="button" style="--d:${(i%6)*.05}s;background:${c.bg}" data-h="${c.h}"><span class="cp">copiar</span><b>${c.n}</b><div class="hex">${c.h}</div><span class="chk">copiado</span></button>`).join('');
$('#pal').addEventListener('click',async e=>{const b=e.target.closest('.sw');if(!b)return;
  const txt=b.dataset.h.split(' → ')[0];
  try{await navigator.clipboard.writeText(txt)}catch(_){const t=document.createElement('textarea');t.value=txt;document.body.appendChild(t);t.select();try{document.execCommand('copy')}catch(_){}t.remove()}
  b.classList.add('copied');clearTimeout(b._t);b._t=setTimeout(()=>b.classList.remove('copied'),1100)});

/* ---- type scale ---- */
const SCALE=[['H1','PT Serif','Bold',38],['H2','PT Serif','Bold',36],['H3','Geist','Bold',34],['H4','Geist','Bold',28],['H5','Geist','Bold',22],['H6','Geist','Bold',19],['Subtitle 1','Geist','SemiBold',17],['Subtitle 2','Geist','SemiBold',15],['Body 1','Geist','Medium',15],['Body 2','Geist','Bold',13],['Caption 1','Geist','SemiBold',13],['Caption 2','Geist','Medium',13],['Caption 3','Geist','Bold',11],['Button','Geist','Bold',16],['Label','Geist','ExtraBold',11],['Logo','Geist','Bold',15]];
const WMAP={Medium:500,SemiBold:600,Bold:700,ExtraBold:800};
$('#scale').innerHTML=`<div class="row hd"><span>ESTILO</span><span>AMOSTRA</span><span class="mt" style="text-align:right">FONTE · PESO · TAMANHO</span></div>`+
 SCALE.map(s=>`<div class="row"><span class="lbl">${s[0]}</span><span class="smp" style="font-family:${s[1]==='PT Serif'?"'PT Serif',serif":'Geist,sans-serif'};font-weight:${WMAP[s[2]]};font-size:${Math.min(s[3],38)}px${s[0]==='Label'?';letter-spacing:.06em':''}">Conecte com um toque</span><span class="mt">${s[1]} · ${s[2]} · ${s[3]}</span></div>`).join('');

/* ---- components ---- */
$('#radios').addEventListener('click',e=>{const b=e.target.closest('.rad');if(!b)return;$$('#radios .rad').forEach(r=>r.setAttribute('aria-checked',r===b))});
$('#chips').addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;$$('#chips .chip').forEach(c=>c.setAttribute('aria-pressed',c===b))});
setInterval(()=>{if(document.hidden)return;$('#mDl').textContent=(60+Math.random()*8).toFixed(1).replace('.',',')+' Mbps';$('#mUl').textContent=(49+Math.random()*7).toFixed(1).replace('.',',')+' Mbps'},1600);

/* ---- screens ---- */
const SCREENS=[['kit-load','1.1 Abertura'],['kit-onb1','1.2 Introdução'],['kit-onb2','1.3 Introdução'],['kit-onb3','1.4 Prova social'],['kit-signin','1.5 Entrar'],['kit-sv1','1.6 Pesquisa'],['kit-sv2','1.7 Pesquisa'],['kit-sv3','1.8 Pesquisa'],['kit-terms','1.9 Termos'],['kit-loader','1.10 Carregando'],['kit-pay1','1.11 Planos'],['kit-pay2','1.12 Teste ativo'],['kit-success','1.13 Pronto'],['kit-vpn-off','2.1 Desconectado'],['kit-vpn-on','2.2 Conectado'],['kit-proto','2.3 Protocolo'],['kit-openvpn','2.4 OpenVPN'],['kit-getpro','2.5 Premium']];
const scr=s=>`<div class="scr"><img src="a/${s[0]}.jpg" alt="${s[1]}" width="375" height="812" loading="lazy"></div>`;
const A=SCREENS.slice(0,9),B=SCREENS.slice(9);
$('#mq1').innerHTML=[...A,...A,...A,...A].map(scr).join('');
$('#mq2').innerHTML=[...B,...B,...B,...B].map(scr).join('');

/* ---- site carousel ---- */
const SITE=[['site-hero','Abertura'],['site-srv','Servidores'],['site-lab','Protocolos'],['site-bento','Recursos'],['site-price','Planos']];
$('#bwin').innerHTML=SITE.map((s,i)=>`<img src="a/${s[0]}.jpg" alt="Site do Shadow VPN, ${s[1]}" class="${i?'':'on'}" loading="${i?'lazy':'eager'}">`).join('');
$('#sdots').innerHTML=SITE.map((s,i)=>`<button type="button" aria-current="${i?'false':'true'}" aria-label="${s[1]}"></button>`).join('');
const imgs=$$('#bwin img'),dots=$$('#sdots button');let si=0,siT=0,siAuto=true;
function goSite(i){si=(i+imgs.length)%imgs.length;imgs.forEach((m,k)=>m.classList.toggle('on',k===si));dots.forEach((d,k)=>d.setAttribute('aria-current',k===si))}
$('#sdots').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;siAuto=false;goSite(dots.indexOf(b))});

/* ---- counters ---- */
function countUp(el){const to=+el.dataset.to;const t0=performance.now();const f=()=>{const k=eo((performance.now()-t0)/1200);el.textContent=Math.round(to*k);if(k<1)requestAnimationFrame(f)};f()}

/* ---- nav ---- */
const nav=$('#nav'),navInd=$('#navInd'),links=$$('.nav-l a');
links.forEach(a=>a.addEventListener('pointerenter',()=>{navInd.style.opacity=1;navInd.style.left=a.offsetLeft+'px';navInd.style.width=a.offsetWidth+'px'}));
$('.nav-l').addEventListener('pointerleave',()=>{const on=$('.nav-l a.on');if(on){navInd.style.left=on.offsetLeft+'px';navInd.style.width=on.offsetWidth+'px'}else navInd.style.opacity=0});
const secs=['simbolo','cores','tipografia','componentes','aplicacoes'].map(i=>document.getElementById(i));
let lastNavY=0;
function updNav(){const y=scrollY;nav.classList.toggle('hide',y>lastNavY+4&&y>VH*.6&&!nav.matches(':hover'));if(y<lastNavY-4)nav.classList.remove('hide');lastNavY=y;
  let cur=null;secs.forEach((s,i)=>{const r=s.getBoundingClientRect();if(r.top<VH*.42&&r.bottom>VH*.42)cur=i});
  links.forEach((a,i)=>a.classList.toggle('on',i===cur));
  if(!$('.nav-l').matches(':hover')){const on=links[cur];if(on){navInd.style.opacity=1;navInd.style.left=on.offsetLeft+'px';navInd.style.width=on.offsetWidth+'px'}else navInd.style.opacity=0}}

/* ---- cursor / magnetic / spotlight / tilt ---- */
const cur=$('.cur'),curR=$('.cur-r'),curL=$('#curL');let cx=VW/2,cy=VH/2,rx=cx,ry=cy,curOn=false;
addEventListener('pointermove',e=>{if(!curOn&&FINE&&!RM&&e.pointerType==='mouse'){curOn=true;document.body.classList.add('has-cur')}
  cx=e.clientX;cy=e.clientY;mX=e.clientX/VW;mY=e.clientY/VH;
  const el=e.target.closest&&e.target.closest('[data-cursor],a,button,input,label,.scr,.ad,.ban');
  const lbl=el&&el.dataset&&el.dataset.cursor==='label';
  curR.classList.toggle('lbl',!!lbl);curR.classList.toggle('big',!!(el&&!lbl));curL.textContent=lbl?el.dataset.label:''},{passive:true});
$$('.surf,.spec,.num,.cc,.lock,.rule,.browser').forEach(s=>{
  s.addEventListener('pointermove',e=>{const r=s.getBoundingClientRect();const x=e.clientX-r.left,y=e.clientY-r.top;s.style.setProperty('--mx',x+'px');s.style.setProperty('--my',y+'px');
    if(s.classList.contains('tilt')&&FINE&&!RM){s.style.setProperty('--try',((x/r.width-.5)*4)+'deg');s.style.setProperty('--trx',(-(y/r.height-.5)*4)+'deg')}});
  s.addEventListener('pointerleave',()=>{s.style.setProperty('--try','0deg');s.style.setProperty('--trx','0deg')})});

/* ---- reveals ---- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;el.classList.remove('pre');io.unobserve(el);
  if(el.classList.contains('num'))countUp(el.querySelector('b'))}),{rootMargin:'0px 0px -9% 0px'});
if(!RM){[...$$('.rv'),...$$('.split')].forEach(el=>{if(el.getBoundingClientRect().top>VH*.92){el.classList.add('pre');io.observe(el)}else if(el.classList.contains('num'))countUp(el.querySelector('b'))})}
else{$$('.num b').forEach(countUp)}

/* ---- loop ---- */
let last=performance.now(),skyDrawn=false;
function frame(t){
  const dt=Math.min(50,t-last);last=t;
  const y=scrollY;vel=lerp(vel,(y-lastSY)*16/Math.max(8,dt),1-Math.exp(-dt/90));lastSY=y;
  sX=lerp(sX,mX,.05);sY=lerp(sY,mY,.05);
  if(!RM||!skyDrawn){drawSky(t,dt);skyDrawn=true}
  const k=updCover();
  if(coverVisible&&(!RM||!skyDrawn))drawHalo(t,k);
  else if(coverVisible&&RM)drawHalo(t,k);
  updNav();
  if(siAuto&&t-siT>4200){siT=t;goSite(si+1)}
  rx=lerp(rx,cx,.18);ry=lerp(ry,cy,.18);cur.style.transform=`translate(${cx}px,${cy}px)`;curR.style.transform=`translate(${rx}px,${ry}px)`;
  requestAnimationFrame(frame);
}
addEventListener('resize',()=>{VW=innerWidth;VH=innerHeight;sizeSky();sizeHalo()});
requestAnimationFrame(()=>{cover.classList.add('on');requestAnimationFrame(frame)});
})();

