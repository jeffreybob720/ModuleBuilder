parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,r,t,n,o,a,i){try{var s=e[a](i),c=s.value}catch(u){return void t(u)}s.done?r(c):Promise.resolve(c).then(n,o)}function r(r){return function(){var t=this,n=arguments;return new Promise(function(o,a){var i=r.apply(t,n);function s(r){e(i,o,a,s,c,"next",r)}function c(r){e(i,o,a,s,c,"throw",r)}s(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t="1.0.2",n={gooseModHandlers:{onImport:function(){var e=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:void 0===window.localStorage&&alert("Clear Recent Games: Could not find localStorage, will not work");case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onLoadingFinished:function(){var e=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:goosemodScope.settings.createItem("Clear Recent Games",[""],r(regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,goosemodScope.confirmDialog("Clear","Clear Recent Games","Are you sure you want to clear your recent games?");case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return(r=JSON.parse(localStorage.getItem("RunningGameStore"))).gamesSeen=[],localStorage.setItem("RunningGameStore",JSON.stringify(r)),e.next=9,goosemodScope.confirmDialog("Reload","Reload Discord","To actually update the recent games after clearing it, Discord requires a reload. Without it, it will still look like recent games have not been cleared. This will also uninstall GooseMod due to reloading.");case 9:if(!e.sent){e.next=11;break}window.location.reload();case 11:case"end":return e.stop()}},e)})));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=r(regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=goosemodScope.settings.items.find(function(e){return"Clear Recent Games"===e[1]}),goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(r),1);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),logRegionColor:"darkred"}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default