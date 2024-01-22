import{_ as P}from"./HeaderCustom.vue.26ca5f47.js";import{f as B,g as D,r as v,h as x,i as R,j as F,k as N,l as T,o as q,c as E,b as z,a as e,m as u,v as _,n as s,t as i,d as I,G as y,q as h,s as k,x as L}from"./entry.7a361217.js";import{u as C}from"./useMyFetch.9bc94075.js";import"./_plugin-vue_export-helper.c27b6911.js";const M={class:"w-full h-full flex flex-col"},G={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},H={class:"w-full align-items-center justify-content-center grow overflow-auto"},J={class:"w-full flex flex-col flex-wrap p-1"},K=e("label",{for:""},"Username",-1),O={class:"text-red-500"},Q={class:"w-full flex flex-col flex-wrap p-1"},W=e("label",{for:""},"Nama Identitas",-1),X={class:"text-red-500"},Y={class:"w-full flex flex-col flex-wrap p-1"},Z=e("label",{for:""},"Email",-1),ee={class:"text-red-500"},te={class:"w-full flex flex-col flex-wrap p-1"},le=e("label",{for:""},"Telepon",-1),oe={class:"text-red-500"},se={class:"w-full flex flex-col flex-wrap p-1"},ae=e("label",{for:""},"Foto",-1),ne={class:"flex justify-center items-center w-24 h-24"},re=["src"],ue=e("small",null,"Upload file image : jpg, jpeg",-1),ie={class:"help-err"},pe={class:"w-full flex items-center justify-end"},he=B({__name:"index",async setup(de){let f,w;D();const p=v(!1),g=x("token"),r=v({});R();const A=F(),{data:l}=([f,w]=N(async()=>T(async()=>{h().loading_full=!0;const{data:o,error:t,status:n}=await C("/api/profile",{method:"get",headers:{Authorization:`Bearer ${g.value}`,Accept:"application/json"},retry:0});if(h().loading_full=!1,n.value==="error")k().trigger(t,r);else return o.value.photo&&(p.value=!0),o.value;return{username:"",fullname:"",email:"",phone_number:"",photo:""}},"$161L0imkVP")),f=await f,w(),f),d=v(null),S=o=>{var t=o.target.files;if(t.length>0){let n=new FileReader;n.onload=function(a){var m;let c=(m=a.target)==null?void 0:m.result;c.match(/image/)&&(l.value.photo=c)},n.readAsDataURL(t[0]),p.value=!0}},j=()=>{p.value=!1,l.value.photo="";let o=d.value;o&&(o.value="")},U=x("username"),V=x("fullname"),$=async()=>{var b;h().loading_full=!0,r.value={};const o=new FormData;o.append("username",l.value.username),o.append("email",l.value.email),o.append("phone_number",l.value.phone_number),o.append("fullname",l.value.fullname),o.append("password",l.value.password),o.append("can_login",l.value.can_login),(b=d.value)!=null&&b.files&&o.append("photo",d.value.files[0]||""),d.value&&o.append("photo_preview",l.value.photo);let t="post",n=A.query.id;n===""||(t="post",o.append("id",n),o.append("_method","PUT"));const{data:a,error:c,status:m}=await C("/api/update_profile",{method:t,headers:{Authorization:`Bearer ${g.value}`,Accept:"application/json"},body:o,retry:0});if(h().loading_full=!1,m.value==="error"){k().trigger(c,r);return}else U.value=l.value.username,V.value=l.value.fullname,L().display({show:!0,status:"Success",message:a.value.message})};return(o,t)=>{const n=P;return q(),E("div",M,[z(n,{title:"Profile",back:!0}),e("div",G,[e("div",H,[e("div",J,[K,u(e("input",{class:"",type:"text","onUpdate:modelValue":t[0]||(t[0]=a=>s(l).username=a)},null,512),[[_,s(l).username]]),e("p",O,i(s(r).username),1)]),e("div",Q,[W,u(e("input",{class:"",type:"text","onUpdate:modelValue":t[1]||(t[1]=a=>s(l).fullname=a)},null,512),[[_,s(l).fullname]]),e("p",X,i(s(r).fullname),1)]),e("div",Y,[Z,u(e("input",{class:"",type:"text","onUpdate:modelValue":t[2]||(t[2]=a=>s(l).email=a)},null,512),[[_,s(l).email]]),e("p",ee,i(s(r).email),1)]),e("div",te,[le,u(e("input",{class:"",type:"text","onUpdate:modelValue":t[3]||(t[3]=a=>s(l).phone_number=a)},null,512),[[_,s(l).phone_number]]),e("p",oe,i(s(r).phone_number),1)]),e("div",se,[ae,e("div",ne,[I(i(s(l).photo)+" ",1),e("img",{src:s(l).photo||"user-default.png",alt:"",class:"max-w-full max-h-full"},null,8,re)]),u(e("button",{class:"bg-gray-600 w-24 text-white",onClick:t[4]||(t[4]=a=>j())},"Remove",512),[[y,s(p)]]),u(e("input",{onChange:t[5]||(t[5]=a=>S(a)),ref_key:"photo_input",ref:d,type:"file",name:"photo",value:""},null,544),[[y,!s(p)]]),ue,e("p",ie,i(s(r).photo),1)])]),e("div",pe,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:t[6]||(t[6]=a=>o.$router.go(-1))}," Cancel "),e("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:t[7]||(t[7]=a=>$())}," Save ")])])])}}});export{he as default};
