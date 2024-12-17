import{_ as be}from"./Header.a3098ccc.js";import{_ as Ce}from"./Plus.e8214825.js";import{_ as De}from"./Edit.a2d96d96.js";import{_ as P}from"./_plugin-vue_export-helper.c27b6911.js";import{o,c as r,a as e,h as J,r as c,E as ue,m as K,G as ie,b as k,t as s,n as t,F as j,B as F,C as G,d as ae,D as de,q as S,s as O,p as ce,e as _e,L as Me,w as qe,k as Se,i as Te,x as ne,y as Ae,J as re,H as He,v as Ie,z as Be,l as Ne}from"./entry.71981dcc.js";import{_ as ze}from"./Delete.a793d1e1.js";import{_ as Re}from"./Signature.89d2fa1e.js";import{_ as me}from"./Search.f41916a3.js";import{_ as je}from"./PopupMini.vue.8738618b.js";import{_ as fe}from"./HeaderPopup.vue.c61368be.js";import{_ as Le}from"./client-only.a9c8ce58.js";import{u as Ve}from"./useUtils.70251168.js";import{u as E}from"./useMyFetch.fec54390.js";import"./Times.f54f8324.js";const Fe={name:"IconParkOutlineEyes"},Oe={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 48 48"},Ee=e("g",{fill:"none",stroke:"currentColor","stroke-width":"4"},[e("path",{"stroke-linejoin":"round",d:"M24 41c9.941 0 18-8.322 18-14c0-5.678-8.059-14-18-14S6 21.328 6 27c0 5.672 8.059 14 18 14Z",clipRule:"evenodd"}),e("path",{"stroke-linejoin":"round",d:"M24 33a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"}),e("path",{"stroke-linecap":"round",d:"m13.264 11.266l2.594 3.62m19.767-3.176l-2.595 3.62M24.009 7v6"})],-1),Pe=[Ee];function Ye(f,_,D,g,m,v){return o(),r("svg",Oe,Pe)}const Ze=P(Fe,[["render",Ye]]),Ue={name:"MaterialSymbolsChecklist"},Qe={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},We=e("path",{fill:"currentColor",d:"M5.55 19L2 15.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425zm0-8L2 7.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425zM13 17v-2h9v2zm0-8V7h9v2z"},null,-1),Je=[We];function Ke(f,_,D,g,m,v){return o(),r("svg",Qe,Je)}const Ge=P(Ue,[["render",Ke]]),Xe={name:"IconoirTable2Columns"},et={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},tt=e("path",{fill:"none",stroke:"currentColor","stroke-width":"1.5",d:"M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Zm0-3.9h18M3 12h18m0-4.5H3M12 21V3"},null,-1),st=[tt];function lt(f,_,D,g,m,v){return o(),r("svg",et,st)}const ot=P(Xe,[["render",lt]]);const Y=f=>(ce("data-v-28caab73"),f=f(),_e(),f),at={class:"box-fixed"},nt={class:"w-full flex p-1 flex-wrap flex-row"},rt={class:"w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-1"},ut=Y(()=>e("div",{class:"font-bold"}," Warehouse Name ",-1)),it={class:"w-full p-1"},dt={class:"w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-1"},ct=Y(()=>e("div",{class:"font-bold"}," Item Name ",-1)),_t={class:"w-full p-1"},mt={class:"w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-1"},ft=Y(()=>e("div",{class:"font-bold"}," Last Stock ",-1)),pt={class:"w-full p-1"},ht={class:"w-full flex justify-center items-center grow h-0 p-1"},vt={key:0,class:""},yt={class:"tacky"},wt=Y(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Created At"),e("th",null,"Updated At"),e("th",null,"ID"),e("th",null,"Type"),e("th",null,"Qty In"),e("th",null,"Qty Out"),e("th",null,"Qty Reminder"),e("th",null,"Note"),e("th",null,"Requested At")])],-1)),$t=["onClick"],gt={class:"bold"},kt=Y(()=>e("br",null,null,-1)),xt={__name:"summary_detail",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},warehouse_id:{type:Number,required:!1},item_id:{type:Number,required:!1},data:{type:Object,required:!0}},setup(f){const _=f,{$moment:D}=de(),{pointFormat:g}=Ve(),m=J("token");c({from:"",to:""});const v=c([]),T=c(-1),a={};a._TimeZoneOffset=new Date().getTimezoneOffset();const z=async()=>{S().loading_full=!0,a.page=1,a.item_id=_.data.item.id,a.warehouse_id=_.data.rest.id,v.value=[];const{data:u,error:b,status:i}=await E("/api/summary_detail_transactions",{method:"get",headers:{Authorization:`Bearer ${m.value}`,Accept:"application/json"},params:a,retry:0});if(S().loading_full=!1,i.value==="error"){O().trigger(b);return}v.value=u.value.data};return ue(()=>_.show,(u,b)=>{u==!0&&z()},{immediate:!0}),(u,b)=>{var p,R,A,I,y,w,h,B;const i=fe;return K((o(),r("section",at,[e("div",null,[k(i,{title:"Summary Detail",fn:f.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",nt,[e("div",rt,[ut,e("div",it,s((R=(p=_.data)==null?void 0:p.rest)==null?void 0:R.lokasi),1)]),e("div",dt,[ct,e("div",_t,s((I=(A=_.data)==null?void 0:A.item)==null?void 0:I.name),1)]),e("div",mt,[ft,e("div",pt,s((w=(y=_.data)==null?void 0:y.item)==null?void 0:w.qty_reminder)+" "+s((B=(h=_.data)==null?void 0:h.item)==null?void 0:B.unit_name),1)])]),e("div",ht,[t(v).length==0?(o(),r("div",vt," Maaf Tidak Ada Record ")):(o(),r("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref:"loadRef",onScroll:b[0]||(b[0]=(...l)=>u.loadMore&&u.loadMore(...l))},[e("table",yt,[wt,e("tbody",null,[(o(!0),r(j,null,F(t(v),(l,M)=>{var q,x,H,C,L,Z;return o(),r("tr",{key:M,onClick:X=>T.value=M,class:G(t(T)==M?"active":"")},[e("td",null,s(M+1)+".",1),e("td",null,s(t(D)(l.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,s(t(D)(l.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",gt,s(l.id),1),e("td",null,[ae(s(l.type)+" ",1),kt,ae(" "+s(l.type=="transfer"?"To : "+l.lokasi:""),1)]),e("td",null,s(l.qty_in?t(g)(l.qty_in)+` ${(x=(q=_.data)==null?void 0:q.item)==null?void 0:x.unit_name}`:""),1),e("td",null,s(l.qty_out?t(g)(l.qty_out)+` ${(C=(H=_.data)==null?void 0:H.item)==null?void 0:C.unit_name}`:""),1),e("td",null,s(l.qty_reminder?t(g)(l.qty_reminder)+` ${(Z=(L=_.data)==null?void 0:L.item)==null?void 0:Z.unit_name}`:""),1),e("td",null,s(l.note),1),e("td",null,s(l.confirmed_at?t(D)(l.confirmed_at).format("DD-MM-Y HH:mm:ss"):""),1)],10,$t)}),128))])])],544))])])],512)),[[ie,f.show]])}}},bt=P(xt,[["__scopeId","data-v-28caab73"]]);const pe=f=>(ce("data-v-a888a243"),f=f(),_e(),f),Ct={class:"box-fixed"},Dt={class:"w-full flex p-1"},Mt={class:"w-full flex flex-row flex-wrap p-1 items-center"},qt=pe(()=>e("label",{for:"",class:"pr-1"},"To",-1)),St={class:"grow"},Tt={class:"text-red-500"},At={class:"flex items-end p-1"},Ht={class:"w-full flex justify-center items-center grow h-0 p-1"},It={key:0,class:""},Bt={key:1,class:"w-full h-full overflow-auto",role:"sticky",ref:"loadRef"},Nt={class:"tacky"},zt={class:"sticky top-0 !z-[2]"},Rt=pe(()=>e("th",null,null,-1)),jt=["onClick"],Lt=["onClick"],Vt={__name:"summary",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},setup(f){const _=f,D=J("token"),g=c({from:"",to:new Date}),m=c({}),v=c([]),T=c([]),a=c([]),z=c(-1),u=c(!1),b=c({}),i={};i._TimeZoneOffset=new Date().getTimezoneOffset();const p=async()=>{S().loading_full=!0,i.page=1,i.to=g.value.to,v.value=[];const{data:y,error:w,status:h}=await E("/api/summary_transactions",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:i,retry:0});if(S().loading_full=!1,h.value==="error"){O().trigger(w);return}v.value=y.value.all,T.value=y.value.column_header,a.value=y.value.row_header};ue(()=>_.show,(y,w)=>{y==!0&&p()},{immediate:!0});const R=(y,w)=>{let h=v.value.filter(q=>q.id==y)[0];const{items:B,...l}=h;let M=h.items.filter(q=>q.id==w)[0];return{rest:l,item:M}},A=(y,w)=>v.value.filter(h=>h.id==y)[0].items.filter(h=>h.id==w)[0].qty_reminder,I=(y,w,h)=>{b.value=y,u.value=!0};return(y,w)=>{const h=fe,B=Me("vue-date-picker"),l=Le,M=me,q=bt;return o(),r(j,null,[K(e("section",Ct,[e("div",null,[k(h,{title:"Summary",fn:f.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",Dt,[e("div",Mt,[qt,e("div",St,[k(l,null,{default:qe(()=>[k(B,{modelValue:t(g).to,"onUpdate:modelValue":w[0]||(w[0]=x=>t(g).to=x),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":""},null,8,["modelValue"])]),_:1})]),e("p",Tt,s(t(m).to),1)]),e("div",At,[e("button",{style:{width:"38px",height:"38px"},type:"button",name:"button",onClick:w[1]||(w[1]=x=>p())},[k(M,{class:"text-2xl"})])])]),e("div",Ht,[t(v).length==0?(o(),r("div",It," Maaf Tidak Ada Record ")):(o(),r("div",Bt,[e("table",Nt,[e("thead",null,[e("tr",zt,[Rt,(o(!0),r(j,null,F(t(T),x=>(o(),r("th",null,s(x.lokasi),1))),256))])]),e("tbody",null,[(o(!0),r(j,null,F(t(a),(x,H)=>(o(),r("tr",{key:H,onClick:C=>z.value=H,class:G(t(z)==H?"active":"")},[e("td",null,s(x.name)+".",1),(o(!0),r(j,null,F(t(T),C=>(o(),r("td",null,[e("a",{class:"text-blue-500 font-bold underline cursor-pointer",onClick:L=>I(R(C.id,x.id))},s(A(C.id,x.id)),9,Lt)]))),256))],10,jt))),128))])])],512))])])],512),[[ie,f.show]]),k(q,{show:t(u),data:t(b),fnClose:()=>{u.value=!1}},null,8,["show","data","fnClose"])],64)}}},Ft=P(Vt,[["__scopeId","data-v-a888a243"]]),Ot={class:"w-full h-full flex flex-col"},Et={class:"w-full flex grow flex-col overflow-auto h-0"},Pt={class:"w-full flex"},Yt={class:"text-sm absolute top-0 right-0 flex justify-end"},Zt={key:0,class:"w-2 h-2 rounded-full bg-red-700 border-2 border-solid border-red-950"},Ut={class:"w-full flex p-1"},Qt={class:"grow"},Wt=e("div",{class:"font-bold"}," Keyword ",-1),Jt={class:"flex items-end pl-1"},Kt={class:"w-full flex justify-center items-center grow h-0 p-1"},Gt={key:0,class:""},Xt={class:"tacky"},es=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Created At"),e("th",null,"Updated At"),e("th",null,"ID"),e("th",null,"Warehouse Name"),e("th",null,"Note"),e("th",null,"Status"),e("th",null,"Type"),e("th",null,"Warehouse Source Name"),e("th",null,"Warehouse Target Name"),e("th",null,"Requested At"),e("th",null,"Requested By"),e("th",null,"Confirmed At"),e("th",null,"Confirmed By")])],-1),ts=["onClick"],ss={class:"bold"},ys={__name:"index",async setup(f){let _,D;const{$moment:g}=de(),m={};m._TimeZoneOffset=new Date().getTimezoneOffset();const v=J("token"),{data:T}=([_,D]=Se(async()=>Ne(async()=>{S().loading_full=!0;const{data:$,error:d,status:N}=await E("/api/transactions",{method:"get",headers:{Authorization:`Bearer ${v.value}`,Accept:"application/json"},params:m,retry:0});if(S().loading_full=!1,N.value==="error")return O().trigger(d),[];let V=$.value.data,W=$.value.request_notif;return{transactions:V,request_notif:W}},"$45iBZgNANe")),_=await _,D(),_),a=c(T.value.transactions),z=c(T.value.request_notif),u=c(""),b=c({field:"updated_at",by:"desc"}),i=c(-1),p=c({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),R=()=>{m.like="",u.value!=""&&(m.like=`id:%${u.value}%,warehouse_name:%${u.value}%,warehouse_source_name:%${u.value}%,warehouse_target_name:%${u.value}%,item_name:%${u.value}%,status:%${u.value}%,type:%${u.value}%`),m.sort="",b.value.field&&(m.sort=b.value.field+":"+b.value.by)},A=c(null),I=async()=>{S().loading_full=!0,p.value.may_get_data=!1,m.page=p.value.page,m.page==1&&(a.value=[]),m.first_row&&delete m.first_row,m.page>1&&(m.first_row=JSON.stringify(a.value[0]));const{data:$,error:d,status:N}=await E("/api/transactions",{method:"get",headers:{Authorization:`Bearer ${v.value}`,Accept:"application/json"},params:m,retry:0});if(S().loading_full=!1,p.value.may_get_data=!0,N.value==="error"){O().trigger(d);return}p.value.page==1?(a.value=$.value.data,A.value&&(A.value.scrollTop=0)):p.value.page>1&&(a.value=[...a.value,...$.value.data]),$.value.data.length==0&&(p.value.is_last_record=!0)},y=async()=>{if(!p.value.may_get_data)return;let $=A.value;if($.scrollLeft!=p.value.scrollLeft){p.value.scrollLeft=$.scrollLeft;return}p.value.is_last_record||!(Math.round($.scrollTop)+$.clientHeight>=$.scrollHeight-1)||(p.value.page++,await I())},w=()=>{p.value.page=1,p.value.is_last_record=!1,R(),I()},h=Te(),B=()=>{h.push({name:"data_transaksi-form",query:{id:""}})},{display:l}=ne();Ae(ne());const M=()=>{i.value==-1?l({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):h.push({name:"data_transaksi-form",query:{id:a.value[i.value].id}})},q=()=>{i.value==-1?l({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):h.push({name:"data_transaksi-confirm",query:{id:a.value[i.value].id}})},x=()=>{h.push({name:"data_transaksi-request"})},H=c({}),C=c(!1),L=async()=>{C.value&&(C.value=!1)},Z=()=>{i.value==-1?l({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(H.value={id:a.value[i.value].id},C.value=!0)},X=async()=>{S().loading_full=!0;const $=new FormData;$.append("id",a.value[i.value].id),$.append("_method","DELETE");const{data:d,error:N,status:V}=await E("/api/transaction",{method:"post",headers:{Authorization:`Bearer ${v.value}`,Accept:"application/json"},body:$,retry:0});if(S().loading_full=!1,V.value==="error"){O().trigger(N);return}a.value.splice(i.value,1),C.value=!1},Q=c(!1);return($,d)=>{const N=be,V=Ce,W=De,he=Ze,ve=ze,ye=Re,we=Ge,$e=ot,ge=me,ke=je,xe=Ft;return o(),r("div",Ot,[k(N,{title:"List Transaction"}),e("div",Et,[e("div",Pt,[e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:d[0]||(d[0]=n=>B())},[k(V)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:d[1]||(d[1]=n=>M())},[t(i)==-1||t(a)[t(i)].ref_id==null&&t(a)[t(i)].confirmed_by==null?(o(),re(W,{key:0})):(o(),re(he,{key:1}))]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:d[2]||(d[2]=n=>Z())},[k(ve)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:d[3]||(d[3]=n=>q())},[k(ye)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl relative",onClick:d[4]||(d[4]=n=>x())},[k(we),e("div",Yt,[t(z)>0?(o(),r("div",Zt)):He("",!0)])]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:d[5]||(d[5]=n=>Q.value=!0)},[k($e)])]),e("div",Ut,[e("div",Qt,[Wt,K(e("input",{class:"",type:"text","onUpdate:modelValue":d[6]||(d[6]=n=>Be(u)?u.value=n:null),name:"search",placeholder:"Keyword"},null,512),[[Ie,t(u)]])]),e("div",Jt,[e("button",{class:"",type:"button",name:"button",onClick:d[7]||(d[7]=n=>w())},[k(ge,{class:"text-2xl"})])])]),e("div",Kt,[t(a).length==0?(o(),r("div",Gt," Maaf Tidak Ada Record ")):(o(),r("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:A,onScroll:y},[e("table",Xt,[es,e("tbody",null,[(o(!0),r(j,null,F(t(a),(n,U)=>{var ee,te,se,le,oe;return o(),r("tr",{key:U,onClick:ls=>i.value=U,class:G(t(i)==U?"active":"")},[e("td",null,s(U+1)+".",1),e("td",null,s(t(g)(n.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,s(t(g)(n.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",ss,s(n.id),1),e("td",null,s((ee=n.warehouse)==null?void 0:ee.name),1),e("td",null,s(n.note),1),e("td",null,s(n.status),1),e("td",null,s(n.type),1),e("td",null,s((te=n.warehouse_source)==null?void 0:te.name),1),e("td",null,s((se=n.warehouse_target)==null?void 0:se.name),1),e("td",null,s(t(g)(n.requested_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,s((le=n.requester)==null?void 0:le.username),1),e("td",null,s(n.confirmed_at?t(g)(n.confirmed_at).format("DD-MM-Y HH:mm:ss"):""),1),e("td",null,s((oe=n.confirmer)==null?void 0:oe.username),1)],10,ts)}),128))])])],544))])]),k(ke,{type:"delete",show:t(C),data:t(H),fnClose:L,fnConfirm:X},null,8,["show","data"]),k(xe,{show:t(Q),fnClose:()=>{Q.value=!1}},null,8,["show","fnClose"])])}}};export{ys as default};
