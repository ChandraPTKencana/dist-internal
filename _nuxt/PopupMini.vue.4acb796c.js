import{_}from"./Times.0813cb71.js";import{_ as m}from"./_plugin-vue_export-helper.c27b6911.js";import{o as r,c as s,a as e,f as p,b as a,L as x,d as c,H as u,F as h,B as y,t as b}from"./entry.329d3af5.js";const w={name:"MaterialSymbolsExclamation"},g={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},k=e("path",{fill:"currentColor",d:"M11 14V5h2v9zm0 5v-2h2v2z"},null,-1),v=[k];function $(t,l,o,d,i,n){return r(),s("svg",g,v)}const C=m(w,[["render",$]]),B={key:0,class:"flex items-center justify-center fixed top-0 left-0 z-10 p-3 w-full h-full bg-black bg-opacity-80"},j={class:"flex items-center max-w-xs w-full relative bg-white border-solid border-gray-600 border-2 p-3 flex-col flex-wrap"},q={class:"absolute -top-7 right-0 py-1 px-2 bg-white border-solid border-2 border-gray-600 border-b-0 rounded-tl-md"},V={class:"flex items-center justify-center p-2 border-red-600 border-solid border-2 rounded-full"},z={class:"mx-0 my-2 text-justify"},F={key:0},N={key:1},S=e("b",null,"tidak dapat dikembalikan lagi",-1),D={class:"w-full text-left mt-3"},E=e("b",{class:"text-gray-600"},"Data Information :",-1),I={class:"w-full border-solid border-2 border-black"},L={class:"border-solid border-2 border-black p-1 capitalize bg-slate-800 text-white text-right"},M={class:"border-solid border-2 border-black p-1 text-left"},T={class:"flex w-full justify-between mt-5"},A=p({__name:"PopupMini",props:{show:{type:Boolean,required:!0},data:{type:Object,required:!1,default:""},fnClose:{type:Function,required:!0},fnConfirm:{type:Function,required:!0},type:{type:String,required:!0}},setup(t){return(l,o)=>{const d=_,i=C;return t.show?(r(),s("div",B,[e("div",j,[e("div",q,[a(d,{class:"text-2xl text-black cursor-pointer",onClick:o[0]||(o[0]=n=>t.fnClose())})]),e("div",V,[a(i,{class:"text-4xl text-red-600"})]),e("div",z,[t.type=="custome"?(r(),s("div",F,[x(l.$slots,"words")])):t.type=="delete"?(r(),s("div",N,[c(" Data yang akan dihapus "),S,c(", yakin untuk menghapus data ini ? ")])):u("",!0)]),e("div",D,[E,e("table",I,[(r(!0),s(h,null,y(t.data,(n,f)=>(r(),s("tr",null,[e("td",L,b(f),1),e("td",M,b(n),1)]))),256))])]),e("div",T,[e("button",{onClick:o[1]||(o[1]=n=>t.fnClose()),class:"w-full bg-blue-500 border-blue-500 border-solid border-2 p-1 text-white mr-2"}," Batal "),e("button",{onClick:o[2]||(o[2]=n=>t.fnConfirm()),class:"w-full bg-red-600 border-red-600 border-solid border-2 p-1 text-white"}," Lanjutkan ")])])])):u("",!0)}}});export{A as _};
