import{_ as B}from"./HeaderCustom.vue.fb83fbc6.js";import{n as D,u as P,r as v,q as w,s as R,v as E,x as F,y as M,o as N,c as q,b as z,a as e,z as u,A as _,B as a,t as d,M as b,N as T,C as h,D as k,E as I}from"./entry.7d58babe.js";import{u as C}from"./useMyFetch.db45e796.js";import"./_plugin-vue_export-helper.c27b6911.js";const L={class:"w-full h-full flex flex-col"},H={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},G={class:"w-full align-items-center justify-content-center grow overflow-auto"},J={class:"w-full flex flex-col flex-wrap p-1"},K=e("label",{for:""},"Username",-1),O={class:"text-red-500"},Q={class:"w-full flex flex-col flex-wrap p-1"},W=e("label",{for:""},"Nama Identitas",-1),X={class:"text-red-500"},Y={class:"w-full flex flex-col flex-wrap p-1"},Z=e("label",{for:""},"Email",-1),ee={class:"text-red-500"},te={class:"w-full flex flex-col flex-wrap p-1"},le=e("label",{for:""},"Telepon",-1),oe={class:"text-red-500"},se={class:"w-full flex flex-col flex-wrap p-1"},ae=e("label",{for:""},"Foto",-1),ne={class:"flex justify-center items-center w-24 h-24"},re=["src"],ue=e("small",null,"Upload file image : jpg, jpeg",-1),ie={class:"help-err"},pe={class:"w-full flex items-center justify-end"},he=D({__name:"index",async setup(de){let f,x;P();const i=v(!1),g=w("token"),r=v({});R();const A=E(),{data:o}=([f,x]=F(async()=>M(async()=>{h().loading_full=!0;const{data:l,error:t,status:n}=await C("/api/profile",{method:"get",headers:{Authorization:`Bearer ${g.value}`,Accept:"application/json"},retry:0});if(h().loading_full=!1,n.value==="error")k().trigger(t,r);else return l.value.photo&&(i.value=!0),l.value;return{username:"",fullname:"",email:"",phone_number:"",photo:""}},"$161L0imkVP")),f=await f,x(),f),p=v(null),S=l=>{var t=l.target.files;if(t.length>0){let n=new FileReader;n.onload=function(s){var m;let c=(m=s.target)==null?void 0:m.result;c.match(/image/)&&(o.value.photo=c)},n.readAsDataURL(t[0]),i.value=!0}},U=()=>{i.value=!1,o.value.photo="";let l=p.value;l&&(l.value="")},$=w("username"),j=w("fullname"),V=async()=>{var y;h().loading_full=!0,r.value={};const l=new FormData;l.append("username",o.value.username),l.append("email",o.value.email),l.append("phone_number",o.value.phone_number),l.append("fullname",o.value.fullname),l.append("password",o.value.password),l.append("can_login",o.value.can_login),(y=p.value)!=null&&y.files&&l.append("photo",p.value.files[0]||""),p.value&&l.append("photo_preview",o.value.photo);let t="post",n=A.query.id;n===""||(t="post",l.append("id",n),l.append("_method","PUT"));const{data:s,error:c,status:m}=await C("/api/update_profile",{method:t,headers:{Authorization:`Bearer ${g.value}`,Accept:"application/json"},body:l,retry:0});if(h().loading_full=!1,m.value==="error"){k().trigger(c,r);return}else $.value=o.value.username,j.value=o.value.fullname,I().display({show:!0,status:"Success",message:s.value.message})};return(l,t)=>{const n=B;return N(),q("div",L,[z(n,{title:"Profile",back:!0}),e("form",H,[e("div",G,[e("div",J,[K,u(e("input",{class:"",type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>a(o).username=s)},null,512),[[_,a(o).username]]),e("p",O,d(a(r).username),1)]),e("div",Q,[W,u(e("input",{class:"",type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>a(o).fullname=s)},null,512),[[_,a(o).fullname]]),e("p",X,d(a(r).fullname),1)]),e("div",Y,[Z,u(e("input",{class:"",type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>a(o).email=s)},null,512),[[_,a(o).email]]),e("p",ee,d(a(r).email),1)]),e("div",te,[le,u(e("input",{class:"",type:"text","onUpdate:modelValue":t[3]||(t[3]=s=>a(o).phone_number=s)},null,512),[[_,a(o).phone_number]]),e("p",oe,d(a(r).phone_number),1)]),e("div",se,[ae,e("div",ne,[e("img",{src:a(o).photo||"/stok/user-default.png",alt:"",class:"max-w-full max-h-full"},null,8,re)]),u(e("button",{type:"button",class:"bg-gray-600 w-24 text-white",onClick:t[4]||(t[4]=s=>U())},"Remove",512),[[b,a(i)]]),u(e("input",{onChange:t[5]||(t[5]=s=>S(s)),ref_key:"photo_input",ref:p,type:"file",name:"photo",value:""},null,544),[[b,!a(i)]]),ue,e("p",ie,d(a(r).photo),1)])]),e("div",pe,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:t[6]||(t[6]=s=>l.$router.go(-1))}," Cancel "),e("button",{type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:t[7]||(t[7]=T(s=>V(),["prevent"]))}," Save ")])])])}}});export{he as default};
