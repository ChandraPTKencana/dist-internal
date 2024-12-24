import{_ as U}from"./HeaderPopup.vue.fe14bc58.js";import V from"./Search.9b037104.js";import{g as q,r as d,f as K,k as g,J as R,o as p,c as v,a as e,b as M,m as j,A as z,l as n,v as T,C as O,F as E,D as J,E as Y,t as m,G,p as P,e as Z,x as $,y as Q}from"./entry.468c1924.js";import{u as W}from"./useUtils.f67a7b52.js";import{u as X}from"./useMyFetch.5d39e20e.js";import{_ as ee}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.725e6b46.js";const r=c=>(P("data-v-4a351037"),c=c(),Z(),c),te={class:"box-fixed"},se={action:"#",class:"w-full flex p-1"},le={class:"grow"},oe=r(()=>e("div",{class:"font-bold"}," Keyword ",-1)),ae={class:"pl-1"},ne=r(()=>e("div",{class:"font-bold"}," Sort By ",-1)),re=r(()=>e("option",{value:"created_at"},"Created At",-1)),ie=r(()=>e("option",{value:"id"},"ID",-1)),ce=r(()=>e("option",{value:"name"},"Nama",-1)),ue=[re,ie,ce],de={class:"pl-1"},_e=r(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),fe=r(()=>e("option",{value:"asc"},"Asc",-1)),pe=r(()=>e("option",{value:"desc"},"Desc",-1)),ve=[fe,pe],me={class:"flex items-end pl-1"},he={class:"w-full flex justify-center items-center grow h-0 p-1"},ye={key:0,class:""},ge={class:"tacky"},we=r(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"ID"),e("th",null,"Name"),e("th",null,"Created At"),e("th",null,"Updated At")])],-1)),ke=["onClick"],Se={class:"bold"},xe={class:"flex",style:{"justify-content":"end",padding:"5px"}},be={__name:"units",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},setup(c){const w=c,{$moment:b}=G(),{countClickListFn:H}=W(),I=q("token"),i=d([]),_=d(""),u=d({field:"created_at",by:"desc"}),h=d(-1),s=d({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),a={};a._TimeZoneOffset=new Date().getTimezoneOffset();const L=()=>{a.like="",_.value!=""&&(a.like=`id:%${_.value}%,name:%${_.value}%`),a.sort="",u.value.field&&(a.sort=u.value.field+":"+u.value.by)},y=d(null),C=async()=>{$().loading_full=!0,s.value.may_get_data=!1,a.page=s.value.page,a.page==1&&(i.value=[]),a.first_row&&delete a.first_row,a.page>1&&(a.first_row=JSON.stringify(i.value[0]));const{data:l,error:t,status:x}=await X("/api/units",{method:"get",headers:{Authorization:`Bearer ${I.value}`,Accept:"application/json"},params:a,retry:0});if($().loading_full=!1,s.value.may_get_data=!0,x.value==="error"){Q().trigger(t);return}s.value.page==1?(i.value=l.value.data,y.value&&(y.value.scrollTop=0)):s.value.page>1&&(i.value=[...i.value,...l.value.data]),l.value.data.length==0&&(s.value.is_last_record=!0)},N=async()=>{if(!s.value.may_get_data)return;let l=y.value;if(l.scrollLeft!=s.value.scrollLeft){s.value.scrollLeft=l.scrollLeft;return}s.value.is_last_record||!(Math.round(l.scrollTop)+l.clientHeight>=l.scrollHeight-1)||(s.value.page++,await C())},k=()=>{s.value.page=1,s.value.is_last_record=!1,L(),C()},D=()=>{h.value>-1?w.fnSelect(i.value[h.value]):w.fnSelect({id:"",name:""})},A=d(null);let S=null;const B=l=>{S&&clearTimeout(S),S=setTimeout(()=>{k()},500)};return K(()=>w.show,(l,t)=>{l==!0&&k(),setTimeout(()=>{A.value.focus()},100)},{immediate:!0}),(l,t)=>{const x=U,F=V;return g((p(),v("section",te,[e("div",null,[M(x,{title:"Search And Select Unit",fn:c.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",se,[e("div",le,[oe,g(e("input",{ref_key:"ref_keyword",ref:A,class:"",type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>j(_)?_.value=o:null),name:"search",placeholder:"Keyword",onKeyup:t[1]||(t[1]=o=>B())},null,544),[[z,n(_)]])]),e("div",ae,[ne,g(e("select",{class:"","onUpdate:modelValue":t[2]||(t[2]=o=>n(u).field=o)},ue,512),[[T,n(u).field]])]),e("div",de,[_e,g(e("select",{class:"","onUpdate:modelValue":t[3]||(t[3]=o=>n(u).by=o)},ve,512),[[T,n(u).by]])]),e("div",me,[e("button",{class:"",type:"submit",name:"button",onClick:t[4]||(t[4]=O(o=>k(),["prevent"]))},[M(F,{class:"text-2xl"})])])]),e("div",he,[n(i).length==0?(p(),v("div",ye," Maaf Tidak Ada Record ")):(p(),v("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:y,onScroll:N},[e("table",ge,[we,e("tbody",null,[(p(!0),v(E,null,J(n(i),(o,f)=>(p(),v("tr",{key:f,onClick:Ce=>n(H)(f,()=>{h.value=f},D),class:Y(n(h)==f?"active":"")},[e("td",null,m(f+1)+".",1),e("td",Se,m(o.id),1),e("td",null,m(o.name),1),e("td",null,m(n(b)(o.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,m(n(b)(o.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,ke))),128))])])],544))]),e("div",xe,[e("button",{onClick:t[5]||(t[5]=o=>D()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[R,c.show]])}}},Le=ee(be,[["__scopeId","data-v-4a351037"]]);export{Le as default};
