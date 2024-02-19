import{_ as J}from"./Header.b03ae673.js";import{_ as Y}from"./Plus.894880f1.js";import{_ as G}from"./Edit.f12d7395.js";import{_ as Z}from"./Delete.4e68de5b.js";import{_ as Q}from"./Search.8c91f68d.js";import{_ as W}from"./PopupMini.vue.1fc7c4ef.js";import{q as X,x as ee,r as d,s as te,E as z,F as ae,c as h,b as m,a as e,z as D,A as se,B as r,G as oe,H,N as le,I as ne,J as re,y as ie,C as p,D as A,o as y,K as ue,t as _,L as ce}from"./entry.dc995b47.js";import{u as C}from"./useMyFetch.001523d4.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.978e9abc.js";const de={class:"w-full h-full flex flex-col"},_e={class:"w-full flex grow flex-col overflow-auto h-0"},fe={class:"w-full flex"},me={action:"#",class:"w-full flex p-1"},pe={class:"grow"},ve=e("div",{class:"font-bold"}," Keyword ",-1),he={class:"pl-1"},ye=e("div",{class:"font-bold"}," Sort By ",-1),ge=e("option",{value:"created_at"},"Created At",-1),we=e("option",{value:"id"},"ID",-1),ke=e("option",{value:"name"},"Name",-1),xe=[ge,we,ke],be={class:"pl-1"},De=e("div",{class:"font-bold"}," Sort Order ",-1),Ae=e("option",{value:"asc"},"Asc",-1),Ce=e("option",{value:"desc"},"Desc",-1),$e=[Ae,Ce],Me={class:"flex items-end pl-1"},Se={class:"w-full flex justify-center items-center grow h-0 p-1"},Be={key:0,class:""},Te={class:"tacky"},Le=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",{class:"sticky left-0 !z-[2]"},"ID"),e("th",null,"Name"),e("th",null,"Created At"),e("th",null,"Created By"),e("th",null,"Updated At"),e("th",null,"Updated By")])],-1),ze=["onClick"],He={class:"sticky left-0 !z-[1] bold"},Je={__name:"index",async setup(Ie){let g,$;const{$moment:M}=ce(),o={};o._TimeZoneOffset=new Date().getTimezoneOffset(),o.sort="created_at:desc";const x=X("token"),{data:n}=([g,$]=ee(async()=>ie(async()=>{p().loading_full=!0;const{data:a,error:t,status:c}=await C("/api/units",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:o,retry:0});return p().loading_full=!1,c.value==="error"?(A().trigger(t),[]):a.value.data},"$OvLIT5s7hk")),g=await g,$(),g),f=d(""),u=d({field:"created_at",by:"desc"}),i=d(-1),l=d({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),I=()=>{o.like="",f.value!=""&&(o.like=`id:%${f.value}%,name:%${f.value}%`),o.sort="",u.field&&(o.sort=u.value.field+":"+u.value.by)},w=d(null),S=async()=>{p().loading_full=!0,l.value.may_get_data=!1,o.page=l.value.page,o.page==1&&(n.value=[]),o.first_row&&delete o.first_row,o.page>1&&(o.first_row=JSON.stringify(n.value[0]));const{data:a,error:t,status:c}=await C("/api/units",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:o,retry:0});if(p().loading_full=!1,l.value.may_get_data=!0,c.value==="error"){A().trigger(t);return}l.value.page==1?(n.value=a.value.data,w.value&&(w.value.scrollTop=0)):l.value.page>1&&(n.value=[...n.value,...a.value.data]),a.value.data.length==0&&(l.value.is_last_record=!0)},N=async()=>{if(!l.value.may_get_data)return;let a=w.value;if(a.scrollLeft!=l.value.scrollLeft){l.value.scrollLeft=a.scrollLeft;return}l.value.is_last_record||!(Math.round(a.scrollTop)+a.clientHeight>=a.scrollHeight-1)||(l.value.page++,await S())},E=()=>{l.value.page=1,l.value.is_last_record=!1,I(),S()},B=te(),F=()=>{B.push({name:"data_satuan-form",query:{id:""}})},{display:T}=z();ae(z());const R=()=>{i.value==-1?T({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):B.push({name:"data_satuan-form",query:{id:n.value[i.value].id}})},L=d({}),v=d(!1),j=async()=>{v.value&&(v.value=!1)},O=()=>{i.value==-1?T({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(L.value={id:n.value[i.value].id,name:n.value[i.value].name},v.value=!0)},U=async()=>{p().loading_full=!0;const a=new FormData;a.append("id",n.value[i.value].id),a.append("_method","DELETE");const{data:t,error:c,status:b}=await C("/api/unit",{method:"post",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:a,retry:0});if(p().loading_full=!1,b.value==="error"){A().trigger(c);return}n.value.splice(i.value,1),i.value=-1,v.value=!1};return(a,t)=>{const c=J,b=Y,V=G,P=Z,q=Q,K=W;return y(),h("div",de,[m(c,{title:"List unit"}),e("div",_e,[e("div",fe,[e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[0]||(t[0]=s=>F())},[m(b)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[1]||(t[1]=s=>R())},[m(V)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[2]||(t[2]=s=>O())},[m(P)])]),e("form",me,[e("div",pe,[ve,D(e("input",{class:"",type:"text","onUpdate:modelValue":t[3]||(t[3]=s=>oe(f)?f.value=s:null),name:"search",placeholder:"Keyword"},null,512),[[se,r(f)]])]),e("div",he,[ye,D(e("select",{class:"","onUpdate:modelValue":t[4]||(t[4]=s=>r(u).field=s)},xe,512),[[H,r(u).field]])]),e("div",be,[De,D(e("select",{class:"","onUpdate:modelValue":t[5]||(t[5]=s=>r(u).by=s)},$e,512),[[H,r(u).by]])]),e("div",Me,[e("button",{class:"",type:"submit",name:"button",onClick:t[6]||(t[6]=le(s=>E(),["prevent"]))},[m(q,{class:"text-2xl"})])])]),e("div",Se,[r(n).length==0?(y(),h("div",Be," Maaf Tidak Ada Record ")):(y(),h("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:w,onScroll:N},[e("table",Te,[Le,e("tbody",null,[(y(!0),h(ne,null,re(r(n),(s,k)=>(y(),h("tr",{key:k,onClick:Ne=>i.value=k,class:ue(r(i)==k?"active":"")},[e("td",null,_(k+1)+".",1),e("td",He,_(s.id),1),e("td",null,_(s.name),1),e("td",null,_(r(M)(s.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,_(s.creator.username),1),e("td",null,_(r(M)(s.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,_(s.updator.username),1)],10,ze))),128))])])],544))])]),m(K,{type:"delete",show:r(v),data:r(L),fnClose:j,fnConfirm:U},null,8,["show","data"])])}}};export{Je as default};
