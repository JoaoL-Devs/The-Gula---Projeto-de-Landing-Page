/* ===== Edite aqui ===== */
const WA = "5500000000000"; // WhatsApp com DDI+DDD
const PRODUCTS = [
 {name:"The Classic",desc:"Blend bovino, queijo prato, alface, tomate e molho da casa.",price:32,hue:0},
 {name:"The Bacon",desc:"Blend, cheddar, bacon crocante e maionese defumada.",price:36,hue:-8},
 {name:"The Cheese",desc:"Blend e três queijos derretidos no pão de brioche.",price:35,hue:6},
 {name:"The BBQ",desc:"Blend, cebola caramelizada, onion rings e barbecue.",price:38,hue:-14},
 {name:"The Duplo",desc:"Dois blends, dobro de queijo e a vontade em dobro.",price:44,hue:10}
];
const MEDIA = {
 /* Arquivos de mídia em assets/; caminhos relativos ao index.html. */
 video:"assets/hamburguer-montagem.mp4",
 poster:"assets/hamburguer-poster.jpg", /* 1º frame do vídeo (JPG) — aparece enquanto o vídeo carrega */
 hero:"assets/hero-the-gula.jpg",     /* Imagem de fundo da Hero */
 final:"assets/hamburguer-final.jpg", fries:"assets/batata-frita.jpg", cta:"assets/cta-the-gula.jpg" /* final = cards; fries = Seção 3; cta = fundo da Seção 7 (16:9) */
};
/* ====================== */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const wa=m=>`https://wa.me/${WA}?text=${encodeURIComponent(m||"Oi! Quero fazer um pedido na The Gula.")}`;
$$("[data-wa]").forEach(a=>{a.href=wa(a.dataset.msg);a.target="_blank";a.rel="noopener"});
$$("[data-img]").forEach(i=>i.src=MEDIA[i.dataset.img]);
$("#grid").innerHTML=PRODUCTS.map(p=>`<article class="card"><div class="ph"><img src="${MEDIA.final}" alt="${p.name}" loading="lazy" style="filter:hue-rotate(${p.hue}deg) saturate(1.1)"></div><div class="tx"><h3>${p.name}</h3><p>${p.desc}</p><div class="row"><span class="price">R$ ${p.price.toFixed(2).replace(".",",")}</span><a class="btn sm" target="_blank" rel="noopener" href="${wa("Quero o "+p.name)}">Pedir</a></div></div></article>`).join("");

const sv=$("#scrubVid"), cv=$("#scrubSeq"), reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
/* Desktop: <video> controlado pelo scroll. Celular (≤860px): sequência de quadros em <canvas>
   (assets/frames/f000.webp … f063.webp), que funciona no Safari/iOS mesmo no Modo de Pouca Energia. */
const MOBILE=matchMedia("(max-width:860px)");
const FRAMES={count:64,path:i=>`assets/frames/f${String(i).padStart(3,"0")}.webp`};
let useSeq=MOBILE.matches, seq=[], vidLoaded=false, target=0, cur=0, ticking=false;
const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));
function loadVideo(){ if(vidLoaded)return; vidLoaded=true; sv.poster=MEDIA.poster; sv.src=MEDIA.video; }
function loadFrames(){
 if(seq.length)return;
 for(let i=0;i<FRAMES.count;i++){const im=new Image(); im.decoding="async"; im.onload=()=>paint(cur); im.src=FRAMES.path(i); seq.push(im);}
}
const ctx=cv.getContext("2d");
function paint(pos){ /* desenha o quadro atual e mistura com o próximo (movimento suave) */
 const n=FRAMES.count-1, p=clamp(pos,0,n), i=Math.floor(p), f=p-i;
 const ok=k=>seq[k]&&seq[k].complete&&seq[k].naturalWidth;
 let a=i; while(a>0&&!ok(a))a--;
 if(!ok(a))return;
 ctx.globalAlpha=1; ctx.drawImage(seq[a],0,0);
 if(a===i&&f>.02&&i<n&&ok(i+1)){ctx.globalAlpha=f; ctx.drawImage(seq[i+1],0,0); ctx.globalAlpha=1;}
}

/* header + menu */
const head=$("#top");
addEventListener("scroll",()=>head.classList.toggle("solid",scrollY>40),{passive:true});
$("#burger").onclick=e=>{const o=head.classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",o)};
$$("#nav a").forEach(a=>a.onclick=()=>head.classList.remove("open"));

/* scrub do hambúrguer pelo scroll */
const sec=$("#montagem"), caps=$$(".cap h2"), pin=$(".pin");
const HOLD=.88, PHASES=[.25,.5,.75,.92]; /* montagem termina em 88% do scroll; 88–100% = burger completo */
function setCap(p){const i=PHASES.findIndex(x=>p<x);caps.forEach((c,k)=>c.classList.toggle("on",k===(i<0?4:i)))}
function read(){
 if(!(useSeq?seq.length:isFinite(sv.duration)))return; /* vídeo: aguarda loadedmetadata */
 const r=sec.getBoundingClientRect(), p=clamp(-r.top/(r.height-innerHeight),0,1), q=clamp(p/HOLD,0,1);
 target=useSeq?q*(FRAMES.count-1):q*sv.duration*.995; /* scroll -> quadro / video.currentTime */
 pin.style.setProperty("--p",q); setCap(p);
 if(!ticking){ticking=true;requestAnimationFrame(tick)}
}
function tick(){
 cur+=(target-cur)*.18;
 const done=Math.abs(target-cur)<=.01, v=done?target:cur;
 if(useSeq)paint(v); else sv.currentTime=v;
 if(done)ticking=false; else requestAnimationFrame(tick);
}
function setMode(){ useSeq=MOBILE.matches; cur=0; if(useSeq)loadFrames(); else loadVideo(); read(); }
if(reduce){
 setCap(1); pin.style.setProperty("--p",1);
 if(useSeq){loadFrames(); cur=FRAMES.count-1;} else {loadVideo(); sv.addEventListener("loadedmetadata",()=>{sv.currentTime=sv.duration})}
}else{
 setMode();
 addEventListener("scroll",read,{passive:true}); addEventListener("resize",read);
 sv.addEventListener("loadedmetadata",read);
 (MOBILE.addEventListener?MOBILE.addEventListener("change",setMode):MOBILE.addListener(setMode));
}

/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
$$(".rv").forEach(el=>io.observe(el));

/* Diagnóstico: abra o site com #debug no final da URL para listar arquivos que não carregaram */
const failed=[];
addEventListener("error",e=>{const el=e.target; if(el&&/^(IMG|VIDEO|SOURCE)$/.test(el.tagName)){
 failed.push(el.currentSrc||el.src); console.warn("[The Gula] não carregou:",el.currentSrc||el.src);
 if(location.hash==="#debug"){let d=$("#dbg"); if(!d){d=document.createElement("pre"); d.id="dbg"; d.style.cssText="position:fixed;left:8px;right:8px;bottom:8px;z-index:99;max-height:40vh;overflow:auto;margin:0;padding:10px;background:#000c;color:#ff8;font:11px/1.4 monospace;white-space:pre-wrap"; document.body.appendChild(d)} d.textContent="Não carregou:\n"+failed.join("\n")}}
},true);
