(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[916],{1044:function(t){t.exports={style:{fontFamily:"'__Rubik_Doodle_Shadow_65255b'",fontWeight:400,fontStyle:"normal"},className:"__className_65255b",variable:"__variable_65255b"}},5666:function(t,e,r){"use strict";var s,o;function i(t){return!!t&&t<7}r.d(e,{Ie:function(){return s},Oj:function(){return i}}),(o=s||(s={}))[o.loading=1]="loading",o[o.setVariables=2]="setVariables",o[o.fetchMore=3]="fetchMore",o[o.refetch=4]="refetch",o[o.poll=6]="poll",o[o.ready=7]="ready",o[o.error=8]="error"},8622:function(t,e,r){"use strict";r.d(e,{a:function(){return P}});var s=r(9703),o=r(1074),i=r(6050),n=r.t(i,2),a=r(4022),u=!1,l=n.useSyncExternalStore||function(t,e,r){var s=e();!1===globalThis.__DEV__||u||s===e()||(u=!0,!1!==globalThis.__DEV__&&o.kG.error(58));var n=i.useState({inst:{value:s,getSnapshot:e}}),l=n[0].inst,h=n[1];return a.JC?i.useLayoutEffect(function(){Object.assign(l,{value:s,getSnapshot:e}),c(l)&&h({inst:l})},[t,s,e]):Object.assign(l,{value:s,getSnapshot:e}),i.useEffect(function(){return c(l)&&h({inst:l}),t(function(){c(l)&&h({inst:l})})},[t]),s};function c(t){var e=t.value,r=t.getSnapshot;try{return e!==r()}catch(t){return!0}}var h=r(9058),p=r(569),d=r(2523),f=r(866),y=r(5666),b=r(1039),v=r(9259),O=r(2467),g=r(6291),k=r(1795),_=Object.prototype.hasOwnProperty;function P(t,e){var r,s,o;return void 0===e&&(e=Object.create(null)),(r=(0,v.x)(e.client),(s=i.useRef()).current&&r===s.current.client&&t===s.current.query||(s.current=new w(r,t,s.current)),(o=s.current).forceUpdateState=i.useReducer(function(t){return t+1},0)[1],o).useQuery(e)}var w=function(){function t(t,e,r){var s=this;this.client=t,this.query=e,this.forceUpdate=function(){return s.forceUpdateState()},this.ssrDisabledResult=(0,O.J)({loading:!0,data:void 0,error:void 0,networkStatus:y.Ie.loading}),this.skipStandbyResult=(0,O.J)({loading:!1,data:void 0,error:void 0,networkStatus:y.Ie.ready}),this.toQueryResultCache=new(a.mr?WeakMap:Map),(0,b.Vp)(e,b.n_.Query);var o=r&&r.result,i=o&&o.data;i&&(this.previousData=i)}return t.prototype.forceUpdateState=function(){!1!==globalThis.__DEV__&&o.kG.warn(51)},t.prototype.executeQuery=function(t){var e,r=this;t.query&&Object.assign(this,{query:t.query}),this.watchQueryOptions=this.createWatchQueryOptions(this.queryHookOptions=t);var s=this.observable.reobserveAsConcast(this.getObsQueryOptions());return this.previousData=(null===(e=this.result)||void 0===e?void 0:e.data)||this.previousData,this.result=void 0,this.forceUpdate(),new Promise(function(t){var e;s.subscribe({next:function(t){e=t},error:function(){t(r.toQueryResult(r.observable.getCurrentResult()))},complete:function(){t(r.toQueryResult(e))}})})},t.prototype.useQuery=function(t){var e=this;this.renderPromises=i.useContext((0,d.K)()).renderPromises,this.useOptions(t);var r=this.useObservableQuery(),s=l(i.useCallback(function(t){if(e.renderPromises)return function(){};e.forceUpdate=t;var s=function(){var t=e.result,s=r.getCurrentResult();t&&t.loading===s.loading&&t.networkStatus===s.networkStatus&&(0,h.D)(t.data,s.data)||e.setResult(s)},o=function(t){if(i.unsubscribe(),i=r.resubscribeAfterError(s,o),!_.call(t,"graphQLErrors"))throw t;var n=e.result;(!n||n&&n.loading||!(0,h.D)(t,n.error))&&e.setResult({data:n&&n.data,error:t,loading:!1,networkStatus:y.Ie.error})},i=r.subscribe(s,o);return function(){setTimeout(function(){return i.unsubscribe()}),e.forceUpdate=function(){return e.forceUpdateState()}}},[r,this.renderPromises,this.client.disableNetworkFetches]),function(){return e.getCurrentResult()},function(){return e.getCurrentResult()});return this.unsafeHandlePartialRefetch(s),this.toQueryResult(s)},t.prototype.useOptions=function(e){var r,s=this.createWatchQueryOptions(this.queryHookOptions=e),o=this.watchQueryOptions;!(0,h.D)(s,o)&&(this.watchQueryOptions=s,o&&this.observable&&(this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(r=this.result)||void 0===r?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=e.onCompleted||t.prototype.onCompleted,this.onError=e.onError||t.prototype.onError,(this.renderPromises||this.client.disableNetworkFetches)&&!1===this.queryHookOptions.ssr&&!this.queryHookOptions.skip?this.result=this.ssrDisabledResult:this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:(this.result===this.ssrDisabledResult||this.result===this.skipStandbyResult)&&(this.result=void 0)},t.prototype.getObsQueryOptions=function(){var t=[],e=this.client.defaultOptions.watchQuery;return e&&t.push(e),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push((0,g.o)(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(p.J)},t.prototype.createWatchQueryOptions=function(t){void 0===t&&(t={});var e,r=t.skip,o=Object.assign((t.ssr,t.onCompleted,t.onError,t.defaultOptions,(0,s._T)(t,["skip","ssr","onCompleted","onError","defaultOptions"])),{query:this.query});if(this.renderPromises&&("network-only"===o.fetchPolicy||"cache-and-network"===o.fetchPolicy)&&(o.fetchPolicy="cache-first"),o.variables||(o.variables={}),r){var i=o.fetchPolicy,n=void 0===i?this.getDefaultFetchPolicy():i,a=o.initialFetchPolicy;Object.assign(o,{initialFetchPolicy:void 0===a?n:a,fetchPolicy:"standby"})}else o.fetchPolicy||(o.fetchPolicy=(null===(e=this.observable)||void 0===e?void 0:e.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return o},t.prototype.getDefaultFetchPolicy=function(){var t,e;return(null===(t=this.queryHookOptions.defaultOptions)||void 0===t?void 0:t.fetchPolicy)||(null===(e=this.client.defaultOptions.watchQuery)||void 0===e?void 0:e.fetchPolicy)||"cache-first"},t.prototype.onCompleted=function(t){},t.prototype.onError=function(t){},t.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=i.useMemo(function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}},[t]);var e=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&e&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},t.prototype.setResult=function(t){var e=this.result;e&&e.data&&(this.previousData=e.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t,e)},t.prototype.handleErrorOrCompleted=function(t,e){var r=this;if(!t.loading){var s=this.toApolloError(t);Promise.resolve().then(function(){s?r.onError(s):t.data&&(null==e?void 0:e.networkStatus)!==t.networkStatus&&t.networkStatus===y.Ie.ready&&r.onCompleted(t.data)}).catch(function(t){!1!==globalThis.__DEV__&&o.kG.warn(t)})}},t.prototype.toApolloError=function(t){return(0,k.O)(t.errors)?new f.cA({graphQLErrors:t.errors}):t.error},t.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},t.prototype.toQueryResult=function(t){var e=this.toQueryResultCache.get(t);if(e)return e;var r=t.data,o=(t.partial,(0,s._T)(t,["data","partial"]));return this.toQueryResultCache.set(t,e=(0,s.pi)((0,s.pi)((0,s.pi)({data:r},o),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!e.error&&(0,k.O)(t.errors)&&(e.error=new f.cA({graphQLErrors:t.errors})),e},t.prototype.unsafeHandlePartialRefetch=function(t){t.partial&&this.queryHookOptions.partialRefetch&&!t.loading&&(!t.data||0===Object.keys(t.data).length)&&"cache-only"!==this.observable.options.fetchPolicy&&(Object.assign(t,{loading:!0,networkStatus:y.Ie.refetch}),this.observable.refetch())},t}()},1795:function(t,e,r){"use strict";r.d(e,{O:function(){return o},k:function(){return s}});var s=Array.isArray;function o(t){return Array.isArray(t)&&t.length>0}},2467:function(t,e,r){"use strict";r.d(e,{J:function(){return o}});var s=r(5004);function o(t){if(!1!==globalThis.__DEV__){var e;(e=new Set([t])).forEach(function(t){(0,s.s)(t)&&function(t){if(!1!==globalThis.__DEV__&&!Object.isFrozen(t))try{Object.freeze(t)}catch(t){if(t instanceof TypeError)return null;throw t}return t}(t)===t&&Object.getOwnPropertyNames(t).forEach(function(r){(0,s.s)(t[r])&&e.add(t[r])})})}return t}}}]);