import Ke from"./Header.acc267e9.js";import Ge from"./Plus.38fd4da2.js";import Je from"./Eyes.fc6dbbdf.js";import We from"./Delete.2c4678cb.js";import Ze from"./Void.c6d6c965.js";import Qe from"./Signature.f37bb43f.js";import Xe from"./PrinterEye.653e0aa8.js";import et from"./Image.e4ba3919.js";import tt from"./Line.4b12949a.js";import at from"./Check.acc088f2.js";import lt from"./TableView.49280b57.js";import{_ as ot}from"./PopupMini.vue.40767eb2.js";import nt from"./trx_trp.7c6e697f.js";import rt from"./trx_trp_validasi.5e45c3eb.js";import st from"./trx_absen.30500e9e.js";import{r as _,f as Q,g as it,h as _t,i as j,j as dt,x as p,c as k,b as h,a as x,k as X,v as ut,l,m as ee,n as b,d as g,E as pt,t as w,w as u,q as vt,y as T,o as s,z as m,A as me,H as ct,G as mt}from"./entry.a19beef1.js";import{u as y}from"./useUtils.2ea1120c.js";import{u as S}from"./useMyFetch.03b76c40.js";import{u as ft}from"./useDownload.174f4da2.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Search.91522e26.js";import"./Adjust.45f11f5e.js";import"./TableHeaderEye.b569a1f3.js";import"./Times.0158b2c2.js";import"./ClearAll.39d53814.js";import"./client-only.96efd4f4.js";import"./ClearEach.7e3187f7.js";import"./CaretLeftDoubleBold.94d831d5.js";import"./CaretLeftBold.20792e68.js";import"./CaretRightBold.83aee31e.js";import"./CaretRightDoubleBold.59e6e405.js";import"./Exclamation.191b1b93.js";import"./HeaderPopup.vue.404bf79e.js";import"./WidthMiniList.vue.73704754.js";import"./WidthMiniPart.vue.0fe8acca.js";const yt={class:"w-full h-full flex flex-col"},kt={class:"w-full flex grow flex-col overflow-auto h-0"},bt={class:"w-full flex justify-between flex-wrap"},gt={class:"grow flex"},ht={class:"m-1"},xt=ct('<option value="pv_not_done">Undone</option><option value="pv_done">Done</option><option value="deleted">Trash</option><option value="all">All</option><option value="req_deleted">Req Delete</option>',5),wt=[xt],Dt={class:"flex"},Pt=x("span",{class:"text-xs"},"Mode",-1),At={key:0},$t={class:"w-full flex flex-col items-center justify-center"},qt={key:2,class:"text-xs"},Ct={key:0},Ot={key:0},jt={class:"grow mb-5"},Tt=x("b",null,"tidak dapat dibatalkan lagi",-1),St={class:"grow mb-5"},ya={__name:"index",async setup(Nt){let R,te;const{$moment:ae}=mt(),{pointFormat:fe}=y(),L=e=>e.deleted==1?"!bg-red-400":e.pvr_id>0&&e.req_deleted==1?"!bg-yellow-300":e.absen_not_done&&e.absen_not_done.length>0?"!bg-gray-300":e.pv_id>0?"!bg-blue-300":"",Y=e=>(e.map(a=>{a.class_h=L(a)}),e),P=_("pv_not_done");Q(()=>P.value,e=>{pe.value.map(a=>{let v=["deleted_by_username","deleted_at","deleted_reason","req_deleted_by_username","req_deleted_at","req_deleted_reason"].indexOf(a.key)>-1;return["all","deleted","req_deleted"].indexOf(e)>-1?v&&(a.tbl_show=1):v&&(a.tbl_show=0),a}),re()},{immediate:!1});const f={};f._TimeZoneOffset=new Date().getTimezoneOffset(),f.sort="tanggal:desc";const le=_({}),V=_({from:"",to:""}),A=it("token"),{data:ye}=([R,te]=_t(async()=>vt(async()=>{p().loading_full=!0;let e=[];const[a,v]=await Promise.all([S("/trx_trps",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:{filter_status:P},retry:0})]);return a.status.value!=="error"&&(e=Y(a.data.value.data)),a.status.value==="error"?(T().trigger(a.error),{trx_trps:e}):(p().loading_full=!1,{trx_trps:e})},"$pFLmKcrKj9")),R=await R,te(),R),n=_(ye.value.trx_trps||[]),oe=_([]),N=_(!1),ke=async()=>{p().loading_full=!0;const{data:e,error:a,status:v}=await S("/trx_load_cost_center",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:{online_status:N.value},retry:0});if(p().loading_full=!1,v.value==="error"){T().trigger(a);return}oe.value=e.value.list_cost_center},z=_({field:"tanggal",by:"desc"}),o=_(-1),d=j(()=>n.value[o.value]),D=_({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),be=()=>{f.like="";let e=JSON.parse(JSON.stringify(p()._tv.global_keyword));e!=""&&(f.like=`id:%${e}%,xto:%${e}%,jenis:%${e}%,pv_no:%${e}%,ticket_a_no:%${e}%,ticket_b_no:%${e}%,no_pol:%${e}%,supir:%${e}%,kernet:%${e}%,cost_center_code:%${e}%,cost_center_desc:%${e}%,pvr_no:%${e}%,tanggal:%${e}%,transition_target:%${e}%,uj_asst_opt:%${e}%`),f.sort="",z.value.field&&(f.sort=z.value.field+":"+z.value.by),f.date_from=V.value.from?ae(V.value.from).format("YYYY-MM-DD"):"",f.date_to=V.value.to?ae(V.value.to).format("YYYY-MM-DD"):"",f.filter_model=JSON.stringify(p()._tv.filter_model)},ne=async()=>{p().loading_full=!0,le.value={},D.value.may_get_data=!1,f.page=D.value.page,f.page==1&&(n.value=[]),f.first_row&&delete f.first_row,f.page>1&&(f.first_row=JSON.stringify(n.value[0])),f.filter_status=P.value;const{data:e,error:a,status:v}=await S("/trx_trps",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:f,retry:0});if(p().loading_full=!1,D.value.may_get_data=!0,v.value==="error"){T().trigger(a,le);return}D.value.page==1?n.value=Y(e.value.data):D.value.page>1&&(n.value=[...n.value,...Y(e.value.data)]),e.value.data.length==0&&(D.value.is_last_record=!0),p()._tv.filter_box=!1},re=()=>{o.value=-1,D.value.page=1,D.value.is_last_record=!1,be(),ne()},H=_(!1),se=_(0),ge=()=>{se.value=0,H.value=!0},{display:M}=dt(),I=_(!1),K=_(0),G=_(!1),he=()=>{o.value==-1?M({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(K.value=n.value[o.value].id,I.value=!0,G.value=!1)},xe=()=>{o.value==-1?M({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(K.value=n.value[o.value].id,I.value=!0,G.value=!0)},J=_(!1),ie=_(0),we=e=>{ie.value=e,J.value=!0},W=_(!1),_e=_({}),E=_(!1),U=_(""),De=async()=>{E.value&&(E.value=!1)},Pe=()=>{o.value==-1?M({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(U.value="",_e.value={id:n.value[o.value].id,"no pol":n.value[o.value].no_pol,tujuan:n.value[o.value].xto},E.value=!0)};Q(()=>U.value,e=>{e.trim().length>0?W.value=!0:W.value=!1},{immediate:!1});const Ae=async()=>{p().loading_full=!0;const e=new FormData;e.append("id",n.value[o.value].id),e.append("deleted_reason",U.value),e.append("_method","DELETE");const{data:a,error:v,status:$}=await S("/trx_trp",{method:"post",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},body:e,retry:0});if(p().loading_full=!1,$.value==="error"){T().trigger(v);return}let r={...n.value[o.value]};r.deleted=a.value.deleted,r.deleted_user=a.value.deleted_user,r.deleted_at=a.value.deleted_at,r.deleted_by=a.value.deleted_by,r.deleted_reason=a.value.deleted_reason,r.class_h=L(r),P.value!="all"?n.value.splice(o.value,1):n.value.splice(o.value,1,{...r}),o.value=-1,E.value=!1},Z=_(!1),de=_({}),F=_(!1),B=_(""),$e=async()=>{F.value&&(F.value=!1)},qe=()=>{o.value==-1?M({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(B.value="",de.value={id:n.value[o.value].id,"no pol":n.value[o.value].no_pol,tujuan:n.value[o.value].xto},F.value=!0)};Q(()=>B.value,e=>{e.trim().length>0?Z.value=!0:Z.value=!1},{immediate:!1});const Ce=async()=>{p().loading_full=!0;const e=new FormData;e.append("id",n.value[o.value].id),e.append("req_deleted_reason",B.value),e.append("_method","DELETE");const{data:a,error:v,status:$}=await S("/trx_trp_req_delete",{method:"post",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},body:e,retry:0});if(p().loading_full=!1,$.value==="error"){T().trigger(v);return}let r={...n.value[o.value]};r.req_deleted=a.value.req_deleted,r.req_deleted_user=a.value.req_deleted_user,r.req_deleted_by=a.value.req_deleted_by,r.req_deleted_at=a.value.req_deleted_at,r.req_deleted_reason=a.value.req_deleted_reason,r.class_h=L(r),P.value!="all"?n.value.splice(o.value,1):n.value.splice(o.value,1,{...r}),o.value=-1,F.value=!1},{printHtml:ue}=ft(),Oe=async()=>{if(o.value==-1){M({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"});return}p().loading_full=!0;const{data:e,error:a,status:v}=await S("/trx_trp_preview_file",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:{id:n.value[o.value].id},retry:0});if(p().loading_full=!1,v.value==="error"){T().trigger(a);return}ue(e.value.html,318)},je=async()=>{if(o.value==-1){M({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"});return}p().loading_full=!0;const{data:e,error:a,status:v}=await S("/trx_trp_preview_file_bt",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:{id:n.value[o.value].id},retry:0});if(p().loading_full=!1,v.value==="error"){T().trigger(a);return}ue(e.value.html,318)},Te=async()=>{p().loading_full=!0;const e=new FormData;e.append("online_status",N.value);const{data:a,error:v,status:$}=await S("/trx_trp_do_gen_pvr",{method:"post",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},body:e,retry:0});if(p().loading_full=!1,$.value==="error"){T().trigger(v);return}a.value.forEach(r=>{let q=n.value.map(c=>c.id).indexOf(r.id);if(q!==-1){let c=n.value[q];c.pvr_id=r.pvr_id,c.pvr_no=r.pvr_no,c.pvr_total=r.pvr_total,c.pvr_had_detail=r.pvr_had_detail,c.updated_at=r.updated_at,n.value.splice(q,1,{...c})}}),M({show:!0,status:"Success",message:"Generate Or Update PVR Done"})},Se=async()=>{p().loading_full=!0;const e=new FormData;e.append("online_status",N.value);const{data:a,error:v,status:$}=await S("/trx_trp_do_gen_pv",{method:"post",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},body:e,retry:0});if(p().loading_full=!1,$.value==="error"){T().trigger(v);return}a.value.forEach(r=>{let q=n.value.map(c=>c.id).indexOf(r.id);if(q!==-1){let c=n.value[q];c.pv_id=r.pv_id,c.pv_no=r.pv_no,c.pv_total=r.pv_total,c.pv_datetime=r.pv_datetime,c.pv_complete=r.pv_complete,c.updated_at=r.updated_at,n.value.splice(q,1,{...c})}}),M({show:!0,status:"Success",message:"Generate Or Update PV Done"})},pe=_([{key:"no",label:"No",isai:!0},{key:"val",label:"APP",childs:[{key:"val",label:"Kasir",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val1",label:"Mandor",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val2",label:"KTU/W",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val3",label:"Marketing",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val4",label:"Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val5",label:"SPV Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val6",label:"MGR Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]}]},{key:"id",label:"ID",filter_on:1,type:"number",sort:{priority:2,type:"desc"}},{key:"absen",label:"Absen"},{key:"tanggal",label:"U.Jalan Per",type:"date",dateformat:"DD-MM-Y",filter_on:1,sort:{priority:1,type:"desc"}},{key:"no_pol",label:"No Pol",freeze:1,filter_on:1,type:"string"},{key:"uj_xto",label:"Tujuan",filter_on:1,type:"string"},{key:"uj_asst_opt",label:"Info",filter_on:1,type:"select",select_item:["DENGAN KERNET","TANPA KERNET"]},{key:"uj_tipe",label:"Tipe",filter_on:1,type:"string"},{key:"jenis",label:"Jenis",filter_on:1,type:"select",select_item:["TBS","TBSK","CPO","PK","LAIN"]},{key:"uj_harga",label:"Amount",class:" justify-end",filter_on:1,type:"number"},{key:"transition",label:"Peralihan",childs:[{key:"transition_type",label:"Type",type:"select",filter_on:1,select_item:["To","From"]},{key:"transition_target",label:"Target",type:"select",filter_on:1,select_item:p().list_pabrik}]},{key:"cost_center",label:"Cost Center",childs:[{key:"cost_center_code",label:"Code",type:"string",class:" justify-start",filter_on:1},{key:"cost_center_desc",label:"Desc",filter_on:1,type:"string"}]},{key:"pvr",label:"PVR",childs:[{key:"pvr_no",label:"No",filter_on:1,type:"string"},{key:"pvr_total",label:"Total",filter_on:1,type:"number"},{key:"pvr_had_detail",label:"Completed",filter_on:1,type:"select",select_item:[{k:"1",v:"Completed"},{k:"0",v:"Uncompleted"}]}]},{key:"pv",label:"PV",childs:[{key:"pv_datetime",label:"Date",type:"date",dateformat:"DD-MM-Y",filter_on:1},{key:"pv_no",label:"No",filter_on:1,type:"string"},{key:"pv_total",label:"Total",filter_on:1,type:"number"},{key:"pv_complete",label:"Completed",filter_on:1,type:"select",select_item:[{k:"1",v:"Completed"},{k:"0",v:"Uncompleted"}]}]},{key:"supir",label:"Supir",filter_on:1,type:"string"},{key:"supir_rek_no",label:"No Rek Supir",filter_on:1,type:"string"},{key:"supir_rek_name",label:"Nama Rek Supir",filter_on:1,type:"string"},{key:"kernet",label:"Kernet",filter_on:1,type:"string"},{key:"kernet_rek_no",label:"No Rek Kernet",filter_on:1,type:"string"},{key:"kernet_rek_name",label:"Nama Rek Kernet",filter_on:1,type:"string"},{key:"payment_method_name",label:"Payment Method Name",type:"string"},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"deleted_by_username",label:"Deleted By",tbl_show:0},{key:"deleted_at",label:"Deleted At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"deleted_reason",label:"Deleted Reason",tbl_show:0,type:"string",filter_on:1},{key:"req_deleted_by_username",label:"Req Deleted By",tbl_show:0},{key:"req_deleted_at",label:"Req Delete At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"req_deleted_reason",label:"Req Delete Reason",tbl_show:0,type:"string",filter_on:1}]),Ne=j(()=>["pv_not_done","all"].indexOf(P.value)>-1&&y().checkPermission("trp_trx.create")),Me=j(()=>o.value>-1&&y().checkPermission("trp_trx.view"));j(()=>o.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&[void 0,0].indexOf(d.value.val4)>-1&&[void 0,""].indexOf(d.value.pvr_id)>-1&&y().checkPermission("trp_trx.modify"));const Ue=j(()=>o.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&([void 0,""].indexOf(d.value.pvr_id)>-1&&y().checkPermissions(["trp_trx.val","trp_trx.val1","trp_trx.val2"])||d.value.val3==0&&y().checkPermissions(["trp_trx.val3"])||d.value.val4==0&&y().checkPermissions(["trp_trx.val4"])||d.value.val5==0&&y().checkPermissions(["trp_trx.val5"])||d.value.val6==0&&y().checkPermissions(["trp_trx.val6"]))),Be=j(()=>o.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&[void 0,""].indexOf(d.value.pvr_id)>-1&&y().checkPermission("trp_trx.remove")),Ee=j(()=>o.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&d.value.pvr_id!=""&&y().checkPermission("trp_trx.request_remove")),Fe=j(()=>o.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&d.value.val==1&&y().checkPermission("trp_trx.preview_file")),Re=j(()=>o.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&d.value.payment_method_id==2&&d.value.received_payment==1&&y().checkPermission("trp_trx.preview_file"));return(e,a)=>{const v=Ke,$=Ge,r=Je,q=We,c=Ze,Ve=Qe,ve=Xe,Ie=et,C=tt,O=at,Le=lt,ce=ot,Ye=nt,ze=rt,He=st;return s(),k("div",yt,[h(v,{title:"List Transaction"}),x("div",kt,[x("div",bt,[x("div",gt,[x("div",ht,[X(x("select",{class:"","onUpdate:modelValue":a[0]||(a[0]=t=>ee(P)?P.value=t:null)},wt,512),[[ut,l(P)]])]),l(Ne)?(s(),k("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:a[1]||(a[1]=t=>ge())},[h($)])):b("",!0),l(Me)?(s(),k("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:a[2]||(a[2]=t=>xe())},[h(r)])):b("",!0),l(Be)?(s(),k("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:a[3]||(a[3]=t=>Pe())},[h(q)])):b("",!0),l(Ee)?(s(),k("button",{key:3,type:"button",name:"button",class:"m-1 text-2xl",onClick:a[4]||(a[4]=t=>qe())},[h(c)])):b("",!0),l(Ue)?(s(),k("button",{key:4,type:"button",name:"button",class:"m-1 text-2xl",onClick:a[5]||(a[5]=t=>he())},[h(Ve)])):b("",!0),l(Fe)?(s(),k("button",{key:5,type:"button",name:"button",class:"m-1 text-2xl",onClick:a[6]||(a[6]=t=>Oe())},[h(ve)])):b("",!0),l(Re)?(s(),k("button",{key:6,type:"button",name:"button",class:"m-1 text-2xl",onClick:a[7]||(a[7]=t=>je())},[h(ve)])):b("",!0)]),x("div",Dt,[("useUtils"in e?e.useUtils:l(y))().checkPermission("trp_trx.generate_pvr")?(s(),k("button",{key:0,type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:a[8]||(a[8]=t=>Te())}," Gen/Update PVR ")):b("",!0),("useUtils"in e?e.useUtils:l(y))().checkPermission("trp_trx.generate_pv")?(s(),k("button",{key:1,type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:a[9]||(a[9]=t=>Se())}," Gen/Update PV ")):b("",!0),("useUtils"in e?e.useUtils:l(y))().checkPermissions(["trp_trx.generate_pvr","trp_trx.generate_pv","trp_trx.get_pv"])?(s(),k("div",{key:2,class:"m-1 card-border cursor-pointer",onClick:a[10]||(a[10]=t=>N.value=!l(N))},[Pt,g(" : "),x("span",{class:pt(["font-bold",l(N)?"text-green-600":"text-red-600"])},w(l(N)?"ONLINE":"OFFLINE"),3)])):b("",!0)])]),h(Le,{thead:l(pe),selected:l(o),onSetSelected:a[11]||(a[11]=t=>o.value=t),tbody:l(n),fnCallData:ne,scrolling:l(D),onSetScrollingPage:a[12]||(a[12]=t=>l(D).page=t),onDoFilter:a[13]||(a[13]=t=>re())},{id:u(({item:t})=>[g(w(t.id),1),t.potongan&&t.potongan.length>0?(s(),k("span",At,"*")):b("",!0)]),absen:u(({item:t,index:i})=>[t.trx_absens&&t.trx_absens.length>0?(s(),m(Ie,{key:0,class:"cursor-pointer",onClick:Mt=>we(i)},null,8,["onClick"])):b("",!0)]),val:u(({item:t})=>[t.val?(s(),m(O,{key:1})):(s(),m(C,{key:0}))]),val1:u(({item:t})=>[x("div",$t,[t.val1?(s(),m(O,{key:1})):(s(),m(C,{key:0})),t.absen_not_done&&t.absen_not_done.length>0?(s(),k("div",qt,w(t.absen_not_done.join(",")),1)):b("",!0)])]),val2:u(({item:t})=>[t.val2?(s(),m(O,{key:1})):(s(),m(C,{key:0}))]),val3:u(({item:t})=>[t.val3?(s(),m(O,{key:1})):(s(),m(C,{key:0}))]),val4:u(({item:t})=>[t.val4?(s(),m(O,{key:1})):(s(),m(C,{key:0}))]),val5:u(({item:t})=>[t.val5?(s(),m(O,{key:1})):(s(),m(C,{key:0}))]),val6:u(({item:t})=>[t.val6?(s(),m(O,{key:1})):(s(),m(C,{key:0}))]),uj_xto:u(({item:t})=>{var i;return[g(w((i=t.uj)==null?void 0:i.xto),1)]}),uj_asst_opt:u(({item:t})=>{var i;return[g(w((i=t.uj)==null?void 0:i.asst_opt),1)]}),uj_tipe:u(({item:t})=>{var i;return[g(w((i=t.uj)==null?void 0:i.tipe),1)]}),uj_harga:u(({item:t})=>{var i;return[g(w(l(fe)((i=t.uj)==null?void 0:i.harga)),1)]}),payment_method_name:u(({item:t})=>{var i;return[g(w((i=t.payment_method)==null?void 0:i.name),1)]}),pvr_had_detail:u(({item:t})=>[t.pvr_had_detail?(s(),m(O,{key:1})):(s(),m(C,{key:0}))]),pv_complete:u(({item:t})=>[t.pv_complete?(s(),m(O,{key:1})):(s(),m(C,{key:0}))]),deleted_by_username:u(({item:t})=>{var i;return[g(w((i=t.deleted_by)==null?void 0:i.username),1)]}),req_deleted_by_username:u(({item:t})=>{var i;return[g(w((i=t.req_deleted_by)==null?void 0:i.username),1)]}),supir:u(({item:t})=>[g(w(t.supir)+" ",1),t.potongan&&t.potongan.length>0&&t.potongan.map(i=>i.potongan_mst.employee_id).indexOf(t.supir_id)>-1?(s(),k("span",Ct," * ")):b("",!0)]),kernet:u(({item:t})=>[g(w(t.kernet)+" ",1),t.potongan&&t.potongan.length>0&&t.potongan.map(i=>i.potongan_mst.employee_id).indexOf(t.kernet_id)>-1?(s(),k("span",Ot," * ")):b("",!0)]),_:2},1032,["thead","selected","tbody","scrolling"])]),h(ce,{type:"delete",show:l(E),data:l(_e),fnClose:De,fnConfirm:Ae,enabledOk:l(W)},{footer:u(()=>[g(" Masukkan Alasan Penghapusan: "),x("div",jt,[X(x("textarea",{"onUpdate:modelValue":a[14]||(a[14]=t=>ee(U)?U.value=t:null)},null,512),[[me,l(U)]])])]),_:1},8,["show","data","enabledOk"]),h(ce,{type:"custome",show:l(F),data:l(de),fnClose:$e,fnConfirm:Ce,enabledOk:l(Z)},{words:u(()=>[g(" Data akan diproses dan "),Tt,g(", yakin untuk melanjutkan ? ")]),footer:u(()=>[g(" Masukkan Alasan Permintaan Penghapusan: "),x("div",St,[X(x("textarea",{"onUpdate:modelValue":a[15]||(a[15]=t=>ee(B)?B.value=t:null)},null,512),[[me,l(B)]])])]),_:1},8,["show","data","enabledOk"]),h(Ye,{show:l(H),fnClose:()=>{H.value=!1},fnLoadDBData:ke,id:l(se),p_data:l(n),list_cost_center:l(oe),online_status:l(N)},null,8,["show","fnClose","id","p_data","list_cost_center","online_status"]),h(ze,{show:l(I),fnClose:()=>{I.value=!1},id:l(K),p_data:l(n),is_view:l(G)},null,8,["show","fnClose","id","p_data","is_view"]),h(He,{show:l(J),fnClose:()=>{J.value=!1},index:l(ie),p_data:l(n)},null,8,["show","fnClose","index","p_data"])])}}};export{ya as default};
