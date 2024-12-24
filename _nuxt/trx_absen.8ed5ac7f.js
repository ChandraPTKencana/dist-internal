import{_ as $}from"./HeaderPopup.vue.fe14bc58.js";import E from"./Check.84664cb3.js";import{_ as I}from"./PopupMini.vue.740d533e.js";import{r as m,g as T,f as P,j as V,o as p,c as h,k as q,J as z,a as e,b as g,F as k,D as J,E as M,z as U,n as y,l as s,t as l,C as G,w as L,d as H,x as b,y as C,p as K,e as O}from"./entry.468c1924.js";import{u as Q}from"./useUtils.f67a7b52.js";import{u as j}from"./useMyFetch.5d39e20e.js";import{_ as R}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.725e6b46.js";import"./Exclamation.b8184944.js";const i=n=>(K("data-v-30b1837d"),n=n(),O(),n),W={class:"box-fixed"},X={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},Y={class:"w-full flex flex-col items-center grow overflow-auto"},Z={class:"w-full flex flex-row flex-wrap"},ee={class:"w-full grid grid-cols-1 lg:grid-cols-2 p-1 gap-1 relative"},te={class:"relative w-full"},se=["onClick"],oe=["src"],ae={class:"w-full flex items-center justify-end"},le={class:"w-full flex flex-wrap p-3 items-center text-xs"},re=i(()=>e("label",{for:""},"U.jalan Per",-1)),ie={class:"border-solid border-2 w-fit p-1 bg-slate-700 text-white"},ne=i(()=>e("label",{for:""},"Jenis",-1)),de={class:"border-solid border-2 w-fit p-1 bg-slate-700 text-white"},ce=i(()=>e("label",{for:""},"Supir",-1)),_e={class:"border-solid border-2 w-fit p-1 bg-slate-700 text-white"},ue={key:0},fe=i(()=>e("label",{for:""},"Kernet",-1)),pe={class:"border-solid border-2 w-fit p-1 bg-slate-700 text-white"},he=i(()=>e("label",{for:""},"No Pol",-1)),be={class:"border-solid border-2 w-fit p-1 bg-slate-700 text-white"},me=i(()=>e("label",{for:""},"Tujuan",-1)),xe={class:"border-solid border-2 w-fit p-1 bg-slate-700 text-white"},we=i(()=>e("label",{for:""},"Info",-1)),ve={class:"border-solid border-2 w-fit p-1 bg-slate-700 text-white"},ge=i(()=>e("label",{for:""},"Tipe",-1)),ke={class:"border-solid border-2 w-fit p-1 bg-slate-700 text-white"},ye=i(()=>e("label",{for:""},"Total Dari U.Jalan",-1)),Ce={class:"border-solid border-2 w-fit p-1 bg-slate-700 text-white"},je={__name:"trx_absen",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},p_data:{type:Array,required:!0,default:[]},index:{type:Number,required:!1,default:0}},setup(n){const d=n,{pointFormat:D}=Q(),t=m({...{id:-1,tanggal:new Date,id_uj:-1,xto:"",tipe:"",jenis:"",amount:0,trx_absens:[]}}),x=T("token"),S=async()=>{b().loading_full=!0;const{data:o,error:a,status:u}=await j("/trx_trp",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:{id:d.p_data[d.index].id},retry:0});if(b().loading_full=!1,u.value==="error"){C().trigger(a);return}t.value=o.value.data,t.value.trx_absens=t.value.trx_absens.map(c=>(c.checked=0,c))};P(()=>d.show,(o,a)=>{o==!0&&S()},{immediate:!0});const{display:A}=V(),w=m({}),_=m(!1),B=async()=>{_.value&&(_.value=!1)},F=()=>{let o=t.value.trx_absens.filter(a=>a.checked==1).length;o<=0?A({show:!0,status:"Failed",message:"Silahkan Pilih Gambar Terlebih Dahulu"}):(w.value={"jumlah gambar yang akan di hapus":o},_.value=!0)},N=async()=>{b().loading_full=!0;const o=new FormData;o.append("id",d.p_data[d.index].id),o.append("ids",JSON.stringify(t.value.trx_absens.filter(f=>f.checked))),o.append("_method","DELETE");const{data:a,error:u,status:c}=await j("/trx_trp_absen",{method:"post",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:o,retry:0});if(b().loading_full=!1,c.value==="error"){C().trigger(u);return}d.p_data[d.index].trx_absens=t.value.trx_absens.filter(f=>f.checked==0),_.value=!1,d.fnClose()};return(o,a)=>{var v;const u=$,c=E,f=I;return p(),h(k,null,[q(e("section",W,[e("div",null,[g(u,{title:"Form Check Absen",fn:n.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",X,[e("div",Y,[e("div",Z,[e("div",ee,[(p(!0),h(k,null,J(s(t).trx_absens,r=>(p(),h("div",te,[e("div",{class:M(["w-7 h-7 ring-1 ring-black absolute right-3 top-3 border-2 border-white flex items-center justify-center text-white",r.checked?"bg-red-600":"bg-transparent"]),onClick:Se=>r.checked=!r.checked},[r.checked?(p(),U(c,{key:0,class:"text-xl"})):y("",!0)],10,se),e("img",{src:r.gambar,class:"max-w-full max-h-full w-full"},null,8,oe)]))),256))])])]),e("div",ae,[e("div",le,[e("div",null,[re,e("div",ie,l(s(t).tanggal),1)]),e("div",null,[ne,e("div",de,l(s(t).jenis),1)]),e("div",null,[ce,e("div",_e,l(s(t).supir),1)]),s(t).kernet?(p(),h("div",ue,[fe,e("div",pe,l(s(t).kernet),1)])):y("",!0),e("div",null,[he,e("div",be,l(s(t).no_pol),1)]),e("div",null,[me,e("div",xe,l(s(t).xto),1)]),e("div",null,[we,e("div",ve,l((v=s(t).uj)==null?void 0:v.asst_opt),1)]),e("div",null,[ge,e("div",ke,l(s(t).tipe),1)]),e("div",null,[ye,e("div",Ce,l(s(D)(s(t).amount||0)),1)])]),e("button",{type:"button",name:"button",class:"w-36 m-1 bg-red-600 text-white rounded-sm",onClick:a[0]||(a[0]=G(r=>F(),["prevent"]))}," Delete "),e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:a[1]||(a[1]=r=>n.fnClose())}," Cancel ")])])])],512),[[z,n.show]]),g(f,{type:"delete",show:s(_),data:s(w),fnClose:B,fnConfirm:N,info_type:"custome"},{info:L(()=>[H(" Ada "+l(s(t).trx_absens.filter(r=>r.checked).length)+" Gambar yang akan di hapus. ",1)]),_:1},8,["show","data"])],64)}}},Ve=R(je,[["__scopeId","data-v-30b1837d"]]);export{Ve as default};
