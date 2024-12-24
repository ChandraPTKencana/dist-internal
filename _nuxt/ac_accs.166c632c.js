import{_ as K}from"./HeaderPopup.vue.fe14bc58.js";import R from"./Search.9b037104.js";import{g as j,r as _,f as z,k as y,J as O,o as f,c as p,a as e,b as D,m as U,A as q,l as r,v as I,C as E,F as H,D as J,E as P,t as w,p as Z,e as G,x as T,y as Q}from"./entry.468c1924.js";import{u as W}from"./useUtils.f67a7b52.js";import{u as X}from"./useMyFetch.5d39e20e.js";import{_ as Y}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.725e6b46.js";const c=i=>(Z("data-v-6c303ced"),i=i(),G(),i),ee={class:"box-fixed"},te={action:"#",class:"w-full flex p-1"},oe={class:"grow"},se=c(()=>e("div",{class:"font-bold"}," Keyword ",-1)),ae={class:"pl-1"},le=c(()=>e("div",{class:"font-bold"}," Sort By ",-1)),ce=c(()=>e("option",{value:"AccountID"},"ID",-1)),ne=c(()=>e("option",{value:"AccountCode"},"Code",-1)),re=c(()=>e("option",{value:"AccountName"},"Nama",-1)),ie=[ce,ne,re],ue={class:"pl-1"},de=c(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),_e=c(()=>e("option",{value:"asc"},"Asc",-1)),fe=c(()=>e("option",{value:"desc"},"Desc",-1)),pe=[_e,fe],ve={class:"flex items-end pl-1"},me={class:"w-full flex justify-center items-center grow h-0 p-1"},he={key:0,class:""},ye={class:"tacky w-full"},we=c(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No."),e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"ID"),e("th",null,"Code"),e("th",null,"Name")])],-1)),ge=["onClick"],ke={class:"bold"},xe={class:"whitespace-normal break-words"},Se={class:"flex",style:{"justify-content":"end",padding:"5px"}},be={__name:"ac_accs",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1}},setup(i){const g=i,{countClickListFn:$}=W(),L=j("token"),n=_([]),u=_(""),d=_({field:"AccountID",by:"desc"}),v=_(-1),s=_({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),a={};a._TimeZoneOffset=new Date().getTimezoneOffset();const N=()=>{a.like="",u.value!=""&&(a.like=`AccountID:%${u.value}%,AccountCode:%${u.value}%,AccountName:%${u.value}%`),a.sort="",d.value.field&&(a.sort=d.value.field+":"+d.value.by)},m=_(null),b=async()=>{T().loading_full=!0,s.value.may_get_data=!1,a.page=s.value.page,a.page==1&&(n.value=[]),a.first_row&&delete a.first_row,a.page>1&&(a.first_row=JSON.stringify(n.value[0]));const{data:t,error:o,status:S}=await X("/ac_accounts",{method:"get",headers:{Authorization:`Bearer ${L.value}`,Accept:"application/json"},params:a,retry:0});if(T().loading_full=!1,s.value.may_get_data=!0,S.value==="error"){Q().trigger(o);return}s.value.page==1?(n.value=t.value.data,m.value&&(m.value.scrollTop=0)):s.value.page>1&&(n.value=[...n.value,...t.value.data]),t.value.data.length==0&&(s.value.is_last_record=!0)},M=async()=>{if(!s.value.may_get_data)return;let t=m.value;if(t.scrollLeft!=s.value.scrollLeft){s.value.scrollLeft=t.scrollLeft;return}s.value.is_last_record||!(Math.round(t.scrollTop)+t.clientHeight>=t.scrollHeight-1)||(s.value.page++,await b())},k=()=>{s.value.page=1,s.value.is_last_record=!1,N(),b()},A=()=>{v.value>-1?g.fnSelect(n.value[v.value]):g.fnSelect({ac_account_id:"",ac_account_code:"",ac_account_name:""})},B=t=>{$(t,()=>{v.value=t},A)},C=_(null);let x=null;const F=t=>{x&&clearTimeout(x),x=setTimeout(()=>{k()},500)};return z(()=>g.show,(t,o)=>{t==!0&&(k(),setTimeout(()=>{C.value.focus()},100))},{immediate:!0}),(t,o)=>{const S=K,V=R;return y((f(),p("section",ee,[e("div",null,[D(S,{title:"Search And Select Ac Account",fn:i.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",te,[e("div",oe,[se,y(e("input",{ref_key:"ref_keyword",ref:C,class:"",type:"text","onUpdate:modelValue":o[0]||(o[0]=l=>U(u)?u.value=l:null),name:"search",placeholder:"Keyword",onKeyup:o[1]||(o[1]=l=>F())},null,544),[[q,r(u)]])]),e("div",ae,[le,y(e("select",{class:"","onUpdate:modelValue":o[2]||(o[2]=l=>r(d).field=l)},ie,512),[[I,r(d).field]])]),e("div",ue,[de,y(e("select",{class:"","onUpdate:modelValue":o[3]||(o[3]=l=>r(d).by=l)},pe,512),[[I,r(d).by]])]),e("div",ve,[e("button",{class:"",type:"submit",name:"button",onClick:o[4]||(o[4]=E(l=>k(),["prevent"]))},[D(V,{class:"text-2xl"})])])]),e("div",me,[r(n).length==0?(f(),p("div",he," Maaf Tidak Ada Record ")):(f(),p("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:m,onScroll:M},[e("table",ye,[we,e("tbody",null,[(f(!0),p(H,null,J(r(n),(l,h)=>(f(),p("tr",{key:h,onClick:Ae=>B(h),class:P(r(v)==h?"active":"")},[e("td",null,w(h+1)+".",1),e("td",ke,w(l.ac_account_id),1),e("td",null,w(l.ac_account_code),1),e("td",xe,w(l.ac_account_name),1)],10,ge))),128))])])],544))]),e("div",Se,[e("button",{onClick:o[5]||(o[5]=l=>A()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[O,i.show]])}}},Me=Y(be,[["__scopeId","data-v-6c303ced"]]);export{Me as default};
