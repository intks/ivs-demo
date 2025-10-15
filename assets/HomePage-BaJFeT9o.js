import{r as A,j as i}from"./index-TyiuKGDa.js";import{u as L,a as N,b as X,S as h,o as j,V as B,M as k,c as P,r as E,m as T,t as K,d as O}from"./useMediaDevices-CZz1rSFz.js";import{g as q,a as H,k as W,s as J,_ as p,b as G,c as I,u as Q,d as Y,e as Z,f as ee,h as te,i as ie,B as u,S}from"./App-ByGdrApX.js";function ae(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function se(e){return parseFloat(e)}function ne(e){return H("MuiSkeleton",e)}q("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const oe=["animation","className","component","height","style","variant","width"];let x=e=>e,D,R,M,_;const re=e=>{const{classes:a,variant:s,animation:n,hasChildren:r,width:o,height:l}=e;return ee({root:["root",s,n,r&&"withChildren",r&&!o&&"fitContent",r&&!l&&"heightAuto"]},ne,a)},de=W(D||(D=x`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),le=W(R||(R=x`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),ce=J("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:s}=e;return[a.root,a[s.variant],s.animation!==!1&&a[s.animation],s.hasChildren&&a.withChildren,s.hasChildren&&!s.width&&a.fitContent,s.hasChildren&&!s.height&&a.heightAuto]}})(({theme:e,ownerState:a})=>{const s=ae(e.shape.borderRadius)||"px",n=se(e.shape.borderRadius);return p({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:G(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${s}/${Math.round(n/.6*10)/10}${s}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&I(M||(M=x`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),de),({ownerState:e,theme:a})=>e.animation==="wave"&&I(_||(_=x`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),le,(a.vars||a).palette.action.hover)),C=A.forwardRef(function(a,s){const n=Q({props:a,name:"MuiSkeleton"}),{animation:r="pulse",className:o,component:l="span",height:d,style:v,variant:f="text",width:c}=n,m=Y(n,oe),g=p({},n,{animation:r,component:l,variant:f,hasChildren:!!m.children}),b=re(g);return i.jsx(ce,p({as:l,ref:s,className:Z(b.root,o),ownerState:g},m,{style:p({width:c,height:d},v)}))}),ge=()=>{const e=te(),[a,s]=A.useState(!1),{initializeSdk:n,updateSettings:r}=ie(),{control:o,handleSubmit:l,setValue:d}=L(),[v,f]=N({control:o,name:["videoDeviceId","audioDeviceId"]}),{isLoading:c,videoRef:m,videoDevices:g,audioDevices:b,switchVideo:F,switchAudio:U,getDeviceDisplayName:y}=X({videoDeviceId:v,audioDeviceId:f,onDeviceChange:(t,w)=>{d(w==="video"?"videoDeviceId":"audioDeviceId",t)}}),V=async t=>{await F(t),d("videoDeviceId",t)},$=async t=>{await U(t),d("audioDeviceId",t)},z=async t=>{s(!0);try{r(t),await n(t),e("/room")}catch(w){console.error("Failed to join meeting:",w)}finally{s(!1)}};return i.jsx(u,{sx:{height:"100vh",width:"100vw",display:"grid",placeItems:"center"},children:i.jsxs(h,{direction:"row",sx:{maxWidth:1024,width:"100%"},gap:3,alignItems:"center",children:[i.jsxs(h,{alignItems:"center",justifyContent:"center",gap:3,sx:{flex:.7},children:[i.jsx(u,{sx:{position:"relative",height:"100%",aspectRatio:"16/9",width:"100%"},children:i.jsx("video",{ref:m,autoPlay:!0,muted:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",borderRadius:"16px",backgroundColor:"#000",transform:"scaleX(-1)"}})}),c?i.jsxs(h,{direction:"row",gap:2,sx:{maxWidth:"32.8125rem",width:"100%"},children:[i.jsx(C,{variant:"rectangular",height:40,width:"32%",sx:{borderRadius:1}}),i.jsx(C,{variant:"rectangular",height:40,width:"32%",sx:{borderRadius:1}}),i.jsx(C,{variant:"rectangular",height:40,width:"32%",sx:{borderRadius:1}})]}):i.jsxs(h,{direction:"row",gap:2,sx:{maxWidth:"32.8125rem",width:"100%"},children:[i.jsx(u,{sx:{width:"32%",display:"flex"},children:i.jsx(j,{control:o,name:"videoDeviceId",size:"small",disabled:c,onFieldChange:t=>V(t.target.value),startAdornment:i.jsx(S,{children:i.jsx(B,{sx:{fontSize:16}})}),children:g.map(t=>i.jsx(k,{value:t.deviceId,children:y(t,"Camera")},t.deviceId))})}),i.jsx(u,{sx:{width:"32%",display:"flex"},children:i.jsx(j,{control:o,name:"audioDeviceId",size:"small",disabled:c,onFieldChange:t=>$(t.target.value),startAdornment:i.jsx(S,{children:i.jsx(P,{sx:{fontSize:16}})}),children:b.map(t=>i.jsx(k,{value:t.deviceId,children:y(t,"Microphone")},t.deviceId))})}),i.jsx(u,{sx:{width:"32%",display:"flex"},children:i.jsx(j,{control:o,name:"role",size:"small",disabled:c,children:E.map(t=>i.jsx(T,{value:t.value,children:t.label},t.value))})})]})]}),i.jsxs(h,{spacing:2,sx:{mt:3,flex:.3},children:[i.jsx(K,{control:o,name:"token",label:"Meeting Token",fullWidth:!0,placeholder:"Enter meeting token",required:!0}),i.jsx(O,{variant:"contained",fullWidth:!0,onClick:l(z),loading:a,children:"Join Meeting"})]})]})})};export{ge as default};
