import{g as c}from"./entry.468c1924.js";const u=c("role"),p=()=>{const o=()=>{},n=t=>t?new Intl.NumberFormat("id-ID",{minimumFractionDigits:0}).format(t):0;let i=0,r=-1,s=null;return{sayHello:o,pointFormat:n,countClickListFn:(t,...e)=>{r!=t&&(r=t,i=0,s&&clearTimeout(s),s=null),i++,s==null&&(s=setTimeout(()=>{i>e.length&&(i=e.length),i!==0&&(i>1&&e[0](),i=i-1,e[i]()),i=0,s&&clearTimeout(s),s=null},200))},checkRole:t=>t.includes(u.value),checkPermission:t=>{let e=localStorage.getItem("permissions");return e?(e=JSON.parse(e),e?e.includes(t):!1):!1},checkPermissions:t=>{let e=localStorage.getItem("permissions");return e&&(e=JSON.parse(e),e&&Array.isArray(e))?e.filter(l=>t.includes(l)).length>0:0},round:(t,e)=>+(Math.round(+(t+"e+"+e))+"e-"+e)}};export{p as u};
