import{_ as j}from"./Times.ad53842a.js";import{_ as $}from"./_plugin-vue_export-helper.c27b6911.js";import{o as n,c as r,a as e,f as D,i as F,j as G,r as q,E as J,g as S,y as M,q as x,h as k,C as g,n as s,J as T,b as a,w as h,H as C,m as O,G as W,t as K,L as Q,F as X,s as Y,d as p}from"./entry.9dd501cc.js";import{_ as Z}from"./nuxt-link.7a4421fe.js";import{_ as tt,a as et}from"./Loading.vue.93b71d08.js";import{u as ot}from"./useMyFetch.b5a1eede.js";import"./client-only.28d5e1e1.js";import"./Loading.6b3c690f.js";const st={name:"CiHamburgerMd"},nt={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},at=e("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 17h14M5 12h14M5 7h14"},null,-1),lt=[at];function rt(f,c,_,o,u,d){return n(),r("svg",nt,lt)}const it=$(st,[["render",rt]]),ct={name:"MaterialSymbolsHome"},_t={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},ut=e("path",{fill:"currentColor",d:"M4 21V9l8-6l8 6v12h-6v-7h-4v7z"},null,-1),dt=[ut];function mt(f,c,_,o,u,d){return n(),r("svg",_t,dt)}const ht=$(ct,[["render",mt]]),pt={name:"MaterialSymbolsScale"},ft={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},vt=e("path",{fill:"currentColor",d:"M2 22q0-2.775.738-4.737T4.624 14q1.15-1.3 2.575-2.013T10 11V8q-3.425-.425-5.712-2.113T2 2h20q0 2.2-2.287 3.888T14 8v3q1.375.275 2.8.988T19.375 14q1.15 1.3 1.888 3.263T22 22h-6v-2h3.875q-.45-3.8-2.838-5.5T12 12.8q-2.65 0-5.038 1.7T4.125 20H8v2zm10 0q-.825 0-1.412-.587T10 20q0-.425.163-.775t.437-.625q.6-.6 2.025-1.263T16 16q-.7 1.95-1.35 3.375T13.4 21.4q-.275.275-.625.438T12 22"},null,-1),gt=[vt];function $t(f,c,_,o,u,d){return n(),r("svg",ft,gt)}const wt=$(pt,[["render",$t]]),xt={name:"GridiconsProduct"},kt={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Ct=e("path",{fill:"currentColor",d:"M22 3H2v6h1v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9h1zM4 5h16v2H4zm15 15H5V9h14zM9 11h6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2"},null,-1),bt=[Ct];function yt(f,c,_,o,u,d){return n(),r("svg",kt,bt)}const Tt=$(xt,[["render",yt]]),qt={name:"MaterialSymbolsCreditCard"},St={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Mt=e("path",{fill:"currentColor",d:"M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-8h16V8H4z"},null,-1),Bt=[Mt];function Vt(f,c,_,o,u,d){return n(),r("svg",St,Bt)}const zt=$(qt,[["render",Vt]]),Ht={class:"w-full h-full flex"},It={class:"relative h-full"},At={class:"h-full flex flex-col p-2 overflow-hidden"},Et={class:"grow overflow-auto"},Lt={id:"panel",class:"h-7 text-xs relative"},Pt={class:"w-full absolute bottom-full mb-2 bg-slate-700 bg-opacity-80 cursor-pointer"},Nt={class:"grow flex flex-col overflow-hidden"},Wt=D({__name:"default",setup(f){const c=F(),_=G(),o=q("");J(()=>_.path,(i,t)=>{let l=i.split("/");o.value="/"+(l.length>1?l[1]:"")},{immediate:!0});const{logUserOut:u}=S(),{authenticated:d}=M(S()),{triggerSidebar:B}=x(),{is_sidebar_open:b}=M(x()),V=k("token"),z=async()=>{x().loading_full=!0;const{data:i,error:t,status:l}=await ot("/api/logout",{method:"post",headers:{Authorization:`Bearer ${V.value}`,Accept:"application/json"},retry:0});if(x().loading_full=!1,l.value==="error"){Y().trigger(t);return}else u(),c.push("/login")};k("username");const H=k("fullname"),w=q(!1);window.addEventListener("click",i=>{var l;const t=i.target;t instanceof Element&&((l=document==null?void 0:document.getElementById("panel"))!=null&&l.contains(t)||(w.value=!1))});const I=k("role"),y=i=>i.includes(I.value);return(i,t)=>{const l=j,A=it,E=ht,m=Z,L=wt,P=Tt,N=zt,R=tt,U=et;return n(),r(X,null,[e("div",Ht,[e("nav",{class:g([s(b)?"left-0":"right-full","bg-slate-800 h-full min-w-[150px] max-w-[150px] fixed sm:relative sm:right-0 text-white z-10"]),style:{width:"320px"}},[e("div",It,[e("button",{class:"absolute left-full h-12 text-2xl text-white bg-slate-500 sm:hidden",onClick:t[0]||(t[0]=v=>s(B)(!s(b)))},[s(b)?(n(),T(l,{key:0})):(n(),T(A,{key:1}))]),e("header",At,[e("ul",Et,[e("li",{class:g(s(o)=="/"?"active":"")},[a(m,{to:"/",onClick:t[1]||(t[1]=v=>o.value="/")},{default:h(()=>[a(E,{class:"mr-1"}),p(" Dashboard ")]),_:1})],2),y(["Super Admin","ClientPabrik","User"])?(n(),r("li",{key:0,class:g(s(o)=="/data_satuan"?"active":"")},[a(m,{to:"/data_satuan",onClick:t[2]||(t[2]=v=>o.value="/data_satuan")},{default:h(()=>[a(L,{class:"mr-1"}),p(" Satuan ")]),_:1})],2)):C("",!0),y(["Super Admin","ClientPabrik","User"])?(n(),r("li",{key:1,class:g(s(o)=="/data_item"?"active":"")},[a(m,{to:"/data_item",onClick:t[3]||(t[3]=v=>o.value="/data_item")},{default:h(()=>[a(P,{class:"mr-1"}),p(" Item ")]),_:1})],2)):C("",!0),y(["Super Admin","ClientPabrik","User"])?(n(),r("li",{key:2,class:g(s(o)=="/data_transaksi"?"active":"")},[a(m,{to:"/data_transaksi",onClick:t[4]||(t[4]=v=>o.value="/data_transaksi")},{default:h(()=>[a(N,{class:"mr-1"}),p(" Transaksi ")]),_:1})],2)):C("",!0)]),e("div",Lt,[O(e("div",Pt,[a(m,{to:"/profile",class:"block w-full text-left p-2 hover:bg-slate-900"},{default:h(()=>[p(" Setting ")]),_:1}),s(d)?(n(),T(m,{key:0,class:"block w-full text-left p-2 hover:bg-slate-900",onClick:z},{default:h(()=>[p(" Logout ")]),_:1})):C("",!0)],512),[[W,s(w)]]),e("div",{class:"bg-slate-700 bg-opacity-80 p-2 cursor-pointer",onClick:t[5]||(t[5]=v=>w.value=!s(w))},K(s(H)),1)])])])],2),e("div",Nt,[Q(i.$slots,"default")])]),a(R),a(U)],64)}}});export{Wt as default};