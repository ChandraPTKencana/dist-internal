import{_ as F}from"./Times.3df0737c.js";import{_ as $}from"./_plugin-vue_export-helper.c27b6911.js";import{o as a,c as i,a as e,n as j,s as O,v as G,r as S,g as K,u as M,F as B,C as b,q as C,K as g,B as n,Q as q,b as r,w as p,O as T,z as Q,M as W,t as J,T as X,I as Y,D as Z,d as h}from"./entry.ec4c8bb4.js";import{_ as tt}from"./nuxt-link.5da334b3.js";import{_ as et,a as ot}from"./Loading.vue.8017c679.js";import{u as st}from"./useMyFetch.3c1eeec2.js";import"./client-only.0335f7ef.js";import"./Loading.9f32b83f.js";const nt={name:"CiHamburgerMd"},at={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},rt=e("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 17h14M5 12h14M5 7h14"},null,-1),lt=[rt];function it(f,c,_,o,u,d){return a(),i("svg",at,lt)}const ct=$(nt,[["render",it]]),_t={name:"MaterialSymbolsHome"},ut={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},dt=e("path",{fill:"currentColor",d:"M4 21V9l8-6l8 6v12h-6v-7h-4v7z"},null,-1),mt=[dt];function pt(f,c,_,o,u,d){return a(),i("svg",ut,mt)}const ht=$(_t,[["render",pt]]),ft={name:"MaterialSymbolsScale"},vt={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},gt=e("path",{fill:"currentColor",d:"M2 22q0-2.775.738-4.737T4.624 14q1.15-1.3 2.575-2.013T10 11V8q-3.425-.425-5.712-2.113T2 2h20q0 2.2-2.287 3.888T14 8v3q1.375.275 2.8.988T19.375 14q1.15 1.3 1.888 3.263T22 22h-6v-2h3.875q-.45-3.8-2.838-5.5T12 12.8q-2.65 0-5.038 1.7T4.125 20H8v2zm10 0q-.825 0-1.412-.587T10 20q0-.425.163-.775t.437-.625q.6-.6 2.025-1.263T16 16q-.7 1.95-1.35 3.375T13.4 21.4q-.275.275-.625.438T12 22"},null,-1),$t=[gt];function wt(f,c,_,o,u,d){return a(),i("svg",vt,$t)}const xt=$(ft,[["render",wt]]),kt={name:"GridiconsProduct"},bt={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Ct=e("path",{fill:"currentColor",d:"M22 3H2v6h1v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9h1zM4 5h16v2H4zm15 15H5V9h14zM9 11h6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2"},null,-1),Tt=[Ct];function yt(f,c,_,o,u,d){return a(),i("svg",bt,Tt)}const qt=$(kt,[["render",yt]]),St={name:"MaterialSymbolsCreditCard"},Mt={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Bt=e("path",{fill:"currentColor",d:"M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-8h16V8H4z"},null,-1),zt=[Bt];function Vt(f,c,_,o,u,d){return a(),i("svg",Mt,zt)}const It=$(St,[["render",Vt]]),Ht={class:"w-full h-full flex"},At={class:"relative h-full"},Pt={class:"h-full flex flex-col p-2 overflow-hidden"},Et={class:"grow overflow-auto"},Lt={id:"panel",class:"h-7 text-xs relative"},Dt={class:"w-full absolute bottom-full mb-2 bg-slate-700 bg-opacity-80 cursor-pointer"},Nt={class:"grow flex flex-col overflow-hidden"},Wt=j({__name:"default",setup(f){const c=O(),_=G(),o=S("");K(()=>_.path,(s,t)=>{let l=s.split("/");o.value="/"+(l.length>1?l[1]:"")},{immediate:!0});const{logUserOut:u}=M(),{authenticated:d}=B(M()),{triggerSidebar:z}=b(),{is_sidebar_open:w}=B(b()),V=C("token"),I=async()=>{b().loading_full=!0;const{data:s,error:t,status:l}=await st("/api/logout",{method:"post",headers:{Authorization:`Bearer ${V.value}`,Accept:"application/json"},retry:0});if(b().loading_full=!1,l.value==="error"){Z().trigger(t);return}else u(),c.push("/login")};C("username");const H=C("fullname"),x=S(!1);window.addEventListener("click",s=>{var l;const t=s.target;t instanceof Element&&((l=document==null?void 0:document.getElementById("panel"))!=null&&l.contains(t)||(x.value=!1))});const A=C("role"),y=s=>s.includes(A.value),k=s=>{o.value!=s&&(o.value=s,w.value=!1,c.push(s))};return(s,t)=>{const l=F,P=ct,E=ht,m=tt,L=xt,D=qt,N=It,R=et,U=ot;return a(),i(Y,null,[e("div",Ht,[e("nav",{class:g([n(w)?"left-0":"right-full","bg-slate-800 h-full min-w-[150px] max-w-[150px] fixed sm:relative sm:right-0 text-white z-10"]),style:{width:"320px"}},[e("div",At,[e("button",{class:"absolute left-full h-12 text-2xl text-white bg-slate-500 sm:hidden bg-opacity-0 ring-0 focus:ring-0",onClick:t[0]||(t[0]=v=>n(z)(!n(w)))},[n(w)?(a(),q(l,{key:0})):(a(),q(P,{key:1}))]),e("header",Pt,[e("ul",Et,[e("li",{class:g(n(o)=="/"?"active":"")},[r(m,{class:"cursor-pointer",onClick:t[1]||(t[1]=v=>k("/"))},{default:p(()=>[r(E,{class:"mr-1"}),h(" Dashboard ")]),_:1})],2),y(["Super Admin","ClientPabrik","User"])?(a(),i("li",{key:0,class:g(n(o)=="/data_satuan"?"active":"")},[r(m,{class:"cursor-pointer",onClick:t[2]||(t[2]=v=>k("/data_satuan"))},{default:p(()=>[r(L,{class:"mr-1"}),h(" Satuan ")]),_:1})],2)):T("",!0),y(["Super Admin","ClientPabrik","User"])?(a(),i("li",{key:1,class:g(n(o)=="/data_item"?"active":"")},[r(m,{class:"cursor-pointer",onClick:t[3]||(t[3]=v=>k("/data_item"))},{default:p(()=>[r(D,{class:"mr-1"}),h(" Item ")]),_:1})],2)):T("",!0),y(["Super Admin","ClientPabrik","User"])?(a(),i("li",{key:2,class:g(n(o)=="/data_transaksi"?"active":"")},[r(m,{class:"cursor-pointer",onClick:t[4]||(t[4]=v=>k("/data_transaksi"))},{default:p(()=>[r(N,{class:"mr-1"}),h(" Transaksi ")]),_:1})],2)):T("",!0)]),e("div",Lt,[Q(e("div",Dt,[r(m,{to:"/profile",class:"block w-full text-left p-2 hover:bg-slate-900"},{default:p(()=>[h(" Setting ")]),_:1}),n(d)?(a(),q(m,{key:0,class:"block w-full text-left p-2 hover:bg-slate-900",onClick:I},{default:p(()=>[h(" Logout ")]),_:1})):T("",!0)],512),[[W,n(x)]]),e("div",{class:"bg-slate-700 bg-opacity-80 p-2 cursor-pointer",onClick:t[5]||(t[5]=v=>x.value=!n(x))},J(n(H)),1)])])])],2),e("div",Nt,[X(s.$slots,"default")])]),r(R),r(U)],64)}}});export{Wt as default};