import{_ as N}from"./Times.a8de5950.js";import{_ as P}from"./_plugin-vue_export-helper.c27b6911.js";import{o as n,c as m,a as s,f as T,i as U,j,r as y,E as z,g as _,y as S,q as h,h as k,C as f,n as t,J as x,b as l,w as u,H as v,m as D,G as F,t as H,L as q,F as G,s as J,d as c}from"./entry.a14acbe4.js";import{_ as O}from"./nuxt-link.bc319999.js";import{_ as W,a as K}from"./Loading.vue.8af193cf.js";import{u as Q}from"./useMyFetch.1501082e.js";import"./client-only.f016f05b.js";import"./Loading.f1958948.js";const X={name:"CiHamburgerMd"},Y={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Z=s("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 17h14M5 12h14M5 7h14"},null,-1),ee=[Z];function te(B,w,b,o,C,$){return n(),m("svg",Y,ee)}const se=P(X,[["render",te]]),oe={class:"w-full h-full flex"},ae={class:"relative h-full"},ne={class:"h-full flex flex-col p-2 overflow-hidden"},le={class:"grow overflow-auto"},re={id:"panel",class:"h-7 text-xs relative"},ie={class:"w-full absolute bottom-full mb-2 bg-slate-700 bg-opacity-80 cursor-pointer"},ue={class:"grow flex flex-col overflow-hidden"},ge=T({__name:"default",setup(B){const w=U(),b=j(),o=y("");z(()=>b.path,(r,e)=>{let a=r.split("/");o.value="/"+(a.length>1?a[1]:"")},{immediate:!0});const{logUserOut:C}=_(),{authenticated:$}=S(_()),{triggerSidebar:A}=h(),{is_sidebar_open:g}=S(h()),E=k("token"),L=async()=>{h().loading_full=!0;const{data:r,error:e,status:a}=await Q("/api/logout",{method:"post",headers:{Authorization:`Bearer ${E.value}`,Accept:"application/json"},retry:0});if(h().loading_full=!1,a.value==="error"){J().trigger(e);return}else C(),w.push("/login")};k("username");const M=k("fullname"),p=y(!1);return window.addEventListener("click",r=>{var a;const e=r.target;e instanceof Element&&((a=document==null?void 0:document.getElementById("panel"))!=null&&a.contains(e)||(p.value=!1))}),(r,e)=>{const a=N,R=se,i=O,V=W,I=K;return n(),m(G,null,[s("div",oe,[s("nav",{class:f([t(g)?"left-0":"right-full","bg-slate-800 h-full min-w-[150px] max-w-[150px] fixed sm:relative sm:right-0 text-white z-10"]),style:{width:"320px"}},[s("div",ae,[s("button",{class:"absolute left-full h-12 text-2xl text-white bg-slate-500 sm:hidden",onClick:e[0]||(e[0]=d=>t(A)(!t(g)))},[t(g)?(n(),x(a,{key:0})):(n(),x(R,{key:1}))]),s("header",ne,[s("ul",le,[s("li",{class:f(t(o)=="/"?"active":"")},[l(i,{to:"/",onClick:e[1]||(e[1]=d=>o.value="/")},{default:u(()=>[c("Dashboard")]),_:1})],2),t(_)().checkRole(["Super Admin","ClientPabrik","User"])?(n(),m("li",{key:0,class:f(t(o)=="/data_satuan"?"active":"")},[l(i,{to:"/data_satuan",onClick:e[2]||(e[2]=d=>o.value="/data_satuan")},{default:u(()=>[c("Satuan")]),_:1})],2)):v("",!0),t(_)().checkRole(["Super Admin","ClientPabrik","User"])?(n(),m("li",{key:1,class:f(t(o)=="/data_item"?"active":"")},[l(i,{to:"/data_item",onClick:e[3]||(e[3]=d=>o.value="/data_item")},{default:u(()=>[c("Item")]),_:1})],2)):v("",!0),t(_)().checkRole(["Super Admin","ClientPabrik","User"])?(n(),m("li",{key:2,class:f(t(o)=="/data_transaksi"?"active":"")},[l(i,{to:"/data_transaksi",onClick:e[4]||(e[4]=d=>o.value="/data_transaksi")},{default:u(()=>[c("Transaksi")]),_:1})],2)):v("",!0)]),s("div",re,[D(s("div",ie,[l(i,{to:"/profile",class:"block w-full text-left p-2 hover:bg-slate-900"},{default:u(()=>[c(" Setting ")]),_:1}),t($)?(n(),x(i,{key:0,class:"block w-full text-left p-2 hover:bg-slate-900",onClick:L},{default:u(()=>[c(" Logout ")]),_:1})):v("",!0)],512),[[F,t(p)]]),s("div",{class:"bg-slate-700 bg-opacity-80 p-2 cursor-pointer",onClick:e[5]||(e[5]=d=>p.value=!t(p))},H(t(M)),1)])])])],2),s("div",ue,[q(r.$slots,"default")])]),l(V),l(I)],64)}}});export{ge as default};
