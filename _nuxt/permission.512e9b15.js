import{_ as U}from"./HeaderCustom.vue.328d5b61.js";import{f as N,j as q,x as A,h as z,q as f,k as D,l as E,I as C,o as r,c as l,b as P,n as x,a as o,F as h,B as v,t as g,m as S,P as $,H,s as I}from"./entry.329d3af5.js";import{u as y}from"./useMyFetch.05845d3c.js";import"./_plugin-vue_export-helper.c27b6911.js";const J={class:"w-full h-full flex flex-col"},M={key:0,class:"w-full flex grow flex-col overflow-auto bg-white"},T={class:"w-full items-center justify-center grow overflow-auto"},L={class:"flex p-1"},Q={class:"w-96"},R={class:"grow"},W={class:"flex flex-wrap flex-row"},G=["id","onUpdate:modelValue"],K=["for"],X=o("hr",null,null,-1),Y={class:"flex p-1"},Z={class:"w-96"},ee={class:"grow"},te={class:"flex flex-row flex-wrap"},se=["id","onUpdate:modelValue"],ae=["for"],oe={class:"w-full flex items-center justify-end"},pe=N({__name:"permission",async setup(ie){let c,k;const w=q();let u="";typeof w.query.id=="string"&&(u=w.query.id),(typeof w.query.id>"u"||u=="")&&A().display({show:!0,status:"Failed",message:"Url had something missing, contact IT support"});const p=z("token");f().loading_full=!0;const{data:b,error:ne,status:re}=([c,k]=D(async()=>E(async()=>{let t=[],s=[];const[n,a,e]=await Promise.all([y("/api/action_permissions",{method:"get",headers:{Authorization:`Bearer ${p.value}`,Accept:"application/json"},retry:0}),y("/api/data_permissions",{method:"get",headers:{Authorization:`Bearer ${p.value}`,Accept:"application/json"},retry:0}),y("/api/user/permissions",{method:"get",headers:{Authorization:`Bearer ${p.value}`,Accept:"application/json"},params:{id:u},retry:0})]);if(n.status.value!=="error"&&(t=n.data.value),a.status.value!=="error"&&(s=a.data.value),e.status.value!=="error"){let d=e.data.value,F=d.data.action_permissions.map(i=>i.id),O=d.data.data_permissions.map(i=>i.id);t.data.map(i=>(F.indexOf(i.id)>-1?i.check=!0:i.check=!1,i)),s.data.map(i=>(O.indexOf(i.id)>-1?i.check=!0:i.check=!1,i))}return{action_permissions:t,data_permissions:s}},"$WaAQe19y2y")),c=await c,k(),c);f().loading_full=!1;const m=b.value.action_permissions??[],_=b.value.data_permissions??[],B=async()=>{f().loading_full=!0;let t=new FormData;t.append("action_permissions",JSON.stringify(m.data.filter(e=>e.check))),t.append("data_permissions",JSON.stringify(_.data.filter(e=>e.check))),t.append("id",u),t.append("_method","PUT");const{data:s,error:n,status:a}=await y("/api/user/permissions",{method:"post",headers:{Authorization:`Bearer ${p.value}`,Accept:"application/json"},body:t,retry:0});a.value==="error"?I().trigger(n):A().display({show:!0,status:"Success",message:s.value.message}),f().loading_full=!1};let j=C(()=>{let t=[];return m.data&&m.data.length>0&&m.data.forEach(s=>{let n=t.map(a=>a.group).indexOf(s.name);n==-1?t.push({group:s.name,list:[s]}):t[n].list.push(s)}),t}),V=C(()=>{let t=[];return _.data&&_.data.length>0&&_.data.forEach(s=>{let n=t.map(a=>a.group).indexOf(s.table_name);n==-1?t.push({group:s.table_name,list:[s]}):t[n].list.push(s)}),t});return(t,s)=>{const n=U;return r(),l("div",J,[P(n,{title:"Form Permission",back:!0}),x(u)!=""?(r(),l("div",M,[o("div",T,[(r(!0),l(h,null,v(x(j),a=>(r(),l("div",L,[o("div",Q,g(a.group),1),o("div",R,[(r(!0),l(h,null,v(a.list,e=>(r(),l("div",W,[o("div",null,[S(o("input",{type:"checkbox",id:e.name+e.action,"onUpdate:modelValue":d=>e.check=d},null,8,G),[[$,e.check]]),o("label",{for:e.name+e.action},g(e.description),9,K)])]))),256))])]))),256)),X,(r(!0),l(h,null,v(x(V),a=>(r(),l("div",Y,[o("div",Z,g(a.group),1),o("div",ee,[(r(!0),l(h,null,v(a.list,e=>(r(),l("div",te,[o("div",null,[S(o("input",{type:"checkbox",id:e.table_name+e.field_name+e.status,"onUpdate:modelValue":d=>e.check=d},null,8,se),[[$,e.check]]),o("label",{for:e.table_name+e.field_name+e.status},g(e.description),9,ae)])]))),256))])]))),256))]),o("div",oe,[o("button",{type:"button",name:"button",class:"w-36 m-1",onClick:s[0]||(s[0]=a=>t.$router.go(-1))}," Cancel "),o("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white p-2 rounded-sm",onClick:s[1]||(s[1]=a=>B())}," Save ")])])):H("",!0)])}}});export{pe as default};
