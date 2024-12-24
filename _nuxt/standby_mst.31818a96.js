import{_ as le}from"./HeaderPopup.vue.fe14bc58.js";import ae from"./Tools.8903ba14.js";import ne from"./Times.725e6b46.js";import{_ as ce}from"./InputPointFormat.vue.97c24bd4.js";import ie from"./Plus.cb543c06.js";import de from"./ToolsPopup.cc6bfdc0.js";import ue from"./ac_accs.166c632c.js";import{r as h,g as M,i as R,f as _e,o as u,c as r,k,J as re,a as e,b as S,l as t,A as U,t as _,$ as K,n as g,d as Y,F as q,D as pe,E as C,z as me,v as fe,C as ve,x as j,y as J,p as he,e as we}from"./entry.468c1924.js";import{u as F}from"./useUtils.f67a7b52.js";import{u as L}from"./useMyFetch.5d39e20e.js";import{_ as xe}from"./_plugin-vue_export-helper.c27b6911.js";import"./Search.9b037104.js";const d=f=>(he("data-v-86c9bf19"),f=f(),we(),f),be={class:"box-fixed"},ye={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},ke={class:"w-full flex flex-col items-center grow overflow-auto"},ge={class:"w-full flex flex-row flex-wrap"},Se={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},Ce=d(()=>e("label",{for:""},"Name",-1)),Ae=["disabled"],Ie={class:"text-red-500"},Ne={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},je=d(()=>e("label",{for:""},"Tipe",-1)),Ve=["disabled"],Te={class:"text-red-500"},Ue={class:"w-full sm:w-4/12 md:w-2/12 lg:w-2/12 flex flex-col flex-wrap p-1"},qe=d(()=>e("label",{for:""},"Amount",-1)),Fe={class:"card-border disabled"},$e={class:"text-red-500"},Be={class:"w-1/2 sm:w-4/12 md:w-2/12 lg:w-2/12 flex flex-col flex-wrap p-1"},Pe=d(()=>e("label",{for:""},"Peralihan?",-1)),De={class:"card-border !flex flex-row items-center"},Ee=["checked"],ze={for:"checkbox",class:"w-full ml-1"},Me={class:"text-red-500"},Re={class:"w-1/2 sm:w-4/12 md:w-2/12 lg:w-2/12 flex flex-col flex-wrap p-1"},Ke=d(()=>e("label",{for:""},"Trip?",-1)),Ye={class:"card-border !flex flex-row items-center"},Je=["checked"],Le={for:"checkbox",class:"w-full ml-1"},Oe={class:"text-red-500"},Ge={class:"w-full flex p-1 2xl:overflow-hidden justify-between flex-wrap"},He={class:"w-full",role:"sticky"},Xe={class:"tacky w-full !table-auto",style:{"white-space":"normal"}},Qe={class:"sticky -top-1 !z-[2]"},We=["colspan"],Ze={class:"sticky top-7 !z-[2]"},et={key:0,class:"min-w-[30px] !w-[30px] max-w-[30px]"},tt=d(()=>e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No",-1)),st={key:1,class:"min-w-[30px] !w-[30px] max-w-[30px]"},ot=d(()=>e("th",{class:"min-w-[40px] !w-[40px] max-w-[40px]"},"Acc ID",-1)),lt=d(()=>e("th",{class:"!min-w-[100px] !w-[100px] !max-w-[100px]"},"Acc Code",-1)),at=d(()=>e("th",{class:"!min-w-[150px] !w-[150px] !max-w-[150px]"},"Acc Name",-1)),nt=d(()=>e("th",{class:"!min-w-[150px] !w-[150px] !max-w-[150px]"},"Desc",-1)),ct={class:"min-w-[100px] !w-[100px] max-w-[100px]"},it=d(()=>e("br",null,null,-1)),dt={class:"text-sm"},ut=d(()=>e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"For",-1)),_t={ref:"to_move"},rt=["data-index"],pt={key:0,class:"tools cell"},mt={class:"w-full h-full flex items-center justify-center"},ft=["onClick"],vt={key:1,class:"cell"},ht={class:"w-full h-auto flex items-center justify-center"},wt=["onClick"],xt=["onClick","disabled"],bt={class:"w-full h-auto flex items-center justify-center"},yt={class:"w-full h-auto flex items-center justify-center"},kt={class:"w-full h-auto flex items-center justify-center"},gt={class:"cell"},St={class:"w-full h-auto flex items-center justify-center"},Ct=["disabled","onUpdate:modelValue"],At={class:"w-full h-auto flex items-center justify-center"},It={class:"w-full h-auto flex items-center justify-center"},Nt=["onUpdate:modelValue","disabled"],jt=d(()=>e("option",{value:"Supir"},"Supir",-1)),Vt=d(()=>e("option",{value:"Kernet"},"Kernet",-1)),Tt=[jt,Vt],Ut={key:0},qt={class:"tools cell"},Ft={class:"w-full flex items-center justify-end"},$t={__name:"standby_mst",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]},is_copy:{type:[Boolean,Number],required:!0,default:!1}},setup(f){const m=f,{pointFormat:$}=F(),B={id:-1,name:"",tipe:"",amount:0,is_transition:!1,is_trip:!0,details:[]},l=h({...B}),P=M("token"),b=h({});h([{xdesc:"Gaji Kernet",qty:1,harga:0},{xdesc:"U.Extrafooding",qty:1,harga:2e4}]);const n=h([]),D=h({ordinal:0,id:-1,ac_account_id:"",ac_account_name:"",ac_account_code:"",description:"",amount:0,xfor:"",p_status:""}),A=h(!1),O=()=>{A.value=!1},G=o=>{n.value[i.value].ac_account_id=o.ac_account_id,n.value[i.value].ac_account_code=o.ac_account_code,n.value[i.value].ac_account_name=o.ac_account_name,A.value=!1},H=(o,s)=>{i.value=s,A.value=!0},X=(o,s)=>{n.value[s].ac_account_id="",n.value[s].ac_account_code="",n.value[s].ac_account_name=""},Q=async()=>{j().loading_full=!0,b.value={};const o=new FormData;o.append("name",l.value.name),o.append("tipe",l.value.tipe),o.append("is_transition",l.value.is_transition),o.append("is_trip",l.value.is_trip),o.append("amount",l.value.amount),o.append("details",JSON.stringify(n.value));let s="post",w=m.is_copy?0:m.id;w==0||(o.append("id",w),o.append("_method","PUT"));const{data:v,error:x,status:V}=await L("/standby_mst",{method:s,headers:{Authorization:`Bearer ${P.value}`,Accept:"application/json"},body:o,retry:0});if(j().loading_full=!1,V.value==="error"){J().trigger(x,b);return}if(w<=0)l.value.id=v.value.id,l.value.created_at=v.value.created_at,l.value.updated_at=v.value.updated_at,m.p_data.unshift(l.value);else{l.value.updated_at=v.value.updated_at;let N=m.p_data.map(T=>T.id).indexOf(w);N>=-1&&m.p_data.splice(N,1,{...l.value})}m.fnClose()},E=R(()=>{let o=0;return n.value.forEach(s=>{s.p_status!="Remove"&&(o+=1*s.amount)}),l.value.amount=o,o}),i=h(-1),I=h(!1),z=h({left:0,top:0}),W=(o,s)=>{i.value=s,I.value=!0,z.value={left:o.clientX,top:o.clientY}},Z=()=>{n.value.push({...D.value,p_status:"Add"})},ee=()=>{I.value=!1},te=(o="")=>{if(o=="insert")n.value.splice(i.value,0,{...D.value,p_status:"Add"});else if(o=="delete")n.value[i.value].p_status=="Edit"?n.value[i.value].p_status="Remove":n.value.splice(i.value,1);else if(o=="move_top"){let s=n.value[i.value];n.value.splice(i.value,1),n.value.splice(i.value-1,0,{...s})}else if(o=="move_bottom"){let s=n.value[i.value];n.value.splice(i.value,1),n.value.splice(i.value+1,0,{...s})}I.value=!1};M("role");const c=R(()=>l.value.val&&l.value.val1||F().checkPermission("standby_mst.val")&&l.value.val||F().checkPermission("standby_mst.val1")&&l.value.val1),se=async()=>{j().loading_full=!0;const{data:o,error:s,status:w}=await L("/standby_mst",{method:"get",headers:{Authorization:`Bearer ${P.value}`,Accept:"application/json"},params:{id:m.id},retry:0});if(j().loading_full=!1,w.value==="error"){J().trigger(s);return}l.value=o.value.data;let v="Edit";m.is_copy&&(v="Add",l.value.val=0,l.value.val1=0),n.value=o.value.data.details.map(x=>(x.p_status=v,x.key=x.ordinal,x))};return _e(()=>m.show,(o,s)=>{o==!0&&(l.value={...B},n.value=[],m.id!=0&&se())},{immediate:!0}),(o,s)=>{const w=le,v=ae,x=ne,V=ce,N=ie,T=de,oe=ue;return u(),r(q,null,[k(e("section",be,[e("div",null,[S(w,{title:"Form StandBy Mst",fn:f.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",ye,[e("div",ke,[e("div",ge,[e("div",Se,[Ce,k(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>t(l).name=a),disabled:t(c)},null,8,Ae),[[U,t(l).name]]),e("p",Ie,_(t(b).name),1)]),e("div",Ne,[je,k(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>t(l).tipe=a),disabled:t(c)},null,8,Ve),[[U,t(l).tipe]]),e("p",Te,_(t(b).tipe),1)]),e("div",Ue,[qe,e("div",Fe,_(t($)(t(E))),1),e("p",$e,_(t(b).amount),1)]),e("div",Be,[Pe,e("div",De,[k(e("input",{id:"checkbox",checked:t(l).is_transition,"onUpdate:modelValue":s[2]||(s[2]=a=>t(l).is_transition=a),type:"checkbox",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"},null,8,Ee),[[K,t(l).is_transition]]),e("label",ze,_(t(l).is_transition?"Ya":"Tidak"),1)]),e("p",Me,_(t(b).is_transition),1)]),e("div",Re,[Ke,e("div",Ye,[k(e("input",{id:"checkbox",checked:t(l).is_trip,"onUpdate:modelValue":s[3]||(s[3]=a=>t(l).is_trip=a),type:"checkbox",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"},null,8,Je),[[K,t(l).is_trip]]),e("label",Le,_(t(l).is_trip?"Ya":"Tidak"),1)]),e("p",Oe,_(t(b).is_trip),1)])]),e("div",Ge,[e("div",He,[e("table",Xe,[e("thead",null,[e("tr",Qe,[e("td",{colspan:t(c)?7:9,class:"!bg-slate-800 text-white font-bold"}," Detail ",8,We)]),e("tr",Ze,[t(c)?g("",!0):(u(),r("th",et)),tt,t(c)?g("",!0):(u(),r("th",st)),ot,lt,at,nt,e("th",ct,[Y("Amount "),it,Y(),e("span",dt,"("+_(t($)(t(E)))+")",1)]),ut])]),e("tbody",_t,[(u(!0),r(q,null,pe(t(n),(a,y)=>(u(),r(q,{key:y},[a.p_status!="Remove"?(u(),r("tr",{key:0,"data-index":y},[t(c)?g("",!0):(u(),r("td",pt,[e("div",mt,[e("button",{type:"button",name:"button",onClick:p=>W(p,y)},[S(v)],8,ft)])])),e("td",null,_(y+1)+".",1),t(c)?g("",!0):(u(),r("td",vt,[e("div",ht,[a.ac_account_id?(u(),r("button",{key:1,type:"button",onClick:p=>X(p,y),disabled:a.confirm_by},[S(x,{class:"font-bold text-2xl"})],8,xt)):(u(),r("button",{key:0,type:"button",name:"button",onClick:p=>H(p,y)}," ... ",8,wt))])])),e("td",{class:C(["cell bold",t(c)?"unselectable":""])},[e("div",bt,_(a.ac_account_id),1)],2),e("td",{class:C(["cell bold",t(c)?"unselectable":""])},[e("div",yt,_(a.ac_account_code),1)],2),e("td",{class:C(["cell bold",t(c)?"unselectable":""])},[e("div",kt,_(a.ac_account_name),1)],2),e("td",gt,[e("div",St,[k(e("textarea",{disabled:t(c),class:"p-1 w-full","onUpdate:modelValue":p=>a.description=p,cols:"7",rows:"2"},null,8,Ct),[[U,a.description]])])]),e("td",{class:C(["cell bold",t(c)?"unselectable":""])},[e("div",At,[(u(),me(V,{key:y,class:"w-full h-full p-1",type:"text",value:a.amount||0,onInput:p=>a.amount=p,show:f.show,disabled:t(c)},null,8,["value","onInput","show","disabled"]))])],2),e("td",{class:C(["cell",t(c)?"unselectable":""])},[e("div",It,[k(e("select",{"onUpdate:modelValue":p=>a.xfor=p,disabled:t(c)},Tt,8,Nt),[[fe,a.xfor]])])],2)],8,rt)):g("",!0)],64))),128)),t(c)?g("",!0):(u(),r("tr",Ut,[e("td",qt,[e("button",{type:"button",name:"button",onClick:s[4]||(s[4]=a=>Z())},[S(N)])])]))],512)])])])]),e("div",Ft,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:s[5]||(s[5]=a=>f.fnClose())}," Cancel "),t(c)?g("",!0):(u(),r("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:s[6]||(s[6]=ve(a=>Q(),["prevent"]))}," Save "))])])])],512),[[re,f.show]]),S(T,{show:t(I),coor:t(z),fn:ee,data:t(n),data_index:t(i),onReplyAct:s[7]||(s[7]=a=>te(a))},null,8,["show","coor","data","data_index"]),S(oe,{show:t(A),fnClose:O,fnSelect:G},null,8,["show"])],64)}}},Gt=xe($t,[["__scopeId","data-v-86c9bf19"]]);export{Gt as default};
