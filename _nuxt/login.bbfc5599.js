import{_ as h}from"./Loading.a01c6ea9.js";import{f as v,g as c,s as y,y as k,r as u,i as C,o as S,c as V,a as e,m,v as g,n as s,C as r,t as p,N as E,b as N,d as U}from"./entry.9f5b891d.js";import"./_plugin-vue_export-helper.c27b6911.js";const j={class:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"},B=e("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[e("h2",{class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-500"},"Sign in to your account ")],-1),T={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},q={class:"space-y-6"},D=e("label",{for:"username",class:"block text-sm font-medium leading-6 text-gray-900"},"Username",-1),L={class:"mt-2"},M=["disabled"],R={class:"sm:text-sm text-red-500"},z=e("div",{class:"flex items-center justify-between"},[e("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Password"),e("div",{class:"text-sm"})],-1),A={class:"mt-2"},I=["disabled"],P={class:"sm:text-sm text-red-500"},F=["disabled","onClick"],O=v({__name:"login",setup(G){const{authenticateUser:f}=c(),{trigger:x}=y(),{authenticated:_,loading:t}=k(c()),o=u({username:"",password:""}),i=u({}),b=C(),d=async()=>{try{i.value={},await f({username:o.value.username,password:o.value.password}),_.value&&b.push("/")}catch(n){x(n,i)}finally{}};return window.addEventListener("keypress",n=>{n.key==="Enter"&&d()}),(n,a)=>{const w=h;return S(),V("div",j,[B,e("div",T,[e("div",q,[e("div",null,[D,e("div",L,[m(e("input",{disabled:s(t),class:r([s(t)?"bg-gray-300":"bg-white-500","block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"]),id:"username",name:"username",type:"text",autocomplete:"username",required:"","onUpdate:modelValue":a[0]||(a[0]=l=>s(o).username=l)},null,10,M),[[g,s(o).username]]),e("div",R,p(s(i).username),1)])]),e("div",null,[z,e("div",A,[m(e("input",{disabled:s(t),class:r([s(t)?"bg-gray-300":"bg-white-500","block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"]),id:"password",name:"password",type:"password",autocomplete:"current-password",required:"","onUpdate:modelValue":a[1]||(a[1]=l=>s(o).password=l)},null,10,I),[[g,s(o).password]]),e("div",P,p(s(i).password),1)])]),e("div",null,[e("button",{disabled:s(t),class:r([s(t)?"bg-blue-300":"bg-blue-500","flex w-full items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"]),onClick:E(d,["prevent"])},[e("div",{class:r([s(t)?"block":"hidden","mr-1"])},[N(w)],2),U(" Sign in ")],10,F)])])])])}}});export{O as default};
