!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="00b61504-03c1-48a1-ae1a-9d4b6660939a",e._sentryDebugIdIdentifier="sentry-dbid-00b61504-03c1-48a1-ae1a-9d4b6660939a")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.301.0"},(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2402],{76152:(e,t,n)=>{n.d(t,{A:()=>b});var o=n(14041),s=n(39067),r=n.n(s);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e){var t,n;function s(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(a(t)),t.handleErrored=t.handleErrored.bind(a(t)),t.handleChange=t.handleChange.bind(a(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(a(t)),t}n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=s.prototype;return r.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},r.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},r.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},r.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},r.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},r.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},r.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},r.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},r.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},r.componentDidMount=function(){this.explicitRender()},r.componentDidUpdate=function(){this.explicitRender()},r.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},r.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},r.handleRecaptchaRef=function(e){this.captcha=e},r.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return o.createElement("div",i({},t,{ref:this.handleRecaptchaRef}))},s}(o.Component);c.displayName="ReCAPTCHA",c.propTypes={sitekey:r().string.isRequired,onChange:r().func,grecaptcha:r().object,theme:r().oneOf(["dark","light"]),type:r().oneOf(["image","audio"]),tabindex:r().number,onExpired:r().func,onErrored:r().func,size:r().oneOf(["compact","normal","invisible"]),stoken:r().string,hl:r().string,badge:r().oneOf(["bottomright","bottomleft","inline"])},c.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var l=n(75985),d=n.n(l);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u.apply(this,arguments)}var m={},p=0;var f="onloadcallback";const h=(g=function(){return"https://"+(("undefined"!=typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+f+"&render=explicit"},v=(v={callbackName:f,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,s;function r(e,n){var o;return(o=t.call(this,e,n)||this).state={},o.__scriptURL="",o}s=t,(n=r).prototype=Object.create(s.prototype),n.prototype.constructor=n,n.__proto__=s;var i=r.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+p++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"==typeof g?g():g,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=m[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[v.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),o=v,s=o.globalName,r=o.callbackName,i=o.scriptId;if(s&&void 0!==window[s]&&(m[t]={loaded:!0,observers:{}}),m[t]){var a=m[t];return a&&(a.loaded||a.errored)?void this.asyncScriptLoaderHandleLoad(a):void(a.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},m[t]={loaded:!1,observers:c};var l=document.createElement("script");for(var d in l.src=t,l.async=!0,v.attributes)l.setAttribute(d,v.attributes[d]);i&&(l.id=i);var u=function(e){if(m[t]){var n=m[t].observers;for(var o in n)e(n[o])&&delete n[o]}};r&&"undefined"!=typeof window&&(window[r]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),l.onload=function(){var e=m[t];e&&(e.loaded=!0,u((function(t){return!r&&(t(e),!0)})))},l.onerror=function(){var e=m[t];e&&(e.errored=!0,u((function(t){return t(e),!0})))},document.body.appendChild(l)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===v.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var o=m[e];o&&(delete o.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===v.removeOnUnmount&&delete m[e])},i.render=function(){var t=v.globalName,n=this.props,s=(n.asyncScriptOnLoad,n.forwardedRef),r=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!=typeof window&&(r[t]=void 0!==window[t]?window[t]:void 0),r.ref=s,(0,o.createElement)(e,r)},r}(o.Component),s=(0,o.forwardRef)((function(e,t){return(0,o.createElement)(n,u({},e,{forwardedRef:t}))}));return s.displayName="AsyncScriptLoader("+t+")",s.propTypes={asyncScriptOnLoad:r().func},d()(s,e)})(c);var g,v;const b=h},48788:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var o=n(39067),s=n.n(o),r=n(14041),i=n(62637),a=n(5534),c=n(67136),l=n(32816),d=n(60875),u=n(49555),m=n(92207),p=n.n(m),f=(n(23922),n(28200),n(93849),n(8947),n(97132),n(7835),n(61629),n(83902),n(16349),n(96837),n(57627),n(46108)),h=n.n(f),g=n(76152),v=n(94951),b=n(20775),y=n(46517),E=n(71145),A=n(27068),C=n(16074),w=n(94569),_=n(10880),k=n(22246),D=n(916),P=n(2951),x=n(47168),O=n(97495),I=n(86761),R=n(41458),N=n(35218),L=n(4305);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,c.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e){var t,n,o=e.baseUrl,s=e.comment,i=s.id,c=s.votes,l=e.isClient,m=e.setErrorMessage,p=e.permissions,f=e.userId,h=(0,r.useState)({upVote:c.filter((function(e){return 1===e.value})),downVote:c.filter((function(e){return-1===e.value}))}),g=(0,u.A)(h,2),v=g[0],b=g[1],y="".concat(l?window.location.pathname:o,"/comments/").concat(i,"/vote"),E=v.upVote.filter((function(e){return"object"===(0,d.A)(e.user)?e.user.equals(f):e.user===f})).length>0,C=v.downVote.filter((function(e){return"object"===(0,d.A)(e.user)?e.user.equals(f):e.user===f})).length>0;return r.createElement(w.A,{gap:"xs",justify:"start",layout:"col"},r.createElement(A.A,{className:"".concat(a.A["DiscussPost-button"]," ").concat(a.A["DiscussPost-button_comment"]),kind:E?"primary":"secondary",onClick:function(){return(0,N.oF)({url:y,permissions:p,voteType:"upVote",voteData:v,setErrorMessage:m,setVoteData:b,userId:f})},outline:!0,size:"md"},r.createElement("i",{className:"".concat(a.A["DiscussPost-button_icon"]," icon-chevron-up")}),(null===(t=v.upVote)||void 0===t?void 0:t.length)||0),r.createElement(A.A,{className:"".concat(a.A["DiscussPost-button"]," ").concat(a.A["DiscussPost-button_comment"]),kind:C?"primary":"secondary",onClick:function(){return(0,N.oF)({url:y,permissions:p,voteType:"downVote",voteData:v,setVoteData:b,userId:f})},outline:!0,size:"md"},r.createElement("i",{className:"".concat(a.A["DiscussPost-button_icon"]," icon-chevron-down")}),(null===(n=v.downVote)||void 0===n?void 0:n.length)||0))},T=function(e){var t=e.createdAt,n=e.edited,o=e.user,s=(0,y.A)(),i=s.isLoggedIn,c=s.isAdminUser;return r.createElement("div",{className:a.A["DiscussPost-details"]},r.createElement(C.A,{className:a.A["DiscussPost-date"],icon:"icon-clock",suffix:"by ".concat(o.name||"Anonymous"),tag:"span",time:t}),!!o.isAdmin&&r.createElement("span",{className:a.A["DiscussPost-admin"]},"Admin"),!!i&&!!c&&!!o.email&&r.createElement("span",{className:a.A["DiscussPost-email"]},r.createElement("span",{className:"".concat(a.A.icon," icon-lock1")}),r.createElement("span",null,o.email)),!!n&&r.createElement("span",{className:a.A["DiscussPost-edited"]},"(edited)"))},M=function(e){var t,n,o,s=e.comment,i=e.commentUrl,c=e.isLoggedIn,l=e.isAdminUser,d=e.postComments,u=e.setIsEditing,m=e.setPostComments,p=e.user,f=(0,r.useRef)(),h=(0,r.useRef)(),g=c&&(null===(t=s.hub2user)||void 0===t||null===(n=t.user)||void 0===n?void 0:n.email)===p.email;return r.createElement(r.Fragment,null,r.createElement(I.A,{className:a.A["DiscussPost-fullbody"],opts:L.E},s.body),!!c&&r.createElement("div",{className:a.A.DiscussPostActions},!(!s.solved&&!s.reopened)&&r.createElement(F,{body:s.body,solved:s.solved,userName:null===(o=s.effective_user)||void 0===o?void 0:o.name}),!!g&&!s.deleted&&r.createElement(V,{icon:"icon-edit-2",onClickAction:function(){return u(!0)}},"Edit"),!(!g&&!l)&&!s.deleted&&r.createElement(V,{icon:"icon-trash1",onClickAction:function(){return f.current.toggle(!0)}},"Delete"),!!l&&!!s.deleted&&r.createElement(V,{icon:"icon-trash1",onClickAction:function(){return h.current.toggle(!0)}},"Permanently Delete"),r.createElement(q,{comment:s,commentUrl:i,modalRef:f,postComments:d,setPostComments:m,target:"#delete-discussion-comment-modal-target-".concat(s.id)}),r.createElement(q,{comment:s,commentUrl:"".concat(i,"/permanently"),modalRef:h,permanent:!0,postComments:d,setPostComments:m,target:"#permanently-delete-discussion-comment-modal-target-".concat(s.id)})))},z=function(e){var t=e.comment,n=e.commentUrl,o=e.postComments,s=e.setPostComments,i=e.setIsEditing,c=(0,r.useContext)(v.IT),l=(0,r.useContext)(v.QO).domainFull,d=(0,r.useState)(),m=(0,u.A)(d,2),p=m[0],f=m[1],h=(0,r.useCallback)((function(e){return f(e)}),[]),g=(0,r.useCallback)((function(e,t){return f(t)}),[]);return r.createElement(r.Fragment,null,r.createElement(E.A,{className:a.A.DiscussEditorWrapper,kind:"rule"},r.createElement(D.A,{basic:!0,className:a.A["DiscussPost-fullbody"],doc:t.body,domainFull:l,imageUpload:!1,onChange:g,onInit:h,projectBaseUrl:c})),r.createElement("div",{className:a.A["DiscussPost-edit"]},r.createElement(A.A,{className:"".concat(a.A["Discuss-question_button"]," ").concat(a.A["DiscussPost-edit_button"]),onClick:function(){var e=(null==p?void 0:p.toString())||"";return e?(0,N.Uu)({url:n,editedBody:e,updateSuccess:function(){var n=Object.values(o).map((function(n){return n.id===t.id&&(n.body=e,n.edited=!0),n}));s(n),i(!1),f(null)}}):(0,O.me)(r.createElement(O.Mu,null,"Your comment cannot be blank."))},size:"sm"},"Save"),r.createElement(A.A,{kind:"secondary",onClick:function(){return i(!1)},outline:!0,size:"sm"},"Cancel")))},F=function(e){var t=e.solved,n=e.body,o=e.userName,s=t?"Marked as answered":"Marked as reopened";return r.createElement("span",{className:"".concat(a.A["DiscussPost-solved"]," ").concat(t?a.A["DiscussPost-solved_answered"]:"")},r.createElement("span",{className:"".concat(a.A["DiscussPost-solved_icon"]," ").concat(t?"icon-check1":"icon-x")}),r.createElement("span",null,s,!n&&" by ".concat(o)))},V=function(e){var t=e.onClickAction,n=e.icon,o=e.children;return r.createElement(A.A,{className:"".concat(a.A["DiscussPostActions-action"]," ").concat(a.A["DiscussPostActions-action_comment"]),kind:"secondary",onClick:function(){return t()},outline:!0,size:"sm"},r.createElement("i",{className:"".concat(a.A.DiscussPost_icon," ").concat(n)}),o)},q=function(e){var t=e.modalRef,n=e.comment,o=e.commentUrl,s=e.permanent,i=e.postComments,c=e.setPostComments,l=e.target;return r.createElement(x.Ay,{ref:t,size:"sm",target:l,verticalCenter:!0},r.createElement(x.cw,null,r.createElement(R.A,{className:a.A["DiscussPost-delete_text"],level:6},"Are you sure you want to",s?" permanently ":" ","delete this comment?")),r.createElement(x.jl,{justify:"center"},r.createElement(A.A,{kind:"secondary",onClick:function(){t.current.toggle(!1)}},"Cancel"),r.createElement(A.A,{kind:"secondary",onClick:function(){var e=s?Object.values(i).filter((function(e){return e.id!==n.id})):Object.values(i).map((function(e){return e.id===n.id&&(e.body="*This comment has been deleted*",e.deleted=!0),e}));(0,N._Y)({url:o,setPostComments:c,updatedPostComments:e}),t.current.toggle(!1)}},s?"Permanently ":"","Delete")))},H=function(e){var t,n=e.baseUrl,o=e.comment,s=e.isLoggedIn,i=e.isAdminUser,c=e.isClient,l=e.permissions,d=e.postComments,m=e.setErrorMessage,p=e.setPostComments,f=e.user,h=e.userId,g=(0,r.useState)(!1),v=(0,u.A)(g,2),b=v[0],y=v[1],E="".concat(c?window.location.pathname:n,"/comments/discuss/").concat(o.id);return r.createElement("div",{className:a.A.DiscussPost,id:"comment-id-".concat(o.id)},!!o.body&&!(o.solved||o.deleted||o.reopened)&&r.createElement(U,{baseUrl:n,comment:o,isClient:c,setErrorMessage:m,permissions:l,userId:h}),r.createElement("div",{className:a.A["DiscussPost-content"]},o.body?r.createElement(r.Fragment,null,r.createElement(T,{createdAt:o.createdAt,edited:o.edited,user:o.effective_user}),b?r.createElement(z,{comment:o,commentUrl:E,postComments:d,setPostComments:p,setIsEditing:y}):r.createElement(M,{comment:o,commentUrl:E,isAdminUser:i,isLoggedIn:s,postComments:d,setIsEditing:y,setPostComments:p,user:f}),r.createElement("div",{className:"ModalWrapper",id:"delete-discussion-comment-modal-target-".concat(o.id)}),r.createElement("div",{className:"ModalWrapper",id:"permanently-delete-discussion-comment-modal-target-".concat(o.id)})):r.createElement(F,{solved:o.solved,userName:null===(t=o.effective_user)||void 0===t?void 0:t.name})))},W=function(e){var t=e.baseUrl,n=e.id,o=e.isClient,s=e.isLoggedIn,i=e.isAdminUser,c=e.postComments,d=e.setErrorMessage,m=e.setPostComments,f=e.solved,b=e.user,y=(0,r.useContext)(v.vz).project,C=y.reCaptchaSiteKey,w=y.flags.disableAnonForum,x=(0,r.useContext)(v.QO).domainFull,I=(0,r.useRef)(),R=(0,r.useState)(""),L=(0,u.A)(R,2),j=L[0],U=L[1],T=(0,r.useState)({name:"",email:""}),M=(0,u.A)(T,2),z=M[0],F=M[1],V=(0,r.useState)(f),q=(0,u.A)(V,2),H=q[0],W=q[1],B=(0,r.useState)(),Y=(0,u.A)(B,2),G=Y[0],K=Y[1],Q=(0,r.useCallback)((function(e){return K(e)}),[]),J=(0,r.useCallback)((function(e,t){return K(t)}),[]),X="".concat(o?window.location.pathname:t,"/comments/discuss"),Z=function(){var e=(0,l.A)(p().mark((function e(t){var o,i,a,l,u,f,g;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.added,i=t.commentReopened,a=t.commentSolved,l=b||z,u=null==G?void 0:G.toString(),!o){e.next=9;break}if(u){e.next=6;break}return e.abrupt("return",(0,O.me)(r.createElement(O.Mu,null,"Your comment cannot be blank.")));case 6:if(C&&I&&(null===(f=I.current)||void 0===f||f.reset()),s||z.name&&z.email){e.next=9;break}return e.abrupt("return",(0,O.me)(r.createElement(O.Mu,null,"Please fill out your name and email.")));case 9:if(!C){e.next=13;break}return e.next=12,I.current.executeAsync();case 12:g=e.sent;case 13:return e.abrupt("return",(0,N.D_)({recaptchaResponse:g,url:X,anonymous:!s,body:u,parent:n,commentReopened:i,commentSolved:a,user:l,setErrorMessage:d,updateSuccess:function(e){var t=h()(c);t[e.id]=e,m(t),F({name:"",email:""}),U(""),G&&(0,P.T)(G),W(i||a||H)}}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.createElement("div",{className:a.A.DiscussPost},w&&!s?r.createElement(A.A,{href:"".concat(x,"/to/").concat(y.subdomain,"?redirect=/discuss-new"),outline:!0,size:"sm"},r.createElement(_.A,{name:"message-circle"}),r.createElement("b",null,"Log in")," to add a comment."):r.createElement("div",{className:a.A["DiscussPost-content"]},r.createElement(E.A,{className:a.A.DiscussEditorWrapper,kind:"rule"},r.createElement(D.A,{"aria-label":"Add a comment",basic:!0,className:a.A["DiscussPost-newComment_content"],disallowCustomBlocks:!0,doc:j,domainFull:x,imageUpload:!1,onChange:J,onInit:Q})),!s&&r.createElement("div",{className:a.A["DiscussPost-newComment_inputs"]},r.createElement(k.A,{className:a.A["DiscussPost-newComment_input"],onChange:function(e){return F((function(t){return S(S({},t),{},{name:e.target.value})}))},placeholder:"Full name",required:!0,type:"text",value:z.name}),r.createElement(k.A,{className:a.A["DiscussPost-newComment_input"],onChange:function(e){return F((function(t){return S(S({},t),{},{email:e.target.value})}))},placeholder:"name@email.com",required:!0,type:"email",value:z.email})),r.createElement("div",{className:a.A["DiscussPost-edit"]},r.createElement(A.A,{className:"".concat(a.A["Discuss-question_button"]," ").concat(a.A["DiscussPost-edit_button"]),onClick:function(){return Z({added:!0})},size:"sm"},"Add Comment"),!!i&&(H?r.createElement(A.A,{kind:"secondary",onClick:function(){return Z({commentReopened:!0})},outline:!0,size:"sm"},j.length?"Comment and reopen":"Mark as unanswered"):r.createElement(A.A,{kind:"secondary",onClick:function(){return Z({commentSolved:!0})},outline:!0,size:"sm"},j.length?"Comment and mark answered":"Mark as answered"))),!!C&&r.createElement(g.A,{ref:I,badge:"bottomleft",sitekey:C,size:"invisible"})))},B=function(e){var t,n=e.post,o=n.comments,s=n.solved,i=n.id,a=(0,y.A)(),c=a.isLoggedIn,l=a.isAdminUser,d=(0,r.useContext)(v.Rs),m=d.user,p=d.permissions,f=d._id,h=(0,r.useContext)(v.IT);h="/"===h?"":h;var g=b.A.isClient,E={},A=(0,r.useState)(E),C=(0,u.A)(A,2),w=C[0],_=C[1];(0,r.useEffect)((function(){o.forEach((function(e){E[e.id]=e})),_(E)}),[o]);var k=(0,r.useState)(null),D=(0,u.A)(k,2),P=D[0],x=D[1];return(0,r.useEffect)((function(){P&&(0,O.me)(r.createElement(O.Mu,null,P.message))})),r.createElement(r.Fragment,null,null===(t=Object.values(w))||void 0===t?void 0:t.map((function(e){return r.createElement(H,{key:"comment-id-".concat(e.id),baseUrl:h,comment:e,isAdminUser:l,isLoggedIn:c,isClient:g,permissions:p,postComments:w,setErrorMessage:x,setPostComments:_,userId:f,user:m})})),r.createElement(W,{baseUrl:h,id:i,isClient:g,isLoggedIn:c,isAdminUser:l,postComments:w,setErrorMessage:x,setPostComments:_,solved:s,user:m}))};W.propTypes={baseUrl:s().string,id:s().string,isAdminUser:s().bool,isClient:s().bool,isLoggedIn:s().bool,postComments:s().any,setErrorMessage:s().func,setPostComments:s().func,solved:s().bool,user:s().object},H.propTypes={baseUrl:s().string,comment:s().object,isAdminUser:s().bool,isClient:s().bool,isLoggedIn:s().bool,permissions:s().array,postComments:s().any,setErrorMessage:s().func,setPostComments:s().func,user:s().object,userId:s().oneOfType([s().string,s().object])},B.propTypes={post:s().shape({comments:s().array,id:s().string,solved:s().bool})},q.propTypes={comment:s().object,commentUrl:s().string,modalRef:s().any,permanent:s().bool,postComments:s().any,setPostComments:s().func,target:s().string},M.propTypes={comment:s().object,commentUrl:s().string,isAdminUser:s().bool,isLoggedIn:s().bool,postComments:s().any,setIsEditing:s().func,setPostComments:s().func,user:s().object},z.propTypes={comment:s().object,commentUrl:s().string,postComments:s().any,setIsEditing:s().func,setPostComments:s().func},T.propTypes={createdAt:s().string,edited:s().bool,user:s().object},V.propTypes={icon:s().string,onClickAction:s().func},F.propTypes={body:s().string,solved:s().bool,userName:s().string},U.propTypes={baseUrl:s().string,comment:s().object,isClient:s().bool,permissions:s().array,setErrorMessage:s().func,userId:s().oneOfType([s().string,s().object])};const Y=B;var G=function(e){var t=e.discuss;return r.createElement("div",{className:a.A.DiscussPage},!!t&&r.createElement(r.Fragment,null,r.createElement(i.A,{post:t}),r.createElement(Y,{post:t})))};G.propTypes={discuss:s().object};const K=G}}]);
//# sourceMappingURL=Page.010cda1cb3630b4c63b5.js.map