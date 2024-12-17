import{q as X,x as ee,y as te,C as d,D,r as u,s as ae,E as V,F as oe,o as m,c as v,a as e,b as h,z as A,A as se,B as s,G as le,H as L,N as ne,I as re,J as ue,K as ie,t as i,O as ce,L as de,_ as _e,$ as fe,a0 as pe}from"./entry.dc995b47.js";import{_ as me}from"./Plus.894880f1.js";import{_ as ve}from"./Edit.f12d7395.js";import{_ as he}from"./Delete.4e68de5b.js";import{_ as ye}from"./Search.8c91f68d.js";import{_ as ge}from"./PopupMini.vue.1fc7c4ef.js";import{_ as we}from"./PopupSingleImage.vue.e2865968.js";import{u as be}from"./useUtils.100f5b4a.js";import{u as $}from"./useMyFetch.001523d4.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.978e9abc.js";const xe={class:"w-full h-full flex flex-col border-t-4 border-slate-600"},ke={class:"w-full flex grow flex-col overflow-auto h-0"},Ce={class:"w-full flex"},De={action:"#",class:"w-full flex p-1"},Ae={class:"grow"},$e=e("div",{class:"font-bold"}," Keywords ",-1),Se={class:"pl-1"},Be=e("div",{class:"font-bold"}," Sort By ",-1),Me=e("option",{value:"created_at"},"Created At",-1),Te=e("option",{value:"name"},"Name",-1),Ie=e("option",{value:"value"},"Value",-1),Ee=[Me,Te,Ie],Ne={class:"pl-1"},Ve=e("div",{class:"font-bold"}," Sort Order ",-1),Le=e("option",{value:"asc"},"Asc",-1),Ue=e("option",{value:"desc"},"Desc",-1),Pe=[Le,Ue],Re={class:"flex items-end pl-1"},ze={class:"w-full flex justify-center items-center grow h-0 p-1"},Fe={key:0,class:""},He={class:"tacky"},je=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"ID"),e("th",null,"Photo"),e("th",null,"Name"),e("th",null,"Unit"),e("th",null,"Value"),e("th",null,"Note"),e("th",null,"Created At"),e("th",null,"Created By"),e("th",null,"Updated At"),e("th",null,"Updated By")])],-1),Oe=["onClick"],Ke={class:"bold"},Ge={class:"p-0"},Je=["onClick"],Ye=["src"],rt={__name:"index",async setup(qe){let g,S;const{$moment:B}=de(),{pointFormat:U}=be(),l={};l._TimeZoneOffset=new Date().getTimezoneOffset(),l.sort="created_at:desc";const x=X("token"),{data:P}=([g,S]=ee(async()=>te(async()=>{d().loading_full=!0;const{data:o,error:a,status:p}=await $("/api/items",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:l,retry:0});return d().loading_full=!1,p.value==="error"?(D().trigger(a),[]):o.value.data},"$cGVwCIwUsE")),g=await g,S(),g),r=u(null);r.value=P.value;const _=u(""),f=u({field:"created_at",by:"desc"}),c=u(-1),n=u({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),R=()=>{l.like="",_.value!=""&&(l.like=`id:%${_.value}%,name:%${_.value}%,value:%${_.value}%`),l.sort="",f.value.field&&(l.sort=f.value.field+":"+f.value.by)},w=u(null),M=async()=>{d().loading_full=!0,n.value.may_get_data=!1,l.page=n.value.page,l.page==1&&(r.value=[]),l.first_row&&delete l.first_row,l.page>1&&(l.first_row=JSON.stringify(r.value[0]));const{data:o,error:a,status:p}=await $("/api/items",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:l,retry:0});if(d().loading_full=!1,n.value.may_get_data=!0,p.value==="error"){D().trigger(a);return}n.value.page==1?(r.value=o.value.data,w.value&&(w.value.scrollTop=0)):n.value.page>1&&(r.value=[...r.value,...o.value.data]),o.value.data.length==0&&(n.value.is_last_record=!0)},z=async()=>{if(!n.value.may_get_data)return;let o=w.value;if(o.scrollLeft!=n.value.scrollLeft){n.value.scrollLeft=o.scrollLeft;return}n.value.is_last_record||!(Math.round(o.scrollTop)+o.clientHeight>=o.scrollHeight-1)||(n.value.page++,await M())},F=()=>{n.value.page=1,n.value.is_last_record=!1,R(),M()};ae();const T=()=>_e(fe(()=>pe(()=>import("./form.6f6a08df.js"),["./form.6f6a08df.js","./InputPointFormat.vue.f8faed32.js","./entry.dc995b47.js","./entry.edcf1d4b.css","./Search.8c91f68d.js","./_plugin-vue_export-helper.c27b6911.js","./Delete.4e68de5b.js","./units.4520fabd.js","./HeaderPopup.vue.ba31dfaf.js","./Times.978e9abc.js","./useUtils.100f5b4a.js","./useMyFetch.001523d4.js","./units.b7062e9a.css"],import.meta.url))),H=async()=>{await d().setDynamicComponent(T,"Tambah Item")},{display:I}=V();oe(V());const j=async()=>{c.value==-1?I({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):await d().setDynamicComponent(T,"Ubah Item",{id:r.value[c.value].id})},E=u({}),y=u(!1),O=async()=>{y.value&&(y.value=!1)},K=()=>{c.value==-1?I({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(E.value={id:r.value[c.value].id},y.value=!0)},G=async()=>{d().loading_full=!0;const o=new FormData;o.append("id",r.value[c.value].id),o.append("_method","DELETE");const{data:a,error:p,status:C}=await $("/api/item",{method:"post",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:o,retry:0});if(d().loading_full=!1,C.value==="error"){D().trigger(p);return}r.value.splice(c.value,1),c.value=-1,y.value=!1},k=u(!1),N=u(""),J=o=>{k.value=!0,N.value=o};return(o,a)=>{const p=me,C=ve,Y=he,q=ye,Z=ge,Q=we;return m(),v("div",xe,[e("div",ke,[e("div",Ce,[e("button",{type:"button",name:"button",class:"p-1 m-1 text-2xl",onClick:a[0]||(a[0]=t=>H())},[h(p)]),e("button",{type:"button",name:"button",class:"p-1 m-1 text-2xl",onClick:a[1]||(a[1]=t=>j())},[h(C)]),e("button",{type:"button",name:"button",class:"p-1 m-1 text-2xl",onClick:a[2]||(a[2]=t=>K())},[h(Y)])]),e("form",De,[e("div",Ae,[$e,A(e("input",{class:"",type:"text","onUpdate:modelValue":a[3]||(a[3]=t=>le(_)?_.value=t:null),name:"search",placeholder:"Keyword"},null,512),[[se,s(_)]])]),e("div",Se,[Be,A(e("select",{class:"","onUpdate:modelValue":a[4]||(a[4]=t=>s(f).field=t)},Ee,512),[[L,s(f).field]])]),e("div",Ne,[Ve,A(e("select",{class:"","onUpdate:modelValue":a[5]||(a[5]=t=>s(f).by=t)},Pe,512),[[L,s(f).by]])]),e("div",Re,[e("button",{class:"",type:"submit",name:"button",onClick:a[6]||(a[6]=ne(t=>F(),["prevent"]))},[h(q,{class:"text-2xl"})])])]),e("div",ze,[s(r).length==0?(m(),v("div",Fe," Maaf Tidak Ada Record ")):(m(),v("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:w,onScroll:z},[e("table",He,[je,e("tbody",null,[(m(!0),v(re,null,ue(s(r),(t,b)=>(m(),v("tr",{key:b,onClick:W=>c.value=b,class:ie(s(c)==b?"active":"")},[e("td",null,i(b+1)+".",1),e("td",Ke,i(t.id),1),e("td",Ge,[t.photo?(m(),v("div",{key:0,class:"absolute w-full h-full flex items-center justify-center cursor-pointer",onClick:W=>J(t.photo)},[e("img",{src:t.photo||"/stok/user-default.png",alt:"",class:"max-w-full max-h-full"},null,8,Ye)],8,Je)):ce("",!0)]),e("td",null,i(t.name),1),e("td",null,i(t.unit.name),1),e("td",null,i(s(U)(t.value)),1),e("td",null,i(t.note),1),e("td",null,i(s(B)(t.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,i(t.creator.username),1),e("td",null,i(s(B)(t.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,i(t.updator.username),1)],10,Oe))),128))])])],544))])]),h(Z,{type:"delete",show:s(y),data:s(E),fnClose:O,fnConfirm:G},null,8,["show","data"]),h(Q,{show:s(k),photo:s(N),fnClose:()=>{k.value=!1}},null,8,["show","photo","fnClose"])])}}};export{rt as default};
