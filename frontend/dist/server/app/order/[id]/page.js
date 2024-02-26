(()=>{var e={};e.id=218,e.ids=[218],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},79933:e=>{var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"checkout"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:58}};r.loc.source={body:"mutation ($id: String) {\n  checkout(id: $id) {\n   id\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};r.definitions.forEach(function(e){if(e.name){var r=new Set;(function e(r,t){if("FragmentSpread"===r.kind)t.add(r.name.value);else if("VariableDefinition"===r.kind){var i=r.type;"NamedType"===i.kind&&t.add(i.name.value)}r.selectionSet&&r.selectionSet.selections.forEach(function(r){e(r,t)}),r.variableDefinitions&&r.variableDefinitions.forEach(function(r){e(r,t)}),r.definitions&&r.definitions.forEach(function(r){e(r,t)})})(e,r),t[e.name.value]=r}}),e.exports=r},66288:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>s.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>l});var i=t(50482),n=t(69108),a=t(62563),s=t.n(a),o=t(68300),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);t.d(r,d);let l=["",{children:["order",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,22275)),"/Users/pierce/projects/lkdw/frontend/src/app/order/[id]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,89354))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,21342)),"/Users/pierce/projects/lkdw/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,89354))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/pierce/projects/lkdw/frontend/src/app/order/[id]/page.tsx"],p="/order/[id]/page",u={require:t,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/order/[id]/page",pathname:"/order/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},12742:(e,r,t)=>{Promise.resolve().then(t.bind(t,91976))},91976:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>_});var i=t(95344),n=t(3729),a=t(8428),s=t(62794),o=t(25011),d=t(59845),l=t(96359),c=t(4992),p=t(31549),u=t.n(p);function m({data:e}){if(!e)return i.jsx("p",{children:"Error, no data found..."});let{id:r,charge:t,total:n,items:a,date:s}=e;return(0,i.jsxs)("div",{className:u().orderWrapper,children:[(0,i.jsxs)("h4",{className:u().date,children:["Order Date: ",function(e){let r=new Date(e);return`${r.getMonth()}/${r.getDay()}/${r.getFullYear()}`}(s)]}),(0,i.jsxs)("h4",{children:["ID: ",r]}),a.map(e=>(0,i.jsxs)("div",{className:u().itemWrapper,children:[(0,i.jsxs)("h4",{children:[e.product.title," ",(0,i.jsxs)("small",{children:["x ",e.quantity]})]}),i.jsx("h4",{className:u().total,children:(0,c.Z)(e.product.price)})]},e.id)),(0,i.jsxs)("div",{className:u().totalWrapper,children:[i.jsx("h4",{children:"Total"}),i.jsx("h4",{className:u().total,children:(0,c.Z)(n)})]}),(0,i.jsxs)("div",{className:u().totalWrapper,children:[i.jsx("h4",{children:"Amount charged"}),i.jsx("h4",{className:u().total,children:(0,c.Z)(t)})]})]})}var x=t(20975),h=t(77291),f=t.n(h),g=t(79933),v=t.n(g);function _({params:e}){let r=(0,d.a)(),t=(0,a.useRouter)(),[c,{data:p,error:u,loading:h}]=(0,s.D)(v()),{id:g}=e;async function _(){let{cart:e}=r;if(0===e.length)return;let i=await c({variables:{id:r.id},refetchQueries:[{query:f()}]});t.push(`/order/${i?.data?.checkout?.id}`)}if((0,n.useEffect)(()=>{r&&_()},[r]),!g)return i.jsx("p",{children:"ID not provided..."});if(!r||h)return i.jsx(x.Z,{});let j=r.orders.filter(e=>e.id===g);return i.jsx(o.MenuStateProvider,{children:(0,i.jsxs)("main",{children:[i.jsx(l.Z,{text:"Order",subText:`${r?.name}, thank you for your order! It will be shipped as soon as possible! ${j[0]?.id}`}),i.jsx(m,{data:j[0]})]})})}},20975:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var i=t(95344),n=t(24227),a=t.n(n);function s(){return i.jsx("div",{className:a().loadingWrapper,children:i.jsx("img",{src:"/loading-icon.png",alt:"Loading something good...",className:a().image})})}},96359:(e,r,t)=>{"use strict";t.d(r,{Z:()=>d});var i=t(95344),n=t(14416),a=t.n(n),s=t(53092),o=t.n(s);function d({text:e,subText:r}){return(0,i.jsxs)(i.Fragment,{children:[i.jsx("h1",{className:`${a().className} ${o().h1}`,children:e}),i.jsx("p",{className:o().p,children:r})]})}},24227:e=>{e.exports={loadingWrapper:"loadingSpinner_loadingWrapper__5wKXB",image:"loadingSpinner_image__EpZBJ",infiniteSpin:"loadingSpinner_infiniteSpin__vK_mp"}},31549:e=>{e.exports={orderWrapper:"order_orderWrapper__9Va_9",date:"order_date__kMQp0",itemWrapper:"order_itemWrapper__Jz8gM",total:"order_total__mgxTO",totalWrapper:"order_totalWrapper__9ZbLD"}},53092:e=>{e.exports={h1:"sectionHeader_h1___lmyj",p:"sectionHeader_p__y_jXV"}},22275:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>a,__esModule:()=>n,default:()=>s});let i=(0,t(86843).createProxy)(String.raw`/Users/pierce/projects/lkdw/frontend/src/app/order/[id]/page.tsx`),{__esModule:n,$$typeof:a}=i,s=i.default},89354:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var i=t(70337);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[638,623,337,34],()=>t(66288));module.exports=i})();