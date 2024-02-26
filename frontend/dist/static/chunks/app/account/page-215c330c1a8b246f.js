(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346],{2166:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getCurrentUser"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authenticatedItem"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"stripeId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cart"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"quantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shortDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"orders"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"charge"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"itemsCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"quantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shortDescription"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"ordersCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cartCount"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:608}};n.loc.source={body:"query getCurrentUser {\n  authenticatedItem {\n    ... on User {\n      email\n      id\n      name\n      stripeId\n      cart {\n        quantity\n        id\n        product {\n          id\n          price\n          shortDescription\n          title\n        }\n        user {\n          id\n        }\n      }\n      orders {\n        charge\n        id\n        itemsCount\n        total\n        date\n        items {\n          id\n          quantity\n          product {\n            id\n            price\n            title\n            shortDescription\n          }\n        }\n      }\n      ordersCount\n      cartCount\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}n.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})})(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.getCurrentUser=function(e,n){var r={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(r.loc=e.loc);var a=i[n]||new Set,d=new Set,s=new Set;for(a.forEach(function(e){s.add(e)});s.size>0;){var o=s;s=new Set,o.forEach(function(e){d.has(e)||(d.add(e),(i[e]||new Set).forEach(function(e){s.add(e)}))})}return d.forEach(function(n){var i=t(e,n);i&&r.definitions.push(i)}),r}(n,"getCurrentUser")},3493:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"endSession"},arguments:[],directives:[]}]}}],loc:{start:0,end:26}};n.loc.source={body:"mutation {\n  endSession\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};n.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})})(e,n),i[e.name.value]=n}}),e.exports=n},8990:function(e,n,i){Promise.resolve().then(i.bind(i,108))},7907:function(e,n,i){"use strict";i.r(n);var t=i(5313),r={};for(var a in t)"default"!==a&&(r[a]=(function(e){return t[e]}).bind(0,a));i.d(n,r)},108:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return _}});var t=i(3827),r=i(15),a=i(1911),d=i(6917),s=i(8792),o=i(300),c=i(8593),u=i(3371),l=i.n(u);function m(e){let{orders:n}=e;return(0,t.jsx)("div",{className:l().ordersWrapper,children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)("h2",{children:"Order History"}),(0,t.jsxs)("table",{className:l().orderTable,children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"ID"}),(0,t.jsx)("th",{children:"Item Count"}),(0,t.jsx)("th",{children:"Total"})]})}),(0,t.jsx)("tbody",{children:n.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.default,{href:"/order/".concat(e.id),children:e.id})}),(0,t.jsx)("td",{children:e.items.length}),(0,t.jsx)("td",{children:(0,o.Z)(e.total)})]},e.id))})]})]})})}var f=i(7907),v=i(286),k=i(5354),p=i.n(k),g=i(2166),h=i.n(g),S=i(3493),N=i.n(S);function x(){let[e,{data:n,loading:i,error:r}]=(0,v.D)(N(),{refetchQueries:[{query:h()}]}),a=(0,f.useRouter)();async function d(){await e(),a.push("/")}return(0,t.jsxs)("div",{className:p().signOutWrapper,children:[(0,t.jsx)("p",{children:"Billing Information section. Going to need that for the checkout any way for shipping information and tax."}),(0,t.jsx)("p",{children:"You can also sign out of your account from here!"}),(0,t.jsx)("button",{type:"button",onClick:d,className:p().signOutButton,children:"Sign Out"})]})}var F=i(3155);function _(){let e=(0,d.a)();if(!e)return(0,t.jsx)(F.Z,{});let n=e.orders.length>0;return(0,t.jsxs)(r.MenuStateProvider,{children:[(0,t.jsxs)("main",{children:[(0,t.jsx)(a.Z,{text:"Account",subText:"".concat(n?"":"There are no previous orders to display, let's get out there and get shopping!")}),(0,t.jsx)(x,{})]}),n&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(m,{orders:e.orders})})]})}},8593:function(e,n,i){"use strict";i.d(n,{Z:function(){return d}});var t=i(3827),r=i(2337),a=i.n(r);function d(e){let{children:n}=e;return(0,t.jsx)("div",{className:a().container,children:n})}},3155:function(e,n,i){"use strict";i.d(n,{Z:function(){return d}});var t=i(3827),r=i(6775),a=i.n(r);function d(){return(0,t.jsx)("div",{className:a().loadingWrapper,children:(0,t.jsx)("img",{src:"/loading-icon.png",alt:"Loading something good...",className:a().image})})}},1911:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var t=i(3827),r=i(1044),a=i.n(r),d=i(5710),s=i.n(d);function o(e){let{text:n,subText:i}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"".concat(a().className," ").concat(s().h1),children:n}),(0,t.jsx)("p",{className:s().p,children:i})]})}},6917:function(e,n,i){"use strict";i.d(n,{a:function(){return d}});var t=i(8622),r=i(2166),a=i.n(r);function d(){let{data:e,loading:n,error:i}=(0,t.a)(a());return null==e?void 0:e.authenticatedItem}},300:function(e,n,i){"use strict";function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n={style:"currency",currency:"USD",minimumFractionDigits:2};return e%100==0&&(n.minimumFractionDigits=0),Intl.NumberFormat("en-US",n).format(e/100)}i.d(n,{Z:function(){return t}})},15:function(e,n,i){"use strict";i.r(n),i.d(n,{MenuStateProvider:function(){return s},useMenu:function(){return o}});var t=i(3827),r=i(4090);let a=(0,r.createContext)({}),d=a.Provider;function s(e){let{children:n}=e,[i,a]=(0,r.useState)(!1),[s,o]=(0,r.useState)(!1);return(0,t.jsx)(d,{value:{isMenuOpen:i,setIsMenuOpen:a,closeMenu:function(){a(!1)},openMenu:function(){a(!0)},toggleMenu:function(){a(!i)},isCartOpen:s,setIsCartOpen:o,toggleCart:function(){o(!i)},closeCart:function(){o(!1)},openCart:function(){o(!0)}},children:n})}function o(){return(0,r.useContext)(a)}},2337:function(e){e.exports={container:"container_container__4LSPc"}},6775:function(e){e.exports={loadingWrapper:"loadingSpinner_loadingWrapper__5wKXB",image:"loadingSpinner_image__EpZBJ",infiniteSpin:"loadingSpinner_infiniteSpin__vK_mp"}},3371:function(e){e.exports={ordersWrapper:"orders_ordersWrapper__lo5ip",orderTable:"orders_orderTable__6G8f5"}},5710:function(e){e.exports={h1:"sectionHeader_h1___lmyj",p:"sectionHeader_p__y_jXV"}},5354:function(e){e.exports={signOutWrapper:"signOut_signOutWrapper__DYROd",signOutButton:"signOut_signOutButton__iPlsS"}}},function(e){e.O(0,[28,916,802,971,69,744],function(){return e(e.s=8990)}),_N_E=e.O()}]);