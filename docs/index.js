!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){(function(r){var n=t(2),o="undefined"!=typeof window?window:void 0!==r?r:"undefined"!=typeof self?self:{};if(!(i=o.betterJs)){var i;(i=new function(){}).init=function(e){if(e.errorMonitor){console.log("错误监控执行了");var t=n.objectMerge({jsError:!0,resourceError:!0,ajaxError:!0,consoleError:!1,scriptError:!1,vue:!1,autoReport:!0,filters:[],levels:["info","warning","error"],category:["js","resource","ajax"]},e);t.scriptError||t.filters.push(function(){return/^Script error\.?$/.test(arguments[0])});var o=t.sendError;t.sendError=function(e,r,i,a,s){try{if(t.filters.some(e=>n.isFunction(e)&&e.apply(this,arguments)))return;if(o.apply(this,arguments),t.autoReport)return}catch(e){o({title:"betterJs",msg:e,category:"js"})}};var i="undefined"!=typeof window?window:void 0!==r?r:"undefined"!=typeof self?self:{},a=i.addEventListener||i.attachEvent;t.jsError&&n.handleWindowError(i,t),t.jsError&&n.handleRejectPromise(i,t),t.resourceError&&a&&n.handleResourceError(i,t),t.ajaxError&&n.handleAjaxError(i,t),t.consoleError&&n.handleConsoleError(i,t),t.vue&&n.handleVueError(i,t)}if(e.performanceMonitor){var s={};console.log("性能监控执行了"),n.handleAddListener("load",n.getTiming(function(e){e.url=window.location.href,s=e})),e.sendPerformance(s)}};var a={},s=document.scripts;s[s.length-1].src.split("?")[1].split("&").forEach(e=>{a[e.split("=")[0]]=e.split("=")[1]}),console.log(a),i.init({vue:a.vue,errorMonitor:a.errorMonitor,performanceMonitor:a.performanceMonitor,sendError:function(e){$.ajax({xhrFields:{withCredentials:!0},type:"post",data:{date:(new Date).getTime(),projectId:a.projectId,name:a.name,eventId:e.msg.eventId||"",error:JSON.stringify(e)},async:!1,url:a.errorUrl,dataType:"json",success:function(e){if(e.ok)return e;throw new Error(e.status+":"+e.statusText)},error:function(e){throw new Error(e.status+":"+e.statusText)}})},sendPerformance:function(e){$.ajax({xhrFields:{withCredentials:!0},type:"post",data:{date:(new Date).getTime(),projectId:a.projectId,name:a.name,url:e.url,performance:JSON.stringify(e)},async:!1,url:a.performanceError,dataType:"json",success:function(e){if(e.ok)return e;throw new Error(e.status+":"+e.statusText)},error:function(e){throw new Error(e.status+":"+e.statusText)}})}})}o.betterJs=i,e.exports=i}).call(this,t(1))},function(e,r){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,r){function t(e){return"function"==typeof e}function n(e,r){return Object.prototype.hasOwnProperty.call(e,r)}e.exports={isFunction:t,objectMerge:function(e,r){return r?(function(e,r){var t,o;if(function(e){return void 0===e}(e.length))for(t in e)n(e,t)&&r.call(null,t,e[t]);else if(o=e.length)for(t=0;t<o;t++)r.call(null,t,e[t])}(r,function(r,t){e[r]=t}),e):e},handleWindowError:function(e,r){_oldWindowError=e.onerror,e.onerror=function(e,n,o,i,a){var s=`${n}${o}${i}`;a&&a.stack?r.sendError({title:e,msg:{resourceUrl:n,rowNum:o,colNum:i,info:a.stack,filename:n,eventId:s},category:"js",level:"error"}):"string"==typeof e&&r.sendError({title:e,msg:{resourceUrl:n,rowNum:o,colNum:i,info:a.stack,userAgent:a.target.userAgent,filename:n,eventId:s},category:"js",level:"error"}),_oldWindowError&&t(_oldWindowError)&&windowError&&windowError.apply(window,arguments)}},handleRejectPromise:function(e,r){e.addEventListener("unhandledrejection",function(e){if(e){var t=e.reason;r.sendError({title:"unhandledrejection",msg:t,category:"js",level:"error"})}},!0)},handleConsoleError:function(e,r){if(e.console&&e.console.error){var t=e.console.error;e.console.error=function(){r.sendError({title:"consoleError",msg:JSON.stringify(arguments.join(",")),category:"js",level:"error"}),t&&t.apply(e,arguments)}}},handleResourceError:function(e,r){e.addEventListener("error",function(e){if(e){var t=e.target||e.srcElement;if(!(t instanceof HTMLScriptElement||t instanceof HTMLLinkElement||t instanceof HTMLImageElement))return;var n=t.src||t.href;r.sendError({title:t.nodeName,msg:{url:n,eventId:n},category:"resource",level:"error"})}},!0)},handleAjaxError:function(e,r){if("file:"!==e.location.protocol&&(function(e,r){if(!e.fetch)return;let t=e.fetch;e.fetch=function(){return t.apply(this,arguments).then(e=>(e.ok||r.sendError({title:arguments[0],msg:e,category:"ajax",level:"error"}),e)).catch(e=>{throw r.sendError({title:arguments[0],msg:{message:e.message,stack:e.stack},category:"ajax",level:"error"}),e})}}(e,r),e.XMLHttpRequest)){var t=e.XMLHttpRequest,n=t.prototype.send,o=function(e){e&&e.currentTarget&&200!==e.currentTarget.status&&r.sendError({title:e.target.responseURL,msg:{response:e.target.response,responseURL:e.target.responseURL,status:e.target.status,statusText:e.target.statusText,eventId:e.target.responseURL},category:"ajax",level:"error"})};t.prototype.send=function(){if(this.addEventListener)this.addEventListener("error",o),this.addEventListener("load",o),this.addEventListener("abort",o);else{var e=this.onreadystatechange;this.onreadystatechange=function(r){4===this.readyState&&o(r),e&&e.apply(this,arguments)}}return n.apply(this,arguments)}}},handleVueError:function(e,r){var n=e.Vue;if(n&&n.config){var o=n.config.errorHandler;Vue.config.errorHandler=function(e,n,i){var a={};"[object Object]"===Object.prototype.toString.call(n)&&(a.componentName=n._isVue?n.$options.name||n.$options._componentTag:n.name,a.propsData=n.$options.propsData),r.sendError({title:"vue Error",msg:{meta:a,info:i},category:"js",level:"error"}),o&&t(o)&&_oldOnError.call(this,e,n,i)}}},handleAddListener:function(e,r){window.addEventListener?window.addEventListener(e,r):window.attachEvent("on"+e,r)},getTiming:function e(r){try{var t=window.performance&&window.performance.timing,n=window.performance&&window.performance.navigation,o={redirectNums:0,redirecttime:0,DNSAnalyseTime:0,TCPHandshakeTime:0,httpRequestResTime:0,domStartLoadingTime:0,domFinishLoadingTime:0,domAnalysisCompletionTime:0,scriptLoadingTime:0,onLoadEventTime:0,pageFinishLoadingTime:0};if((t.loadEventEnd-t.loadEventStart)/1e3<0)return void setTimeout(function(){e()},200);o.redirectNums=n&&n.redirectCount,o.redirecttimeredirecttime=(t.redirectEnd-t.redirectStart)/1e3,o.DNSAnalyseTime=(t.domainLookupEnd-t.domainLookupStart)/1e3,o.TCPHandshakeTime=(t.connectEnd-t.connectStart)/1e3,o.httpRequestResTime=(t.responseEnd-t.requestStart)/1e3,o.domStartLoadingTime=(t.responseEnd-t.navigationStart)/1e3,o.domFinishLoadingTime=(t.domComplete-t.domLoading)/1e3,o.domAnalysisCompletionTime=(t.domInteractive-t.domLoading)/1e3,o.scriptLoadingTime=(t.domContentLoadedEventEnd-t.domContentLoadedEventStart)/1e3,o.onLoadEventTime=(t.loadEventEnd-t.loadEventStart)/1e3,o.pageFinishLoadingTime=o.redirecttime+o.DNSAnalyseTime+o.TCPHandshakeTime+o.httpRequestResTime+o.domAnalysisCompletionTime+o.domFinishLoadingTime,r(o)}catch(e){console.log("test:"+o),console.log("timing:"+performance.timing)}}}}]);