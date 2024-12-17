import{_ as xe}from"./Header.bab990b1.js";import{_ as we}from"./Plus.614af9fc.js";import{_ as ge}from"./Edit.b893a464.js";import{_ as be,a as ke,b as $e}from"./Table2Column.3d873786.js";import{_ as Ce}from"./Delete.cf8f3b41.js";import{_ as De}from"./Signature.79536e1a.js";import{_ as ae}from"./Search.685f564f.js";import{_ as Se}from"./PopupMini.vue.ead00fde.js";import{_ as Te}from"./HeaderPopup.vue.0267283d.js";import{_ as Ae}from"./client-only.e69c92d0.js";import{_ as qe}from"./summary_detail.59955516.js";import{q as ne,r as i,h as Ie,Q as se,P as Me,o as c,c as f,z as Z,M as Be,a as e,b as y,w as Re,B as t,t as m,N as re,G as ue,A as ie,I as R,J as H,K as J,C as k,D as V,p as Ne,e as ze,x as Ee,s as He,E as oe,F as Le,S as le,O as Oe,y as Fe,L as Ve}from"./entry.2f2c890d.js";import{u as j}from"./useMyFetch.0b69aeb4.js";import{_ as je}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.dff09cfb.js";import"./useUtils.100f5b4a.js";const ce=g=>(Ne("data-v-a9df87b6"),g=g(),ze(),g),Pe={class:"box-fixed"},Ue={action:"#",class:"w-full flex p-1"},Ke={class:"w-full flex flex-row flex-wrap p-1 items-center"},We=ce(()=>e("label",{for:"",class:"pr-1"},"To",-1)),Ye={class:"grow"},Ze={class:"text-red-500"},Je={class:"flex items-end p-1"},Qe={class:"w-full flex"},Ge={class:"p-1"},Xe={class:"grow flex flex-row flex-wrap"},et={class:"p-1"},tt=["onClick"],st={class:"w-full flex justify-center items-center grow h-0 p-1"},ot={key:0,class:""},lt={key:1,class:"w-full h-full overflow-auto",role:"sticky",ref:"loadRef"},at={class:"tacky"},nt={class:"sticky top-0 !z-[2]"},rt=ce(()=>e("th",null,null,-1)),ut=["onClick"],it={class:"font-bold !text-left"},ct=["onClick"],dt={__name:"summary",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},setup(g){const S=g,L=ne("token"),$=i({from:"",to:new Date}),v=i({}),x=i([]),T=i([]),d=i([]),O=i(-1),h=i(!1),A=i({}),u={};u._TimeZoneOffset=new Date().getTimezoneOffset();const p=async()=>{k().loading_full=!0,u.page=1,u.to=$.value.to,x.value=[];const{data:l,error:o,status:a}=await j("/api/summary_transactions",{method:"get",headers:{Authorization:`Bearer ${L.value}`,Accept:"application/json"},params:u,retry:0});if(k().loading_full=!1,a.value==="error"){V().trigger(o);return}x.value=l.value.all,T.value=l.value.column_header,d.value=l.value.row_header};Ie(()=>S.show,(l,o)=>{l==!0&&p()},{immediate:!0});const P=(l,o)=>{let a=x.value.filter(D=>D.id==l)[0];const{items:b,...N}=a;let z=a.items.filter(D=>D.id==o)[0];return{rest:N,item:z}},q=(l,o)=>x.value.filter(a=>a.id==l)[0].items.filter(a=>a.id==o)[0].qty_reminder,F=(l,o,a)=>{A.value=l,h.value=!0},I=i(""),C=i([]),M=l=>{let o=C.value.map(a=>a.id).indexOf(l.id);o==-1?C.value.push(l):C.value.splice(o,1)},U=l=>C.value.some(o=>o.id===l.id),B=se(()=>{let l=[],o=C.value.map(a=>a.id);return T.value.forEach(a=>{o.indexOf(a.id)==-1&&l.push(a)}),l}),K=se(()=>{let l=I.value;const o=new RegExp("("+l+")","i");return d.value.filter(a=>a.name.match(o))});return(l,o)=>{const a=Te,b=Me("vue-date-picker"),N=Ae,z=ae,D=qe;return c(),f(R,null,[Z(e("section",Pe,[e("div",null,[y(a,{title:"Summary",fn:g.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",Ue,[e("div",Ke,[We,e("div",Ye,[y(N,null,{default:Re(()=>[y(b,{modelValue:t($).to,"onUpdate:modelValue":o[0]||(o[0]=_=>t($).to=_),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":""},null,8,["modelValue"])]),_:1})]),e("p",Ze,m(t(v).to),1)]),e("div",Je,[e("button",{style:{width:"38px",height:"38px"},type:"submit",name:"button",onClick:o[1]||(o[1]=re(_=>p(),["prevent"]))},[y(z,{class:"text-2xl"})])])]),e("div",Qe,[e("div",Ge,[Z(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=_=>ue(I)?I.value=_:null),placeholder:"Item Name"},null,512),[[ie,t(I)]])]),e("div",Xe,[(c(!0),f(R,null,H(t(T),_=>(c(),f("div",et,[e("div",{class:J(["p-1 rounded ring-1 ring-slate-500 cursor-pointer",U(_)?"bg-white text-black":"bg-slate-600 text-white"]),onClick:r=>M(_)},m(_.lokasi),11,tt)]))),256))])]),e("div",st,[t(x).length==0?(c(),f("div",ot," Maaf Tidak Ada Record ")):(c(),f("div",lt,[e("table",at,[e("thead",null,[e("tr",nt,[rt,(c(!0),f(R,null,H(t(B),_=>(c(),f("th",null,m(_.lokasi),1))),256))])]),e("tbody",null,[(c(!0),f(R,null,H(t(K),(_,r)=>(c(),f("tr",{key:r,onClick:s=>O.value=r,class:J(t(O)==r?"active":"")},[e("th",it,m(_.name),1),(c(!0),f(R,null,H(t(B),s=>(c(),f("td",null,[e("a",{class:"text-blue-500 font-bold underline cursor-pointer",onClick:w=>F(P(s.id,_.id))},m(q(s.id,_.id)),9,ct)]))),256))],10,ut))),128))])])],512))])])],512),[[Be,g.show]]),y(D,{show:t(h),data:t(A),fnClose:()=>{h.value=!1}},null,8,["show","data","fnClose"])],64)}}},_t=je(dt,[["__scopeId","data-v-a9df87b6"]]),mt={class:"w-full h-full flex flex-col"},ft={class:"w-full flex grow flex-col overflow-auto h-0"},pt={class:"w-full flex"},vt=["disabled"],ht={class:"text-sm absolute top-0 right-0 flex justify-end"},yt={key:0,class:"w-2 h-2 rounded-full bg-red-700 border-2 border-solid border-red-950"},xt={action:"#",class:"w-full flex p-1"},wt={class:"grow"},gt=e("div",{class:"font-bold"}," Keyword ",-1),bt={class:"flex items-end pl-1"},kt={class:"w-full flex justify-center items-center grow h-0 p-1"},$t={key:0,class:""},Ct={class:"tacky"},Dt=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"ID"),e("th",null,"Input At"),e("th",null,"Warehouse Name"),e("th",null,"Note"),e("th",null,"Status"),e("th",null,"Type"),e("th",null,"Warehouse Source Name"),e("th",null,"Warehouse Target Name"),e("th",null,"Confirmed At"),e("th",null,"Confirmed By"),e("th",null,"Requested At"),e("th",null,"Requested By")])],-1),St=["onClick"],Tt={class:"bold"},Kt={__name:"index",async setup(g){let S,L;const{$moment:$}=Ve(),v={};v._TimeZoneOffset=new Date().getTimezoneOffset();const x=ne("token"),{data:T}=([S,L]=Ee(async()=>Fe(async()=>{let r=[],s=null;k().loading_full=!0;const{data:w,error:E,status:W}=await j("/api/transactions",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:v,retry:0});return k().loading_full=!1,W.value==="error"?V().trigger(E):(r=w.value.data,s=w.value.request_notif),{transactions:r,request_notif:s}},"$45iBZgNANe")),S=await S,L(),S),d=i(T.value.transactions),O=i(T.value.request_notif),h=i(""),A=i({field:"updated_at",by:"desc"}),u=i(-1),p=i({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),P=()=>{v.like="",h.value!=""&&(v.like=`id:%${h.value}%,warehouse_name:%${h.value}%,warehouse_source_name:%${h.value}%,warehouse_target_name:%${h.value}%,item_name:%${h.value}%,status:%${h.value}%,type:%${h.value}%`),v.sort="",A.value.field&&(v.sort=A.value.field+":"+A.value.by)},q=i(null),F=async()=>{k().loading_full=!0,p.value.may_get_data=!1,v.page=p.value.page,v.page==1&&(d.value=[]),v.first_row&&delete v.first_row,v.page>1&&(v.first_row=JSON.stringify(d.value[0]));const{data:r,error:s,status:w}=await j("/api/transactions",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:v,retry:0});if(k().loading_full=!1,p.value.may_get_data=!0,w.value==="error"){V().trigger(s);return}p.value.page==1?(d.value=r.value.data,q.value&&(q.value.scrollTop=0)):p.value.page>1&&(d.value=[...d.value,...r.value.data]),r.value.data.length==0&&(p.value.is_last_record=!0)},I=async()=>{if(!p.value.may_get_data)return;let r=q.value;if(r.scrollLeft!=p.value.scrollLeft){p.value.scrollLeft=r.scrollLeft;return}p.value.is_last_record||!(Math.round(r.scrollTop)+r.clientHeight>=r.scrollHeight-1)||(p.value.page++,await F())},C=()=>{p.value.page=1,p.value.is_last_record=!1,P(),F()},M=He(),U=()=>{M.push({name:"data_transaksi-form",query:{id:""}})},{display:B}=oe();Le(oe());const K=()=>{u.value==-1?B({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):M.push({name:"data_transaksi-form",query:{id:d.value[u.value].id}})},l=()=>{u.value==-1?B({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):M.push({name:"data_transaksi-confirm",query:{id:d.value[u.value].id}})},o=()=>{M.push({name:"data_transaksi-request"})},a=i({}),b=i(!1),N=async()=>{b.value&&(b.value=!1)},z=()=>{u.value==-1?B({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(a.value={id:d.value[u.value].id},b.value=!0)},D=async()=>{k().loading_full=!0;const r=new FormData;r.append("id",d.value[u.value].id),r.append("_method","DELETE");const{data:s,error:w,status:E}=await j("/api/transaction",{method:"post",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:r,retry:0});if(k().loading_full=!1,E.value==="error"){V().trigger(w);return}d.value.splice(u.value,1),u.value=-1,b.value=!1},_=i(!1);return(r,s)=>{const w=xe,E=we,W=ge,de=$e,_e=Ce,me=De,fe=be,pe=ke,ve=ae,he=Se,ye=_t;return c(),f("div",mt,[y(w,{title:"List Transaction"}),e("div",ft,[e("div",pt,[e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:s[0]||(s[0]=n=>U())},[y(E)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:s[1]||(s[1]=n=>K())},[t(u)==-1||t(d)[t(u)].ref_id==null&&t(d)[t(u)].confirmed_by==null?(c(),le(W,{key:0})):(c(),le(de,{key:1}))]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:s[2]||(s[2]=n=>z())},[y(_e)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",disabled:t(u)==-1||t(d)[t(u)].confirmed_by,onClick:s[3]||(s[3]=n=>l())},[y(me)],8,vt),e("button",{type:"button",name:"button",class:"m-1 text-2xl relative",onClick:s[4]||(s[4]=n=>o())},[y(fe),e("div",ht,[t(O)>0?(c(),f("div",yt)):Oe("",!0)])]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:s[5]||(s[5]=n=>_.value=!0)},[y(pe)])]),e("form",xt,[e("div",wt,[gt,Z(e("input",{class:"",type:"text","onUpdate:modelValue":s[6]||(s[6]=n=>ue(h)?h.value=n:null),name:"search",placeholder:"Keyword"},null,512),[[ie,t(h)]])]),e("div",bt,[e("button",{class:"",type:"submit",name:"button",onClick:s[7]||(s[7]=re(n=>C(),["prevent"]))},[y(ve,{class:"text-2xl"})])])]),e("div",kt,[t(d).length==0?(c(),f("div",$t," Maaf Tidak Ada Record ")):(c(),f("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:q,onScroll:I},[e("table",Ct,[Dt,e("tbody",null,[(c(!0),f(R,null,H(t(d),(n,Y)=>{var Q,G,X,ee,te;return c(),f("tr",{key:Y,onClick:At=>u.value=Y,class:J(t(u)==Y?"active":"")},[e("td",Tt,m(n.id),1),e("td",null,m(n.input_at?t($)(n.input_at).format("DD-MM-Y"):""),1),e("td",null,m((Q=n.warehouse)==null?void 0:Q.name),1),e("td",null,m(n.note),1),e("td",null,m(n.status),1),e("td",null,m(n.type),1),e("td",null,m((G=n.warehouse_source)==null?void 0:G.name),1),e("td",null,m((X=n.warehouse_target)==null?void 0:X.name),1),e("td",null,m(n.confirmed_at?t($)(n.confirmed_at).format("DD-MM-Y HH:mm:ss"):""),1),e("td",null,m((ee=n.confirmer)==null?void 0:ee.username),1),e("td",null,m(t($)(n.requested_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,m((te=n.requester)==null?void 0:te.username),1)],10,St)}),128))])])],544))])]),y(he,{type:"delete",show:t(b),data:t(a),fnClose:N,fnConfirm:D},null,8,["show","data"]),y(ye,{show:t(_),fnClose:()=>{_.value=!1}},null,8,["show","fnClose"])])}}};export{Kt as default};
