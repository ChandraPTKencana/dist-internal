import{_ as g}from"./HeaderCustom.vue.54b62ee5.js";import{f as y,g as x,h as b,r as k,i as C,j as $,k as A,l as S,o as j,c as B,b as D,a as o,m as U,v as V,n as u,t as q,q as l,s as m}from"./entry.51dda57b.js";import{u as p}from"./useMyFetch.6a432431.js";import"./_plugin-vue_export-helper.c27b6911.js";const F={class:"w-full h-full flex flex-col"},N={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},z={class:"w-full align-items-center justify-content-center grow overflow-auto"},E={class:"w-full flex flex-col flex-wrap p-1"},M=o("label",{for:""},"Name",-1),R={class:"text-red-500"},T={class:"w-full flex items-center justify-end"},K=y({__name:"form",async setup(H){let n,c;x();const d=b("token"),r=k({}),_=C(),f=$(),{data:i}=([n,c]=A(async()=>S(async()=>{const t=f.query.id;if(t!==void 0&&t!==""){l().loading_full=!0;const{data:e,error:a,status:s}=await p("/api/unit",{method:"get",headers:{Authorization:`Bearer ${d.value}`,Accept:"application/json"},params:{id:t},retry:0});if(l().loading_full=!1,s.value==="error")m().trigger(a,r);else return e.value.data}return{id:-1,name:""}},"$8CveVDoUp4")),n=await n,c(),n),v=async()=>{l().loading_full=!0,r.value={};const t=new FormData;t.append("name",i.value.name);let e="post",a=f.query.id;a===""||(e="post",t.append("id",a),t.append("_method","PUT"));const{data:s,error:w,status:h}=await p("/api/unit",{method:e,headers:{Authorization:`Bearer ${d.value}`,Accept:"application/json"},body:t,retry:0});if(l().loading_full=!1,h.value==="error"){m().trigger(w,r);return}_.go(-1)};return(t,e)=>{const a=g;return j(),B("div",F,[D(a,{title:"Form Unit",back:!0}),o("div",N,[o("div",z,[o("div",E,[M,U(o("input",{class:"",type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>u(i).name=s)},null,512),[[V,u(i).name]]),o("p",R,q(u(r).name),1)])]),o("div",T,[o("button",{type:"button",name:"button",class:"w-36 m-1",onClick:e[1]||(e[1]=s=>t.$router.go(-1))}," Cancel "),o("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:e[2]||(e[2]=s=>v())}," Save ")])])])}}});export{K as default};
