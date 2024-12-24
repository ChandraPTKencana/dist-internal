import{_ as N}from"./HeaderPopup.vue.891fa2bd.js";import{_ as C}from"./WidthMiniPart.vue.19b26423.js";import{r as x,g as H,f as A,k as P,J as S,o as _,c as n,a as t,b,t as o,l as e,n as i,G as V,x as Y,y as j}from"./entry.cd89349b.js";import{u as k}from"./useUtils.ba8d89ba.js";import{u as J}from"./useMyFetch.b49701aa.js";import"./Times.d1edbe5a.js";import"./_plugin-vue_export-helper.c27b6911.js";const I={class:"box-fixed"},T={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},$={class:"w-full flex flex-col items-center grow overflow-auto"},B={class:"w-full flex flex-row flex-wrap"},F={class:"w-6/12 sm:w-3/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},O=t("label",{for:""},"U.Jalan Per",-1),R={class:"card-border"},q={class:"w-6/12 sm:w-3/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},E=t("label",{for:""},"Jenis",-1),U={class:"card-border"},z={class:"w-6/12 sm:w-3/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},G=t("label",{for:""},"Payment Method",-1),K={class:"card-border"},W={class:"w-6/12 sm:w-3/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},L=t("label",{for:""},"No Pol",-1),Q={class:"card-border"},X={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},Z=t("label",{for:""},"Supir",-1),ee={class:"card-border"},te={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},se=t("label",{for:""},"Kernet",-1),oe={class:"card-border"},ae={key:0,class:"w-full flex flex-wrap"},le={class:"w-6/12 sm:w-4/12 md:w-4/12 lg:w-4/12 flex flex-col flex-wrap p-1"},re=t("label",{for:""},"Tujuan",-1),_e={class:"card-border"},ne={class:"w-6/12 sm:w-4/12 md:w-4/12 lg:w-4/12 flex flex-col flex-wrap p-1"},ie=t("label",{for:""},"Tipe",-1),de={class:"card-border"},ce={class:"w-6/12 sm:w-4/12 md:w-4/12 lg:w-4/12 flex flex-col flex-wrap p-1"},ve=t("label",{for:""},"Total Dari U.Jalan",-1),me={class:"card-border"},fe={key:1,class:"w-full flex flex-wrap"},pe={class:"w-6/12 sm:w-4/12 flex flex-col flex-wrap p-1"},ue=t("label",{for:""},"Cost Center Code",-1),we={class:"card-border"},he={class:"w-6/12 sm:w-8/12 flex flex-col flex-wrap p-1"},xe=t("label",{for:""},"Cost Center Desc",-1),be={class:"card-border"},ke={class:"w-6/12 sm:w-8/12 flex flex-col flex-wrap p-1"},ye=t("label",{for:""},"PVR No",-1),ge={class:"card-border"},Ye={class:"w-6/12 sm:w-4/12 flex flex-col flex-wrap p-1"},De=t("label",{for:""},"PVR Total",-1),Me={class:"card-border"},Ne={class:"w-6/12 sm:w-8/12 flex flex-col flex-wrap p-1"},Ce=t("label",{for:""},"PV",-1),He={class:"card-border"},Ae={class:"w-6/12 sm:w-4/12 flex flex-col flex-wrap p-1"},Pe=t("label",{for:""},"PV Amount",-1),Se={class:"card-border"},Ve={class:"w-full flex items-center justify-end"},je={class:"w-full flex flex-wrap p-3 items-center"},Je=t("div",null," Di Validasi oleh : ",-1),Ie={key:0,class:"border-solid border-2 w-fit p-1 bg-slate-700 text-white text-xs"},Te={key:0},$e={key:1},Be={key:2},Fe={key:3},Oe={key:4},Re={key:5},Qe={__name:"trx_trp_nolog",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},id:{type:Number,required:!1,default:0}},setup(v){const y=v,{$moment:d}=V(),{pointFormat:u}=k(),s=x({...{id:-1,tanggal:new Date,payment_method:{name:""},id_uj:-1,xto:"",tipe:"",jenis:"",amount:0,pv_id:-1,pv_no:"",pv_total:0,supir:"",kernet:"",no_pol:"",val:0,val_by:{username:""},val_at:"",val1:0,val1_by:{username:""},val1_at:"",val2:0,val2_by:{username:""},val2_at:"",val3:0,val3_by:{username:""},val3_at:"",val4:0,val4_by:{username:""},val4_at:"",val5:0,val5_by:{username:""},val5_at:"",cost_center_code:"",cost_center_desc:"",pvr_id:"",pvr_no:"",pvr_total:"",pvr_had_detail:""}}),D=H("token"),g={_:{id:{tcon:"IconsBaselineNumbers",text:"ID",val:""},name:{tcon:"IconsPerson",text:"Nama",val:""},rek_no:{tcon:"IconsNumber",text:"No Rek",val:""},rek_name:{tcon:"IconsCreditCard",text:"Nama Rek",val:""}},id:-1,name:"",title:"",note:""},l=x(JSON.parse(JSON.stringify(g))),r=x(JSON.parse(JSON.stringify(g))),M=async()=>{Y().loading_full=!0;const{data:m,error:c,status:w}=await J("/trx_trp_nolog",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:{id:y.id},retry:0});if(Y().loading_full=!1,w.value==="error"){j().trigger(c);return}let a=m.value.data;s.value=a,l.value._.id.val=a.supir_id,l.value._.name.val=a.supir,l.value._.rek_no.val=a.supir_rek_no,l.value._.rek_name.val=a.supir_rek_name,l.value.id=a.supir_id,l.value.name=a.supir,l.value.rek_no=(a.supir_rek_no||"")+" "+(a.supir_rek_name||""),r.value._.id.val=a.kernet_id,r.value._.name.val=a.kernet,r.value._.rek_no.val=a.kernet_rek_no,r.value._.rek_name.val=a.kernet_rek_name,r.value.id=a.kernet_id,r.value.name=a.kernet,r.value.rek_no=(a.kernet_rek_no||"")+" "+(a.kernet_rek_name||"");let f=0,h=0;a.potongan.forEach(p=>{p.potongan_mst.employee_id==a.supir_id&&(f+=parseInt(p.nominal_cut)),p.potongan_mst.employee_id==a.kernet_id&&(h+=parseInt(p.nominal_cut))}),l.value.note="",r.value.note="",f>0&&(l.value.note="Telah di potong sebesar :"+k().pointFormat(f)),h>0&&(r.value.note="Telah di potong sebesar :"+k().pointFormat(h))};return A(()=>y.show,(m,c)=>{m==!0&&M()},{immediate:!0}),(m,c)=>{const w=N,a=C;return P((_(),n("section",I,[t("div",null,[b(w,{title:"Form Transaction",fn:v.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),t("form",T,[t("div",$,[t("div",B,[t("div",F,[O,t("div",R,o(e(s).tanggal?e(d)(e(s).tanggal).format("DD-MM-YYYY"):""),1)]),t("div",q,[E,t("div",U,o(e(s).jenis),1)]),t("div",z,[G,t("div",K,o(e(s).payment_method.name),1)]),t("div",W,[L,t("div",Q,o(e(s).no_pol),1)]),t("div",X,[Z,t("div",ee,[b(a,{selected:e(l)},null,8,["selected"])])]),t("div",te,[se,t("div",oe,[b(a,{selected:e(r)},null,8,["selected"])])]),e(s).jenis!=""?(_(),n("div",ae,[t("div",le,[re,t("div",_e,o(e(s).xto),1)]),t("div",ne,[ie,t("div",de,o(e(s).tipe),1)]),t("div",ce,[ve,t("div",me,o(e(u)(e(s).amount||0)),1)])])):i("",!0),e(s).jenis!=""?(_(),n("div",fe,[t("div",pe,[ue,t("div",we,o(e(s).cost_center_code),1)]),t("div",he,[xe,t("div",be,o(e(s).cost_center_desc),1)]),t("div",ke,[ye,t("div",ge,o(e(s).pvr_no),1)]),t("div",Ye,[De,t("div",Me,o(e(u)(e(s).pvr_total||0)),1)]),t("div",Ne,[Ce,t("div",He,o(e(s).pv_no),1)]),t("div",Ae,[Pe,t("div",Se,o(e(u)(e(s).pv_total||0)),1)])])):i("",!0)])]),t("div",Ve,[t("div",je,[Je,e(s).val||e(s).val1||e(s).val2||e(s).val3||e(s).val4||e(s).val5?(_(),n("div",Ie,[e(s).val?(_(),n("div",Te," App 1 : "+o(e(s).val_by.username)+" ( "+o(e(s).val_at?e(d)(e(s).val_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):i("",!0),e(s).val1?(_(),n("div",$e," App 2 : "+o(e(s).val1_by.username)+" ( "+o(e(s).val1_at?e(d)(e(s).val1_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):i("",!0),e(s).val2?(_(),n("div",Be," App 3 : "+o(e(s).val2_by.username)+" ( "+o(e(s).val2_at?e(d)(e(s).val2_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):i("",!0),e(s).val3?(_(),n("div",Fe," App 4 : "+o(e(s).val3_by.username)+" ( "+o(e(s).val3_at?e(d)(e(s).val3_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):i("",!0),e(s).val4?(_(),n("div",Oe," App 5 : "+o(e(s).val4_by.username)+" ( "+o(e(s).val4_at?e(d)(e(s).val4_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):i("",!0),e(s).val5?(_(),n("div",Re," App 6 : "+o(e(s).val5_by.username)+" ( "+o(e(s).val5_at?e(d)(e(s).val5_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):i("",!0)])):i("",!0)]),t("button",{type:"button",name:"button",class:"w-36 m-1",onClick:c[0]||(c[0]=f=>v.fnClose())}," Cancel ")])])])],512)),[[S,v.show]])}}};export{Qe as default};
