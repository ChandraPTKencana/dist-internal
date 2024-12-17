import{_ as R}from"./HeaderCustom.vue.f8e2dcda.js";import{_ as T}from"./InputPointFormat.vue.f9317a59.js";import{_ as V}from"./Search.35a3a2ca.js";import{_ as F}from"./Delete.699a80f2.js";import{_ as K}from"./HeaderPopup.vue.9ed034dd.js";import{q as z,r as h,g as O,z as S,M as E,o as x,c as w,a as e,b as g,G as P,A as H,B as l,H as B,I as L,J,K as Q,t as c,L as Y,p as G,e as Z,C,D as j,n as W,u as X,s as ee,v as te,x as se,y as le}from"./entry.c8afc194.js";import{u as q}from"./useMyFetch.05fb34f1.js";import{_ as oe}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.346c1b0d.js";const _=f=>(G("data-v-610eb22c"),f=f(),Z(),f),ae={class:"box-fixed"},ne={class:"w-full flex p-1"},ie={class:"grow"},re=_(()=>e("div",{class:"font-bold"}," Keyword ",-1)),ce={class:"pl-1"},ue=_(()=>e("div",{class:"font-bold"}," Sort By ",-1)),de=_(()=>e("option",{value:"created_at"},"Created At",-1)),_e=_(()=>e("option",{value:"id"},"ID",-1)),fe=_(()=>e("option",{value:"name"},"Nama",-1)),pe=[de,_e,fe],ve={class:"pl-1"},me=_(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),he=_(()=>e("option",{value:"asc"},"Asc",-1)),xe=_(()=>e("option",{value:"desc"},"Desc",-1)),we=[he,xe],ye={class:"flex items-end pl-1"},ge={class:"w-full flex justify-center items-center grow h-0 p-1"},$e={key:0,class:""},be={class:"tacky"},ke=_(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"ID"),e("th",null,"Name"),e("th",null,"Created At"),e("th",null,"Updated At")])],-1)),Se=["onClick"],Ce={class:"bold"},Ae={class:"flex",style:{"justify-content":"end",padding:"5px"}},De={__name:"units",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},setup(f){const p=f,{$moment:A}=Y(),D=z("token"),n=h([]),v=h(""),u=h({field:"created_at",by:"desc"}),y=h(-1),s=h({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),a={};a._TimeZoneOffset=new Date().getTimezoneOffset();const M=()=>{a.like="",v.value!=""&&(a.like=`id:%${v.value}%,name:%${v.value}%`),a.sort="",u.value.field&&(a.sort=u.value.field+":"+u.value.by)},$=h(null),I=async()=>{C().loading_full=!0,s.value.may_get_data=!1,a.page=s.value.page,a.page==1&&(n.value=[]),a.first_row&&delete a.first_row,a.page>1&&(a.first_row=JSON.stringify(n.value[0]));const{data:t,error:o,status:m}=await q("/api/units",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:a,retry:0});if(C().loading_full=!1,s.value.may_get_data=!0,m.value==="error"){j().trigger(o);return}s.value.page==1?(n.value=t.value.data,$.value&&($.value.scrollTop=0)):s.value.page>1&&(n.value=[...n.value,...t.value.data]),t.value.data.length==0&&(s.value.is_last_record=!0)},N=async()=>{if(!s.value.may_get_data)return;let t=$.value;if(t.scrollLeft!=s.value.scrollLeft){s.value.scrollLeft=t.scrollLeft;return}s.value.is_last_record||!(Math.round(t.scrollTop)+t.clientHeight>=t.scrollHeight-1)||(s.value.page++,await I())},U=()=>{s.value.page=1,s.value.is_last_record=!1,M(),I()},r=()=>{y.value>-1?p.fnSelect(n.value[y.value]):p.fnSelect({id:"",name:""})};return O(()=>p.show,(t,o)=>{t==!0&&U()},{immediate:!0}),(t,o)=>{const m=K,b=V;return S((x(),w("section",ae,[e("div",null,[g(m,{title:"Search And Select Unit",fn:f.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",ne,[e("div",ie,[re,S(e("input",{class:"",type:"text","onUpdate:modelValue":o[0]||(o[0]=i=>P(v)?v.value=i:null),name:"search",placeholder:"Keyword"},null,512),[[H,l(v)]])]),e("div",ce,[ue,S(e("select",{class:"","onUpdate:modelValue":o[1]||(o[1]=i=>l(u).field=i)},pe,512),[[B,l(u).field]])]),e("div",ve,[me,S(e("select",{class:"","onUpdate:modelValue":o[2]||(o[2]=i=>l(u).by=i)},we,512),[[B,l(u).by]])]),e("div",ye,[e("button",{class:"",type:"button",name:"button",onClick:o[3]||(o[3]=i=>U())},[g(b,{class:"text-2xl"})])])]),e("div",ge,[l(n).length==0?(x(),w("div",$e," Maaf Tidak Ada Record ")):(x(),w("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:$,onScroll:N},[e("table",be,[ke,e("tbody",null,[(x(!0),w(L,null,J(l(n),(i,k)=>(x(),w("tr",{key:k,onClick:d=>y.value=k,class:Q(l(y)==k?"active":"")},[e("td",null,c(k+1)+".",1),e("td",Ce,c(i.id),1),e("td",null,c(i.name),1),e("td",null,c(l(A)(i.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,c(l(A)(i.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,Se))),128))])])],544))]),e("div",Ae,[e("button",{onClick:o[4]||(o[4]=i=>r()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[E,f.show]])}}},Ie=oe(De,[["__scopeId","data-v-610eb22c"]]),Ue={class:"w-full h-full flex flex-col"},Me={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},Ne={class:"w-full align-items-center justify-content-center grow overflow-auto"},He={class:"w-full flex flex-col flex-wrap p-1"},je=e("label",{for:""},"Name",-1),qe={class:"text-red-500"},Be={class:"w-full flex flex-col flex-wrap p-1"},Ve=e("label",{for:""},"Value",-1),ze={class:"text-red-500"},Le={class:"w-full flex flex-col flex-wrap p-1"},Re=e("label",{for:""},"Note",-1),Te={class:"text-red-500"},Fe={class:"w-full flex flex-col flex-wrap p-1"},Ke=e("label",{for:""},"Unit",-1),Oe={class:"card-border flex flex-row flex-wrap"},Ee={key:0,class:"w-full flex"},Pe=e("div",{class:"flex items-center grow p-1"}," Pilih Unit ",-1),Je={key:1,class:"w-full flex",style:{}},Qe={class:"flex flex-row flex-wrap grow"},Ye={class:"p-1"},Ge=e("div",{class:"text-sm text-gray-600"},"ID",-1),Ze={class:"bold"},We={class:"p-1"},Xe=e("div",{class:"text-sm text-gray-600"},"Email",-1),et={class:"bold"},tt={class:"text-red-500"},st={class:"w-full flex items-center justify-end"},_t=W({__name:"form",async setup(f){let p,A;X();const D=z("token"),n=h({}),v=ee(),u=te();let y={id:"",name:""};const{data:s}=([p,A]=se(async()=>le(async()=>{const r=u.query.id;if(r!==void 0&&r!==""){C().loading_full=!0;const{data:t,error:o,status:m}=await q("/api/item",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:{id:r},retry:0});if(C().loading_full=!1,m.value==="error")j().trigger(o,n);else return t.value.data}return{id:-1,name:"",value:0,note:"",unit:{...y}}},"$eQTKQHw4Kq")),p=await p,A(),p);let a=h(!1);const M=()=>{s.value.unit={...y}},$=()=>{a.value=!0},I=()=>{a.value=!1},N=r=>{s.value.unit=r,a.value=!1},U=async()=>{C().loading_full=!0,n.value={};let r={name:s.value.name,value:s.value.value,note:s.value.note,unit_id:s.value.unit.id},t="post",o=u.query.id;o===""||(t="put",r.id=o);const{data:m,error:b,status:i}=await q("/api/item",{method:t,headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},body:r,retry:0});if(C().loading_full=!1,i.value==="error"){j().trigger(b,n);return}v.go(-1)};return(r,t)=>{const o=R,m=T,b=V,i=F,k=Ie;return x(),w(L,null,[e("div",Ue,[g(o,{title:"Form Item",back:!0}),e("div",Me,[e("div",Ne,[e("div",He,[je,S(e("input",{class:"",type:"text","onUpdate:modelValue":t[0]||(t[0]=d=>l(s).name=d)},null,512),[[H,l(s).name]]),e("p",qe,c(l(n).name),1)]),e("div",Be,[Ve,g(m,{class:"",type:"text",value:l(s).value,onInput:t[1]||(t[1]=d=>l(s).value=d)},null,8,["value"]),e("p",ze,c(l(n).value),1)]),e("div",Le,[Re,S(e("textarea",{class:"","onUpdate:modelValue":t[2]||(t[2]=d=>l(s).note=d)},null,512),[[H,l(s).note]]),e("p",Te,c(l(n).note),1)]),e("div",Fe,[Ke,e("div",Oe,[!l(s).unit||!l(s).unit.id?(x(),w("div",Ee,[e("button",{onClick:t[3]||(t[3]=d=>$()),class:"flex items-center grow"},[g(b,{class:"text-2xl text-black"}),Pe])])):(x(),w("div",Je,[e("div",Qe,[e("div",Ye,[Ge,e("div",Ze,c(l(s).unit.id),1)]),e("div",We,[Xe,e("div",et,c(l(s).unit.name),1)])]),e("button",{class:"w-10 bg-red-600 flex items-center justify-center",onClick:t[4]||(t[4]=d=>M())},[g(i,{class:"text-2xl text-white"})])]))]),e("p",tt,c(l(n).unit_id),1)])]),e("div",st,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:t[5]||(t[5]=d=>r.$router.go(-1))}," Cancel "),e("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:t[6]||(t[6]=d=>U())}," Save ")])])]),g(k,{show:l(a),fnClose:I,fnSelect:N,excludes:"item_had_which_item_id"},null,8,["show"])],64)}}});export{_t as default};
