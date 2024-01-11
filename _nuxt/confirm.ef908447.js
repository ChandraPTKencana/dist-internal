import{_ as I}from"./HeaderCustom.vue.f97151d9.js";import{f as B,g as F,h as V,r as h,i as z,j as Q,k as S,l as R,o as d,c as _,b as T,a as e,t as s,n as t,I as j,F as W,C as E,D as p,q as w,s as $,x as D}from"./entry.bd9ce3f6.js";import"./_plugin-vue_export-helper.c27b6911.js";const H={class:"w-full h-full flex flex-col"},K={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},L={class:"w-full flex flex-col items-center justify-center grow overflow-auto"},O={class:"w-full flex flex-row flex-wrap"},X={class:"w-full flex flex-col flex-wrap p-1"},G=e("label",{for:""},"Type",-1),J={class:"w-full border-black border-solid border-2 p-1"},M={class:"text-red-500"},P={class:"w-full flex flex-col flex-wrap p-1"},U=e("label",{for:""},"From Warehouse",-1),Y={class:"w-full flex flex-row flex-wrap border-black border-solid border-2"},Z={class:"w-full flex",style:{}},ee={class:"flex flex-row flex-wrap grow"},te={class:"p-1"},se=e("div",{class:"text-sm text-gray-600"},"ID",-1),oe={class:"bold"},le={class:"p-1"},ae=e("div",{class:"text-sm text-gray-600"},"Name",-1),re={class:"bold"},ie={class:"text-red-500"},ne={key:0,class:"w-full flex flex-col flex-wrap p-1"},ce=e("label",{for:""},"To Warehouse",-1),de={class:"w-full flex flex-row flex-wrap border-black border-solid border-2"},_e={class:"w-full flex",style:{}},ue={class:"flex flex-row flex-wrap grow"},fe={class:"p-1"},he=e("div",{class:"text-sm text-gray-600"},"ID",-1),we={class:"bold"},me={class:"p-1"},pe=e("div",{class:"text-sm text-gray-600"},"Name",-1),xe={class:"bold"},ve={class:"text-red-500"},ye={key:1,class:"w-full flex flex-col flex-wrap p-1"},be=e("label",{for:""},"Note",-1),ge={class:"w-full border-black border-solid border-2 p-1"},ke={class:"text-red-500"},Ce={class:"w-full flex grow p-1 overflow-auto"},je={role:"sticky",ref:"loadRef"},$e={class:"tacky w-full",style:{"white-space":"normal"}},De=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No"),e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"ID Item"),e("th",null,"Nama Item"),e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty In"),e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty Out"),e("th",null,"Keterangan")])],-1),Ne={class:"w-full h-full flex items-center justify-center"},qe={class:"w-full h-full flex items-center justify-center"},Ae={class:"w-full h-full flex items-center justify-center"},Ie={class:"cell"},Be={class:"w-full h-full flex items-center justify-center"},Fe={class:"cell"},Ve={class:"w-full h-full flex items-center justify-center"},ze={class:"w-full flex items-center justify-end"},We=B({__name:"confirm",async setup(Qe){var k,C;let u,x;F();const v=V("token"),i=h({}),N=z(),y=Q();let b={id:"",name:""};const{data:g}=([u,x]=S(async()=>R(async()=>{const r=y.query.id;let a=null,n=null;if(r!==void 0&&r!==""){w().loading_full=!0;const{data:o,error:c,status:m}=await $("/api/transaction",{method:"get",headers:{Authorization:`Bearer ${v.value}`,Accept:"application/json"},params:{id:r},retry:0},"$loeQk8Dow7");w().loading_full=!1,m.value==="error"?D().trigger(c,i):(a=o.value.data,n=o.value.data.details.map(f=>(f.status="View",f.key=f.ordinal,f)))}return{transaction:a,details:n}},"$41NQB02kXD")),u=await u,x(),u),l=h(((k=g.value)==null?void 0:k.transaction)||{id:-1,type:"used",note:"",warehouse:{...b},warehouse_target:{...b},details:[]}),q=h(((C=g.value)==null?void 0:C.details)||[]);h({ordinal:0,item:{id:"",name:"",unit:{id:"",name:""}},item_id:"",qty_in:0,qty_out:0,note:"",status:""});const A=async()=>{w().loading_full=!0,i.value={};let r={},a="post",n=y.query.id;n===""||(a="put",r.id=n);const{data:o,error:c,status:m}=await $("/api/confirm_transaction",{method:a,headers:{Authorization:`Bearer ${v.value}`,Accept:"application/json"},body:r,retry:0},"$bDoavTVWfd");if(w().loading_full=!1,m.value==="error"){D().trigger(c,i);return}N.go(-1)};return(r,a)=>{const n=I;return d(),_("div",H,[T(n,{title:"Form Confirmation",back:!0}),e("div",K,[e("div",L,[e("div",O,[e("div",X,[G,e("div",J,s(t(l).type),1),e("p",M,s(t(i).type),1)]),e("div",P,[U,e("div",Y,[e("div",Z,[e("div",ee,[e("div",te,[se,e("div",oe,s(t(l).ref_id?t(l).warehouse_source.id:t(l).warehouse.id),1)]),e("div",le,[ae,e("div",re,s(t(l).ref_id?t(l).warehouse_source.name:t(l).warehouse.name),1)])])])]),e("p",ie,s(t(i).warehouse_id),1)]),t(l).type=="transfer"?(d(),_("div",ne,[ce,e("div",de,[e("div",_e,[e("div",ue,[e("div",fe,[he,e("div",we,s(t(l).warehouse_target.id),1)]),e("div",me,[pe,e("div",xe,s(t(l).warehouse_target.name),1)])])])]),e("p",ve,s(t(i).warehouse_target_id),1)])):j("",!0),t(l).note?(d(),_("div",ye,[be,e("div",ge,s(t(l).note),1),e("p",ke,s(t(i).note),1)])):j("",!0)]),e("div",Ce,[e("div",je,[e("table",$e,[De,e("tbody",null,[(d(!0),_(W,null,E(t(q),(o,c)=>(d(),_("tr",{key:c},[e("td",null,s(c+1)+".",1),e("td",{class:p(["cell bold",o.confirm_by?"unselectable":""])},[e("div",Ne,s(o.item.id),1)],2),e("td",{class:p(["cell",o.confirm_by?"unselectable":""])},[e("div",qe,s(o.item.name),1)],2),e("td",{class:p(["cell",o.confirm_by?"unselectable":""])},[e("div",Ae,s(o.qty_in),1)],2),e("td",Ie,[e("div",Be,s(o.qty_out),1)]),e("td",Fe,[e("div",Ve,s(o.note),1)])]))),128))])])],512)])]),e("div",ze,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:a[0]||(a[0]=o=>r.$router.go(-1))}," Cancel "),e("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white p-2 rounded-sm",onClick:a[1]||(a[1]=o=>A())}," Confirm ")])])])}}});export{We as default};