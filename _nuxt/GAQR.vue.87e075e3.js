import l from"./Times.d1edbe5a.js";import{K as n,o as i,c as d,a as e,b as c,n as a}from"./entry.cd89349b.js";const u={key:0,class:"flex items-center justify-center fixed top-0 left-0 z-10 p-3 w-full h-full bg-black bg-opacity-80"},b={class:"flex items-center max-w-xs w-full relative bg-white border-solid border-gray-600 border-2 p-3 flex-col flex-wrap"},f={class:"absolute -top-7 right-0 py-1 px-2 bg-white border-solid border-2 border-gray-600 border-b-0 rounded-tl-md"},m={class:"w-full"},p=["src"],x={class:"flex w-full justify-between mt-5"},h=n({__name:"GAQR",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!0},qrCodeUrl:{type:String,required:!1}},setup(t){return(_,o)=>{const r=l;return t.show?(i(),d("div",u,[e("div",b,[e("div",f,[c(r,{class:"text-2xl text-black cursor-pointer",onClick:o[0]||(o[0]=s=>t.fnClose())})]),e("div",m,[e("img",{class:"w-full aspect-square",src:t.qrCodeUrl,alt:""},null,8,p)]),e("div",x,[e("button",{onClick:o[1]||(o[1]=s=>t.fnClose()),class:"w-full bg-blue-500 border-blue-500 border-solid border-2 p-1 text-white mr-2"}," Close ")])])])):a("",!0)}}});export{h as _};
