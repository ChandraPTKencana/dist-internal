import me from"./Header.973bd304.js";import fe from"./Edit.bb4baec3.js";import ve from"./Eyes.d5f37100.js";import ye from"./Signature.570bbf6c.js";import be from"./Line.84256359.js";import xe from"./Check.9ccf93e4.js";import ke from"./Times.d1edbe5a.js";import ge from"./TableView.a6f6598c.js";import he from"./trx_trp_absen.1a4e59c9.js";import we from"./trx_trp_absen_validasi.1b99e0bf.js";import De from"./trx_absen.95f3051d.js";import{r as s,f as Ae,g as $e,h as Se,i as C,j as Te,c as d,b as i,a as k,k as Ce,v as Ne,l,m as qe,n as N,w as c,q as Me,x as f,y as I,o,z as g,d as E,t as H,H as Oe,G as Be}from"./entry.cd89349b.js";import{u as V}from"./useMyFetch.b49701aa.js";import{u as F}from"./useUtils.ba8d89ba.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Search.c49a73f1.js";import"./Adjust.6553f7b2.js";import"./TableHeaderEye.b6bfe28e.js";import"./ClearAll.7ef23700.js";import"./client-only.e285d0a8.js";import"./ClearEach.9060ad73.js";import"./CaretLeftDoubleBold.a24a03f5.js";import"./CaretLeftBold.64d595b1.js";import"./CaretRightBold.c7b9dc63.js";import"./CaretRightDoubleBold.60dab2da.js";import"./HeaderPopup.vue.891fa2bd.js";import"./AttachmentSingle.572e7ee5.js";import"./PDFJsView.1cf4ee45.js";import"./CaretTop.05ff5b20.js";import"./CaretDown.b5bfea95.js";import"./PopupMini.vue.86e33dff.js";import"./Exclamation.c89d4b8d.js";const Pe={class:"w-full h-full flex flex-col"},je={class:"w-full flex grow flex-col overflow-auto h-0"},Ue={class:"w-full flex justify-between flex-wrap"},Ye={class:"grow flex"},Ie={class:"m-1"},Ee=Oe('<option value="Undone">Undone</option><option value="Done">Done</option><option value="deleted">Trash</option><option value="all">All</option><option value="req_deleted">Req Delete</option>',5),He=[Ee],Ve={class:"flex"},Fe={key:0,class:"bg-red-700 rounded-sm"},Je={key:1,class:"bg-green-500 rounded-sm"},Re={key:0,class:"bg-red-700 rounded-sm"},ze={key:1,class:"bg-green-500 rounded-sm"},Ke={key:0,class:"bg-red-700 rounded-sm"},Le={key:1,class:"bg-green-500 rounded-sm"},Ge={key:0,class:"bg-red-700 rounded-sm"},Ze={key:1,class:"bg-green-500 rounded-sm"},Nt={__name:"absen",async setup(Qe){let D,J;const{$moment:R}=Be(),X=e=>e.deleted==1?"!bg-red-400":e.req_deleted==1?"!bg-yellow-300":e.ritase_val2==1?"!bg-blue-300":"",q=e=>(e.map(t=>{t.class_h=X(t)}),e);let z=s({clearCheckBox:!1});const x=s("Undone");Ae(()=>x.value,e=>{W.value.map(t=>{let m=["deleted_by_username","deleted_at","deleted_reason","req_deleted_by_username","req_deleted_at","req_deleted_reason"].indexOf(t.key)>-1;return["all","deleted","req_deleted"].indexOf(e)>-1?m&&(t.tbl_show=1):m&&(t.tbl_show=0),t}),G()},{immediate:!1});const r={};r._TimeZoneOffset=new Date().getTimezoneOffset(),r.sort="tanggal:desc";const K=s({}),A=s({from:"",to:""}),M=$e("token"),{data:ee}=([D,J]=Se(async()=>Me(async()=>{f().loading_full=!0;let e=[];const[t,m]=await Promise.all([V("/trx_trp/absens",{method:"get",headers:{Authorization:`Bearer ${M.value}`,Accept:"application/json"},params:{filter_status:x},retry:0})]);return t.status.value!=="error"&&(e=q(t.data.value.data)),t.status.value==="error"?(I().trigger(t.error),{trx_trps:e}):(f().loading_full=!1,{trx_trps:e})},"$Tkqpaz2JeJ")),D=await D,J(),D),n=s(ee.value.trx_trps||[]);s([]),s(!1);const O=s({field:"tanggal",by:"desc"}),_=s(-1),h=C(()=>n.value[_.value]),p=s({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),te=()=>{r.like="";let e=JSON.parse(JSON.stringify(f()._tv.global_keyword));e!=""&&(r.like=`id:%${e}%,xto:%${e}%,jenis:%${e}%,pv_no:%${e}%,ticket_a_no:%${e}%,ticket_b_no:%${e}%,no_pol:%${e}%,supir:%${e}%,kernet:%${e}%,cost_center_code:%${e}%,cost_center_desc:%${e}%,pvr_no:%${e}%,tanggal:%${e}%,transition_target:%${e}%,uj_asst_opt:%${e}%`),r.sort="",O.value.field&&(r.sort=O.value.field+":"+O.value.by),r.date_from=A.value.from?R(A.value.from).format("YYYY-MM-DD"):"",r.date_to=A.value.to?R(A.value.to).format("YYYY-MM-DD"):"",r.filter_model=JSON.stringify(f()._tv.filter_model)},L=async()=>{f().loading_full=!0,K.value={},p.value.may_get_data=!1,r.page=p.value.page,r.page==1&&(n.value=[]),r.first_row&&delete r.first_row,r.page>1&&(r.first_row=JSON.stringify(n.value[0])),r.filter_status=x.value;const{data:e,error:t,status:m}=await V("/trx_trp/absens",{method:"get",headers:{Authorization:`Bearer ${M.value}`,Accept:"application/json"},params:r,retry:0});if(f().loading_full=!1,p.value.may_get_data=!0,m.value==="error"){I().trigger(t,K);return}p.value.page==1?n.value=q(e.value.data):p.value.page>1&&(n.value=[...n.value,...q(e.value.data)]),e.value.data.length==0&&(p.value.is_last_record=!0),f()._tv.filter_box=!1},G=()=>{_.value=-1,p.value.page=1,p.value.is_last_record=!1,te(),L()},B=s(!1),Z=s(0),{display:P}=Te(),ae=()=>{_.value==-1?P({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(Z.value=n.value[_.value].id,B.value=!0)},$=s(!1),S=s(0),j=s(!1),le=()=>{_.value==-1?P({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(S.value=n.value[_.value].id,$.value=!0,j.value=!1)},se=()=>{_.value==-1?P({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(S.value=n.value[_.value].id,$.value=!0,j.value=!0)},Q=s(!1),oe=s(0),U=s([]),re=async()=>{f().loading_full=!0;const e=new FormData;e.append("ids",JSON.stringify(U.value)),e.append("_method","PUT");const{data:t,error:m,status:Y}=await V("/trx_trp/absen/clear_valval1",{method:"post",headers:{Authorization:`Bearer ${M.value}`,Accept:"application/json"},body:e,retry:0});if(f().loading_full=!1,Y.value==="error"){I().trigger(m);return}t.value.val_lists.forEach(y=>{let w=n.value.map(u=>u.id).indexOf(y.id);if(w>-1){let u=n.value[w];u.ritase_val=y.ritase_val,u.ritase_val1=y.ritase_val1,u.ritase_val2=y.ritase_val2,u.updated_at=y.updated_at,n.value.splice(w,1,{...u})}}),z.value.clearCheckBox=!0},W=s([{key:"cb",label:"",checkbox:"id"},{key:"no",label:"No",isai:!0},{key:"ritase_val",label:"App 1",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"ritase_val1",label:"App 2",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"ritase_val2",label:"App 3",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"id",label:"ID",filter_on:1,type:"number"},{key:"tanggal",label:"U.Jalan Per",type:"date",dateformat:"DD-MM-Y",filter_on:1,sort:{priority:1,type:"desc"}},{key:"no_pol",label:"No Pol",freeze:1,filter_on:1,type:"string"},{key:"ritase_leave_at",label:"B"},{key:"ritase_arrive_at",label:"T"},{key:"ritase_return_at",label:"K"},{key:"ritase_till_at",label:"S"},{key:"ritase_note",label:"Note"},{key:"xto",label:"Tujuan",filter_on:1,type:"string"},{key:"uj_asst_opt",label:"Info",filter_on:1,type:"select",select_item:["DENGAN KERNET","TANPA KERNET"]},{key:"tipe",label:"Tipe",filter_on:1,type:"string"},{key:"jenis",label:"Jenis",filter_on:1,type:"select",select_item:["TBS","TBSK","CPO","PK","LAIN"]},{key:"supir",label:"Supir",filter_on:1,type:"string"},{key:"kernet",label:"Kernet",filter_on:1,type:"string"},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"deleted_by_username",label:"Deleted By",tbl_show:0},{key:"deleted_at",label:"Deleted At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"deleted_reason",label:"Deleted Reason",tbl_show:0,type:"string",filter_on:1},{key:"req_deleted_by_username",label:"Req Deleted By",tbl_show:0},{key:"req_deleted_at",label:"Req Delete At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"req_deleted_reason",label:"Req Delete Reason",tbl_show:0,type:"string",filter_on:1}]),ne=C(()=>_.value>-1&&F().checkPermission("trp_trx.absen.view")),ie=C(()=>_.value>-1&&[void 0,0].indexOf(h.value.deleted)>-1&&[void 0,0].indexOf(h.value.req_deleted)>-1&&[void 0,0].indexOf(h.value.ritase_val)>-1&&F().checkPermission("trp_trx.absen.modify")),_e=C(()=>_.value>-1&&[void 0,0].indexOf(h.value.deleted)>-1&&[void 0,0].indexOf(h.value.req_deleted)>-1&&F().checkPermissions(["trp_trx.absen.val","trp_trx.absen.val1","trp_trx.absen.val2"]));return(e,t)=>{const m=me,Y=fe,y=ve,w=ye,u=be,b=xe,T=ke,de=ge,ue=he,pe=we,ce=De;return o(),d("div",Pe,[i(m,{title:"List Transaction"}),k("div",je,[k("div",Ue,[k("div",Ye,[k("div",Ie,[Ce(k("select",{class:"","onUpdate:modelValue":t[0]||(t[0]=a=>qe(x)?x.value=a:null)},He,512),[[Ne,l(x)]])]),l(ie)?(o(),d("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[1]||(t[1]=a=>ae())},[i(Y)])):N("",!0),l(ne)?(o(),d("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[2]||(t[2]=a=>se())},[i(y)])):N("",!0),l(_e)?(o(),d("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[3]||(t[3]=a=>le())},[i(w)])):N("",!0)]),k("div",Ve,[l(U).length>0?(o(),d("button",{key:0,type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:t[4]||(t[4]=a=>re())}," Multi UnVal ")):N("",!0)])]),i(de,{thead:l(W),selected:l(_),onSetSelected:t[5]||(t[5]=a=>_.value=a),tbody:l(n),fnCallData:L,scrolling:l(p),onSetScrollingPage:t[6]||(t[6]=a=>l(p).page=a),onDoFilter:t[7]||(t[7]=a=>G()),onSetCheckbox:t[8]||(t[8]=a=>U.value=a),deep_state:l(z)},{ritase_val:c(({item:a})=>[a.ritase_val?(o(),g(b,{key:1})):(o(),g(u,{key:0}))]),ritase_val1:c(({item:a})=>[a.ritase_val1?(o(),g(b,{key:1})):(o(),g(u,{key:0}))]),ritase_val2:c(({item:a})=>[a.ritase_val2?(o(),g(b,{key:1})):(o(),g(u,{key:0}))]),uj_asst_opt:c(({item:a})=>{var v;return[E(H((v=a.uj)==null?void 0:v.asst_opt),1)]}),ritase_leave_at:c(({item:a})=>[a.ritase_leave_at?(o(),d("div",Je,[i(b,{class:"text-white text-xl font-bold"})])):(o(),d("div",Fe,[i(T,{class:"text-white text-xl font-bold"})]))]),ritase_arrive_at:c(({item:a})=>[a.ritase_arrive_at?(o(),d("div",ze,[i(b,{class:"text-white text-xl font-bold"})])):(o(),d("div",Re,[i(T,{class:"text-white text-xl font-bold"})]))]),ritase_return_at:c(({item:a})=>[a.ritase_return_at?(o(),d("div",Le,[i(b,{class:"text-white text-xl font-bold"})])):(o(),d("div",Ke,[i(T,{class:"text-white text-xl font-bold"})]))]),ritase_till_at:c(({item:a})=>[a.ritase_till_at?(o(),d("div",Ze,[i(b,{class:"text-white text-xl font-bold"})])):(o(),d("div",Ge,[i(T,{class:"text-white text-xl font-bold"})]))]),deleted_by_username:c(({item:a})=>{var v;return[E(H((v=a.deleted_by)==null?void 0:v.username),1)]}),req_deleted_by_username:c(({item:a})=>{var v;return[E(H((v=a.req_deleted_by)==null?void 0:v.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling","deep_state"])]),i(ue,{show:l(B),fnClose:()=>{B.value=!1},id:l(Z),p_data:l(n)},null,8,["show","fnClose","id","p_data"]),i(pe,{show:l($),fnClose:()=>{$.value=!1},id:l(S),p_data:l(n),is_view:l(j),onSetID:t[9]||(t[9]=a=>S.value=a),onSetIndex:t[10]||(t[10]=a=>_.value=a)},null,8,["show","fnClose","id","p_data","is_view"]),i(ce,{show:l(Q),fnClose:()=>{Q.value=!1},index:l(oe),p_data:l(n)},null,8,["show","fnClose","index","p_data"])])}}};export{Nt as default};
