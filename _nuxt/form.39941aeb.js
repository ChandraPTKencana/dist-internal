import{_ as ae}from"./HeaderCustom.vue.8ab653d5.js";import{_ as ne}from"./client-only.9531caa5.js";import{_ as z}from"./Search.a11faa88.js";import{_ as re}from"./Delete.3e362080.js";import{_ as Y}from"./HeaderPopup.vue.249f1275.js";import{h as E,r as p,E as J,m as y,G as Z,o as v,c as h,a as e,b as x,z as G,v as T,n as l,A as F,F as K,B as Q,C as W,t as c,D as X,p as ee,e as te,q as V,s as R,f as ie,g as ce,i as de,j as ue,k as _e,l as fe,H as me,w as pe}from"./entry.59accec6.js";import{u as L}from"./useMyFetch.24cc2fa4.js";import{_ as le}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.747dd990.js";const C=_=>(ee("data-v-ab91cb5a"),_=_(),te(),_),ve={class:"box-fixed"},he={class:"w-full flex p-1"},xe={class:"grow"},be=C(()=>e("div",{class:"font-bold"}," Keyword ",-1)),we={class:"pl-1"},ye=C(()=>e("div",{class:"font-bold"}," Sort By ",-1)),ge=C(()=>e("option",{value:"created_at"},"Created At",-1)),$e=C(()=>e("option",{value:"email"},"Email",-1)),ke=C(()=>e("option",{value:"fullname"},"Fullname",-1)),Se=[ge,$e,ke],Ce={class:"pl-1"},Me=C(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),Ae=C(()=>e("option",{value:"asc"},"Asc",-1)),De=C(()=>e("option",{value:"desc"},"Desc",-1)),Ve=[Ae,De],He={class:"flex items-end pl-1"},Oe={class:"w-full flex justify-center items-center grow h-0 p-1"},Ue={key:0,class:""},je={class:"tacky"},Te=C(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Email"),e("th",null,"Fullname"),e("th",null,"Role"),e("th",null,"Tanggal Dibuat"),e("th",null,"Tanggal Diubah")])],-1)),Ie=["onClick"],Ne={class:"bold"},qe={class:"flex",style:{"justify-content":"end",padding:"5px"}},Be={__name:"users",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},setup(_){const b=_,{$moment:M}=X(),U=E("token"),r=p([]),f=p(""),u=p({field:"created_at",by:"desc"}),w=p(-1),s=p({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),t={};t._TimeZoneOffset=new Date().getTimezoneOffset();const A=()=>{t.like="",f.value!=""&&(t.like=`email:%${f.value}%,fullname:%${f.value}%`),t.sort="",u.value.field&&(t.sort=u.value.field+":"+u.value.by)},g=p(null),H=async()=>{V().loading_full=!0,s.value.may_get_data=!1,t.page=s.value.page,t.page==1&&(r.value=[]),t.first_row&&delete t.first_row,t.page>1&&(t.first_row=JSON.stringify(r.value[0]));const{data:i,error:o,status:k}=await L("/api/users",{method:"get",headers:{Authorization:`Bearer ${U.value}`,Accept:"application/json"},params:t,retry:0});if(V().loading_full=!1,s.value.may_get_data=!0,k.value==="error"){R().trigger(o);return}s.value.page==1?(r.value=i.value.data,g.value&&(g.value.scrollTop=0)):s.value.page>1&&(r.value=[...r.value,...i.value.data]),i.value.data.length==0&&(s.value.is_last_record=!0)},I=async()=>{if(!s.value.may_get_data)return;let i=g.value;if(i.scrollLeft!=s.value.scrollLeft){s.value.scrollLeft=i.scrollLeft;return}s.value.is_last_record||!(Math.round(i.scrollTop)+i.clientHeight>=i.scrollHeight-1)||(s.value.page++,await H())},O=()=>{s.value.page=1,s.value.is_last_record=!1,A(),H()},D=()=>{w.value>-1?b.fnSelect(r.value[w.value]):b.fnSelect({id:"",email:"",fullname:""})};return J(()=>b.show,(i,o)=>{i==!0&&O()},{immediate:!0}),(i,o)=>{const k=Y,N=z;return y((v(),h("section",ve,[e("div",null,[x(k,{title:"Search And Select Employees",fn:_.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",he,[e("div",xe,[be,y(e("input",{class:"",type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>G(f)?f.value=a:null),name:"search",placeholder:"Keyword"},null,512),[[T,l(f)]])]),e("div",we,[ye,y(e("select",{class:"","onUpdate:modelValue":o[1]||(o[1]=a=>l(u).field=a)},Se,512),[[F,l(u).field]])]),e("div",Ce,[Me,y(e("select",{class:"","onUpdate:modelValue":o[2]||(o[2]=a=>l(u).by=a)},Ve,512),[[F,l(u).by]])]),e("div",He,[e("button",{class:"",type:"button",name:"button",onClick:o[3]||(o[3]=a=>O())},[x(N,{class:"text-2xl"})])])]),e("div",Oe,[l(r).length==0?(v(),h("div",Ue," Maaf Tidak Ada Record ")):(v(),h("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:g,onScroll:I},[e("table",je,[Te,e("tbody",null,[(v(!0),h(K,null,Q(l(r),(a,d)=>(v(),h("tr",{key:d,onClick:n=>w.value=d,class:W(l(w)==d?"active":"")},[e("td",null,c(d+1)+".",1),e("td",Ne,c(a.email),1),e("td",null,c(a.fullname),1),e("td",null,c(a.role),1),e("td",null,c(l(M)(a.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,c(l(M)(a.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,Ie))),128))])])],544))]),e("div",qe,[e("button",{onClick:o[4]||(o[4]=a=>D()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[Z,_.show]])}}},Fe=le(Be,[["__scopeId","data-v-ab91cb5a"]]);const $=_=>(ee("data-v-928770a1"),_=_(),te(),_),Re={class:"box-fixed"},Le={class:"w-full flex p-1"},ze={class:"grow"},Ee=$(()=>e("div",{class:"font-bold"}," Keyword ",-1)),Ke={class:"pl-1"},Pe=$(()=>e("div",{class:"font-bold"}," Sort By ",-1)),Ye=$(()=>e("option",{value:"created_at"},"Created At",-1)),Je=$(()=>e("option",{value:"username"},"Username",-1)),Ze=$(()=>e("option",{value:"email"},"Email",-1)),Ge=$(()=>e("option",{value:"fullname"},"Fullname",-1)),Qe=[Ye,Je,Ze,Ge],We={class:"pl-1"},Xe=$(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),et=$(()=>e("option",{value:"asc"},"Asc",-1)),tt=$(()=>e("option",{value:"desc"},"Desc",-1)),lt=[et,tt],st={class:"flex items-end pl-1"},ot={class:"w-full flex justify-center items-center grow h-0 p-1"},at={key:0,class:""},nt={class:"tacky"},rt=$(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Username"),e("th",null,"Email"),e("th",null,"Fullname"),e("th",null,"Tanggal Dibuat"),e("th",null,"Tanggal Diubah")])],-1)),it=["onClick"],ct={class:"bold"},dt={class:"flex",style:{"justify-content":"end",padding:"5px"}},ut={__name:"members",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},setup(_){const b=_,{$moment:M}=X(),U=E("token"),r=p([]),f=p(""),u=p({field:"created_at",by:"desc"}),w=p(-1),s=p({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),t={};t._TimeZoneOffset=new Date().getTimezoneOffset();const A=()=>{t.like="",f.value!=""&&(t.like=`username:%${f.value}%,email:%${f.value}%,fullname:%${f.value}%`),t.sort="",u.value.field&&(t.sort=u.value.field+":"+u.value.by)},g=p(null),H=async()=>{V().loading_full=!0,s.value.may_get_data=!1,t.page=s.value.page,t.page==1&&(r.value=[]),t.first_row&&delete t.first_row,t.page>1&&(t.first_row=JSON.stringify(r.value[0]));const{data:i,error:o,status:k}=await L("/api/members",{method:"get",headers:{Authorization:`Bearer ${U.value}`,Accept:"application/json"},params:t,retry:0});if(V().loading_full=!1,s.value.may_get_data=!0,k.value==="error"){R().trigger(o);return}s.value.page==1?(r.value=i.value.data,g.value&&(g.value.scrollTop=0)):s.value.page>1&&(r.value=[...r.value,...i.value.data]),i.value.data.length==0&&(s.value.is_last_record=!0)},I=async()=>{if(!s.value.may_get_data)return;let i=g.value;if(i.scrollLeft!=s.value.scrollLeft){s.value.scrollLeft=i.scrollLeft;return}s.value.is_last_record||!(Math.round(i.scrollTop)+i.clientHeight>=i.scrollHeight-1)||(s.value.page++,await H())},O=()=>{s.value.page=1,s.value.is_last_record=!1,A(),H()},D=()=>{w.value>-1?b.fnSelect(r.value[w.value]):b.fnSelect({id:"",username:"",email:"",fullname:""})};return J(()=>b.show,(i,o)=>{i==!0&&O()},{immediate:!0}),(i,o)=>{const k=Y,N=z;return y((v(),h("section",Re,[e("div",null,[x(k,{title:"Search And Select Members",fn:_.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",Le,[e("div",ze,[Ee,y(e("input",{class:"",type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>G(f)?f.value=a:null),name:"search",placeholder:"Keyword"},null,512),[[T,l(f)]])]),e("div",Ke,[Pe,y(e("select",{class:"","onUpdate:modelValue":o[1]||(o[1]=a=>l(u).field=a)},Qe,512),[[F,l(u).field]])]),e("div",We,[Xe,y(e("select",{class:"","onUpdate:modelValue":o[2]||(o[2]=a=>l(u).by=a)},lt,512),[[F,l(u).by]])]),e("div",st,[e("button",{class:"",type:"button",name:"button",onClick:o[3]||(o[3]=a=>O())},[x(N,{class:"text-2xl"})])])]),e("div",ot,[l(r).length==0?(v(),h("div",at," Maaf Tidak Ada Record ")):(v(),h("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:g,onScroll:I},[e("table",nt,[rt,e("tbody",null,[(v(!0),h(K,null,Q(l(r),(a,d)=>(v(),h("tr",{key:d,onClick:n=>w.value=d,class:W(l(w)==d?"active":"")},[e("td",null,c(d+1)+".",1),e("td",ct,c(a.username),1),e("td",null,c(a.email),1),e("td",null,c(a.fullname),1),e("td",null,c(l(M)(a.internal_created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,c(l(M)(a.internal_updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,it))),128))])])],544))]),e("div",dt,[e("button",{onClick:o[4]||(o[4]=a=>D()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[Z,_.show]])}}},_t=le(ut,[["__scopeId","data-v-928770a1"]]),ft={class:"w-full h-full flex flex-col"},mt={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},pt={class:"w-full align-items-center justify-content-center grow overflow-auto"},vt={class:"w-full flex flex-col flex-wrap p-1"},ht=e("label",{for:""},"Name",-1),xt={class:"text-red-500"},bt={class:"w-full flex flex-col flex-wrap p-1"},wt=e("label",{for:""},"Address",-1),yt={class:"text-red-500"},gt={class:"w-full flex flex-col flex-wrap p-1"},$t=e("label",{for:""},"Contact Number",-1),kt={class:"text-red-500"},St={class:"w-full flex flex-col flex-wrap p-1"},Ct=e("label",{for:""},"Contact Person",-1),Mt={class:"text-red-500"},At={class:"w-full flex flex-col flex-wrap p-1"},Dt=e("label",{for:""},"Active Until",-1),Vt={class:"text-red-500"},Ht={class:"w-full flex flex-col flex-wrap p-1"},Ot=e("label",{for:""},"Marketer",-1),Ut={class:"w-full flex flex-row flex-wrap border-black border-solid border-2"},jt={key:0,class:"w-full flex"},Tt=e("div",{class:"flex items-center grow p-1"}," Pilih Karyawan ",-1),It={key:1,class:"w-full flex",style:{}},Nt={class:"flex flex-row flex-wrap grow"},qt={class:"p-1"},Bt=e("div",{class:"text-sm text-gray-600"},"ID",-1),Ft={class:"bold"},Rt={class:"p-1"},Lt=e("div",{class:"text-sm text-gray-600"},"Email",-1),zt={class:"bold"},Et={class:"text-red-500"},Kt={class:"w-full flex flex-col flex-wrap p-1"},Pt=e("label",{for:""},"Operator",-1),Yt={class:"w-full flex flex-row flex-wrap border-black border-solid border-2"},Jt={key:0,class:"w-full flex"},Zt=e("div",{class:"flex items-center grow p-1"}," Pilih Member ",-1),Gt={key:1,class:"w-full flex",style:{}},Qt={class:"flex flex-row flex-wrap grow"},Wt={class:"p-1"},Xt=e("div",{class:"text-sm text-gray-600"},"ID",-1),el={class:"bold"},tl={class:"p-1"},ll=e("div",{class:"text-sm text-gray-600"},"Username",-1),sl={class:"bold"},ol={class:"text-red-500"},al={class:"w-full flex items-center justify-end"},pl=ie({__name:"form",async setup(_){let b,M;ce();const U=E("token"),r=p({}),f=de(),u=ue();let w={id:"",email:"",fullname:""},s={id:"",username:"",email:"",fullname:""};const{data:t}=([b,M]=_e(async()=>fe(async()=>{const d=u.query.id;if(d!==void 0&&d!==""){V().loading_full=!0;const{data:n,error:j,status:q}=await L("/api/institute",{method:"get",headers:{Authorization:`Bearer ${U.value}`,Accept:"application/json"},params:{id:d},retry:0});if(V().loading_full=!1,q.value==="error")R().trigger(j,r);else{let S=n.value.data;return S.members.length>0?S.operator_member=S.members[0]:S.operator_member={...s},S}}return{id:-1,email:"",fullname:"",password:"",role:"Institute",can_login:"0",internal_marketer:{...w},operator_member:{...s}}},"$B1N4oerOMC")),b=await b,M(),b);let A=p(!1);const g=()=>{t.value.internal_marketer={...w}},H=()=>{A.value=!0},I=()=>{A.value=!1},O=d=>{t.value.internal_marketer=d,A.value=!1};let D=p(!1);const i=()=>{t.value.operator_member={...s}},o=()=>{D.value=!0},k=()=>{D.value=!1},N=d=>{t.value.operator_member=d,D.value=!1},a=async()=>{V().loading_full=!0,r.value={};let d={name:t.value.name,address:t.value.address,contact_number:t.value.contact_number,contact_person:t.value.contact_person,internal_marketer_id:t.value.internal_marketer.id,operator_member_id:t.value.operator_member.id},n="post",j=u.query.id;j===""||(n="put",d.id=j);const{data:q,error:S,status:B}=await L("/api/institute",{method:n,headers:{Authorization:`Bearer ${U.value}`,Accept:"application/json"},body:d,retry:0});if(V().loading_full=!1,B.value==="error"){R().trigger(S,r);return}f.go(-1)};return(d,n)=>{const j=ae,q=me("vue-date-picker"),S=ne,B=z,P=re,se=Fe,oe=_t;return v(),h(K,null,[e("div",ft,[x(j,{title:"Form Institute",back:!0}),e("div",mt,[e("div",pt,[e("div",vt,[ht,y(e("input",{class:"",type:"text","onUpdate:modelValue":n[0]||(n[0]=m=>l(t).name=m)},null,512),[[T,l(t).name]]),e("p",xt,c(l(r).name),1)]),e("div",bt,[wt,y(e("textarea",{class:"","onUpdate:modelValue":n[1]||(n[1]=m=>l(t).address=m)},null,512),[[T,l(t).address]]),e("p",yt,c(l(r).address),1)]),e("div",gt,[$t,y(e("input",{class:"",type:"text","onUpdate:modelValue":n[2]||(n[2]=m=>l(t).contact_number=m)},null,512),[[T,l(t).contact_number]]),e("p",kt,c(l(r).contact_number),1)]),e("div",St,[Ct,y(e("input",{class:"",type:"text","onUpdate:modelValue":n[3]||(n[3]=m=>l(t).contact_person=m)},null,512),[[T,l(t).contact_person]]),e("p",Mt,c(l(r).contact_person),1)]),e("div",At,[Dt,x(S,null,{default:pe(()=>[x(q,{class:"border-black border-solid border-2",modelValue:l(t).active_until,"onUpdate:modelValue":n[4]||(n[4]=m=>l(t).active_until=m),"text-input":"","teleport-center":""},null,8,["modelValue"])]),_:1}),e("p",Vt,c(l(r).active_until),1)]),e("div",Ht,[Ot,e("div",Ut,[!l(t).internal_marketer||!l(t).internal_marketer.id?(v(),h("div",jt,[e("button",{onClick:n[5]||(n[5]=m=>H()),class:"flex items-center grow"},[x(B,{class:"text-2xl text-black"}),Tt])])):(v(),h("div",It,[e("div",Nt,[e("div",qt,[Bt,e("div",Ft,c(l(t).internal_marketer.id),1)]),e("div",Rt,[Lt,e("div",zt,c(l(t).internal_marketer.email),1)])]),e("button",{class:"w-10 bg-red-600 flex items-center justify-center",onClick:n[6]||(n[6]=m=>g())},[x(P,{class:"text-2xl text-white"})])]))]),e("p",Et,c(l(r).internal_marketer_id),1)]),e("div",Kt,[Pt,e("div",Yt,[!l(t).operator_member||l(t).operator_member.id==""?(v(),h("div",Jt,[e("button",{onClick:n[7]||(n[7]=m=>o()),class:"flex items-center grow"},[x(B,{class:"text-2xl text-black"}),Zt])])):(v(),h("div",Gt,[e("div",Qt,[e("div",Wt,[Xt,e("div",el,c(l(t).operator_member.id),1)]),e("div",tl,[ll,e("div",sl,c(l(t).operator_member.username),1)])]),e("button",{class:"w-10 bg-red-600 flex items-center justify-center",onClick:n[8]||(n[8]=m=>i())},[x(P,{class:"text-2xl text-white"})])]))]),e("p",ol,c(l(r).operator_member_id),1)])]),e("div",al,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:n[9]||(n[9]=m=>d.$router.go(-1))}," Cancel "),e("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:n[10]||(n[10]=m=>a())}," Save ")])])]),x(se,{show:l(A),fnClose:I,fnSelect:O,excludes:"institute_had_which_institute_id"},null,8,["show"]),x(oe,{show:l(D),fnClose:k,fnSelect:N},null,8,["show"])],64)}}});export{pl as default};
