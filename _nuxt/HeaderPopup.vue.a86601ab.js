import{_ as i}from"./Times.52678cd9.js";import{f as c,i as l,o as p,c as f,a as o,t as m,b as _}from"./entry.d14ccbb5.js";const d={class:"w-full flex min-h-[3rem] items-center bg-slate-600 p-1 sm:pl-1 text-white"},u={class:"grow",style:{"padding-left":"10px"}},k=c({__name:"HeaderPopup",props:{title:{type:String,required:!1,default:""},fn:{type:Function,required:!1}},setup(e){const t=e,n=l(),r=()=>{t.fn?t.fn():n.go(-1)};return(x,s)=>{const a=i;return p(),f("div",d,[o("div",u,m(e.title||" "),1),o("div",{class:"text-center w-10 cursor-pointer",onClick:s[0]||(s[0]=g=>r())},[_(a,{class:"text-2xl text-white"})])])}}});export{k as _};
