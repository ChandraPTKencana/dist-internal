import{_ as K}from"./HeaderCustom.vue.8ba81ced.js";import{_ as W}from"./client-only.98146a5d.js";import{_ as H}from"./PopupMini.vue.edee3b3d.js";import{n as J,u as L,q as U,r as i,s as X,v as Y,x as G,y as Z,O as ee,o as d,c as u,a as e,b as w,B as t,t as l,P as x,I as V,J as te,K as g,N as se,w as k,C as v,D as q,d as C}from"./entry.acae6412.js";import{u as T}from"./useMyFetch.9204e412.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.e2219abe.js";const oe={class:"w-full h-full flex flex-col"},le={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},ae={class:"w-full flex flex-col items-center justify-center grow overflow-auto"},ne={class:"w-full flex flex-row flex-wrap"},ie={key:0,class:"w-full flex flex-col flex-wrap p-1"},re=e("label",{for:""},"Input At",-1),ce={class:"card-border"},de={class:"w-full flex flex-col flex-wrap p-1"},ue=e("label",{for:""},"Type",-1),_e={class:"card-border"},fe={class:"text-red-500"},me={class:"w-full flex flex-col flex-wrap p-1"},pe=e("label",{for:""},"From Warehouse",-1),he={class:"card-border flex flex-row flex-wrap"},we={class:"w-full flex",style:{}},xe={class:"flex flex-row flex-wrap grow"},ve={class:"p-1"},ye=e("div",{class:"text-sm text-gray-600"},"ID",-1),be={class:"bold"},ge={class:"p-1"},ke=e("div",{class:"text-sm text-gray-600"},"Name",-1),Ce={class:"bold"},$e={class:"text-red-500"},De={key:1,class:"w-full flex flex-col flex-wrap p-1"},Ne=e("label",{for:""},"To Warehouse",-1),je={class:"card-border flex flex-row flex-wrap"},Oe={class:"w-full flex",style:{}},Ae={class:"flex flex-row flex-wrap grow"},Be={class:"p-1"},Ie=e("div",{class:"text-sm text-gray-600"},"ID",-1),Me={class:"bold"},Ve={class:"p-1"},qe=e("div",{class:"text-sm text-gray-600"},"Name",-1),Te={class:"bold"},ze={class:"text-red-500"},Fe={key:2,class:"w-full flex flex-col flex-wrap p-1"},Pe=e("label",{for:""},"Note",-1),Se={class:"card-border"},Qe={class:"text-red-500"},Re={class:"w-full flex grow p-1 overflow-auto"},Ee={role:"sticky",ref:"loadRef"},Ke={class:"tacky w-full",style:{"white-space":"normal"}},We=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No"),e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"ID Item"),e("th",null,"Nama Item"),e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty In"),e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty Out"),e("th",null,"Keterangan")])],-1),He={class:"w-full h-full flex items-center justify-center"},Je={class:"w-full h-full flex items-center justify-center"},Le={class:"w-full h-full flex items-center justify-center"},Ue={class:"cell"},Xe={class:"w-full h-full flex items-center justify-center"},Ye={class:"cell"},Ge={class:"w-full h-full flex items-center justify-center"},Ze={class:"w-full flex items-center justify-end"},et=e("b",null,"tidak dapat dikembalikan lagi",-1),tt={class:"grow mb-5"},dt=J({__name:"confirm",async setup(st){var B,I;let p,$;L();const D=U("token"),r=i({}),z=X(),N=Y();let j={id:"",name:""};const{data:O}=([p,$]=G(async()=>Z(async()=>{const n=N.query.id;let a=null,c=null;if(n!==void 0&&n!==""){v().loading_full=!0;const{data:_,error:f,status:m}=await T("/api/transaction",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:{id:n},retry:0});v().loading_full=!1,m.value==="error"?q().trigger(f,r):(a=_.value.data,c=_.value.data.details.map(s=>(s.status="View",s.key=s.ordinal,s)))}return{transaction:a,details:c}},"$41NQB02kXD")),p=await p,$(),p),y=i(!0),F=()=>{y.value=!1},P=()=>{y.value=!0},o=i(((B=O.value)==null?void 0:B.transaction)||{id:-1,type:"used",note:"",warehouse:{...j},warehouse_target:{...j},details:[]}),S=i(((I=O.value)==null?void 0:I.details)||[]);i({ordinal:0,item:{id:"",name:"",unit:{id:"",name:""}},item_id:"",qty_in:0,qty_out:0,note:"",status:""});const b=i({from:"",to:new Date}),A=i({}),h=i(!1),Q=()=>{A.value={id:o.value.id,type:o.value.type,target:o.value.warehouse_target.name},h.value=!0},R=async()=>{h.value&&(h.value=!1)},E=async()=>{v().loading_full=!0,r.value={};let n={};n.to=b.value.to;let a="post",c=N.query.id;c===""||(a="put",n.id=c);const{data:_,error:f,status:m}=await T("/api/confirm_transaction",{method:a,headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},body:n,retry:0});if(v().loading_full=!1,m.value==="error"){q().trigger(f,r);return}z.go(-1)};return(n,a)=>{const c=K,_=ee("vue-date-picker"),f=W,m=H;return d(),u(V,null,[e("div",oe,[w(c,{title:"Form Confirmation",back:!0}),e("form",le,[e("div",ae,[e("div",ne,[t(o).confirmed_by?(d(),u("div",ie,[re,e("div",ce,l(n.$moment(t(o).input_at).format("DD-MM-Y")),1)])):x("",!0),e("div",de,[ue,e("div",_e,l(t(o).type),1),e("p",fe,l(t(r).type),1)]),e("div",me,[pe,e("div",he,[e("div",we,[e("div",xe,[e("div",ve,[ye,e("div",be,l(t(o).ref_id?t(o).warehouse_source.id:t(o).warehouse.id),1)]),e("div",ge,[ke,e("div",Ce,l(t(o).ref_id?t(o).warehouse_source.name:t(o).warehouse.name),1)])])])]),e("p",$e,l(t(r).warehouse_id),1)]),t(o).type=="transfer"?(d(),u("div",De,[Ne,e("div",je,[e("div",Oe,[e("div",Ae,[e("div",Be,[Ie,e("div",Me,l(t(o).warehouse_target.id),1)]),e("div",Ve,[qe,e("div",Te,l(t(o).warehouse_target.name),1)])])])]),e("p",ze,l(t(r).warehouse_target_id),1)])):x("",!0),t(o).note?(d(),u("div",Fe,[Pe,e("div",Se,l(t(o).note),1),e("p",Qe,l(t(r).note),1)])):x("",!0)]),e("div",Re,[e("div",Ee,[e("table",Ke,[We,e("tbody",null,[(d(!0),u(V,null,te(t(S),(s,M)=>(d(),u("tr",{key:M},[e("td",null,l(M+1)+".",1),e("td",{class:g(["cell bold",s.confirm_by?"unselectable":""])},[e("div",He,l(s.item.id),1)],2),e("td",{class:g(["cell",s.confirm_by?"unselectable":""])},[e("div",Je,l(s.item.name),1)],2),e("td",{class:g(["cell",s.confirm_by?"unselectable":""])},[e("div",Le,l(s.qty_in),1)],2),e("td",Ue,[e("div",Xe,l(s.qty_out),1)]),e("td",Ye,[e("div",Ge,l(s.note),1)])]))),128))])])],512)])]),e("div",Ze,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:a[0]||(a[0]=s=>n.$router.go(-1))}," Cancel "),t(o).confirmed_by==null?(d(),u("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:a[1]||(a[1]=se(s=>Q(),["prevent"]))}," Confirm ")):x("",!0)])])]),w(m,{type:"custome",show:t(h),data:t(A),fnClose:R,fnConfirm:E,enabledOk:t(y)},{words:k(()=>[C(" Data akan diproses dan "),et,C(", yakin untuk melanjutkan ? ")]),footer:k(()=>[C(" Pilih Tanggal Transaksi: "),e("div",tt,[w(f,null,{default:k(()=>[w(_,{modelValue:t(b).to,"onUpdate:modelValue":a[2]||(a[2]=s=>t(b).to=s),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":"",onOpen:a[3]||(a[3]=s=>F()),onClosed:a[4]||(a[4]=s=>P())},null,8,["modelValue"])]),_:1})])]),_:1},8,["show","data","enabledOk"])],64)}}});export{dt as default};
