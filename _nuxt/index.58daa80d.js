import W from"./Eyes.d85ea6bd.js";import Z from"./Image.6f3af7ea.js";import Q from"./Times.725e6b46.js";import X from"./Check.84664cb3.js";import ee from"./Line.ba60b79f.js";import te from"./TableView.27e3590f.js";import le from"./trx_trp_nolog.37624b89.js";import{r as u,f as ae,h as oe,i as j,j as se,x as k,c as f,a as n,k as re,v as ne,l as s,m as _e,b as T,n as P,w as p,q as ie,y as K,o as _,z as m,d as a,t as o,H as de,G as pe}from"./entry.468c1924.js";import{u as B}from"./useMyFetch.5d39e20e.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Search.9b037104.js";import"./Adjust.cf28fd93.js";import"./TableHeaderEye.7cf37920.js";import"./ClearAll.34ea9b9e.js";import"./client-only.22df5fad.js";import"./ClearEach.6936ca01.js";import"./CaretLeftDoubleBold.3206de64.js";import"./CaretLeftBold.d337aee3.js";import"./CaretRightBold.65e7ac4a.js";import"./CaretRightDoubleBold.10274d1d.js";import"./useUtils.f67a7b52.js";import"./HeaderPopup.vue.fe14bc58.js";import"./WidthMiniPart.vue.6237c3c0.js";const ue={class:"w-full h-full flex flex-col"},ce={class:"w-full flex grow flex-col overflow-auto h-0"},me={class:"w-full flex justify-between flex-wrap"},ve={class:"grow flex"},fe={class:"m-1"},ye=de('<option value="pv_not_done">Undone</option><option value="pv_done">Done</option><option value="deleted">Trash</option><option value="all">All</option><option value="req_deleted">Req Delete</option>',5),ke=[ye],be={class:"text-xs w-full text-center"},ge=n("br",null,null,-1),he={key:1,class:"text-xs"},xe=n("br",null,null,-1),De=n("br",null,null,-1),we={key:1,class:"text-xs"},Me=n("br",null,null,-1),Ne=n("br",null,null,-1),Te={key:1,class:"text-xs"},He=n("br",null,null,-1),Se=n("br",null,null,-1),$e={key:2,class:"text-xs"},Ae=n("br",null,null,-1),Ce=n("br",null,null,-1),Ye={key:1,class:"text-xs"},qe=n("br",null,null,-1),Re=n("br",null,null,-1),Ue={key:1,class:"text-xs"},je=n("br",null,null,-1),Pe=n("br",null,null,-1),Ke={key:1,class:"text-xs"},Be=n("br",null,null,-1),Oe=n("br",null,null,-1),ct={__name:"index",async setup(Ve){let x,H;const{$moment:i}=pe(),O=t=>t.deleted==1?"!bg-red-400":t.pvr_id>0&&t.req_deleted==1?"!bg-yellow-300":t.pv_id>0?"!bg-blue-300":"",w=t=>(t.map(r=>{r.class_h=O(r)}),t),h=u("pv_not_done");ae(()=>h.value,t=>{q.value.map(r=>{let c=["deleted_by_username","deleted_at","deleted_reason","req_deleted_by_username","req_deleted_at","req_deleted_reason"].indexOf(r.key)>-1;return["all","deleted","req_deleted"].indexOf(t)>-1?c&&(r.tbl_show=1):c&&(r.tbl_show=0),r}),C()},{immediate:!1});const d={};d._TimeZoneOffset=new Date().getTimezoneOffset(),d.sort="tanggal:desc";const S=u({}),D=u({from:"",to:""}),{data:$}=([x,H]=oe(async()=>ie(async()=>{k().loading_full=!0;let t=[],r="";const[c,R]=await Promise.all([B("/trx_trp_nologs",{method:"get",params:{filter_status:h},retry:0})]);return c.status.value!=="error"&&(t=w(c.data.value.data),r=c.data.value.pabrik_name),c.status.value==="error"?(K().trigger(c.error),{trx_trps:t,pabrik_name:r}):(k().loading_full=!1,{trx_trps:t,pabrik_name:r})},"$MmURKklrhv")),x=await x,H(),x),y=u($.value.trx_trps||[]),V=u($.value.pabrik_name||"");u([]),u(!1);const M=u({field:"tanggal",by:"desc"}),b=u(-1);j(()=>y.value[b.value]);const v=u({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),I=()=>{d.like="";let t=JSON.parse(JSON.stringify(k()._tv.global_keyword));t!=""&&(d.like=`id:%${t}%,xto:%${t}%,jenis:%${t}%,pv_no:%${t}%,ticket_a_no:%${t}%,ticket_b_no:%${t}%,no_pol:%${t}%,supir:%${t}%,kernet:%${t}%,cost_center_code:%${t}%,cost_center_desc:%${t}%,pvr_no:%${t}%,tanggal:%${t}%,transition_target:%${t}%,uj_asst_opt:%${t}%`),d.sort="",M.value.field&&(d.sort=M.value.field+":"+M.value.by),d.date_from=D.value.from?i(D.value.from).format("YYYY-MM-DD"):"",d.date_to=D.value.to?i(D.value.to).format("YYYY-MM-DD"):"",d.filter_model=JSON.stringify(k()._tv.filter_model)},A=async()=>{k().loading_full=!0,S.value={},v.value.may_get_data=!1,d.page=v.value.page,d.page==1&&(y.value=[]),d.first_row&&delete d.first_row,d.page>1&&(d.first_row=JSON.stringify(y.value[0])),d.filter_status=h.value;const{data:t,error:r,status:c}=await B("/trx_trp_nologs",{method:"get",params:d,retry:0});if(k().loading_full=!1,v.value.may_get_data=!0,c.value==="error"){K().trigger(r,S);return}v.value.page==1?y.value=w(t.value.data):v.value.page>1&&(y.value=[...y.value,...w(t.value.data)]),t.value.data.length==0&&(v.value.is_last_record=!0),k()._tv.filter_box=!1},C=()=>{b.value=-1,v.value.page=1,v.value.is_last_record=!1,I(),A()},{display:E}=se(),N=u(!1),Y=u(0),J=()=>{b.value==-1?E({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(Y.value=y.value[b.value].id,N.value=!0)},q=u([{key:"no",label:"No",isai:!0},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm",filter_on:1,class:"text-xs"},{key:"val",label:V.value,childs:[{key:"val",label:"Kasir",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val1",label:"Mandor",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val2",label:"KTU/W",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val3",label:"Marketing",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val4",label:"Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val5",label:"SPV Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val6",label:"MGR Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]}]},{key:"jenis",label:"Jenis",filter_on:1,type:"select",select_item:["TBS","TBSK","CPO","PK","LAIN"]},{key:"id",label:"ID",filter_on:1,type:"number"},{key:"tanggal",label:"U.Jalan Per",type:"date",dateformat:"DD-MM-Y",filter_on:1,sort:{priority:1,type:"desc"}},{key:"no_pol",label:"No Pol",freeze:1,filter_on:1,type:"string"},{key:"xto",label:"Tujuan",filter_on:1,type:"string"},{key:"uj_asst_opt",label:"Info",filter_on:1,type:"select",select_item:["DENGAN KERNET","TANPA KERNET"]},{key:"tipe",label:"Tipe",filter_on:1,type:"string"},{key:"amount",label:"Amount",class:" justify-end",filter_on:1,type:"number"},{key:"transition",label:"Peralihan",childs:[{key:"transition_type",label:"Type",type:"select",filter_on:1,select_item:["To","From"]},{key:"transition_target",label:"Target",type:"select",filter_on:1,select_item:k().list_pabrik}]},{key:"cost_center",label:"Cost Center",childs:[{key:"cost_center_code",label:"Code",type:"string",class:" justify-start",filter_on:1},{key:"cost_center_desc",label:"Desc",filter_on:1,type:"string"}]},{key:"pvr",label:"PVR",childs:[{key:"pvr_no",label:"No",filter_on:1,type:"string"},{key:"pvr_total",label:"Total",filter_on:1,type:"number"},{key:"pvr_had_detail",label:"Completed",filter_on:1,type:"select",select_item:[{k:"1",v:"Completed"},{k:"0",v:"Uncompleted"}]}]},{key:"pv",label:"PV",childs:[{key:"pv_datetime",label:"Date",type:"date",dateformat:"DD-MM-Y",filter_on:1},{key:"pv_no",label:"No",filter_on:1,type:"string"},{key:"pv_total",label:"Total",filter_on:1,type:"number"}]},{key:"supir",label:"Supir",filter_on:1,type:"string"},{key:"supir_rek_no",label:"No Rek Supir",filter_on:1,type:"string"},{key:"supir_rek_name",label:"Nama Rek Supir",filter_on:1,type:"string"},{key:"kernet",label:"Kernet",filter_on:1,type:"string"},{key:"kernet_rek_no",label:"No Rek Kernet",filter_on:1,type:"string"},{key:"kernet_rek_name",label:"Nama Rek Kernet",filter_on:1,type:"string"},{key:"payment_method_name",label:"Payment Method Name",type:"string"},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"deleted_by_username",label:"Deleted By",tbl_show:0},{key:"deleted_at",label:"Deleted At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"deleted_reason",label:"Deleted Reason",tbl_show:0,type:"string",filter_on:1},{key:"req_deleted_by_username",label:"Req Deleted By",tbl_show:0},{key:"req_deleted_at",label:"Req Delete At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"req_deleted_reason",label:"Req Delete Reason",tbl_show:0,type:"string",filter_on:1}]),L=j(()=>b.value>-1);return(t,r)=>{const c=W,R=Z,g=Q,U=X,F=ee,z=te,G=le;return _(),f("div",ue,[n("div",ce,[n("div",me,[n("div",ve,[n("div",fe,[re(n("select",{class:"","onUpdate:modelValue":r[0]||(r[0]=e=>_e(h)?h.value=e:null)},ke,512),[[ne,s(h)]])]),s(L)?(_(),f("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:r[1]||(r[1]=e=>J())},[T(c)])):P("",!0)])]),T(z,{thead:s(q),selected:s(b),onSetSelected:r[2]||(r[2]=e=>b.value=e),tbody:s(y),fnCallData:A,scrolling:s(v),onSetScrollingPage:r[3]||(r[3]=e=>s(v).page=e),onDoFilter:r[4]||(r[4]=e=>C())},{absen:p(({item:e,index:l})=>[e.trx_absens&&e.trx_absens.length>0?(_(),m(R,{key:0,class:"cursor-pointer",onClick:Ie=>t.form_absen(l)},null,8,["onClick"])):P("",!0)]),created_at:p(({item:e})=>[n("div",be,[a(o(s(i)(e.created_at).format("DD-MM-YYYY"))+" ",1),ge,a(" "+o(s(i)(e.created_at).format("HH:mm")),1)])]),val:p(({item:e})=>{var l;return[e.val?(_(),f("div",he,[a(o((l=e.val_by)==null?void 0:l.username)+" ",1),xe,a(" "+o(s(i)(e.val_at).format("DD/MM"))+" ",1),De,a(" "+o(s(i)(e.val_at).format("HH:mm")),1)])):(_(),m(g,{key:0}))]}),val1:p(({item:e})=>{var l;return[e.val1?(_(),f("div",we,[a(o((l=e.val1_by)==null?void 0:l.username)+" ",1),Me,a(" "+o(s(i)(e.val1_at).format("DD/MM"))+" ",1),Ne,a(" "+o(s(i)(e.val1_at).format("HH:mm")),1)])):(_(),m(g,{key:0}))]}),val2:p(({item:e})=>{var l;return[e.val2?(_(),f("div",Te,[a(o((l=e.val2_by)==null?void 0:l.username)+" ",1),He,a(" "+o(s(i)(e.val2_at).format("DD/MM"))+" ",1),Se,a(" "+o(s(i)(e.val2_at).format("HH:mm")),1)])):(_(),m(g,{key:0}))]}),val3:p(({item:e})=>{var l;return[["TBS","TBSK"].indexOf(e.jenis)>-1?(_(),m(U,{key:0})):e.val3?(_(),f("div",$e,[a(o((l=e.val3_by)==null?void 0:l.username)+" ",1),Ae,a(" "+o(s(i)(e.val3_at).format("DD/MM"))+" ",1),Ce,a(" "+o(s(i)(e.val3_at).format("HH:mm")),1)])):(_(),m(g,{key:1}))]}),val4:p(({item:e})=>{var l;return[e.val4?(_(),f("div",Ye,[a(o((l=e.val4_by)==null?void 0:l.username)+" ",1),qe,a(" "+o(s(i)(e.val4_at).format("DD/MM"))+" ",1),Re,a(" "+o(s(i)(e.val4_at).format("HH:mm")),1)])):(_(),m(g,{key:0}))]}),val5:p(({item:e})=>{var l;return[e.val5?(_(),f("div",Ue,[a(o((l=e.val5_by)==null?void 0:l.username)+" ",1),je,a(" "+o(s(i)(e.val5_at).format("DD/MM"))+" ",1),Pe,a(" "+o(s(i)(e.val5_at).format("HH:mm")),1)])):(_(),m(g,{key:0}))]}),val6:p(({item:e})=>{var l;return[e.val6?(_(),f("div",Ke,[a(o((l=e.val6_by)==null?void 0:l.username)+" ",1),Be,a(" "+o(s(i)(e.val6_at).format("DD/MM"))+" ",1),Oe,a(" "+o(s(i)(e.val6_at).format("HH:mm")),1)])):(_(),m(g,{key:0}))]}),uj_asst_opt:p(({item:e})=>{var l;return[a(o((l=e.uj)==null?void 0:l.asst_opt),1)]}),payment_method_name:p(({item:e})=>{var l;return[a(o((l=e.payment_method)==null?void 0:l.name),1)]}),pvr_had_detail:p(({item:e})=>[e.pvr_had_detail?(_(),m(U,{key:1})):(_(),m(F,{key:0}))]),deleted_by_username:p(({item:e})=>{var l;return[a(o((l=e.deleted_by)==null?void 0:l.username),1)]}),req_deleted_by_username:p(({item:e})=>{var l;return[a(o((l=e.req_deleted_by)==null?void 0:l.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling"])]),T(G,{show:s(N),fnClose:()=>{N.value=!1},id:s(Y)},null,8,["show","fnClose","id"])])}}};export{ct as default};
