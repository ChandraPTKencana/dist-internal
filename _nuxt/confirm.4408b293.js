import{_ as D}from"./HeaderCustom.vue.fde61aec.js";import{f as I,g as F,h as z,r as h,i as S,j as V,k as Q,l as R,o as d,c as _,b as E,a as e,t as s,n as t,H as j,F as H,B as T,C as p,q as m,s as N}from"./entry.974b249e.js";import{u as $}from"./useMyFetch.d664e89a.js";import"./_plugin-vue_export-helper.c27b6911.js";const W={class:"w-full h-full flex flex-col"},K={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},L={class:"w-full flex flex-col items-center justify-center grow overflow-auto"},M={class:"w-full flex flex-row flex-wrap"},O={class:"w-full flex flex-col flex-wrap p-1"},X=e("label",{for:""},"Type",-1),G={class:"card-border"},J={class:"text-red-500"},P={class:"w-full flex flex-col flex-wrap p-1"},U=e("label",{for:""},"From Warehouse",-1),Y={class:"card-border flex flex-row flex-wrap"},Z={class:"w-full flex",style:{}},ee={class:"flex flex-row flex-wrap grow"},te={class:"p-1"},se=e("div",{class:"text-sm text-gray-600"},"ID",-1),oe={class:"bold"},le={class:"p-1"},ae=e("div",{class:"text-sm text-gray-600"},"Name",-1),re={class:"bold"},ne={class:"text-red-500"},ie={key:0,class:"w-full flex flex-col flex-wrap p-1"},ce=e("label",{for:""},"To Warehouse",-1),de={class:"card-border flex flex-row flex-wrap"},_e={class:"w-full flex",style:{}},ue={class:"flex flex-row flex-wrap grow"},fe={class:"p-1"},he=e("div",{class:"text-sm text-gray-600"},"ID",-1),me={class:"bold"},we={class:"p-1"},pe=e("div",{class:"text-sm text-gray-600"},"Name",-1),xe={class:"bold"},ye={class:"text-red-500"},ve={key:1,class:"w-full flex flex-col flex-wrap p-1"},be=e("label",{for:""},"Note",-1),ge={class:"card-border"},ke={class:"text-red-500"},Ce={class:"w-full flex grow p-1 overflow-auto"},je={role:"sticky",ref:"loadRef"},Ne={class:"tacky w-full",style:{"white-space":"normal"}},$e=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No"),e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"ID Item"),e("th",null,"Nama Item"),e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty In"),e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty Out"),e("th",null,"Keterangan")])],-1),qe={class:"w-full h-full flex items-center justify-center"},Ae={class:"w-full h-full flex items-center justify-center"},Be={class:"w-full h-full flex items-center justify-center"},De={class:"cell"},Ie={class:"w-full h-full flex items-center justify-center"},Fe={class:"cell"},ze={class:"w-full h-full flex items-center justify-center"},Se={class:"w-full flex items-center justify-end"},Te=I({__name:"confirm",async setup(Ve){var k,C;let u,x;F();const y=z("token"),n=h({}),q=S(),v=V();let b={id:"",name:""};const{data:g}=([u,x]=Q(async()=>R(async()=>{const r=v.query.id;let a=null,i=null;if(r!==void 0&&r!==""){m().loading_full=!0;const{data:o,error:c,status:w}=await $("/api/transaction",{method:"get",headers:{Authorization:`Bearer ${y.value}`,Accept:"application/json"},params:{id:r},retry:0});m().loading_full=!1,w.value==="error"?N().trigger(c,n):(a=o.value.data,i=o.value.data.details.map(f=>(f.status="View",f.key=f.ordinal,f)))}return{transaction:a,details:i}},"$41NQB02kXD")),u=await u,x(),u),l=h(((k=g.value)==null?void 0:k.transaction)||{id:-1,type:"used",note:"",warehouse:{...b},warehouse_target:{...b},details:[]}),A=h(((C=g.value)==null?void 0:C.details)||[]);h({ordinal:0,item:{id:"",name:"",unit:{id:"",name:""}},item_id:"",qty_in:0,qty_out:0,note:"",status:""});const B=async()=>{m().loading_full=!0,n.value={};let r={},a="post",i=v.query.id;i===""||(a="put",r.id=i);const{data:o,error:c,status:w}=await $("/api/confirm_transaction",{method:a,headers:{Authorization:`Bearer ${y.value}`,Accept:"application/json"},body:r,retry:0});if(m().loading_full=!1,w.value==="error"){N().trigger(c,n);return}q.go(-1)};return(r,a)=>{const i=D;return d(),_("div",W,[E(i,{title:"Form Confirmation",back:!0}),e("div",K,[e("div",L,[e("div",M,[e("div",O,[X,e("div",G,s(t(l).type),1),e("p",J,s(t(n).type),1)]),e("div",P,[U,e("div",Y,[e("div",Z,[e("div",ee,[e("div",te,[se,e("div",oe,s(t(l).ref_id?t(l).warehouse_source.id:t(l).warehouse.id),1)]),e("div",le,[ae,e("div",re,s(t(l).ref_id?t(l).warehouse_source.name:t(l).warehouse.name),1)])])])]),e("p",ne,s(t(n).warehouse_id),1)]),t(l).type=="transfer"?(d(),_("div",ie,[ce,e("div",de,[e("div",_e,[e("div",ue,[e("div",fe,[he,e("div",me,s(t(l).warehouse_target.id),1)]),e("div",we,[pe,e("div",xe,s(t(l).warehouse_target.name),1)])])])]),e("p",ye,s(t(n).warehouse_target_id),1)])):j("",!0),t(l).note?(d(),_("div",ve,[be,e("div",ge,s(t(l).note),1),e("p",ke,s(t(n).note),1)])):j("",!0)]),e("div",Ce,[e("div",je,[e("table",Ne,[$e,e("tbody",null,[(d(!0),_(H,null,T(t(A),(o,c)=>(d(),_("tr",{key:c},[e("td",null,s(c+1)+".",1),e("td",{class:p(["cell bold",o.confirm_by?"unselectable":""])},[e("div",qe,s(o.item.id),1)],2),e("td",{class:p(["cell",o.confirm_by?"unselectable":""])},[e("div",Ae,s(o.item.name),1)],2),e("td",{class:p(["cell",o.confirm_by?"unselectable":""])},[e("div",Be,s(o.qty_in),1)],2),e("td",De,[e("div",Ie,s(o.qty_out),1)]),e("td",Fe,[e("div",ze,s(o.note),1)])]))),128))])])],512)])]),e("div",Se,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:a[0]||(a[0]=o=>r.$router.go(-1))}," Cancel "),e("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:a[1]||(a[1]=o=>B())}," Confirm ")])])])}}});export{Te as default};
