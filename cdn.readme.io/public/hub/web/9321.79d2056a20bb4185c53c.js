!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d76015dc-f804-4d33-89ce-b46d5cd8a675",e._sentryDebugIdIdentifier="sentry-dbid-d76015dc-f804-4d33-89ce-b46d5cd8a675")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.306.1"},(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9321],{2927:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(6146),o=r.n(n),s=r(14041),i=r(88836),a=r.n(i);const c=function(e,t="",r={key:"label",highlight:!0}){return(0,s.useMemo)((()=>{if(t){return o().go(t,e,{key:r.key}).reduce((([e,t],n)=>{const{obj:s}=n;if(e.push({...s}),!r.highlight)return[e,t];const i=a()(o().highlight(n)||"",{whiteList:{b:[]}});return t.push(i),[e,t]}),[[],[]])}return[e,[]]}),[e,t,r])}},29397:(e,t,r)=>{r.d(t,{D:()=>a,A:()=>c});var n=r(11236),o=r(14041),s=r(37972);function i(e,t=!0,r=!1,i){const a=(0,o.useMemo)((()=>{const e=new URLSearchParams("undefined"!=typeof window?window.location.search:{});return{...i,...e.has("rdmdCompatibilityMode")&&{compatibilityMode:(t=e.get("rdmdCompatibilityMode"),!(!t||!["on","true"].includes(t)&&(["off","false"].includes(t)||!t)))},reusableContent:{...i.reusableContent,tags:i.reusableContent?.tags||{},wrap:!1}};var t}),[JSON.stringify(i)]),[c,l]=(0,o.useMemo)((()=>n.setup(e||"",a)),[e,a]),u=(0,o.useMemo)((()=>n.reactProcessor(l,s.A).parse(c)),[c,l]),d=(0,o.useMemo)((()=>n.react(r?{type:"root",children:u.children.slice(0,1)}:u,l,s.A)),[u,r,l]),f=(0,o.useMemo)((()=>n.reactTOC(u,l)),[u,l]);return t?f:d}const a=({body:e,opts:t={}})=>i(e,!0,!1,t),c=({body:e,children:t,skipBaseClassName:r,className:n,excerpt:s,opts:a={},Tag:c="div",...l})=>{var u;const d=i(e||t||"",!1,s,function(e){return"reusableContent"in e}(u=a)?u:{...u,reusableContent:{tags:u.components}}),f=[!0!==r&&"markdown-body",n||""];return o.createElement(c,{...l,className:`rm-Markdown ${f.filter((e=>e)).join(" ")}`,"data-testid":"RDMD"},d)}},86761:(e,t,r)=>{r.d(t,{A:()=>i,D:()=>s});var n=r(14041),o=r(39326);const s=(e={})=>n.createElement(o.D,{...e}),i=(e={})=>n.createElement(o.A,{...e})},23250:(e,t,r)=>{r.d(t,{Fg:()=>i,Ay:()=>c});var n=r(69883),o=r(14041),s=r(51046);const i=function({id:e,disabled:t,overrides:r,asTitle:s,...i}){const[a,l]=(0,n.useSingleton)({disabled:t,overrides:r});return c.singletons[e]=l,(0,o.useEffect)((()=>()=>{delete c.singletons[e]}),[e]),o.createElement(c,{...i,...s&&{arrow:!1,delay:[500,0],offset:[0,5]},content:!0,singleton:a})},a=({children:e,content:t,className:r,singleton:i,asTitle:c,...l})=>{const u=(0,o.useMemo)((()=>(0,s.Ay)("rm-Tooltip",r)),[r]),d="string"==typeof e?o.createElement("span",{className:"tippy-text"},e):e,f="string"==typeof i?a.singletons[i]:i;return o.createElement(n.default,{className:`${u} ${c?"rm-Tooltip_title":""}`,content:t,duration:150,placement:"bottom-start",singleton:f,zIndex:99999,...l,...c&&{arrow:!1,delay:[500,0],offset:[0,5]}},d)};a.singletons={};const c=a},63784:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(49555),o=r(14041);const s=function(e){var t=(0,o.useState)(!1),r=(0,n.A)(t,2),s=r[0],i=r[1];return(0,o.useEffect)((function(){var t=window.matchMedia(e);i(!!t.matches),t.onchange=function(e){return i(!!e.matches)}}),[e]),s}},37972:(e,t,r)=>{r.d(t,{A:()=>_});r(83902),r(16349),r(23922),r(96837),r(57627);var n=r(67136),o=r(49555),s=r(58160),i=r(39067),a=r.n(i),c=r(14041),l=(r(76386),r(54067),r(68392),r(3260),r(62350)),u=r(94951),d=["docs","reference","changelog","recipes","page","discuss"],f=function(e){return new RegExp("^".concat(e,":([%_0-9#\\p{L}-]*)$"),"u")};r(81198);var p=r(46108),h=r.n(p),g=r(52395),m=r(1375),v=r(98196),b=["align"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var O=r(11236).utils.BaseUrlContext,w=function(e){var t=e.align,r=(0,s.A)(e,b),i=(0,c.useContext)(O),a=(0,c.useState)(!1),l=(0,o.A)(a,2),u=l[0],d=l[1],f=(0,c.useState)(m.tk),p=(0,o.A)(f,2),w=p[0],A=p[1];return c.createElement("div",{align:t,className:"TutorialTile-link"},c.createElement(v.A,{fetchLatest:!0,openTutorial:function(e){var t=e.tutorial,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},h()(t));d(!0),A(r)},tutorial:r}),c.createElement(g.A,{action:"View",baseUrl:i.replace(/\/$/,""),closeTutorialModal:function(){d(!1),A(m.tk)},open:u,target:"#tutorialmodal-root",tutorial:w}))};w.propTypes={align:a().string,backgroundColor:a().string,emoji:a().string,link:a().string,slug:a().string};const A=w;var E=["attributes","children","href"];function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=function(e){var t=e.attributes,r=void 0===t?{target:"_self"}:t,n=e.children,i=e.href,a=(0,s.A)(e,E),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(0,c.useContext)(u.vz).project,r=t.fullBaseUrl,n=((0,c.useContext)(u.se)||{}).version;if(!t)return[{to:e},l.Vq];if(!e.match(/^(doc|ref|blog|changelog|page):/)){try{var o=new URL(r).host,s=(new u.V0).parse(e),i=s.hash,a=s.host,p=s.pathname,h=s.search,g=s.slugs,m=g[0]&&d.includes(g[0]);if((a===o||null===a)&&m){var v,b=null===(v=p.match(/^\/v([\w\d\-.]+)\//))||void 0===v?void 0:v[1];if(b===n||!b){var y=p;return b&&(y=p.substring(b.length+2)),[{to:{hash:i,pathname:y,search:h}},l.Vq]}return[{href:p},"a"]}}catch(e){}return[{href:e},"a"]}var O=e.match(f("doc"));if(O){var w=decodeURIComponent(O[1]);return[{to:"/docs/".concat(w)},l.Vq]}var A=e.match(f("ref"));if(A){var E=A[1],j=decodeURIComponent(E);return[{to:"/reference/".concat(j)},l.Vq]}var D=e.match(f("blog")),C=e.match(f("changelog")),_=D||C;if(_){var P=decodeURIComponent(_[1]);return[{to:"/changelog/".concat(P)},l.Vq]}var k=e.match(f("page"));if(k){var M=decodeURIComponent(k[1]);return[{to:"/page/".concat(M)},l.Vq]}return[{href:decodeURIComponent(e)},"a"]}(i),h=(0,o.A)(p,2),g=h[0],m=h[1];return c.createElement(m,D(D(D(D({},r),g),a),{},{children:n}))};C.propTypes={attributes:a().object,href:a().string};const _={a:C,"tutorial-tile":A,TutorialTile:A}},39326:(e,t,r)=>{r.d(t,{A:()=>p,D:()=>f});var n=r(58160),o=r(22675),s=r(14041),i=r(29397),a=["mdx"],c=["mdx"],l=(0,o.Ay)({resolved:{},chunkName:function(){return"RMDX"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:function(){return Promise.all([r.e(9772),r.e(7356)]).then(r.bind(r,16794))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return 16794}}),u=(0,o.Ay)({resolved:{},chunkName:function(){return"RMDX"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:function(){return Promise.all([r.e(9772),r.e(7356)]).then(r.bind(r,16794))},requireAsync:function(e){var t=this,r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((function(e){return t.resolved[r]=!0,e}))},requireSync:function e(t){var n=this.resolve(t);return r(n)},resolve:function e(){return 16794}},{resolveComponent:function(e){return e.TOC}}),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.mdx,r=(0,n.A)(e,a);return t?s.createElement(l,r):s.createElement(i.A,r)},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.mdx,r=(0,n.A)(e,c);return t?s.createElement(u,r):s.createElement(i.D,r)};const p=d}}]);
//# sourceMappingURL=9321.79d2056a20bb4185c53c.js.map