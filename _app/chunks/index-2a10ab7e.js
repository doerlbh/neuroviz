function E(){}function J(t,e){for(const n in e)t[n]=e[n];return t}function T(t){return t()}function q(){return Object.create(null)}function p(t){t.forEach(T)}function W(t){return typeof t=="function"}function dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function _t(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function K(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ht(t,e,n){t.$$.on_destroy.push(Q(e,n))}function mt(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?J(n.ctx.slice(),t[1](i(e))):n.ctx}function pt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)s[u]=e.dirty[u]|r[u];return s}return e.dirty|r}return e.dirty}function yt(t,e,n,i,r,s){if(r){const c=B(e,n,i,s);t.p(c,r)}}function gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function bt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function xt(t,e,n){return t.set(n),e}function wt(t){return t&&W(t.destroy)?t.destroy:E}let k=!1;function R(){k=!0}function U(){k=!1}function V(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:V(1,r,g=>e[n[g]].claim_order,l))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const s=[],c=[];let u=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(s.push(e[o-1]);u>=o;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);s.reverse(),c.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<c.length;o++){for(;l<s.length&&c[o].claim_order>=s[l].claim_order;)l++;const f=l<s.length?s[l]:null;t.insertBefore(c[o],f)}}function Y(t,e){t.appendChild(e)}function Z(t,e){if(k){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function $t(t,e,n){k&&!n?Z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function O(t){t.parentNode.removeChild(t)}function vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function D(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function Et(){return j(" ")}function kt(){return j("")}function z(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function tt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:tt(t,e,n)}function et(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,i,r=!1){nt(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const o=n(u);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const o=n(u);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function it(t,e,n,i){return I(t,r=>r.nodeName===e,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||s.push(u.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Ct(t,e,n){return it(t,e,n,D)}function rt(t,e){return I(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function St(t){return rt(t," ")}function jt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Nt(t,e){t.value=e==null?"":e}function Mt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let x;function ct(){if(x===void 0){x=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{x=!0}}return x}function qt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=D("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=ct();let s;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=z(window,"message",c=>{c.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{s=z(i.contentWindow,"resize",e)}),Y(t,i),()=>{(r||s&&i.contentWindow)&&s(),O(i)}}function zt(t,e,n){t.classList[n?"add":"remove"](e)}function ot(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Lt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let m;function h(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function Pt(t){y().$$.on_mount.push(t)}function Tt(t){y().$$.after_update.push(t)}function Wt(){const t=y();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=ot(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}function Bt(t,e){return y().$$.context.set(t,e),e}function Ot(t){return y().$$.context.get(t)}const _=[],L=[],$=[],P=[],F=Promise.resolve();let C=!1;function H(){C||(C=!0,F.then(G))}function Dt(){return H(),F}function S(t){$.push(t)}const A=new Set;let w=0;function G(){const t=m;do{for(;w<_.length;){const e=_[w];w++,h(e),st(e.$$)}for(h(null),_.length=0,w=0;L.length;)L.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];A.has(n)||(A.add(n),n())}$.length=0}while(_.length);for(;P.length;)P.pop()();C=!1,A.clear(),h(t)}function st(t){if(t.fragment!==null){t.update(),p(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const v=new Set;let d;function It(){d={r:0,c:[],p:d}}function Ft(){d.r||p(d.c),d=d.p}function ut(t,e){t&&t.i&&(v.delete(t),t.i(e))}function Ht(t,e,n,i){if(t&&t.o){if(v.has(t))return;v.add(t),d.c.push(()=>{v.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Gt(t,e){const n={},i={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],u=e[s];if(u){for(const o in c)o in u||(i[o]=1);for(const o in u)r[o]||(n[o]=u[o],r[o]=1);t[s]=u}else for(const o in c)r[o]=1}for(const c in i)c in n||(n[c]=void 0);return n}function Jt(t){return typeof t=="object"&&t!==null?t:{}}function Kt(t){t&&t.c()}function Qt(t,e){t&&t.l(e)}function lt(t,e,n,i){const{fragment:r,on_mount:s,on_destroy:c,after_update:u}=t.$$;r&&r.m(e,n),i||S(()=>{const o=s.map(T).filter(W);c?c.push(...o):p(o),t.$$.on_mount=[]}),u.forEach(S)}function at(t,e){const n=t.$$;n.fragment!==null&&(p(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(_.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Rt(t,e,n,i,r,s,c,u=[-1]){const o=m;h(t);const l=t.$$={fragment:null,ctx:null,props:s,update:E,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:q(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,g,...N)=>{const M=N.length?N[0]:g;return l.ctx&&r(l.ctx[a],l.ctx[a]=M)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](M),f&&ft(t,a)),g}):[],l.update(),f=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){R();const a=et(e.target);l.fragment&&l.fragment.l(a),a.forEach(O)}else l.fragment&&l.fragment.c();e.intro&&ut(t.$$.fragment),lt(t,e.target,e.anchor,e.customElement),U(),G()}h(o)}class Ut{$destroy(){at(this,1),this.$destroy=E}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{bt as $,Jt as A,at as B,J as C,Dt as D,E,Z as F,mt as G,yt as H,gt as I,pt as J,Lt as K,ht as L,_t as M,At as N,Nt as O,z as P,vt as Q,W as R,Ut as S,zt as T,Ot as U,xt as V,L as W,S as X,qt as Y,p as Z,wt as _,et as a,Wt as a0,tt as b,Ct as c,O as d,D as e,Mt as f,$t as g,rt as h,Rt as i,jt as j,Et as k,kt as l,St as m,It as n,Ht as o,Ft as p,ut as q,Bt as r,dt as s,j as t,Tt as u,Pt as v,Kt as w,Qt as x,lt as y,Gt as z};
