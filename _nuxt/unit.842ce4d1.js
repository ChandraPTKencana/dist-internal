import{_ as C}from"./HeaderPopup.vue.891fa2bd.js";import{r as u,g as S,f as k,k as m,J as A,o as B,c as $,a as o,b as q,l as c,A as D,t as F,C as I,x as i,y as v,p as N,e as V}from"./entry.cd89349b.js";import"./useUtils.ba8d89ba.js";import{u as w}from"./useMyFetch.b49701aa.js";import{_ as j}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.d1edbe5a.js";const M=r=>(N("data-v-d7d89237"),r=r(),V(),r),U={class:"box-fixed"},z={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},E={class:"w-full flex flex-col items-center grow overflow-auto"},P={class:"w-full flex flex-row flex-wrap"},T={class:"w-full sm:w-6/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},H=M(()=>o("label",{for:""},"Name",-1)),J={class:"text-red-500"},O={class:"w-full flex items-center justify-end"},G={__name:"unit",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]}},setup(r){const s=r,p={id:-1,name:""},e=u({...p}),f=S("token"),d=u({});u(!1);const h=async()=>{i().loading_full=!0,d.value={};const l=new FormData;l.append("name",e.value.name);let t="post",n=s.id;n==0||(l.append("id",n),l.append("_method","PUT"));const{data:a,error:y,status:b}=await w("/api/unit",{method:t,headers:{Authorization:`Bearer ${f.value}`,Accept:"application/json"},body:l,retry:0});if(i().loading_full=!1,b.value==="error"){v().trigger(y,d);return}if(e.value.updated_user=a.value.updated_user,e.value.updated_by=a.value.updated_by,e.value.updated_at=a.value.updated_at,s.id<=0)e.value.created_user=a.value.created_user,e.value.created_by=a.value.created_by,e.value.created_at=a.value.created_at,e.value.id=a.value.id,s.p_data.unshift(e.value);else{let _=s.p_data.map(g=>g.id).indexOf(s.id);_>=-1&&s.p_data.splice(_,1,{...e.value})}s.fnClose()},x=async()=>{i().loading_full=!0;const{data:l,error:t,status:n}=await w("/api/unit",{method:"get",headers:{Authorization:`Bearer ${f.value}`,Accept:"application/json"},params:{id:s.id},retry:0});if(i().loading_full=!1,n.value==="error"){v().trigger(t);return}e.value=l.value.data};return k(()=>s.show,(l,t)=>{l==!0&&(e.value={...p},d.value={},s.id!=0&&x())},{immediate:!0}),(l,t)=>{const n=C;return m((B(),$("section",U,[o("div",null,[q(n,{title:"Form Unit",fn:r.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),o("form",z,[o("div",E,[o("div",P,[o("div",T,[H,m(o("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=a=>c(e).name=a)},null,512),[[D,c(e).name]]),o("p",J,F(c(d).name),1)])])]),o("div",O,[o("button",{type:"button",name:"button",class:"w-36 m-1",onClick:t[1]||(t[1]=a=>r.fnClose())}," Cancel "),o("button",{type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:t[2]||(t[2]=I(a=>h(),["prevent"]))}," Save ")])])])],512)),[[A,r.show]])}}},Y=j(G,[["__scopeId","data-v-d7d89237"]]);export{Y as default};