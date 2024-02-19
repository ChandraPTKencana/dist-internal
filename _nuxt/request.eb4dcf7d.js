import{r as i,q as O,x as P,y as U,C as m,D as R,s as Y,E as J,o as d,c as _,a as e,b as T,z as q,A as G,B as u,G as L,H as Z,I as B,J as H,t as r,N as Q,K as W,L as X,_ as ee,$ as te,a0 as le}from"./entry.dc995b47.js";import{_ as ae}from"./Signature.a03cb0d9.js";import{_ as se}from"./Search.8c91f68d.js";import{u as I}from"./useMyFetch.001523d4.js";import"./_plugin-vue_export-helper.c27b6911.js";const oe={class:"w-full h-full flex flex-col border-t-4 border-slate-600"},re={class:"w-full flex grow flex-col overflow-auto h-0"},ne={class:"w-full flex"},ue={action:"#",class:"w-full flex p-1"},ie={class:"grow"},ce=e("div",{class:"font-bold"}," Keyword ",-1),de={class:"flex flex-col ml-1"},_e=e("div",{class:"font-bold"}," Filter ",-1),fe=["value"],ve={class:"flex items-end pl-1"},me={class:"w-full flex justify-center items-center grow h-0 p-1"},pe={key:0,class:""},he={class:"tacky"},ge=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Input At"),e("th",null,"Updated At"),e("th",null,"ID"),e("th",null,"Source"),e("th",null,"Target"),e("th",null,"Note"),e("th",null,"Status"),e("th",null,"Requested At"),e("th",null,"Requested By"),e("th",null,"Ref ID")])],-1),ye=["onClick"],we={class:"bold"},Ce={__name:"request",async setup(ke){let p,b;const{$moment:w}=X(),D=[{var:"all",val:"All"},{var:"warehouse_target_name",val:"Target"},{var:"warehouse_source_name",val:"Source"}],f=i("all"),a={};a._TimeZoneOffset=new Date().getTimezoneOffset();const A=O("token"),{data:N}=([p,b]=P(async()=>U(async()=>{m().loading_full=!0;const{data:l,error:o,status:v}=await I("/api/request_transactions",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:a,retry:0});if(m().loading_full=!1,v.value==="error")return R().trigger(o),[];let x=l.value.data,t=l.value.request_notif;return{transactions:x,request_notif:t}},"$R7hb5caouj")),p=await p,b(),p),n=i(N.value.transactions),c=i(""),k=i({field:"updated_at",by:"desc"}),h=i(-1),s=i({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),j=()=>{a.like="",c.value!=""&&(a.like="",f.value=="all"?a.like=D.filter(l=>l.var!="all").map(l=>`${l.var}:%${c.value}%`).join(","):a.like=`${f.value}:%${c.value}%`),a.sort="",k.value.field&&(a.sort=k.value.field+":"+k.value.by)},g=i(null),M=async()=>{m().loading_full=!0,s.value.may_get_data=!1,a.page=s.value.page,a.page==1&&(n.value=[]),a.first_row&&delete a.first_row,a.page>1&&(a.first_row=JSON.stringify(n.value[0]));const{data:l,error:o,status:v}=await I("/api/request_transactions",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:a,retry:0});if(m().loading_full=!1,s.value.may_get_data=!0,v.value==="error"){R().trigger(o);return}s.value.page==1?(n.value=l.value.data,g.value&&(g.value.scrollTop=0)):s.value.page>1&&(n.value=[...n.value,...l.value.data]),l.value.data.length==0&&(s.value.is_last_record=!0)},z=async()=>{if(!s.value.may_get_data)return;let l=g.value;if(l.scrollLeft!=s.value.scrollLeft){s.value.scrollLeft=l.scrollLeft;return}s.value.is_last_record||!(Math.round(l.scrollTop)+l.clientHeight>=l.scrollHeight-1)||(s.value.page++,await M())},E=()=>{s.value.page=1,s.value.is_last_record=!1,j(),M()};Y();const{display:V}=J(),F=()=>ee(te(()=>le(()=>import("./confirm.2c955a3e.js"),["./confirm.2c955a3e.js","./client-only.d62d3479.js","./entry.dc995b47.js","./entry.edcf1d4b.css","./PopupMini.vue.1fc7c4ef.js","./Times.978e9abc.js","./_plugin-vue_export-helper.c27b6911.js","./useMyFetch.001523d4.js"],import.meta.url))),K=async()=>{h.value==-1?V({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):await m().setDynamicComponent(F,"Konfirmasi Transaksi",{id:n.value[h.value].id})};return(l,o)=>{const v=ae,x=se;return d(),_("div",oe,[e("div",re,[e("div",ne,[e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:o[0]||(o[0]=t=>K())},[T(v)])]),e("form",ue,[e("div",ie,[ce,q(e("input",{class:"",type:"text","onUpdate:modelValue":o[1]||(o[1]=t=>L(c)?c.value=t:null),name:"search",placeholder:"Keyword"},null,512),[[G,u(c)]])]),e("div",de,[_e,q(e("select",{class:"w-full grow","onUpdate:modelValue":o[2]||(o[2]=t=>L(f)?f.value=t:null)},[(d(),_(B,null,H(D,t=>e("option",{value:t.var},r(t.val),9,fe)),64))],512),[[Z,u(f)]])]),e("div",ve,[e("button",{class:"",type:"submit",name:"button",onClick:o[3]||(o[3]=Q(t=>E(),["prevent"]))},[T(x,{class:"text-2xl"})])])]),e("div",me,[u(n).length==0?(d(),_("div",pe," Maaf Tidak Ada Record ")):(d(),_("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:g,onScroll:z},[e("table",he,[ge,e("tbody",null,[(d(!0),_(B,null,H(u(n),(t,y)=>{var S,C,$;return d(),_("tr",{key:y,onClick:xe=>h.value=y,class:W(u(h)==y?"active":"")},[e("td",null,r(y+1)+".",1),e("td",null,r(t.input_at?u(w)(t.input_at).format("DD-MM-Y"):""),1),e("td",null,r(u(w)(t.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",we,r(t.id),1),e("td",null,r((S=t.warehouse_source)==null?void 0:S.name),1),e("td",null,r((C=t.warehouse_target)==null?void 0:C.name),1),e("td",null,r(t.note),1),e("td",null,r(t.status),1),e("td",null,r(u(w)(t.requested_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,r(($=t.requester)==null?void 0:$.username),1),e("td",null,r(t.ref_id),1)],10,ye)}),128))])])],544))])])])}}};export{Ce as default};
