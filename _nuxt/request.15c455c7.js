import{_ as O}from"./HeaderCustom.vue.2274acf9.js";import{_ as U}from"./Signature.0aedb723.js";import{_ as Y}from"./Search.cd740c5d.js";import{r as i,q as G,x as P,s as Q,E as Z,c as d,b as D,a as e,z as H,A as W,B as n,G as L,H as X,I as R,J as z,N as ee,y as te,o as _,t as r,K as le,L as ae,C as y,D as B}from"./entry.a58c45cf.js";import{u as N}from"./useMyFetch.bcdb1556.js";import"./_plugin-vue_export-helper.c27b6911.js";const se={class:"w-full h-full flex flex-col"},oe={class:"w-full flex grow flex-col overflow-auto h-0"},re={class:"w-full flex"},ue={action:"#",class:"w-full flex p-1"},ne={class:"grow"},ie=e("div",{class:"font-bold"}," Keyword ",-1),ce={class:"flex flex-col ml-1"},de=e("div",{class:"font-bold"}," Filter ",-1),_e=["value"],fe={class:"flex items-end pl-1"},ve={class:"w-full flex justify-center items-center grow h-0 p-1"},me={key:0,class:""},pe={class:"tacky"},he=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Input At"),e("th",null,"Updated At"),e("th",null,"ID"),e("th",null,"Source"),e("th",null,"Target"),e("th",null,"Note"),e("th",null,"Status"),e("th",null,"Requested At"),e("th",null,"Requested By"),e("th",null,"Ref ID")])],-1),ge=["onClick"],ye={class:"bold"},$e={__name:"request",async setup(we){let m,A;const{$moment:w}=ae(),M=[{var:"all",val:"All"},{var:"warehouse_target_name",val:"Target"},{var:"warehouse_source_name",val:"Source"}],f=i("all"),a={};a._TimeZoneOffset=new Date().getTimezoneOffset();const S=G("token"),{data:I}=([m,A]=P(async()=>te(async()=>{y().loading_full=!0;const{data:l,error:o,status:v}=await N("/api/request_transactions",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:a,retry:0});if(y().loading_full=!1,v.value==="error")return B().trigger(o),[];let x=l.value.data,b=l.value.request_notif;return{transactions:x,request_notif:b}},"$7Ji4QGznfa")),m=await m,A(),m),u=i(I.value.transactions),c=i(""),k=i({field:"updated_at",by:"desc"}),p=i(-1),s=i({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),j=()=>{a.like="",c.value!=""&&(a.like="",f.value=="all"?a.like=M.filter(l=>l.var!="all").map(l=>`${l.var}:%${c.value}%`).join(","):a.like=`${f.value}:%${c.value}%`),a.sort="",k.value.field&&(a.sort=k.value.field+":"+k.value.by)},h=i(null),$=async()=>{y().loading_full=!0,s.value.may_get_data=!1,a.page=s.value.page,a.page==1&&(u.value=[]),a.first_row&&delete a.first_row,a.page>1&&(a.first_row=JSON.stringify(u.value[0]));const{data:l,error:o,status:v}=await N("/api/request_transactions",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:a,retry:0});if(y().loading_full=!1,s.value.may_get_data=!0,v.value==="error"){B().trigger(o);return}s.value.page==1?(u.value=l.value.data,h.value&&(h.value.scrollTop=0)):s.value.page>1&&(u.value=[...u.value,...l.value.data]),l.value.data.length==0&&(s.value.is_last_record=!0)},F=async()=>{if(!s.value.may_get_data)return;let l=h.value;if(l.scrollLeft!=s.value.scrollLeft){s.value.scrollLeft=l.scrollLeft;return}s.value.is_last_record||!(Math.round(l.scrollTop)+l.clientHeight>=l.scrollHeight-1)||(s.value.page++,await $())},V=()=>{s.value.page=1,s.value.is_last_record=!1,j(),$()},E=Q(),{display:J}=Z(),K=()=>{p.value==-1?J({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):E.push({name:"data_transaksi-confirm",query:{id:u.value[p.value].id}})};return(l,o)=>{const v=O,x=U,b=Y;return _(),d("div",se,[D(v,{title:"List Transaction",back:!0}),e("div",oe,[e("div",re,[e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:o[0]||(o[0]=t=>K())},[D(x)])]),e("form",ue,[e("div",ne,[ie,H(e("input",{class:"",type:"text","onUpdate:modelValue":o[1]||(o[1]=t=>L(c)?c.value=t:null),name:"search",placeholder:"Keyword"},null,512),[[W,n(c)]])]),e("div",ce,[de,H(e("select",{class:"w-full grow","onUpdate:modelValue":o[2]||(o[2]=t=>L(f)?f.value=t:null)},[(_(),d(R,null,z(M,t=>e("option",{value:t.var},r(t.val),9,_e)),64))],512),[[X,n(f)]])]),e("div",fe,[e("button",{class:"",type:"submit",name:"button",onClick:o[3]||(o[3]=ee(t=>V(),["prevent"]))},[D(b,{class:"text-2xl"})])])]),e("div",ve,[n(u).length==0?(_(),d("div",me," Maaf Tidak Ada Record ")):(_(),d("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:h,onScroll:F},[e("table",pe,[he,e("tbody",null,[(_(!0),d(R,null,z(n(u),(t,g)=>{var q,C,T;return _(),d("tr",{key:g,onClick:ke=>p.value=g,class:le(n(p)==g?"active":"")},[e("td",null,r(g+1)+".",1),e("td",null,r(t.input_at?n(w)(t.input_at).format("DD-MM-Y"):""),1),e("td",null,r(n(w)(t.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",ye,r(t.id),1),e("td",null,r((q=t.warehouse_source)==null?void 0:q.name),1),e("td",null,r((C=t.warehouse_target)==null?void 0:C.name),1),e("td",null,r(t.note),1),e("td",null,r(t.status),1),e("td",null,r(n(w)(t.requested_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,r((T=t.requester)==null?void 0:T.username),1),e("td",null,r(t.ref_id),1)],10,ge)}),128))])])],544))])])])}}};export{$e as default};
