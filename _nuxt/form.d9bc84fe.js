import{_ as k}from"./HeaderCustom.vue.83cc1556.js";import{f as A,g as S,h as U,r as C,i as V,j as $,k as j,l as M,o as B,c as q,b as N,a as e,m as i,v as p,n as l,t as d,A as w,q as c,s as b}from"./entry.dc442026.js";import{u as v}from"./useMyFetch.eeba68ba.js";import"./_plugin-vue_export-helper.c27b6911.js";const z={class:"w-full h-full flex flex-col"},D={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},E={class:"w-full align-items-center justify-content-center grow overflow-auto"},F={class:"w-full flex flex-col flex-wrap p-1"},H=e("label",{for:""},"Email",-1),I={class:"text-red-500"},J={class:"w-full flex flex-col flex-wrap p-1"},R=e("label",{for:""},"Nama Identitas",-1),T={class:"text-red-500"},K={class:"w-full flex flex-col flex-wrap p-1"},Y=e("label",{for:""},"Kata Sandi",-1),G={class:"text-red-500"},L={class:"w-full flex flex-col flex-wrap p-1"},O=e("label",{for:""},"Jabatan",-1),P=e("option",{value:"User"},"User",-1),Q=e("option",{value:"Admin"},"Admin",-1),W=e("option",{value:"Marketing"},"Marketing",-1),X=e("option",{value:"Super_Admin"},"Super Admin",-1),Z=[P,Q,W,X],ee={class:"text-red-500"},oe={class:"w-full flex",style:{"flex-flow":"column wrap",padding:"4px"}},te=e("label",{for:""},"Izinkan Masuk?",-1),le=e("option",{value:"1"},"Ya",-1),se=e("option",{value:"0"},"Tidak",-1),ae=[le,se],re={class:"text-red-500"},ne={class:"w-full flex items-center justify-end"},fe=A({__name:"form",async setup(ie){let u,f;S();const _=U("token"),a=C({}),x=V(),m=$(),{data:t}=([u,f]=j(async()=>M(async()=>{const r=m.query.id;if(r!==void 0&&r!==""){c().loading_full=!0;const{data:o,error:n,status:s}=await v("/api/user",{method:"get",headers:{Authorization:`Bearer ${_.value}`,Accept:"application/json"},params:{id:r},retry:0});if(c().loading_full=!1,s.value==="error")b().trigger(n,a);else return o.value.data}return{id:-1,email:"",fullname:"",password:"",role:"User",can_login:"0"}},"$k7jNkyJiH3")),u=await u,f(),u),h=async()=>{c().loading_full=!0,a.value={};let r={email:t.value.email,password:t.value.password,fullname:t.value.fullname,role:t.value.role,can_login:t.value.can_login},o="post",n=m.query.id;n===""||(o="put",r.id=n);const{data:s,error:g,status:y}=await v("/api/user",{method:o,headers:{Authorization:`Bearer ${_.value}`,Accept:"application/json"},body:r,retry:0});if(c().loading_full=!1,y.value==="error"){b().trigger(g,a);return}x.go(-1)};return(r,o)=>{const n=k;return B(),q("div",z,[N(n,{title:"Form User",back:!0}),e("div",D,[e("div",E,[e("div",F,[H,i(e("input",{class:"w-full border-black border-solid border-2 p-1",type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>l(t).email=s)},null,512),[[p,l(t).email]]),e("p",I,d(l(a).email),1)]),e("div",J,[R,i(e("input",{class:"w-full border-black border-solid border-2 p-1",type:"text","onUpdate:modelValue":o[1]||(o[1]=s=>l(t).fullname=s)},null,512),[[p,l(t).fullname]]),e("p",T,d(l(a).fullname),1)]),e("div",K,[Y,i(e("input",{class:"w-full border-black border-solid border-2 p-1",type:"password","onUpdate:modelValue":o[2]||(o[2]=s=>l(t).password=s)},null,512),[[p,l(t).password]]),e("p",G,d(l(a).password),1)]),e("div",L,[O,i(e("select",{class:"w-full border-black border-solid border-2 p-1","onUpdate:modelValue":o[3]||(o[3]=s=>l(t).role=s)},Z,512),[[w,l(t).role]]),e("p",ee,d(l(a).role),1)]),e("div",oe,[te,i(e("select",{class:"w-full border-black border-solid border-2 p-1","onUpdate:modelValue":o[4]||(o[4]=s=>l(t).can_login=s)},ae,512),[[w,l(t).can_login]]),e("p",re,d(l(a).can_login),1)])]),e("div",ne,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:o[5]||(o[5]=s=>r.$router.go(-1))}," Cancel "),e("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white p-2 rounded-sm",onClick:o[6]||(o[6]=s=>h())}," Save ")])])])}}});export{fe as default};