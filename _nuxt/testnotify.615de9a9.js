import{_ as u}from"./client-only.a43dde54.js";import{n as f,r as l,o as v,c as d,a as i,b as _,w as p,I as m,B as w}from"./entry.7d58babe.js";const N={class:"w-full h-full overflow-y-auto"},k=["innerHTML"],h=f({__name:"testnotify",setup(g){l(null);const o=l(""),t=l(0);let n=null;const a=r=>{n==null&&(n=setInterval(()=>{t.value+=1e3,o.value+=t.value+"x"+r+"<br/>",t.value>=r&&(t.value=0,clearInterval(n),n=null,o.value+="=====================================================<br/>",o.value+="called<br/>","Notification"in window&&(o.value+="called in<br/>",Notification.permission==="granted"?"Notification"in window&&"serviceWorker"in navigator?navigator.serviceWorker.getRegistration().then(function(e){e?e.showNotification("Test Notification",{body:"This is a test notification",icon:"favicon.png",requireInteraction:!0}):console.error("Service worker not registered.")}).catch(function(e){console.error("Error checking service worker registration:",e)}):console.error("Notifications or service workers not supported."):Notification.requestPermission()))},1e3))};return(r,e)=>{const s=u;return v(),d(m,null,[i("div",N,[_(s,null,{default:p(()=>[i("div",{innerHTML:w(o)},null,8,k)]),_:1})]),i("button",{onClick:e[0]||(e[0]=c=>a(0))}," Call Notif "),i("button",{onClick:e[1]||(e[1]=c=>a(3e4))}," Call 30 second ")],64)}}});export{h as default};
