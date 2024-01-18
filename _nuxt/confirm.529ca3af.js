import{_ as E}from"./HeaderCustom.vue.effe218f.js";import{_ as K}from"./client-only.0335f7ef.js";import{_ as W}from"./PopupMini.vue.9994c097.js";import{n as J,u as L,q as U,r as i,s as X,v as Y,x as G,y as Z,N as ee,o as d,c as u,a as e,b as w,B as t,t as l,O as b,I as q,J as te,K as g,w as k,C as x,D as M,d as C}from"./entry.ec4c8bb4.js";import{u as T}from"./useMyFetch.3c1eeec2.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.3df0737c.js";const se={class:"w-full h-full flex flex-col"},oe={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},le={class:"w-full flex flex-col items-center justify-center grow overflow-auto"},ae={class:"w-full flex flex-row flex-wrap"},ne={key:0,class:"w-full flex flex-col flex-wrap p-1"},ie=e("label",{for:""},"Input At",-1),re={class:"card-border"},ce={class:"w-full flex flex-col flex-wrap p-1"},de=e("label",{for:""},"Type",-1),ue={class:"card-border"},_e={class:"text-red-500"},fe={class:"w-full flex flex-col flex-wrap p-1"},me=e("label",{for:""},"From Warehouse",-1),pe={class:"card-border flex flex-row flex-wrap"},he={class:"w-full flex",style:{}},we={class:"flex flex-row flex-wrap grow"},xe={class:"p-1"},ve=e("div",{class:"text-sm text-gray-600"},"ID",-1),ye={class:"bold"},be={class:"p-1"},ge=e("div",{class:"text-sm text-gray-600"},"Name",-1),ke={class:"bold"},Ce={class:"text-red-500"},$e={key:1,class:"w-full flex flex-col flex-wrap p-1"},De=e("label",{for:""},"To Warehouse",-1),Ne={class:"card-border flex flex-row flex-wrap"},je={class:"w-full flex",style:{}},Oe={class:"flex flex-row flex-wrap grow"},Ae={class:"p-1"},Be=e("div",{class:"text-sm text-gray-600"},"ID",-1),Ie={class:"bold"},Ve={class:"p-1"},qe=e("div",{class:"text-sm text-gray-600"},"Name",-1),Me={class:"bold"},Te={class:"text-red-500"},ze={key:2,class:"w-full flex flex-col flex-wrap p-1"},Fe=e("label",{for:""},"Note",-1),Se={class:"card-border"},He={class:"text-red-500"},Pe={class:"w-full flex grow p-1 overflow-auto"},Qe={role:"sticky",ref:"loadRef"},Re={class:"tacky w-full",style:{"white-space":"normal"}},Ee=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No"),e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"ID Item"),e("th",null,"Nama Item"),e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty In"),e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty Out"),e("th",null,"Keterangan")])],-1),Ke={class:"w-full h-full flex items-center justify-center"},We={class:"w-full h-full flex items-center justify-center"},Je={class:"w-full h-full flex items-center justify-center"},Le={class:"cell"},Ue={class:"w-full h-full flex items-center justify-center"},Xe={class:"cell"},Ye={class:"w-full h-full flex items-center justify-center"},Ge={class:"w-full flex items-center justify-end"},Ze=e("b",null,"tidak dapat dikembalikan lagi",-1),et={class:"grow mb-5"},ct=J({__name:"confirm",async setup(tt){var B,I;let p,$;L();const D=U("token"),r=i({}),z=X(),N=Y();let j={id:"",name:""};const{data:O}=([p,$]=G(async()=>Z(async()=>{const n=N.query.id;let a=null,c=null;if(n!==void 0&&n!==""){x().loading_full=!0;const{data:_,error:f,status:m}=await T("/api/transaction",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:{id:n},retry:0});x().loading_full=!1,m.value==="error"?M().trigger(f,r):(a=_.value.data,c=_.value.data.details.map(s=>(s.status="View",s.key=s.ordinal,s)))}return{transaction:a,details:c}},"$41NQB02kXD")),p=await p,$(),p),v=i(!0),F=()=>{v.value=!1},S=()=>{v.value=!0},o=i(((B=O.value)==null?void 0:B.transaction)||{id:-1,type:"used",note:"",warehouse:{...j},warehouse_target:{...j},details:[]}),H=i(((I=O.value)==null?void 0:I.details)||[]);i({ordinal:0,item:{id:"",name:"",unit:{id:"",name:""}},item_id:"",qty_in:0,qty_out:0,note:"",status:""});const y=i({from:"",to:new Date}),A=i({}),h=i(!1),P=()=>{A.value={id:o.value.id,type:o.value.type,target:o.value.warehouse_target.name},h.value=!0},Q=async()=>{h.value&&(h.value=!1)},R=async()=>{x().loading_full=!0,r.value={};let n={};n.to=y.value.to;let a="post",c=N.query.id;c===""||(a="put",n.id=c);const{data:_,error:f,status:m}=await T("/api/confirm_transaction",{method:a,headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},body:n,retry:0});if(x().loading_full=!1,m.value==="error"){M().trigger(f,r);return}z.go(-1)};return(n,a)=>{const c=E,_=ee("vue-date-picker"),f=K,m=W;return d(),u(q,null,[e("div",se,[w(c,{title:"Form Confirmation",back:!0}),e("div",oe,[e("div",le,[e("div",ae,[t(o).confirmed_by?(d(),u("div",ne,[ie,e("div",re,l(n.$moment(t(o).input_at).format("DD-MM-Y HH:mm:ss")),1)])):b("",!0),e("div",ce,[de,e("div",ue,l(t(o).type),1),e("p",_e,l(t(r).type),1)]),e("div",fe,[me,e("div",pe,[e("div",he,[e("div",we,[e("div",xe,[ve,e("div",ye,l(t(o).ref_id?t(o).warehouse_source.id:t(o).warehouse.id),1)]),e("div",be,[ge,e("div",ke,l(t(o).ref_id?t(o).warehouse_source.name:t(o).warehouse.name),1)])])])]),e("p",Ce,l(t(r).warehouse_id),1)]),t(o).type=="transfer"?(d(),u("div",$e,[De,e("div",Ne,[e("div",je,[e("div",Oe,[e("div",Ae,[Be,e("div",Ie,l(t(o).warehouse_target.id),1)]),e("div",Ve,[qe,e("div",Me,l(t(o).warehouse_target.name),1)])])])]),e("p",Te,l(t(r).warehouse_target_id),1)])):b("",!0),t(o).note?(d(),u("div",ze,[Fe,e("div",Se,l(t(o).note),1),e("p",He,l(t(r).note),1)])):b("",!0)]),e("div",Pe,[e("div",Qe,[e("table",Re,[Ee,e("tbody",null,[(d(!0),u(q,null,te(t(H),(s,V)=>(d(),u("tr",{key:V},[e("td",null,l(V+1)+".",1),e("td",{class:g(["cell bold",s.confirm_by?"unselectable":""])},[e("div",Ke,l(s.item.id),1)],2),e("td",{class:g(["cell",s.confirm_by?"unselectable":""])},[e("div",We,l(s.item.name),1)],2),e("td",{class:g(["cell",s.confirm_by?"unselectable":""])},[e("div",Je,l(s.qty_in),1)],2),e("td",Le,[e("div",Ue,l(s.qty_out),1)]),e("td",Xe,[e("div",Ye,l(s.note),1)])]))),128))])])],512)])]),e("div",Ge,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:a[0]||(a[0]=s=>n.$router.go(-1))}," Cancel "),e("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:a[1]||(a[1]=s=>P())}," Confirm ")])])]),w(m,{type:"custome",show:t(h),data:t(A),fnClose:Q,fnConfirm:R,enabledOk:t(v)},{words:k(()=>[C(" Data akan diproses dan "),Ze,C(", yakin untuk melanjutkan ? ")]),footer:k(()=>[C(" Pilih Tanggal Transaksi: "),e("div",et,[w(f,null,{default:k(()=>[w(_,{modelValue:t(y).to,"onUpdate:modelValue":a[2]||(a[2]=s=>t(y).to=s),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":"",onOpen:a[3]||(a[3]=s=>F()),onClosed:a[4]||(a[4]=s=>S())},null,8,["modelValue"])]),_:1})])]),_:1},8,["show","data","enabledOk"])],64)}}});export{ct as default};
