import{n as y,r as a,S as b,R as B,g as D,o as j,c as k,B as v}from"./entry.fecf21c9.js";const A=["value"],M=y({__name:"InputPointFormat",props:{value:{type:Number,required:!0,default:0}},emits:["input","nextBlur"],setup(i,{emit:u}){const n=i;a(!0);const o=a(0),p=e=>{e=e.toString().replace(/[^,0-9]/ig,"").replace(",",".").replace(/,/ig,"");let t=e.split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,"."),t.join(",")},s=e=>{e=e.toString().replace(/[^,0-9]/ig,"").replace(",",".").replace(/,/ig,"");let t=e.split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,"."),t.length>1&&(t[1]=t[1].replace(/0+$/,"")),t.join(",")},c=e=>e.toString().replace(/[^,0-9]/ig,"").replace(",",".").replace(/,/ig,""),g=e=>{let t=typeof e=="object"?e.target.value:e;t=t||n.value,o.value=s(t),u("input",Number(c(t)))};b(()=>{l(n.value)}),B(e=>e?new Intl.NumberFormat("id-ID",{minimumFractionDigits:2}).format(e):0);const m=/[a-zA-Z .,<>?/\\|:;'"\[\]{}=+=_()*&^%$#@!~`]/,l=e=>{let t=e;e.toString().length>1&&(t=e.toString().replace(/^0/g,"")),o.value=p(t)},d=["Backspace","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Delete","Tab"],f=e=>{e.ctrlKey==!1&&!d.includes(e.key)&&e.key.match(m)&&e.preventDefault(),e.key=="0"&&(e.target.value===0||e.target.value==="0")&&e.preventDefault()},w=e=>{e.target.select(),e.target.setSelectionRange(0,99999)};return D(()=>n.value,(e,t)=>{l(e)},{immediate:!0,deep:!0}),(e,t)=>(j(),k("input",{type:"text",value:v(o),onKeydown:t[0]||(t[0]=r=>f(r)),onKeyup:t[1]||(t[1]=r=>l(r.target.value)),onBlur:t[2]||(t[2]=r=>(g(r),e.$emit("nextBlur",r))),onFocus:t[3]||(t[3]=r=>w(r))},null,40,A))}});export{M as _};
