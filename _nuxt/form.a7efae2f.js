import{_ as Re}from"./HeaderCustom.vue.caee1754.js";import{_ as ve}from"./Search.d395d940.js";import{_ as Fe}from"./Delete.295cfce4.js";import{_ as _e}from"./_plugin-vue_export-helper.c27b6911.js";import{o as a,c as i,a as e,n as me,r as p,g as le,Q as Ve,b as M,I as Q,J as oe,N as ae,t as v,B as t,K as E,P as k,q as he,z as B,M as ye,G as $e,A as de,H as ne,d as He,L as Se,p as Ce,e as Ie,C as Y,D as ue,u as Ue,s as ze,v as Pe,x as Ke,y as Je,R as ge,S as ke}from"./entry.65d99d9c.js";import{_ as De}from"./Times.9c66ec88.js";import{_ as We}from"./InputPointFormat.vue.3ccae135.js";import{_ as Ee}from"./Plus.eec5f35d.js";import{_ as Me}from"./HeaderPopup.vue.b2eede36.js";import{u as Te}from"./useUtils.100f5b4a.js";import{u as ce}from"./useMyFetch.d6a61055.js";const Ye={name:"TablerTools"},Qe={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Ze=e("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[e("path",{d:"M3 21h4L20 8a1.5 1.5 0 0 0-4-4L3 17zM14.5 5.5l4 4"}),e("path",{d:"M12 8L7 3L3 7l5 5M7 8L5.5 9.5M16 12l5 5l-4 4l-5-5m4 1l-1.5 1.5"})],-1),Ge=[Ze];function Xe(o,n,b,T,A,y){return a(),i("svg",Qe,Ge)}const et=_e(Ye,[["render",Xe]]),tt={key:0,class:"flex items-center justify-center fixed top-0 left-0 z-10 p-3 w-full h-full bg-black bg-opacity-80"},st={class:"flex items-center max-w-xs w-full h-5/6 relative bg-white border-solid border-gray-600 border-2 p-3 flex-col"},lt={class:"absolute -top-7 right-0 py-1 px-2 bg-white border-solid border-2 border-gray-600 border-b-0 rounded-tl-md"},ot={class:"w-full grow text-left mt-3 flex flex-col overflow-hidden"},at=e("b",{class:"text-gray-600"},"Selected List:",-1),nt={class:"w-full grow overflow-auto p-2"},it=["onDragstart","onDrop"],rt={class:"flex flex-row flex-wrap items-center"},dt={class:"p-1"},ut={class:"flex w-full justify-between mt-3"},ct=["disabled"],_t=me({__name:"PopupMiniMulti",props:{show:{type:Boolean,required:!0},data:{type:Object,required:!1,default:""},fnClose:{type:Function,required:!0},fnConfirm:{type:Function,required:!0},fnRemoveFromList:{type:Function,required:!0},enabledOk:{type:Boolean,required:!1,default:!0},multi_key:{type:Array,required:!0}},setup(o){const n=o;let b=null;const T=p(0),A=()=>{b==null&&(T.value=1,b=setInterval(()=>{T.value--,T.value<=0&&(clearInterval(b),b=null)},1e3))};le(()=>n.show,(d,_)=>{d?A():(clearInterval(b),b=null)},{immediate:!0,deep:!0}),le(()=>n.enabledOk,(d,_)=>{d&&n.show&&A()},{immediate:!0,deep:!0}),Ve(()=>{clearInterval(b),b=null});const y=(d,_)=>{d.dataTransfer.setData("application/json",JSON.stringify(_))},f=(d,_)=>{let s=JSON.parse(d.dataTransfer.getData("application/json")),r=n.data[s];n.data.splice(s,1),n.data.splice(_,0,{...r})};return(d,_)=>{const s=De;return o.show?(a(),i("div",tt,[e("div",st,[e("div",lt,[M(s,{class:"text-2xl text-black cursor-pointer",onClick:_[0]||(_[0]=r=>o.fnClose())})]),e("div",ot,[at,e("div",nt,[(a(!0),i(Q,null,oe(o.data,(r,c)=>(a(),i("div",{class:"w-full flex flex-row flex-wrap items-center bg-blue-500 my-1 text-white rounded justify-between",draggable:"true",onDragstart:$=>y($,c),onDragover:_[1]||(_[1]=ae(()=>{},["prevent"])),onDrop:$=>f($,c)},[e("div",rt,[(a(!0),i(Q,null,oe(o.multi_key,$=>(a(),i("div",dt,v(r[$]),1))),256))]),M(s,{class:"text-2xl cursor-pointer",onClick:$=>o.fnRemoveFromList(c)},null,8,["onClick"])],40,it))),256))])]),e("div",ut,[e("button",{onClick:_[2]||(_[2]=r=>o.fnClose()),class:"w-full bg-blue-500 border-blue-500 border-solid border-2 p-1 text-white mr-2"}," Tutup "),e("button",{onClick:_[3]||(_[3]=r=>o.fnConfirm()),disabled:!n.enabledOk||t(T)>0,class:E(["w-full border-solid border-2 p-1 text-white",n.enabledOk&&t(T)<=0?"bg-red-600 border-red-600":"bg-slate-600 border-slate-600"])}," Lanjutkan "+v(t(T)>0?t(T):""),11,ct)])])])):k("",!0)}}});const O=o=>(Ce("data-v-d0674591"),o=o(),Ie(),o),ft={class:"box-fixed"},pt={action:"#",class:"w-full flex p-1"},vt={class:"grow"},mt=O(()=>e("div",{class:"font-bold"}," Keyword ",-1)),ht={class:"pl-1"},yt=O(()=>e("div",{class:"font-bold"}," Sort By ",-1)),wt=O(()=>e("option",{value:"created_at"},"Created At",-1)),xt=O(()=>e("option",{value:"id"},"ID",-1)),bt=O(()=>e("option",{value:"name"},"Nama",-1)),gt=[wt,xt,bt],kt={class:"pl-1"},$t=O(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),St=O(()=>e("option",{value:"asc"},"Asc",-1)),Ct=O(()=>e("option",{value:"desc"},"Desc",-1)),It=[St,Ct],Dt={class:"flex items-end pl-1"},Mt={class:"w-full flex justify-center items-center grow h-0 p-1"},Tt={key:0,class:""},At={class:"tacky w-full"},jt={class:"sticky top-0 !z-[2]"},Nt={key:0,class:"min-w-[28px] !w-[28px] max-w-[28px]"},qt=O(()=>e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No.",-1)),Ot=O(()=>e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"ID",-1)),Lt=O(()=>e("th",null,"Name",-1)),Bt=O(()=>e("th",null,"Unit",-1)),Rt=O(()=>e("th",{class:"min-w-[170px] !w-[170px] max-w-[170px]"},"Created At",-1)),Ft=O(()=>e("th",{class:"min-w-[170px] !w-[170px] max-w-[170px]"},"Updated At",-1)),Vt=["onClick"],Ht={key:0},Ut=["checked","onClick"],zt={class:"bold"},Pt={class:"whitespace-normal break-words"},Kt={class:"flex",style:{"justify-content":"end",padding:"5px"}},Jt={key:0,class:"grow flex items-center"},Wt={__name:"items",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},fnSelectMulti:{type:Function,required:!1},enableMultiSelect:{type:Boolean,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1},multi_key:{type:Array,required:!1}},setup(o){const n=o,{$moment:b}=Se(),{countClickListFn:T}=Te(),A=he("token"),y=p([]),f=p(""),d=p({field:"created_at",by:"desc"}),_=p(-1),s=p({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),r={};r._TimeZoneOffset=new Date().getTimezoneOffset();const c=()=>{r.like="",f.value!=""&&(r.like=`id:%${f.value}%,name:%${f.value}%`),r.sort="",d.value.field&&(r.sort=d.value.field+":"+d.value.by)},$=p(null),L=async()=>{Y().loading_full=!0,s.value.may_get_data=!1,r.page=s.value.page,r.page==1&&(y.value=[]),n.exclude_lists&&(r.exclude_lists=JSON.stringify(n.exclude_lists)),r.first_row&&delete r.first_row,r.page>1&&(r.first_row=JSON.stringify(y.value[0]));const{data:h,error:w,status:x}=await ce("/api/items",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:r,retry:0});if(Y().loading_full=!1,s.value.may_get_data=!0,x.value==="error"){ue().trigger(w);return}s.value.page==1?(y.value=h.value.data,$.value&&($.value.scrollTop=0)):s.value.page>1&&(y.value=[...y.value,...h.value.data]),h.value.data.length==0&&(s.value.is_last_record=!0)},ee=async()=>{if(!s.value.may_get_data)return;let h=$.value;if(h.scrollLeft!=s.value.scrollLeft){s.value.scrollLeft=h.scrollLeft;return}s.value.is_last_record||!(Math.round(h.scrollTop)+h.clientHeight>=h.scrollHeight-1)||(s.value.page++,await L())},U=()=>{s.value.page=1,s.value.is_last_record=!1,c(),L()},V=p(!1),N=p([]),z=()=>{n.enableMultiSelect?(n.fnSelectMulti(N.value),V.value=!1):_.value>-1?n.fnSelect(y.value[_.value]):n.fnSelect({id:"",name:""})},te=h=>{n.enableMultiSelect||T(h,()=>{_.value=h},z)},j=h=>{N.value.splice(h,1)},g=async()=>{V.value&&(V.value=!1)},H=h=>{const w=N.value.map(x=>x.id).indexOf(h.id);w===-1?N.value.push(h):N.value.splice(w,1)},Z=h=>N.value.map(x=>x.id).indexOf(h.id)!==-1,S=p(null);let R=null;const ie=h=>{R&&clearTimeout(R),R=setTimeout(()=>{U()},500)};return le(()=>n.show,(h,w)=>{h==!0&&(N.value=[],U(),setTimeout(()=>{S.value.focus()},100))},{immediate:!0}),(h,w)=>{const x=Me,G=ve,re=_t;return a(),i(Q,null,[B(e("section",ft,[e("div",null,[M(x,{title:"Search And Select Item",fn:o.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",pt,[e("div",vt,[mt,B(e("input",{ref_key:"ref_keyword",ref:S,class:"",type:"text","onUpdate:modelValue":w[0]||(w[0]=C=>$e(f)?f.value=C:null),name:"search",placeholder:"Keyword",onKeyup:w[1]||(w[1]=C=>ie())},null,544),[[de,t(f)]])]),e("div",ht,[yt,B(e("select",{class:"","onUpdate:modelValue":w[2]||(w[2]=C=>t(d).field=C)},gt,512),[[ne,t(d).field]])]),e("div",kt,[$t,B(e("select",{class:"","onUpdate:modelValue":w[3]||(w[3]=C=>t(d).by=C)},It,512),[[ne,t(d).by]])]),e("div",Dt,[e("button",{class:"",type:"submit",name:"button",onClick:w[4]||(w[4]=ae(C=>U(),["prevent"]))},[M(G,{class:"text-2xl"})])])]),e("div",Mt,[t(y).length==0?(a(),i("div",Tt," Maaf Tidak Ada Record ")):(a(),i("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:$,onScroll:ee},[e("table",At,[e("thead",null,[e("tr",jt,[o.enableMultiSelect?(a(),i("th",Nt)):k("",!0),qt,Ot,Lt,Bt,Rt,Ft])]),e("tbody",null,[(a(!0),i(Q,null,oe(t(y),(C,X)=>(a(),i("tr",{key:X,onClick:fe=>te(X),class:E(t(_)==X?"active":"")},[o.enableMultiSelect?(a(),i("td",Ht,[e("input",{type:"checkbox",checked:Z(C),class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",onClick:fe=>H(C)},null,8,Ut)])):k("",!0),e("td",null,v(X+1)+".",1),e("td",zt,v(C.id),1),e("td",Pt,v(C.name),1),e("td",null,v(C.unit.name),1),e("td",null,v(t(b)(C.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,v(t(b)(C.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,Vt))),128))])])],544))]),e("div",Kt,[o.enableMultiSelect?(a(),i("div",Jt,[He(" Selected Items: "+v(t(N).length)+" ",1),e("button",{type:"button",class:"ml-3",onClick:w[5]||(w[5]=C=>V.value=!0)}," View all Items ")])):k("",!0),e("button",{onClick:w[6]||(w[6]=C=>z()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512),[[ye,o.show]]),M(re,{show:t(V),data:t(N),fnClose:g,fnConfirm:z,multi_key:o.multi_key,fnRemoveFromList:j},null,8,["show","data","multi_key"])],64)}}},Et=_e(Wt,[["__scopeId","data-v-d0674591"]]);const W=o=>(Ce("data-v-6030903a"),o=o(),Ie(),o),Yt={class:"box-fixed"},Qt={action:"#",class:"w-full flex p-1"},Zt={class:"grow"},Gt=W(()=>e("div",{class:"font-bold"}," Keyword ",-1)),Xt={class:"pl-1"},es=W(()=>e("div",{class:"font-bold"}," Sort By ",-1)),ts=W(()=>e("option",{value:"created_at"},"Created At",-1)),ss=W(()=>e("option",{value:"id"},"ID",-1)),ls=W(()=>e("option",{value:"name"},"Nama",-1)),os=[ts,ss,ls],as={class:"pl-1"},ns=W(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),is=W(()=>e("option",{value:"asc"},"Asc",-1)),rs=W(()=>e("option",{value:"desc"},"Desc",-1)),ds=[is,rs],us={class:"flex items-end pl-1"},cs={class:"w-full flex justify-center items-center grow h-0 p-1"},_s={key:0,class:""},fs={class:"tacky"},ps=W(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"ID"),e("th",null,"Name"),e("th",null,"Created At"),e("th",null,"Updated At")])],-1)),vs=["onClick"],ms={class:"bold"},hs={class:"flex",style:{"justify-content":"end",padding:"5px"}},ys={__name:"hrm_revisi_lokasis",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},opt:{type:String,required:!1},exclude:{type:Number,required:!1},exclude_lists:{type:Array,required:!1}},setup(o){const n=o,{$moment:b}=Se(),{countClickListFn:T}=Te(),A=he("token"),y=p([]),f=p(""),d=p({field:"created_at",by:"desc"}),_=p(-1),s=p({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),r={};r._TimeZoneOffset=new Date().getTimezoneOffset();const c=()=>{r.like="",f.value!=""&&(r.like=`id:%${f.value}%,name:%${f.value}%`),r.sort="",d.value.field&&(r.sort=d.value.field+":"+d.value.by)},$=p(null),L=async()=>{Y().loading_full=!0,s.value.may_get_data=!1,r.opt=n.opt,r.exclude=n.exclude,r.page=s.value.page,r.page==1&&(y.value=[]),r.first_row&&delete r.first_row,r.page>1&&(r.first_row=JSON.stringify(y.value[0]));const{data:j,error:g,status:H}=await ce("/api/hrm_revisi_lokasis",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:r,retry:0});if(Y().loading_full=!1,s.value.may_get_data=!0,H.value==="error"){ue().trigger(g);return}s.value.page==1?(y.value=j.value.data,$.value&&($.value.scrollTop=0)):s.value.page>1&&(y.value=[...y.value,...j.value.data]),j.value.data.length==0&&(s.value.is_last_record=!0)},ee=async()=>{if(!s.value.may_get_data)return;let j=$.value;if(j.scrollLeft!=s.value.scrollLeft){s.value.scrollLeft=j.scrollLeft;return}s.value.is_last_record||!(Math.round(j.scrollTop)+j.clientHeight>=j.scrollHeight-1)||(s.value.page++,await L())},U=()=>{s.value.page=1,s.value.is_last_record=!1,c(),L()},V=()=>{_.value>-1?n.fnSelect(y.value[_.value]):n.fnSelect({id:"",name:""})},N=p(null);let z=null;const te=j=>{z&&clearTimeout(z),z=setTimeout(()=>{U()},500)};return le(()=>n.show,(j,g)=>{j==!0&&U(),setTimeout(()=>{N.value.focus()},100)},{immediate:!0}),(j,g)=>{const H=Me,Z=ve;return B((a(),i("section",Yt,[e("div",null,[M(H,{title:"Search And Select Warehouse",fn:o.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",Qt,[e("div",Zt,[Gt,B(e("input",{ref_key:"ref_keyword",ref:N,class:"",type:"text","onUpdate:modelValue":g[0]||(g[0]=S=>$e(f)?f.value=S:null),name:"search",placeholder:"Keyword",onKeyup:g[1]||(g[1]=S=>te())},null,544),[[de,t(f)]])]),e("div",Xt,[es,B(e("select",{class:"","onUpdate:modelValue":g[2]||(g[2]=S=>t(d).field=S)},os,512),[[ne,t(d).field]])]),e("div",as,[ns,B(e("select",{class:"","onUpdate:modelValue":g[3]||(g[3]=S=>t(d).by=S)},ds,512),[[ne,t(d).by]])]),e("div",us,[e("button",{class:"",type:"submit",name:"button",onClick:g[4]||(g[4]=ae(S=>U(),["prevent"]))},[M(Z,{class:"text-2xl"})])])]),e("div",cs,[t(y).length==0?(a(),i("div",_s," Maaf Tidak Ada Record ")):(a(),i("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:$,onScroll:ee},[e("table",fs,[ps,e("tbody",null,[(a(!0),i(Q,null,oe(t(y),(S,R)=>(a(),i("tr",{key:R,onClick:ie=>t(T)(R,()=>{_.value=R},V),class:E(t(_)==R?"active":"")},[e("td",null,v(R+1)+".",1),e("td",ms,v(S.id),1),e("td",null,v(S.name),1),e("td",null,v(t(b)(S.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,v(t(b)(S.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,vs))),128))])])],544))]),e("div",hs,[e("button",{onClick:g[5]||(g[5]=S=>V()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[ye,o.show]])}}},ws=_e(ys,[["__scopeId","data-v-6030903a"]]),xs=me({__name:"ToolsPopup",props:{show:{type:Boolean,required:!0},coor:{type:Object,required:!1},fn:{type:Function,required:!0},only:{type:Object},data_index:{type:Number},data:{type:Array}},setup(o){const n=o,b=p(null),T=f=>{f.target.classList.contains("box")&&n.fn()};le(()=>n.coor,(f,d)=>{f&&b.value&&(b.value.style.left=f.left+"px",b.value.style.top=f.top+"px")},{immediate:!0,deep:!0});const A=()=>{let f=n.data[n.data_index];n.data.splice(n.data_index,1),n.data.splice(n.data_index-1,0,{...f}),n.fn()},y=()=>{let f=n.data[n.data_index];n.data.splice(n.data_index,1),n.data.splice(n.data_index+1,0,{...f}),n.fn()};return(f,d)=>B((a(),i("div",{class:"box",onClick:d[4]||(d[4]=_=>T(_))},[e("div",{ref_key:"popup",ref:b},[e("ul",null,[!o.only||o.only.length==0||o.only.indexOf("insert")>-1?(a(),i("li",{key:0,onClick:d[0]||(d[0]=_=>f.$emit("replyAct","insert"))},"Insert")):k("",!0),!o.only||o.only.length==0||o.only.indexOf("delete")>-1?(a(),i("li",{key:1,onClick:d[1]||(d[1]=_=>f.$emit("replyAct","delete"))},"Delete")):k("",!0),(!o.only||o.only.length==0||o.only.indexOf("moveTop")>-1)&&o.data_index!=0&&o.data.length>0?(a(),i("li",{key:2,onClick:d[2]||(d[2]=_=>A())},"Move Top")):k("",!0),(!o.only||o.only.length==0||o.only.indexOf("moveBottom")>-1)&&o.data_index!=o.data.length-1&&o.data.length>0?(a(),i("li",{key:3,onClick:d[3]||(d[3]=_=>y())},"Move Bottom")):k("",!0)])],512)],512)),[[ye,o.show]])}});const bs=_e(xs,[["__scopeId","data-v-e53ef9ec"]]),gs={class:"w-full h-full flex flex-col"},ks={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},$s={class:"w-full flex flex-col items-center justify-center grow overflow-auto"},Ss={class:"w-full flex flex-row flex-wrap"},Cs={key:0,class:"w-full sm:w-4/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},Is=e("label",{for:""},"Input At",-1),Ds={class:"card-border"},Ms={class:"w-full flex flex-col flex-wrap p-1 sm:w-4/12 md:w-3/12 lg:w-2/12"},Ts=e("label",{for:""},"Type",-1),As=["disabled"],js=e("option",{value:"used"},"Used",-1),Ns=e("option",{value:"in"},"In",-1),qs=e("option",{value:"transfer"},"Transfer",-1),Os=[js,Ns,qs],Ls={class:"text-red-500"},Bs={class:"w-full sm:w-4/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},Rs=e("label",{for:""},"From Warehouse",-1),Fs={class:"card-border flex flex-row flex-wrap"},Vs={key:0,class:"w-full flex"},Hs=e("div",{class:"flex items-center grow p-1"}," Pilih Warehouse yang dikelola ",-1),Us={class:"flex flex-row flex-wrap grow"},zs={class:"p-1"},Ps=e("div",{class:"text-sm text-gray-600"},"ID",-1),Ks={class:"bold"},Js={class:"p-1"},Ws=e("div",{class:"text-sm text-gray-600"},"Name",-1),Es={class:"bold"},Ys={class:"flex flex-row flex-wrap grow"},Qs={class:"p-1"},Zs=e("div",{class:"text-sm text-gray-600"},"ID",-1),Gs={class:"bold"},Xs={class:"p-1"},el=e("div",{class:"text-sm text-gray-600"},"Name",-1),tl={class:"bold"},sl={class:"text-red-500"},ll={key:1,class:"w-full sm:w-4/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},ol=e("label",{for:""},"To Warehouse",-1),al={class:"card-border flex flex-row flex-wrap"},nl={key:0,class:"w-full flex"},il=e("div",{class:"flex items-center grow p-1"}," Pilih Warehouse Target ",-1),rl={class:"flex flex-row flex-wrap grow"},dl={class:"p-1"},ul=e("div",{class:"text-sm text-gray-600"},"ID",-1),cl={class:"bold"},_l={class:"p-1"},fl=e("div",{class:"text-sm text-gray-600"},"Name",-1),pl={class:"bold"},vl={class:"text-red-500"},ml={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},hl=e("label",{for:""},"Note",-1),yl=["disabled"],wl={class:"text-red-500"},xl={class:"w-full flex grow p-1 overflow-auto"},bl={role:"sticky",ref:"loadRef"},gl={class:"tacky w-full",style:{"white-space":"normal"}},kl={class:"sticky top-0 !z-[2]"},$l={key:0,class:"min-w-[50px] !w-[50px] max-w-[50px]"},Sl=e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No",-1),Cl={key:1,class:"min-w-[50px] !w-[50px] max-w-[50px]"},Il=e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"ID Item",-1),Dl=e("th",null,"Nama Item",-1),Ml=e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty In",-1),Tl=e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty Out",-1),Al=e("th",null,"Keterangan",-1),jl=["onDragstart","onDrop"],Nl={key:0,class:"tools cell"},ql={class:"w-full h-full flex items-center justify-center"},Ol=["onClick"],Ll={key:1,class:"cell"},Bl={class:"w-full h-full flex items-center justify-center"},Rl=["onClick"],Fl=["onClick","disabled"],Vl={class:"w-full h-full flex items-center justify-center"},Hl={class:"w-full h-full flex items-center justify-center"},Ul={class:"cell"},zl={class:"w-full h-full flex items-center justify-center"},Pl={class:"cell"},Kl={class:"w-full h-full flex items-center justify-center"},Jl={class:"cell"},Wl={class:"w-full h-full flex items-center justify-center"},El=["disabled","onUpdate:modelValue","tabindex"],Yl={key:0},Ql={class:"tools cell"},Zl={class:"w-full flex items-center justify-end"},uo=me({__name:"form",async setup(o){var we,xe,be;let n,b;Ue();const T=he("token"),A=p({}),y=ze(),f=Pe();let d={id:"",name:""};const{data:_}=([n,b]=Ke(async()=>Je(async()=>{const u=f.query.id;let l=null,D=null,F=null;if(u!==void 0&&u!==""){Y().loading_full=!0;const{data:P,error:se,status:pe}=await ce("/api/transaction",{method:"get",headers:{Authorization:`Bearer ${T.value}`,Accept:"application/json"},params:{id:u},retry:0});Y().loading_full=!1,pe.value==="error"?ue().trigger(se,A):(l=P.value.data,F=P.value.data.details.map(K=>(K.status="Edit",K.key=K.ordinal,K)),D=P.value.data.details.map(K=>K.item.id))}return{transaction:l,exclude_lists:D,details:F}},"$RAej7t9zIe")),n=await n,b(),n),s=p(((we=_.value)==null?void 0:we.transaction)||{id:-1,type:"used",note:"",warehouse:{...d},warehouse_target:{...d},details:[]}),r=p(((xe=_.value)==null?void 0:xe.exclude_lists)||[]),c=p(((be=_.value)==null?void 0:be.details)||[]),$=p({ordinal:0,item:{id:"",name:"",unit:{id:"",name:""}},item_id:"",qty_in:0,qty_out:0,note:"",status:""}),L=p(!1),ee=()=>{L.value=!1},U=u=>{c.value[x.value].item=u,c.value[x.value].item_id=u.id,r.value.push(u.id),L.value=!1},V=u=>{u.forEach(l=>{let D={...$.value,status:"Add"};D.item=l,D.item_id=l.id,r.value.push(l.id),c.value.push(D)}),L.value=!1},N=p(!1),z=(u,l)=>{x.value=l,N.value=!1,L.value=!0},te=(u,l)=>{N.value=!0,L.value=!0},j=(u,l)=>{let D=c.value[l].item.id,F=r.value.indexOf(D);F>-1&&r.value.splice(F,1),c.value[l].item_id="",c.value[l].item={id:"",name:"",unit:{id:"",name:""}}};let g=p(!1),H="";const Z=u=>{u=="from"?s.value.warehouse={...d}:u=="to"&&(s.value.warehouse_target={...d})},S=u=>{H=u,g.value=!0},R=()=>{g.value=!1},ie=u=>{H=="from"?s.value.warehouse={...u}:H=="to"&&(s.value.warehouse_target={...u}),g.value=!1},h=async()=>{Y().loading_full=!0,A.value={};let u={type:s.value.type,note:s.value.note,warehouse_id:s.value.warehouse.id,warehouse_target_id:s.value.warehouse_target.id,details:JSON.stringify(c.value)},l="post",D=f.query.id;D===""||(l="put",u.id=D);const{data:F,error:P,status:se}=await ce("/api/transaction",{method:l,headers:{Authorization:`Bearer ${T.value}`,Accept:"application/json"},body:u,retry:0});if(Y().loading_full=!1,se.value==="error"){ue().trigger(P,A);return}y.go(-1)},w=ge(()=>{var u,l;return((u=s.value.warehouse)==null?void 0:u.id)||((l=s.value.warehouse_target)==null?void 0:l.id)||0}),x=p(-1),G=p(!1),re=p({left:0,top:0}),C=(u,l)=>{x.value=l,G.value=!0,re.value={left:u.clientX,top:u.clientY}},X=()=>{c.value.push({...$.value,status:"Add"})},fe=()=>{G.value=!1},Ae=(u="")=>{if(u=="insert")c.value.splice(x.value,0,{...$.value,status:"Add"});else if(u=="delete"){let l=c.value[x.value].item.id,D=r.value.indexOf(l);D>-1&&r.value.splice(D,1),c.value[x.value].status=="Edit"?c.value[x.value].status="Remove":c.value.splice(x.value,1)}else if(u=="move_top"){let l=c.value[x.value];c.value.splice(x.value,1),c.value.splice(x.value-1,0,{...l})}else if(u=="move_bottom"){let l=c.value[x.value];c.value.splice(x.value,1),c.value.splice(x.value+1,0,{...l})}G.value=!1},I=ge(()=>s.value.confirmed_by||s.value.ref_id!=null),je=(u,l)=>{u.dataTransfer.setData("application/json",JSON.stringify(l))},Ne=(u,l)=>{let D=JSON.parse(u.dataTransfer.getData("application/json")),F=c.value[D];c.value.splice(D,1),c.value.splice(l,0,{...F})};return(u,l)=>{const D=Re,F=ve,P=Fe,se=et,pe=De,K=We,qe=Ee,Oe=Et,Le=ws,Be=bs;return a(),i(Q,null,[e("div",gs,[M(D,{title:"Form Transaksi",back:!0}),e("form",ks,[e("div",$s,[e("div",Ss,[t(s).confirmed_by?(a(),i("div",Cs,[Is,e("div",Ds,v(u.$moment(t(s).input_at).format("DD-MM-Y")),1)])):k("",!0),e("div",Ms,[Ts,B(e("select",{disabled:t(I),class:"","onUpdate:modelValue":l[0]||(l[0]=m=>t(s).type=m)},Os,8,As),[[ne,t(s).type]]),e("p",Ls,v(t(A).type),1)]),e("div",Bs,[Rs,e("div",Fs,[!t(s).warehouse||!t(s).warehouse.id?(a(),i("div",Vs,[e("button",{type:"button",onClick:l[1]||(l[1]=m=>S("from")),class:"flex items-center grow"},[M(F,{class:"text-2xl text-black"}),Hs])])):t(s).ref_id==null?(a(),i("div",{key:1,class:E(["w-full flex",t(I)?"unselectable":""]),style:{}},[e("div",Us,[e("div",zs,[Ps,e("div",Ks,v(t(s).warehouse.id),1)]),e("div",Js,[Ws,e("div",Es,v(t(s).warehouse.name),1)])]),t(I)?k("",!0):(a(),i("button",{key:0,type:"button",class:"w-10 bg-red-600 flex items-center justify-center",onClick:l[2]||(l[2]=m=>Z("from"))},[M(P,{class:"text-2xl text-white"})]))],2)):t(s).ref_id!=null?(a(),i("div",{key:2,class:E(["w-full flex",t(I)?"unselectable":""]),style:{}},[e("div",Ys,[e("div",Qs,[Zs,e("div",Gs,v(t(s).warehouse_source.id),1)]),e("div",Xs,[el,e("div",tl,v(t(s).warehouse_source.name),1)])]),t(I)?k("",!0):(a(),i("button",{key:0,type:"button",class:"w-10 bg-red-600 flex items-center justify-center",onClick:l[3]||(l[3]=m=>Z("from"))},[M(P,{class:"text-2xl text-white"})]))],2)):k("",!0)]),e("p",sl,v(t(A).warehouse_id),1)]),t(s).type=="transfer"?(a(),i("div",ll,[ol,e("div",al,[!t(s).warehouse_target||!t(s).warehouse_target.id?(a(),i("div",nl,[e("button",{type:"button",onClick:l[4]||(l[4]=m=>S("to")),class:"flex items-center grow"},[M(F,{class:"text-2xl text-black"}),il])])):(a(),i("div",{key:1,class:E(["w-full flex",t(I)?"unselectable":""]),style:{}},[e("div",rl,[e("div",dl,[ul,e("div",cl,v(t(s).warehouse_target.id),1)]),e("div",_l,[fl,e("div",pl,v(t(s).warehouse_target.name),1)])]),t(I)?k("",!0):(a(),i("button",{key:0,type:"button",class:"w-10 bg-red-600 flex items-center justify-center",onClick:l[5]||(l[5]=m=>Z("to"))},[M(P,{class:"text-2xl text-white"})]))],2))]),e("p",vl,v(t(A).warehouse_target_id),1)])):k("",!0),e("div",ml,[hl,B(e("textarea",{disabled:t(I),class:"","onUpdate:modelValue":l[6]||(l[6]=m=>t(s).note=m)},null,8,yl),[[de,t(s).note]]),e("p",wl,v(t(A).note),1)])]),e("div",xl,[e("div",bl,[e("table",gl,[e("thead",null,[e("tr",kl,[t(I)?k("",!0):(a(),i("th",$l,[e("button",{type:"button",name:"button",class:"bg-yellow-600",onClick:l[7]||(l[7]=m=>te())}," Bulk Add ")])),Sl,t(I)?k("",!0):(a(),i("th",Cl)),Il,Dl,Ml,Tl,Al])]),e("tbody",null,[(a(!0),i(Q,null,oe(t(c),(m,J)=>(a(),i(Q,{key:J},[m.status!="Remove"?(a(),i("tr",{key:0,draggable:"true",onDragstart:q=>je(q,J),onDragover:l[8]||(l[8]=ae(()=>{},["prevent"])),onDrop:q=>Ne(q,J)},[t(I)?k("",!0):(a(),i("td",Nl,[e("div",ql,[e("button",{type:"button",name:"button",onClick:q=>C(q,J)},[M(se)],8,Ol)])])),e("td",null,v(J+1)+".",1),t(I)?k("",!0):(a(),i("td",Ll,[e("div",Bl,[m.item_id?(a(),i("button",{key:1,type:"button",onClick:q=>j(q,J),disabled:m.confirm_by},[M(pe,{class:"font-bold text-2xl"})],8,Fl)):(a(),i("button",{key:0,type:"button",name:"button",onClick:q=>z(q,J)}," ... ",8,Rl))])])),e("td",{class:E(["cell bold",t(I)?"unselectable":""])},[e("div",Vl,v(m.item.id),1)],2),e("td",{class:E(["cell",t(I)?"unselectable":""])},[e("div",Hl,v(m.item.name),1)],2),e("td",Ul,[e("div",zl,[(a(),ke(K,{disabled:t(I)||t(s).type=="used"||t(s).type=="transfer",key:J,class:"w-full h-full border-black border-solid border-1 p-1",type:"text",value:m.qty_in||0,onInput:q=>m.qty_in=q,tabindex:t(c).length*0+1},null,8,["disabled","value","onInput","tabindex"]))])]),e("td",Pl,[e("div",Kl,[(a(),ke(K,{disabled:t(I)||t(s).type=="in",key:J,class:"w-full h-full border-black border-solid border-1 p-1",type:"text",value:m.qty_out||0,onInput:q=>m.qty_out=q,tabindex:t(c).length*1+1},null,8,["disabled","value","onInput","tabindex"]))])]),e("td",Jl,[e("div",Wl,[B(e("textarea",{disabled:t(I),class:"border-black border-solid border-1 p-1 w-full","onUpdate:modelValue":q=>m.note=q,cols:"7",rows:"2",tabindex:t(c).length*2+1},null,8,El),[[de,m.note]])])])],40,jl)):k("",!0)],64))),128)),t(I)?k("",!0):(a(),i("tr",Yl,[e("td",Ql,[e("button",{type:"button",name:"button",onClick:l[9]||(l[9]=m=>X())},[M(qe)])])]))])])],512)])]),e("div",Zl,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:l[10]||(l[10]=m=>u.$router.go(-1))}," Cancel "),t(I)?k("",!0):(a(),i("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:l[11]||(l[11]=ae(m=>h(),["prevent"]))}," Save "))])])]),M(Oe,{show:t(L),fnClose:ee,fnSelect:U,fnSelectMulti:V,exclude_lists:t(r),enableMultiSelect:t(N),multi_key:["id","name"]},null,8,["show","exclude_lists","enableMultiSelect"]),M(Le,{show:t(g),fnClose:R,fnSelect:ie,opt:t(H),exclude:t(w)},null,8,["show","opt","exclude"]),M(Be,{show:t(G),coor:t(re),fn:fe,data:t(c),data_index:t(x),onReplyAct:l[12]||(l[12]=m=>Ae(m))},null,8,["show","coor","data","data_index"])],64)}}});export{uo as default};