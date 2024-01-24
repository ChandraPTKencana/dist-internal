import{_ as w}from"./Loading.d4d988a2.js";import{n as v,u as d,D as y,F as k,r as c,s as S,o as V,c as B,a as s,z as u,A as m,B as e,K as a,t as g,N as C,b as N,d as U}from"./entry.acae6412.js";import"./_plugin-vue_export-helper.c27b6911.js";const j={class:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"},D=s("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[s("h2",{class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-500"},"Sign in to your account ")],-1),T={action:"#"},q={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},z={class:"space-y-6"},A=s("label",{for:"username",class:"block text-sm font-medium leading-6 text-gray-900"},"Username",-1),E={class:"mt-2"},M=["disabled"],R={class:"sm:text-sm text-red-500"},F=s("div",{class:"flex items-center justify-between"},[s("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Password"),s("div",{class:"text-sm"})],-1),I={class:"mt-2"},K=["disabled"],L={class:"sm:text-sm text-red-500"},P=["disabled","onClick"],Q=v({__name:"login",setup(G){const{authenticateUser:p}=d(),{trigger:f}=y(),{authenticated:x,loading:t}=k(d()),o=c({username:"",password:""}),i=c({}),_=S(),b=async()=>{try{i.value={},await p({username:o.value.username,password:o.value.password}),x.value&&_.push("/")}catch(l){f(l,i)}finally{}};return(l,n)=>{const h=w;return V(),B("div",j,[D,s("form",T,[s("div",q,[s("div",z,[s("div",null,[A,s("div",E,[u(s("input",{disabled:e(t),class:a([e(t)?"bg-gray-300":"bg-white-500","block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"]),id:"username",name:"username",type:"text",autocomplete:"username",required:"","onUpdate:modelValue":n[0]||(n[0]=r=>e(o).username=r)},null,10,M),[[m,e(o).username]]),s("div",R,g(e(i).username),1)])]),s("div",null,[F,s("div",I,[u(s("input",{disabled:e(t),class:a([e(t)?"bg-gray-300":"bg-white-500","block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"]),id:"password",name:"password",type:"password",autocomplete:"current-password",required:"","onUpdate:modelValue":n[1]||(n[1]=r=>e(o).password=r)},null,10,K),[[m,e(o).password]]),s("div",L,g(e(i).password),1)])]),s("div",null,[s("button",{disabled:e(t),class:a([e(t)?"bg-blue-300":"bg-blue-500","flex w-full items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"]),onClick:C(b,["prevent"])},[s("div",{class:a([e(t)?"block":"hidden","mr-1"])},[N(h)],2),U(" Sign in ")],10,P)])])])])])}}});export{Q as default};
