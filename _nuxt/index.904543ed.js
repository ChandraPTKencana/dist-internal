import we from"./Header.acc267e9.js";import je from"./Copy.fc5223c3.js";import De from"./Plus.38fd4da2.js";import Ce from"./Edit.a858c751.js";import Se from"./Eyes.fc6dbbdf.js";import Ae from"./Delete.2c4678cb.js";import Pe from"./Signature.f37bb43f.js";import $e from"./Line.4b12949a.js";import Oe from"./Check.acc088f2.js";import Te from"./TableView.49280b57.js";import{_ as Be}from"./PopupMini.vue.40767eb2.js";import Ie from"./ujalan.663e88ea.js";import Me from"./ujalan_validasi.74ebb5a9.js";import{r as n,f as Y,g as Ne,h as Ue,i as x,j as q,s as Fe,x as v,c as y,b as i,a as d,k as Z,v as He,l,m as G,n as w,w as $,q as Ve,y as U,o as u,z as O,d as Q,t as Ee,A as ze}from"./entry.a19beef1.js";import{u as p}from"./useUtils.2ea1120c.js";import{u as F}from"./useMyFetch.03b76c40.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Search.91522e26.js";import"./Adjust.45f11f5e.js";import"./TableHeaderEye.b569a1f3.js";import"./Times.0158b2c2.js";import"./ClearAll.39d53814.js";import"./client-only.96efd4f4.js";import"./ClearEach.7e3187f7.js";import"./CaretLeftDoubleBold.94d831d5.js";import"./CaretLeftBold.20792e68.js";import"./CaretRightBold.83aee31e.js";import"./CaretRightDoubleBold.59e6e405.js";import"./Exclamation.191b1b93.js";import"./HeaderPopup.vue.404bf79e.js";import"./Tools.0d73c471.js";import"./InputPointFormat.vue.8bf50bf7.js";import"./ToolsPopup.85856604.js";import"./ac_accs.fbc52748.js";const Le={class:"w-full h-full flex flex-col"},Je={class:"w-full flex grow flex-col overflow-auto h-0"},Re={class:"w-full flex justify-between flex-wrap"},Ke={class:"grow flex"},Ye={class:"m-1"},qe=d("option",{value:"available"},"Available",-1),Ze=d("option",{value:"unapprove"},"Unapprove",-1),Ge=d("option",{value:"deleted"},"Trash",-1),Qe=d("option",{value:"all"},"All",-1),We=[qe,Ze,Ge,Qe],Xe={class:"grow mb-5"},Mt={__name:"index",async setup(et){let S,H;const W=t=>t.deleted==1?"!bg-red-400":t.val==0||t.val1==0?"!bg-gray-300":"",m=n("available");Y(()=>m.value,t=>{z()},{immediate:!1});const r={};r._TimeZoneOffset=new Date().getTimezoneOffset(),r.sort="tanggal:desc";const V=n({}),T=Ne("token"),{data:X}=([S,H]=Ue(async()=>Ve(async()=>{v().loading_full=!0;let t=[];const[e,h]=await Promise.all([F("/ujalan",{method:"get",headers:{Authorization:`Bearer ${T.value}`,Accept:"application/json"},params:{filter_status:m},retry:0})]);return e.status.value!=="error"&&(t=e.data.value.data),e.status.value==="error"?(U().trigger(e.error),{ujalans:t}):(v().loading_full=!1,{ujalans:t})},"$SN3C927rLk")),S=await S,H(),S),s=n(X.value.ujalans||[]),B=n({field:"tanggal",by:"desc"}),a=n(-1),f=x(()=>s.value[a.value]),_=n({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),ee=()=>{r.like="";let t=JSON.parse(JSON.stringify(v()._tv.global_keyword));t!=""&&(r.like=`id:%${t}%,xto:%${t}%,tipe:%${t}%,jenis:%${t}%,harga:%${t}%`),r.sort="",B.value.field&&(r.sort=B.value.field+":"+B.value.by),r.filter_model=JSON.stringify(v()._tv.filter_model)},E=async()=>{v().loading_full=!0,V.value={},_.value.may_get_data=!1,r.page=_.value.page,r.page==1&&(s.value=[]),r.first_row&&delete r.first_row,r.page>1&&(r.first_row=JSON.stringify(s.value[0])),r.filter_status=m.value;const{data:t,error:e,status:h}=await F("/ujalan",{method:"get",headers:{Authorization:`Bearer ${T.value}`,Accept:"application/json"},params:r,retry:0});if(v().loading_full=!1,_.value.may_get_data=!0,h.value==="error"){U().trigger(e,V);return}_.value.page==1?s.value=t.value.data:_.value.page>1&&(s.value=[...s.value,...t.value.data]),t.value.data.length==0&&(_.value.is_last_record=!0),v()._tv.filter_box=!1},z=()=>{a.value=-1,_.value.page=1,_.value.is_last_record=!1,ee(),E()},j=n(!1),A=n(0),b=n(0),g=n(!1),te=()=>{A.value=0,g.value=!1,b.value=!1,j.value=!0},{display:D}=q();Fe(q());const ae=()=>{a.value==-1?D({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(A.value=s.value[a.value].id,g.value=!1,b.value=!1,j.value=!0)},le=()=>{a.value==-1?D({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(A.value=s.value[a.value].id,g.value=!1,b.value=!0,j.value=!0)},P=n(!1),I=n(0),oe=()=>{a.value==-1?D({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(I.value=s.value[a.value].id,g.value=!1,b.value=!1,P.value=!0)},se=()=>{a.value==-1?D({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(I.value=s.value[a.value].id,g.value=!0,b.value=!1,P.value=!0)},M=n(!1),L=n({}),C=n(!1),k=n(""),ne=async()=>{C.value&&(C.value=!1)},re=()=>{a.value==-1?D({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(k.value="",L.value={id:s.value[a.value].id,tujuan:s.value[a.value].xto},C.value=!0)};Y(()=>k.value,t=>{t.trim().length>0?M.value=!0:M.value=!1},{immediate:!1});const ie=async()=>{v().loading_full=!0;const t=new FormData;t.append("id",s.value[a.value].id),t.append("deleted_reason",k.value),t.append("_method","DELETE");const{data:e,error:h,status:N}=await F("/ujalan",{method:"post",headers:{Authorization:`Bearer ${T.value}`,Accept:"application/json"},body:t,retry:0});if(v().loading_full=!1,N.value==="error"){U().trigger(h);return}let c={...s.value[a.value]};c.deleted=e.value.deleted,c.deleted_user=e.value.deleted_user,c.deleted_at=e.value.deleted_at,c.deleted_by=e.value.deleted_by,c.deleted_reason=e.value.deleted_reason,m.value!="all"?s.value.splice(a.value,1):s.value.splice(a.value,1,{...c}),a.value=-1,C.value=!1},ue=n([{key:"no",label:"No",isai:!0},{key:"val",label:"App 1",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val1",label:"App 2",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"id",label:"ID",filter_on:1,type:"number"},{key:"xto",label:"Tujuan",freeze:1,filter_on:1,type:"string"},{key:"asst_opt",label:"Info",filter_on:1,type:"string"},{key:"tipe",label:"Tipe",filter_on:1,type:"string"},{key:"jenis",label:"Jenis",filter_on:1,type:"select",select_item:["TBS","TBSK","CPO","PK","LAIN"]},{key:"harga",label:"Harga",class:" justify-end",type:"number"},{key:"note_for_remarks",label:"Ket.U.Remarks",filter_on:1,type:"string"},{key:"transition_from",label:"Pengalihan",filter_on:1,type:"select",select_item:v().list_pabrik},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"deleted_by_username",label:"Deleted By",tbl_show:1},{key:"deleted_at",label:"Deleted At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1,tbl_show:1},{key:"deleted_reason",label:"Deleted Reason",tbl_show:1,type:"string",filter_on:1}]),de=x(()=>a.value>-1&&[void 0,0].indexOf(f.value.deleted)>-1&&p().checkPermission("ujalan.create")),_e=x(()=>["available","all","unapprove"].indexOf(m.value)>-1&&p().checkPermission("ujalan.create")),ve=x(()=>a.value>-1&&[void 0,0].indexOf(f.value.deleted)>-1&&(p().checkPermission("ujalan.val")&&[void 0,0].indexOf(f.value.val)>-1||p().checkPermission("ujalan.val1")&&[void 0,0].indexOf(f.value.val1)>-1)&&p().checkPermissions(["ujalan.modify","ujalan.detail.modify","ujalan.detail2.modify"])),me=x(()=>a.value>-1&&[void 0,0].indexOf(f.value.deleted)>-1&&(p().checkPermission("ujalan.val")&&[void 0,0].indexOf(f.value.val)>-1||p().checkPermission("ujalan.val1")&&[void 0,0].indexOf(f.value.val1)>-1)),fe=x(()=>a.value>-1&&p().checkPermission("ujalan.remove")&&[void 0,0].indexOf(f.value.deleted)>-1);return(t,e)=>{const h=we,N=je,c=De,ce=Ce,pe=Se,ye=Ae,be=Pe,J=$e,R=Oe,ge=Te,ke=Be,he=Ie,xe=Me;return u(),y("div",Le,[i(h,{title:"List Ujalan"}),d("div",Je,[d("div",Re,[d("div",Ke,[d("div",Ye,[Z(d("select",{class:"","onUpdate:modelValue":e[0]||(e[0]=o=>G(m)?m.value=o:null)},We,512),[[He,l(m)]])]),l(de)?(u(),y("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[1]||(e[1]=o=>le())},[i(N)])):w("",!0),l(_e)?(u(),y("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[2]||(e[2]=o=>te())},[i(c)])):w("",!0),l(ve)?(u(),y("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[3]||(e[3]=o=>ae())},[i(ce)])):w("",!0),l(a)>-1?(u(),y("button",{key:3,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[4]||(e[4]=o=>se())},[i(pe)])):w("",!0),l(fe)?(u(),y("button",{key:4,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[5]||(e[5]=o=>re())},[i(ye)])):w("",!0),l(me)?(u(),y("button",{key:5,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[6]||(e[6]=o=>oe())},[i(be)])):w("",!0)])]),i(ge,{thead:l(ue),selected:l(a),onSetSelected:e[7]||(e[7]=o=>a.value=o),tbody:l(s),fnCallData:E,scrolling:l(_),onSetScrollingPage:e[8]||(e[8]=o=>l(_).page=o),onDoFilter:e[9]||(e[9]=o=>z()),rowBgColor:W},{val:$(({item:o})=>[o.val?(u(),O(R,{key:1})):(u(),O(J,{key:0}))]),val1:$(({item:o})=>[o.val1?(u(),O(R,{key:1})):(u(),O(J,{key:0}))]),deleted_by_username:$(({item:o})=>{var K;return[Q(Ee((K=o.deleted_by)==null?void 0:K.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling"])]),i(ke,{type:"delete",show:l(C),data:l(L),fnClose:ne,fnConfirm:ie,enabledOk:l(M)},{footer:$(()=>[Q(" Masukkan Alasan Penghapusan: "),d("div",Xe,[Z(d("textarea",{"onUpdate:modelValue":e[10]||(e[10]=o=>G(k)?k.value=o:null)},null,512),[[ze,l(k)]])])]),_:1},8,["show","data","enabledOk"]),i(he,{show:l(j),fnClose:()=>{j.value=!1},id:l(A),p_data:l(s),is_copy:l(b)},null,8,["show","fnClose","id","p_data","is_copy"]),i(xe,{show:l(P),fnClose:()=>{P.value=!1},id:l(I),p_data:l(s),is_view:l(g)},null,8,["show","fnClose","id","p_data","is_view"])])}}};export{Mt as default};