import{_ as c}from"./Times.0b9c6e60.js";import{n as i,s as l,o as p,c as m,a as o,t as _,b as d}from"./entry.4c9c0f03.js";const f={class:"w-full flex min-h-[3rem] items-center bg-slate-600 p-1 sm:pl-1 text-white"},u={class:"grow",style:{"padding-left":"10px"}},k=i({__name:"HeaderPopup",props:{title:{type:String,required:!1,default:""},fn:{type:Function,required:!1}},setup(e){const t=e,n=l(),r=()=>{t.fn?t.fn():n.go(-1)};return(x,s)=>{const a=c;return p(),m("div",f,[o("div",u,_(e.title||" "),1),o("div",{class:"text-center w-10 cursor-pointer",onClick:s[0]||(s[0]=g=>r())},[d(a,{class:"text-2xl text-white"})])])}}});export{k as _};
