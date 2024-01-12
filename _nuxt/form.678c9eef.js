import{_ as R}from"./HeaderCustom.vue.4132165a.js";import{_ as T}from"./InputPointFormat.vue.b73400b7.js";import{_ as V}from"./Search.b1cf6f15.js";import{_ as L}from"./Delete.3d092f13.js";import{_ as E}from"./HeaderPopup.vue.b0300b27.js";import{h as z,r as h,E as K,m as S,G as O,o as w,c as b,a as e,b as y,z as P,v as M,n as l,A as H,F,B as Q,C as Y,t as d,D as G,p as J,e as Z,q as C,s as q,f as W,g as X,i as ee,j as te,k as se,l as le}from"./entry.2fae35c4.js";import{u as B}from"./useMyFetch.80de82e1.js";import{_ as oe}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.f478bf5a.js";const _=f=>(J("data-v-024e05cf"),f=f(),Z(),f),ae={class:"box-fixed"},ne={class:"w-full flex p-1"},re={class:"grow"},ie=_(()=>e("div",{class:"font-bold"}," Keyword ",-1)),de={class:"pl-1"},ce=_(()=>e("div",{class:"font-bold"}," Sort By ",-1)),ue=_(()=>e("option",{value:"created_at"},"Created At",-1)),_e=_(()=>e("option",{value:"id"},"ID",-1)),fe=_(()=>e("option",{value:"name"},"Nama",-1)),pe=[ue,_e,fe],ve={class:"pl-1"},me=_(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),he=_(()=>e("option",{value:"asc"},"Asc",-1)),we=_(()=>e("option",{value:"desc"},"Desc",-1)),be=[he,we],xe={class:"flex items-end pl-1"},ye={class:"w-full flex justify-center items-center grow h-0 p-1"},ge={key:0,class:""},$e={class:"tacky"},ke=_(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"ID"),e("th",null,"Name"),e("th",null,"Created At"),e("th",null,"Updated At")])],-1)),Se=["onClick"],Ce={class:"bold"},Ae={class:"flex",style:{"justify-content":"end",padding:"5px"}},De={__name:"units",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},setup(f){const p=f,{$moment:A}=G(),D=z("token"),a=h([]),v=h(""),c=h({field:"created_at",by:"desc"}),x=h(-1),s=h({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),r={};r._TimeZoneOffset=new Date().getTimezoneOffset();const N=()=>{r.like="",v.value!=""&&(r.like=`id:%${v.value}%,name:%${v.value}%`),r.sort="",c.value.field&&(r.sort=c.value.field+":"+c.value.by)},g=h(null),U=async()=>{C().loading_full=!0,s.value.may_get_data=!1,r.page=s.value.page,r.page==1&&(a.value=[]),r.page>1&&(r.first_row=JSON.stringify(a.value[0]));const{data:t,error:o,status:m}=await B("/api/units",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:r,retry:0});if(C().loading_full=!1,s.value.may_get_data=!0,m.value==="error"){q().trigger(o);return}s.value.page==1?(a.value=t.value.data,g.value&&(g.value.scrollTop=0)):s.value.page>1&&(a.value=[...a.value,...t.value.data]),t.value.data.length==0&&(s.value.is_last_record=!0)},j=async()=>{if(!s.value.may_get_data)return;let t=g.value;if(t.scrollLeft!=s.value.scrollLeft){s.value.scrollLeft=t.scrollLeft;return}s.value.is_last_record||!(Math.round(t.scrollTop)+t.clientHeight>=t.scrollHeight-1)||(s.value.page++,await U())},I=()=>{s.value.page=1,s.value.is_last_record=!1,N(),U()},i=()=>{x.value>-1?p.fnSelect(a.value[x.value]):p.fnSelect({id:"",name:""})};return K(()=>p.show,(t,o)=>{t==!0&&I()},{immediate:!0}),(t,o)=>{const m=E,$=V;return S((w(),b("section",ae,[e("div",null,[y(m,{title:"Search And Select Unit",fn:f.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",ne,[e("div",re,[ie,S(e("input",{class:"w-full border-black border-solid border-2 p-1",type:"text","onUpdate:modelValue":o[0]||(o[0]=n=>P(v)?v.value=n:null),name:"search",placeholder:"Keyword"},null,512),[[M,l(v)]])]),e("div",de,[ce,S(e("select",{class:"w-full border-black border-solid border-2 p-1","onUpdate:modelValue":o[1]||(o[1]=n=>l(c).field=n)},pe,512),[[H,l(c).field]])]),e("div",ve,[me,S(e("select",{class:"w-full border-black border-solid border-2 p-1","onUpdate:modelValue":o[2]||(o[2]=n=>l(c).by=n)},be,512),[[H,l(c).by]])]),e("div",xe,[e("button",{class:"w-full border-black border-solid border-2 p-1",type:"button",name:"button",onClick:o[3]||(o[3]=n=>I())},[y($,{class:"text-2xl"})])])]),e("div",ye,[l(a).length==0?(w(),b("div",ge," Maaf Tidak Ada Record ")):(w(),b("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:g,onScroll:j},[e("table",$e,[ke,e("tbody",null,[(w(!0),b(F,null,Q(l(a),(n,k)=>(w(),b("tr",{key:k,onClick:u=>x.value=k,class:Y(l(x)==k?"active":"")},[e("td",null,d(k+1)+".",1),e("td",Ce,d(n.id),1),e("td",null,d(n.name),1),e("td",null,d(l(A)(n.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,d(l(A)(n.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,Se))),128))])])],544))]),e("div",Ae,[e("button",{onClick:o[4]||(o[4]=n=>i()),class:"w-36 m-1 bg-blue-600 text-white p-2 rounded-sm"}," Select ")])])],512)),[[O,f.show]])}}},Ue=oe(De,[["__scopeId","data-v-024e05cf"]]),Ie={class:"w-full h-full flex flex-col"},Ne={class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},je={class:"w-full align-items-center justify-content-center grow overflow-auto"},Me={class:"w-full flex flex-col flex-wrap p-1"},qe=e("label",{for:""},"Name",-1),Be={class:"text-red-500"},He={class:"w-full flex flex-col flex-wrap p-1"},Ve=e("label",{for:""},"Value",-1),ze={class:"text-red-500"},Fe={class:"w-full flex flex-col flex-wrap p-1"},Re=e("label",{for:""},"Note",-1),Te={class:"text-red-500"},Le={class:"w-full flex flex-col flex-wrap p-1"},Ee=e("label",{for:""},"Unit",-1),Ke={class:"w-full flex flex-row flex-wrap border-black border-solid border-2"},Oe={key:0,class:"w-full flex"},Pe=e("div",{class:"flex items-center grow p-1"}," Pilih Unit ",-1),Qe={key:1,class:"w-full flex",style:{}},Ye={class:"flex flex-row flex-wrap grow"},Ge={class:"p-1"},Je=e("div",{class:"text-sm text-gray-600"},"ID",-1),Ze={class:"bold"},We={class:"p-1"},Xe=e("div",{class:"text-sm text-gray-600"},"Email",-1),et={class:"bold"},tt={class:"text-red-500"},st={class:"w-full flex items-center justify-end"},_t=W({__name:"form",async setup(f){let p,A;X();const D=z("token"),a=h({}),v=ee(),c=te();let x={id:"",name:""};const{data:s}=([p,A]=se(async()=>le(async()=>{const i=c.query.id;if(i!==void 0&&i!==""){C().loading_full=!0;const{data:t,error:o,status:m}=await B("/api/item",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:{id:i},retry:0});if(C().loading_full=!1,m.value==="error")q().trigger(o,a);else return t.value.data}return{id:-1,name:"",value:0,note:"",unit:{...x}}},"$eQTKQHw4Kq")),p=await p,A(),p);let r=h(!1);const N=()=>{s.value.unit={...x}},g=()=>{r.value=!0},U=()=>{r.value=!1},j=i=>{s.value.unit=i,r.value=!1},I=async()=>{C().loading_full=!0,a.value={};let i={name:s.value.name,value:s.value.value,note:s.value.note,unit_id:s.value.unit.id},t="post",o=c.query.id;o===""||(t="put",i.id=o);const{data:m,error:$,status:n}=await B("/api/item",{method:t,headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},body:i,retry:0});if(C().loading_full=!1,n.value==="error"){q().trigger($,a);return}v.go(-1)};return(i,t)=>{const o=R,m=T,$=V,n=L,k=Ue;return w(),b(F,null,[e("div",Ie,[y(o,{title:"Form Item",back:!0}),e("div",Ne,[e("div",je,[e("div",Me,[qe,S(e("input",{class:"w-full border-black border-solid border-2 p-1",type:"text","onUpdate:modelValue":t[0]||(t[0]=u=>l(s).name=u)},null,512),[[M,l(s).name]]),e("p",Be,d(l(a).name),1)]),e("div",He,[Ve,y(m,{class:"w-full border-black border-solid border-2 p-1",type:"text",value:l(s).value,onInput:t[1]||(t[1]=u=>l(s).value=u)},null,8,["value"]),e("p",ze,d(l(a).value),1)]),e("div",Fe,[Re,S(e("textarea",{class:"w-full border-black border-solid border-2 p-1","onUpdate:modelValue":t[2]||(t[2]=u=>l(s).note=u)},null,512),[[M,l(s).note]]),e("p",Te,d(l(a).note),1)]),e("div",Le,[Ee,e("div",Ke,[!l(s).unit||!l(s).unit.id?(w(),b("div",Oe,[e("button",{onClick:t[3]||(t[3]=u=>g()),class:"flex items-center grow"},[y($,{class:"text-2xl text-black"}),Pe])])):(w(),b("div",Qe,[e("div",Ye,[e("div",Ge,[Je,e("div",Ze,d(l(s).unit.id),1)]),e("div",We,[Xe,e("div",et,d(l(s).unit.name),1)])]),e("button",{class:"w-10 bg-red-600 flex items-center justify-center",onClick:t[4]||(t[4]=u=>N())},[y(n,{class:"text-2xl text-white"})])]))]),e("p",tt,d(l(a).unit_id),1)])]),e("div",st,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:t[5]||(t[5]=u=>i.$router.go(-1))}," Cancel "),e("button",{type:"button",name:"button",class:"w-36 m-1 bg-blue-600 text-white p-2 rounded-sm",onClick:t[6]||(t[6]=u=>I())}," Save ")])])]),y(k,{show:l(r),fnClose:U,fnSelect:j,excludes:"item_had_which_item_id"},null,8,["show"])],64)}}});export{_t as default};
