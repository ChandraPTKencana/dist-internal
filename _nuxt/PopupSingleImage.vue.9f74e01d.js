import{_ as a}from"./Times.45255da7.js";import{n as d,o as s,c as r,a as t,b as c,O as l}from"./entry.9a14ada7.js";const u={key:0,class:"flex items-center justify-center fixed top-0 left-0 z-10 p-3 w-full h-full bg-black bg-opacity-80"},f={class:"flex items-center max-w-xs w-full relative bg-white border-solid border-gray-600 border-2 p-3 flex-col flex-wrap"},m={class:"absolute -top-7 right-0 py-1 px-2 bg-white border-solid border-2 border-gray-600 border-b-0 rounded-tl-md"},b={key:0,class:"mx-0 my-2 text-justify"},p=["src"],x={class:"flex w-full justify-between mt-5"},y=d({__name:"PopupSingleImage",props:{show:{type:Boolean,required:!0},photo:{type:String,required:!1,default:""},fnClose:{type:Function,required:!0}},setup(e){return(h,o)=>{const n=a;return e.show?(s(),r("div",u,[t("div",f,[t("div",m,[c(n,{class:"text-2xl text-black cursor-pointer",onClick:o[0]||(o[0]=i=>e.fnClose())})]),e.photo?(s(),r("div",b,[t("img",{src:e.photo,alt:"",class:"max-w-full max-h-full"},null,8,p)])):l("",!0),t("div",x,[t("button",{onClick:o[1]||(o[1]=i=>e.fnClose()),class:"w-full bg-blue-500 border-blue-500 border-solid border-2 p-1 text-white mr-2"}," Tutup ")])])])):l("",!0)}}});export{y as _};
