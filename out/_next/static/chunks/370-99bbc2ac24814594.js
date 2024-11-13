"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[370],{8369:(e,t,n)=>{n.d(t,{Ry:()=>c});var r=new WeakMap,o=new WeakMap,u={},a=0,l=function(e){return e&&(e.host||l(e.parentNode))},i=function(e,t,n,i){var c=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=l(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});u[n]||(u[n]=new WeakMap);var s=u[n],d=[],f=new Set,v=new Set(c),p=function(e){!e||f.has(e)||(f.add(e),p(e.parentNode))};c.forEach(p);var m=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))m(e);else try{var t=e.getAttribute(i),u=null!==t&&"false"!==t,a=(r.get(e)||0)+1,l=(s.get(e)||0)+1;r.set(e,a),s.set(e,l),d.push(e),1===a&&u&&o.set(e,!0),1===l&&e.setAttribute(n,"true"),u||e.setAttribute(i,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return m(t),f.clear(),a++,function(){d.forEach(function(e){var t=r.get(e)-1,u=s.get(e)-1;r.set(e,t),s.set(e,u),t||(o.has(e)||e.removeAttribute(i),o.delete(e)),u||e.removeAttribute(n)}),--a||(r=new WeakMap,r=new WeakMap,o=new WeakMap,u={})}},c=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r,o=Array.from(Array.isArray(e)?e:[e]),u=t||(r=e,"undefined"==typeof document?null:(Array.isArray(r)?r[0]:r).ownerDocument.body);return u?(o.push.apply(o,Array.from(u.querySelectorAll("[aria-live]"))),i(o,u,n,"aria-hidden")):function(){return null}}},5905:(e,t,n)=>{n.d(t,{V:()=>o});var r,o=function(){return r||n.nc}},589:(e,t,n)=>{n.d(t,{EW:()=>u});var r=n(2265),o=0;function u(){r.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:a()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:a()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function a(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}},467:(e,t,n)=>{n.d(t,{M:()=>d});var r=n(2265),o=n(1584),u=n(5171),a=n(5137),l=n(7437),i="focusScope.autoFocusOnMount",c="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},d=r.forwardRef((e,t)=>{let{loop:n=!1,trapped:d=!1,onMountAutoFocus:y,onUnmountAutoFocus:b,...h}=e,[E,g]=r.useState(null),A=(0,a.W)(y),O=(0,a.W)(b),w=r.useRef(null),N=(0,o.e)(t,e=>g(e)),S=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(d){let e=function(e){if(S.paused||!E)return;let t=e.target;E.contains(t)?w.current=t:p(w.current,{select:!0})},t=function(e){if(S.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||p(w.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&p(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[d,E,S.paused]),r.useEffect(()=>{if(E){m.add(S);let e=document.activeElement;if(!E.contains(e)){let t=new CustomEvent(i,s);E.addEventListener(i,A),E.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(p(r,{select:t}),document.activeElement!==n)return}(f(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&p(E))}return()=>{E.removeEventListener(i,A),setTimeout(()=>{let t=new CustomEvent(c,s);E.addEventListener(c,O),E.dispatchEvent(t),t.defaultPrevented||p(null!=e?e:document.body,{select:!0}),E.removeEventListener(c,O),m.remove(S)},0)}}},[E,A,O,S]);let j=r.useCallback(e=>{if(!n&&!d||S.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(t&&r){let t=e.currentTarget,[o,u]=function(e){let t=f(e);return[v(t,e),v(t.reverse(),e)]}(t);o&&u?e.shiftKey||r!==u?e.shiftKey&&r===o&&(e.preventDefault(),n&&p(u,{select:!0})):(e.preventDefault(),n&&p(o,{select:!0})):r===t&&e.preventDefault()}},[n,d,S.paused]);return(0,l.jsx)(u.WV.div,{tabIndex:-1,...h,ref:N,onKeyDown:j})});function f(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function v(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function p(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}d.displayName="FocusScope";var m=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=y(e,t)).unshift(t)},remove(t){var n;null===(n=(e=y(e,t))[0])||void 0===n||n.resume()}}}();function y(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},2218:(e,t,n)=>{n.d(t,{j:()=>u});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r},u=(e,t)=>n=>{var u;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:a,defaultVariants:l}=t,i=Object.keys(a).map(e=>{let t=null==n?void 0:n[e],o=null==l?void 0:l[e];if(null===t)return null;let u=r(t)||r(o);return a[e][u]}),c=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return o(e,i,null==t?void 0:null===(u=t.compoundVariants)||void 0===u?void 0:u.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...l,...c}[t]):({...l,...c})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}},1735:(e,t,n)=>{n.d(t,{_T:()=>o,ev:()=>u,pi:()=>r});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function u(e,t,n){if(n||2==arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);