"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71],{7071:(e,t,n)=>{n.d(t,{VY:()=>S,_v:()=>O,aJ:()=>j,fC:()=>F,pn:()=>T,u:()=>L,xz:()=>H,zt:()=>z});var r=n(2265),o=n(8149),i=n(1584),l=n(8324),a=n(3938),s=n(3201),u=n(6989),c=(n(6935),n(1383)),p=n(5171),d=n(1538),f=n(1715),x=n(1725),h=n(7437),[v,g]=(0,l.b)("Tooltip",[u.D7]),y=(0,u.D7)(),b="TooltipProvider",w="tooltip.open",[m,C]=v(b),T=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:o=300,disableHoverableContent:i=!1,children:l}=e,[a,s]=r.useState(!0),u=r.useRef(!1),c=r.useRef(0);return r.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,h.jsx)(m,{scope:t,isOpenDelayed:a,delayDuration:n,onOpen:r.useCallback(()=>{window.clearTimeout(c.current),s(!1)},[]),onClose:r.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>s(!0),o)},[o]),isPointerInTransitRef:u,onPointerInTransitChange:r.useCallback(e=>{u.current=e},[]),disableHoverableContent:i,children:l})};T.displayName=b;var E="Tooltip",[k,M]=v(E),L=e=>{let{__scopeTooltip:t,children:n,open:o,defaultOpen:i=!1,onOpenChange:l,disableHoverableContent:a,delayDuration:c}=e,p=C(E,e.__scopeTooltip),d=y(t),[x,v]=r.useState(null),g=(0,s.M)(),b=r.useRef(0),m=null!=a?a:p.disableHoverableContent,T=null!=c?c:p.delayDuration,M=r.useRef(!1),[L=!1,R]=(0,f.T)({prop:o,defaultProp:i,onChange:e=>{e?(p.onOpen(),document.dispatchEvent(new CustomEvent(w))):p.onClose(),null==l||l(e)}}),j=r.useMemo(()=>L?M.current?"delayed-open":"instant-open":"closed",[L]),_=r.useCallback(()=>{window.clearTimeout(b.current),M.current=!1,R(!0)},[R]),P=r.useCallback(()=>{window.clearTimeout(b.current),R(!1)},[R]),D=r.useCallback(()=>{window.clearTimeout(b.current),b.current=window.setTimeout(()=>{M.current=!0,R(!0)},T)},[T,R]);return r.useEffect(()=>()=>window.clearTimeout(b.current),[]),(0,h.jsx)(u.fC,{...d,children:(0,h.jsx)(k,{scope:t,contentId:g,open:L,stateAttribute:j,trigger:x,onTriggerChange:v,onTriggerEnter:r.useCallback(()=>{p.isOpenDelayed?D():_()},[p.isOpenDelayed,D,_]),onTriggerLeave:r.useCallback(()=>{m?P():window.clearTimeout(b.current)},[P,m]),onOpen:_,onClose:P,disableHoverableContent:m,children:n})})};L.displayName=E;var R="TooltipTrigger",j=r.forwardRef((e,t)=>{let{__scopeTooltip:n,...l}=e,a=M(R,n),s=C(R,n),c=y(n),d=r.useRef(null),f=(0,i.e)(t,d,a.onTriggerChange),x=r.useRef(!1),v=r.useRef(!1),g=r.useCallback(()=>x.current=!1,[]);return r.useEffect(()=>()=>document.removeEventListener("pointerup",g),[g]),(0,h.jsx)(u.ee,{asChild:!0,...c,children:(0,h.jsx)(p.WV.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...l,ref:f,onPointerMove:(0,o.M)(e.onPointerMove,e=>{"touch"===e.pointerType||v.current||s.isPointerInTransitRef.current||(a.onTriggerEnter(),v.current=!0)}),onPointerLeave:(0,o.M)(e.onPointerLeave,()=>{a.onTriggerLeave(),v.current=!1}),onPointerDown:(0,o.M)(e.onPointerDown,()=>{x.current=!0,document.addEventListener("pointerup",g,{once:!0})}),onFocus:(0,o.M)(e.onFocus,()=>{x.current||a.onOpen()}),onBlur:(0,o.M)(e.onBlur,a.onClose),onClick:(0,o.M)(e.onClick,a.onClose)})})});j.displayName=R;var[_,P]=v("TooltipPortal",{forceMount:void 0}),D="TooltipContent",O=r.forwardRef((e,t)=>{let n=P(D,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...i}=e,l=M(D,e.__scopeTooltip);return(0,h.jsx)(c.z,{present:r||l.open,children:l.disableHoverableContent?(0,h.jsx)(A,{side:o,...i,ref:t}):(0,h.jsx)(I,{side:o,...i,ref:t})})}),I=r.forwardRef((e,t)=>{let n=M(D,e.__scopeTooltip),o=C(D,e.__scopeTooltip),l=r.useRef(null),a=(0,i.e)(t,l),[s,u]=r.useState(null),{trigger:c,onClose:p}=n,d=l.current,{onPointerInTransitChange:f}=o,x=r.useCallback(()=>{u(null),f(!1)},[f]),v=r.useCallback((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect());u(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,o),...function(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect())])),f(!0)},[f]);return r.useEffect(()=>()=>x(),[x]),r.useEffect(()=>{if(c&&d){let e=e=>v(e,d),t=e=>v(e,c);return c.addEventListener("pointerleave",e),d.addEventListener("pointerleave",t),()=>{c.removeEventListener("pointerleave",e),d.removeEventListener("pointerleave",t)}}},[c,d,v,x]),r.useEffect(()=>{if(s){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==c?void 0:c.contains(t))||(null==d?void 0:d.contains(t)),o=!function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,i=t.length-1;e<t.length;i=e++){let l=t[e].x,a=t[e].y,s=t[i].x,u=t[i].y;a>r!=u>r&&n<(s-l)*(r-a)/(u-a)+l&&(o=!o)}return o}(n,s);r?x():o&&(x(),p())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[c,d,s,p,x]),(0,h.jsx)(A,{...e,ref:a})}),[N,B]=v(E,{isInside:!1}),A=r.forwardRef((e,t)=>{let{__scopeTooltip:n,children:o,"aria-label":i,onEscapeKeyDown:l,onPointerDownOutside:s,...c}=e,p=M(D,n),f=y(n),{onClose:v}=p;return r.useEffect(()=>(document.addEventListener(w,v),()=>document.removeEventListener(w,v)),[v]),r.useEffect(()=>{if(p.trigger){let e=e=>{let t=e.target;(null==t?void 0:t.contains(p.trigger))&&v()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[p.trigger,v]),(0,h.jsx)(a.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:e=>e.preventDefault(),onDismiss:v,children:(0,h.jsxs)(u.VY,{"data-state":p.stateAttribute,...f,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,h.jsx)(d.A4,{children:o}),(0,h.jsx)(N,{scope:n,isInside:!0,children:(0,h.jsx)(x.f,{id:p.contentId,role:"tooltip",children:i||o})})]})})});O.displayName=D;var Y="TooltipArrow";r.forwardRef((e,t)=>{let{__scopeTooltip:n,...r}=e,o=y(n);return B(Y,n).isInside?null:(0,h.jsx)(u.Eh,{...o,...r,ref:t})}).displayName=Y;var z=T,F=L,H=j,S=O}}]);