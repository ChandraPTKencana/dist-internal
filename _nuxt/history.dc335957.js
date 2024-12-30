import me from"./Edit.dce4344c.js";import pe from"./Eyes.da25c106.js";import fe from"./Signature.583615e8.js";import{_ as ve}from"./client-only.e189025b.js";import ye from"./Search.dc4ae93e.js";import be from"./Image.df358fcf.js";import we from"./Line.35bf4960.js";import xe from"./Check.01cb2ea1.js";import he from"./TableView.98b9fd7f.js";import ge from"./trx_trp.589ae0ab.js";import ke from"./trx_trp_validasi.6808b795.js";import De from"./trx_absen.fd32ae5d.js";import{r as n,g as $e,i as Ce,j as Se,f as Me,I as Te,o as d,c as D,k as w,J as Ve,a as l,l as e,b as u,n as $,w as m,t as C,m as J,A as Ae,v as B,C as qe,z as p,d as z,F as Ye,x as E,y as Ie,H as Be,G as Fe}from"./entry.622940e4.js";import{u as He}from"./useMyFetch.83f6fc10.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Adjust.dcbba02e.js";import"./TableHeaderEye.669aa100.js";import"./Times.4935bce4.js";import"./ClearAll.7a606fcd.js";import"./ClearEach.7ad82d61.js";import"./CaretLeftDoubleBold.dcc301af.js";import"./CaretLeftBold.be2d89c6.js";import"./CaretRightBold.455205fd.js";import"./CaretRightDoubleBold.07819556.js";import"./useUtils.3d22bd33.js";import"./HeaderPopup.vue.01948059.js";import"./WidthMiniList.vue.03c3a04b.js";import"./WidthMiniPart.vue.8d7af79a.js";import"./PopupMini.vue.c340a904.js";import"./Exclamation.3a10a9b9.js";const Ne={class:"p-1 grow"},je={class:"bg-white h-full flex flex-col"},Oe={action:"#",class:"w-full flex flex-wrap text-xs"},Ue={class:"w-6/12 p-1 sm:w-4/12 md:w-4/12 lg:w-2/12 flex flex-col"},Re=l("div",{class:"font-bold"}," Tgl Dari ",-1),Pe={class:"text-red-500"},Je={class:"w-6/12 p-1 sm:w-4/12 md:w-4/12 lg:w-2/12 flex flex-col"},ze=l("div",{class:"font-bold"}," Tgl Sampai ",-1),Ee={class:"text-red-500"},Ke={class:"w-6/12 p-1 sm:w-4/12 md:w-4/12 lg:w-3/12 flex flex-col"},Le=l("div",{class:"font-bold"}," Keyword ",-1),Ge={class:"w-6/12 p-1 sm:w-4/12 md:w-4/12 lg:w-2/12 flex flex-col"},Ze=l("div",{class:"font-bold"}," Status ",-1),Qe=l("option",{value:"ritase_done"},"Done",-1),We=l("option",{value:"deleted"},"Trash",-1),Xe=l("option",{value:"all"},"All",-1),et=l("option",{value:"req_deleted"},"Req Delete",-1),tt=[Qe,We,Xe,et],ot={class:"w-6/12 p-1 sm:w-4/12 md:w-4/12 lg:w-1/12 flex flex-col"},lt=l("div",{class:"font-bold"}," Sort By ",-1),st=Be('<option value=""></option><option value="id">ID</option><option value="xto">To</option><option value="jenis">Jenis</option><option value="tipe">Tipe</option>',5),at=[st],nt={class:"w-4/12 p-1 sm:w-3/12 md:w-3/12 lg:w-1/12 flex flex-col"},rt=l("div",{class:"font-bold"}," Sort Order ",-1),it=l("option",{value:"asc"},"Asc",-1),_t=l("option",{value:"desc"},"Desc",-1),dt=[it,_t],ut={class:"w-2/12 sm:w-1/12 md:w-1/12 lg:w-1/12 p-1 flex items-end"},Pt={__name:"history",props:{show:{type:Boolean,required:!0}},setup(F){const K=F,{$moment:H}=Fe(),v=n("ritase_done"),L=s=>s.deleted==1?"!bg-red-400":s.req_deleted==1?"!bg-yellow-300":s.ritase_val==1?"!bg-blue-300":"",N=s=>(s.map(o=>{o.class_h=L(o)}),s),r={};r._TimeZoneOffset=new Date().getTimezoneOffset(),r.sort="tanggal:desc";const x=n({}),f=n({from:"",to:""}),G=$e("token"),i=n([]),Z=n([]),Q=n([]),W=n(!1),a=n(""),y=n({field:"tanggal",by:"desc"}),_=n(-1),S=Ce(()=>i.value[_.value]),c=n({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),X=()=>{r.like="",a.value!=""&&(r.like=`id:%${a.value}%,xto:%${a.value}%,jenis:%${a.value}%,pv_no:%${a.value}%,ticket_a_no:%${a.value}%,ticket_b_no:%${a.value}%,no_pol:%${a.value}%,supir:%${a.value}%,kernet:%${a.value}%,cost_center_code:%${a.value}%,cost_center_desc:%${a.value}%,pvr_id:%${a.value}%,pvr_no:%${a.value}%,tanggal:%${a.value}%,transition_target:%${a.value}%`),r.sort="",y.value.field&&(r.sort=y.value.field+":"+y.value.by),r.date_from=f.value.from?H(f.value.from).format("YYYY-MM-DD"):"",r.date_to=f.value.to?H(f.value.to).format("YYYY-MM-DD"):""},M=async()=>{E().loading_full=!0,x.value={},c.value.may_get_data=!1,r.page=c.value.page,r.page==1&&(i.value=[]),r.first_row&&delete r.first_row,r.page>1&&(r.first_row=JSON.stringify(i.value[0])),r.filter_status=v.value;const{data:s,error:o,status:I}=await He("/trx_trps",{method:"get",headers:{Authorization:`Bearer ${G.value}`,Accept:"application/json"},params:r,retry:0});if(E().loading_full=!1,c.value.may_get_data=!0,I.value==="error"){Ie().trigger(o,x);return}c.value.page==1?i.value=N(s.value.data):c.value.page>1&&(i.value=[...i.value,...N(s.value.data)]),s.value.data.length==0&&(c.value.is_last_record=!0)},ee=()=>{U.value.map(s=>{let o=["deleted_by_username","deleted_at","deleted_reason","req_deleted_by_username","req_deleted_at","req_deleted_reason"].indexOf(s.key)>-1;return["all","deleted","req_deleted"].indexOf(v.value)>-1?o&&(s.tbl_show=1):o&&(s.tbl_show=0),s}),_.value=-1,c.value.page=1,c.value.is_last_record=!1,X(),M()},T=n(!1),j=n(0),{display:V}=Se(),te=()=>{_.value==-1?V({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(j.value=i.value[_.value].id,T.value=!0)},h=n(!1),A=n(0),q=n(!1),oe=()=>{_.value==-1?V({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(A.value=i.value[_.value].id,h.value=!0,q.value=!1)},le=()=>{_.value==-1?V({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(A.value=i.value[_.value].id,h.value=!0,q.value=!0)},Y=n(!1),O=n(0),se=s=>{O.value=s,Y.value=!0},U=n([{key:"no",label:"No",isai:!0},{key:"app1",label:"A1"},{key:"app2",label:"A2"},{key:"app3",label:"A3"},{key:"id",label:"ID"},{key:"absen",label:"Absen"},{key:"tanggal",label:"U.Jalan Per",dateformat:"DD-MM-Y"},{key:"no_pol",label:"No Pol",freeze:1},{key:"xto",label:"Tujuan"},{key:"tipe",label:"Tipe"},{key:"jenis",label:"Jenis"},{key:"amount",label:"Amount",class:" justify-end"},{key:"supir",label:"Supir"},{key:"kernet",label:"Kernet"},{key:"created_at",label:"Created At",dateformat:"DD-MM-Y HH:mm:ss"},{key:"updated_at",label:"Updated At",dateformat:"DD-MM-Y HH:mm:ss"},{key:"deleted_by_username",label:"Deleted By",tbl_show:0},{key:"deleted_at",label:"Deleted At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0},{key:"deleted_reason",label:"Deleted Reason",tbl_show:0},{key:"req_deleted_by_username",label:"Req Deleted By",tbl_show:0},{key:"req_deleted_at",label:"Req Delete At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0},{key:"req_deleted_reason",label:"Req Delete Reason",tbl_show:0}]);return Me(()=>K.show,(s,o)=>{s==!0&&M()},{immediate:!0}),(s,o)=>{const I=me,ae=pe,ne=fe,R=Te("vue-date-picker"),P=ve,re=ye,ie=be,g=we,k=xe,_e=he,de=ge,ue=ke,ce=De;return d(),D(Ye,null,[w(l("section",Ne,[l("div",je,[l("div",null,[["pv_not_done","all"].indexOf(e(v))>-1&&e(_)>-1&&e(S).deleted==0&&e(S).pvr_id==""?(d(),D("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:o[0]||(o[0]=t=>te())},[u(I)])):$("",!0),e(_)>-1?(d(),D("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:o[1]||(o[1]=t=>le())},[u(ae)])):$("",!0),e(v)=="pv_not_done"&&e(_)>-1&&e(S).val==0?(d(),D("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:o[2]||(o[2]=t=>oe())},[u(ne)])):$("",!0)]),l("form",Oe,[l("div",Ue,[Re,u(P,null,{default:m(()=>[u(R,{modelValue:e(f).from,"onUpdate:modelValue":o[3]||(o[3]=t=>e(f).from=t),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":"",class:"flex-grow"},null,8,["modelValue"])]),_:1}),l("p",Pe,C(e(x).date_from),1)]),l("div",Je,[ze,u(P,null,{default:m(()=>[u(R,{modelValue:e(f).to,"onUpdate:modelValue":o[4]||(o[4]=t=>e(f).to=t),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":"",class:"flex-grow"},null,8,["modelValue"])]),_:1}),l("p",Ee,C(e(x).date_to),1)]),l("div",Ke,[Le,w(l("input",{class:"flex-grow",type:"text","onUpdate:modelValue":o[5]||(o[5]=t=>J(a)?a.value=t:null),name:"search",placeholder:"Keyword"},null,512),[[Ae,e(a)]])]),l("div",Ge,[Ze,w(l("select",{class:"","onUpdate:modelValue":o[6]||(o[6]=t=>J(v)?v.value=t:null)},tt,512),[[B,e(v)]])]),l("div",ot,[lt,w(l("select",{class:"flex-grow","onUpdate:modelValue":o[7]||(o[7]=t=>e(y).field=t)},at,512),[[B,e(y).field]])]),l("div",nt,[rt,w(l("select",{class:"flex-grow","onUpdate:modelValue":o[8]||(o[8]=t=>e(y).by=t)},dt,512),[[B,e(y).by]])]),l("div",ut,[l("button",{class:"",type:"submit",name:"button",onClick:o[9]||(o[9]=qe(t=>ee(),["prevent"]))},[u(re,{class:"text-xl"})])])]),u(_e,{thead:e(U),selected:e(_),onSetSelected:o[10]||(o[10]=t=>_.value=t),tbody:e(i),fnCallData:M,scrolling:e(c),onSetScrollingPage:o[11]||(o[11]=t=>e(c).page=t)},{absen:m(({item:t,index:b})=>[t.trx_absens&&t.trx_absens.length>0?(d(),p(ie,{key:0,class:"cursor-pointer",onClick:ct=>se(b)},null,8,["onClick"])):$("",!0)]),app1:m(({item:t})=>[t.val?(d(),p(k,{key:1})):(d(),p(g,{key:0}))]),app2:m(({item:t})=>[t.val1?(d(),p(k,{key:1})):(d(),p(g,{key:0}))]),app3:m(({item:t})=>[t.val2?(d(),p(k,{key:1})):(d(),p(g,{key:0}))]),pvr_completed:m(({item:t})=>[t.pvr_had_detail?(d(),p(k,{key:1})):(d(),p(g,{key:0}))]),deleted_by_username:m(({item:t})=>{var b;return[z(C((b=t.deleted_by)==null?void 0:b.username),1)]}),req_deleted_by_username:m(({item:t})=>{var b;return[z(C((b=t.req_deleted_by)==null?void 0:b.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling"])])],512),[[Ve,F.show]]),u(de,{show:e(T),fnClose:()=>{T.value=!1},id:e(j),p_data:e(i),list_pv:e(Q),list_cost_center:e(Z),online_status:e(W)},null,8,["show","fnClose","id","p_data","list_pv","list_cost_center","online_status"]),u(ue,{show:e(h),fnClose:()=>{h.value=!1},id:e(A),p_data:e(i),is_view:e(q)},null,8,["show","fnClose","id","p_data","is_view"]),u(ce,{show:e(Y),fnClose:()=>{Y.value=!1},index:e(O),p_data:e(i)},null,8,["show","fnClose","index","p_data"])],64)}}};export{Pt as default};