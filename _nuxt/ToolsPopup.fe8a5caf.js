import{_ as z}from"./_plugin-vue_export-helper.c27b6911.js";import{o as c,c as f,a as e,n as X,r as p,h as F,a9 as _e,b as j,I as H,J as R,N as Y,t as b,B as r,K as G,O,q as Q,z as T,M as Z,G as ee,A as te,H as K,d as ve,L as le,p as oe,e as se,C as U,D as ae}from"./entry.9c36b995.js";import{_ as ne}from"./HeaderPopup.vue.01af7e9a.js";import{_ as ie}from"./Search.6196817a.js";import{_ as pe}from"./Times.2e8271aa.js";import{u as re}from"./useUtils.100f5b4a.js";import{u as de}from"./useMyFetch.04c0a588.js";const me={name:"TablerTools"},ye={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},he=e("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[e("path",{d:"M3 21h4L20 8a1.5 1.5 0 0 0-4-4L3 17zM14.5 5.5l4 4"}),e("path",{d:"M12 8L7 3L3 7l5 5M7 8L5.5 9.5M16 12l5 5l-4 4l-5-5m4 1l-1.5 1.5"})],-1),ge=[he];function xe(t,l,d,y,$,u){return c(),f("svg",ye,ge)}const Pt=z(me,[["render",xe]]),we=function(t,l){t.value.addEventListener("touchstart",u,{passive:!0}),t.value.addEventListener("touchend",i,{passive:!0});let d=-1,y=null,$=0;function u(a){d=n(a.target),y=setInterval(()=>{$+=100},100)}function i(a){clearInterval(y);let o=a.changedTouches[0],s=-1;if($>400){let S=document.elementFromPoint(o.clientX,o.clientY);s=n(S);let g=l.value[d];l.value.splice(d,1),l.value.splice(s,0,{...g})}$=0,d=-1}function n(a){return a?a.hasAttribute("data-index")?a.dataset.index:a.parentElement?n(a.parentElement):-1:-1}},be={key:0,class:"flex items-center justify-center fixed top-0 left-0 z-10 p-3 w-full h-full bg-black bg-opacity-80"},ke={class:"flex items-center max-w-xs w-full h-5/6 relative bg-white border-solid border-gray-600 border-2 p-3 flex-col"},$e={class:"absolute -top-7 right-0 py-1 px-2 bg-white border-solid border-2 border-gray-600 border-b-0 rounded-tl-md"},Se={class:"w-full grow text-left mt-3 flex flex-col overflow-hidden"},Ce=e("b",{class:"text-gray-600"},"Selected List:",-1),Me=["data-index","onDragstart","onDrop"],De={class:"flex flex-row flex-wrap items-center"},Te={class:"p-1"},Le={class:"flex w-full justify-between mt-3"},Ie=["disabled"],Oe=X({__name:"PopupMiniMulti",props:{show:{type:Boolean,required:!0},data:{type:Object,required:!1,default:""},fnClose:{type:Function,required:!0},fnConfirm:{type:Function,required:!0},fnRemoveFromList:{type:Function,required:!0},enabledOk:{type:Boolean,required:!1,default:!0},multi_key:{type:Array,required:!0}},setup(t){const l=t;let d=null;const y=p(0),$=()=>{d==null&&(y.value=1,d=setInterval(()=>{y.value--,y.value<=0&&(clearInterval(d),d=null)},1e3))},u=p(null);F(()=>l.show,(a,o)=>{a?($(),setTimeout(()=>{we(u,{value:l.data})},0)):(clearInterval(d),d=null)},{immediate:!0,deep:!0}),F(()=>l.enabledOk,(a,o)=>{a&&l.show&&$()},{immediate:!0,deep:!0}),_e(()=>{clearInterval(d),d=null});const i=(a,o)=>{a.dataTransfer.setData("application/json",JSON.stringify(o))},n=(a,o)=>{let s=JSON.parse(a.dataTransfer.getData("application/json")),S=l.data[s];l.data.splice(s,1),l.data.splice(o,0,{...S})};return(a,o)=>{const s=pe;return t.show?(c(),f("div",be,[e("div",ke,[e("div",$e,[j(s,{class:"text-2xl text-black cursor-pointer",onClick:o[0]||(o[0]=S=>t.fnClose())})]),e("div",Se,[Ce,e("div",{class:"w-full grow overflow-auto p-2",ref_key:"to_move",ref:u},[(c(!0),f(H,null,R(t.data,(S,g)=>(c(),f("div",{"data-index":g,class:"w-full flex flex-row flex-wrap items-center bg-blue-500 my-1 text-white rounded justify-between",draggable:"true",onDragstart:C=>i(C,g),onDragover:o[1]||(o[1]=Y(()=>{},["prevent"])),onDrop:C=>n(C,g)},[e("div",De,[(c(!0),f(H,null,R(t.multi_key,C=>(c(),f("div",Te,b(S[C]),1))),256))]),j(s,{class:"text-2xl cursor-pointer",onClick:C=>t.fnRemoveFromList(g)},null,8,["onClick"])],40,Me))),256))],512)]),e("div",Le,[e("button",{onClick:o[2]||(o[2]=S=>t.fnClose()),class:"w-full bg-blue-500 border-blue-500 border-solid border-2 p-1 text-white mr-2"}," Tutup "),e("button",{onClick:o[3]||(o[3]=S=>t.fnConfirm()),disabled:!l.enabledOk||r(y)>0,class:G(["w-full border-solid border-2 p-1 text-white",l.enabledOk&&r(y)<=0?"bg-red-600 border-red-600":"bg-slate-600 border-slate-600"])}," Lanjutkan "+b(r(y)>0?r(y):""),11,Ie)])])])):O("",!0)}}});const k=t=>(oe("data-v-62dbf5e6"),t=t(),se(),t),Ae={class:"box-fixed"},qe={action:"#",class:"w-full flex p-1"},Ne={class:"grow"},je=k(()=>e("div",{class:"font-bold"}," Keyword ",-1)),Be={class:"pl-1"},Fe=k(()=>e("div",{class:"font-bold"}," Sort By ",-1)),He=k(()=>e("option",{value:"created_at"},"Created At",-1)),Ve=k(()=>e("option",{value:"id"},"ID",-1)),Re=k(()=>e("option",{value:"name"},"Nama",-1)),Ke=[He,Ve,Re],Ue={class:"pl-1"},ze=k(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),Ee=k(()=>e("option",{value:"asc"},"Asc",-1)),Pe=k(()=>e("option",{value:"desc"},"Desc",-1)),Je=[Ee,Pe],Ye={class:"flex items-end pl-1"},Ge={class:"w-full flex justify-center items-center grow h-0 p-1"},Ze={key:0,class:""},We={class:"tacky w-full"},Xe={class:"sticky top-0 !z-[2]"},Qe={key:0,class:"min-w-[28px] !w-[28px] max-w-[28px]"},et=k(()=>e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No.",-1)),tt=k(()=>e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"ID",-1)),lt=k(()=>e("th",null,"Name",-1)),ot=k(()=>e("th",null,"Unit",-1)),st=k(()=>e("th",{class:"min-w-[170px] !w-[170px] max-w-[170px]"},"Created At",-1)),at=k(()=>e("th",{class:"min-w-[170px] !w-[170px] max-w-[170px]"},"Updated At",-1)),nt=["onClick"],it={key:0},rt=["checked","onClick"],dt={class:"bold"},ut={class:"whitespace-normal break-words"},ct={class:"flex",style:{"justify-content":"end",padding:"5px"}},ft={key:0,class:"grow flex items-center"},_t={__name:"items",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},fnSelectMulti:{type:Function,required:!1},enableMultiSelect:{type:Boolean,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1},multi_key:{type:Array,required:!1}},setup(t){const l=t,{$moment:d}=le(),{countClickListFn:y}=re(),$=Q("token"),u=p([]),i=p(""),n=p({field:"created_at",by:"desc"}),a=p(-1),o=p({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),s={};s._TimeZoneOffset=new Date().getTimezoneOffset();const S=()=>{s.like="",i.value!=""&&(s.like=`id:%${i.value}%,name:%${i.value}%`),s.sort="",n.value.field&&(s.sort=n.value.field+":"+n.value.by)},g=p(null),C=async()=>{U().loading_full=!0,o.value.may_get_data=!1,s.page=o.value.page,s.page==1&&(u.value=[]),l.exclude_lists&&(s.exclude_lists=JSON.stringify(l.exclude_lists)),s.first_row&&delete s.first_row,s.page>1&&(s.first_row=JSON.stringify(u.value[0]));const{data:_,error:v,status:N}=await de("/api/items",{method:"get",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},params:s,retry:0});if(U().loading_full=!1,o.value.may_get_data=!0,N.value==="error"){ae().trigger(v);return}o.value.page==1?(u.value=_.value.data,g.value&&(g.value.scrollTop=0)):o.value.page>1&&(u.value=[...u.value,..._.value.data]),_.value.data.length==0&&(o.value.is_last_record=!0)},E=async()=>{if(!o.value.may_get_data)return;let _=g.value;if(_.scrollLeft!=o.value.scrollLeft){o.value.scrollLeft=_.scrollLeft;return}o.value.is_last_record||!(Math.round(_.scrollTop)+_.clientHeight>=_.scrollHeight-1)||(o.value.page++,await C())},A=()=>{o.value.page=1,o.value.is_last_record=!1,S(),C()},I=p(!1),M=p([]),q=()=>{l.enableMultiSelect?(l.fnSelectMulti(M.value),I.value=!1):a.value>-1?l.fnSelect(u.value[a.value]):l.fnSelect({id:"",name:""})},P=_=>{l.enableMultiSelect||y(_,()=>{a.value=_},q)},w=_=>{M.value.splice(_,1)},m=async()=>{I.value&&(I.value=!1)},B=_=>{const v=M.value.map(N=>N.id).indexOf(_.id);v===-1?M.value.push(_):M.value.splice(v,1)},J=_=>M.value.map(N=>N.id).indexOf(_.id)!==-1,x=p(null);let D=null;const W=_=>{D&&clearTimeout(D),D=setTimeout(()=>{A()},500)};return F(()=>l.show,(_,v)=>{_==!0&&(M.value=[],A(),setTimeout(()=>{x.value.focus()},100))},{immediate:!0}),(_,v)=>{const N=ne,ue=ie,ce=Oe;return c(),f(H,null,[T(e("section",Ae,[e("div",null,[j(N,{title:"Search And Select Item",fn:t.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",qe,[e("div",Ne,[je,T(e("input",{ref_key:"ref_keyword",ref:x,class:"",type:"text","onUpdate:modelValue":v[0]||(v[0]=h=>ee(i)?i.value=h:null),name:"search",placeholder:"Keyword",onKeyup:v[1]||(v[1]=h=>W())},null,544),[[te,r(i)]])]),e("div",Be,[Fe,T(e("select",{class:"","onUpdate:modelValue":v[2]||(v[2]=h=>r(n).field=h)},Ke,512),[[K,r(n).field]])]),e("div",Ue,[ze,T(e("select",{class:"","onUpdate:modelValue":v[3]||(v[3]=h=>r(n).by=h)},Je,512),[[K,r(n).by]])]),e("div",Ye,[e("button",{class:"",type:"submit",name:"button",onClick:v[4]||(v[4]=Y(h=>A(),["prevent"]))},[j(ue,{class:"text-2xl"})])])]),e("div",Ge,[r(u).length==0?(c(),f("div",Ze," Maaf Tidak Ada Record ")):(c(),f("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:g,onScroll:E},[e("table",We,[e("thead",null,[e("tr",Xe,[t.enableMultiSelect?(c(),f("th",Qe)):O("",!0),et,tt,lt,ot,st,at])]),e("tbody",null,[(c(!0),f(H,null,R(r(u),(h,V)=>(c(),f("tr",{key:V,onClick:fe=>P(V),class:G(r(a)==V?"active":"")},[t.enableMultiSelect?(c(),f("td",it,[e("input",{type:"checkbox",checked:J(h),class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",onClick:fe=>B(h)},null,8,rt)])):O("",!0),e("td",null,b(V+1)+".",1),e("td",dt,b(h.id),1),e("td",ut,b(h.name),1),e("td",null,b(h.unit.name),1),e("td",null,b(r(d)(h.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,b(r(d)(h.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,nt))),128))])])],544))]),e("div",ct,[t.enableMultiSelect?(c(),f("div",ft,[ve(" Selected Items: "+b(r(M).length)+" ",1),e("button",{type:"button",class:"ml-3",onClick:v[5]||(v[5]=h=>I.value=!0)}," View all Items ")])):O("",!0),e("button",{onClick:v[6]||(v[6]=h=>q()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512),[[Z,t.show]]),j(ce,{show:r(I),data:r(M),fnClose:m,fnConfirm:q,multi_key:t.multi_key,fnRemoveFromList:w},null,8,["show","data","multi_key"])],64)}}},Jt=z(_t,[["__scopeId","data-v-62dbf5e6"]]);const L=t=>(oe("data-v-b3a9923b"),t=t(),se(),t),vt={class:"box-fixed"},pt={action:"#",class:"w-full flex p-1"},mt={class:"grow"},yt=L(()=>e("div",{class:"font-bold"}," Keyword ",-1)),ht={class:"pl-1"},gt=L(()=>e("div",{class:"font-bold"}," Sort By ",-1)),xt=L(()=>e("option",{value:"created_at"},"Created At",-1)),wt=L(()=>e("option",{value:"id"},"ID",-1)),bt=L(()=>e("option",{value:"name"},"Nama",-1)),kt=[xt,wt,bt],$t={class:"pl-1"},St=L(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),Ct=L(()=>e("option",{value:"asc"},"Asc",-1)),Mt=L(()=>e("option",{value:"desc"},"Desc",-1)),Dt=[Ct,Mt],Tt={class:"flex items-end pl-1"},Lt={class:"w-full flex justify-center items-center grow h-0 p-1"},It={key:0,class:""},Ot={class:"tacky"},At=L(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"ID"),e("th",null,"Name"),e("th",null,"Created At"),e("th",null,"Updated At")])],-1)),qt=["onClick"],Nt={class:"bold"},jt={class:"flex",style:{"justify-content":"end",padding:"5px"}},Bt={__name:"hrm_revisi_lokasis",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},opt:{type:String,required:!1},exclude:{type:Number,required:!1},exclude_lists:{type:Array,required:!1}},setup(t){const l=t,{$moment:d}=le(),{countClickListFn:y}=re(),$=Q("token"),u=p([]),i=p(""),n=p({field:"created_at",by:"desc"}),a=p(-1),o=p({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),s={};s._TimeZoneOffset=new Date().getTimezoneOffset();const S=()=>{s.like="",i.value!=""&&(s.like=`id:%${i.value}%,name:%${i.value}%`),s.sort="",n.value.field&&(s.sort=n.value.field+":"+n.value.by)},g=p(null),C=async()=>{U().loading_full=!0,o.value.may_get_data=!1,s.opt=l.opt,s.exclude=l.exclude,s.page=o.value.page,s.page==1&&(u.value=[]),s.first_row&&delete s.first_row,s.page>1&&(s.first_row=JSON.stringify(u.value[0]));const{data:w,error:m,status:B}=await de("/api/hrm_revisi_lokasis",{method:"get",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},params:s,retry:0});if(U().loading_full=!1,o.value.may_get_data=!0,B.value==="error"){ae().trigger(m);return}o.value.page==1?(u.value=w.value.data,g.value&&(g.value.scrollTop=0)):o.value.page>1&&(u.value=[...u.value,...w.value.data]),w.value.data.length==0&&(o.value.is_last_record=!0)},E=async()=>{if(!o.value.may_get_data)return;let w=g.value;if(w.scrollLeft!=o.value.scrollLeft){o.value.scrollLeft=w.scrollLeft;return}o.value.is_last_record||!(Math.round(w.scrollTop)+w.clientHeight>=w.scrollHeight-1)||(o.value.page++,await C())},A=()=>{o.value.page=1,o.value.is_last_record=!1,S(),C()},I=()=>{a.value>-1?l.fnSelect(u.value[a.value]):l.fnSelect({id:"",name:""})},M=p(null);let q=null;const P=w=>{q&&clearTimeout(q),q=setTimeout(()=>{A()},500)};return F(()=>l.show,(w,m)=>{w==!0&&A(),setTimeout(()=>{M.value.focus()},100)},{immediate:!0}),(w,m)=>{const B=ne,J=ie;return T((c(),f("section",vt,[e("div",null,[j(B,{title:"Search And Select Warehouse",fn:t.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",pt,[e("div",mt,[yt,T(e("input",{ref_key:"ref_keyword",ref:M,class:"",type:"text","onUpdate:modelValue":m[0]||(m[0]=x=>ee(i)?i.value=x:null),name:"search",placeholder:"Keyword",onKeyup:m[1]||(m[1]=x=>P())},null,544),[[te,r(i)]])]),e("div",ht,[gt,T(e("select",{class:"","onUpdate:modelValue":m[2]||(m[2]=x=>r(n).field=x)},kt,512),[[K,r(n).field]])]),e("div",$t,[St,T(e("select",{class:"","onUpdate:modelValue":m[3]||(m[3]=x=>r(n).by=x)},Dt,512),[[K,r(n).by]])]),e("div",Tt,[e("button",{class:"",type:"submit",name:"button",onClick:m[4]||(m[4]=Y(x=>A(),["prevent"]))},[j(J,{class:"text-2xl"})])])]),e("div",Lt,[r(u).length==0?(c(),f("div",It," Maaf Tidak Ada Record ")):(c(),f("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:g,onScroll:E},[e("table",Ot,[At,e("tbody",null,[(c(!0),f(H,null,R(r(u),(x,D)=>(c(),f("tr",{key:D,onClick:W=>r(y)(D,()=>{a.value=D},I),class:G(r(a)==D?"active":"")},[e("td",null,b(D+1)+".",1),e("td",Nt,b(x.id),1),e("td",null,b(x.name),1),e("td",null,b(r(d)(x.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,b(r(d)(x.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,qt))),128))])])],544))]),e("div",jt,[e("button",{onClick:m[5]||(m[5]=x=>I()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[Z,t.show]])}}},Yt=z(Bt,[["__scopeId","data-v-b3a9923b"]]),Ft=X({__name:"ToolsPopup",props:{show:{type:Boolean,required:!0},coor:{type:Object,required:!1},fn:{type:Function,required:!0},only:{type:Object},data_index:{type:Number},data:{type:Array}},setup(t){const l=t,d=p(null),y=i=>{i.target.classList.contains("box")&&l.fn()};F(()=>l.coor,(i,n)=>{i&&d.value&&(d.value.style.left=i.left+"px",d.value.style.top=i.top+"px")},{immediate:!0,deep:!0});const $=()=>{let i=l.data[l.data_index];l.data.splice(l.data_index,1),l.data.splice(l.data_index-1,0,{...i}),l.fn()},u=()=>{let i=l.data[l.data_index];l.data.splice(l.data_index,1),l.data.splice(l.data_index+1,0,{...i}),l.fn()};return(i,n)=>T((c(),f("div",{class:"box",onClick:n[4]||(n[4]=a=>y(a))},[e("div",{ref_key:"popup",ref:d},[e("ul",null,[!t.only||t.only.length==0||t.only.indexOf("insert")>-1?(c(),f("li",{key:0,onClick:n[0]||(n[0]=a=>i.$emit("replyAct","insert"))},"Insert")):O("",!0),!t.only||t.only.length==0||t.only.indexOf("delete")>-1?(c(),f("li",{key:1,onClick:n[1]||(n[1]=a=>i.$emit("replyAct","delete"))},"Delete")):O("",!0),(!t.only||t.only.length==0||t.only.indexOf("moveTop")>-1)&&t.data_index!=0&&t.data.length>0?(c(),f("li",{key:2,onClick:n[2]||(n[2]=a=>$())},"Move Top")):O("",!0),(!t.only||t.only.length==0||t.only.indexOf("moveBottom")>-1)&&t.data_index!=t.data.length-1&&t.data.length>0?(c(),f("li",{key:3,onClick:n[3]||(n[3]=a=>u())},"Move Bottom")):O("",!0)])],512)],512)),[[Z,t.show]])}});const Gt=z(Ft,[["__scopeId","data-v-e53ef9ec"]]);export{Pt as _,Jt as a,Yt as b,Gt as c,we as u};
