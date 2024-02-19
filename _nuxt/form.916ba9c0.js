import{_ as ne}from"./HeaderCustom.vue.4c45dde9.js";import{_ as re}from"./client-only.0d3d8f72.js";import{_ as z}from"./Search.face49e0.js";import{_ as ie}from"./Delete.537b7c45.js";import{_ as Y}from"./HeaderPopup.vue.eacf193f.js";import{q as K,r as p,h as J,z as $,M as Z,o as w,c as x,a as e,b as g,G,A as N,B as l,H as B,N as ce,I as E,J as Q,K as W,t as n,L as X,p as ee,e as te,C as U,D as F,n as de,u as ue,s as _e,v as fe,x as me,y as pe,P as ve,w as he}from"./entry.78b18dc9.js";import{u as le}from"./useUtils.100f5b4a.js";import{u as R}from"./useMyFetch.7bf5776a.js";import{_ as se}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.9a0b15d1.js";const D=m=>(ee("data-v-d6afa38a"),m=m(),te(),m),we={class:"box-fixed"},xe={action:"#",class:"w-full flex p-1"},ye={class:"grow"},be=D(()=>e("div",{class:"font-bold"}," Keyword ",-1)),ge={class:"pl-1"},ke=D(()=>e("div",{class:"font-bold"}," Sort By ",-1)),$e=D(()=>e("option",{value:"created_at"},"Created At",-1)),Se=D(()=>e("option",{value:"email"},"Email",-1)),Ce=D(()=>e("option",{value:"fullname"},"Fullname",-1)),Me=[$e,Se,Ce],Ae={class:"pl-1"},De=D(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),Te=D(()=>e("option",{value:"asc"},"Asc",-1)),Ue=D(()=>e("option",{value:"desc"},"Desc",-1)),Ve=[Te,Ue],He={class:"flex items-end pl-1"},Oe={class:"w-full flex justify-center items-center grow h-0 p-1"},Ie={key:0,class:""},Ne={class:"tacky"},je=D(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Email"),e("th",null,"Fullname"),e("th",null,"Role"),e("th",null,"Tanggal Dibuat"),e("th",null,"Tanggal Diubah")])],-1)),Le=["onClick"],qe={class:"bold"},Be={class:"flex",style:{"justify-content":"end",padding:"5px"}},Fe={__name:"users",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},setup(m){const k=m,{$moment:T}=X(),{countClickListFn:I}=le(),y=K("token"),i=p([]),u=p(""),d=p({field:"created_at",by:"desc"}),b=p(-1),t=p({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),a={};a._TimeZoneOffset=new Date().getTimezoneOffset();const j=()=>{a.like="",u.value!=""&&(a.like=`email:%${u.value}%,fullname:%${u.value}%`),a.sort="",d.value.field&&(a.sort=d.value.field+":"+d.value.by)},S=p(null),V=async()=>{U().loading_full=!0,t.value.may_get_data=!1,a.page=t.value.page,a.page==1&&(i.value=[]),a.first_row&&delete a.first_row,a.page>1&&(a.first_row=JSON.stringify(i.value[0]));const{data:_,error:r,status:O}=await R("/api/users",{method:"get",headers:{Authorization:`Bearer ${y.value}`,Accept:"application/json"},params:a,retry:0});if(U().loading_full=!1,t.value.may_get_data=!0,O.value==="error"){F().trigger(r);return}t.value.page==1?(i.value=_.value.data,S.value&&(S.value.scrollTop=0)):t.value.page>1&&(i.value=[...i.value,..._.value.data]),_.value.data.length==0&&(t.value.is_last_record=!0)},L=async()=>{if(!t.value.may_get_data)return;let _=S.value;if(_.scrollLeft!=t.value.scrollLeft){t.value.scrollLeft=_.scrollLeft;return}t.value.is_last_record||!(Math.round(_.scrollTop)+_.clientHeight>=_.scrollHeight-1)||(t.value.page++,await V())},C=()=>{t.value.page=1,t.value.is_last_record=!1,j(),V()},H=()=>{b.value>-1?k.fnSelect(i.value[b.value]):k.fnSelect({id:"",email:"",fullname:""})};return J(()=>k.show,(_,r)=>{_==!0&&C()},{immediate:!0}),(_,r)=>{const O=Y,f=z;return $((w(),x("section",we,[e("div",null,[g(O,{title:"Search And Select Employees",fn:m.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",xe,[e("div",ye,[be,$(e("input",{class:"",type:"text","onUpdate:modelValue":r[0]||(r[0]=s=>G(u)?u.value=s:null),name:"search",placeholder:"Keyword"},null,512),[[N,l(u)]])]),e("div",ge,[ke,$(e("select",{class:"","onUpdate:modelValue":r[1]||(r[1]=s=>l(d).field=s)},Me,512),[[B,l(d).field]])]),e("div",Ae,[De,$(e("select",{class:"","onUpdate:modelValue":r[2]||(r[2]=s=>l(d).by=s)},Ve,512),[[B,l(d).by]])]),e("div",He,[e("button",{class:"",type:"submit",name:"button",onClick:r[3]||(r[3]=ce(s=>C(),["prevent"]))},[g(f,{class:"text-2xl"})])])]),e("div",Oe,[l(i).length==0?(w(),x("div",Ie," Maaf Tidak Ada Record ")):(w(),x("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:S,onScroll:L},[e("table",Ne,[je,e("tbody",null,[(w(!0),x(E,null,Q(l(i),(s,o)=>(w(),x("tr",{key:o,onClick:A=>l(I)(o,()=>{b.value=o},H),class:W(l(b)==o?"active":"")},[e("td",null,n(o+1)+".",1),e("td",qe,n(s.email),1),e("td",null,n(s.fullname),1),e("td",null,n(s.role),1),e("td",null,n(l(T)(s.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,n(l(T)(s.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,Le))),128))])])],544))]),e("div",Be,[e("button",{onClick:r[4]||(r[4]=s=>H()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[Z,m.show]])}}},Re=se(Fe,[["__scopeId","data-v-d6afa38a"]]);const M=m=>(ee("data-v-f09d932a"),m=m(),te(),m),ze={class:"box-fixed"},Ke={class:"w-full flex p-1"},Ee={class:"grow"},Pe=M(()=>e("div",{class:"font-bold"}," Keyword ",-1)),Ye={class:"pl-1"},Je=M(()=>e("div",{class:"font-bold"}," Sort By ",-1)),Ze=M(()=>e("option",{value:"created_at"},"Created At",-1)),Ge=M(()=>e("option",{value:"username"},"Username",-1)),Qe=M(()=>e("option",{value:"email"},"Email",-1)),We=M(()=>e("option",{value:"fullname"},"Fullname",-1)),Xe=[Ze,Ge,Qe,We],et={class:"pl-1"},tt=M(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),lt=M(()=>e("option",{value:"asc"},"Asc",-1)),st=M(()=>e("option",{value:"desc"},"Desc",-1)),ot=[lt,st],at={class:"flex items-end pl-1"},nt={class:"w-full flex justify-center items-center grow h-0 p-1"},rt={key:0,class:""},it={class:"tacky"},ct=M(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Username"),e("th",null,"Email"),e("th",null,"Fullname"),e("th",null,"Tanggal Dibuat"),e("th",null,"Tanggal Diubah")])],-1)),dt=["onClick"],ut={class:"bold"},_t={class:"flex",style:{"justify-content":"end",padding:"5px"}},ft={__name:"members",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},setup(m){const k=m,{$moment:T}=X(),{countClickListFn:I}=le(),y=K("token"),i=p([]),u=p(""),d=p({field:"created_at",by:"desc"}),b=p(-1),t=p({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),a={};a._TimeZoneOffset=new Date().getTimezoneOffset();const j=()=>{a.like="",u.value!=""&&(a.like=`username:%${u.value}%,email:%${u.value}%,fullname:%${u.value}%`),a.sort="",d.value.field&&(a.sort=d.value.field+":"+d.value.by)},S=p(null),V=async()=>{U().loading_full=!0,t.value.may_get_data=!1,a.page=t.value.page,a.page==1&&(i.value=[]),a.first_row&&delete a.first_row,a.page>1&&(a.first_row=JSON.stringify(i.value[0]));const{data:f,error:s,status:o}=await R("/api/members",{method:"get",headers:{Authorization:`Bearer ${y.value}`,Accept:"application/json"},params:a,retry:0});if(U().loading_full=!1,t.value.may_get_data=!0,o.value==="error"){F().trigger(s);return}t.value.page==1?(i.value=f.value.data,S.value&&(S.value.scrollTop=0)):t.value.page>1&&(i.value=[...i.value,...f.value.data]),f.value.data.length==0&&(t.value.is_last_record=!0)},L=async()=>{if(!t.value.may_get_data)return;let f=S.value;if(f.scrollLeft!=t.value.scrollLeft){t.value.scrollLeft=f.scrollLeft;return}t.value.is_last_record||!(Math.round(f.scrollTop)+f.clientHeight>=f.scrollHeight-1)||(t.value.page++,await V())},C=()=>{t.value.page=1,t.value.is_last_record=!1,j(),V()},H=()=>{b.value>-1?k.fnSelect(i.value[b.value]):k.fnSelect({id:"",username:"",email:"",fullname:""})},_=p(null);let r=null;const O=f=>{r&&clearTimeout(r),r=setTimeout(()=>{C()},500)};return J(()=>k.show,(f,s)=>{f==!0&&C(),setTimeout(()=>{_.value.focus()},100)},{immediate:!0}),(f,s)=>{const o=Y,A=z;return $((w(),x("section",ze,[e("div",null,[g(o,{title:"Search And Select Members",fn:m.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",Ke,[e("div",Ee,[Pe,$(e("input",{ref_key:"ref_keyword",ref:_,class:"",type:"text","onUpdate:modelValue":s[0]||(s[0]=c=>G(u)?u.value=c:null),name:"search",placeholder:"Keyword",onKeyup:s[1]||(s[1]=c=>O())},null,544),[[N,l(u)]])]),e("div",Ye,[Je,$(e("select",{class:"","onUpdate:modelValue":s[2]||(s[2]=c=>l(d).field=c)},Xe,512),[[B,l(d).field]])]),e("div",et,[tt,$(e("select",{class:"","onUpdate:modelValue":s[3]||(s[3]=c=>l(d).by=c)},ot,512),[[B,l(d).by]])]),e("div",at,[e("button",{class:"",type:"button",name:"button",onClick:s[4]||(s[4]=c=>C())},[g(A,{class:"text-2xl"})])])]),e("div",nt,[l(i).length==0?(w(),x("div",rt," Maaf Tidak Ada Record ")):(w(),x("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:S,onScroll:L},[e("table",it,[ct,e("tbody",null,[(w(!0),x(E,null,Q(l(i),(c,v)=>(w(),x("tr",{key:v,onClick:q=>l(I)(v,()=>{b.value=v},H),class:W(l(b)==v?"active":"")},[e("td",null,n(v+1)+".",1),e("td",ut,n(c.username),1),e("td",null,n(c.email),1),e("td",null,n(c.fullname),1),e("td",null,n(l(T)(c.internal_created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,n(l(T)(c.internal_updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,dt))),128))])])],544))]),e("div",_t,[e("button",{onClick:s[5]||(s[5]=c=>H()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[Z,m.show]])}}},mt=se(ft,[["__scopeId","data-v-f09d932a"]]),pt={class:"w-full h-full flex flex-col"},vt={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},ht={class:"w-full align-items-center justify-content-center grow overflow-auto"},wt={class:"w-full flex flex-col flex-wrap p-1"},xt=e("label",{for:""},"Name",-1),yt={class:"text-red-500"},bt={class:"w-full flex flex-col flex-wrap p-1"},gt=e("label",{for:""},"Address",-1),kt={class:"text-red-500"},$t={class:"w-full flex flex-col flex-wrap p-1"},St=e("label",{for:""},"Contact Number",-1),Ct={class:"text-red-500"},Mt={class:"w-full flex flex-col flex-wrap p-1"},At=e("label",{for:""},"Contact Person",-1),Dt={class:"text-red-500"},Tt={class:"w-full flex flex-col flex-wrap p-1"},Ut=e("label",{for:""},"Active Until",-1),Vt={class:"text-red-500"},Ht={class:"w-full flex flex-col flex-wrap p-1"},Ot=e("label",{for:""},"Marketer",-1),It={class:"w-full flex flex-row flex-wrap border-black border-solid border-2"},Nt={key:0,class:"w-full flex"},jt=e("div",{class:"flex items-center grow p-1"}," Pilih Karyawan ",-1),Lt={key:1,class:"w-full flex",style:{}},qt={class:"flex flex-row flex-wrap grow"},Bt={class:"p-1"},Ft=e("div",{class:"text-sm text-gray-600"},"ID",-1),Rt={class:"bold"},zt={class:"p-1"},Kt=e("div",{class:"text-sm text-gray-600"},"Email",-1),Et={class:"bold"},Pt={class:"text-red-500"},Yt={class:"w-full flex flex-col flex-wrap p-1"},Jt=e("label",{for:""},"Operator",-1),Zt={class:"w-full flex flex-row flex-wrap border-black border-solid border-2"},Gt={key:0,class:"w-full flex"},Qt=e("div",{class:"flex items-center grow p-1"}," Pilih Member ",-1),Wt={key:1,class:"w-full flex",style:{}},Xt={class:"flex flex-row flex-wrap grow"},el={class:"p-1"},tl=e("div",{class:"text-sm text-gray-600"},"ID",-1),ll={class:"bold"},sl={class:"p-1"},ol=e("div",{class:"text-sm text-gray-600"},"Username",-1),al={class:"bold"},nl={class:"text-red-500"},rl={class:"w-full flex items-center justify-end"},wl=de({__name:"form",async setup(m){let k,T;ue();const I=K("token"),y=p({}),i=_e(),u=fe();let d={id:"",email:"",fullname:""},b={id:"",username:"",email:"",fullname:""};const{data:t}=([k,T]=me(async()=>pe(async()=>{const s=u.query.id;if(s!==void 0&&s!==""){U().loading_full=!0;const{data:o,error:A,status:c}=await R("/api/institute",{method:"get",headers:{Authorization:`Bearer ${I.value}`,Accept:"application/json"},params:{id:s},retry:0});if(U().loading_full=!1,c.value==="error")F().trigger(A,y);else{let v=o.value.data;return v.members.length>0?v.operator_member=v.members[0]:v.operator_member={...b},v}}return{id:-1,email:"",fullname:"",password:"",role:"Institute",can_login:"0",internal_marketer:{...d},operator_member:{...b}}},"$B1N4oerOMC")),k=await k,T(),k);let a=p(!1);const j=()=>{t.value.internal_marketer={...d}},S=()=>{a.value=!0},V=()=>{a.value=!1},L=s=>{t.value.internal_marketer=s,a.value=!1};let C=p(!1);const H=()=>{t.value.operator_member={...b}},_=()=>{C.value=!0},r=()=>{C.value=!1},O=s=>{t.value.operator_member=s,C.value=!1},f=async()=>{U().loading_full=!0,y.value={};let s={name:t.value.name,address:t.value.address,contact_number:t.value.contact_number,contact_person:t.value.contact_person,internal_marketer_id:t.value.internal_marketer.id,operator_member_id:t.value.operator_member.id},o="post",A=u.query.id;A===""||(o="put",s.id=A);const{data:c,error:v,status:q}=await R("/api/institute",{method:o,headers:{Authorization:`Bearer ${I.value}`,Accept:"application/json"},body:s,retry:0});if(U().loading_full=!1,q.value==="error"){F().trigger(v,y);return}i.go(-1)};return(s,o)=>{const A=ne,c=ve("vue-date-picker"),v=re,q=z,P=ie,oe=Re,ae=mt;return w(),x(E,null,[e("div",pt,[g(A,{title:"Form Institute",back:!0}),e("div",vt,[e("div",ht,[e("div",wt,[xt,$(e("input",{class:"",type:"text","onUpdate:modelValue":o[0]||(o[0]=h=>l(t).name=h)},null,512),[[N,l(t).name]]),e("p",yt,n(l(y).name),1)]),e("div",bt,[gt,$(e("textarea",{class:"","onUpdate:modelValue":o[1]||(o[1]=h=>l(t).address=h)},null,512),[[N,l(t).address]]),e("p",kt,n(l(y).address),1)]),e("div",$t,[St,$(e("input",{class:"",type:"text","onUpdate:modelValue":o[2]||(o[2]=h=>l(t).contact_number=h)},null,512),[[N,l(t).contact_number]]),e("p",Ct,n(l(y).contact_number),1)]),e("div",Mt,[At,$(e("input",{class:"",type:"text","onUpdate:modelValue":o[3]||(o[3]=h=>l(t).contact_person=h)},null,512),[[N,l(t).contact_person]]),e("p",Dt,n(l(y).contact_person),1)]),e("div",Tt,[Ut,g(v,null,{default:he(()=>[g(c,{class:"border-black border-solid border-2",modelValue:l(t).active_until,"onUpdate:modelValue":o[4]||(o[4]=h=>l(t).active_until=h),"text-input":"","teleport-center":""},null,8,["modelValue"])]),_:1}),e("p",Vt,n(l(y).active_until),1)]),e("div",Ht,[Ot,e("div",It,[!l(t).internal_marketer||!l(t).internal_marketer.id?(w(),x("div",Nt,[e("button",{onClick:o[5]||(o[5]=h=>S()),class:"flex items-center grow"},[g(q,{class:"text-2xl text-black"}),jt])])):(w(),x("div",Lt,[e("div",qt,[e("div",Bt,[Ft,e("div",Rt,n(l(t).internal_marketer.id),1)]),e("div",zt,[Kt,e("div",Et,n(l(t).internal_marketer.email),1)])]),e("button",{class:"w-10 bg-red-600 flex items-center justify-center",onClick:o[6]||(o[6]=h=>j())},[g(P,{class:"text-2xl text-white"})])]))]),e("p",Pt,n(l(y).internal_marketer_id),1)]),e("div",Yt,[Jt,e("div",Zt,[!l(t).operator_member||l(t).operator_member.id==""?(w(),x("div",Gt,[e("button",{onClick:o[7]||(o[7]=h=>_()),class:"flex items-center grow"},[g(q,{class:"text-2xl text-black"}),Qt])])):(w(),x("div",Wt,[e("div",Xt,[e("div",el,[tl,e("div",ll,n(l(t).operator_member.id),1)]),e("div",sl,[ol,e("div",al,n(l(t).operator_member.username),1)])]),e("button",{class:"w-10 bg-red-600 flex items-center justify-center",onClick:o[8]||(o[8]=h=>H())},[g(P,{class:"text-2xl text-white"})])]))]),e("p",nl,n(l(y).operator_member_id),1)])]),e("div",rl,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:o[9]||(o[9]=h=>s.$router.go(-1))}," Cancel "),e("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:o[10]||(o[10]=h=>f())}," Save ")])])]),g(oe,{show:l(a),fnClose:V,fnSelect:L,excludes:"institute_had_which_institute_id"},null,8,["show"]),g(ae,{show:l(C),fnClose:r,fnSelect:O},null,8,["show"])],64)}}});export{wl as default};
