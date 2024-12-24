import{_ as ae}from"./HeaderPopup.vue.fe14bc58.js";import{_ as oe}from"./client-only.22df5fad.js";import{_ as le}from"./WidthMiniList.vue.d740e2ff.js";import{r as k,g as se,i as C,f as K,I as ne,k as y,J as V,o as m,c as v,a as s,b as N,l as o,w as re,E as ie,t as u,v as R,F as Y,D as z,A as G,n as I,C as _e,G as de,x as b,y as T,H as ue}from"./entry.468c1924.js";import{u as A}from"./useUtils.f67a7b52.js";import{u as F}from"./useMyFetch.5d39e20e.js";import"./Times.725e6b46.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./WidthMiniPart.vue.6237c3c0.js";const pe={class:"box-fixed"},ce={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},me={class:"w-full flex flex-col items-center grow overflow-auto"},ve={class:"w-full flex flex-row flex-wrap"},fe={class:"w-6/12 sm:w-3/12 md:w-2/12 lg:w-2/12 flex flex-col flex-wrap p-1"},ge=s("label",{for:""},"U.Jalan Per",-1),he={key:0,class:"grow"},ke={key:1,class:"grow"},we={class:"text-red-500"},xe={class:"w-6/12 sm:w-3/12 md:w-2/12 lg:w-2/12 flex flex-col flex-wrap p-1"},ye=s("label",{for:""},"Jenis",-1),Ne=["disabled"],be=ue('<option value="TBS">TBS</option><option value="TBSK">TBSK</option><option value="CPO">CPO</option><option value="PK">PK</option><option value="LAIN">LAIN</option>',5),Se=[be],Oe={class:"text-red-500"},Je={class:"w-6/12 sm:w-3/12 md:w-2/12 lg:w-2/12 flex flex-col flex-wrap p-1"},je=s("label",{for:""},"Payment Method",-1),De=["disabled"],Ce=["value"],Ae={class:"text-red-500"},Be={class:"w-6/12 sm:w-3/12 md:w-2/12 lg:w-2/12 flex flex-col flex-wrap p-1"},Ie=s("label",{for:""},"No Pol",-1),Te=["disabled"],Fe={id:"vehicle"},Me=["value"],Pe={class:"text-red-500"},Ee={key:0,class:"w-full flex flex-wrap"},$e={class:"w-full sm:w-6/12 flex flex-col flex-wrap p-1"},Le=s("label",{for:""},"Uang Jalan",-1),Ue={class:"text-red-500"},qe={class:"w-full sm:w-6/12 flex flex-col flex-wrap p-1"},Ke=s("label",{for:""},"Note For Remarks",-1),Ve={class:"text-red-500"},Re={key:1,class:"w-full flex flex-wrap"},Ye={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},ze=s("label",{for:""},"Supir",-1),Ge={class:"text-red-500"},He={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},We=s("label",{for:""},"Kernet",-1),Qe={class:"text-red-500"},Xe={class:"w-full flex items-center justify-end"},it={__name:"trx_trp",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnLoadDBData:{type:Function,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]},list_cost_center:{type:Array,required:!0,default:[]},online_status:{type:Boolean,required:!0,default:!1}},setup(O){const _=O,{$moment:M}=de(),{pointFormat:P}=A(),J={id:-1,tanggal:new Date,id_uj:-1,xto:"",tipe:"",jenis:"",amount:0,pv_id:-1,pv_no:"",pv_total:0,supir_id:"",supir:"",kernet_id:"",kernet:"",no_pol:"",note_for_remarks:"",cost_center_code:"",cost_center_desc:"",pvr_id:"",pvr_no:"",pvr_total:0,pvr_had_detail:"",transition_target:"",transition_type:"",payment_method_id:2,payment_method:{id:0,name:""},uj:{}};let S={...J};const a=k({...J}),B=se("token"),d=k({}),H=async()=>{b().loading_full=!0,d.value={};const e=new FormData;e.append("tanggal",M(a.value.tanggal).format("Y-MM-DD")),e.append("jenis",a.value.jenis),e.append("id_uj",f.value.id),e.append("payment_method_id",a.value.payment_method_id),e.append("no_pol",a.value.no_pol),e.append("note_for_remarks",a.value.note_for_remarks),e.append("supir_id",i.value.id),e.append("kernet_id",r.value.id);let t="post",c=_.id;c==0||(e.append("id",c),e.append("_method","PUT"));const{data:l,error:w,status:g}=await F("/trx_trp",{method:t,headers:{Authorization:`Bearer ${B.value}`,Accept:"application/json"},body:e,retry:0});if(b().loading_full=!1,g.value==="error"){T().trigger(w,d);return}a.value.supir=i.value.name,a.value.supir_rek_no=i.value._.rek_no.val,a.value.supir_rek_name=i.value._.rek_name.val,a.value.kernet=r.value.name,a.value.kernet_rek_no=r.value._.rek_no.val,a.value.kernet_rek_name=r.value._.rek_name.val,a.value.uj=f.value._raw;let h=D.value.map(x=>x.id).indexOf(a.value.payment_method_id);if(a.value.payment_method={...D.value[h]},a.value.updated_at=l.value.updated_at,_.id<=0)a.value.id=l.value.id,a.value.created_at=l.value.created_at,_.p_data.unshift(a.value);else{let x=_.p_data.map(n=>n.id).indexOf(_.id);x>=-1&&_.p_data.splice(x,1,{...a.value})}_.fnClose()},W=C(()=>L.value.filter(e=>e.jenis==a.value.jenis)),p={_raw:{},_:{id:{tcon:"IconsBaselineNumbers",text:"ID",val:""},name:{tcon:"IconsPerson",text:"Nama",val:""},rek_no:{tcon:"IconsNumber",text:"No Rek",val:""},rek_name:{tcon:"IconsCreditCard",text:"Nama Rek",val:""}},id:"",name:"",title:"",note:""},i=k(JSON.parse(JSON.stringify(p))),r=k(JSON.parse(JSON.stringify(p))),E=C(()=>{let e=[];return q.value.forEach((t,c)=>{let l=JSON.parse(JSON.stringify(p));l._.id.val=t.id,l._.name.val=t.name,l._.rek_no.val=t.rek_no,l._.rek_name.val=t.rek_name,l.id=t.id,l.name=t.name,l.title=(t.rek_no||"")+" "+(t.rek_name||""),l.note=X(t),l._raw=t,e.push(JSON.parse(JSON.stringify(l)))}),e}),j={_raw:{},_:{id:{tcon:"IconsBaselineNumbers",text:"ID",val:""},xto:{tcon:"IconsLocationOn",text:"Tujuan",val:""},asst_opt:{tcon:"IconsPerson",text:"Info",val:""},tipe:{tcon:"",text:"Tipe",val:""},harga:{tcon:"IconsMoney",text:"Amount",val:""}},id:"",name:"",title:"",note:""},f=k(JSON.parse(JSON.stringify(j))),$=e=>{let t=JSON.parse(JSON.stringify(j));return t._.id.val=e.id,t._.xto.val=e.xto,t._.asst_opt.val=e.asst_opt,t._.tipe.val=e.tipe,t._.harga.val=P(e.harga),t.id=e.id,t.name=e.xto,t.title=(e.asst_opt||"")+" "+(e.tipe||"")+" "+(P(e.harga)||""),t._raw=e,t},Q=C(()=>{let e=[];return W.value.forEach((t,c)=>{e.push(JSON.parse(JSON.stringify($(t))))}),e}),X=e=>e.potongan?"Akan ada potong sebesar :"+A().pointFormat(e.potongan.nominal_cut):"",Z=C(()=>!1),ee=async()=>{b().loading_full=!0;const{data:e,error:t,status:c}=await F("/trx_trp",{method:"get",headers:{Authorization:`Bearer ${B.value}`,Accept:"application/json"},params:{id:_.id},retry:0});if(b().loading_full=!1,c.value==="error"){T().trigger(t);return}let l=e.value.data;a.value=l,S={...l},i.value._.id.val=l.supir_id,i.value._.name.val=l.supir,i.value._.rek_no.val=l.supir_rek_no,i.value._.rek_name.val=l.supir_rek_name,i.value.id=l.supir_id,i.value.name=l.supir,i.value.rek_no=(l.supir_rek_no||"")+" "+(l.supir_rek_name||""),r.value._.id.val=l.kernet_id,r.value._.name.val=l.kernet,r.value._.rek_no.val=l.kernet_rek_no,r.value._.rek_name.val=l.kernet_rek_name,r.value.id=l.kernet_id,r.value.name=l.kernet,r.value.rek_no=(l.kernet_rek_no||"")+" "+(l.kernet_rek_name||""),f.value=$(l.uj);let w=0,g=0;l.potongan.forEach(h=>{h.potongan_mst.employee_id==l.supir_id&&(w+=parseInt(h.nominal_cut)),h.potongan_mst.employee_id==l.kernet_id&&(g+=parseInt(h.nominal_cut))}),w>0&&(i.value.note="Telah di potong sebesar :"+A().pointFormat(w)),g>0&&(r.value.note="Telah di potong sebesar :"+A().pointFormat(g)),_.fnLoadDBData()},L=k([]),U=k([]),q=k([]),D=k([]),te=async()=>{b().loading_full=!0;const{data:e,error:t,status:c}=await F("/trx_load_for_local",{method:"get",headers:{Authorization:`Bearer ${B.value}`,Accept:"application/json"},retry:0});if(b().loading_full=!1,c.value==="error"){T().trigger(t);return}L.value=e.value.list_ujalan,U.value=e.value.list_vehicle,q.value=e.value.list_employee,D.value=e.value.list_payment_methods};return K(()=>_.show,async(e,t)=>{e==!0&&(await te(),await _.fnLoadDBData(),a.value={...J},S={...J},i.value=JSON.parse(JSON.stringify(p)),r.value=JSON.parse(JSON.stringify(p)),f.value=JSON.parse(JSON.stringify(j)),d.value={},_.id!=0&&ee())},{immediate:!0}),K(()=>f.value._raw,(e,t)=>{e&&Object.keys(e).length===0&&e.constructor===Object?(i.value=JSON.parse(JSON.stringify(p)),r.value=JSON.parse(JSON.stringify(p)),a.value.transition_target="",a.value.transition_type=""):e.asst_opt&&e.asst_opt=="TANPA KERNET"&&(r.value=JSON.parse(JSON.stringify(p)),e.transition_from&&(a.value.transition_target=e.transition_from,a.value.transition_type="From"))},{deep:!0,immediate:!0}),(e,t)=>{var h,x;const c=ae,l=ne("vue-date-picker"),w=oe,g=le;return y((m(),v("section",pe,[s("div",null,[N(c,{title:"Form Transaction",fn:O.fnClose,class:"w-full flex align-items-center",style:{color:"white"}},null,8,["fn"]),s("form",ce,[s("div",me,[s("div",ve,[s("div",fe,[ge,o(a).val!==1?(m(),v("div",he,[N(w,null,{default:re(()=>[N(l,{modelValue:o(a).tanggal,"onUpdate:modelValue":t[0]||(t[0]=n=>o(a).tanggal=n),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":""},null,8,["modelValue"])]),_:1})])):(m(),v("div",ke,[s("div",{class:ie(["card-border disabled",o(a).pvr_no!=""?"unselectable":""])},u(o(a).tanggal?o(M)(o(a).tanggal).format("DD-MM-YYYY"):""),3)])),s("p",we,u(o(d).tanggal),1)]),s("div",xe,[ye,y(s("select",{"onUpdate:modelValue":t[1]||(t[1]=n=>o(a).jenis=n),disabled:o(a).val==1},Se,8,Ne),[[R,o(a).jenis]]),s("p",Oe,u(o(d).jenis),1)]),s("div",Je,[je,y(s("select",{"onUpdate:modelValue":t[2]||(t[2]=n=>o(a).payment_method_id=n),disabled:o(a).val==1},[(m(!0),v(Y,null,z(o(D),n=>(m(),v("option",{value:n.id},u(n.name),9,Ce))),256))],8,De),[[R,o(a).payment_method_id]]),s("p",Ae,u(o(d).payment_method_id),1)]),s("div",Be,[Ie,y(s("input",{type:"text",list:"vehicle","onUpdate:modelValue":t[3]||(t[3]=n=>o(a).no_pol=n),disabled:o(a).val==1},null,8,Te),[[G,o(a).no_pol]]),s("datalist",Fe,[(m(!0),v(Y,null,z(o(U),n=>(m(),v("option",{value:n.no_pol},u(n.no_pol),9,Me))),256))]),s("p",Pe,u(o(d).no_pol),1)]),o(a).jenis!=""?(m(),v("div",Ee,[s("div",$e,[Le,N(g,{arr:o(Q),selected:o(f),pure:j,onSetSelected:t[4]||(t[4]=n=>f.value=n),disabled:o(S).supir_id>1||o(a).val1==1},null,8,["arr","selected","disabled"]),s("p",Ue,u(o(d).id_uj),1)]),s("div",qe,[Ke,y(s("textarea",{"onUpdate:modelValue":t[5]||(t[5]=n=>o(a).note_for_remarks=n)},null,512),[[G,o(a).note_for_remarks]]),s("p",Ve,u(o(d).note_for_remarks),1)])])):I("",!0),(h=o(f)._raw)!=null&&h.asst_opt?(m(),v("div",Re,[s("div",Ye,[ze,N(g,{arr:o(E),selected:o(i),pure:p,onSetSelected:t[6]||(t[6]=n=>i.value=n),disabled:o(S).supir_id>1||o(a).val1==1},null,8,["arr","selected","disabled"]),s("p",Ge,u(o(d).supir_id),1)]),y(s("div",He,[We,N(g,{arr:o(E),selected:o(r),pure:p,onSetSelected:t[7]||(t[7]=n=>r.value=n),disabled:o(S).kernet_id>1||o(a).val1==1},null,8,["arr","selected","disabled"]),s("p",Qe,u(o(d).kernet_id),1)],512),[[V,((x=o(f)._raw)==null?void 0:x.asst_opt)=="DENGAN KERNET"]])])):I("",!0)])]),s("div",Xe,[s("button",{type:"button",name:"button",class:"w-36 m-1",onClick:t[8]||(t[8]=n=>O.fnClose())}," Cancel "),o(Z)?I("",!0):(m(),v("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:t[9]||(t[9]=_e(n=>H(),["prevent"]))}," Save "))])])])],512)),[[V,O.show]])}}};export{it as default};
