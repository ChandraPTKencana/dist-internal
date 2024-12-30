import{_ as B}from"./HeaderCustom.vue.dd92b011.js";import{K as P,L as D,r as v,g as w,B as R,M as F,h as M,q,o as E,c as L,b as N,a as e,k as u,A as _,l as a,t as d,J as b,C as T,x as h,y as k,j as z}from"./entry.622940e4.js";import{u as C}from"./useMyFetch.83f6fc10.js";import"./CaretLeft.8360943e.js";import"./_plugin-vue_export-helper.c27b6911.js";const I={class:"w-full h-full flex flex-col"},H={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},J={class:"w-full align-items-center justify-content-center grow overflow-auto"},K={class:"w-full flex flex-col flex-wrap p-1"},G=e("label",{for:""},"Username",-1),O={class:"text-red-500"},Q={class:"w-full flex flex-col flex-wrap p-1"},W=e("label",{for:""},"Nama Identitas",-1),X={class:"text-red-500"},Y={class:"w-full flex flex-col flex-wrap p-1"},Z=e("label",{for:""},"Email",-1),ee={class:"text-red-500"},te={class:"w-full flex flex-col flex-wrap p-1"},le=e("label",{for:""},"Telepon",-1),oe={class:"text-red-500"},se={class:"w-full flex flex-col flex-wrap p-1"},ae=e("label",{for:""},"Foto",-1),ne={class:"flex justify-center items-center w-24 h-24"},re=["src"],ue=e("small",null,"Upload file image : jpg, jpeg",-1),ie={class:"help-err"},pe={class:"w-full flex items-center justify-end"},ve=P({__name:"index",async setup(de){let f,x;D();const i=v(!1),g=w("token"),r=v({});R();const A=F(),{data:o}=([f,x]=M(async()=>q(async()=>{h().loading_full=!0;const{data:l,error:t,status:n}=await C("/profile",{method:"get",headers:{Authorization:`Bearer ${g.value}`,Accept:"application/json"},retry:0});if(h().loading_full=!1,n.value==="error")k().trigger(t,r);else return l.value.photo&&(i.value=!0),l.value;return{username:"",fullname:"",email:"",phone_number:"",photo:""}},"$161L0imkVP")),f=await f,x(),f),p=v(null),S=l=>{var t=l.target.files;if(t.length>0){let n=new FileReader;n.onload=function(s){var m;let c=(m=s.target)==null?void 0:m.result;c.match(/image/)&&(o.value.photo=c)},n.readAsDataURL(t[0]),i.value=!0}},j=()=>{i.value=!1,o.value.photo="";let l=p.value;l&&(l.value="")},U=w("username"),$=w("fullname"),V=async()=>{var y;h().loading_full=!0,r.value={};const l=new FormData;l.append("username",o.value.username),l.append("email",o.value.email),l.append("phone_number",o.value.phone_number),l.append("fullname",o.value.fullname),l.append("password",o.value.password),l.append("can_login",o.value.can_login),(y=p.value)!=null&&y.files&&l.append("photo",p.value.files[0]||""),p.value&&l.append("photo_preview",o.value.photo);let t="post",n=A.query.id;n===""||(t="post",l.append("id",n),l.append("_method","PUT"));const{data:s,error:c,status:m}=await C("/update_profile",{method:t,headers:{Authorization:`Bearer ${g.value}`,Accept:"application/json"},body:l,retry:0});if(h().loading_full=!1,m.value==="error"){k().trigger(c,r);return}else U.value=o.value.username,$.value=o.value.fullname,z().display({show:!0,status:"Success",message:s.value.message})};return(l,t)=>{const n=B;return E(),L("div",I,[N(n,{title:"Profile",back:!0}),e("form",H,[e("div",J,[e("div",K,[G,u(e("input",{class:"",type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>a(o).username=s)},null,512),[[_,a(o).username]]),e("p",O,d(a(r).username),1)]),e("div",Q,[W,u(e("input",{class:"",type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>a(o).fullname=s)},null,512),[[_,a(o).fullname]]),e("p",X,d(a(r).fullname),1)]),e("div",Y,[Z,u(e("input",{class:"",type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>a(o).email=s)},null,512),[[_,a(o).email]]),e("p",ee,d(a(r).email),1)]),e("div",te,[le,u(e("input",{class:"",type:"text","onUpdate:modelValue":t[3]||(t[3]=s=>a(o).phone_number=s)},null,512),[[_,a(o).phone_number]]),e("p",oe,d(a(r).phone_number),1)]),e("div",se,[ae,e("div",ne,[e("img",{src:a(o).photo||"/logistik/user-default.png",alt:"",class:"max-w-full max-h-full"},null,8,re)]),u(e("button",{type:"button",class:"bg-gray-600 w-24 text-white",onClick:t[4]||(t[4]=s=>j())},"Remove",512),[[b,a(i)]]),u(e("input",{onChange:t[5]||(t[5]=s=>S(s)),ref_key:"photo_input",ref:p,type:"file",name:"photo",value:""},null,544),[[b,!a(i)]]),ue,e("p",ie,d(a(r).photo),1)])]),e("div",pe,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:t[6]||(t[6]=s=>l.$router.go(-1))}," Cancel "),e("button",{type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:t[7]||(t[7]=T(s=>V(),["prevent"]))}," Save ")])])])}}});export{ve as default};
