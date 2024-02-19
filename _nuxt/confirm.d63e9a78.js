import{_ as R}from"./client-only.0d3d8f72.js";import{_ as Q}from"./PopupMini.vue.b32b6872.js";import{n as W,u as G,q as J,r as i,s as L,v as U,x as Y,y as H,C as w,D as V,P as X,o as u,c as _,a as e,B as t,t as l,O as x,I as B,J as Z,K as b,N as ee,b as g,w as k,d as C,E as te}from"./entry.78b18dc9.js";import{u as q}from"./useMyFetch.7bf5776a.js";import"./Times.9a0b15d1.js";import"./_plugin-vue_export-helper.c27b6911.js";const se={class:"w-full h-full flex flex-col border-t-4 border-slate-600"},oe={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},le={class:"w-full flex flex-col items-center justify-center grow overflow-auto"},ae={class:"w-full flex flex-row flex-wrap"},ne={key:0,class:"w-full flex flex-col flex-wrap p-1"},ie=e("label",{for:""},"Input At",-1),re={class:"card-border"},ce={class:"w-full flex flex-col flex-wrap p-1"},de=e("label",{for:""},"Type",-1),ue={class:"card-border"},_e={class:"text-red-500"},fe={class:"w-full flex flex-col flex-wrap p-1"},me=e("label",{for:""},"From Warehouse",-1),pe={class:"card-border flex flex-row flex-wrap"},he={class:"w-full flex",style:{}},we={class:"flex flex-row flex-wrap grow"},xe={class:"p-1"},ve=e("div",{class:"text-sm text-gray-600"},"ID",-1),ye={class:"bold"},be={class:"p-1"},ge=e("div",{class:"text-sm text-gray-600"},"Name",-1),ke={class:"bold"},Ce={class:"text-red-500"},De={key:1,class:"w-full flex flex-col flex-wrap p-1"},Ne=e("label",{for:""},"To Warehouse",-1),$e={class:"card-border flex flex-row flex-wrap"},je={class:"w-full flex",style:{}},Ae={class:"flex flex-row flex-wrap grow"},Oe={class:"p-1"},Ie=e("div",{class:"text-sm text-gray-600"},"ID",-1),Me={class:"bold"},Ve={class:"p-1"},Be=e("div",{class:"text-sm text-gray-600"},"Name",-1),qe={class:"bold"},Se={class:"text-red-500"},Te={key:2,class:"w-full flex flex-col flex-wrap p-1"},ze=e("label",{for:""},"Note",-1),Pe={class:"card-border"},Ee={class:"text-red-500"},Fe={class:"w-full flex grow p-1 overflow-auto"},Ke={role:"sticky",ref:"loadRef"},Re={class:"tacky w-full",style:{"white-space":"normal"}},Qe=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No"),e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"ID Item"),e("th",null,"Nama Item"),e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty In"),e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty Out"),e("th",null,"Keterangan")])],-1),We={class:"w-full h-full flex items-center justify-center"},Ge={class:"w-full h-full flex items-center justify-center"},Je={class:"w-full h-full flex items-center justify-center"},Le={class:"cell"},Ue={class:"w-full h-full flex items-center justify-center"},Ye={class:"cell"},He={class:"w-full h-full flex items-center justify-center"},Xe={class:"w-full flex items-center justify-end"},Ze=e("b",null,"tidak dapat dikembalikan lagi",-1),et={class:"grow mb-5"},it=W({__name:"confirm",props:{id:{type:Number,required:!1}},async setup(S){var I,M;let p,D;const N=S;G();const $=J("token"),r=i({});L(),U();let j={id:"",name:""};const{data:A}=([p,D]=Y(async()=>H(async()=>{const n=N.id;let a=null,c=null;if(n!==void 0&&n!==""){w().loading_full=!0;const{data:f,error:m,status:o}=await q("/api/transaction",{method:"get",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},params:{id:n},retry:0});w().loading_full=!1,o.value==="error"?V().trigger(m,r):(a=f.value.data,c=f.value.data.details.map(d=>(d.status="View",d.key=d.ordinal,d)))}return{transaction:a,details:c}},"$ki7gGbm0CK")),p=await p,D(),p),v=i(!0),T=()=>{v.value=!1},z=()=>{v.value=!0},s=i(((I=A.value)==null?void 0:I.transaction)||{id:-1,type:"used",note:"",warehouse:{...j},warehouse_target:{...j},details:[]}),P=i(((M=A.value)==null?void 0:M.details)||[]);i({ordinal:0,item:{id:"",name:"",unit:{id:"",name:""}},item_id:"",qty_in:0,qty_out:0,note:"",status:""});const y=i({from:"",to:new Date}),O=i({}),h=i(!1),E=()=>{O.value={id:s.value.id,type:s.value.type,target:s.value.warehouse_target.name},h.value=!0},F=async()=>{h.value&&(h.value=!1)},K=async()=>{w().loading_full=!0,r.value={};let n={};n.to=y.value.to;let a="post",c=N.id;c===void 0||(a="put",n.id=c);const{data:f,error:m,status:o}=await q("/api/confirm_transaction",{method:a,headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},body:n,retry:0});if(w().loading_full=!1,o.value==="error"){V().trigger(m,r);return}te().display({show:!0,status:"Success",message:"Data Tersimpan"})};return(n,a)=>{const c=X("vue-date-picker"),f=R,m=Q;return u(),_(B,null,[e("div",se,[e("form",oe,[e("div",le,[e("div",ae,[t(s).confirmed_by?(u(),_("div",ne,[ie,e("div",re,l(n.$moment(t(s).input_at).format("DD-MM-Y")),1)])):x("",!0),e("div",ce,[de,e("div",ue,l(t(s).type),1),e("p",_e,l(t(r).type),1)]),e("div",fe,[me,e("div",pe,[e("div",he,[e("div",we,[e("div",xe,[ve,e("div",ye,l(t(s).ref_id?t(s).warehouse_source.id:t(s).warehouse.id),1)]),e("div",be,[ge,e("div",ke,l(t(s).ref_id?t(s).warehouse_source.name:t(s).warehouse.name),1)])])])]),e("p",Ce,l(t(r).warehouse_id),1)]),t(s).type=="transfer"?(u(),_("div",De,[Ne,e("div",$e,[e("div",je,[e("div",Ae,[e("div",Oe,[Ie,e("div",Me,l(t(s).warehouse_target.id),1)]),e("div",Ve,[Be,e("div",qe,l(t(s).warehouse_target.name),1)])])])]),e("p",Se,l(t(r).warehouse_target_id),1)])):x("",!0),t(s).note?(u(),_("div",Te,[ze,e("div",Pe,l(t(s).note),1),e("p",Ee,l(t(r).note),1)])):x("",!0)]),e("div",Fe,[e("div",Ke,[e("table",Re,[Qe,e("tbody",null,[(u(!0),_(B,null,Z(t(P),(o,d)=>(u(),_("tr",{key:d},[e("td",null,l(d+1)+".",1),e("td",{class:b(["cell bold",o.confirm_by?"unselectable":""])},[e("div",We,l(o.item.id),1)],2),e("td",{class:b(["cell",o.confirm_by?"unselectable":""])},[e("div",Ge,l(o.item.name),1)],2),e("td",{class:b(["cell",o.confirm_by?"unselectable":""])},[e("div",Je,l(o.qty_in),1)],2),e("td",Le,[e("div",Ue,l(o.qty_out),1)]),e("td",Ye,[e("div",He,l(o.note),1)])]))),128))])])],512)])]),e("div",Xe,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:a[0]||(a[0]=o=>n.$router.go(-1))}," Cancel "),t(s).confirmed_by==null?(u(),_("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:a[1]||(a[1]=ee(o=>E(),["prevent"]))}," Confirm ")):x("",!0)])])]),g(m,{type:"custome",show:t(h),data:t(O),fnClose:F,fnConfirm:K,enabledOk:t(v)},{words:k(()=>[C(" Data akan diproses dan "),Ze,C(", yakin untuk melanjutkan ? ")]),footer:k(()=>[C(" Pilih Tanggal Transaksi: "),e("div",et,[g(f,null,{default:k(()=>[g(c,{modelValue:t(y).to,"onUpdate:modelValue":a[2]||(a[2]=o=>t(y).to=o),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":"",onOpen:a[3]||(a[3]=o=>T()),onClosed:a[4]||(a[4]=o=>z())},null,8,["modelValue"])]),_:1})])]),_:1},8,["show","data","enabledOk"])],64)}}});export{it as default};
