!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){(function(e){var r=t(2),n="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};if(!(o=n.betterJs)){var o;(o=new function(){}).init=function(t){if(t.errorMonitor){console.log("错误监控执行了");var n=r.objectMerge({jsError:!0,resourceError:!0,ajaxError:!0,consoleError:!1,scriptError:!1,vue:!1,autoReport:!0,filters:[],levels:["info","warning","error"],category:["js","resource","ajax"]},t);n.scriptError||n.filters.push(function(){return/^Script error\.?$/.test(arguments[0])});var i=n.sendError;n.sendError=function(e,t,o,a,s){try{if(n.filters.some(e=>r.isFunction(e)&&e.apply(this,arguments)))return;if(i.apply(this,arguments),n.autoReport)return}catch(e){i({title:"betterJs",msg:e,category:"js"})}};var a="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},s=a.addEventListener||a.attachEvent;n.jsError&&r.handleWindowError(a,n),n.jsError&&r.handleRejectPromise(a,n),n.resourceError&&s&&r.handleResourceError(a,n),n.ajaxError&&r.handleAjaxError(a,n),n.consoleError&&r.handleConsoleError(a,n),n.vue&&r.handleVueError(a,n)}t.performanceMonitor&&(console.log("性能监控执行了"),window.addEventListener("load",()=>{var e=setInterval(()=>{var r=window.performance&&window.performance.timing,n=window.performance&&window.performance.navigation,o={redirectNums:0,redirecttime:0,DNSAnalyseTime:0,TCPHandshakeTime:0,httpRequestResTime:0,domStartLoadingTime:0,domFinishLoadingTime:0,domAnalysisCompletionTime:0,scriptLoadingTime:0,onLoadEventTime:0,pageFinishLoadingTime:0};o={};(r.loadEventEnd-r.loadEventStart)/1e3>0&&(o.redirectNums=n&&n.redirectCount,o.redirecttimeredirecttime=(r.redirectEnd-r.redirectStart)/1e3,o.DNSAnalyseTime=(r.domainLookupEnd-r.domainLookupStart)/1e3,o.TCPHandshakeTime=(r.connectEnd-r.connectStart)/1e3,o.httpRequestResTime=(r.responseEnd-r.requestStart)/1e3,o.domStartLoadingTime=(r.responseEnd-r.navigationStart)/1e3,o.domFinishLoadingTime=(r.domComplete-r.domLoading)/1e3,o.domAnalysisCompletionTime=(r.domInteractive-r.domLoading)/1e3,o.scriptLoadingTime=(r.domContentLoadedEventEnd-r.domContentLoadedEventStart)/1e3,o.onLoadEventTime=(r.loadEventEnd-r.loadEventStart)/1e3,o.pageFinishLoadingTime=o.redirecttime+o.DNSAnalyseTime+o.TCPHandshakeTime+o.httpRequestResTime+o.domAnalysisCompletionTime+o.domFinishLoadingTime,o.url=window.location.href,clearInterval(e),t.sendPerformance(o))},1e3)}));var d={},c=document.scripts;c[c.length-1].src.split("?")[1].split("&").forEach(e=>{d[e.split("=")[0]]=e.split("=")[1]}),o.init({vue:d.vue,errorMonitor:d.errorMonitor,performanceMonitor:d.performanceMonitor,sendError:function(e){e.application=window.navigator.userAgent,$.ajax({xhrFields:{withCredentials:!0},type:"post",data:{date:(new Date).getTime(),projectId:d.projectId,name:d.name,eventId:e.msg.eventId||"",error:JSON.stringify(e)},async:!1,url:d.errorUrl,dataType:"json",success:function(e){if(e.ok)return e;throw new Error(e.status+":"+e.statusText)},error:function(e){throw new Error(e.status+":"+e.statusText)}})},sendPerformance:function(e){$.ajax({xhrFields:{withCredentials:!0},type:"post",data:{date:(new Date).getTime(),projectId:d.projectId,name:d.name,url:e.url,performance:JSON.stringify(e)},async:!1,url:d.performanceError,dataType:"json",success:function(e){if(e.ok)return e;throw new Error(e.status+":"+e.statusText)},error:function(e){throw new Error(e.status+":"+e.statusText)}})}})}}n.betterJs=o}).call(this,t(1))},function(e,r){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,r){function t(e){return"function"==typeof e}function n(e,r){return Object.prototype.hasOwnProperty.call(e,r)}e.exports={isFunction:t,objectMerge:function(e,r){return r?(function(e,r){var t,o;if(function(e){return void 0===e}(e.length))for(t in e)n(e,t)&&r.call(null,t,e[t]);else if(o=e.length)for(t=0;t<o;t++)r.call(null,t,e[t])}(r,function(r,t){e[r]=t}),e):e},handleWindowError:function(e,r){_oldWindowError=e.onerror,e.onerror=function(e,n,o,i,a){var s=`${n}${o}${i}`;a&&a.stack?r.sendError({title:e,msg:{resourceUrl:n,rowNum:o,colNum:i,info:a.stack,filename:n,eventId:s},category:"js",level:"error"}):"string"==typeof e&&r.sendError({title:e,msg:{resourceUrl:n,rowNum:o,colNum:i,info:a.stack,userAgent:a.target.userAgent,filename:n,eventId:s},category:"js",level:"error"}),_oldWindowError&&t(_oldWindowError)&&windowError&&windowError.apply(window,arguments)}},handleRejectPromise:function(e,r){e.addEventListener("unhandledrejection",function(e){if(e){var t=e.reason;r.sendError({title:"unhandledrejection",msg:t,category:"js",level:"error"})}},!0)},handleConsoleError:function(e,r){if(e.console&&e.console.error){var t=e.console.error;e.console.error=function(){r.sendError({title:"consoleError",msg:JSON.stringify(arguments.join(",")),category:"js",level:"error"}),t&&t.apply(e,arguments)}}},handleResourceError:function(e,r){e.addEventListener("error",function(e){if(e){var t=e.target||e.srcElement;if(!(t instanceof HTMLScriptElement||t instanceof HTMLLinkElement||t instanceof HTMLImageElement))return;var n=t.src||t.href;r.sendError({title:t.nodeName,msg:{url:n,eventId:n},category:"resource",level:"error"})}},!0)},handleAjaxError:function(e,r){if("file:"!==e.location.protocol&&(function(e,r){if(!e.fetch)return;let t=e.fetch;e.fetch=function(){return t.apply(this,arguments).then(e=>(e.ok||r.sendError({title:arguments[0],msg:e,category:"ajax",level:"error"}),e)).catch(e=>{throw r.sendError({title:arguments[0],msg:{message:e.message,stack:e.stack},category:"ajax",level:"error"}),e})}}(e,r),e.XMLHttpRequest)){var t=e.XMLHttpRequest,n=t.prototype.send,o=function(e){e&&e.currentTarget&&200!==e.currentTarget.status&&r.sendError({title:e.target.responseURL,msg:{response:e.target.response,responseURL:e.target.responseURL,status:e.target.status,statusText:e.target.statusText,eventId:e.target.responseURL},category:"ajax",level:"error"})};t.prototype.send=function(){if(this.addEventListener)this.addEventListener("error",o),this.addEventListener("load",o),this.addEventListener("abort",o);else{var e=this.onreadystatechange;this.onreadystatechange=function(r){4===this.readyState&&o(r),e&&e.apply(this,arguments)}}return n.apply(this,arguments)}}},handleVueError:function(e,r){var n=e.Vue;if(n&&n.config){var o=n.config.errorHandler;Vue.config.errorHandler=function(e,n,i){var a={};"[object Object]"===Object.prototype.toString.call(n)&&(a.componentName=n._isVue?n.$options.name||n.$options._componentTag:n.name,a.propsData=n.$options.propsData),r.sendError({title:"vue Error",msg:{meta:a,info:i},category:"js",level:"error"}),o&&t(o)&&_oldOnError.call(this,e,n,i)}}},handleAddListener:handleAddListener}}]);