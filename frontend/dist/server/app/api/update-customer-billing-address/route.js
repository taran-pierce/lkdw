"use strict";(()=>{var e={};e.id=980,e.ids=[980],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},32081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},73837:e=>{e.exports=require("util")},34309:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>g,originalPathname:()=>x,patchFetch:()=>v,requestAsyncStorage:()=>c,routeModule:()=>p,serverHooks:()=>m,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>h});var s={};t.r(s),t.d(s,{POST:()=>n});var a=t(95419),o=t(69108),u=t(99678),i=t(78070);let d=t(26505)(process.env.STRIPE_SECRET_KEY);async function n(e){try{let{address:r,stripeId:t}=await e.json(),s=r.value.address,a=await d.customers.update(t,{address:s});return i.Z.json({message:"address updated",customer:a},{status:200})}catch(e){return console.log({error:e}),i.Z.json({error:"It broke!",message:e},{status:500})}}let p=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/update-customer-billing-address/route",pathname:"/api/update-customer-billing-address",filename:"route",bundlePath:"app/api/update-customer-billing-address/route"},resolvedPagePath:"/Users/pierce/projects/lkdw/frontend/src/app/api/update-customer-billing-address/route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:m,headerHooks:g,staticGenerationBailout:h}=p,x="/api/update-customer-billing-address/route";function v(){return(0,u.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:l})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,850],()=>t(34309));module.exports=s})();