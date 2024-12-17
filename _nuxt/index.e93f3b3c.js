import{_ as W}from"./Header.cca1e452.js";import{_ as Y}from"./Plus.0d48322c.js";import{_ as J}from"./Edit.e31c6ac9.js";import{_ as Z}from"./Delete.cb6947d2.js";import{_ as G}from"./Search.0b0b0847.js";import{_ as Q}from"./PopupMini.vue.5e65727f.js";import{h as X,k as ee,r as c,i as te,y as T,z as ae,c as h,b as p,a as e,m as D,v as oe,n as r,A as le,B as L,F as se,C as re,l as ne,q as m,s as A,x as C,o as b,D as de,t as _,E as ie}from"./entry.bd9ce3f6.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.8161b2e5.js";const ue={class:"w-full h-full flex flex-col"},ce={class:"w-full flex grow flex-col overflow-auto h-0"},_e={class:"w-full flex"},fe={class:"w-full flex p-1"},pe={class:"grow"},me=e("div",{class:"font-bold"}," Keyword ",-1),ve={class:"pl-1"},he=e("div",{class:"font-bold"}," Sort By ",-1),be=e("option",{value:"created_at"},"Created At",-1),ye=e("option",{value:"id"},"ID",-1),ge=e("option",{value:"name"},"Name",-1),ke=[be,ye,ge],we={class:"pl-1"},xe=e("div",{class:"font-bold"}," Sort Order ",-1),De=e("option",{value:"asc"},"Asc",-1),Ae=e("option",{value:"desc"},"Desc",-1),Ce=[De,Ae],$e={class:"flex items-end pl-1"},Be={class:"w-full flex justify-center items-center grow h-0 p-1"},Se={key:0,class:""},ze={class:"tacky"},Ee=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",{class:"sticky left-0 !z-[2]"},"ID"),e("th",null,"Name"),e("th",null,"Created At"),e("th",null,"Created By"),e("th",null,"Updated At"),e("th",null,"Updated By")])],-1),Me=["onClick"],Te={class:"sticky left-0 !z-[1] bold"},qe={__name:"index",async setup(Le){let y,$;const{$moment:B}=ie(),s={};s._TimeZoneOffset=new Date().getTimezoneOffset(),s.sort="created_at:desc";const w=X("token"),{data:n}=([y,$]=ee(async()=>ne(async()=>{m().loading_full=!0;const{data:a,error:t,status:u}=await A("/api/warehouses",{method:"get",headers:{Authorization:`Bearer ${w.value}`,Accept:"application/json"},params:s,retry:0},"$CeoFnDAI7E");return m().loading_full=!1,u.value==="error"?(C().trigger(t),[]):a.value.data},"$WmBtA90E64")),y=await y,$(),y),f=c(""),i=c({field:"created_at",by:"desc"}),d=c(-1),l=c({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),F=()=>{s.like="",f.value!=""&&(s.like=`id:%${f.value}%,name:%${f.value}%`),s.sort="",i.field&&(s.sort=i.value.field+":"+i.value.by)},g=c(null),S=async()=>{m().loading_full=!0,l.value.may_get_data=!1,s.page=l.value.page,s.page==1&&(n.value=[]),s.page>1&&(s.first_row=JSON.stringify(n.value[0]));const{data:a,error:t,status:u}=await A("/api/warehouses",{method:"get",headers:{Authorization:`Bearer ${w.value}`,Accept:"application/json"},params:s,retry:0},"$9r6bBC5nPE");if(m().loading_full=!1,l.value.may_get_data=!0,u.value==="error"){C().trigger(t);return}l.value.page==1?(n.value=a.value.data,g.value&&(g.value.scrollTop=0)):l.value.page>1&&(n.value=[...n.value,...a.value.data]),a.value.data.length==0&&(l.value.is_last_record=!0)},H=async()=>{if(!l.value.may_get_data)return;let a=g.value;if(a.scrollLeft!=l.value.scrollLeft){l.value.scrollLeft=a.scrollLeft;return}l.value.is_last_record||!(Math.round(a.scrollTop)+a.clientHeight>=a.scrollHeight-1)||(l.value.page++,await S())},I=()=>{l.value.page=1,l.value.is_last_record=!1,F(),S()},z=te(),N=()=>{z.push({name:"data_gudang-form",query:{id:""}})},{display:E}=T();ae(T());const R=()=>{d.value==-1?E({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):z.push({name:"data_gudang-form",query:{id:n.value[d.value].id}})},M=c({}),v=c(!1),j=async()=>{v.value&&(v.value=!1)},P=()=>{d.value==-1?E({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(M.value={id:n.value[d.value].id},v.value=!0)},U=async()=>{m().loading_full=!0;const a=new FormData;a.append("id",n.value[d.value].id),a.append("_method","DELETE");const{data:t,error:u,status:x}=await A("/api/warehouse",{method:"post",headers:{Authorization:`Bearer ${w.value}`,Accept:"application/json"},body:a,retry:0},"$Luzb7312WS");if(m().loading_full=!1,x.value==="error"){C().trigger(u);return}n.value.splice(d.value,1),v.value=!1};return(a,t)=>{const u=W,x=Y,V=J,O=Z,q=G,K=Q;return b(),h("div",ue,[p(u,{title:"List warehouse"}),e("div",ce,[e("div",_e,[e("button",{type:"button",name:"button",class:"border-black border-solid border-2 p-1 m-1 text-2xl",onClick:t[0]||(t[0]=o=>N())},[p(x)]),e("button",{type:"button",name:"button",class:"border-black border-solid border-2 p-1 m-1 text-2xl",onClick:t[1]||(t[1]=o=>R())},[p(V)]),e("button",{type:"button",name:"button",class:"border-black border-solid border-2 p-1 m-1 text-2xl",onClick:t[2]||(t[2]=o=>P())},[p(O)])]),e("div",fe,[e("div",pe,[me,D(e("input",{class:"w-full border-black border-solid border-2 p-1",type:"text","onUpdate:modelValue":t[3]||(t[3]=o=>le(f)?f.value=o:null),name:"search",placeholder:"Keyword"},null,512),[[oe,r(f)]])]),e("div",ve,[he,D(e("select",{class:"w-full border-black border-solid border-2 p-1","onUpdate:modelValue":t[4]||(t[4]=o=>r(i).field=o)},ke,512),[[L,r(i).field]])]),e("div",we,[xe,D(e("select",{class:"w-full border-black border-solid border-2 p-1","onUpdate:modelValue":t[5]||(t[5]=o=>r(i).by=o)},Ce,512),[[L,r(i).by]])]),e("div",$e,[e("button",{class:"w-full border-black border-solid border-2 p-1",type:"button",name:"button",onClick:t[6]||(t[6]=o=>I())},[p(q,{class:"text-2xl"})])])]),e("div",Be,[r(n).length==0?(b(),h("div",Se," Maaf Tidak Ada Record ")):(b(),h("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:g,onScroll:H},[e("table",ze,[Ee,e("tbody",null,[(b(!0),h(se,null,re(r(n),(o,k)=>(b(),h("tr",{key:k,onClick:Fe=>d.value=k,class:de(r(d)==k?"active":"")},[e("td",null,_(k+1)+".",1),e("td",Te,_(o.id),1),e("td",null,_(o.name),1),e("td",null,_(r(B)(o.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,_(o.creator.username),1),e("td",null,_(r(B)(o.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,_(o.updator.username),1)],10,Me))),128))])])],544))])]),p(K,{type:"delete",show:r(v),data:r(M),fnClose:j,fnConfirm:U},null,8,["show","data"])])}}};export{qe as default};
