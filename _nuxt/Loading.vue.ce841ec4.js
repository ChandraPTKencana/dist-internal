import{_ as w}from"./client-only.8ebe2e50.js";import{_ as v}from"./Times.b5ba5fac.js";import{n as i,E as _,F as m,z as f,M as p,B as t,o as u,c as d,a as e,b as n,w as b,t as c,K as C,C as y}from"./entry.99c205a0.js";import{_ as $}from"./Loading.f2ea7dfa.js";const z={class:"h-full flex flex-row flex-wrap"},B={class:"flex flex-col flex-grow"},I=i({__name:"Alert",setup(x){_();const{show:s,status:o,message:l,permit_close:a}=m(_());return(k,r)=>{const g=w,h=v;return f((u(),d("div",{id:"alert",class:C(["fixed w-full h-14 bottom-0 text-white p-1 border-t-2 border-slate-700 z-10",t(o)=="Failed"?"bg-red-800 ":"bg-slate-800 "])},[e("div",z,[e("div",B,[n(g,null,{default:b(()=>[e("strong",null,c(t(o)),1),e("small",null,c(t(l)),1)]),_:1})]),e("div",{class:"flex items-center justify-center",onClick:r[0]||(r[0]=j=>s.value=!1)},[n(h,{class:"text-2xl cursor-pointer"})])])],2)),[[p,t(s)]])}}}),S={class:"fixed z-10 w-full h-full bg-slate-300 top-0 flex items-center justify-center text-4xl bg-opacity-90"},L=i({__name:"Loading",setup(x){const{loading_full:s}=m(y());return(o,l)=>{const a=$;return f((u(),d("div",S,[n(a)],512)),[[p,t(s)]])}}});export{I as _,L as a};
