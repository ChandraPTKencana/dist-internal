import ne from"./Header.973bd304.js";import ie from"./PrinterEye.6996f475.js";import _e from"./Table2Column.ee295a9b.js";import ce from"./Eyes.d5f37100.js";import de from"./Image.b1f97570.js";import pe from"./Line.84256359.js";import ue from"./Check.9ccf93e4.js";import fe from"./TableView.a6f6598c.js";import me from"./Times.d1edbe5a.js";import{_ as ye}from"./HeaderPopup.vue.891fa2bd.js";import{r as d,f as ve,g as he,h as be,x as _,i as ke,c as x,a as e,b as g,k as K,v as ge,l as s,m as xe,d as w,w as p,n as J,J as we,t as n,F as B,D as L,q as De,y as A,o as a,z as i,H as $e,G as Ae}from"./entry.cd89349b.js";import{u as Te}from"./useUtils.ba8d89ba.js";import{u as T}from"./useMyFetch.b49701aa.js";import{u as Ce}from"./useDownload.174f4da2.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Search.c49a73f1.js";import"./Adjust.6553f7b2.js";import"./TableHeaderEye.b6bfe28e.js";import"./ClearAll.7ef23700.js";import"./client-only.e285d0a8.js";import"./ClearEach.9060ad73.js";import"./CaretLeftDoubleBold.a24a03f5.js";import"./CaretLeftBold.64d595b1.js";import"./CaretRightBold.c7b9dc63.js";import"./CaretRightDoubleBold.60dab2da.js";const Ne={class:"w-full h-full flex flex-col"},Re={class:"w-full flex grow flex-col overflow-auto h-0"},Pe={class:"w-full flex justify-between flex-wrap"},Se={class:"grow flex"},Me={class:"m-1"},qe=$e('<option value="pv_not_done">Undone</option><option value="pv_done">Done</option><option value="deleted">Trash</option><option value="all">All</option><option value="req_deleted">Req Delete</option>',5),je=[qe],Ue=e("span",{class:"text-xs ml-1"}," PDF ",-1),Fe=e("span",{class:"text-xs ml-1"}," Excel ",-1),Be={key:0,class:"w-full h-full flex items-center justify-center fixed top-0 left-0 z-20 p-3",style:{"background-color":"rgba(255,255,255,0.9)"}},Ye={class:"relative",style:{width:"95%",height:"90%"}},Ee={class:"absolute -top-7 right-0 bg-white",style:{position:"absolute",padding:"5px 10px",border:"solid 1px #ccc","border-bottom":"none","border-top-right-radius":"5px","border-top-left-radius":"5px"}},Ie=["src"],ze={class:"w-full h-full fixed top-0 left-0 bg-gray-100 bg-opacity-80 flex items-center justify-center z-10"},He={class:"w-full sm:w-10/12 md:w-8/12 lg:w-6/12 bg-white flex flex-col border-solid border-gray-200 max-w-full max-h-full",style:{"border-width":"1px"}},Ve={class:"p-1 flex flex-wrap overflow-auto items-start"},Ke={class:"w-full sm:w-1/2 flex flex-wrap"},Je={class:"flex flex-col m-2"},Le=e("span",{class:"text-xs"}," To ",-1),Oe={class:""},Ge={class:"flex flex-col m-2"},We=e("span",{class:"text-xs"}," Tipe ",-1),Ze={class:""},Qe={class:"flex flex-col m-2"},Xe=e("span",{class:"text-xs"}," Jenis ",-1),et={class:""},tt={class:"flex flex-col m-2"},lt=e("span",{class:"text-xs"}," Ket. Untuk Remarks ",-1),ot={class:""},st={class:"w-full sm:w-1/2 text-sm flex justify-center"},at={class:"border border-collapse border-black"},rt=e("tr",null,[e("th",{colspan:"4",class:"bg-blue-400"}," List Uang Jalan ")],-1),nt={class:"p-1"},it={class:"p-1"},_t=e("td",{class:"p-1"},"= Rp.",-1),ct={class:"text-right p-1"},dt={class:"border-t-black border-dashed",style:{"border-top-width":"1px"}},pt=e("th",{colspan:"2",class:"text-right"},"Total",-1),ut=e("th",{class:"p-1 text-right"},"Rp.",-1),ft={class:"p-1 text-right"},mt={class:"w-full mt-2 text-sm flex justify-center"},yt={class:"border border-collapse border-black"},vt=e("tr",null,[e("th",{colspan:"5",class:"bg-blue-400"}," List PVR ")],-1),ht={class:"p-1"},bt={class:"p-1"},kt={class:"p-1"},gt=e("td",{class:"p-1"},"= Rp.",-1),xt={class:"text-right p-1"},wt={class:"border-t-black border-dashed",style:{"border-top-width":"1px"}},Dt=e("th",{colspan:"2",class:"text-right"},"Total",-1),$t=e("th",{class:"p-1 text-right"},"Rp.",-1),At={class:"p-1 text-right"},Tt={class:"flex p-1 justify-end flex-wrap"},ol={__name:"finance",async setup(Ct){let C,Y;const{$moment:E}=Ae(),{pointFormat:y}=Te(),O=l=>l.deleted==1?"!bg-red-400":l.pvr_id>0&&l.req_deleted==1?"!bg-yellow-300":l.pv_id>0?"!bg-blue-300":"",S=l=>(l.map(o=>{o.class_h=O(o)}),l),v=d("pv_not_done");ve(()=>v.value,l=>{z()},{immediate:!1});const r={};r._TimeZoneOffset=new Date().getTimezoneOffset(),r.sort="tanggal:desc";const M=d({}),N=d({from:"",to:""}),D=he("token"),{data:G}=([C,Y]=be(async()=>De(async()=>{_().loading_full=!0;let l=[];const[o,f]=await Promise.all([T("/trx_trps/dataFin",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:{filter_status:v},retry:0})]);return o.status.value!=="error"&&(l=S(o.data.value.data)),o.status.value==="error"?(A().trigger(o.error),{trx_trps:l}):(_().loading_full=!1,{trx_trps:l})},"$mHT2RIPzaD")),C=await C,Y(),C),h=d(G.value.trx_trps||[]),q=d({field:"tanggal",by:"desc"}),$=d(-1),u=d({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),j=()=>{r.like="";let l=JSON.parse(JSON.stringify(_()._tv.global_keyword));l!=""&&(r.like=`id:%${l}%,xto:%${l}%,jenis:%${l}%,pv_no:%${l}%,ticket_a_no:%${l}%,ticket_b_no:%${l}%,no_pol:%${l}%,supir:%${l}%,kernet:%${l}%,cost_center_code:%${l}%,cost_center_desc:%${l}%,pvr_no:%${l}%,tanggal:%${l}%,transition_target:%${l}%,uj_asst_opt:%${l}%`),r.sort="",q.value.field&&(r.sort=q.value.field+":"+q.value.by),r.date_from=N.value.from?E(N.value.from).format("YYYY-MM-DD"):"",r.date_to=N.value.to?E(N.value.to).format("YYYY-MM-DD"):"",r.filter_model=JSON.stringify(_()._tv.filter_model),r.filter_status=v.value},I=async()=>{_().loading_full=!0,M.value={},u.value.may_get_data=!1,r.page=u.value.page,r.page==1&&(h.value=[]),r.first_row&&delete r.first_row,r.page>1&&(r.first_row=JSON.stringify(h.value[0])),r.filter_status=v.value;const{data:l,error:o,status:f}=await T("/trx_trps/dataFin",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:r,retry:0});if(_().loading_full=!1,u.value.may_get_data=!0,f.value==="error"){A().trigger(o,M);return}u.value.page==1?h.value=S(l.value.data):u.value.page>1&&(h.value=[...h.value,...S(l.value.data)]),l.value.data.length==0&&(u.value.is_last_record=!0),_()._tv.filter_box=!1},z=()=>{$.value=-1,u.value.page=1,u.value.is_last_record=!1,j(),I()},W=d([{key:"no",label:"No",isai:!0},{key:"val",label:"APP",childs:[{key:"val",label:"Kasir",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val1",label:"Mandor",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val2",label:"KTU/W",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val3",label:"Marketing",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val4",label:"Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val5",label:"SPV Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]}]},{key:"id",label:"ID",filter_on:1,type:"number"},{key:"absen",label:"Absen"},{key:"tanggal",label:"U.Jalan Per",type:"date",dateformat:"DD-MM-Y",filter_on:1,sort:{priority:1,type:"desc"}},{key:"no_pol",label:"No Pol",freeze:1,filter_on:1,type:"string"},{key:"xto",label:"Tujuan",filter_on:1,type:"string"},{key:"uj_asst_opt",label:"Info",filter_on:1,type:"select",select_item:["DENGAN KERNET","TANPA KERNET"]},{key:"tipe",label:"Tipe",filter_on:1,type:"string"},{key:"jenis",label:"Jenis",filter_on:1,type:"select",select_item:["TBS","TBSK","CPO","PK","LAIN"]},{key:"amount",label:"Amount",class:" justify-end",filter_on:1,type:"number"},{key:"transition",label:"Peralihan",childs:[{key:"transition_type",label:"Type",type:"select",filter_on:1,select_item:["To","From"]},{key:"transition_target",label:"Target",type:"select",filter_on:1,select_item:_().list_pabrik}]},{key:"cost_center",label:"Cost Center",childs:[{key:"cost_center_code",label:"Code",type:"string",class:" justify-start",filter_on:1},{key:"cost_center_desc",label:"Desc",filter_on:1,type:"string"}]},{key:"pvr",label:"PVR",childs:[{key:"pvr_no",label:"No",filter_on:1,type:"string"},{key:"pvr_total",label:"Total",filter_on:1,type:"number"},{key:"pvr_had_detail",label:"Completed",filter_on:1,type:"select",select_item:[{k:"1",v:"Completed"},{k:"0",v:"Uncompleted"}]}]},{key:"pv",label:"PV",childs:[{key:"pv_datetime",label:"Date",type:"date",dateformat:"DD-MM-Y",filter_on:1},{key:"pv_no",label:"No",filter_on:1,type:"string"},{key:"pv_total",label:"Total",filter_on:1,type:"number"}]},{key:"supir",label:"Supir",filter_on:1,type:"string"},{key:"supir_rek_no",label:"No Rek Supir",filter_on:1,type:"string"},{key:"supir_rek_name",label:"Nama Rek Supir",filter_on:1,type:"string"},{key:"kernet",label:"Kernet",filter_on:1,type:"string"},{key:"kernet_rek_no",label:"No Rek Kernet",filter_on:1,type:"string"},{key:"kernet_rek_name",label:"Nama Rek Kernet",filter_on:1,type:"string"},{key:"payment_method_name",label:"Payment Method Name",type:"string"},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"deleted_by_username",label:"Deleted By",tbl_show:0},{key:"deleted_at",label:"Deleted At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"deleted_reason",label:"Deleted Reason",tbl_show:0,type:"string",filter_on:1},{key:"req_deleted_by_username",label:"Req Deleted By",tbl_show:0},{key:"req_deleted_at",label:"Req Delete At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"req_deleted_reason",label:"Req Delete Reason",tbl_show:0,type:"string",filter_on:1}]),{downloadFile:H,viewFile:Nt}=Ce(),R=d(!1),U=d(""),V=async()=>{if(R.value==!0){R.value=!1;return}j(),_().loading_full=!0;const{data:l,error:o,status:f}=await T("/trx_trps/reportFinPDF",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:r,retry:0});if(_().loading_full=!1,f.value==="error"){A().trigger(o);return}U.value=l.value,R.value=!0},Z=async(l="")=>{j(),_().loading_full=!0;const{data:o,error:f,status:F}=await T("/trx_trps/reportFinExcel",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:r,retry:0});if(_().loading_full=!1,F.value==="error"){A().trigger(f);return}H(o.value)},Q=()=>{H(U.value)},P=d(!1),m=d({...{id:-1,xto:"",tipe:"",jenis:"",harga:0,note_for_remarks:"",details:[],details2:[]}}),X=async()=>{$.value==-1&&display({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}),_().loading_full=!0;const{data:l,error:o,status:f}=await T("/ujalan_",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:{id:h.value[$.value].id_uj},retry:0});if(_().loading_full=!1,f.value==="error"){A().trigger(o,M);return}m.value=l.value.data,P.value=!0},ee=ke(()=>{let l=0;return m.value.details2.forEach(o=>{o.p_status!="Remove"&&(l+=o.qty*o.amount)}),l});return(l,o)=>{const f=ne,F=ie,te=_e,le=ce,oe=de,b=pe,k=ue,se=fe,ae=me,re=ye;return a(),x(B,null,[e("div",Ne,[g(f,{title:"List Transaction"}),e("div",Re,[e("div",Pe,[e("div",Se,[e("div",Me,[K(e("select",{class:"","onUpdate:modelValue":o[0]||(o[0]=t=>xe(v)?v.value=t:null)},je,512),[[ge,s(v)]])]),e("button",{type:"button",name:"button",class:"m-1 text-2xl flex items-center",onClick:o[1]||(o[1]=t=>V())},[g(F),w(),Ue]),e("button",{type:"button",name:"button",class:"m-1 text-2xl flex items-center",onClick:o[2]||(o[2]=t=>Z())},[g(te),w(),Fe]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:o[3]||(o[3]=t=>X())},[g(le)])])]),g(se,{thead:s(W),selected:s($),onSetSelected:o[4]||(o[4]=t=>$.value=t),tbody:s(h),fnCallData:I,scrolling:s(u),onSetScrollingPage:o[5]||(o[5]=t=>s(u).page=t),onDoFilter:o[6]||(o[6]=t=>z())},{absen:p(({item:t,index:c})=>[t.trx_absens&&t.trx_absens.length>0?(a(),i(oe,{key:0,class:"cursor-pointer",onClick:Pt=>l.form_absen(c)},null,8,["onClick"])):J("",!0)]),val:p(({item:t})=>[t.val?(a(),i(k,{key:1})):(a(),i(b,{key:0}))]),val1:p(({item:t})=>[t.val1?(a(),i(k,{key:1})):(a(),i(b,{key:0}))]),val2:p(({item:t})=>[t.val2?(a(),i(k,{key:1})):(a(),i(b,{key:0}))]),val3:p(({item:t})=>[t.val3?(a(),i(k,{key:1})):(a(),i(b,{key:0}))]),val4:p(({item:t})=>[t.val4?(a(),i(k,{key:1})):(a(),i(b,{key:0}))]),val5:p(({item:t})=>[t.val5?(a(),i(k,{key:1})):(a(),i(b,{key:0}))]),uj_asst_opt:p(({item:t})=>{var c;return[w(n((c=t.uj)==null?void 0:c.asst_opt),1)]}),payment_method_name:p(({item:t})=>{var c;return[w(n((c=t.payment_method)==null?void 0:c.name),1)]}),pvr_had_detail:p(({item:t})=>[t.pvr_had_detail?(a(),i(k,{key:1})):(a(),i(b,{key:0}))]),deleted_by_username:p(({item:t})=>{var c;return[w(n((c=t.deleted_by)==null?void 0:c.username),1)]}),req_deleted_by_username:p(({item:t})=>{var c;return[w(n((c=t.req_deleted_by)==null?void 0:c.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling"])])]),s(R)?(a(),x("div",Be,[e("div",Ye,[e("div",Ee,[g(ae,{style:{color:"black",cursor:"pointer"},onClick:o[7]||(o[7]=t=>V())})]),e("iframe",{ref:"iframe",width:"100%",height:"100%",src:s(U).dataBase64},null,8,Ie),e("div",{style:{position:"absolute",top:"12px",right:"88px","background-color":"rgba(255,255,255,0)",width:"37px",height:"36px","z-index":"1",cursor:"pointer"},onClick:o[8]||(o[8]=t=>Q())})])])):J("",!0),K(e("div",ze,[e("div",He,[g(re,{title:"Detail Information",fn:()=>{P.value=!1,l.show_confirm=!1},class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",Ve,[e("div",Ke,[e("div",Je,[Le,e("div",Oe,n(s(m).xto)+" ",1)]),e("div",Ge,[We,e("div",Ze,n(s(m).tipe),1)]),e("div",Qe,[Xe,e("div",et,n(s(m).jenis),1)]),e("div",tt,[lt,e("div",ot,n(s(m).note_for_remarks),1)])]),e("div",st,[e("table",at,[rt,(a(!0),x(B,null,L(s(m).details,t=>(a(),x("tr",null,[e("td",nt,n(t.ordinal)+". ",1),e("td",it,n(t.xdesc)+" "+n(t.qty<=1?"":s(y)(t.qty||0)+" x Rp."+s(y)(t.harga||0)),1),_t,e("td",ct,n(s(y)(t.qty*t.harga)),1)]))),256)),e("tr",dt,[pt,ut,e("th",ft,n(s(y)(s(m).harga)),1)])])]),e("div",mt,[e("table",yt,[vt,(a(!0),x(B,null,L(s(m).details2,t=>(a(),x("tr",null,[e("td",ht,n(t.ordinal)+". ",1),e("td",bt,n(t.ac_account_code),1),e("td",kt,n(t.description)+" "+n(t.qty<=1?"":s(y)(t.qty||0)+" x Rp."+s(y)(t.amount||0)),1),gt,e("td",xt,n(s(y)(t.qty*t.amount)),1)]))),256)),e("tr",wt,[Dt,$t,e("th",At,n(s(y)(s(ee))),1)])])])]),e("div",Tt,[e("button",{class:"rounded m-1",onClick:o[9]||(o[9]=t=>P.value=!1)}," Cancel ")])])],512),[[we,s(P)]])],64)}}};export{ol as default};
