import{_ as j}from"./Header.62c71b6d.js";import{_ as q}from"./Plus.fc9d6ac8.js";import{_ as N}from"./Edit.f5fa3e6f.js";import{_ as I}from"./Search.29839e1c.js";import{h as O,k as Y,r as _,i as K,x as $,y as P,c as f,b as g,a as e,m as k,v as Z,n as o,z as G,A as M,F as J,B as Q,l as W,o as m,C as X,t as i,D as ee,q as b,s as S}from"./entry.4025b1c0.js";import{u as L}from"./useMyFetch.bc212a63.js";import"./_plugin-vue_export-helper.c27b6911.js";const te={class:"w-full h-full flex flex-col"},le={class:"w-full flex grow flex-col overflow-auto h-0"},ae={class:"w-full flex"},se={class:"w-full flex p-1"},oe={class:"grow"},ne=e("div",{class:"font-bold"}," Keyword ",-1),re={class:"pl-1"},ie=e("div",{class:"font-bold"}," Sort By ",-1),ue=e("option",{value:""},null,-1),ce=e("option",{value:"username"},"Username",-1),de=e("option",{value:"email"},"Email",-1),_e=e("option",{value:"fullname"},"Fullname",-1),fe=[ue,ce,de,_e],me={class:"pl-1"},pe=e("div",{class:"font-bold"}," Sort Order ",-1),ve=e("option",{value:"asc"},"Asc",-1),he=e("option",{value:"desc"},"Desc",-1),ye=[ve,he],ge={class:"flex items-end pl-1"},be={class:"w-full flex justify-center items-center grow h-0 p-1"},ke={key:0,class:""},xe={class:"tacky"},we=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",{class:"sticky left-0 !z-[2]"},"Username"),e("th",null,"Email"),e("th",null,"Fullname"),e("th",null,"Can Login"),e("th",null,"Created At"),e("th",null,"Creator"),e("th",null,"Updated At"),e("th",null,"Updator")])],-1),Ae=["onClick"],Ce={class:"sticky left-0 !z-[1] bold"},Ue={__name:"index",async setup(De){let p,x;const{$moment:w}=ee(),n={};n._TimeZoneOffset=new Date().getTimezoneOffset();const A=O("token"),{data:u}=([p,x]=Y(async()=>W(async()=>{b().loading_full=!0;const{data:s,error:t,status:d}=await L("/api/members",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:n,retry:0});return b().loading_full=!1,d.value==="error"?(S().trigger(t),[]):s.value.data},"$HbqiA7t9ZL")),p=await p,x(),p),r=_(""),c=_({field:"",by:"desc"}),v=_(-1),a=_({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),T=()=>{n.like="",r.value!=""&&(n.like=`id:%${r.value}%,username:%${r.value}%,email:%${r.value}%,fullname:%${r.value}%,role:%${r.value}%`),n.sort="",c.field&&(n.sort=c.value.field+":"+c.value.by)},h=_(null),C=async()=>{b().loading_full=!0,a.value.may_get_data=!1,n.page=a.value.page,n.page==1&&(u.value=[]);const{data:s,error:t,status:d}=await L("/api/members",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:n,retry:0});if(b().loading_full=!1,a.value.may_get_data=!0,d.value==="error"){S().trigger(t);return}a.value.page==1?(u.value=s.value.data,h.value&&(h.value.scrollTop=0)):a.value.page>1&&(u.value=[...u.value,...s.value.data]),s.value.data.length==0&&(a.value.is_last_record=!0)},z=async()=>{if(!a.value.may_get_data)return;let s=h.value;if(s.scrollLeft!=a.value.scrollLeft){a.value.scrollLeft=s.scrollLeft;return}a.value.is_last_record||!(Math.round(s.scrollTop)+s.clientHeight>=s.scrollHeight-1)||(a.value.page++,await C())},H=()=>{a.value.page=1,a.value.is_last_record=!1,T(),C()},D=K(),B=()=>{D.push({name:"member-form",query:{id:""}})},{display:U}=$();P($());const F=()=>{v.value==-1?U({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):D.push({name:"member-form",query:{id:u.value[v.value].id}})};return(s,t)=>{const d=j,R=q,E=N,V=I;return m(),f("div",te,[g(d,{title:"List Member"}),e("div",le,[e("div",ae,[e("button",{type:"button",name:"button",class:"border-black border-solid border-2 p-1 m-1 text-2xl",onClick:t[0]||(t[0]=l=>B())},[g(R)]),e("button",{type:"button",name:"button",class:"border-black border-solid border-2 p-1 m-1 text-2xl",onClick:t[1]||(t[1]=l=>F())},[g(E)])]),e("div",se,[e("div",oe,[ne,k(e("input",{class:"",type:"text","onUpdate:modelValue":t[2]||(t[2]=l=>G(r)?r.value=l:null),name:"search",placeholder:"Keyword"},null,512),[[Z,o(r)]])]),e("div",re,[ie,k(e("select",{class:"","onUpdate:modelValue":t[3]||(t[3]=l=>o(c).field=l)},fe,512),[[M,o(c).field]])]),e("div",me,[pe,k(e("select",{class:"","onUpdate:modelValue":t[4]||(t[4]=l=>o(c).by=l)},ye,512),[[M,o(c).by]])]),e("div",ge,[e("button",{class:"",type:"button",name:"button",onClick:t[5]||(t[5]=l=>H())},[g(V,{class:"text-2xl"})])])]),e("div",be,[o(u).length==0?(m(),f("div",ke," Maaf Tidak Ada Record ")):(m(),f("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:h,onScroll:z},[e("table",xe,[we,e("tbody",null,[(m(!0),f(J,null,Q(o(u),(l,y)=>(m(),f("tr",{key:y,onClick:$e=>v.value=y,class:X(o(v)==y?"active":"")},[e("td",null,i(y+1)+".",1),e("td",Ce,i(l.username),1),e("td",null,i(l.email),1),e("td",null,i(l.fullname),1),e("td",null,i(l.can_login?"Ya":"Tidak"),1),e("td",null,i(o(w)(l.internal_created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,i(l.internal_creator.email),1),e("td",null,i(o(w)(l.internal_updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,i(l.internal_updator.email),1)],10,Ae))),128))])])],544))])])])}}};export{Ue as default};
