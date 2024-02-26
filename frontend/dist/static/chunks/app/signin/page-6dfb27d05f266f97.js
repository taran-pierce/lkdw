(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{2166:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getCurrentUser"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authenticatedItem"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"stripeId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cart"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"quantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shortDescription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"orders"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"charge"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"itemsCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"quantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shortDescription"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"ordersCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cartCount"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:608}};n.loc.source={body:"query getCurrentUser {\n  authenticatedItem {\n    ... on User {\n      email\n      id\n      name\n      stripeId\n      cart {\n        quantity\n        id\n        product {\n          id\n          price\n          shortDescription\n          title\n        }\n        user {\n          id\n        }\n      }\n      orders {\n        charge\n        id\n        itemsCount\n        total\n        date\n        items {\n          id\n          quantity\n          product {\n            id\n            price\n            title\n            shortDescription\n          }\n        }\n      }\n      ordersCount\n      cartCount\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}n.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})})(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.getCurrentUser=function(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=i[n]||new Set,s=new Set,d=new Set;for(r.forEach(function(e){d.add(e)});d.size>0;){var o=d;d=new Set,o.forEach(function(e){s.has(e)||(s.add(e),(i[e]||new Set).forEach(function(e){d.add(e)}))})}return s.forEach(function(n){var i=t(e,n);i&&a.definitions.push(i)}),a}(n,"getCurrentUser")},1500:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"AuthenticateUserWithPassword"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"email"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"password"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authenticateUserWithPassword"},arguments:[{kind:"Argument",name:{kind:"Name",value:"email"},value:{kind:"Variable",name:{kind:"Name",value:"email"}}},{kind:"Argument",name:{kind:"Name",value:"password"},value:{kind:"Variable",name:{kind:"Name",value:"password"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UserAuthenticationWithPasswordSuccess"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"item"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"sessionToken"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UserAuthenticationWithPasswordFailure"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:359}};n.loc.source={body:"mutation AuthenticateUserWithPassword($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      item {\n        id\n        name\n        email\n      }\n      sessionToken\n    }\n\n    ... on UserAuthenticationWithPasswordFailure {\n      message\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}n.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})})(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.AuthenticateUserWithPassword=function(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var r=i[n]||new Set,s=new Set,d=new Set;for(r.forEach(function(e){d.add(e)});d.size>0;){var o=d;d=new Set,o.forEach(function(e){s.has(e)||(s.add(e),(i[e]||new Set).forEach(function(e){d.add(e)}))})}return s.forEach(function(n){var i=t(e,n);i&&a.definitions.push(i)}),a}(n,"AuthenticateUserWithPassword")},7662:function(e,n,i){Promise.resolve().then(i.t.bind(i,5710,23)),Promise.resolve().then(i.t.bind(i,8372,23)),Promise.resolve().then(i.t.bind(i,1044,23)),Promise.resolve().then(i.bind(i,5587)),Promise.resolve().then(i.bind(i,15))},5587:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return k}});var t=i(3827),a=i(4090),r=i(8792),s=i(2072),d=i(286),o=i(6917),l=i(3012),c=i.n(l),u=i(2166),m=i.n(u),v=i(1500),f=i.n(v);function k(){let[e,n]=(0,a.useState)(void 0),{inputs:i,handleChange:l,resetForm:u}=(0,s.Z)({title:"test@email.com",password:""}),[v,{loading:k}]=(0,d.D)(f(),{variables:i,refetchQueries:[{query:m()}]}),h=(0,o.a)();async function p(e){e.preventDefault();let{authenticateUserWithPassword:i,authenticatedItem:t}=(await v()).data;(null==i?void 0:i.__typename)==="UserAuthenticationWithPasswordFailure"&&n({error:!0,message:(null==i?void 0:i.message)||"error!"}),(null==i?void 0:i.__typename)==="UserAuthenticationWithPasswordSuccess"&&n({error:!1,message:""})}return(0,t.jsxs)("div",{className:c().formWrapper,children:[e&&e.error&&(0,t.jsx)("div",{className:c().errorMessage,children:(0,t.jsx)("p",{children:null==e?void 0:e.message})}),!h&&(0,t.jsx)("form",{method:"POST",onSubmit:e=>p(e),className:c().form,children:(0,t.jsxs)("fieldset",{disabled:k,className:c().fieldset,children:[(0,t.jsxs)("label",{htmlFor:"email",className:c().label,children:["Email",(0,t.jsx)("input",{name:"email",type:"email",id:"email",placeholder:"email@address.com",value:i.email,onChange:l})]}),(0,t.jsxs)("label",{htmlFor:"password",className:c().label,children:["Password",(0,t.jsx)("input",{name:"password",type:"password",id:"password",value:i.password,onChange:l})]}),(0,t.jsx)("button",{type:"submit",className:c().button,children:"Sign In"})]})}),h&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["Thanks for logging in ",(0,t.jsx)("strong",{children:h.name}),"!"]}),(0,t.jsx)("p",{children:"Now you can create a cart while you are shopping to keep track of your precious cargo."}),(0,t.jsx)("p",{children:(0,t.jsx)(r.default,{href:"/products",className:"button",children:"Products"})})]}),!h&&(0,t.jsxs)("div",{className:c().createAccountWrapper,children:[(0,t.jsx)("p",{children:"Or"}),(0,t.jsx)("p",{children:(0,t.jsx)(r.default,{href:"/create-account",className:"button",children:"Create an Account"})})]})]})}},6917:function(e,n,i){"use strict";i.d(n,{a:function(){return s}});var t=i(8622),a=i(2166),r=i.n(a);function s(){let{data:e,loading:n,error:i}=(0,t.a)(r());return null==e?void 0:e.authenticatedItem}},2072:function(e,n,i){"use strict";i.d(n,{Z:function(){return a}});var t=i(4090);function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[n,i]=(0,t.useState)(e),a=Object.values(e).join();return(0,t.useEffect)(()=>{i(e)},[a]),{inputs:n,handleChange:function(e){let{value:t,name:a,type:r}=e.target;"number"===r&&(t=parseInt(t)),"file"===r&&(console.log("maybe I need to fiddle with this"),[t]=e.target.files),i({...n,[a]:t})},resetForm:function(){i(e)},clearForm:function(){i(Object.fromEntries(Object.entries(n).map(e=>{let[n,i]=e;return[n,""]})))}}}},15:function(e,n,i){"use strict";i.r(n),i.d(n,{MenuStateProvider:function(){return d},useMenu:function(){return o}});var t=i(3827),a=i(4090);let r=(0,a.createContext)({}),s=r.Provider;function d(e){let{children:n}=e,[i,r]=(0,a.useState)(!1),[d,o]=(0,a.useState)(!1);return(0,t.jsx)(s,{value:{isMenuOpen:i,setIsMenuOpen:r,closeMenu:function(){r(!1)},openMenu:function(){r(!0)},toggleMenu:function(){r(!i)},isCartOpen:d,setIsCartOpen:o,toggleCart:function(){o(!i)},closeCart:function(){o(!1)},openCart:function(){o(!0)}},children:n})}function o(){return(0,a.useContext)(r)}},5710:function(e){e.exports={h1:"sectionHeader_h1___lmyj",p:"sectionHeader_p__y_jXV"}},3012:function(e){e.exports={fieldset:"form_fieldset__T2gM_",label:"form_label__5xHnE",errorMessage:"form_errorMessage__u1whG",createAccountWrapper:"form_createAccountWrapper__re13P",button:"form_button__RBl21",sucessMessage:"form_sucessMessage__HoBo9",formWrapper:"form_formWrapper__Hkm31",form:"form_form__RweKP"}},8372:function(e){e.exports={style:{fontFamily:"'__Fira_Sans_72d1fa', '__Fira_Sans_Fallback_72d1fa'",fontStyle:"normal"},className:"__className_72d1fa",variable:"__variable_72d1fa"}}},function(e){e.O(0,[28,916,802,971,69,744],function(){return e(e.s=7662)}),_N_E=e.O()}]);