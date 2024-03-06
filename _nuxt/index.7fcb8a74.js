import{q as J,x as q,y as G,C as u,D,r as c,s as Z,E as L,F as Q,o as v,c as h,a as e,b as y,z as C,A as W,B as r,G as X,H as z,N as ee,I as te,J as ae,K as se,t as f,L as oe,_ as le,$ as ne,a0 as re}from"./entry.0b1d38b1.js";import{_ as ie}from"./Plus.803b538c.js";import{_ as ue}from"./Edit.b5c54f06.js";import{_ as ce}from"./Delete.883e772e.js";import{_ as de}from"./Search.b0b724eb.js";import{_ as _e}from"./PopupMini.vue.3fad2c91.js";import{u as A}from"./useMyFetch.6a55485b.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.81d9e1a0.js";const fe={class:"w-full h-full flex flex-col border-t-4 border-slate-600"},me={class:"w-full flex grow flex-col overflow-auto h-0"},pe={class:"w-full flex"},ve={action:"#",class:"w-full flex p-1"},he={class:"grow"},ye=e("div",{class:"font-bold"}," Keyword ",-1),ge={class:"pl-1"},we=e("div",{class:"font-bold"}," Sort By ",-1),be=e("option",{value:"created_at"},"Created At",-1),ke=e("option",{value:"id"},"ID",-1),xe=e("option",{value:"name"},"Name",-1),De=[be,ke,xe],Ce={class:"pl-1"},Ae=e("div",{class:"font-bold"}," Sort Order ",-1),$e=e("option",{value:"asc"},"Asc",-1),Se=e("option",{value:"desc"},"Desc",-1),Me=[$e,Se],Te={class:"flex items-end pl-1"},Be={class:"w-full flex justify-center items-center grow h-0 p-1"},Ie={key:0,class:""},Le={class:"tacky"},ze=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",{class:"sticky left-0 !z-[2]"},"ID"),e("th",null,"Name"),e("th",null,"Created At"),e("th",null,"Created By"),e("th",null,"Updated At"),e("th",null,"Updated By")])],-1),Ee=["onClick"],Ne={class:"sticky left-0 !z-[1] bold"},qe={__name:"index",async setup(Re){let g,$;const{$moment:S}=oe(),o={};o._TimeZoneOffset=new Date().getTimezoneOffset(),o.sort="created_at:desc";const k=J("token"),{data:E}=([g,$]=q(async()=>G(async()=>{u().loading_full=!0;const{data:a,error:t,status:_}=await A("/api/units",{method:"get",headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},params:o,retry:0});return u().loading_full=!1,_.value==="error"?(D().trigger(t),[]):a.value.data},"$whiLrYsIIe")),g=await g,$(),g),l=c(null);l.value=E.value;const m=c(""),d=c({field:"created_at",by:"desc"}),i=c(-1),n=c({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),N=()=>{o.like="",m.value!=""&&(o.like=`id:%${m.value}%,name:%${m.value}%`),o.sort="",d.field&&(o.sort=d.value.field+":"+d.value.by)},w=c(null),M=async()=>{u().loading_full=!0,n.value.may_get_data=!1,o.page=n.value.page,o.page==1&&(l.value=[]),o.first_row&&delete o.first_row,o.page>1&&(o.first_row=JSON.stringify(l.value[0]));const{data:a,error:t,status:_}=await A("/api/units",{method:"get",headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},params:o,retry:0});if(u().loading_full=!1,n.value.may_get_data=!0,_.value==="error"){D().trigger(t);return}n.value.page==1?(l.value=a.value.data,w.value&&(w.value.scrollTop=0)):n.value.page>1&&(l.value=[...l.value,...a.value.data]),a.value.data.length==0&&(n.value.is_last_record=!0)},R=async()=>{if(!n.value.may_get_data)return;let a=w.value;if(a.scrollLeft!=n.value.scrollLeft){n.value.scrollLeft=a.scrollLeft;return}n.value.is_last_record||!(Math.round(a.scrollTop)+a.clientHeight>=a.scrollHeight-1)||(n.value.page++,await M())},H=()=>{n.value.page=1,n.value.is_last_record=!1,N(),M()};Z();const T=()=>le(ne(()=>re(()=>import("./form.90acda83.js"),["./form.90acda83.js","./entry.0b1d38b1.js","./entry.edcf1d4b.css","./useMyFetch.6a55485b.js"],import.meta.url))),U=async()=>{await u().setDynamicComponent(T,"Tambah Unit")},{display:B}=L();Q(L());const F=async()=>{i.value==-1?B({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):await u().setDynamicComponent(T,"Ubah Satuan",{id:l.value[i.value].id})},I=c({}),p=c(!1),P=async()=>{p.value&&(p.value=!1)},V=()=>{i.value==-1?B({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(I.value={id:l.value[i.value].id,name:l.value[i.value].name},p.value=!0)},j=async()=>{u().loading_full=!0;const a=new FormData;a.append("id",l.value[i.value].id),a.append("_method","DELETE");const{data:t,error:_,status:x}=await A("/api/unit",{method:"post",headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},body:a,retry:0});if(u().loading_full=!1,x.value==="error"){D().trigger(_);return}l.value.splice(i.value,1),i.value=-1,p.value=!1};return(a,t)=>{const _=ie,x=ue,O=ce,K=de,Y=_e;return v(),h("div",fe,[e("div",me,[e("div",pe,[e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[0]||(t[0]=s=>U())},[y(_)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[1]||(t[1]=s=>F())},[y(x)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[2]||(t[2]=s=>V())},[y(O)])]),e("form",ve,[e("div",he,[ye,C(e("input",{class:"",type:"text","onUpdate:modelValue":t[3]||(t[3]=s=>X(m)?m.value=s:null),name:"search",placeholder:"Keyword"},null,512),[[W,r(m)]])]),e("div",ge,[we,C(e("select",{class:"","onUpdate:modelValue":t[4]||(t[4]=s=>r(d).field=s)},De,512),[[z,r(d).field]])]),e("div",Ce,[Ae,C(e("select",{class:"","onUpdate:modelValue":t[5]||(t[5]=s=>r(d).by=s)},Me,512),[[z,r(d).by]])]),e("div",Te,[e("button",{class:"",type:"submit",name:"button",onClick:t[6]||(t[6]=ee(s=>H(),["prevent"]))},[y(K,{class:"text-2xl"})])])]),e("div",Be,[r(l).length==0?(v(),h("div",Ie," Maaf Tidak Ada Record ")):(v(),h("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:w,onScroll:R},[e("table",Le,[ze,e("tbody",null,[(v(!0),h(te,null,ae(r(l),(s,b)=>(v(),h("tr",{key:b,onClick:He=>i.value=b,class:se(r(i)==b?"active":"")},[e("td",null,f(b+1)+".",1),e("td",Ne,f(s.id),1),e("td",null,f(s.name),1),e("td",null,f(r(S)(s.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,f(s.creator.username),1),e("td",null,f(r(S)(s.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,f(s.updator.username),1)],10,Ee))),128))])])],544))])]),y(Y,{type:"delete",show:r(p),data:r(I),fnClose:P,fnConfirm:j},null,8,["show","data"])])}}};export{qe as default};
