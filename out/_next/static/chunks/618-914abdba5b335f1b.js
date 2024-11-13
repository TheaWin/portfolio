"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[618],{3938:(e,t,r)=>{r.d(t,{XB:()=>v});var n,o=r(2265),i=r(8149),l=r(5171),s=r(1584),a=r(5137),u=r(7437),c="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),v=o.forwardRef((e,t)=>{var r,v;let{disableOutsidePointerEvents:y=!1,onEscapeKeyDown:b,onPointerDownOutside:m,onFocusOutside:h,onInteractOutside:E,onDismiss:w,...O}=e,g=o.useContext(d),[P,j]=o.useState(null),C=null!==(v=null==P?void 0:P.ownerDocument)&&void 0!==v?v:null===(r=globalThis)||void 0===r?void 0:r.document,[,D]=o.useState({}),L=(0,s.e)(t,e=>j(e)),W=Array.from(g.layers),[k]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),x=W.indexOf(k),N=P?W.indexOf(P):-1,S=g.layersWithOutsidePointerEventsDisabled.size>0,T=N>=x,R=function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,n=(0,a.W)(e),i=o.useRef(!1),l=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){p("dismissableLayer.pointerDownOutside",n,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(r.removeEventListener("click",l.current),l.current=t,r.addEventListener("click",l.current,{once:!0})):t()}else r.removeEventListener("click",l.current);i.current=!1},t=window.setTimeout(()=>{r.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),r.removeEventListener("pointerdown",e),r.removeEventListener("click",l.current)}},[r,n]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,r=[...g.branches].some(e=>e.contains(t));!T||r||(null==m||m(e),null==E||E(e),e.defaultPrevented||null==w||w())},C),z=function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,n=(0,a.W)(e),i=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!i.current&&p("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return r.addEventListener("focusin",e),()=>r.removeEventListener("focusin",e)},[r,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...g.branches].some(e=>e.contains(t))||(null==h||h(e),null==E||E(e),e.defaultPrevented||null==w||w())},C);return!function(e,t=globalThis?.document){let r=(0,a.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&r(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[r,t])}(e=>{N!==g.layers.size-1||(null==b||b(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},C),o.useEffect(()=>{if(P)return y&&(0===g.layersWithOutsidePointerEventsDisabled.size&&(n=C.body.style.pointerEvents,C.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(P)),g.layers.add(P),f(),()=>{y&&1===g.layersWithOutsidePointerEventsDisabled.size&&(C.body.style.pointerEvents=n)}},[P,C,y,g]),o.useEffect(()=>()=>{P&&(g.layers.delete(P),g.layersWithOutsidePointerEventsDisabled.delete(P),f())},[P,g]),o.useEffect(()=>{let e=()=>D({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,u.jsx)(l.WV.div,{...O,ref:L,style:{pointerEvents:S?T?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,z.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,z.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,R.onPointerDownCapture)})});function f(){let e=new CustomEvent(c);document.dispatchEvent(e)}function p(e,t,r,n){let{discrete:o}=n,i=r.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&i.addEventListener(e,t,{once:!0}),o?(0,l.jH)(i,s):i.dispatchEvent(s)}v.displayName="DismissableLayer",o.forwardRef((e,t)=>{let r=o.useContext(d),n=o.useRef(null),i=(0,s.e)(t,n);return o.useEffect(()=>{let e=n.current;if(e)return r.branches.add(e),()=>{r.branches.delete(e)}},[r.branches]),(0,u.jsx)(l.WV.div,{...e,ref:i})}).displayName="DismissableLayerBranch"},6935:(e,t,r)=>{r.d(t,{h:()=>a});var n=r(2265),o=r(4887),i=r(5171),l=r(1336),s=r(7437),a=n.forwardRef((e,t)=>{var r,a;let{container:u,...c}=e,[d,v]=n.useState(!1);(0,l.b)(()=>v(!0),[]);let f=u||d&&(null===(a=globalThis)||void 0===a?void 0:null===(r=a.document)||void 0===r?void 0:r.body);return f?o.createPortal((0,s.jsx)(i.WV.div,{...c,ref:t}),f):null});a.displayName="Portal"},1725:(e,t,r)=>{r.d(t,{T:()=>l,f:()=>s});var n=r(2265),o=r(5171),i=r(7437),l=n.forwardRef((e,t)=>(0,i.jsx)(o.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));l.displayName="VisuallyHidden";var s=l},1810:(e,t,r)=>{r.d(t,{w_:()=>c});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),l=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return t=>n.createElement(d,s({attr:u({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,u({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:o,size:i,title:a}=e,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l),d=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}}]);