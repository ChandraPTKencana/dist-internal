import{_ as xe}from"./HeaderPopup.vue.404bf79e.js";import ye from"./Search.91522e26.js";import be from"./Delete.2c4678cb.js";import ge from"./Tools.0d73c471.js";import ke from"./Times.0158b2c2.js";import{_ as Se}from"./InputPointFormat.vue.8bf50bf7.js";import Ie from"./Plus.38fd4da2.js";import Ce from"./ToolsPopup.85856604.js";import Ne from"./items.0729e921.js";import qe from"./hrm_revisi_lokasis.4b694cde.js";import{r as h,g as J,i as V,f as $e,o as i,c,k as M,J as Ae,a as e,b as w,l as t,t as f,n as m,v as je,E as k,A as K,F as W,D as De,z as Q,C as Me,G as Te,x as T,y as Y,p as Be,e as Fe}from"./entry.a19beef1.js";import"./useUtils.2ea1120c.js";import{u as X}from"./useMyFetch.03b76c40.js";import{_ as Ee}from"./_plugin-vue_export-helper.c27b6911.js";import"./PopupMiniMulti.vue.5ce0d8cb.js";const d=y=>(Be("data-v-2c564ada"),y=y(),Fe(),y),Pe={class:"box-fixed"},Ve={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},We={class:"w-full flex flex-col items-center grow overflow-auto"},Ue={class:"w-full flex flex-row flex-wrap"},ze={key:0,class:"w-full sm:w-4/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},Re=d(()=>e("label",{for:""},"Input At",-1)),Oe={class:"card-border"},Le={class:"w-full flex flex-col flex-wrap p-1 sm:w-4/12 md:w-3/12 lg:w-2/12"},Ge=d(()=>e("label",{for:""},"Type",-1)),He=["disabled"],Je=d(()=>e("option",{value:"used"},"Used",-1)),Ke=d(()=>e("option",{value:"in"},"In",-1)),Qe=d(()=>e("option",{value:"transfer"},"Transfer",-1)),Ye=[Je,Ke,Qe],Xe={class:"text-red-500"},Ze={class:"w-full sm:w-4/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},et=d(()=>e("label",{for:""},"From Warehouse",-1)),tt={key:0,class:"w-full flex"},st=d(()=>e("div",{class:"flex items-center grow p-1"}," Pilih Warehouse yang dikelola ",-1)),ot={key:1,class:"w-full flex",style:{}},lt={class:"!flex flex-row flex-wrap grow card-border"},at={class:"p-1"},nt=d(()=>e("div",{class:"text-sm text-gray-600"},"ID",-1)),it={class:"bold"},ut={class:"p-1"},ct=d(()=>e("div",{class:"text-sm text-gray-600"},"Name",-1)),dt={class:"bold"},rt={class:"!flex flex-row flex-wrap grow card-border"},_t={class:"p-1"},pt=d(()=>e("div",{class:"text-sm text-gray-600"},"ID",-1)),ft={class:"bold"},mt={class:"p-1"},vt=d(()=>e("div",{class:"text-sm text-gray-600"},"Name",-1)),ht={class:"bold"},wt={class:"text-red-500"},xt={key:1,class:"w-full sm:w-4/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},yt=d(()=>e("label",{for:""},"To Warehouse",-1)),bt={key:0,class:"w-full flex"},gt=d(()=>e("div",{class:"flex items-center grow p-1"}," Pilih Warehouse Target ",-1)),kt={key:1,class:"w-full flex",style:{}},St={class:"!flex flex-row flex-wrap grow card-border"},It={class:"p-1"},Ct=d(()=>e("div",{class:"text-sm text-gray-600"},"ID",-1)),Nt={class:"bold"},qt={class:"p-1"},$t=d(()=>e("div",{class:"text-sm text-gray-600"},"Name",-1)),At={class:"bold"},jt={class:"text-red-500"},Dt={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},Mt=d(()=>e("label",{for:""},"Note",-1)),Tt=["disabled"],Bt={class:"text-red-500"},Ft={class:"w-full flex p-1 2xl:overflow-hidden justify-between flex-wrap"},Et={class:"w-full",role:"sticky"},Pt={class:"tacky w-full !table-auto",style:{"white-space":"normal"}},Vt={class:"sticky -top-1 !z-[2]"},Wt=["colspan"],Ut={class:"sticky top-7 !z-[2]"},zt={key:0,class:"min-w-[30px] !w-[30px] max-w-[30px]"},Rt=d(()=>e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No",-1)),Ot={key:1,class:"min-w-[30px] !w-[30px] max-w-[30px]"},Lt=d(()=>e("th",{class:"min-w-[40px] !w-[40px] max-w-[40px]"},"ID Item",-1)),Gt=d(()=>e("th",null,"Nama Item",-1)),Ht=d(()=>e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty In",-1)),Jt=d(()=>e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty Out",-1)),Kt=d(()=>e("th",null,"Keterangan",-1)),Qt={ref:"to_move"},Yt=["data-index"],Xt={key:0,class:"tools cell"},Zt={class:"w-full h-full flex items-center justify-center"},es=["onClick"],ts={key:1,class:"cell"},ss={class:"w-full h-auto flex items-center justify-center"},os=["onClick"],ls=["onClick","disabled"],as={class:"w-full h-auto flex items-center justify-center"},ns={class:"w-full h-auto flex items-center justify-center"},is={class:"w-full h-auto flex items-center justify-center"},us={class:"w-full h-auto flex items-center justify-center"},cs={class:"cell"},ds={class:"w-full h-auto flex items-center justify-center"},rs=["disabled","onUpdate:modelValue","tabindex"],_s={key:0},ps={class:"tools cell"},fs={class:"w-full flex items-center justify-end"},ms={__name:"transaction",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]},is_copy:{type:[Boolean,Number],required:!0,default:!1}},setup(y){const b=y,{$moment:Z}=Te();let N={id:"",name:""},U={id:"",name:"",unit:{id:"",name:""}};const z={id:-1,type:"used",note:"",warehouse:{...N},warehouse_source:{...N},warehouse_target:{...N},details:[]},o=h({...z}),S=h([]),R=J("token"),I=h({});h([{xdesc:"Gaji Kernet",qty:1,harga:0},{xdesc:"U.Extrafooding",qty:1,harga:2e4}]);const a=h([]),B=h({ordinal:0,id:-1,item:{...U},item_id:"",qty_in:0,qty_out:0,note:"",p_status:""}),C=h(!1),ee=()=>{C.value=!1},te=l=>{a.value[_.value].item=l,a.value[_.value].item_id=l.id,S.value.push(l.id),C.value=!1},se=l=>{l.forEach(s=>{let p={...B.value,status:"Add"};p.item=s,p.item_id=s.id,S.value.push(s.id),a.value.push(p)}),C.value=!1},F=h(!1),oe=(l,s)=>{_.value=s,F.value=!1,C.value=!0},le=(l,s)=>{F.value=!0,C.value=!0},ae=(l,s)=>{let p=a.value[s].item.id,r=S.value.indexOf(p);r>-1&&S.value.splice(r,1),a.value[s].item_id="",a.value[s].item={...U}};let q=h(!1),$="";const E=l=>{l=="from"?o.value.warehouse={...N}:l=="to"&&(o.value.warehouse_target={...N})},O=l=>{$=l,q.value=!0},ne=()=>{q.value=!1},ie=l=>{$=="from"?o.value.warehouse={...l}:$=="to"&&(o.value.warehouse_target={...l}),q.value=!1},ue=async()=>{T().loading_full=!0,I.value={};const l=new FormData;l.append("type",o.value.type),l.append("note",o.value.note),l.append("warehouse_id",o.value.warehouse.id),l.append("warehouse_target_id",o.value.warehouse_target.id),l.append("details",JSON.stringify(a.value));let s="post",p=b.is_copy?0:b.id;p==0||(l.append("id",p),l.append("_method","PUT"));const{data:r,error:v,status:P}=await X("/api/transaction",{method:s,headers:{Authorization:`Bearer ${R.value}`,Accept:"application/json"},body:l,retry:0});if(T().loading_full=!1,P.value==="error"){Y().trigger(v,I);return}if(o.value.updated_at=r.value.updated_at,o.value.warehouse=r.value.warehouse,o.value.warehouse_source=r.value.warehouse_source,o.value.warehouse_target=r.value.warehouse_target,p<=0)o.value.id=r.value.id,o.value.created_at=r.value.created_at,o.value.request_at=r.value.request_at,o.value.request_by=r.value.request_by,b.p_data.unshift(o.value);else{let j=b.p_data.map(D=>D.id).indexOf(p);j>=-1&&b.p_data.splice(j,1,{...o.value})}b.fnClose()},ce=V(()=>{var l,s;return((l=o.value.warehouse)==null?void 0:l.id)||((s=o.value.warehouse_target)==null?void 0:s.id)||0});V(()=>{let l=0;return a.value.forEach(s=>{s.p_status!="Remove"&&(l+=1*s.amount)}),o.value.amount=l,l});const _=h(-1),A=h(!1),L=h({left:0,top:0}),de=(l,s)=>{_.value=s,A.value=!0,L.value={left:l.clientX,top:l.clientY}},re=()=>{a.value.push({...B.value,p_status:"Add"})},_e=()=>{A.value=!1},pe=(l="")=>{if(l=="insert")a.value.splice(_.value,0,{...B.value,p_status:"Add"});else if(l=="delete")a.value[_.value].p_status=="Edit"?a.value[_.value].p_status="Remove":a.value.splice(_.value,1);else if(l=="move_top"){let s=a.value[_.value];a.value.splice(_.value,1),a.value.splice(_.value-1,0,{...s})}else if(l=="move_bottom"){let s=a.value[_.value];a.value.splice(_.value,1),a.value.splice(_.value+1,0,{...s})}A.value=!1};J("role");const u=V(()=>o.value.confirmed_user||o.value.ref_id!=null),fe=async()=>{T().loading_full=!0;const{data:l,error:s,status:p}=await X("/api/transaction",{method:"get",headers:{Authorization:`Bearer ${R.value}`,Accept:"application/json"},params:{id:b.id},retry:0});if(T().loading_full=!1,p.value==="error"){Y().trigger(s);return}o.value=l.value.data;let r="Edit";b.is_copy&&(r="Add",o.value.val=0,o.value.val1=0),a.value=l.value.data.details.map(v=>(v.p_status=r,v.key=v.ordinal,v)),S.value=l.value.data.details.map(v=>v.item.id)};return $e(()=>b.show,(l,s)=>{l==!0&&(o.value={...z},a.value=[],b.id!=0&&fe())},{immediate:!0}),(l,s)=>{const p=xe,r=ye,v=be,P=ge,j=ke,D=Se,me=Ie,ve=Ce,he=Ne,we=qe;return i(),c(W,null,[M(e("section",Pe,[e("div",null,[w(p,{title:"Form Transaction",fn:y.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",Ve,[e("div",We,[e("div",Ue,[t(o).confirmed_user?(i(),c("div",ze,[Re,e("div",Oe,f(t(Z)(t(o).input_at).format("DD-MM-Y")),1)])):m("",!0),e("div",Le,[Ge,M(e("select",{disabled:t(u),class:"","onUpdate:modelValue":s[0]||(s[0]=n=>t(o).type=n)},Ye,8,He),[[je,t(o).type]]),e("p",Xe,f(t(I).type),1)]),e("div",Ze,[et,e("div",{class:k(["w-full flex flex-row flex-wrap",t(u)?"unselectable":""])},[!t(o).warehouse||!t(o).warehouse.id?(i(),c("div",tt,[e("button",{type:"button",onClick:s[1]||(s[1]=n=>O("from")),class:"flex items-center grow"},[w(r,{class:"text-2xl text-black"}),st])])):t(o).ref_id==null?(i(),c("div",ot,[e("div",lt,[e("div",at,[nt,e("div",it,f(t(o).warehouse.id),1)]),e("div",ut,[ct,e("div",dt,f(t(o).warehouse.name),1)])]),t(u)?m("",!0):(i(),c("button",{key:0,type:"button",class:"w-10 bg-red-600 flex items-center justify-center",onClick:s[2]||(s[2]=n=>E("from"))},[w(v,{class:"text-2xl text-white"})]))])):t(o).ref_id!=null?(i(),c("div",{key:2,class:k(["w-full flex",t(u)?"unselectable":""]),style:{}},[e("div",rt,[e("div",_t,[pt,e("div",ft,f(t(o).warehouse_source.id),1)]),e("div",mt,[vt,e("div",ht,f(t(o).warehouse_source.name),1)])]),t(u)?m("",!0):(i(),c("button",{key:0,type:"button",class:"w-10 bg-red-600 flex items-center justify-center",onClick:s[3]||(s[3]=n=>E("from"))},[w(v,{class:"text-2xl text-white"})]))],2)):m("",!0)],2),e("p",wt,f(t(I).warehouse_id),1)]),t(o).type=="transfer"?(i(),c("div",xt,[yt,e("div",{class:k(["w-full flex flex-row flex-wrap",t(u)?"unselectable":""])},[!t(o).warehouse_target||!t(o).warehouse_target.id?(i(),c("div",bt,[e("button",{type:"button",onClick:s[4]||(s[4]=n=>O("to")),class:"flex items-center grow"},[w(r,{class:"text-2xl text-black"}),gt])])):(i(),c("div",kt,[e("div",St,[e("div",It,[Ct,e("div",Nt,f(t(o).warehouse_target.id),1)]),e("div",qt,[$t,e("div",At,f(t(o).warehouse_target.name),1)])]),t(u)?m("",!0):(i(),c("button",{key:0,type:"button",class:"w-10 bg-red-600 flex items-center justify-center",onClick:s[5]||(s[5]=n=>E("to"))},[w(v,{class:"text-2xl text-white"})]))]))],2),e("p",jt,f(t(I).warehouse_target_id),1)])):m("",!0),e("div",Dt,[Mt,M(e("textarea",{disabled:t(u),class:"","onUpdate:modelValue":s[6]||(s[6]=n=>t(o).note=n)},null,8,Tt),[[K,t(o).note]]),e("p",Bt,f(t(I).note),1)])]),e("div",Ft,[e("div",Et,[e("table",Pt,[e("thead",null,[e("tr",Vt,[e("td",{colspan:t(u)?6:8,class:"!bg-slate-800 text-white font-bold"}," Detail ",8,Wt)]),e("tr",Ut,[t(u)?m("",!0):(i(),c("th",zt,[e("button",{type:"button",name:"button",class:"bg-yellow-600",onClick:s[7]||(s[7]=n=>le())}," Bulk Add ")])),Rt,t(u)?m("",!0):(i(),c("th",Ot)),Lt,Gt,Ht,Jt,Kt])]),e("tbody",Qt,[(i(!0),c(W,null,De(t(a),(n,g)=>{var G,H;return i(),c(W,{key:g},[n.p_status!="Remove"?(i(),c("tr",{key:0,"data-index":g},[t(u)?m("",!0):(i(),c("td",Xt,[e("div",Zt,[e("button",{type:"button",name:"button",onClick:x=>de(x,g)},[w(P)],8,es)])])),e("td",null,f(g+1)+".",1),t(u)?m("",!0):(i(),c("td",ts,[e("div",ss,[n.item_id?(i(),c("button",{key:1,type:"button",onClick:x=>ae(x,g),disabled:n.confirm_by},[w(j,{class:"font-bold text-2xl"})],8,ls)):(i(),c("button",{key:0,type:"button",name:"button",onClick:x=>oe(x,g)}," ... ",8,os))])])),e("td",{class:k(["cell bold",t(u)?"unselectable":""])},[e("div",as,f((G=n.item)==null?void 0:G.id),1)],2),e("td",{class:k(["cell bold",t(u)?"unselectable":""])},[e("div",ns,f((H=n.item)==null?void 0:H.name),1)],2),e("td",{class:k(["cell bold",t(u)?"unselectable":""])},[e("div",is,[(i(),Q(D,{key:g,class:"w-full h-full p-1",type:"text",value:n.qty_in||0,onInput:x=>n.qty_in=x,show:y.show,tabindex:t(a).length*0+1,disabled:t(u)||t(o).type=="used"||t(o).type=="transfer"},null,8,["value","onInput","show","tabindex","disabled"]))])],2),e("td",{class:k(["cell bold",t(u)?"unselectable":""])},[e("div",us,[(i(),Q(D,{key:g,class:"w-full h-full p-1",type:"text",value:n.qty_out||0,onInput:x=>n.qty_out=x,show:y.show,tabindex:t(a).length*1+1,disabled:t(u)||t(o).type=="in"},null,8,["value","onInput","show","tabindex","disabled"]))])],2),e("td",cs,[e("div",ds,[M(e("textarea",{disabled:t(u),class:"p-1 w-full","onUpdate:modelValue":x=>n.note=x,cols:"7",rows:"2",tabindex:t(a).length*2+1},null,8,rs),[[K,n.note]])])])],8,Yt)):m("",!0)],64)}),128)),t(u)?m("",!0):(i(),c("tr",_s,[e("td",ps,[e("button",{type:"button",name:"button",onClick:s[8]||(s[8]=n=>re())},[w(me)])])]))],512)])])])]),e("div",fs,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:s[9]||(s[9]=n=>y.fnClose())}," Cancel "),t(u)?m("",!0):(i(),c("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:s[10]||(s[10]=Me(n=>ue(),["prevent"]))}," Save "))])])])],512),[[Ae,y.show]]),w(ve,{show:t(A),coor:t(L),fn:_e,data:t(a),data_index:t(_),onReplyAct:s[11]||(s[11]=n=>pe(n))},null,8,["show","coor","data","data_index"]),w(he,{show:t(C),fnClose:ee,fnSelect:te,fnSelectMulti:se,exclude_lists:t(S),enableMultiSelect:t(F),multi_key:["id","name"]},null,8,["show","exclude_lists","enableMultiSelect"]),w(we,{show:t(q),fnClose:ne,fnSelect:ie,opt:t($),exclude:t(ce)},null,8,["show","opt","exclude"])],64)}}},js=Ee(ms,[["__scopeId","data-v-2c564ada"]]);export{js as default};
