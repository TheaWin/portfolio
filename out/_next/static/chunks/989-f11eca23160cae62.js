"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{6989:(e,t,n)=>{n.d(t,{ee:()=>eq,Eh:()=>eJ,VY:()=>eG,fC:()=>eX,D7:()=>eP});var r=n(2265);let i=["top","right","bottom","left"],o=Math.min,l=Math.max,a=Math.round,f=Math.floor,u=e=>({x:e,y:e}),c={left:"right",right:"left",bottom:"top",top:"bottom"},s={start:"end",end:"start"};function d(e,t){return"function"==typeof e?e(t):e}function p(e){return e.split("-")[0]}function h(e){return e.split("-")[1]}function m(e){return"x"===e?"y":"x"}function g(e){return"y"===e?"height":"width"}function y(e){return["top","bottom"].includes(p(e))?"y":"x"}function w(e){return e.replace(/start|end/g,e=>s[e])}function v(e){return e.replace(/left|right|bottom|top/g,e=>c[e])}function x(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function b(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function A(e,t,n){let r,{reference:i,floating:o}=e,l=y(t),a=m(y(t)),f=g(a),u=p(t),c="y"===l,s=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,w=i[f]/2-o[f]/2;switch(u){case"top":r={x:s,y:i.y-o.height};break;case"bottom":r={x:s,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:d};break;case"left":r={x:i.x-o.width,y:d};break;default:r={x:i.x,y:i.y}}switch(h(t)){case"start":r[a]-=w*(n&&c?-1:1);break;case"end":r[a]+=w*(n&&c?-1:1)}return r}let R=async(e,t,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=n,a=o.filter(Boolean),f=await (null==l.isRTL?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:c,y:s}=A(u,r,f),d=r,p={},h=0;for(let n=0;n<a.length;n++){let{name:o,fn:m}=a[n],{x:g,y:y,data:w,reset:v}=await m({x:c,y:s,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:u,platform:l,elements:{reference:e,floating:t}});c=null!=g?g:c,s=null!=y?y:s,p={...p,[o]:{...p[o],...w}},v&&h<=50&&(h++,"object"==typeof v&&(v.placement&&(d=v.placement),v.rects&&(u=!0===v.rects?await l.getElementRects({reference:e,floating:t,strategy:i}):v.rects),{x:c,y:s}=A(u,d,f)),n=-1)}return{x:c,y:s,placement:d,strategy:i,middlewareData:p}};async function E(e,t){var n;void 0===t&&(t={});let{x:r,y:i,platform:o,rects:l,elements:a,strategy:f}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:s="floating",altBoundary:p=!1,padding:h=0}=d(t,e),m=x(h),g=a[p?"floating"===s?"reference":"floating":s],y=b(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(g)))||n?g:g.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:u,rootBoundary:c,strategy:f})),w="floating"===s?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,v=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),A=await (null==o.isElement?void 0:o.isElement(v))&&await (null==o.getScale?void 0:o.getScale(v))||{x:1,y:1},R=b(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:v,strategy:f}):w);return{top:(y.top-R.top+m.top)/A.y,bottom:(R.bottom-y.bottom+m.bottom)/A.y,left:(y.left-R.left+m.left)/A.x,right:(R.right-y.right+m.right)/A.x}}function L(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function S(e){return i.some(t=>e[t]>=0)}async function T(e,t){let{placement:n,platform:r,elements:i}=e,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),l=p(n),a=h(n),f="y"===y(n),u=["left","top"].includes(l)?-1:1,c=o&&f?-1:1,s=d(t,e),{mainAxis:m,crossAxis:g,alignmentAxis:w}="number"==typeof s?{mainAxis:s,crossAxis:0,alignmentAxis:null}:{mainAxis:s.mainAxis||0,crossAxis:s.crossAxis||0,alignmentAxis:s.alignmentAxis};return a&&"number"==typeof w&&(g="end"===a?-1*w:w),f?{x:g*c,y:m*u}:{x:m*u,y:g*c}}function C(){return"undefined"!=typeof window}function O(e){return H(e)?(e.nodeName||"").toLowerCase():"#document"}function P(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function k(e){var t;return null==(t=(H(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function H(e){return!!C()&&(e instanceof Node||e instanceof P(e).Node)}function D(e){return!!C()&&(e instanceof Element||e instanceof P(e).Element)}function N(e){return!!C()&&(e instanceof HTMLElement||e instanceof P(e).HTMLElement)}function W(e){return!!C()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof P(e).ShadowRoot)}function j(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=_(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function M(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch(e){return!1}})}function F(e){let t=V(),n=D(e)?_(e):e;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function V(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function z(e){return["html","body","#document"].includes(O(e))}function _(e){return P(e).getComputedStyle(e)}function B(e){return D(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function $(e){if("html"===O(e))return e;let t=e.assignedSlot||e.parentNode||W(e)&&e.host||k(e);return W(t)?t.host:t}function Y(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let i=function e(t){let n=$(t);return z(n)?t.ownerDocument?t.ownerDocument.body:t.body:N(n)&&j(n)?n:e(n)}(e),o=i===(null==(r=e.ownerDocument)?void 0:r.body),l=P(i);if(o){let e=I(l);return t.concat(l,l.visualViewport||[],j(i)?i:[],e&&n?Y(e):[])}return t.concat(i,Y(i,[],n))}function I(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function X(e){let t=_(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=N(e),o=i?e.offsetWidth:n,l=i?e.offsetHeight:r,f=a(n)!==o||a(r)!==l;return f&&(n=o,r=l),{width:n,height:r,$:f}}function q(e){return D(e)?e:e.contextElement}function G(e){let t=q(e);if(!N(t))return u(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:o}=X(t),l=(o?a(n.width):n.width)/r,f=(o?a(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),f&&Number.isFinite(f)||(f=1),{x:l,y:f}}let J=u(0);function K(e){let t=P(e);return V()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:J}function Q(e,t,n,r){var i;void 0===t&&(t=!1),void 0===n&&(n=!1);let o=e.getBoundingClientRect(),l=q(e),a=u(1);t&&(r?D(r)&&(a=G(r)):a=G(e));let f=(void 0===(i=n)&&(i=!1),r&&(!i||r===P(l))&&i)?K(l):u(0),c=(o.left+f.x)/a.x,s=(o.top+f.y)/a.y,d=o.width/a.x,p=o.height/a.y;if(l){let e=P(l),t=r&&D(r)?P(r):r,n=e,i=I(n);for(;i&&r&&t!==n;){let e=G(i),t=i.getBoundingClientRect(),r=_(i),o=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,s*=e.y,d*=e.x,p*=e.y,c+=o,s+=l,i=I(n=P(i))}}return b({width:d,height:p,x:c,y:s})}function U(e,t){let n=B(e).scrollLeft;return t?t.left+n:Q(k(e)).left+n}function Z(e,t,n){void 0===n&&(n=!1);let r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-(n?0:U(e,r)),y:r.top+t.scrollTop}}function ee(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=P(e),r=k(e),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,a=0,f=0;if(i){o=i.width,l=i.height;let e=V();(!e||e&&"fixed"===t)&&(a=i.offsetLeft,f=i.offsetTop)}return{width:o,height:l,x:a,y:f}}(e,n);else if("document"===t)r=function(e){let t=k(e),n=B(e),r=e.ownerDocument.body,i=l(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=l(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+U(e),f=-n.scrollTop;return"rtl"===_(r).direction&&(a+=l(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:f}}(k(e));else if(D(t))r=function(e,t){let n=Q(e,!0,"fixed"===t),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=N(e)?G(e):u(1),l=e.clientWidth*o.x;return{width:l,height:e.clientHeight*o.y,x:i*o.x,y:r*o.y}}(t,n);else{let n=K(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return b(r)}function et(e){return"static"===_(e).position}function en(e,t){if(!N(e)||"fixed"===_(e).position)return null;if(t)return t(e);let n=e.offsetParent;return k(e)===n&&(n=n.ownerDocument.body),n}function er(e,t){let n=P(e);if(M(e))return n;if(!N(e)){let t=$(e);for(;t&&!z(t);){if(D(t)&&!et(t))return t;t=$(t)}return n}let r=en(e,t);for(;r&&["table","td","th"].includes(O(r))&&et(r);)r=en(r,t);return r&&z(r)&&et(r)&&!F(r)?n:r||function(e){let t=$(e);for(;N(t)&&!z(t);){if(F(t))return t;if(M(t))break;t=$(t)}return null}(e)||n}let ei=async function(e){let t=this.getOffsetParent||er,n=this.getDimensions,r=await n(e.floating);return{reference:function(e,t,n){let r=N(t),i=k(t),o="fixed"===n,l=Q(e,!0,o,t),a={scrollLeft:0,scrollTop:0},f=u(0);if(r||!r&&!o){if(("body"!==O(t)||j(i))&&(a=B(t)),r){let e=Q(t,!0,o,t);f.x=e.x+t.clientLeft,f.y=e.y+t.clientTop}else i&&(f.x=U(i))}let c=!i||r||o?u(0):Z(i,a);return{x:l.left+a.scrollLeft-f.x-c.x,y:l.top+a.scrollTop-f.y-c.y,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},eo={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,o="fixed"===i,l=k(r),a=!!t&&M(t.floating);if(r===l||a&&o)return n;let f={scrollLeft:0,scrollTop:0},c=u(1),s=u(0),d=N(r);if((d||!d&&!o)&&(("body"!==O(r)||j(l))&&(f=B(r)),N(r))){let e=Q(r);c=G(r),s.x=e.x+r.clientLeft,s.y=e.y+r.clientTop}let p=!l||d||o?u(0):Z(l,f,!0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-f.scrollLeft*c.x+s.x+p.x,y:n.y*c.y-f.scrollTop*c.y+s.y+p.y}},getDocumentElement:k,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[..."clippingAncestors"===n?M(t)?[]:function(e,t){let n=t.get(e);if(n)return n;let r=Y(e,[],!1).filter(e=>D(e)&&"body"!==O(e)),i=null,o="fixed"===_(e).position,l=o?$(e):e;for(;D(l)&&!z(l);){let t=_(l),n=F(l);n||"fixed"!==t.position||(i=null),(o?!n&&!i:!n&&"static"===t.position&&!!i&&["absolute","fixed"].includes(i.position)||j(l)&&!n&&function e(t,n){let r=$(t);return!(r===n||!D(r)||z(r))&&("fixed"===_(r).position||e(r,n))}(e,l))?r=r.filter(e=>e!==l):i=t,l=$(l)}return t.set(e,r),r}(t,this._c):[].concat(n),r],f=a[0],u=a.reduce((e,n)=>{let r=ee(t,n,i);return e.top=l(r.top,e.top),e.right=o(r.right,e.right),e.bottom=o(r.bottom,e.bottom),e.left=l(r.left,e.left),e},ee(t,f,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},getOffsetParent:er,getElementRects:ei,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:n}=X(e);return{width:t,height:n}},getScale:G,isElement:D,isRTL:function(e){return"rtl"===_(e).direction}},el=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:f,elements:u,middlewareData:c}=t,{element:s,padding:p=0}=d(e,t)||{};if(null==s)return{};let w=x(p),v={x:n,y:r},b=m(y(i)),A=g(b),R=await f.getDimensions(s),E="y"===b,L=E?"clientHeight":"clientWidth",S=a.reference[A]+a.reference[b]-v[b]-a.floating[A],T=v[b]-a.reference[b],C=await (null==f.getOffsetParent?void 0:f.getOffsetParent(s)),O=C?C[L]:0;O&&await (null==f.isElement?void 0:f.isElement(C))||(O=u.floating[L]||a.floating[A]);let P=O/2-R[A]/2-1,k=o(w[E?"top":"left"],P),H=o(w[E?"bottom":"right"],P),D=O-R[A]-H,N=O/2-R[A]/2+(S/2-T/2),W=l(k,o(N,D)),j=!c.arrow&&null!=h(i)&&N!==W&&a.reference[A]/2-(N<k?k:H)-R[A]/2<0,M=j?N<k?N-k:N-D:0;return{[b]:v[b]+M,data:{[b]:W,centerOffset:N-W-M,...j&&{alignmentOffset:M}},reset:j}}}),ea=(e,t,n)=>{let r=new Map,i={platform:eo,...n},o={...i.platform,_c:r};return R(e,t,{...i,platform:o})};var ef=n(4887),eu="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;function ec(e,t){let n,r,i;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!==t.length)return!1;for(r=n;0!=r--;)if(!ec(e[r],t[r]))return!1;return!0}if((n=(i=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,i[r]))return!1;for(r=n;0!=r--;){let n=i[r];if(("_owner"!==n||!e.$$typeof)&&!ec(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function es(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ed(e,t){let n=es(e);return Math.round(t*n)/n}function ep(e){let t=r.useRef(e);return eu(()=>{t.current=e}),t}let eh=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?el({element:n.current,padding:r}).fn(t):{}:n?el({element:n,padding:r}).fn(t):{}}}),em=(e,t)=>({...function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;let{x:i,y:o,placement:l,middlewareData:a}=t,f=await T(t,e);return l===(null==(n=a.offset)?void 0:n.placement)&&null!=(r=a.arrow)&&r.alignmentOffset?{}:{x:i+f.x,y:o+f.y,data:{...f,placement:l}}}}}(e),options:[e,t]}),eg=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:f=!1,limiter:u={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=d(e,t),s={x:n,y:r},h=await E(t,c),g=y(p(i)),w=m(g),v=s[w],x=s[g];if(a){let e="y"===w?"top":"left",t="y"===w?"bottom":"right",n=v+h[e],r=v-h[t];v=l(n,o(v,r))}if(f){let e="y"===g?"top":"left",t="y"===g?"bottom":"right",n=x+h[e],r=x-h[t];x=l(n,o(x,r))}let b=u.fn({...t,[w]:v,[g]:x});return{...b,data:{x:b.x-n,y:b.y-r,enabled:{[w]:a,[g]:f}}}}}}(e),options:[e,t]}),ey=(e,t)=>({...function(e){return void 0===e&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:i,rects:o,middlewareData:l}=t,{offset:a=0,mainAxis:f=!0,crossAxis:u=!0}=d(e,t),c={x:n,y:r},s=y(i),h=m(s),g=c[h],w=c[s],v=d(a,t),x="number"==typeof v?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(f){let e="y"===h?"height":"width",t=o.reference[h]-o.floating[e]+x.mainAxis,n=o.reference[h]+o.reference[e]-x.mainAxis;g<t?g=t:g>n&&(g=n)}if(u){var b,A;let e="y"===h?"width":"height",t=["top","left"].includes(p(i)),n=o.reference[s]-o.floating[e]+(t&&(null==(b=l.offset)?void 0:b[s])||0)+(t?0:x.crossAxis),r=o.reference[s]+o.reference[e]+(t?0:(null==(A=l.offset)?void 0:A[s])||0)-(t?x.crossAxis:0);w<n?w=n:w>r&&(w=r)}return{[h]:g,[s]:w}}}}(e),options:[e,t]}),ew=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r,i,o,l;let{placement:a,middlewareData:f,rects:u,initialPlacement:c,platform:s,elements:x}=t,{mainAxis:b=!0,crossAxis:A=!0,fallbackPlacements:R,fallbackStrategy:L="bestFit",fallbackAxisSideDirection:S="none",flipAlignment:T=!0,...C}=d(e,t);if(null!=(n=f.arrow)&&n.alignmentOffset)return{};let O=p(a),P=y(c),k=p(c)===c,H=await (null==s.isRTL?void 0:s.isRTL(x.floating)),D=R||(k||!T?[v(c)]:function(e){let t=v(e);return[w(e),t,w(t)]}(c)),N="none"!==S;!R&&N&&D.push(...function(e,t,n,r){let i=h(e),o=function(e,t,n){let r=["left","right"],i=["right","left"];switch(e){case"top":case"bottom":if(n)return t?i:r;return t?r:i;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(p(e),"start"===n,r);return i&&(o=o.map(e=>e+"-"+i),t&&(o=o.concat(o.map(w)))),o}(c,T,S,H));let W=[c,...D],j=await E(t,C),M=[],F=(null==(r=f.flip)?void 0:r.overflows)||[];if(b&&M.push(j[O]),A){let e=function(e,t,n){void 0===n&&(n=!1);let r=h(e),i=m(y(e)),o=g(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[o]>t.floating[o]&&(l=v(l)),[l,v(l)]}(a,u,H);M.push(j[e[0]],j[e[1]])}if(F=[...F,{placement:a,overflows:M}],!M.every(e=>e<=0)){let e=((null==(i=f.flip)?void 0:i.index)||0)+1,t=W[e];if(t)return{data:{index:e,overflows:F},reset:{placement:t}};let n=null==(o=F.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;if(!n)switch(L){case"bestFit":{let e=null==(l=F.filter(e=>{if(N){let t=y(e.placement);return t===P||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(n=e);break}case"initialPlacement":n=c}if(a!==n)return{reset:{placement:n}}}return{}}}}(e),options:[e,t]}),ev=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var n,r;let i,a;let{placement:f,rects:u,platform:c,elements:s}=t,{apply:m=()=>{},...g}=d(e,t),w=await E(t,g),v=p(f),x=h(f),b="y"===y(f),{width:A,height:R}=u.floating;"top"===v||"bottom"===v?(i=v,a=x===(await (null==c.isRTL?void 0:c.isRTL(s.floating))?"start":"end")?"left":"right"):(a=v,i="end"===x?"top":"bottom");let L=R-w.top-w.bottom,S=A-w.left-w.right,T=o(R-w[i],L),C=o(A-w[a],S),O=!t.middlewareData.shift,P=T,k=C;if(null!=(n=t.middlewareData.shift)&&n.enabled.x&&(k=S),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(P=L),O&&!x){let e=l(w.left,0),t=l(w.right,0),n=l(w.top,0),r=l(w.bottom,0);b?k=A-2*(0!==e||0!==t?e+t:l(w.left,w.right)):P=R-2*(0!==n||0!==r?n+r:l(w.top,w.bottom))}await m({...t,availableWidth:k,availableHeight:P});let H=await c.getDimensions(s.floating);return A!==H.width||R!==H.height?{reset:{rects:!0}}:{}}}}(e),options:[e,t]}),ex=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"hide",options:e,async fn(t){let{rects:n}=t,{strategy:r="referenceHidden",...i}=d(e,t);switch(r){case"referenceHidden":{let e=L(await E(t,{...i,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:S(e)}}}case"escaped":{let e=L(await E(t,{...i,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:S(e)}}}default:return{}}}}}(e),options:[e,t]}),eb=(e,t)=>({...eh(e),options:[e,t]});var eA=n(5171),eR=n(7437),eE=r.forwardRef((e,t)=>{let{children:n,width:r=10,height:i=5,...o}=e;return(0,eR.jsx)(eA.WV.svg,{...o,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:(0,eR.jsx)("polygon",{points:"0,0 30,0 15,10"})})});eE.displayName="Arrow";var eL=n(1584),eS=n(5137),eT=n(1336),eC="Popper",[eO,eP]=function(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let i=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:i}}),[n,i])}};return i.scopeName=e,[function(t,i){let o=r.createContext(i),l=n.length;function a(t){let{scope:n,children:i,...a}=t,f=n?.[e][l]||o,u=r.useMemo(()=>a,Object.values(a));return(0,eR.jsx)(f.Provider,{value:u,children:i})}return n=[...n,i],a.displayName=t+"Provider",[a,function(n,a){let f=a?.[e][l]||o,u=r.useContext(f);if(u)return u;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}(i,...t)]}(eC),[ek,eH]=eO(eC),eD=e=>{let{__scopePopper:t,children:n}=e,[i,o]=r.useState(null);return(0,eR.jsx)(ek,{scope:t,anchor:i,onAnchorChange:o,children:n})};eD.displayName=eC;var eN="PopperAnchor",eW=r.forwardRef((e,t)=>{let{__scopePopper:n,virtualRef:i,...o}=e,l=eH(eN,n),a=r.useRef(null),f=(0,eL.e)(t,a);return r.useEffect(()=>{l.onAnchorChange((null==i?void 0:i.current)||a.current)}),i?null:(0,eR.jsx)(eA.WV.div,{...o,ref:f})});eW.displayName=eN;var ej="PopperContent",[eM,eF]=eO(ej),eV=r.forwardRef((e,t)=>{var n,i,a,u,c,s,d,p;let{__scopePopper:h,side:m="bottom",sideOffset:g=0,align:y="center",alignOffset:w=0,arrowPadding:v=0,avoidCollisions:x=!0,collisionBoundary:b=[],collisionPadding:A=0,sticky:R="partial",hideWhenDetached:E=!1,updatePositionStrategy:L="optimized",onPlaced:S,...T}=e,C=eH(ej,h),[O,P]=r.useState(null),H=(0,eL.e)(t,e=>P(e)),[D,N]=r.useState(null),W=function(e){let[t,n]=r.useState(void 0);return(0,eT.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,i;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,i=t.blockSize}else r=e.offsetWidth,i=e.offsetHeight;n({width:r,height:i})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}(D),j=null!==(d=null==W?void 0:W.width)&&void 0!==d?d:0,M=null!==(p=null==W?void 0:W.height)&&void 0!==p?p:0,F="number"==typeof A?A:{top:0,right:0,bottom:0,left:0,...A},V=Array.isArray(b)?b:[b],z=V.length>0,_={padding:F,boundary:V.filter(e$),altBoundary:z},{refs:B,floatingStyles:$,placement:I,isPositioned:X,middlewareData:G}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:i=[],platform:o,elements:{reference:l,floating:a}={},transform:f=!0,whileElementsMounted:u,open:c}=e,[s,d]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=r.useState(i);ec(p,i)||h(i);let[m,g]=r.useState(null),[y,w]=r.useState(null),v=r.useCallback(e=>{e!==R.current&&(R.current=e,g(e))},[]),x=r.useCallback(e=>{e!==E.current&&(E.current=e,w(e))},[]),b=l||m,A=a||y,R=r.useRef(null),E=r.useRef(null),L=r.useRef(s),S=null!=u,T=ep(u),C=ep(o),O=ep(c),P=r.useCallback(()=>{if(!R.current||!E.current)return;let e={placement:t,strategy:n,middleware:p};C.current&&(e.platform=C.current),ea(R.current,E.current,e).then(e=>{let t={...e,isPositioned:!1!==O.current};k.current&&!ec(L.current,t)&&(L.current=t,ef.flushSync(()=>{d(t)}))})},[p,t,n,C,O]);eu(()=>{!1===c&&L.current.isPositioned&&(L.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[c]);let k=r.useRef(!1);eu(()=>(k.current=!0,()=>{k.current=!1}),[]),eu(()=>{if(b&&(R.current=b),A&&(E.current=A),b&&A){if(T.current)return T.current(b,A,P);P()}},[b,A,P,T,S]);let H=r.useMemo(()=>({reference:R,floating:E,setReference:v,setFloating:x}),[v,x]),D=r.useMemo(()=>({reference:b,floating:A}),[b,A]),N=r.useMemo(()=>{let e={position:n,left:0,top:0};if(!D.floating)return e;let t=ed(D.floating,s.x),r=ed(D.floating,s.y);return f?{...e,transform:"translate("+t+"px, "+r+"px)",...es(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,f,D.floating,s.x,s.y]);return r.useMemo(()=>({...s,update:P,refs:H,elements:D,floatingStyles:N}),[s,P,H,D,N])}({strategy:"fixed",placement:m+("center"!==y?"-"+y:""),whileElementsMounted:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,t,n,r){let i;void 0===r&&(r={});let{ancestorScroll:a=!0,ancestorResize:u=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=q(e),h=a||u?[...p?Y(p):[],...Y(t)]:[];h.forEach(e=>{a&&e.addEventListener("scroll",n,{passive:!0}),u&&e.addEventListener("resize",n)});let m=p&&s?function(e,t){let n,r=null,i=k(e);function a(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return!function u(c,s){void 0===c&&(c=!1),void 0===s&&(s=1),a();let{left:d,top:p,width:h,height:m}=e.getBoundingClientRect();if(c||t(),!h||!m)return;let g=f(p),y=f(i.clientWidth-(d+h)),w={rootMargin:-g+"px "+-y+"px "+-f(i.clientHeight-(p+m))+"px "+-f(d)+"px",threshold:l(0,o(1,s))||1},v=!0;function x(e){let t=e[0].intersectionRatio;if(t!==s){if(!v)return u();t?u(!1,t):n=setTimeout(()=>{u(!1,1e-7)},1e3)}v=!1}try{r=new IntersectionObserver(x,{...w,root:i.ownerDocument})}catch(e){r=new IntersectionObserver(x,w)}r.observe(e)}(!0),a}(p,n):null,g=-1,y=null;c&&(y=new ResizeObserver(e=>{let[r]=e;r&&r.target===p&&y&&(y.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var e;null==(e=y)||e.observe(t)})),n()}),p&&!d&&y.observe(p),y.observe(t));let w=d?Q(e):null;return d&&function t(){let r=Q(e);w&&(r.x!==w.x||r.y!==w.y||r.width!==w.width||r.height!==w.height)&&n(),w=r,i=requestAnimationFrame(t)}(),n(),()=>{var e;h.forEach(e=>{a&&e.removeEventListener("scroll",n),u&&e.removeEventListener("resize",n)}),null==m||m(),null==(e=y)||e.disconnect(),y=null,d&&cancelAnimationFrame(i)}}(...t,{animationFrame:"always"===L})},elements:{reference:C.anchor},middleware:[em({mainAxis:g+M,alignmentAxis:w}),x&&eg({mainAxis:!0,crossAxis:!1,limiter:"partial"===R?ey():void 0,..._}),x&&ew({..._}),ev({..._,apply:e=>{let{elements:t,rects:n,availableWidth:r,availableHeight:i}=e,{width:o,height:l}=n.reference,a=t.floating.style;a.setProperty("--radix-popper-available-width","".concat(r,"px")),a.setProperty("--radix-popper-available-height","".concat(i,"px")),a.setProperty("--radix-popper-anchor-width","".concat(o,"px")),a.setProperty("--radix-popper-anchor-height","".concat(l,"px"))}}),D&&eb({element:D,padding:v}),eY({arrowWidth:j,arrowHeight:M}),E&&ex({strategy:"referenceHidden",..._})]}),[J,K]=eI(I),U=(0,eS.W)(S);(0,eT.b)(()=>{X&&(null==U||U())},[X,U]);let Z=null===(n=G.arrow)||void 0===n?void 0:n.x,ee=null===(i=G.arrow)||void 0===i?void 0:i.y,et=(null===(a=G.arrow)||void 0===a?void 0:a.centerOffset)!==0,[en,er]=r.useState();return(0,eT.b)(()=>{O&&er(window.getComputedStyle(O).zIndex)},[O]),(0,eR.jsx)("div",{ref:B.setFloating,"data-radix-popper-content-wrapper":"",style:{...$,transform:X?$.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:en,"--radix-popper-transform-origin":[null===(u=G.transformOrigin)||void 0===u?void 0:u.x,null===(c=G.transformOrigin)||void 0===c?void 0:c.y].join(" "),...(null===(s=G.hide)||void 0===s?void 0:s.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,eR.jsx)(eM,{scope:h,placedSide:J,onArrowChange:N,arrowX:Z,arrowY:ee,shouldHideArrow:et,children:(0,eR.jsx)(eA.WV.div,{"data-side":J,"data-align":K,...T,ref:H,style:{...T.style,animation:X?void 0:"none"}})})})});eV.displayName=ej;var ez="PopperArrow",e_={top:"bottom",right:"left",bottom:"top",left:"right"},eB=r.forwardRef(function(e,t){let{__scopePopper:n,...r}=e,i=eF(ez,n),o=e_[i.placedSide];return(0,eR.jsx)("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:(0,eR.jsx)(eE,{...r,ref:t,style:{...r.style,display:"block"}})})});function e$(e){return null!==e}eB.displayName=ez;var eY=e=>({name:"transformOrigin",options:e,fn(t){var n,r,i,o,l;let{placement:a,rects:f,middlewareData:u}=t,c=(null===(n=u.arrow)||void 0===n?void 0:n.centerOffset)!==0,s=c?0:e.arrowWidth,d=c?0:e.arrowHeight,[p,h]=eI(a),m={start:"0%",center:"50%",end:"100%"}[h],g=(null!==(o=null===(r=u.arrow)||void 0===r?void 0:r.x)&&void 0!==o?o:0)+s/2,y=(null!==(l=null===(i=u.arrow)||void 0===i?void 0:i.y)&&void 0!==l?l:0)+d/2,w="",v="";return"bottom"===p?(w=c?m:"".concat(g,"px"),v="".concat(-d,"px")):"top"===p?(w=c?m:"".concat(g,"px"),v="".concat(f.floating.height+d,"px")):"right"===p?(w="".concat(-d,"px"),v=c?m:"".concat(y,"px")):"left"===p&&(w="".concat(f.floating.width+d,"px"),v=c?m:"".concat(y,"px")),{data:{x:w,y:v}}}});function eI(e){let[t,n="center"]=e.split("-");return[t,n]}var eX=eD,eq=eW,eG=eV,eJ=eB}}]);