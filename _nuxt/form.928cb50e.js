import{_ as y}from"./HeaderCustom.vue.225588ef.js";import{n as g,u as x,q as b,r as C,s as k,v as A,x as $,y as B,o as D,c as S,b as j,a as o,z as N,A as U,B as u,t as V,N as q,C as l,D as m}from"./entry.420e308f.js";import{u as p}from"./useMyFetch.15daebb2.js";import"./_plugin-vue_export-helper.c27b6911.js";const z={class:"w-full h-full flex flex-col"},F={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},M={class:"w-full align-items-center justify-content-center grow overflow-auto"},E={class:"w-full flex flex-col flex-wrap p-1"},R=o("label",{for:""},"Name",-1),T={class:"text-red-500"},H={class:"w-full flex items-center justify-end"},L=g({__name:"form",async setup(P){let n,c;x();const d=b("token"),r=C({}),_=k(),f=A(),{data:i}=([n,c]=$(async()=>B(async()=>{const t=f.query.id;if(t!==void 0&&t!==""){l().loading_full=!0;const{data:e,error:a,status:s}=await p("/api/unit",{method:"get",headers:{Authorization:`Bearer ${d.value}`,Accept:"application/json"},params:{id:t},retry:0});if(l().loading_full=!1,s.value==="error")m().trigger(a,r);else return e.value.data}return{id:-1,name:""}},"$8CveVDoUp4")),n=await n,c(),n),v=async()=>{l().loading_full=!0,r.value={};const t=new FormData;t.append("name",i.value.name);let e="post",a=f.query.id;a===""||(e="post",t.append("id",a),t.append("_method","PUT"));const{data:s,error:w,status:h}=await p("/api/unit",{method:e,headers:{Authorization:`Bearer ${d.value}`,Accept:"application/json"},body:t,retry:0});if(l().loading_full=!1,h.value==="error"){m().trigger(w,r);return}_.go(-1)};return(t,e)=>{const a=y;return D(),S("div",z,[j(a,{title:"Form Unit",back:!0}),o("form",F,[o("div",M,[o("div",E,[R,N(o("input",{class:"",type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>u(i).name=s)},null,512),[[U,u(i).name]]),o("p",T,V(u(r).name),1)])]),o("div",H,[o("button",{type:"button",name:"button",class:"w-36 m-1",onClick:e[1]||(e[1]=s=>t.$router.go(-1))}," Cancel "),o("button",{type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:e[2]||(e[2]=q(s=>v(),["prevent"]))}," Save ")])])])}}});export{L as default};
