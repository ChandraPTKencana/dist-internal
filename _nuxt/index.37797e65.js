import se from"./Header.1fd8a3ba.js";import ne from"./Plus.c0c69210.js";import re from"./Edit.dce4344c.js";import ue from"./Delete.39c4d9bf.js";import ie from"./TableView.98b9fd7f.js";import{_ as de}from"./PopupMini.vue.c340a904.js";import _e from"./unit.c4eb8e5a.js";import{r as o,f as U,g as me,h as ce,i as g,j as I,s as fe,c as b,a as x,b as m,l as s,n as $,w as V,F as pe,q as ve,x as i,y as A,o as h,d as z,t as J}from"./entry.622940e4.js";import{u as B}from"./useMyFetch.83f6fc10.js";import{u as N}from"./useUtils.3d22bd33.js";import{_ as ye}from"./_plugin-vue_export-helper.c27b6911.js";import"./Search.dc4ae93e.js";import"./Adjust.dcbba02e.js";import"./TableHeaderEye.669aa100.js";import"./Times.4935bce4.js";import"./ClearAll.7a606fcd.js";import"./client-only.e189025b.js";import"./ClearEach.7ad82d61.js";import"./CaretLeftDoubleBold.dcc301af.js";import"./CaretLeftBold.be2d89c6.js";import"./CaretRightBold.455205fd.js";import"./CaretRightDoubleBold.07819556.js";import"./Exclamation.3a10a9b9.js";import"./HeaderPopup.vue.01948059.js";const ge={class:"w-full h-full flex flex-col"},be={class:"w-full flex grow flex-col overflow-auto h-0"},xe={class:"w-full flex justify-between flex-wrap"},he={class:"grow flex"},we={__name:"index",async setup(ke){let v,O;const L=e=>e.deleted==1?"!bg-red-400":e.val==0?"!bg-gray-300":"",c=o("available");U(()=>c.value,e=>{T()},{immediate:!1});const r={};r._TimeZoneOffset=new Date().getTimezoneOffset();const w=me("token"),{data:l}=([v,O]=ce(async()=>ve(async()=>{i().loading_full=!0;const{data:e,error:t,status:_}=await B("/api/units",{method:"get",headers:{Authorization:`Bearer ${w.value}`,Accept:"application/json"},params:{filter_status:c},retry:0});return i().loading_full=!1,_.value==="error"?(A().trigger(t),[]):e.value.data},"$bQkUhGqxH3")),v=await v,O(),v);o("");const k=o({field:"",by:"desc"}),a=o(-1),u=o({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),F=g(()=>l.value[a.value]),q=()=>{r.like="";let e=JSON.parse(JSON.stringify(i()._tv.global_keyword));e!=""&&(r.like=`id:%${e}%,name:%${e}%,value:%${e}%`),r.sort="",k.value.field&&(r.sort=k.value.field+":"+k.value.by),r.filter_model=JSON.stringify(i()._tv.filter_model)},P=async()=>{i().loading_full=!0,u.value.may_get_data=!1,r.page=u.value.page,r.page==1&&(l.value=[]),r.filter_status=c.value;const{data:e,error:t,status:_}=await B("/api/units",{method:"get",headers:{Authorization:`Bearer ${w.value}`,Accept:"application/json"},params:r,retry:0});if(i().loading_full=!1,u.value.may_get_data=!0,_.value==="error"){A().trigger(t);return}u.value.page==1?l.value=e.value.data:u.value.page>1&&(l.value=[...l.value,...e.value.data]),e.value.data.length==0&&(u.value.is_last_record=!0),i()._tv.filter_box=!1},T=()=>{a.value=-1,u.value.page=1,u.value.is_last_record=!1,q(),P()},y=o(!1),D=o(0),j=o(!1),Y=()=>{D.value=0,j.value=!1,y.value=!0},{display:E}=I();fe(I());const G=()=>{a.value==-1?E({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(D.value=l.value[a.value].id,j.value=!1,y.value=!0)},H=o(!1),M=o({}),f=o(!1),C=o(""),Q=async()=>{f.value&&(f.value=!1)},R=()=>{a.value==-1?E({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(C.value="",M.value={id:l.value[a.value].id,name:l.value[a.value].name},f.value=!0)};U(()=>C.value,e=>{e.trim().length>0?H.value=!0:H.value=!1},{immediate:!1});const Z=async()=>{i().loading_full=!0;const e=new FormData;e.append("id",l.value[a.value].id),e.append("deleted_reason",C.value),e.append("_method","DELETE");const{data:t,error:_,status:S}=await B("/api/unit",{method:"post",headers:{Authorization:`Bearer ${w.value}`,Accept:"application/json"},body:e,retry:0});if(i().loading_full=!1,S.value==="error"){A().trigger(_);return}let d={...l.value[a.value]};d.deleted=t.value.deleted,d.deleted_user=t.value.deleted_user,d.deleted_at=t.value.deleted_at,d.deleted_by=t.value.deleted_by,d.deleted_reason=t.value.deleted_reason,c.value!="all"?l.value.splice(a.value,1):l.value.splice(a.value,1,{...d}),a.value=-1,f.value=!1},K=o([{key:"no",label:"No",isai:!0},{key:"id",label:"ID",filter_on:1,type:"number"},{key:"name",label:"Name",filter_on:1,type:"string",sort:{priority:1,type:"asc"}},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"created_by_username",label:"Created_By"},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_by_username",label:"Updated_By"}]),W=g(()=>["available","all","unapprove"].indexOf(c.value)>-1&&N().checkPermission("unit.create")),X=g(()=>a.value>-1&&[void 0,0].indexOf(F.value.deleted)>-1&&N().checkPermissions(["unit.modify"])),ee=g(()=>a.value>-1&&N().checkPermission("unit.remove")&&[void 0,0].indexOf(F.value.deleted)>-1);return(e,t)=>{const _=se,S=ne,d=re,te=ue,ae=ie,le=de,oe=_e;return h(),b(pe,null,[x("div",ge,[m(_,{title:"List Unit"}),x("div",be,[x("div",xe,[x("div",he,[s(W)?(h(),b("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[0]||(t[0]=n=>Y())},[m(S)])):$("",!0),s(X)?(h(),b("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[1]||(t[1]=n=>G())},[m(d)])):$("",!0),s(ee)?(h(),b("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[2]||(t[2]=n=>R())},[m(te)])):$("",!0)])]),m(ae,{thead:s(K),selected:s(a),onSetSelected:t[3]||(t[3]=n=>a.value=n),tbody:s(l),fnCallData:P,scrolling:s(u),onSetScrollingPage:t[4]||(t[4]=n=>s(u).page=n),onDoFilter:t[5]||(t[5]=n=>T()),rowBgColor:L},{created_by_username:V(({item:n})=>{var p;return[z(J((p=n.created_by)==null?void 0:p.username),1)]}),updated_by_username:V(({item:n})=>{var p;return[z(J((p=n.updated_by)==null?void 0:p.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling"])])]),m(le,{type:"delete",show:s(f),data:s(M),fnClose:Q,fnConfirm:Z},null,8,["show","data"]),m(oe,{show:s(y),fnClose:()=>{y.value=!1},id:s(D),p_data:s(l)},null,8,["show","fnClose","id","p_data"])],64)}}},Qe=ye(we,[["__scopeId","data-v-2f6de51a"]]);export{Qe as default};
