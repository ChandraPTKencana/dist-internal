import{_ as E}from"./HeaderCustom.vue.56af17fd.js";import{_ as J}from"./Signature.c5396c73.js";import{_ as K}from"./Search.3a744c6c.js";import{r as i,h as G,k as P,i as Q,x as Z,c as d,b as D,a as e,m as H,v as W,n as u,z as R,A as X,F as z,B,l as ee,o as _,t as r,C as te,D as le,q as y,s as L}from"./entry.f4a32d18.js";import{u as N}from"./useMyFetch.ba06e537.js";import"./_plugin-vue_export-helper.c27b6911.js";const ae={class:"w-full h-full flex flex-col"},se={class:"w-full flex grow flex-col overflow-auto h-0"},oe={class:"w-full flex"},re={class:"w-full flex p-1"},ne={class:"grow"},ue=e("div",{class:"font-bold"}," Keyword ",-1),ie={class:"flex flex-col ml-1"},ce=e("div",{class:"font-bold"}," Filter ",-1),de=["value"],_e={class:"flex items-end pl-1"},fe={class:"w-full flex justify-center items-center grow h-0 p-1"},ve={key:0,class:""},me={class:"tacky"},pe=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Created At"),e("th",null,"Updated At"),e("th",null,"ID"),e("th",null,"Source"),e("th",null,"Target"),e("th",null,"Note"),e("th",null,"Status"),e("th",null,"Requested At"),e("th",null,"Requested By"),e("th",null,"Ref ID")])],-1),he=["onClick"],ge={class:"bold"},Ce={__name:"request",async setup(ye){let m,A;const{$moment:w}=le(),S=[{var:"all",val:"All"},{var:"warehouse_target_name",val:"Target"},{var:"warehouse_source_name",val:"Source"}],f=i("all"),a={};a._TimeZoneOffset=new Date().getTimezoneOffset();const C=G("token"),{data:j}=([m,A]=P(async()=>ee(async()=>{y().loading_full=!0;const{data:l,error:o,status:v}=await N("/api/request_transactions",{method:"get",headers:{Authorization:`Bearer ${C.value}`,Accept:"application/json"},params:a,retry:0});if(y().loading_full=!1,v.value==="error")return L().trigger(o),[];let x=l.value.data,b=l.value.request_notif;return{transactions:x,request_notif:b}},"$7Ji4QGznfa")),m=await m,A(),m),n=i(j.value.transactions),c=i(""),k=i({field:"updated_at",by:"desc"}),p=i(-1),s=i({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),F=()=>{a.like="",c.value!=""&&(a.like="",f.value=="all"?a.like=S.filter(l=>l.var!="all").map(l=>`${l.var}:%${c.value}%`).join(","):a.like=`${f.value}:%${c.value}%`),a.sort="",k.value.field&&(a.sort=k.value.field+":"+k.value.by)},h=i(null),M=async()=>{y().loading_full=!0,s.value.may_get_data=!1,a.page=s.value.page,a.page==1&&(n.value=[]),a.first_row&&delete a.first_row,a.page>1&&(a.first_row=JSON.stringify(n.value[0]));const{data:l,error:o,status:v}=await N("/api/request_transactions",{method:"get",headers:{Authorization:`Bearer ${C.value}`,Accept:"application/json"},params:a,retry:0});if(y().loading_full=!1,s.value.may_get_data=!0,v.value==="error"){L().trigger(o);return}s.value.page==1?(n.value=l.value.data,h.value&&(h.value.scrollTop=0)):s.value.page>1&&(n.value=[...n.value,...l.value.data]),l.value.data.length==0&&(s.value.is_last_record=!0)},I=async()=>{if(!s.value.may_get_data)return;let l=h.value;if(l.scrollLeft!=s.value.scrollLeft){s.value.scrollLeft=l.scrollLeft;return}s.value.is_last_record||!(Math.round(l.scrollTop)+l.clientHeight>=l.scrollHeight-1)||(s.value.page++,await M())},V=()=>{s.value.page=1,s.value.is_last_record=!1,F(),M()},O=Q(),{display:U}=Z(),Y=()=>{p.value==-1?U({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):O.push({name:"data_transaksi-confirm",query:{id:n.value[p.value].id}})};return(l,o)=>{const v=E,x=J,b=K;return _(),d("div",ae,[D(v,{title:"List Transaction",back:!0}),e("div",se,[e("div",oe,[e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:o[0]||(o[0]=t=>Y())},[D(x)])]),e("div",re,[e("div",ne,[ue,H(e("input",{class:"",type:"text","onUpdate:modelValue":o[1]||(o[1]=t=>R(c)?c.value=t:null),name:"search",placeholder:"Keyword"},null,512),[[W,u(c)]])]),e("div",ie,[ce,H(e("select",{class:"w-full grow","onUpdate:modelValue":o[2]||(o[2]=t=>R(f)?f.value=t:null)},[(_(),d(z,null,B(S,t=>e("option",{value:t.var},r(t.val),9,de)),64))],512),[[X,u(f)]])]),e("div",_e,[e("button",{class:"",type:"button",name:"button",onClick:o[3]||(o[3]=t=>V())},[D(b,{class:"text-2xl"})])])]),e("div",fe,[u(n).length==0?(_(),d("div",ve," Maaf Tidak Ada Record ")):(_(),d("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:h,onScroll:I},[e("table",me,[pe,e("tbody",null,[(_(!0),d(z,null,B(u(n),(t,g)=>{var $,q,T;return _(),d("tr",{key:g,onClick:we=>p.value=g,class:te(u(p)==g?"active":"")},[e("td",null,r(g+1)+".",1),e("td",null,r(u(w)(t.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,r(u(w)(t.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",ge,r(t.id),1),e("td",null,r(($=t.warehouse_source)==null?void 0:$.name),1),e("td",null,r((q=t.warehouse_target)==null?void 0:q.name),1),e("td",null,r(t.note),1),e("td",null,r(t.status),1),e("td",null,r(u(w)(t.requested_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,r((T=t.requester)==null?void 0:T.username),1),e("td",null,r(t.ref_id),1)],10,he)}),128))])])],544))])])])}}};export{Ce as default};
