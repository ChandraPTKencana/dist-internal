import Ke from"./Header.ec2830b8.js";import Ge from"./Edit.e3c2c2a7.js";import Xe from"./Eyes.d85ea6bd.js";import Ze from"./Void.47f1d331.js";import Qe from"./Signature.e2cc277b.js";import We from"./Cog.5614706b.js";import et from"./Image.6f3af7ea.js";import tt from"./Line.ba60b79f.js";import at from"./Check.84664cb3.js";import lt from"./TableView.27e3590f.js";import{_ as ot}from"./PopupMini.vue.740d533e.js";import st from"./trx_trp_ticket.ad895a73.js";import rt from"./trx_trp_ticket_validasi.8712649e.js";import nt from"./trx_absen.8ed5ac7f.js";import it from"./trx_trp_ticket_over.ca367812.js";import _t from"./Times.725e6b46.js";import{_ as ut}from"./client-only.22df5fad.js";import{_ as dt}from"./SelectMulti.vue.13dfe7e1.js";import{r as i,f as ct,g as pt,h as ft,i as P,B as mt,j as be,s as vt,x as f,I as bt,c as D,b as c,a as s,k as ke,v as kt,l as r,m as ye,n as T,w as v,q as yt,y as M,o as k,z as S,d as y,t as $,A as ht,H as gt,G as xt}from"./entry.468c1924.js";import{u as B}from"./useUtils.f67a7b52.js";import{u as C}from"./useMyFetch.5d39e20e.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Search.9b037104.js";import"./Adjust.cf28fd93.js";import"./TableHeaderEye.7cf37920.js";import"./ClearAll.34ea9b9e.js";import"./ClearEach.6936ca01.js";import"./CaretLeftDoubleBold.3206de64.js";import"./CaretLeftBold.d337aee3.js";import"./CaretRightBold.65e7ac4a.js";import"./CaretRightDoubleBold.10274d1d.js";import"./Exclamation.b8184944.js";import"./HeaderPopup.vue.fe14bc58.js";import"./InputPointFormat.vue.97c24bd4.js";import"./Refresh.6e52d976.js";const wt={class:"w-full h-full flex flex-col"},Dt={class:"w-full flex grow flex-col overflow-auto h-0"},Tt={class:"w-full flex justify-between flex-wrap"},$t={class:"grow flex"},Ct={class:"m-1"},At=gt('<option value="ticket_not_done">Undone</option><option value="ticket_done">Done</option><option value="deleted">Trash</option><option value="all">All</option><option value="req_deleted">Req Delete</option>',5),Mt=[At],St={class:"flex"},Bt=s("b",null,"tidak dapat dibatalkan lagi",-1),Nt={class:"grow mb-5"},jt={key:0,class:"w-full h-full flex items-center justify-center fixed top-0 left-0 z-20 p-3",style:{"background-color":"rgba(255,255,255,0.9)"}},qt={class:"relative",style:{width:"95%",height:"90%"}},Ft={class:"absolute -top-7 right-0 bg-white",style:{position:"absolute",padding:"5px 10px",border:"solid 1px #ccc","border-bottom":"none","border-top-right-radius":"5px","border-top-left-radius":"5px"}},Pt={class:"w-full h-full flex flex-col items-center justify-content-center bg-white"},Vt={class:"w-full p-1"},Yt={class:"w-full p-1 bg-gray-200"},Ot=s("div",{class:"w-full text-blue-600 font-bold"}," Set Date For Load Data ",-1),Ht={class:"w-full grid grid-cols-2 grid-rows-1 gap-1"},It={class:"flex flex-col flex-wrap p-1"},Ut=s("label",{for:""},"From",-1),zt={class:"grow"},Et={class:"flex flex-col flex-wrap p-1"},Rt=s("label",{for:""},"To",-1),Jt={class:"grow"},Lt={key:1,class:"w-full h-full flex items-center justify-center fixed top-0 left-0 z-10 p-3",style:{"background-color":"rgba(255,255,255,0.9)"}},Kt={class:"relative",style:{border:"solid 1px #ccc"}},Gt={class:"absolute -top-7 right-0 bg-white",style:{position:"absolute",padding:"5px 10px",border:"solid 1px #ccc","border-bottom":"none","border-top-right-radius":"5px","border-top-left-radius":"5px"}},Xt={class:"w-full h-full flex flex-col items-center justify-content-center bg-white"},Zt={class:"w-full p-1"},Qt={class:"w-full p-1"},Wt=s("div",{class:"w-full text-gray-600 font-bold text-center"}," Set Mobil Yang Tidak Di Izinkan Untuk Di Update Tiketnya ",-1),ea={class:"w-full"},ta={class:"w-full grid grid-cols-2 gap-1 p-1 mt-5"},Oa={__name:"ticket",async setup(aa){let V,le;const{$moment:Y}=xt(),{pointFormat:oe}=B(),se=t=>t.deleted==1?"!bg-red-400":t.req_deleted==1?"!bg-yellow-300":t.val_ticket==1?"!bg-blue-300":"",z=t=>(t.map(e=>{e.class_h=se(e)}),t);let E=i({clearCheckBox:!1});const A=i("ticket_not_done");ct(()=>A.value,t=>{_e()},{immediate:!1});const m={};m._TimeZoneOffset=new Date().getTimezoneOffset(),m.sort="tanggal:desc";const re=i({}),O=i({from:"",to:""}),x=pt("token"),{data:R}=([V,le]=ft(async()=>yt(async()=>{f().loading_full=!0;let t=[],e=[],u=[];const[d,l,p]=await Promise.all([C("/trx_trp_tickets",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:{filter_status:A},retry:0}),C("/vehicles_available",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},retry:0}),C("/temp_data/vehiclesAllowedUpdateTicket",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},retry:0})]);return d.status.value!=="error"&&(t=z(d.data.value.data)),d.status.value==="error"?(M().trigger(d.error),{trx_trps:t}):(l.status.value!=="error"&&(e=l.data.value.data),p.status.value!=="error"&&(u=p.data.value.data),f().loading_full=!1,{trx_trps:t,list_vehicle:e,vehicles_allowed:u})},"$X4xCu6yBOs")),V=await V,le(),V),n=i(R.value.trx_trps||[]),J=i([]);R.value.list_vehicle.forEach(t=>{J.value.push({id:t.id,name:t.no_pol,title:"",checked:R.value.vehicles_allowed.indexOf(t.id)>-1})});const ne=i([]),he=async(t,e="")=>{f().loading_full=!0;let u=b.value.from?Y(b.value.from).format("Y-MM-DD"):"",d=b.value.to?Y(b.value.to).format("Y-MM-DD"):"";const{data:l,error:p,status:o}=await C("/trx_load_for_trp",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:{jenis:t,from:u,to:d,transition_target:e},retry:0});if(f().loading_full=!1,o.value==="error"){M().trigger(p);return}ne.value=l.value.list_ticket},L=i({field:"tanggal",by:"desc"}),_=i(-1),w=P(()=>n.value[_.value]),h=i({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),ge=()=>{m.like="";let t=JSON.parse(JSON.stringify(f()._tv.global_keyword));t!=""&&(m.like=`id:%${t}%,xto:%${t}%,jenis:%${t}%,pv_no:%${t}%,ticket_a_no:%${t}%,ticket_b_no:%${t}%,no_pol:%${t}%,supir:%${t}%,kernet:%${t}%,cost_center_code:%${t}%,cost_center_desc:%${t}%,pvr_no:%${t}%,tanggal:%${t}%,transition_target:%${t}%,uj_asst_opt:%${t}%`),m.sort="",L.value.field&&(m.sort=L.value.field+":"+L.value.by),m.date_from=O.value.from?Y(O.value.from).format("YYYY-MM-DD"):"",m.date_to=O.value.to?Y(O.value.to).format("YYYY-MM-DD"):"",m.filter_model=JSON.stringify(f()._tv.filter_model)},ie=async()=>{f().loading_full=!0,re.value={},h.value.may_get_data=!1,m.page=h.value.page,m.page==1&&(n.value=[]),m.first_row&&delete m.first_row,m.page>1&&(m.first_row=JSON.stringify(n.value[0])),m.filter_status=A.value;const{data:t,error:e,status:u}=await C("/trx_trp_tickets",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:m,retry:0});if(f().loading_full=!1,h.value.may_get_data=!0,u.value==="error"){M().trigger(e,re);return}h.value.page==1?n.value=z(t.value.data):h.value.page>1&&(n.value=[...n.value,...z(t.value.data)]),t.value.data.length==0&&(h.value.is_last_record=!0),f()._tv.filter_box=!1},_e=()=>{_.value=-1,h.value.page=1,h.value.is_last_record=!1,ge(),ie()};mt();const K=i(!1),ue=i(0),{display:N}=be();vt(be());const xe=()=>{_.value==-1?N({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(ue.value=n.value[_.value].id,K.value=!0)},H=i(!1),G=i(0),X=i(!1),we=()=>{_.value==-1?N({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(G.value=n.value[_.value].id,H.value=!0,X.value=!1)},De=()=>{_.value==-1?N({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(G.value=n.value[_.value].id,H.value=!0,X.value=!0)},Z=i(!1),de=i(0),Te=t=>{de.value=t,Z.value=!0},ce=i({}),j=i(!1),$e=i(""),Ce=async()=>{j.value&&(j.value=!1)},q=i(""),Ae=()=>{var t;_.value==-1?N({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):($e.value="",q.value="",ce.value={id:n.value[_.value].id,"no pol":n.value[_.value].no_pol,tujuan:n.value[_.value].xto,permintaan:(t=n.value[_.value].req_deleted_by)==null?void 0:t.username,alasan:n.value[_.value].req_deleted_reason},j.value=!0)},Me=async()=>{f().loading_full=!0;const t=new FormData;t.append("id",n.value[_.value].id),t.append("_method","DELETE"),t.append("reason_adder",q.value);const{data:e,error:u,status:d}=await C("/trx_trp_approve_req_delete",{method:"post",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:t,retry:0});if(f().loading_full=!1,d.value==="error"){M().trigger(u);return}let l={...n.value[_.value]};l.deleted=e.value.deleted,l.deleted_user=e.value.deleted_user,l.deleted_at=e.value.deleted_at,l.deleted_by=e.value.deleted_by,l.deleted_reason=e.value.deleted_reason,l.class_h=se(l),A.value!="all"?n.value.splice(_.value,1):n.value.splice(_.value,1,{...l}),_.value=-1,j.value=!1},Se=async()=>{f().loading_full=!0;const t=new FormData;t.append("ids",JSON.stringify(F.value)),t.append("_method","PUT");const{data:e,error:u,status:d}=await C("/trx_trp_val_tickets",{method:"post",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:t,retry:0});if(f().loading_full=!1,d.value==="error"){M().trigger(u);return}e.value.val_lists.forEach(l=>{let p=n.value.map(o=>o.id).indexOf(l.id);if(p>-1){let o=n.value[p];o.val_ticket=l.val_ticket,o.val_ticket_by=l.val_ticket_by,o.val_ticket_at=l.val_ticket_at,o.updated_at=l.updated_at,n.value.splice(p,1,{...o})}}),E.value.clearCheckBox=!0},Be=async()=>{f().loading_full=!0;const t=new FormData;t.append("ids",JSON.stringify(F.value)),t.append("_method","PUT");const{data:e,error:u,status:d}=await C("/trx_trp_clear_tickets",{method:"post",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:t,retry:0});if(f().loading_full=!1,d.value==="error"){M().trigger(u);return}e.value.clear_lists.forEach(l=>{let p=n.value.map(o=>o.id).indexOf(l.id);if(p>-1){let o=n.value[p];o.ticket_a_id=l.ticket_a_id,o.ticket_a_no=l.ticket_a_no,o.ticket_b_id=l.ticket_b_id,o.ticket_b_no=l.ticket_b_no,o.updated_at=l.updated_at,n.value.splice(p,1,{...o})}}),E.value.clearCheckBox=!0},Q=i(!1),Ne=t=>{Q.value=!0},I=i(!1),b=i({from:new Date().setDate(new Date().getDate()-3),to:new Date}),pe=t=>{t=="from"?b.value.from-b.value.to>0&&(b.value.from=b.value.to):b.value.to-b.value.from<0&&(b.value.to=b.value.from)},je=async()=>{f().loading_full=!0;const t=new FormData;t.append("vehicles",JSON.stringify(J.value.filter(l=>l.checked).map(l=>l.id)));const{data:e,error:u,status:d}=await C("/trx_trp_do_update_ticket",{method:"post",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:t,retry:0});if(f().loading_full=!1,d.value==="error"){M().trigger(u);return}e.value.data.forEach(l=>{let p=n.value.map(o=>o.id).indexOf(l.id);if(p!==-1){let o=n.value[p];o.ticket_a_id=l.ticket_a_id,o.ticket_a_no=l.ticket_a_no,o.ticket_a_bruto=l.ticket_a_bruto,o.ticket_a_tara=l.ticket_a_tara,o.ticket_a_netto=l.ticket_a_netto,o.ticket_a_supir=l.ticket_a_supir,o.ticket_a_no_pol=l.ticket_a_no_pol,o.ticket_a_in_at=l.ticket_a_in_at,o.ticket_a_out_at=l.ticket_a_out_at,o.ticket_b_id=l.ticket_b_id,o.ticket_b_no=l.ticket_b_no,o.ticket_b_bruto=l.ticket_b_bruto,o.ticket_b_tara=l.ticket_b_tara,o.ticket_b_netto=l.ticket_b_netto,o.ticket_b_supir=l.ticket_b_supir,o.ticket_b_no_pol=l.ticket_b_no_pol,o.ticket_b_in_at=l.ticket_b_in_at,o.ticket_b_out_at=l.ticket_b_out_at,o.updated_at=l.updated_at,n.value.splice(p,1,{...o})}}),N({show:!0,status:"Success",message:"Update PV Done"})},F=i([]),qe=i([{key:"cb",label:"",checkbox:"id"},{key:"no",label:"No",isai:!0},{key:"val_ticket",label:"Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"id",label:"ID",filter_on:1,type:"number",sort:{priority:1,type:"desc"}},{key:"tanggal",label:"U.Jalan Per",type:"date",dateformat:"DD-MM-Y",filter_on:1},{key:"no_pol",label:"No Pol",freeze:1,filter_on:1,type:"string"},{key:"xto",label:"Tujuan",filter_on:1,type:"string"},{key:"uj_asst_opt",label:"Info",filter_on:1,type:"select",select_item:["DENGAN KERNET","TANPA KERNET"]},{key:"tipe",label:"Tipe",filter_on:1,type:"string"},{key:"jenis",label:"Jenis",filter_on:1,type:"select",select_item:["TBS","TBSK","CPO","PK","LAIN"]},{key:"amount",label:"Amount",class:" justify-end",filter_on:1,type:"number"},{key:"transition",label:"Peralihan",childs:[{key:"transition_type",label:"Type",type:"select",filter_on:1,select_item:["To","From"]},{key:"transition_target",label:"Target",type:"select",filter_on:1,select_item:f().list_pabrik}]},{key:"ticket_a",label:"Ticket A",childs:[{key:"ticket_a_no",label:"No",filter_on:1,type:"string"},{key:"ticket_a_bruto",label:"Bruto",filter_on:1,type:"number"},{key:"ticket_a_tara",label:"Tara",filter_on:1,type:"number"},{key:"ticket_a_netto",label:"Netto",filter_on:1,type:"number"},{key:"ticket_a_supir",label:"Supir",filter_on:1,type:"string"},{key:"ticket_a_no_pol",label:"No Pol",filter_on:1,type:"string"},{key:"ticket_a_in_at",label:"In At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"ticket_a_out_at",label:"Out At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1}]},{key:"ticket_b",label:"Ticket B",childs:[{key:"ticket_b_no",label:"No",filter_on:1,type:"string"},{key:"ticket_b_bruto",label:"Bruto",filter_on:1,type:"number"},{key:"ticket_b_tara",label:"Tara",filter_on:1,type:"number"},{key:"ticket_b_netto",label:"Netto",filter_on:1,type:"number"},{key:"ticket_b_supir",label:"Supir",filter_on:1,type:"string"},{key:"ticket_b_no_pol",label:"No Pol",filter_on:1,type:"string"},{key:"ticket_b_in_at",label:"In At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"ticket_b_out_at",label:"Out At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1}]},{key:"susut",label:"Susut",childs:[{key:"susut_bruto",label:"Bruto",childs:[{key:"susut_bruto_b_a",label:"Selisih"},{key:"susut_bruto_b_a_persen",label:"%"}]},{key:"susut_tara",label:"Tara",childs:[{key:"susut_tara_b_a",label:"Selisih"},{key:"susut_tara_b_a_persen",label:"%"}]},{key:"susut_netto",label:"Netto",childs:[{key:"susut_netto_b_a",label:"Selisih"},{key:"susut_netto_b_a_persen",label:"%"}]}]},{key:"supir",label:"Supir",filter_on:1,type:"string"},{key:"kernet",label:"Kernet",filter_on:1,type:"string"},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"pv_no",label:"PV No",type:"string"},{key:"deleted_by_username",label:"Deleted By",tbl_show:1},{key:"deleted_at",label:"Deleted At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:1,type:"datetime",filter_on:1},{key:"deleted_reason",label:"Deleted Reason",tbl_show:1,type:"string",filter_on:1},{key:"req_deleted_by_username",label:"Req Deleted By",tbl_show:1},{key:"req_deleted_at",label:"Req Delete At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:1,type:"datetime",filter_on:1},{key:"req_deleted_reason",label:"Req Delete Reason",tbl_show:1,type:"string",filter_on:1}]),Fe=P(()=>_.value>-1&&B().checkPermission("trp_trx.ticket.view")),Pe=P(()=>_.value>-1&&w.value.deleted==0&&w.value.req_deleted==0&&w.value.val_ticket==0&&B().checkPermission("trp_trx.ticket.modify")),Ve=P(()=>_.value>-1&&w.value.deleted==0&&w.value.req_deleted==0&&w.value.val_ticket==0&&B().checkPermission("trp_trx.ticket.val_ticket")),Ye=P(()=>_.value>-1&&w.value.deleted==0&&w.value.req_deleted==1&&w.value.val_ticket==0&&B().checkPermission("trp_trx.approve_request_remove")),U=i(!1),W=(t,e)=>{t=parseFloat(t)||0,e=parseFloat(e)||0;let u=parseFloat(e-t),d=u>0?e:t;if(d==0)return 0;let l=B().round(u/d*100,2);return l<0?"("+Math.abs(l*100)/100+")":l},ee=(t,e)=>{t=parseFloat(t)||0,e=parseFloat(e)||0;let u=parseFloat(e-t);return u<0?"("+oe(Math.abs(u))+")":oe(u)};return(t,e)=>{const u=Ke,d=Ge,l=Xe,p=Ze,o=Qe,Oe=We,He=et,te=tt,ae=at,Ie=lt,Ue=ot,ze=st,Ee=rt,Re=nt,Je=it,fe=_t,me=bt("vue-date-picker"),ve=ut,Le=dt;return k(),D("div",wt,[c(u,{title:"List Transaction"}),s("div",Dt,[s("div",Tt,[s("div",$t,[s("div",Ct,[ke(s("select",{class:"","onUpdate:modelValue":e[0]||(e[0]=a=>ye(A)?A.value=a:null)},Mt,512),[[kt,r(A)]])]),r(Pe)?(k(),D("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[1]||(e[1]=a=>xe())},[c(d)])):T("",!0),r(Fe)?(k(),D("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[2]||(e[2]=a=>De())},[c(l)])):T("",!0),r(Ye)?(k(),D("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[3]||(e[3]=a=>Ae())},[c(p)])):T("",!0),r(Ve)?(k(),D("button",{key:3,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[4]||(e[4]=a=>we())},[c(o)])):T("",!0)]),s("div",St,[r(F).length>0?(k(),D("button",{key:0,type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:e[5]||(e[5]=a=>Be())}," Multi Clear Ticket ")):T("",!0),r(F).length>0?(k(),D("button",{key:1,type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:e[6]||(e[6]=a=>Se())}," Multi Val ")):T("",!0),s("button",{type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:e[7]||(e[7]=a=>Ne())}," Check Tickets "),s("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:e[8]||(e[8]=a=>I.value=!0)},[c(Oe)]),s("button",{type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:e[9]||(e[9]=a=>U.value=!0)}," Update Ticket ")])]),c(Ie,{thead:r(qe),selected:r(_),onSetSelected:e[10]||(e[10]=a=>_.value=a),tbody:r(n),fnCallData:ie,scrolling:r(h),onSetScrollingPage:e[11]||(e[11]=a=>r(h).page=a),onDoFilter:e[12]||(e[12]=a=>_e()),onSetCheckbox:e[13]||(e[13]=a=>F.value=a),deep_state:r(E)},{absen:v(({item:a,index:g})=>[a.trx_absens&&a.trx_absens.length>0?(k(),S(He,{key:0,class:"cursor-pointer",onClick:la=>Te(g)},null,8,["onClick"])):T("",!0)]),val:v(({item:a})=>[a.val?(k(),S(ae,{key:1})):(k(),S(te,{key:0}))]),val1:v(({item:a})=>[a.val1?(k(),S(ae,{key:1})):(k(),S(te,{key:0}))]),val_ticket:v(({item:a})=>[a.val_ticket?(k(),S(ae,{key:1})):(k(),S(te,{key:0}))]),uj_asst_opt:v(({item:a})=>{var g;return[y($((g=a.uj)==null?void 0:g.asst_opt),1)]}),susut_bruto_b_a:v(({item:a})=>[y($(ee(a.ticket_a_bruto,a.ticket_b_bruto)),1)]),susut_tara_b_a:v(({item:a})=>[y($(ee(a.ticket_a_tara,a.ticket_b_tara)),1)]),susut_netto_b_a:v(({item:a})=>[y($(ee(a.ticket_a_netto,a.ticket_b_netto)),1)]),susut_bruto_b_a_persen:v(({item:a})=>[y($(W(a.ticket_a_bruto,a.ticket_b_bruto)),1)]),susut_tara_b_a_persen:v(({item:a})=>[y($(W(a.ticket_a_tara,a.ticket_b_tara)),1)]),susut_netto_b_a_persen:v(({item:a})=>[y($(W(a.ticket_a_netto,a.ticket_b_netto)),1)]),deleted_by_username:v(({item:a})=>{var g;return[y($((g=a.deleted_by)==null?void 0:g.username),1)]}),req_deleted_by_username:v(({item:a})=>{var g;return[y($((g=a.req_deleted_by)==null?void 0:g.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling","deep_state"])]),c(Ue,{type:"custome",show:r(j),data:r(ce),fnClose:Ce,fnConfirm:Me},{words:v(()=>[y(" Data akan diproses dan "),Bt,y(", apakah Anda menyetujui permintaan penghapusan data berikut? ")]),footer:v(()=>[y(" Alasan Tambahan: "),s("div",Nt,[ke(s("textarea",{"onUpdate:modelValue":e[14]||(e[14]=a=>ye(q)?q.value=a:null)},null,512),[[ht,r(q)]])])]),_:1},8,["show","data"]),c(ze,{show:r(K),fnClose:()=>{K.value=!1},fnLoadDBData:he,id:r(ue),p_data:r(n),list_ticket:r(ne)},null,8,["show","fnClose","id","p_data","list_ticket"]),c(Ee,{show:r(H),fnClose:()=>{H.value=!1},id:r(G),p_data:r(n),is_view:r(X)},null,8,["show","fnClose","id","p_data","is_view"]),c(Re,{show:r(Z),fnClose:()=>{Z.value=!1},index:r(de),p_data:r(n)},null,8,["show","fnClose","index","p_data"]),c(Je,{show:r(Q),fnClose:()=>{Q.value=!1}},null,8,["show","fnClose"]),r(I)?(k(),D("div",jt,[s("div",qt,[s("div",Ft,[c(fe,{style:{color:"black",cursor:"pointer"},onClick:e[15]||(e[15]=a=>I.value=!1)})]),s("div",Pt,[s("div",Vt,[s("div",Yt,[Ot,s("div",Ht,[s("div",It,[Ut,s("div",zt,[c(ve,null,{default:v(()=>[c(me,{modelValue:r(b).from,"onUpdate:modelValue":e[16]||(e[16]=a=>r(b).from=a),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,clearable:!1,"text-input":"","teleport-center":"",onClosed:e[17]||(e[17]=a=>pe("from"))},null,8,["modelValue"])]),_:1})])]),s("div",Et,[Rt,s("div",Jt,[c(ve,null,{default:v(()=>[c(me,{modelValue:r(b).to,"onUpdate:modelValue":e[18]||(e[18]=a=>r(b).to=a),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,clearable:!1,"text-input":"","teleport-center":"",onClosed:e[19]||(e[19]=a=>pe("to"))},null,8,["modelValue"])]),_:1})])])])])])]),s("div",{style:{position:"absolute",top:"12px",right:"98px","background-color":"rgba(255,255,255,0)",width:"37px",height:"36px","z-index":"1",cursor:"pointer"},onClick:e[20]||(e[20]=a=>I.value=!1)})])])):T("",!0),r(U)?(k(),D("div",Lt,[s("div",Kt,[s("div",Gt,[c(fe,{style:{color:"black",cursor:"pointer"},onClick:e[21]||(e[21]=a=>U.value=!1)})]),s("div",Xt,[s("div",Zt,[s("div",Qt,[Wt,s("div",ea,[c(Le,{arr:r(J)},null,8,["arr"]),s("div",ta,[s("button",{type:"button",name:"button",class:"bg-blue-500 text-white",onClick:e[22]||(e[22]=a=>je())}," Set & Update "),s("button",{type:"button",name:"button",class:"bg-white",onClick:e[23]||(e[23]=a=>U.value=!1)}," Close ")])])])])])])])):T("",!0)])}}};export{Oa as default};
