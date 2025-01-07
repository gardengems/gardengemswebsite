(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{9899:(e,t,i)=>{Promise.resolve().then(i.bind(i,5467))},8083:(e,t,i)=>{"use strict";i.d(t,{SearchBar:()=>a});var r=i(5155),o=i(2115),n=i(6046),s=i(9840);function a(){let e=(0,n.useRouter)(),t=(0,n.useSearchParams)().get("q")||"",[i,a]=(0,o.useState)(t),[l,c]=(0,o.useState)([]),[d,u]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=setTimeout(()=>{i.trim()?(c((0,s.a)(i)),u(!0)):(c([]),u(!1))},300);return()=>clearTimeout(e)},[i]),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)("form",{onSubmit:t=>{t.preventDefault(),i.trim()&&(e.push("/search?q=".concat(encodeURIComponent(i))),u(!1))},className:"relative mb-8",children:[(0,r.jsx)("input",{type:"text",value:i,onChange:e=>a(e.target.value),placeholder:"Search for guides and tutorials...",className:"w-full px-4 py-3 rounded-lg border border-border bg-background"}),(0,r.jsx)("button",{type:"submit",className:"absolute right-4 top-1/2 -translate-y-1/2","aria-label":"Search",children:(0,r.jsx)("svg",{className:"w-5 h-5 text-muted-foreground",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]}),d&&l.length>0&&(0,r.jsx)("div",{className:"absolute z-50 w-full mt-1 bg-background border border-border rounded-lg shadow-lg max-h-96 overflow-auto",children:l.map((t,i)=>(0,r.jsxs)("button",{onClick:()=>{e.push("/search/".concat(t.slug)),u(!1),a("")},className:"w-full text-left px-4 py-3 hover:bg-accent/50 border-b border-border/50 last:border-0",children:[(0,r.jsx)("h4",{className:"font-medium mb-1",children:t.title}),"content"===t.matchType&&t.matchText?(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:t.matchText}):(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:t.description}),(0,r.jsxs)("span",{className:"text-xs text-primary mt-1 block",children:["Found in ",t.matchType]})]},"".concat(t.slug,"-").concat(i)))})]})}},720:(e,t,i)=>{"use strict";i.d(t,{O:()=>r});let r={"growlink-portal":{title:"Growlink Portal & Hardware Information",description:"Learn about our portal features and hardware integration capabilities",image:"https://picsum.photos/800/400?random=1",overview:[{title:"Portal Features",content:"The Growlink portal provides comprehensive control over your growing environment. Monitor and manage all aspects of your operation from a single interface."},{title:"Hardware Integration",content:"Our system seamlessly integrates with various hardware components, providing real-time monitoring and control capabilities."}],video:{url:"https://www.youtube.com/embed/example",title:"Growlink Portal Overview",description:"A comprehensive walkthrough of the Growlink portal and its features."},externalLinks:[{title:"Growlink Documentation",url:"https://docs.growlink.com",description:"Official documentation for the Growlink system."},{title:"Hardware Specifications",url:"https://specs.growlink.com",description:"Detailed specifications for Growlink hardware components."}]},"hvac-control":{title:"HVAC Control Systems",description:"Comprehensive guide to HVAC control systems and climate management",image:"https://picsum.photos/800/400?random=2",overview:[{title:"System Components",content:"Our HVAC control system consists of advanced sensors and controllers that work together to maintain optimal growing conditions."},{title:"Climate Management",content:"Learn how to configure and manage temperature, humidity, and air circulation for optimal growing conditions."}],video:{url:"https://www.youtube.com/embed/example",title:"HVAC System Setup",description:"Step-by-step guide to setting up and configuring your HVAC control system."},externalLinks:[{title:"HVAC Manual",url:"https://hvac.example.com",description:"Complete manual for the HVAC control system."}]},"lumatek-lighting":{title:"Lumatek Lighting",description:"Information about Lumatek lighting systems and configuration",image:"https://picsum.photos/800/400?random=3",overview:[{title:"Lighting Solutions",content:"Explore our range of Lumatek lighting solutions designed for optimal plant growth and energy efficiency."},{title:"Configuration Guide",content:"Learn how to configure and optimize your Lumatek lighting system for different growth stages."}],video:{url:"https://www.youtube.com/embed/example",title:"Lumatek Setup Guide",description:"Installation and configuration guide for Lumatek lighting systems."},externalLinks:[{title:"Lumatek Website",url:"https://lumatek.com",description:"Official Lumatek product information and support."}]},"fertigation-skid":{title:"Fertigation Skid",description:"Understanding and operating the fertigation skid system",image:"https://picsum.photos/800/400?random=4",overview:[{title:"System Overview",content:"The fertigation skid system automates nutrient mixing and delivery, ensuring precise feeding schedules for your plants."},{title:"Operation Guide",content:"Learn how to operate and maintain your fertigation skid system for optimal performance."}],video:{url:"https://www.youtube.com/embed/example",title:"Fertigation System Guide",description:"Comprehensive guide to operating the fertigation skid system."},externalLinks:[{title:"Maintenance Manual",url:"https://fertigation.example.com",description:"Detailed maintenance procedures and troubleshooting guides."}]},"power-distribution":{title:"Power Distribution Box",description:"Guide to power distribution systems and electrical management",image:"https://picsum.photos/800/400?random=5",overview:[{title:"Power Management",content:"Understanding the power distribution system and its role in your growing operation."},{title:"Safety Guidelines",content:"Important safety information and best practices for working with electrical systems."}],video:{url:"https://www.youtube.com/embed/example",title:"Power System Overview",description:"Safety guidelines and operational procedures for power distribution."},externalLinks:[{title:"Electrical Specifications",url:"https://power.example.com",description:"Technical specifications and safety documentation."}]},"door-control":{title:"Door Control Systems",description:"Setup and management of door control and access systems",image:"https://picsum.photos/800/400?random=6",overview:[{title:"Access Control",content:"Learn about our door control systems and how they integrate with your security infrastructure."},{title:"Configuration",content:"Step-by-step guide to configuring access controls and user permissions."}],video:{url:"https://www.youtube.com/embed/example",title:"Door Control Setup",description:"Installation and configuration of door control systems."},externalLinks:[{title:"Access Control Manual",url:"https://doors.example.com",description:"Complete documentation for door control systems."}]},"security-cameras":{title:"Security Cameras",description:"Installation and configuration of security camera systems",image:"https://picsum.photos/800/400?random=7",overview:[{title:"Camera System",content:"Overview of our security camera system and its integration with other security features."},{title:"Monitoring Setup",content:"Guide to setting up and configuring camera monitoring and recording."}],video:{url:"https://www.youtube.com/embed/example",title:"Camera System Setup",description:"Complete guide to installing and configuring security cameras."},externalLinks:[{title:"Camera Documentation",url:"https://cameras.example.com",description:"Technical documentation and user guides for security cameras."}]}}},5467:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>g});var r=i(5155),o=i(2115),n=i(7317),s=i(8083),a=i(5565),l=i(8173),c=i.n(l),d=i(6046),u=i(9840),m=i(720);function p(){let e=(0,d.useSearchParams)().get("q")||"",[t,i]=(0,o.useState)([]);return((0,o.useEffect)(()=>{e?i((0,u.a)(e)):i([])},[e]),e&&0===t.length)?(0,r.jsx)("p",{className:"mb-8 text-muted-foreground",children:"No results found"}):e&&t.length>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{className:"mb-8 text-muted-foreground",children:["Found ",t.length," result",1===t.length?"":"s"]}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map(e=>(0,r.jsxs)(c(),{href:"/search/".concat(e.slug),className:"group relative bg-muted/5 border border-border/40 rounded-lg overflow-hidden hover:border-primary/40 transition-colors",children:[(0,r.jsx)("div",{className:"aspect-video relative",children:(0,r.jsx)(a.default,{src:e.image,alt:e.title,fill:!0,className:"object-cover",sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"})}),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold mb-2 group-hover:text-primary transition-colors",children:e.title}),"content"===e.matchType&&e.matchText?(0,r.jsx)("p",{className:"text-muted-foreground",children:e.matchText}):(0,r.jsx)("p",{className:"text-muted-foreground",children:e.description}),(0,r.jsxs)("span",{className:"text-xs text-primary mt-3 block",children:["Found in ",e.matchType]})]})]},e.slug))})]}):(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:Object.entries(m.O).map(e=>{let[t,i]=e;return(0,r.jsxs)(c(),{href:"/search/".concat(t),className:"group relative bg-muted/5 border border-border/40 rounded-lg overflow-hidden hover:border-primary/40 transition-colors",children:[(0,r.jsx)("div",{className:"aspect-video relative",children:(0,r.jsx)(a.default,{src:i.image,alt:i.title,fill:!0,className:"object-cover",sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"})}),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold mb-2 group-hover:text-primary transition-colors",children:i.title}),(0,r.jsx)("p",{className:"text-muted-foreground",children:i.description})]})]},t)})})}function g(){return(0,r.jsx)("div",{className:"flex flex-col",children:(0,r.jsx)(n.w,{className:"pt-32",children:(0,r.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold mb-6",children:"Knowledge Base"}),(0,r.jsx)(o.Suspense,{fallback:(0,r.jsx)("div",{className:"h-12 w-full bg-muted/5 animate-pulse rounded-lg"}),children:(0,r.jsx)(s.SearchBar,{})}),(0,r.jsx)(o.Suspense,{fallback:(0,r.jsx)("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[...Array(6)].map((e,t)=>(0,r.jsx)("div",{className:"aspect-[4/3] bg-muted/5 animate-pulse rounded-lg"},t))}),children:(0,r.jsx)(p,{})})]})})})}},9840:(e,t,i)=>{"use strict";i.d(t,{a:()=>o});var r=i(720);function o(e){if(!e.trim())return[];let t=e.toLowerCase(),i=[],o=new Set;return Object.entries(r.O).forEach(e=>{let[r,n]=e;if(!o.has(r)){if(n.title.toLowerCase().includes(t)){i.push({slug:r,title:n.title,description:n.description,image:n.image,matchType:"title"}),o.add(r);return}if(n.description.toLowerCase().includes(t)){i.push({slug:r,title:n.title,description:n.description,image:n.image,matchType:"description"}),o.add(r);return}for(let e of n.overview)if(e.content.toLowerCase().includes(t)){let s=function(e,t){let i=e.toLowerCase().indexOf(t);if(-1===i)return"";let r=Math.max(0,i-50),o=Math.min(e.length,i+t.length+50),n=e.slice(r,o);return r>0&&(n="..."+n),o<e.length&&(n+="..."),n}(e.content,t);i.push({slug:r,title:n.title,description:n.description,image:n.image,matchType:"content",matchText:s}),o.add(r);return}}}),i}},7317:(e,t,i)=>{"use strict";i.d(t,{w:()=>o});var r=i(5155);function o(e){let{children:t,className:i="",muted:o=!1}=e;return(0,r.jsx)("section",{className:"py-24 ".concat(o?"bg-muted/20":""," ").concat(i),children:(0,r.jsx)("div",{className:"container",children:t})})}},5565:(e,t,i)=>{"use strict";i.d(t,{default:()=>o.a});var r=i(4146),o=i.n(r)},6046:(e,t,i)=>{"use strict";var r=i(6658);i.o(r,"usePathname")&&i.d(t,{usePathname:function(){return r.usePathname}}),i.o(r,"useRouter")&&i.d(t,{useRouter:function(){return r.useRouter}}),i.o(r,"useSearchParams")&&i.d(t,{useSearchParams:function(){return r.useSearchParams}})},4146:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return l},getImageProps:function(){return a}});let r=i(306),o=i(666),n=i(7970),s=r._(i(5514));function a(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let l=n.Image}},e=>{var t=t=>e(e.s=t);e.O(0,[970,173,441,517,358],()=>t(9899)),_N_E=e.O()}]);