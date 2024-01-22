import{_ as N}from"./Header.62c71b6d.js";import{_ as O}from"./Plus.fc9d6ac8.js";import{_ as P}from"./Edit.f5fa3e6f.js";import{_ as Y}from"./Search.29839e1c.js";import{h as K,k as Z,r as m,i as J,x as L,y as Q,c as p,b as v,a as e,m as D,v as G,n as o,z as W,A as F,F as X,B as ee,l as te,o as h,C as se,t as _,p as ae,e as le,D as oe,q as k,s as H,O as ne}from"./entry.4025b1c0.js";import{u as re}from"./useUtils.70251168.js";import{u as ue}from"./useMyFetch.bc212a63.js";import{_ as ie}from"./_plugin-vue_export-helper.c27b6911.js";const r=y=>(ae("data-v-9b3ada24"),y=y(),le(),y),ce={class:"w-full h-full flex flex-col"},de={class:"w-full flex grow flex-col overflow-auto h-0"},_e={class:"w-full flex"},fe={class:"w-full flex p-1"},me={class:"grow"},pe=r(()=>e("div",{class:"font-bold"}," Keyword ",-1)),ve={class:"pl-1"},he=r(()=>e("div",{class:"font-bold"}," Sort By ",-1)),ye=r(()=>e("option",{value:""},null,-1)),ge=r(()=>e("option",{value:"email"},"Email",-1)),be=r(()=>e("option",{value:"fullname"},"Fullname",-1)),xe=[ye,ge,be],ke={class:"pl-1"},we=r(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),De=r(()=>e("option",{value:"asc"},"Asc",-1)),Se=r(()=>e("option",{value:"desc"},"Desc",-1)),$e=[De,Se],Ae={class:"flex items-end pl-1"},Ce={class:"w-full flex justify-center items-center grow h-0 p-1"},Te={key:0,class:""},Me={class:"tacky"},Le=r(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Email"),e("th",null,"Fullname"),e("th",null,"Role"),e("th",null,"Tanggal Dibuat"),e("th",null,"Tanggal Diubah")])],-1)),Fe=["onClick"],He={class:"bold"},Ie={__name:"index",async setup(y){let g,S;const{$moment:$}=oe(),{sayHello:I}=re();I();const n={};n._TimeZoneOffset=new Date().getTimezoneOffset();const A=K("token"),{data:u}=([g,S]=Z(async()=>te(async()=>{k().loading_full=!0;const{data:l,error:t,status:f}=await ue("/api/users",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:n,retry:0});return k().loading_full=!1,f.value==="error"?(H().trigger(t),[]):l.value.data},"$4SJ9UL5Y8i")),g=await g,S(),g),i=m(""),c=m({field:"",by:"desc"}),d=m(-1),a=m({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),B=()=>{n.like="",i.value!=""&&(n.like=`id:%${i.value}%,email:%${i.value}%,fullname:%${i.value}%`),n.sort="",c.value.field&&(n.sort=c.value.field+":"+c.value.by)},b=m(null),C=async()=>{k().loading_full=!0,a.value.may_get_data=!1,n.page=a.value.page,n.page==1&&(u.value=[]);const{data:l,error:t,status:f}=await ne("/api/users",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:n,retry:0},"$LZQttUfkIg");if(k().loading_full=!1,a.value.may_get_data=!0,f.value==="error"){H().trigger(t);return}a.value.page==1?(u.value=l.value.data,b.value&&(b.value.scrollTop=0)):a.value.page>1&&(u.value=[...u.value,...l.value.data]),l.value.data.length==0&&(a.value.is_last_record=!0)},R=async()=>{if(!a.value.may_get_data)return;let l=b.value;if(l.scrollLeft!=a.value.scrollLeft){a.value.scrollLeft=l.scrollLeft;return}a.value.is_last_record||!(Math.round(l.scrollTop)+l.clientHeight>=l.scrollHeight-1)||(a.value.page++,await C())},U=()=>{a.value.page=1,a.value.is_last_record=!1,B(),C()},w=J(),z=()=>{w.push({name:"user-form",query:{id:""}})},{display:T}=L();Q(L());const E=()=>{d.value==-1?T({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):w.push({name:"user-form",query:{id:u.value[d.value].id}})},V=()=>{d.value==-1?T({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):w.push({name:"user-permission",query:{id:u.value[d.value].id}})};return(l,t)=>{const f=N,j=O,M=P,q=Y;return h(),p("div",ce,[v(f,{title:"List User"}),e("div",de,[e("div",_e,[e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[0]||(t[0]=s=>z())},[v(j)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[1]||(t[1]=s=>E())},[v(M)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[2]||(t[2]=s=>V())},[v(M)])]),e("div",fe,[e("div",me,[pe,D(e("input",{class:"",type:"text","onUpdate:modelValue":t[3]||(t[3]=s=>W(i)?i.value=s:null),name:"search",placeholder:"Keyword"},null,512),[[G,o(i)]])]),e("div",ve,[he,D(e("select",{class:"","onUpdate:modelValue":t[4]||(t[4]=s=>o(c).field=s)},xe,512),[[F,o(c).field]])]),e("div",ke,[we,D(e("select",{class:"","onUpdate:modelValue":t[5]||(t[5]=s=>o(c).by=s)},$e,512),[[F,o(c).by]])]),e("div",Ae,[e("button",{class:"",type:"button",name:"button",onClick:t[6]||(t[6]=s=>U())},[v(q,{class:"text-2xl"})])])]),e("div",Ce,[o(u).length==0?(h(),p("div",Te," Maaf Tidak Ada Record ")):(h(),p("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:b,onScroll:R},[e("table",Me,[Le,e("tbody",null,[(h(!0),p(X,null,ee(o(u),(s,x)=>(h(),p("tr",{key:x,onClick:Be=>d.value=x,class:se(o(d)==x?"active":"")},[e("td",null,_(x+1)+".",1),e("td",He,_(s.email),1),e("td",null,_(s.fullname),1),e("td",null,_(s.role),1),e("td",null,_(o($)(s.internal_created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,_(o($)(s.internal_updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,Fe))),128))])])],544))])])])}}},Oe=ie(Ie,[["__scopeId","data-v-9b3ada24"]]);export{Oe as default};
