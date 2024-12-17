import{_ as P}from"./HeaderCustom.vue.47cc2dac.js";import{f as B,g as D,r as v,h as w,i as R,j as F,k as q,l as E,o as N,c as T,b as z,a as e,m as r,v as _,n as a,t as d,G as y,q as h,s as k,x as I}from"./entry.0549890c.js";import{u as C}from"./useMyFetch.35859078.js";import"./_plugin-vue_export-helper.c27b6911.js";const L={class:"w-full h-full flex flex-col"},M={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},G={class:"w-full align-items-center justify-content-center grow overflow-auto"},H={class:"w-full flex flex-col flex-wrap p-1"},J=e("label",{for:""},"Username",-1),K={class:"text-red-500"},O={class:"w-full flex flex-col flex-wrap p-1"},Q=e("label",{for:""},"Nama Identitas",-1),W={class:"text-red-500"},X={class:"w-full flex flex-col flex-wrap p-1"},Y=e("label",{for:""},"Email",-1),Z={class:"text-red-500"},ee={class:"w-full flex flex-col flex-wrap p-1"},te=e("label",{for:""},"Telepon",-1),le={class:"text-red-500"},oe={class:"w-full flex flex-col flex-wrap p-1"},se=e("label",{for:""},"Foto",-1),ae={class:"flex justify-center items-center w-24 h-24"},ne=["src"],ue=e("small",null,"Upload file image : jpg, jpeg",-1),re={class:"help-err"},ie={class:"w-full flex items-center justify-end"},_e=B({__name:"index",async setup(pe){let f,x;D();const i=v(!1),g=w("token"),u=v({});R();const A=F(),{data:o}=([f,x]=q(async()=>E(async()=>{h().loading_full=!0;const{data:l,error:t,status:n}=await C("/api/profile",{method:"get",headers:{Authorization:`Bearer ${g.value}`,Accept:"application/json"},retry:0});if(h().loading_full=!1,n.value==="error")k().trigger(t,u);else return l.value.photo&&(i.value=!0),l.value;return{username:"",fullname:"",email:"",phone_number:"",photo:""}},"$161L0imkVP")),f=await f,x(),f),p=v(null),S=l=>{var t=l.target.files;if(t.length>0){let n=new FileReader;n.onload=function(s){var m;let c=(m=s.target)==null?void 0:m.result;c.match(/image/)&&(o.value.photo=c)},n.readAsDataURL(t[0]),i.value=!0}},j=()=>{i.value=!1,o.value.photo="";let l=p.value;l&&(l.value="")},U=w("username"),$=w("fullname"),V=async()=>{var b;h().loading_full=!0,u.value={};const l=new FormData;l.append("username",o.value.username),l.append("email",o.value.email),l.append("phone_number",o.value.phone_number),l.append("fullname",o.value.fullname),l.append("password",o.value.password),l.append("can_login",o.value.can_login),(b=p.value)!=null&&b.files&&l.append("photo",p.value.files[0]||""),p.value&&l.append("photo_preview",o.value.photo);let t="post",n=A.query.id;n===""||(t="post",l.append("id",n),l.append("_method","PUT"));const{data:s,error:c,status:m}=await C("/api/update_profile",{method:t,headers:{Authorization:`Bearer ${g.value}`,Accept:"application/json"},body:l,retry:0});if(h().loading_full=!1,m.value==="error"){k().trigger(c,u);return}else U.value=o.value.username,$.value=o.value.fullname,I().display({show:!0,status:"Success",message:s.value.message})};return(l,t)=>{const n=P;return N(),T("div",L,[z(n,{title:"Profile",back:!0}),e("div",M,[e("div",G,[e("div",H,[J,r(e("input",{class:"",type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>a(o).username=s)},null,512),[[_,a(o).username]]),e("p",K,d(a(u).username),1)]),e("div",O,[Q,r(e("input",{class:"",type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>a(o).fullname=s)},null,512),[[_,a(o).fullname]]),e("p",W,d(a(u).fullname),1)]),e("div",X,[Y,r(e("input",{class:"",type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>a(o).email=s)},null,512),[[_,a(o).email]]),e("p",Z,d(a(u).email),1)]),e("div",ee,[te,r(e("input",{class:"",type:"text","onUpdate:modelValue":t[3]||(t[3]=s=>a(o).phone_number=s)},null,512),[[_,a(o).phone_number]]),e("p",le,d(a(u).phone_number),1)]),e("div",oe,[se,e("div",ae,[e("img",{src:a(o).photo||"/stok/user-default.png",alt:"",class:"max-w-full max-h-full"},null,8,ne)]),r(e("button",{class:"bg-gray-600 w-24 text-white",onClick:t[4]||(t[4]=s=>j())},"Remove",512),[[y,a(i)]]),r(e("input",{onChange:t[5]||(t[5]=s=>S(s)),ref_key:"photo_input",ref:p,type:"file",name:"photo",value:""},null,544),[[y,!a(i)]]),ue,e("p",re,d(a(u).photo),1)])]),e("div",ie,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:t[6]||(t[6]=s=>l.$router.go(-1))}," Cancel "),e("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:t[7]||(t[7]=s=>V())}," Save ")])])])}}});export{_e as default};
