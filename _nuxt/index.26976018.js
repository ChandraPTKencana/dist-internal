import Me from"./Header.1fd8a3ba.js";import je from"./Copy.7760421b.js";import Fe from"./Plus.c0c69210.js";import Ne from"./Edit.dce4344c.js";import Be from"./Eyes.da25c106.js";import Ie from"./Delete.39c4d9bf.js";import Ee from"./Signature.583615e8.js";import Ye from"./PrinterEye.4f143100.js";import He from"./Line.35bf4960.js";import Ve from"./Check.01cb2ea1.js";import ze from"./TableView.98b9fd7f.js";import{_ as Ue}from"./PopupMini.vue.c340a904.js";import qe from"./extra_money.bc1b35af.js";import Je from"./extra_money_validasi.d9373beb.js";import{r as s,f as X,g as Le,h as Re,i as x,j as ee,s as Ke,x as u,c as y,b as d,a as c,k as te,v as Ge,l,m as ae,n as k,w as C,q as Qe,y as j,o as _,z as F,d as V,t as le,A as Ze,G as We}from"./entry.622940e4.js";import{u as b}from"./useUtils.3d22bd33.js";import{u as N}from"./useMyFetch.83f6fc10.js";import{u as Xe}from"./useDownload.174f4da2.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Search.dc4ae93e.js";import"./Adjust.dcbba02e.js";import"./TableHeaderEye.669aa100.js";import"./Times.4935bce4.js";import"./ClearAll.7a606fcd.js";import"./client-only.e189025b.js";import"./ClearEach.7ad82d61.js";import"./CaretLeftDoubleBold.dcc301af.js";import"./CaretLeftBold.be2d89c6.js";import"./CaretRightBold.455205fd.js";import"./CaretRightDoubleBold.07819556.js";import"./Exclamation.3a10a9b9.js";import"./HeaderPopup.vue.01948059.js";import"./WidthMiniList.vue.03c3a04b.js";import"./WidthMiniPart.vue.8d7af79a.js";import"./InputPointFormat.vue.c8d291ec.js";const et={class:"w-full h-full flex flex-col"},tt={class:"w-full flex grow flex-col overflow-auto h-0"},at={class:"w-full flex justify-between flex-wrap"},lt={class:"grow flex"},ot={class:"m-1"},nt=c("option",{value:"available"},"Available",-1),st=c("option",{value:"unapprove"},"Unapprove",-1),rt=c("option",{value:"deleted"},"Trash",-1),it=c("option",{value:"all"},"All",-1),ut=[nt,st,rt,it],dt={class:"grow mb-5"},Rt={__name:"index",async setup(_t){let O,z;const{$moment:U}=We(),{pointFormat:oe}=b(),q=t=>t.deleted==1?"!bg-red-400":t.pv_id>0?"!bg-blue-300":"",B=t=>(t.map(e=>{e.class_h=q(e)}),t),p=s("available");X(()=>p.value,t=>{G.value.map(e=>{let m=["deleted_by_username","deleted_at","deleted_reason"].indexOf(e.key)>-1;return["all","deleted"].indexOf(t)>-1?m&&(e.tbl_show=1):m&&(e.tbl_show=0),e}),R()},{immediate:!1});const r={};r._TimeZoneOffset=new Date().getTimezoneOffset(),r.sort="tanggal:desc";const J=s({}),P=s({from:"",to:""}),S=Le("token"),{data:ne}=([O,z]=Re(async()=>Qe(async()=>{u().loading_full=!0;let t=[];const[e,m]=await Promise.all([N("/extra_moneys",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:{filter_status:p},retry:0})]);return e.status.value!=="error"&&(t=B(e.data.value.data)),e.status.value==="error"?(j().trigger(e.error),{extra_moneys:t}):(u().loading_full=!1,{extra_moneys:t})},"$pjdlE6mDqg")),O=await O,z(),O),n=s(ne.value.extra_moneys||[]),I=s({field:"tanggal",by:"desc"}),a=s(-1),i=x(()=>n.value[a.value]),v=s({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),se=()=>{r.like="";let t=JSON.parse(JSON.stringify(u()._tv.global_keyword));t!=""&&(r.like=`id:%${t}%,transition_target:%${t}%,transition_type:%${t}%,extra_money_name:%${t}%,extra_money_type:%${t}%,xto:%${t}%,transition_target:%${t}%`),r.sort="",I.value.field&&(r.sort=I.value.field+":"+I.value.by),r.date_from=P.value.from?U(P.value.from).format("YYYY-MM-DD"):"",r.date_to=P.value.to?U(P.value.to).format("YYYY-MM-DD"):"",r.filter_model=JSON.stringify(u()._tv.filter_model)},L=async()=>{u().loading_full=!0,J.value={},v.value.may_get_data=!1,r.page=v.value.page,r.page==1&&(n.value=[]),r.first_row&&delete r.first_row,r.page>1&&(r.first_row=JSON.stringify(n.value[0])),r.filter_status=p.value;const{data:t,error:e,status:m}=await N("/extra_moneys",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:r,retry:0});if(u().loading_full=!1,v.value.may_get_data=!0,m.value==="error"){j().trigger(e,J);return}v.value.page==1?n.value=B(t.value.data):v.value.page>1&&(n.value=[...n.value,...B(t.value.data)]),t.value.data.length==0&&(v.value.is_last_record=!0),u()._tv.filter_box=!1},R=()=>{a.value=-1,v.value.page=1,v.value.is_last_record=!1,se(),L()},A=s(!1),T=s(0),g=s(0),h=s(!1),re=()=>{T.value=0,h.value=!1,g.value=!1,A.value=!0},{display:w}=ee();Ke(ee());const ie=()=>{a.value==-1?w({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(T.value=n.value[a.value].id,h.value=!1,g.value=!1,A.value=!0)},ue=()=>{a.value==-1?w({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(T.value=n.value[a.value].id,h.value=!1,g.value=!0,A.value=!0)},M=s(!1),E=s(0),de=()=>{a.value==-1?w({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(E.value=n.value[a.value].id,h.value=!1,g.value=!1,M.value=!0)},_e=()=>{a.value==-1?w({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(E.value=n.value[a.value].id,h.value=!0,g.value=!1,M.value=!0)},Y=s(!1),K=s({}),$=s(!1),D=s(""),me=async()=>{$.value&&($.value=!1)},ce=()=>{a.value==-1?w({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(D.value="",K.value={id:n.value[a.value].id,tujuan:n.value[a.value].xto},$.value=!0)};X(()=>D.value,t=>{t.trim().length>0?Y.value=!0:Y.value=!1},{immediate:!1});const ve=async()=>{u().loading_full=!0;const t=new FormData;t.append("id",n.value[a.value].id),t.append("deleted_reason",D.value),t.append("_method","DELETE");const{data:e,error:m,status:H}=await N("/extra_money",{method:"post",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},body:t,retry:0});if(u().loading_full=!1,H.value==="error"){j().trigger(m);return}let f={...n.value[a.value]};f.deleted=e.value.deleted,f.deleted_user=e.value.deleted_user,f.deleted_at=e.value.deleted_at,f.deleted_by=e.value.deleted_by,f.deleted_reason=e.value.deleted_reason,f.class_h=q(f),p.value!="all"?n.value.splice(a.value,1):n.value.splice(a.value,1,{...f}),a.value=-1,$.value=!1},{printHtml:fe}=Xe(),pe=async()=>{if(a.value==-1){w({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"});return}u().loading_full=!0;const{data:t,error:e,status:m}=await N("/extra_money_preview_file",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:{id:n.value[a.value].id},retry:0});if(u().loading_full=!1,m.value==="error"){j().trigger(e);return}fe(t.value.html,318)},G=s([{key:"no",label:"No",isai:!0},{key:"val1",label:"App 1",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val2",label:"App 2",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"id",label:"ID",filter_on:1,type:"number"},{key:"xto",label:"Tujuan",freeze:1,filter_on:1,type:"string"},{key:"jenis",label:"Jenis",filter_on:1,type:"select",select_item:["TBS","TBSK","CPO","PK","LAIN"]},{key:"transition_target",label:"Pengalihan",filter_on:1,type:"select",select_item:u().list_pabrik},{key:"transition_type",label:"Tipe Pengalihan",type:"select",select_item:[{k:"From",v:"Dari"},{k:"To",v:"Ke"}]},{key:"ac_account",label:"Account",childs:[{key:"ac_account_id",label:"Account ID",filter_on:1,type:"string"},{key:"ac_account_code",label:"Account Code",filter_on:1,type:"string"},{key:"ac_account_name",label:"Account Name",filter_on:1,type:"string"}]},{key:"description",label:"Deskripsi",filter_on:1,type:"string"},{key:"qty",label:"Qty",class:" justify-end",type:"number"},{key:"nominal",label:"Nominal",class:" justify-end",type:"number"},{key:"qn_total",label:"Total",class:" justify-end",type:"number"},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"deleted_by_username",label:"Deleted By",tbl_show:0},{key:"deleted_at",label:"Deleted At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1,tbl_show:0},{key:"deleted_reason",label:"Deleted Reason",tbl_show:0,type:"string",filter_on:1}]),ye=x(()=>a.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&b().checkPermission("extra_money.create")),be=x(()=>["available","all"].indexOf(p.value)>-1&&b().checkPermission("extra_money.create")),xe=x(()=>a.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.val1)>-1&&[void 0,""].indexOf(i.value.pvr_id)>-1&&b().checkPermission("extra_money.modify")),ke=x(()=>a.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,""].indexOf(i.value.pvr_id)>-1&&(b().checkPermission("extra_money.val1")&&[void 0,0].indexOf(i.value.val1)>-1||b().checkPermission("extra_money.val2")&&[void 0,0].indexOf(i.value.val2)>-1)),ge=x(()=>b().checkPermission("extra_money.remove")&&a.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,""].indexOf(i.value.pvr_id)>-1),he=x(()=>b().checkPermission("extra_money.preview_file")&&a.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&i.value.val==1);return(t,e)=>{const m=Me,H=je,f=Fe,we=Ne,De=Be,Ae=Ie,$e=Ee,Ce=Ye,Q=He,Z=Ve,Oe=ze,Pe=Ue,Se=qe,Te=Je;return _(),y("div",et,[d(m,{title:"List Transaction"}),c("div",tt,[c("div",at,[c("div",lt,[c("div",ot,[te(c("select",{class:"","onUpdate:modelValue":e[0]||(e[0]=o=>ae(p)?p.value=o:null)},ut,512),[[Ge,l(p)]])]),l(ye)?(_(),y("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[1]||(e[1]=o=>ue())},[d(H)])):k("",!0),l(be)?(_(),y("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[2]||(e[2]=o=>re())},[d(f)])):k("",!0),l(xe)?(_(),y("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[3]||(e[3]=o=>ie())},[d(we)])):k("",!0),l(a)>-1?(_(),y("button",{key:3,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[4]||(e[4]=o=>_e())},[d(De)])):k("",!0),l(ge)?(_(),y("button",{key:4,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[5]||(e[5]=o=>ce())},[d(Ae)])):k("",!0),l(ke)?(_(),y("button",{key:5,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[6]||(e[6]=o=>de())},[d($e)])):k("",!0),l(he)?(_(),y("button",{key:6,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[7]||(e[7]=o=>pe())},[d(Ce)])):k("",!0)])]),d(Oe,{thead:l(G),selected:l(a),onSetSelected:e[8]||(e[8]=o=>a.value=o),tbody:l(n),fnCallData:L,scrolling:l(v),onSetScrollingPage:e[9]||(e[9]=o=>l(v).page=o),onDoFilter:e[10]||(e[10]=o=>R())},{val1:C(({item:o})=>[o.val1?(_(),F(Z,{key:1})):(_(),F(Q,{key:0}))]),val2:C(({item:o})=>[o.val2?(_(),F(Z,{key:1})):(_(),F(Q,{key:0}))]),qn_total:C(({item:o})=>[V(" Rp. "+le(l(oe)(parseFloat(o.total)||0)),1)]),deleted_by_username:C(({item:o})=>{var W;return[V(le((W=o.deleted_by)==null?void 0:W.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling"])]),d(Pe,{type:"delete",show:l($),data:l(K),fnClose:me,fnConfirm:ve,enabledOk:l(Y)},{footer:C(()=>[V(" Masukkan Alasan Penghapusan: "),c("div",dt,[te(c("textarea",{"onUpdate:modelValue":e[11]||(e[11]=o=>ae(D)?D.value=o:null)},null,512),[[Ze,l(D)]])])]),_:1},8,["show","data","enabledOk"]),d(Se,{show:l(A),fnClose:()=>{A.value=!1},id:l(T),p_data:l(n),is_copy:l(g)},null,8,["show","fnClose","id","p_data","is_copy"]),d(Te,{show:l(M),fnClose:()=>{M.value=!1},id:l(E),p_data:l(n),is_view:l(h)},null,8,["show","fnClose","id","p_data","is_view"])])}}};export{Rt as default};
