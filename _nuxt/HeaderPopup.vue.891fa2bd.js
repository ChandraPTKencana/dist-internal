import i from"./Times.d1edbe5a.js";import{K as a,B as l,o as p,c as f,a as o,t as _,b as d}from"./entry.cd89349b.js";const m={class:"w-full flex min-h-[2rem] items-center bg-slate-600 p-1 sm:pl-1 text-white"},u={class:"grow",style:{"padding-left":"10px"}},x={class:"text-center w-10 flex justify-center"},k=a({__name:"HeaderPopup",props:{title:{type:String,required:!1,default:""},fn:{type:Function,required:!1}},setup(e){const t=e,n=l(),r=()=>{t.fn?t.fn():n.go(-1)};return(g,s)=>{const c=i;return p(),f("div",m,[o("div",u,_(e.title||" "),1),o("div",x,[d(c,{class:"text-2xl cursor-pointer text-white",onClick:s[0]||(s[0]=h=>r())})])])}}});export{k as _};
