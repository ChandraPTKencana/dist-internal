import{_ as Ve}from"./HeaderCustom.vue.7f050047.js";import{_ as pe}from"./Search.982b0cb5.js";import{_ as He}from"./Delete.97757850.js";import{_ as _e}from"./_plugin-vue_export-helper.c27b6911.js";import{o as n,c as i,a as e,n as me,r as v,g as se,Q as Ue,b as j,I as Q,J as oe,N as ae,t as m,B as t,K as W,P as $,q as he,z as B,M as ye,G as Se,A as ue,H as ne,d as ze,L as Ce,p as Ie,e as De,C as Y,D as de,u as Pe,s as Ke,v as Ee,x as Je,y as We,R as ke,S as Ye,T as $e}from"./entry.3aa42cdb.js";import{_ as Me}from"./Times.64d1dfba.js";import{_ as Qe}from"./InputPointFormat.vue.99ec0632.js";import{_ as Ge}from"./Plus.24a02891.js";import{_ as Te}from"./HeaderPopup.vue.610c6c20.js";import{u as Ae}from"./useUtils.100f5b4a.js";import{u as ce}from"./useMyFetch.96b527d1.js";const Xe={name:"TablerTools"},Ze={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},et=e("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[e("path",{d:"M3 21h4L20 8a1.5 1.5 0 0 0-4-4L3 17zM14.5 5.5l4 4"}),e("path",{d:"M12 8L7 3L3 7l5 5M7 8L5.5 9.5M16 12l5 5l-4 4l-5-5m4 1l-1.5 1.5"})],-1),tt=[et];function lt(o,a,p,S,k,h){return n(),i("svg",Ze,tt)}const st=_e(Xe,[["render",lt]]),je=function(o,a){o.value.addEventListener("touchstart",h,{passive:!0}),o.value.addEventListener("touchend",f,{passive:!0});let p=-1,S=null,k=0;function h(_){p=c(_.target),S=setInterval(()=>{k+=100},100)}function f(_){clearInterval(S);let l=_.changedTouches[0],r=-1;if(k>400){let u=document.elementFromPoint(l.clientX,l.clientY);r=c(u);let C=a.value[p];a.value.splice(p,1),a.value.splice(r,0,{...C})}k=0,p=-1}function c(_){return _?_.hasAttribute("data-index")?_.dataset.index:_.parentElement?c(_.parentElement):-1:-1}},ot={key:0,class:"flex items-center justify-center fixed top-0 left-0 z-10 p-3 w-full h-full bg-black bg-opacity-80"},at={class:"flex items-center max-w-xs w-full h-5/6 relative bg-white border-solid border-gray-600 border-2 p-3 flex-col"},nt={class:"absolute -top-7 right-0 py-1 px-2 bg-white border-solid border-2 border-gray-600 border-b-0 rounded-tl-md"},it={class:"w-full grow text-left mt-3 flex flex-col overflow-hidden"},rt=e("b",{class:"text-gray-600"},"Selected List:",-1),ut=["data-index","onDragstart","onDrop"],dt={class:"flex flex-row flex-wrap items-center"},ct={class:"p-1"},_t={class:"flex w-full justify-between mt-3"},ft=["disabled"],vt=me({__name:"PopupMiniMulti",props:{show:{type:Boolean,required:!0},data:{type:Object,required:!1,default:""},fnClose:{type:Function,required:!0},fnConfirm:{type:Function,required:!0},fnRemoveFromList:{type:Function,required:!0},enabledOk:{type:Boolean,required:!1,default:!0},multi_key:{type:Array,required:!0}},setup(o){const a=o;let p=null;const S=v(0),k=()=>{p==null&&(S.value=1,p=setInterval(()=>{S.value--,S.value<=0&&(clearInterval(p),p=null)},1e3))},h=v(null);se(()=>a.show,(_,l)=>{_?(k(),setTimeout(()=>{je(h,{value:a.data})},0)):(clearInterval(p),p=null)},{immediate:!0,deep:!0}),se(()=>a.enabledOk,(_,l)=>{_&&a.show&&k()},{immediate:!0,deep:!0}),Ue(()=>{clearInterval(p),p=null});const f=(_,l)=>{_.dataTransfer.setData("application/json",JSON.stringify(l))},c=(_,l)=>{let r=JSON.parse(_.dataTransfer.getData("application/json")),u=a.data[r];a.data.splice(r,1),a.data.splice(l,0,{...u})};return(_,l)=>{const r=Me;return o.show?(n(),i("div",ot,[e("div",at,[e("div",nt,[j(r,{class:"text-2xl text-black cursor-pointer",onClick:l[0]||(l[0]=u=>o.fnClose())})]),e("div",it,[rt,e("div",{class:"w-full grow overflow-auto p-2",ref_key:"to_move",ref:h},[(n(!0),i(Q,null,oe(o.data,(u,C)=>(n(),i("div",{"data-index":C,class:"w-full flex flex-row flex-wrap items-center bg-blue-500 my-1 text-white rounded justify-between",draggable:"true",onDragstart:D=>f(D,C),onDragover:l[1]||(l[1]=ae(()=>{},["prevent"])),onDrop:D=>c(D,C)},[e("div",dt,[(n(!0),i(Q,null,oe(o.multi_key,D=>(n(),i("div",ct,m(u[D]),1))),256))]),j(r,{class:"text-2xl cursor-pointer",onClick:D=>o.fnRemoveFromList(C)},null,8,["onClick"])],40,ut))),256))],512)]),e("div",_t,[e("button",{onClick:l[2]||(l[2]=u=>o.fnClose()),class:"w-full bg-blue-500 border-blue-500 border-solid border-2 p-1 text-white mr-2"}," Tutup "),e("button",{onClick:l[3]||(l[3]=u=>o.fnConfirm()),disabled:!a.enabledOk||t(S)>0,class:W(["w-full border-solid border-2 p-1 text-white",a.enabledOk&&t(S)<=0?"bg-red-600 border-red-600":"bg-slate-600 border-slate-600"])}," Lanjutkan "+m(t(S)>0?t(S):""),11,ft)])])])):$("",!0)}}});const O=o=>(Ie("data-v-d0674591"),o=o(),De(),o),pt={class:"box-fixed"},mt={action:"#",class:"w-full flex p-1"},ht={class:"grow"},yt=O(()=>e("div",{class:"font-bold"}," Keyword ",-1)),wt={class:"pl-1"},xt=O(()=>e("div",{class:"font-bold"}," Sort By ",-1)),gt=O(()=>e("option",{value:"created_at"},"Created At",-1)),bt=O(()=>e("option",{value:"id"},"ID",-1)),kt=O(()=>e("option",{value:"name"},"Nama",-1)),$t=[gt,bt,kt],St={class:"pl-1"},Ct=O(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),It=O(()=>e("option",{value:"asc"},"Asc",-1)),Dt=O(()=>e("option",{value:"desc"},"Desc",-1)),Mt=[It,Dt],Tt={class:"flex items-end pl-1"},At={class:"w-full flex justify-center items-center grow h-0 p-1"},jt={key:0,class:""},Nt={class:"tacky w-full"},qt={class:"sticky top-0 !z-[2]"},Lt={key:0,class:"min-w-[28px] !w-[28px] max-w-[28px]"},Ot=O(()=>e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No.",-1)),Bt=O(()=>e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"ID",-1)),Rt=O(()=>e("th",null,"Name",-1)),Ft=O(()=>e("th",null,"Unit",-1)),Vt=O(()=>e("th",{class:"min-w-[170px] !w-[170px] max-w-[170px]"},"Created At",-1)),Ht=O(()=>e("th",{class:"min-w-[170px] !w-[170px] max-w-[170px]"},"Updated At",-1)),Ut=["onClick"],zt={key:0},Pt=["checked","onClick"],Kt={class:"bold"},Et={class:"whitespace-normal break-words"},Jt={class:"flex",style:{"justify-content":"end",padding:"5px"}},Wt={key:0,class:"grow flex items-center"},Yt={__name:"items",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},fnSelectMulti:{type:Function,required:!1},enableMultiSelect:{type:Boolean,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1},multi_key:{type:Array,required:!1}},setup(o){const a=o,{$moment:p}=Ce(),{countClickListFn:S}=Ae(),k=he("token"),h=v([]),f=v(""),c=v({field:"created_at",by:"desc"}),_=v(-1),l=v({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),r={};r._TimeZoneOffset=new Date().getTimezoneOffset();const u=()=>{r.like="",f.value!=""&&(r.like=`id:%${f.value}%,name:%${f.value}%`),r.sort="",c.value.field&&(r.sort=c.value.field+":"+c.value.by)},C=v(null),D=async()=>{Y().loading_full=!0,l.value.may_get_data=!1,r.page=l.value.page,r.page==1&&(h.value=[]),a.exclude_lists&&(r.exclude_lists=JSON.stringify(a.exclude_lists)),r.first_row&&delete r.first_row,r.page>1&&(r.first_row=JSON.stringify(h.value[0]));const{data:w,error:x,status:g}=await ce("/api/items",{method:"get",headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},params:r,retry:0});if(Y().loading_full=!1,l.value.may_get_data=!0,g.value==="error"){de().trigger(x);return}l.value.page==1?(h.value=w.value.data,C.value&&(C.value.scrollTop=0)):l.value.page>1&&(h.value=[...h.value,...w.value.data]),w.value.data.length==0&&(l.value.is_last_record=!0)},ee=async()=>{if(!l.value.may_get_data)return;let w=C.value;if(w.scrollLeft!=l.value.scrollLeft){l.value.scrollLeft=w.scrollLeft;return}l.value.is_last_record||!(Math.round(w.scrollTop)+w.clientHeight>=w.scrollHeight-1)||(l.value.page++,await D())},z=()=>{l.value.page=1,l.value.is_last_record=!1,u(),D()},V=v(!1),q=v([]),P=()=>{a.enableMultiSelect?(a.fnSelectMulti(q.value),V.value=!1):_.value>-1?a.fnSelect(h.value[_.value]):a.fnSelect({id:"",name:""})},te=w=>{a.enableMultiSelect||S(w,()=>{_.value=w},P)},N=w=>{q.value.splice(w,1)},b=async()=>{V.value&&(V.value=!1)},H=w=>{const x=q.value.map(g=>g.id).indexOf(w.id);x===-1?q.value.push(w):q.value.splice(x,1)},G=w=>q.value.map(g=>g.id).indexOf(w.id)!==-1,M=v(null);let R=null;const ie=w=>{R&&clearTimeout(R),R=setTimeout(()=>{z()},500)};return se(()=>a.show,(w,x)=>{w==!0&&(q.value=[],z(),setTimeout(()=>{M.value.focus()},100))},{immediate:!0}),(w,x)=>{const g=Te,X=pe,re=vt;return n(),i(Q,null,[B(e("section",pt,[e("div",null,[j(g,{title:"Search And Select Item",fn:o.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",mt,[e("div",ht,[yt,B(e("input",{ref_key:"ref_keyword",ref:M,class:"",type:"text","onUpdate:modelValue":x[0]||(x[0]=T=>Se(f)?f.value=T:null),name:"search",placeholder:"Keyword",onKeyup:x[1]||(x[1]=T=>ie())},null,544),[[ue,t(f)]])]),e("div",wt,[xt,B(e("select",{class:"","onUpdate:modelValue":x[2]||(x[2]=T=>t(c).field=T)},$t,512),[[ne,t(c).field]])]),e("div",St,[Ct,B(e("select",{class:"","onUpdate:modelValue":x[3]||(x[3]=T=>t(c).by=T)},Mt,512),[[ne,t(c).by]])]),e("div",Tt,[e("button",{class:"",type:"submit",name:"button",onClick:x[4]||(x[4]=ae(T=>z(),["prevent"]))},[j(X,{class:"text-2xl"})])])]),e("div",At,[t(h).length==0?(n(),i("div",jt," Maaf Tidak Ada Record ")):(n(),i("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:C,onScroll:ee},[e("table",Nt,[e("thead",null,[e("tr",qt,[o.enableMultiSelect?(n(),i("th",Lt)):$("",!0),Ot,Bt,Rt,Ft,Vt,Ht])]),e("tbody",null,[(n(!0),i(Q,null,oe(t(h),(T,Z)=>(n(),i("tr",{key:Z,onClick:fe=>te(Z),class:W(t(_)==Z?"active":"")},[o.enableMultiSelect?(n(),i("td",zt,[e("input",{type:"checkbox",checked:G(T),class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",onClick:fe=>H(T)},null,8,Pt)])):$("",!0),e("td",null,m(Z+1)+".",1),e("td",Kt,m(T.id),1),e("td",Et,m(T.name),1),e("td",null,m(T.unit.name),1),e("td",null,m(t(p)(T.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,m(t(p)(T.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,Ut))),128))])])],544))]),e("div",Jt,[o.enableMultiSelect?(n(),i("div",Wt,[ze(" Selected Items: "+m(t(q).length)+" ",1),e("button",{type:"button",class:"ml-3",onClick:x[5]||(x[5]=T=>V.value=!0)}," View all Items ")])):$("",!0),e("button",{onClick:x[6]||(x[6]=T=>P()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512),[[ye,o.show]]),j(re,{show:t(V),data:t(q),fnClose:b,fnConfirm:P,multi_key:o.multi_key,fnRemoveFromList:N},null,8,["show","data","multi_key"])],64)}}},Qt=_e(Yt,[["__scopeId","data-v-d0674591"]]);const J=o=>(Ie("data-v-6030903a"),o=o(),De(),o),Gt={class:"box-fixed"},Xt={action:"#",class:"w-full flex p-1"},Zt={class:"grow"},el=J(()=>e("div",{class:"font-bold"}," Keyword ",-1)),tl={class:"pl-1"},ll=J(()=>e("div",{class:"font-bold"}," Sort By ",-1)),sl=J(()=>e("option",{value:"created_at"},"Created At",-1)),ol=J(()=>e("option",{value:"id"},"ID",-1)),al=J(()=>e("option",{value:"name"},"Nama",-1)),nl=[sl,ol,al],il={class:"pl-1"},rl=J(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),ul=J(()=>e("option",{value:"asc"},"Asc",-1)),dl=J(()=>e("option",{value:"desc"},"Desc",-1)),cl=[ul,dl],_l={class:"flex items-end pl-1"},fl={class:"w-full flex justify-center items-center grow h-0 p-1"},vl={key:0,class:""},pl={class:"tacky"},ml=J(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"ID"),e("th",null,"Name"),e("th",null,"Created At"),e("th",null,"Updated At")])],-1)),hl=["onClick"],yl={class:"bold"},wl={class:"flex",style:{"justify-content":"end",padding:"5px"}},xl={__name:"hrm_revisi_lokasis",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},opt:{type:String,required:!1},exclude:{type:Number,required:!1},exclude_lists:{type:Array,required:!1}},setup(o){const a=o,{$moment:p}=Ce(),{countClickListFn:S}=Ae(),k=he("token"),h=v([]),f=v(""),c=v({field:"created_at",by:"desc"}),_=v(-1),l=v({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),r={};r._TimeZoneOffset=new Date().getTimezoneOffset();const u=()=>{r.like="",f.value!=""&&(r.like=`id:%${f.value}%,name:%${f.value}%`),r.sort="",c.value.field&&(r.sort=c.value.field+":"+c.value.by)},C=v(null),D=async()=>{Y().loading_full=!0,l.value.may_get_data=!1,r.opt=a.opt,r.exclude=a.exclude,r.page=l.value.page,r.page==1&&(h.value=[]),r.first_row&&delete r.first_row,r.page>1&&(r.first_row=JSON.stringify(h.value[0]));const{data:N,error:b,status:H}=await ce("/api/hrm_revisi_lokasis",{method:"get",headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},params:r,retry:0});if(Y().loading_full=!1,l.value.may_get_data=!0,H.value==="error"){de().trigger(b);return}l.value.page==1?(h.value=N.value.data,C.value&&(C.value.scrollTop=0)):l.value.page>1&&(h.value=[...h.value,...N.value.data]),N.value.data.length==0&&(l.value.is_last_record=!0)},ee=async()=>{if(!l.value.may_get_data)return;let N=C.value;if(N.scrollLeft!=l.value.scrollLeft){l.value.scrollLeft=N.scrollLeft;return}l.value.is_last_record||!(Math.round(N.scrollTop)+N.clientHeight>=N.scrollHeight-1)||(l.value.page++,await D())},z=()=>{l.value.page=1,l.value.is_last_record=!1,u(),D()},V=()=>{_.value>-1?a.fnSelect(h.value[_.value]):a.fnSelect({id:"",name:""})},q=v(null);let P=null;const te=N=>{P&&clearTimeout(P),P=setTimeout(()=>{z()},500)};return se(()=>a.show,(N,b)=>{N==!0&&z(),setTimeout(()=>{q.value.focus()},100)},{immediate:!0}),(N,b)=>{const H=Te,G=pe;return B((n(),i("section",Gt,[e("div",null,[j(H,{title:"Search And Select Warehouse",fn:o.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",Xt,[e("div",Zt,[el,B(e("input",{ref_key:"ref_keyword",ref:q,class:"",type:"text","onUpdate:modelValue":b[0]||(b[0]=M=>Se(f)?f.value=M:null),name:"search",placeholder:"Keyword",onKeyup:b[1]||(b[1]=M=>te())},null,544),[[ue,t(f)]])]),e("div",tl,[ll,B(e("select",{class:"","onUpdate:modelValue":b[2]||(b[2]=M=>t(c).field=M)},nl,512),[[ne,t(c).field]])]),e("div",il,[rl,B(e("select",{class:"","onUpdate:modelValue":b[3]||(b[3]=M=>t(c).by=M)},cl,512),[[ne,t(c).by]])]),e("div",_l,[e("button",{class:"",type:"submit",name:"button",onClick:b[4]||(b[4]=ae(M=>z(),["prevent"]))},[j(G,{class:"text-2xl"})])])]),e("div",fl,[t(h).length==0?(n(),i("div",vl," Maaf Tidak Ada Record ")):(n(),i("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:C,onScroll:ee},[e("table",pl,[ml,e("tbody",null,[(n(!0),i(Q,null,oe(t(h),(M,R)=>(n(),i("tr",{key:R,onClick:ie=>t(S)(R,()=>{_.value=R},V),class:W(t(_)==R?"active":"")},[e("td",null,m(R+1)+".",1),e("td",yl,m(M.id),1),e("td",null,m(M.name),1),e("td",null,m(t(p)(M.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,m(t(p)(M.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,hl))),128))])])],544))]),e("div",wl,[e("button",{onClick:b[5]||(b[5]=M=>V()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[ye,o.show]])}}},gl=_e(xl,[["__scopeId","data-v-6030903a"]]),bl=me({__name:"ToolsPopup",props:{show:{type:Boolean,required:!0},coor:{type:Object,required:!1},fn:{type:Function,required:!0},only:{type:Object},data_index:{type:Number},data:{type:Array}},setup(o){const a=o,p=v(null),S=f=>{f.target.classList.contains("box")&&a.fn()};se(()=>a.coor,(f,c)=>{f&&p.value&&(p.value.style.left=f.left+"px",p.value.style.top=f.top+"px")},{immediate:!0,deep:!0});const k=()=>{let f=a.data[a.data_index];a.data.splice(a.data_index,1),a.data.splice(a.data_index-1,0,{...f}),a.fn()},h=()=>{let f=a.data[a.data_index];a.data.splice(a.data_index,1),a.data.splice(a.data_index+1,0,{...f}),a.fn()};return(f,c)=>B((n(),i("div",{class:"box",onClick:c[4]||(c[4]=_=>S(_))},[e("div",{ref_key:"popup",ref:p},[e("ul",null,[!o.only||o.only.length==0||o.only.indexOf("insert")>-1?(n(),i("li",{key:0,onClick:c[0]||(c[0]=_=>f.$emit("replyAct","insert"))},"Insert")):$("",!0),!o.only||o.only.length==0||o.only.indexOf("delete")>-1?(n(),i("li",{key:1,onClick:c[1]||(c[1]=_=>f.$emit("replyAct","delete"))},"Delete")):$("",!0),(!o.only||o.only.length==0||o.only.indexOf("moveTop")>-1)&&o.data_index!=0&&o.data.length>0?(n(),i("li",{key:2,onClick:c[2]||(c[2]=_=>k())},"Move Top")):$("",!0),(!o.only||o.only.length==0||o.only.indexOf("moveBottom")>-1)&&o.data_index!=o.data.length-1&&o.data.length>0?(n(),i("li",{key:3,onClick:c[3]||(c[3]=_=>h())},"Move Bottom")):$("",!0)])],512)],512)),[[ye,o.show]])}});const kl=_e(bl,[["__scopeId","data-v-e53ef9ec"]]),$l={class:"w-full h-full flex flex-col"},Sl={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},Cl={class:"w-full flex flex-col items-center justify-center grow overflow-auto"},Il={class:"w-full flex flex-row flex-wrap"},Dl={key:0,class:"w-full sm:w-4/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},Ml=e("label",{for:""},"Input At",-1),Tl={class:"card-border"},Al={class:"w-full flex flex-col flex-wrap p-1 sm:w-4/12 md:w-3/12 lg:w-2/12"},jl=e("label",{for:""},"Type",-1),Nl=["disabled"],ql=e("option",{value:"used"},"Used",-1),Ll=e("option",{value:"in"},"In",-1),Ol=e("option",{value:"transfer"},"Transfer",-1),Bl=[ql,Ll,Ol],Rl={class:"text-red-500"},Fl={class:"w-full sm:w-4/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},Vl=e("label",{for:""},"From Warehouse",-1),Hl={key:0,class:"w-full flex"},Ul=e("div",{class:"flex items-center grow p-1"}," Pilih Warehouse yang dikelola ",-1),zl={key:1,class:"w-full flex",style:{}},Pl={class:"flex flex-row flex-wrap grow"},Kl={class:"p-1"},El=e("div",{class:"text-sm text-gray-600"},"ID",-1),Jl={class:"bold"},Wl={class:"p-1"},Yl=e("div",{class:"text-sm text-gray-600"},"Name",-1),Ql={class:"bold"},Gl={class:"flex flex-row flex-wrap grow"},Xl={class:"p-1"},Zl=e("div",{class:"text-sm text-gray-600"},"ID",-1),es={class:"bold"},ts={class:"p-1"},ls=e("div",{class:"text-sm text-gray-600"},"Name",-1),ss={class:"bold"},os={class:"text-red-500"},as={key:1,class:"w-full sm:w-4/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},ns=e("label",{for:""},"To Warehouse",-1),is={key:0,class:"w-full flex"},rs=e("div",{class:"flex items-center grow p-1"}," Pilih Warehouse Target ",-1),us={key:1,class:"w-full flex",style:{}},ds={class:"flex flex-row flex-wrap grow"},cs={class:"p-1"},_s=e("div",{class:"text-sm text-gray-600"},"ID",-1),fs={class:"bold"},vs={class:"p-1"},ps=e("div",{class:"text-sm text-gray-600"},"Name",-1),ms={class:"bold"},hs={class:"text-red-500"},ys={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},ws=e("label",{for:""},"Note",-1),xs=["disabled"],gs={class:"text-red-500"},bs={class:"w-full flex grow p-1 overflow-auto"},ks={role:"sticky",ref:"loadRef"},$s={class:"tacky w-full",style:{"white-space":"normal"}},Ss={class:"sticky top-0 !z-[2]"},Cs={key:0,class:"min-w-[50px] !w-[50px] max-w-[50px]"},Is=e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No",-1),Ds={key:1,class:"min-w-[50px] !w-[50px] max-w-[50px]"},Ms=e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"ID Item",-1),Ts=e("th",null,"Nama Item",-1),As=e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty In",-1),js=e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty Out",-1),Ns=e("th",null,"Keterangan",-1),qs=["data-index","onDragstart","onDrop"],Ls={key:0,class:"tools cell"},Os={class:"w-full h-full flex items-center justify-center"},Bs=["onClick"],Rs={key:1,class:"cell"},Fs={class:"w-full h-full flex items-center justify-center"},Vs=["onClick"],Hs=["onClick","disabled"],Us={class:"w-full h-full flex items-center justify-center"},zs={class:"w-full h-full flex items-center justify-center"},Ps={class:"cell"},Ks={class:"w-full h-full flex items-center justify-center"},Es={class:"cell"},Js={class:"w-full h-full flex items-center justify-center"},Ws={class:"cell"},Ys={class:"w-full h-full flex items-center justify-center"},Qs=["disabled","onUpdate:modelValue","tabindex"],Gs={key:0},Xs={class:"tools cell"},Zs={class:"w-full flex items-center justify-end"},_o=me({__name:"form",async setup(o){var xe,ge,be;let a,p;Pe();const S=he("token"),k=v({}),h=Ke(),f=Ee();let c={id:"",name:""};const{data:_}=([a,p]=Je(async()=>We(async()=>{const d=f.query.id;let s=null,A=null,F=null;if(d!==void 0&&d!==""){Y().loading_full=!0;const{data:K,error:le,status:ve}=await ce("/api/transaction",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:{id:d},retry:0});Y().loading_full=!1,ve.value==="error"?de().trigger(le,k):(s=K.value.data,F=K.value.data.details.map(E=>(E.status="Edit",E.key=E.ordinal,E)),A=K.value.data.details.map(E=>E.item.id))}return{transaction:s,exclude_lists:A,details:F}},"$RAej7t9zIe")),a=await a,p(),a),l=v(((xe=_.value)==null?void 0:xe.transaction)||{id:-1,type:"used",note:"",warehouse:{...c},warehouse_target:{...c},details:[]}),r=v(((ge=_.value)==null?void 0:ge.exclude_lists)||[]),u=v(((be=_.value)==null?void 0:be.details)||[]),C=v({ordinal:0,item:{id:"",name:"",unit:{id:"",name:""}},item_id:"",qty_in:0,qty_out:0,note:"",status:""}),D=v(!1),ee=()=>{D.value=!1},z=d=>{u.value[g.value].item=d,u.value[g.value].item_id=d.id,r.value.push(d.id),D.value=!1},V=d=>{d.forEach(s=>{let A={...C.value,status:"Add"};A.item=s,A.item_id=s.id,r.value.push(s.id),u.value.push(A)}),D.value=!1},q=v(!1),P=(d,s)=>{g.value=s,q.value=!1,D.value=!0},te=(d,s)=>{q.value=!0,D.value=!0},N=(d,s)=>{let A=u.value[s].item.id,F=r.value.indexOf(A);F>-1&&r.value.splice(F,1),u.value[s].item_id="",u.value[s].item={id:"",name:"",unit:{id:"",name:""}}};let b=v(!1),H="";const G=d=>{d=="from"?l.value.warehouse={...c}:d=="to"&&(l.value.warehouse_target={...c})},M=d=>{H=d,b.value=!0},R=()=>{b.value=!1},ie=d=>{H=="from"?l.value.warehouse={...d}:H=="to"&&(l.value.warehouse_target={...d}),b.value=!1},w=async()=>{Y().loading_full=!0,k.value={};let d={type:l.value.type,note:l.value.note,warehouse_id:l.value.warehouse.id,warehouse_target_id:l.value.warehouse_target.id,details:JSON.stringify(u.value)},s="post",A=f.query.id;A===""||(s="put",d.id=A);const{data:F,error:K,status:le}=await ce("/api/transaction",{method:s,headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},body:d,retry:0});if(Y().loading_full=!1,le.value==="error"){de().trigger(K,k);return}h.go(-1)},x=ke(()=>{var d,s;return((d=l.value.warehouse)==null?void 0:d.id)||((s=l.value.warehouse_target)==null?void 0:s.id)||0}),g=v(-1),X=v(!1),re=v({left:0,top:0}),T=(d,s)=>{g.value=s,X.value=!0,re.value={left:d.clientX,top:d.clientY}},Z=()=>{u.value.push({...C.value,status:"Add"})},fe=()=>{X.value=!1},Ne=(d="")=>{if(d=="insert")u.value.splice(g.value,0,{...C.value,status:"Add"});else if(d=="delete"){let s=u.value[g.value].item.id,A=r.value.indexOf(s);A>-1&&r.value.splice(A,1),u.value[g.value].status=="Edit"?u.value[g.value].status="Remove":u.value.splice(g.value,1)}else if(d=="move_top"){let s=u.value[g.value];u.value.splice(g.value,1),u.value.splice(g.value-1,0,{...s})}else if(d=="move_bottom"){let s=u.value[g.value];u.value.splice(g.value,1),u.value.splice(g.value+1,0,{...s})}X.value=!1},I=ke(()=>l.value.confirmed_by||l.value.ref_id!=null),qe=(d,s)=>{d.dataTransfer.setData("application/json",JSON.stringify(s))},Le=(d,s)=>{let A=JSON.parse(d.dataTransfer.getData("application/json")),F=u.value[A];u.value.splice(A,1),u.value.splice(s,0,{...F})},we=v(null);return Ye(()=>{I.value||je(we,u)}),(d,s)=>{const A=Ve,F=pe,K=He,le=st,ve=Me,E=Qe,Oe=Ge,Be=Qt,Re=gl,Fe=kl;return n(),i(Q,null,[e("div",$l,[j(A,{title:"Form Transaksi",back:!0}),e("form",Sl,[e("div",Cl,[e("div",Il,[t(l).confirmed_by?(n(),i("div",Dl,[Ml,e("div",Tl,m(d.$moment(t(l).input_at).format("DD-MM-Y")),1)])):$("",!0),e("div",Al,[jl,B(e("select",{disabled:t(I),class:"","onUpdate:modelValue":s[0]||(s[0]=y=>t(l).type=y)},Bl,8,Nl),[[ne,t(l).type]]),e("p",Rl,m(t(k).type),1)]),e("div",Fl,[Vl,e("div",{class:W(["w-full flex flex-row flex-wrap",t(I)?"unselectable":""])},[!t(l).warehouse||!t(l).warehouse.id?(n(),i("div",Hl,[e("button",{type:"button",onClick:s[1]||(s[1]=y=>M("from")),class:"flex items-center grow"},[j(F,{class:"text-2xl text-black"}),Ul])])):t(l).ref_id==null?(n(),i("div",zl,[e("div",Pl,[e("div",Kl,[El,e("div",Jl,m(t(l).warehouse.id),1)]),e("div",Wl,[Yl,e("div",Ql,m(t(l).warehouse.name),1)])]),t(I)?$("",!0):(n(),i("button",{key:0,type:"button",class:"w-10 bg-red-600 flex items-center justify-center",onClick:s[2]||(s[2]=y=>G("from"))},[j(K,{class:"text-2xl text-white"})]))])):t(l).ref_id!=null?(n(),i("div",{key:2,class:W(["w-full flex",t(I)?"unselectable":""]),style:{}},[e("div",Gl,[e("div",Xl,[Zl,e("div",es,m(t(l).warehouse_source.id),1)]),e("div",ts,[ls,e("div",ss,m(t(l).warehouse_source.name),1)])]),t(I)?$("",!0):(n(),i("button",{key:0,type:"button",class:"w-10 bg-red-600 flex items-center justify-center",onClick:s[3]||(s[3]=y=>G("from"))},[j(K,{class:"text-2xl text-white"})]))],2)):$("",!0)],2),e("p",os,m(t(k).warehouse_id),1)]),t(l).type=="transfer"?(n(),i("div",as,[ns,e("div",{class:W(["w-full flex flex-row flex-wrap",t(I)?"unselectable":""])},[!t(l).warehouse_target||!t(l).warehouse_target.id?(n(),i("div",is,[e("button",{type:"button",onClick:s[4]||(s[4]=y=>M("to")),class:"flex items-center grow"},[j(F,{class:"text-2xl text-black"}),rs])])):(n(),i("div",us,[e("div",ds,[e("div",cs,[_s,e("div",fs,m(t(l).warehouse_target.id),1)]),e("div",vs,[ps,e("div",ms,m(t(l).warehouse_target.name),1)])]),t(I)?$("",!0):(n(),i("button",{key:0,type:"button",class:"w-10 bg-red-600 flex items-center justify-center",onClick:s[5]||(s[5]=y=>G("to"))},[j(K,{class:"text-2xl text-white"})]))]))],2),e("p",hs,m(t(k).warehouse_target_id),1)])):$("",!0),e("div",ys,[ws,B(e("textarea",{disabled:t(I),class:"","onUpdate:modelValue":s[6]||(s[6]=y=>t(l).note=y)},null,8,xs),[[ue,t(l).note]]),e("p",gs,m(t(k).note),1)])]),e("div",bs,[e("div",ks,[e("table",$s,[e("thead",null,[e("tr",Ss,[t(I)?$("",!0):(n(),i("th",Cs,[e("button",{type:"button",name:"button",class:"bg-yellow-600",onClick:s[7]||(s[7]=y=>te())}," Bulk Add ")])),Is,t(I)?$("",!0):(n(),i("th",Ds)),Ms,Ts,As,js,Ns])]),e("tbody",{ref_key:"to_move",ref:we},[(n(!0),i(Q,null,oe(t(u),(y,U)=>(n(),i(Q,{key:U},[y.status!="Remove"?(n(),i("tr",{key:0,"data-index":U,draggable:"true",onDragstart:L=>qe(L,U),onDragover:s[8]||(s[8]=ae(()=>{},["prevent"])),onDrop:L=>Le(L,U)},[t(I)?$("",!0):(n(),i("td",Ls,[e("div",Os,[e("button",{type:"button",name:"button",onClick:L=>T(L,U)},[j(le)],8,Bs)])])),e("td",null,m(U+1)+".",1),t(I)?$("",!0):(n(),i("td",Rs,[e("div",Fs,[y.item_id?(n(),i("button",{key:1,type:"button",onClick:L=>N(L,U),disabled:y.confirm_by},[j(ve,{class:"font-bold text-2xl"})],8,Hs)):(n(),i("button",{key:0,type:"button",name:"button",onClick:L=>P(L,U)}," ... ",8,Vs))])])),e("td",{class:W(["cell bold",t(I)?"unselectable":""])},[e("div",Us,m(y.item.id),1)],2),e("td",{class:W(["cell",t(I)?"unselectable":""])},[e("div",zs,m(y.item.name),1)],2),e("td",Ps,[e("div",Ks,[(n(),$e(E,{disabled:t(I)||t(l).type=="used"||t(l).type=="transfer",key:U,class:"w-full h-full p-1",type:"text",value:y.qty_in||0,onInput:L=>y.qty_in=L,tabindex:t(u).length*0+1},null,8,["disabled","value","onInput","tabindex"]))])]),e("td",Es,[e("div",Js,[(n(),$e(E,{disabled:t(I)||t(l).type=="in",key:U,class:"w-full h-full p-1",type:"text",value:y.qty_out||0,onInput:L=>y.qty_out=L,tabindex:t(u).length*1+1},null,8,["disabled","value","onInput","tabindex"]))])]),e("td",Ws,[e("div",Ys,[B(e("textarea",{disabled:t(I),class:"p-1 w-full","onUpdate:modelValue":L=>y.note=L,cols:"7",rows:"2",tabindex:t(u).length*2+1},null,8,Qs),[[ue,y.note]])])])],40,qs)):$("",!0)],64))),128)),t(I)?$("",!0):(n(),i("tr",Gs,[e("td",Xs,[e("button",{type:"button",name:"button",onClick:s[9]||(s[9]=y=>Z())},[j(Oe)])])]))],512)])],512)])]),e("div",Zs,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:s[10]||(s[10]=y=>d.$router.go(-1))}," Cancel "),t(I)?$("",!0):(n(),i("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:s[11]||(s[11]=ae(y=>w(),["prevent"]))}," Save "))])])]),j(Be,{show:t(D),fnClose:ee,fnSelect:z,fnSelectMulti:V,exclude_lists:t(r),enableMultiSelect:t(q),multi_key:["id","name"]},null,8,["show","exclude_lists","enableMultiSelect"]),j(Re,{show:t(b),fnClose:R,fnSelect:ie,opt:t(H),exclude:t(x)},null,8,["show","opt","exclude"]),j(Fe,{show:t(X),coor:t(re),fn:fe,data:t(u),data_index:t(g),onReplyAct:s[12]||(s[12]=y=>Ne(y))},null,8,["show","coor","data","data_index"])],64)}}});export{_o as default};
