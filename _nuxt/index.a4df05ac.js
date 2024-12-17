import{_ as xe}from"./Header.cb1bee0f.js";import{_ as be}from"./Plus.ff417996.js";import{_ as Ce}from"./Edit.86f6fad7.js";import{_ as O}from"./_plugin-vue_export-helper.c27b6911.js";import{o,c as r,a as e,h as J,r as m,E as ue,m as K,G as ie,b as x,t as s,n as t,F as N,B as j,C as G,d as ae,D as de,q,s as L,p as ce,e as _e,k as De,i as qe,x as ne,y as Me,J as re,H as Se,v as Te,z as Ae,l as He}from"./entry.50a4d276.js";import{_ as Ie}from"./Delete.814d5ddc.js";import{_ as Be}from"./Signature.4d1d5e02.js";import{_ as Ne}from"./Search.5b5f58fc.js";import{_ as ze}from"./PopupMini.vue.b39766cb.js";import{_ as me}from"./HeaderPopup.vue.ef18beb3.js";import{u as Re}from"./useUtils.70251168.js";import{u as F}from"./useMyFetch.a11d8274.js";import"./Times.eb609832.js";const je={name:"IconParkOutlineEyes"},Le={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 48 48"},Fe=e("g",{fill:"none",stroke:"currentColor","stroke-width":"4"},[e("path",{"stroke-linejoin":"round",d:"M24 41c9.941 0 18-8.322 18-14c0-5.678-8.059-14-18-14S6 21.328 6 27c0 5.672 8.059 14 18 14Z",clipRule:"evenodd"}),e("path",{"stroke-linejoin":"round",d:"M24 33a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"}),e("path",{"stroke-linecap":"round",d:"m13.264 11.266l2.594 3.62m19.767-3.176l-2.595 3.62M24.009 7v6"})],-1),Oe=[Fe];function Ve(f,c,b,v,u,$){return o(),r("svg",Le,Oe)}const Ee=O(je,[["render",Ve]]),Pe={name:"MaterialSymbolsChecklist"},Ye={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Ze=e("path",{fill:"currentColor",d:"M5.55 19L2 15.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425zm0-8L2 7.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425zM13 17v-2h9v2zm0-8V7h9v2z"},null,-1),Qe=[Ze];function Ue(f,c,b,v,u,$){return o(),r("svg",Ye,Qe)}const We=O(Pe,[["render",Ue]]),Je={name:"IconoirTable2Columns"},Ke={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Ge=e("path",{fill:"none",stroke:"currentColor","stroke-width":"1.5",d:"M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Zm0-3.9h18M3 12h18m0-4.5H3M12 21V3"},null,-1),Xe=[Ge];function et(f,c,b,v,u,$){return o(),r("svg",Ke,Xe)}const tt=O(Je,[["render",et]]);const V=f=>(ce("data-v-28caab73"),f=f(),_e(),f),st={class:"box-fixed"},lt={class:"w-full flex p-1 flex-wrap flex-row"},ot={class:"w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-1"},at=V(()=>e("div",{class:"font-bold"}," Warehouse Name ",-1)),nt={class:"w-full p-1"},rt={class:"w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-1"},ut=V(()=>e("div",{class:"font-bold"}," Item Name ",-1)),it={class:"w-full p-1"},dt={class:"w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-1"},ct=V(()=>e("div",{class:"font-bold"}," Last Stock ",-1)),_t={class:"w-full p-1"},mt={class:"w-full flex justify-center items-center grow h-0 p-1"},ft={key:0,class:""},pt={class:"tacky"},ht=V(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Created At"),e("th",null,"Updated At"),e("th",null,"ID"),e("th",null,"Type"),e("th",null,"Qty In"),e("th",null,"Qty Out"),e("th",null,"Qty Reminder"),e("th",null,"Note"),e("th",null,"Requested At")])],-1)),vt=["onClick"],yt={class:"bold"},wt=V(()=>e("br",null,null,-1)),gt={__name:"summary_detail",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},warehouse_id:{type:Number,required:!1},item_id:{type:Number,required:!1},data:{type:Object,required:!0}},setup(f){const c=f,{$moment:b}=de(),{pointFormat:v}=Re(),u=J("token");m({from:"",to:""});const $=m([]),M=m(-1),a={};a._TimeZoneOffset=new Date().getTimezoneOffset();const I=async()=>{q().loading_full=!0,a.page=1,a.item_id=c.data.item.id,a.warehouse_id=c.data.rest.id,$.value=[];const{data:i,error:C,status:p}=await F("/api/summary_detail_transactions",{method:"get",headers:{Authorization:`Bearer ${u.value}`,Accept:"application/json"},params:a,retry:0});if(q().loading_full=!1,p.value==="error"){L().trigger(C);return}$.value=i.value.data};return ue(()=>c.show,(i,C)=>{i==!0&&I()},{immediate:!0}),(i,C)=>{var h,B,_,k,w,T,g,D;const p=me;return K((o(),r("section",st,[e("div",null,[x(p,{title:"Summary Detail",fn:f.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",lt,[e("div",ot,[at,e("div",nt,s((B=(h=c.data)==null?void 0:h.rest)==null?void 0:B.lokasi),1)]),e("div",rt,[ut,e("div",it,s((k=(_=c.data)==null?void 0:_.item)==null?void 0:k.name),1)]),e("div",dt,[ct,e("div",_t,s((T=(w=c.data)==null?void 0:w.item)==null?void 0:T.qty_reminder)+" "+s((D=(g=c.data)==null?void 0:g.item)==null?void 0:D.unit_name),1)])]),e("div",mt,[t($).length==0?(o(),r("div",ft," Maaf Tidak Ada Record ")):(o(),r("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref:"loadRef",onScroll:C[0]||(C[0]=(...l)=>i.loadMore&&i.loadMore(...l))},[e("table",pt,[ht,e("tbody",null,[(o(!0),r(N,null,j(t($),(l,A)=>{var E,P,z,S,Y,Z;return o(),r("tr",{key:A,onClick:X=>M.value=A,class:G(t(M)==A?"active":"")},[e("td",null,s(A+1)+".",1),e("td",null,s(t(b)(l.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,s(t(b)(l.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",yt,s(l.id),1),e("td",null,[ae(s(l.type)+" ",1),wt,ae(" "+s(l.type=="transfer"?"To : "+l.lokasi:""),1)]),e("td",null,s(l.qty_in?t(v)(l.qty_in)+` ${(P=(E=c.data)==null?void 0:E.item)==null?void 0:P.unit_name}`:""),1),e("td",null,s(l.qty_out?t(v)(l.qty_out)+` ${(S=(z=c.data)==null?void 0:z.item)==null?void 0:S.unit_name}`:""),1),e("td",null,s(l.qty_reminder?t(v)(l.qty_reminder)+` ${(Z=(Y=c.data)==null?void 0:Y.item)==null?void 0:Z.unit_name}`:""),1),e("td",null,s(l.note),1),e("td",null,s(l.confirmed_at?t(b)(l.confirmed_at).format("DD-MM-Y HH:mm:ss"):""),1)],10,vt)}),128))])])],544))])])],512)),[[ie,f.show]])}}},$t=O(gt,[["__scopeId","data-v-28caab73"]]);const fe=f=>(ce("data-v-27f9a39d"),f=f(),_e(),f),kt={class:"box-fixed"},xt=fe(()=>e("div",{class:"w-full flex p-1"},null,-1)),bt={class:"w-full flex justify-center items-center grow h-0 p-1"},Ct={key:0,class:""},Dt={key:1,class:"w-full h-full overflow-auto",role:"sticky",ref:"loadRef"},qt={class:"tacky"},Mt={class:"sticky top-0 !z-[2]"},St=fe(()=>e("th",null,null,-1)),Tt=["onClick"],At=["onClick"],Ht={__name:"summary",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},setup(f){const c=f,b=J("token");m({from:"",to:""});const v=m([]),u=m([]),$=m([]),M=m(-1),a=m(!1),I=m({}),i={};i._TimeZoneOffset=new Date().getTimezoneOffset();const C=async()=>{q().loading_full=!0,i.page=1,v.value=[];const{data:_,error:k,status:w}=await F("/api/summary_transactions",{method:"get",headers:{Authorization:`Bearer ${b.value}`,Accept:"application/json"},params:i,retry:0});if(q().loading_full=!1,w.value==="error"){L().trigger(k);return}v.value=_.value.all,u.value=_.value.column_header,$.value=_.value.row_header};ue(()=>c.show,(_,k)=>{_==!0&&C()},{immediate:!0});const p=(_,k)=>{let w=v.value.filter(l=>l.id==_)[0];const{items:T,...g}=w;let D=w.items.filter(l=>l.id==k)[0];return{rest:g,item:D}},h=(_,k)=>v.value.filter(w=>w.id==_)[0].items.filter(w=>w.id==k)[0].qty_reminder,B=(_,k,w)=>{I.value=_,a.value=!0};return(_,k)=>{const w=me,T=$t;return o(),r(N,null,[K(e("section",kt,[e("div",null,[x(w,{title:"Summary",fn:f.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),xt,e("div",bt,[t(v).length==0?(o(),r("div",Ct," Maaf Tidak Ada Record ")):(o(),r("div",Dt,[e("table",qt,[e("thead",null,[e("tr",Mt,[St,(o(!0),r(N,null,j(t(u),g=>(o(),r("th",null,s(g.lokasi),1))),256))])]),e("tbody",null,[(o(!0),r(N,null,j(t($),(g,D)=>(o(),r("tr",{key:D,onClick:l=>M.value=D,class:G(t(M)==D?"active":"")},[e("td",null,s(g.name)+".",1),(o(!0),r(N,null,j(t(u),l=>(o(),r("td",null,[e("a",{class:"text-blue-500 font-bold underline cursor-pointer",onClick:A=>B(p(l.id,g.id))},s(h(l.id,g.id)),9,At)]))),256))],10,Tt))),128))])])],512))])])],512),[[ie,f.show]]),x(T,{show:t(a),data:t(I),fnClose:()=>{a.value=!1}},null,8,["show","data","fnClose"])],64)}}},It=O(Ht,[["__scopeId","data-v-27f9a39d"]]),Bt={class:"w-full h-full flex flex-col"},Nt={class:"w-full flex grow flex-col overflow-auto h-0"},zt={class:"w-full flex"},Rt={class:"text-sm absolute top-0 right-0 flex justify-end"},jt={key:0,class:"w-2 h-2 rounded-full bg-red-700 border-2 border-solid border-red-950"},Lt={class:"w-full flex p-1"},Ft={class:"grow"},Ot=e("div",{class:"font-bold"}," Keyword ",-1),Vt={class:"flex items-end pl-1"},Et={class:"w-full flex justify-center items-center grow h-0 p-1"},Pt={key:0,class:""},Yt={class:"tacky"},Zt=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Created At"),e("th",null,"Updated At"),e("th",null,"ID"),e("th",null,"Warehouse Name"),e("th",null,"Note"),e("th",null,"Status"),e("th",null,"Type"),e("th",null,"Warehouse Source Name"),e("th",null,"Warehouse Target Name"),e("th",null,"Requested At"),e("th",null,"Requested By"),e("th",null,"Confirmed At"),e("th",null,"Confirmed By")])],-1),Qt=["onClick"],Ut={class:"bold"},is={__name:"index",async setup(f){let c,b;const{$moment:v}=de(),u={};u._TimeZoneOffset=new Date().getTimezoneOffset();const $=J("token"),{data:M}=([c,b]=De(async()=>He(async()=>{q().loading_full=!0;const{data:y,error:d,status:H}=await F("/api/transactions",{method:"get",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},params:u,retry:0});if(q().loading_full=!1,H.value==="error")return L().trigger(d),[];let R=y.value.data,W=y.value.request_notif;return{transactions:R,request_notif:W}},"$45iBZgNANe")),c=await c,b(),c),a=m(M.value.transactions),I=m(M.value.request_notif),i=m(""),C=m({field:"updated_at",by:"desc"}),p=m(-1),h=m({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),B=()=>{u.like="",i.value!=""&&(u.like=`id:%${i.value}%,warehouse_name:%${i.value}%,warehouse_source_name:%${i.value}%,warehouse_target_name:%${i.value}%,item_name:%${i.value}%,status:%${i.value}%,type:%${i.value}%`),u.sort="",C.value.field&&(u.sort=C.value.field+":"+C.value.by)},_=m(null),k=async()=>{q().loading_full=!0,h.value.may_get_data=!1,u.page=h.value.page,u.page==1&&(a.value=[]),u.first_row&&delete u.first_row,u.page>1&&(u.first_row=JSON.stringify(a.value[0]));const{data:y,error:d,status:H}=await F("/api/transactions",{method:"get",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},params:u,retry:0});if(q().loading_full=!1,h.value.may_get_data=!0,H.value==="error"){L().trigger(d);return}h.value.page==1?(a.value=y.value.data,_.value&&(_.value.scrollTop=0)):h.value.page>1&&(a.value=[...a.value,...y.value.data]),y.value.data.length==0&&(h.value.is_last_record=!0)},w=async()=>{if(!h.value.may_get_data)return;let y=_.value;if(y.scrollLeft!=h.value.scrollLeft){h.value.scrollLeft=y.scrollLeft;return}h.value.is_last_record||!(Math.round(y.scrollTop)+y.clientHeight>=y.scrollHeight-1)||(h.value.page++,await k())},T=()=>{h.value.page=1,h.value.is_last_record=!1,B(),k()},g=qe(),D=()=>{g.push({name:"data_transaksi-form",query:{id:""}})},{display:l}=ne();Me(ne());const A=()=>{p.value==-1?l({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):g.push({name:"data_transaksi-form",query:{id:a.value[p.value].id}})},E=()=>{p.value==-1?l({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):g.push({name:"data_transaksi-confirm",query:{id:a.value[p.value].id}})},P=()=>{g.push({name:"data_transaksi-request"})},z=m({}),S=m(!1),Y=async()=>{S.value&&(S.value=!1)},Z=()=>{p.value==-1?l({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(z.value={id:a.value[p.value].id},S.value=!0)},X=async()=>{q().loading_full=!0;const y=new FormData;y.append("id",a.value[p.value].id),y.append("_method","DELETE");const{data:d,error:H,status:R}=await F("/api/transaction",{method:"post",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},body:y,retry:0});if(q().loading_full=!1,R.value==="error"){L().trigger(H);return}a.value.splice(p.value,1),S.value=!1},U=m(!1);return(y,d)=>{const H=xe,R=be,W=Ce,pe=Ee,he=Ie,ve=Be,ye=We,we=tt,ge=Ne,$e=ze,ke=It;return o(),r("div",Bt,[x(H,{title:"List Transaction"}),e("div",Nt,[e("div",zt,[e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:d[0]||(d[0]=n=>D())},[x(R)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:d[1]||(d[1]=n=>A())},[t(p)==-1||t(a)[t(p)].ref_id==null&&t(a)[t(p)].confirmed_by==null?(o(),re(W,{key:0})):(o(),re(pe,{key:1}))]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:d[2]||(d[2]=n=>Z())},[x(he)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:d[3]||(d[3]=n=>E())},[x(ve)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl relative",onClick:d[4]||(d[4]=n=>P())},[x(ye),e("div",Rt,[t(I)>0?(o(),r("div",jt)):Se("",!0)])]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:d[5]||(d[5]=n=>U.value=!0)},[x(we)])]),e("div",Lt,[e("div",Ft,[Ot,K(e("input",{class:"",type:"text","onUpdate:modelValue":d[6]||(d[6]=n=>Ae(i)?i.value=n:null),name:"search",placeholder:"Keyword"},null,512),[[Te,t(i)]])]),e("div",Vt,[e("button",{class:"",type:"button",name:"button",onClick:d[7]||(d[7]=n=>T())},[x(ge,{class:"text-2xl"})])])]),e("div",Et,[t(a).length==0?(o(),r("div",Pt," Maaf Tidak Ada Record ")):(o(),r("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:_,onScroll:w},[e("table",Yt,[Zt,e("tbody",null,[(o(!0),r(N,null,j(t(a),(n,Q)=>{var ee,te,se,le,oe;return o(),r("tr",{key:Q,onClick:Wt=>p.value=Q,class:G(t(p)==Q?"active":"")},[e("td",null,s(Q+1)+".",1),e("td",null,s(t(v)(n.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,s(t(v)(n.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",Ut,s(n.id),1),e("td",null,s((ee=n.warehouse)==null?void 0:ee.name),1),e("td",null,s(n.note),1),e("td",null,s(n.status),1),e("td",null,s(n.type),1),e("td",null,s((te=n.warehouse_source)==null?void 0:te.name),1),e("td",null,s((se=n.warehouse_target)==null?void 0:se.name),1),e("td",null,s(t(v)(n.requested_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,s((le=n.requester)==null?void 0:le.username),1),e("td",null,s(n.confirmed_at?t(v)(n.confirmed_at).format("DD-MM-Y HH:mm:ss"):""),1),e("td",null,s((oe=n.confirmer)==null?void 0:oe.username),1)],10,Qt)}),128))])])],544))])]),x($e,{type:"delete",show:t(S),data:t(z),fnClose:Y,fnConfirm:X},null,8,["show","data"]),x(ke,{show:t(U),fnClose:()=>{U.value=!1}},null,8,["show","fnClose"])])}}};export{is as default};
