import{_ as h}from"./client-only.42c83ada.js";import{_ as v}from"./Times.2e8271aa.js";import{n as i,E as _,F as m,z as f,M as u,B as t,o as p,c as d,a as e,b as n,w as b,t as c,K as C,C as y}from"./entry.9c36b995.js";import{_ as z}from"./Loading.ae3dd156.js";const B={class:"h-full flex flex-row flex-wrap overflow-y-auto"},S={class:"flex flex-col flex-grow"},I=i({__name:"Alert",setup(x){_();const{show:s,status:o,message:l,permit_close:a}=m(_());return(k,r)=>{const w=h,g=v;return f((p(),d("div",{id:"alert",class:C(["fixed w-full h-14 bottom-0 text-white p-1 border-t-2 border-slate-700 z-10",t(o)=="Failed"?"bg-red-800 ":"bg-slate-800 "])},[e("div",B,[e("div",S,[n(w,null,{default:b(()=>[e("strong",null,c(t(o)),1),e("small",null,c(t(l)),1)]),_:1})]),e("div",{class:"flex items-center justify-center",onClick:r[0]||(r[0]=j=>s.value=!1)},[n(g,{class:"text-2xl cursor-pointer"})])])],2)),[[u,t(s)]])}}}),$={class:"fixed z-10 w-full h-full bg-slate-300 top-0 flex items-center justify-center text-4xl bg-opacity-90"},L=i({__name:"Loading",setup(x){const{loading_full:s}=m(y());return(o,l)=>{const a=z;return f((p(),d("div",$,[n(a)],512)),[[u,t(s)]])}}});export{I as _,L as a};
