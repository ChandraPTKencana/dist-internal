import{_ as y}from"./HeaderCustom.vue.effe218f.js";import{n as g,u as x,q as b,r as C,s as k,v as A,x as $,y as B,o as S,c as D,b as j,a as o,z as q,A as z,B as i,t as F,C as l,D as m}from"./entry.ec4c8bb4.js";import{u as p}from"./useMyFetch.3c1eeec2.js";import"./_plugin-vue_export-helper.c27b6911.js";const N={class:"w-full h-full flex flex-col"},V={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},E={class:"w-full align-items-center justify-content-center grow overflow-auto"},M={class:"w-full flex flex-col flex-wrap p-1"},R=o("label",{for:""},"Name",-1),T={class:"text-red-500"},U={class:"w-full flex items-center justify-end"},I=g({__name:"form",async setup(Z){let r,c;x();const d=b("token"),n=C({}),_=k(),f=A(),{data:u}=([r,c]=$(async()=>B(async()=>{const t=f.query.id;if(t!==void 0&&t!==""){l().loading_full=!0;const{data:e,error:a,status:s}=await p("/api/warehouse",{method:"get",headers:{Authorization:`Bearer ${d.value}`,Accept:"application/json"},params:{id:t},retry:0});if(l().loading_full=!1,s.value==="error")m().trigger(a,n);else return e.value.data}return{id:-1,name:""}},"$4lZZ85p0B5")),r=await r,c(),r),w=async()=>{l().loading_full=!0,n.value={};const t=new FormData;t.append("name",u.value.name);let e="post",a=f.query.id;a===""||(e="post",t.append("id",a),t.append("_method","PUT"));const{data:s,error:h,status:v}=await p("/api/warehouse",{method:e,headers:{Authorization:`Bearer ${d.value}`,Accept:"application/json"},body:t,retry:0});if(l().loading_full=!1,v.value==="error"){m().trigger(h,n);return}_.go(-1)};return(t,e)=>{const a=y;return S(),D("div",N,[j(a,{title:"Form Warehouse",back:!0}),o("div",V,[o("div",E,[o("div",M,[R,q(o("input",{class:"",type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>i(u).name=s)},null,512),[[z,i(u).name]]),o("p",T,F(i(n).name),1)])]),o("div",U,[o("button",{type:"button",name:"button",class:"w-36 m-1",onClick:e[1]||(e[1]=s=>t.$router.go(-1))}," Cancel "),o("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:e[2]||(e[2]=s=>w())}," Save ")])])])}}});export{I as default};
