"use strict";(self.webpackChunkvite_ml_platform=self.webpackChunkvite_ml_platform||[]).push([[646],{28624:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(1413),o=r(72791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},l=r(54291),i=function(e,t){return o.createElement(l.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:a}))};i.displayName="QuestionCircleOutlined";var c=o.forwardRef(i)},58646:function(e,t,r){r.d(t,{Z:function(){return de}});var n=r(87462),o=r(71002),a=r(29439),l=r(4942),i=r(72791),c=r(81694),u=r.n(c),s=r(43458),d=r(24886),f=r(41818),m=i.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),p=i.createContext(null),v=i.createContext({prefixCls:""});function h(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function g(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function y(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return g(r.overflowY,t)||g(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function Z(e,t,r,n,o,a,l,i){return a<e&&l>t||a>e&&l<t?0:a<=e&&i<=r||l>=t&&i>=r?a-e-n:l>t&&i<r||a<e&&i>r?l-t+o:0}function b(e,t){var r=window,n=t.scrollMode,o=t.block,a=t.inline,l=t.boundary,i=t.skipOverflowHiddenElements,c="function"==typeof l?l:function(e){return e!==l};if(!h(e))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,s=[],d=e;h(d)&&c(d);){if((d=d.parentElement)===u){s.push(d);break}null!=d&&d===document.body&&y(d)&&!y(document.documentElement)||null!=d&&y(d,i)&&s.push(d)}for(var f=r.visualViewport?r.visualViewport.width:innerWidth,m=r.visualViewport?r.visualViewport.height:innerHeight,p=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,g=e.getBoundingClientRect(),b=g.height,w=g.width,E=g.top,C=g.right,x=g.bottom,O=g.left,F="start"===o||"nearest"===o?E:"end"===o?x:E+b/2,k="center"===a?O+w/2:"end"===a?C:O,N=[],_=0;_<s.length;_++){var M=s[_],I=M.getBoundingClientRect(),S=I.height,j=I.width,P=I.top,R=I.right,q=I.bottom,V=I.left;if("if-needed"===n&&E>=0&&O>=0&&x<=m&&C<=f&&E>=P&&x<=q&&O>=V&&C<=R)return N;var T=getComputedStyle(M),A=parseInt(T.borderLeftWidth,10),L=parseInt(T.borderTopWidth,10),W=parseInt(T.borderRightWidth,10),H=parseInt(T.borderBottomWidth,10),z=0,B=0,D="offsetWidth"in M?M.offsetWidth-M.clientWidth-A-W:0,Y="offsetHeight"in M?M.offsetHeight-M.clientHeight-L-H:0;if(u===M)z="start"===o?F:"end"===o?F-m:"nearest"===o?Z(v,v+m,m,L,H,v+F,v+F+b,b):F-m/2,B="start"===a?k:"center"===a?k-f/2:"end"===a?k-f:Z(p,p+f,f,A,W,p+k,p+k+w,w),z=Math.max(0,z+v),B=Math.max(0,B+p);else{z="start"===o?F-P-L:"end"===o?F-q+H+Y:"nearest"===o?Z(P,q,S,L,H+Y,F,F+b,b):F-(P+S/2)+Y/2,B="start"===a?k-V-A:"center"===a?k-(V+j/2)+D/2:"end"===a?k-R+W+D:Z(V,R,j,A,W+D,k,k+w,w);var U=M.scrollLeft,K=M.scrollTop;F+=K-(z=Math.max(0,Math.min(K+z,M.scrollHeight-S+Y))),k+=U-(B=Math.max(0,Math.min(U+B,M.scrollWidth-j+D)))}N.push({el:M,top:z,left:B})}return N}function w(e){return e===Object(e)&&0!==Object.keys(e).length}var E=function(e,t){var r=!e.ownerDocument.documentElement.contains(e);if(w(t)&&"function"===typeof t.behavior)return t.behavior(r?[]:b(e,t));if(!r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:w(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,o=e.top,a=e.left;n.scroll&&r?n.scroll({top:o,left:a,behavior:t}):(n.scrollTop=o,n.scrollLeft=a)}))}(b(e,n),n.behavior)}},C=["parentNode"];function x(e){return void 0===e||!1===e?[]:Array.isArray(e)?e:[e]}function O(e,t){if(e.length){var r=e.join("_");return t?"".concat(t,"_").concat(r):C.indexOf(r)>=0?"".concat("form_item","_").concat(r):r}}function F(e){return x(e).join("_")}function k(e){var t=(0,s.cI)(),r=(0,a.Z)(t,1)[0],o=i.useRef({}),l=i.useMemo((function(){return null!==e&&void 0!==e?e:(0,n.Z)((0,n.Z)({},r),{__INTERNAL__:{itemRef:function(e){return function(t){var r=F(e);t?o.current[r]=t:delete o.current[r]}}},scrollToField:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=x(e),o=O(r,l.__INTERNAL__.name),a=o?document.getElementById(o):null;a&&E(a,(0,n.Z)({scrollMode:"if-needed",block:"nearest"},t))},getFieldInstance:function(e){var t=F(e);return o.current[t]}})}),[e,r]);return[l]}var N=r(1815),_=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},M=function(e,t){var r,c=i.useContext(N.Z),f=i.useContext(d.E_),p=f.getPrefixCls,v=f.direction,h=f.form,g=e.prefixCls,y=e.className,Z=void 0===y?"":y,b=e.size,w=void 0===b?c:b,E=e.form,C=e.colon,x=e.labelAlign,O=e.labelCol,F=e.wrapperCol,M=e.hideRequiredMark,I=e.layout,S=void 0===I?"horizontal":I,j=e.scrollToFirstError,P=e.requiredMark,R=e.onFinishFailed,q=e.name,V=_(e,["prefixCls","className","size","form","colon","labelAlign","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),T=(0,i.useMemo)((function(){return void 0!==P?P:h&&void 0!==h.requiredMark?h.requiredMark:!M}),[M,P,h]),A=p("form",g),L=u()(A,(r={},(0,l.Z)(r,"".concat(A,"-").concat(S),!0),(0,l.Z)(r,"".concat(A,"-hide-required-mark"),!1===T),(0,l.Z)(r,"".concat(A,"-rtl"),"rtl"===v),(0,l.Z)(r,"".concat(A,"-").concat(w),w),r),Z),W=k(E),H=(0,a.Z)(W,1)[0],z=H.__INTERNAL__;z.name=q;var B=(0,i.useMemo)((function(){return{name:q,labelAlign:x,labelCol:O,wrapperCol:F,vertical:"vertical"===S,colon:C,requiredMark:T,itemRef:z.itemRef}}),[q,x,O,F,S,C,T]);i.useImperativeHandle(t,(function(){return H}));return i.createElement(N.q,{size:w},i.createElement(m.Provider,{value:B},i.createElement(s.ZP,(0,n.Z)({id:q},V,{name:q,onFinishFailed:function(e){null===R||void 0===R||R(e);var t={block:"nearest"};j&&e.errorFields.length&&("object"===(0,o.Z)(j)&&(t=j),H.scrollToField(e.errorFields[0].name,t))},form:H,className:L}))))},I=i.forwardRef(M),S=r(93433),j=r(75691),P=r(88834),R=r(37545),q=r(79393),V=r(14824),T=r(28624),A=r(89752),L=r(93486),W=r(70454),H=r(64469),z=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};var B=function(e){var t=e.prefixCls,r=e.label,c=e.htmlFor,s=e.labelCol,d=e.labelAlign,f=e.colon,p=e.required,v=e.requiredMark,h=e.tooltip,g=(0,L.E)("Form"),y=(0,a.Z)(g,1)[0];return r?i.createElement(m.Consumer,{key:"label"},(function(e){var a,m,g=e.vertical,Z=e.labelAlign,b=e.labelCol,w=e.colon,E=s||b||{},C=d||Z,x="".concat(t,"-item-label"),O=u()(x,"left"===C&&"".concat(x,"-left"),E.className),F=r,k=!0===f||!1!==w&&!1!==f;k&&!g&&"string"===typeof r&&""!==r.trim()&&(F=r.replace(/[:|\uff1a]\s*$/,""));var N=function(e){return e?"object"!==(0,o.Z)(e)||i.isValidElement(e)?{title:e}:e:null}(h);if(N){var _=N.icon,M=void 0===_?i.createElement(T.Z,null):_,I=z(N,["icon"]),S=i.createElement(H.Z,I,i.cloneElement(M,{className:"".concat(t,"-item-tooltip"),title:""}));F=i.createElement(i.Fragment,null,F,S)}"optional"!==v||p||(F=i.createElement(i.Fragment,null,F,i.createElement("span",{className:"".concat(t,"-item-optional"),title:""},(null===y||void 0===y?void 0:y.optional)||(null===(m=W.Z.Form)||void 0===m?void 0:m.optional))));var j=u()((a={},(0,l.Z)(a,"".concat(t,"-item-required"),p),(0,l.Z)(a,"".concat(t,"-item-required-mark-optional"),"optional"===v),(0,l.Z)(a,"".concat(t,"-item-no-colon"),!k),a));return i.createElement(A.Z,(0,n.Z)({},E,{className:O}),i.createElement("label",{htmlFor:c,className:j,title:"string"===typeof r?r:""},F))})):null},D=r(77106),Y=r(82621),U=r(37557),K=r(10187),X=r(14897),Q=r(29464),$=[];function G(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{key:"string"===typeof e?e:"".concat(r,"-").concat(n),error:e,errorStatus:t}}function J(e){var t=e.help,r=e.helpStatus,o=e.errors,a=void 0===o?$:o,c=e.warnings,s=void 0===c?$:c,f=e.className,m=i.useContext(v).prefixCls,p=i.useContext(d.E_).getPrefixCls,h="".concat(m,"-item-explain"),g=p(),y=i.useMemo((function(){return void 0!==t&&null!==t?[G(t,r,"help")]:[].concat((0,S.Z)(a.map((function(e,t){return G(e,"error","error",t)}))),(0,S.Z)(s.map((function(e,t){return G(e,"warning","warning",t)}))))}),[t,r,a,s]);return i.createElement(X.Z,(0,n.Z)({},Q.Z,{motionName:"".concat(g,"-show-help"),motionAppear:!1,motionEnter:!1,visible:!!y.length,onLeaveStart:function(e){return e.style.height="auto",{height:e.offsetHeight}}}),(function(e){var t=e.className,r=e.style;return i.createElement("div",{className:u()(h,t,f),style:r},i.createElement(X.V,(0,n.Z)({keys:y},Q.Z,{motionName:"".concat(g,"-show-help-item"),component:!1}),(function(e){var t=e.key,r=e.error,n=e.errorStatus,o=e.className,a=e.style;return i.createElement("div",{key:t,role:"alert",className:u()(o,(0,l.Z)({},"".concat(h,"-").concat(n),n)),style:a},r)})))}))}var ee={success:U.Z,warning:K.Z,error:Y.Z,validating:D.Z},te=function(e){var t=e.prefixCls,r=e.status,o=e.wrapperCol,a=e.children,l=e.errors,c=e.warnings,s=e.hasFeedback,d=e._internalItemRender,f=e.validateStatus,p=e.extra,h=e.help,g="".concat(t,"-item"),y=i.useContext(m),Z=o||y.wrapperCol||{},b=u()("".concat(g,"-control"),Z.className),w=f&&ee[f],E=s&&w?i.createElement("span",{className:"".concat(g,"-children-icon")},i.createElement(w,null)):null,C=i.useMemo((function(){return(0,n.Z)({},y)}),[y]);delete C.labelCol,delete C.wrapperCol;var x=i.createElement("div",{className:"".concat(g,"-control-input")},i.createElement("div",{className:"".concat(g,"-control-input-content")},a),E),O=i.useMemo((function(){return{prefixCls:t,status:r}}),[t,r]),F=i.createElement(v.Provider,{value:O},i.createElement(J,{errors:l,warnings:c,help:h,helpStatus:r,className:"".concat(g,"-explain-connected")})),k=p?i.createElement("div",{className:"".concat(g,"-extra")},p):null,N=d&&"pro_table_render"===d.mark&&d.render?d.render(e,{input:x,errorList:F,extra:k}):i.createElement(i.Fragment,null,x,F,k);return i.createElement(m.Provider,{value:C},i.createElement(A.Z,(0,n.Z)({},Z,{className:b}),N))},re=r(61113),ne=r(75314);function oe(e){var t=i.useState(e),r=(0,a.Z)(t,2),n=r[0],o=r[1];return i.useEffect((function(){var t=setTimeout((function(){o(e)}),e.length?0:10);return function(){clearTimeout(t)}}),[e]),n}var ae=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},le=((0,q.b)("success","warning","error","validating",""),i.memo((function(e){return e.children}),(function(e,t){return e.value===t.value&&e.update===t.update})));var ie=function(e){var t=e.name,r=e.fieldKey,c=e.noStyle,v=e.dependencies,h=e.prefixCls,g=e.style,y=e.className,Z=e.shouldUpdate,b=e.hasFeedback,w=e.help,E=e.rules,C=e.validateStatus,F=e.children,k=e.required,N=e.label,_=e.messageVariables,M=e.trigger,I=void 0===M?"onChange":M,q=e.validateTrigger,T=e.hidden,A=ae(e,["name","fieldKey","noStyle","dependencies","prefixCls","style","className","shouldUpdate","hasFeedback","help","rules","validateStatus","children","required","label","messageVariables","trigger","validateTrigger","hidden"]),L=(0,i.useContext)(d.E_).getPrefixCls,W=(0,i.useContext)(m),H=W.name,z=W.requiredMark,D="function"===typeof F,Y=(0,i.useContext)(p),U=(0,i.useContext)(j.Z).validateTrigger,K=void 0!==q?q:U,X=function(e){return null===e&&(0,V.Z)(!1,"Form.Item","`null` is passed as `name` property"),!(void 0===e||null===e)}(t),Q=L("form",h),$=function(e){var t=i.useState(e),r=(0,a.Z)(t,2),n=r[0],o=r[1],l=(0,i.useRef)(null),c=(0,i.useRef)([]),u=(0,i.useRef)(!1);return i.useEffect((function(){return function(){u.current=!0,ne.Z.cancel(l.current)}}),[]),[n,function(e){u.current||(null===l.current&&(c.current=[],l.current=(0,ne.Z)((function(){l.current=null,o((function(e){var t=e;return c.current.forEach((function(e){t=e(t)})),t}))}))),c.current.push(e))}]}({}),G=(0,a.Z)($,2),J=G[0],ee=G[1],ie=i.useState((function(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[]}})),ce=(0,a.Z)(ie,2),ue=ce[0],se=ce[1],de=function(e,t){ee((function(r){var o=(0,n.Z)({},r),a=[].concat((0,S.Z)(e.name.slice(0,-1)),(0,S.Z)(t)).join("__SPLIT__");return e.destroy?delete o[a]:o[a]=e,o}))},fe=i.useMemo((function(){var e=(0,S.Z)(ue.errors),t=(0,S.Z)(ue.warnings);return Object.values(J).forEach((function(r){e.push.apply(e,(0,S.Z)(r.errors||[])),t.push.apply(t,(0,S.Z)(r.warnings||[]))})),[e,t]}),[J,ue.errors,ue.warnings]),me=(0,a.Z)(fe,2),pe=me[0],ve=me[1],he=oe(pe),ge=oe(ve),ye=function(){var e=i.useContext(m).itemRef,t=i.useRef({});return function(r,n){var a=n&&"object"===(0,o.Z)(n)&&n.ref,l=r.join("_");return t.current.name===l&&t.current.originRef===a||(t.current.name=l,t.current.originRef=a,t.current.ref=(0,P.sQ)(e(r),a)),t.current.ref}}();function Ze(t,r,o){var a;if(c&&!T)return t;var s="";void 0!==C?s=C:(null===ue||void 0===ue?void 0:ue.validating)?s="validating":he.length?s="error":ge.length?s="warning":(null===ue||void 0===ue?void 0:ue.touched)&&(s="success");var d=(a={},(0,l.Z)(a,"".concat(Q,"-item"),!0),(0,l.Z)(a,"".concat(Q,"-item-with-help"),w||he.length||ge.length),(0,l.Z)(a,"".concat(y),!!y),(0,l.Z)(a,"".concat(Q,"-item-has-feedback"),s&&b),(0,l.Z)(a,"".concat(Q,"-item-has-success"),"success"===s),(0,l.Z)(a,"".concat(Q,"-item-has-warning"),"warning"===s),(0,l.Z)(a,"".concat(Q,"-item-has-error"),"error"===s),(0,l.Z)(a,"".concat(Q,"-item-is-validating"),"validating"===s),(0,l.Z)(a,"".concat(Q,"-item-hidden"),T),a);return i.createElement(R.Z,(0,n.Z)({className:u()(d),style:g,key:"row"},(0,f.Z)(A,["colon","extra","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","labelAlign","labelCol","normalize","preserve","tooltip","validateFirst","valuePropName","wrapperCol","_internalItemRender"])),i.createElement(B,(0,n.Z)({htmlFor:r,required:o,requiredMark:z},e,{prefixCls:Q})),i.createElement(te,(0,n.Z)({},e,ue,{errors:he,warnings:ge,prefixCls:Q,status:s,validateStatus:s,help:w}),i.createElement(p.Provider,{value:de},t)))}if(!X&&!D&&!v)return Ze(F);var be={};return"string"===typeof N?be.label=N:t&&(be.label=String(t)),_&&(be=(0,n.Z)((0,n.Z)({},be),_)),i.createElement(s.gN,(0,n.Z)({},e,{messageVariables:be,trigger:I,validateTrigger:K,onMetaChange:function(e){if(se(e.destroy?{errors:[],warnings:[],touched:!1,validating:!1,name:[]}:e),c&&Y){var t=e.name;void 0!==r&&(t=Array.isArray(r)?r:[r]),Y(e,t)}}}),(function(r,a,l){var c=x(t).length&&a?a.name:[],u=O(c,H),s=void 0!==k?k:!(!E||!E.some((function(e){if(e&&"object"===(0,o.Z)(e)&&e.required&&!e.warningOnly)return!0;if("function"===typeof e){var t=e(l);return t&&t.required&&!t.warningOnly}return!1}))),d=(0,n.Z)({},r),f=null;if((0,V.Z)(!(Z&&v),"Form.Item","`shouldUpdate` and `dependencies` shouldn't be used together. See https://ant.design/components/form/#dependencies."),Array.isArray(F)&&X)(0,V.Z)(!1,"Form.Item","`children` is array of render props cannot have `name`."),f=F;else if(D&&(!Z&&!v||X))(0,V.Z)(!(!Z&&!v),"Form.Item","`children` of render props only work with `shouldUpdate` or `dependencies`."),(0,V.Z)(!X,"Form.Item","Do not use `name` with `children` of render props since it's not a field.");else if(!v||D||X)if((0,re.l$)(F)){(0,V.Z)(void 0===F.props.defaultValue,"Form.Item","`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.");var m=(0,n.Z)((0,n.Z)({},F.props),d);m.id||(m.id=u),(0,P.Yr)(F)&&(m.ref=ye(c,F)),new Set([].concat((0,S.Z)(x(I)),(0,S.Z)(x(K)))).forEach((function(e){m[e]=function(){for(var t,r,n,o,a,l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];null===(n=d[e])||void 0===n||(t=n).call.apply(t,[d].concat(i)),null===(a=(o=F.props)[e])||void 0===a||(r=a).call.apply(r,[o].concat(i))}})),f=i.createElement(le,{value:d[e.valuePropName||"value"],update:F},(0,re.Tm)(F,m))}else D&&(Z||v)&&!X?f=F(l):((0,V.Z)(!c.length,"Form.Item","`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead."),f=F);else(0,V.Z)(!1,"Form.Item","Must set `name` or use render props when `dependencies` is set.");return Ze(f,u,s)}))},ce=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},ue=function(e){var t=e.prefixCls,r=e.children,o=ce(e,["prefixCls","children"]);(0,V.Z)(!!o.name,"Form.List","Miss `name` prop.");var a=(0,i.useContext(d.E_).getPrefixCls)("form",t),l=i.useMemo((function(){return{prefixCls:a,status:"error"}}),[a]);return i.createElement(s.aV,o,(function(e,t,o){return i.createElement(v.Provider,{value:l},r(e.map((function(e){return(0,n.Z)((0,n.Z)({},e),{fieldKey:e.key})})),t,{errors:o.errors,warnings:o.warnings}))}))},se=I;se.Item=ie,se.List=ue,se.ErrorList=J,se.useForm=k,se.Provider=function(e){var t=(0,f.Z)(e,["prefixCls"]);return i.createElement(s.RV,t)},se.create=function(){(0,V.Z)(!1,"Form","antd v4 removed `Form.create`. Please remove or use `@ant-design/compatible` instead.")};var de=se}}]);