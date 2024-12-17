import{_ as h}from"./Loading.4b065e37.js";import{n as v,u as c,D as y,F as k,r as u,s as S,o as U,c as V,a as e,z as m,A as g,B as s,K as r,t as p,U as B,b as C,d as E}from"./entry.d9e34c83.js";import"./_plugin-vue_export-helper.c27b6911.js";const j={class:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"},D=e("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[e("h2",{class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-500"},"Sign in to your account ")],-1),N={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},T={class:"space-y-6"},q=e("label",{for:"username",class:"block text-sm font-medium leading-6 text-gray-900"},"Username",-1),z={class:"mt-2"},A=["disabled"],L={class:"sm:text-sm text-red-500"},M=e("div",{class:"flex items-center justify-between"},[e("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Password"),e("div",{class:"text-sm"})],-1),R={class:"mt-2"},F=["disabled"],I={class:"sm:text-sm text-red-500"},K=["disabled","onClick"],O=v({__name:"login",setup(P){const{authenticateUser:f}=c(),{trigger:x}=y(),{authenticated:_,loading:t}=k(c()),o=u({username:"",password:""}),n=u({}),b=S(),d=async()=>{try{n.value={},await f({username:o.value.username,password:o.value.password}),_.value&&b.push("/")}catch(i){x(i,n)}finally{}};return window.addEventListener("keypress",i=>{i.key==="Enter"&&d()}),(i,a)=>{const w=h;return U(),V("div",j,[D,e("div",N,[e("div",T,[e("div",null,[q,e("div",z,[m(e("input",{disabled:s(t),class:r([s(t)?"bg-gray-300":"bg-white-500","block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"]),id:"username",name:"username",type:"text",autocomplete:"username",required:"","onUpdate:modelValue":a[0]||(a[0]=l=>s(o).username=l)},null,10,A),[[g,s(o).username]]),e("div",L,p(s(n).username),1)])]),e("div",null,[M,e("div",R,[m(e("input",{disabled:s(t),class:r([s(t)?"bg-gray-300":"bg-white-500","block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"]),id:"password",name:"password",type:"password",autocomplete:"current-password",required:"","onUpdate:modelValue":a[1]||(a[1]=l=>s(o).password=l)},null,10,F),[[g,s(o).password]]),e("div",I,p(s(n).password),1)])]),e("div",null,[e("button",{disabled:s(t),class:r([s(t)?"bg-blue-300":"bg-blue-500","flex w-full items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"]),onClick:B(d,["prevent"])},[e("div",{class:r([s(t)?"block":"hidden","mr-1"])},[C(w)],2),E(" Sign in ")],10,K)])])])])}}});export{O as default};
