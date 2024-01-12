import{_ as J}from"./Header.cc7d701a.js";import{_ as Z}from"./Plus.bae6feb2.js";import{_ as G}from"./Edit.2cdb4d9e.js";import{_ as Q}from"./Delete.3d092f13.js";import{_ as W}from"./Search.b1cf6f15.js";import{_ as X}from"./PopupMini.vue.6d008dfc.js";import{h as ee,k as te,r as f,i as ae,x as N,y as le,c as h,b as p,a as e,m as D,v as oe,n as s,z as se,A as z,F as re,B as ne,l as ue,q as m,s as A,o as b,C as de,t as u,D as ie}from"./entry.2fae35c4.js";import{u as ce}from"./useUtils.70251168.js";import{u as C}from"./useMyFetch.80de82e1.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.f478bf5a.js";const _e={class:"w-full h-full flex flex-col"},fe={class:"w-full flex grow flex-col overflow-auto h-0"},pe={class:"w-full flex"},me={class:"w-full flex p-1"},ve={class:"grow"},he=e("div",{class:"font-bold"}," Keyword ",-1),be={class:"pl-1"},ye=e("div",{class:"font-bold"}," Sort By ",-1),ge=e("option",{value:"created_at"},"Created At",-1),ke=e("option",{value:"name"},"Name",-1),we=e("option",{value:"value"},"Value",-1),xe=[ge,ke,we],De={class:"pl-1"},Ae=e("div",{class:"font-bold"}," Sort Order ",-1),Ce=e("option",{value:"asc"},"Asc",-1),$e=e("option",{value:"desc"},"Desc",-1),Be=[Ce,$e],Se={class:"flex items-end pl-1"},Me={class:"w-full flex justify-center items-center grow h-0 p-1"},Te={key:0,class:""},Le={class:"tacky"},Ne=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"ID"),e("th",null,"Name"),e("th",null,"Unit"),e("th",null,"Value"),e("th",null,"Note"),e("th",null,"Created At"),e("th",null,"Created By"),e("th",null,"Updated At"),e("th",null,"Updated By")])],-1),ze=["onClick"],Ee={class:"bold"},Ze={__name:"index",async setup(Fe){let y,$;const{$moment:B}=ie(),{pointFormat:E}=ce(),r={};r._TimeZoneOffset=new Date().getTimezoneOffset(),r.sort="created_at:desc";const w=ee("token"),{data:n}=([y,$]=te(async()=>ue(async()=>{m().loading_full=!0;const{data:l,error:t,status:_}=await C("/api/items",{method:"get",headers:{Authorization:`Bearer ${w.value}`,Accept:"application/json"},params:r,retry:0});return m().loading_full=!1,_.value==="error"?(A().trigger(t),[]):l.value.data},"$hEoAojBvbD")),y=await y,$(),y),i=f(""),c=f({field:"created_at",by:"desc"}),d=f(-1),o=f({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),F=()=>{r.like="",i.value!=""&&(r.like=`id:%${i.value}%,name:%${i.value}%,value:%${i.value}%`),r.sort="",c.value.field&&(r.sort=c.value.field+":"+c.value.by)},g=f(null),S=async()=>{m().loading_full=!0,o.value.may_get_data=!1,r.page=o.value.page,r.page==1&&(n.value=[]),r.page>1&&(r.first_row=JSON.stringify(n.value[0]));const{data:l,error:t,status:_}=await C("/api/items",{method:"get",headers:{Authorization:`Bearer ${w.value}`,Accept:"application/json"},params:r,retry:0});if(m().loading_full=!1,o.value.may_get_data=!0,_.value==="error"){A().trigger(t);return}o.value.page==1?(n.value=l.value.data,g.value&&(g.value.scrollTop=0)):o.value.page>1&&(n.value=[...n.value,...l.value.data]),l.value.data.length==0&&(o.value.is_last_record=!0)},H=async()=>{if(!o.value.may_get_data)return;let l=g.value;if(l.scrollLeft!=o.value.scrollLeft){o.value.scrollLeft=l.scrollLeft;return}o.value.is_last_record||!(Math.round(l.scrollTop)+l.clientHeight>=l.scrollHeight-1)||(o.value.page++,await S())},U=()=>{o.value.page=1,o.value.is_last_record=!1,F(),S()},M=ae(),V=()=>{M.push({name:"data_item-form",query:{id:""}})},{display:T}=N();le(N());const j=()=>{d.value==-1?T({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):M.push({name:"data_item-form",query:{id:n.value[d.value].id}})},L=f({}),v=f(!1),I=async()=>{v.value&&(v.value=!1)},R=()=>{d.value==-1?T({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(L.value={id:n.value[d.value].id},v.value=!0)},O=async()=>{m().loading_full=!0;const l=new FormData;l.append("id",n.value[d.value].id),l.append("_method","DELETE");const{data:t,error:_,status:x}=await C("/api/item",{method:"post",headers:{Authorization:`Bearer ${w.value}`,Accept:"application/json"},body:l,retry:0});if(m().loading_full=!1,x.value==="error"){A().trigger(_);return}n.value.splice(d.value,1),v.value=!1};return(l,t)=>{const _=J,x=Z,P=G,q=Q,K=W,Y=X;return b(),h("div",_e,[p(_,{title:"List Item"}),e("div",fe,[e("div",pe,[e("button",{type:"button",name:"button",class:"border-black border-solid border-2 p-1 m-1 text-2xl",onClick:t[0]||(t[0]=a=>V())},[p(x)]),e("button",{type:"button",name:"button",class:"border-black border-solid border-2 p-1 m-1 text-2xl",onClick:t[1]||(t[1]=a=>j())},[p(P)]),e("button",{type:"button",name:"button",class:"border-black border-solid border-2 p-1 m-1 text-2xl",onClick:t[2]||(t[2]=a=>R())},[p(q)])]),e("div",me,[e("div",ve,[he,D(e("input",{class:"w-full border-black border-solid border-2 p-1",type:"text","onUpdate:modelValue":t[3]||(t[3]=a=>se(i)?i.value=a:null),name:"search",placeholder:"Keyword"},null,512),[[oe,s(i)]])]),e("div",be,[ye,D(e("select",{class:"w-full border-black border-solid border-2 p-1","onUpdate:modelValue":t[4]||(t[4]=a=>s(c).field=a)},xe,512),[[z,s(c).field]])]),e("div",De,[Ae,D(e("select",{class:"w-full border-black border-solid border-2 p-1","onUpdate:modelValue":t[5]||(t[5]=a=>s(c).by=a)},Be,512),[[z,s(c).by]])]),e("div",Se,[e("button",{class:"w-full border-black border-solid border-2 p-1",type:"button",name:"button",onClick:t[6]||(t[6]=a=>U())},[p(K,{class:"text-2xl"})])])]),e("div",Me,[s(n).length==0?(b(),h("div",Te," Maaf Tidak Ada Record ")):(b(),h("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:g,onScroll:H},[e("table",Le,[Ne,e("tbody",null,[(b(!0),h(re,null,ne(s(n),(a,k)=>(b(),h("tr",{key:k,onClick:He=>d.value=k,class:de(s(d)==k?"active":"")},[e("td",null,u(k+1)+".",1),e("td",Ee,u(a.id),1),e("td",null,u(a.name),1),e("td",null,u(a.unit.name),1),e("td",null,u(s(E)(a.value)),1),e("td",null,u(a.note),1),e("td",null,u(s(B)(a.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,u(a.creator.username),1),e("td",null,u(s(B)(a.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,u(a.updator.username),1)],10,ze))),128))])])],544))])]),p(Y,{type:"delete",show:s(v),data:s(L),fnClose:I,fnConfirm:O},null,8,["show","data"])])}}};export{Ze as default};
