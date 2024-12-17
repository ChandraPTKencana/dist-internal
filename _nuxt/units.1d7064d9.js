import{_ as K}from"./HeaderPopup.vue.f18aaec2.js";import{_ as U}from"./Search.b0b724eb.js";import{q as V,r as d,h as z,z as g,M as F,o as p,c as v,a as e,b as A,G as R,A as j,B as n,H as T,N as O,I as E,J,K as Y,t as m,L as G,p as P,e as Z,C as $,D as Q}from"./entry.0b1d38b1.js";import{u as W}from"./useUtils.100f5b4a.js";import{u as X}from"./useMyFetch.6a55485b.js";import{_ as ee}from"./_plugin-vue_export-helper.c27b6911.js";const r=c=>(P("data-v-fd3416af"),c=c(),Z(),c),te={class:"box-fixed"},se={action:"#",class:"w-full flex p-1"},oe={class:"grow"},le=r(()=>e("div",{class:"font-bold"}," Keyword ",-1)),ae={class:"pl-1"},ne=r(()=>e("div",{class:"font-bold"}," Sort By ",-1)),re=r(()=>e("option",{value:"created_at"},"Created At",-1)),ie=r(()=>e("option",{value:"id"},"ID",-1)),ce=r(()=>e("option",{value:"name"},"Nama",-1)),ue=[re,ie,ce],de={class:"pl-1"},fe=r(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),_e=r(()=>e("option",{value:"asc"},"Asc",-1)),pe=r(()=>e("option",{value:"desc"},"Desc",-1)),ve=[_e,pe],me={class:"flex items-end pl-1"},he={class:"w-full flex justify-center items-center grow h-0 p-1"},ye={key:0,class:""},ge={class:"tacky"},we=r(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"ID"),e("th",null,"Name"),e("th",null,"Created At"),e("th",null,"Updated At")])],-1)),ke=["onClick"],Se={class:"bold"},be={class:"flex",style:{"justify-content":"end",padding:"5px"}},xe={__name:"units",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},setup(c){const w=c,{$moment:x}=G(),{countClickListFn:H}=W(),I=V("token"),i=d([]),f=d(""),u=d({field:"created_at",by:"desc"}),h=d(-1),s=d({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),a={};a._TimeZoneOffset=new Date().getTimezoneOffset();const L=()=>{a.like="",f.value!=""&&(a.like=`id:%${f.value}%,name:%${f.value}%`),a.sort="",u.value.field&&(a.sort=u.value.field+":"+u.value.by)},y=d(null),C=async()=>{$().loading_full=!0,s.value.may_get_data=!1,a.page=s.value.page,a.page==1&&(i.value=[]),a.first_row&&delete a.first_row,a.page>1&&(a.first_row=JSON.stringify(i.value[0]));const{data:o,error:t,status:b}=await X("/api/units",{method:"get",headers:{Authorization:`Bearer ${I.value}`,Accept:"application/json"},params:a,retry:0});if($().loading_full=!1,s.value.may_get_data=!0,b.value==="error"){Q().trigger(t);return}s.value.page==1?(i.value=o.value.data,y.value&&(y.value.scrollTop=0)):s.value.page>1&&(i.value=[...i.value,...o.value.data]),o.value.data.length==0&&(s.value.is_last_record=!0)},N=async()=>{if(!s.value.may_get_data)return;let o=y.value;if(o.scrollLeft!=s.value.scrollLeft){s.value.scrollLeft=o.scrollLeft;return}s.value.is_last_record||!(Math.round(o.scrollTop)+o.clientHeight>=o.scrollHeight-1)||(s.value.page++,await C())},k=()=>{s.value.page=1,s.value.is_last_record=!1,L(),C()},D=()=>{h.value>-1?w.fnSelect(i.value[h.value]):w.fnSelect({id:"",name:""})},M=d(null);let S=null;const B=o=>{S&&clearTimeout(S),S=setTimeout(()=>{k()},500)};return z(()=>w.show,(o,t)=>{o==!0&&k(),setTimeout(()=>{M.value.focus()},100)},{immediate:!0}),(o,t)=>{const b=K,q=U;return g((p(),v("section",te,[e("div",null,[A(b,{title:"Search And Select Unit",fn:c.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",se,[e("div",oe,[le,g(e("input",{ref_key:"ref_keyword",ref:M,class:"",type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>R(f)?f.value=l:null),name:"search",placeholder:"Keyword",onKeyup:t[1]||(t[1]=l=>B())},null,544),[[j,n(f)]])]),e("div",ae,[ne,g(e("select",{class:"","onUpdate:modelValue":t[2]||(t[2]=l=>n(u).field=l)},ue,512),[[T,n(u).field]])]),e("div",de,[fe,g(e("select",{class:"","onUpdate:modelValue":t[3]||(t[3]=l=>n(u).by=l)},ve,512),[[T,n(u).by]])]),e("div",me,[e("button",{class:"",type:"submit",name:"button",onClick:t[4]||(t[4]=O(l=>k(),["prevent"]))},[A(q,{class:"text-2xl"})])])]),e("div",he,[n(i).length==0?(p(),v("div",ye," Maaf Tidak Ada Record ")):(p(),v("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:y,onScroll:N},[e("table",ge,[we,e("tbody",null,[(p(!0),v(E,null,J(n(i),(l,_)=>(p(),v("tr",{key:_,onClick:Ce=>n(H)(_,()=>{h.value=_},D),class:Y(n(h)==_?"active":"")},[e("td",null,m(_+1)+".",1),e("td",Se,m(l.id),1),e("td",null,m(l.name),1),e("td",null,m(n(x)(l.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,m(n(x)(l.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,ke))),128))])])],544))]),e("div",be,[e("button",{onClick:t[5]||(t[5]=l=>D()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[F,c.show]])}}},Ie=ee(xe,[["__scopeId","data-v-fd3416af"]]);export{Ie as _};
