import{_ as Y}from"./Header.691dc090.js";import{_ as J}from"./Plus.ec2f1248.js";import{_ as W}from"./Edit.ee96d584.js";import{_ as Z}from"./Delete.998eb1c0.js";import{_ as G}from"./Search.3a744c6c.js";import{_ as Q}from"./PopupMini.vue.842e6b12.js";import{h as X,k as ee,r as d,i as te,x as L,y as ae,c as h,b as p,a as e,m as D,v as se,n,z as oe,A as E,F as le,B as ne,l as re,q as m,s as A,o as y,C as ie,t as _,D as ue}from"./entry.f4a32d18.js";import{u as C}from"./useMyFetch.ba06e537.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.da067a70.js";const ce={class:"w-full h-full flex flex-col"},de={class:"w-full flex grow flex-col overflow-auto h-0"},_e={class:"w-full flex"},fe={class:"w-full flex p-1"},pe={class:"grow"},me=e("div",{class:"font-bold"}," Keyword ",-1),ve={class:"pl-1"},he=e("div",{class:"font-bold"}," Sort By ",-1),ye=e("option",{value:"created_at"},"Created At",-1),ge=e("option",{value:"id"},"ID",-1),we=e("option",{value:"name"},"Name",-1),ke=[ye,ge,we],xe={class:"pl-1"},be=e("div",{class:"font-bold"}," Sort Order ",-1),De=e("option",{value:"asc"},"Asc",-1),Ae=e("option",{value:"desc"},"Desc",-1),Ce=[De,Ae],$e={class:"flex items-end pl-1"},Be={class:"w-full flex justify-center items-center grow h-0 p-1"},Se={key:0,class:""},Me={class:"tacky"},Te=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",{class:"sticky left-0 !z-[2]"},"ID"),e("th",null,"Name"),e("th",null,"Created At"),e("th",null,"Created By"),e("th",null,"Updated At"),e("th",null,"Updated By")])],-1),ze=["onClick"],Le={class:"sticky left-0 !z-[1] bold"},Ke={__name:"index",async setup(Ee){let g,$;const{$moment:B}=ue(),o={};o._TimeZoneOffset=new Date().getTimezoneOffset(),o.sort="created_at:desc";const x=X("token"),{data:r}=([g,$]=ee(async()=>re(async()=>{m().loading_full=!0;const{data:a,error:t,status:c}=await C("/api/warehouses",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:o,retry:0});return m().loading_full=!1,c.value==="error"?(A().trigger(t),[]):a.value.data},"$WmBtA90E64")),g=await g,$(),g),f=d(""),u=d({field:"created_at",by:"desc"}),i=d(-1),l=d({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),H=()=>{o.like="",f.value!=""&&(o.like=`id:%${f.value}%,name:%${f.value}%`),o.sort="",u.field&&(o.sort=u.value.field+":"+u.value.by)},w=d(null),S=async()=>{m().loading_full=!0,l.value.may_get_data=!1,o.page=l.value.page,o.page==1&&(r.value=[]),o.first_row&&delete o.first_row,o.page>1&&(o.first_row=JSON.stringify(r.value[0]));const{data:a,error:t,status:c}=await C("/api/warehouses",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:o,retry:0});if(m().loading_full=!1,l.value.may_get_data=!0,c.value==="error"){A().trigger(t);return}l.value.page==1?(r.value=a.value.data,w.value&&(w.value.scrollTop=0)):l.value.page>1&&(r.value=[...r.value,...a.value.data]),a.value.data.length==0&&(l.value.is_last_record=!0)},N=async()=>{if(!l.value.may_get_data)return;let a=w.value;if(a.scrollLeft!=l.value.scrollLeft){l.value.scrollLeft=a.scrollLeft;return}l.value.is_last_record||!(Math.round(a.scrollTop)+a.clientHeight>=a.scrollHeight-1)||(l.value.page++,await S())},F=()=>{l.value.page=1,l.value.is_last_record=!1,H(),S()},M=te(),I=()=>{M.push({name:"data_gudang-form",query:{id:""}})},{display:T}=L();ae(L());const R=()=>{i.value==-1?T({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):M.push({name:"data_gudang-form",query:{id:r.value[i.value].id}})},z=d({}),v=d(!1),j=async()=>{v.value&&(v.value=!1)},U=()=>{i.value==-1?T({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(z.value={id:r.value[i.value].id},v.value=!0)},V=async()=>{m().loading_full=!0;const a=new FormData;a.append("id",r.value[i.value].id),a.append("_method","DELETE");const{data:t,error:c,status:b}=await C("/api/warehouse",{method:"post",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:a,retry:0});if(m().loading_full=!1,b.value==="error"){A().trigger(c);return}r.value.splice(i.value,1),v.value=!1};return(a,t)=>{const c=Y,b=J,O=W,P=Z,q=G,K=Q;return y(),h("div",ce,[p(c,{title:"List warehouse"}),e("div",de,[e("div",_e,[e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[0]||(t[0]=s=>I())},[p(b)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[1]||(t[1]=s=>R())},[p(O)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[2]||(t[2]=s=>U())},[p(P)])]),e("div",fe,[e("div",pe,[me,D(e("input",{class:"",type:"text","onUpdate:modelValue":t[3]||(t[3]=s=>oe(f)?f.value=s:null),name:"search",placeholder:"Keyword"},null,512),[[se,n(f)]])]),e("div",ve,[he,D(e("select",{class:"","onUpdate:modelValue":t[4]||(t[4]=s=>n(u).field=s)},ke,512),[[E,n(u).field]])]),e("div",xe,[be,D(e("select",{class:"","onUpdate:modelValue":t[5]||(t[5]=s=>n(u).by=s)},Ce,512),[[E,n(u).by]])]),e("div",$e,[e("button",{class:"",type:"button",name:"button",onClick:t[6]||(t[6]=s=>F())},[p(q,{class:"text-2xl"})])])]),e("div",Be,[n(r).length==0?(y(),h("div",Se," Maaf Tidak Ada Record ")):(y(),h("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:w,onScroll:N},[e("table",Me,[Te,e("tbody",null,[(y(!0),h(le,null,ne(n(r),(s,k)=>(y(),h("tr",{key:k,onClick:He=>i.value=k,class:ie(n(i)==k?"active":"")},[e("td",null,_(k+1)+".",1),e("td",Le,_(s.id),1),e("td",null,_(s.name),1),e("td",null,_(n(B)(s.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,_(s.creator.username),1),e("td",null,_(n(B)(s.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,_(s.updator.username),1)],10,ze))),128))])])],544))])]),p(K,{type:"delete",show:n(v),data:n(z),fnClose:j,fnConfirm:V},null,8,["show","data"])])}}};export{Ke as default};
