import{_ as Y}from"./Header.cb1bee0f.js";import{_ as J}from"./Plus.ff417996.js";import{_ as Z}from"./Edit.86f6fad7.js";import{_ as G}from"./Delete.814d5ddc.js";import{_ as Q}from"./Search.5b5f58fc.js";import{_ as W}from"./PopupMini.vue.b39766cb.js";import{h as X,k as ee,r as d,i as te,x as L,y as ae,c as h,b as m,a as e,m as D,v as se,n as r,z as oe,A as H,F as le,B as ne,l as re,q as p,s as A,o as y,C as ie,t as _,D as ue}from"./entry.50a4d276.js";import{u as C}from"./useMyFetch.a11d8274.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.eb609832.js";const ce={class:"w-full h-full flex flex-col"},de={class:"w-full flex grow flex-col overflow-auto h-0"},_e={class:"w-full flex"},fe={class:"w-full flex p-1"},me={class:"grow"},pe=e("div",{class:"font-bold"}," Keyword ",-1),ve={class:"pl-1"},he=e("div",{class:"font-bold"}," Sort By ",-1),ye=e("option",{value:"created_at"},"Created At",-1),ge=e("option",{value:"id"},"ID",-1),ke=e("option",{value:"name"},"Name",-1),we=[ye,ge,ke],xe={class:"pl-1"},be=e("div",{class:"font-bold"}," Sort Order ",-1),De=e("option",{value:"asc"},"Asc",-1),Ae=e("option",{value:"desc"},"Desc",-1),Ce=[De,Ae],$e={class:"flex items-end pl-1"},Se={class:"w-full flex justify-center items-center grow h-0 p-1"},Be={key:0,class:""},Me={class:"tacky"},Te=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",{class:"sticky left-0 !z-[2]"},"ID"),e("th",null,"Name"),e("th",null,"Created At"),e("th",null,"Created By"),e("th",null,"Updated At"),e("th",null,"Updated By")])],-1),ze=["onClick"],Le={class:"sticky left-0 !z-[1] bold"},Ke={__name:"index",async setup(He){let g,$;const{$moment:S}=ue(),o={};o._TimeZoneOffset=new Date().getTimezoneOffset(),o.sort="created_at:desc";const x=X("token"),{data:n}=([g,$]=ee(async()=>re(async()=>{p().loading_full=!0;const{data:a,error:t,status:c}=await C("/api/units",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:o,retry:0});return p().loading_full=!1,c.value==="error"?(A().trigger(t),[]):a.value.data},"$OvLIT5s7hk")),g=await g,$(),g),f=d(""),u=d({field:"created_at",by:"desc"}),i=d(-1),l=d({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),I=()=>{o.like="",f.value!=""&&(o.like=`id:%${f.value}%,name:%${f.value}%`),o.sort="",u.field&&(o.sort=u.value.field+":"+u.value.by)},k=d(null),B=async()=>{p().loading_full=!0,l.value.may_get_data=!1,o.page=l.value.page,o.page==1&&(n.value=[]),o.first_row&&delete o.first_row,o.page>1&&(o.first_row=JSON.stringify(n.value[0]));const{data:a,error:t,status:c}=await C("/api/units",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:o,retry:0});if(p().loading_full=!1,l.value.may_get_data=!0,c.value==="error"){A().trigger(t);return}l.value.page==1?(n.value=a.value.data,k.value&&(k.value.scrollTop=0)):l.value.page>1&&(n.value=[...n.value,...a.value.data]),a.value.data.length==0&&(l.value.is_last_record=!0)},N=async()=>{if(!l.value.may_get_data)return;let a=k.value;if(a.scrollLeft!=l.value.scrollLeft){l.value.scrollLeft=a.scrollLeft;return}l.value.is_last_record||!(Math.round(a.scrollTop)+a.clientHeight>=a.scrollHeight-1)||(l.value.page++,await B())},E=()=>{l.value.page=1,l.value.is_last_record=!1,I(),B()},M=te(),F=()=>{M.push({name:"data_satuan-form",query:{id:""}})},{display:T}=L();ae(L());const R=()=>{i.value==-1?T({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):M.push({name:"data_satuan-form",query:{id:n.value[i.value].id}})},z=d({}),v=d(!1),j=async()=>{v.value&&(v.value=!1)},O=()=>{i.value==-1?T({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(z.value={id:n.value[i.value].id,name:n.value[i.value].name},v.value=!0)},U=async()=>{p().loading_full=!0;const a=new FormData;a.append("id",n.value[i.value].id),a.append("_method","DELETE");const{data:t,error:c,status:b}=await C("/api/unit",{method:"post",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:a,retry:0});if(p().loading_full=!1,b.value==="error"){A().trigger(c);return}n.value.splice(i.value,1),v.value=!1};return(a,t)=>{const c=Y,b=J,V=Z,P=G,q=Q,K=W;return y(),h("div",ce,[m(c,{title:"List unit"}),e("div",de,[e("div",_e,[e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[0]||(t[0]=s=>F())},[m(b)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[1]||(t[1]=s=>R())},[m(V)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[2]||(t[2]=s=>O())},[m(P)])]),e("div",fe,[e("div",me,[pe,D(e("input",{class:"",type:"text","onUpdate:modelValue":t[3]||(t[3]=s=>oe(f)?f.value=s:null),name:"search",placeholder:"Keyword"},null,512),[[se,r(f)]])]),e("div",ve,[he,D(e("select",{class:"","onUpdate:modelValue":t[4]||(t[4]=s=>r(u).field=s)},we,512),[[H,r(u).field]])]),e("div",xe,[be,D(e("select",{class:"","onUpdate:modelValue":t[5]||(t[5]=s=>r(u).by=s)},Ce,512),[[H,r(u).by]])]),e("div",$e,[e("button",{class:"",type:"button",name:"button",onClick:t[6]||(t[6]=s=>E())},[m(q,{class:"text-2xl"})])])]),e("div",Se,[r(n).length==0?(y(),h("div",Be," Maaf Tidak Ada Record ")):(y(),h("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:k,onScroll:N},[e("table",Me,[Te,e("tbody",null,[(y(!0),h(le,null,ne(r(n),(s,w)=>(y(),h("tr",{key:w,onClick:Ie=>i.value=w,class:ie(r(i)==w?"active":"")},[e("td",null,_(w+1)+".",1),e("td",Le,_(s.id),1),e("td",null,_(s.name),1),e("td",null,_(r(S)(s.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,_(s.creator.username),1),e("td",null,_(r(S)(s.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,_(s.updator.username),1)],10,ze))),128))])])],544))])]),m(K,{type:"delete",show:r(v),data:r(z),fnClose:j,fnConfirm:U},null,8,["show","data"])])}}};export{Ke as default};
