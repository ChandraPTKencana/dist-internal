import{_ as Y}from"./Header.8ca87215.js";import{_ as G}from"./Plus.9f6d76d4.js";import{_ as Z}from"./Edit.6a54c3e7.js";import{_ as Q}from"./Delete.4301afc1.js";import{_ as W}from"./Search.c9eb41e4.js";import{_ as X}from"./PopupMini.vue.6f9123cd.js";import{q as ee,x as te,r as f,s as ae,E as N,F as le,c as h,b as p,a as e,z as D,A as se,B as n,G as oe,H as E,N as ne,I as re,J as ue,y as ie,C as m,D as A,o as y,K as de,t as u,L as ce}from"./entry.84794b94.js";import{u as _e}from"./useUtils.100f5b4a.js";import{u as C}from"./useMyFetch.e525a9ab.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.a8dd7d8b.js";const fe={class:"w-full h-full flex flex-col"},pe={class:"w-full flex grow flex-col overflow-auto h-0"},me={class:"w-full flex"},ve={action:"#",class:"w-full flex p-1"},he={class:"grow"},ye=e("div",{class:"font-bold"}," Keyword ",-1),ge={class:"pl-1"},we=e("div",{class:"font-bold"}," Sort By ",-1),be=e("option",{value:"created_at"},"Created At",-1),xe=e("option",{value:"name"},"Name",-1),ke=e("option",{value:"value"},"Value",-1),De=[be,xe,ke],Ae={class:"pl-1"},Ce=e("div",{class:"font-bold"}," Sort Order ",-1),$e=e("option",{value:"asc"},"Asc",-1),Be=e("option",{value:"desc"},"Desc",-1),Me=[$e,Be],Se={class:"flex items-end pl-1"},Te={class:"w-full flex justify-center items-center grow h-0 p-1"},Le={key:0,class:""},Ne={class:"tacky"},Ee=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"ID"),e("th",null,"Name"),e("th",null,"Unit"),e("th",null,"Value"),e("th",null,"Note"),e("th",null,"Created At"),e("th",null,"Created By"),e("th",null,"Updated At"),e("th",null,"Updated By")])],-1),He=["onClick"],ze={class:"bold"},Ze={__name:"index",async setup(Fe){let g,$;const{$moment:B}=ce(),{pointFormat:H}=_e(),s={};s._TimeZoneOffset=new Date().getTimezoneOffset(),s.sort="created_at:desc";const x=ee("token"),{data:r}=([g,$]=te(async()=>ie(async()=>{m().loading_full=!0;const{data:l,error:t,status:_}=await C("/api/items",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:s,retry:0});return m().loading_full=!1,_.value==="error"?(A().trigger(t),[]):l.value.data},"$hEoAojBvbD")),g=await g,$(),g),d=f(""),c=f({field:"created_at",by:"desc"}),i=f(-1),o=f({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),z=()=>{s.like="",d.value!=""&&(s.like=`id:%${d.value}%,name:%${d.value}%,value:%${d.value}%`),s.sort="",c.value.field&&(s.sort=c.value.field+":"+c.value.by)},w=f(null),M=async()=>{m().loading_full=!0,o.value.may_get_data=!1,s.page=o.value.page,s.page==1&&(r.value=[]),s.first_row&&delete s.first_row,s.page>1&&(s.first_row=JSON.stringify(r.value[0]));const{data:l,error:t,status:_}=await C("/api/items",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:s,retry:0});if(m().loading_full=!1,o.value.may_get_data=!0,_.value==="error"){A().trigger(t);return}o.value.page==1?(r.value=l.value.data,w.value&&(w.value.scrollTop=0)):o.value.page>1&&(r.value=[...r.value,...l.value.data]),l.value.data.length==0&&(o.value.is_last_record=!0)},F=async()=>{if(!o.value.may_get_data)return;let l=w.value;if(l.scrollLeft!=o.value.scrollLeft){o.value.scrollLeft=l.scrollLeft;return}o.value.is_last_record||!(Math.round(l.scrollTop)+l.clientHeight>=l.scrollHeight-1)||(o.value.page++,await M())},I=()=>{o.value.page=1,o.value.is_last_record=!1,z(),M()},S=ae(),U=()=>{S.push({name:"data_item-form",query:{id:""}})},{display:T}=N();le(N());const V=()=>{i.value==-1?T({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):S.push({name:"data_item-form",query:{id:r.value[i.value].id}})},L=f({}),v=f(!1),j=async()=>{v.value&&(v.value=!1)},R=()=>{i.value==-1?T({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(L.value={id:r.value[i.value].id},v.value=!0)},O=async()=>{m().loading_full=!0;const l=new FormData;l.append("id",r.value[i.value].id),l.append("_method","DELETE");const{data:t,error:_,status:k}=await C("/api/item",{method:"post",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:l,retry:0});if(m().loading_full=!1,k.value==="error"){A().trigger(_);return}r.value.splice(i.value,1),i.value=-1,v.value=!1};return(l,t)=>{const _=Y,k=G,P=Z,q=Q,K=W,J=X;return y(),h("div",fe,[p(_,{title:"List Item"}),e("div",pe,[e("div",me,[e("button",{type:"button",name:"button",class:"p-1 m-1 text-2xl",onClick:t[0]||(t[0]=a=>U())},[p(k)]),e("button",{type:"button",name:"button",class:"p-1 m-1 text-2xl",onClick:t[1]||(t[1]=a=>V())},[p(P)]),e("button",{type:"button",name:"button",class:"p-1 m-1 text-2xl",onClick:t[2]||(t[2]=a=>R())},[p(q)])]),e("form",ve,[e("div",he,[ye,D(e("input",{class:"",type:"text","onUpdate:modelValue":t[3]||(t[3]=a=>oe(d)?d.value=a:null),name:"search",placeholder:"Keyword"},null,512),[[se,n(d)]])]),e("div",ge,[we,D(e("select",{class:"","onUpdate:modelValue":t[4]||(t[4]=a=>n(c).field=a)},De,512),[[E,n(c).field]])]),e("div",Ae,[Ce,D(e("select",{class:"","onUpdate:modelValue":t[5]||(t[5]=a=>n(c).by=a)},Me,512),[[E,n(c).by]])]),e("div",Se,[e("button",{class:"",type:"submit",name:"button",onClick:t[6]||(t[6]=ne(a=>I(),["prevent"]))},[p(K,{class:"text-2xl"})])])]),e("div",Te,[n(r).length==0?(y(),h("div",Le," Maaf Tidak Ada Record ")):(y(),h("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:w,onScroll:F},[e("table",Ne,[Ee,e("tbody",null,[(y(!0),h(re,null,ue(n(r),(a,b)=>(y(),h("tr",{key:b,onClick:Ie=>i.value=b,class:de(n(i)==b?"active":"")},[e("td",null,u(b+1)+".",1),e("td",ze,u(a.id),1),e("td",null,u(a.name),1),e("td",null,u(a.unit.name),1),e("td",null,u(n(H)(a.value)),1),e("td",null,u(a.note),1),e("td",null,u(n(B)(a.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,u(a.creator.username),1),e("td",null,u(n(B)(a.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,u(a.updator.username),1)],10,He))),128))])])],544))])]),p(J,{type:"delete",show:n(v),data:n(L),fnClose:j,fnConfirm:O},null,8,["show","data"])])}}};export{Ze as default};
