(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var c in s)e.o(s,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:s[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{INITIAL_STATE:()=>d,STORE_NAME:()=>i,actions:()=>c,clearFeedCache:()=>F,fetchRestApiAccounts:()=>A,fetchRestApiFeeds:()=>_,fetchRestApiSettings:()=>k,fetchRestApiUserProfile:()=>m,reducer:()=>s,resolvers:()=>o,selectors:()=>n,storeConfig:()=>x,useAccountsEntities:()=>R,useFeedsEntities:()=>w,useSettingsEntities:()=>T});var s={};e.r(s),e.d(s,{accounts:()=>u,default:()=>g,feeds:()=>l,settings:()=>h});var c={};e.r(c),e.d(c,{createAccount:()=>O,createFeed:()=>j,deleteAccount:()=>P,deleteFeed:()=>C,editFeed:()=>D,saveSettings:()=>I,setAccounts:()=>b,setFeeds:()=>E,setSettings:()=>N});var n={};e.r(n),e.d(n,{getAccounts:()=>q,getFeeds:()=>M,getSettings:()=>U});var o={};e.r(o),e.d(o,{getAccounts:()=>L,getFeeds:()=>$,getSettings:()=>G});const a=window.wp.i18n,r=window.wp.data,i="quadlayers/tiktok",d={accounts:[],feeds:[],settings:{flush:!1,spinner_id:0}};function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.accounts,t=arguments.length>1?arguments[1]:void 0;return"SET_ACCOUNTS"===t.type?t.payload:e}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.feeds,t=arguments.length>1?arguments[1]:void 0;return"SET_FEEDS"===t.type?t.payload:e}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.settings,t=arguments.length>1?arguments[1]:void 0;return"SET_SETTINGS"===t.type?t.payload:e}const g=(0,r.combineReducers)({accounts:u,feeds:l,settings:h}),p=(window.lodash,window.wp.notices),f=window.wp.apiFetch;var S=e.n(f);async function y(e){return await S()(e).then((e=>{if(e.code)throw new Error(`${e.code}: ${e?.message||"Unknown"}`);return e})).catch((e=>{throw new Error(JSON.stringify(e))}))}const v=qlttf_store_routes,_=function(){let{method:e,data:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return y({path:v.feeds,method:e,data:t})};function w(){const{createFeed:e,editFeed:t,deleteFeed:s}=(0,r.useDispatch)(i),{feeds:c,isResolvingFeeds:n,hasResolvedFeeds:o}=(0,r.useSelect)((e=>{const{isResolving:t,hasFinishedResolution:s,getFeeds:c}=e(i);return{feeds:c(),isResolvingFeeds:t("getFeeds"),hasResolvedFeeds:s("getFeeds")}}),[]);return{feeds:c,isResolvingFeeds:n,hasResolvedFeeds:o,hasFeeds:!(!o||!Object.keys(c)?.length),createFeed:e,editFeed:t,deleteFeed:s}}function F(e){let{method:t,data:s}=e;return y({path:v.cache,method:t,data:s})}const A=function(){let{method:e,data:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return y({path:v.accounts,method:e,data:t})},m=e=>{let{method:t,data:s}=e;return y({path:`${v.profile.account}`,method:t,data:s})};function R(){const{createAccount:e,deleteAccount:t}=(0,r.useDispatch)(i),{accounts:s,isResolvingAccounts:c,hasResolvedAccounts:n}=(0,r.useSelect)((e=>{const{isResolving:t,hasFinishedResolution:s,getAccounts:c}=e(i);return{accounts:c(),isResolvingAccounts:t("getAccounts"),hasResolvedAccounts:s("getAccounts")}}),[]);return{accounts:s,isResolvingAccounts:c,hasResolvedAccounts:n,hasAccounts:!(!n||!Object.keys(s)?.length),createAccount:e,deleteAccount:t}}const k=function(){let{method:e,data:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return y({path:v.settings,method:e,data:t})};function T(){const{saveSettings:e}=(0,r.useDispatch)(i),{settings:t,isResolvingSettings:s,hasResolvedSettings:c}=(0,r.useSelect)((e=>{const{isResolving:t,hasFinishedResolution:s,getSettings:c}=e(i);return{settings:c(),isResolvingSettings:t("getSettings"),hasResolvedSettings:s("getSettings")}}),[]);return{settings:t,isResolvingSettings:s,hasResolvedSettings:c,hasSettings:!(!c||!Object.keys(t)?.length),saveSettings:e}}const b=async e=>({type:"SET_ACCOUNTS",payload:await Promise.all(e?.map((async e=>{try{const t=await m({method:"POST",data:{feedSettings:{open_id:e.open_id}}});return{...e,...t}}catch(t){return console.error(t),e}})))}),E=e=>({type:"SET_FEEDS",payload:e}),N=e=>({type:"SET_SETTINGS",payload:e}),O=e=>async t=>{let{registry:s,dispatch:c,select:n,resolveSelect:o}=t;const r=n.getAccounts(),i=await A({method:"POST",data:e});return i?.code?(s.dispatch(p.store).createSuccessNotice(sprintf((0,a.__)("%s: %s"),i.code,i.message),{type:"snackbar"}),!1):(r.push(i),c.setAccounts([...r]),s.dispatch(p.store).createSuccessNotice((0,a.__)("The account has been created successfully.","wp-tiktok-feed"),{type:"snackbar"}),!0)},P=(e,t)=>async s=>{let{registry:c,dispatch:n,select:o,resolveSelect:r}=s;const i=o.getAccounts(),d=await A({method:"DELETE",data:{open_id:e}});if(d?.code)return c.dispatch(p.store).createSuccessNotice(sprintf((0,a.__)("%s: %s"),d.code,d.message),{type:"snackbar"}),!1;const u=i.filter((t=>t.open_id!==e));return n.setAccounts([...u]),c.dispatch(p.store).createSuccessNotice(sprintf((0,a.__)("The account %s has been deleted.","wp-tiktok-feed"),t),{type:"snackbar"}),!0},j=e=>async t=>{let{registry:s,dispatch:c,select:n,resolveSelect:o}=t;const r=n.getFeeds(),i=await _({method:"POST",data:{feed:e}});return i?.code?(s.dispatch(p.store).createSuccessNotice(sprintf((0,a.__)("%s: %s"),i.code,i.message),{type:"snackbar"}),!1):(r.push(i),c.setFeeds([...r]),s.dispatch(p.store).createSuccessNotice((0,a.__)("The feed has been created successfully.","wp-tiktok-feed"),{type:"snackbar"}),!0)},C=e=>async t=>{let{registry:s,dispatch:c,select:n,resolveSelect:o}=t;const r=n.getFeeds(),i=await _({method:"DELETE",data:{feed_settings:e}});if(i?.code)return s.dispatch(p.store).createSuccessNotice(sprintf((0,a.__)("%s: %s"),i.code,i.message),{type:"snackbar"}),!1;const d=r.filter((t=>t.id!==e.id));return c.setFeeds([...d]),s.dispatch(p.store).createSuccessNotice(sprintf((0,a.__)("The feed %s has been deleted.","wp-tiktok-feed"),e.id),{type:"snackbar"}),!0},D=e=>async t=>{let{registry:s,dispatch:c,select:n,resolveSelect:o}=t;const r=n.getFeeds(),i=await _({method:"PATCH",data:{feed:e}});return i?.code?(s.dispatch(p.store).createSuccessNotice(sprintf((0,a.__)("%s: %s"),i.code,i.message),{type:"snackbar"}),!1):(c.setFeeds([...r.map((t=>t.id==e.id?e:t))]),s.dispatch(p.store).createSuccessNotice((0,a.__)("The feed has been updated successfully.","wp-tiktok-feed"),{type:"snackbar"}),!0)},I=e=>async t=>{let{registry:s,dispatch:c,select:n,resolveSelect:o}=t;const r=await k({method:"POST",data:e});return r?.code?(s.dispatch(p.store).createSuccessNotice(sprintf((0,a.__)("%s: %s"),r.code,r.message),{type:"snackbar"}),!1):(c.setSettings({...e}),s.dispatch(p.store).createSuccessNotice((0,a.__)("Settings saved.","wp-tiktok-feed"),{type:"snackbar"}),!0)},q=e=>e.accounts,M=e=>e.feeds,U=e=>e.settings,L=async()=>{try{const e=await A();return b(e)}catch(e){console.error(e)}},$=async()=>{try{const e=await _();return E(e)}catch(e){console.error(e)}},G=async()=>{try{const e=await k();return N(e)}catch(e){console.error(e)}},x={reducer:g,actions:c,selectors:n,resolvers:o},H=(0,r.createReduxStore)(i,x);(0,r.register)(H),(window.qlttf=window.qlttf||{}).store=t})();