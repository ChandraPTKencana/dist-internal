import{_ as F}from"./HeaderPopup.vue.01af7e9a.js";import{q as O,r as y,h as V,z as j,M as L,o as r,c as u,a as e,b as Q,t as s,B as o,I as R,J as Y,K as E,d as B,L as U,C as T,D as J,p as K,e as P}from"./entry.9c36b995.js";import{u as W}from"./useUtils.100f5b4a.js";import{u as Z}from"./useMyFetch.04c0a588.js";import{_ as G}from"./_plugin-vue_export-helper.c27b6911.js";const _=a=>(K("data-v-26db4a83"),a=a(),P(),a),X={class:"box-fixed"},ee={class:"w-full flex p-1 flex-wrap flex-row"},te={class:"w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-1"},se=_(()=>e("div",{class:"font-bold"}," Warehouse Name ",-1)),le={class:"w-full p-1"},oe={class:"w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-1"},ae=_(()=>e("div",{class:"font-bold"}," Item Name ",-1)),de={class:"w-full p-1"},ne={class:"w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-1"},ie=_(()=>e("div",{class:"font-bold"}," Last Stock ",-1)),re={class:"w-full p-1"},ue={class:"w-full flex justify-center items-center grow h-0 p-1"},_e={key:0,class:""},me={class:"tacky"},ce=_(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Input At"),e("th",null,"Type"),e("th",null,"Qty In"),e("th",null,"Qty Out"),e("th",null,"Qty Reminder"),e("th",null,"Note"),e("th",null,"Confirm At"),e("th",null,"Updated At")])],-1)),fe=["onClick"],pe=_(()=>e("br",null,null,-1)),he={__name:"summary_detail",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},warehouse_id:{type:Number,required:!1},item_id:{type:Number,required:!1},data:{type:Object,required:!0}},setup(a){const l=a,{$moment:f}=U(),{pointFormat:p}=W(),z=O("token");y({from:"",to:""});const m=y([]),w=y(-1),n={};n._TimeZoneOffset=new Date().getTimezoneOffset();const H=async()=>{T().loading_full=!0,n.page=1,n.item_id=l.data.item.id,n.warehouse_id=l.data.rest.id,m.value=[];const{data:d,error:i,status:h}=await Z("/api/summary_detail_transactions",{method:"get",headers:{Authorization:`Bearer ${z.value}`,Accept:"application/json"},params:n,retry:0});if(T().loading_full=!1,h.value==="error"){J().trigger(i);return}m.value=d.value.data};return V(()=>l.show,(d,i)=>{d==!0&&H()},{immediate:!0}),(d,i)=>{var v,k,g,b,q,D,M,N;const h=F;return j((r(),u("section",X,[e("div",null,[Q(h,{title:"Summary Detail",fn:a.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",ee,[e("div",te,[se,e("div",le,s((k=(v=l.data)==null?void 0:v.rest)==null?void 0:k.lokasi),1)]),e("div",oe,[ae,e("div",de,s((b=(g=l.data)==null?void 0:g.item)==null?void 0:b.name),1)]),e("div",ne,[ie,e("div",re,s((D=(q=l.data)==null?void 0:q.item)==null?void 0:D.qty_reminder)+" "+s((N=(M=l.data)==null?void 0:M.item)==null?void 0:N.unit_name),1)])]),e("div",ue,[o(m).length==0?(r(),u("div",_e," Maaf Tidak Ada Record ")):(r(),u("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref:"loadRef",onScroll:i[0]||(i[0]=(...t)=>d.loadMore&&d.loadMore(...t))},[e("table",me,[ce,e("tbody",null,[(r(!0),u(R,null,Y(o(m),(t,c)=>{var S,x,C,I,A,$;return r(),u("tr",{key:c,onClick:ye=>w.value=c,class:E(o(w)==c?"active":"")},[e("td",null,s(c+1)+".",1),e("td",null,s(o(f)(t.input_at).format("DD-MM-Y")),1),e("td",null,[B(s(t.type)+" ",1),pe,B(" "+s(t.type=="transfer"?"To : "+t.lokasi:""),1)]),e("td",null,s(t.qty_in?o(p)(t.qty_in)+` ${(x=(S=l.data)==null?void 0:S.item)==null?void 0:x.unit_name}`:""),1),e("td",null,s(t.qty_out?o(p)(t.qty_out)+` ${(I=(C=l.data)==null?void 0:C.item)==null?void 0:I.unit_name}`:""),1),e("td",null,s(t.qty_reminder?o(p)(t.qty_reminder)+` ${($=(A=l.data)==null?void 0:A.item)==null?void 0:$.unit_name}`:""),1),e("td",null,s(t.note),1),e("td",null,s(t.confirmed_at?o(f)(t.confirmed_at).format("DD-MM-Y HH:mm:ss"):""),1),e("td",null,s(o(f)(t.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,fe)}),128))])])],544))])])],512)),[[L,a.show]])}}},qe=G(he,[["__scopeId","data-v-26db4a83"]]);export{qe as _};