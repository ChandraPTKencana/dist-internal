import{_}from"./_plugin-vue_export-helper.c27b6911.js";import{o,c as n,a as c,n as d,s as p,b as m,P as u,t as f}from"./entry.c7ae01f6.js";const h={name:"PhCaretLeft"},x={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256"},g=c("path",{fill:"currentColor",d:"M165.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128Z"},null,-1),w=[g];function $(e,t,r,a,i,s){return o(),n("svg",x,w)}const k=_(h,[["render",$]]),v={class:"w-full flex min-h-[3rem] items-center bg-slate-600 p-1 sm:pl-1 text-white"},C={class:"",style:{"padding-left":"10px"}},q=d({__name:"HeaderCustom",props:{title:{type:String,required:!1,default:""},back:{type:Boolean,required:!0},fn:{type:Function,required:!1}},setup(e){const t=e,r=p(),a=()=>{t.fn?t.fn():r.go(-1)};return(i,s)=>{const l=k;return o(),n("div",v,[e.back?(o(),n("div",{key:0,class:"text-center w-10 cursor-pointer",onClick:s[0]||(s[0]=y=>a())},[m(l,{class:"text-2xl text-white"})])):u("",!0),c("div",C,f(e.title||" "),1)])}}});export{q as _};
