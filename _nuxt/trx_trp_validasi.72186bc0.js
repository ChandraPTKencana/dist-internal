import{_ as J}from"./HeaderPopup.vue.fe14bc58.js";import{_ as V}from"./WidthMiniPart.vue.6237c3c0.js";import{r as b,g as O,f as $,k as B,J as A,o as _,c as n,a as t,b as y,t as s,l as a,n as i,C as F,G as T,x as k,y as C}from"./entry.468c1924.js";import{u as g}from"./useUtils.f67a7b52.js";import{u as H}from"./useMyFetch.5d39e20e.js";import"./Times.725e6b46.js";import"./_plugin-vue_export-helper.c27b6911.js";const R={class:"box-fixed"},q={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},U={class:"w-full flex flex-col items-center grow overflow-auto"},L={class:"w-full flex flex-row flex-wrap"},E={class:"w-6/12 sm:w-3/12 md:w-2/12 lg:w-2/12 flex flex-col flex-wrap p-1"},K=t("label",{for:""},"U.Jalan Per",-1),z={class:"card-border"},G={class:"w-6/12 sm:w-3/12 md:w-2/12 lg:w-2/12 flex flex-col flex-wrap p-1"},W=t("label",{for:""},"Jenis",-1),Q={class:"card-border"},X={class:"w-6/12 sm:w-3/12 md:w-2/12 lg:w-2/12 flex flex-col flex-wrap p-1"},Z=t("label",{for:""},"Payment Method",-1),ee={class:"card-border"},ae={class:"w-6/12 sm:w-3/12 md:w-2/12 lg:w-2/12 flex flex-col flex-wrap p-1"},le=t("label",{for:""},"No Pol",-1),te={class:"card-border"},se={key:0,class:"w-full flex flex-wrap"},oe={class:"w-full sm:w-6/12 flex flex-col flex-wrap p-1"},re=t("label",{for:""},"Uang Jalan",-1),_e={class:"card-border"},ne={class:"w-full sm:w-6/12 flex flex-col flex-wrap p-1"},ie=t("label",{for:""},"Note For Remarks",-1),ve={class:"card-border"},de={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},ce=t("label",{for:""},"Supir",-1),ue={class:"card-border"},me={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},fe=t("label",{for:""},"Kernet",-1),pe={class:"card-border"},we={key:1,class:"w-full flex flex-wrap"},he={class:"w-6/12 sm:w-4/12 flex flex-col flex-wrap p-1"},xe=t("label",{for:""},"Cost Center Code",-1),be={class:"card-border"},ye={class:"w-6/12 sm:w-8/12 flex flex-col flex-wrap p-1"},ke=t("label",{for:""},"Cost Center Desc",-1),ge={class:"card-border"},Ye={class:"w-6/12 sm:w-8/12 flex flex-col flex-wrap p-1"},De=t("label",{for:""},"PVR No",-1),Me={class:"card-border"},Ne={class:"w-6/12 sm:w-4/12 flex flex-col flex-wrap p-1"},Ce=t("label",{for:""},"PVR Total",-1),He={class:"card-border"},Se={class:"w-6/12 sm:w-8/12 flex flex-col flex-wrap p-1"},je=t("label",{for:""},"PV",-1),Ie={class:"card-border"},Pe={class:"w-6/12 sm:w-4/12 flex flex-col flex-wrap p-1"},Je=t("label",{for:""},"PV Amount",-1),Ve={class:"card-border"},Oe={class:"w-full flex items-center justify-end"},$e={class:"w-full flex flex-wrap p-3 items-center"},Be=t("div",null," Di Validasi oleh : ",-1),Ae={key:0,class:"border-solid border-2 w-fit p-1 bg-slate-700 text-white text-xs"},Fe={key:0},Te={key:1},Re={key:2},qe={key:3},Ue={key:4},Le={key:5},Ee={key:6},aa={__name:"trx_trp_validasi",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]},is_view:{type:Boolean,required:!1,default:!1}},setup(w){const u=w,{$moment:c}=T(),{pointFormat:x}=g(),e=b({...{id:-1,tanggal:new Date,payment_method:{name:""},id_uj:-1,xto:"",tipe:"",jenis:"",amount:0,pv_id:-1,pv_no:"",pv_total:0,supir:"",kernet:"",no_pol:"",val:0,val_by:{username:""},val_at:"",val1:0,val1_by:{username:""},val1_at:"",val2:0,val2_by:{username:""},val2_at:"",val3:0,val3_by:{username:""},val3_at:"",val4:0,val4_by:{username:""},val4_at:"",val5:0,val5_by:{username:""},val5_at:"",val6:0,val6_by:{username:""},val6_at:"",cost_center_code:"",cost_center_desc:"",pvr_id:"",pvr_no:"",pvr_total:"",pvr_had_detail:""}}),Y=O("token"),D={_:{id:{tcon:"IconsBaselineNumbers",text:"ID",val:""},name:{tcon:"IconsPerson",text:"Nama",val:""},rek_no:{tcon:"IconsNumber",text:"No Rek",val:""},rek_name:{tcon:"IconsCreditCard",text:"Nama Rek",val:""}},id:-1,name:"",title:"",note:""},v=b(JSON.parse(JSON.stringify(D))),d=b(JSON.parse(JSON.stringify(D))),M={_raw:{},_:{id:{tcon:"IconsBaselineNumbers",text:"ID",val:""},xto:{tcon:"IconsLocationOn",text:"Tujuan",val:""},asst_opt:{tcon:"IconsPerson",text:"Info",val:""},tipe:{tcon:"",text:"Tipe",val:""},harga:{tcon:"IconsMoney",text:"Amount",val:""}},id:"",name:"",title:"",note:""},N=b(JSON.parse(JSON.stringify(M))),S=async()=>{k().loading_full=!0;const o=new FormData;let r="post",p=u.id;p==0||(o.append("id",p),o.append("_method","PUT"));const{data:l,error:m,status:h}=await H("/trx_trp_validasi",{method:r,headers:{Authorization:`Bearer ${Y.value}`,Accept:"application/json"},body:o,retry:0});if(k().loading_full=!1,h.value==="error"){C().trigger(m);return}e.value.val=l.value.val,e.value.val_user=l.value.val_user,e.value.val_by=l.value.val_by,e.value.val_at=l.value.val_at,e.value.val1=l.value.val1,e.value.val1_user=l.value.val1_user,e.value.val1_by=l.value.val1_by,e.value.val1_at=l.value.val1_at,e.value.val2=l.value.val2,e.value.val2_user=l.value.val2_user,e.value.val2_by=l.value.val2_by,e.value.val2_at=l.value.val2_at,e.value.val3=l.value.val3,e.value.val3_user=l.value.val3_user,e.value.val3_by=l.value.val3_by,e.value.val3_at=l.value.val3_at,e.value.val4=l.value.val4,e.value.val4_user=l.value.val4_user,e.value.val4_by=l.value.val4_by,e.value.val4_at=l.value.val4_at,e.value.val5=l.value.val5,e.value.val5_user=l.value.val5_user,e.value.val5_by=l.value.val5_by,e.value.val5_at=l.value.val5_at,e.value.val6=l.value.val6,e.value.val6_user=l.value.val6_user,e.value.val6_by=l.value.val6_by,e.value.val6_at=l.value.val6_at;let f=u.p_data.map(P=>P.id).indexOf(u.id);f>=-1&&u.p_data.splice(f,1,{...e.value}),u.fnClose()},j=o=>{let r=JSON.parse(JSON.stringify(M));return r._.id.val=o.id,r._.xto.val=o.xto,r._.asst_opt.val=o.asst_opt,r._.tipe.val=o.tipe,r._.harga.val=x(o.harga),r.id=o.id,r.name=o.xto,r.title=(o.asst_opt||"")+" "+(o.tipe||"")+" "+(x(o.harga)||""),r._raw=o,r},I=async()=>{k().loading_full=!0;const{data:o,error:r,status:p}=await H("/trx_trp",{method:"get",headers:{Authorization:`Bearer ${Y.value}`,Accept:"application/json"},params:{id:u.id},retry:0});if(k().loading_full=!1,p.value==="error"){C().trigger(r);return}let l=o.value.data;e.value=l,v.value._.id.val=l.supir_id,v.value._.name.val=l.supir,v.value._.rek_no.val=l.supir_rek_no,v.value._.rek_name.val=l.supir_rek_name,v.value.id=l.supir_id,v.value.name=l.supir,v.value.rek_no=(l.supir_rek_no||"")+" "+(l.supir_rek_name||""),d.value._.id.val=l.kernet_id,d.value._.name.val=l.kernet,d.value._.rek_no.val=l.kernet_rek_no,d.value._.rek_name.val=l.kernet_rek_name,d.value.id=l.kernet_id,d.value.name=l.kernet,d.value.rek_no=(l.kernet_rek_no||"")+" "+(l.kernet_rek_name||""),N.value=j(l.uj);let m=0,h=0;l.potongan.forEach(f=>{f.potongan_mst.employee_id==l.supir_id&&(m+=parseInt(f.nominal_cut)),f.potongan_mst.employee_id==l.kernet_id&&(h+=parseInt(f.nominal_cut))}),v.value.note="",d.value.note="",m>0&&(v.value.note="Telah di potong sebesar :"+g().pointFormat(m)),h>0&&(d.value.note="Telah di potong sebesar :"+g().pointFormat(h))};return $(()=>u.show,(o,r)=>{o==!0&&I()},{immediate:!0}),(o,r)=>{const p=J,l=V;return B((_(),n("section",R,[t("div",null,[y(p,{title:"Form Transaction Validation",fn:w.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),t("form",q,[t("div",U,[t("div",L,[t("div",E,[K,t("div",z,s(a(e).tanggal?a(c)(a(e).tanggal).format("DD-MM-YYYY"):""),1)]),t("div",G,[W,t("div",Q,s(a(e).jenis),1)]),t("div",X,[Z,t("div",ee,s(a(e).payment_method.name),1)]),t("div",ae,[le,t("div",te,s(a(e).no_pol),1)]),a(e).jenis!=""?(_(),n("div",se,[t("div",oe,[re,t("div",_e,[y(l,{selected:a(N)},null,8,["selected"])])]),t("div",ne,[ie,t("div",ve,s(a(e).note_for_remarks),1)])])):i("",!0),t("div",de,[ce,t("div",ue,[y(l,{selected:a(v)},null,8,["selected"])])]),t("div",me,[fe,t("div",pe,[y(l,{selected:a(d)},null,8,["selected"])])]),a(e).jenis!=""?(_(),n("div",we,[t("div",he,[xe,t("div",be,s(a(e).cost_center_code),1)]),t("div",ye,[ke,t("div",ge,s(a(e).cost_center_desc),1)]),t("div",Ye,[De,t("div",Me,s(a(e).pvr_no),1)]),t("div",Ne,[Ce,t("div",He,s(a(x)(a(e).pvr_total||0)),1)]),t("div",Se,[je,t("div",Ie,s(a(e).pv_no),1)]),t("div",Pe,[Je,t("div",Ve,s(a(x)(a(e).pv_total||0)),1)])])):i("",!0)])]),t("div",Oe,[t("div",$e,[Be,a(e).val||a(e).val1||a(e).val2||a(e).val3||a(e).val4||a(e).val5||a(e).val6?(_(),n("div",Ae,[a(e).val?(_(),n("div",Fe," Kasir : "+s(a(e).val_by.username)+" ( "+s(a(e).val_at?a(c)(a(e).val_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):i("",!0),a(e).val1?(_(),n("div",Te," Mandor : "+s(a(e).val1_by.username)+" ( "+s(a(e).val1_at?a(c)(a(e).val1_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):i("",!0),a(e).val2?(_(),n("div",Re," KTU/W : "+s(a(e).val2_by.username)+" ( "+s(a(e).val2_at?a(c)(a(e).val2_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):i("",!0),a(e).val3?(_(),n("div",qe," Marketing : "+s(a(e).val3_by.username)+" ( "+s(a(e).val3_at?a(c)(a(e).val3_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):i("",!0),a(e).val4?(_(),n("div",Ue," Logistik : "+s(a(e).val4_by.username)+" ( "+s(a(e).val4_at?a(c)(a(e).val4_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):i("",!0),a(e).val5?(_(),n("div",Le," SPV Logistik : "+s(a(e).val5_by.username)+" ( "+s(a(e).val5_at?a(c)(a(e).val5_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):i("",!0),a(e).val6?(_(),n("div",Ee," MGR Logistik : "+s(a(e).val6_by.username)+" ( "+s(a(e).val6_at?a(c)(a(e).val6_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):i("",!0)])):i("",!0)]),t("button",{type:"button",name:"button",class:"w-36 m-1",onClick:r[0]||(r[0]=m=>w.fnClose())}," Cancel "),w.is_view==0?(_(),n("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:r[1]||(r[1]=F(m=>S(),["prevent"]))}," Validasi ")):i("",!0)])])])],512)),[[A,w.show]])}}};export{aa as default};
