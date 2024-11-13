"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{2361:(e,t,r)=>{r.d(t,{u:()=>n});function n(e,[t,r]){return Math.min(r,Math.max(t,e))}},6402:(e,t,r)=>{r.d(t,{B:()=>a});var n=r(2265),o=r(7437),l=r(1584),i=r(1538);function a(e){let t=e+"CollectionProvider",[r,a]=function(e,t=[]){let r=[],l=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return l.scopeName=e,[function(t,l){let i=n.createContext(l),a=r.length;function s(t){let{scope:r,children:l,...s}=t,u=r?.[e][a]||i,c=n.useMemo(()=>s,Object.values(s));return(0,o.jsx)(u.Provider,{value:c,children:l})}return r=[...r,l],s.displayName=t+"Provider",[s,function(r,o){let s=o?.[e][a]||i,u=n.useContext(s);if(u)return u;if(void 0!==l)return l;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(l,...t)]}(t),[s,u]=r(t,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:t,children:r}=e,l=n.useRef(null),i=n.useRef(new Map).current;return(0,o.jsx)(s,{scope:t,itemMap:i,collectionRef:l,children:r})};c.displayName=t;let d=e+"CollectionSlot",f=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,a=u(d,r),s=(0,l.e)(t,a.collectionRef);return(0,o.jsx)(i.g7,{ref:s,children:n})});f.displayName=d;let p=e+"CollectionItemSlot",v="data-radix-collection-item",m=n.forwardRef((e,t)=>{let{scope:r,children:a,...s}=e,c=n.useRef(null),d=(0,l.e)(t,c),f=u(p,r);return n.useEffect(()=>(f.itemMap.set(c,{ref:c,...s}),()=>void f.itemMap.delete(c))),(0,o.jsx)(i.g7,{[v]:"",ref:d,children:a})});return m.displayName=p,[{Provider:c,Slot:f,ItemSlot:m},function(t){let r=u(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(v,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},a]}},7513:(e,t,r)=>{r.d(t,{gm:()=>l});var n=r(2265);r(7437);var o=n.createContext(void 0);function l(e){let t=n.useContext(o);return e||t||"ltr"}},1383:(e,t,r)=>{r.d(t,{z:()=>i});var n=r(2265),o=r(1584),l=r(1336),i=e=>{let{present:t,children:r}=e,i=function(e){var t,r;let[o,i]=n.useState(),s=n.useRef({}),u=n.useRef(e),c=n.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return n.useEffect(()=>{let e=a(s.current);c.current="mounted"===d?e:"none"},[d]),(0,l.b)(()=>{let t=s.current,r=u.current;if(r!==e){let n=c.current,o=a(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):r&&n!==o?f("ANIMATION_OUT"):f("UNMOUNT"),u.current=e}},[e,f]),(0,l.b)(()=>{if(o){var e;let t;let r=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,n=e=>{let n=a(s.current).includes(e.animationName);if(e.target===o&&n&&(f("ANIMATION_END"),!u.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=r.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},l=e=>{e.target===o&&(c.current=a(s.current))};return o.addEventListener("animationstart",l),o.addEventListener("animationcancel",n),o.addEventListener("animationend",n),()=>{r.clearTimeout(t),o.removeEventListener("animationstart",l),o.removeEventListener("animationcancel",n),o.removeEventListener("animationend",n)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:n.useCallback(e=>{e&&(s.current=getComputedStyle(e)),i(e)},[])}}(t),s="function"==typeof r?r({present:i.isPresent}):n.Children.only(r),u=(0,o.e)(i.ref,function(e){var t,r;let n=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(o=(n=null===(r=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in n&&n.isReactWarning)?e.props.ref:e.props.ref||e.ref}(s));return"function"==typeof r||i.isPresent?n.cloneElement(s,{ref:u}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},23:(e,t,r)=>{r.d(t,{Ns:()=>q,fC:()=>K,gb:()=>E,l_:()=>$,q4:()=>L});var n=r(2265),o=r(5171),l=r(1383),i=r(8324),a=r(1584),s=r(5137),u=r(7513),c=r(1336),d=r(2361),f=r(8149),p=r(7437),v="ScrollArea",[m,h]=(0,i.b)(v),[w,b]=m(v),g=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,type:l="hover",dir:i,scrollHideDelay:s=600,...c}=e,[d,f]=n.useState(null),[v,m]=n.useState(null),[h,b]=n.useState(null),[g,y]=n.useState(null),[x,S]=n.useState(null),[E,R]=n.useState(0),[C,T]=n.useState(0),[N,M]=n.useState(!1),[P,_]=n.useState(!1),j=(0,a.e)(t,e=>f(e)),A=(0,u.gm)(i);return(0,p.jsx)(w,{scope:r,type:l,dir:A,scrollHideDelay:s,scrollArea:d,viewport:v,onViewportChange:m,content:h,onContentChange:b,scrollbarX:g,onScrollbarXChange:y,scrollbarXEnabled:N,onScrollbarXEnabledChange:M,scrollbarY:x,onScrollbarYChange:S,scrollbarYEnabled:P,onScrollbarYEnabledChange:_,onCornerWidthChange:R,onCornerHeightChange:T,children:(0,p.jsx)(o.WV.div,{dir:A,...c,ref:j,style:{position:"relative","--radix-scroll-area-corner-width":E+"px","--radix-scroll-area-corner-height":C+"px",...e.style}})})});g.displayName=v;var y="ScrollAreaViewport",x=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,children:l,asChild:i,nonce:s,...u}=e,c=b(y,r),d=n.useRef(null),f=(0,a.e)(t,d,c.onViewportChange);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n[data-radix-scroll-area-viewport] {\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  -webkit-overflow-scrolling: touch;\n}\n[data-radix-scroll-area-viewport]::-webkit-scrollbar {\n  display: none;\n}\n:where([data-radix-scroll-area-viewport]) {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n:where([data-radix-scroll-area-content]) {\n  flex-grow: 1;\n}\n"},nonce:s}),(0,p.jsx)(o.WV.div,{"data-radix-scroll-area-viewport":"",...u,asChild:i,ref:f,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style},children:function(e,t){let{asChild:r,children:o}=e;if(!r)return"function"==typeof t?t(o):t;let l=n.Children.only(o);return n.cloneElement(l,{children:"function"==typeof t?t(l.props.children):t})}({asChild:i,children:l},e=>(0,p.jsx)("div",{"data-radix-scroll-area-content":"",ref:c.onContentChange,style:{minWidth:c.scrollbarXEnabled?"fit-content":void 0},children:e}))})]})});x.displayName=y;var S="ScrollAreaScrollbar",E=n.forwardRef((e,t)=>{let{forceMount:r,...o}=e,l=b(S,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:a}=l,s="horizontal"===e.orientation;return n.useEffect(()=>(s?i(!0):a(!0),()=>{s?i(!1):a(!1)}),[s,i,a]),"hover"===l.type?(0,p.jsx)(R,{...o,ref:t,forceMount:r}):"scroll"===l.type?(0,p.jsx)(C,{...o,ref:t,forceMount:r}):"auto"===l.type?(0,p.jsx)(T,{...o,ref:t,forceMount:r}):"always"===l.type?(0,p.jsx)(N,{...o,ref:t}):null});E.displayName=S;var R=n.forwardRef((e,t)=>{let{forceMount:r,...o}=e,i=b(S,e.__scopeScrollArea),[a,s]=n.useState(!1);return n.useEffect(()=>{let e=i.scrollArea,t=0;if(e){let r=()=>{window.clearTimeout(t),s(!0)},n=()=>{t=window.setTimeout(()=>s(!1),i.scrollHideDelay)};return e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",n)}}},[i.scrollArea,i.scrollHideDelay]),(0,p.jsx)(l.z,{present:r||a,children:(0,p.jsx)(T,{"data-state":a?"visible":"hidden",...o,ref:t})})}),C=n.forwardRef((e,t)=>{var r,o;let{forceMount:i,...a}=e,s=b(S,e.__scopeScrollArea),u="horizontal"===e.orientation,c=Y(()=>v("SCROLL_END"),100),[d,v]=(r="hidden",o={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},n.useReducer((e,t)=>{let r=o[e][t];return null!=r?r:e},r));return n.useEffect(()=>{if("idle"===d){let e=window.setTimeout(()=>v("HIDE"),s.scrollHideDelay);return()=>window.clearTimeout(e)}},[d,s.scrollHideDelay,v]),n.useEffect(()=>{let e=s.viewport,t=u?"scrollLeft":"scrollTop";if(e){let r=e[t],n=()=>{let n=e[t];r!==n&&(v("SCROLL"),c()),r=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[s.viewport,u,v,c]),(0,p.jsx)(l.z,{present:i||"hidden"!==d,children:(0,p.jsx)(N,{"data-state":"hidden"===d?"hidden":"visible",...a,ref:t,onPointerEnter:(0,f.M)(e.onPointerEnter,()=>v("POINTER_ENTER")),onPointerLeave:(0,f.M)(e.onPointerLeave,()=>v("POINTER_LEAVE"))})})}),T=n.forwardRef((e,t)=>{let r=b(S,e.__scopeScrollArea),{forceMount:o,...i}=e,[a,s]=n.useState(!1),u="horizontal"===e.orientation,c=Y(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;s(u?e:t)}},10);return B(r.viewport,c),B(r.content,c),(0,p.jsx)(l.z,{present:o||a,children:(0,p.jsx)(N,{"data-state":a?"visible":"hidden",...i,ref:t})})}),N=n.forwardRef((e,t)=>{let{orientation:r="vertical",...o}=e,l=b(S,e.__scopeScrollArea),i=n.useRef(null),a=n.useRef(0),[s,u]=n.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),c=U(s.viewport,s.content),d={...o,sizes:s,onSizesChange:u,hasThumb:!!(c>0&&c<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:e=>a.current=e};function f(e,t){return function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ltr",o=V(r),l=t||o/2,i=r.scrollbar.paddingStart+l,a=r.scrollbar.size-r.scrollbar.paddingEnd-(o-l),s=r.content-r.viewport;return H([i,a],"ltr"===n?[0,s]:[-1*s,0])(e)}(e,a.current,s,t)}return"horizontal"===r?(0,p.jsx)(M,{...d,ref:t,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=k(l.viewport.scrollLeft,s,l.dir);i.current.style.transform="translate3d(".concat(e,"px, 0, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollLeft=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollLeft=f(e,l.dir))}}):"vertical"===r?(0,p.jsx)(P,{...d,ref:t,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=k(l.viewport.scrollTop,s);i.current.style.transform="translate3d(0, ".concat(e,"px, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollTop=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollTop=f(e))}}):null}),M=n.forwardRef((e,t)=>{let{sizes:r,onSizesChange:o,...l}=e,i=b(S,e.__scopeScrollArea),[s,u]=n.useState(),c=n.useRef(null),d=(0,a.e)(t,c,i.onScrollbarXChange);return n.useEffect(()=>{c.current&&u(getComputedStyle(c.current))},[c]),(0,p.jsx)(A,{"data-orientation":"horizontal",...l,ref:d,sizes:r,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":V(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(i.viewport){let n=i.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),function(e,t){return e>0&&e<t}(n,r)&&t.preventDefault()}},onResize:()=>{c.current&&i.viewport&&s&&o({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:c.current.clientWidth,paddingStart:z(s.paddingLeft),paddingEnd:z(s.paddingRight)}})}})}),P=n.forwardRef((e,t)=>{let{sizes:r,onSizesChange:o,...l}=e,i=b(S,e.__scopeScrollArea),[s,u]=n.useState(),c=n.useRef(null),d=(0,a.e)(t,c,i.onScrollbarYChange);return n.useEffect(()=>{c.current&&u(getComputedStyle(c.current))},[c]),(0,p.jsx)(A,{"data-orientation":"vertical",...l,ref:d,sizes:r,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":V(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(i.viewport){let n=i.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),function(e,t){return e>0&&e<t}(n,r)&&t.preventDefault()}},onResize:()=>{c.current&&i.viewport&&s&&o({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:c.current.clientHeight,paddingStart:z(s.paddingTop),paddingEnd:z(s.paddingBottom)}})}})}),[_,j]=m(S),A=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,sizes:l,hasThumb:i,onThumbChange:u,onThumbPointerUp:c,onThumbPointerDown:d,onThumbPositionChange:v,onDragScroll:m,onWheelScroll:h,onResize:w,...g}=e,y=b(S,r),[x,E]=n.useState(null),R=(0,a.e)(t,e=>E(e)),C=n.useRef(null),T=n.useRef(""),N=y.viewport,M=l.content-l.viewport,P=(0,s.W)(h),j=(0,s.W)(v),A=Y(w,10);function D(e){C.current&&m({x:e.clientX-C.current.left,y:e.clientY-C.current.top})}return n.useEffect(()=>{let e=e=>{let t=e.target;(null==x?void 0:x.contains(t))&&P(e,M)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[N,x,M,P]),n.useEffect(j,[l,j]),B(x,A),B(y.content,A),(0,p.jsx)(_,{scope:r,scrollbar:x,hasThumb:i,onThumbChange:(0,s.W)(u),onThumbPointerUp:(0,s.W)(c),onThumbPositionChange:j,onThumbPointerDown:(0,s.W)(d),children:(0,p.jsx)(o.WV.div,{...g,ref:R,style:{position:"absolute",...g.style},onPointerDown:(0,f.M)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),C.current=x.getBoundingClientRect(),T.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",y.viewport&&(y.viewport.style.scrollBehavior="auto"),D(e))}),onPointerMove:(0,f.M)(e.onPointerMove,D),onPointerUp:(0,f.M)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=T.current,y.viewport&&(y.viewport.style.scrollBehavior=""),C.current=null})})})}),D="ScrollAreaThumb",L=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,o=j(D,e.__scopeScrollArea);return(0,p.jsx)(l.z,{present:r||o.hasThumb,children:(0,p.jsx)(I,{ref:t,...n})})}),I=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,style:l,...i}=e,s=b(D,r),u=j(D,r),{onThumbPositionChange:c}=u,d=(0,a.e)(t,e=>u.onThumbChange(e)),v=n.useRef(),m=Y(()=>{v.current&&(v.current(),v.current=void 0)},100);return n.useEffect(()=>{let e=s.viewport;if(e){let t=()=>{if(m(),!v.current){let t=X(e,c);v.current=t,c()}};return c(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[s.viewport,m,c]),(0,p.jsx)(o.WV.div,{"data-state":u.hasThumb?"visible":"hidden",...i,ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:(0,f.M)(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top;u.onThumbPointerDown({x:r,y:n})}),onPointerUp:(0,f.M)(e.onPointerUp,u.onThumbPointerUp)})});L.displayName=D;var W="ScrollAreaCorner",O=n.forwardRef((e,t)=>{let r=b(W,e.__scopeScrollArea),n=!!(r.scrollbarX&&r.scrollbarY);return"scroll"!==r.type&&n?(0,p.jsx)(F,{...e,ref:t}):null});O.displayName=W;var F=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,...l}=e,i=b(W,r),[a,s]=n.useState(0),[u,c]=n.useState(0),d=!!(a&&u);return B(i.scrollbarX,()=>{var e;let t=(null===(e=i.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;i.onCornerHeightChange(t),c(t)}),B(i.scrollbarY,()=>{var e;let t=(null===(e=i.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;i.onCornerWidthChange(t),s(t)}),d?(0,p.jsx)(o.WV.div,{...l,ref:t,style:{width:a,height:u,position:"absolute",right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:0,...e.style}}):null});function z(e){return e?parseInt(e,10):0}function U(e,t){let r=e/t;return isNaN(r)?0:r}function V(e){let t=U(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-r)*t,18)}function k(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=V(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-o,i=t.content-t.viewport,a=(0,d.u)(e,"ltr"===r?[0,i]:[-1*i,0]);return H([0,i],[0,l-n])(a)}function H(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}var X=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},r={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},i=r.left!==l.left,a=r.top!==l.top;(i||a)&&t(),r=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function Y(e,t){let r=(0,s.W)(e),o=n.useRef(0);return n.useEffect(()=>()=>window.clearTimeout(o.current),[]),n.useCallback(()=>{window.clearTimeout(o.current),o.current=window.setTimeout(r,t)},[r,t])}function B(e,t){let r=(0,s.W)(t);(0,c.b)(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}var K=g,$=x,q=O},7239:(e,t,r)=>{r.d(t,{VY:()=>q,aV:()=>K,fC:()=>B,xz:()=>$});var n=r(2265),o=r(8149),l=r(8324),i=r(6402),a=r(1584),s=r(7437),u=r(3201),c=r(5171),d=r(5137),f=r(1715),p=r(7513),v="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},h="RovingFocusGroup",[w,b,g]=(0,i.B)(h),[y,x]=function(e,t=[]){let r=[],o=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return o.scopeName=e,[function(t,o){let l=n.createContext(o),i=r.length;function a(t){let{scope:r,children:o,...a}=t,u=r?.[e][i]||l,c=n.useMemo(()=>a,Object.values(a));return(0,s.jsx)(u.Provider,{value:c,children:o})}return r=[...r,o],a.displayName=t+"Provider",[a,function(r,a){let s=a?.[e][i]||l,u=n.useContext(s);if(u)return u;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(o,...t)]}(h,[g]),[S,E]=y(h),R=n.forwardRef((e,t)=>(0,s.jsx)(w.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,s.jsx)(w.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,s.jsx)(C,{...e,ref:t})})}));R.displayName=h;var C=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:l,loop:i=!1,dir:u,currentTabStopId:h,defaultCurrentTabStopId:w,onCurrentTabStopIdChange:g,onEntryFocus:y,preventScrollOnEntryFocus:x=!1,...E}=e,R=n.useRef(null),C=(0,a.e)(t,R),T=(0,p.gm)(u),[N=null,M]=(0,f.T)({prop:h,defaultProp:w,onChange:g}),[_,j]=n.useState(!1),A=(0,d.W)(y),D=b(r),L=n.useRef(!1),[I,W]=n.useState(0);return n.useEffect(()=>{let e=R.current;if(e)return e.addEventListener(v,A),()=>e.removeEventListener(v,A)},[A]),(0,s.jsx)(S,{scope:r,orientation:l,dir:T,loop:i,currentTabStopId:N,onItemFocus:n.useCallback(e=>M(e),[M]),onItemShiftTab:n.useCallback(()=>j(!0),[]),onFocusableItemAdd:n.useCallback(()=>W(e=>e+1),[]),onFocusableItemRemove:n.useCallback(()=>W(e=>e-1),[]),children:(0,s.jsx)(c.WV.div,{tabIndex:_||0===I?-1:0,"data-orientation":l,...E,ref:C,style:{outline:"none",...e.style},onMouseDown:(0,o.M)(e.onMouseDown,()=>{L.current=!0}),onFocus:(0,o.M)(e.onFocus,e=>{let t=!L.current;if(e.target===e.currentTarget&&t&&!_){let t=new CustomEvent(v,m);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=D().filter(e=>e.focusable);P([e.find(e=>e.active),e.find(e=>e.id===N),...e].filter(Boolean).map(e=>e.ref.current),x)}}L.current=!1}),onBlur:(0,o.M)(e.onBlur,()=>j(!1))})})}),T="RovingFocusGroupItem",N=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:l=!0,active:i=!1,tabStopId:a,...d}=e,f=(0,u.M)(),p=a||f,v=E(T,r),m=v.currentTabStopId===p,h=b(r),{onFocusableItemAdd:g,onFocusableItemRemove:y}=v;return n.useEffect(()=>{if(l)return g(),()=>y()},[l,g,y]),(0,s.jsx)(w.ItemSlot,{scope:r,id:p,focusable:l,active:i,children:(0,s.jsx)(c.WV.span,{tabIndex:m?0:-1,"data-orientation":v.orientation,...d,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{l?v.onItemFocus(p):e.preventDefault()}),onFocus:(0,o.M)(e.onFocus,()=>v.onItemFocus(p)),onKeyDown:(0,o.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){v.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return M[o]}(e,v.orientation,v.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=h().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){"prev"===t&&r.reverse();let n=r.indexOf(e.currentTarget);r=v.loop?function(e,t){return e.map((r,n)=>e[(t+n)%e.length])}(r,n+1):r.slice(n+1)}setTimeout(()=>P(r))}})})})});N.displayName=T;var M={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function P(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var _=r(1383),j="Tabs",[A,D]=(0,l.b)(j,[x]),L=x(),[I,W]=A(j),O=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:n,onValueChange:o,defaultValue:l,orientation:i="horizontal",dir:a,activationMode:d="automatic",...v}=e,m=(0,p.gm)(a),[h,w]=(0,f.T)({prop:n,onChange:o,defaultProp:l});return(0,s.jsx)(I,{scope:r,baseId:(0,u.M)(),value:h,onValueChange:w,orientation:i,dir:m,activationMode:d,children:(0,s.jsx)(c.WV.div,{dir:m,"data-orientation":i,...v,ref:t})})});O.displayName=j;var F="TabsList",z=n.forwardRef((e,t)=>{let{__scopeTabs:r,loop:n=!0,...o}=e,l=W(F,r),i=L(r);return(0,s.jsx)(R,{asChild:!0,...i,orientation:l.orientation,dir:l.dir,loop:n,children:(0,s.jsx)(c.WV.div,{role:"tablist","aria-orientation":l.orientation,...o,ref:t})})});z.displayName=F;var U="TabsTrigger",V=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:n,disabled:l=!1,...i}=e,a=W(U,r),u=L(r),d=X(a.baseId,n),f=Y(a.baseId,n),p=n===a.value;return(0,s.jsx)(N,{asChild:!0,...u,focusable:!l,active:p,children:(0,s.jsx)(c.WV.button,{type:"button",role:"tab","aria-selected":p,"aria-controls":f,"data-state":p?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:d,...i,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{l||0!==e.button||!1!==e.ctrlKey?e.preventDefault():a.onValueChange(n)}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&a.onValueChange(n)}),onFocus:(0,o.M)(e.onFocus,()=>{let e="manual"!==a.activationMode;p||l||!e||a.onValueChange(n)})})})});V.displayName=U;var k="TabsContent",H=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:o,forceMount:l,children:i,...a}=e,u=W(k,r),d=X(u.baseId,o),f=Y(u.baseId,o),p=o===u.value,v=n.useRef(p);return n.useEffect(()=>{let e=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,s.jsx)(_.z,{present:l||p,children:r=>{let{present:n}=r;return(0,s.jsx)(c.WV.div,{"data-state":p?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":d,hidden:!n,id:f,tabIndex:0,...a,ref:t,style:{...e.style,animationDuration:v.current?"0s":void 0},children:n&&i})}})});function X(e,t){return"".concat(e,"-trigger-").concat(t)}function Y(e,t){return"".concat(e,"-content-").concat(t)}H.displayName=k;var B=O,K=z,$=V,q=H}}]);