(self.webpackChunkgesias=self.webpackChunkgesias||[]).push([[678],{523:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,l,c,u;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(l=s;0!=l--;)if(!a(e[l],o[l]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!a(l.value[1],o.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(l=s;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!a(e[c[l]],o[c[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},6124:function(e,t,r){"use strict";var n,i=r(7294),a=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function u(){l=e(c.map((function(e){return e.props}))),d.canUseDOM?t(l):r&&(l=r(l))}var d=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){c.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},o.render=function(){return a.createElement(n,this.props)},i}(i.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},1496:function(e,t,r){"use strict";var n=r(5318);t.Z=void 0;var i,a=n(r(1506)),o=n(r(5354)),s=n(r(7316)),l=n(r(7154)),c=n(r(7294)),u=n(r(5697)),d=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,l.default)({},e),r=t.resolutions,n=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=T([].concat(t.fluid))),t.fixed&&(t.fixed=T([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,r=e.fixed,n=h(t||r||[]);return n&&n.src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),y=function(e){var t=f(e),r=m(t);return g[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,w=v&&window.IntersectionObserver,x=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:a}),r&&c.default.createElement("source",{media:i,srcSet:r,sizes:a}))}))}function T(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function k(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e,t){var r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:r)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var C=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),x.set(e,t)),function(){r.unobserve(e),x.delete(e)}},A=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+c+o+s+r+n+t+a+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,i=e.generateSources,a=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(Z,(0,l.default)({ref:t,src:r},a,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,i(n),s):s})),Z=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,i=e.src,a=e.style,o=e.onLoad,u=e.onError,f=e.loading,p=e.draggable,m=e.ariaHidden,h=(0,s.default)(e,d);return c.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:r,srcSet:n,src:i},h,{onLoad:o,onError:u,ref:t,loading:f,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));Z.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var N=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&y(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&w&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||v&&(b||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)(r)),r.handleRef=r.handleRef.bind((0,a.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:y(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=y(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),(r=m(t))&&(g[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,n=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,d=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,x=e.loading,T=e.draggable,O=m||g;if(!O)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,l.default)({opacity:C?1:0,transition:N?"opacity "+b+"ms":"none"},s),I="boolean"==typeof y?"lightgray":y,P={transitionDelay:b+"ms"},R=(0,l.default)({opacity:this.state.imgLoaded?0:1},N&&P,s,d),M={title:t,alt:this.state.isVisible?"":r,style:R,className:p,itemProp:w},H=this.state.isHydrated?h(O):O[0];if(m)return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),I&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&P)}),H.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:M,imageVariants:O,generateSources:k}),H.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:M,imageVariants:O,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,S(O),c.default.createElement(Z,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x,draggable:T})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,l.default)({alt:r,title:t,loading:x},H,{imageVariants:O}))}}));if(g){var z=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},a);return"inherit"===a.display&&delete z.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},I&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:I,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},N&&P)}),H.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:M,imageVariants:O,generateSources:k}),H.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:M,imageVariants:O,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,S(O),c.default.createElement(Z,{alt:r,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x,draggable:T})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,l.default)({alt:r,title:t,loading:x},H,{imageVariants:O}))}}))}return null},t}(c.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),I=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function P(e){return function(t,r,n){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[r]=e,i),t,"prop",n)}}N.propTypes={resolutions:j,sizes:I,fixed:P(u.default.oneOfType([j,u.default.arrayOf(j)])),fluid:P(u.default.oneOfType([I,u.default.arrayOf(I)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var R=N;t.Z=R},1081:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Ze}});var n,i,a,o,s=r(7294),l=r(5697),c=r.n(l),u=r(6124),d=r.n(u),f=r(523),p=r.n(f),m=r(4756),h=r.n(m),g="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),x="cssText",S="href",T="http-equiv",E="innerHTML",k="itemprop",O="name",C="property",A="rel",L="src",Z="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",I="defer",P="encodeSpecialCharacters",R="onChangeClientState",M="titleTemplate",H=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),z=[v.NOSCRIPT,v.SCRIPT,v.STYLE],V="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},D=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=Q(e,v.TITLE),r=Q(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,j);return t||n||void 0},G=function(e){return Q(e,R)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return _({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),o=0;o<a.length;o++){var s=a[o],l=s.toLowerCase();-1===t.indexOf(l)||r===A&&"canonical"===e[r].toLowerCase()||l===A&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(s)||s!==E&&s!==x&&s!==k||(r=s)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][c]&&(i[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o],l=h()({},n[s],i[s]);n[s]=l}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;le(v.BODY,n),le(v.HTML,i),se(d,f);var p={baseTag:ce(v.BASE,r),linkTags:ce(v.LINK,a),metaTags:ce(v.META,o),noscriptTags:ce(v.NOSCRIPT,s),scriptTags:ce(v.SCRIPT,c),styleTags:ce(v.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),le(v.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(V),i=n?n.split(","):[],a=[].concat(i),o=Object.keys(t),s=0;s<o.length;s++){var l=o[s],c=t[l]||"";r.getAttribute(l)!==c&&r.setAttribute(l,c),-1===i.indexOf(l)&&i.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var d=a.length-1;d>=0;d--)r.removeAttribute(a[d]);i.length===a.length?r.removeAttribute(V):r.getAttribute(V)!==o.join(",")&&r.setAttribute(V,o.join(","))}},ce=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===E)r.innerHTML=t.innerHTML;else if(n===x)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(V,"true"),i.some((function(e,t){return o=t,r.isEqualNode(e)}))?i.splice(o,1):a.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[V]=!0,i=de(r,n),[s.createElement(v.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=ue(r),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+U(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case y:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[V]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===E||r===x){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),s.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===E||e===x)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",o=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:fe(v.BASE,t,n),bodyAttributes:fe(g,r,n),htmlAttributes:fe(y,i,n),link:fe(v.LINK,a,n),meta:fe(v.META,o,n),noscript:fe(v.NOSCRIPT,s,n),script:fe(v.SCRIPT,l,n),style:fe(v.STYLE,c,n),title:fe(v.TITLE,{title:d,titleAttributes:f},n)}},me=d()((function(e){return{baseTag:$([S,Z],e),bodyAttributes:K(g,e),defer:Q(e,I),encode:Q(e,P),htmlAttributes:K(y,e),linkTags:J(v.LINK,[A,S],e),metaTags:J(v.META,[O,w,T,C,k],e),noscriptTags:J(v.NOSCRIPT,[E],e),onChangeClientState:G(e),scriptTags:J(v.SCRIPT,[L,E],e),styleTags:J(v.STYLE,[x],e),title:Y(e),titleAttributes:K(b,e)}}),(function(e){ie&&re(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),pe)((function(){return null})),he=(i=me,o=a=function(e){function t(){return W(this,t),D(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return _({},n,((t={})[r.type]=[].concat(n[r.type]||[],[_({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(n.type){case v.TITLE:return _({},i,((t={})[n.type]=o,t.titleAttributes=_({},a),t));case v.BODY:return _({},i,{bodyAttributes:_({},a)});case v.HTML:return _({},i,{htmlAttributes:_({},a)})}return _({},i,((r={})[n.type]=_({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=_({},t);return Object.keys(e).forEach((function(t){var n;r=_({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[H[r]||r]=e[r],t}),t)}(F(i,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=F(e,["children"]),n=_({},r);return t&&(n=this.mapChildrenToProps(t,n)),s.createElement(i,n)},B(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(s.Component),a.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind;var ge=r(4611),ye=function(){return(0,ge.tZ)("header",null,(0,ge.tZ)("nav",{className:"flex justify-between text-gray-800 py-4 sm:px-6 items-center px-3"},(0,ge.tZ)("span",{className:"font-semibold"},"Gesias"),(0,ge.tZ)("ul",{className:"flex gap-4 items-center"},(0,ge.tZ)("li",{className:"font-semibold"},"Beneficios"),(0,ge.tZ)("li",{className:"font-semibold"},"Precios"),(0,ge.tZ)("li",{className:"hidden sm:block"},(0,ge.tZ)("button",{type:"button",className:"px-2 py-1 bg-blue-900 rounded text-white font-semibold"},"Prueba gratuita")))))},be=r(1496),ve=function(e){var t=e.fluid;return(0,ge.tZ)("div",{className:"grid sm:grid-cols-2"},(0,ge.tZ)("figure",{className:"hidden sm:block"},(0,ge.tZ)(be.Z,{fluid:t})),(0,ge.tZ)("div",{className:"self-center justify-self-center sm:p-10 px-3 py-6"},(0,ge.tZ)("h1",{className:"text-4xl text-gray-800 font-bold mb-2"},"App para tu iglesia"),(0,ge.tZ)("h3",{className:"text-gray-800"},"Administra eficazmente la información de tu iglesia con Gesias"),(0,ge.tZ)("p",{className:"text-gray-800 mb-6"},"¡Preparate para mantener tu iglesia en línea!"),(0,ge.tZ)("div",{className:"grid sm:grid-cols-2 gap-2"},(0,ge.tZ)("button",{type:"button",className:"px-8 py-2 bg-blue-900 rounded text-white font-semibold"},"Prueba gratuita"),(0,ge.tZ)("button",{type:"button",className:"px-8 py-2 bg-blue-400 rounded text-white font-semibold"},"Contáctanos"))))},we=function(e){var t=e.children;return(0,ge.tZ)("h2",{class:"text-4xl font-bold text-center col-span-2 text-gray-800"},t)},xe=r(3047),Se=r.n(xe),Te=r(9322),Ee=r.n(Te),ke=r(9390),Oe=r.n(ke),Ce=function(e){var t=e.fluid;return(0,ge.tZ)("section",{class:"container mx-auto sm:py-12 text-gray-800 px-3 py-6"},(0,ge.tZ)(we,null,"Nuestros beneficios"),(0,ge.tZ)("div",{class:"grid sm:grid-cols-2 place-items-center sm:my-12 my-6 sm:gap-20 gap-4"},(0,ge.tZ)("div",null,(0,ge.tZ)("h3",{class:"text-2xl font-bold mb-2"},"Disponible 24/7 para ti"),(0,ge.tZ)("p",null,"Te ofrecemos un software maestro en la administración y organización de la información de tu iglesia desde cualquierlugar donde tengas conexión")),(0,ge.tZ)("figure",{className:"sm:w-96 relative w-full p-10 sm:p-0"},(0,ge.tZ)("div",{className:"bg-gray-300 bg-opacity-40 rounded-lg sm:w-64 sm:h-64 w-40 h-40 left-0 absolute right-0 transform rotate-45"}),(0,ge.tZ)(be.Z,{fluid:t}))),(0,ge.tZ)("div",{class:"grid sm:grid-cols-3 gap-4 container mx-auto sm:pt-10 pt-5"},(0,ge.tZ)("article",{className:"flex gap-4 sm:block sm:gap-0"},(0,ge.tZ)("figure",{class:"bg-blue-100 rounded p-2 w-max"},(0,ge.tZ)(Se(),{width:32,height:32})),(0,ge.tZ)("h3",{class:"text-xl sm:mt-2 font-semibold"},"Accede desde todos tus dispositivos")),(0,ge.tZ)("article",{className:"flex gap-4 sm:block sm:gap-0"},(0,ge.tZ)("figure",{class:"bg-blue-100 rounded p-2 w-max"},(0,ge.tZ)(Ee(),{width:32,height:32})),(0,ge.tZ)("h3",{class:"text-xl sm:mt-2 font-semibold"},"Información organizada detallada")),(0,ge.tZ)("article",{className:"flex gap-4 sm:block sm:gap-0"},(0,ge.tZ)("figure",{class:"bg-blue-100 rounded p-2 w-max"},(0,ge.tZ)(Oe(),{width:32,height:32})),(0,ge.tZ)("h3",{class:"text-xl sm:mt-2 font-semibold"},"Seguridad en tus datos y usuarios"))))},Ae=[{title:"Ayuda",price:"$ 49.900",description:"Si estás comenzando",services:["Servicio 1","Servicio 2"]},{title:"Mini",price:"$ 89.900",description:"Recomendado si tienes algunos años de servicio",services:["Servicio 1","Servicio 2"]},{title:"Pro",price:"$ 129.900",description:"Especial para ti si cuentas con muchos miembros",services:["Servicio 1","Servicio 2"]},{title:"Pro plus",price:"$ 169.900",description:"Especial para ti si cuentas con muchos miembros y mucha información para mantener en línea",services:["Servicio 1","Servicio 2"]}],Le=function(e){e.fluid;return(0,ge.tZ)("section",{class:"sm:py-12 bg-gray-200 text-gray-800 px-3 py-6"},(0,ge.tZ)("div",{className:"container mx-auto"},(0,ge.tZ)(we,null,"Nuestros precios"),(0,ge.tZ)("div",{class:"grid sm:grid-cols-4 sm:my-12 gap-4 my-6"},Ae.map((function(e,t){return(0,ge.tZ)(s.Fragment,null,2===t?(0,ge.tZ)("div",{className:"bg-blue-400 rounded-md py-5 px-4 text-center text-white"},(0,ge.tZ)("h3",{className:"text-lg font-semibold"},e.title),(0,ge.tZ)("p",{className:"text-5xl font-semibold my-2"},e.price),(0,ge.tZ)("p",{className:"text-gray-100 text-sm h-12"},e.description),(0,ge.tZ)("ul",{className:"mt-4 divide-y"},e.services.map((function(e){return(0,ge.tZ)("li",{className:"p-3"},e)}))),(0,ge.tZ)("button",{type:"button",className:"px-8 mt-8 py-2 w-full bg-white rounded text-blue-400 font-semibold"},"Adquirir")):(0,ge.tZ)("div",{className:"bg-white rounded-md py-5 px-4 text-center"},(0,ge.tZ)("h3",{className:"text-lg font-semibold"},e.title),(0,ge.tZ)("p",{className:"text-5xl font-semibold my-2"},e.price),(0,ge.tZ)("p",{className:"text-gray-600 text-sm h-12"},e.description),(0,ge.tZ)("ul",{className:"mt-4 divide-y"},e.services.map((function(e){return(0,ge.tZ)("li",{className:"p-3"},e)}))),(0,ge.tZ)("button",{type:"button",className:"px-8 mt-8 py-2 w-full bg-blue-400 rounded text-white font-semibold"},"Adquirir")))})))))},Ze=function(e){var t=e.data;return console.log(t),(0,ge.tZ)(s.Fragment,null,(0,ge.tZ)(he,null,(0,ge.tZ)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,ge.tZ)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),(0,ge.tZ)("link",{href:"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap",rel:"stylesheet"})),(0,ge.tZ)("div",{className:"bg-blue-400 bg-opacity-50"},(0,ge.tZ)(ye,null),(0,ge.tZ)(ve,{fluid:t.hero.childImageSharp.fluid})),(0,ge.tZ)("main",null,(0,ge.tZ)(Ce,{fluid:t.pc.childImageSharp.fluid}),(0,ge.tZ)(Le,null)))}},9322:function(e,t,r){var n=r(7294);function i(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"ionicons-v5-a"),n.createElement("rect",{x:"64",y:"176",width:"384",height:"256",rx:"28.87",ry:"28.87",style:{fill:"none",stroke:"#000",strokeLinejoin:"round",strokeWidth:"32px"},key:1}),n.createElement("line",{x1:"144",y1:"80",x2:"368",y2:"80",style:{stroke:"#000",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32px"},key:2}),n.createElement("line",{x1:"112",y1:"128",x2:"400",y2:"128",style:{stroke:"#000",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32px"},key:3})])}i.defaultProps={width:"512",height:"512",viewBox:"0 0 512 512"},e.exports=i,i.default=i},9390:function(e,t,r){var n=r(7294);function i(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"ionicons-v5-g"),n.createElement("path",{d:"M336,208V113a80,80,0,0,0-160,0v95",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"},key:1}),n.createElement("rect",{x:"96",y:"208",width:"320",height:"272",rx:"48",ry:"48",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"},key:2})])}i.defaultProps={width:"512",height:"512",viewBox:"0 0 512 512"},e.exports=i,i.default=i},3047:function(e,t,r){var n=r(7294);function i(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"ionicons-v5-k"),n.createElement("rect",{x:"128",y:"16",width:"256",height:"480",rx:"48",ry:"48",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"},key:1}),n.createElement("path",{d:"M176,16h24a8,8,0,0,1,8,8h0a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16h0a8,8,0,0,1,8-8h24",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"},key:2})])}i.defaultProps={width:"512",height:"512",viewBox:"0 0 512 512"},e.exports=i,i.default=i}}]);
//# sourceMappingURL=component---src-pages-index-js-9e592731b74b2c370746.js.map