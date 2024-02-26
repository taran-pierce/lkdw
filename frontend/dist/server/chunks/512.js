exports.id=512,exports.ids=[512],exports.modules={30337:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"addToCart"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"productId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addToCart"},arguments:[{kind:"Argument",name:{kind:"Name",value:"productId"},value:{kind:"Variable",name:{kind:"Name",value:"productId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"quantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:154}};n.loc.source={body:"mutation addToCart($productId: String!) {\n  addToCart(productId: $productId) {\n    id\n    quantity\n    user {\n      id\n      name\n      email\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}n.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})})(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.addToCart=function(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var d=i[n]||new Set,r=new Set,o=new Set;for(d.forEach(function(e){o.add(e)});o.size>0;){var s=o;o=new Set,s.forEach(function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach(function(e){o.add(e)}))})}return r.forEach(function(n){var i=t(e,n);i&&a.definitions.push(i)}),a}(n,"addToCart")},25999:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"Mutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"where"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ProductWhereUniqueInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteProduct"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:100}};n.loc.source={body:"mutation Mutation($where: ProductWhereUniqueInput!) {\n  deleteProduct(where: $where) {\n    id\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}n.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})})(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.Mutation=function(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var d=i[n]||new Set,r=new Set,o=new Set;for(d.forEach(function(e){o.add(e)});o.size>0;){var s=o;o=new Set,s.forEach(function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach(function(e){o.add(e)}))})}return r.forEach(function(n){var i=t(e,n);i&&a.definitions.push(i)}),a}(n,"Mutation")},63391:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getProducts"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tagsCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"extension"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"document"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shortDescription"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:306}};n.loc.source={body:"query getProducts {\n  products {\n    id\n    title\n    tagsCount\n    image {\n      altText\n      id\n      image {\n        url\n        id\n        extension\n        height\n        width\n      }\n    }\n    tags {\n      id\n      name\n    }\n    content {\n      document\n    }\n    price\n    shortDescription\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}n.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})})(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.getProducts=function(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var d=i[n]||new Set,r=new Set,o=new Set;for(d.forEach(function(e){o.add(e)});o.size>0;){var s=o;o=new Set,s.forEach(function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach(function(e){o.add(e)}))})}return r.forEach(function(n){var i=t(e,n);i&&a.definitions.push(i)}),a}(n,"getProducts")},20975:(e,n,i)=>{"use strict";i.d(n,{Z:()=>r});var t=i(95344),a=i(24227),d=i.n(a);function r(){return t.jsx("div",{className:d().loadingWrapper,children:t.jsx("img",{src:"/loading-icon.png",alt:"Loading something good...",className:d().image})})}},28587:(e,n,i)=>{"use strict";i.d(n,{Z:()=>h});var t=i(95344),a=i(56506),d=i(4992),r=i(62794),o=i(59845),s=i(95007),l=i.n(s),c=i(77291),u=i.n(c),m=i(63391),v=i.n(m),f=i(30337),p=i.n(f),k=i(25999),g=i.n(k);function h({data:e}){let[n,{data:i,loading:s,error:c}]=(0,r.D)(p(),{refetchQueries:[{query:u()}]}),[m,{data:f,loading:k,error:h}]=(0,r.D)(g(),{refetchQueries:[{query:v()}]}),S=(0,o.a)();async function N(e){await n({variables:{productId:e.id}})}async function x(e){confirm("Are you sure you want to delete this Product?")&&m({variables:{where:{id:e.id}}})}return t.jsx("div",{className:l().productWrapper,children:e?.map(e=>{let{title:n,shortDescription:i,tags:r,id:o,price:c,image:u}=e;return t.jsxs("div",{className:l().product,children:[u&&t.jsx("img",{src:u.image.url,alt:u.altText}),t.jsxs("div",{className:l().titleWrapper,children:[t.jsx("h3",{children:n}),t.jsx("h4",{children:d.Z(c)})]}),i&&t.jsx("p",{children:i}),t.jsxs("p",{children:["Tags:",r.map(e=>t.jsx("span",{className:l().tag,children:e.name},e.name))]}),t.jsx("div",{className:`${l().buttonWrapper} ${S?"":l().loggedOut}`,children:t.jsxs("fieldset",{disabled:s,children:[S&&t.jsxs(t.Fragment,{children:[t.jsx(a.default,{href:`/edit/${e.id}`,className:"button",children:"Edit"}),t.jsx("button",{type:"button",onClick:()=>N(e),children:"Add"}),t.jsx("button",{type:"button",onClick:()=>x(e),children:"Delete"})]}),!S&&t.jsx(a.default,{href:"/signin",className:"button",children:"Sign in to purchase"})]})})]},o)})})}},96359:(e,n,i)=>{"use strict";i.d(n,{Z:()=>s});var t=i(95344),a=i(14416),d=i.n(a),r=i(53092),o=i.n(r);function s({text:e,subText:n}){return(0,t.jsxs)(t.Fragment,{children:[t.jsx("h1",{className:`${d().className} ${o().h1}`,children:e}),t.jsx("p",{className:o().p,children:n})]})}},24227:e=>{e.exports={loadingWrapper:"loadingSpinner_loadingWrapper__5wKXB",image:"loadingSpinner_image__EpZBJ",infiniteSpin:"loadingSpinner_infiniteSpin__vK_mp"}},95007:e=>{e.exports={productWrapper:"productsDisplay_productWrapper__aUx6N",product:"productsDisplay_product___tZ64",titleWrapper:"productsDisplay_titleWrapper__NUwbX",buttonWrapper:"productsDisplay_buttonWrapper__wpSnO",loggedOut:"productsDisplay_loggedOut__pfud2",tag:"productsDisplay_tag__jbn5g"}},53092:e=>{e.exports={h1:"sectionHeader_h1___lmyj",p:"sectionHeader_p__y_jXV"}},89354:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>a});var t=i(70337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};