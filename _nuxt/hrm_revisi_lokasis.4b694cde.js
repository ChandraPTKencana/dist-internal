import{_ as F}from"./HeaderPopup.vue.404bf79e.js";import V from"./Search.91522e26.js";import{g as K,r as d,f as R,k,J as U,o as v,c as m,a as e,b as M,m as j,A as z,l as n,v as T,C as O,F as E,D as J,E as Y,t as h,G,p as P,e as W,x as $,y as Z}from"./entry.a19beef1.js";import{u as Q}from"./useUtils.2ea1120c.js";import{u as X}from"./useMyFetch.03b76c40.js";import{_ as ee}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.0158b2c2.js";const r=c=>(P("data-v-6030903a"),c=c(),W(),c),te={class:"box-fixed"},se={action:"#",class:"w-full flex p-1"},le={class:"grow"},oe=r(()=>e("div",{class:"font-bold"}," Keyword ",-1)),ae={class:"pl-1"},ne=r(()=>e("div",{class:"font-bold"}," Sort By ",-1)),re=r(()=>e("option",{value:"created_at"},"Created At",-1)),ie=r(()=>e("option",{value:"id"},"ID",-1)),ce=r(()=>e("option",{value:"name"},"Nama",-1)),ue=[re,ie,ce],de={class:"pl-1"},_e=r(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),fe=r(()=>e("option",{value:"asc"},"Asc",-1)),pe=r(()=>e("option",{value:"desc"},"Desc",-1)),ve=[fe,pe],me={class:"flex items-end pl-1"},he={class:"w-full flex justify-center items-center grow h-0 p-1"},ye={key:0,class:""},ge={class:"tacky"},ke=r(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"ID"),e("th",null,"Name"),e("th",null,"Created At"),e("th",null,"Updated At")])],-1)),we=["onClick"],Se={class:"bold"},xe={class:"flex",style:{"justify-content":"end",padding:"5px"}},be={__name:"hrm_revisi_lokasis",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},opt:{type:String,required:!1},exclude:{type:Number,required:!1},exclude_lists:{type:Array,required:!1}},setup(c){const f=c,{$moment:b}=G(),{countClickListFn:N}=Q(),H=K("token"),i=d([]),_=d(""),u=d({field:"created_at",by:"desc"}),y=d(-1),l=d({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),s={};s._TimeZoneOffset=new Date().getTimezoneOffset();const I=()=>{s.like="",_.value!=""&&(s.like=`id:%${_.value}%,name:%${_.value}%`),s.sort="",u.value.field&&(s.sort=u.value.field+":"+u.value.by)},g=d(null),C=async()=>{$().loading_full=!0,l.value.may_get_data=!1,s.opt=f.opt,s.exclude=f.exclude,s.page=l.value.page,s.page==1&&(i.value=[]),s.first_row&&delete s.first_row,s.page>1&&(s.first_row=JSON.stringify(i.value[0]));const{data:o,error:t,status:x}=await X("/api/hrm_revisi_lokasis",{method:"get",headers:{Authorization:`Bearer ${H.value}`,Accept:"application/json"},params:s,retry:0});if($().loading_full=!1,l.value.may_get_data=!0,x.value==="error"){Z().trigger(t);return}l.value.page==1?(i.value=o.value.data,g.value&&(g.value.scrollTop=0)):l.value.page>1&&(i.value=[...i.value,...o.value.data]),o.value.data.length==0&&(l.value.is_last_record=!0)},L=async()=>{if(!l.value.may_get_data)return;let o=g.value;if(o.scrollLeft!=l.value.scrollLeft){l.value.scrollLeft=o.scrollLeft;return}l.value.is_last_record||!(Math.round(o.scrollTop)+o.clientHeight>=o.scrollHeight-1)||(l.value.page++,await C())},w=()=>{l.value.page=1,l.value.is_last_record=!1,I(),C()},D=()=>{y.value>-1?f.fnSelect(i.value[y.value]):f.fnSelect({id:"",name:""})},A=d(null);let S=null;const q=o=>{S&&clearTimeout(S),S=setTimeout(()=>{w()},500)};return R(()=>f.show,(o,t)=>{o==!0&&w(),setTimeout(()=>{A.value.focus()},100)},{immediate:!0}),(o,t)=>{const x=F,B=V;return k((v(),m("section",te,[e("div",null,[M(x,{title:"Search And Select Warehouse",fn:c.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",se,[e("div",le,[oe,k(e("input",{ref_key:"ref_keyword",ref:A,class:"",type:"text","onUpdate:modelValue":t[0]||(t[0]=a=>j(_)?_.value=a:null),name:"search",placeholder:"Keyword",onKeyup:t[1]||(t[1]=a=>q())},null,544),[[z,n(_)]])]),e("div",ae,[ne,k(e("select",{class:"","onUpdate:modelValue":t[2]||(t[2]=a=>n(u).field=a)},ue,512),[[T,n(u).field]])]),e("div",de,[_e,k(e("select",{class:"","onUpdate:modelValue":t[3]||(t[3]=a=>n(u).by=a)},ve,512),[[T,n(u).by]])]),e("div",me,[e("button",{class:"",type:"submit",name:"button",onClick:t[4]||(t[4]=O(a=>w(),["prevent"]))},[M(B,{class:"text-2xl"})])])]),e("div",he,[n(i).length==0?(v(),m("div",ye," Maaf Tidak Ada Record ")):(v(),m("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:g,onScroll:L},[e("table",ge,[ke,e("tbody",null,[(v(!0),m(E,null,J(n(i),(a,p)=>(v(),m("tr",{key:p,onClick:Ce=>n(N)(p,()=>{y.value=p},D),class:Y(n(y)==p?"active":"")},[e("td",null,h(p+1)+".",1),e("td",Se,h(a.id),1),e("td",null,h(a.name),1),e("td",null,h(n(b)(a.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,h(n(b)(a.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,we))),128))])])],544))]),e("div",xe,[e("button",{onClick:t[5]||(t[5]=a=>D()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[U,c.show]])}}},Ie=ee(be,[["__scopeId","data-v-6030903a"]]);export{Ie as default};
