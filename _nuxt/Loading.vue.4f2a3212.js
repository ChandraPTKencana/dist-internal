import{_ as v}from"./client-only.4f57a191.js";import{_ as b}from"./Times.da067a70.js";import{f as m,x as i,y as u,m as d,G as p,n,o as x,c as g,a as s,b as a,w as y,t as f,q as C}from"./entry.f4a32d18.js";import{_ as $}from"./Loading.7d2bc729.js";const k={class:"h-full flex flex-row flex-wrap"},B={class:"flex flex-col flex-grow"},E={class:"flex items-center justify-center"},D=m({__name:"Alert",setup(w){i();const{show:e,status:c,message:r,permit_close:l}=u(i());return window.addEventListener("click",_=>{var o;const t=_.target;t instanceof Element&&!((o=document==null?void 0:document.getElementById("alert"))!=null&&o.contains(t))&&l.value&&(e.value=!1)}),(_,t)=>{const o=v,h=b;return d((x(),g("div",{id:"alert",class:"fixed w-full h-14 bg-slate-800 bottom-0 text-white p-1 border-t-2 border-slate-700 z-10",onClick:t[0]||(t[0]=I=>e.value=!1)},[s("div",k,[s("div",B,[a(o,null,{default:y(()=>[s("strong",null,f(n(c)),1),s("small",null,f(n(r)),1)]),_:1})]),s("div",E,[a(h,{class:"text-2xl cursor-pointer"})])])],512)),[[p,n(e)]])}}}),S={class:"fixed z-10 w-full h-full bg-slate-300 top-0 flex items-center justify-center text-4xl bg-opacity-90"},N=m({__name:"Loading",setup(w){const{loading_full:e}=u(C());return(c,r)=>{const l=$;return d((x(),g("div",S,[a(l)],512)),[[p,n(e)]])}}});export{D as _,N as a};
