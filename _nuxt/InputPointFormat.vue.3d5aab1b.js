import{f as g,r as l,K as f,I as d,E as j,o as b,c as B,n as I}from"./entry.71981dcc.js";const M=["value"],F=g({__name:"InputPointFormat",props:{value:{type:Number,required:!0,default:0}},emits:["input","nextBlur"],setup(u,{emit:a}){const i=u;l(!0);const n=l(0),p=e=>{e=e.toString().replace(/[^,0-9]/ig,"").replace(",",".").replace(/,/ig,"");let t=e.split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,"."),t.join(",")},s=e=>{e=e.toString().replace(/[^,0-9]/ig,"").replace(",",".").replace(/,/ig,"");let t=e.split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,"."),t.length>1&&(t[1]=t[1].replace(/0+$/,"")),t.join(",")},c=e=>e.toString().replace(/[^,0-9]/ig,"").replace(",",".").replace(/,/ig,""),o=e=>{e.target&&e.preventDefault();let t=(typeof e=="object"?e.target.value:e).toString();t&&t.match(/[a-z]+/ig)?n.value=0:n.value=p(t)},m=e=>{let t=typeof e=="object"?e.target.value:e;t&&(n.value=s(t),a("input",Number(c(t))))};return f(()=>{o(i.value)}),d(e=>e?new Intl.NumberFormat("id-ID",{minimumFractionDigits:2}).format(e):0),j(()=>i.value,(e,t)=>{o(e)},{immediate:!0,deep:!0}),(e,t)=>(b(),B("input",{type:"text",value:I(n),onKeyup:t[0]||(t[0]=r=>o(r)),onBlur:t[1]||(t[1]=r=>(m(r),e.$emit("nextBlur",r)))},null,40,M))}});export{F as _};
