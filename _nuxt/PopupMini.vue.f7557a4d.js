import{_ as y}from"./Times.7cd2276d.js";import{_ as g}from"./_plugin-vue_export-helper.c27b6911.js";import{o as a,c as d,a as e,n as k,r as C,g as f,S as $,b as m,T as _,d as p,O as h,I as B,J as I,t as b,B as c,K as V}from"./entry.c9a6b541.js";const j={name:"MaterialSymbolsExclamation"},q={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},O=e("path",{fill:"currentColor",d:"M11 14V5h2v9zm0 5v-2h2v2z"},null,-1),z=[O];function S(t,n,o,s,u,l){return a(),d("svg",q,z)}const D=g(j,[["render",S]]),N={key:0,class:"flex items-center justify-center fixed top-0 left-0 z-10 p-3 w-full h-full bg-black bg-opacity-80"},E={class:"flex items-center max-w-xs w-full relative bg-white border-solid border-gray-600 border-2 p-3 flex-col flex-wrap"},F={class:"absolute -top-7 right-0 py-1 px-2 bg-white border-solid border-2 border-gray-600 border-b-0 rounded-tl-md"},M={class:"flex items-center justify-center p-2 border-red-600 border-solid border-2 rounded-full"},T={class:"mx-0 my-2 text-justify"},L={key:0},J={key:1},K=e("b",null,"tidak dapat dikembalikan lagi",-1),P={class:"w-full text-left mt-3"},U=e("b",{class:"text-gray-600"},"Data Information :",-1),A={class:"w-full border-solid border-2 border-black"},G={class:"border-solid border-2 border-black p-1 capitalize bg-slate-800 text-white text-right"},H={class:"border-solid border-2 border-black p-1 text-left"},Q={class:"w-full text-left mt-3"},R={class:"flex w-full justify-between mt-5"},W=["disabled"],ee=k({__name:"PopupMini",props:{show:{type:Boolean,required:!0},data:{type:Object,required:!1,default:""},fnClose:{type:Function,required:!0},fnConfirm:{type:Function,required:!0},type:{type:String,required:!0},enabledOk:{type:Boolean,required:!1,default:!0}},setup(t){const n=t;let o=null;const s=C(0),u=()=>{o==null&&(s.value=5,o=setInterval(()=>{s.value--,s.value<=0&&(clearInterval(o),o=null)},1e3))};return f(()=>n.show,(l,r)=>{l?u():(clearInterval(o),o=null)},{immediate:!0,deep:!0}),f(()=>n.enabledOk,(l,r)=>{l&&n.show&&u()},{immediate:!0,deep:!0}),$(()=>{clearInterval(o),o=null}),(l,r)=>{const x=y,w=D;return t.show?(a(),d("div",N,[e("div",E,[e("div",F,[m(x,{class:"text-2xl text-black cursor-pointer",onClick:r[0]||(r[0]=i=>t.fnClose())})]),e("div",M,[m(w,{class:"text-4xl text-red-600"})]),e("div",T,[t.type=="custome"?(a(),d("div",L,[_(l.$slots,"words")])):t.type=="delete"?(a(),d("div",J,[p(" Data yang akan dihapus "),K,p(", yakin untuk menghapus data ini ? ")])):h("",!0)]),e("div",P,[U,e("table",A,[(a(!0),d(B,null,I(t.data,(i,v)=>(a(),d("tr",null,[e("td",G,b(v),1),e("td",H,b(i),1)]))),256))])]),e("div",Q,[_(l.$slots,"footer")]),e("div",R,[e("button",{onClick:r[1]||(r[1]=i=>t.fnClose()),class:"w-full bg-blue-500 border-blue-500 border-solid border-2 p-1 text-white mr-2"}," Batal "),e("button",{onClick:r[2]||(r[2]=i=>t.fnConfirm()),disabled:!n.enabledOk||c(s)>0,class:V(["w-full border-solid border-2 p-1 text-white",n.enabledOk&&c(s)<=0?"bg-red-600 border-red-600":"bg-slate-600 border-slate-600"])}," Lanjutkan "+b(c(s)>0?c(s):""),11,W)])])])):h("",!0)}}});export{ee as _};
