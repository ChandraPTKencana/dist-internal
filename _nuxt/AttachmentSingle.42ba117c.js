import k from"./PDFJsView.f18f7b65.js";import{r as d,f as h,o as s,c as o,a as w,t as x,l as r,n,z as F,k as y,J as _}from"./entry.a19beef1.js";const B={class:"w-full flex flex-col flex-wrap p-1 justify-center items-center border-solid border-gray-300 border-[1px]"},P={class:"w-full"},S={for:""},V={key:0,class:"w-full flex justify-center items-center border-[1px] border-gray-300 mb-1"},C=["src"],j={__name:"AttachmentSingle",props:{value:{type:[String,null],required:!0,default:null},label:{type:String,required:!1,default:""},can_remove:{type:Boolean,required:!1,default:!1}},emits:["setFile","setPreview"],setup(i,{emit:u}){const p=i;d(!1);const f=d(null),e=d(null),g=l=>{var t=l.target.files;if(t.length>0){let a=new FileReader;a.onload=function(c){var v;let m=(v=c.target)==null?void 0:v.result;e.value=m,u("setPreview",m)},a.readAsDataURL(t[0]),u("setFile",t[0])}},b=()=>{e.value="",u("setPreview","");let l=f.value;l&&(l.value="",u("setFile",""))};return h(()=>p.show,(l,t)=>{},{immediate:!0}),h(()=>p.value,(l,t)=>{if(e.value=l,l==""){let a=f.value;a&&(a.value="")}},{immediate:!0,deep:!0}),(l,t)=>{const a=k;return s(),o("div",B,[w("div",P,[w("label",S,x(i.label),1)]),r(e)?(s(),o("div",V,[r(e).match(/image/)?(s(),o("img",{key:0,src:r(e),alt:"",class:"max-w-full max-h-full"},null,8,C)):n("",!0),r(e).match(/application\/pdf/)?(s(),F(a,{key:1,pdfBase64:r(e)},null,8,["pdfBase64"])):n("",!0)])):n("",!0),i.can_remove?y((s(),o("button",{key:1,type:"button",class:"bg-gray-600 w-36 text-white",onClick:t[0]||(t[0]=c=>b())},"Clear",512)),[[_,r(e)]]):n("",!0),i.can_remove?y((s(),o("input",{key:2,class:"w-full",onChange:t[1]||(t[1]=c=>g(c)),ref_key:"photo_input",ref:f,type:"file",name:"photo"},null,544)),[[_,!r(e)]]):n("",!0)])}}};export{j as default};
