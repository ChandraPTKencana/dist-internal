import{_ as je}from"./HeaderCustom.vue.0d50849b.js";import{_ as se}from"./Search.74c9be78.js";import{_ as Ne}from"./Delete.41cc5497.js";import{_ as X}from"./_plugin-vue_export-helper.c27b6911.js";import{o,c as n,a as e,h as le,r as h,E as oe,m as A,G as ae,b as g,z as fe,v as Q,n as t,A as K,F as J,B as ne,C as P,t as m,D as pe,p as ve,e as me,q as V,s as Z,f as he,H as $,g as qe,i as Te,j as Me,k as Le,l as He,I as ue,J as _e}from"./entry.9dd501cc.js";import{_ as Oe}from"./Times.ad53842a.js";import{_ as Re}from"./InputPointFormat.vue.2fa20890.js";import{_ as Be}from"./Plus.0ab02d3f.js";import{_ as ye}from"./HeaderPopup.vue.47c98228.js";import{u as G}from"./useMyFetch.b5a1eede.js";const Ue={name:"TablerTools"},Ve={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},ze=e("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[e("path",{d:"M3 21h4L20 8a1.5 1.5 0 0 0-4-4L3 17zM14.5 5.5l4 4"}),e("path",{d:"M12 8L7 3L3 7l5 5M7 8L5.5 9.5M16 12l5 5l-4 4l-5-5m4 1l-1.5 1.5"})],-1),Fe=[ze];function Pe(_,w,b,N,a,p){return o(),n("svg",Ve,Fe)}const We=X(Ue,[["render",Pe]]);const H=_=>(ve("data-v-630e1584"),_=_(),me(),_),Ee={class:"box-fixed"},Je={class:"w-full flex p-1"},Ke={class:"grow"},Ye=H(()=>e("div",{class:"font-bold"}," Keyword ",-1)),Qe={class:"pl-1"},Ze=H(()=>e("div",{class:"font-bold"}," Sort By ",-1)),Ge=H(()=>e("option",{value:"created_at"},"Created At",-1)),Xe=H(()=>e("option",{value:"id"},"ID",-1)),et=H(()=>e("option",{value:"name"},"Nama",-1)),tt=[Ge,Xe,et],st={class:"pl-1"},lt=H(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),ot=H(()=>e("option",{value:"asc"},"Asc",-1)),at=H(()=>e("option",{value:"desc"},"Desc",-1)),nt=[ot,at],it={class:"flex items-end pl-1"},ct={class:"w-full flex justify-center items-center grow h-0 p-1"},rt={key:0,class:""},dt={class:"tacky"},ut=H(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"ID"),e("th",null,"Name"),e("th",null,"Unit"),e("th",null,"Created At"),e("th",null,"Updated At")])],-1)),_t=["onClick"],ft={class:"bold"},pt={class:"flex",style:{"justify-content":"end",padding:"5px"}},vt={__name:"items",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},setup(_){const w=_,{$moment:b}=pe(),N=le("token"),a=h([]),p=h(""),y=h({field:"created_at",by:"desc"}),k=h(-1),i=h({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),s={};s._TimeZoneOffset=new Date().getTimezoneOffset();const j=()=>{s.like="",p.value!=""&&(s.like=`id:%${p.value}%,name:%${p.value}%`),s.sort="",y.value.field&&(s.sort=y.value.field+":"+y.value.by)},v=h(null),R=async()=>{V().loading_full=!0,i.value.may_get_data=!1,s.page=i.value.page,s.page==1&&(a.value=[]),w.exclude_lists&&(s.exclude_lists=JSON.stringify(w.exclude_lists)),s.first_row&&delete s.first_row,s.page>1&&(s.first_row=JSON.stringify(a.value[0]));const{data:u,error:c,status:S}=await G("/api/items",{method:"get",headers:{Authorization:`Bearer ${N.value}`,Accept:"application/json"},params:s,retry:0});if(V().loading_full=!1,i.value.may_get_data=!0,S.value==="error"){Z().trigger(c);return}i.value.page==1?(a.value=u.value.data,v.value&&(v.value.scrollTop=0)):i.value.page>1&&(a.value=[...a.value,...u.value.data]),u.value.data.length==0&&(i.value.is_last_record=!0)},B=async()=>{if(!i.value.may_get_data)return;let u=v.value;if(u.scrollLeft!=i.value.scrollLeft){i.value.scrollLeft=u.scrollLeft;return}i.value.is_last_record||!(Math.round(u.scrollTop)+u.clientHeight>=u.scrollHeight-1)||(i.value.page++,await R())},z=()=>{i.value.page=1,i.value.is_last_record=!1,j(),R()},W=()=>{k.value>-1?w.fnSelect(a.value[k.value]):w.fnSelect({id:"",name:""})};return oe(()=>w.show,(u,c)=>{u==!0&&z()},{immediate:!0}),(u,c)=>{const S=ye,U=se;return A((o(),n("section",Ee,[e("div",null,[g(S,{title:"Search And Select Item",fn:_.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",Je,[e("div",Ke,[Ye,A(e("input",{class:"",type:"text","onUpdate:modelValue":c[0]||(c[0]=d=>fe(p)?p.value=d:null),name:"search",placeholder:"Keyword"},null,512),[[Q,t(p)]])]),e("div",Qe,[Ze,A(e("select",{class:"","onUpdate:modelValue":c[1]||(c[1]=d=>t(y).field=d)},tt,512),[[K,t(y).field]])]),e("div",st,[lt,A(e("select",{class:"","onUpdate:modelValue":c[2]||(c[2]=d=>t(y).by=d)},nt,512),[[K,t(y).by]])]),e("div",it,[e("button",{class:"",type:"button",name:"button",onClick:c[3]||(c[3]=d=>z())},[g(U,{class:"text-2xl"})])])]),e("div",ct,[t(a).length==0?(o(),n("div",rt," Maaf Tidak Ada Record ")):(o(),n("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:v,onScroll:B},[e("table",dt,[ut,e("tbody",null,[(o(!0),n(J,null,ne(t(a),(d,C)=>(o(),n("tr",{key:C,onClick:ee=>k.value=C,class:P(t(k)==C?"active":"")},[e("td",null,m(C+1)+".",1),e("td",ft,m(d.id),1),e("td",null,m(d.name),1),e("td",null,m(d.unit.name),1),e("td",null,m(t(b)(d.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,m(t(b)(d.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,_t))),128))])])],544))]),e("div",pt,[e("button",{onClick:c[4]||(c[4]=d=>W()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[ae,_.show]])}}},mt=X(vt,[["__scopeId","data-v-630e1584"]]);const O=_=>(ve("data-v-38cbcbc5"),_=_(),me(),_),ht={class:"box-fixed"},yt={class:"w-full flex p-1"},wt={class:"grow"},xt=O(()=>e("div",{class:"font-bold"}," Keyword ",-1)),gt={class:"pl-1"},bt=O(()=>e("div",{class:"font-bold"}," Sort By ",-1)),kt=O(()=>e("option",{value:"created_at"},"Created At",-1)),$t=O(()=>e("option",{value:"id"},"ID",-1)),St=O(()=>e("option",{value:"name"},"Nama",-1)),Ct=[kt,$t,St],It={class:"pl-1"},At=O(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),Dt=O(()=>e("option",{value:"asc"},"Asc",-1)),jt=O(()=>e("option",{value:"desc"},"Desc",-1)),Nt=[Dt,jt],qt={class:"flex items-end pl-1"},Tt={class:"w-full flex justify-center items-center grow h-0 p-1"},Mt={key:0,class:""},Lt={class:"tacky"},Ht=O(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"ID"),e("th",null,"Name"),e("th",null,"Created At"),e("th",null,"Updated At")])],-1)),Ot=["onClick"],Rt={class:"bold"},Bt={class:"flex",style:{"justify-content":"end",padding:"5px"}},Ut={__name:"hrm_revisi_lokasis",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},opt:{type:String,required:!1},exclude:{type:Number,required:!1},exclude_lists:{type:Array,required:!1}},setup(_){const w=_,{$moment:b}=pe(),N=le("token"),a=h([]),p=h(""),y=h({field:"created_at",by:"desc"}),k=h(-1),i=h({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),s={};s._TimeZoneOffset=new Date().getTimezoneOffset();const j=()=>{s.like="",p.value!=""&&(s.like=`id:%${p.value}%,name:%${p.value}%`),s.sort="",y.value.field&&(s.sort=y.value.field+":"+y.value.by)},v=h(null),R=async()=>{V().loading_full=!0,i.value.may_get_data=!1,s.opt=w.opt,s.exclude=w.exclude,s.page=i.value.page,s.page==1&&(a.value=[]),s.first_row&&delete s.first_row,s.page>1&&(s.first_row=JSON.stringify(a.value[0]));const{data:u,error:c,status:S}=await G("/api/hrm_revisi_lokasis",{method:"get",headers:{Authorization:`Bearer ${N.value}`,Accept:"application/json"},params:s,retry:0});if(V().loading_full=!1,i.value.may_get_data=!0,S.value==="error"){Z().trigger(c);return}i.value.page==1?(a.value=u.value.data,v.value&&(v.value.scrollTop=0)):i.value.page>1&&(a.value=[...a.value,...u.value.data]),u.value.data.length==0&&(i.value.is_last_record=!0)},B=async()=>{if(!i.value.may_get_data)return;let u=v.value;if(u.scrollLeft!=i.value.scrollLeft){i.value.scrollLeft=u.scrollLeft;return}i.value.is_last_record||!(Math.round(u.scrollTop)+u.clientHeight>=u.scrollHeight-1)||(i.value.page++,await R())},z=()=>{i.value.page=1,i.value.is_last_record=!1,j(),R()},W=()=>{k.value>-1?w.fnSelect(a.value[k.value]):w.fnSelect({id:"",name:""})};return oe(()=>w.show,(u,c)=>{u==!0&&z()},{immediate:!0}),(u,c)=>{const S=ye,U=se;return A((o(),n("section",ht,[e("div",null,[g(S,{title:"Search And Select Warehouse",fn:_.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",yt,[e("div",wt,[xt,A(e("input",{class:"",type:"text","onUpdate:modelValue":c[0]||(c[0]=d=>fe(p)?p.value=d:null),name:"search",placeholder:"Keyword"},null,512),[[Q,t(p)]])]),e("div",gt,[bt,A(e("select",{class:"","onUpdate:modelValue":c[1]||(c[1]=d=>t(y).field=d)},Ct,512),[[K,t(y).field]])]),e("div",It,[At,A(e("select",{class:"","onUpdate:modelValue":c[2]||(c[2]=d=>t(y).by=d)},Nt,512),[[K,t(y).by]])]),e("div",qt,[e("button",{class:"",type:"button",name:"button",onClick:c[3]||(c[3]=d=>z())},[g(U,{class:"text-2xl"})])])]),e("div",Tt,[t(a).length==0?(o(),n("div",Mt," Maaf Tidak Ada Record ")):(o(),n("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:v,onScroll:B},[e("table",Lt,[Ht,e("tbody",null,[(o(!0),n(J,null,ne(t(a),(d,C)=>(o(),n("tr",{key:C,onClick:ee=>k.value=C,class:P(t(k)==C?"active":"")},[e("td",null,m(C+1)+".",1),e("td",Rt,m(d.id),1),e("td",null,m(d.name),1),e("td",null,m(t(b)(d.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,m(t(b)(d.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,Ot))),128))])])],544))]),e("div",Bt,[e("button",{onClick:c[4]||(c[4]=d=>W()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[ae,_.show]])}}},Vt=X(Ut,[["__scopeId","data-v-38cbcbc5"]]),zt=he({__name:"ToolsPopup",props:{show:{type:Boolean,required:!0},coor:{type:Object,required:!1},fn:{type:Function,required:!0},only:{type:Object}},setup(_){const w=_,b=h(null),N=a=>{a.target.classList.contains("box")&&w.fn()};return oe(()=>w.coor,(a,p)=>{a&&b.value&&(b.value.style.left=a.left+"px",b.value.style.top=a.top+"px")},{immediate:!0,deep:!0}),(a,p)=>A((o(),n("div",{class:"box",onClick:p[2]||(p[2]=y=>N(y))},[e("div",{ref_key:"popup",ref:b},[e("ul",null,[!_.only||_.only.length==0||_.only.indexOf("insert")>-1?(o(),n("li",{key:0,onClick:p[0]||(p[0]=y=>a.$emit("replyAct","insert"))},"Insert")):$("",!0),!_.only||_.only.length==0||_.only.indexOf("delete")>-1?(o(),n("li",{key:1,onClick:p[1]||(p[1]=y=>a.$emit("replyAct","delete"))},"Delete")):$("",!0)])],512)],512)),[[ae,_.show]])}});const Ft=X(zt,[["__scopeId","data-v-cde7f964"]]),Pt={class:"w-full h-full flex flex-col"},Wt={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},Et={class:"w-full flex flex-col items-center justify-center grow overflow-auto"},Jt={class:"w-full flex flex-row flex-wrap"},Kt={class:"w-full flex flex-col flex-wrap p-1"},Yt=e("label",{for:""},"Type",-1),Qt=["disabled"],Zt=e("option",{value:"used"},"Used",-1),Gt=e("option",{value:"in"},"In",-1),Xt=e("option",{value:"transfer"},"Transfer",-1),es=[Zt,Gt,Xt],ts={class:"text-red-500"},ss={class:"w-full flex flex-col flex-wrap p-1"},ls=e("label",{for:""},"From Warehouse",-1),os={class:"card-border flex flex-row flex-wrap"},as={key:0,class:"w-full flex"},ns=e("div",{class:"flex items-center grow p-1"}," Pilih Warehouse yang dikelola ",-1),is={class:"flex flex-row flex-wrap grow"},cs={class:"p-1"},rs=e("div",{class:"text-sm text-gray-600"},"ID",-1),ds={class:"bold"},us={class:"p-1"},_s=e("div",{class:"text-sm text-gray-600"},"Name",-1),fs={class:"bold"},ps={class:"flex flex-row flex-wrap grow"},vs={class:"p-1"},ms=e("div",{class:"text-sm text-gray-600"},"ID",-1),hs={class:"bold"},ys={class:"p-1"},ws=e("div",{class:"text-sm text-gray-600"},"Name",-1),xs={class:"bold"},gs={class:"text-red-500"},bs={key:0,class:"w-full flex flex-col flex-wrap p-1"},ks=e("label",{for:""},"To Warehouse",-1),$s={class:"card-border flex flex-row flex-wrap"},Ss={key:0,class:"w-full flex"},Cs=e("div",{class:"flex items-center grow p-1"}," Pilih Warehouse Target ",-1),Is={class:"flex flex-row flex-wrap grow"},As={class:"p-1"},Ds=e("div",{class:"text-sm text-gray-600"},"ID",-1),js={class:"bold"},Ns={class:"p-1"},qs=e("div",{class:"text-sm text-gray-600"},"Name",-1),Ts={class:"bold"},Ms={class:"text-red-500"},Ls={class:"w-full flex flex-col flex-wrap p-1"},Hs=e("label",{for:""},"Note",-1),Os=["disabled"],Rs={class:"text-red-500"},Bs={class:"w-full flex grow p-1 overflow-auto"},Us={role:"sticky",ref:"loadRef"},Vs={class:"tacky w-full",style:{"white-space":"normal"}},zs={class:"sticky top-0 !z-[2]"},Fs={key:0,class:"min-w-[50px] !w-[50px] max-w-[50px]"},Ps=e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No",-1),Ws={key:1,class:"min-w-[50px] !w-[50px] max-w-[50px]"},Es=e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"ID Item",-1),Js=e("th",null,"Nama Item",-1),Ks=e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty In",-1),Ys=e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty Out",-1),Qs=e("th",null,"Keterangan",-1),Zs={key:0},Gs={key:0,class:"tools cell"},Xs={class:"w-full h-full flex items-center justify-center"},el=["onClick"],tl={key:1,class:"cell"},sl={class:"w-full h-full flex items-center justify-center"},ll=["onClick"],ol=["onClick","disabled"],al={class:"w-full h-full flex items-center justify-center"},nl={class:"w-full h-full flex items-center justify-center"},il={class:"cell"},cl={class:"w-full h-full flex items-center justify-center"},rl={class:"cell"},dl={class:"w-full h-full flex items-center justify-center"},ul={class:"cell"},_l={class:"w-full h-full flex items-center justify-center"},fl=["disabled","onUpdate:modelValue"],pl={key:0},vl={class:"tools cell"},ml={class:"w-full flex items-center justify-end"},Il=he({__name:"form",async setup(_){var ce,re,de;let w,b;qe();const N=le("token"),a=h({}),p=Te(),y=Me();let k={id:"",name:""};const{data:i}=([w,b]=Le(async()=>He(async()=>{const r=y.query.id;let l=null,I=null,T=null;if(r!==void 0&&r!==""){V().loading_full=!0;const{data:M,error:E,status:te}=await G("/api/transaction",{method:"get",headers:{Authorization:`Bearer ${N.value}`,Accept:"application/json"},params:{id:r},retry:0});V().loading_full=!1,te.value==="error"?Z().trigger(E,a):(l=M.value.data,T=M.value.data.details.map(L=>(L.status="Edit",L.key=L.ordinal,L)),I=M.value.data.details.map(L=>L.item.id))}return{transaction:l,exclude_lists:I,details:T}},"$RAej7t9zIe")),w=await w,b(),w),s=h(((ce=i.value)==null?void 0:ce.transaction)||{id:-1,type:"used",note:"",warehouse:{...k},warehouse_target:{...k},details:[]}),j=h(((re=i.value)==null?void 0:re.exclude_lists)||[]),v=h(((de=i.value)==null?void 0:de.details)||[]),R=h({ordinal:0,item:{id:"",name:"",unit:{id:"",name:""}},item_id:"",qty_in:0,qty_out:0,note:"",status:""}),B=h(!1),z=()=>{B.value=!1},W=r=>{v.value[q.value].item=r,v.value[q.value].item_id=r.id,j.value.push(r.id),B.value=!1},u=(r,l)=>{q.value=l,B.value=!0},c=(r,l)=>{let I=v.value[l].item.id,T=j.value.indexOf(I);T>-1&&j.value.splice(T,1),v.value[l].item_id="",v.value[l].item={id:"",name:"",unit:{id:"",name:""}}};let S=h(!1),U="";const d=r=>{r=="from"?s.value.warehouse={...k}:r=="to"&&(s.value.warehouse_target={...k})},C=r=>{U=r,S.value=!0},ee=()=>{S.value=!1},we=r=>{U=="from"?s.value.warehouse={...r}:U=="to"&&(s.value.warehouse_target={...r}),S.value=!1},xe=async()=>{V().loading_full=!0,a.value={};let r={type:s.value.type,note:s.value.note,warehouse_id:s.value.warehouse.id,warehouse_target_id:s.value.warehouse_target.id,details:JSON.stringify(v.value)};console.log(v.value);let l="post",I=y.query.id;I===""||(l="put",r.id=I);const{data:T,error:M,status:E}=await G("/api/transaction",{method:l,headers:{Authorization:`Bearer ${N.value}`,Accept:"application/json"},body:r,retry:0});if(V().loading_full=!1,E.value==="error"){Z().trigger(M,a);return}p.go(-1)},ge=ue(()=>{var r,l;return((r=s.value.warehouse)==null?void 0:r.id)||((l=s.value.warehouse_target)==null?void 0:l.id)||0}),q=h(-1),Y=h(!1),ie=h({left:0,top:0}),be=(r,l)=>{q.value=l,Y.value=!0,ie.value={left:r.clientX,top:r.clientY}},ke=()=>{v.value.push({...R.value,status:"Add"})},$e=()=>{Y.value=!1},Se=(r="")=>{if(r=="insert")v.value.splice(q.value,0,{...R.value,status:"Add"});else if(r=="delete"){let l=v.value[q.value].item.id,I=j.value.indexOf(l);I>-1&&j.value.splice(I,1),v.value[q.value].status=="Edit"?v.value[q.value].status="Remove":v.value.splice(q.value,1)}Y.value=!1},x=ue(()=>s.value.confirmed_by||s.value.ref_id!=null);return(r,l)=>{const I=je,T=se,M=Ne,E=We,te=Oe,L=Re,Ce=Be,Ie=mt,Ae=Vt,De=Ft;return o(),n(J,null,[e("div",Pt,[g(I,{title:"Form Item",back:!0}),e("div",Wt,[e("div",Et,[e("div",Jt,[e("div",Kt,[Yt,A(e("select",{disabled:t(x),class:"","onUpdate:modelValue":l[0]||(l[0]=f=>t(s).type=f)},es,8,Qt),[[K,t(s).type]]),e("p",ts,m(t(a).type),1)]),e("div",ss,[ls,e("div",os,[!t(s).warehouse||!t(s).warehouse.id?(o(),n("div",as,[e("button",{onClick:l[1]||(l[1]=f=>C("from")),class:"flex items-center grow"},[g(T,{class:"text-2xl text-black"}),ns])])):t(s).ref_id==null?(o(),n("div",{key:1,class:P(["w-full flex",t(x)?"unselectable":""]),style:{}},[e("div",is,[e("div",cs,[rs,e("div",ds,m(t(s).warehouse.id),1)]),e("div",us,[_s,e("div",fs,m(t(s).warehouse.name),1)])]),t(x)?$("",!0):(o(),n("button",{key:0,class:"w-10 bg-red-600 flex items-center justify-center",onClick:l[2]||(l[2]=f=>d("from"))},[g(M,{class:"text-2xl text-white"})]))],2)):t(s).ref_id!=null?(o(),n("div",{key:2,class:P(["w-full flex",t(x)?"unselectable":""]),style:{}},[e("div",ps,[e("div",vs,[ms,e("div",hs,m(t(s).warehouse_source.id),1)]),e("div",ys,[ws,e("div",xs,m(t(s).warehouse_source.name),1)])]),t(x)?$("",!0):(o(),n("button",{key:0,class:"w-10 bg-red-600 flex items-center justify-center",onClick:l[3]||(l[3]=f=>d("from"))},[g(M,{class:"text-2xl text-white"})]))],2)):$("",!0)]),e("p",gs,m(t(a).warehouse_id),1)]),t(s).type=="transfer"?(o(),n("div",bs,[ks,e("div",$s,[!t(s).warehouse_target||!t(s).warehouse_target.id?(o(),n("div",Ss,[e("button",{onClick:l[4]||(l[4]=f=>C("to")),class:"flex items-center grow"},[g(T,{class:"text-2xl text-black"}),Cs])])):(o(),n("div",{key:1,class:P(["w-full flex",t(x)?"unselectable":""]),style:{}},[e("div",Is,[e("div",As,[Ds,e("div",js,m(t(s).warehouse_target.id),1)]),e("div",Ns,[qs,e("div",Ts,m(t(s).warehouse_target.name),1)])]),t(x)?$("",!0):(o(),n("button",{key:0,class:"w-10 bg-red-600 flex items-center justify-center",onClick:l[5]||(l[5]=f=>d("to"))},[g(M,{class:"text-2xl text-white"})]))],2))]),e("p",Ms,m(t(a).warehouse_target_id),1)])):$("",!0),e("div",Ls,[Hs,A(e("textarea",{disabled:t(x),class:"","onUpdate:modelValue":l[6]||(l[6]=f=>t(s).note=f)},null,8,Os),[[Q,t(s).note]]),e("p",Rs,m(t(a).note),1)])]),e("div",Bs,[e("div",Us,[e("table",Vs,[e("thead",null,[e("tr",zs,[t(x)?$("",!0):(o(),n("th",Fs)),Ps,t(x)?$("",!0):(o(),n("th",Ws)),Es,Js,Ks,Ys,Qs])]),e("tbody",null,[(o(!0),n(J,null,ne(t(v),(f,F)=>(o(),n(J,{key:F},[f.status!="Remove"?(o(),n("tr",Zs,[t(x)?$("",!0):(o(),n("td",Gs,[e("div",Xs,[e("button",{type:"button",name:"button",onClick:D=>be(D,F)},[g(E)],8,el)])])),e("td",null,m(F+1)+".",1),t(x)?$("",!0):(o(),n("td",tl,[e("div",sl,[f.item_id?(o(),n("button",{key:1,onClick:D=>c(D,F),disabled:f.confirm_by},[g(te,{class:"font-bold text-2xl"})],8,ol)):(o(),n("button",{key:0,type:"button",name:"button",onClick:D=>u(D,F)}," ... ",8,ll))])])),e("td",{class:P(["cell bold",t(x)?"unselectable":""])},[e("div",al,m(f.item.id),1)],2),e("td",{class:P(["cell",t(x)?"unselectable":""])},[e("div",nl,m(f.item.name),1)],2),e("td",il,[e("div",cl,[(o(),_e(L,{disabled:t(x)||t(s).type=="used"||t(s).type=="transfer",key:F,class:"w-full h-full border-black border-solid border-1 p-1",type:"text",value:f.qty_in||0,onInput:D=>f.qty_in=D},null,8,["disabled","value","onInput"]))])]),e("td",rl,[e("div",dl,[(o(),_e(L,{disabled:t(x)||t(s).type=="in",key:F,class:"w-full h-full border-black border-solid border-1 p-1",type:"text",value:f.qty_out||0,onInput:D=>f.qty_out=D},null,8,["disabled","value","onInput"]))])]),e("td",ul,[e("div",_l,[A(e("textarea",{disabled:t(x),class:"border-black border-solid border-1 p-1 w-full","onUpdate:modelValue":D=>f.note=D,cols:"7",rows:"2"},null,8,fl),[[Q,f.note]])])])])):$("",!0)],64))),128)),t(x)?$("",!0):(o(),n("tr",pl,[e("td",vl,[e("button",{type:"button",name:"button",onClick:l[7]||(l[7]=f=>ke())},[g(Ce)])])]))])])],512)])]),e("div",ml,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:l[8]||(l[8]=f=>r.$router.go(-1))}," Cancel "),t(x)?$("",!0):(o(),n("button",{key:0,type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:l[9]||(l[9]=f=>xe())}," Save "))])])]),g(Ie,{show:t(B),fnClose:z,fnSelect:W,exclude_lists:t(j)},null,8,["show","exclude_lists"]),g(Ae,{show:t(S),fnClose:ee,fnSelect:we,opt:t(U),exclude:t(ge)},null,8,["show","opt","exclude"]),g(De,{show:t(Y),coor:t(ie),fn:$e,onReplyAct:l[10]||(l[10]=f=>Se(f))},null,8,["show","coor"])],64)}}});export{Il as default};
