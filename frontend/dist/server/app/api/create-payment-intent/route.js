"use strict";(()=>{var e={};e.id=70,e.ids=[70],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},32081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},73837:e=>{e.exports=require("util")},84327:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>_,originalPathname:()=>f,patchFetch:()=>g,requestAsyncStorage:()=>y,routeModule:()=>m,serverHooks:()=>x,staticGenerationAsyncStorage:()=>h,staticGenerationBailout:()=>v});var a={};r.r(a),r.d(a,{POST:()=>l});var n=r(95419),i=r(69108),o=r(99678),s=r(78070);let u=r(26505)(process.env.STRIPE_SECRET_KEY),c=async(e,t)=>await u.tax.calculations.create({currency:t,customer_details:{address:{line1:"920 5th Ave",city:"Seattle",state:"WA",postal_code:"98104",country:"US"},address_source:"shipping"},line_items:e.map(e=>p(e))}),p=e=>({amount:e.amount,reference:e.id}),d=(e,t)=>{let{price:r}=function(e){let t=e.reduce((e,t)=>t.product?e+t.quantity*t.product.price:e,0);return{price:t,formatted:function(e=0){let t={style:"currency",currency:"USD",minimumFractionDigits:2};return e%100==0&&(t.minimumFractionDigits=0),Intl.NumberFormat("en-US",t).format(e/100)}(t)}}(e);return r+t.tax_amount_exclusive};async function l(e){try{let{items:t,stripeId:r}=await e.json(),a=await c(t,"usd"),n=await d(t,a),i=await u.paymentIntents.create({amount:n,currency:"usd",automatic_payment_methods:{enabled:!0},metadata:{tax_calculation:a.id},customer:r});return s.Z.json({clientSecret:i.client_secret},{status:200})}catch(e){return console.log({error:e}),s.Z.json({error:"It broke!",message:e},{status:500})}}let m=new n.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/create-payment-intent/route",pathname:"/api/create-payment-intent",filename:"route",bundlePath:"app/api/create-payment-intent/route"},resolvedPagePath:"/Users/pierce/projects/lkdw/frontend/src/app/api/create-payment-intent/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:y,staticGenerationAsyncStorage:h,serverHooks:x,headerHooks:_,staticGenerationBailout:v}=m,f="/api/create-payment-intent/route";function g(){return(0,o.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:h})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,850],()=>r(84327));module.exports=a})();