import i from"./CaretLeft.3f7b7f8a.js";import{K as l,B as m,o as s,c as n,b as p,n as u,a as d,t as f}from"./entry.a19beef1.js";const _={class:"w-full flex min-h-[2rem] items-center bg-slate-600 p-1 sm:pl-1 text-white"},x={class:"",style:{"padding-left":"10px"}},B=l({__name:"HeaderCustom",props:{title:{type:String,required:!1,default:""},back:{type:Boolean,required:!0},fn:{type:Function,required:!1}},setup(e){const t=e,r=m(),a=()=>{t.fn?t.fn():r.go(-1)};return(k,o)=>{const c=i;return s(),n("div",_,[e.back?(s(),n("div",{key:0,class:"text-center w-10 cursor-pointer",onClick:o[0]||(o[0]=g=>a())},[p(c,{class:"text-2xl text-white"})])):u("",!0),d("div",x,f(e.title||" "),1)])}}});export{B as _};
