(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8749:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,5214,23)),Promise.resolve().then(a.bind(a,7702)),Promise.resolve().then(a.bind(a,6153)),Promise.resolve().then(a.bind(a,6073)),Promise.resolve().then(a.bind(a,1050)),Promise.resolve().then(a.t.bind(a,231,23)),Promise.resolve().then(a.t.bind(a,3581,23))},7702:(e,t,a)=>{"use strict";a.d(t,{default:()=>y});var s=a(7437),n=a(2265),i=a(4717),r=a(2218),l=a(7700),o=a(9824),d=a(1725);let c=i.fC,m=i.xz;i.x8;let h=i.h_,x=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(i.aV,{className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...n,ref:t})});x.displayName=i.aV.displayName;let p=(0,r.j)("fixed z-50 gap-4 bg-primary p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),u=n.forwardRef((e,t)=>{let{side:a="right",className:n,children:r,...c}=e;return(0,s.jsxs)(h,{children:[(0,s.jsx)(x,{}),(0,s.jsxs)(i.VY,{ref:t,className:(0,l.cn)(p({side:a}),n),...c,children:[(0,s.jsx)(d.T,{children:(0,s.jsx)(i.Dx,{children:"Navigation Sidebar"})}),r,(0,s.jsxs)(i.x8,{className:"absolute right-8 top-8 transition-opacity outline-none",children:[(0,s.jsx)(o.QAE,{className:"text-3xl text-accent"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});u.displayName=i.VY.displayName,n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(i.Dx,{ref:t,className:(0,l.cn)("text-lg font-semibold text-slate-950 dark:text-slate-50",a),...n})}).displayName=i.Dx.displayName;let f=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(i.dk,{ref:t,className:(0,l.cn)("text-sm text-slate-500 dark:text-slate-400",a),...n})});f.displayName=i.dk.displayName;var b=a(6463),j=a(7138),v=a(3003);let N=[{name:"home",path:"/"},{name:"resume",path:"/resume"},{name:"work",path:"/work"},{name:"about",path:"/about"},{name:"contact",path:"/contact"}],y=()=>{let e=(0,b.usePathname)();return(0,s.jsxs)(c,{children:[(0,s.jsx)(m,{className:"flex justify-center items-center",children:(0,s.jsx)(v.F3G,{className:"text-[32px] text-accent"})}),(0,s.jsxs)(u,{className:"flex flex-col",children:[(0,s.jsx)(f,{className:"hidden",children:"Navigation Bar"}),(0,s.jsx)("div",{className:"mt-32 mb-40 text-center text-2xl",children:(0,s.jsx)(j.default,{href:"/",children:(0,s.jsxs)("h1",{className:"text-4xl font-semibold",children:["Thea Win",(0,s.jsx)("span",{children:"\uD83D\uDC08"})]})})}),(0,s.jsx)("nav",{className:"flex flex-col justicy-fenter items-center gap-8",children:N.map((t,a)=>(0,s.jsx)(j.default,{href:t.path,className:"".concat(t.path===e&&"text-accent border-b-2 border-accent"," text-xl capitalize hover:text-accent-hover transition-all"),children:t.name},a))})]})]})}},6153:(e,t,a)=>{"use strict";a.d(t,{default:()=>l});var s=a(7437),n=a(7138),i=a(6463);let r=[{name:"home",path:"/"},{name:"resume",path:"/resume"},{name:"work",path:"/work"},{name:"about",path:"/about"},{name:"contact",path:"/contact"}],l=()=>{let e=(0,i.usePathname)();return console.log(e),(0,s.jsx)("nav",{className:"flex gap-8",children:r.map((t,a)=>(0,s.jsx)(n.default,{href:t.path,className:"".concat(t.path===e&&"text-accent border-b-2 border-accent"," capitalize font-medium hover:text-accent-hover transition-all"),children:t.name},a))})}},6073:(e,t,a)=>{"use strict";a.d(t,{default:()=>l});var s=a(7437),n=a(4446),i=a(8606),r=a(6463);let l=e=>{let{children:t}=e,a=(0,r.usePathname)();return(0,s.jsx)(n.M,{children:(0,s.jsxs)("div",{children:[(0,s.jsx)(i.E.div,{initial:{opacity:1},animate:{opacity:0,transition:{delay:1,duration:.4,ease:"easeInOut"}},className:"h-screen w-screen fixed bg-primary top-0 pointer-events-none"}),t]},a)})}},1050:(e,t,a)=>{"use strict";a.d(t,{default:()=>c});var s=a(7437),n=a(4446),i=a(8606),r=a(6463);let l={initial:{top:"0%"},animate:{top:"100%"},exit:{top:["100%","0%"]}},o=e=>6-e-1,d=()=>(0,s.jsx)(s.Fragment,{children:[...Array(6)].map((e,t)=>(0,s.jsx)(i.E.div,{variants:l,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.4,ease:"easeInOut",delay:.1*o(t)},className:"h-full w-full bg-white relative"},t))}),c=()=>{let e=(0,r.usePathname)();return(0,s.jsx)(n.M,{mode:"wait",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex",children:(0,s.jsx)(d,{})}),(0,s.jsx)(i.E.div,{className:"h-screen w-screen fixed bg-primary top-0 pointer-events-none",initial:{opacity:1},animate:{opacity:0,transition:{delay:1,duration:.4,ease:"easeInOut"}}})]},e)})}},7700:(e,t,a)=>{"use strict";a.d(t,{cn:()=>i});var s=a(4839),n=a(6164);function i(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.m6)((0,s.W)(t))}},5214:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[467,452,994,606,959,618,231,370,477,130,215,744],()=>t(8749)),_N_E=e.O()}]);