(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function IS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Rh={exports:{}},Go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function BS(){if(u0)return Go;u0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return Go.Fragment=t,Go.jsx=i,Go.jsxs=i,Go}var c0;function FS(){return c0||(c0=1,Rh.exports=BS()),Rh.exports}var et=FS(),Ch={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function HS(){if(f0)return le;f0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function _(L,J,St){this.props=L,this.context=J,this.refs=M,this.updater=St||E}_.prototype.isReactComponent={},_.prototype.setState=function(L,J){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,J,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function D(){}D.prototype=_.prototype;function N(L,J,St){this.props=L,this.context=J,this.refs=M,this.updater=St||E}var U=N.prototype=new D;U.constructor=N,T(U,_.prototype),U.isPureReactComponent=!0;var B=Array.isArray;function G(){}var I={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function C(L,J,St){var Rt=St.ref;return{$$typeof:s,type:L,key:J,ref:Rt!==void 0?Rt:null,props:St}}function w(L,J){return C(L.type,J,L.props)}function z(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function Z(L){var J={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(St){return J[St]})}var rt=/\/+/g;function ht(L,J){return typeof L=="object"&&L!==null&&L.key!=null?Z(""+L.key):J.toString(36)}function lt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(G,G):(L.status="pending",L.then(function(J){L.status==="pending"&&(L.status="fulfilled",L.value=J)},function(J){L.status==="pending"&&(L.status="rejected",L.reason=J)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,J,St,Rt,Lt){var ot=typeof L;(ot==="undefined"||ot==="boolean")&&(L=null);var pt=!1;if(L===null)pt=!0;else switch(ot){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(L.$$typeof){case s:case t:pt=!0;break;case g:return pt=L._init,P(pt(L._payload),J,St,Rt,Lt)}}if(pt)return Lt=Lt(L),pt=Rt===""?"."+ht(L,0):Rt,B(Lt)?(St="",pt!=null&&(St=pt.replace(rt,"$&/")+"/"),P(Lt,J,St,"",function(Xt){return Xt})):Lt!=null&&(z(Lt)&&(Lt=w(Lt,St+(Lt.key==null||L&&L.key===Lt.key?"":(""+Lt.key).replace(rt,"$&/")+"/")+pt)),J.push(Lt)),1;pt=0;var Ut=Rt===""?".":Rt+":";if(B(L))for(var Bt=0;Bt<L.length;Bt++)Rt=L[Bt],ot=Ut+ht(Rt,Bt),pt+=P(Rt,J,St,ot,Lt);else if(Bt=S(L),typeof Bt=="function")for(L=Bt.call(L),Bt=0;!(Rt=L.next()).done;)Rt=Rt.value,ot=Ut+ht(Rt,Bt++),pt+=P(Rt,J,St,ot,Lt);else if(ot==="object"){if(typeof L.then=="function")return P(lt(L),J,St,Rt,Lt);throw J=String(L),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return pt}function X(L,J,St){if(L==null)return L;var Rt=[],Lt=0;return P(L,Rt,"","",function(ot){return J.call(St,ot,Lt++)}),Rt}function W(L){if(L._status===-1){var J=L._result;J=J(),J.then(function(St){(L._status===0||L._status===-1)&&(L._status=1,L._result=St)},function(St){(L._status===0||L._status===-1)&&(L._status=2,L._result=St)}),L._status===-1&&(L._status=0,L._result=J)}if(L._status===1)return L._result.default;throw L._result}var tt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},ct={map:X,forEach:function(L,J,St){X(L,function(){J.apply(this,arguments)},St)},count:function(L){var J=0;return X(L,function(){J++}),J},toArray:function(L){return X(L,function(J){return J})||[]},only:function(L){if(!z(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return le.Activity=v,le.Children=ct,le.Component=_,le.Fragment=i,le.Profiler=l,le.PureComponent=N,le.StrictMode=r,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,le.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},le.cache=function(L){return function(){return L.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(L,J,St){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Rt=T({},L.props),Lt=L.key;if(J!=null)for(ot in J.key!==void 0&&(Lt=""+J.key),J)!q.call(J,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&J.ref===void 0||(Rt[ot]=J[ot]);var ot=arguments.length-2;if(ot===1)Rt.children=St;else if(1<ot){for(var pt=Array(ot),Ut=0;Ut<ot;Ut++)pt[Ut]=arguments[Ut+2];Rt.children=pt}return C(L.type,Lt,Rt)},le.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},le.createElement=function(L,J,St){var Rt,Lt={},ot=null;if(J!=null)for(Rt in J.key!==void 0&&(ot=""+J.key),J)q.call(J,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Lt[Rt]=J[Rt]);var pt=arguments.length-2;if(pt===1)Lt.children=St;else if(1<pt){for(var Ut=Array(pt),Bt=0;Bt<pt;Bt++)Ut[Bt]=arguments[Bt+2];Lt.children=Ut}if(L&&L.defaultProps)for(Rt in pt=L.defaultProps,pt)Lt[Rt]===void 0&&(Lt[Rt]=pt[Rt]);return C(L,ot,Lt)},le.createRef=function(){return{current:null}},le.forwardRef=function(L){return{$$typeof:d,render:L}},le.isValidElement=z,le.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:W}},le.memo=function(L,J){return{$$typeof:p,type:L,compare:J===void 0?null:J}},le.startTransition=function(L){var J=I.T,St={};I.T=St;try{var Rt=L(),Lt=I.S;Lt!==null&&Lt(St,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(G,tt)}catch(ot){tt(ot)}finally{J!==null&&St.types!==null&&(J.types=St.types),I.T=J}},le.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},le.use=function(L){return I.H.use(L)},le.useActionState=function(L,J,St){return I.H.useActionState(L,J,St)},le.useCallback=function(L,J){return I.H.useCallback(L,J)},le.useContext=function(L){return I.H.useContext(L)},le.useDebugValue=function(){},le.useDeferredValue=function(L,J){return I.H.useDeferredValue(L,J)},le.useEffect=function(L,J){return I.H.useEffect(L,J)},le.useEffectEvent=function(L){return I.H.useEffectEvent(L)},le.useId=function(){return I.H.useId()},le.useImperativeHandle=function(L,J,St){return I.H.useImperativeHandle(L,J,St)},le.useInsertionEffect=function(L,J){return I.H.useInsertionEffect(L,J)},le.useLayoutEffect=function(L,J){return I.H.useLayoutEffect(L,J)},le.useMemo=function(L,J){return I.H.useMemo(L,J)},le.useOptimistic=function(L,J){return I.H.useOptimistic(L,J)},le.useReducer=function(L,J,St){return I.H.useReducer(L,J,St)},le.useRef=function(L){return I.H.useRef(L)},le.useState=function(L){return I.H.useState(L)},le.useSyncExternalStore=function(L,J,St){return I.H.useSyncExternalStore(L,J,St)},le.useTransition=function(){return I.H.useTransition()},le.version="19.2.0",le}var h0;function op(){return h0||(h0=1,Ch.exports=HS()),Ch.exports}var $=op(),wh={exports:{}},Vo={},Dh={exports:{}},Uh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function GS(){return d0||(d0=1,(function(s){function t(P,X){var W=P.length;P.push(X);t:for(;0<W;){var tt=W-1>>>1,ct=P[tt];if(0<l(ct,X))P[tt]=X,P[W]=ct,W=tt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var X=P[0],W=P.pop();if(W!==X){P[0]=W;t:for(var tt=0,ct=P.length,L=ct>>>1;tt<L;){var J=2*(tt+1)-1,St=P[J],Rt=J+1,Lt=P[Rt];if(0>l(St,W))Rt<ct&&0>l(Lt,St)?(P[tt]=Lt,P[Rt]=W,tt=Rt):(P[tt]=St,P[J]=W,tt=J);else if(Rt<ct&&0>l(Lt,W))P[tt]=Lt,P[Rt]=W,tt=Rt;else break t}}return X}function l(P,X){var W=P.sortIndex-X.sortIndex;return W!==0?W:P.id-X.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,v=null,x=3,S=!1,E=!1,T=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var X=i(p);X!==null;){if(X.callback===null)r(p);else if(X.startTime<=P)r(p),X.sortIndex=X.expirationTime,t(m,X);else break;X=i(p)}}function B(P){if(T=!1,U(P),!E)if(i(m)!==null)E=!0,G||(G=!0,Z());else{var X=i(p);X!==null&&lt(B,X.startTime-P)}}var G=!1,I=-1,q=5,C=-1;function w(){return M?!0:!(s.unstable_now()-C<q)}function z(){if(M=!1,G){var P=s.unstable_now();C=P;var X=!0;try{t:{E=!1,T&&(T=!1,D(I),I=-1),S=!0;var W=x;try{e:{for(U(P),v=i(m);v!==null&&!(v.expirationTime>P&&w());){var tt=v.callback;if(typeof tt=="function"){v.callback=null,x=v.priorityLevel;var ct=tt(v.expirationTime<=P);if(P=s.unstable_now(),typeof ct=="function"){v.callback=ct,U(P),X=!0;break e}v===i(m)&&r(m),U(P)}else r(m);v=i(m)}if(v!==null)X=!0;else{var L=i(p);L!==null&&lt(B,L.startTime-P),X=!1}}break t}finally{v=null,x=W,S=!1}X=void 0}}finally{X?Z():G=!1}}}var Z;if(typeof N=="function")Z=function(){N(z)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ht=rt.port2;rt.port1.onmessage=z,Z=function(){ht.postMessage(null)}}else Z=function(){_(z,0)};function lt(P,X){I=_(function(){P(s.unstable_now())},X)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(P){switch(x){case 1:case 2:case 3:var X=3;break;default:X=x}var W=x;x=X;try{return P()}finally{x=W}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(P,X){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var W=x;x=P;try{return X()}finally{x=W}},s.unstable_scheduleCallback=function(P,X,W){var tt=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?tt+W:tt):W=tt,P){case 1:var ct=-1;break;case 2:ct=250;break;case 5:ct=1073741823;break;case 4:ct=1e4;break;default:ct=5e3}return ct=W+ct,P={id:g++,callback:X,priorityLevel:P,startTime:W,expirationTime:ct,sortIndex:-1},W>tt?(P.sortIndex=W,t(p,P),i(m)===null&&P===i(p)&&(T?(D(I),I=-1):T=!0,lt(B,W-tt))):(P.sortIndex=ct,t(m,P),E||S||(E=!0,G||(G=!0,Z()))),P},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(P){var X=x;return function(){var W=x;x=X;try{return P.apply(this,arguments)}finally{x=W}}}})(Uh)),Uh}var p0;function VS(){return p0||(p0=1,Dh.exports=GS()),Dh.exports}var Lh={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function kS(){if(m0)return wn;m0=1;var s=op();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},wn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},wn.useFormStatus=function(){return f.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var g0;function XS(){if(g0)return Lh.exports;g0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Lh.exports=kS(),Lh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function WS(){if(_0)return Vo;_0=1;var s=VS(),t=op(),i=XS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return m(c),e;if(h===o)return m(c),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=h;else{for(var y=!1,A=c.child;A;){if(A===a){y=!0,a=c,o=h;break}if(A===o){y=!0,o=c,a=h;break}A=A.sibling}if(!y){for(A=h.child;A;){if(A===a){y=!0,a=h,o=c;break}if(A===o){y=!0,o=h,a=c;break}A=A.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case G:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var lt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},tt=[],ct=-1;function L(e){return{current:e}}function J(e){0>ct||(e.current=tt[ct],tt[ct]=null,ct--)}function St(e,n){ct++,tt[ct]=e.current,e.current=n}var Rt=L(null),Lt=L(null),ot=L(null),pt=L(null);function Ut(e,n){switch(St(ot,n),St(Lt,e),St(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?L_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=L_(n),e=N_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(Rt),St(Rt,e)}function Bt(){J(Rt),J(Lt),J(ot)}function Xt(e){e.memoizedState!==null&&St(pt,e);var n=Rt.current,a=N_(n,e.type);n!==a&&(St(Lt,e),St(Rt,a))}function ge(e){Lt.current===e&&(J(Rt),J(Lt)),pt.current===e&&(J(pt),Io._currentValue=W)}var on,H;function Re(e){if(on===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);on=n&&n[1]||"",H=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+on+e+H}var ae=!1;function ee(e,n){if(!e||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(dt){var st=dt}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(dt){st=dt}e.call(xt.prototype)}}else{try{throw Error()}catch(dt){st=dt}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(dt){if(dt&&st&&typeof dt.stack=="string")return[dt.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],A=h[1];if(y&&A){var F=y.split(`
`),it=A.split(`
`);for(c=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;c<it.length&&!it[c].includes("DetermineComponentFrameRoot");)c++;if(o===F.length||c===it.length)for(o=F.length-1,c=it.length-1;1<=o&&0<=c&&F[o]!==it[c];)c--;for(;1<=o&&0<=c;o--,c--)if(F[o]!==it[c]){if(o!==1||c!==1)do if(o--,c--,0>c||F[o]!==it[c]){var gt=`
`+F[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=c);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Re(a):""}function Yt(e,n){switch(e.tag){case 26:case 27:case 5:return Re(e.type);case 16:return Re("Lazy");case 13:return e.child!==n&&n!==null?Re("Suspense Fallback"):Re("Suspense");case 19:return Re("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return Re("Activity");default:return""}}function ke(e){try{var n="",a=null;do n+=Yt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Wt=Object.prototype.hasOwnProperty,oe=s.unstable_scheduleCallback,$e=s.unstable_cancelCallback,Je=s.unstable_shouldYield,O=s.unstable_requestPaint,b=s.unstable_now,at=s.unstable_getCurrentPriorityLevel,_t=s.unstable_ImmediatePriority,Et=s.unstable_UserBlockingPriority,mt=s.unstable_NormalPriority,Kt=s.unstable_LowPriority,Ct=s.unstable_IdlePriority,qt=s.log,Zt=s.unstable_setDisableYieldValue,Tt=null,wt=null;function Qt(e){if(typeof qt=="function"&&Zt(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(Tt,e)}catch{}}var It=Math.clz32?Math.clz32:k,Nt=Math.log,ue=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(Nt(e)/ue|0)|0}var At=256,Dt=262144,Ft=4194304;function bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?c=bt(o):(y&=A,y!==0?c=bt(y):a||(a=A&~e,a!==0&&(c=bt(a))))):(A=o&~h,A!==0?c=bt(A):y!==0?c=bt(y):a||(a=o&~e,a!==0&&(c=bt(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function Ht(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function se(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ri(e,n,a,o,c,h){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,F=e.expirationTimes,it=e.hiddenUpdates;for(a=y&~a;0<a;){var gt=31-It(a),xt=1<<gt;A[gt]=0,F[gt]=-1;var st=it[gt];if(st!==null)for(it[gt]=null,gt=0;gt<st.length;gt++){var dt=st[gt];dt!==null&&(dt.lane&=-536870913)}a&=~xt}o!==0&&Ks(e,o,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~n))}function Ks(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Li(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Ir(e,n){var a=n&-n;return a=(a&42)!==0?1:Br(a),(a&(e.suspendedLanes|n))!==0?0:a}function Br(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nr(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:n0(e.type))}function Qs(e,n){var a=X.p;try{return X.p=e,n()}finally{X.p=a}}var qn=Math.random().toString(36).slice(2),ln="__reactFiber$"+qn,Mn="__reactProps$"+qn,xa="__reactContainer$"+qn,Js="__reactEvents$"+qn,yc="__reactListeners$"+qn,Sc="__reactHandles$"+qn,ml="__reactResources$"+qn,ir="__reactMarker$"+qn;function R(e){delete e[ln],delete e[Mn],delete e[Js],delete e[yc],delete e[Sc]}function Y(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[xa]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=H_(e);e!==null;){if(a=e[ln])return a;e=H_(e)}return n}e=a,a=e.parentNode}return null}function ut(e){if(e=e[ln]||e[xa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ft(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Q(e){var n=e[ml];return n||(n=e[ml]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Mt(e){e[ir]=!0}var Ot=new Set,Vt={};function zt(e,n){Jt(e,n),Jt(e+"Capture",n)}function Jt(e,n){for(Vt[e]=n,e=0;e<n.length;e++)Ot.add(n[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},_e={};function Le(e){return Wt.call(_e,e)?!0:Wt.call($t,e)?!1:ie.test(e)?_e[e]=!0:($t[e]=!0,!1)}function Xe(e,n,a){if(Le(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ne(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ve(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ae(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,h.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function En(e){if(!e._valueTracker){var n=Ye(e)?"checked":"value";e._valueTracker=Ae(e,n,""+e[n])}}function ki(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ye(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ar=/[\n"\\]/g;function Se(e){return e.replace(ar,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cn(e,n,a,o,c,h,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+kt(n)):e.value!==""+kt(n)&&(e.value=""+kt(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?pn(e,y,kt(n)):a!=null?pn(e,y,kt(a)):o!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+kt(A):e.removeAttribute("name")}function On(e,n,a,o,c,h,y,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){En(e);return}a=a!=null?""+kt(a):"",n=n!=null?""+kt(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),En(e)}function pn(e,n,a){n==="number"&&xn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function an(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+kt(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Hr(e,n,a){if(n!=null&&(n=""+kt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+kt(a):""}function Ni(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(lt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=kt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),En(e)}function Gr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Lx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Lx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Dp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&wp(e,c,o)}else for(var h in n)n.hasOwnProperty(h)&&wp(e,h,n[h])}function Mc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ox=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(e){return Ox.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xi(){}var Ec=null;function bc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vr=null,kr=null;function Up(e){var n=ut(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Cn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[Mn]||null;if(!c)throw Error(r(90));Cn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&ki(o)}break t;case"textarea":Hr(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&an(e,!!a.multiple,n,!1)}}}var Tc=!1;function Lp(e,n,a){if(Tc)return e(n,a);Tc=!0;try{var o=e(n);return o}finally{if(Tc=!1,(Vr!==null||kr!==null)&&(iu(),Vr&&(n=Vr,e=kr,kr=Vr=null,Up(n),e)))for(n=0;n<e.length;n++)Up(e[n])}}function $s(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ac=!1;if(Wi)try{var to={};Object.defineProperty(to,"passive",{get:function(){Ac=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Ac=!1}var ya=null,Rc=null,_l=null;function Np(){if(_l)return _l;var e,n=Rc,a=n.length,o,c="value"in ya?ya.value:ya.textContent,h=c.length;for(e=0;e<a&&n[e]===c[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===c[h-o];o++);return _l=c.slice(e,1<o?1-o:void 0)}function vl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function xl(){return!0}function Op(){return!1}function Bn(e){function n(a,o,c,h,y){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?xl:Op,this.isPropagationStopped=Op,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Bn(rr),eo=v({},rr,{view:0,detail:0}),Px=Bn(eo),Cc,wc,no,Sl=v({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(Cc=e.screenX-no.screenX,wc=e.screenY-no.screenY):wc=Cc=0,no=e),Cc)},movementY:function(e){return"movementY"in e?e.movementY:wc}}),Pp=Bn(Sl),zx=v({},Sl,{dataTransfer:0}),Ix=Bn(zx),Bx=v({},eo,{relatedTarget:0}),Dc=Bn(Bx),Fx=v({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hx=Bn(Fx),Gx=v({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vx=Bn(Gx),kx=v({},rr,{data:0}),zp=Bn(kx),Xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Yx[e])?!!n[e]:!1}function Uc(){return jx}var qx=v({},eo,{key:function(e){if(e.key){var n=Xx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zx=Bn(qx),Kx=v({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ip=Bn(Kx),Qx=v({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),Jx=Bn(Qx),$x=v({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ty=Bn($x),ey=v({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ny=Bn(ey),iy=v({},rr,{newState:0,oldState:0}),ay=Bn(iy),ry=[9,13,27,32],Lc=Wi&&"CompositionEvent"in window,io=null;Wi&&"documentMode"in document&&(io=document.documentMode);var sy=Wi&&"TextEvent"in window&&!io,Bp=Wi&&(!Lc||io&&8<io&&11>=io),Fp=" ",Hp=!1;function Gp(e,n){switch(e){case"keyup":return ry.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xr=!1;function oy(e,n){switch(e){case"compositionend":return Vp(n);case"keypress":return n.which!==32?null:(Hp=!0,Fp);case"textInput":return e=n.data,e===Fp&&Hp?null:e;default:return null}}function ly(e,n){if(Xr)return e==="compositionend"||!Lc&&Gp(e,n)?(e=Np(),_l=Rc=ya=null,Xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bp&&n.locale!=="ko"?null:n.data;default:return null}}var uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!uy[e.type]:n==="textarea"}function Xp(e,n,a,o){Vr?kr?kr.push(o):kr=[o]:Vr=o,n=cu(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ao=null,ro=null;function cy(e){A_(e,0)}function Ml(e){var n=ft(e);if(ki(n))return e}function Wp(e,n){if(e==="change")return n}var Yp=!1;if(Wi){var Nc;if(Wi){var Oc="oninput"in document;if(!Oc){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Oc=typeof jp.oninput=="function"}Nc=Oc}else Nc=!1;Yp=Nc&&(!document.documentMode||9<document.documentMode)}function qp(){ao&&(ao.detachEvent("onpropertychange",Zp),ro=ao=null)}function Zp(e){if(e.propertyName==="value"&&Ml(ro)){var n=[];Xp(n,ro,e,bc(e)),Lp(cy,n)}}function fy(e,n,a){e==="focusin"?(qp(),ao=n,ro=a,ao.attachEvent("onpropertychange",Zp)):e==="focusout"&&qp()}function hy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(ro)}function dy(e,n){if(e==="click")return Ml(n)}function py(e,n){if(e==="input"||e==="change")return Ml(n)}function my(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:my;function so(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Wt.call(n,c)||!Zn(e[c],n[c]))return!1}return!0}function Kp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qp(e,n){var a=Kp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Kp(a)}}function Jp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Jp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $p(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=xn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=xn(e.document)}return n}function Pc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var gy=Wi&&"documentMode"in document&&11>=document.documentMode,Wr=null,zc=null,oo=null,Ic=!1;function tm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ic||Wr==null||Wr!==xn(o)||(o=Wr,"selectionStart"in o&&Pc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&so(oo,o)||(oo=o,o=cu(zc,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Wr)))}function sr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Yr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},Bc={},em={};Wi&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function or(e){if(Bc[e])return Bc[e];if(!Yr[e])return e;var n=Yr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in em)return Bc[e]=n[a];return e}var nm=or("animationend"),im=or("animationiteration"),am=or("animationstart"),_y=or("transitionrun"),vy=or("transitionstart"),xy=or("transitioncancel"),rm=or("transitionend"),sm=new Map,Fc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fc.push("scrollEnd");function vi(e,n){sm.set(e,n),zt(n,[e])}var El=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],jr=0,Hc=0;function bl(){for(var e=jr,n=Hc=jr=0;n<e;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var c=si[n];si[n++]=null;var h=si[n];if(si[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}h!==0&&om(a,c,h)}}function Tl(e,n,a,o){si[jr++]=e,si[jr++]=n,si[jr++]=a,si[jr++]=o,Hc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Gc(e,n,a,o){return Tl(e,n,a,o),Al(e)}function lr(e,n){return Tl(e,null,null,n),Al(e)}function om(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&n!==null&&(c=31-It(a),e=h.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),h):null}function Al(e){if(50<Do)throw Do=0,Qf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qr={};function yy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,o){return new yy(e,n,a,o)}function Vc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function lm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Rl(e,n,a,o,c,h){var y=0;if(o=e,typeof e=="function")Vc(e)&&(y=1);else if(typeof e=="string")y=TS(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Kn(31,a,n,c),e.elementType=C,e.lanes=h,e;case T:return ur(a.children,c,h,n);case M:y=8,c|=24;break;case _:return e=Kn(12,a,n,c|2),e.elementType=_,e.lanes=h,e;case B:return e=Kn(13,a,n,c),e.elementType=B,e.lanes=h,e;case G:return e=Kn(19,a,n,c),e.elementType=G,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:y=10;break t;case D:y=9;break t;case U:y=11;break t;case I:y=14;break t;case q:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Kn(y,a,n,c),n.elementType=e,n.type=o,n.lanes=h,n}function ur(e,n,a,o){return e=Kn(7,e,o,n),e.lanes=a,e}function kc(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function um(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function Xc(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var cm=new WeakMap;function oi(e,n){if(typeof e=="object"&&e!==null){var a=cm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ke(n)},cm.set(e,n),n)}return{value:e,source:n,stack:ke(n)}}var Zr=[],Kr=0,Cl=null,lo=0,li=[],ui=0,Sa=null,Oi=1,Pi="";function ji(e,n){Zr[Kr++]=lo,Zr[Kr++]=Cl,Cl=e,lo=n}function fm(e,n,a){li[ui++]=Oi,li[ui++]=Pi,li[ui++]=Sa,Sa=e;var o=Oi;e=Pi;var c=32-It(o)-1;o&=~(1<<c),a+=1;var h=32-It(n)+c;if(30<h){var y=c-c%5;h=(o&(1<<y)-1).toString(32),o>>=y,c-=y,Oi=1<<32-It(n)+c|a<<c|o,Pi=h+e}else Oi=1<<h|a<<c|o,Pi=e}function Wc(e){e.return!==null&&(ji(e,1),fm(e,1,0))}function Yc(e){for(;e===Cl;)Cl=Zr[--Kr],Zr[Kr]=null,lo=Zr[--Kr],Zr[Kr]=null;for(;e===Sa;)Sa=li[--ui],li[ui]=null,Pi=li[--ui],li[ui]=null,Oi=li[--ui],li[ui]=null}function hm(e,n){li[ui++]=Oi,li[ui++]=Pi,li[ui++]=Sa,Oi=n.id,Pi=n.overflow,Sa=e}var bn=null,qe=null,be=!1,Ma=null,ci=!1,jc=Error(r(519));function Ea(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(oi(n,e)),jc}function dm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[Mn]=o,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)ye(Lo[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Ni(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||D_(n.textContent,a)?(o.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),o.onScroll!=null&&ye("scroll",n),o.onScrollEnd!=null&&ye("scrollend",n),o.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ea(e,!0)}function pm(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:bn=bn.return}}function Qr(e){if(e!==bn)return!1;if(!be)return pm(e),be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||hh(e.type,e.memoizedProps)),a=!a),a&&qe&&Ea(e),pm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qe=F_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qe=F_(e)}else n===27?(n=qe,Ia(e.type)?(e=_h,_h=null,qe=e):qe=n):qe=bn?hi(e.stateNode.nextSibling):null;return!0}function cr(){qe=bn=null,be=!1}function qc(){var e=Ma;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),Ma=null),e}function uo(e){Ma===null?Ma=[e]:Ma.push(e)}var Zc=L(null),fr=null,qi=null;function ba(e,n,a){St(Zc,n._currentValue),n._currentValue=a}function Zi(e){e._currentValue=Zc.current,J(Zc)}function Kc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Qc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var y=c.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=c;for(var F=0;F<n.length;F++)if(A.context===n[F]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),Kc(h.return,a,e),o||(y=null);break t}h=A.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,h=y.alternate,h!==null&&(h.lanes|=a),Kc(y,a,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Jr(e,n,a,o){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var A=c.type;Zn(c.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(c===pt.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Io):e=[Io])}c=c.return}e!==null&&Qc(n,e,a,o),n.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hr(e){fr=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return mm(fr,e)}function Dl(e,n){return fr===null&&hr(e),mm(e,n)}function mm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},qi===null){if(e===null)throw Error(r(308));qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else qi=qi.next=n;return a}var Sy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},My=s.unstable_scheduleCallback,Ey=s.unstable_NormalPriority,un={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jc(){return{controller:new Sy,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&My(Ey,function(){e.controller.abort()})}var fo=null,$c=0,$r=0,ts=null;function by(e,n){if(fo===null){var a=fo=[];$c=0,$r=ih(),ts={status:"pending",value:void 0,then:function(o){a.push(o)}}}return $c++,n.then(gm,gm),n}function gm(){if(--$c===0&&fo!==null){ts!==null&&(ts.status="fulfilled");var e=fo;fo=null,$r=0,ts=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ty(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var _m=P.S;P.S=function(e,n){t_=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&by(e,n),_m!==null&&_m(e,n)};var dr=L(null);function tf(){var e=dr.current;return e!==null?e:We.pooledCache}function Ul(e,n){n===null?St(dr,dr.current):St(dr,n.pool)}function vm(){var e=tf();return e===null?null:{parent:un._currentValue,pool:e}}var es=Error(r(460)),ef=Error(r(474)),Ll=Error(r(542)),Nl={then:function(){}};function xm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ym(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Mm(e),e;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Mm(e),e}throw mr=n,es}}function pr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(mr=a,es):a}}var mr=null;function Sm(){if(mr===null)throw Error(r(459));var e=mr;return mr=null,e}function Mm(e){if(e===es||e===Ll)throw Error(r(483))}var ns=null,ho=0;function Ol(e){var n=ho;return ho+=1,ns===null&&(ns=[]),ym(ns,e,n)}function po(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Pl(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Em(e){function n(K,V){if(e){var nt=K.deletions;nt===null?(K.deletions=[V],K.flags|=16):nt.push(V)}}function a(K,V){if(!e)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function o(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function c(K,V){return K=Yi(K,V),K.index=0,K.sibling=null,K}function h(K,V,nt){return K.index=nt,e?(nt=K.alternate,nt!==null?(nt=nt.index,nt<V?(K.flags|=67108866,V):nt):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function y(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,V,nt,vt){return V===null||V.tag!==6?(V=kc(nt,K.mode,vt),V.return=K,V):(V=c(V,nt),V.return=K,V)}function F(K,V,nt,vt){var te=nt.type;return te===T?gt(K,V,nt.props.children,vt,nt.key):V!==null&&(V.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===q&&pr(te)===V.type)?(V=c(V,nt.props),po(V,nt),V.return=K,V):(V=Rl(nt.type,nt.key,nt.props,null,K.mode,vt),po(V,nt),V.return=K,V)}function it(K,V,nt,vt){return V===null||V.tag!==4||V.stateNode.containerInfo!==nt.containerInfo||V.stateNode.implementation!==nt.implementation?(V=Xc(nt,K.mode,vt),V.return=K,V):(V=c(V,nt.children||[]),V.return=K,V)}function gt(K,V,nt,vt,te){return V===null||V.tag!==7?(V=ur(nt,K.mode,vt,te),V.return=K,V):(V=c(V,nt),V.return=K,V)}function xt(K,V,nt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=kc(""+V,K.mode,nt),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return nt=Rl(V.type,V.key,V.props,null,K.mode,nt),po(nt,V),nt.return=K,nt;case E:return V=Xc(V,K.mode,nt),V.return=K,V;case q:return V=pr(V),xt(K,V,nt)}if(lt(V)||Z(V))return V=ur(V,K.mode,nt,null),V.return=K,V;if(typeof V.then=="function")return xt(K,Ol(V),nt);if(V.$$typeof===N)return xt(K,Dl(K,V),nt);Pl(K,V)}return null}function st(K,V,nt,vt){var te=V!==null?V.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return te!==null?null:A(K,V,""+nt,vt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:return nt.key===te?F(K,V,nt,vt):null;case E:return nt.key===te?it(K,V,nt,vt):null;case q:return nt=pr(nt),st(K,V,nt,vt)}if(lt(nt)||Z(nt))return te!==null?null:gt(K,V,nt,vt,null);if(typeof nt.then=="function")return st(K,V,Ol(nt),vt);if(nt.$$typeof===N)return st(K,V,Dl(K,nt),vt);Pl(K,nt)}return null}function dt(K,V,nt,vt,te){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return K=K.get(nt)||null,A(V,K,""+vt,te);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case S:return K=K.get(vt.key===null?nt:vt.key)||null,F(V,K,vt,te);case E:return K=K.get(vt.key===null?nt:vt.key)||null,it(V,K,vt,te);case q:return vt=pr(vt),dt(K,V,nt,vt,te)}if(lt(vt)||Z(vt))return K=K.get(nt)||null,gt(V,K,vt,te,null);if(typeof vt.then=="function")return dt(K,V,nt,Ol(vt),te);if(vt.$$typeof===N)return dt(K,V,nt,Dl(V,vt),te);Pl(V,vt)}return null}function Gt(K,V,nt,vt){for(var te=null,Ce=null,jt=V,he=V=0,Ee=null;jt!==null&&he<nt.length;he++){jt.index>he?(Ee=jt,jt=null):Ee=jt.sibling;var we=st(K,jt,nt[he],vt);if(we===null){jt===null&&(jt=Ee);break}e&&jt&&we.alternate===null&&n(K,jt),V=h(we,V,he),Ce===null?te=we:Ce.sibling=we,Ce=we,jt=Ee}if(he===nt.length)return a(K,jt),be&&ji(K,he),te;if(jt===null){for(;he<nt.length;he++)jt=xt(K,nt[he],vt),jt!==null&&(V=h(jt,V,he),Ce===null?te=jt:Ce.sibling=jt,Ce=jt);return be&&ji(K,he),te}for(jt=o(jt);he<nt.length;he++)Ee=dt(jt,K,he,nt[he],vt),Ee!==null&&(e&&Ee.alternate!==null&&jt.delete(Ee.key===null?he:Ee.key),V=h(Ee,V,he),Ce===null?te=Ee:Ce.sibling=Ee,Ce=Ee);return e&&jt.forEach(function(Va){return n(K,Va)}),be&&ji(K,he),te}function ne(K,V,nt,vt){if(nt==null)throw Error(r(151));for(var te=null,Ce=null,jt=V,he=V=0,Ee=null,we=nt.next();jt!==null&&!we.done;he++,we=nt.next()){jt.index>he?(Ee=jt,jt=null):Ee=jt.sibling;var Va=st(K,jt,we.value,vt);if(Va===null){jt===null&&(jt=Ee);break}e&&jt&&Va.alternate===null&&n(K,jt),V=h(Va,V,he),Ce===null?te=Va:Ce.sibling=Va,Ce=Va,jt=Ee}if(we.done)return a(K,jt),be&&ji(K,he),te;if(jt===null){for(;!we.done;he++,we=nt.next())we=xt(K,we.value,vt),we!==null&&(V=h(we,V,he),Ce===null?te=we:Ce.sibling=we,Ce=we);return be&&ji(K,he),te}for(jt=o(jt);!we.done;he++,we=nt.next())we=dt(jt,K,he,we.value,vt),we!==null&&(e&&we.alternate!==null&&jt.delete(we.key===null?he:we.key),V=h(we,V,he),Ce===null?te=we:Ce.sibling=we,Ce=we);return e&&jt.forEach(function(zS){return n(K,zS)}),be&&ji(K,he),te}function Fe(K,V,nt,vt){if(typeof nt=="object"&&nt!==null&&nt.type===T&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:t:{for(var te=nt.key;V!==null;){if(V.key===te){if(te=nt.type,te===T){if(V.tag===7){a(K,V.sibling),vt=c(V,nt.props.children),vt.return=K,K=vt;break t}}else if(V.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===q&&pr(te)===V.type){a(K,V.sibling),vt=c(V,nt.props),po(vt,nt),vt.return=K,K=vt;break t}a(K,V);break}else n(K,V);V=V.sibling}nt.type===T?(vt=ur(nt.props.children,K.mode,vt,nt.key),vt.return=K,K=vt):(vt=Rl(nt.type,nt.key,nt.props,null,K.mode,vt),po(vt,nt),vt.return=K,K=vt)}return y(K);case E:t:{for(te=nt.key;V!==null;){if(V.key===te)if(V.tag===4&&V.stateNode.containerInfo===nt.containerInfo&&V.stateNode.implementation===nt.implementation){a(K,V.sibling),vt=c(V,nt.children||[]),vt.return=K,K=vt;break t}else{a(K,V);break}else n(K,V);V=V.sibling}vt=Xc(nt,K.mode,vt),vt.return=K,K=vt}return y(K);case q:return nt=pr(nt),Fe(K,V,nt,vt)}if(lt(nt))return Gt(K,V,nt,vt);if(Z(nt)){if(te=Z(nt),typeof te!="function")throw Error(r(150));return nt=te.call(nt),ne(K,V,nt,vt)}if(typeof nt.then=="function")return Fe(K,V,Ol(nt),vt);if(nt.$$typeof===N)return Fe(K,V,Dl(K,nt),vt);Pl(K,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,V!==null&&V.tag===6?(a(K,V.sibling),vt=c(V,nt),vt.return=K,K=vt):(a(K,V),vt=kc(nt,K.mode,vt),vt.return=K,K=vt),y(K)):a(K,V)}return function(K,V,nt,vt){try{ho=0;var te=Fe(K,V,nt,vt);return ns=null,te}catch(jt){if(jt===es||jt===Ll)throw jt;var Ce=Kn(29,jt,null,K.mode);return Ce.lanes=vt,Ce.return=K,Ce}finally{}}}var gr=Em(!0),bm=Em(!1),Ta=!1;function nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ra(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Al(e),om(e,null,a),n}return Tl(e,o,n,a),Al(e)}function mo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Li(e,a)}}function rf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var sf=!1;function go(){if(sf){var e=ts;if(e!==null)throw e}}function _o(e,n,a,o){sf=!1;var c=e.updateQueue;Ta=!1;var h=c.firstBaseUpdate,y=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var F=A,it=F.next;F.next=null,y===null?h=it:y.next=it,y=F;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,A=gt.lastBaseUpdate,A!==y&&(A===null?gt.firstBaseUpdate=it:A.next=it,gt.lastBaseUpdate=F))}if(h!==null){var xt=c.baseState;y=0,gt=it=F=null,A=h;do{var st=A.lane&-536870913,dt=st!==A.lane;if(dt?(Me&st)===st:(o&st)===st){st!==0&&st===$r&&(sf=!0),gt!==null&&(gt=gt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=e,ne=A;st=n;var Fe=a;switch(ne.tag){case 1:if(Gt=ne.payload,typeof Gt=="function"){xt=Gt.call(Fe,xt,st);break t}xt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=ne.payload,st=typeof Gt=="function"?Gt.call(Fe,xt,st):Gt,st==null)break t;xt=v({},xt,st);break t;case 2:Ta=!0}}st=A.callback,st!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=c.callbacks,dt===null?c.callbacks=[st]:dt.push(st))}else dt={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},gt===null?(it=gt=dt,F=xt):gt=gt.next=dt,y|=st;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;dt=A,A=dt.next,dt.next=null,c.lastBaseUpdate=dt,c.shared.pending=null}}while(!0);gt===null&&(F=xt),c.baseState=F,c.firstBaseUpdate=it,c.lastBaseUpdate=gt,h===null&&(c.shared.lanes=0),La|=y,e.lanes=y,e.memoizedState=xt}}function Tm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Am(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Tm(a[e],n)}var is=L(null),zl=L(0);function Rm(e,n){e=aa,St(zl,e),St(is,n),aa=e|n.baseLanes}function of(){St(zl,aa),St(is,is.current)}function lf(){aa=zl.current,J(is),J(zl)}var Qn=L(null),fi=null;function Ca(e){var n=e.alternate;St(rn,rn.current&1),St(Qn,e),fi===null&&(n===null||is.current!==null||n.memoizedState!==null)&&(fi=e)}function uf(e){St(rn,rn.current),St(Qn,e),fi===null&&(fi=e)}function Cm(e){e.tag===22?(St(rn,rn.current),St(Qn,e),fi===null&&(fi=e)):wa()}function wa(){St(rn,rn.current),St(Qn,Qn.current)}function Jn(e){J(Qn),fi===e&&(fi=null),J(rn)}var rn=L(0);function Il(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||mh(a)||gh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ki=0,ce=null,Ie=null,cn=null,Bl=!1,as=!1,_r=!1,Fl=0,vo=0,rs=null,Ay=0;function tn(){throw Error(r(321))}function cf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function ff(e,n,a,o,c,h){return Ki=h,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?fg:Af,_r=!1,h=a(o,c),_r=!1,as&&(h=Dm(n,a,o,c)),wm(e),h}function wm(e){P.H=So;var n=Ie!==null&&Ie.next!==null;if(Ki=0,cn=Ie=ce=null,Bl=!1,vo=0,rs=null,n)throw Error(r(300));e===null||fn||(e=e.dependencies,e!==null&&wl(e)&&(fn=!0))}function Dm(e,n,a,o){ce=e;var c=0;do{if(as&&(rs=null),vo=0,as=!1,25<=c)throw Error(r(301));if(c+=1,cn=Ie=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=hg,h=n(a,o)}while(as);return h}function Ry(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?xo(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(ce.flags|=1024),n}function hf(){var e=Fl!==0;return Fl=0,e}function df(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function pf(e){if(Bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Bl=!1}Ki=0,cn=Ie=ce=null,as=!1,vo=Fl=0,rs=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ce.memoizedState=cn=e:cn=cn.next=e,cn}function sn(){if(Ie===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=cn===null?ce.memoizedState:cn.next;if(n!==null)cn=n,Ie=e;else{if(e===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},cn===null?ce.memoizedState=cn=e:cn=cn.next=e}return cn}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(e){var n=vo;return vo+=1,rs===null&&(rs=[]),e=ym(rs,e,n),n=ce,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?fg:Af),e}function Gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xo(e);if(e.$$typeof===N)return Tn(e)}throw Error(r(438,String(e)))}function mf(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hl(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Qi(e,n){return typeof n=="function"?n(e):n}function Vl(e){var n=sn();return gf(n,Ie,e)}function gf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,h=o.pending;if(h!==null){if(c!==null){var y=c.next;c.next=h.next,h.next=y}n.baseQueue=c=h,o.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var A=y=null,F=null,it=n,gt=!1;do{var xt=it.lane&-536870913;if(xt!==it.lane?(Me&xt)===xt:(Ki&xt)===xt){var st=it.revertLane;if(st===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),xt===$r&&(gt=!0);else if((Ki&st)===st){it=it.next,st===$r&&(gt=!0);continue}else xt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},F===null?(A=F=xt,y=h):F=F.next=xt,ce.lanes|=st,La|=st;xt=it.action,_r&&a(h,xt),h=it.hasEagerState?it.eagerState:a(h,xt)}else st={lane:xt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},F===null?(A=F=st,y=h):F=F.next=st,ce.lanes|=xt,La|=xt;it=it.next}while(it!==null&&it!==n);if(F===null?y=h:F.next=A,!Zn(h,e.memoizedState)&&(fn=!0,gt&&(a=ts,a!==null)))throw a;e.memoizedState=h,e.baseState=y,e.baseQueue=F,o.lastRenderedState=h}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function _f(e){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do h=e(h,y.action),y=y.next;while(y!==c);Zn(h,n.memoizedState)||(fn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Um(e,n,a){var o=ce,c=sn(),h=be;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Zn((Ie||c).memoizedState,a);if(y&&(c.memoizedState=a,fn=!0),c=c.queue,yf(Om.bind(null,o,c,e),[e]),c.getSnapshot!==n||y||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,ss(9,{destroy:void 0},Nm.bind(null,o,c,a,n),null),We===null)throw Error(r(349));h||(Ki&127)!==0||Lm(o,n,a)}return a}function Lm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Hl(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Nm(e,n,a,o){n.value=a,n.getSnapshot=o,Pm(n)&&zm(e)}function Om(e,n,a){return a(function(){Pm(n)&&zm(e)})}function Pm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function zm(e){var n=lr(e,2);n!==null&&kn(n,e,2)}function vf(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),_r){Qt(!0);try{a()}finally{Qt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},n}function Im(e,n,a,o){return e.baseState=a,gf(e,Ie,typeof o=="function"?o:Qi)}function Cy(e,n,a,o,c){if(Wl(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};P.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Bm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Bm(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var h=P.T,y={};P.T=y;try{var A=a(c,o),F=P.S;F!==null&&F(y,A),Fm(e,n,A)}catch(it){xf(e,n,it)}finally{h!==null&&y.types!==null&&(h.types=y.types),P.T=h}}else try{h=a(c,o),Fm(e,n,h)}catch(it){xf(e,n,it)}}function Fm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Hm(e,n,o)},function(o){return xf(e,n,o)}):Hm(e,n,a)}function Hm(e,n,a){n.status="fulfilled",n.value=a,Gm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Bm(e,a)))}function xf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Gm(n),n=n.next;while(n!==o)}e.action=null}function Gm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Vm(e,n){return n}function km(e,n){if(be){var a=We.formState;if(a!==null){t:{var o=ce;if(be){if(qe){e:{for(var c=qe,h=ci;c.nodeType!==8;){if(!h){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){qe=hi(c.nextSibling),o=c.data==="F!";break t}}Ea(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vm,lastRenderedState:n},a.queue=o,a=lg.bind(null,ce,o),o.dispatch=a,o=vf(!1),h=Tf.bind(null,ce,!1,o.queue),o=Pn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Cy.bind(null,ce,c,h,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Xm(e){var n=sn();return Wm(n,Ie,e)}function Wm(e,n,a){if(n=gf(e,n,Vm)[0],e=Vl(Qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(y){throw y===es?Ll:y}else o=n;n=sn();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,ss(9,{destroy:void 0},wy.bind(null,c,a),null)),[o,h,e]}function wy(e,n){e.action=n}function Ym(e){var n=sn(),a=Ie;if(a!==null)return Wm(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ss(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Hl(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function jm(){return sn().memoizedState}function kl(e,n,a,o){var c=Pn();ce.flags|=e,c.memoizedState=ss(1|n,{destroy:void 0},a,o===void 0?null:o)}function Xl(e,n,a,o){var c=sn();o=o===void 0?null:o;var h=c.memoizedState.inst;Ie!==null&&o!==null&&cf(o,Ie.memoizedState.deps)?c.memoizedState=ss(n,h,a,o):(ce.flags|=e,c.memoizedState=ss(1|n,h,a,o))}function qm(e,n){kl(8390656,8,e,n)}function yf(e,n){Xl(2048,8,e,n)}function Dy(e){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=Hl(),ce.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Zm(e){var n=sn().memoizedState;return Dy({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Km(e,n){return Xl(4,2,e,n)}function Qm(e,n){return Xl(4,4,e,n)}function Jm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $m(e,n,a){a=a!=null?a.concat([e]):null,Xl(4,4,Jm.bind(null,n,e),a)}function Sf(){}function tg(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&cf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function eg(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&cf(n,o[1]))return o[0];if(o=e(),_r){Qt(!0);try{e()}finally{Qt(!1)}}return a.memoizedState=[o,n],o}function Mf(e,n,a){return a===void 0||(Ki&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=n_(),ce.lanes|=e,La|=e,a)}function ng(e,n,a,o){return Zn(a,n)?a:is.current!==null?(e=Mf(e,a,o),Zn(e,n)||(fn=!0),e):(Ki&42)===0||(Ki&1073741824)!==0&&(Me&261930)===0?(fn=!0,e.memoizedState=a):(e=n_(),ce.lanes|=e,La|=e,n)}function ig(e,n,a,o,c){var h=X.p;X.p=h!==0&&8>h?h:8;var y=P.T,A={};P.T=A,Tf(e,!1,n,a);try{var F=c(),it=P.S;if(it!==null&&it(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var gt=Ty(F,o);yo(e,n,gt,ei(e))}else yo(e,n,o,ei(e))}catch(xt){yo(e,n,{then:function(){},status:"rejected",reason:xt},ei())}finally{X.p=h,y!==null&&A.types!==null&&(y.types=A.types),P.T=y}}function Uy(){}function Ef(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=ag(e).queue;ig(e,c,n,W,a===null?Uy:function(){return rg(e),a(o)})}function ag(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function rg(e){var n=ag(e);n.next===null&&(n=e.alternate.memoizedState),yo(e,n.next.queue,{},ei())}function bf(){return Tn(Io)}function sg(){return sn().memoizedState}function og(){return sn().memoizedState}function Ly(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=Aa(a);var o=Ra(n,e,a);o!==null&&(kn(o,n,a),mo(o,n,a)),n={cache:Jc()},e.payload=n;return}n=n.return}}function Ny(e,n,a){var o=ei();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Wl(e)?ug(n,a):(a=Gc(e,n,a,o),a!==null&&(kn(a,e,o),cg(a,n,o)))}function lg(e,n,a){var o=ei();yo(e,n,a,o)}function yo(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wl(e))ug(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,A=h(y,a);if(c.hasEagerState=!0,c.eagerState=A,Zn(A,y))return Tl(e,n,c,0),We===null&&bl(),!1}catch{}finally{}if(a=Gc(e,n,c,o),a!==null)return kn(a,e,o),cg(a,n,o),!0}return!1}function Tf(e,n,a,o){if(o={lane:2,revertLane:ih(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wl(e)){if(n)throw Error(r(479))}else n=Gc(e,a,o,2),n!==null&&kn(n,e,2)}function Wl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function ug(e,n){as=Bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function cg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Li(e,a)}}var So={readContext:Tn,use:Gl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};So.useEffectEvent=tn;var fg={readContext:Tn,use:Gl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:qm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,kl(4194308,4,Jm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return kl(4194308,4,e,n)},useInsertionEffect:function(e,n){kl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var o=e();if(_r){Qt(!0);try{e()}finally{Qt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Pn();if(a!==void 0){var c=a(n);if(_r){Qt(!0);try{a(n)}finally{Qt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Ny.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=vf(e);var n=e.queue,a=lg.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Sf,useDeferredValue:function(e,n){var a=Pn();return Mf(a,e,n)},useTransition:function(){var e=vf(!1);return e=ig.bind(null,ce,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ce,c=Pn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(Me&127)!==0||Lm(o,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,qm(Om.bind(null,o,h,e),[e]),o.flags|=2048,ss(9,{destroy:void 0},Nm.bind(null,o,h,a,n),null),a},useId:function(){var e=Pn(),n=We.identifierPrefix;if(be){var a=Pi,o=Oi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ay++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:bf,useFormState:km,useActionState:km,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tf.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:mf,useCacheRefresh:function(){return Pn().memoizedState=Ly.bind(null,ce)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Af={readContext:Tn,use:Gl,useCallback:tg,useContext:Tn,useEffect:yf,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:eg,useReducer:Vl,useRef:jm,useState:function(){return Vl(Qi)},useDebugValue:Sf,useDeferredValue:function(e,n){var a=sn();return ng(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Vl(Qi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:Um,useId:sg,useHostTransitionStatus:bf,useFormState:Xm,useActionState:Xm,useOptimistic:function(e,n){var a=sn();return Im(a,Ie,e,n)},useMemoCache:mf,useCacheRefresh:og};Af.useEffectEvent=Zm;var hg={readContext:Tn,use:Gl,useCallback:tg,useContext:Tn,useEffect:yf,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:eg,useReducer:_f,useRef:jm,useState:function(){return _f(Qi)},useDebugValue:Sf,useDeferredValue:function(e,n){var a=sn();return Ie===null?Mf(a,e,n):ng(a,Ie.memoizedState,e,n)},useTransition:function(){var e=_f(Qi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:Um,useId:sg,useHostTransitionStatus:bf,useFormState:Ym,useActionState:Ym,useOptimistic:function(e,n){var a=sn();return Ie!==null?Im(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:mf,useCacheRefresh:og};hg.useEffectEvent=Zm;function Rf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ei(),c=Aa(o);c.payload=n,a!=null&&(c.callback=a),n=Ra(e,c,o),n!==null&&(kn(n,e,o),mo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ei(),c=Aa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ra(e,c,o),n!==null&&(kn(n,e,o),mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),o=Aa(a);o.tag=2,n!=null&&(o.callback=n),n=Ra(e,o,a),n!==null&&(kn(n,e,a),mo(n,e,a))}};function dg(e,n,a,o,c,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!so(a,o)||!so(c,h):!0}function pg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Cf.enqueueReplaceState(n,n.state,null)}function vr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function mg(e){El(e)}function gg(e){console.error(e)}function _g(e){El(e)}function Yl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function vg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function wf(e,n,a){return a=Aa(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(e,n)},a}function xg(e){return e=Aa(e),e.tag=3,e}function yg(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;e.payload=function(){return c(h)},e.callback=function(){vg(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){vg(n,a,o),typeof c!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Oy(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Jr(n,a,c,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?au():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),th(e,o,c)),!1;case 22:return a.flags|=65536,o===Nl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),th(e,o,c)),!1}throw Error(r(435,a.tag))}return th(e,o,c),au(),!1}if(be)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==jc&&(e=Error(r(422),{cause:o}),uo(oi(e,a)))):(o!==jc&&(n=Error(r(423),{cause:o}),uo(oi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=oi(o,a),c=wf(e.stateNode,o,c),rf(e,c),en!==4&&(en=2)),!1;var h=Error(r(520),{cause:o});if(h=oi(h,a),wo===null?wo=[h]:wo.push(h),en!==4&&(en=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=wf(a.stateNode,o,e),rf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Na===null||!Na.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=xg(c),yg(c,e,a,o),rf(a,c),!1}a=a.return}while(a!==null);return!1}var Df=Error(r(461)),fn=!1;function An(e,n,a,o){n.child=e===null?bm(n,null,a,o):gr(n,e.child,a,o)}function Sg(e,n,a,o,c){a=a.render;var h=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return hr(n),o=ff(e,n,a,y,h,c),A=hf(),e!==null&&!fn?(df(e,n,c),Ji(e,n,c)):(be&&A&&Wc(n),n.flags|=1,An(e,n,o,c),n.child)}function Mg(e,n,a,o,c){if(e===null){var h=a.type;return typeof h=="function"&&!Vc(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Eg(e,n,h,o,c)):(e=Rl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Bf(e,c)){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(y,o)&&e.ref===n.ref)return Ji(e,n,c)}return n.flags|=1,e=Yi(h,o),e.ref=n.ref,e.return=n,n.child=e}function Eg(e,n,a,o,c){if(e!==null){var h=e.memoizedProps;if(so(h,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=h,Bf(e,c))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,Ji(e,n,c)}return Uf(e,n,a,o,c)}function bg(e,n,a,o){var c=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~h}else o=0,n.child=null;return Tg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ul(n,h!==null?h.cachePool:null),h!==null?Rm(n,h):of(),Cm(n);else return o=n.lanes=536870912,Tg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Ul(n,h.cachePool),Rm(n,h),wa(),n.memoizedState=null):(e!==null&&Ul(n,null),of(),wa());return An(e,n,c,a),n.child}function Mo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Tg(e,n,a,o,c){var h=tf();return h=h===null?null:{parent:un._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Ul(n,null),of(),Cm(n),e!==null&&Jr(e,n,o,!0),n.childLanes=c,null}function jl(e,n){return n=Zl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Ag(e,n,a){return gr(n,e.child,null,a),e=jl(n,n.pendingProps),e.flags|=2,Jn(n),n.memoizedState=null,e}function Py(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(be){if(o.mode==="hidden")return e=jl(n,o),n.lanes=536870912,Mo(null,e);if(uf(n),(e=qe)?(e=B_(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=um(e),a.return=n,n.child=a,bn=n,qe=null)):e=null,e===null)throw Ea(n);return n.lanes=536870912,null}return jl(n,o)}var h=e.memoizedState;if(h!==null){var y=h.dehydrated;if(uf(n),c)if(n.flags&256)n.flags&=-257,n=Ag(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||Jr(e,n,a,!1),c=(a&e.childLanes)!==0,fn||c){if(o=We,o!==null&&(y=Ir(o,a),y!==0&&y!==h.retryLane))throw h.retryLane=y,lr(e,y),kn(o,e,y),Df;au(),n=Ag(e,n,a)}else e=h.treeContext,qe=hi(y.nextSibling),bn=n,be=!0,Ma=null,ci=!1,e!==null&&hm(n,e),n=jl(n,o),n.flags|=4096;return n}return e=Yi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ql(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Uf(e,n,a,o,c){return hr(n),a=ff(e,n,a,o,void 0,c),o=hf(),e!==null&&!fn?(df(e,n,c),Ji(e,n,c)):(be&&o&&Wc(n),n.flags|=1,An(e,n,a,c),n.child)}function Rg(e,n,a,o,c,h){return hr(n),n.updateQueue=null,a=Dm(n,o,a,c),wm(e),o=hf(),e!==null&&!fn?(df(e,n,h),Ji(e,n,h)):(be&&o&&Wc(n),n.flags|=1,An(e,n,a,h),n.child)}function Cg(e,n,a,o,c){if(hr(n),n.stateNode===null){var h=qr,y=a.contextType;typeof y=="object"&&y!==null&&(h=Tn(y)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Cf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},nf(n),y=a.contextType,h.context=typeof y=="object"&&y!==null?Tn(y):qr,h.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Rf(n,a,y,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&Cf.enqueueReplaceState(h,h.state,null),_o(n,o,h,c),go(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,F=vr(a,A);h.props=F;var it=h.context,gt=a.contextType;y=qr,typeof gt=="object"&&gt!==null&&(y=Tn(gt));var xt=a.getDerivedStateFromProps;gt=typeof xt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,gt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||it!==y)&&pg(n,h,o,y),Ta=!1;var st=n.memoizedState;h.state=st,_o(n,o,h,c),go(),it=n.memoizedState,A||st!==it||Ta?(typeof xt=="function"&&(Rf(n,a,xt,o),it=n.memoizedState),(F=Ta||dg(n,a,F,o,st,it,y))?(gt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),h.props=o,h.state=it,h.context=y,o=F):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,af(e,n),y=n.memoizedProps,gt=vr(a,y),h.props=gt,xt=n.pendingProps,st=h.context,it=a.contextType,F=qr,typeof it=="object"&&it!==null&&(F=Tn(it)),A=a.getDerivedStateFromProps,(it=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==xt||st!==F)&&pg(n,h,o,F),Ta=!1,st=n.memoizedState,h.state=st,_o(n,o,h,c),go();var dt=n.memoizedState;y!==xt||st!==dt||Ta||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof A=="function"&&(Rf(n,a,A,o),dt=n.memoizedState),(gt=Ta||dg(n,a,gt,o,st,dt,F)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(it||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,dt,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,dt,F)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=dt),h.props=o,h.state=dt,h.context=F,o=gt):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,ql(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=gr(n,e.child,null,c),n.child=gr(n,null,a,c)):An(e,n,a,c),n.memoizedState=h.state,e=n.child):e=Ji(e,n,c),e}function wg(e,n,a,o){return cr(),n.flags|=256,An(e,n,a,o),n.child}var Lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nf(e){return{baseLanes:e,cachePool:vm()}}function Of(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ti),e}function Dg(e,n,a){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(c?Ca(n):wa(),(e=qe)?(e=B_(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=um(e),a.return=n,n.child=a,bn=n,qe=null)):e=null,e===null)throw Ea(n);return gh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,c?(wa(),c=n.mode,A=Zl({mode:"hidden",children:A},c),o=ur(o,c,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Nf(a),o.childLanes=Of(e,y,a),n.memoizedState=Lf,Mo(null,o)):(Ca(n),Pf(n,A))}var F=e.memoizedState;if(F!==null&&(A=F.dehydrated,A!==null)){if(h)n.flags&256?(Ca(n),n.flags&=-257,n=zf(e,n,a)):n.memoizedState!==null?(wa(),n.child=e.child,n.flags|=128,n=null):(wa(),A=o.fallback,c=n.mode,o=Zl({mode:"visible",children:o.children},c),A=ur(A,c,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,gr(n,e.child,null,a),o=n.child,o.memoizedState=Nf(a),o.childLanes=Of(e,y,a),n.memoizedState=Lf,n=Mo(null,o));else if(Ca(n),gh(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var it=y.dgst;y=it,o=Error(r(419)),o.stack="",o.digest=y,uo({value:o,source:null,stack:null}),n=zf(e,n,a)}else if(fn||Jr(e,n,a,!1),y=(a&e.childLanes)!==0,fn||y){if(y=We,y!==null&&(o=Ir(y,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,lr(e,o),kn(y,e,o),Df;mh(A)||au(),n=zf(e,n,a)}else mh(A)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,qe=hi(A.nextSibling),bn=n,be=!0,Ma=null,ci=!1,e!==null&&hm(n,e),n=Pf(n,o.children),n.flags|=4096);return n}return c?(wa(),A=o.fallback,c=n.mode,F=e.child,it=F.sibling,o=Yi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,it!==null?A=Yi(it,A):(A=ur(A,c,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Mo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Nf(a):(c=A.cachePool,c!==null?(F=un._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=vm(),A={baseLanes:A.baseLanes|a,cachePool:c}),o.memoizedState=A,o.childLanes=Of(e,y,a),n.memoizedState=Lf,Mo(e.child,o)):(Ca(n),a=e.child,e=a.sibling,a=Yi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Pf(e,n){return n=Zl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Zl(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function zf(e,n,a){return gr(n,e.child,null,a),e=Pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ug(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Kc(e.return,n,a)}function If(e,n,a,o,c,h){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=c,y.treeForkCount=h)}function Lg(e,n,a){var o=n.pendingProps,c=o.revealOrder,h=o.tail;o=o.children;var y=rn.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,St(rn,y),An(e,n,o,a),o=be?lo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ug(e,a,n);else if(e.tag===19)Ug(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Il(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),If(n,!1,c,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Il(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}If(n,!0,a,null,h,o);break;case"together":If(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),La|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Jr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Yi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Yi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Bf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function zy(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),ba(n,un,e.memoizedState.cache),cr();break;case 27:case 5:Xt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,uf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ca(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Dg(e,n,a):(Ca(n),e=Ji(e,n,a),e!==null?e.sibling:null);Ca(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Jr(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Lg(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(rn,rn.current),o)break;return null;case 22:return n.lanes=0,bg(e,n,a,n.pendingProps);case 24:ba(n,un,e.memoizedState.cache)}return Ji(e,n,a)}function Ng(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Bf(e,a)&&(n.flags&128)===0)return fn=!1,zy(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,be&&(n.flags&1048576)!==0&&fm(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=pr(n.elementType),n.type=e,typeof e=="function")Vc(e)?(o=vr(e,o),n.tag=1,n=Cg(null,n,e,o,a)):(n.tag=0,n=Uf(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===U){n.tag=11,n=Sg(null,n,e,o,a);break t}else if(c===I){n.tag=14,n=Mg(null,n,e,o,a);break t}}throw n=ht(e)||e,Error(r(306,n,""))}}return n;case 0:return Uf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=vr(o,n.pendingProps),Cg(e,n,o,c,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,af(e,n),_o(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ba(n,un,o),o!==h.cache&&Qc(n,[un],a,!0),go(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=wg(e,n,o,a);break t}else if(o!==c){c=oi(Error(r(424)),n),uo(c),n=wg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=hi(e.firstChild),bn=n,be=!0,Ma=null,ci=!0,a=bm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(cr(),o===c){n=Ji(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return ql(e,n),e===null?(a=X_(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,o=fu(ot.current).createElement(a),o[ln]=n,o[Mn]=e,Rn(o,a,e),Mt(o),n.stateNode=o):n.memoizedState=X_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xt(n),e===null&&be&&(o=n.stateNode=G_(n.type,n.pendingProps,ot.current),bn=n,ci=!0,c=qe,Ia(n.type)?(_h=c,qe=hi(o.firstChild)):qe=c),An(e,n,n.pendingProps.children,a),ql(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&be&&((c=o=qe)&&(o=hS(o,n.type,n.pendingProps,ci),o!==null?(n.stateNode=o,bn=n,qe=hi(o.firstChild),ci=!1,c=!0):c=!1),c||Ea(n)),Xt(n),c=n.type,h=n.pendingProps,y=e!==null?e.memoizedProps:null,o=h.children,hh(c,h)?o=null:y!==null&&hh(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=ff(e,n,Ry,null,null,a),Io._currentValue=c),ql(e,n),An(e,n,o,a),n.child;case 6:return e===null&&be&&((e=a=qe)&&(a=dS(a,n.pendingProps,ci),a!==null?(n.stateNode=a,bn=n,qe=null,e=!0):e=!1),e||Ea(n)),null;case 13:return Dg(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=gr(n,null,o,a):An(e,n,o,a),n.child;case 11:return Sg(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ba(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,hr(n),c=Tn(c),o=o(c),n.flags|=1,An(e,n,o,a),n.child;case 14:return Mg(e,n,n.type,n.pendingProps,a);case 15:return Eg(e,n,n.type,n.pendingProps,a);case 19:return Lg(e,n,a);case 31:return Py(e,n,a);case 22:return bg(e,n,a,n.pendingProps);case 24:return hr(n),o=Tn(un),e===null?(c=tf(),c===null&&(c=We,h=Jc(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:o,cache:c},nf(n),ba(n,un,c)):((e.lanes&a)!==0&&(af(e,n),_o(n,null,null,a),go()),c=e.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ba(n,un,o)):(o=h.cache,ba(n,un,o),o!==c.cache&&Qc(n,[un],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function $i(e){e.flags|=4}function Ff(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(s_())e.flags|=8192;else throw mr=Nl,ef}else e.flags&=-16777217}function Og(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Z_(n))if(s_())e.flags|=8192;else throw mr=Nl,ef}function Kl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Oe():536870912,e.lanes|=n,cs|=n)}function Eo(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Iy(e,n,a){var o=n.pendingProps;switch(Yc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Zi(un),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qr(n)?$i(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qc())),Ze(n),null;case 26:var c=n.type,h=n.memoizedState;return e===null?($i(n),h!==null?(Ze(n),Og(n,h)):(Ze(n),Ff(n,c,null,o,a))):h?h!==e.memoizedState?($i(n),Ze(n),Og(n,h)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&$i(n),Ze(n),Ff(n,c,e,o,a)),null;case 27:if(ge(n),a=ot.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}e=Rt.current,Qr(n)?dm(n):(e=G_(c,o,a),n.stateNode=e,$i(n))}return Ze(n),null;case 5:if(ge(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(h=Rt.current,Qr(n))dm(n);else{var y=fu(ot.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(c,{is:o.is}):y.createElement(c)}}h[ln]=n,h[Mn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;t:switch(Rn(h,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&$i(n)}}return Ze(n),Ff(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&$i(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=ot.current,Qr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=bn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||D_(e.nodeValue,a)),e||Ea(n,!0)}else e=fu(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Qr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[ln]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=qc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Qr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[ln]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=qc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),Ze(n),null);case 4:return Bt(),e===null&&oh(n.stateNode.containerInfo),Ze(n),null;case 10:return Zi(n.type),Ze(n),null;case 19:if(J(rn),o=n.memoizedState,o===null)return Ze(n),null;if(c=(n.flags&128)!==0,h=o.rendering,h===null)if(c)Eo(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Il(e),h!==null){for(n.flags|=128,Eo(o,!1),e=h.updateQueue,n.updateQueue=e,Kl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)lm(a,e),a=a.sibling;return St(rn,rn.current&1|2),be&&ji(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>eu&&(n.flags|=128,c=!0,Eo(o,!1),n.lanes=4194304)}else{if(!c)if(e=Il(h),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Kl(n,e),Eo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!be)return Ze(n),null}else 2*b()-o.renderingStartTime>eu&&a!==536870912&&(n.flags|=128,c=!0,Eo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=rn.current,St(rn,c?a&1|2:a&1),be&&ji(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return Jn(n),lf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(dr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zi(un),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function By(e,n){switch(Yc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zi(un),Bt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ge(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(r(340));cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(rn),null;case 4:return Bt(),null;case 10:return Zi(n.type),null;case 22:case 23:return Jn(n),lf(),e!==null&&J(dr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Zi(un),null;case 25:return null;default:return null}}function Pg(e,n){switch(Yc(n),n.tag){case 3:Zi(un),Bt();break;case 26:case 27:case 5:ge(n);break;case 4:Bt();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:J(rn);break;case 10:Zi(n.type);break;case 22:case 23:Jn(n),lf(),e!==null&&J(dr);break;case 24:Zi(un)}}function bo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var h=a.create,y=a.inst;o=h(),y.destroy=o}a=a.next}while(a!==c)}}catch(A){ze(n,n.return,A)}}function Da(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&e)===e){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,c=n;var F=a,it=A;try{it()}catch(gt){ze(c,F,gt)}}}o=o.next}while(o!==h)}}catch(gt){ze(n,n.return,gt)}}function zg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Am(n,a)}catch(o){ze(e,e.return,o)}}}function Ig(e,n,a){a.props=vr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ze(e,n,o)}}function To(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){ze(e,n,c)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){ze(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ze(e,n,c)}else a.current=null}function Bg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){ze(e,e.return,c)}}function Hf(e,n,a){try{var o=e.stateNode;sS(o,e.type,a,n),o[Mn]=n}catch(c){ze(e,e.return,c)}}function Fg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function Gf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi));else if(o!==4&&(o===27&&Ia(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Vf(e,n,a),e=e.sibling;e!==null;)Vf(e,n,a),e=e.sibling}function Ql(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ia(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ql(e,n,a),e=e.sibling;e!==null;)Ql(e,n,a),e=e.sibling}function Hg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,o,a),n[ln]=e,n[Mn]=a}catch(h){ze(e,e.return,h)}}var ta=!1,hn=!1,kf=!1,Gg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Fy(e,n){if(e=e.containerInfo,ch=vu,e=$p(e),Pc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var y=0,A=-1,F=-1,it=0,gt=0,xt=e,st=null;e:for(;;){for(var dt;xt!==a||c!==0&&xt.nodeType!==3||(A=y+c),xt!==h||o!==0&&xt.nodeType!==3||(F=y+o),xt.nodeType===3&&(y+=xt.nodeValue.length),(dt=xt.firstChild)!==null;)st=xt,xt=dt;for(;;){if(xt===e)break e;if(st===a&&++it===c&&(A=y),st===h&&++gt===o&&(F=y),(dt=xt.nextSibling)!==null)break;xt=st,st=xt.parentNode}xt=dt}a=A===-1||F===-1?null:{start:A,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(fh={focusedElem:e,selectionRange:a},vu=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Gt=vr(a.type,c);e=o.getSnapshotBeforeUpdate(Gt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){ze(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ph(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ph(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function Vg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),o&4&&bo(5,a);break;case 1:if(na(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){ze(a,a.return,y)}else{var c=vr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){ze(a,a.return,y)}}o&64&&zg(a),o&512&&To(a,a.return);break;case 3:if(na(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Am(e,n)}catch(y){ze(a,a.return,y)}}break;case 27:n===null&&o&4&&Hg(a);case 26:case 5:na(e,a),n===null&&o&4&&Bg(a),o&512&&To(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),o&4&&Wg(e,a);break;case 13:na(e,a),o&4&&Yg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=qy.bind(null,a),pS(e,a))));break;case 22:if(o=a.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||hn,c=ta;var h=hn;ta=o,(hn=n)&&!h?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),ta=c,hn=h}break;case 30:break;default:na(e,a)}}function kg(e){var n=e.alternate;n!==null&&(e.alternate=null,kg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Fn=!1;function ea(e,n,a){for(a=a.child;a!==null;)Xg(e,n,a),a=a.sibling}function Xg(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:hn||zi(a,n),ea(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||zi(a,n);var o=Ke,c=Fn;Ia(a.type)&&(Ke=a.stateNode,Fn=!1),ea(e,n,a),Oo(a.stateNode),Ke=o,Fn=c;break;case 5:hn||zi(a,n);case 6:if(o=Ke,c=Fn,Ke=null,ea(e,n,a),Ke=o,Fn=c,Ke!==null)if(Fn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(h){ze(a,n,h)}else try{Ke.removeChild(a.stateNode)}catch(h){ze(a,n,h)}break;case 18:Ke!==null&&(Fn?(e=Ke,z_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vs(e)):z_(Ke,a.stateNode));break;case 4:o=Ke,c=Fn,Ke=a.stateNode.containerInfo,Fn=!0,ea(e,n,a),Ke=o,Fn=c;break;case 0:case 11:case 14:case 15:Da(2,a,n),hn||Da(4,a,n),ea(e,n,a);break;case 1:hn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ig(a,n,o)),ea(e,n,a);break;case 21:ea(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,ea(e,n,a),hn=o;break;default:ea(e,n,a)}}function Wg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vs(e)}catch(a){ze(n,n.return,a)}}}function Yg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vs(e)}catch(a){ze(n,n.return,a)}}function Hy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Gg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Gg),n;default:throw Error(r(435,e.tag))}}function Jl(e,n){var a=Hy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=Zy.bind(null,e,o);o.then(c,c)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],h=e,y=n,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(Ia(A.type)){Ke=A.stateNode,Fn=!1;break t}break;case 5:Ke=A.stateNode,Fn=!1;break t;case 3:case 4:Ke=A.stateNode.containerInfo,Fn=!0;break t}A=A.return}if(Ke===null)throw Error(r(160));Xg(h,y,c),Ke=null,Fn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)jg(n,e),n=n.sibling}var xi=null;function jg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),o&4&&(Da(3,e,e.return),bo(3,e),Da(5,e,e.return));break;case 1:Hn(n,e),Gn(e),o&512&&(hn||a===null||zi(a,a.return)),o&64&&ta&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=xi;if(Hn(n,e),Gn(e),o&512&&(hn||a===null||zi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[ir]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),Rn(h,o,a),h[ln]=e,Mt(h),o=h;break t;case"link":var y=j_("link","href",c).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(h=y[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break e}}h=c.createElement(o),Rn(h,o,a),c.head.appendChild(h);break;case"meta":if(y=j_("meta","content",c).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(h=y[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break e}}h=c.createElement(o),Rn(h,o,a),c.head.appendChild(h);break;default:throw Error(r(468,o))}h[ln]=e,Mt(h),o=h}e.stateNode=o}else q_(c,e.type,e.stateNode);else e.stateNode=Y_(c,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?q_(c,e.type,e.stateNode):Y_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),o&512&&(hn||a===null||zi(a,a.return)),a!==null&&o&4&&Hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),o&512&&(hn||a===null||zi(a,a.return)),e.flags&32){c=e.stateNode;try{Gr(c,"")}catch(Gt){ze(e,e.return,Gt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Hf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(kf=!0);break;case 6:if(Hn(n,e),Gn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Gt){ze(e,e.return,Gt)}}break;case 3:if(pu=null,c=xi,xi=hu(n.containerInfo),Hn(n,e),xi=c,Gn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vs(n.containerInfo)}catch(Gt){ze(e,e.return,Gt)}kf&&(kf=!1,qg(e));break;case 4:o=xi,xi=hu(e.stateNode.containerInfo),Hn(n,e),Gn(e),xi=o;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tu=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 22:c=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,it=ta,gt=hn;if(ta=it||c,hn=gt||F,Hn(n,e),hn=gt,ta=it,Gn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||ta||hn||xr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(h=F.stateNode,c)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=F.stateNode;var xt=F.memoizedProps.style,st=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Gt){ze(F,F.return,Gt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(Gt){ze(F,F.return,Gt)}}}else if(n.tag===18){if(a===null){F=n;try{var dt=F.stateNode;c?I_(dt,!0):I_(F.stateNode,!1)}catch(Gt){ze(F,F.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Jl(e,a))));break;case 19:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Fg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,h=Gf(e);Ql(e,h,c);break;case 5:var y=a.stateNode;a.flags&32&&(Gr(y,""),a.flags&=-33);var A=Gf(e);Ql(e,A,y);break;case 3:case 4:var F=a.stateNode.containerInfo,it=Gf(e);Vf(e,it,F);break;default:throw Error(r(161))}}catch(gt){ze(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function qg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;qg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function na(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Vg(e,n.alternate,n),n=n.sibling}function xr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Da(4,n,n.return),xr(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ig(n,n.return,a),xr(n);break;case 27:Oo(n.stateNode);case 26:case 5:zi(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}e=e.sibling}}function ia(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:ia(c,h,a),bo(4,h);break;case 1:if(ia(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(it){ze(o,o.return,it)}if(o=h,c=o.updateQueue,c!==null){var A=o.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Tm(F[c],A)}catch(it){ze(o,o.return,it)}}a&&y&64&&zg(h),To(h,h.return);break;case 27:Hg(h);case 26:case 5:ia(c,h,a),a&&o===null&&y&4&&Bg(h),To(h,h.return);break;case 12:ia(c,h,a);break;case 31:ia(c,h,a),a&&y&4&&Wg(c,h);break;case 13:ia(c,h,a),a&&y&4&&Yg(c,h);break;case 22:h.memoizedState===null&&ia(c,h,a),To(h,h.return);break;case 30:break;default:ia(c,h,a)}n=n.sibling}}function Xf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&co(a))}function Wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e))}function yi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zg(e,n,a,o),n=n.sibling}function Zg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,a,o),c&2048&&bo(9,n);break;case 1:yi(e,n,a,o);break;case 3:yi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e)));break;case 12:if(c&2048){yi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,y=h.id,A=h.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){ze(n,n.return,F)}}else yi(e,n,a,o);break;case 31:yi(e,n,a,o);break;case 13:yi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?yi(e,n,a,o):Ao(e,n):h._visibility&2?yi(e,n,a,o):(h._visibility|=2,os(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Xf(y,n);break;case 24:yi(e,n,a,o),c&2048&&Wf(n.alternate,n);break;default:yi(e,n,a,o)}}function os(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,y=n,A=a,F=o,it=y.flags;switch(y.tag){case 0:case 11:case 15:os(h,y,A,F,c),bo(8,y);break;case 23:break;case 22:var gt=y.stateNode;y.memoizedState!==null?gt._visibility&2?os(h,y,A,F,c):Ao(h,y):(gt._visibility|=2,os(h,y,A,F,c)),c&&it&2048&&Xf(y.alternate,y);break;case 24:os(h,y,A,F,c),c&&it&2048&&Wf(y.alternate,y);break;default:os(h,y,A,F,c)}n=n.sibling}}function Ao(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:Ao(a,o),c&2048&&Xf(o.alternate,o);break;case 24:Ao(a,o),c&2048&&Wf(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var Ro=8192;function ls(e,n,a){if(e.subtreeFlags&Ro)for(e=e.child;e!==null;)Kg(e,n,a),e=e.sibling}function Kg(e,n,a){switch(e.tag){case 26:ls(e,n,a),e.flags&Ro&&e.memoizedState!==null&&AS(a,xi,e.memoizedState,e.memoizedProps);break;case 5:ls(e,n,a);break;case 3:case 4:var o=xi;xi=hu(e.stateNode.containerInfo),ls(e,n,a),xi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ro,Ro=16777216,ls(e,n,a),Ro=o):ls(e,n,a));break;default:ls(e,n,a)}}function Qg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,$g(o,e)}Qg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Jg(e),e=e.sibling}function Jg(e){switch(e.tag){case 0:case 11:case 15:Co(e),e.flags&2048&&Da(9,e,e.return);break;case 3:Co(e);break;case 12:Co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,$l(e)):Co(e);break;default:Co(e)}}function $l(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,$g(o,e)}Qg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Da(8,n,n.return),$l(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,$l(n));break;default:$l(n)}e=e.sibling}}function $g(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Da(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=e;yn!==null;){o=yn;var c=o.sibling,h=o.return;if(kg(o),o===a){yn=null;break t}if(c!==null){c.return=h,yn=c;break t}yn=h}}}var Gy={getCacheForType:function(e){var n=Tn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(un).controller.signal}},Vy=typeof WeakMap=="function"?WeakMap:Map,Ue=0,We=null,xe=null,Me=0,Pe=0,$n=null,Ua=!1,us=!1,Yf=!1,aa=0,en=0,La=0,yr=0,jf=0,ti=0,cs=0,wo=null,Vn=null,qf=!1,tu=0,t_=0,eu=1/0,nu=null,Na=null,mn=0,Oa=null,fs=null,ra=0,Zf=0,Kf=null,e_=null,Do=0,Qf=null;function ei(){return(Ue&2)!==0&&Me!==0?Me&-Me:P.T!==null?ih():nr()}function n_(){if(ti===0)if((Me&536870912)===0||be){var e=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),ti=e}else ti=536870912;return e=Qn.current,e!==null&&(e.flags|=32),ti}function kn(e,n,a){(e===We&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(hs(e,0),Pa(e,Me,ti,!1)),Nn(e,a),((Ue&2)===0||e!==We)&&(e===We&&((Ue&2)===0&&(yr|=a),en===4&&Pa(e,Me,ti,!1)),Ii(e))}function i_(e,n,a){if((Ue&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ht(e,n),c=o?Wy(e,n):$f(e,n,!0),h=o;do{if(c===0){us&&!o&&Pa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!ky(a)){c=$f(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=e;c=wo;var F=A.current.memoizedState.isDehydrated;if(F&&(hs(A,y).flags|=256),y=$f(A,y,!1),y!==2){if(Yf&&!F){A.errorRecoveryDisabledLanes|=h,yr|=h,c=4;break t}h=Vn,Vn=c,h!==null&&(Vn===null?Vn=h:Vn.push.apply(Vn,h))}c=y}if(h=!1,c!==2)continue}}if(c===1){hs(e,0),Pa(e,n,0,!0);break}t:{switch(o=e,h=c,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Pa(o,n,ti,!Ua);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=tu+300-b(),10<c)){if(Pa(o,n,ti,!Ua),yt(o,0,!0)!==0)break t;ra=n,o.timeoutHandle=O_(a_.bind(null,o,a,Vn,nu,qf,n,ti,yr,cs,Ua,h,"Throttled",-0,0),c);break t}a_(o,a,Vn,nu,qf,n,ti,yr,cs,Ua,h,null,-0,0)}}break}while(!0);Ii(e)}function a_(e,n,a,o,c,h,y,A,F,it,gt,xt,st,dt){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},Kg(n,h,xt);var Gt=(h&62914560)===h?tu-b():(h&4194048)===h?t_-b():0;if(Gt=RS(xt,Gt),Gt!==null){ra=h,e.cancelPendingCommit=Gt(h_.bind(null,e,n,h,a,o,c,y,A,F,gt,xt,null,st,dt)),Pa(e,h,y,!it);return}}h_(e,n,h,a,o,c,y,A,F)}function ky(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!Zn(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pa(e,n,a,o){n&=~jf,n&=~yr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var h=31-It(c),y=1<<h;o[h]=-1,c&=~y}a!==0&&Ks(e,a,n)}function iu(){return(Ue&6)===0?(Uo(0),!1):!0}function Jf(){if(xe!==null){if(Pe===0)var e=xe.return;else e=xe,qi=fr=null,pf(e),ns=null,ho=0,e=xe;for(;e!==null;)Pg(e.alternate,e),e=e.return;xe=null}}function hs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,uS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,Jf(),We=e,xe=a=Yi(e.current,null),Me=n,Pe=0,$n=null,Ua=!1,us=Ht(e,n),Yf=!1,cs=ti=jf=yr=La=en=0,Vn=wo=null,qf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-It(o),h=1<<c;n|=e[c],o&=~h}return aa=n,bl(),a}function r_(e,n){ce=null,P.H=So,n===es||n===Ll?(n=Sm(),Pe=3):n===ef?(n=Sm(),Pe=4):Pe=n===Df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,xe===null&&(en=1,Yl(e,oi(n,e.current)))}function s_(){var e=Qn.current;return e===null?!0:(Me&4194048)===Me?fi===null:(Me&62914560)===Me||(Me&536870912)!==0?e===fi:!1}function o_(){var e=P.H;return P.H=So,e===null?So:e}function l_(){var e=P.A;return P.A=Gy,e}function au(){en=4,Ua||(Me&4194048)!==Me&&Qn.current!==null||(us=!0),(La&134217727)===0&&(yr&134217727)===0||We===null||Pa(We,Me,ti,!1)}function $f(e,n,a){var o=Ue;Ue|=2;var c=o_(),h=l_();(We!==e||Me!==n)&&(nu=null,hs(e,n)),n=!1;var y=en;t:do try{if(Pe!==0&&xe!==null){var A=xe,F=$n;switch(Pe){case 8:Jf(),y=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var it=Pe;if(Pe=0,$n=null,ds(e,A,F,it),a&&us){y=0;break t}break;default:it=Pe,Pe=0,$n=null,ds(e,A,F,it)}}Xy(),y=en;break}catch(gt){r_(e,gt)}while(!0);return n&&e.shellSuspendCounter++,qi=fr=null,Ue=o,P.H=c,P.A=h,xe===null&&(We=null,Me=0,bl()),y}function Xy(){for(;xe!==null;)u_(xe)}function Wy(e,n){var a=Ue;Ue|=2;var o=o_(),c=l_();We!==e||Me!==n?(nu=null,eu=b()+500,hs(e,n)):us=Ht(e,n);t:do try{if(Pe!==0&&xe!==null){n=xe;var h=$n;e:switch(Pe){case 1:Pe=0,$n=null,ds(e,n,h,1);break;case 2:case 9:if(xm(h)){Pe=0,$n=null,c_(n);break}n=function(){Pe!==2&&Pe!==9||We!==e||(Pe=7),Ii(e)},h.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:xm(h)?(Pe=0,$n=null,c_(n)):(Pe=0,$n=null,ds(e,n,h,7));break;case 5:var y=null;switch(xe.tag){case 26:y=xe.memoizedState;case 5:case 27:var A=xe;if(y?Z_(y):A.stateNode.complete){Pe=0,$n=null;var F=A.sibling;if(F!==null)xe=F;else{var it=A.return;it!==null?(xe=it,ru(it)):xe=null}break e}}Pe=0,$n=null,ds(e,n,h,5);break;case 6:Pe=0,$n=null,ds(e,n,h,6);break;case 8:Jf(),en=6;break t;default:throw Error(r(462))}}Yy();break}catch(gt){r_(e,gt)}while(!0);return qi=fr=null,P.H=o,P.A=c,Ue=a,xe!==null?0:(We=null,Me=0,bl(),en)}function Yy(){for(;xe!==null&&!Je();)u_(xe)}function u_(e){var n=Ng(e.alternate,e,aa);e.memoizedProps=e.pendingProps,n===null?ru(e):xe=n}function c_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Rg(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Rg(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:pf(n);default:Pg(a,n),n=xe=lm(n,aa),n=Ng(a,n,aa)}e.memoizedProps=e.pendingProps,n===null?ru(e):xe=n}function ds(e,n,a,o){qi=fr=null,pf(n),ns=null,ho=0;var c=n.return;try{if(Oy(e,c,n,a,Me)){en=1,Yl(e,oi(a,e.current)),xe=null;return}}catch(h){if(c!==null)throw xe=c,h;en=1,Yl(e,oi(a,e.current)),xe=null;return}n.flags&32768?(be||o===1?e=!0:us||(Me&536870912)!==0?e=!1:(Ua=e=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),f_(n,e)):ru(n)}function ru(e){var n=e;do{if((n.flags&32768)!==0){f_(n,Ua);return}e=n.return;var a=Iy(n.alternate,n,aa);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);en===0&&(en=5)}function f_(e,n){do{var a=By(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);en=6,xe=null}function h_(e,n,a,o,c,h,y,A,F){e.cancelPendingCommit=null;do su();while(mn!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Hc,ri(e,a,h,y,A,F),e===We&&(xe=We=null,Me=0),fs=n,Oa=e,ra=a,Zf=h,Kf=c,e_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ky(mt,function(){return __(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,c=X.p,X.p=2,y=Ue,Ue|=4;try{Fy(e,n,a)}finally{Ue=y,X.p=c,P.T=o}}mn=1,d_(),p_(),m_()}}function d_(){if(mn===1){mn=0;var e=Oa,n=fs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=X.p;X.p=2;var c=Ue;Ue|=4;try{jg(n,e);var h=fh,y=$p(e.containerInfo),A=h.focusedElem,F=h.selectionRange;if(y!==A&&A&&A.ownerDocument&&Jp(A.ownerDocument.documentElement,A)){if(F!==null&&Pc(A)){var it=F.start,gt=F.end;if(gt===void 0&&(gt=it),"selectionStart"in A)A.selectionStart=it,A.selectionEnd=Math.min(gt,A.value.length);else{var xt=A.ownerDocument||document,st=xt&&xt.defaultView||window;if(st.getSelection){var dt=st.getSelection(),Gt=A.textContent.length,ne=Math.min(F.start,Gt),Fe=F.end===void 0?ne:Math.min(F.end,Gt);!dt.extend&&ne>Fe&&(y=Fe,Fe=ne,ne=y);var K=Qp(A,ne),V=Qp(A,Fe);if(K&&V&&(dt.rangeCount!==1||dt.anchorNode!==K.node||dt.anchorOffset!==K.offset||dt.focusNode!==V.node||dt.focusOffset!==V.offset)){var nt=xt.createRange();nt.setStart(K.node,K.offset),dt.removeAllRanges(),ne>Fe?(dt.addRange(nt),dt.extend(V.node,V.offset)):(nt.setEnd(V.node,V.offset),dt.addRange(nt))}}}}for(xt=[],dt=A;dt=dt.parentNode;)dt.nodeType===1&&xt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var vt=xt[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}vu=!!ch,fh=ch=null}finally{Ue=c,X.p=o,P.T=a}}e.current=n,mn=2}}function p_(){if(mn===2){mn=0;var e=Oa,n=fs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=X.p;X.p=2;var c=Ue;Ue|=4;try{Vg(e,n.alternate,n)}finally{Ue=c,X.p=o,P.T=a}}mn=3}}function m_(){if(mn===4||mn===3){mn=0,O();var e=Oa,n=fs,a=ra,o=e_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,fs=Oa=null,g_(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Na=null),Fr(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,c=X.p,X.p=2,P.T=null;try{for(var h=e.onRecoverableError,y=0;y<o.length;y++){var A=o[y];h(A.value,{componentStack:A.stack})}}finally{P.T=n,X.p=c}}(ra&3)!==0&&su(),Ii(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Qf?Do++:(Do=0,Qf=e):Do=0,Uo(0)}}function g_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,co(n)))}function su(){return d_(),p_(),m_(),__()}function __(){if(mn!==5)return!1;var e=Oa,n=Zf;Zf=0;var a=Fr(ra),o=P.T,c=X.p;try{X.p=32>a?32:a,P.T=null,a=Kf,Kf=null;var h=Oa,y=ra;if(mn=0,fs=Oa=null,ra=0,(Ue&6)!==0)throw Error(r(331));var A=Ue;if(Ue|=4,Jg(h.current),Zg(h,h.current,y,a),Ue=A,Uo(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Tt,h)}catch{}return!0}finally{X.p=c,P.T=o,g_(e,n)}}function v_(e,n,a){n=oi(a,n),n=wf(e.stateNode,n,2),e=Ra(e,n,2),e!==null&&(Nn(e,2),Ii(e))}function ze(e,n,a){if(e.tag===3)v_(e,e,a);else for(;n!==null;){if(n.tag===3){v_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Na===null||!Na.has(o))){e=oi(a,e),a=xg(2),o=Ra(n,a,2),o!==null&&(yg(a,o,n,e),Nn(o,2),Ii(o));break}}n=n.return}}function th(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Vy;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Yf=!0,c.add(a),e=jy.bind(null,e,n,a),n.then(e,e))}function jy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Me&a)===a&&(en===4||en===3&&(Me&62914560)===Me&&300>b()-tu?(Ue&2)===0&&hs(e,0):jf|=a,cs===Me&&(cs=0)),Ii(e)}function x_(e,n){n===0&&(n=Oe()),e=lr(e,n),e!==null&&(Nn(e,n),Ii(e))}function qy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),x_(e,a)}function Zy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),x_(e,a)}function Ky(e,n){return oe(e,n)}var ou=null,ps=null,eh=!1,lu=!1,nh=!1,za=0;function Ii(e){e!==ps&&e.next===null&&(ps===null?ou=ps=e:ps=ps.next=e),lu=!0,eh||(eh=!0,Jy())}function Uo(e,n){if(!nh&&lu){nh=!0;do for(var a=!1,o=ou;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var y=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-It(42|e)+1)-1,h&=c&~(y&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,E_(o,h))}else h=Me,h=yt(o,o===We?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ht(o,h)||(a=!0,E_(o,h));o=o.next}while(a);nh=!1}}function Qy(){y_()}function y_(){lu=eh=!1;var e=0;za!==0&&lS()&&(e=za);for(var n=b(),a=null,o=ou;o!==null;){var c=o.next,h=S_(o,n);h===0?(o.next=null,a===null?ou=c:a.next=c,c===null&&(ps=a)):(a=o,(e!==0||(h&3)!==0)&&(lu=!0)),o=c}mn!==0&&mn!==5||Uo(e),za!==0&&(za=0)}function S_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-It(h),A=1<<y,F=c[y];F===-1?((A&a)===0||(A&o)!==0)&&(c[y]=se(A,n)):F<=n&&(e.expiredLanes|=A),h&=~A}if(n=We,a=Me,a=yt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&$e(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ht(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&$e(o),Fr(a)){case 2:case 8:a=Et;break;case 32:a=mt;break;case 268435456:a=Ct;break;default:a=mt}return o=M_.bind(null,e),a=oe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&$e(o),e.callbackPriority=2,e.callbackNode=null,2}function M_(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(su()&&e.callbackNode!==a)return null;var o=Me;return o=yt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(i_(e,o,n),S_(e,b()),e.callbackNode!=null&&e.callbackNode===a?M_.bind(null,e):null)}function E_(e,n){if(su())return null;i_(e,n,!0)}function Jy(){cS(function(){(Ue&6)!==0?oe(_t,Qy):y_()})}function ih(){if(za===0){var e=$r;e===0&&(e=At,At<<=1,(At&261888)===0&&(At=256)),za=e}return za}function b_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gl(""+e)}function T_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function $y(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var h=b_((c[Mn]||null).action),y=o.submitter;y&&(n=(n=y[Mn]||null)?b_(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var A=new yl("action","action",null,o,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(za!==0){var F=y?T_(c,y):new FormData(c);Ef(a,{pending:!0,data:F,method:c.method,action:h},null,F)}}else typeof h=="function"&&(A.preventDefault(),F=y?T_(c,y):new FormData(c),Ef(a,{pending:!0,data:F,method:c.method,action:h},h,F))},currentTarget:c}]})}}for(var ah=0;ah<Fc.length;ah++){var rh=Fc[ah],tS=rh.toLowerCase(),eS=rh[0].toUpperCase()+rh.slice(1);vi(tS,"on"+eS)}vi(nm,"onAnimationEnd"),vi(im,"onAnimationIteration"),vi(am,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(_y,"onTransitionRun"),vi(vy,"onTransitionStart"),vi(xy,"onTransitionCancel"),vi(rm,"onTransitionEnd"),Jt("onMouseEnter",["mouseout","mouseover"]),Jt("onMouseLeave",["mouseout","mouseover"]),Jt("onPointerEnter",["pointerout","pointerover"]),Jt("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function A_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],F=A.instance,it=A.currentTarget;if(A=A.listener,F!==h&&c.isPropagationStopped())break t;h=A,c.currentTarget=it;try{h(c)}catch(gt){El(gt)}c.currentTarget=null,h=F}else for(y=0;y<o.length;y++){if(A=o[y],F=A.instance,it=A.currentTarget,A=A.listener,F!==h&&c.isPropagationStopped())break t;h=A,c.currentTarget=it;try{h(c)}catch(gt){El(gt)}c.currentTarget=null,h=F}}}}function ye(e,n){var a=n[Js];a===void 0&&(a=n[Js]=new Set);var o=e+"__bubble";a.has(o)||(R_(n,e,2,!1),a.add(o))}function sh(e,n,a){var o=0;n&&(o|=4),R_(a,e,o,n)}var uu="_reactListening"+Math.random().toString(36).slice(2);function oh(e){if(!e[uu]){e[uu]=!0,Ot.forEach(function(a){a!=="selectionchange"&&(nS.has(a)||sh(a,!1,e),sh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[uu]||(n[uu]=!0,sh("selectionchange",!1,n))}}function R_(e,n,a,o){switch(n0(n)){case 2:var c=DS;break;case 8:c=US;break;default:c=Mh}a=c.bind(null,n,a,e),c=void 0,!Ac||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function lh(e,n,a,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===c)break;if(y===4)for(y=o.return;y!==null;){var F=y.tag;if((F===3||F===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;A!==null;){if(y=Y(A),y===null)return;if(F=y.tag,F===5||F===6||F===26||F===27){o=h=y;continue t}A=A.parentNode}}o=o.return}Lp(function(){var it=h,gt=bc(a),xt=[];t:{var st=sm.get(e);if(st!==void 0){var dt=yl,Gt=e;switch(e){case"keypress":if(vl(a)===0)break t;case"keydown":case"keyup":dt=Zx;break;case"focusin":Gt="focus",dt=Dc;break;case"focusout":Gt="blur",dt=Dc;break;case"beforeblur":case"afterblur":dt=Dc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=Ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=Jx;break;case nm:case im:case am:dt=Hx;break;case rm:dt=ty;break;case"scroll":case"scrollend":dt=Px;break;case"wheel":dt=ny;break;case"copy":case"cut":case"paste":dt=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Ip;break;case"toggle":case"beforetoggle":dt=ay}var ne=(n&4)!==0,Fe=!ne&&(e==="scroll"||e==="scrollend"),K=ne?st!==null?st+"Capture":null:st;ne=[];for(var V=it,nt;V!==null;){var vt=V;if(nt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||nt===null||K===null||(vt=$s(V,K),vt!=null&&ne.push(No(V,vt,nt))),Fe)break;V=V.return}0<ne.length&&(st=new dt(st,Gt,null,a,gt),xt.push({event:st,listeners:ne}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",st&&a!==Ec&&(Gt=a.relatedTarget||a.fromElement)&&(Y(Gt)||Gt[xa]))break t;if((dt||st)&&(st=gt.window===gt?gt:(st=gt.ownerDocument)?st.defaultView||st.parentWindow:window,dt?(Gt=a.relatedTarget||a.toElement,dt=it,Gt=Gt?Y(Gt):null,Gt!==null&&(Fe=u(Gt),ne=Gt.tag,Gt!==Fe||ne!==5&&ne!==27&&ne!==6)&&(Gt=null)):(dt=null,Gt=it),dt!==Gt)){if(ne=Pp,vt="onMouseLeave",K="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Ip,vt="onPointerLeave",K="onPointerEnter",V="pointer"),Fe=dt==null?st:ft(dt),nt=Gt==null?st:ft(Gt),st=new ne(vt,V+"leave",dt,a,gt),st.target=Fe,st.relatedTarget=nt,vt=null,Y(gt)===it&&(ne=new ne(K,V+"enter",Gt,a,gt),ne.target=nt,ne.relatedTarget=Fe,vt=ne),Fe=vt,dt&&Gt)e:{for(ne=iS,K=dt,V=Gt,nt=0,vt=K;vt;vt=ne(vt))nt++;vt=0;for(var te=V;te;te=ne(te))vt++;for(;0<nt-vt;)K=ne(K),nt--;for(;0<vt-nt;)V=ne(V),vt--;for(;nt--;){if(K===V||V!==null&&K===V.alternate){ne=K;break e}K=ne(K),V=ne(V)}ne=null}else ne=null;dt!==null&&C_(xt,st,dt,ne,!1),Gt!==null&&Fe!==null&&C_(xt,Fe,Gt,ne,!0)}}t:{if(st=it?ft(it):window,dt=st.nodeName&&st.nodeName.toLowerCase(),dt==="select"||dt==="input"&&st.type==="file")var Ce=Wp;else if(kp(st))if(Yp)Ce=py;else{Ce=hy;var jt=fy}else dt=st.nodeName,!dt||dt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?it&&Mc(it.elementType)&&(Ce=Wp):Ce=dy;if(Ce&&(Ce=Ce(e,it))){Xp(xt,Ce,a,gt);break t}jt&&jt(e,st,it),e==="focusout"&&it&&st.type==="number"&&it.memoizedProps.value!=null&&pn(st,"number",st.value)}switch(jt=it?ft(it):window,e){case"focusin":(kp(jt)||jt.contentEditable==="true")&&(Wr=jt,zc=it,oo=null);break;case"focusout":oo=zc=Wr=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,tm(xt,a,gt);break;case"selectionchange":if(gy)break;case"keydown":case"keyup":tm(xt,a,gt)}var he;if(Lc)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else Xr?Gp(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Bp&&a.locale!=="ko"&&(Xr||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Xr&&(he=Np()):(ya=gt,Rc="value"in ya?ya.value:ya.textContent,Xr=!0)),jt=cu(it,Ee),0<jt.length&&(Ee=new zp(Ee,e,null,a,gt),xt.push({event:Ee,listeners:jt}),he?Ee.data=he:(he=Vp(a),he!==null&&(Ee.data=he)))),(he=sy?oy(e,a):ly(e,a))&&(Ee=cu(it,"onBeforeInput"),0<Ee.length&&(jt=new zp("onBeforeInput","beforeinput",null,a,gt),xt.push({event:jt,listeners:Ee}),jt.data=he)),$y(xt,e,it,a,gt)}A_(xt,n)})}function No(e,n,a){return{instance:e,listener:n,currentTarget:a}}function cu(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=$s(e,a),c!=null&&o.unshift(No(e,c,h)),c=$s(e,n),c!=null&&o.push(No(e,c,h))),e.tag===3)return o;e=e.return}return[]}function iS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function C_(e,n,a,o,c){for(var h=n._reactName,y=[];a!==null&&a!==o;){var A=a,F=A.alternate,it=A.stateNode;if(A=A.tag,F!==null&&F===o)break;A!==5&&A!==26&&A!==27||it===null||(F=it,c?(it=$s(a,h),it!=null&&y.unshift(No(a,it,F))):c||(it=$s(a,h),it!=null&&y.push(No(a,it,F)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var aS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function w_(e){return(typeof e=="string"?e:""+e).replace(aS,`
`).replace(rS,"")}function D_(e,n){return n=w_(n),w_(e)===n}function Be(e,n,a,o,c,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Gr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Gr(e,""+o);break;case"className":Ne(e,"class",o);break;case"tabIndex":Ne(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(e,a,o);break;case"style":Dp(e,o,h);break;case"data":if(n!=="object"){Ne(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",c.name,c,null),Be(e,n,"formEncType",c.formEncType,c,null),Be(e,n,"formMethod",c.formMethod,c,null),Be(e,n,"formTarget",c.formTarget,c,null)):(Be(e,n,"encType",c.encType,c,null),Be(e,n,"method",c.method,c,null),Be(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Xi);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=gl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Xe(e,"popover",o);break;case"xlinkActuate":ve(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ve(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ve(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ve(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ve(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ve(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ve(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ve(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ve(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Nx.get(a)||a,Xe(e,a,o))}}function uh(e,n,a,o,c,h){switch(a){case"style":Dp(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Gr(e,o):(typeof o=="number"||typeof o=="bigint")&&Gr(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=e[Mn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Xe(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var y=a[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,h,y,a,null)}}c&&Be(e,n,"srcSet",a.srcSet,a,null),o&&Be(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var A=h=y=c=null,F=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":c=gt;break;case"type":y=gt;break;case"checked":F=gt;break;case"defaultChecked":it=gt;break;case"value":h=gt;break;case"defaultValue":A=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:Be(e,n,o,gt,a,null)}}On(e,h,A,F,it,y,c,!1);return;case"select":ye("invalid",e),o=y=h=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":h=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:Be(e,n,c,A,a,null)}n=h,a=y,e.multiple=!!o,n!=null?an(e,!!o,n,!1):a!=null&&an(e,!!o,a,!0);return;case"textarea":ye("invalid",e),h=c=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":c=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Be(e,n,y,A,a,null)}Ni(e,o,c,h);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Be(e,n,F,o,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<Lo.length;o++)ye(Lo[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,it,o,a,null)}return;default:if(Mc(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&uh(e,n,gt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Be(e,n,A,o,a,null))}function sS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,y=null,A=null,F=null,it=null,gt=null;for(dt in a){var xt=a[dt];if(a.hasOwnProperty(dt)&&xt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":F=xt;default:o.hasOwnProperty(dt)||Be(e,n,dt,null,o,xt)}}for(var st in o){var dt=o[st];if(xt=a[st],o.hasOwnProperty(st)&&(dt!=null||xt!=null))switch(st){case"type":h=dt;break;case"name":c=dt;break;case"checked":it=dt;break;case"defaultChecked":gt=dt;break;case"value":y=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:dt!==xt&&Be(e,n,st,dt,o,xt)}}Cn(e,y,A,F,it,gt,h,c);return;case"select":dt=y=A=st=null;for(h in a)if(F=a[h],a.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":dt=F;default:o.hasOwnProperty(h)||Be(e,n,h,null,o,F)}for(c in o)if(h=o[c],F=a[c],o.hasOwnProperty(c)&&(h!=null||F!=null))switch(c){case"value":st=h;break;case"defaultValue":A=h;break;case"multiple":y=h;default:h!==F&&Be(e,n,c,h,o,F)}n=A,a=y,o=dt,st!=null?an(e,!!a,st,!1):!!o!=!!a&&(n!=null?an(e,!!a,n,!0):an(e,!!a,a?[]:"",!1));return;case"textarea":dt=st=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(e,n,A,null,o,c)}for(y in o)if(c=o[y],h=a[y],o.hasOwnProperty(y)&&(c!=null||h!=null))switch(y){case"value":st=c;break;case"defaultValue":dt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==h&&Be(e,n,y,c,o,h)}Hr(e,st,dt);return;case"option":for(var Gt in a)if(st=a[Gt],a.hasOwnProperty(Gt)&&st!=null&&!o.hasOwnProperty(Gt))switch(Gt){case"selected":e.selected=!1;break;default:Be(e,n,Gt,null,o,st)}for(F in o)if(st=o[F],dt=a[F],o.hasOwnProperty(F)&&st!==dt&&(st!=null||dt!=null))switch(F){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Be(e,n,F,st,o,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)st=a[ne],a.hasOwnProperty(ne)&&st!=null&&!o.hasOwnProperty(ne)&&Be(e,n,ne,null,o,st);for(it in o)if(st=o[it],dt=a[it],o.hasOwnProperty(it)&&st!==dt&&(st!=null||dt!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:Be(e,n,it,st,o,dt)}return;default:if(Mc(n)){for(var Fe in a)st=a[Fe],a.hasOwnProperty(Fe)&&st!==void 0&&!o.hasOwnProperty(Fe)&&uh(e,n,Fe,void 0,o,st);for(gt in o)st=o[gt],dt=a[gt],!o.hasOwnProperty(gt)||st===dt||st===void 0&&dt===void 0||uh(e,n,gt,st,o,dt);return}}for(var K in a)st=a[K],a.hasOwnProperty(K)&&st!=null&&!o.hasOwnProperty(K)&&Be(e,n,K,null,o,st);for(xt in o)st=o[xt],dt=a[xt],!o.hasOwnProperty(xt)||st===dt||st==null&&dt==null||Be(e,n,xt,st,o,dt)}function U_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],h=c.transferSize,y=c.initiatorType,A=c.duration;if(h&&A&&U_(y)){for(y=0,A=c.responseEnd,o+=1;o<a.length;o++){var F=a[o],it=F.startTime;if(it>A)break;var gt=F.transferSize,xt=F.initiatorType;gt&&U_(xt)&&(F=F.responseEnd,y+=gt*(F<A?1:(A-it)/(F-it)))}if(--o,n+=8*(h+y)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ch=null,fh=null;function fu(e){return e.nodeType===9?e:e.ownerDocument}function L_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function hh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var dh=null;function lS(){var e=window.event;return e&&e.type==="popstate"?e===dh?!1:(dh=e,!0):(dh=null,!1)}var O_=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,P_=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof P_<"u"?function(e){return P_.resolve(null).then(e).catch(fS)}:O_;function fS(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function z_(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),vs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Oo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Oo(a);for(var h=a.firstChild;h;){var y=h.nextSibling,A=h.nodeName;h[ir]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=y}}else a==="body"&&Oo(e.ownerDocument.body);a=c}while(a);vs(n)}function I_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ph(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ph(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function hS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ir])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function dS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function B_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hi(e.nextSibling),e===null))return null;return e}function mh(e){return e.data==="$?"||e.data==="$~"}function gh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function pS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var _h=null;function F_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return hi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function H_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function G_(e,n,a){switch(n=fu(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Oo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var di=new Map,V_=new Set;function hu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=X.d;X.d={f:mS,r:gS,D:_S,C:vS,L:xS,m:yS,X:MS,S:SS,M:ES};function mS(){var e=sa.f(),n=iu();return e||n}function gS(e){var n=ut(e);n!==null&&n.tag===5&&n.type==="form"?rg(n):sa.r(e)}var ms=typeof document>"u"?null:document;function k_(e,n,a){var o=ms;if(o&&typeof n=="string"&&n){var c=Se(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),V_.has(c)||(V_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Rn(n,"link",e),Mt(n),o.head.appendChild(n)))}}function _S(e){sa.D(e),k_("dns-prefetch",e,null)}function vS(e,n){sa.C(e,n),k_("preconnect",e,n)}function xS(e,n,a){sa.L(e,n,a);var o=ms;if(o&&e&&n){var c='link[rel="preload"][as="'+Se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Se(a.imageSizes)+'"]')):c+='[href="'+Se(e)+'"]';var h=c;switch(n){case"style":h=gs(e);break;case"script":h=_s(e)}di.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(h,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Po(h))||n==="script"&&o.querySelector(zo(h))||(n=o.createElement("link"),Rn(n,"link",e),Mt(n),o.head.appendChild(n)))}}function yS(e,n){sa.m(e,n);var a=ms;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Se(o)+'"][href="'+Se(e)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=_s(e)}if(!di.has(h)&&(e=v({rel:"modulepreload",href:e},n),di.set(h,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(h)))return}o=a.createElement("link"),Rn(o,"link",e),Mt(o),a.head.appendChild(o)}}}function SS(e,n,a){sa.S(e,n,a);var o=ms;if(o&&e){var c=Q(o).hoistableStyles,h=gs(e);n=n||"default";var y=c.get(h);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(Po(h)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(h))&&vh(e,a);var F=y=o.createElement("link");Mt(F),Rn(F,"link",e),F._p=new Promise(function(it,gt){F.onload=it,F.onerror=gt}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,du(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},c.set(h,y)}}}function MS(e,n){sa.X(e,n);var a=ms;if(a&&e){var o=Q(a).hoistableScripts,c=_s(e),h=o.get(c);h||(h=a.querySelector(zo(c)),h||(e=v({src:e,async:!0},n),(n=di.get(c))&&xh(e,n),h=a.createElement("script"),Mt(h),Rn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function ES(e,n){sa.M(e,n);var a=ms;if(a&&e){var o=Q(a).hoistableScripts,c=_s(e),h=o.get(c);h||(h=a.querySelector(zo(c)),h||(e=v({src:e,async:!0,type:"module"},n),(n=di.get(c))&&xh(e,n),h=a.createElement("script"),Mt(h),Rn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function X_(e,n,a,o){var c=(c=ot.current)?hu(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=gs(a.href),a=Q(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=gs(a.href);var h=Q(c).hoistableStyles,y=h.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=c.querySelector(Po(e)))&&!h._p&&(y.instance=h,y.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),h||bS(c,e,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_s(a),a=Q(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function gs(e){return'href="'+Se(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function W_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function bS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),Mt(n),e.head.appendChild(n))}function _s(e){return'[src="'+Se(e)+'"]'}function zo(e){return"script[async]"+e}function Y_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Se(a.href)+'"]');if(o)return n.instance=o,Mt(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Mt(o),Rn(o,"style",c),du(o,a.precedence,e),n.instance=o;case"stylesheet":c=gs(a.href);var h=e.querySelector(Po(c));if(h)return n.state.loading|=4,n.instance=h,Mt(h),h;o=W_(a),(c=di.get(c))&&vh(o,c),h=(e.ownerDocument||e).createElement("link"),Mt(h);var y=h;return y._p=new Promise(function(A,F){y.onload=A,y.onerror=F}),Rn(h,"link",o),n.state.loading|=4,du(h,a.precedence,e),n.instance=h;case"script":return h=_s(a.src),(c=e.querySelector(zo(h)))?(n.instance=c,Mt(c),c):(o=a,(c=di.get(h))&&(o=v({},a),xh(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Mt(c),Rn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,du(o,a.precedence,e));return n.instance}function du(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)h=A;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function vh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function xh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var pu=null;function j_(e,n,a){if(pu===null){var o=new Map,c=pu=new Map;c.set(a,o)}else c=pu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var h=a[c];if(!(h[ir]||h[ln]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=e+y;var A=o.get(y);A?A.push(h):o.set(y,[h])}}return o}function q_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function TS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Z_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function AS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=gs(o.href),h=n.querySelector(Po(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=mu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,Mt(h);return}h=n.ownerDocument||n,o=W_(o),(c=di.get(c))&&vh(o,c),h=h.createElement("link"),Mt(h);var y=h;y._p=new Promise(function(A,F){y.onload=A,y.onerror=F}),Rn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=mu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var yh=0;function RS(e,n){return e.stylesheets&&e.count===0&&_u(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&_u(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&yh===0&&(yh=62500*oS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_u(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>yh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function mu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_u(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gu=null;function _u(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gu=new Map,n.forEach(CS,e),gu=null,mu.call(e))}function CS(e,n){if(!(n.state.loading&4)){var a=gu.get(e);if(a)var o=a.get(null);else{a=new Map,gu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var y=c[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),h=a.get(y)||o,h===o&&a.set(null,c),a.set(y,c),this.count++,o=mu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Io={$$typeof:N,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function wS(e,n,a,o,c,h,y,A,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function K_(e,n,a,o,c,h,y,A,F,it,gt,xt){return e=new wS(e,n,a,y,F,it,gt,xt,A),n=1,h===!0&&(n|=24),h=Kn(3,null,null,n),e.current=h,h.stateNode=e,n=Jc(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},nf(h),e}function Q_(e){return e?(e=qr,e):qr}function J_(e,n,a,o,c,h){c=Q_(c),o.context===null?o.context=c:o.pendingContext=c,o=Aa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ra(e,o,n),a!==null&&(kn(a,e,n),mo(a,e,n))}function $_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Sh(e,n){$_(e,n),(e=e.alternate)&&$_(e,n)}function t0(e){if(e.tag===13||e.tag===31){var n=lr(e,67108864);n!==null&&kn(n,e,67108864),Sh(e,67108864)}}function e0(e){if(e.tag===13||e.tag===31){var n=ei();n=Br(n);var a=lr(e,n);a!==null&&kn(a,e,n),Sh(e,n)}}var vu=!0;function DS(e,n,a,o){var c=P.T;P.T=null;var h=X.p;try{X.p=2,Mh(e,n,a,o)}finally{X.p=h,P.T=c}}function US(e,n,a,o){var c=P.T;P.T=null;var h=X.p;try{X.p=8,Mh(e,n,a,o)}finally{X.p=h,P.T=c}}function Mh(e,n,a,o){if(vu){var c=Eh(o);if(c===null)lh(e,n,o,xu,a),i0(e,o);else if(NS(c,e,n,a,o))o.stopPropagation();else if(i0(e,o),n&4&&-1<LS.indexOf(e)){for(;c!==null;){var h=ut(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=bt(h.pendingLanes);if(y!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var F=1<<31-It(y);A.entanglements[1]|=F,y&=~F}Ii(h),(Ue&6)===0&&(eu=b()+500,Uo(0))}}break;case 31:case 13:A=lr(h,2),A!==null&&kn(A,h,2),iu(),Sh(h,2)}if(h=Eh(o),h===null&&lh(e,n,o,xu,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else lh(e,n,o,null,a)}}function Eh(e){return e=bc(e),bh(e)}var xu=null;function bh(e){if(xu=null,e=Y(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return xu=e,null}function n0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(at()){case _t:return 2;case Et:return 8;case mt:case Kt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var Th=!1,Ba=null,Fa=null,Ha=null,Bo=new Map,Fo=new Map,Ga=[],LS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function i0(e,n){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Ho(e,n,a,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=ut(n),n!==null&&t0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function NS(e,n,a,o,c){switch(n){case"focusin":return Ba=Ho(Ba,e,n,a,o,c),!0;case"dragenter":return Fa=Ho(Fa,e,n,a,o,c),!0;case"mouseover":return Ha=Ho(Ha,e,n,a,o,c),!0;case"pointerover":var h=c.pointerId;return Bo.set(h,Ho(Bo.get(h)||null,e,n,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Fo.set(h,Ho(Fo.get(h)||null,e,n,a,o,c)),!0}return!1}function a0(e){var n=Y(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Qs(e.priority,function(){e0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Qs(e.priority,function(){e0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Eh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Ec=o,a.target.dispatchEvent(o),Ec=null}else return n=ut(a),n!==null&&t0(n),e.blockedOn=a,!1;n.shift()}return!0}function r0(e,n,a){yu(e)&&a.delete(n)}function OS(){Th=!1,Ba!==null&&yu(Ba)&&(Ba=null),Fa!==null&&yu(Fa)&&(Fa=null),Ha!==null&&yu(Ha)&&(Ha=null),Bo.forEach(r0),Fo.forEach(r0)}function Su(e,n){e.blockedOn===n&&(e.blockedOn=null,Th||(Th=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,OS)))}var Mu=null;function s0(e){Mu!==e&&(Mu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Mu===e&&(Mu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(bh(o||a)===null)continue;break}var h=ut(a);h!==null&&(e.splice(n,3),n-=3,Ef(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function vs(e){function n(F){return Su(F,e)}Ba!==null&&Su(Ba,e),Fa!==null&&Su(Fa,e),Ha!==null&&Su(Ha,e),Bo.forEach(n),Fo.forEach(n);for(var a=0;a<Ga.length;a++){var o=Ga[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ga.length&&(a=Ga[0],a.blockedOn===null);)a0(a),a.blockedOn===null&&Ga.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],y=c[Mn]||null;if(typeof h=="function")y||s0(a);else if(y){var A=null;if(h&&h.hasAttribute("formAction")){if(c=h,y=h[Mn]||null)A=y.formAction;else if(bh(c)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),s0(a)}}}function o0(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Ah(e){this._internalRoot=e}Eu.prototype.render=Ah.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ei();J_(a,o,e,n,null,null)},Eu.prototype.unmount=Ah.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;J_(e.current,2,null,e,null,null),iu(),n[xa]=null}};function Eu(e){this._internalRoot=e}Eu.prototype.unstable_scheduleHydration=function(e){if(e){var n=nr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ga.length&&n!==0&&n<Ga[a].priority;a++);Ga.splice(a,0,e),a===0&&a0(e)}};var l0=t.version;if(l0!=="19.2.0")throw Error(r(527,l0,"19.2.0"));X.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var PS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{Tt=bu.inject(PS),wt=bu}catch{}}return Vo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=mg,h=gg,y=_g;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=K_(e,1,!1,null,null,a,o,null,c,h,y,o0),e[xa]=n.current,oh(e),new Ah(n)},Vo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",h=mg,y=gg,A=_g,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=K_(e,1,!0,n,a??null,o,c,F,h,y,A,o0),n.context=Q_(null),a=n.current,o=ei(),o=Br(o),c=Aa(o),c.callback=null,Ra(a,c,o),a=o,n.current.lanes=a,Nn(n,a),Ii(n),e[xa]=n.current,oh(e),new Eu(n)},Vo.version="19.2.0",Vo}var v0;function YS(){if(v0)return wh.exports;v0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),wh.exports=WS(),wh.exports}var jS=YS();const qS=IS(jS);/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var x0="popstate";function ZS(s={}){function t(r,l){let{pathname:u,search:f,hash:d}=r.location;return pd("",{pathname:u,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:el(l)}return QS(t,i,null,s)}function Qe(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function wi(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function KS(){return Math.random().toString(36).substring(2,10)}function y0(s,t){return{usr:s.state,key:s.key,idx:t}}function pd(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Ws(t):t,state:i,key:t&&t.key||r||KS()}}function el({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ws(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function QS(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,d="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function v(){d="POP";let M=g(),_=M==null?null:M-p;p=M,m&&m({action:d,location:T.location,delta:_})}function x(M,_){d="PUSH";let D=pd(T.location,M,_);p=g()+1;let N=y0(D,p),U=T.createHref(D);try{f.pushState(N,"",U)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(U)}u&&m&&m({action:d,location:T.location,delta:1})}function S(M,_){d="REPLACE";let D=pd(T.location,M,_);p=g();let N=y0(D,p),U=T.createHref(D);f.replaceState(N,"",U),u&&m&&m({action:d,location:T.location,delta:0})}function E(M){return JS(M)}let T={get action(){return d},get location(){return s(l,f)},listen(M){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(x0,v),m=M,()=>{l.removeEventListener(x0,v),m=null}},createHref(M){return t(l,M)},createURL:E,encodeLocation(M){let _=E(M);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:S,go(M){return f.go(M)}};return T}function JS(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:el(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Pv(s,t,i="/"){return $S(s,t,i,!1)}function $S(s,t,i,r){let l=typeof t=="string"?Ws(t):t,u=_a(l.pathname||"/",i);if(u==null)return null;let f=zv(s);tM(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=fM(u);d=uM(f[m],p,r)}return d}function zv(s,t=[],i=[],r="",l=!1){let u=(f,d,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;Qe(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=ma([r,g.relativePath]),x=i.concat(g);f.children&&f.children.length>0&&(Qe(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),zv(f.children,t,x,v,m)),!(f.path==null&&!f.index)&&t.push({path:v,score:oM(v,f.index),routesMeta:x})};return s.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))u(f,d);else for(let m of Iv(f.path))u(f,d,!0,m)}),t}function Iv(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=Iv(r.join("/")),d=[];return d.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function tM(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:lM(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var eM=/^:[\w-]+$/,nM=3,iM=2,aM=1,rM=10,sM=-2,S0=s=>s==="*";function oM(s,t){let i=s.split("/"),r=i.length;return i.some(S0)&&(r+=sM),t&&(r+=iM),i.filter(l=>!S0(l)).reduce((l,u)=>l+(eM.test(u)?nM:u===""?aM:rM),r)}function lM(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function uM(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=u==="/"?t:t.slice(u.length)||"/",v=sc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),x=m.route;if(!v&&p&&i&&!r[r.length-1].route.index&&(v=sc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:ma([u,v.pathname]),pathnameBase:mM(ma([u,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(u=ma([u,v.pathnameBase]))}return f}function sc(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=cM(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},x)=>{if(g==="*"){let E=d[x]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const S=d[x];return v&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:s}}function cM(s,t=!1,i=!0){wi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function fM(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function _a(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function hM(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ws(s):s;return{pathname:i?i.startsWith("/")?i:dM(i,t):t,search:gM(r),hash:_M(l)}}function dM(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Nh(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function pM(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function lp(s){let t=pM(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function up(s,t,i,r=!1){let l;typeof s=="string"?l=Ws(s):(l={...s},Qe(!l.pathname||!l.pathname.includes("?"),Nh("?","pathname","search",l)),Qe(!l.pathname||!l.pathname.includes("#"),Nh("#","pathname","hash",l)),Qe(!l.search||!l.search.includes("#"),Nh("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,d;if(f==null)d=i;else{let v=t.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),v-=1;l.pathname=x.join("/")}d=v>=0?t[v]:"/"}let m=hM(l,d),p=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var ma=s=>s.join("/").replace(/\/\/+/g,"/"),mM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),gM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,_M=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function vM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Bv=["POST","PUT","PATCH","DELETE"];new Set(Bv);var xM=["GET",...Bv];new Set(xM);var Ys=$.createContext(null);Ys.displayName="DataRouter";var pc=$.createContext(null);pc.displayName="DataRouterState";$.createContext(!1);var Fv=$.createContext({isTransitioning:!1});Fv.displayName="ViewTransition";var yM=$.createContext(new Map);yM.displayName="Fetchers";var SM=$.createContext(null);SM.displayName="Await";var Di=$.createContext(null);Di.displayName="Navigation";var ll=$.createContext(null);ll.displayName="Location";var Ui=$.createContext({outlet:null,matches:[],isDataRoute:!1});Ui.displayName="Route";var cp=$.createContext(null);cp.displayName="RouteError";function MM(s,{relative:t}={}){Qe(js(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=$.useContext(Di),{hash:l,pathname:u,search:f}=ul(s,{relative:t}),d=u;return i!=="/"&&(d=u==="/"?i:ma([i,u])),r.createHref({pathname:d,search:f,hash:l})}function js(){return $.useContext(ll)!=null}function va(){return Qe(js(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(ll).location}var Hv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Gv(s){$.useContext(Di).static||$.useLayoutEffect(s)}function mc(){let{isDataRoute:s}=$.useContext(Ui);return s?zM():EM()}function EM(){Qe(js(),"useNavigate() may be used only in the context of a <Router> component.");let s=$.useContext(Ys),{basename:t,navigator:i}=$.useContext(Di),{matches:r}=$.useContext(Ui),{pathname:l}=va(),u=JSON.stringify(lp(r)),f=$.useRef(!1);return Gv(()=>{f.current=!0}),$.useCallback((m,p={})=>{if(wi(f.current,Hv),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=up(m,JSON.parse(u),l,p.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ma([t,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[t,i,u,l,s])}$.createContext(null);function bM(){let{matches:s}=$.useContext(Ui),t=s[s.length-1];return t?t.params:{}}function ul(s,{relative:t}={}){let{matches:i}=$.useContext(Ui),{pathname:r}=va(),l=JSON.stringify(lp(i));return $.useMemo(()=>up(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function TM(s,t){return Vv(s,t)}function Vv(s,t,i,r,l){Qe(js(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=$.useContext(Di),{matches:f}=$.useContext(Ui),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",v=d&&d.route;{let D=v&&v.path||"";kv(p,!v||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let x=va(),S;if(t){let D=typeof t=="string"?Ws(t):t;Qe(g==="/"||D.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),S=D}else S=x;let E=S.pathname||"/",T=E;if(g!=="/"){let D=g.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let M=Pv(s,{pathname:T});wi(v||M!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),wi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=DM(M&&M.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:ma([g,u.encodeLocation?u.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:ma([g,u.encodeLocation?u.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),f,i,r,l);return t&&_?$.createElement(ll.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},_):_}function AM(){let s=PM(),t=vM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:u},"ErrorBoundary")," or"," ",$.createElement("code",{style:u},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},t),i?$.createElement("pre",{style:l},i):null,f)}var RM=$.createElement(AM,null),CM=class extends $.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.unstable_onError?this.props.unstable_onError(s,t):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?$.createElement(Ui.Provider,{value:this.props.routeContext},$.createElement(cp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function wM({routeContext:s,match:t,children:i}){let r=$.useContext(Ys);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),$.createElement(Ui.Provider,{value:s},i)}function DM(s,t=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let u=s,f=i?.errors;if(f!=null){let p=u.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Qe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,p+1))}let d=!1,m=-1;if(i)for(let p=0;p<u.length;p++){let g=u[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:v,errors:x}=i,S=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||S){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((p,g,v)=>{let x,S=!1,E=null,T=null;i&&(x=f&&g.route.id?f[g.route.id]:void 0,E=g.route.errorElement||RM,d&&(m<0&&v===0?(kv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,T=null):m===v&&(S=!0,T=g.route.hydrateFallbackElement||null)));let M=t.concat(u.slice(0,v+1)),_=()=>{let D;return x?D=E:S?D=T:g.route.Component?D=$.createElement(g.route.Component,null):g.route.element?D=g.route.element:D=p,$.createElement(wM,{match:g,routeContext:{outlet:p,matches:M,isDataRoute:i!=null},children:D})};return i&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?$.createElement(CM,{location:i.location,revalidation:i.revalidation,component:E,error:x,children:_(),routeContext:{outlet:null,matches:M,isDataRoute:!0},unstable_onError:r}):_()},null)}function fp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function UM(s){let t=$.useContext(Ys);return Qe(t,fp(s)),t}function LM(s){let t=$.useContext(pc);return Qe(t,fp(s)),t}function NM(s){let t=$.useContext(Ui);return Qe(t,fp(s)),t}function hp(s){let t=NM(s),i=t.matches[t.matches.length-1];return Qe(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function OM(){return hp("useRouteId")}function PM(){let s=$.useContext(cp),t=LM("useRouteError"),i=hp("useRouteError");return s!==void 0?s:t.errors?.[i]}function zM(){let{router:s}=UM("useNavigate"),t=hp("useNavigate"),i=$.useRef(!1);return Gv(()=>{i.current=!0}),$.useCallback(async(l,u={})=>{wi(i.current,Hv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var M0={};function kv(s,t,i){!t&&!M0[s]&&(M0[s]=!0,wi(!1,i))}$.memo(IM);function IM({routes:s,future:t,state:i,unstable_onError:r}){return Vv(s,void 0,i,r,t)}function BM({to:s,replace:t,state:i,relative:r}){Qe(js(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=$.useContext(Di);wi(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=$.useContext(Ui),{pathname:f}=va(),d=mc(),m=up(s,lp(u),f,r==="path"),p=JSON.stringify(m);return $.useEffect(()=>{d(JSON.parse(p),{replace:t,state:i,relative:r})},[d,p,r,t,i]),null}function Ko(s){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function FM({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){Qe(!js(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=$.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof i=="string"&&(i=Ws(i));let{pathname:m="/",search:p="",hash:g="",state:v=null,key:x="default"}=i,S=$.useMemo(()=>{let E=_a(m,f);return E==null?null:{location:{pathname:E,search:p,hash:g,state:v,key:x},navigationType:r}},[f,m,p,g,v,x,r]);return wi(S!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:$.createElement(Di.Provider,{value:d},$.createElement(ll.Provider,{children:t,value:S}))}function HM({children:s,location:t}){return TM(md(s),t)}function md(s,t=[]){let i=[];return $.Children.forEach(s,(r,l)=>{if(!$.isValidElement(r))return;let u=[...t,l];if(r.type===$.Fragment){i.push.apply(i,md(r.props.children,u));return}Qe(r.type===Ko,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=md(r.props.children,u)),i.push(f)}),i}var $u="get",tc="application/x-www-form-urlencoded";function gc(s){return s!=null&&typeof s.tagName=="string"}function GM(s){return gc(s)&&s.tagName.toLowerCase()==="button"}function VM(s){return gc(s)&&s.tagName.toLowerCase()==="form"}function kM(s){return gc(s)&&s.tagName.toLowerCase()==="input"}function XM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function WM(s,t){return s.button===0&&(!t||t==="_self")&&!XM(s)}var Tu=null;function YM(){if(Tu===null)try{new FormData(document.createElement("form"),0),Tu=!1}catch{Tu=!0}return Tu}var jM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Oh(s){return s!=null&&!jM.has(s)?(wi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tc}"`),null):s}function qM(s,t){let i,r,l,u,f;if(VM(s)){let d=s.getAttribute("action");r=d?_a(d,t):null,i=s.getAttribute("method")||$u,l=Oh(s.getAttribute("enctype"))||tc,u=new FormData(s)}else if(GM(s)||kM(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?_a(m,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||$u,l=Oh(s.getAttribute("formenctype"))||Oh(d.getAttribute("enctype"))||tc,u=new FormData(d,s),!YM()){let{name:p,type:g,value:v}=s;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,v)}}else{if(gc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=$u,r=null,l=tc,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function dp(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function ZM(s,t,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:t&&_a(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function KM(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function QM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function JM(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let f=await KM(u,i);return f.links?f.links():[]}return[]}));return nE(r.flat(1).filter(QM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function E0(s,t,i,r,l,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?t.filter((m,p)=>f(m,p)||d(m,p)):u==="data"?t.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function $M(s,t,{includeHydrateFallback:i}={}){return tE(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function tE(s){return[...new Set(s)]}function eE(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function nE(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(eE(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function Xv(){let s=$.useContext(Ys);return dp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function iE(){let s=$.useContext(pc);return dp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var pp=$.createContext(void 0);pp.displayName="FrameworkContext";function Wv(){let s=$.useContext(pp);return dp(s,"You must render this element inside a <HydratedRouter> element"),s}function aE(s,t){let i=$.useContext(pp),[r,l]=$.useState(!1),[u,f]=$.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=t,x=$.useRef(null);$.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=_=>{_.forEach(D=>{f(D.isIntersecting)})},M=new IntersectionObserver(T,{threshold:.5});return x.current&&M.observe(x.current),()=>{M.disconnect()}}},[s]),$.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let S=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,x,{}]:[u,x,{onFocus:ko(d,S),onBlur:ko(m,E),onMouseEnter:ko(p,S),onMouseLeave:ko(g,E),onTouchStart:ko(v,S)}]:[!1,x,{}]}function ko(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function rE({page:s,...t}){let{router:i}=Xv(),r=$.useMemo(()=>Pv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?$.createElement(oE,{page:s,matches:r,...t}):null}function sE(s){let{manifest:t,routeModules:i}=Wv(),[r,l]=$.useState([]);return $.useEffect(()=>{let u=!1;return JM(s,t,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,t,i]),r}function oE({page:s,matches:t,...i}){let r=va(),{manifest:l,routeModules:u}=Wv(),{basename:f}=Xv(),{loaderData:d,matches:m}=iE(),p=$.useMemo(()=>E0(s,t,m,l,r,"data"),[s,t,m,l,r]),g=$.useMemo(()=>E0(s,t,m,l,r,"assets"),[s,t,m,l,r]),v=$.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,T=!1;if(t.forEach(_=>{let D=l.routes[_.route.id];!D||!D.hasLoader||(!p.some(N=>N.route.id===_.route.id)&&_.route.id in d&&u[_.route.id]?.shouldRevalidate||D.hasClientLoader?T=!0:E.add(_.route.id))}),E.size===0)return[];let M=ZM(s,f,"data");return T&&E.size>0&&M.searchParams.set("_routes",t.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[M.pathname+M.search]},[f,d,r,l,p,t,s,u]),x=$.useMemo(()=>$M(g,l),[g,l]),S=sE(g);return $.createElement($.Fragment,null,v.map(E=>$.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),x.map(E=>$.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),S.map(({key:E,link:T})=>$.createElement("link",{key:E,nonce:i.nonce,...T})))}function lE(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Yv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Yv&&(window.__reactRouterVersion="7.9.3")}catch{}function uE({basename:s,children:t,window:i}){let r=$.useRef();r.current==null&&(r.current=ZS({window:i,v5Compat:!0}));let l=r.current,[u,f]=$.useState({action:l.action,location:l.location}),d=$.useCallback(m=>{$.startTransition(()=>f(m))},[f]);return $.useLayoutEffect(()=>l.listen(d),[l,d]),$.createElement(FM,{basename:s,children:t,location:u.location,navigationType:u.action,navigator:l})}var jv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oc=$.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,state:d,target:m,to:p,preventScrollReset:g,viewTransition:v,...x},S){let{basename:E}=$.useContext(Di),T=typeof p=="string"&&jv.test(p),M,_=!1;if(typeof p=="string"&&T&&(M=p,Yv))try{let C=new URL(window.location.href),w=p.startsWith("//")?new URL(C.protocol+p):new URL(p),z=_a(w.pathname,E);w.origin===C.origin&&z!=null?p=z+w.search+w.hash:_=!0}catch{wi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=MM(p,{relative:l}),[N,U,B]=aE(r,x),G=dE(p,{replace:f,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:v});function I(C){t&&t(C),C.defaultPrevented||G(C)}let q=$.createElement("a",{...x,...B,href:M||D,onClick:_||u?t:I,ref:lE(S,U),target:m,"data-discover":!T&&i==="render"?"true":void 0});return N&&!T?$.createElement($.Fragment,null,q,$.createElement(rE,{page:D})):q});oc.displayName="Link";var cE=$.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:d,children:m,...p},g){let v=ul(f,{relative:p.relative}),x=va(),S=$.useContext(pc),{navigator:E,basename:T}=$.useContext(Di),M=S!=null&&vE(v)&&d===!0,_=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,D=x.pathname,N=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(D=D.toLowerCase(),N=N?N.toLowerCase():null,_=_.toLowerCase()),N&&T&&(N=_a(N,T)||N);const U=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let B=D===_||!l&&D.startsWith(_)&&D.charAt(U)==="/",G=N!=null&&(N===_||!l&&N.startsWith(_)&&N.charAt(_.length)==="/"),I={isActive:B,isPending:G,isTransitioning:M},q=B?t:void 0,C;typeof r=="function"?C=r(I):C=[r,B?"active":null,G?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let w=typeof u=="function"?u(I):u;return $.createElement(oc,{...p,"aria-current":q,className:C,ref:g,style:w,to:f,viewTransition:d},typeof m=="function"?m(I):m)});cE.displayName="NavLink";var fE=$.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:f=$u,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,...x},S)=>{let E=gE(),T=_E(d,{relative:p}),M=f.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&jv.test(d),D=N=>{if(m&&m(N),N.defaultPrevented)return;N.preventDefault();let U=N.nativeEvent.submitter,B=U?.getAttribute("formmethod")||f;E(U||N.currentTarget,{fetcherKey:t,method:B,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:v})};return $.createElement("form",{ref:S,method:M,action:T,onSubmit:r?m:D,...x,"data-discover":!_&&s==="render"?"true":void 0})});fE.displayName="Form";function hE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qv(s){let t=$.useContext(Ys);return Qe(t,hE(s)),t}function dE(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:f}={}){let d=mc(),m=va(),p=ul(s,{relative:u});return $.useCallback(g=>{if(WM(g,t)){g.preventDefault();let v=i!==void 0?i:el(m)===el(p);d(s,{replace:v,state:r,preventScrollReset:l,relative:u,viewTransition:f})}},[m,d,p,i,r,t,s,l,u,f])}var pE=0,mE=()=>`__${String(++pE)}__`;function gE(){let{router:s}=qv("useSubmit"),{basename:t}=$.useContext(Di),i=OM();return $.useCallback(async(r,l={})=>{let{action:u,method:f,encType:d,formData:m,body:p}=qM(r,t);if(l.navigate===!1){let g=l.fetcherKey||mE();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function _E(s,{relative:t}={}){let{basename:i}=$.useContext(Di),r=$.useContext(Ui);Qe(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...ul(s||".",{relative:t})},f=va();if(s==null){u.search=f.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ma([i,u.pathname])),el(u)}function vE(s,{relative:t}={}){let i=$.useContext(Fv);Qe(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=qv("useViewTransitionState"),l=ul(s,{relative:t});if(!i.isTransitioning)return!1;let u=_a(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=_a(i.nextLocation.pathname,r)||i.nextLocation.pathname;return sc(l.pathname,f)!=null||sc(l.pathname,u)!=null}const Ti="http://10.0.0.125:8000";async function gd(){try{const s=await fetch(`${Ti}/stars`);if(!s.ok){const t=await s.text();throw new Error(`Failed to fetch stars: ${s.status} ${t}`)}return await s.json()}catch(s){throw console.error("fetchStars error:",s),s}}async function xE(s){try{const t=await fetch(`${Ti}/star/${encodeURIComponent(s)}`);if(!t.ok){const i=await t.text();throw new Error(`Failed to fetch star ${s}: ${t.status} ${i}`)}return await t.json()}catch(t){throw console.error(`fetchStarById error for ${s}:`,t),t}}async function b0(){try{const s=await fetch(`${Ti}/ping`);if(!s.ok){const t=await s.text();throw new Error(`Ping failed: ${s.status} ${t}`)}return await s.json()}catch(s){throw console.error("pingBackend error:",s),s}}async function yE(s){try{const t=new FormData;t.append("file",s);const i=await fetch(`${Ti}/upload_csv`,{method:"POST",body:t});if(!i.ok)throw new Error(`CSV upload failed: ${i.status}`);return await i.json()}catch(t){throw console.error("uploadCSV error:",t),t}}async function SE(s){try{const t=await fetch(`${Ti}/upload_json`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!t.ok){const i=await t.text();throw new Error(`Star upload failed: ${t.status} ${i}`)}return await t.json()}catch(t){throw console.error("uploadStar error:",t),t}}async function ME(s){try{const t=await fetch(`${Ti}/classify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!t.ok){const i=await t.text();throw new Error(`Classification failed: ${t.status} ${i}`)}return await t.json()}catch(t){throw console.error("classifyStar error:",t),t}}async function EE(s){try{const t=await fetch(`${Ti}/habitability`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!t.ok){const i=await t.text();throw new Error(`Habitability prediction failed: ${t.status} ${i}`)}return await t.json()}catch(t){throw console.error("predictHabitability error:",t),t}}function bE(){const[s,t]=$.useState("checking"),[i,r]=$.useState(null);$.useEffect(()=>{let f=!1;const d=async()=>{try{await b0(),f||(t("online"),r(new Date))}catch{f||(t("offline"),r(new Date))}};d();const m=setInterval(d,3e4);return()=>{f=!0,clearInterval(m)}},[]);const l=s==="online"?"#2ecc71":s==="offline"?"#e74c3c":"#f1c40f",u=s==="online"?"Backend Online":s==="offline"?"Backend Offline":"Checking backend...";return et.jsxs("nav",{style:{padding:"0.85rem 1.5rem",background:"#0b0c17",color:"#fff",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[et.jsxs("div",{children:[et.jsx(oc,{to:"/",style:{marginRight:20,color:"#fff",textDecoration:"none",fontWeight:600},children:"Home"}),et.jsx(oc,{to:"/upload",style:{color:"#fff",textDecoration:"none",fontWeight:600},children:"Upload"})]}),et.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.85rem"},children:[et.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"4px 10px",borderRadius:"999px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.08)"},title:i?`Last checked at ${i.toLocaleTimeString()}`:void 0,children:[et.jsx("span",{style:{display:"inline-block",width:"10px",height:"10px",borderRadius:"50%",backgroundColor:l,boxShadow:`0 0 8px ${l}`}}),u]}),et.jsx("button",{type:"button",onClick:()=>{t("checking"),b0().then(()=>t("online")).catch(()=>t("offline")).finally(()=>r(new Date))},style:{background:"transparent",border:"1px solid rgba(255,255,255,0.2)",color:"#fff",padding:"4px 10px",borderRadius:"6px",cursor:"pointer",fontSize:"0.8rem"},children:"Refresh"})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mp="180",Is={ROTATE:0,DOLLY:1,PAN:2},Ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},TE=0,T0=1,AE=2,Zv=1,RE=2,ha=3,tr=0,Yn=1,da=2,Ja=0,Bs=1,A0=2,R0=3,C0=4,CE=5,Cr=100,wE=101,DE=102,UE=103,LE=104,NE=200,OE=201,PE=202,zE=203,_d=204,vd=205,IE=206,BE=207,FE=208,HE=209,GE=210,VE=211,kE=212,XE=213,WE=214,xd=0,yd=1,Sd=2,Hs=3,Md=4,Ed=5,bd=6,Td=7,Kv=0,YE=1,jE=2,$a=0,qE=1,ZE=2,KE=3,QE=4,JE=5,$E=6,tb=7,Qv=300,Gs=301,Vs=302,Ad=303,Rd=304,_c=306,Cd=1e3,Dr=1001,wd=1002,Ci=1003,eb=1004,Au=1005,Fi=1006,Ph=1007,Ur=1008,Gi=1009,Jv=1010,$v=1011,nl=1012,gp=1013,Lr=1014,pa=1015,cl=1016,_p=1017,vp=1018,il=1020,tx=35902,ex=35899,nx=1021,ix=1022,Ai=1023,al=1026,rl=1027,ax=1028,xp=1029,rx=1030,yp=1031,Sp=1033,ec=33776,nc=33777,ic=33778,ac=33779,Dd=35840,Ud=35841,Ld=35842,Nd=35843,Od=36196,Pd=37492,zd=37496,Id=37808,Bd=37809,Fd=37810,Hd=37811,Gd=37812,Vd=37813,kd=37814,Xd=37815,Wd=37816,Yd=37817,jd=37818,qd=37819,Zd=37820,Kd=37821,Qd=36492,Jd=36494,$d=36495,tp=36283,ep=36284,np=36285,ip=36286,nb=3200,ib=3201,sx=0,ab=1,Qa="",mi="srgb",ks="srgb-linear",lc="linear",He="srgb",xs=7680,w0=519,rb=512,sb=513,ob=514,ox=515,lb=516,ub=517,cb=518,fb=519,D0=35044,U0="300 es",Hi=2e3,uc=2001;class Pr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let L0=1234567;const $o=Math.PI/180,sl=180/Math.PI;function qs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function me(s,t,i){return Math.max(t,Math.min(i,s))}function Mp(s,t){return(s%t+t)%t}function hb(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function db(s,t,i){return s!==t?(i-s)/(t-s):0}function tl(s,t,i){return(1-i)*s+i*t}function pb(s,t,i,r){return tl(s,t,1-Math.exp(-i*r))}function mb(s,t=1){return t-Math.abs(Mp(s,t*2)-t)}function gb(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function _b(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function vb(s,t){return s+Math.floor(Math.random()*(t-s+1))}function xb(s,t){return s+Math.random()*(t-s)}function yb(s){return s*(.5-Math.random())}function Sb(s){s!==void 0&&(L0=s);let t=L0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mb(s){return s*$o}function Eb(s){return s*sl}function bb(s){return(s&s-1)===0&&s!==0}function Tb(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ab(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Rb(s,t,i,r,l){const u=Math.cos,f=Math.sin,d=u(i/2),m=f(i/2),p=u((t+r)/2),g=f((t+r)/2),v=u((t-r)/2),x=f((t-r)/2),S=u((r-t)/2),E=f((r-t)/2);switch(l){case"XYX":s.set(d*g,m*v,m*x,d*p);break;case"YZY":s.set(m*x,d*g,m*v,d*p);break;case"ZXZ":s.set(m*v,m*x,d*g,d*p);break;case"XZX":s.set(d*g,m*E,m*S,d*p);break;case"YXY":s.set(m*S,d*g,m*E,d*p);break;case"ZYZ":s.set(m*E,m*S,d*g,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ns(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function zn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Za={DEG2RAD:$o,RAD2DEG:sl,generateUUID:qs,clamp:me,euclideanModulo:Mp,mapLinear:hb,inverseLerp:db,lerp:tl,damp:pb,pingpong:mb,smoothstep:gb,smootherstep:_b,randInt:vb,randFloat:xb,randFloatSpread:yb,seededRandom:Sb,degToRad:Mb,radToDeg:Eb,isPowerOfTwo:bb,ceilPowerOfTwo:Tb,floorPowerOfTwo:Ab,setQuaternionFromProperEuler:Rb,normalize:zn,denormalize:Ns};class re{constructor(t=0,i=0){re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*r-f*l+t.x,this.y=u*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nr{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,f,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[f+0],S=u[f+1],E=u[f+2],T=u[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=S,t[i+2]=E,t[i+3]=T;return}if(v!==T||m!==x||p!==S||g!==E){let M=1-d;const _=m*x+p*S+g*E+v*T,D=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const B=Math.sqrt(N),G=Math.atan2(B,_*D);M=Math.sin(M*G)/B,d=Math.sin(d*G)/B}const U=d*D;if(m=m*M+x*U,p=p*M+S*U,g=g*M+E*U,v=v*M+T*U,M===1-d){const B=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=B,p*=B,g*=B,v*=B}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,f){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[f],x=u[f+1],S=u[f+2],E=u[f+3];return t[i]=d*E+g*v+m*S-p*x,t[i+1]=m*E+g*x+p*v-d*S,t[i+2]=p*E+g*S+d*x-m*v,t[i+3]=g*E-d*v-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),x=m(r/2),S=m(l/2),E=m(u/2);switch(f){case"XYZ":this._x=x*g*v+p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v-x*S*E;break;case"YXZ":this._x=x*g*v+p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v+x*S*E;break;case"ZXY":this._x=x*g*v-p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v-x*S*E;break;case"ZYX":this._x=x*g*v-p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v+x*S*E;break;case"YZX":this._x=x*g*v+p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v-x*S*E;break;case"XZY":this._x=x*g*v-p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-m)*S,this._y=(u-p)*S,this._z=(f-l)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(u+p)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(u-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(f-l)/S,this._x=(u+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*d+l*p-u*m,this._y=l*g+f*m+u*d-r*p,this._z=u*g+f*p+r*m-l*d,this._w=f*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,r=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(N0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(N0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*r),g=2*(d*i-u*l),v=2*(u*r-f*i);return this.x=i+m*p+f*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*f-r*m,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return zh.copy(this).projectOnVector(t),this.sub(zh)}reflect(t){return this.sub(zh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zh=new j,N0=new Nr;class de{constructor(t,i,r,l,u,f,d,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,d,m,p)}set(t,i,r,l,u,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],S=r[5],E=r[8],T=l[0],M=l[3],_=l[6],D=l[1],N=l[4],U=l[7],B=l[2],G=l[5],I=l[8];return u[0]=f*T+d*D+m*B,u[3]=f*M+d*N+m*G,u[6]=f*_+d*U+m*I,u[1]=p*T+g*D+v*B,u[4]=p*M+g*N+v*G,u[7]=p*_+g*U+v*I,u[2]=x*T+S*D+E*B,u[5]=x*M+S*N+E*G,u[8]=x*_+S*U+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-r*u*g+r*d*m+l*u*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*f-d*p,x=d*m-g*u,S=p*u-f*m,E=i*v+r*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(l*p-g*r)*T,t[2]=(d*r-l*f)*T,t[3]=x*T,t[4]=(g*i-l*m)*T,t[5]=(l*u-d*i)*T,t[6]=S*T,t[7]=(r*m-p*i)*T,t[8]=(f*i-r*u)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Ih.makeScale(t,i)),this}rotate(t){return this.premultiply(Ih.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ih.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ih=new de;function lx(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function cc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cb(){const s=cc("canvas");return s.style.display="block",s}const O0={};function ol(s){s in O0||(O0[s]=!0,console.warn(s))}function wb(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const P0=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),z0=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Db(){const s={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===He&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===He&&(l.r=Fs(l.r),l.g=Fs(l.g),l.b=Fs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?lc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ol("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ol("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ks]:{primaries:t,whitePoint:r,transfer:lc,toXYZ:P0,fromXYZ:z0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:t,whitePoint:r,transfer:He,toXYZ:P0,fromXYZ:z0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),s}const De=Db();function ga(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class Ub{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ys===void 0&&(ys=cc("canvas")),ys.width=t.width,ys.height=t.height;const l=ys.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ys}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=cc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ga(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lb=0;class Ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(Bh(l[f].image)):u.push(Bh(l[f]))}else u=Bh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Bh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ub.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nb=0;const Fh=new j;class jn extends Pr{constructor(t=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,r=Dr,l=Dr,u=Fi,f=Ur,d=Ai,m=Gi,p=jn.DEFAULT_ANISOTROPY,g=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=qs(),this.name="",this.source=new Ep(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fh).x}get height(){return this.source.getSize(Fh).y}get depth(){return this.source.getSize(Fh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cd:t.x=t.x-Math.floor(t.x);break;case Dr:t.x=t.x<0?0:1;break;case wd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cd:t.y=t.y-Math.floor(t.y);break;case Dr:t.y=t.y<0?0:1;break;case wd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Qv;jn.DEFAULT_ANISOTROPY=1;class Ve{constructor(t=0,i=0,r=0,l=1){Ve.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],S=m[5],E=m[9],T=m[2],M=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(S+1)/2,B=(_+1)/2,G=(g+x)/4,I=(v+T)/4,q=(E+M)/4;return N>U&&N>B?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=G/r,u=I/r):U>B?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=G/l,u=q/l):B<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),r=I/u,l=q/u),this.set(r,l,u,i),this}let D=Math.sqrt((M-E)*(M-E)+(v-T)*(v-T)+(x-g)*(x-g));return Math.abs(D)<.001&&(D=1),this.x=(M-E)/D,this.y=(v-T)/D,this.z=(x-g)/D,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ob extends Pr{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Ve(0,0,t,i),this.scissorTest=!1,this.viewport=new Ve(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new jn(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Fi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ep(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends Ob{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class ux extends jn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pb extends jn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fl{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Si.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Si.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Si.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Si):Si.fromBufferAttribute(u,f),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ru.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ru.copy(r.boundingBox)),Ru.applyMatrix4(t.matrixWorld),this.union(Ru)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xo),Cu.subVectors(this.max,Xo),Ss.subVectors(t.a,Xo),Ms.subVectors(t.b,Xo),Es.subVectors(t.c,Xo),ka.subVectors(Ms,Ss),Xa.subVectors(Es,Ms),Sr.subVectors(Ss,Es);let i=[0,-ka.z,ka.y,0,-Xa.z,Xa.y,0,-Sr.z,Sr.y,ka.z,0,-ka.x,Xa.z,0,-Xa.x,Sr.z,0,-Sr.x,-ka.y,ka.x,0,-Xa.y,Xa.x,0,-Sr.y,Sr.x,0];return!Hh(i,Ss,Ms,Es,Cu)||(i=[1,0,0,0,1,0,0,0,1],!Hh(i,Ss,Ms,Es,Cu))?!1:(wu.crossVectors(ka,Xa),i=[wu.x,wu.y,wu.z],Hh(i,Ss,Ms,Es,Cu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oa=[new j,new j,new j,new j,new j,new j,new j,new j],Si=new j,Ru=new fl,Ss=new j,Ms=new j,Es=new j,ka=new j,Xa=new j,Sr=new j,Xo=new j,Cu=new j,wu=new j,Mr=new j;function Hh(s,t,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){Mr.fromArray(s,u);const d=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=t.dot(Mr),p=i.dot(Mr),g=r.dot(Mr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const zb=new fl,Wo=new j,Gh=new j;class hl{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):zb.setFromPoints(t).getCenter(r);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wo.subVectors(t,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Wo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wo.copy(t.center).add(Gh)),this.expandByPoint(Wo.copy(t.center).sub(Gh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const la=new j,Vh=new j,Du=new j,Wa=new j,kh=new j,Uu=new j,Xh=new j;class dl{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=la.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,i),la.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Vh.copy(t).add(i).multiplyScalar(.5),Du.copy(i).sub(t).normalize(),Wa.copy(this.origin).sub(Vh);const u=t.distanceTo(i)*.5,f=-this.direction.dot(Du),d=Wa.dot(this.direction),m=-Wa.dot(Du),p=Wa.lengthSq(),g=Math.abs(1-f*f);let v,x,S,E;if(g>0)if(v=f*m-d,x=f*d-m,E=u*g,v>=0)if(x>=-E)if(x<=E){const T=1/g;v*=T,x*=T,S=v*(v+f*x+2*d)+x*(f*v+x+2*m)+p}else x=u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-f*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),S=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-u,-m),u),S=x*(x+2*m)+p):(v=Math.max(0,-(f*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),S=-v*v+x*(x+2*m)+p);else x=f>0?-u:u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Vh).addScaledVector(Du,x),S}intersectSphere(t,i){la.subVectors(t.center,this.origin);const r=la.dot(this.direction),l=la.dot(la)-r*r,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(u=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,i,r,l,u){kh.subVectors(i,t),Uu.subVectors(r,t),Xh.crossVectors(kh,Uu);let f=this.direction.dot(Xh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Wa.subVectors(this.origin,t);const m=d*this.direction.dot(Uu.crossVectors(Wa,Uu));if(m<0)return null;const p=d*this.direction.dot(kh.cross(Wa));if(p<0||m+p>f)return null;const g=-d*Wa.dot(Xh);return g<0?null:this.at(g/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,r,l,u,f,d,m,p,g,v,x,S,E,T,M){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,d,m,p,g,v,x,S,E,T,M)}set(t,i,r,l,u,f,d,m,p,g,v,x,S,E,T,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=f,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=E,_[11]=T,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/bs.setFromMatrixColumn(t,0).length(),u=1/bs.setFromMatrixColumn(t,1).length(),f=1/bs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=f*g,S=f*v,E=d*g,T=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=S+E*p,i[5]=x-T*p,i[9]=-d*m,i[2]=T-x*p,i[6]=E+S*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*g,S=m*v,E=p*g,T=p*v;i[0]=x+T*d,i[4]=E*d-S,i[8]=f*p,i[1]=f*v,i[5]=f*g,i[9]=-d,i[2]=S*d-E,i[6]=T+x*d,i[10]=f*m}else if(t.order==="ZXY"){const x=m*g,S=m*v,E=p*g,T=p*v;i[0]=x-T*d,i[4]=-f*v,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*g,i[9]=T-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const x=f*g,S=f*v,E=d*g,T=d*v;i[0]=m*g,i[4]=E*p-S,i[8]=x*p+T,i[1]=m*v,i[5]=T*p+x,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,S=f*p,E=d*m,T=d*p;i[0]=m*g,i[4]=T-x*v,i[8]=E*v+S,i[1]=v,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*v+E,i[10]=x-T*v}else if(t.order==="XZY"){const x=f*m,S=f*p,E=d*m,T=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+T,i[5]=f*g,i[9]=S*v-E,i[2]=E*v-S,i[6]=d*g,i[10]=T*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ib,t,Bb)}lookAt(t,i,r){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ya.crossVectors(r,ni),Ya.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ya.crossVectors(r,ni)),Ya.normalize(),Lu.crossVectors(ni,Ya),l[0]=Ya.x,l[4]=Lu.x,l[8]=ni.x,l[1]=Ya.y,l[5]=Lu.y,l[9]=ni.y,l[2]=Ya.z,l[6]=Lu.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],S=r[13],E=r[2],T=r[6],M=r[10],_=r[14],D=r[3],N=r[7],U=r[11],B=r[15],G=l[0],I=l[4],q=l[8],C=l[12],w=l[1],z=l[5],Z=l[9],rt=l[13],ht=l[2],lt=l[6],P=l[10],X=l[14],W=l[3],tt=l[7],ct=l[11],L=l[15];return u[0]=f*G+d*w+m*ht+p*W,u[4]=f*I+d*z+m*lt+p*tt,u[8]=f*q+d*Z+m*P+p*ct,u[12]=f*C+d*rt+m*X+p*L,u[1]=g*G+v*w+x*ht+S*W,u[5]=g*I+v*z+x*lt+S*tt,u[9]=g*q+v*Z+x*P+S*ct,u[13]=g*C+v*rt+x*X+S*L,u[2]=E*G+T*w+M*ht+_*W,u[6]=E*I+T*z+M*lt+_*tt,u[10]=E*q+T*Z+M*P+_*ct,u[14]=E*C+T*rt+M*X+_*L,u[3]=D*G+N*w+U*ht+B*W,u[7]=D*I+N*z+U*lt+B*tt,u[11]=D*q+N*Z+U*P+B*ct,u[15]=D*C+N*rt+U*X+B*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],S=t[14],E=t[3],T=t[7],M=t[11],_=t[15];return E*(+u*m*v-l*p*v-u*d*x+r*p*x+l*d*S-r*m*S)+T*(+i*m*S-i*p*x+u*f*x-l*f*S+l*p*g-u*m*g)+M*(+i*p*v-i*d*S-u*f*v+r*f*S+u*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*f*v-r*f*x+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],S=t[11],E=t[12],T=t[13],M=t[14],_=t[15],D=v*M*p-T*x*p+T*m*S-d*M*S-v*m*_+d*x*_,N=E*x*p-g*M*p-E*m*S+f*M*S+g*m*_-f*x*_,U=g*T*p-E*v*p+E*d*S-f*T*S-g*d*_+f*v*_,B=E*v*m-g*T*m-E*d*x+f*T*x+g*d*M-f*v*M,G=i*D+r*N+l*U+u*B;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return t[0]=D*I,t[1]=(T*x*u-v*M*u-T*l*S+r*M*S+v*l*_-r*x*_)*I,t[2]=(d*M*u-T*m*u+T*l*p-r*M*p-d*l*_+r*m*_)*I,t[3]=(v*m*u-d*x*u-v*l*p+r*x*p+d*l*S-r*m*S)*I,t[4]=N*I,t[5]=(g*M*u-E*x*u+E*l*S-i*M*S-g*l*_+i*x*_)*I,t[6]=(E*m*u-f*M*u-E*l*p+i*M*p+f*l*_-i*m*_)*I,t[7]=(f*x*u-g*m*u+g*l*p-i*x*p-f*l*S+i*m*S)*I,t[8]=U*I,t[9]=(E*v*u-g*T*u-E*r*S+i*T*S+g*r*_-i*v*_)*I,t[10]=(f*T*u-E*d*u+E*r*p-i*T*p-f*r*_+i*d*_)*I,t[11]=(g*d*u-f*v*u-g*r*p+i*v*p+f*r*S-i*d*S)*I,t[12]=B*I,t[13]=(g*T*l-E*v*l+E*r*x-i*T*x-g*r*M+i*v*M)*I,t[14]=(E*d*l-f*T*l-E*r*m+i*T*m+f*r*M-i*d*M)*I,t[15]=(f*v*l-g*d*l+g*r*m-i*v*m-f*r*x+i*d*x)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=t.x,d=t.y,m=t.z,p=u*f,g=u*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*f,0,p*m-l*d,g*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,f){return this.set(1,r,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,f=i._y,d=i._z,m=i._w,p=u+u,g=f+f,v=d+d,x=u*p,S=u*g,E=u*v,T=f*g,M=f*v,_=d*v,D=m*p,N=m*g,U=m*v,B=r.x,G=r.y,I=r.z;return l[0]=(1-(T+_))*B,l[1]=(S+U)*B,l[2]=(E-N)*B,l[3]=0,l[4]=(S-U)*G,l[5]=(1-(x+_))*G,l[6]=(M+D)*G,l[7]=0,l[8]=(E+N)*I,l[9]=(M-D)*I,l[10]=(1-(x+T))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=bs.set(l[0],l[1],l[2]).length();const f=bs.set(l[4],l[5],l[6]).length(),d=bs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Mi.copy(this);const p=1/u,g=1/f,v=1/d;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=v,Mi.elements[9]*=v,Mi.elements[10]*=v,i.setFromRotationMatrix(Mi),r.x=u,r.y=f,r.z=d,this}makePerspective(t,i,r,l,u,f,d=Hi,m=!1){const p=this.elements,g=2*u/(i-t),v=2*u/(r-l),x=(i+t)/(i-t),S=(r+l)/(r-l);let E,T;if(m)E=u/(f-u),T=f*u/(f-u);else if(d===Hi)E=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===uc)E=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,f,d=Hi,m=!1){const p=this.elements,g=2/(i-t),v=2/(r-l),x=-(i+t)/(i-t),S=-(r+l)/(r-l);let E,T;if(m)E=1/(f-u),T=f/(f-u);else if(d===Hi)E=-2/(f-u),T=-(f+u)/(f-u);else if(d===uc)E=-1/(f-u),T=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const bs=new j,Mi=new je,Ib=new j(0,0,0),Bb=new j(1,1,1),Ya=new j,Lu=new j,ni=new j,I0=new je,B0=new Nr;class Vi{constructor(t=0,i=0,r=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return I0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(I0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return B0.setFromEuler(this),this.setFromQuaternion(B0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class bp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fb=0;const F0=new j,Ts=new Nr,ua=new je,Nu=new j,Yo=new j,Hb=new j,Gb=new Nr,H0=new j(1,0,0),G0=new j(0,1,0),V0=new j(0,0,1),k0={type:"added"},Vb={type:"removed"},As={type:"childadded",child:null},Wh={type:"childremoved",child:null};class Ln extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new j,i=new Vi,r=new Nr,l=new j(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new de}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ts.setFromAxisAngle(t,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,i){return Ts.setFromAxisAngle(t,i),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(H0,t)}rotateY(t){return this.rotateOnAxis(G0,t)}rotateZ(t){return this.rotateOnAxis(V0,t)}translateOnAxis(t,i){return F0.copy(t).applyQuaternion(this.quaternion),this.position.add(F0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(H0,t)}translateY(t){return this.translateOnAxis(G0,t)}translateZ(t){return this.translateOnAxis(V0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Nu.copy(t):Nu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Yo,Nu,this.up):ua.lookAt(Nu,Yo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(ua),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(k0),As.child=t,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Vb),Wh.child=t,this.dispatchEvent(Wh),Wh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(k0),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,Hb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,Gb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),v=f(t.shapes),x=f(t.skeletons),S=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new j(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new j,ca=new j,Yh=new j,fa=new j,Rs=new j,Cs=new j,X0=new j,jh=new j,qh=new j,Zh=new j,Kh=new Ve,Qh=new Ve,Jh=new Ve;class bi{constructor(t=new j,i=new j,r=new j){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ei.subVectors(t,i),l.cross(Ei);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ei.subVectors(l,i),ca.subVectors(r,i),Yh.subVectors(t,i);const f=Ei.dot(Ei),d=Ei.dot(ca),m=Ei.dot(Yh),p=ca.dot(ca),g=ca.dot(Yh),v=f*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,S=(p*m-d*g)*x,E=(f*g-d*m)*x;return u.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(t,i,r,l,u,f,d,m){return this.getBarycoord(t,i,r,l,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,fa.x),m.addScaledVector(f,fa.y),m.addScaledVector(d,fa.z),m)}static getInterpolatedAttribute(t,i,r,l,u,f){return Kh.setScalar(0),Qh.setScalar(0),Jh.setScalar(0),Kh.fromBufferAttribute(t,i),Qh.fromBufferAttribute(t,r),Jh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Kh,u.x),f.addScaledVector(Qh,u.y),f.addScaledVector(Jh,u.z),f}static isFrontFacing(t,i,r,l){return Ei.subVectors(r,i),ca.subVectors(t,i),Ei.cross(ca).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Ei.cross(ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return bi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let f,d;Rs.subVectors(l,r),Cs.subVectors(u,r),jh.subVectors(t,r);const m=Rs.dot(jh),p=Cs.dot(jh);if(m<=0&&p<=0)return i.copy(r);qh.subVectors(t,l);const g=Rs.dot(qh),v=Cs.dot(qh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(Rs,f);Zh.subVectors(t,u);const S=Rs.dot(Zh),E=Cs.dot(Zh);if(E>=0&&S<=E)return i.copy(u);const T=S*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Cs,d);const M=g*E-S*v;if(M<=0&&v-g>=0&&S-E>=0)return X0.subVectors(u,l),d=(v-g)/(v-g+(S-E)),i.copy(l).addScaledVector(X0,d);const _=1/(M+T+x);return f=T*_,d=x*_,i.copy(r).addScaledVector(Rs,f).addScaledVector(Cs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},Ou={h:0,s:0,l:0};function $h(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class fe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=De.workingColorSpace){if(t=Mp(t,1),i=me(i,0,1),r=me(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=$h(f,u,t+1/3),this.g=$h(f,u,t),this.b=$h(f,u,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=mi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=mi){const r=cx[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mi){return De.workingToColorSpace(Un.copy(this),t),Math.round(me(Un.r*255,0,255))*65536+Math.round(me(Un.g*255,0,255))*256+Math.round(me(Un.b*255,0,255))}getHexString(t=mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,f=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=g<=.5?v/(f+d):v/(2-f-d),f){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=mi){De.workingToColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==mi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(ja),this.setHSL(ja.h+t,ja.s+i,ja.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ja),t.getHSL(Ou);const r=tl(ja.h,Ou.h,i),l=tl(ja.s,Ou.s,i),u=tl(ja.l,Ou.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new fe;fe.NAMES=cx;let kb=0;class zr extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Bs,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_d,this.blendDst=vd,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_d&&(r.blendSrc=this.blendSrc),this.blendDst!==vd&&(r.blendDst=this.blendDst),this.blendEquation!==Cr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fx extends zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Kv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new j,Pu=new re;let Xb=0;class gi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=D0,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Pu.fromBufferAttribute(this,i),Pu.applyMatrix3(t),this.setXY(i,Pu.x,Pu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ns(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ns(i,this.array)),i}setX(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ns(i,this.array)),i}setY(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ns(i,this.array)),i}setZ(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ns(i,this.array)),i}setW(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),u=zn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==D0&&(t.usage=this.usage),t}}class hx extends gi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class dx extends gi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class _i extends gi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Wb=0;const pi=new je,td=new Ln,ws=new j,ii=new fl,jo=new fl,Sn=new j;class ai extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lx(t)?dx:hx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new de().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,i,r){return pi.makeTranslation(t,i,r),this.applyMatrix4(pi),this}scale(t,i,r){return pi.makeScale(t,i,r),this.applyMatrix4(pi),this}lookAt(t){return td.lookAt(t),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new _i(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ii.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];jo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ii.min,jo.min),ii.expandByPoint(Sn),Sn.addVectors(ii.max,jo.max),ii.expandByPoint(Sn)):(ii.expandByPoint(jo.min),ii.expandByPoint(jo.max))}ii.getCenter(r);let l=0;for(let u=0,f=t.count;u<f;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Sn.fromBufferAttribute(d,p),m&&(ws.fromBufferAttribute(t,p),Sn.add(ws)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<r.count;q++)d[q]=new j,m[q]=new j;const p=new j,g=new j,v=new j,x=new re,S=new re,E=new re,T=new j,M=new j;function _(q,C,w){p.fromBufferAttribute(r,q),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,w),x.fromBufferAttribute(u,q),S.fromBufferAttribute(u,C),E.fromBufferAttribute(u,w),g.sub(p),v.sub(p),S.sub(x),E.sub(x);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(z),M.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(z),d[q].add(T),d[C].add(T),d[w].add(T),m[q].add(M),m[C].add(M),m[w].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let q=0,C=D.length;q<C;++q){const w=D[q],z=w.start,Z=w.count;for(let rt=z,ht=z+Z;rt<ht;rt+=3)_(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const N=new j,U=new j,B=new j,G=new j;function I(q){B.fromBufferAttribute(l,q),G.copy(B);const C=d[q];N.copy(C),N.sub(B.multiplyScalar(B.dot(C))).normalize(),U.crossVectors(G,C);const z=U.dot(m[q])<0?-1:1;f.setXYZW(q,N.x,N.y,N.z,z)}for(let q=0,C=D.length;q<C;++q){const w=D[q],z=w.start,Z=w.count;for(let rt=z,ht=z+Z;rt<ht;rt+=3)I(t.getX(rt+0)),I(t.getX(rt+1)),I(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new gi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const l=new j,u=new j,f=new j,d=new j,m=new j,p=new j,g=new j,v=new j;if(t)for(let x=0,S=t.count;x<S;x+=3){const E=t.getX(x+0),T=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let S=0,E=0;for(let T=0,M=m.length;T<M;T++){d.isInterleavedBufferAttribute?S=m[T]*d.data.stride+d.offset:S=m[T]*g;for(let _=0;_<g;_++)x[E++]=p[S++]}return new gi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ai,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],S=t(x,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const S=p[v];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const W0=new je,Er=new dl,zu=new hl,Y0=new j,Iu=new j,Bu=new j,Fu=new j,ed=new j,Hu=new j,j0=new j,Gu=new j;class Ri extends Ln{constructor(t=new ai,i=new fx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Hu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(ed.fromBufferAttribute(v,t),f?Hu.addScaledVector(ed,g):Hu.addScaledVector(ed.sub(i),g))}i.add(Hu)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),zu.copy(r.boundingSphere),zu.applyMatrix4(u),Er.copy(t.ray).recast(t.near),!(zu.containsPoint(Er.origin)===!1&&(Er.intersectSphere(zu,Y0)===null||Er.origin.distanceToSquared(Y0)>(t.far-t.near)**2))&&(W0.copy(u).invert(),Er.copy(t.ray).applyMatrix4(W0),!(r.boundingBox!==null&&Er.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Er)))}_computeIntersections(t,i,r){let l;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const M=x[E],_=f[M.materialIndex],D=Math.max(M.start,S.start),N=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let U=D,B=N;U<B;U+=3){const G=d.getX(U),I=d.getX(U+1),q=d.getX(U+2);l=Vu(this,_,t,r,p,g,v,G,I,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let M=E,_=T;M<_;M+=3){const D=d.getX(M),N=d.getX(M+1),U=d.getX(M+2);l=Vu(this,f,t,r,p,g,v,D,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const M=x[E],_=f[M.materialIndex],D=Math.max(M.start,S.start),N=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let U=D,B=N;U<B;U+=3){const G=U,I=U+1,q=U+2;l=Vu(this,_,t,r,p,g,v,G,I,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(m.count,S.start+S.count);for(let M=E,_=T;M<_;M+=3){const D=M,N=M+1,U=M+2;l=Vu(this,f,t,r,p,g,v,D,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Yb(s,t,i,r,l,u,f,d){let m;if(t.side===Yn?m=r.intersectTriangle(f,u,l,!0,d):m=r.intersectTriangle(l,u,f,t.side===tr,d),m===null)return null;Gu.copy(d),Gu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Gu);return p<i.near||p>i.far?null:{distance:p,point:Gu.clone(),object:s}}function Vu(s,t,i,r,l,u,f,d,m,p){s.getVertexPosition(d,Iu),s.getVertexPosition(m,Bu),s.getVertexPosition(p,Fu);const g=Yb(s,t,i,r,Iu,Bu,Fu,j0);if(g){const v=new j;bi.getBarycoord(j0,Iu,Bu,Fu,v),l&&(g.uv=bi.getInterpolatedAttribute(l,d,m,p,v,new re)),u&&(g.uv1=bi.getInterpolatedAttribute(u,d,m,p,v,new re)),f&&(g.normal=bi.getInterpolatedAttribute(f,d,m,p,v,new j),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new j,materialIndex:0};bi.getNormal(Iu,Bu,Fu,x.normal),g.face=x,g.barycoord=v}return g}class pl extends ai{constructor(t=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],g=[],v=[];let x=0,S=0;E("z","y","x",-1,-1,r,i,t,f,u,0),E("z","y","x",1,-1,r,i,-t,f,u,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new _i(p,3)),this.setAttribute("normal",new _i(g,3)),this.setAttribute("uv",new _i(v,2));function E(T,M,_,D,N,U,B,G,I,q,C){const w=U/I,z=B/q,Z=U/2,rt=B/2,ht=G/2,lt=I+1,P=q+1;let X=0,W=0;const tt=new j;for(let ct=0;ct<P;ct++){const L=ct*z-rt;for(let J=0;J<lt;J++){const St=J*w-Z;tt[T]=St*D,tt[M]=L*N,tt[_]=ht,p.push(tt.x,tt.y,tt.z),tt[T]=0,tt[M]=0,tt[_]=G>0?1:-1,g.push(tt.x,tt.y,tt.z),v.push(J/I),v.push(1-ct/q),X+=1}}for(let ct=0;ct<q;ct++)for(let L=0;L<I;L++){const J=x+L+lt*ct,St=x+L+lt*(ct+1),Rt=x+(L+1)+lt*(ct+1),Lt=x+(L+1)+lt*ct;m.push(J,St,Lt),m.push(St,Rt,Lt),W+=6}d.addGroup(S,W,C),S+=W,x+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function In(s){const t={};for(let i=0;i<s.length;i++){const r=Xs(s[i]);for(const l in r)t[l]=r[l]}return t}function jb(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function px(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const qb={clone:Xs,merge:In};var Zb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zb,this.fragmentShader=Kb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=jb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class mx extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new j,q0=new re,Z0=new re;class Wn extends mx{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=sl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sl*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-t/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qa.x,qa.y).multiplyScalar(-t/qa.z)}getViewSize(t,i){return this.getViewBounds(t,q0,Z0),i.subVectors(Z0,q0)}setViewOffset(t,i,r,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan($o*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ds=-90,Us=1;class Qb extends Ln{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Wn(Ds,Us,t,i);l.layers=this.layers,this.add(l);const u=new Wn(Ds,Us,t,i);u.layers=this.layers,this.add(u);const f=new Wn(Ds,Us,t,i);f.layers=this.layers,this.add(f);const d=new Wn(Ds,Us,t,i);d.layers=this.layers,this.add(d);const m=new Wn(Ds,Us,t,i);m.layers=this.layers,this.add(m);const p=new Wn(Ds,Us,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,d,m]=i;for(const p of i)this.remove(p);if(t===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===uc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,x,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class gx extends jn{constructor(t=[],i=Gs,r,l,u,f,d,m,p,g){super(t,i,r,l,u,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jb extends Or{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new gx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new pl(5,5,5),u=new er({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:Ja});u.uniforms.tEquirect.value=i;const f=new Ri(l,u),d=i.minFilter;return i.minFilter===Ur&&(i.minFilter=Fi),new Qb(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(u)}}class Qo extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $b={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,r),_=this._getHandJoint(p,T);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent($b)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Qo;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class _x extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const id=new j,tT=new j,eT=new de;class Ka{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=id.subVectors(r,i).cross(tT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(id),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||eT.getNormalMatrix(t),l=this.coplanarPoint(id).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new hl,nT=new re(.5,.5),ku=new j;class Tp{constructor(t=new Ka,i=new Ka,r=new Ka,l=new Ka,u=new Ka,f=new Ka){this.planes=[t,i,r,l,u,f]}set(t,i,r,l,u,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Hi,r=!1){const l=this.planes,u=t.elements,f=u[0],d=u[1],m=u[2],p=u[3],g=u[4],v=u[5],x=u[6],S=u[7],E=u[8],T=u[9],M=u[10],_=u[11],D=u[12],N=u[13],U=u[14],B=u[15];if(l[0].setComponents(p-f,S-g,_-E,B-D).normalize(),l[1].setComponents(p+f,S+g,_+E,B+D).normalize(),l[2].setComponents(p+d,S+v,_+T,B+N).normalize(),l[3].setComponents(p-d,S-v,_-T,B-N).normalize(),r)l[4].setComponents(m,x,M,U).normalize(),l[5].setComponents(p-m,S-x,_-M,B-U).normalize();else if(l[4].setComponents(p-m,S-x,_-M,B-U).normalize(),i===Hi)l[5].setComponents(p+m,S+x,_+M,B+U).normalize();else if(i===uc)l[5].setComponents(m,x,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){br.center.set(0,0,0);const i=nT.distanceTo(t.center);return br.radius=.7071067811865476+i,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(ku.x=l.normal.x>0?t.max.x:t.min.x,ku.y=l.normal.y>0?t.max.y:t.min.y,ku.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(ku)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vx extends zr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fc=new j,hc=new j,K0=new je,qo=new dl,Xu=new hl,ad=new j,Q0=new j;class iT extends Ln{constructor(t=new ai,i=new vx){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)fc.fromBufferAttribute(i,l-1),hc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=fc.distanceTo(hc);t.setAttribute("lineDistance",new _i(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xu.copy(r.boundingSphere),Xu.applyMatrix4(l),Xu.radius+=u,t.ray.intersectsSphere(Xu)===!1)return;K0.copy(l).invert(),qo.copy(t.ray).applyMatrix4(K0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let T=S,M=E-1;T<M;T+=p){const _=g.getX(T),D=g.getX(T+1),N=Wu(this,t,qo,m,_,D,T);N&&i.push(N)}if(this.isLineLoop){const T=g.getX(E-1),M=g.getX(S),_=Wu(this,t,qo,m,T,M,E-1);_&&i.push(_)}}else{const S=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=S,M=E-1;T<M;T+=p){const _=Wu(this,t,qo,m,T,T+1,T);_&&i.push(_)}if(this.isLineLoop){const T=Wu(this,t,qo,m,E-1,S,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Wu(s,t,i,r,l,u,f){const d=s.geometry.attributes.position;if(fc.fromBufferAttribute(d,l),hc.fromBufferAttribute(d,u),i.distanceSqToSegment(fc,hc,ad,Q0)>r)return;ad.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(ad);if(!(p<t.near||p>t.far))return{distance:p,point:Q0.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}class aT extends iT{constructor(t,i){super(t,i),this.isLineLoop=!0,this.type="LineLoop"}}class Ap extends zr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const J0=new je,ap=new dl,Yu=new hl,ju=new j;class xx extends Ln{constructor(t=new ai,i=new Ap){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Yu.copy(r.boundingSphere),Yu.applyMatrix4(l),Yu.radius+=u,t.ray.intersectsSphere(Yu)===!1)return;J0.copy(l).invert(),ap.copy(t.ray).applyMatrix4(J0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const x=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=x,T=S;E<T;E++){const M=p.getX(E);ju.fromBufferAttribute(v,M),$0(ju,M,m,l,t,i,this)}}else{const x=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let E=x,T=S;E<T;E++)ju.fromBufferAttribute(v,E),$0(ju,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function $0(s,t,i,r,l,u,f){const d=ap.distanceSqToPoint(s);if(d<i){const m=new j;ap.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class yx extends jn{constructor(t,i,r=Lr,l,u,f,d=Ci,m=Ci,p,g=al,v=1){if(g!==al&&g!==rl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,u,f,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ep(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Sx extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rT{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),u=0;i.push(0);for(let f=1;f<=t;f++)r=this.getPoint(f/t),u+=r.distanceTo(l),i.push(u),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const u=r.length;let f;i?f=i:f=t*r[u-1];let d=0,m=u-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=r[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,r[l]===f)return l/(u-1);const g=r[l],x=r[l+1]-g,S=(f-g)/x;return(l+S)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const f=this.getPoint(l),d=this.getPoint(u),m=i||(f.isVector2?new re:new j);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new j,l=[],u=[],f=[],d=new j,m=new je;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new j)}u[0]=new j,f[0]=new j;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),v=Math.abs(l[0].y),x=Math.abs(l[0].z);g<=p&&(p=g,r.set(1,0,0)),v<=p&&(p=v,r.set(0,1,0)),x<=p&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),u[0].crossVectors(l[0],d),f[0].crossVectors(l[0],u[0]);for(let S=1;S<=t;S++){if(u[S]=u[S-1].clone(),f[S]=f[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(me(l[S-1].dot(l[S]),-1,1));u[S].applyMatrix4(m.makeRotationAxis(d,E))}f[S].crossVectors(l[S],u[S])}if(i===!0){let S=Math.acos(me(u[0].dot(u[t]),-1,1));S/=t,l[0].dot(d.crossVectors(u[0],u[t]))>0&&(S=-S);for(let E=1;E<=t;E++)u[E].applyMatrix4(m.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],u[E])}return{tangents:l,normals:u,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class sT extends rT{constructor(t=0,i=0,r=1,l=1,u=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new re){const r=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const f=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(f?u=0:u=l),this.aClockwise===!0&&!f&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+t*u;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),x=m-this.aX,S=p-this.aY;m=x*g-S*v+this.aX,p=x*v+S*g+this.aY}return r.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vc extends ai{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=t/d,x=i/m,S=[],E=[],T=[],M=[];for(let _=0;_<g;_++){const D=_*x-f;for(let N=0;N<p;N++){const U=N*v-u;E.push(U,-D,0),T.push(0,0,1),M.push(N/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let D=0;D<d;D++){const N=D+p*_,U=D+p*(_+1),B=D+1+p*(_+1),G=D+1+p*_;S.push(N,U,G),S.push(U,B,G)}this.setIndex(S),this.setAttribute("position",new _i(E,3)),this.setAttribute("normal",new _i(T,3)),this.setAttribute("uv",new _i(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vc(t.width,t.height,t.widthSegments,t.heightSegments)}}class dc extends ai{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+d,Math.PI);let p=0;const g=[],v=new j,x=new j,S=[],E=[],T=[],M=[];for(let _=0;_<=r;_++){const D=[],N=_/r;let U=0;_===0&&f===0?U=.5/i:_===r&&m===Math.PI&&(U=-.5/i);for(let B=0;B<=i;B++){const G=B/i;v.x=-t*Math.cos(l+G*u)*Math.sin(f+N*d),v.y=t*Math.cos(f+N*d),v.z=t*Math.sin(l+G*u)*Math.sin(f+N*d),E.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),M.push(G+U,1-N),D.push(p++)}g.push(D)}for(let _=0;_<r;_++)for(let D=0;D<i;D++){const N=g[_][D+1],U=g[_][D],B=g[_+1][D],G=g[_+1][D+1];(_!==0||f>0)&&S.push(N,U,G),(_!==r-1||m<Math.PI)&&S.push(U,B,G)}this.setIndex(S),this.setAttribute("position",new _i(E,3)),this.setAttribute("normal",new _i(T,3)),this.setAttribute("uv",new _i(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tv extends zr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sx,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class oT extends zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lT extends zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Mx extends Ln{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const rd=new je,ev=new j,nv=new j;class uT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tp,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;ev.setFromMatrixPosition(t.matrixWorld),i.position.copy(ev),nv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(nv),i.updateMatrixWorld(),rd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(rd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const iv=new je,Zo=new j,sd=new j;class cT extends uT{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Zo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Zo),sd.copy(r.position),sd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(sd),r.updateMatrixWorld(),l.makeTranslation(-Zo.x,-Zo.y,-Zo.z),iv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iv,r.coordinateSystem,r.reversedDepth)}}class fT extends Mx{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new cT}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class hT extends mx{constructor(t=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,f=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class dT extends Mx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class pT extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const av=new je;class mT{constructor(t,i,r=0,l=1/0){this.ray=new dl(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new bp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return av.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(av),this}intersectObject(t,i=!0,r=[]){return rp(t,this,r,i),r.sort(rv),r}intersectObjects(t,i=!0,r=[]){for(let l=0,u=t.length;l<u;l++)rp(t[l],this,r,i);return r.sort(rv),r}}function rv(s,t){return s.distance-t.distance}function rp(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const u=s.children;for(let f=0,d=u.length;f<d;f++)rp(u[f],t,i,!0)}}class sv{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gT extends Pr{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ov(s,t,i,r){const l=_T(r);switch(i){case nx:return s*t;case ax:return s*t/l.components*l.byteLength;case xp:return s*t/l.components*l.byteLength;case rx:return s*t*2/l.components*l.byteLength;case yp:return s*t*2/l.components*l.byteLength;case ix:return s*t*3/l.components*l.byteLength;case Ai:return s*t*4/l.components*l.byteLength;case Sp:return s*t*4/l.components*l.byteLength;case ec:case nc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ic:case ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ud:case Nd:return Math.max(s,16)*Math.max(t,8)/4;case Dd:case Ld:return Math.max(s,8)*Math.max(t,8)/2;case Od:case Pd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Id:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Fd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Vd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case kd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Xd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Wd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case jd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case qd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Zd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Kd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Qd:case Jd:case $d:return Math.ceil(s/4)*Math.ceil(t/4)*16;case tp:case ep:return Math.ceil(s/4)*Math.ceil(t/4)*8;case np:case ip:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function _T(s){switch(s){case Gi:case Jv:return{byteLength:1,components:1};case nl:case $v:case cl:return{byteLength:2,components:1};case _p:case vp:return{byteLength:2,components:4};case Lr:case gp:case pa:return{byteLength:4,components:1};case tx:case ex:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ex(){let s=null,t=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function vT(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,d),v.length===0)s.bufferSubData(p,0,g);else{v.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<v.length;S++){const E=v[x],T=v[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,v[x]=T)}v.length=x+1;for(let S=0,E=v.length;S<E;S++){const T=v[S];s.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:f}}var xT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ST=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ET=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,CT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,VT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,WT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZT="gl_FragColor = linearToOutputTexel( gl_FragColor );",KT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$T=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,f1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,h1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,P1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,I1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,V1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_A=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:xT,alphahash_pars_fragment:yT,alphamap_fragment:ST,alphamap_pars_fragment:MT,alphatest_fragment:ET,alphatest_pars_fragment:bT,aomap_fragment:TT,aomap_pars_fragment:AT,batching_pars_vertex:RT,batching_vertex:CT,begin_vertex:wT,beginnormal_vertex:DT,bsdfs:UT,iridescence_fragment:LT,bumpmap_pars_fragment:NT,clipping_planes_fragment:OT,clipping_planes_pars_fragment:PT,clipping_planes_pars_vertex:zT,clipping_planes_vertex:IT,color_fragment:BT,color_pars_fragment:FT,color_pars_vertex:HT,color_vertex:GT,common:VT,cube_uv_reflection_fragment:kT,defaultnormal_vertex:XT,displacementmap_pars_vertex:WT,displacementmap_vertex:YT,emissivemap_fragment:jT,emissivemap_pars_fragment:qT,colorspace_fragment:ZT,colorspace_pars_fragment:KT,envmap_fragment:QT,envmap_common_pars_fragment:JT,envmap_pars_fragment:$T,envmap_pars_vertex:t1,envmap_physical_pars_fragment:f1,envmap_vertex:e1,fog_vertex:n1,fog_pars_vertex:i1,fog_fragment:a1,fog_pars_fragment:r1,gradientmap_pars_fragment:s1,lightmap_pars_fragment:o1,lights_lambert_fragment:l1,lights_lambert_pars_fragment:u1,lights_pars_begin:c1,lights_toon_fragment:h1,lights_toon_pars_fragment:d1,lights_phong_fragment:p1,lights_phong_pars_fragment:m1,lights_physical_fragment:g1,lights_physical_pars_fragment:_1,lights_fragment_begin:v1,lights_fragment_maps:x1,lights_fragment_end:y1,logdepthbuf_fragment:S1,logdepthbuf_pars_fragment:M1,logdepthbuf_pars_vertex:E1,logdepthbuf_vertex:b1,map_fragment:T1,map_pars_fragment:A1,map_particle_fragment:R1,map_particle_pars_fragment:C1,metalnessmap_fragment:w1,metalnessmap_pars_fragment:D1,morphinstance_vertex:U1,morphcolor_vertex:L1,morphnormal_vertex:N1,morphtarget_pars_vertex:O1,morphtarget_vertex:P1,normal_fragment_begin:z1,normal_fragment_maps:I1,normal_pars_fragment:B1,normal_pars_vertex:F1,normal_vertex:H1,normalmap_pars_fragment:G1,clearcoat_normal_fragment_begin:V1,clearcoat_normal_fragment_maps:k1,clearcoat_pars_fragment:X1,iridescence_pars_fragment:W1,opaque_fragment:Y1,packing:j1,premultiplied_alpha_fragment:q1,project_vertex:Z1,dithering_fragment:K1,dithering_pars_fragment:Q1,roughnessmap_fragment:J1,roughnessmap_pars_fragment:$1,shadowmap_pars_fragment:tA,shadowmap_pars_vertex:eA,shadowmap_vertex:nA,shadowmask_pars_fragment:iA,skinbase_vertex:aA,skinning_pars_vertex:rA,skinning_vertex:sA,skinnormal_vertex:oA,specularmap_fragment:lA,specularmap_pars_fragment:uA,tonemapping_fragment:cA,tonemapping_pars_fragment:fA,transmission_fragment:hA,transmission_pars_fragment:dA,uv_pars_fragment:pA,uv_pars_vertex:mA,uv_vertex:gA,worldpos_vertex:_A,background_vert:vA,background_frag:xA,backgroundCube_vert:yA,backgroundCube_frag:SA,cube_vert:MA,cube_frag:EA,depth_vert:bA,depth_frag:TA,distanceRGBA_vert:AA,distanceRGBA_frag:RA,equirect_vert:CA,equirect_frag:wA,linedashed_vert:DA,linedashed_frag:UA,meshbasic_vert:LA,meshbasic_frag:NA,meshlambert_vert:OA,meshlambert_frag:PA,meshmatcap_vert:zA,meshmatcap_frag:IA,meshnormal_vert:BA,meshnormal_frag:FA,meshphong_vert:HA,meshphong_frag:GA,meshphysical_vert:VA,meshphysical_frag:kA,meshtoon_vert:XA,meshtoon_frag:WA,points_vert:YA,points_frag:jA,shadow_vert:qA,shadow_frag:ZA,sprite_vert:KA,sprite_frag:QA},Pt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Bi={basic:{uniforms:In([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:In([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:In([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:In([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:In([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:In([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:In([Pt.points,Pt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:In([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:In([Pt.common,Pt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:In([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:In([Pt.sprite,Pt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:In([Pt.common,Pt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:In([Pt.lights,Pt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Bi.physical={uniforms:In([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const qu={r:0,b:0,g:0},Tr=new Vi,JA=new je;function $A(s,t,i,r,l,u,f){const d=new fe(0);let m=u===!0?0:1,p,g,v=null,x=0,S=null;function E(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:t).get(U)),U}function T(N){let U=!1;const B=E(N);B===null?_(d,m):B&&B.isColor&&(_(B,1),U=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(N,U){const B=E(U);B&&(B.isCubeTexture||B.mapping===_c)?(g===void 0&&(g=new Ri(new pl(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Xs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,I,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Tr.copy(U.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(JA.makeRotationFromEuler(Tr)),g.material.toneMapped=De.getTransfer(B.colorSpace)!==He,(v!==B||x!==B.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=B,x=B.version,S=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new Ri(new vc(2,2),new er({name:"BackgroundMaterial",uniforms:Xs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=De.getTransfer(B.colorSpace)!==He,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||x!==B.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=B,x=B.version,S=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,U){N.getRGB(qu,px(s)),r.buffers.color.setClear(qu.r,qu.g,qu.b,U,f)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:T,addToRenderList:M,dispose:D}}function tR(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,f=!1;function d(w,z,Z,rt,ht){let lt=!1;const P=v(rt,Z,z);u!==P&&(u=P,p(u.object)),lt=S(w,rt,Z,ht),lt&&E(w,rt,Z,ht),ht!==null&&t.update(ht,s.ELEMENT_ARRAY_BUFFER),(lt||f)&&(f=!1,U(w,z,Z,rt),ht!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function v(w,z,Z){const rt=Z.wireframe===!0;let ht=r[w.id];ht===void 0&&(ht={},r[w.id]=ht);let lt=ht[z.id];lt===void 0&&(lt={},ht[z.id]=lt);let P=lt[rt];return P===void 0&&(P=x(m()),lt[rt]=P),P}function x(w){const z=[],Z=[],rt=[];for(let ht=0;ht<i;ht++)z[ht]=0,Z[ht]=0,rt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:rt,object:w,attributes:{},index:null}}function S(w,z,Z,rt){const ht=u.attributes,lt=z.attributes;let P=0;const X=Z.getAttributes();for(const W in X)if(X[W].location>=0){const ct=ht[W];let L=lt[W];if(L===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(L=w.instanceColor)),ct===void 0||ct.attribute!==L||L&&ct.data!==L.data)return!0;P++}return u.attributesNum!==P||u.index!==rt}function E(w,z,Z,rt){const ht={},lt=z.attributes;let P=0;const X=Z.getAttributes();for(const W in X)if(X[W].location>=0){let ct=lt[W];ct===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(ct=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(ct=w.instanceColor));const L={};L.attribute=ct,ct&&ct.data&&(L.data=ct.data),ht[W]=L,P++}u.attributes=ht,u.attributesNum=P,u.index=rt}function T(){const w=u.newAttributes;for(let z=0,Z=w.length;z<Z;z++)w[z]=0}function M(w){_(w,0)}function _(w,z){const Z=u.newAttributes,rt=u.enabledAttributes,ht=u.attributeDivisors;Z[w]=1,rt[w]===0&&(s.enableVertexAttribArray(w),rt[w]=1),ht[w]!==z&&(s.vertexAttribDivisor(w,z),ht[w]=z)}function D(){const w=u.newAttributes,z=u.enabledAttributes;for(let Z=0,rt=z.length;Z<rt;Z++)z[Z]!==w[Z]&&(s.disableVertexAttribArray(Z),z[Z]=0)}function N(w,z,Z,rt,ht,lt,P){P===!0?s.vertexAttribIPointer(w,z,Z,ht,lt):s.vertexAttribPointer(w,z,Z,rt,ht,lt)}function U(w,z,Z,rt){T();const ht=rt.attributes,lt=Z.getAttributes(),P=z.defaultAttributeValues;for(const X in lt){const W=lt[X];if(W.location>=0){let tt=ht[X];if(tt===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(tt=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(tt=w.instanceColor)),tt!==void 0){const ct=tt.normalized,L=tt.itemSize,J=t.get(tt);if(J===void 0)continue;const St=J.buffer,Rt=J.type,Lt=J.bytesPerElement,ot=Rt===s.INT||Rt===s.UNSIGNED_INT||tt.gpuType===gp;if(tt.isInterleavedBufferAttribute){const pt=tt.data,Ut=pt.stride,Bt=tt.offset;if(pt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<W.locationSize;Xt++)_(W.location+Xt,pt.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Xt=0;Xt<W.locationSize;Xt++)M(W.location+Xt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let Xt=0;Xt<W.locationSize;Xt++)N(W.location+Xt,L/W.locationSize,Rt,ct,Ut*Lt,(Bt+L/W.locationSize*Xt)*Lt,ot)}else{if(tt.isInstancedBufferAttribute){for(let pt=0;pt<W.locationSize;pt++)_(W.location+pt,tt.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let pt=0;pt<W.locationSize;pt++)M(W.location+pt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let pt=0;pt<W.locationSize;pt++)N(W.location+pt,L/W.locationSize,Rt,ct,L*Lt,L/W.locationSize*pt*Lt,ot)}}else if(P!==void 0){const ct=P[X];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(W.location,ct);break;case 3:s.vertexAttrib3fv(W.location,ct);break;case 4:s.vertexAttrib4fv(W.location,ct);break;default:s.vertexAttrib1fv(W.location,ct)}}}}D()}function B(){q();for(const w in r){const z=r[w];for(const Z in z){const rt=z[Z];for(const ht in rt)g(rt[ht].object),delete rt[ht];delete z[Z]}delete r[w]}}function G(w){if(r[w.id]===void 0)return;const z=r[w.id];for(const Z in z){const rt=z[Z];for(const ht in rt)g(rt[ht].object),delete rt[ht];delete z[Z]}delete r[w.id]}function I(w){for(const z in r){const Z=r[z];if(Z[w.id]===void 0)continue;const rt=Z[w.id];for(const ht in rt)g(rt[ht].object),delete rt[ht];delete Z[w.id]}}function q(){C(),f=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:C,dispose:B,releaseStatesOfGeometry:G,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:M,disableUnusedAttributes:D}}function eR(s,t,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];i.update(S,r,1)}function m(p,g,v,x){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T]*x[T];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function nR(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Ai&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const q=I===cl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Gi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==pa&&!q)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,G=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:B,maxSamples:G}}function iR(s){const t=this;let i=null,r=0,l=!1,u=!1;const f=new Ka,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||l;return l=x,r=v.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,S){const E=v.clippingPlanes,T=v.clipIntersection,M=v.clipShadows,_=s.get(v);if(!l||E===null||E.length===0||u&&!M)u?g(null):p();else{const D=u?0:r,N=D*4;let U=_.clippingState||null;m.value=U,U=g(E,x,N,S);for(let B=0;B!==N;++B)U[B]=i[B];_.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,x,S,E){const T=v!==null?v.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const _=S+T*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(M===null||M.length<_)&&(M=new Float32Array(_));for(let N=0,U=S;N!==T;++N,U+=4)f.copy(v[N]).applyMatrix4(D,d),f.normal.toArray(M,U),M[U+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function aR(s){let t=new WeakMap;function i(f,d){return d===Ad?f.mapping=Gs:d===Rd&&(f.mapping=Vs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ad||d===Rd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Jb(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const zs=4,lv=[.125,.215,.35,.446,.526,.582],wr=20,od=new hT,uv=new fe;let ld=null,ud=0,cd=0,fd=!1;const Rr=(1+Math.sqrt(5))/2,Ls=1/Rr,cv=[new j(-Rr,Ls,0),new j(Rr,Ls,0),new j(-Ls,0,Rr),new j(Ls,0,Rr),new j(0,Rr,-Ls),new j(0,Rr,Ls),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],rR=new j;class fv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:f=256,position:d=rR}=u;ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ld,ud,cd),this._renderer.xr.enabled=fd,t.scissorTest=!1,Zu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Gs||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:cl,format:Ai,colorSpace:ks,depthBuffer:!1},l=hv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hv(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sR(u)),this._blurMaterial=oR(u,t,i)}return l}_compileMaterial(t){const i=new Ri(this._lodPlanes[0],t);this._renderer.compile(i,od)}_sceneToCubeUV(t,i,r,l,u){const m=new Wn(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(uv),v.toneMapping=$a,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const T=new fx({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),M=new Ri(new pl,T);let _=!1;const D=t.background;D?D.isColor&&(T.color.copy(D),t.background=null,_=!0):(T.color.copy(uv),_=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[N],u.y,u.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[N]));const B=this._cubeSize;Zu(l,U*B,N>2?B:0,B,B),v.setRenderTarget(l),_&&v.render(M,m),v.render(t,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=S,v.autoClear=x,t.background=D}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Gs||t.mapping===Vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dv());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new Ri(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Zu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,od)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=cv[(l-u-1)%cv.length];this._blur(t,u-1,u,f,d)}i.autoClear=r}_blur(t,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",u),this._halfBlur(f,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ri(this._lodPlanes[l],p),x=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*wr-1),T=u/E,M=isFinite(u)?1+Math.floor(g*T):wr;M>wr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${wr}`);const _=[];let D=0;for(let I=0;I<wr;++I){const q=I/T,C=Math.exp(-q*q/2);_.push(C),I===0?D+=C:I<M&&(D+=2*C)}for(let I=0;I<_.length;I++)_[I]=_[I]/D;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-r;const U=this._sizeLods[l],B=3*U*(l>N-zs?l-N+zs:0),G=4*(this._cubeSize-U);Zu(i,B,G,3*U,2*U),m.setRenderTarget(i),m.render(v,od)}}function sR(s){const t=[],i=[],r=[];let l=s;const u=s-zs+1+lv.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>s-zs?m=lv[f-s+zs-1]:f===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,T=3,M=2,_=1,D=new Float32Array(T*E*S),N=new Float32Array(M*E*S),U=new Float32Array(_*E*S);for(let G=0;G<S;G++){const I=G%3*2/3-1,q=G>2?0:-1,C=[I,q,0,I+2/3,q,0,I+2/3,q+1,0,I,q,0,I+2/3,q+1,0,I,q+1,0];D.set(C,T*E*G),N.set(x,M*E*G);const w=[G,G,G,G,G,G];U.set(w,_*E*G)}const B=new ai;B.setAttribute("position",new gi(D,T)),B.setAttribute("uv",new gi(N,M)),B.setAttribute("faceIndex",new gi(U,_)),t.push(B),l>zs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function hv(s,t,i){const r=new Or(s,t,i);return r.texture.mapping=_c,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Zu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function oR(s,t,i){const r=new Float32Array(wr),l=new j(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function dv(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function pv(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function Rp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lR(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ad||m===Rd,g=m===Gs||m===Vs;if(p||g){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new fv(s)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new fv(s)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function uR(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ol("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function cR(s,t,i,r){const l={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const S=u.get(x);S&&(t.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const S in x)t.update(x[S],s.ARRAY_BUFFER)}function p(v){const x=[],S=v.index,E=v.attributes.position;let T=0;if(S!==null){const D=S.array;T=S.version;for(let N=0,U=D.length;N<U;N+=3){const B=D[N+0],G=D[N+1],I=D[N+2];x.push(B,G,G,I,I,B)}}else if(E!==void 0){const D=E.array;T=E.version;for(let N=0,U=D.length/3-1;N<U;N+=3){const B=N+0,G=N+1,I=N+2;x.push(B,G,G,I,I,B)}}else return;const M=new(lx(x)?dx:hx)(x,1);M.version=T;const _=u.get(v);_&&t.remove(_),u.set(v,M)}function g(v){const x=u.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function fR(s,t,i){let r;function l(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function m(x,S){s.drawElements(r,S,u,x*f),i.update(S,r,1)}function p(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,u,x*f,E),i.update(S,r,E))}function g(x,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,E);let M=0;for(let _=0;_<E;_++)M+=S[_];i.update(M,r,1)}function v(x,S,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/f,S[_],T[_]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,T,0,E);let _=0;for(let D=0;D<E;D++)_+=S[D]*T[D];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function hR(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function dR(s,t,i){const r=new WeakMap,l=new Ve;function u(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let w=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),T===!0&&(U=2),M===!0&&(U=3);let B=d.attributes.position.count*U,G=1;B>t.maxTextureSize&&(G=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const I=new Float32Array(B*G*4*v),q=new ux(I,B,G,v);q.type=pa,q.needsUpdate=!0;const C=U*4;for(let z=0;z<v;z++){const Z=_[z],rt=D[z],ht=N[z],lt=B*G*4*z;for(let P=0;P<Z.count;P++){const X=P*C;E===!0&&(l.fromBufferAttribute(Z,P),I[lt+X+0]=l.x,I[lt+X+1]=l.y,I[lt+X+2]=l.z,I[lt+X+3]=0),T===!0&&(l.fromBufferAttribute(rt,P),I[lt+X+4]=l.x,I[lt+X+5]=l.y,I[lt+X+6]=l.z,I[lt+X+7]=0),M===!0&&(l.fromBufferAttribute(ht,P),I[lt+X+8]=l.x,I[lt+X+9]=l.y,I[lt+X+10]=l.z,I[lt+X+11]=ht.itemSize===4?l.w:1)}}x={count:v,texture:q,size:new re(B,G)},r.set(d,x),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function pR(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const bx=new jn,mv=new yx(1,1),Tx=new ux,Ax=new Pb,Rx=new gx,gv=[],_v=[],vv=new Float32Array(16),xv=new Float32Array(9),yv=new Float32Array(4);function Zs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=gv[l];if(u===void 0&&(u=new Float32Array(l),gv[l]=u),t!==0){r.toArray(u,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(u,d)}return u}function _n(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function vn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function xc(s,t){let i=_v[t];i===void 0&&(i=new Int32Array(t),_v[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function mR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function gR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;s.uniform2fv(this.addr,t),vn(i,t)}}function _R(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;s.uniform3fv(this.addr,t),vn(i,t)}}function vR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;s.uniform4fv(this.addr,t),vn(i,t)}}function xR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;yv.set(r),s.uniformMatrix2fv(this.addr,!1,yv),vn(i,r)}}function yR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;xv.set(r),s.uniformMatrix3fv(this.addr,!1,xv),vn(i,r)}}function SR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;vv.set(r),s.uniformMatrix4fv(this.addr,!1,vv),vn(i,r)}}function MR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function ER(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;s.uniform2iv(this.addr,t),vn(i,t)}}function bR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;s.uniform3iv(this.addr,t),vn(i,t)}}function TR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;s.uniform4iv(this.addr,t),vn(i,t)}}function AR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function RR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;s.uniform2uiv(this.addr,t),vn(i,t)}}function CR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;s.uniform3uiv(this.addr,t),vn(i,t)}}function wR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;s.uniform4uiv(this.addr,t),vn(i,t)}}function DR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(mv.compareFunction=ox,u=mv):u=bx,i.setTexture2D(t||u,l)}function UR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Ax,l)}function LR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Rx,l)}function NR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Tx,l)}function OR(s){switch(s){case 5126:return mR;case 35664:return gR;case 35665:return _R;case 35666:return vR;case 35674:return xR;case 35675:return yR;case 35676:return SR;case 5124:case 35670:return MR;case 35667:case 35671:return ER;case 35668:case 35672:return bR;case 35669:case 35673:return TR;case 5125:return AR;case 36294:return RR;case 36295:return CR;case 36296:return wR;case 35678:case 36198:case 36298:case 36306:case 35682:return DR;case 35679:case 36299:case 36307:return UR;case 35680:case 36300:case 36308:case 36293:return LR;case 36289:case 36303:case 36311:case 36292:return NR}}function PR(s,t){s.uniform1fv(this.addr,t)}function zR(s,t){const i=Zs(t,this.size,2);s.uniform2fv(this.addr,i)}function IR(s,t){const i=Zs(t,this.size,3);s.uniform3fv(this.addr,i)}function BR(s,t){const i=Zs(t,this.size,4);s.uniform4fv(this.addr,i)}function FR(s,t){const i=Zs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function HR(s,t){const i=Zs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function GR(s,t){const i=Zs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function VR(s,t){s.uniform1iv(this.addr,t)}function kR(s,t){s.uniform2iv(this.addr,t)}function XR(s,t){s.uniform3iv(this.addr,t)}function WR(s,t){s.uniform4iv(this.addr,t)}function YR(s,t){s.uniform1uiv(this.addr,t)}function jR(s,t){s.uniform2uiv(this.addr,t)}function qR(s,t){s.uniform3uiv(this.addr,t)}function ZR(s,t){s.uniform4uiv(this.addr,t)}function KR(s,t,i){const r=this.cache,l=t.length,u=xc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||bx,u[f])}function QR(s,t,i){const r=this.cache,l=t.length,u=xc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Ax,u[f])}function JR(s,t,i){const r=this.cache,l=t.length,u=xc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Rx,u[f])}function $R(s,t,i){const r=this.cache,l=t.length,u=xc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Tx,u[f])}function tC(s){switch(s){case 5126:return PR;case 35664:return zR;case 35665:return IR;case 35666:return BR;case 35674:return FR;case 35675:return HR;case 35676:return GR;case 5124:case 35670:return VR;case 35667:case 35671:return kR;case 35668:case 35672:return XR;case 35669:case 35673:return WR;case 5125:return YR;case 36294:return jR;case 36295:return qR;case 36296:return ZR;case 35678:case 36198:case 36298:case 36306:case 35682:return KR;case 35679:case 36299:case 36307:return QR;case 35680:case 36300:case 36308:case 36293:return JR;case 36289:case 36303:case 36311:case 36292:return $R}}class eC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=OR(i.type)}}class nC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=tC(i.type)}}class iC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function Sv(s,t){s.seq.push(t),s.map[t.id]=t}function aC(s,t,i){const r=s.name,l=r.length;for(hd.lastIndex=0;;){const u=hd.exec(r),f=hd.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Sv(i,p===void 0?new eC(d,s,t):new nC(d,s,t));break}else{let v=i.map[d];v===void 0&&(v=new iC(d),Sv(i,v)),i=v}}}class rc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),f=t.getUniformLocation(i,u.name);aC(u,f,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function Mv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const rC=37297;let sC=0;function oC(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const Ev=new de;function lC(s){De._getMatrix(Ev,De.workingColorSpace,s);const t=`mat3( ${Ev.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(s)){case lc:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function bv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),u=(s.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+oC(s.getShaderSource(t),d)}else return u}function uC(s,t){const i=lC(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function cC(s,t){let i;switch(t){case qE:i="Linear";break;case ZE:i="Reinhard";break;case KE:i="Cineon";break;case QE:i="ACESFilmic";break;case $E:i="AgX";break;case tb:i="Neutral";break;case JE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ku=new j;function fC(){De.getLuminanceCoefficients(Ku);const s=Ku.x.toFixed(4),t=Ku.y.toFixed(4),i=Ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function dC(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function pC(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function Jo(s){return s!==""}function Tv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Av(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mC=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(s){return s.replace(mC,_C)}const gC=new Map;function _C(s,t){let i=pe[t];if(i===void 0){const r=gC.get(t);if(r!==void 0)i=pe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return sp(i)}const vC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rv(s){return s.replace(vC,xC)}function xC(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Cv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function yC(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===RE?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ha&&(t="SHADOWMAP_TYPE_VSM"),t}function SC(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Vs:t="ENVMAP_TYPE_CUBE";break;case _c:t="ENVMAP_TYPE_CUBE_UV";break}return t}function MC(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:t="ENVMAP_MODE_REFRACTION";break}return t}function EC(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Kv:t="ENVMAP_BLENDING_MULTIPLY";break;case YE:t="ENVMAP_BLENDING_MIX";break;case jE:t="ENVMAP_BLENDING_ADD";break}return t}function bC(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function TC(s,t,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=yC(i),p=SC(i),g=MC(i),v=EC(i),x=bC(i),S=hC(i),E=dC(u),T=l.createProgram();let M,_,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),_.length>0&&(_+=`
`)):(M=[Cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),_=[Cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==$a?"#define TONE_MAPPING":"",i.toneMapping!==$a?pe.tonemapping_pars_fragment:"",i.toneMapping!==$a?cC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,uC("linearToOutputTexel",i.outputColorSpace),fC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),f=sp(f),f=Tv(f,i),f=Av(f,i),d=sp(d),d=Tv(d,i),d=Av(d,i),f=Rv(f),d=Rv(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===U0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===U0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=D+M+f,U=D+_+d,B=Mv(l,l.VERTEX_SHADER,N),G=Mv(l,l.FRAGMENT_SHADER,U);l.attachShader(T,B),l.attachShader(T,G),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function I(z){if(s.debug.checkShaderErrors){const Z=l.getProgramInfoLog(T)||"",rt=l.getShaderInfoLog(B)||"",ht=l.getShaderInfoLog(G)||"",lt=Z.trim(),P=rt.trim(),X=ht.trim();let W=!0,tt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,B,G);else{const ct=bv(l,B,"vertex"),L=bv(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+lt+`
`+ct+`
`+L)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(P===""||X==="")&&(tt=!1);tt&&(z.diagnostics={runnable:W,programLog:lt,vertexShader:{log:P,prefix:M},fragmentShader:{log:X,prefix:_}})}l.deleteShader(B),l.deleteShader(G),q=new rc(l,T),C=pC(l,T)}let q;this.getUniforms=function(){return q===void 0&&I(this),q};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,rC)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=sC++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=G,this}let AC=0;class RC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new CC(t),i.set(t,r)),r}}class CC{constructor(t){this.id=AC++,this.code=t,this.usedTimes=0}}function wC(s,t,i,r,l,u,f){const d=new bp,m=new RC,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,w,z,Z,rt){const ht=Z.fog,lt=rt.geometry,P=C.isMeshStandardMaterial?Z.environment:null,X=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),W=X&&X.mapping===_c?X.image.height:null,tt=E[C.type];C.precision!==null&&(S=l.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const ct=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,L=ct!==void 0?ct.length:0;let J=0;lt.morphAttributes.position!==void 0&&(J=1),lt.morphAttributes.normal!==void 0&&(J=2),lt.morphAttributes.color!==void 0&&(J=3);let St,Rt,Lt,ot;if(tt){const Te=Bi[tt];St=Te.vertexShader,Rt=Te.fragmentShader}else St=C.vertexShader,Rt=C.fragmentShader,m.update(C),Lt=m.getVertexShaderID(C),ot=m.getFragmentShaderID(C);const pt=s.getRenderTarget(),Ut=s.state.buffers.depth.getReversed(),Bt=rt.isInstancedMesh===!0,Xt=rt.isBatchedMesh===!0,ge=!!C.map,on=!!C.matcap,H=!!X,Re=!!C.aoMap,ae=!!C.lightMap,ee=!!C.bumpMap,Yt=!!C.normalMap,ke=!!C.displacementMap,Wt=!!C.emissiveMap,oe=!!C.metalnessMap,$e=!!C.roughnessMap,Je=C.anisotropy>0,O=C.clearcoat>0,b=C.dispersion>0,at=C.iridescence>0,_t=C.sheen>0,Et=C.transmission>0,mt=Je&&!!C.anisotropyMap,Kt=O&&!!C.clearcoatMap,Ct=O&&!!C.clearcoatNormalMap,qt=O&&!!C.clearcoatRoughnessMap,Zt=at&&!!C.iridescenceMap,Tt=at&&!!C.iridescenceThicknessMap,wt=_t&&!!C.sheenColorMap,Qt=_t&&!!C.sheenRoughnessMap,It=!!C.specularMap,Nt=!!C.specularColorMap,ue=!!C.specularIntensityMap,k=Et&&!!C.transmissionMap,At=Et&&!!C.thicknessMap,Dt=!!C.gradientMap,Ft=!!C.alphaMap,bt=C.alphaTest>0,yt=!!C.alphaHash,Ht=!!C.extensions;let se=$a;C.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(se=s.toneMapping);const Oe={shaderID:tt,shaderType:C.type,shaderName:C.name,vertexShader:St,fragmentShader:Rt,defines:C.defines,customVertexShaderID:Lt,customFragmentShaderID:ot,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Xt,batchingColor:Xt&&rt._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&rt.instanceColor!==null,instancingMorph:Bt&&rt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:ks,alphaToCoverage:!!C.alphaToCoverage,map:ge,matcap:on,envMap:H,envMapMode:H&&X.mapping,envMapCubeUVHeight:W,aoMap:Re,lightMap:ae,bumpMap:ee,normalMap:Yt,displacementMap:x&&ke,emissiveMap:Wt,normalMapObjectSpace:Yt&&C.normalMapType===ab,normalMapTangentSpace:Yt&&C.normalMapType===sx,metalnessMap:oe,roughnessMap:$e,anisotropy:Je,anisotropyMap:mt,clearcoat:O,clearcoatMap:Kt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:qt,dispersion:b,iridescence:at,iridescenceMap:Zt,iridescenceThicknessMap:Tt,sheen:_t,sheenColorMap:wt,sheenRoughnessMap:Qt,specularMap:It,specularColorMap:Nt,specularIntensityMap:ue,transmission:Et,transmissionMap:k,thicknessMap:At,gradientMap:Dt,opaque:C.transparent===!1&&C.blending===Bs&&C.alphaToCoverage===!1,alphaMap:Ft,alphaTest:bt,alphaHash:yt,combine:C.combine,mapUv:ge&&T(C.map.channel),aoMapUv:Re&&T(C.aoMap.channel),lightMapUv:ae&&T(C.lightMap.channel),bumpMapUv:ee&&T(C.bumpMap.channel),normalMapUv:Yt&&T(C.normalMap.channel),displacementMapUv:ke&&T(C.displacementMap.channel),emissiveMapUv:Wt&&T(C.emissiveMap.channel),metalnessMapUv:oe&&T(C.metalnessMap.channel),roughnessMapUv:$e&&T(C.roughnessMap.channel),anisotropyMapUv:mt&&T(C.anisotropyMap.channel),clearcoatMapUv:Kt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&T(C.sheenRoughnessMap.channel),specularMapUv:It&&T(C.specularMap.channel),specularColorMapUv:Nt&&T(C.specularColorMap.channel),specularIntensityMapUv:ue&&T(C.specularIntensityMap.channel),transmissionMapUv:k&&T(C.transmissionMap.channel),thicknessMapUv:At&&T(C.thicknessMap.channel),alphaMapUv:Ft&&T(C.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Yt||Je),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!lt.attributes.uv&&(ge||Ft),fog:!!ht,useFog:C.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ut,skinning:rt.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:se,decodeVideoTexture:ge&&C.map.isVideoTexture===!0&&De.getTransfer(C.map.colorSpace)===He,decodeVideoTextureEmissive:Wt&&C.emissiveMap.isVideoTexture===!0&&De.getTransfer(C.emissiveMap.colorSpace)===He,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===da,flipSided:C.side===Yn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ht&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&C.extensions.multiDraw===!0||Xt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function _(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)w.push(z),w.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(D(w,C),N(w,C),w.push(s.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function D(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function N(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const w=E[C.type];let z;if(w){const Z=Bi[w];z=qb.clone(Z.uniforms)}else z=C.uniforms;return z}function B(C,w){let z;for(let Z=0,rt=g.length;Z<rt;Z++){const ht=g[Z];if(ht.cacheKey===w){z=ht,++z.usedTimes;break}}return z===void 0&&(z=new TC(s,w,C,u),g.push(z)),z}function G(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function I(C){m.remove(C)}function q(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:U,acquireProgram:B,releaseProgram:G,releaseShaderCache:I,programs:g,dispose:q}}function DC(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function UC(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function wv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Dv(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function f(v,x,S,E,T,M){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:E,renderOrder:v.renderOrder,z:T,group:M},s[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=T,_.group=M),t++,_}function d(v,x,S,E,T,M){const _=f(v,x,S,E,T,M);S.transmission>0?r.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(v,x,S,E,T,M){const _=f(v,x,S,E,T,M);S.transmission>0?r.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||UC),r.length>1&&r.sort(x||wv),l.length>1&&l.sort(x||wv)}function g(){for(let v=t,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function LC(){let s=new WeakMap;function t(r,l){const u=s.get(r);let f;return u===void 0?(f=new Dv,s.set(r,[f])):l>=u.length?(f=new Dv,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function NC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new fe};break;case"SpotLight":i={position:new j,direction:new j,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new j,halfWidth:new j,halfHeight:new j};break}return s[t.id]=i,i}}}function OC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let PC=0;function zC(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function IC(s){const t=new NC,i=OC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new j);const l=new j,u=new je,f=new je;function d(p){let g=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,E=0,T=0,M=0,_=0,D=0,N=0,U=0,B=0,G=0,I=0;p.sort(zC);for(let C=0,w=p.length;C<w;C++){const z=p[C],Z=z.color,rt=z.intensity,ht=z.distance,lt=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=Z.r*rt,v+=Z.g*rt,x+=Z.b*rt;else if(z.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(z.sh.coefficients[P],rt);I++}else if(z.isDirectionalLight){const P=t.get(z);if(P.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const X=z.shadow,W=i.get(z);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,r.directionalShadow[S]=W,r.directionalShadowMap[S]=lt,r.directionalShadowMatrix[S]=z.shadow.matrix,D++}r.directional[S]=P,S++}else if(z.isSpotLight){const P=t.get(z);P.position.setFromMatrixPosition(z.matrixWorld),P.color.copy(Z).multiplyScalar(rt),P.distance=ht,P.coneCos=Math.cos(z.angle),P.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),P.decay=z.decay,r.spot[T]=P;const X=z.shadow;if(z.map&&(r.spotLightMap[B]=z.map,B++,X.updateMatrices(z),z.castShadow&&G++),r.spotLightMatrix[T]=X.matrix,z.castShadow){const W=i.get(z);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,r.spotShadow[T]=W,r.spotShadowMap[T]=lt,U++}T++}else if(z.isRectAreaLight){const P=t.get(z);P.color.copy(Z).multiplyScalar(rt),P.halfWidth.set(z.width*.5,0,0),P.halfHeight.set(0,z.height*.5,0),r.rectArea[M]=P,M++}else if(z.isPointLight){const P=t.get(z);if(P.color.copy(z.color).multiplyScalar(z.intensity),P.distance=z.distance,P.decay=z.decay,z.castShadow){const X=z.shadow,W=i.get(z);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,r.pointShadow[E]=W,r.pointShadowMap[E]=lt,r.pointShadowMatrix[E]=z.shadow.matrix,N++}r.point[E]=P,E++}else if(z.isHemisphereLight){const P=t.get(z);P.skyColor.copy(z.color).multiplyScalar(rt),P.groundColor.copy(z.groundColor).multiplyScalar(rt),r.hemi[_]=P,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pt.LTC_FLOAT_1,r.rectAreaLTC2=Pt.LTC_FLOAT_2):(r.rectAreaLTC1=Pt.LTC_HALF_1,r.rectAreaLTC2=Pt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const q=r.hash;(q.directionalLength!==S||q.pointLength!==E||q.spotLength!==T||q.rectAreaLength!==M||q.hemiLength!==_||q.numDirectionalShadows!==D||q.numPointShadows!==N||q.numSpotShadows!==U||q.numSpotMaps!==B||q.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=M,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+B-G,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=I,q.directionalLength=S,q.pointLength=E,q.spotLength=T,q.rectAreaLength=M,q.hemiLength=_,q.numDirectionalShadows=D,q.numPointShadows=N,q.numSpotShadows=U,q.numSpotMaps=B,q.numLightProbes=I,r.version=PC++)}function m(p,g){let v=0,x=0,S=0,E=0,T=0;const M=g.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const N=p[_];if(N.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),v++}else if(N.isSpotLight){const U=r.spot[S];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),S++}else if(N.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),f.identity(),u.copy(N.matrixWorld),u.premultiply(M),f.extractRotation(u),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),x++}else if(N.isHemisphereLight){const U=r.hemi[T];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),T++}}}return{setup:d,setupView:m,state:r}}function Uv(s){const t=new IC(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function f(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function BC(s){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let d;return f===void 0?(d=new Uv(s),t.set(l,[d])):u>=f.length?(d=new Uv(s),f.push(d)):d=f[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const FC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GC(s,t,i){let r=new Tp;const l=new re,u=new re,f=new Ve,d=new oT({depthPacking:ib}),m=new lT,p={},g=i.maxTextureSize,v={[tr]:Yn,[Yn]:tr,[da]:da},x=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:FC,fragmentShader:HC}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new ai;E.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ri(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zv;let _=this.type;this.render=function(G,I,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const C=s.getRenderTarget(),w=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Ja),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const rt=_!==ha&&this.type===ha,ht=_===ha&&this.type!==ha;for(let lt=0,P=G.length;lt<P;lt++){const X=G[lt],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const tt=W.getFrameExtents();if(l.multiply(tt),u.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/tt.x),l.x=u.x*tt.x,W.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/tt.y),l.y=u.y*tt.y,W.mapSize.y=u.y)),W.map===null||rt===!0||ht===!0){const L=this.type!==ha?{minFilter:Ci,magFilter:Ci}:{};W.map!==null&&W.map.dispose(),W.map=new Or(l.x,l.y,L),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ct=W.getViewportCount();for(let L=0;L<ct;L++){const J=W.getViewport(L);f.set(u.x*J.x,u.y*J.y,u.x*J.z,u.y*J.w),Z.viewport(f),W.updateMatrices(X,L),r=W.getFrustum(),U(I,q,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===ha&&D(W,q),W.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(C,w,z)};function D(G,I){const q=t.update(T);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,S.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Or(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,s.setRenderTarget(G.mapPass),s.clear(),s.renderBufferDirect(I,null,q,x,T,null),S.uniforms.shadow_pass.value=G.mapPass.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,s.setRenderTarget(G.map),s.clear(),s.renderBufferDirect(I,null,q,S,T,null)}function N(G,I,q,C){let w=null;const z=q.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(z!==void 0)w=z;else if(w=q.isPointLight===!0?m:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Z=w.uuid,rt=I.uuid;let ht=p[Z];ht===void 0&&(ht={},p[Z]=ht);let lt=ht[rt];lt===void 0&&(lt=w.clone(),ht[rt]=lt,I.addEventListener("dispose",B)),w=lt}if(w.visible=I.visible,w.wireframe=I.wireframe,C===ha?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:v[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Z=s.properties.get(w);Z.light=q}return w}function U(G,I,q,C,w){if(G.visible===!1)return;if(G.layers.test(I.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&w===ha)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,G.matrixWorld);const rt=t.update(G),ht=G.material;if(Array.isArray(ht)){const lt=rt.groups;for(let P=0,X=lt.length;P<X;P++){const W=lt[P],tt=ht[W.materialIndex];if(tt&&tt.visible){const ct=N(G,tt,C,w);G.onBeforeShadow(s,G,I,q,rt,ct,W),s.renderBufferDirect(q,null,rt,ct,G,W),G.onAfterShadow(s,G,I,q,rt,ct,W)}}}else if(ht.visible){const lt=N(G,ht,C,w);G.onBeforeShadow(s,G,I,q,rt,lt,null),s.renderBufferDirect(q,null,rt,lt,G,null),G.onAfterShadow(s,G,I,q,rt,lt,null)}}const Z=G.children;for(let rt=0,ht=Z.length;rt<ht;rt++)U(Z[rt],I,q,C,w)}function B(G){G.target.removeEventListener("dispose",B);for(const q in p){const C=p[q],w=G.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const VC={[xd]:yd,[Sd]:bd,[Md]:Td,[Hs]:Ed,[yd]:xd,[bd]:Sd,[Td]:Md,[Ed]:Hs};function kC(s,t){function i(){let k=!1;const At=new Ve;let Dt=null;const Ft=new Ve(0,0,0,0);return{setMask:function(bt){Dt!==bt&&!k&&(s.colorMask(bt,bt,bt,bt),Dt=bt)},setLocked:function(bt){k=bt},setClear:function(bt,yt,Ht,se,Oe){Oe===!0&&(bt*=se,yt*=se,Ht*=se),At.set(bt,yt,Ht,se),Ft.equals(At)===!1&&(s.clearColor(bt,yt,Ht,se),Ft.copy(At))},reset:function(){k=!1,Dt=null,Ft.set(-1,0,0,0)}}}function r(){let k=!1,At=!1,Dt=null,Ft=null,bt=null;return{setReversed:function(yt){if(At!==yt){const Ht=t.get("EXT_clip_control");yt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),At=yt;const se=bt;bt=null,this.setClear(se)}},getReversed:function(){return At},setTest:function(yt){yt?pt(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(yt){Dt!==yt&&!k&&(s.depthMask(yt),Dt=yt)},setFunc:function(yt){if(At&&(yt=VC[yt]),Ft!==yt){switch(yt){case xd:s.depthFunc(s.NEVER);break;case yd:s.depthFunc(s.ALWAYS);break;case Sd:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case Md:s.depthFunc(s.EQUAL);break;case Ed:s.depthFunc(s.GEQUAL);break;case bd:s.depthFunc(s.GREATER);break;case Td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ft=yt}},setLocked:function(yt){k=yt},setClear:function(yt){bt!==yt&&(At&&(yt=1-yt),s.clearDepth(yt),bt=yt)},reset:function(){k=!1,Dt=null,Ft=null,bt=null,At=!1}}}function l(){let k=!1,At=null,Dt=null,Ft=null,bt=null,yt=null,Ht=null,se=null,Oe=null;return{setTest:function(Te){k||(Te?pt(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(Te){At!==Te&&!k&&(s.stencilMask(Te),At=Te)},setFunc:function(Te,Nn,ri){(Dt!==Te||Ft!==Nn||bt!==ri)&&(s.stencilFunc(Te,Nn,ri),Dt=Te,Ft=Nn,bt=ri)},setOp:function(Te,Nn,ri){(yt!==Te||Ht!==Nn||se!==ri)&&(s.stencilOp(Te,Nn,ri),yt=Te,Ht=Nn,se=ri)},setLocked:function(Te){k=Te},setClear:function(Te){Oe!==Te&&(s.clearStencil(Te),Oe=Te)},reset:function(){k=!1,At=null,Dt=null,Ft=null,bt=null,yt=null,Ht=null,se=null,Oe=null}}}const u=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,S=[],E=null,T=!1,M=null,_=null,D=null,N=null,U=null,B=null,G=null,I=new fe(0,0,0),q=0,C=!1,w=null,z=null,Z=null,rt=null,ht=null;const lt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,X=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=X>=2);let tt=null,ct={};const L=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),St=new Ve().fromArray(L),Rt=new Ve().fromArray(J);function Lt(k,At,Dt,Ft){const bt=new Uint8Array(4),yt=s.createTexture();s.bindTexture(k,yt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<Dt;Ht++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(At,0,s.RGBA,1,1,Ft,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(At+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return yt}const ot={};ot[s.TEXTURE_2D]=Lt(s.TEXTURE_2D,s.TEXTURE_2D,1),ot[s.TEXTURE_CUBE_MAP]=Lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[s.TEXTURE_2D_ARRAY]=Lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ot[s.TEXTURE_3D]=Lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),pt(s.DEPTH_TEST),f.setFunc(Hs),ee(!1),Yt(T0),pt(s.CULL_FACE),Re(Ja);function pt(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Ut(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function Bt(k,At){return v[k]!==At?(s.bindFramebuffer(k,At),v[k]=At,k===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=At),k===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=At),!0):!1}function Xt(k,At){let Dt=S,Ft=!1;if(k){Dt=x.get(At),Dt===void 0&&(Dt=[],x.set(At,Dt));const bt=k.textures;if(Dt.length!==bt.length||Dt[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,Ht=bt.length;yt<Ht;yt++)Dt[yt]=s.COLOR_ATTACHMENT0+yt;Dt.length=bt.length,Ft=!0}}else Dt[0]!==s.BACK&&(Dt[0]=s.BACK,Ft=!0);Ft&&s.drawBuffers(Dt)}function ge(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const on={[Cr]:s.FUNC_ADD,[wE]:s.FUNC_SUBTRACT,[DE]:s.FUNC_REVERSE_SUBTRACT};on[UE]=s.MIN,on[LE]=s.MAX;const H={[NE]:s.ZERO,[OE]:s.ONE,[PE]:s.SRC_COLOR,[_d]:s.SRC_ALPHA,[GE]:s.SRC_ALPHA_SATURATE,[FE]:s.DST_COLOR,[IE]:s.DST_ALPHA,[zE]:s.ONE_MINUS_SRC_COLOR,[vd]:s.ONE_MINUS_SRC_ALPHA,[HE]:s.ONE_MINUS_DST_COLOR,[BE]:s.ONE_MINUS_DST_ALPHA,[VE]:s.CONSTANT_COLOR,[kE]:s.ONE_MINUS_CONSTANT_COLOR,[XE]:s.CONSTANT_ALPHA,[WE]:s.ONE_MINUS_CONSTANT_ALPHA};function Re(k,At,Dt,Ft,bt,yt,Ht,se,Oe,Te){if(k===Ja){T===!0&&(Ut(s.BLEND),T=!1);return}if(T===!1&&(pt(s.BLEND),T=!0),k!==CE){if(k!==M||Te!==C){if((_!==Cr||U!==Cr)&&(s.blendEquation(s.FUNC_ADD),_=Cr,U=Cr),Te)switch(k){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case A0:s.blendFunc(s.ONE,s.ONE);break;case R0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case C0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case A0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case R0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}D=null,N=null,B=null,G=null,I.set(0,0,0),q=0,M=k,C=Te}return}bt=bt||At,yt=yt||Dt,Ht=Ht||Ft,(At!==_||bt!==U)&&(s.blendEquationSeparate(on[At],on[bt]),_=At,U=bt),(Dt!==D||Ft!==N||yt!==B||Ht!==G)&&(s.blendFuncSeparate(H[Dt],H[Ft],H[yt],H[Ht]),D=Dt,N=Ft,B=yt,G=Ht),(se.equals(I)===!1||Oe!==q)&&(s.blendColor(se.r,se.g,se.b,Oe),I.copy(se),q=Oe),M=k,C=!1}function ae(k,At){k.side===da?Ut(s.CULL_FACE):pt(s.CULL_FACE);let Dt=k.side===Yn;At&&(Dt=!Dt),ee(Dt),k.blending===Bs&&k.transparent===!1?Re(Ja):Re(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const Ft=k.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Wt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function Yt(k){k!==TE?(pt(s.CULL_FACE),k!==z&&(k===T0?s.cullFace(s.BACK):k===AE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),z=k}function ke(k){k!==Z&&(P&&s.lineWidth(k),Z=k)}function Wt(k,At,Dt){k?(pt(s.POLYGON_OFFSET_FILL),(rt!==At||ht!==Dt)&&(s.polygonOffset(At,Dt),rt=At,ht=Dt)):Ut(s.POLYGON_OFFSET_FILL)}function oe(k){k?pt(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function $e(k){k===void 0&&(k=s.TEXTURE0+lt-1),tt!==k&&(s.activeTexture(k),tt=k)}function Je(k,At,Dt){Dt===void 0&&(tt===null?Dt=s.TEXTURE0+lt-1:Dt=tt);let Ft=ct[Dt];Ft===void 0&&(Ft={type:void 0,texture:void 0},ct[Dt]=Ft),(Ft.type!==k||Ft.texture!==At)&&(tt!==Dt&&(s.activeTexture(Dt),tt=Dt),s.bindTexture(k,At||ot[k]),Ft.type=k,Ft.texture=At)}function O(){const k=ct[tt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(k){St.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Qt(k){Rt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Rt.copy(k))}function It(k,At){let Dt=p.get(At);Dt===void 0&&(Dt=new WeakMap,p.set(At,Dt));let Ft=Dt.get(k);Ft===void 0&&(Ft=s.getUniformBlockIndex(At,k.name),Dt.set(k,Ft))}function Nt(k,At){const Ft=p.get(At).get(k);m.get(At)!==Ft&&(s.uniformBlockBinding(At,Ft,k.__bindingPointIndex),m.set(At,Ft))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},tt=null,ct={},v={},x=new WeakMap,S=[],E=null,T=!1,M=null,_=null,D=null,N=null,U=null,B=null,G=null,I=new fe(0,0,0),q=0,C=!1,w=null,z=null,Z=null,rt=null,ht=null,St.set(0,0,s.canvas.width,s.canvas.height),Rt.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:pt,disable:Ut,bindFramebuffer:Bt,drawBuffers:Xt,useProgram:ge,setBlending:Re,setMaterial:ae,setFlipSided:ee,setCullFace:Yt,setLineWidth:ke,setPolygonOffset:Wt,setScissorTest:oe,activeTexture:$e,bindTexture:Je,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:at,texImage2D:Zt,texImage3D:Tt,updateUBOMapping:It,uniformBlockBinding:Nt,texStorage2D:Ct,texStorage3D:qt,texSubImage2D:_t,texSubImage3D:Et,compressedTexSubImage2D:mt,compressedTexSubImage3D:Kt,scissor:wt,viewport:Qt,reset:ue}}function XC(s,t,i,r,l,u,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new re,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return S?new OffscreenCanvas(O,b):cc("canvas")}function T(O,b,at){let _t=1;const Et=Je(O);if((Et.width>at||Et.height>at)&&(_t=at/Math.max(Et.width,Et.height)),_t<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const mt=Math.floor(_t*Et.width),Kt=Math.floor(_t*Et.height);v===void 0&&(v=E(mt,Kt));const Ct=b?E(mt,Kt):v;return Ct.width=mt,Ct.height=Kt,Ct.getContext("2d").drawImage(O,0,0,mt,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+mt+"x"+Kt+")."),Ct}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),O;return O}function M(O){return O.generateMipmaps}function _(O){s.generateMipmap(O)}function D(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(O,b,at,_t,Et=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let mt=b;if(b===s.RED&&(at===s.FLOAT&&(mt=s.R32F),at===s.HALF_FLOAT&&(mt=s.R16F),at===s.UNSIGNED_BYTE&&(mt=s.R8)),b===s.RED_INTEGER&&(at===s.UNSIGNED_BYTE&&(mt=s.R8UI),at===s.UNSIGNED_SHORT&&(mt=s.R16UI),at===s.UNSIGNED_INT&&(mt=s.R32UI),at===s.BYTE&&(mt=s.R8I),at===s.SHORT&&(mt=s.R16I),at===s.INT&&(mt=s.R32I)),b===s.RG&&(at===s.FLOAT&&(mt=s.RG32F),at===s.HALF_FLOAT&&(mt=s.RG16F),at===s.UNSIGNED_BYTE&&(mt=s.RG8)),b===s.RG_INTEGER&&(at===s.UNSIGNED_BYTE&&(mt=s.RG8UI),at===s.UNSIGNED_SHORT&&(mt=s.RG16UI),at===s.UNSIGNED_INT&&(mt=s.RG32UI),at===s.BYTE&&(mt=s.RG8I),at===s.SHORT&&(mt=s.RG16I),at===s.INT&&(mt=s.RG32I)),b===s.RGB_INTEGER&&(at===s.UNSIGNED_BYTE&&(mt=s.RGB8UI),at===s.UNSIGNED_SHORT&&(mt=s.RGB16UI),at===s.UNSIGNED_INT&&(mt=s.RGB32UI),at===s.BYTE&&(mt=s.RGB8I),at===s.SHORT&&(mt=s.RGB16I),at===s.INT&&(mt=s.RGB32I)),b===s.RGBA_INTEGER&&(at===s.UNSIGNED_BYTE&&(mt=s.RGBA8UI),at===s.UNSIGNED_SHORT&&(mt=s.RGBA16UI),at===s.UNSIGNED_INT&&(mt=s.RGBA32UI),at===s.BYTE&&(mt=s.RGBA8I),at===s.SHORT&&(mt=s.RGBA16I),at===s.INT&&(mt=s.RGBA32I)),b===s.RGB&&(at===s.UNSIGNED_INT_5_9_9_9_REV&&(mt=s.RGB9_E5),at===s.UNSIGNED_INT_10F_11F_11F_REV&&(mt=s.R11F_G11F_B10F)),b===s.RGBA){const Kt=Et?lc:De.getTransfer(_t);at===s.FLOAT&&(mt=s.RGBA32F),at===s.HALF_FLOAT&&(mt=s.RGBA16F),at===s.UNSIGNED_BYTE&&(mt=Kt===He?s.SRGB8_ALPHA8:s.RGBA8),at===s.UNSIGNED_SHORT_4_4_4_4&&(mt=s.RGBA4),at===s.UNSIGNED_SHORT_5_5_5_1&&(mt=s.RGB5_A1)}return(mt===s.R16F||mt===s.R32F||mt===s.RG16F||mt===s.RG32F||mt===s.RGBA16F||mt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function U(O,b){let at;return O?b===null||b===Lr||b===il?at=s.DEPTH24_STENCIL8:b===pa?at=s.DEPTH32F_STENCIL8:b===nl&&(at=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Lr||b===il?at=s.DEPTH_COMPONENT24:b===pa?at=s.DEPTH_COMPONENT32F:b===nl&&(at=s.DEPTH_COMPONENT16),at}function B(O,b){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ci&&O.minFilter!==Fi?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function G(O){const b=O.target;b.removeEventListener("dispose",G),q(b),b.isVideoTexture&&g.delete(b)}function I(O){const b=O.target;b.removeEventListener("dispose",I),w(b)}function q(O){const b=r.get(O);if(b.__webglInit===void 0)return;const at=O.source,_t=x.get(at);if(_t){const Et=_t[b.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&C(O),Object.keys(_t).length===0&&x.delete(at)}r.remove(O)}function C(O){const b=r.get(O);s.deleteTexture(b.__webglTexture);const at=O.source,_t=x.get(at);delete _t[b.__cacheKey],f.memory.textures--}function w(O){const b=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(b.__webglFramebuffer[_t]))for(let Et=0;Et<b.__webglFramebuffer[_t].length;Et++)s.deleteFramebuffer(b.__webglFramebuffer[_t][Et]);else s.deleteFramebuffer(b.__webglFramebuffer[_t]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[_t])}else{if(Array.isArray(b.__webglFramebuffer))for(let _t=0;_t<b.__webglFramebuffer.length;_t++)s.deleteFramebuffer(b.__webglFramebuffer[_t]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _t=0;_t<b.__webglColorRenderbuffer.length;_t++)b.__webglColorRenderbuffer[_t]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[_t]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const at=O.textures;for(let _t=0,Et=at.length;_t<Et;_t++){const mt=r.get(at[_t]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),f.memory.textures--),r.remove(at[_t])}r.remove(O)}let z=0;function Z(){z=0}function rt(){const O=z;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),z+=1,O}function ht(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function lt(O,b){const at=r.get(O);if(O.isVideoTexture&&oe(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&at.__version!==O.version){const _t=O.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(at,O,b);return}}else O.isExternalTexture&&(at.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,at.__webglTexture,s.TEXTURE0+b)}function P(O,b){const at=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&at.__version!==O.version){ot(at,O,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,at.__webglTexture,s.TEXTURE0+b)}function X(O,b){const at=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&at.__version!==O.version){ot(at,O,b);return}i.bindTexture(s.TEXTURE_3D,at.__webglTexture,s.TEXTURE0+b)}function W(O,b){const at=r.get(O);if(O.version>0&&at.__version!==O.version){pt(at,O,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture,s.TEXTURE0+b)}const tt={[Cd]:s.REPEAT,[Dr]:s.CLAMP_TO_EDGE,[wd]:s.MIRRORED_REPEAT},ct={[Ci]:s.NEAREST,[eb]:s.NEAREST_MIPMAP_NEAREST,[Au]:s.NEAREST_MIPMAP_LINEAR,[Fi]:s.LINEAR,[Ph]:s.LINEAR_MIPMAP_NEAREST,[Ur]:s.LINEAR_MIPMAP_LINEAR},L={[rb]:s.NEVER,[fb]:s.ALWAYS,[sb]:s.LESS,[ox]:s.LEQUAL,[ob]:s.EQUAL,[cb]:s.GEQUAL,[lb]:s.GREATER,[ub]:s.NOTEQUAL};function J(O,b){if(b.type===pa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Fi||b.magFilter===Ph||b.magFilter===Au||b.magFilter===Ur||b.minFilter===Fi||b.minFilter===Ph||b.minFilter===Au||b.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,tt[b.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,tt[b.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,tt[b.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,ct[b.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,ct[b.minFilter]),b.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,L[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ci||b.minFilter!==Au&&b.minFilter!==Ur||b.type===pa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function St(O,b){let at=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",G));const _t=b.source;let Et=x.get(_t);Et===void 0&&(Et={},x.set(_t,Et));const mt=ht(b);if(mt!==O.__cacheKey){Et[mt]===void 0&&(Et[mt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,at=!0),Et[mt].usedTimes++;const Kt=Et[O.__cacheKey];Kt!==void 0&&(Et[O.__cacheKey].usedTimes--,Kt.usedTimes===0&&C(b)),O.__cacheKey=mt,O.__webglTexture=Et[mt].texture}return at}function Rt(O,b,at){return Math.floor(Math.floor(O/at)/b)}function Lt(O,b,at,_t){const mt=O.updateRanges;if(mt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,at,_t,b.data);else{mt.sort((Tt,wt)=>Tt.start-wt.start);let Kt=0;for(let Tt=1;Tt<mt.length;Tt++){const wt=mt[Kt],Qt=mt[Tt],It=wt.start+wt.count,Nt=Rt(Qt.start,b.width,4),ue=Rt(wt.start,b.width,4);Qt.start<=It+1&&Nt===ue&&Rt(Qt.start+Qt.count-1,b.width,4)===Nt?wt.count=Math.max(wt.count,Qt.start+Qt.count-wt.start):(++Kt,mt[Kt]=Qt)}mt.length=Kt+1;const Ct=s.getParameter(s.UNPACK_ROW_LENGTH),qt=s.getParameter(s.UNPACK_SKIP_PIXELS),Zt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Tt=0,wt=mt.length;Tt<wt;Tt++){const Qt=mt[Tt],It=Math.floor(Qt.start/4),Nt=Math.ceil(Qt.count/4),ue=It%b.width,k=Math.floor(It/b.width),At=Nt,Dt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ue),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,ue,k,At,Dt,at,_t,b.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ct),s.pixelStorei(s.UNPACK_SKIP_PIXELS,qt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Zt)}}function ot(O,b,at){let _t=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_t=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_t=s.TEXTURE_3D);const Et=St(O,b),mt=b.source;i.bindTexture(_t,O.__webglTexture,s.TEXTURE0+at);const Kt=r.get(mt);if(mt.version!==Kt.__version||Et===!0){i.activeTexture(s.TEXTURE0+at);const Ct=De.getPrimaries(De.workingColorSpace),qt=b.colorSpace===Qa?null:De.getPrimaries(b.colorSpace),Zt=b.colorSpace===Qa||Ct===qt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Tt=T(b.image,!1,l.maxTextureSize);Tt=$e(b,Tt);const wt=u.convert(b.format,b.colorSpace),Qt=u.convert(b.type);let It=N(b.internalFormat,wt,Qt,b.colorSpace,b.isVideoTexture);J(_t,b);let Nt;const ue=b.mipmaps,k=b.isVideoTexture!==!0,At=Kt.__version===void 0||Et===!0,Dt=mt.dataReady,Ft=B(b,Tt);if(b.isDepthTexture)It=U(b.format===rl,b.type),At&&(k?i.texStorage2D(s.TEXTURE_2D,1,It,Tt.width,Tt.height):i.texImage2D(s.TEXTURE_2D,0,It,Tt.width,Tt.height,0,wt,Qt,null));else if(b.isDataTexture)if(ue.length>0){k&&At&&i.texStorage2D(s.TEXTURE_2D,Ft,It,ue[0].width,ue[0].height);for(let bt=0,yt=ue.length;bt<yt;bt++)Nt=ue[bt],k?Dt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Nt.width,Nt.height,wt,Qt,Nt.data):i.texImage2D(s.TEXTURE_2D,bt,It,Nt.width,Nt.height,0,wt,Qt,Nt.data);b.generateMipmaps=!1}else k?(At&&i.texStorage2D(s.TEXTURE_2D,Ft,It,Tt.width,Tt.height),Dt&&Lt(b,Tt,wt,Qt)):i.texImage2D(s.TEXTURE_2D,0,It,Tt.width,Tt.height,0,wt,Qt,Tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&At&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,It,ue[0].width,ue[0].height,Tt.depth);for(let bt=0,yt=ue.length;bt<yt;bt++)if(Nt=ue[bt],b.format!==Ai)if(wt!==null)if(k){if(Dt)if(b.layerUpdates.size>0){const Ht=ov(Nt.width,Nt.height,b.format,b.type);for(const se of b.layerUpdates){const Oe=Nt.data.subarray(se*Ht/Nt.data.BYTES_PER_ELEMENT,(se+1)*Ht/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,se,Nt.width,Nt.height,1,wt,Oe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Nt.width,Nt.height,Tt.depth,wt,Nt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,bt,It,Nt.width,Nt.height,Tt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Dt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Nt.width,Nt.height,Tt.depth,wt,Qt,Nt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,bt,It,Nt.width,Nt.height,Tt.depth,0,wt,Qt,Nt.data)}else{k&&At&&i.texStorage2D(s.TEXTURE_2D,Ft,It,ue[0].width,ue[0].height);for(let bt=0,yt=ue.length;bt<yt;bt++)Nt=ue[bt],b.format!==Ai?wt!==null?k?Dt&&i.compressedTexSubImage2D(s.TEXTURE_2D,bt,0,0,Nt.width,Nt.height,wt,Nt.data):i.compressedTexImage2D(s.TEXTURE_2D,bt,It,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Dt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Nt.width,Nt.height,wt,Qt,Nt.data):i.texImage2D(s.TEXTURE_2D,bt,It,Nt.width,Nt.height,0,wt,Qt,Nt.data)}else if(b.isDataArrayTexture)if(k){if(At&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,It,Tt.width,Tt.height,Tt.depth),Dt)if(b.layerUpdates.size>0){const bt=ov(Tt.width,Tt.height,b.format,b.type);for(const yt of b.layerUpdates){const Ht=Tt.data.subarray(yt*bt/Tt.data.BYTES_PER_ELEMENT,(yt+1)*bt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,yt,Tt.width,Tt.height,1,wt,Qt,Ht)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,wt,Qt,Tt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,It,Tt.width,Tt.height,Tt.depth,0,wt,Qt,Tt.data);else if(b.isData3DTexture)k?(At&&i.texStorage3D(s.TEXTURE_3D,Ft,It,Tt.width,Tt.height,Tt.depth),Dt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,wt,Qt,Tt.data)):i.texImage3D(s.TEXTURE_3D,0,It,Tt.width,Tt.height,Tt.depth,0,wt,Qt,Tt.data);else if(b.isFramebufferTexture){if(At)if(k)i.texStorage2D(s.TEXTURE_2D,Ft,It,Tt.width,Tt.height);else{let bt=Tt.width,yt=Tt.height;for(let Ht=0;Ht<Ft;Ht++)i.texImage2D(s.TEXTURE_2D,Ht,It,bt,yt,0,wt,Qt,null),bt>>=1,yt>>=1}}else if(ue.length>0){if(k&&At){const bt=Je(ue[0]);i.texStorage2D(s.TEXTURE_2D,Ft,It,bt.width,bt.height)}for(let bt=0,yt=ue.length;bt<yt;bt++)Nt=ue[bt],k?Dt&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,wt,Qt,Nt):i.texImage2D(s.TEXTURE_2D,bt,It,wt,Qt,Nt);b.generateMipmaps=!1}else if(k){if(At){const bt=Je(Tt);i.texStorage2D(s.TEXTURE_2D,Ft,It,bt.width,bt.height)}Dt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,Qt,Tt)}else i.texImage2D(s.TEXTURE_2D,0,It,wt,Qt,Tt);M(b)&&_(_t),Kt.__version=mt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function pt(O,b,at){if(b.image.length!==6)return;const _t=St(O,b),Et=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+at);const mt=r.get(Et);if(Et.version!==mt.__version||_t===!0){i.activeTexture(s.TEXTURE0+at);const Kt=De.getPrimaries(De.workingColorSpace),Ct=b.colorSpace===Qa?null:De.getPrimaries(b.colorSpace),qt=b.colorSpace===Qa||Kt===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const Zt=b.isCompressedTexture||b.image[0].isCompressedTexture,Tt=b.image[0]&&b.image[0].isDataTexture,wt=[];for(let yt=0;yt<6;yt++)!Zt&&!Tt?wt[yt]=T(b.image[yt],!0,l.maxCubemapSize):wt[yt]=Tt?b.image[yt].image:b.image[yt],wt[yt]=$e(b,wt[yt]);const Qt=wt[0],It=u.convert(b.format,b.colorSpace),Nt=u.convert(b.type),ue=N(b.internalFormat,It,Nt,b.colorSpace),k=b.isVideoTexture!==!0,At=mt.__version===void 0||_t===!0,Dt=Et.dataReady;let Ft=B(b,Qt);J(s.TEXTURE_CUBE_MAP,b);let bt;if(Zt){k&&At&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,ue,Qt.width,Qt.height);for(let yt=0;yt<6;yt++){bt=wt[yt].mipmaps;for(let Ht=0;Ht<bt.length;Ht++){const se=bt[Ht];b.format!==Ai?It!==null?k?Dt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ht,0,0,se.width,se.height,It,se.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ht,ue,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Dt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ht,0,0,se.width,se.height,It,Nt,se.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ht,ue,se.width,se.height,0,It,Nt,se.data)}}}else{if(bt=b.mipmaps,k&&At){bt.length>0&&Ft++;const yt=Je(wt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,ue,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Tt){k?Dt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,wt[yt].width,wt[yt].height,It,Nt,wt[yt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ue,wt[yt].width,wt[yt].height,0,It,Nt,wt[yt].data);for(let Ht=0;Ht<bt.length;Ht++){const Oe=bt[Ht].image[yt].image;k?Dt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ht+1,0,0,Oe.width,Oe.height,It,Nt,Oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ht+1,ue,Oe.width,Oe.height,0,It,Nt,Oe.data)}}else{k?Dt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,It,Nt,wt[yt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ue,It,Nt,wt[yt]);for(let Ht=0;Ht<bt.length;Ht++){const se=bt[Ht];k?Dt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ht+1,0,0,It,Nt,se.image[yt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ht+1,ue,It,Nt,se.image[yt])}}}M(b)&&_(s.TEXTURE_CUBE_MAP),mt.__version=Et.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Ut(O,b,at,_t,Et,mt){const Kt=u.convert(at.format,at.colorSpace),Ct=u.convert(at.type),qt=N(at.internalFormat,Kt,Ct,at.colorSpace),Zt=r.get(b),Tt=r.get(at);if(Tt.__renderTarget=b,!Zt.__hasExternalTextures){const wt=Math.max(1,b.width>>mt),Qt=Math.max(1,b.height>>mt);Et===s.TEXTURE_3D||Et===s.TEXTURE_2D_ARRAY?i.texImage3D(Et,mt,qt,wt,Qt,b.depth,0,Kt,Ct,null):i.texImage2D(Et,mt,qt,wt,Qt,0,Kt,Ct,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),Wt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,Et,Tt.__webglTexture,0,ke(b)):(Et===s.TEXTURE_2D||Et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_t,Et,Tt.__webglTexture,mt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(O,b,at){if(s.bindRenderbuffer(s.RENDERBUFFER,O),b.depthBuffer){const _t=b.depthTexture,Et=_t&&_t.isDepthTexture?_t.type:null,mt=U(b.stencilBuffer,Et),Kt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=ke(b);Wt(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,mt,b.width,b.height):at?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,mt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,mt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Kt,s.RENDERBUFFER,O)}else{const _t=b.textures;for(let Et=0;Et<_t.length;Et++){const mt=_t[Et],Kt=u.convert(mt.format,mt.colorSpace),Ct=u.convert(mt.type),qt=N(mt.internalFormat,Kt,Ct,mt.colorSpace),Zt=ke(b);at&&Wt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,qt,b.width,b.height):Wt(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,qt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,qt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xt(O,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=r.get(b.depthTexture);_t.__renderTarget=b,(!_t.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),lt(b.depthTexture,0);const Et=_t.__webglTexture,mt=ke(b);if(b.depthTexture.format===al)Wt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0);else if(b.depthTexture.format===rl)Wt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function ge(O){const b=r.get(O),at=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const _t=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_t){const Et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_t.removeEventListener("dispose",Et)};_t.addEventListener("dispose",Et),b.__depthDisposeCallback=Et}b.__boundDepthTexture=_t}if(O.depthTexture&&!b.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");const _t=O.texture.mipmaps;_t&&_t.length>0?Xt(b.__webglFramebuffer[0],O):Xt(b.__webglFramebuffer,O)}else if(at){b.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[_t]),b.__webglDepthbuffer[_t]===void 0)b.__webglDepthbuffer[_t]=s.createRenderbuffer(),Bt(b.__webglDepthbuffer[_t],O,!1);else{const Et=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=b.__webglDepthbuffer[_t];s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,mt)}}else{const _t=O.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Bt(b.__webglDepthbuffer,O,!1);else{const Et=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,mt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function on(O,b,at){const _t=r.get(O);b!==void 0&&Ut(_t.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),at!==void 0&&ge(O)}function H(O){const b=O.texture,at=r.get(O),_t=r.get(b);O.addEventListener("dispose",I);const Et=O.textures,mt=O.isWebGLCubeRenderTarget===!0,Kt=Et.length>1;if(Kt||(_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture()),_t.__version=b.version,f.memory.textures++),mt){at.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0){at.__webglFramebuffer[Ct]=[];for(let qt=0;qt<b.mipmaps.length;qt++)at.__webglFramebuffer[Ct][qt]=s.createFramebuffer()}else at.__webglFramebuffer[Ct]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){at.__webglFramebuffer=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)at.__webglFramebuffer[Ct]=s.createFramebuffer()}else at.__webglFramebuffer=s.createFramebuffer();if(Kt)for(let Ct=0,qt=Et.length;Ct<qt;Ct++){const Zt=r.get(Et[Ct]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),f.memory.textures++)}if(O.samples>0&&Wt(O)===!1){at.__webglMultisampledFramebuffer=s.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Et.length;Ct++){const qt=Et[Ct];at.__webglColorRenderbuffer[Ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,at.__webglColorRenderbuffer[Ct]);const Zt=u.convert(qt.format,qt.colorSpace),Tt=u.convert(qt.type),wt=N(qt.internalFormat,Zt,Tt,qt.colorSpace,O.isXRRenderTarget===!0),Qt=ke(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,wt,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,at.__webglColorRenderbuffer[Ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(at.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt(at.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(mt){i.bindTexture(s.TEXTURE_CUBE_MAP,_t.__webglTexture),J(s.TEXTURE_CUBE_MAP,b);for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let qt=0;qt<b.mipmaps.length;qt++)Ut(at.__webglFramebuffer[Ct][qt],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,qt);else Ut(at.__webglFramebuffer[Ct],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let Ct=0,qt=Et.length;Ct<qt;Ct++){const Zt=Et[Ct],Tt=r.get(Zt);let wt=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(wt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(wt,Tt.__webglTexture),J(wt,Zt),Ut(at.__webglFramebuffer,O,Zt,s.COLOR_ATTACHMENT0+Ct,wt,0),M(Zt)&&_(wt)}i.unbindTexture()}else{let Ct=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ct=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ct,_t.__webglTexture),J(Ct,b),b.mipmaps&&b.mipmaps.length>0)for(let qt=0;qt<b.mipmaps.length;qt++)Ut(at.__webglFramebuffer[qt],O,b,s.COLOR_ATTACHMENT0,Ct,qt);else Ut(at.__webglFramebuffer,O,b,s.COLOR_ATTACHMENT0,Ct,0);M(b)&&_(Ct),i.unbindTexture()}O.depthBuffer&&ge(O)}function Re(O){const b=O.textures;for(let at=0,_t=b.length;at<_t;at++){const Et=b[at];if(M(Et)){const mt=D(O),Kt=r.get(Et).__webglTexture;i.bindTexture(mt,Kt),_(mt),i.unbindTexture()}}}const ae=[],ee=[];function Yt(O){if(O.samples>0){if(Wt(O)===!1){const b=O.textures,at=O.width,_t=O.height;let Et=s.COLOR_BUFFER_BIT;const mt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Kt=r.get(O),Ct=b.length>1;if(Ct)for(let Zt=0;Zt<b.length;Zt++)i.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Zt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Zt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const qt=O.texture.mipmaps;qt&&qt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Zt=0;Zt<b.length;Zt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Et|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Et|=s.STENCIL_BUFFER_BIT)),Ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[Zt]);const Tt=r.get(b[Zt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,at,_t,0,0,at,_t,Et,s.NEAREST),m===!0&&(ae.length=0,ee.length=0,ae.push(s.COLOR_ATTACHMENT0+Zt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ae.push(mt),ee.push(mt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ct)for(let Zt=0;Zt<b.length;Zt++){i.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Zt,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[Zt]);const Tt=r.get(b[Zt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Zt,s.TEXTURE_2D,Tt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const b=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ke(O){return Math.min(l.maxSamples,O.samples)}function Wt(O){const b=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function oe(O){const b=f.render.frame;g.get(O)!==b&&(g.set(O,b),O.update())}function $e(O,b){const at=O.colorSpace,_t=O.format,Et=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||at!==ks&&at!==Qa&&(De.getTransfer(at)===He?(_t!==Ai||Et!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),b}function Je(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=Z,this.setTexture2D=lt,this.setTexture2DArray=P,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=on,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Wt}function WC(s,t){function i(r,l=Qa){let u;const f=De.getTransfer(l);if(r===Gi)return s.UNSIGNED_BYTE;if(r===_p)return s.UNSIGNED_SHORT_4_4_4_4;if(r===vp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===tx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ex)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Jv)return s.BYTE;if(r===$v)return s.SHORT;if(r===nl)return s.UNSIGNED_SHORT;if(r===gp)return s.INT;if(r===Lr)return s.UNSIGNED_INT;if(r===pa)return s.FLOAT;if(r===cl)return s.HALF_FLOAT;if(r===nx)return s.ALPHA;if(r===ix)return s.RGB;if(r===Ai)return s.RGBA;if(r===al)return s.DEPTH_COMPONENT;if(r===rl)return s.DEPTH_STENCIL;if(r===ax)return s.RED;if(r===xp)return s.RED_INTEGER;if(r===rx)return s.RG;if(r===yp)return s.RG_INTEGER;if(r===Sp)return s.RGBA_INTEGER;if(r===ec||r===nc||r===ic||r===ac)if(f===He)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===ec)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===ec)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ic)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ac)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dd||r===Ud||r===Ld||r===Nd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Dd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ud)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ld)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Od||r===Pd||r===zd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Od||r===Pd)return f===He?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===zd)return f===He?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Id||r===Bd||r===Fd||r===Hd||r===Gd||r===Vd||r===kd||r===Xd||r===Wd||r===Yd||r===jd||r===qd||r===Zd||r===Kd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Id)return f===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bd)return f===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fd)return f===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hd)return f===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gd)return f===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vd)return f===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kd)return f===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xd)return f===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wd)return f===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yd)return f===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jd)return f===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qd)return f===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zd)return f===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kd)return f===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qd||r===Jd||r===$d)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Qd)return f===He?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$d)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tp||r===ep||r===np||r===ip)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===tp)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ep)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===np)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ip)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===il?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const YC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Sx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new er({vertexShader:YC,fragmentShader:jC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new vc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZC extends Pr{constructor(t,i){super();const r=this;let l=null,u=1,f=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,S=null,E=null;const T=typeof XRWebGLBinding<"u",M=new qC,_={},D=i.getContextAttributes();let N=null,U=null;const B=[],G=[],I=new re;let q=null;const C=new Wn;C.viewport=new Ve;const w=new Wn;w.viewport=new Ve;const z=[C,w],Z=new pT;let rt=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let pt=B[ot];return pt===void 0&&(pt=new nd,B[ot]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(ot){let pt=B[ot];return pt===void 0&&(pt=new nd,B[ot]=pt),pt.getGripSpace()},this.getHand=function(ot){let pt=B[ot];return pt===void 0&&(pt=new nd,B[ot]=pt),pt.getHandSpace()};function lt(ot){const pt=G.indexOf(ot.inputSource);if(pt===-1)return;const Ut=B[pt];Ut!==void 0&&(Ut.update(ot.inputSource,ot.frame,p||f),Ut.dispatchEvent({type:ot.type,data:ot.inputSource}))}function P(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",X);for(let ot=0;ot<B.length;ot++){const pt=G[ot];pt!==null&&(G[ot]=null,B[ot].disconnect(pt))}rt=null,ht=null,M.reset();for(const ot in _)delete _[ot];t.setRenderTarget(N),S=null,x=null,v=null,l=null,U=null,Lt.stop(),r.isPresenting=!1,t.setPixelRatio(q),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){u=ot,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){d=ot,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ot){p=ot},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ot){if(l=ot,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",P),l.addEventListener("inputsourceschange",X),D.xrCompatible!==!0&&await i.makeXRCompatible(),q=t.getPixelRatio(),t.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,Bt=null,Xt=null;D.depth&&(Xt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ut=D.stencil?rl:al,Bt=D.stencil?il:Lr);const ge={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:u};v=this.getBinding(),x=v.createProjectionLayer(ge),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new Or(x.textureWidth,x.textureHeight,{format:Ai,type:Gi,depthTexture:new yx(x.textureWidth,x.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ut={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,Ut),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Or(S.framebufferWidth,S.framebufferHeight,{format:Ai,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Lt.setContext(l),Lt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function X(ot){for(let pt=0;pt<ot.removed.length;pt++){const Ut=ot.removed[pt],Bt=G.indexOf(Ut);Bt>=0&&(G[Bt]=null,B[Bt].disconnect(Ut))}for(let pt=0;pt<ot.added.length;pt++){const Ut=ot.added[pt];let Bt=G.indexOf(Ut);if(Bt===-1){for(let ge=0;ge<B.length;ge++)if(ge>=G.length){G.push(Ut),Bt=ge;break}else if(G[ge]===null){G[ge]=Ut,Bt=ge;break}if(Bt===-1)break}const Xt=B[Bt];Xt&&Xt.connect(Ut)}}const W=new j,tt=new j;function ct(ot,pt,Ut){W.setFromMatrixPosition(pt.matrixWorld),tt.setFromMatrixPosition(Ut.matrixWorld);const Bt=W.distanceTo(tt),Xt=pt.projectionMatrix.elements,ge=Ut.projectionMatrix.elements,on=Xt[14]/(Xt[10]-1),H=Xt[14]/(Xt[10]+1),Re=(Xt[9]+1)/Xt[5],ae=(Xt[9]-1)/Xt[5],ee=(Xt[8]-1)/Xt[0],Yt=(ge[8]+1)/ge[0],ke=on*ee,Wt=on*Yt,oe=Bt/(-ee+Yt),$e=oe*-ee;if(pt.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX($e),ot.translateZ(oe),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),Xt[10]===-1)ot.projectionMatrix.copy(pt.projectionMatrix),ot.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Je=on+oe,O=H+oe,b=ke-$e,at=Wt+(Bt-$e),_t=Re*H/O*Je,Et=ae*H/O*Je;ot.projectionMatrix.makePerspective(b,at,_t,Et,Je,O),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function L(ot,pt){pt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(pt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(l===null)return;let pt=ot.near,Ut=ot.far;M.texture!==null&&(M.depthNear>0&&(pt=M.depthNear),M.depthFar>0&&(Ut=M.depthFar)),Z.near=w.near=C.near=pt,Z.far=w.far=C.far=Ut,(rt!==Z.near||ht!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),rt=Z.near,ht=Z.far),Z.layers.mask=ot.layers.mask|6,C.layers.mask=Z.layers.mask&3,w.layers.mask=Z.layers.mask&5;const Bt=ot.parent,Xt=Z.cameras;L(Z,Bt);for(let ge=0;ge<Xt.length;ge++)L(Xt[ge],Bt);Xt.length===2?ct(Z,C,w):Z.projectionMatrix.copy(C.projectionMatrix),J(ot,Z,Bt)};function J(ot,pt,Ut){Ut===null?ot.matrix.copy(pt.matrixWorld):(ot.matrix.copy(Ut.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(pt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(pt.projectionMatrix),ot.projectionMatrixInverse.copy(pt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=sl*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(ot){m=ot,x!==null&&(x.fixedFoveation=ot),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ot)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function(ot){return _[ot]};let St=null;function Rt(ot,pt){if(g=pt.getViewerPose(p||f),E=pt,g!==null){const Ut=g.views;S!==null&&(t.setRenderTargetFramebuffer(U,S.framebuffer),t.setRenderTarget(U));let Bt=!1;Ut.length!==Z.cameras.length&&(Z.cameras.length=0,Bt=!0);for(let H=0;H<Ut.length;H++){const Re=Ut[H];let ae=null;if(S!==null)ae=S.getViewport(Re);else{const Yt=v.getViewSubImage(x,Re);ae=Yt.viewport,H===0&&(t.setRenderTargetTextures(U,Yt.colorTexture,Yt.depthStencilTexture),t.setRenderTarget(U))}let ee=z[H];ee===void 0&&(ee=new Wn,ee.layers.enable(H),ee.viewport=new Ve,z[H]=ee),ee.matrix.fromArray(Re.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Re.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ae.x,ae.y,ae.width,ae.height),H===0&&(Z.matrix.copy(ee.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Bt===!0&&Z.cameras.push(ee)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){v=r.getBinding();const H=v.getDepthInformation(Ut[0]);H&&H.isValid&&H.texture&&M.init(H,l.renderState)}if(Xt&&Xt.includes("camera-access")&&T){t.state.unbindTexture(),v=r.getBinding();for(let H=0;H<Ut.length;H++){const Re=Ut[H].camera;if(Re){let ae=_[Re];ae||(ae=new Sx,_[Re]=ae);const ee=v.getCameraImage(Re);ae.sourceTexture=ee}}}}for(let Ut=0;Ut<B.length;Ut++){const Bt=G[Ut],Xt=B[Ut];Bt!==null&&Xt!==void 0&&Xt.update(Bt,pt,p||f)}St&&St(ot,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),E=null}const Lt=new Ex;Lt.setAnimationLoop(Rt),this.setAnimationLoop=function(ot){St=ot},this.dispose=function(){}}}const Ar=new Vi,KC=new je;function QC(s,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,px(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,D,N,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),v(M,_)):_.isMeshPhongMaterial?(u(M,_),g(M,_)):_.isMeshStandardMaterial?(u(M,_),x(M,_),_.isMeshPhysicalMaterial&&S(M,_,U)):_.isMeshMatcapMaterial?(u(M,_),E(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),T(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(f(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,D,N):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Yn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Yn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const D=t.get(_),N=D.envMap,U=D.envMapRotation;N&&(M.envMap.value=N,Ar.copy(U),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),M.envMapRotation.value.setFromMatrix4(KC.makeRotationFromEuler(Ar)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function f(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,D,N){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*D,M.scale.value=N*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,D){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function T(M,_){const D=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function JC(s,t,i,r){let l={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,N){const U=N.program;r.uniformBlockBinding(D,U)}function p(D,N){let U=l[D.id];U===void 0&&(E(D),U=g(D),l[D.id]=U,D.addEventListener("dispose",M));const B=N.program;r.updateUBOMapping(D,B);const G=t.render.frame;u[D.id]!==G&&(x(D),u[D.id]=G)}function g(D){const N=v();D.__bindingPointIndex=N;const U=s.createBuffer(),B=D.__size,G=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,B,G),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,U),U}function v(){for(let D=0;D<d;D++)if(f.indexOf(D)===-1)return f.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const N=l[D.id],U=D.uniforms,B=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let G=0,I=U.length;G<I;G++){const q=Array.isArray(U[G])?U[G]:[U[G]];for(let C=0,w=q.length;C<w;C++){const z=q[C];if(S(z,G,C,B)===!0){const Z=z.__offset,rt=Array.isArray(z.value)?z.value:[z.value];let ht=0;for(let lt=0;lt<rt.length;lt++){const P=rt[lt],X=T(P);typeof P=="number"||typeof P=="boolean"?(z.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,Z+ht,z.__data)):P.isMatrix3?(z.__data[0]=P.elements[0],z.__data[1]=P.elements[1],z.__data[2]=P.elements[2],z.__data[3]=0,z.__data[4]=P.elements[3],z.__data[5]=P.elements[4],z.__data[6]=P.elements[5],z.__data[7]=0,z.__data[8]=P.elements[6],z.__data[9]=P.elements[7],z.__data[10]=P.elements[8],z.__data[11]=0):(P.toArray(z.__data,ht),ht+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,N,U,B){const G=D.value,I=N+"_"+U;if(B[I]===void 0)return typeof G=="number"||typeof G=="boolean"?B[I]=G:B[I]=G.clone(),!0;{const q=B[I];if(typeof G=="number"||typeof G=="boolean"){if(q!==G)return B[I]=G,!0}else if(q.equals(G)===!1)return q.copy(G),!0}return!1}function E(D){const N=D.uniforms;let U=0;const B=16;for(let I=0,q=N.length;I<q;I++){const C=Array.isArray(N[I])?N[I]:[N[I]];for(let w=0,z=C.length;w<z;w++){const Z=C[w],rt=Array.isArray(Z.value)?Z.value:[Z.value];for(let ht=0,lt=rt.length;ht<lt;ht++){const P=rt[ht],X=T(P),W=U%B,tt=W%X.boundary,ct=W+tt;U+=tt,ct!==0&&B-ct<X.storage&&(U+=B-ct),Z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=U,U+=X.storage}}}const G=U%B;return G>0&&(U+=B-G),D.__size=U,D.__cache={},this}function T(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),N}function M(D){const N=D.target;N.removeEventListener("dispose",M);const U=f.indexOf(N.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const D in l)s.deleteBuffer(l[D]);f=[],l={},u={}}return{bind:m,update:p,dispose:_}}class Cx{constructor(t={}){const{canvas:i=Cb(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),T=new Int32Array(4);let M=null,_=null;const D=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let B=!1;this._outputColorSpace=mi;let G=0,I=0,q=null,C=-1,w=null;const z=new Ve,Z=new Ve;let rt=null;const ht=new fe(0);let lt=0,P=i.width,X=i.height,W=1,tt=null,ct=null;const L=new Ve(0,0,P,X),J=new Ve(0,0,P,X);let St=!1;const Rt=new Tp;let Lt=!1,ot=!1;const pt=new je,Ut=new j,Bt=new Ve,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function on(){return q===null?W:1}let H=r;function Re(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mp}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",bt,!1),H===null){const Y="webgl2";if(H=Re(Y,R),H===null)throw Re(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ae,ee,Yt,ke,Wt,oe,$e,Je,O,b,at,_t,Et,mt,Kt,Ct,qt,Zt,Tt,wt,Qt,It,Nt,ue;function k(){ae=new uR(H),ae.init(),It=new WC(H,ae),ee=new nR(H,ae,t,It),Yt=new kC(H,ae),ee.reversedDepthBuffer&&x&&Yt.buffers.depth.setReversed(!0),ke=new hR(H),Wt=new DC,oe=new XC(H,ae,Yt,Wt,ee,It,ke),$e=new aR(U),Je=new lR(U),O=new vT(H),Nt=new tR(H,O),b=new cR(H,O,ke,Nt),at=new pR(H,b,O,ke),Tt=new dR(H,ee,oe),Ct=new iR(Wt),_t=new wC(U,$e,Je,ae,ee,Nt,Ct),Et=new QC(U,Wt),mt=new LC,Kt=new BC(ae),Zt=new $A(U,$e,Je,Yt,at,S,m),qt=new GC(U,at,ee),ue=new JC(H,ke,ee,Yt),wt=new eR(H,ae,ke),Qt=new fR(H,ae,ke),ke.programs=_t.programs,U.capabilities=ee,U.extensions=ae,U.properties=Wt,U.renderLists=mt,U.shadowMap=qt,U.state=Yt,U.info=ke}k();const At=new ZC(U,H);this.xr=At,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(P,X,!1))},this.getSize=function(R){return R.set(P,X)},this.setSize=function(R,Y,ut=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,X=Y,i.width=Math.floor(R*W),i.height=Math.floor(Y*W),ut===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(P*W,X*W).floor()},this.setDrawingBufferSize=function(R,Y,ut){P=R,X=Y,W=ut,i.width=Math.floor(R*ut),i.height=Math.floor(Y*ut),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(L)},this.setViewport=function(R,Y,ut,ft){R.isVector4?L.set(R.x,R.y,R.z,R.w):L.set(R,Y,ut,ft),Yt.viewport(z.copy(L).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(J)},this.setScissor=function(R,Y,ut,ft){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,Y,ut,ft),Yt.scissor(Z.copy(J).multiplyScalar(W).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){Yt.setScissorTest(St=R)},this.setOpaqueSort=function(R){tt=R},this.setTransparentSort=function(R){ct=R},this.getClearColor=function(R){return R.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ut=!0){let ft=0;if(R){let Q=!1;if(q!==null){const Mt=q.texture.format;Q=Mt===Sp||Mt===yp||Mt===xp}if(Q){const Mt=q.texture.type,Ot=Mt===Gi||Mt===Lr||Mt===nl||Mt===il||Mt===_p||Mt===vp,Vt=Zt.getClearColor(),zt=Zt.getClearAlpha(),Jt=Vt.r,ie=Vt.g,$t=Vt.b;Ot?(E[0]=Jt,E[1]=ie,E[2]=$t,E[3]=zt,H.clearBufferuiv(H.COLOR,0,E)):(T[0]=Jt,T[1]=ie,T[2]=$t,T[3]=zt,H.clearBufferiv(H.COLOR,0,T))}else ft|=H.COLOR_BUFFER_BIT}Y&&(ft|=H.DEPTH_BUFFER_BIT),ut&&(ft|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),Zt.dispose(),mt.dispose(),Kt.dispose(),Wt.dispose(),$e.dispose(),Je.dispose(),at.dispose(),Nt.dispose(),ue.dispose(),_t.dispose(),At.dispose(),At.removeEventListener("sessionstart",ri),At.removeEventListener("sessionend",Ks),Li.stop()};function Dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const R=ke.autoReset,Y=qt.enabled,ut=qt.autoUpdate,ft=qt.needsUpdate,Q=qt.type;k(),ke.autoReset=R,qt.enabled=Y,qt.autoUpdate=ut,qt.needsUpdate=ft,qt.type=Q}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function yt(R){const Y=R.target;Y.removeEventListener("dispose",yt),Ht(Y)}function Ht(R){se(R),Wt.remove(R)}function se(R){const Y=Wt.get(R).programs;Y!==void 0&&(Y.forEach(function(ut){_t.releaseProgram(ut)}),R.isShaderMaterial&&_t.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ut,ft,Q,Mt){Y===null&&(Y=Xt);const Ot=Q.isMesh&&Q.matrixWorld.determinant()<0,Vt=xa(R,Y,ut,ft,Q);Yt.setMaterial(ft,Ot);let zt=ut.index,Jt=1;if(ft.wireframe===!0){if(zt=b.getWireframeAttribute(ut),zt===void 0)return;Jt=2}const ie=ut.drawRange,$t=ut.attributes.position;let _e=ie.start*Jt,Le=(ie.start+ie.count)*Jt;Mt!==null&&(_e=Math.max(_e,Mt.start*Jt),Le=Math.min(Le,(Mt.start+Mt.count)*Jt)),zt!==null?(_e=Math.max(_e,0),Le=Math.min(Le,zt.count)):$t!=null&&(_e=Math.max(_e,0),Le=Math.min(Le,$t.count));const Xe=Le-_e;if(Xe<0||Xe===1/0)return;Nt.setup(Q,ft,Vt,ut,zt);let Ne,ve=wt;if(zt!==null&&(Ne=O.get(zt),ve=Qt,ve.setIndex(Ne)),Q.isMesh)ft.wireframe===!0?(Yt.setLineWidth(ft.wireframeLinewidth*on()),ve.setMode(H.LINES)):ve.setMode(H.TRIANGLES);else if(Q.isLine){let kt=ft.linewidth;kt===void 0&&(kt=1),Yt.setLineWidth(kt*on()),Q.isLineSegments?ve.setMode(H.LINES):Q.isLineLoop?ve.setMode(H.LINE_LOOP):ve.setMode(H.LINE_STRIP)}else Q.isPoints?ve.setMode(H.POINTS):Q.isSprite&&ve.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ol("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ve.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const kt=Q._multiDrawStarts,Ye=Q._multiDrawCounts,Ae=Q._multiDrawCount,En=zt?O.get(zt).bytesPerElement:1,ki=Wt.get(ft).currentProgram.getUniforms();for(let xn=0;xn<Ae;xn++)ki.setValue(H,"_gl_DrawID",xn),ve.render(kt[xn]/En,Ye[xn])}else if(Q.isInstancedMesh)ve.renderInstances(_e,Xe,Q.count);else if(ut.isInstancedBufferGeometry){const kt=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Ye=Math.min(ut.instanceCount,kt);ve.renderInstances(_e,Xe,Ye)}else ve.render(_e,Xe)};function Oe(R,Y,ut){R.transparent===!0&&R.side===da&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,qn(R,Y,ut),R.side=tr,R.needsUpdate=!0,qn(R,Y,ut),R.side=da):qn(R,Y,ut)}this.compile=function(R,Y,ut=null){ut===null&&(ut=R),_=Kt.get(ut),_.init(Y),N.push(_),ut.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),R!==ut&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),_.setupLights();const ft=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Mt=Q.material;if(Mt)if(Array.isArray(Mt))for(let Ot=0;Ot<Mt.length;Ot++){const Vt=Mt[Ot];Oe(Vt,ut,Q),ft.add(Vt)}else Oe(Mt,ut,Q),ft.add(Mt)}),_=N.pop(),ft},this.compileAsync=function(R,Y,ut=null){const ft=this.compile(R,Y,ut);return new Promise(Q=>{function Mt(){if(ft.forEach(function(Ot){Wt.get(Ot).currentProgram.isReady()&&ft.delete(Ot)}),ft.size===0){Q(R);return}setTimeout(Mt,10)}ae.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Te=null;function Nn(R){Te&&Te(R)}function ri(){Li.stop()}function Ks(){Li.start()}const Li=new Ex;Li.setAnimationLoop(Nn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(R){Te=R,At.setAnimationLoop(R),R===null?Li.stop():Li.start()},At.addEventListener("sessionstart",ri),At.addEventListener("sessionend",Ks),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(Y),Y=At.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,Y,q),_=Kt.get(R,N.length),_.init(Y),N.push(_),pt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Rt.setFromProjectionMatrix(pt,Hi,Y.reversedDepth),ot=this.localClippingEnabled,Lt=Ct.init(this.clippingPlanes,ot),M=mt.get(R,D.length),M.init(),D.push(M),At.enabled===!0&&At.isPresenting===!0){const Mt=U.xr.getDepthSensingMesh();Mt!==null&&Ir(Mt,Y,-1/0,U.sortObjects)}Ir(R,Y,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(tt,ct),ge=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,ge&&Zt.addToRenderList(M,R),this.info.render.frame++,Lt===!0&&Ct.beginShadows();const ut=_.state.shadowsArray;qt.render(ut,R,Y),Lt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=M.opaque,Q=M.transmissive;if(_.setupLights(),Y.isArrayCamera){const Mt=Y.cameras;if(Q.length>0)for(let Ot=0,Vt=Mt.length;Ot<Vt;Ot++){const zt=Mt[Ot];Fr(ft,Q,R,zt)}ge&&Zt.render(R);for(let Ot=0,Vt=Mt.length;Ot<Vt;Ot++){const zt=Mt[Ot];Br(M,R,zt,zt.viewport)}}else Q.length>0&&Fr(ft,Q,R,Y),ge&&Zt.render(R),Br(M,R,Y);q!==null&&I===0&&(oe.updateMultisampleRenderTarget(q),oe.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(U,R,Y),Nt.resetDefaultState(),C=-1,w=null,N.pop(),N.length>0?(_=N[N.length-1],Lt===!0&&Ct.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,D.pop(),D.length>0?M=D[D.length-1]:M=null};function Ir(R,Y,ut,ft){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ut=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Rt.intersectsSprite(R)){ft&&Bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pt);const Ot=at.update(R),Vt=R.material;Vt.visible&&M.push(R,Ot,Vt,ut,Bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Rt.intersectsObject(R))){const Ot=at.update(R),Vt=R.material;if(ft&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Bt.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Bt.copy(Ot.boundingSphere.center)),Bt.applyMatrix4(R.matrixWorld).applyMatrix4(pt)),Array.isArray(Vt)){const zt=Ot.groups;for(let Jt=0,ie=zt.length;Jt<ie;Jt++){const $t=zt[Jt],_e=Vt[$t.materialIndex];_e&&_e.visible&&M.push(R,Ot,_e,ut,Bt.z,$t)}}else Vt.visible&&M.push(R,Ot,Vt,ut,Bt.z,null)}}const Mt=R.children;for(let Ot=0,Vt=Mt.length;Ot<Vt;Ot++)Ir(Mt[Ot],Y,ut,ft)}function Br(R,Y,ut,ft){const Q=R.opaque,Mt=R.transmissive,Ot=R.transparent;_.setupLightsView(ut),Lt===!0&&Ct.setGlobalState(U.clippingPlanes,ut),ft&&Yt.viewport(z.copy(ft)),Q.length>0&&nr(Q,Y,ut),Mt.length>0&&nr(Mt,Y,ut),Ot.length>0&&nr(Ot,Y,ut),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Fr(R,Y,ut,ft){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ft.id]===void 0&&(_.state.transmissionRenderTarget[ft.id]=new Or(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?cl:Gi,minFilter:Ur,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Mt=_.state.transmissionRenderTarget[ft.id],Ot=ft.viewport||z;Mt.setSize(Ot.z*U.transmissionResolutionScale,Ot.w*U.transmissionResolutionScale);const Vt=U.getRenderTarget(),zt=U.getActiveCubeFace(),Jt=U.getActiveMipmapLevel();U.setRenderTarget(Mt),U.getClearColor(ht),lt=U.getClearAlpha(),lt<1&&U.setClearColor(16777215,.5),U.clear(),ge&&Zt.render(ut);const ie=U.toneMapping;U.toneMapping=$a;const $t=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),_.setupLightsView(ft),Lt===!0&&Ct.setGlobalState(U.clippingPlanes,ft),nr(R,ut,ft),oe.updateMultisampleRenderTarget(Mt),oe.updateRenderTargetMipmap(Mt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let Le=0,Xe=Y.length;Le<Xe;Le++){const Ne=Y[Le],ve=Ne.object,kt=Ne.geometry,Ye=Ne.material,Ae=Ne.group;if(Ye.side===da&&ve.layers.test(ft.layers)){const En=Ye.side;Ye.side=Yn,Ye.needsUpdate=!0,Qs(ve,ut,ft,kt,Ye,Ae),Ye.side=En,Ye.needsUpdate=!0,_e=!0}}_e===!0&&(oe.updateMultisampleRenderTarget(Mt),oe.updateRenderTargetMipmap(Mt))}U.setRenderTarget(Vt,zt,Jt),U.setClearColor(ht,lt),$t!==void 0&&(ft.viewport=$t),U.toneMapping=ie}function nr(R,Y,ut){const ft=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Mt=R.length;Q<Mt;Q++){const Ot=R[Q],Vt=Ot.object,zt=Ot.geometry,Jt=Ot.group;let ie=Ot.material;ie.allowOverride===!0&&ft!==null&&(ie=ft),Vt.layers.test(ut.layers)&&Qs(Vt,Y,ut,zt,ie,Jt)}}function Qs(R,Y,ut,ft,Q,Mt){R.onBeforeRender(U,Y,ut,ft,Q,Mt),R.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(U,Y,ut,ft,R,Mt),Q.transparent===!0&&Q.side===da&&Q.forceSinglePass===!1?(Q.side=Yn,Q.needsUpdate=!0,U.renderBufferDirect(ut,Y,ft,Q,R,Mt),Q.side=tr,Q.needsUpdate=!0,U.renderBufferDirect(ut,Y,ft,Q,R,Mt),Q.side=da):U.renderBufferDirect(ut,Y,ft,Q,R,Mt),R.onAfterRender(U,Y,ut,ft,Q,Mt)}function qn(R,Y,ut){Y.isScene!==!0&&(Y=Xt);const ft=Wt.get(R),Q=_.state.lights,Mt=_.state.shadowsArray,Ot=Q.state.version,Vt=_t.getParameters(R,Q.state,Mt,Y,ut),zt=_t.getProgramCacheKey(Vt);let Jt=ft.programs;ft.environment=R.isMeshStandardMaterial?Y.environment:null,ft.fog=Y.fog,ft.envMap=(R.isMeshStandardMaterial?Je:$e).get(R.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Jt===void 0&&(R.addEventListener("dispose",yt),Jt=new Map,ft.programs=Jt);let ie=Jt.get(zt);if(ie!==void 0){if(ft.currentProgram===ie&&ft.lightsStateVersion===Ot)return Mn(R,Vt),ie}else Vt.uniforms=_t.getUniforms(R),R.onBeforeCompile(Vt,U),ie=_t.acquireProgram(Vt,zt),Jt.set(zt,ie),ft.uniforms=Vt.uniforms;const $t=ft.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=Ct.uniform),Mn(R,Vt),ft.needsLights=yc(R),ft.lightsStateVersion=Ot,ft.needsLights&&($t.ambientLightColor.value=Q.state.ambient,$t.lightProbe.value=Q.state.probe,$t.directionalLights.value=Q.state.directional,$t.directionalLightShadows.value=Q.state.directionalShadow,$t.spotLights.value=Q.state.spot,$t.spotLightShadows.value=Q.state.spotShadow,$t.rectAreaLights.value=Q.state.rectArea,$t.ltc_1.value=Q.state.rectAreaLTC1,$t.ltc_2.value=Q.state.rectAreaLTC2,$t.pointLights.value=Q.state.point,$t.pointLightShadows.value=Q.state.pointShadow,$t.hemisphereLights.value=Q.state.hemi,$t.directionalShadowMap.value=Q.state.directionalShadowMap,$t.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$t.spotShadowMap.value=Q.state.spotShadowMap,$t.spotLightMatrix.value=Q.state.spotLightMatrix,$t.spotLightMap.value=Q.state.spotLightMap,$t.pointShadowMap.value=Q.state.pointShadowMap,$t.pointShadowMatrix.value=Q.state.pointShadowMatrix),ft.currentProgram=ie,ft.uniformsList=null,ie}function ln(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=rc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Mn(R,Y){const ut=Wt.get(R);ut.outputColorSpace=Y.outputColorSpace,ut.batching=Y.batching,ut.batchingColor=Y.batchingColor,ut.instancing=Y.instancing,ut.instancingColor=Y.instancingColor,ut.instancingMorph=Y.instancingMorph,ut.skinning=Y.skinning,ut.morphTargets=Y.morphTargets,ut.morphNormals=Y.morphNormals,ut.morphColors=Y.morphColors,ut.morphTargetsCount=Y.morphTargetsCount,ut.numClippingPlanes=Y.numClippingPlanes,ut.numIntersection=Y.numClipIntersection,ut.vertexAlphas=Y.vertexAlphas,ut.vertexTangents=Y.vertexTangents,ut.toneMapping=Y.toneMapping}function xa(R,Y,ut,ft,Q){Y.isScene!==!0&&(Y=Xt),oe.resetTextureUnits();const Mt=Y.fog,Ot=ft.isMeshStandardMaterial?Y.environment:null,Vt=q===null?U.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ks,zt=(ft.isMeshStandardMaterial?Je:$e).get(ft.envMap||Ot),Jt=ft.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,ie=!!ut.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),$t=!!ut.morphAttributes.position,_e=!!ut.morphAttributes.normal,Le=!!ut.morphAttributes.color;let Xe=$a;ft.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Xe=U.toneMapping);const Ne=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,ve=Ne!==void 0?Ne.length:0,kt=Wt.get(ft),Ye=_.state.lights;if(Lt===!0&&(ot===!0||R!==w)){const pn=R===w&&ft.id===C;Ct.setState(ft,R,pn)}let Ae=!1;ft.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ye.state.version||kt.outputColorSpace!==Vt||Q.isBatchedMesh&&kt.batching===!1||!Q.isBatchedMesh&&kt.batching===!0||Q.isBatchedMesh&&kt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&kt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&kt.instancing===!1||!Q.isInstancedMesh&&kt.instancing===!0||Q.isSkinnedMesh&&kt.skinning===!1||!Q.isSkinnedMesh&&kt.skinning===!0||Q.isInstancedMesh&&kt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&kt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&kt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&kt.instancingMorph===!1&&Q.morphTexture!==null||kt.envMap!==zt||ft.fog===!0&&kt.fog!==Mt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ct.numPlanes||kt.numIntersection!==Ct.numIntersection)||kt.vertexAlphas!==Jt||kt.vertexTangents!==ie||kt.morphTargets!==$t||kt.morphNormals!==_e||kt.morphColors!==Le||kt.toneMapping!==Xe||kt.morphTargetsCount!==ve)&&(Ae=!0):(Ae=!0,kt.__version=ft.version);let En=kt.currentProgram;Ae===!0&&(En=qn(ft,Y,Q));let ki=!1,xn=!1,ar=!1;const Se=En.getUniforms(),Cn=kt.uniforms;if(Yt.useProgram(En.program)&&(ki=!0,xn=!0,ar=!0),ft.id!==C&&(C=ft.id,xn=!0),ki||w!==R){Yt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Se.setValue(H,"projectionMatrix",R.projectionMatrix),Se.setValue(H,"viewMatrix",R.matrixWorldInverse);const an=Se.map.cameraPosition;an!==void 0&&an.setValue(H,Ut.setFromMatrixPosition(R.matrixWorld)),ee.logarithmicDepthBuffer&&Se.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&Se.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,xn=!0,ar=!0)}if(Q.isSkinnedMesh){Se.setOptional(H,Q,"bindMatrix"),Se.setOptional(H,Q,"bindMatrixInverse");const pn=Q.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Se.setValue(H,"boneTexture",pn.boneTexture,oe))}Q.isBatchedMesh&&(Se.setOptional(H,Q,"batchingTexture"),Se.setValue(H,"batchingTexture",Q._matricesTexture,oe),Se.setOptional(H,Q,"batchingIdTexture"),Se.setValue(H,"batchingIdTexture",Q._indirectTexture,oe),Se.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Se.setValue(H,"batchingColorTexture",Q._colorsTexture,oe));const On=ut.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Tt.update(Q,ut,En),(xn||kt.receiveShadow!==Q.receiveShadow)&&(kt.receiveShadow=Q.receiveShadow,Se.setValue(H,"receiveShadow",Q.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(Cn.envMap.value=zt,Cn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&Y.environment!==null&&(Cn.envMapIntensity.value=Y.environmentIntensity),xn&&(Se.setValue(H,"toneMappingExposure",U.toneMappingExposure),kt.needsLights&&Js(Cn,ar),Mt&&ft.fog===!0&&Et.refreshFogUniforms(Cn,Mt),Et.refreshMaterialUniforms(Cn,ft,W,X,_.state.transmissionRenderTarget[R.id]),rc.upload(H,ln(kt),Cn,oe)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(rc.upload(H,ln(kt),Cn,oe),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&Se.setValue(H,"center",Q.center),Se.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Se.setValue(H,"normalMatrix",Q.normalMatrix),Se.setValue(H,"modelMatrix",Q.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const pn=ft.uniformsGroups;for(let an=0,Hr=pn.length;an<Hr;an++){const Ni=pn[an];ue.update(Ni,En),ue.bind(Ni,En)}}return En}function Js(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function yc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,Y,ut){const ft=Wt.get(R);ft.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),Wt.get(R.texture).__webglTexture=Y,Wt.get(R.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:ut,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ut=Wt.get(R);ut.__webglFramebuffer=Y,ut.__useDefaultFramebuffer=Y===void 0};const Sc=H.createFramebuffer();this.setRenderTarget=function(R,Y=0,ut=0){q=R,G=Y,I=ut;let ft=!0,Q=null,Mt=!1,Ot=!1;if(R){const zt=Wt.get(R);if(zt.__useDefaultFramebuffer!==void 0)Yt.bindFramebuffer(H.FRAMEBUFFER,null),ft=!1;else if(zt.__webglFramebuffer===void 0)oe.setupRenderTarget(R);else if(zt.__hasExternalTextures)oe.rebindTextures(R,Wt.get(R.texture).__webglTexture,Wt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(zt.__boundDepthTexture!==$t){if($t!==null&&Wt.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(R)}}const Jt=R.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ot=!0);const ie=Wt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[Y])?Q=ie[Y][ut]:Q=ie[Y],Mt=!0):R.samples>0&&oe.useMultisampledRTT(R)===!1?Q=Wt.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?Q=ie[ut]:Q=ie,z.copy(R.viewport),Z.copy(R.scissor),rt=R.scissorTest}else z.copy(L).multiplyScalar(W).floor(),Z.copy(J).multiplyScalar(W).floor(),rt=St;if(ut!==0&&(Q=Sc),Yt.bindFramebuffer(H.FRAMEBUFFER,Q)&&ft&&Yt.drawBuffers(R,Q),Yt.viewport(z),Yt.scissor(Z),Yt.setScissorTest(rt),Mt){const zt=Wt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,zt.__webglTexture,ut)}else if(Ot){const zt=Y;for(let Jt=0;Jt<R.textures.length;Jt++){const ie=Wt.get(R.textures[Jt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Jt,ie.__webglTexture,ut,zt)}}else if(R!==null&&ut!==0){const zt=Wt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,zt.__webglTexture,ut)}C=-1},this.readRenderTargetPixels=function(R,Y,ut,ft,Q,Mt,Ot,Vt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt){Yt.bindFramebuffer(H.FRAMEBUFFER,zt);try{const Jt=R.textures[Vt],ie=Jt.format,$t=Jt.type;if(!ee.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ft&&ut>=0&&ut<=R.height-Q&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Vt),H.readPixels(Y,ut,ft,Q,It.convert(ie),It.convert($t),Mt))}finally{const Jt=q!==null?Wt.get(q).__webglFramebuffer:null;Yt.bindFramebuffer(H.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ut,ft,Q,Mt,Ot,Vt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt)if(Y>=0&&Y<=R.width-ft&&ut>=0&&ut<=R.height-Q){Yt.bindFramebuffer(H.FRAMEBUFFER,zt);const Jt=R.textures[Vt],ie=Jt.format,$t=Jt.type;if(!ee.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,_e),H.bufferData(H.PIXEL_PACK_BUFFER,Mt.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Vt),H.readPixels(Y,ut,ft,Q,It.convert(ie),It.convert($t),0);const Le=q!==null?Wt.get(q).__webglFramebuffer:null;Yt.bindFramebuffer(H.FRAMEBUFFER,Le);const Xe=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await wb(H,Xe,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,_e),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Mt),H.deleteBuffer(_e),H.deleteSync(Xe),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ut=0){const ft=Math.pow(2,-ut),Q=Math.floor(R.image.width*ft),Mt=Math.floor(R.image.height*ft),Ot=Y!==null?Y.x:0,Vt=Y!==null?Y.y:0;oe.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ut,0,0,Ot,Vt,Q,Mt),Yt.unbindTexture()};const ml=H.createFramebuffer(),ir=H.createFramebuffer();this.copyTextureToTexture=function(R,Y,ut=null,ft=null,Q=0,Mt=null){Mt===null&&(Q!==0?(ol("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=Q,Q=0):Mt=0);let Ot,Vt,zt,Jt,ie,$t,_e,Le,Xe;const Ne=R.isCompressedTexture?R.mipmaps[Mt]:R.image;if(ut!==null)Ot=ut.max.x-ut.min.x,Vt=ut.max.y-ut.min.y,zt=ut.isBox3?ut.max.z-ut.min.z:1,Jt=ut.min.x,ie=ut.min.y,$t=ut.isBox3?ut.min.z:0;else{const On=Math.pow(2,-Q);Ot=Math.floor(Ne.width*On),Vt=Math.floor(Ne.height*On),R.isDataArrayTexture?zt=Ne.depth:R.isData3DTexture?zt=Math.floor(Ne.depth*On):zt=1,Jt=0,ie=0,$t=0}ft!==null?(_e=ft.x,Le=ft.y,Xe=ft.z):(_e=0,Le=0,Xe=0);const ve=It.convert(Y.format),kt=It.convert(Y.type);let Ye;Y.isData3DTexture?(oe.setTexture3D(Y,0),Ye=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(oe.setTexture2DArray(Y,0),Ye=H.TEXTURE_2D_ARRAY):(oe.setTexture2D(Y,0),Ye=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ae=H.getParameter(H.UNPACK_ROW_LENGTH),En=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ki=H.getParameter(H.UNPACK_SKIP_PIXELS),xn=H.getParameter(H.UNPACK_SKIP_ROWS),ar=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ne.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ne.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Jt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ie),H.pixelStorei(H.UNPACK_SKIP_IMAGES,$t);const Se=R.isDataArrayTexture||R.isData3DTexture,Cn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const On=Wt.get(R),pn=Wt.get(Y),an=Wt.get(On.__renderTarget),Hr=Wt.get(pn.__renderTarget);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,an.__webglFramebuffer),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let Ni=0;Ni<zt;Ni++)Se&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Wt.get(R).__webglTexture,Q,$t+Ni),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Wt.get(Y).__webglTexture,Mt,Xe+Ni)),H.blitFramebuffer(Jt,ie,Ot,Vt,_e,Le,Ot,Vt,H.DEPTH_BUFFER_BIT,H.NEAREST);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Wt.has(R)){const On=Wt.get(R),pn=Wt.get(Y);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,ml),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,ir);for(let an=0;an<zt;an++)Se?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,On.__webglTexture,Q,$t+an):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,On.__webglTexture,Q),Cn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,Mt,Xe+an):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,Mt),Q!==0?H.blitFramebuffer(Jt,ie,Ot,Vt,_e,Le,Ot,Vt,H.COLOR_BUFFER_BIT,H.NEAREST):Cn?H.copyTexSubImage3D(Ye,Mt,_e,Le,Xe+an,Jt,ie,Ot,Vt):H.copyTexSubImage2D(Ye,Mt,_e,Le,Jt,ie,Ot,Vt);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Cn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Ye,Mt,_e,Le,Xe,Ot,Vt,zt,ve,kt,Ne.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Ye,Mt,_e,Le,Xe,Ot,Vt,zt,ve,Ne.data):H.texSubImage3D(Ye,Mt,_e,Le,Xe,Ot,Vt,zt,ve,kt,Ne):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Mt,_e,Le,Ot,Vt,ve,kt,Ne.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Mt,_e,Le,Ne.width,Ne.height,ve,Ne.data):H.texSubImage2D(H.TEXTURE_2D,Mt,_e,Le,Ot,Vt,ve,kt,Ne);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ae),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,En),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ki),H.pixelStorei(H.UNPACK_SKIP_ROWS,xn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ar),Mt===0&&Y.generateMipmaps&&H.generateMipmap(Ye),Yt.unbindTexture()},this.initRenderTarget=function(R){Wt.get(R).__webglFramebuffer===void 0&&oe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?oe.setTextureCube(R,0):R.isData3DTexture?oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?oe.setTexture2DArray(R,0):oe.setTexture2D(R,0),Yt.unbindTexture()},this.resetState=function(){G=0,I=0,q=null,Yt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const Lv={type:"change"},Cp={type:"start"},wx={type:"end"},Qu=new dl,Nv=new Ka,$C=Math.cos(70*Za.DEG2RAD),gn=new j,Xn=2*Math.PI,Ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dd=1e-6;class Dx extends gT{constructor(t,i=null){super(t,i),this.state=Ge.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:Ps.ROTATE,TWO:Ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Nr,this._lastTargetPosition=new j,this._quat=new Nr().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sv,this._sphericalDelta=new sv,this._scale=1,this._panOffset=new j,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new j,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ew.bind(this),this._onPointerDown=tw.bind(this),this._onPointerUp=nw.bind(this),this._onContextMenu=uw.bind(this),this._onMouseWheel=rw.bind(this),this._onKeyDown=sw.bind(this),this._onTouchStart=ow.bind(this),this._onTouchMove=lw.bind(this),this._onMouseDown=iw.bind(this),this._onMouseMove=aw.bind(this),this._interceptControlDown=cw.bind(this),this._interceptControlUp=fw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lv),this.update(),this.state=Ge.NONE}update(t=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Xn:r>Math.PI&&(r-=Xn),l<-Math.PI?l+=Xn:l>Math.PI&&(l-=Xn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=f!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=gn.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new j(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Qu.origin.copy(this.object.position),Qu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qu.direction))<$C?this.object.lookAt(this.target):(Nv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qu.intersectPlane(Nv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>dd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dd||this._lastTargetPosition.distanceToSquared(this.target)>dd?(this.dispatchEvent(Lv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xn/60*this.autoRotateSpeed*t:Xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let u=gn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/r.clientHeight,this.object.matrix),this._panUp(2*i*u/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,u=i-r.top,f=r.width,d=r.height;this._mouse.x=l/f*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(r*r+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),u=.5*(t.pageY+r.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new re,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function tw(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function ew(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function nw(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wx),this.state=Ge.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function iw(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ge.DOLLY;break;case Is.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ge.ROTATE}break;case Is.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ge.PAN}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(Cp)}function aw(s){switch(this.state){case Ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function rw(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ge.NONE||(s.preventDefault(),this.dispatchEvent(Cp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(wx))}function sw(s){this.enabled!==!1&&this._handleKeyDown(s)}function ow(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ge.TOUCH_ROTATE;break;case Ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ge.TOUCH_PAN;break;default:this.state=Ge.NONE}break;case 2:switch(this.touches.TWO){case Ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ge.TOUCH_DOLLY_PAN;break;case Ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ge.TOUCH_DOLLY_ROTATE;break;default:this.state=Ge.NONE}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(Cp)}function lw(s){switch(this._trackPointer(s),this.state){case Ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ge.NONE}}function uw(s){this.enabled!==!1&&s.preventDefault()}function cw(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fw(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hw({stars:s=[]}){const t=$.useRef(null),i=$.useRef(null),r=$.useRef(null),l=$.useRef(null),u=$.useRef(null),f=$.useRef(null),d=$.useRef([]),m=$.useRef(new mT),p=$.useRef(new re),g=mc(),[v,x]=$.useState(null),[S,E]=$.useState({x:0,y:0}),[T,M]=$.useState("mission"),[_,D]=$.useState("stellar_teff_k"),[N,U]=$.useState(["KEPLER","K2","TESS","0"]),[B,G]=$.useState({min:0,max:1}),[I,q]=$.useState({min:0,max:1}),C={KEPLER:new fe(2062260),K2:new fe(16744206),TESS:new fe(2924588),0:new fe(8947848),default:new fe(11184810)};$.useEffect(()=>{if(!s.length)return;const z=s.map(ht=>ht[_]).filter(ht=>typeof ht=="number"&&Number.isFinite(ht));if(!z.length)return;const Z=Math.min(...z),rt=Math.max(...z);G({min:Z,max:rt}),q({min:Z,max:rt})},[s,_]),$.useEffect(()=>{if(!t.current)return;const z=t.current,Z=window.innerWidth,rt=window.innerHeight,ht=new _x;ht.background=new fe(0);const lt=new Wn(75,Z/rt,.1,2e3);lt.position.set(0,0,5);const P=new Cx({antialias:!0});P.setSize(Z,rt),z.appendChild(P.domElement);const X=new Dx(lt,P.domElement);X.enableDamping=!0,X.dampingFactor=.05,X.target.set(0,0,0),X.update(),i.current=ht,r.current=lt,l.current=P,u.current=X;const W=()=>{requestAnimationFrame(W),u.current?.update(),l.current?.render(i.current,r.current)};W();const tt=()=>{if(!r.current||!l.current)return;const ct=window.innerWidth,L=window.innerHeight;r.current.aspect=ct/L,r.current.updateProjectionMatrix(),l.current.setSize(ct,L)};return window.addEventListener("resize",tt),()=>{window.removeEventListener("resize",tt),X.dispose(),P.dispose(),z.removeChild(P.domElement)}},[]),$.useEffect(()=>{if(!i.current||!s.length)return;const z=i.current;f.current&&(z.remove(f.current),f.current.geometry.dispose(),f.current.material.dispose(),f.current=null);const Z=s.filter(ct=>{if(T==="mission"){const J=ct.mission??"default";return N.includes(J)}const L=ct[_];return typeof L!="number"||!Number.isFinite(L)?!1:L>=I.min&&L<=I.max}),rt=new Float32Array(Z.length*3),ht=new Float32Array(Z.length*3),lt=50,P=[];Z.forEach((ct,L)=>{const J=(90-(ct.dec??0))*(Math.PI/180),St=(ct.ra??0)*(Math.PI/180),Rt=lt*Math.sin(J)*Math.cos(St),Lt=lt*Math.cos(J),ot=lt*Math.sin(J)*Math.sin(St);rt[L*3]=Rt,rt[L*3+1]=Lt,rt[L*3+2]=ot;let pt;if(T==="mission"){const Ut=ct.mission??"default";pt=C[Ut]??C.default}else{const Ut=ct[_]??B.min,Bt=B.max-B.min||1,Xt=Za.clamp((Ut-B.min)/Bt,0,1);pt=new fe().setHSL((1-Xt)*.6,1,.5)}ht[L*3]=pt.r,ht[L*3+1]=pt.g,ht[L*3+2]=pt.b,P.push(ct)}),d.current=P;const X=new ai;X.setAttribute("position",new gi(rt,3)),X.setAttribute("color",new gi(ht,3));const W=new Ap({size:.5,vertexColors:!0}),tt=new xx(X,W);z.add(tt),f.current=tt},[s,_,T,N,I,B]),$.useEffect(()=>{const z=ht=>{if(!r.current||!f.current)return null;const lt=p.current;lt.x=ht.clientX/window.innerWidth*2-1,lt.y=-(ht.clientY/window.innerHeight)*2+1,m.current.setFromCamera(lt,r.current);const P=m.current.intersectObject(f.current);if(P.length>0){const X=P[0].index??0;return d.current[X]??null}return null},Z=ht=>{E({x:ht.clientX,y:ht.clientY});const lt=z(ht);x(lt)},rt=ht=>{ht.preventDefault();const lt=z(ht)??v;if(!lt)return;const P=lt.target_id??lt.id??lt.name??lt.kepler_id??lt.tic_id;if(!P)return;const X=encodeURIComponent(String(P));g(`/star/${X}`,{state:{star:lt}})};return window.addEventListener("mousemove",Z),window.addEventListener("contextmenu",rt),()=>{window.removeEventListener("mousemove",Z),window.removeEventListener("contextmenu",rt)}},[v,g]);const w={KEPLER:"#1f77b4",K2:"#ff7f0e",TESS:"#2ca02c",0:"#888888"};return et.jsxs(et.Fragment,{children:[et.jsx("div",{ref:t,style:{width:"100vw",height:"100vh"}}),v&&et.jsx("div",{style:{position:"absolute",top:S.y+15,left:S.x+15,backgroundColor:"rgba(0,0,0,0.7)",color:"white",padding:"6px 10px",borderRadius:"4px",pointerEvents:"none",whiteSpace:"nowrap"},children:v.target_id||v.name||"Unknown"}),et.jsxs("div",{style:{position:"absolute",top:50,left:10,backgroundColor:"rgba(0,0,0,0.5)",color:"white",padding:"10px",borderRadius:"4px",maxWidth:"220px"},children:[et.jsxs("div",{children:["Color mode:",et.jsxs("select",{value:T,onChange:z=>M(z.target.value),children:[et.jsx("option",{value:"mission",children:"Mission"}),et.jsx("option",{value:"feature",children:"Feature"})]})]}),T==="feature"&&s[0]&&et.jsxs(et.Fragment,{children:[et.jsxs("div",{style:{marginTop:"8px"},children:["Feature:",et.jsx("select",{value:_,onChange:z=>D(z.target.value),children:Object.keys(s[0]).filter(z=>typeof s[0][z]=="number").map(z=>et.jsx("option",{value:z,children:z},z))})]}),et.jsxs("div",{style:{marginTop:"8px"},children:[et.jsx("input",{type:"range",min:B.min,max:B.max,step:(B.max-B.min)/100||.01,value:I.min,onChange:z=>q(Z=>({...Z,min:parseFloat(z.target.value)}))}),et.jsx("input",{type:"range",min:B.min,max:B.max,step:(B.max-B.min)/100||.01,value:I.max,onChange:z=>q(Z=>({...Z,max:parseFloat(z.target.value)}))}),et.jsxs("div",{style:{fontSize:"12px"},children:["Showing ",I.min.toFixed(2)," → ",I.max.toFixed(2)]}),et.jsx("div",{style:{width:"100%",height:"10px",marginTop:"4px",background:"linear-gradient(to right, hsl(240,100%,50%), hsl(0,100%,50%))"}})]})]}),T==="mission"&&et.jsx("div",{style:{marginTop:"8px"},children:Object.entries(w).map(([z,Z])=>et.jsxs("div",{onClick:()=>U(rt=>rt.includes(z)?rt.filter(ht=>ht!==z):[...rt,z]),style:{display:"flex",alignItems:"center",fontSize:"12px",marginBottom:"4px",cursor:"pointer",opacity:N.includes(z)?1:.4},children:[et.jsx("div",{style:{width:"12px",height:"12px",backgroundColor:Z,marginRight:"6px"}}),z]},z))})]})]})}function dw({stars:s}){return et.jsx("div",{style:{height:"100%",width:"100%"},children:et.jsx(hw,{stars:s})})}function pw({stars:s,setStars:t}){const[i,r]=$.useState(null),[l,u]=$.useState(""),[f,d]=$.useState({id:"",ra:"",dec:"",name:"",status:"",features:""}),[m,p]=$.useState(""),[g,v]=$.useState(!1),[x,S]=$.useState(!1),E=$.useMemo(()=>"Comma-separated, e.g. 0.12, 4.5, -3.2",[]),T=async()=>{if(!(!i||g)){v(!0),u("Uploading CSV...");try{const _=await yE(i);u(`Added ${_.added} stars.`);const D=await gd();t(D),r(null)}catch(_){console.error(_),u(`Upload failed: ${_.message??_}`)}finally{v(!1)}}},M=async()=>{if(!f.id){p("Please provide an ID (target name) for the star.");return}S(!0),p("Saving star...");try{const _=f.features?f.features.split(",").map(U=>{const B=parseFloat(U.trim());return Number.isFinite(B)?B:0}):void 0,D={id:String(f.id),ra:parseFloat(f.ra)||0,dec:parseFloat(f.dec)||0,name:f.name||void 0,status:f.status||void 0,features:_};await SE(D),p("Star saved successfully."),d({id:"",ra:"",dec:"",name:"",status:"",features:""});const N=await gd();t(N)}catch(_){console.error(_),p(`Save failed: ${_.message??_}`)}finally{S(!1)}};return et.jsxs("div",{style:{padding:24,color:"#f5f8ff",minHeight:"calc(100vh - 60px)",background:"linear-gradient(140deg, rgba(6,9,30,0.95) 0%, rgba(10,14,38,0.98) 100%)"},children:[et.jsx("h2",{style:{marginBottom:"16px"},children:"Dataset Management"}),et.jsxs("section",{style:{background:"rgba(12,16,34,0.85)",borderRadius:"12px",padding:"20px",marginBottom:"24px",border:"1px solid rgba(120,140,220,0.2)"},children:[et.jsx("h3",{style:{marginTop:0,marginBottom:"12px"},children:"Bulk CSV Upload"}),et.jsx("p",{style:{marginTop:0,color:"#9db5ff"},children:"Upload mission catalogs or custom detections as CSV and they will be merged into the starfield."}),et.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[et.jsx("input",{type:"file",accept:".csv",onChange:_=>r(_.target.files?.[0]??null),style:{color:"#fff"}}),et.jsx("button",{type:"button",onClick:T,disabled:!i||g,style:{padding:"8px 16px",background:"#3b82f6",border:"none",borderRadius:"6px",color:"white",cursor:!i||g?"not-allowed":"pointer",opacity:!i||g?.6:1},children:g?"Uploading...":"Upload"})]}),l&&et.jsx("p",{style:{marginTop:"12px",color:"#9fffc3"},children:l})]}),et.jsxs("section",{style:{background:"rgba(12,16,34,0.85)",borderRadius:"12px",padding:"20px",border:"1px solid rgba(120,140,220,0.2)"},children:[et.jsx("h3",{style:{marginTop:0,marginBottom:"12px"},children:"Quick Add via JSON API"}),et.jsxs("p",{style:{marginTop:0,color:"#9db5ff"},children:["Use the backend's ",et.jsx("code",{children:"/upload_json"})," endpoint to register a single star with optional model features."]}),et.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"12px"},children:[et.jsxs("label",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[et.jsx("span",{children:"Identifier *"}),et.jsx("input",{type:"text",value:f.id,onChange:_=>d(D=>({...D,id:_.target.value})),placeholder:"e.g. KIC-8478994",style:{padding:"8px",borderRadius:"6px",border:"1px solid rgba(120,140,220,0.35)"}})]}),et.jsxs("label",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[et.jsx("span",{children:"Right Ascension (deg)"}),et.jsx("input",{type:"number",value:f.ra,onChange:_=>d(D=>({...D,ra:_.target.value})),placeholder:"e.g. 289.123",style:{padding:"8px",borderRadius:"6px",border:"1px solid rgba(120,140,220,0.35)"}})]}),et.jsxs("label",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[et.jsx("span",{children:"Declination (deg)"}),et.jsx("input",{type:"number",value:f.dec,onChange:_=>d(D=>({...D,dec:_.target.value})),placeholder:"e.g. 42.77",style:{padding:"8px",borderRadius:"6px",border:"1px solid rgba(120,140,220,0.35)"}})]}),et.jsxs("label",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[et.jsx("span",{children:"Display Name"}),et.jsx("input",{type:"text",value:f.name,onChange:_=>d(D=>({...D,name:_.target.value})),placeholder:"Optional descriptive name",style:{padding:"8px",borderRadius:"6px",border:"1px solid rgba(120,140,220,0.35)"}})]}),et.jsxs("label",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[et.jsx("span",{children:"Status / Disposition"}),et.jsx("input",{type:"text",value:f.status,onChange:_=>d(D=>({...D,status:_.target.value})),placeholder:"e.g. Candidate",style:{padding:"8px",borderRadius:"6px",border:"1px solid rgba(120,140,220,0.35)"}})]}),et.jsxs("label",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[et.jsx("span",{children:"Model Features"}),et.jsx("textarea",{value:f.features,onChange:_=>d(D=>({...D,features:_.target.value})),placeholder:E,rows:3,style:{padding:"8px",borderRadius:"6px",border:"1px solid rgba(120,140,220,0.35)"}})]})]}),et.jsx("button",{type:"button",onClick:M,disabled:x,style:{marginTop:"16px",padding:"8px 16px",background:"#22c55e",border:"none",borderRadius:"6px",color:"white",cursor:x?"not-allowed":"pointer",opacity:x?.6:1},children:x?"Saving...":"Add Star"}),m&&et.jsx("p",{style:{marginTop:"12px",color:m.startsWith("Save failed")?"#ff8080":"#9fffc3"},children:m})]}),et.jsxs("section",{style:{marginTop:"28px",color:"#9db5ff"},children:[et.jsx("h4",{style:{marginBottom:"8px"},children:"Current catalog size"}),et.jsxs("p",{style:{margin:0},children:[s.length.toLocaleString()," stars available in the visualization."]})]})]})}const Ov=[7196662,16752762,13148872,9498256,16766720,11119017],Ux=["period_days","transit_duration_hours","depth_ppm","planet_radius_re","stellar_radius_rs","stellar_teff_k","stellar_logg","snr","ra","dec","mission_code","disposition_code","source_code"],nn=s=>{const t=typeof s=="number"?s:parseFloat(s??"");return Number.isFinite(t)?t:0},mw=s=>{const t=String(s??"").toUpperCase();return t.includes("KEPLER")?1:t.startsWith("K2")?2:t.includes("TESS")?3:t.includes("UNKNOWN")?-1:t.includes("MISSION")?4:0},gw=s=>{const t=String(s??"").toLowerCase();return t?t.includes("confirmed")?3:t.includes("candidate")?2:t.includes("false")||t.includes("bogus")?-1:t.includes("validated")?4:1:0},_w=s=>{const t=String(s??"").toLowerCase();return t.includes("kepler")?1:t.includes("pscomp")?2:t.includes("toi")||t.includes("tess")?3:t?4:0},Os=s=>s==null?null:String(s),vw=s=>s==null?"star":String(s).replace(/[^a-z0-9-_]/gi,"_"),Ju=(s,t)=>!s||!t?!1:[s.target_id,s.id,s.name,s.kepler_id,s.tic_id].map(Os).filter(Boolean).some(r=>r===t),xw=s=>s?[nn(s.period_days),nn(s.transit_duration_hours),nn(s.depth_ppm),nn(s.planet_radius_re),nn(s.stellar_radius_rs),nn(s.stellar_teff_k),nn(s.stellar_logg),nn(s.snr),nn(s.ra),nn(s.dec),mw(s.mission),gw(s.disposition??s.status),_w(s.source)]:new Array(Ux.length).fill(0);function yw({star:s}){const t=$.useRef(null);return $.useEffect(()=>{if(!t.current||!s)return;const i=t.current,r=i.clientWidth||window.innerWidth*.6,l=i.clientHeight||window.innerHeight*.6,u=new _x;u.background=new fe(197905);const f=new Wn(55,r/l,.1,500);f.position.set(0,12,28);const d=new Cx({antialias:!0,alpha:!0});d.setPixelRatio(window.devicePixelRatio),d.setSize(r,l),i.innerHTML="",i.appendChild(d.domElement);const m=new Dx(f,d.domElement);m.enableDamping=!0,m.autoRotate=!1,u.add(new dT(16777215,.3));const p=new fT(16777215,1.4,200);u.add(p);const g=s.stellar_radius_rs??s.stellar_radius??1,v=Za.clamp(g/5||1.2,.5,3.5),x=new dc(v,64,64),S=new tv({emissive:new fe(16774325),emissiveIntensity:1.5,color:16765567,metalness:.1,roughness:.4}),E=new Ri(x,S);u.add(E);const T=(()=>{const C=Math.abs(s.period_days)||0,w=Math.abs(s.snr)||0;return C&&w?Za.clamp(Math.round(w/20+Math.log10(C+1)),1,6):C?Za.clamp(Math.round(Math.log10(C+1)*2),1,5):w?Za.clamp(Math.round(w/15)||1,1,5):3})(),M=[],_=[];for(let C=0;C<T;C+=1){const w=v+2.5+C*2.2,z=Za.clamp((s.planet_radius_re||1)/5,.3,1.2)*(.7+Math.random()*.6),Z=Ov[C%Ov.length],rt=new Qo,ht=new dc(z,42,42),lt=new tv({color:Z,metalness:.2,roughness:.6}),P=new Ri(ht,lt);P.position.x=w,rt.add(P);const W=new sT(0,0,w,w*(.85+Math.random()*.1)).getPoints(128).map(J=>new j(J.x,0,J.y)),tt=new ai().setFromPoints(W),ct=new vx({color:3356747}),L=new aT(tt,ct);rt.add(L),rt.rotation.x=Za.degToRad(5+Math.random()*25),rt.rotation.y=Math.random()*Math.PI,u.add(rt),_.push({group:rt,speed:.003+C*.0015}),M.push(P)}const D=new ai,N=[];for(let C=0;C<800;C+=1){const w=Math.random()*Math.PI*2,z=120+Math.random()*80,Z=(Math.random()-.5)*140;N.push(Math.cos(w)*z,Z,Math.sin(w)*z)}D.setAttribute("position",new _i(N,3));const U=new Ap({color:16777215,size:.6,transparent:!0,opacity:.7}),B=new xx(D,U);u.add(B);let G;const I=()=>{G=requestAnimationFrame(I),E.rotation.y+=.0015,_.forEach(({group:C,speed:w})=>{C.rotation.y+=w}),m.update(),d.render(u,f)};I();const q=()=>{if(!t.current)return;const C=i.clientWidth||window.innerWidth*.6,w=i.clientHeight||window.innerHeight*.6;f.aspect=C/w,f.updateProjectionMatrix(),d.setSize(C,w)};return window.addEventListener("resize",q),()=>{cancelAnimationFrame(G),window.removeEventListener("resize",q),m.dispose(),d.dispose(),x.dispose(),M.forEach(C=>{C.geometry.dispose(),C.material.dispose()}),B.geometry.dispose(),B.material.dispose(),i.innerHTML=""}},[s]),et.jsx("div",{ref:t,style:{width:"100%",height:"100%"}})}function Sw({stars:s=[]}){const{id:t}=bM(),i=va(),r=mc(),l=decodeURIComponent(t??""),u=i.state?.star,[f,d]=$.useState(()=>u&&Ju(u,l)?u:s.find(ct=>Ju(ct,l))??null),[m,p]=$.useState(!f),[g,v]=$.useState(null),[x,S]=$.useState(null),[E,T]=$.useState(!1),[M,_]=$.useState(null),[D,N]=$.useState(null),[U,B]=$.useState(!1),[G,I]=$.useState(null);$.useEffect(()=>{let tt=!1;return(async()=>{if(u&&Ju(u,l)){d(u),p(!1),v(null);return}const L=s.find(J=>Ju(J,l));if(L){d(L),p(!1),v(null);return}if(!l){v("Missing star identifier"),p(!1);return}p(!0);try{const J=await xE(l);if(tt)return;J&&!J.error?(d(J),v(null)):v(J?.error||"Star not found")}catch(J){tt||v(J?.message||"Failed to load star data")}finally{tt||p(!1)}})(),()=>{tt=!0}},[l,s,u]),$.useEffect(()=>{S(null),_(null),T(!1),N(null),I(null),B(!1)},[l]);const q=$.useMemo(()=>f?Object.entries(f).sort(([tt],[ct])=>tt.localeCompare(ct)):[],[f]),{featureVector:C,featureSummary:w}=$.useMemo(()=>{const tt=xw(f),ct=Ux.map((L,J)=>{let St;switch(L){case"mission_code":St=f?.mission??"Unknown";break;case"disposition_code":St=f?.disposition??f?.status??"Unknown";break;case"source_code":St=f?.source??"Unknown";break;default:St=f?.[L]}return{key:L,value:tt[J]??0,original:St}});return{featureVector:tt,featureSummary:ct}},[f]),z=$.useMemo(()=>Os(f?.target_id)||Os(f?.id)||Os(l)||Os(f?.name),[f,l]),Z=$.useMemo(()=>f?{id:z||Os(l)||`star-${Date.now()}`,period_days:nn(f.period_days),transit_duration_hours:nn(f.transit_duration_hours),depth_ppm:nn(f.depth_ppm),planet_radius_re:nn(f.planet_radius_re),stellar_radius_rs:nn(f.stellar_radius_rs),stellar_teff_k:nn(f.stellar_teff_k),stellar_logg:nn(f.stellar_logg),snr:nn(f.snr),ra:nn(f.ra),dec:nn(f.dec),insolation_flux:nn(f.insolation_flux??f.flux??0),equilibrium_temp_k:nn(f.equilibrium_temp_k??f.stellar_teff_k??0),mission:f.mission??void 0,source:f.source??void 0,status:f.disposition??f.status??void 0,classification_features:C}:null,[f,z,l,C]),rt=tt=>tt==null||tt===""?"—":Array.isArray(tt)?tt.join(", "):typeof tt=="object"?JSON.stringify(tt,null,0):String(tt),ht=$.useMemo(()=>{if(x?.shap_image){const ct=x.shap_image;return ct.startsWith("http")?ct:`${Ti}${ct}`}if(!z)return null;const tt=encodeURIComponent(String(z));return`${Ti}/shap/${tt}.png`},[x,z]),lt=$.useMemo(()=>{if(D?.shap_image){const ct=D.shap_image;return ct.startsWith("http")?ct:`${Ti}${ct}`}if(!Z?.id)return null;const tt=vw(Z.id);return`${Ti}/shap/habitability/${tt}_habitability.png`},[D,Z]),P=$.useMemo(()=>D?.engineered_features?Object.entries(D.engineered_features).sort(([tt],[ct])=>tt.localeCompare(ct)):[],[D]),X=async()=>{if(!(!f||E)){T(!0),_(null);try{const tt=z||`star-${Date.now()}`,ct=f.name??f.target_id??tt,L={id:tt,ra:typeof f.ra=="number"?f.ra:parseFloat(f.ra)||0,dec:typeof f.dec=="number"?f.dec:parseFloat(f.dec)||0,name:ct==null?String(tt):String(ct),status:f.disposition||f.status||void 0,features:C},J=await ME(L);S(J),_(null)}catch(tt){S(null),_(tt?.message||"Classification failed")}finally{T(!1)}}},W=async()=>{if(!(!Z||U)){B(!0),I(null);try{const tt=await EE(Z);N(tt),I(null)}catch(tt){N(null),I(tt?.message||"Habitability prediction failed")}finally{B(!1)}}};return m?et.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"calc(100vh - 60px)",color:"#f0f4ff",background:"radial-gradient(circle at top, #121a3b, #05060f)"},children:"Loading star system..."}):g?et.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"12px",height:"calc(100vh - 60px)",color:"#ff6b6b",background:"radial-gradient(circle at top, #121a3b, #05060f)"},children:[et.jsx("h2",{style:{margin:0},children:"We couldn't find that star."}),et.jsx("p",{style:{margin:0,color:"#f0f4ff"},children:g})]}):f?et.jsxs("div",{style:{display:"flex",flexDirection:"row",height:"calc(100vh - 60px)",background:"linear-gradient(135deg, rgba(4,6,20,0.95) 0%, rgba(10,12,28,0.98) 100%)",color:"#f2f6ff"},children:[et.jsxs("div",{style:{flex:"1 1 60%",position:"relative"},children:[et.jsx("button",{type:"button",onClick:()=>{window.history.length>1?r(-1):r("/")},style:{position:"absolute",top:20,right:20,zIndex:3,background:"rgba(0,0,0,0.55)",color:"#f2f6ff",border:"1px solid rgba(157,181,255,0.4)",padding:"8px 14px",borderRadius:"999px",cursor:"pointer",fontSize:"13px",letterSpacing:"0.04em",textTransform:"uppercase",backdropFilter:"blur(4px)"},children:"← Back"}),et.jsxs("div",{style:{position:"absolute",top:20,left:20,zIndex:2,background:"rgba(0,0,0,0.45)",padding:"12px 18px",borderRadius:"10px",backdropFilter:"blur(4px)"},children:[et.jsx("h1",{style:{margin:0,fontSize:"24px"},children:f.name||f.target_id||"Unnamed Star"}),et.jsxs("p",{style:{margin:"4px 0 0",fontSize:"14px",color:"#9db5ff"},children:["Mission: ",f.mission||"Unknown"]})]}),et.jsx(yw,{star:f})]}),et.jsxs("div",{style:{flex:"1 1 40%",padding:"24px 28px",overflowY:"auto",background:"rgba(3,5,20,0.8)",boxShadow:"-12px 0 24px rgba(0,0,0,0.35)"},children:[et.jsxs("section",{style:{marginBottom:"24px"},children:[et.jsx("h2",{style:{marginBottom:"12px",fontSize:"20px"},children:"AI Classification"}),et.jsxs("p",{style:{marginTop:0,marginBottom:"12px",color:"#9db5ff"},children:["Send this star's key metrics to the FastAPI ",et.jsx("code",{children:"/classify"})," endpoint and fetch a fresh model prediction together with an updated SHAP explanation plot."]}),et.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[et.jsx("button",{type:"button",onClick:X,disabled:E,style:{padding:"8px 18px",background:"#3b82f6",border:"none",borderRadius:"8px",color:"white",cursor:E?"not-allowed":"pointer",opacity:E?.7:1,fontWeight:600,letterSpacing:"0.02em"},children:E?"Classifying...":"Run Classification"}),x&&et.jsxs("div",{style:{padding:"8px 14px",borderRadius:"8px",background:"rgba(25,35,70,0.75)",border:"1px solid rgba(80,110,200,0.3)",color:"#9fffc3",fontSize:"14px"},children:["Model prediction code: ",et.jsx("strong",{children:x.prediction})]})]}),M&&et.jsx("p",{style:{marginTop:"12px",color:"#ff7878"},children:M}),et.jsxs("div",{style:{marginTop:"16px"},children:[et.jsx("h4",{style:{margin:0,marginBottom:"8px",fontSize:"14px",color:"#9db5ff"},children:"Feature vector sent to the model"}),et.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px",border:"1px solid rgba(80,110,200,0.2)",borderRadius:"8px",overflow:"hidden"},children:[et.jsx("thead",{style:{background:"rgba(16,22,46,0.85)",color:"#9db5ff"},children:et.jsxs("tr",{children:[et.jsx("th",{style:{textAlign:"left",padding:"6px 8px"},children:"Feature"}),et.jsx("th",{style:{textAlign:"right",padding:"6px 8px"},children:"Value"}),et.jsx("th",{style:{textAlign:"right",padding:"6px 8px"},children:"Raw"})]})}),et.jsx("tbody",{children:w.map(({key:tt,value:ct,original:L})=>et.jsxs("tr",{style:{background:"rgba(12,16,34,0.6)"},children:[et.jsx("td",{style:{padding:"6px 8px",textTransform:"uppercase",letterSpacing:"0.04em"},children:tt}),et.jsx("td",{style:{padding:"6px 8px",textAlign:"right",color:"#f5f8ff"},children:Number.isFinite(ct)?ct.toLocaleString(void 0,{maximumFractionDigits:3}):ct}),et.jsx("td",{style:{padding:"6px 8px",textAlign:"right",color:"#9db5ff"},children:L==null||L===""?"—":Number.isFinite(L)?L.toLocaleString(void 0,{maximumFractionDigits:3}):String(L)})]},tt))})]})]})]}),et.jsxs("section",{style:{marginBottom:"24px"},children:[et.jsx("h2",{style:{marginBottom:"12px",fontSize:"20px"},children:"Habitability Analysis"}),et.jsx("p",{style:{marginTop:0,marginBottom:"12px",color:"#9db5ff"},children:"Evaluate this star system with the habitability meta-model, returning an overall score and explanation of the driving engineered features."}),et.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[et.jsx("button",{type:"button",onClick:W,disabled:U||!Z,style:{padding:"8px 18px",background:"#22c55e",border:"none",borderRadius:"8px",color:"white",cursor:U?"not-allowed":"pointer",opacity:U?.7:1,fontWeight:600,letterSpacing:"0.02em"},children:U?"Evaluating...":"Run Habitability"}),D&&et.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",padding:"10px 14px",borderRadius:"8px",background:"rgba(24,46,36,0.75)",border:"1px solid rgba(88,196,133,0.35)"},children:[et.jsxs("span",{style:{color:"#d1fae5",fontSize:"14px"},children:["Label: ",et.jsx("strong",{children:D.label})]}),et.jsxs("span",{style:{color:"#bef264",fontSize:"14px"},children:["Score: ",et.jsxs("strong",{children:[(D.score*100).toFixed(2),"%"]})]})]})]}),G&&et.jsx("p",{style:{marginTop:"12px",color:"#ff7878"},children:G}),P.length>0&&et.jsxs("div",{style:{marginTop:"16px"},children:[et.jsx("h4",{style:{margin:0,marginBottom:"8px",fontSize:"14px",color:"#9db5ff"},children:"Engineered features supplied to the habitability model"}),et.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px",border:"1px solid rgba(70,150,120,0.25)",borderRadius:"8px",overflow:"hidden"},children:[et.jsx("thead",{style:{background:"rgba(20,42,32,0.9)",color:"#9db5ff"},children:et.jsxs("tr",{children:[et.jsx("th",{style:{textAlign:"left",padding:"6px 8px"},children:"Feature"}),et.jsx("th",{style:{textAlign:"right",padding:"6px 8px"},children:"Value"})]})}),et.jsx("tbody",{children:P.map(([tt,ct])=>et.jsxs("tr",{style:{background:"rgba(12,22,18,0.65)"},children:[et.jsx("td",{style:{padding:"6px 8px",textTransform:"uppercase",letterSpacing:"0.04em",color:"#86efac"},children:tt}),et.jsx("td",{style:{padding:"6px 8px",textAlign:"right",color:"#f5f8ff"},children:Number.isFinite(ct)?ct.toLocaleString(void 0,{maximumFractionDigits:4}):ct})]},tt))})]})]}),lt&&et.jsxs("div",{style:{marginTop:"16px",borderRadius:"12px",overflow:"hidden",border:"1px solid rgba(70,150,120,0.35)",background:"rgba(12,22,18,0.65)"},children:[et.jsx("img",{src:lt,alt:`Habitability SHAP explanation for ${z}`,style:{width:"100%",display:"block"},onError:tt=>{tt.currentTarget.style.display="none"}}),et.jsx("p",{style:{padding:"12px",margin:0,color:"#86efac",fontSize:"12px"},children:"Habitability explainability plot generated for this request (if available)."})]})]}),et.jsxs("section",{style:{marginBottom:"24px"},children:[et.jsx("h2",{style:{marginBottom:"12px",fontSize:"20px"},children:"System Snapshot"}),et.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:"12px"},children:[{label:"Right Ascension",value:f.ra,unit:"°"},{label:"Declination",value:f.dec,unit:"°"},{label:"Orbital Period",value:f.period_days,unit:"days"},{label:"Transit Duration",value:f.transit_duration_hours,unit:"hours"},{label:"Planet Radius",value:f.planet_radius_re,unit:"R⊕"},{label:"Stellar Radius",value:f.stellar_radius_rs,unit:"R☉"},{label:"Stellar Teff",value:f.stellar_teff_k,unit:"K"},{label:"Log g",value:f.stellar_logg},{label:"Signal-to-Noise",value:f.snr},{label:"Depth",value:f.depth_ppm,unit:"ppm"},{label:"Disposition",value:f.disposition},{label:"Catalog",value:f.source}].map(({label:tt,value:ct,unit:L})=>et.jsxs("div",{style:{padding:"12px",borderRadius:"8px",background:"rgba(16,22,46,0.85)",border:"1px solid rgba(80,110,200,0.25)"},children:[et.jsx("p",{style:{margin:0,fontSize:"12px",color:"#9db5ff"},children:tt}),et.jsx("p",{style:{margin:"4px 0 0",fontSize:"16px"},children:ct!=null&&ct!==""?`${typeof ct=="number"&&Number.isFinite(ct)?ct.toLocaleString(void 0,{maximumFractionDigits:3}):ct}${L?` ${L}`:""}`:"—"})]},tt))})]}),et.jsxs("section",{children:[et.jsx("h2",{style:{marginBottom:"12px",fontSize:"20px"},children:"Raw Data"}),et.jsx("div",{style:{borderRadius:"10px",border:"1px solid rgba(80,110,200,0.25)",overflow:"hidden"},children:et.jsx("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"13px"},children:et.jsx("tbody",{children:q.map(([tt,ct])=>et.jsxs("tr",{style:{background:"rgba(12,16,34,0.75)"},children:[et.jsx("td",{style:{padding:"8px 10px",borderBottom:"1px solid rgba(80,110,200,0.15)",color:"#8ea3d8",textTransform:"uppercase",letterSpacing:"0.04em",width:"40%"},children:tt}),et.jsx("td",{style:{padding:"8px 10px",borderBottom:"1px solid rgba(80,110,200,0.1)",color:"#f5f8ff"},children:rt(ct)})]},tt))})})})]}),ht&&et.jsxs("section",{style:{marginTop:"24px"},children:[et.jsx("h2",{style:{marginBottom:"12px",fontSize:"20px"},children:"Classification SHAP Explanation"}),et.jsxs("div",{style:{borderRadius:"12px",overflow:"hidden",border:"1px solid rgba(80,110,200,0.25)",background:"rgba(12,16,34,0.75)"},children:[et.jsx("img",{src:ht,alt:`SHAP explanation for ${f.target_id||f.id}`,style:{width:"100%",display:"block"},onError:tt=>{tt.currentTarget.style.display="none"}}),et.jsx("p",{style:{padding:"12px",margin:0,color:"#9db5ff",fontSize:"12px"},children:"Generated explainability plot for classification model (if available)."})]})]})]})]}):null}function Mw(){const[s,t]=$.useState([]);return $.useEffect(()=>{gd().then(t).catch(console.error)},[]),et.jsxs("div",{style:{height:"100vh",width:"100vw"},children:[et.jsx(bE,{}),et.jsxs(HM,{children:[et.jsx(Ko,{path:"/",element:et.jsx(dw,{stars:s})}),et.jsx(Ko,{path:"/upload",element:et.jsx(pw,{stars:s,setStars:t})}),et.jsx(Ko,{path:"/star/:id",element:et.jsx(Sw,{stars:s})}),et.jsx(Ko,{path:"*",element:et.jsx(BM,{to:"/"})})]})]})}qS.createRoot(document.getElementById("root")).render(et.jsx(uE,{children:et.jsx(Mw,{})}));
