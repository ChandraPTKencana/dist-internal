import{_ as N}from"./HeaderPopup.vue.fe14bc58.js";import{_ as D}from"./client-only.22df5fad.js";import{_ as $}from"./InputPointFormat.vue.97c24bd4.js";import P from"./AttachmentSingle.44dd46a7.js";import{r as k,g as F,f as q,I,k as i,J,o as y,c as g,a as e,b as u,l,A as _,t as d,v as j,F as z,D as E,w as M,C as L,x as f,y as K,H as O,G as H}from"./entry.468c1924.js";import{u as V}from"./useMyFetch.5d39e20e.js";import"./Times.725e6b46.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./PDFJsView.bbbbbc5f.js";const R={class:"box-fixed"},Y={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},G={class:"w-full flex flex-wrap flex-row grow overflow-auto items-start"},Q={class:"w-full sm:w-full md:w-1/3 flex flex-row flex-wrap"},W={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},X=e("label",{for:""},"Nama",-1),Z=["disabled"],ee={class:"text-red-500"},te={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},le=e("label",{for:""},"Jabatan",-1),oe=e("option",{value:"Supir"},"Supir",-1),ae=e("option",{value:"Kernet"},"Kernet",-1),se=[oe,ae],ne={class:"text-red-500"},de={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},ie=e("label",{for:""},"No KTP",-1),re={class:"text-red-500"},pe={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},ue=e("label",{for:""},"No SIM",-1),_e={class:"text-red-500"},me={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},fe=e("label",{for:""},"Pilih Bank",-1),ce=e("option",{value:""},null,-1),ve=["value"],we={class:"text-red-500"},xe={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},he=e("label",{for:""},"No Rek",-1),be={class:"text-red-500"},ke={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},ye=e("label",{for:""},"Nama Rek",-1),ge={class:"text-red-500"},je={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},Ke=e("label",{for:""},"Phone Number",-1),Ve={class:"text-red-500"},Se={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},Te=e("label",{for:""},"Tanggal Lahir",-1),Me={class:"grow"},Ue={class:"text-red-500"},Ce={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},Ae=e("label",{for:""},"Tempat Lahir",-1),Be={class:"text-red-500"},Ne={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},De=e("label",{for:""},"TMK",-1),$e={class:"grow"},Pe={class:"text-red-500"},Fe={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},qe=e("label",{for:""},"Alamat",-1),Ie={class:"text-red-500"},Je={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},ze=e("label",{for:""},"Status",-1),Ee=O('<option value="TK/0">TK/0</option><option value="TK/1">TK/1</option><option value="TK/2">TK/2</option><option value="TK/3">TK/3</option><option value="K/0">K/0</option><option value="K/1">K/1</option><option value="K/2">K/2</option><option value="K/3">K/3</option>',8),Le=[Ee],Oe={class:"text-red-500"},He={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},Re=e("label",{for:""},"BPJS Kesehatan",-1),Ye={class:"w-full"},Ge={class:"text-red-500"},Qe={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},We=e("label",{for:""},"BPJS Jamsos",-1),Xe={class:"w-full"},Ze={class:"text-red-500"},et={class:"p-1 w-full sm:w-full md:w-2/3 md:overflow-auto max-h-full"},tt={class:"w-full flex items-center justify-end"},ut={__name:"employee",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]},is_copy:{type:[Boolean,Number],required:!0,default:!1}},setup(c){const r=c,{$moment:S}=H(),T={id:-1,name:"",role:"Supir",ktp_no:"",sim_no:"",bank_id:1,rek_no:"",rek_name:"",phone_number:"",attachment_1:"",attachment_1_preview:"",birth_date:new Date,birth_place:"",bpjs_kesehatan:0,bpjs_jamsos:0,tmk:new Date,address:"",status:"TK/0",val_at:""},t=k({...T}),h=F("token"),n=k({}),U=async()=>{f().loading_full=!0,n.value={};const s=new FormData;s.append("name",t.value.name),s.append("role",t.value.role),s.append("ktp_no",t.value.ktp_no),s.append("sim_no",t.value.sim_no),s.append("bank_id",t.value.bank_id),s.append("rek_no",t.value.rek_no),s.append("rek_name",t.value.rek_name),s.append("phone_number",t.value.phone_number),s.append("attachment_1",t.value.attachment_1),s.append("attachment_1_preview",t.value.attachment_1_preview),s.append("birth_date",t.value.birth_date?S(t.value.birth_date).format("Y-MM-DD"):""),s.append("birth_place",t.value.birth_place),s.append("tmk",t.value.tmk?S(t.value.tmk).format("Y-MM-DD"):""),s.append("address",t.value.address),s.append("status",t.value.status),s.append("bpjs_kesehatan",t.value.bpjs_kesehatan),s.append("bpjs_jamsos",t.value.bpjs_jamsos);let o="post",p=r.is_copy?0:r.id;p==0||(s.append("id",p),s.append("_method","PUT"));const{data:m,error:w,status:x}=await V("/employee",{method:o,headers:{Authorization:`Bearer ${h.value}`,Accept:"application/json"},body:s,retry:0});if(f().loading_full=!1,x.value==="error"){K().trigger(w,n);return}let b=v.value.map(a=>a.id).indexOf(t.value.bank_id);if(t.value.bank={...v.value[b]},t.value.updated_at=m.value.updated_at,p<=0)t.value.id=m.value.id,t.value.created_at=m.value.created_at,r.p_data.unshift(t.value);else{let a=r.p_data.map(B=>B.id).indexOf(p);a>=-1&&r.p_data.splice(a,1,{...t.value})}r.fnClose()},C=async()=>{f().loading_full=!0;const{data:s,error:o,status:p}=await V("/employee",{method:"get",headers:{Authorization:`Bearer ${h.value}`,Accept:"application/json"},params:{id:r.id},retry:0});if(f().loading_full=!1,p.value==="error"){K().trigger(o);return}r.is_copy&&(t.value.val=0),t.value=s.value.data},v=k([]),A=async()=>{f().loading_full=!0;const{data:s,error:o,status:p}=await V("/banks",{method:"get",headers:{Authorization:`Bearer ${h.value}`,Accept:"application/json"},params:{id:r.id},retry:0});if(f().loading_full=!1,p.value==="error"){K().trigger(o);return}v.value=s.value.data};return q(()=>r.show,async(s,o)=>{s==!0&&(t.value={...T},n.value={},await A(),r.id!=0&&await C())},{immediate:!0}),(s,o)=>{const p=N,m=I("vue-date-picker"),w=D,x=$,b=P;return i((y(),g("section",R,[e("div",null,[u(p,{title:"Form Employee",fn:c.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",Y,[e("div",G,[e("div",Q,[e("div",W,[X,i(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>l(t).name=a),disabled:l(t).val_at!=""},null,8,Z),[[_,l(t).name]]),e("p",ee,d(l(n).name),1)]),e("div",te,[le,i(e("select",{"onUpdate:modelValue":o[1]||(o[1]=a=>l(t).role=a)},se,512),[[j,l(t).role]]),e("p",ne,d(l(n).role),1)]),e("div",de,[ie,i(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=a=>l(t).ktp_no=a)},null,512),[[_,l(t).ktp_no]]),e("p",re,d(l(n).ktp_no),1)]),e("div",pe,[ue,i(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=a=>l(t).sim_no=a)},null,512),[[_,l(t).sim_no]]),e("p",_e,d(l(n).sim_no),1)]),e("div",me,[fe,i(e("select",{"onUpdate:modelValue":o[4]||(o[4]=a=>l(t).bank_id=a)},[ce,(y(!0),g(z,null,E(l(v),a=>(y(),g("option",{value:a.id},d(a.code),9,ve))),256))],512),[[j,l(t).bank_id]]),e("p",we,d(l(n).bank_id),1)]),e("div",xe,[he,i(e("input",{type:"text","onUpdate:modelValue":o[5]||(o[5]=a=>l(t).rek_no=a)},null,512),[[_,l(t).rek_no]]),e("p",be,d(l(n).rek_no),1)]),e("div",ke,[ye,i(e("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=a=>l(t).rek_name=a)},null,512),[[_,l(t).rek_name]]),e("p",ge,d(l(n).rek_name),1)]),e("div",je,[Ke,i(e("input",{type:"text","onUpdate:modelValue":o[7]||(o[7]=a=>l(t).phone_number=a)},null,512),[[_,l(t).phone_number]]),e("p",Ve,d(l(n).phone_number),1)]),e("div",Se,[Te,e("div",Me,[u(w,null,{default:M(()=>[u(m,{modelValue:l(t).birth_date,"onUpdate:modelValue":o[8]||(o[8]=a=>l(t).birth_date=a),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":""},null,8,["modelValue"])]),_:1})]),e("p",Ue,d(l(n).birth_date),1)]),e("div",Ce,[Ae,i(e("input",{type:"text","onUpdate:modelValue":o[9]||(o[9]=a=>l(t).birth_place=a)},null,512),[[_,l(t).birth_place]]),e("p",Be,d(l(n).birth_place),1)]),e("div",Ne,[De,e("div",$e,[u(w,null,{default:M(()=>[u(m,{modelValue:l(t).tmk,"onUpdate:modelValue":o[10]||(o[10]=a=>l(t).tmk=a),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":""},null,8,["modelValue"])]),_:1})]),e("p",Pe,d(l(n).tmk),1)]),e("div",Fe,[qe,i(e("textarea",{"onUpdate:modelValue":o[11]||(o[11]=a=>l(t).address=a)},null,512),[[_,l(t).address]]),e("p",Ie,d(l(n).address),1)]),e("div",Je,[ze,i(e("select",{"onUpdate:modelValue":o[12]||(o[12]=a=>l(t).status=a)},Le,512),[[j,l(t).status]]),e("p",Oe,d(l(n).status),1)]),e("div",He,[Re,e("div",Ye,[u(x,{class:"w-full h-full p-1",type:"text",value:l(t).bpjs_kesehatan||0,onInput:o[13]||(o[13]=a=>l(t).bpjs_kesehatan=a)},null,8,["value"])]),e("p",Ge,d(l(n).bpjs_kesehatan),1)]),e("div",Qe,[We,e("div",Xe,[u(x,{class:"w-full h-full p-1",type:"text",value:l(t).bpjs_jamsos||0,onInput:o[14]||(o[14]=a=>l(t).bpjs_jamsos=a)},null,8,["value"])]),e("p",Ze,d(l(n).bpjs_jamsos),1)])]),e("div",et,[u(b,{label:"Attachment",value:l(t).attachment_1_preview,onSetFile:o[15]||(o[15]=a=>l(t).attachment_1=a),onSetPreview:o[16]||(o[16]=a=>l(t).attachment_1_preview=a),can_remove:!0},null,8,["value"])])]),e("div",tt,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:o[17]||(o[17]=a=>c.fnClose())}," Cancel "),e("button",{type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:o[18]||(o[18]=L(a=>U(),["prevent"]))}," Save ")])])])],512)),[[J,c.show]])}}};export{ut as default};