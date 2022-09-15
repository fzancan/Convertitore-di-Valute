"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["profile"],{65935(a,b,c){c.d(b,{AC:()=>j,rK:()=>i,uT:()=>h});class ErrorWithResponse extends Error{constructor(a,b){super(a),this.response=b}}function d(){let a,b,c=new Promise(function(c,d){a=c,b=d});return[c,a,b]}let e,f=[],g=[];function h(a){f.push(a)}function i(a){g.push(a)}function j(a,b){e||(e=new Map,document.addEventListener("submit",k));let c=e.get(a)||[];e.set(a,[...c,b])}function k(a){if(!(a.target instanceof HTMLFormElement)||a.defaultPrevented)return;let b=a.target,c=function(a){let b=[];for(let c of e.keys())if(a.matches(c)){let d=e.get(c)||[];b.push(...d)}return b}(b);if(0===c.length)return;let h=m(b),[i,j,k]=d();a.preventDefault(),l(c,b,h,i).then(async a=>{if(a){for(let c of g)await c(b);n(h).then(j,k).catch(()=>{}).then(()=>{for(let a of f)a(b)})}else b.submit()},a=>{b.submit(),setTimeout(()=>{throw a})})}async function l(a,b,c,e){let f=!1;for(let g of a){let[h,i]=d(),j=()=>(f=!0,i(),e),k={text:j,json:()=>(c.headers.set("Accept","application/json"),j()),html:()=>(c.headers.set("Accept","text/html"),j())};await Promise.race([h,g(b,k,c)])}return f}function m(a){let b={method:a.method||"GET",url:a.action,headers:new Headers({"X-Requested-With":"XMLHttpRequest"}),body:null};if("GET"===b.method.toUpperCase()){let c=function(a){let b=new URLSearchParams,c=new FormData(a).entries();for(let[d,e]of[...c])b.append(d,e.toString());return b.toString()}(a);c&&(b.url+=(~b.url.indexOf("?")?"&":"?")+c)}else b.body=new FormData(a);return b}async function n(a){let b=await window.fetch(a.url,{method:a.method,body:null!==a.body?a.body:void 0,headers:a.headers,credentials:"same-origin"}),c={url:b.url,status:b.status,statusText:b.statusText,headers:b.headers,text:"",get json(){let d=this,e=JSON.parse(d.text);return delete d.json,d.json=e,d.json},get html(){let f=this;return delete f.html,f.html=function(a,b){let c=a.createElement("template");return c.innerHTML=b,a.importNode(c.content,!0)}(document,f.text),f.html}},g=await b.text();if(c.text=g,b.ok)return c;throw new ErrorWithResponse("request failed",c)}},98105(a,b,c){function d(a){let b=a.getBoundingClientRect();return{top:b.top+window.pageYOffset,left:b.left+window.pageXOffset}}function e(a){let b=a,c=b.ownerDocument;if(!c||!b.offsetParent)return;let d=c.defaultView.HTMLElement;if(b!==c.body){for(;b!==c.body;){if(!(b.parentElement instanceof d))return;b=b.parentElement;let{position:e,overflowY:f,overflowX:g}=getComputedStyle(b);if("fixed"===e||"auto"===f||"auto"===g||"scroll"===f||"scroll"===g)break}return b instanceof Document?null:b}}function f(a,b){let c=b,d=a.ownerDocument;if(!d)return;let e=d.documentElement;if(!e||a===e)return;let f=g(a,c);if(!f)return;c=f._container;let h=c===d.documentElement&&d.defaultView?{top:d.defaultView.pageYOffset,left:d.defaultView.pageXOffset}:{top:c.scrollTop,left:c.scrollLeft},i=f.top-h.top,j=f.left-h.left,k=c.clientHeight,l=c.clientWidth,m=k-(i+a.offsetHeight),n=l-(j+a.offsetWidth);return{top:i,left:j,bottom:m,right:n,height:k,width:l}}function g(a,b){let c=a,d=c.ownerDocument;if(!d)return;let e=d.documentElement;if(!e)return;let f=d.defaultView.HTMLElement,g=0,j=0,k=c.offsetHeight,l=c.offsetWidth;for(;!(c===d.body||c===b);){if(g+=c.offsetTop||0,j+=c.offsetLeft||0,!(c.offsetParent instanceof f))return;c=c.offsetParent}let m,n,o;if(b&&b!==d&&b!==d.defaultView&&b!==d.documentElement&&b!==d.body){if(!(b instanceof f))return;o=b,m=b.scrollHeight,n=b.scrollWidth}else o=e,m=h(d.body,e),n=i(d.body,e);let p=m-(g+k),q=n-(j+l);return{top:g,left:j,bottom:p,right:q,_container:o}}function h(a,b){return Math.max(a.scrollHeight,b.scrollHeight,a.offsetHeight,b.offsetHeight,b.clientHeight)}function i(a,b){return Math.max(a.scrollWidth,b.scrollWidth,a.offsetWidth,b.offsetWidth,b.clientWidth)}c.d(b,{VZ:()=>e,"_C":()=>f,cv:()=>d,oE:()=>g})},55240(a,b,c){c.d(b,{k:()=>h});var d=c(76932),e=c(80721),f=c(64463),g=c(98105);async function h(a){await e.C,j(a)}function i(a,b){a.style.visibility=b?"hidden":"";let c=a.getAttribute("data-tab-item");if(c){let d=document.querySelector(`[data-menu-item=${c}]`);d instanceof HTMLElement&&(d.hidden=!b)}}function j(a){let b=a.querySelectorAll(".js-responsive-underlinenav-item"),c=a.querySelector(".js-responsive-underlinenav-overflow"),d=(0,g.oE)(c,a);if(!d)return;let e=!1;for(let f of b){let h=(0,g.oE)(f,a);if(h){let j=h.left+f.offsetWidth>=d.left;i(f,j),e=e||j}}c.style.visibility=e?"":"hidden"}(0,f.N7)(".js-responsive-underlinenav",{constructor:HTMLElement,subscribe:a=>(h(a),(0,d.RB)(window,"resize",()=>j(a)))})},80721(a,b,c){c.d(b,{C:()=>e,x:()=>d});let d="interactive"===document.readyState||"complete"===document.readyState?Promise.resolve():new Promise(a=>{document.addEventListener("DOMContentLoaded",()=>{a()})}),e="complete"===document.readyState?Promise.resolve():new Promise(a=>{window.addEventListener("load",a)})},98249(a,b,c){c.d(b,{D:()=>g,a:()=>f});var d=c(2825),e=c(75662);async function f(a,b,c){let f=new Request(b,c);f.headers.append("X-Requested-With","XMLHttpRequest");let g=await self.fetch(f);if(g.status<200||g.status>=300)throw Error(`HTTP ${g.status}${g.statusText||""}`);return(0,d.t)((0,d.P)(a),g),(0,e.r)(a,await g.text())}function g(a,b,c=1e3){return async function c(d){let e=new Request(a,b);e.headers.append("X-Requested-With","XMLHttpRequest");let f=await self.fetch(e);if(f.status<200||f.status>=300)throw Error(`HTTP ${f.status}${f.statusText||""}`);if(200===f.status)return f;if(202===f.status)return await new Promise(a=>setTimeout(a,d)),c(1.5*d);throw Error(`Unexpected ${f.status} response status from poll endpoint`)}(c)}},9302(a,b,c){c.d(b,{IW:()=>j,Mw:()=>o,"_C":()=>n,lO:()=>m,qA:()=>l,y0:()=>g});let d=[],e=0,f;function g(){return f}function h(){try{return Math.min(Math.max(0,history.length)||0,9007199254740991)}catch(a){return 0}}function i(){return h()-1+e}function j(a){f=a;let b=location.href;d[i()]={url:b,state:f},d.length=h(),window.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}function k(){return new Date().getTime()}function l(a,b,c){e=0;let d={_id:k(),...a};history.pushState(d,b,c),j(d)}function m(a,b,c){let d={...f,...a};history.replaceState(d,b,c),j(d)}function n(){let a=d[i()-1];if(a)return a.url}function o(){let a=d[i()+1];if(a)return a.url}f=function(){let a={_id:new Date().getTime(),...history.state};return j(a),a}(),window.addEventListener("popstate",function(a){let b=a.state;if(!b|| !b._id&&!b.turbo?.restorationIdentifier)return;let c=b.turbo?.restorationIdentifier,f=d[i()-1]?.state?.turbo?.restorationIdentifier;f===c?e--:e++,j(b)},!0);let p;window.addEventListener("turbo:visit",a=>{a instanceof CustomEvent&&(p=a.detail.action)}),window.addEventListener("turbo:load",()=>{"restore"!==p&&(e=0,m(history.state,"",""))}),window.addEventListener("hashchange",function(){if(h()>d.length){let a={_id:k()};history.replaceState(a,"",location.href),j(a)}},!0),window.addEventListener("pageshow",()=>{d=[],e=0})},2825(a,b,c){function d(a){let b=[...a.querySelectorAll("meta[name=html-safe-nonce]")].map(a=>a.content);if(b.length<1)throw Error("could not find html-safe-nonce on document");return b}c.d(b,{P:()=>d,t:()=>e});class ResponseError extends Error{constructor(a,b){super(`${a} for HTTP ${b.status}`),this.response=b}}function e(a,b,c=!1){let d=b.headers.get("content-type")||"";if(!c&&!d.startsWith("text/html"))throw new ResponseError(`expected response with text/html, but was ${d}`,b);if(c&&!(d.startsWith("text/html")||d.startsWith("application/json")))throw new ResponseError(`expected response with text/html or application/json, but was ${d}`,b);let e=b.headers.get("x-html-safe");if(e){if(!a.includes(e))throw new ResponseError("response X-HTML-Safe nonce did not match",b)}else throw new ResponseError("missing X-HTML-Safe nonce",b)}},75662(a,b,c){c.d(b,{r:()=>d});function d(a,b){let c=a.createElement("template");return c.innerHTML=b,a.importNode(c.content,!0)}},5742(a,b,c){var d=c(64463),e=c(59753);let f=null,g=null;function h(a){let{item:b,oldIndex:c}=a,{parentNode:d}=b;g=d.children[c+1]}async function i(a){let{oldIndex:b,newIndex:c,item:d}=a;if(b===c)return;let e=d.closest(".js-pinned-items-reorder-form"),h=e.closest(".js-pinned-items-reorder-container"),i=h.querySelector(".js-pinned-items-spinner"),j=h.querySelector(".js-pinned-items-reorder-message"),k=i&&j;k&&(j.textContent="",i.style.display="inline-block"),f.option("disabled",!0);let l=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{"X-Requested-With":"XMLHttpRequest"}});if(!l.ok){k&&(j.textContent=j.getAttribute("data-error-text")||"",i.style.display="none");let m=d.parentNode;g?m.insertBefore(d,g):m.appendChild(d);return}k&&(j.textContent=j.getAttribute("data-success-text")||"",i.style.display="none"),f.option("disabled",!1)}(0,d.N7)(".js-pinned-items-reorder-list",{async add(a){let{Sortable:b}=await c.e("app_assets_modules_github_sortable-behavior_ts").then(c.bind(c,66884));f=b.create(a,{animation:150,item:".js-pinned-item-list-item",handle:".js-pinned-item-reorder",onUpdate:i,onStart:h,chosenClass:"is-dragging"})}}),(0,e.on)("submit",".js-pinned-items-reorder-form",function(a){a.preventDefault()}),(0,e.on)("click",".js-pinned-item-list-item .js-sortable-button",async function({currentTarget:a}){let{moveWithButton:b}=await c.e("app_assets_modules_github_sortable-behavior_ts").then(c.bind(c,66884));b(a,a.closest(".js-pinned-item-list-item"),i)})},57801(a,b,c){(0,c(59753).on)("change",".js-profile-editable-pronouns-select",function(){let a=document.querySelector(".js-profile-editable-pronouns-select"),b=document.querySelector(".js-profile-editable-pronouns-custom"),c=b.getAttribute("data-initial-value");"Custom"===a.value?([...a.options].find(a=>a.value===c)?b.value="":b.value=c,b.hidden=!1,b.focus()):(b.value=a.value,b.hidden=!0)})},76932(a,b,c){c.d(b,{RB:()=>d,qC:()=>e,w0:()=>Subscription});class Subscription{constructor(a){this.closed=!1,this.unsubscribe=()=>{a(),this.closed=!0}}}function d(a,b,c,d={capture:!1}){return a.addEventListener(b,c,d),new Subscription(()=>{a.removeEventListener(b,c,d)})}function e(...a){return new Subscription(()=>{for(let b of a)b.unsubscribe()})}},60864(a,b,c){var d,e=c(76006),f=c(59753),g=c(9302),h=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};(0,f.on)("toggle",".js-achievement-card-details",function(a){let b=a.currentTarget,c=b.getAttribute("data-achievement-slug"),d=new URL(window.location.href,window.location.origin),e=new URLSearchParams(d.search);b.hasAttribute("open")&&c?e.set("achievement",c):e.delete("achievement"),d.search=e.toString(),(0,g.qA)(null,"",d.toString())},{capture:!0});let i=((d=class AchievementBadgeFlipElement extends HTMLElement{connectedCallback(){if(this.tierCount<=1||!this.animate)return;let a=this.animate([{transform:"rotateY(0deg)"},{transform:`rotateY(${this.maxRotation}deg)`}],{duration:this.duration,easing:"cubic-bezier(0, 0, 0.25, 1)"});if(this.animations.set(this,a),!this.createTierAnimations()){let b=new MutationObserver((a,b)=>{this.createTierAnimations()&&b.disconnect()});b.observe(this,{childList:!0})}}get duration(){return 500*this.tierCount}get maxRotation(){return 180*this.tierCount}createTierAnimations(){for(let a of this.tiers)this.ensureTierAnimation(a);return this.tiers.length>=this.tierCount}ensureTierAnimation(a){if(this.animations.has(a))return;let b=this.tiers.indexOf(a);if(b<0)return;let c=this.BADGE_SIDE_KEYFRAMES[this.tierCount];if(!c)return;let d=this.tierCount%2==1,e=c.map((a,e)=>{let f=e===b||e===b+1||0===b&&e===this.tierCount,g={offset:a,opacity:f?1:0,easing:"step-start"};if(d&&0===b){let h=e===c.length-1?180:0;g.transform=`rotateY(${h}deg)`}return g}),f=a.animate(e,{duration:this.duration});this.animations.set(a,f)}flip(){for(let a of this.animations.values())if("running"===a.playState)return;for(let b of this.animations.values())b.play()}constructor(...a){super(...a),this.animations=new Map,this.BADGE_SIDE_KEYFRAMES=[[],[0,1],[0,.22,1],[0,.13,.34,1],[0,.09,.22,.42,1],[0,.07,.16,.29,.47,1]],this.tierCount=0}}).attrPrefix="",d);h([e.Lj],i.prototype,"tierCount",void 0),h([e.GO],i.prototype,"tiers",void 0),i=h([e.Ih],i),(0,f.on)("click",".js-new-user-contrib-example",async function(a){let b=document.querySelector(".js-calendar-graph");if(b.classList.contains("sample-graph"))return;b.classList.add("sample-graph");let c=a.currentTarget.getAttribute("data-url"),d=await fetch(c,{headers:{"X-Requested-With":"XMLHttpRequest"}});if(!d.ok){b.classList.remove("sample-graph");return}let e=await d.text(),f=document.createElement("div");f.innerHTML=e;let g=b.querySelector(".js-calendar-graph-svg");g.replaceWith(f.children[0])});var j=c(98249),k=c(64463),l=c(65935);let m=null,n=document.createElement("div");function o(){let a=document.querySelector(".js-calendar-graph"),b=a.getAttribute("data-url");return new URL(b,window.location.origin)}function p(){n&&(n.hidden=!0)}function q(a,b){return a.x>b}function r(a,b){return a.x+a.width<b+n.offsetWidth}function s(a){return a.left+window.pageXOffset-.1*n.offsetWidth+a.width/2}function t(a){return a.left+window.pageXOffset-.9*n.offsetWidth+a.width/2}async function u(a){let b=document.getElementById("js-contribution-activity");if(!b)return;b.classList.add("loading");let c=await (0,j.a)(document,a);b.classList.remove("loading"),b.innerHTML="",b.append(c)}function v(a,b){let c=new URLSearchParams(a);c.delete("from"),c.delete("to"),c.delete("org");let d=b.fromStr;b.from&&(d=A(b.from,!!b.forceLocalTime)),d&&c.append("from",d);let e=b.toStr;b.to&&(e=A(b.to,!!b.forceLocalTime)),e&&c.append("to",e);let f=b.org;return f&&c.append("org",f),c}async function w(a,b,c){let d=document.querySelector(".js-calendar-graph"),e=d.getAttribute("data-graph-url"),f=new URL(e,window.location.origin),g=v(f.search.slice(1),{from:a,to:b,org:c,forceLocalTime:!0});f.search=g.toString();let h=await (0,j.a)(document,f.toString());document.querySelector(".js-yearly-contributions").replaceWith(h)}function x(a,b){let c=document.querySelector(".js-calendar-graph"),d=c.querySelectorAll("rect[data-count]");for(let e of d)e.classList.remove("active");if(c.classList.remove("days-selected"),a||b)for(let f of(c.classList.add("days-selected"),d))g(f)&&f.classList.add("active");function g(c){let d=B(c.getAttribute("data-date")||"").getTime();return a&&b?a.getTime()<=d&&d<=b.getTime():a?d===a.getTime():void 0}}function y(){let a=document.querySelector(".js-calendar-graph"),b=a.querySelectorAll("rect.active"),c=b[0],d=b[b.length-1],e=c&&c.getAttribute("data-date"),f=d&&d.getAttribute("data-date");return e&&f?{first:e,last:f}:null}function z(a){return`0${a}`.slice(-2)}function A(a,b){return b?`${a.getFullYear()}-${z(a.getMonth()+1)}-${z(a.getDate())}`:`${a.getUTCFullYear()}-${z(a.getUTCMonth()+1)}-${z(a.getUTCDate())}`}function B(a){let[b,c,d]=a.split("-").map(a=>parseInt(a,10));return new Date(Date.UTC(b,c-1,d))}function C(a,b,c){let d,e;if(m&&b){let f=m.getTime(),g=26784e5,h=f-g,i=f+g;[d,e]=a>m?[m,a]:[a,m],d=new Date(Math.max(d.getTime(),h)),e=new Date(Math.min(e.getTime(),i)),m=null}else m=e=d=a;x(d,e);let j=o(),k=v(j.search.slice(1),{from:d,to:e,org:c});k.append("tab","overview"),j.search=k.toString(),u(j.toString())}async function D(a,b){let c=document.getElementById("year-list-container");if(!c)return;b.append("year_list","1"),a.search=b.toString();let d=await (0,j.a)(document,a.toString());c.innerHTML="",c.append(d)}async function E(a){let b=y(),c=function(){let a=document.querySelector(".js-calendar-graph"),b=a.getAttribute("data-from"),c=a.getAttribute("data-to");return{first:b,last:c}}(),d=new Date(c.first),e=new Date(c.last);if(await w(d,e,a),b){let f=new Date(b.first),g=new Date(b.last);x(f,g)}}function F(){let a=document.querySelector(".js-profile-timeline-year-list .js-year-link.selected");return a.href||""}function G(a){let b=new URL(a,window.location.origin).search,c=new URLSearchParams(b.slice(1)),d=c.get("org"),e=c.get("from"),f=c.get("to"),g=new Date(e),h=new Date(f);w(g,h,d);let i=o(),j=v(i.search.slice(1),{from:g,to:h,org:d});j.append("tab","overview"),i.search=j.toString(),u(i.toString())}function H(a){let b=a.closest(".js-details-container");b&&b.classList.add("open");let c=a.getBoundingClientRect(),d=window.scrollY+c.top-62-10;window.scrollTo(0,d)}async function I(a){let{initializeOverviewGraphContainer:b}=await c.e("app_assets_modules_github_profile_contributions-spider-graph_ts").then(c.bind(c,98711));b(a)}function J(a){if(document.querySelector(".js-profile-editable-area").hidden=a,document.querySelector(".js-profile-editable-names").hidden=a,document.querySelector(".js-profile-editable-form").hidden=!a,document.querySelector(".js-profile-editable-error").textContent="",!a){let b=document.querySelector(".js-profile-editable-pronouns-select"),c=document.querySelector(".js-profile-editable-pronouns-custom");b&&c&&""===c.value&&(b.selectedIndex=0,c.hidden=!0)}}n.classList.add("svg-tip","svg-tip-one-line"),n.style.pointerEvents="none",n.hidden=!0,document.body.appendChild(n),(0,k.N7)(".js-calendar-graph-svg",function(a){let b=a.closest(".js-calendar-graph");b.addEventListener("mouseover",function(a){let b=a.target;b.matches("rect[data-count]")&&function a(b){p();let c=B(b.getAttribute("data-date")),d=parseInt(b.getAttribute("data-count")||""),e=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}).format(c),f=0===d?"No":new Intl.NumberFormat("en-US").format(d),g=document.createElement("strong");g.textContent=`${f} ${1===d?"contribution":"contributions"}`,n.innerHTML="",n.append(g,` on ${e}`),n.hidden=!1;let h=b.getBoundingClientRect(),i=h.left+window.pageXOffset-n.offsetWidth/2+h.width/2,j=h.bottom+window.pageYOffset-n.offsetHeight-2*h.height,k=document.querySelector(".js-calendar-graph"),l=k.getBoundingClientRect();n.style.top=`${j}px`,q(l,i)?(n.style.left=`${s(h)}px`,n.classList.add("left"),n.classList.remove("right")):r(l,i)?(n.style.left=`${t(h)}px`,n.classList.add("right"),n.classList.remove("left")):(n.style.left=`${i}px`,n.classList.remove("left"),n.classList.remove("right"))}(b)}),b.addEventListener("mouseout",p);let c=b.getAttribute("data-from");c&&(m=B(c))}),(0,f.on)("click",".js-calendar-graph rect[data-count]",function(a){let b=a.currentTarget,c=b.closest(".js-calendar-graph"),d=c.getAttribute("data-org"),e=b.getAttribute("data-date"),f=b.classList.contains("active");f?G(F()):C(B(e),a.shiftKey,d)}),(0,f.on)("click",".js-org-filter-link",function(a){a.stopPropagation(),a.preventDefault();let b=a.currentTarget,c=b.closest(".js-org-filter-links-container"),d=c.querySelector(".js-org-filter-link.selected"),e=new URL(b.href,window.location.origin),f=new URLSearchParams(e.search.slice(1)),h=f.get("org"),i=function(){let a=y()||function(){let a=new URLSearchParams(window.location.search.slice(1)),b=a.get("from"),c=a.get("to");return b&&c?{first:b,last:c}:null}()||function(){let a=new URL(F(),window.location.origin),b=new URLSearchParams(a.search.slice(1)),c=b.get("from"),d=b.get("to");return c&&d?{first:c,last:d}:null}();return a}(),j=new Date(i.first),k=new Date(i.last);d&&d.classList.remove("selected"),b!==d&&b.classList.add("selected"),E(h);let l=o(),m={org:h,from:null,to:null};f.has("from")&&(m.from=j),f.has("to")&&(m.to=k);let n=v(l.search.slice(1),m);l.search=n.toString(),u(l.toString()),D(l,n),(0,g.qA)(null,"",l.toString())}),(0,f.on)("click",".js-year-link",function(a){a.stopPropagation(),a.preventDefault();let b=a.currentTarget,c=b.closest("ul"),d=c.querySelector(".js-year-link.selected");d.classList.remove("selected"),b.classList.add("selected"),G(b.href),(0,g.qA)(null,"",b.href)}),!function(){let a=window.location.hash;if(!a||0>a.indexOf("#event-"))return;let b=a.slice(1,a.length),c=document.getElementById(b);c&&H(c)}(),window.addEventListener("hashchange",function(a){let b=a.newURL||window.location.href,c=b.slice(b.indexOf("#")+1,b.length),d=document.getElementById(c);d&&(a.stopPropagation(),H(d))}),(0,l.AC)(".js-show-more-timeline-form",async function(a,b){await b.text();let c=document.querySelector(".js-show-more-timeline-form");if(c){let d=c.getAttribute("data-year"),e=document.querySelector(".js-year-link.selected"),f=document.querySelector(`#year-link-${d}`);e.classList.remove("selected"),f.classList.add("selected");let h=a.getAttribute("data-year");if(d!==h){let i=c.getAttribute("data-from"),j=new Date(i),k=c.getAttribute("data-to"),l=new Date(k),m=c.getAttribute("data-org");w(j,l,m)}}document.title=a.getAttribute("data-title")||"",(0,g.qA)(null,"",a.getAttribute("data-url")||"")}),(0,k.N7)(".js-activity-overview-graph-container",a=>{I(a)}),c(57801),(0,f.on)("click",".js-profile-editable-edit-button",function(){(function(){let a=document.querySelector(".js-user-profile-bio").getAttribute("data-bio-text");if("string"!=typeof a)return;let b=document.querySelector(".js-user-profile-bio-edit");b.value=a})(),J(!0)}),(0,f.on)("click",".js-profile-editable-cancel",function(){J(!1)}),(0,l.AC)(".js-profile-editable-form",async(a,b)=>{let c;try{c=await b.html()}catch(d){if(422===d.response.status){let e=document.querySelector(".js-profile-editable-error");e.textContent=d.response.json.message}return}(function(a){let b=document.querySelector(".js-profile-editable-replace");b.replaceWith(a)})(c.html),J(!1)}),c(5742),(0,k.N7)(".js-user-profile-sticky-fields.is-stuck",function(){let a=document.querySelector(".js-user-profile-sticky-bar");return{add(){a.classList.add("is-stuck")},remove(){a.classList.remove("is-stuck")}}}),(0,k.N7)(".js-user-profile-follow-button.is-stuck",function(){let a=document.querySelector(".js-user-profile-sticky-bar");return{add(){a.classList.add("is-follow-stuck")},remove(){a.classList.remove("is-follow-stuck")}}});var K=c(55240);function L(a,b){if(b>0){var c;a.textContent=(c=b)>999?`${(c/1e3).toFixed(1)}k`:c.toLocaleString(),a.hidden=!1}else a.remove()}async function M(a){let b=new URL(a.getAttribute("data-url"),window.location.origin),c=new URLSearchParams(b.search.slice(1)),d=a.querySelector(".js-profile-repository-count"),e=a.querySelector(".js-profile-project-count"),f=a.querySelector(".js-profile-team-count"),g=a.querySelector(".js-profile-member-count");d&&c.append("repo","1"),e&&c.append("project","1"),f&&c.append("team","1"),g&&c.append("member","1"),b.search=c.toString();let h=await fetch(b.toString(),{headers:{"X-Requested-With":"XMLHttpRequest"}});if(!h.ok)return;let i=await h.json(),j=i.data;d&&j.repositories&&L(d,j.repositories.totalCount),e&&j.projects&&L(e,j.projects.totalCount),f&&j.teams&&L(f,j.teams.totalCount),g&&j.members&&L(g,j.members.totalCount),a.classList.contains("js-responsive-underlinenav")&&(0,K.k)(a)}(0,k.N7)(".js-profile-tab-count-container",function(a){M(a)})}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js","vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-06ff530"],()=>b(60864));var c=a.O()}])
//# sourceMappingURL=profile-37619757bb28.js.map