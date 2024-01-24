import{_ as qe}from"./Header.58dc960b.js";import{_ as Se}from"./Plus.89e082e4.js";import{_ as Te}from"./Edit.092da165.js";import{_ as Y}from"./_plugin-vue_export-helper.c27b6911.js";import{o as a,c as i,a as e,q as X,r as m,g as ie,z as W,M as de,b as x,t as s,B as t,I as V,J as F,K,d as ae,L as ce,C as q,D as Z,p as _e,e as me,R as ne,O as Ae,w as Ie,N as fe,G as pe,A as he,x as Ne,s as Be,E as re,F as Re,S as ue,P as ze,y as He}from"./entry.acae6412.js";import{_ as Oe}from"./Delete.2357cf0d.js";import{_ as Ve}from"./Signature.0bcdfee8.js";import{_ as ve}from"./Search.3fcafb3a.js";import{_ as je}from"./PopupMini.vue.edee3b3d.js";import{_ as ye}from"./HeaderPopup.vue.a2cd301d.js";import{_ as Le}from"./client-only.98146a5d.js";import{u as Ee}from"./useUtils.100f5b4a.js";import{u as U}from"./useMyFetch.9204e412.js";import"./Times.e2219abe.js";const Fe={name:"IconParkOutlineEyes"},Pe={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 48 48"},Ze=e("g",{fill:"none",stroke:"currentColor","stroke-width":"4"},[e("path",{"stroke-linejoin":"round",d:"M24 41c9.941 0 18-8.322 18-14c0-5.678-8.059-14-18-14S6 21.328 6 27c0 5.672 8.059 14 18 14Z",clipRule:"evenodd"}),e("path",{"stroke-linejoin":"round",d:"M24 33a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"}),e("path",{"stroke-linecap":"round",d:"m13.264 11.266l2.594 3.62m19.767-3.176l-2.595 3.62M24.009 7v6"})],-1),Ue=[Ze];function Ye(y,h,C,k,v,$){return a(),i("svg",Pe,Ue)}const Qe=Y(Fe,[["render",Ye]]),We={name:"MaterialSymbolsChecklist"},Ke={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Je=e("path",{fill:"currentColor",d:"M5.55 19L2 15.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425zm0-8L2 7.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425zM13 17v-2h9v2zm0-8V7h9v2z"},null,-1),Ge=[Je];function Xe(y,h,C,k,v,$){return a(),i("svg",Ke,Ge)}const et=Y(We,[["render",Xe]]),tt={name:"IconoirTable2Columns"},st={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},ot=e("path",{fill:"none",stroke:"currentColor","stroke-width":"1.5",d:"M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Zm0-3.9h18M3 12h18m0-4.5H3M12 21V3"},null,-1),lt=[ot];function at(y,h,C,k,v,$){return a(),i("svg",st,lt)}const nt=Y(tt,[["render",at]]);const Q=y=>(_e("data-v-26db4a83"),y=y(),me(),y),rt={class:"box-fixed"},ut={class:"w-full flex p-1 flex-wrap flex-row"},it={class:"w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-1"},dt=Q(()=>e("div",{class:"font-bold"}," Warehouse Name ",-1)),ct={class:"w-full p-1"},_t={class:"w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-1"},mt=Q(()=>e("div",{class:"font-bold"}," Item Name ",-1)),ft={class:"w-full p-1"},pt={class:"w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-1"},ht=Q(()=>e("div",{class:"font-bold"}," Last Stock ",-1)),vt={class:"w-full p-1"},yt={class:"w-full flex justify-center items-center grow h-0 p-1"},wt={key:0,class:""},gt={class:"tacky"},$t=Q(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Input At"),e("th",null,"Type"),e("th",null,"Qty In"),e("th",null,"Qty Out"),e("th",null,"Qty Reminder"),e("th",null,"Note"),e("th",null,"Confirm At"),e("th",null,"Updated At")])],-1)),xt=["onClick"],kt=Q(()=>e("br",null,null,-1)),bt={__name:"summary_detail",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},warehouse_id:{type:Number,required:!1},item_id:{type:Number,required:!1},data:{type:Object,required:!0}},setup(y){const h=y,{$moment:C}=ce(),{pointFormat:k}=Ee(),v=X("token");m({from:"",to:""});const $=m([]),S=m(-1),d={};d._TimeZoneOffset=new Date().getTimezoneOffset();const j=async()=>{q().loading_full=!0,d.page=1,d.item_id=h.data.item.id,d.warehouse_id=h.data.rest.id,$.value=[];const{data:f,error:b,status:u}=await U("/api/summary_detail_transactions",{method:"get",headers:{Authorization:`Bearer ${v.value}`,Accept:"application/json"},params:d,retry:0});if(q().loading_full=!1,u.value==="error"){Z().trigger(b);return}$.value=f.value.data};return ie(()=>h.show,(f,b)=>{f==!0&&j()},{immediate:!0}),(f,b)=>{var w,L,T,O,A,M,I,E;const u=ye;return W((a(),i("section",rt,[e("div",null,[x(u,{title:"Summary Detail",fn:y.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",ut,[e("div",it,[dt,e("div",ct,s((L=(w=h.data)==null?void 0:w.rest)==null?void 0:L.lokasi),1)]),e("div",_t,[mt,e("div",ft,s((O=(T=h.data)==null?void 0:T.item)==null?void 0:O.name),1)]),e("div",pt,[ht,e("div",vt,s((M=(A=h.data)==null?void 0:A.item)==null?void 0:M.qty_reminder)+" "+s((E=(I=h.data)==null?void 0:I.item)==null?void 0:E.unit_name),1)])]),e("div",yt,[t($).length==0?(a(),i("div",wt," Maaf Tidak Ada Record ")):(a(),i("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref:"loadRef",onScroll:b[0]||(b[0]=(...c)=>f.loadMore&&f.loadMore(...c))},[e("table",gt,[$t,e("tbody",null,[(a(!0),i(V,null,F(t($),(c,N)=>{var l,o,n,D,B,R;return a(),i("tr",{key:N,onClick:z=>S.value=N,class:K(t(S)==N?"active":"")},[e("td",null,s(N+1)+".",1),e("td",null,s(t(C)(c.input_at).format("DD-MM-Y")),1),e("td",null,[ae(s(c.type)+" ",1),kt,ae(" "+s(c.type=="transfer"?"To : "+c.lokasi:""),1)]),e("td",null,s(c.qty_in?t(k)(c.qty_in)+` ${(o=(l=h.data)==null?void 0:l.item)==null?void 0:o.unit_name}`:""),1),e("td",null,s(c.qty_out?t(k)(c.qty_out)+` ${(D=(n=h.data)==null?void 0:n.item)==null?void 0:D.unit_name}`:""),1),e("td",null,s(c.qty_reminder?t(k)(c.qty_reminder)+` ${(R=(B=h.data)==null?void 0:B.item)==null?void 0:R.unit_name}`:""),1),e("td",null,s(c.note),1),e("td",null,s(c.confirmed_at?t(C)(c.confirmed_at).format("DD-MM-Y HH:mm:ss"):""),1),e("td",null,s(t(C)(c.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,xt)}),128))])])],544))])])],512)),[[de,y.show]])}}},Ct=Y(bt,[["__scopeId","data-v-26db4a83"]]);const we=y=>(_e("data-v-a9df87b6"),y=y(),me(),y),Dt={class:"box-fixed"},Mt={action:"#",class:"w-full flex p-1"},qt={class:"w-full flex flex-row flex-wrap p-1 items-center"},St=we(()=>e("label",{for:"",class:"pr-1"},"To",-1)),Tt={class:"grow"},At={class:"text-red-500"},It={class:"flex items-end p-1"},Nt={class:"w-full flex"},Bt={class:"p-1"},Rt={class:"grow flex flex-row flex-wrap"},zt={class:"p-1"},Ht=["onClick"],Ot={class:"w-full flex justify-center items-center grow h-0 p-1"},Vt={key:0,class:""},jt={key:1,class:"w-full h-full overflow-auto",role:"sticky",ref:"loadRef"},Lt={class:"tacky"},Et={class:"sticky top-0 !z-[2]"},Ft=we(()=>e("th",null,null,-1)),Pt=["onClick"],Zt={class:"font-bold !text-left"},Ut=["onClick"],Yt={__name:"summary",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},setup(y){const h=y,C=X("token"),k=m({from:"",to:new Date}),v=m({}),$=m([]),S=m([]),d=m([]),j=m(-1),f=m(!1),b=m({}),u={};u._TimeZoneOffset=new Date().getTimezoneOffset();const w=async()=>{q().loading_full=!0,u.page=1,u.to=k.value.to,$.value=[];const{data:l,error:o,status:n}=await U("/api/summary_transactions",{method:"get",headers:{Authorization:`Bearer ${C.value}`,Accept:"application/json"},params:u,retry:0});if(q().loading_full=!1,n.value==="error"){Z().trigger(o);return}$.value=l.value.all,S.value=l.value.column_header,d.value=l.value.row_header};ie(()=>h.show,(l,o)=>{l==!0&&w()},{immediate:!0});const L=(l,o)=>{let n=$.value.filter(z=>z.id==l)[0];const{items:D,...B}=n;let R=n.items.filter(z=>z.id==o)[0];return{rest:B,item:R}},T=(l,o)=>$.value.filter(n=>n.id==l)[0].items.filter(n=>n.id==o)[0].qty_reminder,O=(l,o,n)=>{b.value=l,f.value=!0},A=m(""),M=m([]),I=l=>{let o=M.value.map(n=>n.id).indexOf(l.id);o==-1?M.value.push(l):M.value.splice(o,1)},E=l=>M.value.some(o=>o.id===l.id),c=ne(()=>{let l=[],o=M.value.map(n=>n.id);return S.value.forEach(n=>{o.indexOf(n.id)==-1&&l.push(n)}),l}),N=ne(()=>{let l=A.value;const o=new RegExp("("+l+")","i");return d.value.filter(n=>n.name.match(o))});return(l,o)=>{const n=ye,D=Ae("vue-date-picker"),B=Le,R=ve,z=Ct;return a(),i(V,null,[W(e("section",Dt,[e("div",null,[x(n,{title:"Summary",fn:y.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",Mt,[e("div",qt,[St,e("div",Tt,[x(B,null,{default:Ie(()=>[x(D,{modelValue:t(k).to,"onUpdate:modelValue":o[0]||(o[0]=g=>t(k).to=g),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":""},null,8,["modelValue"])]),_:1})]),e("p",At,s(t(v).to),1)]),e("div",It,[e("button",{style:{width:"38px",height:"38px"},type:"submit",name:"button",onClick:o[1]||(o[1]=fe(g=>w(),["prevent"]))},[x(R,{class:"text-2xl"})])])]),e("div",Nt,[e("div",Bt,[W(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=g=>pe(A)?A.value=g:null),placeholder:"Item Name"},null,512),[[he,t(A)]])]),e("div",Rt,[(a(!0),i(V,null,F(t(S),g=>(a(),i("div",zt,[e("div",{class:K(["p-1 rounded ring-1 ring-slate-500 cursor-pointer",E(g)?"bg-white text-black":"bg-slate-600 text-white"]),onClick:p=>I(g)},s(g.lokasi),11,Ht)]))),256))])]),e("div",Ot,[t($).length==0?(a(),i("div",Vt," Maaf Tidak Ada Record ")):(a(),i("div",jt,[e("table",Lt,[e("thead",null,[e("tr",Et,[Ft,(a(!0),i(V,null,F(t(c),g=>(a(),i("th",null,s(g.lokasi),1))),256))])]),e("tbody",null,[(a(!0),i(V,null,F(t(N),(g,p)=>(a(),i("tr",{key:p,onClick:r=>j.value=p,class:K(t(j)==p?"active":"")},[e("th",Zt,s(g.name),1),(a(!0),i(V,null,F(t(c),r=>(a(),i("td",null,[e("a",{class:"text-blue-500 font-bold underline cursor-pointer",onClick:H=>O(L(r.id,g.id))},s(T(r.id,g.id)),9,Ut)]))),256))],10,Pt))),128))])])],512))])])],512),[[de,y.show]]),x(z,{show:t(f),data:t(b),fnClose:()=>{f.value=!1}},null,8,["show","data","fnClose"])],64)}}},Qt=Y(Yt,[["__scopeId","data-v-a9df87b6"]]),Wt={class:"w-full h-full flex flex-col"},Kt={class:"w-full flex grow flex-col overflow-auto h-0"},Jt={class:"w-full flex"},Gt=["disabled"],Xt={class:"text-sm absolute top-0 right-0 flex justify-end"},es={key:0,class:"w-2 h-2 rounded-full bg-red-700 border-2 border-solid border-red-950"},ts={action:"#",class:"w-full flex p-1"},ss={class:"grow"},os=e("div",{class:"font-bold"}," Keyword ",-1),ls={class:"flex items-end pl-1"},as={class:"w-full flex justify-center items-center grow h-0 p-1"},ns={key:0,class:""},rs={class:"tacky"},us=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"ID"),e("th",null,"Input At"),e("th",null,"Warehouse Name"),e("th",null,"Note"),e("th",null,"Status"),e("th",null,"Type"),e("th",null,"Warehouse Source Name"),e("th",null,"Warehouse Target Name"),e("th",null,"Confirmed At"),e("th",null,"Confirmed By"),e("th",null,"Requested At"),e("th",null,"Requested By")])],-1),is=["onClick"],ds={class:"bold"},Ds={__name:"index",async setup(y){let h,C;const{$moment:k}=ce(),v={};v._TimeZoneOffset=new Date().getTimezoneOffset();const $=X("token"),{data:S}=([h,C]=Ne(async()=>He(async()=>{q().loading_full=!0;const{data:p,error:r,status:H}=await U("/api/transactions",{method:"get",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},params:v,retry:0});if(q().loading_full=!1,H.value==="error")return Z().trigger(r),[];let P=p.value.data,J=p.value.request_notif;return{transactions:P,request_notif:J}},"$45iBZgNANe")),h=await h,C(),h),d=m(S.value.transactions),j=m(S.value.request_notif),f=m(""),b=m({field:"updated_at",by:"desc"}),u=m(-1),w=m({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),L=()=>{v.like="",f.value!=""&&(v.like=`id:%${f.value}%,warehouse_name:%${f.value}%,warehouse_source_name:%${f.value}%,warehouse_target_name:%${f.value}%,item_name:%${f.value}%,status:%${f.value}%,type:%${f.value}%`),v.sort="",b.value.field&&(v.sort=b.value.field+":"+b.value.by)},T=m(null),O=async()=>{q().loading_full=!0,w.value.may_get_data=!1,v.page=w.value.page,v.page==1&&(d.value=[]),v.first_row&&delete v.first_row,v.page>1&&(v.first_row=JSON.stringify(d.value[0]));const{data:p,error:r,status:H}=await U("/api/transactions",{method:"get",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},params:v,retry:0});if(q().loading_full=!1,w.value.may_get_data=!0,H.value==="error"){Z().trigger(r);return}w.value.page==1?(d.value=p.value.data,T.value&&(T.value.scrollTop=0)):w.value.page>1&&(d.value=[...d.value,...p.value.data]),p.value.data.length==0&&(w.value.is_last_record=!0)},A=async()=>{if(!w.value.may_get_data)return;let p=T.value;if(p.scrollLeft!=w.value.scrollLeft){w.value.scrollLeft=p.scrollLeft;return}w.value.is_last_record||!(Math.round(p.scrollTop)+p.clientHeight>=p.scrollHeight-1)||(w.value.page++,await O())},M=()=>{w.value.page=1,w.value.is_last_record=!1,L(),O()},I=Be(),E=()=>{I.push({name:"data_transaksi-form",query:{id:""}})},{display:c}=re();Re(re());const N=()=>{u.value==-1?c({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):I.push({name:"data_transaksi-form",query:{id:d.value[u.value].id}})},l=()=>{u.value==-1?c({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):I.push({name:"data_transaksi-confirm",query:{id:d.value[u.value].id}})},o=()=>{I.push({name:"data_transaksi-request"})},n=m({}),D=m(!1),B=async()=>{D.value&&(D.value=!1)},R=()=>{u.value==-1?c({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(n.value={id:d.value[u.value].id},D.value=!0)},z=async()=>{q().loading_full=!0;const p=new FormData;p.append("id",d.value[u.value].id),p.append("_method","DELETE");const{data:r,error:H,status:P}=await U("/api/transaction",{method:"post",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},body:p,retry:0});if(q().loading_full=!1,P.value==="error"){Z().trigger(H);return}d.value.splice(u.value,1),u.value=-1,D.value=!1},g=m(!1);return(p,r)=>{const H=qe,P=Se,J=Te,ge=Qe,$e=Oe,xe=Ve,ke=et,be=nt,Ce=ve,De=je,Me=Qt;return a(),i("div",Wt,[x(H,{title:"List Transaction"}),e("div",Kt,[e("div",Jt,[e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:r[0]||(r[0]=_=>E())},[x(P)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:r[1]||(r[1]=_=>N())},[t(u)==-1||t(d)[t(u)].ref_id==null&&t(d)[t(u)].confirmed_by==null?(a(),ue(J,{key:0})):(a(),ue(ge,{key:1}))]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:r[2]||(r[2]=_=>R())},[x($e)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",disabled:t(u)==-1||t(d)[t(u)].confirmed_by,onClick:r[3]||(r[3]=_=>l())},[x(xe)],8,Gt),e("button",{type:"button",name:"button",class:"m-1 text-2xl relative",onClick:r[4]||(r[4]=_=>o())},[x(ke),e("div",Xt,[t(j)>0?(a(),i("div",es)):ze("",!0)])]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:r[5]||(r[5]=_=>g.value=!0)},[x(be)])]),e("form",ts,[e("div",ss,[os,W(e("input",{class:"",type:"text","onUpdate:modelValue":r[6]||(r[6]=_=>pe(f)?f.value=_:null),name:"search",placeholder:"Keyword"},null,512),[[he,t(f)]])]),e("div",ls,[e("button",{class:"",type:"submit",name:"button",onClick:r[7]||(r[7]=fe(_=>M(),["prevent"]))},[x(Ce,{class:"text-2xl"})])])]),e("div",as,[t(d).length==0?(a(),i("div",ns," Maaf Tidak Ada Record ")):(a(),i("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:T,onScroll:A},[e("table",rs,[us,e("tbody",null,[(a(!0),i(V,null,F(t(d),(_,G)=>{var ee,te,se,oe,le;return a(),i("tr",{key:G,onClick:cs=>u.value=G,class:K(t(u)==G?"active":"")},[e("td",ds,s(_.id),1),e("td",null,s(_.input_at?t(k)(_.input_at).format("DD-MM-Y"):""),1),e("td",null,s((ee=_.warehouse)==null?void 0:ee.name),1),e("td",null,s(_.note),1),e("td",null,s(_.status),1),e("td",null,s(_.type),1),e("td",null,s((te=_.warehouse_source)==null?void 0:te.name),1),e("td",null,s((se=_.warehouse_target)==null?void 0:se.name),1),e("td",null,s(_.confirmed_at?t(k)(_.confirmed_at).format("DD-MM-Y HH:mm:ss"):""),1),e("td",null,s((oe=_.confirmer)==null?void 0:oe.username),1),e("td",null,s(t(k)(_.requested_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,s((le=_.requester)==null?void 0:le.username),1)],10,is)}),128))])])],544))])]),x(De,{type:"delete",show:t(D),data:t(n),fnClose:B,fnConfirm:z},null,8,["show","data"]),x(Me,{show:t(g),fnClose:()=>{g.value=!1}},null,8,["show","fnClose"])])}}};export{Ds as default};
