import{_ as z}from"./HeaderCustom.vue.158f1b50.js";import{n as D,v as E,E as A,q as F,C as f,x as N,y as q,R as C,o as r,c as l,b as P,B as x,a as o,I as h,J as v,t as g,z as S,W as $,P as J,D as I}from"./entry.a332f3c0.js";import{u as y}from"./useMyFetch.180857a5.js";import"./_plugin-vue_export-helper.c27b6911.js";const M={class:"w-full h-full flex flex-col"},R={key:0,class:"w-full flex grow flex-col overflow-auto bg-white"},T={class:"w-full items-center justify-center grow overflow-auto"},W={class:"flex p-1"},H={class:"w-96"},L={class:"grow"},Q={class:"flex flex-wrap flex-row"},G=["id","onUpdate:modelValue"],K=["for"],X=o("hr",null,null,-1),Y={class:"flex p-1"},Z={class:"w-96"},ee={class:"grow"},te={class:"flex flex-row flex-wrap"},se=["id","onUpdate:modelValue"],ae=["for"],oe={class:"w-full flex items-center justify-end"},pe=D({__name:"permission",async setup(ie){let c,k;const w=E();let u="";typeof w.query.id=="string"&&(u=w.query.id),(typeof w.query.id>"u"||u=="")&&A().display({show:!0,status:"Failed",message:"Url had something missing, contact IT support"});const p=F("token");f().loading_full=!0;const{data:b,error:ne,status:re}=([c,k]=N(async()=>q(async()=>{let t=[],s=[];const[n,a,e]=await Promise.all([y("/api/action_permissions",{method:"get",headers:{Authorization:`Bearer ${p.value}`,Accept:"application/json"},retry:0}),y("/api/data_permissions",{method:"get",headers:{Authorization:`Bearer ${p.value}`,Accept:"application/json"},retry:0}),y("/api/user/permissions",{method:"get",headers:{Authorization:`Bearer ${p.value}`,Accept:"application/json"},params:{id:u},retry:0})]);if(n.status.value!=="error"&&(t=n.data.value),a.status.value!=="error"&&(s=a.data.value),e.status.value!=="error"){let d=e.data.value,O=d.data.action_permissions.map(i=>i.id),U=d.data.data_permissions.map(i=>i.id);t.data.map(i=>(O.indexOf(i.id)>-1?i.check=!0:i.check=!1,i)),s.data.map(i=>(U.indexOf(i.id)>-1?i.check=!0:i.check=!1,i))}return{action_permissions:t,data_permissions:s}},"$WaAQe19y2y")),c=await c,k(),c);f().loading_full=!1;const m=b.value.action_permissions??[],_=b.value.data_permissions??[],B=async()=>{f().loading_full=!0;let t=new FormData;t.append("action_permissions",JSON.stringify(m.data.filter(e=>e.check))),t.append("data_permissions",JSON.stringify(_.data.filter(e=>e.check))),t.append("id",u),t.append("_method","PUT");const{data:s,error:n,status:a}=await y("/api/user/permissions",{method:"post",headers:{Authorization:`Bearer ${p.value}`,Accept:"application/json"},body:t,retry:0});a.value==="error"?I().trigger(n):A().display({show:!0,status:"Success",message:s.value.message}),f().loading_full=!1};let V=C(()=>{let t=[];return m.data&&m.data.length>0&&m.data.forEach(s=>{let n=t.map(a=>a.group).indexOf(s.name);n==-1?t.push({group:s.name,list:[s]}):t[n].list.push(s)}),t}),j=C(()=>{let t=[];return _.data&&_.data.length>0&&_.data.forEach(s=>{let n=t.map(a=>a.group).indexOf(s.table_name);n==-1?t.push({group:s.table_name,list:[s]}):t[n].list.push(s)}),t});return(t,s)=>{const n=z;return r(),l("div",M,[P(n,{title:"Form Permission",back:!0}),x(u)!=""?(r(),l("div",R,[o("div",T,[(r(!0),l(h,null,v(x(V),a=>(r(),l("div",W,[o("div",H,g(a.group),1),o("div",L,[(r(!0),l(h,null,v(a.list,e=>(r(),l("div",Q,[o("div",null,[S(o("input",{type:"checkbox",id:e.name+e.action,"onUpdate:modelValue":d=>e.check=d},null,8,G),[[$,e.check]]),o("label",{for:e.name+e.action},g(e.description),9,K)])]))),256))])]))),256)),X,(r(!0),l(h,null,v(x(j),a=>(r(),l("div",Y,[o("div",Z,g(a.group),1),o("div",ee,[(r(!0),l(h,null,v(a.list,e=>(r(),l("div",te,[o("div",null,[S(o("input",{type:"checkbox",id:e.table_name+e.field_name+e.status,"onUpdate:modelValue":d=>e.check=d},null,8,se),[[$,e.check]]),o("label",{for:e.table_name+e.field_name+e.status},g(e.description),9,ae)])]))),256))])]))),256))]),o("div",oe,[o("button",{type:"button",name:"button",class:"w-36 m-1",onClick:s[0]||(s[0]=a=>t.$router.go(-1))}," Cancel "),o("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:s[1]||(s[1]=a=>B())}," Save ")])])):J("",!0)])}}});export{pe as default};
