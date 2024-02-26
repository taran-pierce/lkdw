(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[728],{7350:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"addToCart"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"productId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addToCart"},arguments:[{kind:"Argument",name:{kind:"Name",value:"productId"},value:{kind:"Variable",name:{kind:"Name",value:"productId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"quantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:154}};n.loc.source={body:"mutation addToCart($productId: String!) {\n  addToCart(productId: $productId) {\n    id\n    quantity\n    user {\n      id\n      name\n      email\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}n.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})})(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.addToCart=function(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var d=i[n]||new Set,r=new Set,o=new Set;for(d.forEach(function(e){o.add(e)});o.size>0;){var s=o;o=new Set,s.forEach(function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach(function(e){o.add(e)}))})}return r.forEach(function(n){var i=t(e,n);i&&a.definitions.push(i)}),a}(n,"addToCart")},6636:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"Mutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"where"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ProductWhereUniqueInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteProduct"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"Variable",name:{kind:"Name",value:"where"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:100}};n.loc.source={body:"mutation Mutation($where: ProductWhereUniqueInput!) {\n  deleteProduct(where: $where) {\n    id\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}n.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})})(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.Mutation=function(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var d=i[n]||new Set,r=new Set,o=new Set;for(d.forEach(function(e){o.add(e)});o.size>0;){var s=o;o=new Set,s.forEach(function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach(function(e){o.add(e)}))})}return r.forEach(function(n){var i=t(e,n);i&&a.definitions.push(i)}),a}(n,"Mutation")},2166:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getCurrentUser"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authenticatedItem"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"stripeId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cart"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"quantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shortDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"orders"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"charge"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"itemsCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"quantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shortDescription"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"ordersCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cartCount"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:608}};n.loc.source={body:"query getCurrentUser {\n  authenticatedItem {\n    ... on User {\n      email\n      id\n      name\n      stripeId\n      cart {\n        quantity\n        id\n        product {\n          id\n          price\n          shortDescription\n          title\n        }\n        user {\n          id\n        }\n      }\n      orders {\n        charge\n        id\n        itemsCount\n        total\n        date\n        items {\n          id\n          quantity\n          product {\n            id\n            price\n            title\n            shortDescription\n          }\n        }\n      }\n      ordersCount\n      cartCount\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}n.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})})(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.getCurrentUser=function(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var d=i[n]||new Set,r=new Set,o=new Set;for(d.forEach(function(e){o.add(e)});o.size>0;){var s=o;o=new Set,s.forEach(function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach(function(e){o.add(e)}))})}return r.forEach(function(n){var i=t(e,n);i&&a.definitions.push(i)}),a}(n,"getCurrentUser")},7510:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getProducts"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tagsCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"extension"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"document"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shortDescription"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:306}};n.loc.source={body:"query getProducts {\n  products {\n    id\n    title\n    tagsCount\n    image {\n      altText\n      id\n      image {\n        url\n        id\n        extension\n        height\n        width\n      }\n    }\n    tags {\n      id\n      name\n    }\n    content {\n      document\n    }\n    price\n    shortDescription\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}n.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})})(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.getProducts=function(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var d=i[n]||new Set,r=new Set,o=new Set;for(d.forEach(function(e){o.add(e)});o.size>0;){var s=o;o=new Set,s.forEach(function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach(function(e){o.add(e)}))})}return r.forEach(function(n){var i=t(e,n);i&&a.definitions.push(i)}),a}(n,"getProducts")},3155:function(e,n,i){"use strict";i.d(n,{Z:function(){return r}});var t=i(3827),a=i(6775),d=i.n(a);function r(){return(0,t.jsx)("div",{className:d().loadingWrapper,children:(0,t.jsx)("img",{src:"/loading-icon.png",alt:"Loading something good...",className:d().image})})}},7783:function(e,n,i){"use strict";i.d(n,{Z:function(){return h}});var t=i(3827),a=i(8792),d=i(300),r=i(286),o=i(6917),s=i(7772),c=i.n(s),u=i(2166),l=i.n(u),m=i(7510),v=i.n(m),f=i(7350),k=i.n(f),p=i(6636),g=i.n(p);function h(e){let{data:n}=e,[i,{data:s,loading:u,error:m}]=(0,r.D)(k(),{refetchQueries:[{query:l()}]}),[f,{data:p,loading:h,error:S}]=(0,r.D)(g(),{refetchQueries:[{query:v()}]}),N=(0,o.a)();async function F(e){await i({variables:{productId:e.id}})}async function y(e){confirm("Are you sure you want to delete this Product?")&&f({variables:{where:{id:e.id}}})}return(0,t.jsx)("div",{className:c().productWrapper,children:null==n?void 0:n.map(e=>{let{title:n,shortDescription:i,tags:r,id:o,price:s,image:l}=e;return(0,t.jsxs)("div",{className:c().product,children:[l&&(0,t.jsx)("img",{src:l.image.url,alt:l.altText}),(0,t.jsxs)("div",{className:c().titleWrapper,children:[(0,t.jsx)("h3",{children:n}),(0,t.jsx)("h4",{children:(0,d.Z)(s)})]}),i&&(0,t.jsx)("p",{children:i}),(0,t.jsxs)("p",{children:["Tags:",r.map(e=>(0,t.jsx)("span",{className:c().tag,children:e.name},e.name))]}),(0,t.jsx)("div",{className:"".concat(c().buttonWrapper," ").concat(N?"":c().loggedOut),children:(0,t.jsxs)("fieldset",{disabled:u,children:[N&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{href:"/edit/".concat(e.id),className:"button",children:"Edit"}),(0,t.jsx)("button",{type:"button",onClick:()=>F(e),children:"Add"}),(0,t.jsx)("button",{type:"button",onClick:()=>y(e),children:"Delete"})]}),!N&&(0,t.jsx)(a.default,{href:"/signin",className:"button",children:"Sign in to purchase"})]})})]},o)})})}},1911:function(e,n,i){"use strict";i.d(n,{Z:function(){return s}});var t=i(3827),a=i(1044),d=i.n(a),r=i(5710),o=i.n(r);function s(e){let{text:n,subText:i}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"".concat(d().className," ").concat(o().h1),children:n}),(0,t.jsx)("p",{className:o().p,children:i})]})}},6917:function(e,n,i){"use strict";i.d(n,{a:function(){return r}});var t=i(8622),a=i(2166),d=i.n(a);function r(){let{data:e,loading:n,error:i}=(0,t.a)(d());return null==e?void 0:e.authenticatedItem}},300:function(e,n,i){"use strict";function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n={style:"currency",currency:"USD",minimumFractionDigits:2};return e%100==0&&(n.minimumFractionDigits=0),Intl.NumberFormat("en-US",n).format(e/100)}i.d(n,{Z:function(){return t}})},15:function(e,n,i){"use strict";i.r(n),i.d(n,{MenuStateProvider:function(){return o},useMenu:function(){return s}});var t=i(3827),a=i(4090);let d=(0,a.createContext)({}),r=d.Provider;function o(e){let{children:n}=e,[i,d]=(0,a.useState)(!1),[o,s]=(0,a.useState)(!1);return(0,t.jsx)(r,{value:{isMenuOpen:i,setIsMenuOpen:d,closeMenu:function(){d(!1)},openMenu:function(){d(!0)},toggleMenu:function(){d(!i)},isCartOpen:o,setIsCartOpen:s,toggleCart:function(){s(!i)},closeCart:function(){s(!1)},openCart:function(){s(!0)}},children:n})}function s(){return(0,a.useContext)(d)}},6775:function(e){e.exports={loadingWrapper:"loadingSpinner_loadingWrapper__5wKXB",image:"loadingSpinner_image__EpZBJ",infiniteSpin:"loadingSpinner_infiniteSpin__vK_mp"}},7772:function(e){e.exports={productWrapper:"productsDisplay_productWrapper__aUx6N",product:"productsDisplay_product___tZ64",titleWrapper:"productsDisplay_titleWrapper__NUwbX",buttonWrapper:"productsDisplay_buttonWrapper__wpSnO",loggedOut:"productsDisplay_loggedOut__pfud2",tag:"productsDisplay_tag__jbn5g"}},5710:function(e){e.exports={h1:"sectionHeader_h1___lmyj",p:"sectionHeader_p__y_jXV"}}}]);