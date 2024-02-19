import{_ as be}from"./HeaderCustom.vue.8c8abff4.js";import{_ as ge}from"./Search.8c91f68d.js";import{_ as ke}from"./Delete.4e68de5b.js";import{u as Se,_ as Ie,a as Ce,b as De,c as Ne}from"./ToolsPopup.e26fc626.js";import{_ as $e}from"./Times.978e9abc.js";import{_ as je}from"./InputPointFormat.vue.f8faed32.js";import{_ as Ae}from"./Plus.894880f1.js";import{n as Me,u as Te,q as qe,r as p,s as Re,v as Be,x as Oe,y as We,Q,R as Ve,o as i,c as u,a as e,b as v,B as t,t as f,O as m,z as O,H as ze,K as I,A as K,I as W,J as Pe,N as Y,S as X,C as A,D as G}from"./entry.dc995b47.js";import{u as Z}from"./useMyFetch.001523d4.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./HeaderPopup.vue.ba31dfaf.js";import"./useUtils.100f5b4a.js";const Ee={class:"w-full h-full flex flex-col"},Fe={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},Ue={class:"w-full flex flex-col items-center justify-center grow overflow-auto"},Je={class:"w-full flex flex-row flex-wrap"},He={key:0,class:"w-full sm:w-4/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},Le=e("label",{for:""},"Input At",-1),Qe={class:"card-border"},Ke={class:"w-full flex flex-col flex-wrap p-1 sm:w-4/12 md:w-3/12 lg:w-2/12"},Ye=e("label",{for:""},"Type",-1),Xe=["disabled"],Ge=e("option",{value:"used"},"Used",-1),Ze=e("option",{value:"in"},"In",-1),et=e("option",{value:"transfer"},"Transfer",-1),tt=[Ge,Ze,et],st={class:"text-red-500"},lt={class:"w-full sm:w-4/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},ot=e("label",{for:""},"From Warehouse",-1),at={key:0,class:"w-full flex"},nt=e("div",{class:"flex items-center grow p-1"}," Pilih Warehouse yang dikelola ",-1),it={key:1,class:"w-full flex",style:{}},ut={class:"flex flex-row flex-wrap grow"},ct={class:"p-1"},rt=e("div",{class:"text-sm text-gray-600"},"ID",-1),dt={class:"bold"},_t={class:"p-1"},ft=e("div",{class:"text-sm text-gray-600"},"Name",-1),mt={class:"bold"},pt={class:"flex flex-row flex-wrap grow"},vt={class:"p-1"},ht=e("div",{class:"text-sm text-gray-600"},"ID",-1),wt={class:"bold"},xt={class:"p-1"},yt=e("div",{class:"text-sm text-gray-600"},"Name",-1),bt={class:"bold"},gt={class:"text-red-500"},kt={key:1,class:"w-full sm:w-4/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},St=e("label",{for:""},"To Warehouse",-1),It={key:0,class:"w-full flex"},Ct=e("div",{class:"flex items-center grow p-1"}," Pilih Warehouse Target ",-1),Dt={key:1,class:"w-full flex",style:{}},Nt={class:"flex flex-row flex-wrap grow"},$t={class:"p-1"},jt=e("div",{class:"text-sm text-gray-600"},"ID",-1),At={class:"bold"},Mt={class:"p-1"},Tt=e("div",{class:"text-sm text-gray-600"},"Name",-1),qt={class:"bold"},Rt={class:"text-red-500"},Bt={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},Ot=e("label",{for:""},"Note",-1),Wt=["disabled"],Vt={class:"text-red-500"},zt={class:"w-full flex grow p-1 overflow-auto"},Pt={role:"sticky",ref:"loadRef"},Et={class:"tacky w-full",style:{"white-space":"normal"}},Ft={class:"sticky top-0 !z-[2]"},Ut={key:0,class:"min-w-[50px] !w-[50px] max-w-[50px]"},Jt=e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No",-1),Ht={key:1,class:"min-w-[50px] !w-[50px] max-w-[50px]"},Lt=e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"ID Item",-1),Qt=e("th",null,"Nama Item",-1),Kt=e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty In",-1),Yt=e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty Out",-1),Xt=e("th",null,"Keterangan",-1),Gt=["data-index","onDragstart","onDrop"],Zt={key:0,class:"tools cell"},es={class:"w-full h-full flex items-center justify-center"},ts=["onClick"],ss={key:1,class:"cell"},ls={class:"w-full h-full flex items-center justify-center"},os=["onClick"],as=["onClick","disabled"],ns={class:"w-full h-full flex items-center justify-center"},is={class:"w-full h-full flex items-center justify-center"},us={class:"cell"},cs={class:"w-full h-full flex items-center justify-center"},rs={class:"cell"},ds={class:"w-full h-full flex items-center justify-center"},_s={class:"cell"},fs={class:"w-full h-full flex items-center justify-center"},ms=["disabled","onUpdate:modelValue","tabindex"],ps={key:0},vs={class:"tools cell"},hs={class:"w-full flex items-center justify-end"},As=Me({__name:"form",async setup(ws){var J,H,L;let C,V;Te();const z=qe("token"),b=p({}),ee=Re(),P=Be();let D={id:"",name:""};const{data:M}=([C,V]=Oe(async()=>We(async()=>{const l=P.query.id;let s=null,r=null,h=null;if(l!==void 0&&l!==""){A().loading_full=!0;const{data:x,error:S,status:B}=await Z("/api/transaction",{method:"get",headers:{Authorization:`Bearer ${z.value}`,Accept:"application/json"},params:{id:l},retry:0});A().loading_full=!1,B.value==="error"?G().trigger(S,b):(s=x.value.data,h=x.value.data.details.map(y=>(y.status="Edit",y.key=y.ordinal,y)),r=x.value.data.details.map(y=>y.item.id))}return{transaction:s,exclude_lists:r,details:h}},"$RAej7t9zIe")),C=await C,V(),C),o=p(((J=M.value)==null?void 0:J.transaction)||{id:-1,type:"used",note:"",warehouse:{...D},warehouse_target:{...D},details:[]}),g=p(((H=M.value)==null?void 0:H.exclude_lists)||[]),a=p(((L=M.value)==null?void 0:L.details)||[]),T=p({ordinal:0,item:{id:"",name:"",unit:{id:"",name:""}},item_id:"",qty_in:0,qty_out:0,note:"",status:""}),k=p(!1),te=()=>{k.value=!1},se=l=>{a.value[d.value].item=l,a.value[d.value].item_id=l.id,g.value.push(l.id),k.value=!1},le=l=>{l.forEach(s=>{let r={...T.value,status:"Add"};r.item=s,r.item_id=s.id,g.value.push(s.id),a.value.push(r)}),k.value=!1},q=p(!1),oe=(l,s)=>{d.value=s,q.value=!1,k.value=!0},ae=(l,s)=>{q.value=!0,k.value=!0},ne=(l,s)=>{let r=a.value[s].item.id,h=g.value.indexOf(r);h>-1&&g.value.splice(h,1),a.value[s].item_id="",a.value[s].item={id:"",name:"",unit:{id:"",name:""}}};let N=p(!1),$="";const R=l=>{l=="from"?o.value.warehouse={...D}:l=="to"&&(o.value.warehouse_target={...D})},E=l=>{$=l,N.value=!0},ie=()=>{N.value=!1},ue=l=>{$=="from"?o.value.warehouse={...l}:$=="to"&&(o.value.warehouse_target={...l}),N.value=!1},ce=async()=>{A().loading_full=!0,b.value={};let l={type:o.value.type,note:o.value.note,warehouse_id:o.value.warehouse.id,warehouse_target_id:o.value.warehouse_target.id,details:JSON.stringify(a.value)},s="post",r=P.query.id;r===""||(s="put",l.id=r);const{data:h,error:x,status:S}=await Z("/api/transaction",{method:s,headers:{Authorization:`Bearer ${z.value}`,Accept:"application/json"},body:l,retry:0});if(A().loading_full=!1,S.value==="error"){G().trigger(x,b);return}ee.go(-1)},re=Q(()=>{var l,s;return((l=o.value.warehouse)==null?void 0:l.id)||((s=o.value.warehouse_target)==null?void 0:s.id)||0}),d=p(-1),j=p(!1),F=p({left:0,top:0}),de=(l,s)=>{d.value=s,j.value=!0,F.value={left:l.clientX,top:l.clientY}},_e=()=>{a.value.push({...T.value,status:"Add"})},fe=()=>{j.value=!1},me=(l="")=>{if(l=="insert")a.value.splice(d.value,0,{...T.value,status:"Add"});else if(l=="delete"){let s=a.value[d.value].item.id,r=g.value.indexOf(s);r>-1&&g.value.splice(r,1),a.value[d.value].status=="Edit"?a.value[d.value].status="Remove":a.value.splice(d.value,1)}else if(l=="move_top"){let s=a.value[d.value];a.value.splice(d.value,1),a.value.splice(d.value-1,0,{...s})}else if(l=="move_bottom"){let s=a.value[d.value];a.value.splice(d.value,1),a.value.splice(d.value+1,0,{...s})}j.value=!1},c=Q(()=>o.value.confirmed_by||o.value.ref_id!=null),pe=(l,s)=>{l.dataTransfer.setData("application/json",JSON.stringify(s))},ve=(l,s)=>{let r=JSON.parse(l.dataTransfer.getData("application/json")),h=a.value[r];a.value.splice(r,1),a.value.splice(s,0,{...h})},U=p(null);return Ve(()=>{c.value||Se(U,a)}),(l,s)=>{const r=be,h=ge,x=ke,S=Ie,B=$e,y=je,he=Ae,we=Ce,xe=De,ye=Ne;return i(),u(W,null,[e("div",Ee,[v(r,{title:"Form Transaksi",back:!0}),e("form",Fe,[e("div",Ue,[e("div",Je,[t(o).confirmed_by?(i(),u("div",He,[Le,e("div",Qe,f(l.$moment(t(o).input_at).format("DD-MM-Y")),1)])):m("",!0),e("div",Ke,[Ye,O(e("select",{disabled:t(c),class:"","onUpdate:modelValue":s[0]||(s[0]=n=>t(o).type=n)},tt,8,Xe),[[ze,t(o).type]]),e("p",st,f(t(b).type),1)]),e("div",lt,[ot,e("div",{class:I(["w-full flex flex-row flex-wrap",t(c)?"unselectable":""])},[!t(o).warehouse||!t(o).warehouse.id?(i(),u("div",at,[e("button",{type:"button",onClick:s[1]||(s[1]=n=>E("from")),class:"flex items-center grow"},[v(h,{class:"text-2xl text-black"}),nt])])):t(o).ref_id==null?(i(),u("div",it,[e("div",ut,[e("div",ct,[rt,e("div",dt,f(t(o).warehouse.id),1)]),e("div",_t,[ft,e("div",mt,f(t(o).warehouse.name),1)])]),t(c)?m("",!0):(i(),u("button",{key:0,type:"button",class:"w-10 bg-red-600 flex items-center justify-center",onClick:s[2]||(s[2]=n=>R("from"))},[v(x,{class:"text-2xl text-white"})]))])):t(o).ref_id!=null?(i(),u("div",{key:2,class:I(["w-full flex",t(c)?"unselectable":""]),style:{}},[e("div",pt,[e("div",vt,[ht,e("div",wt,f(t(o).warehouse_source.id),1)]),e("div",xt,[yt,e("div",bt,f(t(o).warehouse_source.name),1)])]),t(c)?m("",!0):(i(),u("button",{key:0,type:"button",class:"w-10 bg-red-600 flex items-center justify-center",onClick:s[3]||(s[3]=n=>R("from"))},[v(x,{class:"text-2xl text-white"})]))],2)):m("",!0)],2),e("p",gt,f(t(b).warehouse_id),1)]),t(o).type=="transfer"?(i(),u("div",kt,[St,e("div",{class:I(["w-full flex flex-row flex-wrap",t(c)?"unselectable":""])},[!t(o).warehouse_target||!t(o).warehouse_target.id?(i(),u("div",It,[e("button",{type:"button",onClick:s[4]||(s[4]=n=>E("to")),class:"flex items-center grow"},[v(h,{class:"text-2xl text-black"}),Ct])])):(i(),u("div",Dt,[e("div",Nt,[e("div",$t,[jt,e("div",At,f(t(o).warehouse_target.id),1)]),e("div",Mt,[Tt,e("div",qt,f(t(o).warehouse_target.name),1)])]),t(c)?m("",!0):(i(),u("button",{key:0,type:"button",class:"w-10 bg-red-600 flex items-center justify-center",onClick:s[5]||(s[5]=n=>R("to"))},[v(x,{class:"text-2xl text-white"})]))]))],2),e("p",Rt,f(t(b).warehouse_target_id),1)])):m("",!0),e("div",Bt,[Ot,O(e("textarea",{disabled:t(c),class:"","onUpdate:modelValue":s[6]||(s[6]=n=>t(o).note=n)},null,8,Wt),[[K,t(o).note]]),e("p",Vt,f(t(b).note),1)])]),e("div",zt,[e("div",Pt,[e("table",Et,[e("thead",null,[e("tr",Ft,[t(c)?m("",!0):(i(),u("th",Ut,[e("button",{type:"button",name:"button",class:"bg-yellow-600",onClick:s[7]||(s[7]=n=>ae())}," Bulk Add ")])),Jt,t(c)?m("",!0):(i(),u("th",Ht)),Lt,Qt,Kt,Yt,Xt])]),e("tbody",{ref_key:"to_move",ref:U},[(i(!0),u(W,null,Pe(t(a),(n,w)=>(i(),u(W,{key:w},[n.status!="Remove"?(i(),u("tr",{key:0,"data-index":w,draggable:"true",onDragstart:_=>pe(_,w),onDragover:s[8]||(s[8]=Y(()=>{},["prevent"])),onDrop:_=>ve(_,w)},[t(c)?m("",!0):(i(),u("td",Zt,[e("div",es,[e("button",{type:"button",name:"button",onClick:_=>de(_,w)},[v(S)],8,ts)])])),e("td",null,f(w+1)+".",1),t(c)?m("",!0):(i(),u("td",ss,[e("div",ls,[n.item_id?(i(),u("button",{key:1,type:"button",onClick:_=>ne(_,w),disabled:n.confirm_by},[v(B,{class:"font-bold text-2xl"})],8,as)):(i(),u("button",{key:0,type:"button",name:"button",onClick:_=>oe(_,w)}," ... ",8,os))])])),e("td",{class:I(["cell bold",t(c)?"unselectable":""])},[e("div",ns,f(n.item.id),1)],2),e("td",{class:I(["cell",t(c)?"unselectable":""])},[e("div",is,f(n.item.name),1)],2),e("td",us,[e("div",cs,[(i(),X(y,{disabled:t(c)||t(o).type=="used"||t(o).type=="transfer",key:w,class:"w-full h-full p-1",type:"text",value:n.qty_in||0,onInput:_=>n.qty_in=_,tabindex:t(a).length*0+1},null,8,["disabled","value","onInput","tabindex"]))])]),e("td",rs,[e("div",ds,[(i(),X(y,{disabled:t(c)||t(o).type=="in",key:w,class:"w-full h-full p-1",type:"text",value:n.qty_out||0,onInput:_=>n.qty_out=_,tabindex:t(a).length*1+1},null,8,["disabled","value","onInput","tabindex"]))])]),e("td",_s,[e("div",fs,[O(e("textarea",{disabled:t(c),class:"p-1 w-full","onUpdate:modelValue":_=>n.note=_,cols:"7",rows:"2",tabindex:t(a).length*2+1},null,8,ms),[[K,n.note]])])])],40,Gt)):m("",!0)],64))),128)),t(c)?m("",!0):(i(),u("tr",ps,[e("td",vs,[e("button",{type:"button",name:"button",onClick:s[9]||(s[9]=n=>_e())},[v(he)])])]))],512)])],512)])]),e("div",hs,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:s[10]||(s[10]=n=>l.$router.go(-1))}," Cancel "),t(c)?m("",!0):(i(),u("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:s[11]||(s[11]=Y(n=>ce(),["prevent"]))}," Save "))])])]),v(we,{show:t(k),fnClose:te,fnSelect:se,fnSelectMulti:le,exclude_lists:t(g),enableMultiSelect:t(q),multi_key:["id","name"]},null,8,["show","exclude_lists","enableMultiSelect"]),v(xe,{show:t(N),fnClose:ie,fnSelect:ue,opt:t($),exclude:t(re)},null,8,["show","opt","exclude"]),v(ye,{show:t(j),coor:t(F),fn:fe,data:t(a),data_index:t(d),onReplyAct:s[12]||(s[12]=n=>me(n))},null,8,["show","coor","data","data_index"])],64)}}});export{As as default};
