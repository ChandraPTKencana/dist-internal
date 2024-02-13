import{_ as E}from"./Header.1ae71715.js";import{_ as F}from"./Plus.713d7d36.js";import{_ as K}from"./Edit.b9e3828b.js";import{_ as P}from"./Search.468058c1.js";import{q,x as O,r as _,s as U,E as A,F as G,c as f,b as y,a as e,z as k,A as Y,B as l,G as Z,H as M,I as J,J as Q,y as W,o as m,K as X,t as u,L as ee,C as b,D as S}from"./entry.4c9c0f03.js";import{u as T}from"./useMyFetch.4a46506c.js";import"./_plugin-vue_export-helper.c27b6911.js";const te={class:"w-full h-full flex flex-col"},se={class:"w-full flex grow flex-col overflow-auto h-0"},ae={class:"w-full flex"},oe={class:"w-full flex p-1"},le={class:"grow"},ne=e("div",{class:"font-bold"}," Keyword ",-1),re={class:"pl-1"},ue=e("div",{class:"font-bold"}," Sort By ",-1),ce=e("option",{value:""},null,-1),ie=e("option",{value:"name"},"Name",-1),de=e("option",{value:"contact_number"},"Contact Number",-1),_e=e("option",{value:"contact_person"},"Contact Person",-1),fe=[ce,ie,de,_e],me={class:"pl-1"},pe=e("div",{class:"font-bold"}," Sort Order ",-1),ve=e("option",{value:"asc"},"Asc",-1),he=e("option",{value:"desc"},"Desc",-1),ge=[ve,he],ye={class:"flex items-end pl-1"},be={class:"w-full flex justify-center items-center grow h-0 p-1"},ke={key:0,class:""},xe={class:"tacky"},we=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Name"),e("th",null,"Address"),e("th",null,"Contact Number"),e("th",null,"Contact Person"),e("th",null,"Marketer"),e("th",null,"Tanggal Dibuat"),e("th",null,"Tanggal Diubah")])],-1),Ce=["onClick"],De={class:"bold"},ze={__name:"index",async setup($e){let p,x;const{$moment:w}=ee(),n={};n._TimeZoneOffset=new Date().getTimezoneOffset();const C=q("token"),{data:c}=([p,x]=O(async()=>W(async()=>{b().loading_full=!0;const{data:o,error:t,status:d}=await T("/api/institutes",{method:"get",headers:{Authorization:`Bearer ${C.value}`,Accept:"application/json"},params:n,retry:0});return b().loading_full=!1,d.value==="error"?(S().trigger(t),[]):o.value.data},"$GkweZeKCBv")),p=await p,x(),p),r=_(""),i=_({field:"",by:"desc"}),v=_(-1),a=_({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),B=()=>{n.like="",r.value!=""&&(n.like=`id:%${r.value}%,name:%${r.value}%,address:%${r.value}%,contact_number:%${r.value}%,contact_person:%${r.value}%`),n.sort="",i.value.field&&(n.sort=i.value.field+":"+i.value.by)},h=_(null),D=async()=>{b().loading_full=!0,a.value.may_get_data=!1,n.page=a.value.page,n.page==1&&(c.value=[]);const{data:o,error:t,status:d}=await T("/api/institutes",{method:"get",headers:{Authorization:`Bearer ${C.value}`,Accept:"application/json"},params:n,retry:0});if(b().loading_full=!1,a.value.may_get_data=!0,d.value==="error"){S().trigger(t);return}a.value.page==1?(c.value=o.value.data,h.value&&(h.value.scrollTop=0)):a.value.page>1&&(c.value=[...c.value,...o.value.data]),o.value.data.length==0&&(a.value.is_last_record=!0)},H=async()=>{if(!a.value.may_get_data)return;let o=h.value;if(o.scrollLeft!=a.value.scrollLeft){a.value.scrollLeft=o.scrollLeft;return}a.value.is_last_record||!(Math.round(o.scrollTop)+o.clientHeight>=o.scrollHeight-1)||(a.value.page++,await D())},L=()=>{a.value.page=1,a.value.is_last_record=!1,B(),D()},$=U(),N=()=>{$.push({name:"institute-form",query:{id:""}})},{display:z}=A();G(A());const R=()=>{v.value==-1?z({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):$.push({name:"institute-form",query:{id:c.value[v.value].id}})};return(o,t)=>{const d=E,I=F,V=K,j=P;return m(),f("div",te,[y(d,{title:"List Institute"}),e("div",se,[e("div",ae,[e("button",{type:"button",name:"button",class:"border-black border-solid border-2 p-1 m-1 text-2xl",onClick:t[0]||(t[0]=s=>N())},[y(I)]),e("button",{type:"button",name:"button",class:"border-black border-solid border-2 p-1 m-1 text-2xl",onClick:t[1]||(t[1]=s=>R())},[y(V)])]),e("div",oe,[e("div",le,[ne,k(e("input",{class:"",type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>Z(r)?r.value=s:null),name:"search",placeholder:"Keyword"},null,512),[[Y,l(r)]])]),e("div",re,[ue,k(e("select",{class:"","onUpdate:modelValue":t[3]||(t[3]=s=>l(i).field=s)},fe,512),[[M,l(i).field]])]),e("div",me,[pe,k(e("select",{class:"","onUpdate:modelValue":t[4]||(t[4]=s=>l(i).by=s)},ge,512),[[M,l(i).by]])]),e("div",ye,[e("button",{class:"",type:"button",name:"button",onClick:t[5]||(t[5]=s=>L())},[y(j,{class:"text-2xl"})])])]),e("div",be,[l(c).length==0?(m(),f("div",ke," Maaf Tidak Ada Record ")):(m(),f("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:h,onScroll:H},[e("table",xe,[we,e("tbody",null,[(m(!0),f(J,null,Q(l(c),(s,g)=>(m(),f("tr",{key:g,onClick:Ae=>v.value=g,class:X(l(v)==g?"active":"")},[e("td",null,u(g+1)+".",1),e("td",De,u(s.name),1),e("td",null,u(s.address),1),e("td",null,u(s.contact_number),1),e("td",null,u(s.contact_person),1),e("td",null,u(s.internal_marketer.email),1),e("td",null,u(l(w)(s.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,u(l(w)(s.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,Ce))),128))])])],544))])])])}}};export{ze as default};
