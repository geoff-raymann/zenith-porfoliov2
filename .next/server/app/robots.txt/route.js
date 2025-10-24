"use strict";(()=>{var e={};e.id=703,e.ids=[703],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8920:(e,t,o)=>{o.r(t),o.d(t,{headerHooks:()=>l,originalPathname:()=>c,requestAsyncStorage:()=>n,routeModule:()=>i,serverHooks:()=>u,staticGenerationAsyncStorage:()=>p,staticGenerationBailout:()=>d});var r={};o.r(r),o.d(r,{GET:()=>GET});var a=o(884),s=o(6132);async function GET(){let e=`
User-agent: *
Allow: /
Disallow: /api/

# Sitemap
Sitemap: https://your-portfolio.vercel.app/sitemap.xml
`.trim();return new Response(e,{headers:{"Content-Type":"text/plain"}})}let i=new a.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/robots.txt/route",pathname:"/robots.txt",filename:"route",bundlePath:"app/robots.txt/route"},resolvedPagePath:"/home/geoff/Projects/portfolio/zenith-portfolio/app/robots.txt/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:n,staticGenerationAsyncStorage:p,serverHooks:u,headerHooks:l,staticGenerationBailout:d}=i,c="/robots.txt/route"}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),o=t.X(0,[729],()=>__webpack_exec__(8920));module.exports=o})();