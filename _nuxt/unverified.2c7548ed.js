import P from"./Calendar.9a095fa5.js";import G from"./CarTag.736709d8.js";import Z from"./TruckDriver.d3f98181.js";import Q from"./TruckDriverOutline.cdc72716.js";import W from"./LocationOn.c787fd37.js";import{_ as X}from"./HeaderPopup.vue.fe14bc58.js";import{r as u,g as ee,j as se,i as te,f as S,o as f,c as p,k as y,J as k,a as e,m as oe,A as ae,l as a,F as D,D as V,t as l,b as v,d as Y,n as B,G as le,x as g,y as j}from"./entry.468c1924.js";import{u as ne}from"./useUtils.f67a7b52.js";import{u as L}from"./useMyFetch.5d39e20e.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.725e6b46.js";const ie={class:"grow flex flex-col"},re={class:"w-full flex items-center p-1"},ce={class:"grow"},de={class:"grow overflow-auto h-0"},_e={class:"p-1 grow"},ue={class:"bg-white flex py-2 justify-between"},fe={class:"flex flex-wrap"},pe={class:"flex items-center justify-center m-2 text-xs"},he={class:"bg-blue-400 p-2 font-bold text-white"},me={class:"flex flex-col m-2"},xe=e("span",{class:"text-xs"}," Tgl Terima U.Jalan ",-1),ve={class:"flex items-center justify-center"},ge={class:"flex flex-col m-2"},we=e("span",{class:"text-xs"}," Nomor Kendaraan ",-1),ye={class:"flex items-center justify-center"},be=["data-real"],ke={class:"flex flex-col m-2"},Te=e("span",{class:"text-xs"}," Nama Supir ",-1),Ce={class:"flex items-center justify-center"},De=["data-real"],je={key:0,class:"flex flex-col m-2"},Le=e("span",{class:"text-xs"}," Nama Kernet ",-1),Ne={class:"flex items-center justify-center"},$e=["data-real"],Ae={class:"flex flex-col m-2"},Me=e("span",{class:"text-xs"}," Tujuan ",-1),Se={class:"flex items-center justify-center"},Ve=["onClick"],Ye={class:"w-full h-full fixed top-0 left-0 bg-gray-100 bg-opacity-80 flex items-center justify-center z-10"},Be={class:"w-full sm:w-10/12 md:w-8/12 lg:w-6/12 bg-white flex flex-col border-solid border-gray-200 max-w-full max-h-full",style:{"border-width":"1px"}},Ie={class:"p-1 flex flex-wrap overflow-auto items-start"},Je={class:"w-full sm:w-1/2 flex flex-wrap"},Oe={class:"flex flex-col m-2"},Ue=e("span",{class:"text-xs"}," Tgl Terima U.Jalan ",-1),qe={class:""},ze={class:"flex flex-col m-2"},Fe=e("span",{class:"text-xs"}," Nomor Kendaraan ",-1),He={class:""},Ke={class:"flex flex-col m-2"},Re=e("span",{class:"text-xs"}," Nama Supir ",-1),Ee={class:""},Pe={key:0,class:"flex flex-col m-2"},Ge=e("span",{class:"text-xs"}," Nama Kernet ",-1),Ze={class:""},Qe={class:"flex flex-col m-2"},We=e("span",{class:"text-xs"}," Tujuan ",-1),Xe={class:""},es={class:"flex flex-col m-2"},ss=e("span",{class:"text-xs"}," Info ",-1),ts={class:""},os={class:"flex flex-col m-2"},as=e("span",{class:"text-xs"}," Tipe ",-1),ls={class:""},ns={class:"flex flex-col m-2"},is=e("span",{class:"text-xs"}," Jenis ",-1),rs={class:""},cs={class:"w-full sm:w-1/2 text-sm flex justify-center"},ds={class:"border border-collapse border-black"},_s=e("tr",null,[e("th",{colspan:"4",class:"bg-blue-400"}," List Uang Jalan ")],-1),us={class:"p-1"},fs={class:"p-1"},ps=e("td",{class:"p-1"},"= Rp.",-1),hs={class:"text-right p-1"},ms={class:"border-t-black border-dashed",style:{"border-top-width":"1px"}},xs=e("th",{colspan:"2",class:"text-right"},"Total",-1),vs=e("th",{class:"p-1 text-right"},"Rp.",-1),gs={class:"p-1 text-right"},ws={class:"flex p-1 justify-end flex-wrap"},ys={class:"flex p-1 justify-center flex-wrap bg-yellow-100"},bs=e("div",{class:"w-full text-center"}," Data Diatas akan diverifikasi. Apakah Informasi Diatas Sudah Benar Dan Tepat? ",-1),Ys={__name:"unverified",props:{show:{type:Boolean,required:!0}},setup(N){const I=N,{$moment:$}=le(),{pointFormat:b}=ne(),r={};r._TimeZoneOffset=new Date().getTimezoneOffset(),r.sort="tanggal:desc";const w=u({}),T=ee("token"),h=u([]),n=u({id:-1,tanggal:new Date,xto:"",tipe:"",jenis:"",amount:0,supir:"",kernet:"",no_pol:"",details_uj:[]}),C=u(-1),_=u(""),J=async o=>{g().loading_full=!0;const{data:s,error:i,status:c}=await L("/trx_trp/mandor_verify_trx",{method:"get",headers:{Authorization:`Bearer ${T.value}`,Accept:"application/json"},params:{id:o.id},retry:0});if(g().loading_full=!1,c.value==="error"){j().trigger(i,w);return}n.value=s.value.data},O=async()=>{g().loading_full=!0,w.value={},r.page==1&&(h.value=[]),r.first_row&&delete r.first_row,r.page>1&&(r.first_row=JSON.stringify(h.value[0])),r.filter_status="mandor_trx_unverified";const{data:o,error:s,status:i}=await L("/trx_trps",{method:"get",headers:{Authorization:`Bearer ${T.value}`,Accept:"application/json"},params:r,retry:0});if(g().loading_full=!1,i.value==="error"){j().trigger(s,w);return}h.value=o.value.data},U=async()=>{g().loading_full=!0,w.value={};const o=new FormData;o.append("id",n.value.id),o.append("_method","PUT");let s="post";const{data:i,error:c,status:d}=await L("/trx_trp/mandor_verify_trx",{method:s,headers:{Authorization:`Bearer ${T.value}`,Accept:"application/json"},body:o,retry:0});if(g().loading_full=!1,d.value==="error"){j().trigger(c,w);return}h.value.splice(C.value,1),C.value=-1,x.value=!1,m.value=!1},m=u(!1),q=u(0),x=u(!1);se();const z=(o,s)=>{C.value=o,q.value=s,m.value=!0,J(s)},A=te(()=>_.value!=""?h.value.filter(o=>o.no_pol.toLowerCase().includes(_.value.toLowerCase())||o.supir.toLowerCase().includes(_.value.toLowerCase())||o.kernet.toLowerCase().includes(_.value.toLowerCase())):h.value),F=()=>{let o=_.value;document.querySelectorAll(".to_hl").forEach(s=>{let i=s.dataset.real;var c=s.innerHTML,d=i.toLowerCase().indexOf(o.toLowerCase());d>-1&&o!=""?(c=i.substring(0,d)+"<span class='highlight'>"+i.substring(d,d+o.length)+"</span>"+i.substring(d+o.length),s.innerHTML=c):s.innerHTML=c=i})};return S(()=>A,(o,s)=>{setTimeout(()=>{F()},0)},{deep:!0,immediate:!0}),S(()=>I.show,(o,s)=>{o==!0&&O()},{immediate:!0}),(o,s)=>{var M;const i=P,c=G,d=Z,H=Q,K=W,R=X;return f(),p(D,null,[y(e("section",ie,[e("div",re,[e("div",ce,[y(e("input",{class:"flex-grow",type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>oe(_)?_.value=t:null),name:"search",placeholder:"Keyword"},null,512),[[ae,a(_)]])])]),e("div",de,[(f(!0),p(D,null,V(a(A),(t,E)=>(f(),p("div",_e,[e("div",ue,[e("div",fe,[e("div",pe,[e("div",he,l(t.id),1)]),e("div",me,[xe,e("div",ve,[v(i,{class:"mr-1"}),Y(" "+l(a($)(t.tanggal).format("DD-MM-YYYY")),1)])]),e("div",ge,[we,e("div",ye,[v(c,{class:"mr-1"}),e("span",{class:"to_hl","data-real":t.no_pol},l(t.no_pol),9,be)])]),e("div",ke,[Te,e("div",Ce,[v(d,{class:"mr-1"}),e("span",{class:"to_hl","data-real":t.supir},l(t.supir),9,De)])]),t.kernet?(f(),p("div",je,[Le,e("div",Ne,[v(H,{class:"mr-1"}),e("span",{class:"to_hl","data-real":t.kernet},l(t.kernet),9,$e)])])):B("",!0),e("div",Ae,[Me,e("div",Se,[v(K,{class:"mr-1"}),Y(" "+l(t.xto),1)])])]),e("button",{class:"bg-blue-500 text-white rounded",onClick:ks=>z(E,t)}," Detail ",8,Ve)])]))),256))])],512),[[k,N.show]]),y(e("div",Ye,[e("div",Be,[v(R,{title:"Detail Information",fn:()=>{m.value=!1,x.value=!1},class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",Ie,[e("div",Je,[e("div",Oe,[Ue,e("div",qe,l(a($)(a(n).tanggal).format("DD-MM-YYYY")),1)]),e("div",ze,[Fe,e("div",He,l(a(n).no_pol),1)]),e("div",Ke,[Re,e("div",Ee,l(a(n).supir),1)]),a(n).kernet?(f(),p("div",Pe,[Ge,e("div",Ze,l(a(n).kernet),1)])):B("",!0),e("div",Qe,[We,e("div",Xe,l(a(n).xto),1)]),e("div",es,[ss,e("div",ts,l((M=a(n).uj)==null?void 0:M.asst_opt),1)]),e("div",os,[as,e("div",ls,l(a(n).tipe),1)]),e("div",ns,[is,e("div",rs,l(a(n).jenis),1)])]),e("div",cs,[e("table",ds,[_s,(f(!0),p(D,null,V(a(n).details_uj,t=>(f(),p("tr",null,[e("td",us,l(t.ordinal)+". ",1),e("td",fs,l(t.xdesc)+" "+l(t.qty<=1?"":a(b)(t.qty||0)+" x Rp."+a(b)(t.harga||0)),1),ps,e("td",hs,l(a(b)(t.qty*t.harga)),1)]))),256)),e("tr",ms,[xs,vs,e("th",gs,l(a(b)(a(n).amount)),1)])])])]),y(e("div",ws,[e("button",{class:"rounded m-1",onClick:s[1]||(s[1]=t=>m.value=!1)}," Cancel "),e("button",{class:"rounded m-1 text-white bg-blue-500",onClick:s[2]||(s[2]=t=>x.value=!0)}," Verify ")],512),[[k,!a(x)]]),y(e("div",ys,[bs,e("button",{class:"rounded m-1 bg-white",onClick:s[3]||(s[3]=t=>(x.value=!1,m.value=!1))}," Tidak "),e("button",{class:"rounded m-1 text-white bg-blue-500",onClick:s[4]||(s[4]=t=>U())}," Ya ")],512),[[k,a(x)]])])],512),[[k,a(m)]])],64)}}};export{Ys as default};
