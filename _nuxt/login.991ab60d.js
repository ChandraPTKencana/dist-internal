import{_ as v}from"./Loading.5856c6e0.js";import{f as y,B as r,A as b,I as k,r as d,g as C,o as S,c as V,a as s,j as c,l as m,m as e,t as u,s as g,J as j,b as B,d as E}from"./entry.9da6a2f2.js";import"./_plugin-vue_export-helper.c27b6911.js";const N={class:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"},T=s("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[s("img",{class:"mx-auto h-10 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:"Your Company"}),s("h2",{class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"},"Sign in to your account ")],-1),U={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},q={class:"space-y-6"},A=s("label",{for:"email",class:"block text-sm font-medium leading-6 text-gray-900"},"Email address",-1),D={class:"mt-2"},I={class:"sm:text-sm text-red-500"},M=s("div",{class:"flex items-center justify-between"},[s("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Password"),s("div",{class:"text-sm"})],-1),R={class:"mt-2"},z={class:"sm:text-sm text-red-500"},J=["disabled","onClick"],G=y({__name:"login",setup(L){const{authenticateUser:p}=r(),{trigger:f}=b(),{authenticated:x,loading:a}=k(r()),t=d({email:"chandra888lim@gmail.com",password:"chandra123"}),o=d({}),_=C(),h=async()=>{try{o.value={},await p({email:t.value.email,password:t.value.password}),x.value&&_.push("/")}catch(n){f(n,o)}finally{}};return(n,i)=>{const w=v;return S(),V("div",N,[T,s("div",U,[s("div",q,[s("div",null,[A,s("div",D,[c(s("input",{id:"email",name:"email",type:"email",autocomplete:"email",required:"",class:"block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6","onUpdate:modelValue":i[0]||(i[0]=l=>e(t).email=l)},null,512),[[m,e(t).email]]),s("div",I,u(e(o).email),1)])]),s("div",null,[M,s("div",R,[c(s("input",{id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",class:"block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6","onUpdate:modelValue":i[1]||(i[1]=l=>e(t).password=l)},null,512),[[m,e(t).password]]),s("div",z,u(e(o).password),1)])]),s("div",null,[s("button",{disabled:e(a),class:g([e(a)?"bg-indigo-500":"bg-indigo-600","flex w-full items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"]),onClick:j(h,["prevent"])},[s("div",{class:g([e(a)?"block":"hidden","mr-1"])},[B(w)],2),E(" Sign in ")],10,J)])])])])}}});export{G as default};