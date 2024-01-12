import{_ as S}from"./HeaderCustom.vue.25bc2522.js";import{f as U,g as V,h as $,r as m,i as j,j as B,k as M,l as D,o as F,c as q,b as z,a as e,m as d,v as u,n as l,t as i,A as E,q as c,s as h}from"./entry.e884ab23.js";import{u as x}from"./useMyFetch.22e292ac.js";import"./_plugin-vue_export-helper.c27b6911.js";const N={class:"w-full h-full flex flex-col"},P={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},T={class:"w-full align-items-center justify-content-center grow overflow-auto"},I={class:"w-full flex flex-col flex-wrap p-1"},R=e("label",{for:""},"Username",-1),H={class:"text-red-500"},O={class:"w-full flex flex-col flex-wrap p-1"},Y=e("label",{for:""},"Email",-1),G={class:"text-red-500"},J={class:"w-full flex flex-col flex-wrap p-1"},K=e("label",{for:""},"Phone Number",-1),L={class:"text-red-500"},Q={class:"w-full flex flex-col flex-wrap p-1"},W=e("label",{for:""},"Fullname",-1),X={class:"text-red-500"},Z={class:"w-full flex flex-col flex-wrap p-1"},ee=e("label",{for:""},"Password",-1),oe={class:"text-red-500"},te={class:"w-full flex flex-col flex-wrap p-1"},le=e("label",{for:""},"Izinkan Masuk?",-1),se=e("option",{value:"1"},"Ya",-1),ae=e("option",{value:"0"},"Tidak",-1),re=[se,ae],ne={class:"text-red-500"},de={class:"w-full flex items-center justify-end"},me=U({__name:"form",async setup(ie){let p,_;V();const b=$("token"),r=m({}),g=j(),w=B(),y=m(!1),{data:t}=([p,_]=M(async()=>D(async()=>{const s=w.query.id;if(s!==void 0&&s!==""){c().loading_full=!0;const{data:o,error:n,status:a}=await x("/api/member",{method:"get",headers:{Authorization:`Bearer ${b.value}`,Accept:"application/json"},params:{id:s},retry:0});if(c().loading_full=!1,a.value==="error")h().trigger(n,r);else return o.value.data.photo&&(y.value=!0),o.value.data}return{id:-1,username:"",email:"",phone_number:"",fullname:"",password:"",can_login:"0",photo:""}},"$5Otkf9IS3a")),p=await p,_(),p),f=m(null),k=async()=>{var v;c().loading_full=!0,r.value={};const s=new FormData;s.append("username",t.value.username),s.append("email",t.value.email),s.append("phone_number",t.value.phone_number),s.append("fullname",t.value.fullname),s.append("password",t.value.password),s.append("can_login",t.value.can_login),(v=f.value)!=null&&v.files&&s.append("photo",f.value.files[0]||""),f.value&&s.append("photo_preview",t.value.photo);let o="post",n=w.query.id;n===""||(o="post",s.append("id",n),s.append("_method","PUT"));const{data:a,error:A,status:C}=await x("/api/member",{method:o,headers:{Authorization:`Bearer ${b.value}`,Accept:"application/json"},body:s,retry:0});if(c().loading_full=!1,C.value==="error"){h().trigger(A,r);return}g.go(-1)};return(s,o)=>{const n=S;return F(),q("div",N,[z(n,{title:"Form Member",back:!0}),e("div",P,[e("div",T,[e("div",I,[R,d(e("input",{class:"w-full border-black border-solid border-2 p-1",type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>l(t).username=a)},null,512),[[u,l(t).username]]),e("p",H,i(l(r).username),1)]),e("div",O,[Y,d(e("input",{class:"w-full border-black border-solid border-2 p-1",type:"text","onUpdate:modelValue":o[1]||(o[1]=a=>l(t).email=a)},null,512),[[u,l(t).email]]),e("p",G,i(l(r).email),1)]),e("div",J,[K,d(e("input",{class:"w-full border-black border-solid border-2 p-1",type:"text","onUpdate:modelValue":o[2]||(o[2]=a=>l(t).phone_number=a)},null,512),[[u,l(t).phone_number]]),e("p",L,i(l(r).phone_number),1)]),e("div",Q,[W,d(e("input",{class:"w-full border-black border-solid border-2 p-1",type:"text","onUpdate:modelValue":o[3]||(o[3]=a=>l(t).fullname=a)},null,512),[[u,l(t).fullname]]),e("p",X,i(l(r).fullname),1)]),e("div",Z,[ee,d(e("input",{class:"w-full border-black border-solid border-2 p-1",type:"password","onUpdate:modelValue":o[4]||(o[4]=a=>l(t).password=a)},null,512),[[u,l(t).password]]),e("p",oe,i(l(r).password),1)]),e("div",te,[le,d(e("select",{class:"w-full border-black border-solid border-2 p-1","onUpdate:modelValue":o[5]||(o[5]=a=>l(t).can_login=a)},re,512),[[E,l(t).can_login]]),e("p",ne,i(l(r).can_login),1)])]),e("div",de,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:o[6]||(o[6]=a=>s.$router.go(-1))}," Cancel "),e("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white p-2 rounded-sm",onClick:o[7]||(o[7]=a=>k())}," Save ")])])])}}});export{me as default};
