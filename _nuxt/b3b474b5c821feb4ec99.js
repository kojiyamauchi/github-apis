(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{186:function(t,e,n){var content=n(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("0b7f6d5b",content,!1,{sourceMap:!1})},193:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var o,r=n(10),c=(n(71),n(0)),l=n(72),f=(o=function(t,b){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),d=function(t,e,n,desc){var o,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(r.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(c<3?o(l):c>3?o(e,n,l):o(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},h=function(t){function e(){var e=t.call(this)||this;return e.checkMobile=/(iPhone|iPad|iPod|Android)/i,e.timeID=null,e}return f(e,t),e.prototype.checkDirection=function(){if(this.checkMobile.test(navigator.userAgent))return this.$store.state.isResize?this.$store.commit("offResize"):screen.width>screen.height?this.$store.commit("onLandscape"):this.$store.commit("offLandscape")},e.prototype.checkResize=function(){var t=this;if(!this.checkMobile.test(navigator.userAgent)){if(this.$store.state.isLandscape)return this.$store.commit("offLandscape");if(!this.$store.state.isResize)return this.$store.commit("onResize");clearTimeout(this.timeID),this.timeID=setTimeout(function(){t.$store.commit("offResize")},750)}},e.prototype.created=function(){this.checkDirection(),window.addEventListener("orientationchange",this.checkDirection),window.addEventListener("resize",this.checkResize)},e.prototype.beforeDestroy=function(){window.removeEventListener("resize",this.checkResize)},e=d([l.Mixin],e)}(c.default)},195:function(t,e,n){var content=n(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("5f6c5787",content,!1,{sourceMap:!1})},196:function(t,e,n){var content=n(241);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("8134016a",content,!1,{sourceMap:!1})},199:function(t,e,n){"use strict";var o=n(186);n.n(o).a},200:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,".page-back[data-v-641b4e99]{display:flex;justify-content:center;align-items:center;width:65px;height:65px;background-color:#555;border-radius:32.5px;position:fixed;right:5px;bottom:5px}.page-back-link[data-v-641b4e99]{color:#fff;font-weight:300}",""])},205:function(t,e,n){"use strict";var o,r=n(10),c=(n(71),n(36)),l=(o=function(t,b){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),f=function(t,e,n,desc){var o,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(r.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(c<3?o(l):c>3?o(e,n,l):o(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},d=function(t){function e(){return t.call(this)||this}return l(e,t),e=f([Object(c.Component)({})],e)}(c.Vue),h=(n(199),n(16)),component=Object(h.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-back"},[e("nuxt-link",{staticClass:"page-back-link",attrs:{to:"/"}},[this._v("PAGE"),e("br"),this._v("BACK")])],1)},[],!1,null,"641b4e99",null);e.a=component.exports},235:function(t,e,n){var content=n(347);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("1f2bde62",content,!1,{sourceMap:!1})},236:function(t,e,n){var content=n(349);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("1b932385",content,!1,{sourceMap:!1})},237:function(t,e,n){var content=n(351);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("4acc564d",content,!1,{sourceMap:!1})},238:function(t,e,n){"use strict";var o=n(195);n.n(o).a},239:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,".display-field[data-v-23710096]{display:block;width:80%;height:40px;line-height:40px;margin:0 0 30px;padding:0 20px;border:1px solid rgba(0,0,0,.5);border-radius:4px;box-shadow:1px 1px 1px rgba(0,0,0,.25);overflow:hidden;text-overflow:ellipsis}@media (min-width:1170px){.display-field[data-v-23710096]{width:auto;min-width:462px}}",""])},240:function(t,e,n){"use strict";var o=n(196);n.n(o).a},241:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,'.select-field[data-v-1a261de2]{display:block;width:80%;height:40px;margin:0 0 30px;position:relative}.select-field[data-v-1a261de2]:after{content:">>";display:block;position:absolute;top:50%;right:5px;-webkit-transform:translateY(-50%) rotate(90deg);transform:translateY(-50%) rotate(90deg)}@media (min-width:1170px){.select-field[data-v-1a261de2]{width:auto;min-width:462px}}.select[data-v-1a261de2]{font-size:16px;color:#555;width:100%;height:100%;background-color:transparent;padding:0 20px;border:1px solid rgba(0,0,0,.5);border-radius:4px;overflow:hidden;text-overflow:ellipsis;box-shadow:1px 1px 1px rgba(0,0,0,.25);transition:border .25s ease-in}.select[data-v-1a261de2]:hover{cursor:pointer;border:1px solid rgba(0,241,255,.5);transition:border .25s ease-out}',""])},242:function(t,e,n){var content=n(353);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("cb61cbb0",content,!1,{sourceMap:!1})},247:function(t,e,n){"use strict";var o,r=n(10),c=(n(71),n(36)),l=(o=function(t,b){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),f=function(t,e,n,desc){var o,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(r.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(c<3?o(l):c>3?o(e,n,l):o(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},d=function(t){function e(){var e=t.call(this)||this;return e.value=null,e}return l(e,t),e.prototype.addValue=function(){return this.value=this.propDataBase[this.propKey]?this.propDataBase[this.propKey]:"Value is None."},f([Object(c.Prop)({type:Object,default:null})],e.prototype,"propDataBase",void 0),f([Object(c.Prop)({type:String,default:null})],e.prototype,"propKey",void 0),f([Object(c.Watch)("propKey")],e.prototype,"addValue",null),e=f([Object(c.Component)({})],e)}(c.Vue),h=(n(238),n(16)),component=Object(h.a)(d,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"display-field"},[this._v(this._s(this.value))])},[],!1,null,"23710096",null);e.a=component.exports},248:function(t,e,n){"use strict";n(75),n(37),n(20),n(73);var o,r=n(10),c=(n(71),n(36)),l=(o=function(t,b){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),f=function(t,e,n,desc){var o,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(r.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(c<3?o(l):c>3?o(e,n,l):o(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},d=function(t){function e(){var e=t.call(this)||this;return e.selected=null,e}return l(e,t),Object.defineProperty(e.prototype,"options",{get:function(){var t=this;return Object.keys(this.propDataBase).map(function(e,n){var o={id:n+1,value:e,letter:e.toUpperCase().replace(/_/g," ")};return 1===o.id&&(t.selected=o.value),o})},enumerable:!0,configurable:!0}),e.prototype.addKey=function(){this.$emit("getKey",this.selected)},f([Object(c.Prop)({type:Object,default:null})],e.prototype,"propDataBase",void 0),f([Object(c.Watch)("selected")],e.prototype,"addKey",null),e=f([Object(c.Component)({})],e)}(c.Vue),h=(n(240),n(16)),component=Object(h.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select-field"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?n:n[0]}}},t._l(t.options,function(option,e){return n("option",{key:option.id,staticClass:"option",domProps:{value:option.value}},[t._v(t._s(option.letter))])}),0)])},[],!1,null,"1a261de2",null);e.a=component.exports},346:function(t,e,n){"use strict";var o=n(235);n.n(o).a},347:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,".loading[data-v-391d87f4]{display:block;width:80%;height:40px}@media (min-width:1170px){.loading[data-v-391d87f4]{width:auto;min-width:462px}}.letter[data-v-391d87f4]{display:inline-block;font-size:16px;color:#555;line-height:40px;will-change:transform}.letter.is-active[data-v-391d87f4]{-webkit-animation:bounce-data-v-391d87f4 .75s ease-out infinite;animation:bounce-data-v-391d87f4 .75s ease-out infinite}@-webkit-keyframes bounce-data-v-391d87f4{0%{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg)}25%{-webkit-transform:scale(1.125) rotate(-10deg);transform:scale(1.125) rotate(-10deg)}50%{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg)}75%{-webkit-transform:scale(1.125) rotate(10deg);transform:scale(1.125) rotate(10deg)}to{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg)}}@keyframes bounce-data-v-391d87f4{0%{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg)}25%{-webkit-transform:scale(1.125) rotate(-10deg);transform:scale(1.125) rotate(-10deg)}50%{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg)}75%{-webkit-transform:scale(1.125) rotate(10deg);transform:scale(1.125) rotate(10deg)}to{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg)}}",""])},348:function(t,e,n){"use strict";var o=n(236);n.n(o).a},349:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,".get-token[data-v-73a8164d]{font-size:16px;color:#555;display:block;width:80%;height:40px;background-color:transparent;padding:0 20px;border:1px solid rgba(0,0,0,.5);border-radius:4px;box-shadow:1px 1px 1px rgba(0,0,0,.25);transition:border .25s ease-in}@media (min-width:1170px){.get-token[data-v-73a8164d]{width:auto;min-width:462px}}.get-token[data-v-73a8164d]:hover{cursor:pointer;border:1px solid rgba(0,241,255,.5);transition:border .25s ease-out}",""])},350:function(t,e,n){"use strict";var o=n(237);n.n(o).a},351:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,".display-state-token[data-v-432833a6]{display:block;width:80%;height:40px;line-height:40px;color:#fff;background-color:#555;margin:0 0 20px;padding:0 20px;border:1px solid rgba(0,0,0,.5);border-radius:4px;box-shadow:1px 1px 1px rgba(0,0,0,.25)}@media (min-width:1170px){.display-state-token[data-v-432833a6]{width:auto;min-width:462px}}",""])},352:function(t,e,n){"use strict";var o=n(242);n.n(o).a},353:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,".oauth[data-v-3cb64680]{width:100%;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.heading[data-v-3cb64680]{font-size:24px;padding:0 10%}.description[data-v-3cb64680]{line-height:1.5em;margin:0 0 30px;padding:0 10%}",""])},362:function(t,e,n){"use strict";n.r(e);n(54),n(55),n(20);var o=n(10),r=(n(71),n(36)),c=n(269),l=(n(342),new c.auth.GithubAuthProvider);l.addScope("user"),l.addScope("repo");var f,d=c.apps.length?c.app():c.initializeApp({apiKey:"AIzaSyBjwAEriPEf8Td0mMN5usgGZhqhMz4pDBM",authDomain:"github-apis-on-github-pages.firebaseapp.com",databaseURL:"https://github-apis-on-github-pages.firebaseio.com",projectId:"github-apis-on-github-pages",storageBucket:"github-apis-on-github-pages.appspot.com",messagingSenderId:"440267000331"}),h=n(74),y=n.n(h),v=(n(76),n(344),f=function(t,b){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}f(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),m=function(t,e,n,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,n,l):r(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},w=function(t,e,n,o){return new(n||(n=Promise))(function(r,c){function l(t){try{d(o.next(t))}catch(t){c(t)}}function f(t){try{d(o.throw(t))}catch(t){c(t)}}function d(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(l,f)}d((o=o.apply(t,e||[])).next())})},x=function(t,body){var e,n,o,g,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(l){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;r;)try{if(e=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,n=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){r=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){r.label=c[1];break}if(6===c[0]&&r.label<o[1]){r.label=o[1],o=c;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(c);break}o[2]&&r.ops.pop(),r.trys.pop();continue}c=body.call(t,r)}catch(t){c=[6,t],n=0}finally{e=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}},_=function(t){function e(){var e=t.call(this)||this;return e.letter="Check Token Now...",e}return v(e,t),Object.defineProperty(e.prototype,"addLetters",{get:function(){return Array.from(this.letter,function(t,e){return{id:e+1,letter:t}})},enumerable:!0,configurable:!0}),e.prototype.letterBounce=function(){var t=this;Array.from(this.$el.children,function(e,n){return w(t,void 0,void 0,function(){return x(this,function(t){switch(t.label){case 0:return[4,this.$mixins.sleep(75*n)];case 1:return t.sent(),e.classList.add("is-active"),[2]}})})})},e.prototype.mounted=function(){this.letterBounce()},e=m([Object(r.Component)({})],e)}(r.Vue),O=(n(346),n(16)),k=Object(O.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},t._l(t.addLetters,function(e,o){return n("span",{key:e.id,staticClass:"letter"},[t._v(t._s(e.letter))])}),0)},[],!1,null,"391d87f4",null).exports,j=function(){var t=function(e,b){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(e,b)};return function(e,b){function n(){this.constructor=e}t(e,b),e.prototype=null===b?Object.create(b):(n.prototype=b.prototype,new n)}}(),P=function(t,e,n,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,n,l):r(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},R=function(t){function e(){return t.call(this)||this}return j(e,t),e=P([Object(r.Component)({})],e)}(r.Vue),D=(n(348),Object(O.a)(R,function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"get-token"},[this._v("GET TOKEN")])},[],!1,null,"73a8164d",null).exports),A=function(){var t=function(e,b){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(e,b)};return function(e,b){function n(){this.constructor=e}t(e,b),e.prototype=null===b?Object.create(b):(n.prototype=b.prototype,new n)}}(),C=function(t,e,n,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,n,l):r(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},T=function(t){function e(){return t.call(this)||this}return A(e,t),e=C([Object(r.Component)({})],e)}(r.Vue),B=(n(350),Object(O.a)(T,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"display-state-token"},[this._v("You Got Token!!!")])},[],!1,null,"432833a6",null).exports),E=n(247),$=n(248),z=n(205),K=n(72),L=n(193),M=function(){var t=function(e,b){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(e,b)};return function(e,b){function n(){this.constructor=e}t(e,b),e.prototype=null===b?Object.create(b):(n.prototype=b.prototype,new n)}}(),S=function(t,e,n,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,n,l):r(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},G=function(t,e,n,o){return new(n||(n=Promise))(function(r,c){function l(t){try{d(o.next(t))}catch(t){c(t)}}function f(t){try{d(o.throw(t))}catch(t){c(t)}}function d(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(l,f)}d((o=o.apply(t,e||[])).next())})},I=function(t,body){var e,n,o,g,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(l){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;r;)try{if(e=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,n=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){r=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){r.label=c[1];break}if(6===c[0]&&r.label<o[1]){r.label=o[1],o=c;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(c);break}o[2]&&r.ops.pop(),r.trys.pop();continue}c=body.call(t,r)}catch(t){c=[6,t],n=0}finally{e=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}},V=function(t){function e(){var e=t.call(this)||this;return e.result=null,e.inToken=null,e.loading=!0,e.API_BASE_URL="https://api.github.com",e.key="",e.adddDataBase=null,e}return M(e,t),e.prototype.getAPI=function(){return G(this,void 0,void 0,function(){var t;return I(this,function(e){switch(e.label){case 0:return[4,y.a.create({baseURL:this.API_BASE_URL,headers:{Authorization:"token "+this.inToken}}).get("/user")];case 1:return t=e.sent(),[2,this.adddDataBase=t.data]}})})},e.prototype.checkOAuth=function(){return G(this,void 0,void 0,function(){var t,e;return I(this,function(n){switch(n.label){case 0:return t=this,[4,d.auth().getRedirectResult()];case 1:return t.result=n.sent(),this.result.credential?(e=this,[4,this.result.credential.accessToken]):[3,4];case 2:return e.inToken=n.sent(),[4,this.getAPI()];case 3:return n.sent(),this.loading=!1,[3,5];case 4:this.loading=!1,n.label=5;case 5:return[2,this.inToken]}})})},e.prototype.getToken=function(){d.auth().signInWithRedirect(l)},e.prototype.checkKey=function(t){return this.key=t},Object.defineProperty(e.prototype,"addKey",{get:function(){return this.key},enumerable:!0,configurable:!0}),e.prototype.mounted=function(){this.checkOAuth()},e.prototype.beforeRouteEnter=function(t,e,n){n(),console.log("Call Navigation Guard"),console.log(t),console.log(e),console.log(n)},e=S([Object(r.Component)({components:{Loading:k,GetToken:D,DisplayGetToken:B,DisplayField:E.a,SelectField:$.a,PageBack:z.a}})],e)}(Object(K.Mixins)(L.a)),N=(n(352),Object(O.a)(V,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"oauth"},[n("h1",{staticClass:"heading"},[t._v("GitHub’s OAuth & Get Token, on FireBase. 🍵")]),t._m(0),t.loading?[n("Loading")]:t.inToken?[n("DisplayGetToken"),n("DisplayField",{attrs:{propDataBase:t.adddDataBase,propKey:t.addKey}}),n("SelectField",{attrs:{propDataBase:t.adddDataBase},on:{getKey:t.checkKey}})]:[n("GetToken",{nativeOn:{click:function(e){return t.getToken(e)}}})],n("PageBack")],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"description"},[e("br"),this._v("Sample Test Sample Test."),e("br")])}],!1,null,"3cb64680",null));e.default=N.exports}}]);