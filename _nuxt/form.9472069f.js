import{_ as k}from"./HeaderCustom.vue.7bddd9cf.js";import{f as A,g as S,h as U,r as C,i as V,j as $,k as j,l as M,o as B,c as q,b as N,a as e,m as i,v as _,n as s,t as d,A as v,q as c,s as w}from"./entry.551cd03e.js";import{u as x}from"./useMyFetch.716fa7cc.js";import"./_plugin-vue_export-helper.c27b6911.js";const z={class:"w-full h-full flex flex-col"},D={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},E={class:"w-full align-items-center justify-content-center grow overflow-auto"},F={class:"w-full flex flex-col flex-wrap p-1"},H=e("label",{for:""},"Email",-1),I={class:"text-red-500"},J={class:"w-full flex flex-col flex-wrap p-1"},R=e("label",{for:""},"Nama Identitas",-1),T={class:"text-red-500"},K={class:"w-full flex flex-col flex-wrap p-1"},Y=e("label",{for:""},"Kata Sandi",-1),G={class:"text-red-500"},L={class:"w-full flex flex-col flex-wrap p-1"},O=e("label",{for:""},"Jabatan",-1),P=e("option",{value:"User"},"User",-1),Q=e("option",{value:"Admin"},"Admin",-1),W=e("option",{value:"Marketing"},"Marketing",-1),X=e("option",{value:"Super_Admin"},"Super Admin",-1),Z=[P,Q,W,X],ee={class:"text-red-500"},te={class:"w-full flex",style:{"flex-flow":"column wrap",padding:"4px"}},oe=e("label",{for:""},"Izinkan Masuk?",-1),se=e("option",{value:"1"},"Ya",-1),le=e("option",{value:"0"},"Tidak",-1),ae=[se,le],ne={class:"text-red-500"},re={class:"w-full flex items-center justify-end"},pe=A({__name:"form",async setup(ie){let u,p;S();const f=U("token"),a=C({}),h=V(),m=$(),{data:o}=([u,p]=j(async()=>M(async()=>{const n=m.query.id;if(n!==void 0&&n!==""){c().loading_full=!0;const{data:t,error:r,status:l}=await x("/api/user",{method:"get",headers:{Authorization:`Bearer ${f.value}`,Accept:"application/json"},params:{id:n},retry:0});if(c().loading_full=!1,l.value==="error")w().trigger(r,a);else return t.value.data}return{id:-1,email:"",fullname:"",password:"",role:"User",can_login:"0"}},"$k7jNkyJiH3")),u=await u,p(),u),g=async()=>{c().loading_full=!0,a.value={};let n={email:o.value.email,password:o.value.password,fullname:o.value.fullname,role:o.value.role,can_login:o.value.can_login},t="post",r=m.query.id;r===""||(t="put",n.id=r);const{data:l,error:y,status:b}=await x("/api/user",{method:t,headers:{Authorization:`Bearer ${f.value}`,Accept:"application/json"},body:n,retry:0});if(c().loading_full=!1,b.value==="error"){w().trigger(y,a);return}h.go(-1)};return(n,t)=>{const r=k;return B(),q("div",z,[N(r,{title:"Form User",back:!0}),e("div",D,[e("div",E,[e("div",F,[H,i(e("input",{class:"",type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>s(o).email=l)},null,512),[[_,s(o).email]]),e("p",I,d(s(a).email),1)]),e("div",J,[R,i(e("input",{class:"",type:"text","onUpdate:modelValue":t[1]||(t[1]=l=>s(o).fullname=l)},null,512),[[_,s(o).fullname]]),e("p",T,d(s(a).fullname),1)]),e("div",K,[Y,i(e("input",{class:"",type:"password","onUpdate:modelValue":t[2]||(t[2]=l=>s(o).password=l)},null,512),[[_,s(o).password]]),e("p",G,d(s(a).password),1)]),e("div",L,[O,i(e("select",{class:"","onUpdate:modelValue":t[3]||(t[3]=l=>s(o).role=l)},Z,512),[[v,s(o).role]]),e("p",ee,d(s(a).role),1)]),e("div",te,[oe,i(e("select",{class:"","onUpdate:modelValue":t[4]||(t[4]=l=>s(o).can_login=l)},ae,512),[[v,s(o).can_login]]),e("p",ne,d(s(a).can_login),1)])]),e("div",re,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:t[5]||(t[5]=l=>n.$router.go(-1))}," Cancel "),e("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:t[6]||(t[6]=l=>g())}," Save ")])])])}}});export{pe as default};
