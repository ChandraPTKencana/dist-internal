import{_ as S}from"./HeaderCustom.vue.6b0c9d3a.js";import{f as U,g as V,h as $,r as m,i as j,j as B,k as M,l as D,o as F,c as q,b as z,a as e,m as i,v as d,n as s,t as u,A as E,q as c,s as x}from"./entry.50a4d276.js";import{u as b}from"./useMyFetch.a11d8274.js";import"./_plugin-vue_export-helper.c27b6911.js";const N={class:"w-full h-full flex flex-col"},P={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},T={class:"w-full align-items-center justify-content-center grow overflow-auto"},I={class:"w-full flex flex-col flex-wrap p-1"},R=e("label",{for:""},"Username",-1),H={class:"text-red-500"},O={class:"w-full flex flex-col flex-wrap p-1"},Y=e("label",{for:""},"Email",-1),G={class:"text-red-500"},J={class:"w-full flex flex-col flex-wrap p-1"},K=e("label",{for:""},"Phone Number",-1),L={class:"text-red-500"},Q={class:"w-full flex flex-col flex-wrap p-1"},W=e("label",{for:""},"Fullname",-1),X={class:"text-red-500"},Z={class:"w-full flex flex-col flex-wrap p-1"},ee=e("label",{for:""},"Password",-1),te={class:"text-red-500"},oe={class:"w-full flex flex-col flex-wrap p-1"},se=e("label",{for:""},"Izinkan Masuk?",-1),le=e("option",{value:"1"},"Ya",-1),ae=e("option",{value:"0"},"Tidak",-1),ne=[le,ae],re={class:"text-red-500"},ie={class:"w-full flex items-center justify-end"},me=U({__name:"form",async setup(ue){let p,_;V();const v=$("token"),n=m({}),g=j(),h=B(),y=m(!1),{data:o}=([p,_]=M(async()=>D(async()=>{const l=h.query.id;if(l!==void 0&&l!==""){c().loading_full=!0;const{data:t,error:r,status:a}=await b("/api/member",{method:"get",headers:{Authorization:`Bearer ${v.value}`,Accept:"application/json"},params:{id:l},retry:0});if(c().loading_full=!1,a.value==="error")x().trigger(r,n);else return t.value.data.photo&&(y.value=!0),t.value.data}return{id:-1,username:"",email:"",phone_number:"",fullname:"",password:"",can_login:"0",photo:""}},"$5Otkf9IS3a")),p=await p,_(),p),f=m(null),k=async()=>{var w;c().loading_full=!0,n.value={};const l=new FormData;l.append("username",o.value.username),l.append("email",o.value.email),l.append("phone_number",o.value.phone_number),l.append("fullname",o.value.fullname),l.append("password",o.value.password),l.append("can_login",o.value.can_login),(w=f.value)!=null&&w.files&&l.append("photo",f.value.files[0]||""),f.value&&l.append("photo_preview",o.value.photo);let t="post",r=h.query.id;r===""||(t="post",l.append("id",r),l.append("_method","PUT"));const{data:a,error:A,status:C}=await b("/api/member",{method:t,headers:{Authorization:`Bearer ${v.value}`,Accept:"application/json"},body:l,retry:0});if(c().loading_full=!1,C.value==="error"){x().trigger(A,n);return}g.go(-1)};return(l,t)=>{const r=S;return F(),q("div",N,[z(r,{title:"Form Member",back:!0}),e("div",P,[e("div",T,[e("div",I,[R,i(e("input",{class:"",type:"text","onUpdate:modelValue":t[0]||(t[0]=a=>s(o).username=a)},null,512),[[d,s(o).username]]),e("p",H,u(s(n).username),1)]),e("div",O,[Y,i(e("input",{class:"",type:"text","onUpdate:modelValue":t[1]||(t[1]=a=>s(o).email=a)},null,512),[[d,s(o).email]]),e("p",G,u(s(n).email),1)]),e("div",J,[K,i(e("input",{class:"",type:"text","onUpdate:modelValue":t[2]||(t[2]=a=>s(o).phone_number=a)},null,512),[[d,s(o).phone_number]]),e("p",L,u(s(n).phone_number),1)]),e("div",Q,[W,i(e("input",{class:"",type:"text","onUpdate:modelValue":t[3]||(t[3]=a=>s(o).fullname=a)},null,512),[[d,s(o).fullname]]),e("p",X,u(s(n).fullname),1)]),e("div",Z,[ee,i(e("input",{class:"",type:"password","onUpdate:modelValue":t[4]||(t[4]=a=>s(o).password=a)},null,512),[[d,s(o).password]]),e("p",te,u(s(n).password),1)]),e("div",oe,[se,i(e("select",{class:"","onUpdate:modelValue":t[5]||(t[5]=a=>s(o).can_login=a)},ne,512),[[E,s(o).can_login]]),e("p",re,u(s(n).can_login),1)])]),e("div",ie,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:t[6]||(t[6]=a=>l.$router.go(-1))}," Cancel "),e("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:t[7]||(t[7]=a=>k())}," Save ")])])])}}});export{me as default};
