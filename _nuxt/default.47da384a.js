import{_ as N}from"./Times.e6d55be2.js";import{_ as T}from"./_plugin-vue_export-helper.c27b6911.js";import{o as d,c as y,a as e,f as j,i as z,j as D,r as b,E as F,g as $,y as C,q as m,h as v,C as _,n as s,J as h,b as n,w as r,m as R,G as H,H as q,t as G,L as J,F as O,s as P,d as u}from"./entry.e884ab23.js";import{_ as U}from"./nuxt-link.43644699.js";import{_ as W,a as K}from"./Loading.vue.176e7ede.js";import{u as Q}from"./useMyFetch.22e292ac.js";import"./client-only.3c130f39.js";import"./Loading.e2066479.js";const X={name:"CiHamburgerMd"},Y={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Z=e("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 17h14M5 12h14M5 7h14"},null,-1),tt=[Z];function et(S,g,x,o,k,w){return d(),y("svg",Y,tt)}const st=T(X,[["render",et]]),ot={class:"w-full h-full flex"},at={class:"relative h-full"},nt={class:"h-full flex flex-col p-2 overflow-hidden"},lt={class:"grow overflow-auto"},it={id:"panel",class:"h-7 text-xs relative"},rt={class:"w-full absolute bottom-full mb-2 bg-slate-700 bg-opacity-80 cursor-pointer"},ut={class:"grow flex flex-col overflow-hidden"},gt=j({__name:"default",setup(S){const g=z(),x=D(),o=b("");F(()=>x.path,(l,t)=>{let a=l.split("/");o.value="/"+(a.length>1?a[1]:"")},{immediate:!0});const{logUserOut:k}=$(),{authenticated:w}=C($()),{triggerSidebar:B}=m(),{is_sidebar_open:p}=C(m()),E=v("token"),L=async()=>{m().loading_full=!0;const{data:l,error:t,status:a}=await Q("/api/logout",{method:"post",headers:{Authorization:`Bearer ${E.value}`,Accept:"application/json"},retry:0});if(m().loading_full=!1,a.value==="error"){P().trigger(t);return}else k(),g.push("/login")};v("username");const M=v("fullname"),f=b(!1);return window.addEventListener("click",l=>{var a;const t=l.target;t instanceof Element&&((a=document==null?void 0:document.getElementById("panel"))!=null&&a.contains(t)||(f.value=!1))}),(l,t)=>{const a=N,V=st,i=U,A=W,I=K;return d(),y(O,null,[e("div",ot,[e("nav",{class:_([s(p)?"left-0":"right-full","bg-slate-800 h-full min-w-[150px] max-w-[150px] fixed sm:relative sm:right-0 text-white z-10"]),style:{width:"320px"}},[e("div",at,[e("button",{class:"absolute left-full h-12 text-2xl text-white bg-slate-500 sm:hidden",onClick:t[0]||(t[0]=c=>s(B)(!s(p)))},[s(p)?(d(),h(a,{key:0})):(d(),h(V,{key:1}))]),e("header",nt,[e("ul",lt,[e("li",{class:_(s(o)=="/"?"active":"")},[n(i,{to:"/",onClick:t[1]||(t[1]=c=>o.value="/")},{default:r(()=>[u("Dashboard")]),_:1})],2),e("li",{class:_(s(o)=="/data_satuan"?"active":"")},[n(i,{to:"/data_satuan",onClick:t[2]||(t[2]=c=>o.value="/data_satuan")},{default:r(()=>[u("Satuan")]),_:1})],2),e("li",{class:_(s(o)=="/data_item"?"active":"")},[n(i,{to:"/data_item",onClick:t[3]||(t[3]=c=>o.value="/data_item")},{default:r(()=>[u("Item")]),_:1})],2),e("li",{class:_(s(o)=="/data_transaksi"?"active":"")},[n(i,{to:"/data_transaksi",onClick:t[4]||(t[4]=c=>o.value="/data_transaksi")},{default:r(()=>[u("Transaksi")]),_:1})],2)]),e("div",it,[R(e("div",rt,[n(i,{to:"/profile",class:"block w-full text-left p-2 hover:bg-slate-900"},{default:r(()=>[u(" Setting ")]),_:1}),s(w)?(d(),h(i,{key:0,class:"block w-full text-left p-2 hover:bg-slate-900",onClick:L},{default:r(()=>[u(" Logout ")]),_:1})):q("",!0)],512),[[H,s(f)]]),e("div",{class:"bg-slate-700 bg-opacity-80 p-2 cursor-pointer",onClick:t[5]||(t[5]=c=>f.value=!s(f))},G(s(M)),1)])])])],2),e("div",ut,[J(l.$slots,"default")])]),n(A),n(I)],64)}}});export{gt as default};
