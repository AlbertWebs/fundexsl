/*! For license information please see lottie.min.js.LICENSE.txt */
(()=>{"use strict";var t,e,i={4241:(t,e,i)=>{i.d(e,{a:()=>ae,b:()=>le,c:()=>he,d:()=>ce,e:()=>$e,f:()=>Me,g:()=>Te,h:()=>je,i:()=>Ne,j:()=>Ue});var n={},o=Uint8Array,r=Uint16Array,s=Int32Array,a=new o([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),l=new o([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),h=new o([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),d=function(t,e){for(var i=new r(31),n=0;n<31;++n)i[n]=e+=1<<t[n-1];var o=new s(i[30]);for(n=1;n<30;++n)for(var a=i[n];a<i[n+1];++a)o[a]=a-i[n]<<5|n;return{b:i,r:o}},c=d(a,2),u=c.b,p=c.r;u[28]=258,p[258]=28;var v=d(l,0).b,f=new r(32768);for(b=0;b<32768;++b)m=(61680&(m=(52428&(m=(43690&b)>>1|(21845&b)<<1))>>2|(13107&m)<<2))>>4|(3855&m)<<4,f[b]=((65280&m)>>8|(255&m)<<8)>>1;var m,y=function(t,e,i){for(var n=t.length,o=0,s=new r(e);o<n;++o)t[o]&&++s[t[o]-1];var a,l=new r(e);for(o=1;o<e;++o)l[o]=l[o-1]+s[o-1]<<1;if(i){a=new r(1<<e);var h=15-e;for(o=0;o<n;++o)if(t[o])for(var d=o<<4|t[o],c=e-t[o],u=l[t[o]-1]++<<c,p=u|(1<<c)-1;u<=p;++u)a[f[u]>>h]=d}else for(a=new r(n),o=0;o<n;++o)t[o]&&(a[o]=f[l[t[o]-1]++]>>15-t[o]);return a},g=new o(288);for(b=0;b<144;++b)g[b]=8;for(b=144;b<256;++b)g[b]=9;for(b=256;b<280;++b)g[b]=7;for(b=280;b<288;++b)g[b]=8;var _=new o(32);for(b=0;b<32;++b)_[b]=5;var b,w=y(g,9,1),L=y(_,5,1),C=function(t){for(var e=t[0],i=1;i<t.length;++i)t[i]>e&&(e=t[i]);return e},S=function(t,e,i){var n=e/8|0;return(t[n]|t[n+1]<<8)>>(7&e)&i},k=function(t,e){var i=e/8|0;return(t[i]|t[i+1]<<8|t[i+2]<<16)>>(7&e)},E=function(t){return(t+7)/8|0},x=function(t,e,i){(null==e||e<0)&&(e=0),(null==i||i>t.length)&&(i=t.length);var n=new o(i-e);return n.set(t.subarray(e,i)),n},A=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],I=function(t,e,i){var n=new Error(e||A[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,I),!i)throw n;return n},P=function(t,e,i,n){var r=t.length,s=n?n.length:0;if(!r||e.f&&!e.l)return i||new o(0);var d=!i||2!=e.i,c=e.i;i||(i=new o(3*r));var p=function(t){var e=i.length;if(t>e){var n=new o(Math.max(2*e,t));n.set(i),i=n}},f=e.f||0,m=e.p||0,g=e.b||0,_=e.l,b=e.d,A=e.m,P=e.n,O=8*r;do{if(!_){f=S(t,m,1);var $=S(t,m+1,3);if(m+=3,!$){var M=t[(q=E(m)+4)-4]|t[q-3]<<8,T=q+M;if(T>r){c&&I(0);break}d&&p(g+M),i.set(t.subarray(q,T),g),e.b=g+=M,e.p=m=8*T,e.f=f;continue}if(1==$)_=w,b=L,A=9,P=5;else if(2==$){var j=S(t,m,31)+257,N=S(t,m+10,15)+4,U=j+S(t,m+5,31)+1;m+=14;for(var z=new o(U),H=new o(19),F=0;F<N;++F)H[h[F]]=S(t,m+3*F,7);m+=3*N;var D=C(H),B=(1<<D)-1,R=y(H,D,1);for(F=0;F<U;){var q,V=R[S(t,m,B)];if(m+=15&V,(q=V>>4)<16)z[F++]=q;else{var W=0,Z=0;for(16==q?(Z=3+S(t,m,3),m+=2,W=z[F-1]):17==q?(Z=3+S(t,m,7),m+=3):18==q&&(Z=11+S(t,m,127),m+=7);Z--;)z[F++]=W}}var Y=z.subarray(0,j),J=z.subarray(j);A=C(Y),P=C(J),_=y(Y,A,1),b=y(J,P,1)}else I(1);if(m>O){c&&I(0);break}}d&&p(g+131072);for(var X=(1<<A)-1,K=(1<<P)-1,G=m;;G=m){var Q=(W=_[k(t,m)&X])>>4;if((m+=15&W)>O){c&&I(0);break}if(W||I(2),Q<256)i[g++]=Q;else{if(256==Q){G=m,_=null;break}var tt=Q-254;if(Q>264){var et=a[F=Q-257];tt=S(t,m,(1<<et)-1)+u[F],m+=et}var it=b[k(t,m)&K],nt=it>>4;it||I(3),m+=15&it;J=v[nt];if(nt>3){et=l[nt];J+=k(t,m)&(1<<et)-1,m+=et}if(m>O){c&&I(0);break}d&&p(g+131072);var ot=g+tt;if(g<J){var rt=s-J,st=Math.min(J,ot);for(rt+g<0&&I(3);g<st;++g)i[g]=n[rt+g]}for(;g<ot;g+=4)i[g]=i[g-J],i[g+1]=i[g+1-J],i[g+2]=i[g+2-J],i[g+3]=i[g+3-J];g=ot}}e.l=_,e.p=G,e.b=g,e.f=f,_&&(f=1,e.m=A,e.d=b,e.n=P)}while(!f);return g==i.length?i:x(i,0,g)},O=new o(0),$=function(t,e,i){for(var n=t(),o=t.toString(),r=o.slice(o.indexOf("[")+1,o.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<n.length;++s){var a=n[s],l=r[s];if("function"==typeof a){e+=";"+l+"=";var h=a.toString();if(a.prototype)if(-1!=h.indexOf("[native code]")){var d=h.indexOf(" ",8)+1;e+=h.slice(d,h.indexOf("(",d))}else for(var c in e+=h,a.prototype)e+=";"+l+".prototype."+c+"="+a.prototype[c].toString();else e+=h}else i[l]=a}return e},M=[],T=function(t,e,i,o){if(!M[i]){for(var r="",s={},a=t.length-1,l=0;l<a;++l)r=$(t[l],r,s);M[i]={c:$(t[a],r,s),e:s}}var h=function(t,e){var i={};for(var n in t)i[n]=t[n];for(var n in e)i[n]=e[n];return i}({},M[i].e);return function(t,e,i,o,r){var s=new Worker(n[e]||(n[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(t){var e=t.data,i=e.$e$;if(i){var n=new Error(i[0]);n.code=i[1],n.stack=i[2],r(n,null)}else r(null,e)},s.postMessage(i,o),s}(M[i].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",i,h,function(t){var e=[];for(var i in t)t[i].buffer&&e.push((t[i]=new t[i].constructor(t[i])).buffer);return e}(h),o)},j=function(){return[o,r,s,a,l,h,u,v,w,L,f,A,y,C,S,k,E,x,I,P,B,N,U]},N=function(t){return postMessage(t,[t.buffer])},U=function(t){return t&&{out:t.size&&new o(t.size),dictionary:t.dictionary}},z=function(t,e,i,n,o,r){var s=T(i,n,o,(function(t,e){s.terminate(),r(t,e)}));return s.postMessage([t,e],e.consume?[t.buffer]:[]),function(){s.terminate()}},H=function(t,e){return t[e]|t[e+1]<<8},F=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},D=function(t,e){return F(t,e)+4294967296*F(t,e+4)};function B(t,e){return P(t,{i:2},e&&e.out,e&&e.dictionary)}var R=typeof TextDecoder<"u"&&new TextDecoder;try{R.decode(O,{stream:!0}),1}catch{}var q=function(t){for(var e="",i=0;;){var n=t[i++],o=(n>127)+(n>223)+(n>239);if(i+o>t.length)return{s:e,r:x(t,i-1)};o?3==o?(n=((15&n)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536,e+=String.fromCharCode(55296|n>>10,56320|1023&n)):e+=1&o?String.fromCharCode((31&n)<<6|63&t[i++]):String.fromCharCode((15&n)<<12|(63&t[i++])<<6|63&t[i++]):e+=String.fromCharCode(n)}};function V(t,e){if(e){for(var i="",n=0;n<t.length;n+=16384)i+=String.fromCharCode.apply(null,t.subarray(n,n+16384));return i}if(R)return R.decode(t);var o=q(t),r=o.s;return(i=o.r).length&&I(8),r}var W=function(t,e){return e+30+H(t,e+26)+H(t,e+28)},Z=function(t,e,i){var n=H(t,e+28),o=V(t.subarray(e+46,e+46+n),!(2048&H(t,e+8))),r=e+46+n,s=F(t,e+20),a=i&&4294967295==s?Y(t,r):[s,F(t,e+24),F(t,e+42)],l=a[0],h=a[1],d=a[2];return[H(t,e+10),l,h,o,r+H(t,e+30)+H(t,e+32),d]},Y=function(t,e){for(;1!=H(t,e);e+=4+H(t,e+2));return[D(t,e+12),D(t,e+4),D(t,e+20)]},J="function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout?setTimeout:function(t){t()};function X(t,e,i){i||(i=e,e={}),"function"!=typeof i&&I(7);var n=[],r=function(){for(var t=0;t<n.length;++t)n[t]()},s={},a=function(t,e){J((function(){i(t,e)}))};J((function(){a=i}));for(var l=t.length-22;101010256!=F(t,l);--l)if(!l||t.length-l>65558)return a(I(13,0,1),null),r;var h=H(t,l+8);if(h){var d=h,c=F(t,l+16),u=4294967295==c||65535==d;if(u){var p=F(t,l-12);(u=101075792==F(t,p))&&(d=h=F(t,p+32),c=F(t,p+48))}for(var v=e&&e.filter,f=function(e){var i=Z(t,c,u),l=i[0],d=i[1],p=i[2],f=i[3],m=i[4],y=i[5],g=W(t,y);c=m;var _=function(t,e){t?(r(),a(t,null)):(e&&(s[f]=e),--h||a(null,s))};if(!v||v({name:f,size:d,originalSize:p,compression:l}))if(l)if(8==l){var b=t.subarray(g,g+d);if(d<32e4)try{_(null,B(b,{out:new o(p)}))}catch(t){_(t,null)}else n.push(function(t,e,i){return i||(i=e,e={}),"function"!=typeof i&&I(7),z(t,e,[j],(function(t){return N(B(t.data[0],U(t.data[1])))}),1,i)}(b,{size:p},_))}else _(I(14,"unknown compression type "+l,1),null);else _(null,x(t,g,g+d));else _(null,null)},m=0;m<d;++m)f()}else a(null,{});return r}function K(t){return(Array.isArray(t)?t:t.issues).reduce(((t,e)=>{if(e.path){let i=e.path.map((({key:t})=>t)).join(".");t.nested[i]=[...t.nested[i]||[],e.message]}else t.root=[...t.root||[],e.message];return t}),{nested:{}})}var G=class extends Error{issues;constructor(t){super(t[0].message),this.name="ValiError",this.issues=t}};function Q(t,e){return{reason:null==t?void 0:t.reason,validation:e.validation,origin:(null==t?void 0:t.origin)||"value",message:e.message,input:e.input,abortEarly:null==t?void 0:t.abortEarly,abortPipeEarly:null==t?void 0:t.abortPipeEarly}}function tt(t,e){return{reason:e,origin:null==t?void 0:t.origin,abortEarly:null==t?void 0:t.abortEarly,abortPipeEarly:null==t?void 0:t.abortPipeEarly}}function et(t,e,i,n){if(!e||!e.length)return{output:t};let o,r,s=t;for(let t of e){let e=t(s);if(e.issue){o=o||tt(i,n);let t=Q(o,e.issue);if(r?r.push(t):r=[t],o.abortEarly||o.abortPipeEarly)break}else s=e.output}return r?{issues:r}:{output:s}}function it(t,e){return t&&"string"!=typeof t?[void 0,t]:[t,e]}function nt(t,e,i,n,o,r){return{issues:[{reason:e,validation:i,origin:(null==t?void 0:t.origin)||"value",message:n,input:o,issues:r,abortEarly:null==t?void 0:t.abortEarly,abortPipeEarly:null==t?void 0:t.abortPipeEarly}]}}function ot(t,e,i){let[n,o]=it(e,i);return{schema:"array",array:{item:t},async:!1,_parse(e,i){if(!Array.isArray(e))return nt(i,"type","array",n||"Invalid type",e);let r,s=[];for(let n=0;n<e.length;n++){let o=e[n],a=t._parse(o,i);if(a.issues){let t={schema:"array",input:e,key:n,value:o};for(let e of a.issues)e.path?e.path.unshift(t):e.path=[t],null==r||r.push(e);if(r||(r=a.issues),null!=i&&i.abortEarly)break}else s.push(a.output)}return r?{issues:r}:et(s,o,i,"array")}}}function rt(t,e){let[i,n]=it(t,e);return{schema:"boolean",async:!1,_parse:(t,e)=>"boolean"!=typeof t?nt(e,"type","boolean",i||"Invalid type",t):et(t,n,e,"boolean")}}function st(t,e){return{schema:"literal",literal:t,async:!1,_parse:(i,n)=>i!==t?nt(n,"type","literal",e||"Invalid type",i):{output:i}}}function at(t,e){let[i,n]=it(t,e);return{schema:"number",async:!1,_parse:(t,e)=>"number"!=typeof t?nt(e,"type","number",i||"Invalid type",t):et(t,n,e,"number")}}function lt(t,e,i){let n,[o,r]=it(e,i);return{schema:"object",object:t,async:!1,_parse(e,i){if(!e||"object"!=typeof e)return nt(i,"type","object",o||"Invalid type",e);n=n||Object.entries(t);let s,a={};for(let[t,o]of n){let n=e[t],r=o._parse(n,i);if(r.issues){let o={schema:"object",input:e,key:t,value:n};for(let t of r.issues)t.path?t.path.unshift(o):t.path=[o],null==s||s.push(t);if(s||(s=r.issues),null!=i&&i.abortEarly)break}else a[t]=r.output}return s?{issues:s}:et(a,r,i,"object")}}}function ht(t){return{schema:"optional",wrapped:t,async:!1,_parse:(e,i)=>void 0===e?{output:e}:t._parse(e,i)}}function dt(t,e){let[i,n]=it(t,e);return{schema:"string",async:!1,_parse:(t,e)=>"string"!=typeof t?nt(e,"type","string",i||"Invalid type",t):et(t,n,e,"string")}}var ct=["__proto__","prototype","constructor"];function ut(t,e,i,n){let[o,r,s]=function(t,e,i){if("object"==typeof t&&!Array.isArray(t)){let[n,o]=it(e,i);return[t,n,o]}let[n,o]=it(t,e);return[void 0,n,o]}(e,i,n);return{schema:"tuple",tuple:{items:t,rest:o},async:!1,_parse(e,i){if(!Array.isArray(e)||!o&&t.length!==e.length||o&&t.length>e.length)return nt(i,"type","tuple",r||"Invalid type",e);let n,a=[];for(let o=0;o<t.length;o++){let r=e[o],s=t[o]._parse(r,i);if(s.issues){let t={schema:"tuple",input:e,key:o,value:r};for(let e of s.issues)e.path?e.path.unshift(t):e.path=[t],null==n||n.push(e);if(n||(n=s.issues),null!=i&&i.abortEarly)break}else a[o]=s.output}if(o)for(let r=t.length;r<e.length;r++){let t=e[r],s=o._parse(t,i);if(s.issues){let o={schema:"tuple",input:e,key:r,value:t};for(let t of s.issues)t.path?t.path.unshift(o):t.path=[o],null==n||n.push(t);if(n||(n=s.issues),null!=i&&i.abortEarly)break}else a[r]=s.output}return n?{issues:n}:et(a,s,i,"tuple")}}}function pt(t,e){return{schema:"union",union:t,async:!1,_parse(i,n){let o,r;for(let e of t){let t=e._parse(i,n);if(!t.issues){r=[t.output];break}if(o)for(let e of t.issues)o.push(e);else o=t.issues}return r?{output:r[0]}:nt(n,"type","union",e||"Invalid type",i,o)}}}function vt(t,e,i){let[n,o]=it(e,i);return lt(t.reduce(((t,e)=>({...t,...e.object})),{}),n,o)}function ft(t,e){return i=>i>t?{issue:{validation:"max_value",message:e||"Invalid value",input:i}}:{output:i}}function mt(t,e){return i=>i<t?{issue:{validation:"min_value",message:e||"Invalid value",input:i}}:{output:i}}var yt,gt=Object.create,_t=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,wt=Object.getOwnPropertyNames,Lt=Object.getPrototypeOf,Ct=Object.prototype.hasOwnProperty,St=(t,e)=>function(){return e||(0,t[wt(t)[0]])((e={exports:{}}).exports,e),e.exports},kt=(t,e,i)=>(((t,e,i)=>{e in t?_t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i})(t,"symbol"!=typeof e?e+"":e,i),i),Et=St({"../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.copy=void 0;t.copy=(t,e,i=0,n=0,o=t.width-i,r=t.height-n,s=0,a=0)=>{if(i|=0,n|=0,r|=0,s|=0,a|=0,(o|=0)<=0||r<=0)return;let l=new Uint32Array(t.data.buffer),h=new Uint32Array(e.data.buffer);for(let d=0;d<r;d++){let r=n+d;if(r<0||r>=t.height)continue;let c=a+d;if(!(c<0||c>=e.height))for(let n=0;n<o;n++){let o=i+n;if(o<0||o>=t.width)continue;let a=s+n;if(a<0||a>=e.width)continue;let d=r*t.width+o;h[c*e.width+a]=l[d]}}}}}),xt=St({"../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.CreateImageFactory=(t=[0,0,0,0],e=4)=>{if(e=Math.floor(e),isNaN(e)||e<1)throw TypeError("channels should be a positive non-zero number");if(!("length"in t)||t.length<e)throw TypeError(`fill should be iterable with at least ${e} members`);let i=(t=new Uint8ClampedArray(t).slice(0,e)).every((t=>0===t));return(n,o,r)=>{if(void 0===n||void 0===o)throw TypeError("Not enough arguments");if(n=Math.floor(n),o=Math.floor(o),isNaN(n)||n<1||isNaN(o)||o<1)throw TypeError("Index or size is negative or greater than the allowed amount");let s=n*o*e;if(void 0===r&&(r=new Uint8ClampedArray(s)),r instanceof Uint8ClampedArray){if(r.length!==s)throw TypeError("Index or size is negative or greater than the allowed amount");if(!i)for(let i=0;i<o;i++)for(let o=0;o<n;o++){let s=(i*n+o)*e;for(let i=0;i<e;i++)r[s+i]=t[i]}return{get width(){return n},get height(){return o},get data(){return r}}}throw TypeError("Expected data to be Uint8ClampedArray or undefined")}},t.createImage=t.CreateImageFactory()}}),At=St({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.filters=void 0;var e=(t,e)=>{if(t<=-e||t>=e||0==t)return 0;let i=t*Math.PI;return Math.sin(i)/i*Math.sin(i/e)/(i/e)},i=t=>Math.round(16383*t);t.filters=(t,n,o,r,s)=>{let a=s?2:3,l=1/o,h=Math.min(1,o),d=a/h,c=Math.floor(2*(d+1)),u=new Int16Array((c+2)*n),p=0;for(let o=0;o<n;o++){let s=(o+.5)*l+r,c=Math.max(0,Math.floor(s-d)),v=Math.min(t-1,Math.ceil(s+d)),f=v-c+1,m=new Float32Array(f),y=new Int16Array(f),g=0,_=0;for(let t=c;t<=v;t++){let i=e((t+.5-s)*h,a);g+=i,m[_]=i,_++}let b=0;for(let t=0;t<m.length;t++){let e=m[t]/g;b+=e,y[t]=i(e)}y[n>>1]+=i(1-b);let w=0;for(;w<y.length&&0===y[w];)w++;let L=y.length-1;for(;L>0&&0===y[L];)L--;let C=c+w,S=L-w+1;u[p++]=C,u[p++]=S,u.set(y.subarray(w,L+1),p),p+=S}return u}}}),It=St({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.convolve=void 0;t.convolve=(t,e,i,n,o,r)=>{let s=0,a=0;for(let l=0;l<n;l++){let h=0;for(let i=0;i<o;i++){let i=s+4*r[h++]|0,o=0,l=0,d=0,c=0;for(let e=r[h++];e>0;e--){let e=r[h++];o=o+e*t[i]|0,l=l+e*t[i+1]|0,d=d+e*t[i+2]|0,c=c+e*t[i+3]|0,i=i+4|0}e[a]=o+8192>>14,e[a+1]=l+8192>>14,e[a+2]=d+8192>>14,e[a+3]=c+8192>>14,a=a+4*n|0}a=4*(l+1)|0,s=(l+1)*i*4|0}}}}),Pt=St({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.lanczos2=t.lanczos=void 0;var e=Et(),i=xt(),n=At(),o=It(),r=(t,e,i=!1)=>{let r=e.width/t.width,s=e.height/t.height,a=n.filters(t.width,e.width,r,0,i),l=n.filters(t.height,e.height,s,0,i),h=new Uint8ClampedArray(e.width*t.height*4);o.convolve(t.data,h,t.width,t.height,e.width,a),o.convolve(h,e.data,t.height,e.width,e.height,l)};t.lanczos=(t,n,o=0,s=0,a=t.width-o,l=t.height-s,h=0,d=0,c=n.width-h,u=n.height-d)=>{if(s|=0,l|=0,h|=0,d|=0,c|=0,u|=0,(a|=0)<=0||l<=0||c<=0||u<=0)return;if(0===(o|=0)&&0===s&&a===t.width&&l===t.height&&0===h&&0===d&&c===n.width&&u===n.height)return void r(t,n);let p=i.createImage(a,l),v=i.createImage(c,u);e.copy(t,p,o,s),r(p,v),e.copy(v,n,0,0,v.width,v.height,h,d)};t.lanczos2=(t,n,o=0,s=0,a=t.width-o,l=t.height-s,h=0,d=0,c=n.width-h,u=n.height-d)=>{if(s|=0,l|=0,h|=0,d|=0,c|=0,u|=0,(a|=0)<=0||l<=0||c<=0||u<=0)return;if(0===(o|=0)&&0===s&&a===t.width&&l===t.height&&0===h&&0===d&&c===n.width&&u===n.height)return void r(t,n,!0);let p=i.createImage(a,l),v=i.createImage(c,u);e.copy(t,p,o,s),r(p,v,!0),e.copy(v,n,0,0,v.width,v.height,h,d)}}}),Ot=((yt=Ot||{}).Bounce="bounce",yt.Normal="normal",yt),$t=function(t,e){return{schema:"native_enum",nativeEnum:t,async:!1,_parse:(i,n)=>Object.values(t).includes(i)?{output:i}:nt(n,"type","native_enum",e||"Invalid type",i)}}(Ot),Mt=lt({autoplay:ht(rt()),defaultTheme:ht(dt()),direction:ht(pt([st(1),st(-1)])),hover:ht(rt()),id:dt(),intermission:ht(at()),loop:ht(pt([rt(),at()])),playMode:ht($t),speed:ht(at()),themeColor:ht(dt())}),Tt=lt({animations:ot(dt()),id:dt()}),jt=lt({activeAnimationId:ht(dt()),animations:ot(Mt),author:ht(dt()),custom:ht(function(t,e,i,n){let[o,r,s,a]=function(t,e,i,n){if("object"==typeof e&&!Array.isArray(e)){let[o,r]=it(i,n);return[t,e,o,r]}let[o,r]=it(e,i);return[dt(),t,o,r]}(t,e,i,n);return{schema:"record",record:{key:o,value:r},async:!1,_parse(t,e){if(!t||"object"!=typeof t)return nt(e,"type","record",s||"Invalid type",t);let i,n={};for(let[s,a]of Object.entries(t))if(!ct.includes(s)){let l,h=o._parse(s,{origin:"key",abortEarly:null==e?void 0:e.abortEarly,abortPipeEarly:null==e?void 0:e.abortPipeEarly});if(h.issues){l={schema:"record",input:t,key:s,value:a};for(let t of h.issues)t.path=[l],null==i||i.push(t);if(i||(i=h.issues),null!=e&&e.abortEarly)break}let d=r._parse(a,e);if(d.issues){l=l||{schema:"record",input:t,key:s,value:a};for(let t of d.issues)t.path?t.path.unshift(l):t.path=[l],null==i||i.push(t);if(i||(i=d.issues),null!=e&&e.abortEarly)break}!h.issues&&!d.issues&&(n[h.output]=d.output)}return i?{issues:i}:et(n,a,e,"record")}}}(dt(),function(t=[]){return{schema:"any",async:!1,_parse:(e,i)=>et(e,t,i,"any")}}())),description:ht(dt()),generator:ht(dt()),keywords:ht(dt()),revision:ht(at()),themes:ht(ot(Tt)),states:ht(ot(dt())),version:ht(dt())}),Nt=function(t,e,i,n){let[o,r]=it(i,n);return lt(Object.entries(t.object).reduce(((t,[i,n])=>e.includes(i)?t:{...t,[i]:n}),{}),o,r)}(Mt,["id"]),Ut=lt({state:dt()}),zt=Ut,Ht=vt([Ut,lt({ms:at()})]),Ft=vt([Ut,lt({count:at()})]),Dt=Ut,Bt=Ut,Rt=Ut,qt=vt([Ut,lt({threshold:ht(ot(at([mt(0),ft(1)])))})]),Vt=lt({onAfter:ht(Ht),onClick:ht(zt),onComplete:ht(Rt),onEnter:ht(Ft),onMouseEnter:ht(Dt),onMouseLeave:ht(Bt),onShow:ht(qt)}),Wt=vt([Nt,lt({playOnScroll:ht(ut([at([mt(0),ft(1)]),at([mt(0),ft(1)])])),segments:ht(pt([ut([at(),at()]),dt()]))})]);vt([Vt,lt({animationId:ht(dt()),playbackSettings:Wt})]);var Zt={jpeg:"image/jpeg",png:"image/png",gif:"image/gif",bmp:"image/bmp",svg:"image/svg+xml",webp:"image/webp",mpeg:"audio/mpeg",mp3:"audio/mp3"},Yt={jpeg:[255,216,255],png:[137,80,78,71,13,10,26,10],gif:[71,73,70],bmp:[66,77],webp:[82,73,70,70,87,69,66,80],svg:[60,63,120],mp3:[73,68,51,3,0,0,0,0],mpeg:[73,68,51,3,0,0,0,0]},Jt=t=>{let e=null,i=[];if(!t)return null;let n=t.substring(t.indexOf(",")+1);e=typeof window>"u"?Buffer.from(n,"base64").toString("binary"):atob(n);let o=new Uint8Array(e.length);for(let t=0;t<e.length;t+=1)o[t]=e.charCodeAt(t);i=Array.from(o.subarray(0,8));for(let t in Yt){let e=Yt[t];if(e&&i.every(((t,i)=>t===e[i])))return Zt[t]}return null},Xt=class extends Error{constructor(t,e){super(t),kt(this,"code"),this.name="[dotlottie-js]",this.code=e}};function Kt(t){let e;if(typeof window>"u")e=Buffer.from(t).toString("base64");else{let i=Array.prototype.map.call(t,(t=>String.fromCharCode(t))).join("");e=window.btoa(i)}return`data:${Jt(e)};base64,${e}`}function Gt(t){return"w"in t&&"h"in t&&!("xt"in t)&&"p"in t}function Qt(t){return!("h"in t)&&!("w"in t)&&"p"in t&&"e"in t&&"u"in t&&"id"in t}async function te(t,e=(()=>!0)){if(!(t instanceof Uint8Array))throw new Xt("DotLottie not found","INVALID_DOTLOTTIE");return await new Promise(((i,n)=>{X(t,{filter:e},((t,e)=>{t&&n(t),i(e)}))}))}async function ee(t,e,i){if(!(t instanceof Uint8Array))throw new Xt("DotLottie not found","INVALID_DOTLOTTIE");return(await te(t,(t=>t.name===e&&(!i||i(t)))))[e]}async function ie(t){let e="manifest.json",i=(await te(t,(t=>t.name===e)))[e];if(!(typeof i>"u"))return JSON.parse(V(i,!1))}async function ne(t){if(!(t instanceof Uint8Array))return{success:!1,error:"DotLottie not found"};let e=await ie(t);if(typeof e>"u")return{success:!1,error:"Invalid .lottie file, manifest.json is missing"};let i=function(t,e,i){let n=t._parse(e,i);return n.issues?{success:!1,error:new G(n.issues),issues:n.issues}:{success:!0,data:n.output,output:n.output}}(jt,e);return i.success?{success:!0}:{success:!1,error:`Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify(K(i.error).nested,null,2)}`}}async function oe(t){let e=new Uint8Array(t),i=await ne(e);if(i.error)throw new Xt(i.error,"INVALID_DOTLOTTIE");return e}async function re(t,e){var i;let n=new Map;for(let[t,o]of Object.entries(e))for(let e of o.assets||[])if(Qt(e)){let o=e.p;n.has(o)||n.set(o,new Set),null==(i=n.get(o))||i.add(t)}let o=await async function(t,e){let i=await te(t,(t=>{let i=t.name.replace("audio/","");return t.name.startsWith("audio/")&&(!e||e({...t,name:i}))})),n={};for(let t in i){let e=i[t];e instanceof Uint8Array&&(n[t.replace("audio/","")]=Kt(e))}return n}(t,(t=>n.has(t.name)));for(let[t,i]of n){let n=o[t];if(n)for(let o of i){let i=e[o];for(let e of(null==i?void 0:i.assets)||[])Qt(e)&&e.p===t&&(e.p=n,e.u="",e.e=1)}}}async function se(t,e){var i;let n=new Map;for(let[t,o]of Object.entries(e))for(let e of o.assets||[])if(Gt(e)){let o=e.p;n.has(o)||n.set(o,new Set),null==(i=n.get(o))||i.add(t)}let o=await async function(t,e){let i=await te(t,(t=>{let i=t.name.replace("images/","");return t.name.startsWith("images/")&&(!e||e({...t,name:i}))})),n={};for(let t in i){let e=i[t];e instanceof Uint8Array&&(n[t.replace("images/","")]=Kt(e))}return n}(t,(t=>n.has(t.name)));for(let[t,i]of n){let n=o[t];if(n)for(let o of i){let i=e[o];for(let e of(null==i?void 0:i.assets)||[])Gt(e)&&e.p===t&&(e.p=n,e.u="",e.e=1)}}}function ae(t,e="dotLottie-common"){return new Error(`[${e}]: ${t}`)}function le(t,e="dotLottie-common",...i){console.error(`[${e}]:`,t,...i)}function he(t,e="dotLottie-common",...i){console.warn(`[${e}]:`,t,...i)}function de(t){return["v","ip","op","layers","fr","w","h"].every((e=>Object.prototype.hasOwnProperty.call(t,e)))}function ce(t,e){let i=Object.keys(t).find((i=>t[i]===e));if(void 0===i)throw new Error("Value not found in the object.");return i}((t,e,i)=>{i=null!=t?gt(Lt(t)):{},((t,e,i,n)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let o of wt(e))!Ct.call(t,o)&&o!==i&&_t(t,o,{get:()=>e[o],enumerable:!(n=bt(e,o))||n.enumerable})})(!e&&t&&t.__esModule?i:_t(i,"default",{value:t,enumerable:!0}),t)})(Pt());var ue=class{_dotLottie;_animationsMap=new Map;_themeMap=new Map;_stateMachinesMap=new Map;_manifest;get dotLottie(){return this._dotLottie}get animationsMap(){return this._animationsMap}get themeMap(){return this._themeMap}get stateMachinesMap(){return this._stateMachinesMap}get manifest(){return this._manifest}async loadFromUrl(t){let e=await fetch(t,{method:"GET",mode:"cors"});if(!e.ok)throw new Error(`Failed to load dotLottie from ${t} with status ${e.status}`);let i=e.headers.get("content-type");if(null!=i&&i.includes("application/json")){let i=await e.json();if(!de(i))throw new Error(`Invalid lottie JSON at ${t}`);let n=function(t=""){let e=t.trim(),i=e.lastIndexOf("/"),n=e.substring(i+1),o=n.indexOf(".");return-1!==o?n.substring(0,o):n}(t);this._animationsMap.set(n,i);let o={activeAnimationId:n,animations:[{id:n}]};this._manifest=o}else{this._dotLottie=await oe(await e.arrayBuffer());let t=await ie(this._dotLottie);if(!t)throw new Error("Manifest not found");this._manifest=t}}loadFromLottieJSON(t){if(!de(t))throw new Error("Invalid lottie JSON");let e="my-animation";this._animationsMap.set(e,t);let i={activeAnimationId:e,animations:[{id:e}]};this._manifest=i}async loadFromArrayBuffer(t){this._dotLottie=await oe(t);let e=await ie(this._dotLottie);if(!e)throw new Error("Manifest not found");this._manifest=e}async getAnimation(t){if(this._animationsMap.get(t))return this._animationsMap.get(t);if(!this._dotLottie)return;let e=await async function(t,e,{inlineAssets:i}={},n){let o=`animations/${e}.json`,r=await ee(t,o,n);if(typeof r>"u")return;let s=JSON.parse(V(r,!1));if(!i)return s;let a={[e]:s};return await se(t,a),await re(t,a),s}(this._dotLottie,t,{inlineAssets:!0});return e&&this._animationsMap.set(t,e),e}async getTheme(t){if(this._themeMap.get(t))return this._themeMap.get(t);if(!this._dotLottie)return;let e=await async function(t,e,i){let n=`themes/${e}.lss`,o=await ee(t,n,i);if(!(typeof o>"u"))return V(o,!1)}(this._dotLottie,t);return e&&this._themeMap.set(t,e),e}async getStateMachines(){if(!this._dotLottie)return;let t=await async function(t,e){let i={},n=await te(t,(t=>{let i=t.name.replace("states/","").replace(".json","");return t.name.startsWith("states/")&&(!e||e({...t,name:i}))}));for(let t in n){let e=n[t];e instanceof Uint8Array&&(i[t.replace("states/","").replace(".json","")]=V(e,!1))}return i}(this._dotLottie);for(let e in t)if(e){let i=t[e];if(i){let t=JSON.parse(i);if(t){let e=t.descriptor.id;this._stateMachinesMap.get(e)||this._stateMachinesMap.set(e,t)}}}return Array.from(this._stateMachinesMap.values())}async getStateMachine(t){if(this._stateMachinesMap.get(t))return this._stateMachinesMap.get(t);if(!this._dotLottie)return;let e=await async function(t,e,i){let n=`states/${e}.json`,o=await ee(t,n,i);return typeof o>"u"?void 0:JSON.parse(V(o,!1))}(this._dotLottie,t);return e&&this._stateMachinesMap.set(e.descriptor.id,e),e}};function pe(){throw new Error("Cycle detected")}function ve(){if(ye>1)ye--;else{for(var t,e=!1;void 0!==me;){var i=me;for(me=void 0,ge++;void 0!==i;){var n=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&Le(i))try{i.c()}catch(i){e||(t=i,e=!0)}i=n}}if(ge=0,ye--,e)throw t}}var fe=void 0,me=void 0,ye=0,ge=0,_e=0;function be(t){if(void 0!==fe){var e=t.n;if(void 0===e||e.t!==fe)return e={i:0,S:t,p:fe.s,n:void 0,t:fe,e:void 0,x:void 0,r:e},void 0!==fe.s&&(fe.s.n=e),fe.s=e,t.n=e,32&fe.f&&t.S(e),e;if(-1===e.i)return e.i=0,void 0!==e.n&&(e.n.p=e.p,void 0!==e.p&&(e.p.n=e.n),e.p=fe.s,e.n=void 0,fe.s.n=e,fe.s=e),e}}function we(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function Le(t){for(var e=t.s;void 0!==e;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Ce(t){for(var e=t.s;void 0!==e;e=e.n){var i=e.S.n;if(void 0!==i&&(e.r=i),e.S.n=e,e.i=-1,void 0===e.n){t.s=e;break}}}function Se(t){for(var e=t.s,i=void 0;void 0!==e;){var n=e.p;-1===e.i?(e.S.U(e),void 0!==n&&(n.n=e.n),void 0!==e.n&&(e.n.p=n)):i=e,e.S.n=e.r,void 0!==e.r&&(e.r=void 0),e=n}t.s=i}function ke(t){we.call(this,void 0),this.x=t,this.s=void 0,this.g=_e-1,this.f=4}function Ee(t){var e=t.u;if(t.u=void 0,"function"==typeof e){ye++;var i=fe;fe=void 0;try{e()}catch(e){throw t.f&=-2,t.f|=8,xe(t),e}finally{fe=i,ve()}}}function xe(t){for(var e=t.s;void 0!==e;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Ee(t)}function Ae(t){if(fe!==this)throw new Error("Out-of-order effect");Se(this),fe=t,this.f&=-2,8&this.f&&xe(this),ve()}function Ie(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}we.prototype.h=function(){return!0},we.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},we.prototype.U=function(t){if(void 0!==this.t){var e=t.e,i=t.x;void 0!==e&&(e.x=i,t.e=void 0),void 0!==i&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}},we.prototype.subscribe=function(t){var e=this;return function(t){var e=new Ie(t);try{e.c()}catch(t){throw e.d(),t}return e.d.bind(e)}((function(){var i=e.value,n=32&this.f;this.f&=-33;try{t(i)}finally{this.f|=n}}))},we.prototype.valueOf=function(){return this.value},we.prototype.toString=function(){return this.value+""},we.prototype.toJSON=function(){return this.value},we.prototype.peek=function(){return this.v},Object.defineProperty(we.prototype,"value",{get:function(){var t=be(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(fe instanceof ke&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){ge>100&&pe(),this.v=t,this.i++,_e++,ye++;try{for(var e=this.t;void 0!==e;e=e.x)e.t.N()}finally{ve()}}}}),(ke.prototype=new we).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f)||(this.f&=-5,this.g===_e))return!0;if(this.g=_e,this.f|=1,this.i>0&&!Le(this))return this.f&=-2,!0;var t=fe;try{Ce(this),fe=this;var e=this.x();(16&this.f||this.v!==e||0===this.i)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return fe=t,Se(this),this.f&=-2,!0},ke.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var e=this.s;void 0!==e;e=e.n)e.S.S(e)}we.prototype.S.call(this,t)},ke.prototype.U=function(t){if(void 0!==this.t&&(we.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var e=this.s;void 0!==e;e=e.n)e.S.U(e)}},ke.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},ke.prototype.peek=function(){if(this.h()||pe(),16&this.f)throw this.v;return this.v},Object.defineProperty(ke.prototype,"value",{get:function(){1&this.f&&pe();var t=be(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),Ie.prototype.c=function(){var t=this.S();try{if(8&this.f||void 0===this.x)return;var e=this.x();"function"==typeof e&&(this.u=e)}finally{t()}},Ie.prototype.S=function(){1&this.f&&pe(),this.f|=1,this.f&=-9,Ee(this),Ce(this),ye++;var t=fe;return fe=this,Ae.bind(this,t)},Ie.prototype.N=function(){2&this.f||(this.f|=2,this.o=me,me=this)},Ie.prototype.d=function(){this.f|=8,1&this.f||xe(this)};var Pe=class{_state;_prevState;constructor(t){this._prevState=t,this._state=function(t){return new we(t)}(t)}setState(t){this._prevState=this._state.value,this._state.value=t}subscribe(t){return this._state.subscribe((e=>t(e,this._prevState)))}};var Oe={"@dotlottie/dotlottie-js":"0.6.0","@lottiefiles/relottie":"1.0.0","@lottiefiles/relottie-style":"0.4.1","@preact/signals-core":"^1.2.3",howler:"^2.2.3","lottie-web":"^5.12.2",xstate:"^4.38.1"},$e=(t=>(t.Complete="complete",t.DataFail="data_fail",t.DataReady="data_ready",t.Error="error",t.Frame="frame",t.Freeze="freeze",t.LoopComplete="loopComplete",t.Pause="pause",t.Play="play",t.Ready="ready",t.Stop="stop",t.VisibilityChange="visibilityChange",t))($e||{}),Me=(t=>(t.Completed="completed",t.Error="error",t.Fetching="fetching",t.Frozen="frozen",t.Initial="initial",t.Loading="loading",t.Paused="paused",t.Playing="playing",t.Ready="ready",t.Stopped="stopped",t))(Me||{}),Te=(t=>(t.Bounce="bounce",t.Normal="normal",t))(Te||{}),je={autoplay:!1,direction:1,hover:!1,intermission:0,loop:!1,playMode:"normal",speed:1,defaultTheme:""},Ne={activeStateId:"",autoplay:!1,currentState:"initial",frame:0,seeker:0,direction:1,hover:!1,loop:!1,playMode:"normal",speed:1,background:"transparent",intermission:0,currentAnimationId:void 0,visibilityPercentage:0},Ue=class{_lottie;_src;_animationConfig;_prevUserPlaybackOptions={};_userPlaybackOptions;_hover=!1;_loop=!1;_counter=0;_intermission=0;_counterInterval=null;_container=null;_name;_mode="normal";_background="transparent";_animation;_defaultTheme;_activeAnimationId;_currentAnimationId;_testId;_listeners=new Map;_currentState="initial";_stateBeforeFreeze="initial";state=new Pe(Ne);_light=!1;_worker=!1;_dotLottieLoader=new ue;_activeStateId;_inInteractiveMode=!1;_scrollTicking=!1;_scrollCallback=void 0;_onShowIntersectionObserver=void 0;_visibilityPercentage=0;_audios=[];_stateMachineManager;constructor(t,e,i){this._src="string"==typeof t?t:Object.assign({},t),null!=i&&i.testId&&(this._testId=i.testId),this._defaultTheme=(null==i?void 0:i.defaultTheme)||"",this._userPlaybackOptions=this._validatePlaybackOptions(i||{}),"string"==typeof(null==i?void 0:i.activeAnimationId)&&(this._activeAnimationId=i.activeAnimationId),this._container=e||null,"string"==typeof(null==i?void 0:i.background)&&this.setBackground(i.background),typeof(null==i?void 0:i.activeStateId)<"u"&&(this._activeStateId=i.activeStateId);let{rendererSettings:n,...o}=i||{};this._animationConfig={loop:!1,autoplay:!1,renderer:"svg",rendererSettings:{clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0,filterSize:{width:"200%",height:"200%",x:"-50%",y:"-50%"},...n},...o},null!=i&&i.light&&(this._light=i.light),null!=i&&i.worker&&(this._worker=i.worker),this._listenToHover(),this._listenToVisibilityChange()}_listenToHover(){var t,e,i,n;let o=()=>{this._hover&&"playing"!==this.currentState&&this.play()},r=()=>{this._hover&&"playing"===this.currentState&&this.stop()};null==(t=this._container)||t.removeEventListener("mouseenter",o),null==(e=this._container)||e.removeEventListener("mouseleave",r),null==(i=this._container)||i.addEventListener("mouseleave",r),null==(n=this._container)||n.addEventListener("mouseenter",o)}_onVisibilityChange(){!this._lottie||typeof document>"u"||(document.hidden&&"playing"===this.currentState?this.freeze():"frozen"===this.currentState&&this.unfreeze())}_listenToVisibilityChange(){typeof document<"u"&&typeof document.hidden<"u"&&document.addEventListener("visibilitychange",(()=>this._onVisibilityChange()))}_getOption(t){var e;if(typeof this._userPlaybackOptions[t]<"u")return this._userPlaybackOptions[t];let i=null==(e=this._dotLottieLoader.manifest)?void 0:e.animations.find((t=>t.id===this._currentAnimationId));return i&&typeof i[t]<"u"?i[t]:je[t]}_getPlaybackOptions(){let t={};for(let e in je)typeof je[e]<"u"&&(t[e]=this._getOption(e));return t}_setPlayerState(t){var e,i,n;let o=t(this._getPlaybackOptions());try{Nt._parse(o)}catch{return void he(`Invalid PlaybackOptions, ${JSON.stringify(o,null,2)}`)}typeof o.defaultTheme<"u"&&(this._defaultTheme=o.defaultTheme),typeof o.playMode<"u"&&(this._mode=o.playMode),typeof o.intermission<"u"&&(this._intermission=o.intermission),typeof o.hover<"u"&&(this._hover=o.hover),typeof o.loop<"u"&&(this.clearCountTimer(),this._loop=o.loop,this._counter=0,null==(e=this._lottie)||e.setLoop("number"==typeof o.loop||o.loop)),typeof o.speed<"u"&&(null==(i=this._lottie)||i.setSpeed(o.speed)),typeof o.autoplay<"u"&&this._lottie&&(this._lottie.autoplay=o.autoplay),typeof o.direction<"u"&&(null==(n=this._lottie)||n.setDirection(o.direction))}_getOptionsFromAnimation(t){let{id:e,...i}=t;return{...je,...i}}_updateTestData(){!this._testId||!this._lottie||(window.dotLottiePlayer||(window.dotLottiePlayer={[this._testId]:{}}),window.dotLottiePlayer[this._testId]={direction:this._lottie.playDirection,currentState:this._currentState,loop:this.loop,mode:this._mode,speed:this._lottie.playSpeed})}setContainer(t){t!==this._container&&(this._container=t,this.setBackground(this._background),this._listenToHover())}get currentState(){return this._currentState}clearCountTimer(){this._counterInterval&&clearInterval(this._counterInterval)}setCurrentState(t){this._currentState=t,this._notify(),this._updateTestData()}static isPathJSON(t){var e;return"json"===(null==(e=t.split(".").pop())?void 0:e.toLowerCase())}get src(){return this._src}updateSrc(t){this._src!==t&&(this._src="string"==typeof t?t:Object.assign({},t),this._activeAnimationId=void 0,this._currentAnimationId=void 0,this.load())}get intermission(){return this._intermission}get hover(){return this._hover}setHover(t){"boolean"==typeof t&&(this._hover=t,this._userPlaybackOptions.hover=t,this._notify())}setIntermission(t){this._intermission=t,this._userPlaybackOptions.intermission=t,this._notify()}get mode(){return this._mode}get animations(){return this._dotLottieLoader.animationsMap}get themes(){return this._dotLottieLoader.themeMap}setMode(t){"string"==typeof t&&(this._mode=t,this._userPlaybackOptions.playMode=t,this._setPlayerState((()=>({playMode:t}))),this._notify(),this._updateTestData())}get container(){if(this._container)return this._container}goToAndPlay(t,e,i){this._lottie&&!["loading"].includes(this._currentState)?(this._lottie.goToAndPlay(t,e,i),this.setCurrentState("playing")):he("goToAndPlay() Can't use whilst loading.")}goToAndStop(t,e,i){this._lottie&&!["loading"].includes(this._currentState)?(this._lottie.goToAndStop(t,e,i),this.setCurrentState("stopped")):he("goToAndStop() Can't use whilst loading.")}seek(t){if(!this._lottie||["loading"].includes(this._currentState))return void he("seek() Can't use whilst loading.");let e=t;"number"==typeof e&&(e=Math.round(e));let i=/^(\d+)(%?)$/u.exec(e.toString());if(!i)return;let n="%"===i[2]?this.totalFrames*Number(i[1])/100:i[1];void 0!==n&&(this._lottie.goToAndPlay(n,!0),"playing"===this.currentState?this.play():"frozen"===this.currentState?this.freeze():this.pause())}_areNumbersInRange(t,e){return t>=0&&t<=1&&e>=0&&e<=1}_updatePosition(t,e,i){let[n,o]=null!=t?t:[0,this.totalFrames-1],[r,s]=null!=e?e:[0,1];if(this._areNumbersInRange(r,s)){if(this.container){let{height:t,top:e}=this.container.getBoundingClientRect(),a=(window.innerHeight-e)/(window.innerHeight+t),l=n+Math.round((a-r)/(s-r)*(o-n));i&&i(a),this.goToAndStop(l,!0),(l>=o||a>=s)&&this._handleAnimationComplete()}this._scrollTicking=!1}else le("threshold values must be between 0 and 1")}_requestTick(t,e,i){this._scrollTicking||(requestAnimationFrame((()=>this._updatePosition(t,e,i))),this._scrollTicking=!0)}playOnScroll(t){this.stop(),this._scrollCallback&&this.stopPlayOnScroll(),this._scrollCallback=()=>this._requestTick(null==t?void 0:t.segments,null==t?void 0:t.threshold,null==t?void 0:t.positionCallback),window.addEventListener("scroll",this._scrollCallback)}stopPlayOnScroll(){this._scrollCallback&&(window.removeEventListener("scroll",this._scrollCallback),this._scrollCallback=void 0)}stopPlayOnShow(){this._onShowIntersectionObserver&&(this._onShowIntersectionObserver.disconnect(),this._onShowIntersectionObserver=void 0)}addIntersectionObserver(t){if(!this.container)throw ae("Can't play on show, player container element not available.");let e={root:null,rootMargin:"0px",threshold:null!=t&&t.threshold?t.threshold:[0,1]};this._onShowIntersectionObserver=new IntersectionObserver((e=>{e.forEach((e=>{var i,n;this._visibilityPercentage=100*e.intersectionRatio,e.isIntersecting?(null!=t&&t.callbackOnIntersect&&t.callbackOnIntersect(this._visibilityPercentage),null==(i=this._container)||i.dispatchEvent(new Event("visibilityChange"))):null!=t&&t.callbackOnIntersect&&(t.callbackOnIntersect(0),null==(n=this._container)||n.dispatchEvent(new Event("visibilityChange")))}))}),e),this._onShowIntersectionObserver.observe(this.container)}playOnShow(t){var e;if(this.stop(),!this.container)throw ae("Can't play on show, player container element not available.");this._onShowIntersectionObserver&&this.stopPlayOnShow(),this.addIntersectionObserver({threshold:null!=(e=null==t?void 0:t.threshold)?e:[],callbackOnIntersect:t=>{0===t?this.pause():this.play()}})}_validatePlaybackOptions(t){if(!t)return{};let e={};for(let[i,n]of Object.entries(t))switch(i){case"autoplay":"boolean"==typeof n&&(e.autoplay=n);break;case"direction":"number"==typeof n&&[1,-1].includes(n)&&(e.direction=n);break;case"loop":("boolean"==typeof n||"number"==typeof n)&&(e.loop=n);break;case"playMode":"string"==typeof n&&["normal","bounce"].includes(n)&&(e.playMode=n);break;case"speed":"number"==typeof n&&(e.speed=n);break;case"themeColor":"string"==typeof n&&(e.themeColor=n);break;case"hover":"boolean"==typeof n&&(e.hover=n);break;case"intermission":"number"==typeof n&&(e.intermission=n);break;case"defaultTheme":"string"==typeof n&&(e.defaultTheme=n)}return this._requireValidPlaybackOptions(e),e}_requireAnimationsInTheManifest(){var t;if(null==(t=this._dotLottieLoader.manifest)||!t.animations.length)throw ae("No animations found in manifest.")}_requireAnimationsToBeLoaded(){if(0===this._dotLottieLoader.animationsMap.size)throw ae("No animations have been loaded.")}async play(t,e){var i,n;if(["initial","loading"].includes(this._currentState))he("Player unable to play whilst loading.");else{if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),this._lottie&&!t)return-1===this._lottie.playDirection&&0===this._lottie.currentFrame?this._lottie.goToAndPlay(this._lottie.totalFrames,!0):this._lottie.play(),void this.setCurrentState("playing");if("number"==typeof t){let n=null==(i=this._dotLottieLoader.manifest)?void 0:i.animations[t];if(!n)throw ae("animation not found.");"function"==typeof e?await this.render({id:n.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(n))}):await this.render({id:n.id})}if("string"==typeof t){let i=null==(n=this._dotLottieLoader.manifest)?void 0:n.animations.find((e=>e.id===t));if(!i)throw ae("animation not found.");"function"==typeof e?await this.render({id:i.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):await this.render({id:i.id})}}}playSegments(t,e){this._lottie&&!["loading"].includes(this._currentState)?(this._lottie.playSegments(t,e),this.setCurrentState("playing")):he("playSegments() Can't use whilst loading.")}resetSegments(t){this._lottie&&!["loading"].includes(this._currentState)?this._lottie.resetSegments(t):he("resetSegments() Can't use whilst loading.")}togglePlay(){"playing"===this.currentState?this.pause():this.play()}_getAnimationByIdOrIndex(t){var e,i;if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),"number"==typeof t){let i=null==(e=this._dotLottieLoader.manifest)?void 0:e.animations[t];if(!i)throw ae("animation not found.");return i}if("string"==typeof t){let e=null==(i=this._dotLottieLoader.manifest)?void 0:i.animations.find((e=>e.id===t));if(!e)throw ae("animation not found.");return e}throw ae("first param must be a number or string")}get activeAnimationId(){return this._getActiveAnimationId()}get currentAnimationId(){return this._currentAnimationId}get activeStateId(){return this._activeStateId}async _startInteractivity(t){if(this._inInteractiveMode){if(0===this._dotLottieLoader.stateMachinesMap.size&&await this._dotLottieLoader.getStateMachines(),0===this._dotLottieLoader.stateMachinesMap.size)throw ae("No interactivity states are available.");if("undefined"===t)throw ae("stateId is not specified.");this._stateMachineManager||(this._stateMachineManager=await async function(t,e){let[{DotLottieStateMachineManager:n}]=await Promise.all([i.e(84).then(i.bind(i,8084))]);if(!t.length)throw ae("No state machines available inside this .lottie!");return new n(t,e)}(Array.from(this._dotLottieLoader.stateMachinesMap.values()),this)),this._stateMachineManager.start(t)}else le("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.")}enterInteractiveMode(t){var e;if(!t)throw ae("stateId must be a non-empty string.");this._inInteractiveMode||(this._prevUserPlaybackOptions={...this._userPlaybackOptions}),this._inInteractiveMode&&(null==(e=this._stateMachineManager)||e.stop()),this._activeStateId=t,this._inInteractiveMode=!0,this._startInteractivity(t)}exitInteractiveMode(){var t;this._inInteractiveMode&&(this._inInteractiveMode=!1,this._activeStateId="",null==(t=this._stateMachineManager)||t.stop(),this._userPlaybackOptions={},this._userPlaybackOptions={...this._prevUserPlaybackOptions},this._prevUserPlaybackOptions={},this.reset())}reset(){var t;let e=this._getActiveAnimationId(),i=null==(t=this._dotLottieLoader.manifest)?void 0:t.animations.find((t=>t.id===e));if(this._inInteractiveMode&&this.exitInteractiveMode(),!i)throw ae("animation not found.");this.play(e)}previous(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw ae("manifest not found.");if(this._inInteractiveMode)return void he("previous() is not supported in interactive mode.");let e=this._dotLottieLoader.manifest.animations.findIndex((t=>t.id===this._currentAnimationId));if(-1===e)throw ae("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e-1+this._dotLottieLoader.manifest.animations.length)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw ae("animation not found.");"function"==typeof t?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}next(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw ae("manifest not found.");if(this._inInteractiveMode)return void he("next() is not supported in interactive mode.");let e=this._dotLottieLoader.manifest.animations.findIndex((t=>t.id===this._currentAnimationId));if(-1===e)throw ae("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e+1)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw ae("animation not found.");"function"==typeof t?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}getManifest(){return this._dotLottieLoader.manifest}resize(){this._lottie&&!["loading"].includes(this._currentState)?this._lottie.resize():he("resize() Can't use whilst loading.")}stop(){this._lottie&&!["loading"].includes(this._currentState)?(this.clearCountTimer(),this._counter=0,this._setPlayerState((()=>({direction:this._getOption("direction")}))),this._lottie.stop(),this.setCurrentState("stopped")):he("stop() Can't use whilst loading.")}pause(){this._lottie&&!["loading"].includes(this._currentState)?(this.clearCountTimer(),this._lottie.pause(),this.setCurrentState("paused")):he("pause() Can't use whilst loading.")}freeze(){this._lottie&&!["loading"].includes(this._currentState)?("frozen"!==this.currentState&&(this._stateBeforeFreeze=this.currentState),this._lottie.pause(),this.setCurrentState("frozen")):he("freeze() Can't use whilst loading.")}unfreeze(){this._lottie&&!["loading"].includes(this._currentState)?"playing"===this._stateBeforeFreeze?this.play():this.pause():he("unfreeze() Can't use whilst loading.")}destroy(){var t,e;null!=(t=this._container)&&t.__lottie&&(this._container.__lottie.destroy(),this._container.__lottie=null),this._audios.length&&(this._audios.forEach((t=>{t.unload()})),this._audios=[]),this.clearCountTimer(),typeof document<"u"&&document.removeEventListener("visibilitychange",(()=>this._onVisibilityChange())),this._counter=0,null==(e=this._lottie)||e.destroy(),this._lottie=void 0}getAnimationInstance(){return this._lottie}static getLottieWebVersion(){return`${Oe["lottie-web"]}`}addEventListener(t,e){var i,n,o;this._listeners.has(t)||this._listeners.set(t,new Set),null==(i=this._listeners.get(t))||i.add(e);try{"complete"===t?null==(n=this._container)||n.addEventListener(t,e):null==(o=this._lottie)||o.addEventListener(t,e)}catch(t){le(`addEventListener ${t}`)}}getState(){var t,e,i,n,o,r,s;return{autoplay:null!=(e=null==(t=this._lottie)?void 0:t.autoplay)&&e,currentState:this._currentState,frame:this._frame,visibilityPercentage:this._visibilityPercentage,seeker:this._seeker,direction:null!=(n=null==(i=this._lottie)?void 0:i.playDirection)?n:1,hover:this._hover,loop:this._loop||!1,playMode:this._mode,speed:null!=(r=null==(o=this._lottie)?void 0:o.playSpeed)?r:1,background:this._background,intermission:this._intermission,defaultTheme:this._defaultTheme,currentAnimationId:this._currentAnimationId,activeStateId:null!=(s=this._activeStateId)?s:""}}_notify(){this.state.setState(this.getState())}get totalFrames(){var t;return(null==(t=this._lottie)?void 0:t.totalFrames)||0}get direction(){return this._lottie?this._lottie.playDirection:1}setDirection(t){this._requireValidDirection(t),this._setPlayerState((()=>({direction:t}))),this._userPlaybackOptions.direction=t}get speed(){var t;return(null==(t=this._lottie)?void 0:t.playSpeed)||1}setSpeed(t){this._requireValidSpeed(t),this._setPlayerState((()=>({speed:t}))),this._userPlaybackOptions.speed=t}get autoplay(){var t,e;return null!=(e=null==(t=this._lottie)?void 0:t.autoplay)&&e}setAutoplay(t){this._requireValidAutoplay(t),this._lottie&&!["loading"].includes(this._currentState)?(this._setPlayerState((()=>({autoplay:t}))),this._userPlaybackOptions.autoplay=t):he("setAutoplay() Can't use whilst loading.")}toggleAutoplay(){this._lottie&&!["loading"].includes(this._currentState)?this.setAutoplay(!this._lottie.autoplay):he("toggleAutoplay() Can't use whilst loading.")}get defaultTheme(){return this._defaultTheme}setDefaultTheme(t){this._setPlayerState((()=>({defaultTheme:t}))),this._userPlaybackOptions.defaultTheme=t,this._animation&&this.render()}get loop(){return this._loop}setLoop(t){this._requireValidLoop(t),this._setPlayerState((()=>({loop:t}))),this._userPlaybackOptions.loop=t}toggleLoop(){this._lottie&&!["loading"].includes(this._currentState)?this.setLoop(!this._loop):he("toggleLoop() Can't use whilst loading.")}get background(){return this._background}setBackground(t){this._requireValidBackground(t),this._background=t,this._container&&(this._container.style.backgroundColor=t)}get _frame(){return this._lottie?"completed"===this.currentState?-1===this.direction?0:this._lottie.totalFrames:this._lottie.currentFrame:0}get _seeker(){return this._lottie?this._frame/this._lottie.totalFrames*100:0}async revertToManifestValues(t){var e;let i;i=Array.isArray(t)&&0!==t.length?t:["autoplay","defaultTheme","direction","hover","intermission","loop","playMode","speed","activeAnimationId"];let n=!1;if(i.includes("activeAnimationId")){let t=null==(e=this._dotLottieLoader.manifest)?void 0:e.activeAnimationId,i=this._getAnimationByIdOrIndex(t||0);this._activeAnimationId=t,await this._setCurrentAnimation(i.id),n=!0}i.forEach((t=>{switch(t){case"autoplay":delete this._userPlaybackOptions.autoplay,this.setAutoplay(this._getOption("autoplay"));break;case"defaultTheme":delete this._userPlaybackOptions.defaultTheme,this.setDefaultTheme(this._getOption("defaultTheme"));break;case"direction":delete this._userPlaybackOptions.direction,this.setDirection(this._getOption("direction"));break;case"hover":delete this._userPlaybackOptions.hover,this.setHover(this._getOption("hover"));break;case"intermission":delete this._userPlaybackOptions.intermission,this.setIntermission(this._getOption("intermission"));break;case"loop":delete this._userPlaybackOptions.loop,this.setLoop(this._getOption("loop"));break;case"playMode":delete this._userPlaybackOptions.playMode,this.setMode(this._getOption("playMode")),this.setDirection(this._getOption("direction"));break;case"speed":delete this._userPlaybackOptions.speed,this.setSpeed(this._getOption("speed"))}})),n&&this.render()}removeEventListener(t,e){var i,n,o;try{"complete"===t?null==(i=this._container)||i.removeEventListener(t,e):null==(n=this._lottie)||n.removeEventListener(t,e),null==(o=this._listeners.get(t))||o.delete(e)}catch(t){le("removeEventListener",t)}}_handleAnimationComplete(){var t;"number"==typeof this._loop&&this.stop();let e=-1===this.direction?0:this.totalFrames;this.goToAndStop(e,!0),this._counter=0,this.clearCountTimer(),this.setCurrentState("completed"),null==(t=this._container)||t.dispatchEvent(new Event("complete"))}addEventListeners(){var t;if(this._lottie&&!["loading"].includes(this._currentState)){this._lottie.addEventListener("enterFrame",(()=>{var t;this._lottie?(0===Math.floor(this._lottie.currentFrame)&&-1===this.direction&&(null==(t=this._container)||t.dispatchEvent(new Event("complete")),this.loop||this.setCurrentState("completed")),this._notify()):he("enterFrame event : Lottie is undefined.")})),this._lottie.addEventListener("loopComplete",(()=>{var t;if(!this._lottie)return void he("loopComplete event : Lottie is undefined.");null==(t=this._container)||t.dispatchEvent(new Event("loopComplete")),this.intermission>0&&this.pause();let e=this._lottie.playDirection;if("number"==typeof this._loop&&this._loop>0&&(this._counter+="bounce"===this._mode?.5:1,this._counter>=this._loop))return void this._handleAnimationComplete();"bounce"===this._mode&&"number"==typeof e&&(e=-1*Number(e));let i=-1===e?this._lottie.totalFrames-1:0;this.intermission?(this.goToAndPlay(i,!0),this.pause(),this._counterInterval=window.setTimeout((()=>{this._lottie&&(this._setPlayerState((()=>({direction:e}))),this.goToAndPlay(i,!0))}),this._intermission)):(this._setPlayerState((()=>({direction:e}))),this.goToAndPlay(-1===e?this.totalFrames-1:0,!0))})),this._lottie.addEventListener("complete",(()=>{if(this._lottie&&!1===this._loop&&"bounce"===this._mode){if(this._counter+=.5,this._counter>=1)return void this._handleAnimationComplete();this._counterInterval=window.setTimeout((()=>{if(!this._lottie)return;let t=this._lottie.playDirection;"bounce"===this._mode&&"number"==typeof t&&(t=-1*Number(t));let e=-1===t?this.totalFrames-1:0;this._setPlayerState((()=>({direction:t}))),this.goToAndPlay(e,!0)}),this._intermission)}else this._handleAnimationComplete()}));for(let[e,i]of this._listeners)if("complete"===e)for(let n of i)null==(t=this._container)||t.addEventListener(e,n);else for(let t of i)this._lottie.addEventListener(e,t)}else he("addEventListeners() Can't use whilst loading.")}async _setCurrentAnimation(t){this._currentState="loading";let e=await this._dotLottieLoader.getAnimation(t);this._currentAnimationId=t,this._animation=e,this._currentState="ready"}async _getAudioFactory(){if(this._animation&&function(t){let e=t.assets;return!!e&&e.some((t=>Qt(t)))}(this._animation)){let{DotLottieAudio:t}=await i.e(487).then(i.bind(i,487));return e=>{let i=new t({src:[e]});return this._audios.push(i),i}}return null}async render(t){var e,n,o,r,s,a,l,h,d,c,u,p,v,f,m,y,g,_;if(null!=t&&t.id)await this._setCurrentAnimation(t.id);else if(!this._animation)throw ae("no animation selected");let b=null!=(e=je.loop)&&e,w=null!=(n=je.autoplay)&&n,L=null!=(o=je.playMode)?o:"normal",C=null!=(r=je.intermission)?r:0,S=null!=(s=je.hover)&&s,k=null!=(a=je.direction)?a:1,E=null!=(l=je.speed)?l:1,x=null!=(h=je.defaultTheme)?h:"";b=null!=(d=null==t?void 0:t.loop)?d:this._getOption("loop"),w=null!=(c=null==t?void 0:t.autoplay)?c:this._getOption("autoplay"),L=null!=(u=null==t?void 0:t.playMode)?u:this._getOption("playMode"),C=null!=(p=null==t?void 0:t.intermission)?p:this._getOption("intermission"),S=null!=(v=null==t?void 0:t.hover)?v:this._getOption("hover"),k=null!=(f=null==t?void 0:t.direction)?f:this._getOption("direction"),E=null!=(m=null==t?void 0:t.speed)?m:this._getOption("speed"),x=null!=(y=null==t?void 0:t.defaultTheme)?y:this._getOption("defaultTheme");let A={...this._animationConfig,autoplay:!S&&w,loop:"number"==typeof b||b,renderer:this._worker?"svg":null!=(g=this._animationConfig.renderer)?g:"svg"},[I,P,O]=await Promise.all([this._dotLottieLoader.getTheme(x),this._getLottiePlayerInstance(),this._getAudioFactory()]);I&&this._animation?this._animation=await async function(t,e){let[{relottie:n},{default:o}]=await Promise.all([i.e(782).then(i.bind(i,2782)),i.e(489).then(i.bind(i,2489))]),r=await n().use(o,{lss:e}).process(JSON.stringify(t));return JSON.parse(r.value)}(this._animation,I):this._animation=await this._dotLottieLoader.getAnimation(null!=(_=this._currentAnimationId)?_:""),!this._activeStateId||this._inInteractiveMode?(this.destroy(),this._setPlayerState((()=>({defaultTheme:x,playMode:L,intermission:C,hover:S,loop:b}))),this._lottie=O?P.loadAnimation({...A,container:this._container,animationData:this._animation,audioFactory:O}):P.loadAnimation({...A,container:this._container,animationData:this._animation}),typeof this._lottie.resetSegments>"u"&&(this._lottie.resetSegments=()=>{var t;null==(t=this._lottie)||t.playSegments([0,this._lottie.totalFrames],!0)}),this.addEventListeners(),this._container&&(this._container.__lottie=this._lottie),this._setPlayerState((()=>({direction:k,speed:E}))),w&&!S&&this.play(),this._updateTestData()):this.enterInteractiveMode(this._activeStateId)}async _getLottiePlayerInstance(){var t;let e,n=null!=(t=this._animationConfig.renderer)?t:"svg";if(this._worker)return"svg"!==n&&he("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."),e=await i.e(595).then(i.bind(i,3595)),e.default;switch(n){case"svg":e=this._light?await i.e(44).then(i.bind(i,3044)):await i.e(849).then(i.bind(i,8471));break;case"canvas":e=this._light?await i.e(976).then(i.bind(i,3976)):await i.e(995).then(i.bind(i,3995));break;case"html":e=this._light?await i.e(970).then(i.bind(i,7967)):await i.e(331).then(i.bind(i,6331));break;default:throw new Error(`Invalid renderer: ${n}`)}return e.default}_getActiveAnimationId(){var t,e,i,n;let o=this._dotLottieLoader.manifest;return null!=(n=null!=(i=null!=(t=this._activeAnimationId)?t:null==o?void 0:o.activeAnimationId)?i:null==(e=null==o?void 0:o.animations[0])?void 0:e.id)?n:void 0}async load(t){if("loading"!==this._currentState)try{if(this.setCurrentState("loading"),"string"==typeof this._src)if(function(t){try{return de(JSON.parse(t))}catch{return!1}}(this._src)){let t=JSON.parse(this._src);this._dotLottieLoader.loadFromLottieJSON(t)}else{let t=new URL(this._src,window.location.href);await this._dotLottieLoader.loadFromUrl(t.toString())}else{if("object"!=typeof this._src||!de(this._src))throw ae("Invalid src provided");this._dotLottieLoader.loadFromLottieJSON(this._src)}if(!this._dotLottieLoader.manifest)throw ae("No manifest found");let e=this._getActiveAnimationId();if(!e)throw ae("No active animation found");await this._setCurrentAnimation(e),await this.render(t)}catch(t){this.setCurrentState("error"),t instanceof Error&&le(`Error loading animation: ${t.message}`)}else he("Loading in progress..")}setErrorState(t){this.setCurrentState("error"),le(t)}_requireValidDirection(t){if(-1!==t&&1!==t)throw ae("Direction can only be -1 (backwards) or 1 (forwards)")}_requireValidIntermission(t){if(t<0||!Number.isInteger(t))throw ae("intermission must be a positive number")}_requireValidLoop(t){if("number"==typeof t&&(!Number.isInteger(t)||t<0))throw ae("loop must be a positive number or boolean")}_requireValidSpeed(t){if("number"!=typeof t)throw ae("speed must be a number")}_requireValidBackground(t){if("string"!=typeof t)throw ae("background must be a string")}_requireValidAutoplay(t){if("boolean"!=typeof t)throw ae("autoplay must be a boolean")}_requireValidPlaybackOptions(t){t.direction&&this._requireValidDirection(t.direction),t.intermission&&this._requireValidIntermission(t.intermission),t.loop&&this._requireValidLoop(t.loop),t.speed&&this._requireValidSpeed(t.speed)}}},7493:(t,e,i)=>{i.d(e,{a:()=>h,b:()=>d});var n=Object.create,o=Object.defineProperty,r=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,a=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,h=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),d=(t,e,i)=>(i=null!=t?n(a(t)):{},((t,e,i,n)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let a of s(e))!l.call(t,a)&&a!==i&&o(t,a,{get:()=>e[a],enumerable:!(n=r(e,a))||n.enumerable});return t})(!e&&t&&t.__esModule?i:o(i,"default",{value:t,enumerable:!0}),t))},5031:(t,e,i)=>{i.d(e,{a:()=>r});var n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,r=(t,e,i,r)=>{for(var s,a=r>1?void 0:r?o(e,i):e,l=t.length-1;l>=0;l--)(s=t[l])&&(a=(r?s(e,i,a):s(a))||a);return r&&a&&n(e,i,a),a}}},n={};function o(t){var e=n[t];if(void 0!==e)return e.exports;var r=n[t]={exports:{}};return i[t](r,r.exports,o),r.exports}o.m=i,o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,i)=>(o.f[i](t,e),e)),[])),o.u=t=>t+"-chunk.js?t=1702976196969",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="payo:",o.l=(i,n,r,s)=>{if(t[i])t[i].push(n);else{var a,l;if(void 0!==r)for(var h=document.getElementsByTagName("script"),d=0;d<h.length;d++){var c=h[d];if(c.getAttribute("src")==i||c.getAttribute("data-webpack")==e+r){a=c;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",e+r),a.src=i),t[i]=[n];var u=(e,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=t[i];if(delete t[i],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((t=>t(n))),e)return e(n)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),l&&document.head.appendChild(a)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&!t;)t=i[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{var t={288:0};o.f.j=(e,i)=>{var n=o.o(t,e)?t[e]:void 0;if(0!==n)if(n)i.push(n[2]);else{var r=new Promise(((i,o)=>n=t[e]=[i,o]));i.push(n[2]=r);var s=o.p+o.u(e),a=new Error;o.l(s,(i=>{if(o.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",a.name="ChunkLoadError",a.type=r,a.request=s,n[1](a)}}),"chunk-"+e,e)}};var e=(e,i)=>{var n,r,[s,a,l]=i,h=0;if(s.some((e=>0!==t[e]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(l)l(o)}for(e&&e(i);h<s.length;h++)r=s[h],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0},i=self.webpackChunkpayo=self.webpackChunkpayo||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})(),(()=>{var t,e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(i&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,l=window,h=l.trustedTypes,d=h?h.emptyScript:"",c=l.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p},f="finalized",m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach(((e,i)=>{let n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){let o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;let n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{i?t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((i=>{let n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var n;let o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){let r=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;let n=this.constructor,o=n._$Ev.get(t);if(void 0!==o&&this._$El!==o){let t=n.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=o,this[o]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};m[f]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:m}),(null!==(t=l.reactiveElementVersions)&&void 0!==t?t:l.reactiveElementVersions=[]).push("1.6.3");var y,g=window,_=g.trustedTypes,b=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",L=`lit$${(Math.random()+"").slice(9)}$`,C="?"+L,S=`<${C}>`,k=document,E=()=>k.createComment(""),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,I="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,$=/>/g,M=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,j=/"/g,N=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),z=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),F=new WeakMap,D=k.createTreeWalker(k,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==b?b.createHTML(e):e}var R=class t{constructor({strings:e,_$litType$:i},n){let o;this.parts=[];let r=0,s=0,a=e.length-1,l=this.parts,[h,d]=((t,e)=>{let i,n=t.length-1,o=[],r=2===e?"<svg>":"",s=P;for(let e=0;e<n;e++){let n,a,l=t[e],h=-1,d=0;for(;d<l.length&&(s.lastIndex=d,a=s.exec(l),null!==a);)d=s.lastIndex,s===P?"!--"===a[1]?s=O:void 0!==a[1]?s=$:void 0!==a[2]?(N.test(a[2])&&(i=RegExp("</"+a[2],"g")),s=M):void 0!==a[3]&&(s=M):s===M?">"===a[0]?(s=null!=i?i:P,h=-1):void 0===a[1]?h=-2:(h=s.lastIndex-a[2].length,n=a[1],s=void 0===a[3]?M:'"'===a[3]?j:T):s===j||s===T?s=M:s===O||s===$?s=P:(s=M,i=void 0);let c=s===M&&t[e+1].startsWith("/>")?" ":"";r+=s===P?l+S:h>=0?(o.push(n),l.slice(0,h)+w+l.slice(h)+L+c):l+L+(-2===h?(o.push(void 0),e):c)}return[B(t,r+(t[n]||"<?>")+(2===e?"</svg>":"")),o]})(e,i);if(this.el=t.createElement(h,n),D.currentNode=this.el.content,2===i){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=D.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes()){let t=[];for(let e of o.getAttributeNames())if(e.endsWith(w)||e.startsWith(L)){let i=d[s++];if(t.push(e),void 0!==i){let t=o.getAttribute(i.toLowerCase()+w).split(L),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?X:"@"===e[1]?K:Z})}else l.push({type:6,index:r})}for(let e of t)o.removeAttribute(e)}if(N.test(o.tagName)){let t=o.textContent.split(L),e=t.length-1;if(e>0){o.textContent=_?_.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],E()),D.nextNode(),l.push({type:2,index:++r});o.append(t[e],E())}}}else if(8===o.nodeType)if(o.data===C)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(L,t+1));)l.push({type:7,index:r}),t+=L.length-1}r++}}static createElement(t,e){let i=k.createElement("template");return i.innerHTML=t,i}};function q(t,e,i=t,n){var o,r,s,a;if(e===z)return e;let l=void 0!==n?null===(o=i._$Co)||void 0===o?void 0:o[n]:i._$Cl,h=x(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,n)),void 0!==n?(null!==(s=(a=i)._$Co)&&void 0!==s?s:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=q(t,l._$AS(t,e.values),l,n)),e}var V=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);D.currentNode=o;let r=D.nextNode(),s=0,a=0,l=n[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new W(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new G(r,this,t)),this._$AV.push(e),l=n[++a]}s!==(null==l?void 0:l.index)&&(r=D.nextNode(),s++)}return D.currentNode=k,o}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},W=class t{constructor(t,e,i,n){var o;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),x(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>A(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==H&&x(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=R.createElement(B(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{let t=new V(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new R(t)),e}T(e){A(this._$AH)||(this._$AH=[],this._$AR());let i,n=this._$AH,o=0;for(let r of e)o===n.length?n.push(i=new t(this.k(E()),this.k(E()),this,this.options)):i=n[o],i._$AI(r),o++;o<n.length&&(this._$AR(i&&i._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},Z=class{constructor(t,e,i,n,o){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){let o=this.strings,r=!1;if(void 0===o)t=q(this,t,e,0),r=!x(t)||t!==this._$AH&&t!==z,r&&(this._$AH=t);else{let n,s,a=t;for(t=o[0],n=0;n<o.length-1;n++)s=q(this,a[i+n],e,n),s===z&&(s=this._$AH[n]),r||(r=!x(s)||s!==this._$AH[n]),s===H?t=H:t!==H&&(t+=(null!=s?s:"")+o[n+1]),this._$AH[n]=s}r&&!n&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}},Y=class extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}},J=_?_.emptyScript:"",X=class extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==H?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}},K=class extends Z{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:H)===z)return;let n=this._$AH,o=t===H&&n!==H||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==H&&(n===H||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}},G=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}},Q=g.litHtmlPolyfillSupport;null==Q||Q(R,W),(null!==(y=g.litHtmlVersions)&&void 0!==y?y:g.litHtmlVersions=[]).push("2.8.0");var tt,et,it=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,o;let r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e,s=r._$litPart$;if(void 0===s){let t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=s=new W(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return z}};it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});var nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:it}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.3.3");var ot=((t,...e)=>{let i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new s(i,t,n)})`
  @font-face {
    font-family: 'Karla';
    font-weight: regular;
    src: url('./fonts/Karla-regular.woff') format('woff');
  }

  * {
    box-sizing: border-box;
  }

  :host {
    --lottie-player-toolbar-height: 35px;
    --lottie-player-toolbar-background-color: transparent;
    --lottie-player-toolbar-hover-background-color: #f3f6f8;
    --lottie-player-toolbar-icon-color: #20272c;
    --lottie-player-toolbar-icon-hover-color: #f3f6f8;
    --lottie-player-toolbar-icon-active-color: #00ddb3;
    --lottie-player-seeker-track-color: #00ddb3;
    --lottie-player-seeker-accent-color: #00c1a2;
    --lottie-player-seeker-thumb-color: #00c1a2;
    --lottie-player-options-separator: #d9e0e6;

    display: block;
    width: 100%;
    height: 100%;

    font-family: 'Karla', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .active {
    color: var(--lottie-player-toolbar-icon-active-color) !important;
  }

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .animation {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .animation.controls {
    height: calc(100% - var(--lottie-player-toolbar-height));
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--lottie-player-toolbar-background-color);
    margin: 0 8px;
    height: var(--lottie-player-toolbar-height);
  }

  .btn-spacing-left {
    margin-right: 4px;
    margin-left: 8px;
  }

  .btn-spacing-center {
    margin-right: 4px;
    margin-left: 4px;
  }

  .btn-spacing-right {
    margin-right: 8px;
    margin-left: 4px;
  }

  .toolbar button {
    color: #20272c;
    cursor: pointer;
    fill: var(--lottie-player-toolbar-icon-color);
    display: flex;
    background: none;
    border: 0px;
    border-radius: 4px;
    padding: 4px;
    outline: none;
    width: 24px;
    height: 24px;
    align-items: center;
  }

  .toolbar button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
    border-style: solid;
    border-radius: 2px;
  }

  .toolbar button.active {
    fill: var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button.active:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
    border-radius: 4px;
  }

  .toolbar button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .toolbar button svg {
    width: 16px;
    height: 16px;
  }

  .toolbar button.disabled svg {
    display: none;
  }

  .popover {
    position: absolute;
    bottom: 40px;
    left: calc(100% - 239px);
    width: 224px;
    min-height: 84px;
    max-height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 8px 48px 0px rgba(243, 246, 248, 0.15), 0px 8px 16px 0px rgba(61, 72, 83, 0.16),
      0px 0px 1px 0px rgba(61, 72, 83, 0.36);
    border-radius: 8px;
    padding: 8px;
    z-index: 100;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .popover:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover::-webkit-scrollbar {
    width: 0px;
  }

  .popover-button {
    background: none;
    border: none;
    font-family: inherit;
    width: 100%;
    flex-direction: row;
    cursor: pointer;
    height: 32px;
    color: #20272c;
    justify-content: space-between;
    display: flex;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 4px;
  }

  .popover-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }

  .popover-button-text {
    display: flex;
    color: #20272c;
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }

  .reset-btn {
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #63727e;
    padding: 0;
    width: 31px;
    height: 18px;
  }
  .reset-btn:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .reset-btn:hover {
    color: #20272c;
  }

  .option-title-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--lottie-player-toolbar-icon-color);
    border: none;
    background: none;
    padding: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }
  .option-title-button.themes {
    width: auto;
    padding: 0;
  }
  .option-title-button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-themes-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
  .option-title-themes-row:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-title-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }

  .option-title-separator {
    margin: 8px -8px;
    border-bottom: 1px solid var(--lottie-player-options-separator);
  }

  .option-title-chevron {
    display: flex;
    padding: 4px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .option-row {
    display: flex;
    flex-direction: column;
  }
  .option-row > ul {
    padding: 0;
    margin: 0;
  }

  .option-button {
    width: 100%;
    background: none;
    border: none;
    font-family: inherit;
    display: flex;
    padding: 4px 8px;
    color: #20272c;
    overflow: hidden;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    cursor: pointer;
    height: 32px;
    font-family: inherit;
    font-size: 14px;
    border-radius: 4px;
  }
  .option-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }
  .option-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-tick {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: flex-start;
    gap: 8px;
  }

  .seeker {
    height: 4px;
    width: 95%;
    outline: none;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 9999px;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgb(0, 221, 179) calc(var(--seeker) * 1%),
      rgb(217, 224, 230) calc(var(--seeker) * 1%)
    );
  }
  .seeker.to-left {
    background-image: linear-gradient(
      to right,
      rgb(217, 224, 230) calc(var(--seeker) * 1%),
      rgb(0, 221, 179) calc(var(--seeker) * 1%)
    );
  }
  .seeker::-webkit-slider-runnable-track:focus-visible {
    color: #f07167;
    accent-color: #00ddb3;
  }

  .seeker::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  .seeker::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
  }
  .seeker:focus-visible::-webkit-slider-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }
  .seeker::-webkit-slider-thumb:hover {
    background: #019d91;
  }
  .seeker::-moz-range-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
    border-color: transparent;
  }
  .seeker:focus-visible::-moz-range-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }

  .error {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 100%;
    align-items: center;
  }
`,rt=o(4241),st=(o(7493),o(5031)),at=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},lt=(t,e,i)=>{e.constructor.createProperty(i,t)};function ht(t){return(e,i)=>void 0!==i?lt(t,e,i):at(t,e)}var dt;null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements;var ct="2.7.2",ut="dotlottie-player",pt=class extends it{defaultTheme="";container;playMode=rt.g.Normal;autoplay=!1;background="transparent";controls=!1;direction=1;hover=!1;loop;renderer="svg";speed=1;src;intermission=0;activeAnimationId=null;light=!1;worker=!1;activeStateId;_seeker=0;_dotLottieCommonPlayer;_io;_loop;_renderer="svg";_unsubscribeListeners;_hasMultipleAnimations=!1;_hasMultipleThemes=!1;_hasMultipleStates=!1;_popoverIsOpen=!1;_animationsTabIsOpen=!1;_statesTabIsOpen=!1;_styleTabIsOpen=!1;_themesForCurrentAnimation=[];_statesForCurrentAnimation=[];_parseLoop(t){let e=parseInt(t,10);return Number.isInteger(e)&&e>0?(this._loop=e,e):"string"==typeof t&&["true","false"].includes(t)?(this._loop="true"===t,this._loop):((0,rt.c)("loop must be a positive integer or a boolean"),!1)}_handleSeekChange(t){let e=t.currentTarget;try{let t=parseInt(e.value,10);if(!this._dotLottieCommonPlayer)return;let i=t/100*this._dotLottieCommonPlayer.totalFrames;this.seek(i)}catch{throw(0,rt.a)("Error while seeking animation")}}_initListeners(){let t=this._dotLottieCommonPlayer;void 0!==t?(this._unsubscribeListeners=t.state.subscribe(((t,e)=>{this._seeker=t.seeker,this.requestUpdate(),e.currentState!==t.currentState&&this.dispatchEvent(new CustomEvent(t.currentState)),this.dispatchEvent(new CustomEvent(rt.e.Frame,{detail:{frame:t.frame,seeker:t.seeker}})),this.dispatchEvent(new CustomEvent(rt.e.VisibilityChange,{detail:{visibilityPercentage:t.visibilityPercentage}}))})),t.addEventListener("complete",(()=>{this.dispatchEvent(new CustomEvent(rt.e.Complete))})),t.addEventListener("loopComplete",(()=>{this.dispatchEvent(new CustomEvent(rt.e.LoopComplete))})),t.addEventListener("DOMLoaded",(()=>{let t=this.getManifest();t&&t.themes&&(this._themesForCurrentAnimation=t.themes.filter((t=>t.animations.includes(this.getCurrentAnimationId()||"")))),t&&t.states&&(this._hasMultipleStates=t.states.length>0,this._statesForCurrentAnimation=[],t.states.forEach((t=>{this._statesForCurrentAnimation.push(t)}))),this.dispatchEvent(new CustomEvent(rt.e.Ready))})),t.addEventListener("data_ready",(()=>{this.dispatchEvent(new CustomEvent(rt.e.DataReady))})),t.addEventListener("data_failed",(()=>{this.dispatchEvent(new CustomEvent(rt.e.DataFail))})),window&&window.addEventListener("click",(t=>this._clickOutListener(t)))):(0,rt.c)("player not initialized - cannot add event listeners","dotlottie-player-component")}async load(t,e,i){if(!this.shadowRoot)return;this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.destroy(),this._dotLottieCommonPlayer=new rt.j(t,this.container,{rendererSettings:null!=e?e:{scaleMode:"noScale",clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0},hover:this.hasAttribute("hover")?this.hover:void 0,renderer:this.hasAttribute("renderer")?this._renderer:void 0,loop:this.hasAttribute("loop")?this._loop:void 0,direction:this.hasAttribute("direction")?1===this.direction?1:-1:void 0,speed:this.hasAttribute("speed")?this.speed:void 0,intermission:this.hasAttribute("intermission")?Number(this.intermission):void 0,playMode:this.hasAttribute("playMode")?this.playMode:void 0,autoplay:this.hasAttribute("autoplay")?this.autoplay:void 0,activeAnimationId:this.hasAttribute("activeAnimationId")?this.activeAnimationId:void 0,defaultTheme:this.hasAttribute("defaultTheme")?this.defaultTheme:void 0,light:this.light,worker:this.worker,activeStateId:this.hasAttribute("activeStateId")?this.activeStateId:void 0}),await this._dotLottieCommonPlayer.load(i);let n=this.getManifest();this._hasMultipleAnimations=this.animationCount()>1,n&&(n.themes&&(this._themesForCurrentAnimation=n.themes.filter((t=>t.animations.includes(this.getCurrentAnimationId()||""))),this._hasMultipleThemes=n.themes.length>0),n.states&&(this._hasMultipleStates=n.states.length>0,this._statesForCurrentAnimation=[],n.states.forEach((t=>{this._statesForCurrentAnimation.push(t)})))),this._initListeners()}getCurrentAnimationId(){var t;return null==(t=this._dotLottieCommonPlayer)?void 0:t.currentAnimationId}animationCount(){var t;return this._dotLottieCommonPlayer&&(null==(t=this._dotLottieCommonPlayer.getManifest())?void 0:t.animations.length)||0}animations(){if(!this._dotLottieCommonPlayer)return[];let t=this._dotLottieCommonPlayer.getManifest();return(null==t?void 0:t.animations.map((t=>t.id)))||[]}currentAnimation(){return this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.currentAnimationId?this._dotLottieCommonPlayer.currentAnimationId:""}getState(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.getState():rt.i}getManifest(){var t;return null==(t=this._dotLottieCommonPlayer)?void 0:t.getManifest()}getLottie(){var t;return null==(t=this._dotLottieCommonPlayer)?void 0:t.getAnimationInstance()}getVersions(){return{lottieWebVersion:rt.j.getLottieWebVersion(),dotLottiePlayerVersion:`${ct}`}}previous(t){var e;null==(e=this._dotLottieCommonPlayer)||e.previous(t)}next(t){var e;null==(e=this._dotLottieCommonPlayer)||e.next(t)}reset(){var t;null==(t=this._dotLottieCommonPlayer)||t.reset()}play(t,e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.play(t,e)}pause(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.pause()}stop(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stop()}playOnShow(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnShow(t)}stopPlayOnShow(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnShow()}playOnScroll(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnScroll(t)}stopPlayOnScroll(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnScroll()}seek(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.seek(t)}snapshot(t=!0){if(!this.shadowRoot)return"";let e=this.shadowRoot.querySelector(".animation svg"),i=(new XMLSerializer).serializeToString(e);if(t){let t=document.createElement("a");t.href=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`,t.download=`download_${this._seeker}.svg`,document.body.appendChild(t),t.click(),document.body.removeChild(t)}return i}setTheme(t){var e;null==(e=this._dotLottieCommonPlayer)||e.setDefaultTheme(t)}themes(){var t;if(!this._dotLottieCommonPlayer)return[];let e=this._dotLottieCommonPlayer.getManifest();return(null==(t=null==e?void 0:e.themes)?void 0:t.map((t=>t.id)))||[]}getDefaultTheme(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.defaultTheme:""}getActiveStateMachine(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.activeStateId:""}_freeze(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.freeze()}setSpeed(t=1){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setSpeed(t)}setDirection(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setDirection(t)}setLooping(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setLoop(t)}isLooping(){return!!this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.loop}togglePlay(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.togglePlay()}toggleLooping(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.toggleLoop()}setPlayMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setMode(t)}enterInteractiveMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.enterInteractiveMode(t)}exitInteractiveMode(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.exitInteractiveMode()}revertToManifestValues(t){var e;null==(e=this._dotLottieCommonPlayer)||e.revertToManifestValues(t)}static get styles(){return ot}async firstUpdated(){var t;this.container=null==(t=this.shadowRoot)?void 0:t.querySelector("#animation"),"IntersectionObserver"in window&&(this._io=new IntersectionObserver((t=>{var e,i;void 0!==t[0]&&t[0].isIntersecting?(null==(e=this._dotLottieCommonPlayer)?void 0:e.currentState)===rt.f.Frozen&&this.play():(null==(i=this._dotLottieCommonPlayer)?void 0:i.currentState)===rt.f.Playing&&this._freeze()})),this._io.observe(this.container)),this.loop?this._parseLoop(this.loop):this.hasAttribute("loop")&&this._parseLoop("true"),"svg"===this.renderer?this._renderer="svg":"canvas"===this.renderer?this._renderer="canvas":"html"===this.renderer&&(this._renderer="html"),this.src&&await this.load(this.src)}disconnectedCallback(){var t,e;this._io&&(this._io.disconnect(),this._io=void 0),null==(t=this._dotLottieCommonPlayer)||t.destroy(),null==(e=this._unsubscribeListeners)||e.call(this),window&&window.removeEventListener("click",(t=>this._clickOutListener(t)))}_clickOutListener(t){!t.composedPath().some((t=>t instanceof HTMLElement&&(t.classList.contains("popover")||"lottie-animation-options"===t.id)))&&this._popoverIsOpen&&(this._popoverIsOpen=!1,this.requestUpdate())}renderControls(){var t,e,i,n,o;let r=(null==(t=this._dotLottieCommonPlayer)?void 0:t.currentState)===rt.f.Playing,s=(null==(e=this._dotLottieCommonPlayer)?void 0:e.currentState)===rt.f.Paused;return U`
      <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
        ${this._hasMultipleAnimations?U`
              <button @click=${()=>this.previous()} aria-label="Previous animation" class="btn-spacing-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:U``}
        <button
          id="lottie-play-button"
          @click=${()=>{this.togglePlay()}}
          class=${r||s?"active "+(this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"):""+(this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right")}
          aria-label="play / pause animation"
        >
          ${r?U`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z"
                    fill="#20272C"
                  />
                  <path
                    d="M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z"
                    fill="#20272C"
                  />
                </svg>
              `:U`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z"
                    fill="#20272C"
                  />
                </svg>
              `}
        </button>
        ${this._hasMultipleAnimations?U`
              <button @click=${()=>this.next()} aria-label="Next animation" class="btn-spacing-right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:U``}
        <input
          id="lottie-seeker-input"
          class="seeker ${-1===(null==(i=this._dotLottieCommonPlayer)?void 0:i.direction)?"to-left":""}"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=${this._seeker}
          @input=${t=>this._handleSeekChange(t)}
          @mousedown=${()=>{this._freeze()}}
          @mouseup=${()=>{var t;null==(t=this._dotLottieCommonPlayer)||t.unfreeze()}}
          aria-valuemin="1"
          aria-valuemax="100"
          role="slider"
          aria-valuenow=${this._seeker}
          aria-label="lottie-seek-input"
          style=${`--seeker: ${this._seeker}`}
        />
        <button
          id="lottie-loop-toggle"
          @click=${()=>this.toggleLooping()}
          class=${null!=(n=this._dotLottieCommonPlayer)&&n.loop?"active btn-spacing-left":"btn-spacing-left"}
          aria-label="loop-toggle"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8654 2.31319C11.0607 2.11793 11.3772 2.11793 11.5725 2.31319L13.4581 4.19881C13.6534 4.39407 13.6534 4.71066 13.4581 4.90592L11.5725 6.79154C11.3772 6.9868 11.0607 6.9868 10.8654 6.79154C10.6701 6.59628 10.6701 6.27969 10.8654 6.08443L11.6162 5.33362H4V6.66695C4 7.03514 3.70152 7.33362 3.33333 7.33362C2.96514 7.33362 2.66666 7.03514 2.66666 6.66695L2.66666 4.66695C2.66666 4.29876 2.96514 4.00028 3.33333 4.00028H11.8454L10.8654 3.0203C10.6701 2.82504 10.6701 2.50846 10.8654 2.31319Z"
              fill="currentColor"
            />
            <path
              d="M12.4375 11.9999C12.8057 11.9999 13.1042 11.7014 13.1042 11.3332V9.33321C13.1042 8.96502 12.8057 8.66655 12.4375 8.66655C12.0693 8.66655 11.7708 8.96502 11.7708 9.33321V10.6665H4.15462L4.90543 9.91573C5.10069 9.72047 5.10069 9.40389 4.90543 9.20862C4.71017 9.01336 4.39359 9.01336 4.19832 9.20862L2.31271 11.0942C2.11744 11.2895 2.11744 11.6061 2.31271 11.8013L4.19832 13.687C4.39359 13.8822 4.71017 13.8822 4.90543 13.687C5.10069 13.4917 5.10069 13.1751 4.90543 12.9799L3.92545 11.9999H12.4375Z"
              fill="currentColor"
            />
          </svg>
        </button>
        ${this._hasMultipleAnimations||this._hasMultipleThemes||this._hasMultipleStates?U`
              <button
                id="lottie-animation-options"
                @click=${()=>{this._popoverIsOpen=!this._popoverIsOpen,this.requestUpdate()}}
                aria-label="options"
                class="btn-spacing-right"
                style=${"background-color: "+(this._popoverIsOpen?"var(--lottie-player-toolbar-icon-hover-color)":"")}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33337 11.6666C7.78109 11.6666 7.33337 12.1143 7.33337 12.6666C7.33337 13.2189 7.78109 13.6666 8.33337 13.6666C8.88566 13.6666 9.33337 13.2189 9.33337 12.6666C9.33337 12.1143 8.88566 11.6666 8.33337 11.6666Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 7.99992C7.33337 7.44763 7.78109 6.99992 8.33337 6.99992C8.88566 6.99992 9.33338 7.44763 9.33338 7.99992C9.33338 8.5522 8.88566 8.99992 8.33337 8.99992C7.78109 8.99992 7.33337 8.5522 7.33337 7.99992Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 3.33325C7.33337 2.78097 7.78109 2.33325 8.33337 2.33325C8.88566 2.33325 9.33338 2.78097 9.33338 3.33325C9.33338 3.88554 8.88566 4.33325 8.33337 4.33325C7.78109 4.33325 7.33337 3.88554 7.33337 3.33325Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:U``}
      </div>
      ${this._popoverIsOpen?U`
            <div
              id="popover"
              class="popover"
              tabindex="0"
              aria-label="lottie animations themes popover"
              style="min-height: ${this.themes().length>0?"84px":"auto"}"
            >
              ${this._animationsTabIsOpen||this._styleTabIsOpen||this._statesTabIsOpen?U``:U`
                    <button
                      class="popover-button"
                      tabindex="0"
                      aria-label="animations"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                      @keydown=${t=>{("Space"===t.code||"Enter"===t.code)&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate())}}
                    >
                      <div class="popover-button-text">Animations</div>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                            fill="#4C5863"
                          />
                        </svg>
                      </div>
                    </button>
                  `}
              ${!this._hasMultipleThemes||this._styleTabIsOpen||this._animationsTabIsOpen||this._statesTabIsOpen?"":U` <button
                    class="popover-button"
                    aria-label="Themes"
                    @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                    @keydown=${t=>{("Space"===t.code||"Enter"===t.code)&&(this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">Themes</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`}
              ${!this._hasMultipleStates||this._styleTabIsOpen||this._animationsTabIsOpen||this._statesTabIsOpen?"":U` <button
                    class="popover-button"
                    aria-label="States"
                    @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                    @keydown=${t=>{("Space"===t.code||"Enter"===t.code)&&(this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">States</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`}
              ${this._animationsTabIsOpen?U`<button
                      class="option-title-button"
                      aria-label="Back to main popover menu"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                    >
                      <div class="option-title-chevron">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div>Animations</div>
                    </button>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this.animations().map((t=>U`
                            <li>
                              <button
                                class="option-button"
                                aria-label=${`${t}`}
                                @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(t),this.requestUpdate()}}
                                @keydown=${e=>{("Space"===e.code||"Enter"===e.code)&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(t),this.requestUpdate())}}
                              >
                                <div class="option-tick">
                                  ${this.currentAnimation()===t?U`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:U`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${t}</div>
                              </button>
                            </li>
                          `))}
                      </ul>
                    </div> `:U``}
              ${this._styleTabIsOpen?U`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">Themes</div>
                        ${""===(null==(o=this._dotLottieCommonPlayer)?void 0:o.defaultTheme)?U``:U`
                              <button
                                class="reset-btn"
                                @click=${()=>{this.setTheme(""),this.requestUpdate()}}
                              >
                                Reset
                              </button>
                            `}
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._themesForCurrentAnimation.map((t=>U`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${t.id}"
                                @click=${()=>{this.setTheme(t.id)}}
                                @keydown=${e=>{("Space"===e.code||"Enter"===e.code)&&this.setTheme(t.id)}}
                              >
                                <div class="option-tick">
                                  ${this.getDefaultTheme()===t.id?U`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:U`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${t.id}</div>
                              </button>
                            </li>
                          `))}
                      </ul>
                    </div>`:U``}
              ${this._statesTabIsOpen?U`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">States</div>
                        <button
                          class="reset-btn"
                          @click=${()=>{this.exitInteractiveMode(),this.requestUpdate()}}
                        >
                          Reset
                        </button>
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._statesForCurrentAnimation.map((t=>U`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${t}"
                                @click=${()=>{this.enterInteractiveMode(t)}}
                                @keydown=${e=>{("Space"===e.code||"Enter"===e.code)&&this.enterInteractiveMode(t)}}
                              >
                                <div class="option-tick">
                                  ${this.getActiveStateMachine()===t?U`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:U`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${t}</div>
                              </button>
                            </li>
                          `))}
                      </ul>
                    </div>`:U``}
            </div>
          `:U``}
    `}render(){var t;let e=this.controls?"main controls":"main",i=this.controls?"animation controls":"animation";return U`
      <div id="animation-container" class=${e} lang="en" role="img" aria-label="lottie-animation-container">
        <div id="animation" class=${i} style="background:${this.background};">
          ${(null==(t=this._dotLottieCommonPlayer)?void 0:t.currentState)===rt.f.Error?U` <div class="error">⚠️</div> `:void 0}
        </div>
        ${this.controls?this.renderControls():void 0}
      </div>
    `}};function vt(t){return(vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ft(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function mt(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function yt(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}function gt(t,e){var i=e.get(t);if(!i)throw new TypeError("attempted to get private field on non-instance");return i.get?i.get.call(t):i.value}(0,st.a)([ht({type:String})],pt.prototype,"defaultTheme",2),(0,st.a)([function(t,e){return(({finisher:t,descriptor:e})=>(i,n)=>{var o;if(void 0===n){let n=null!==(o=i.originalKey)&&void 0!==o?o:i.key,r=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(r.finisher=function(e){t(e,n)}),r}{let o=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(o,n)}})({descriptor:i=>{let n={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){let e="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[e]&&(this[e]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==n?n:null),this[e]}}return n}})}("#animation")],pt.prototype,"container",2),(0,st.a)([ht()],pt.prototype,"playMode",2),(0,st.a)([ht({type:Boolean})],pt.prototype,"autoplay",2),(0,st.a)([ht({type:String})],pt.prototype,"background",2),(0,st.a)([ht({type:Boolean})],pt.prototype,"controls",2),(0,st.a)([ht({type:Number})],pt.prototype,"direction",2),(0,st.a)([ht({type:Boolean})],pt.prototype,"hover",2),(0,st.a)([ht({type:String})],pt.prototype,"loop",2),(0,st.a)([ht({type:String})],pt.prototype,"renderer",2),(0,st.a)([ht({type:Number})],pt.prototype,"speed",2),(0,st.a)([ht({type:String})],pt.prototype,"src",2),(0,st.a)([ht()],pt.prototype,"intermission",2),(0,st.a)([ht({type:String})],pt.prototype,"activeAnimationId",2),(0,st.a)([ht({type:Boolean})],pt.prototype,"light",2),(0,st.a)([ht({type:Boolean})],pt.prototype,"worker",2),(0,st.a)([ht({type:String})],pt.prototype,"activeStateId",2),(0,st.a)([function(t){return ht({...t,state:!0})}()],pt.prototype,"_seeker",2),customElements.get(ut)||customElements.define(ut,pt);var _t={player:"lottie-player"},bt="[lottieInteractivity]:",wt=function(){function t(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,n=i.actions,o=i.container,r=i.mode,s=i.player,a=yt(i,["actions","container","mode","player"]);if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Lt.set(this,{writable:!0,value:function(){if(e.player){var t=function(){e.player.addEventListener("enterFrame",gt(e,$t)),e.container.addEventListener("mouseenter",gt(e,Mt)),e.container.addEventListener("mouseleave",gt(e,Tt)),e.container.addEventListener("touchstart",gt(e,Mt),{passive:!0}),e.container.addEventListener("touchend",gt(e,Tt),{passive:!0})},i=function(){e.container.addEventListener("mouseenter",gt(e,Mt)),e.container.addEventListener("mouseleave",gt(e,Tt)),e.container.addEventListener("touchstart",gt(e,Mt),{passive:!0}),e.container.addEventListener("touchend",gt(e,Tt),{passive:!0})};e.stateHandler.set("loop",(function(){e.actions[e.interactionIdx].loop?e.player.loop=parseInt(e.actions[e.interactionIdx].loop)-1:e.player.loop=!0,e.player.autoplay=!0})),e.stateHandler.set("autoplay",(function(){e.player.loop=!1,e.player.autoplay=!0})),e.stateHandler.set("click",(function(){e.player.loop=!1,e.player.autoplay=!1,e.container.addEventListener("click",gt(e,Ct))})),e.stateHandler.set("hover",(function(){e.player.loop=!1,e.player.autoplay=!1,e.container.addEventListener("mouseenter",gt(e,Ct)),e.container.addEventListener("touchstart",gt(e,Ct),{passive:!0})})),e.stateHandler.set("hold",i),e.stateHandler.set("pauseHold",i),e.transitionHandler.set("click",(function(){e.container.addEventListener("click",gt(e,kt))})),e.transitionHandler.set("hover",(function(){e.container.addEventListener("mouseenter",gt(e,kt)),e.container.addEventListener("touchstart",gt(e,kt),{passive:!0})})),e.transitionHandler.set("hold",t),e.transitionHandler.set("pauseHold",t),e.transitionHandler.set("repeat",(function(){e.player.loop=!0,e.player.autoplay=!0,e.player.addEventListener("loopComplete",(function t(){gt(e,Pt).call(e,{handler:t})}))})),e.transitionHandler.set("onComplete",(function(){"loop"===e.actions[e.interactionIdx].state?e.player.addEventListener("loopComplete",gt(e,It)):e.player.addEventListener("complete",gt(e,It))})),e.transitionHandler.set("seek",(function(){e.player.stop(),e.player.addEventListener("enterFrame",gt(e,Ot)),e.container.addEventListener("mousemove",gt(e,Et)),e.container.addEventListener("touchmove",gt(e,xt),{passive:!1}),e.container.addEventListener("mouseout",gt(e,At))}))}}}),Ct.set(this,{writable:!0,value:function(){var t=e.actions[e.interactionIdx].forceFlag;t||!0!==e.player.isPaused?t&&gt(e,Nt).call(e,!0):gt(e,Nt).call(e,!0)}}),St.set(this,{writable:!0,value:function(){0===e.clickCounter?(e.player.play(),e.clickCounter++):(e.clickCounter++,e.player.setDirection(-1*e.player.playDirection),e.player.play())}}),kt.set(this,{writable:!0,value:function(){var t=e.actions[e.interactionIdx].forceFlag,i=e.actions[e.interactionIdx].state,n=e.actions[e.interactionIdx].transition;if("chain"===e.mode){if(e.actions[e.interactionIdx].count){var o=parseInt(e.actions[e.interactionIdx].count);if(e.clickCounter<o-1)return void(e.clickCounter+=1)}return e.clickCounter=0,!t&&"click"===n&&"click"===i||"hover"===n&&"hover"===i?e.transitionHandler.get("onComplete").call():e.nextInteraction(),e.container.removeEventListener("click",gt(e,kt)),void e.container.removeEventListener("mouseenter",gt(e,kt))}t||!0!==e.player.isPaused?t&&e.player.goToAndPlay(0,!0):e.player.goToAndPlay(0,!0)}}),Et.set(this,{writable:!0,value:function(t){gt(e,Ht).call(e,t.clientX,t.clientY)}}),xt.set(this,{writable:!0,value:function(t){t.cancelable&&t.preventDefault(),gt(e,Ht).call(e,t.touches[0].clientX,t.touches[0].clientY)}}),At.set(this,{writable:!0,value:function(){gt(e,Ht).call(e,-1,-1)}}),It.set(this,{writable:!0,value:function(){"loop"===e.actions[e.interactionIdx].state?e.player.removeEventListener("loopComplete",gt(e,It)):e.player.removeEventListener("complete",gt(e,It)),e.nextInteraction()}}),Pt.set(this,{writable:!0,value:function(t){var i=t.handler,n=1;e.actions[e.interactionIdx].repeat&&(n=e.actions[e.interactionIdx].repeat),e.playCounter>=n-1?(e.playCounter=0,e.player.removeEventListener("loopComplete",i),e.player.loop=!1,e.player.autoplay=!1,e.nextInteraction()):e.playCounter+=1}}),Ot.set(this,{writable:!0,value:function(){var t=e.actions[e.interactionIdx].frames;t&&e.player.currentFrame>=parseInt(t[1])-1&&(e.player.removeEventListener("enterFrame",gt(e,Ot)),e.container.removeEventListener("mousemove",gt(e,Et)),e.container.removeEventListener("mouseout",gt(e,At)),setTimeout(e.nextInteraction,0))}}),$t.set(this,{writable:!0,value:function(){var t=e.actions[e.interactionIdx].frames;(t&&e.player.currentFrame>=t[1]||e.player.currentFrame>=e.player.totalFrames-1)&&(e.player.removeEventListener("enterFrame",gt(e,$t)),e.container.removeEventListener("mouseenter",gt(e,Mt)),e.container.removeEventListener("mouseleave",gt(e,Tt)),e.container.removeEventListener("touchstart",gt(e,Mt),{passive:!0}),e.container.removeEventListener("touchend",gt(e,Tt),{passive:!0}),e.player.pause(),e.holdStatus=!1,e.nextInteraction()),-1===e.player.playDirection&&t&&e.player.currentFrame<t[0]&&e.player.pause()}}),Mt.set(this,{writable:!0,value:function(){-1!==e.player.playDirection&&null!==e.holdStatus&&e.holdStatus||(e.player.setDirection(1),e.player.play(),e.holdStatus=!0)}}),Tt.set(this,{writable:!0,value:function(){"hold"===e.actions[e.interactionIdx].transition||"hold"===e.actions[e.interactionIdx].state||"hold"===e.actions[0].type?(e.player.setDirection(-1),e.player.play()):"pauseHold"!==e.actions[e.interactionIdx].transition&&"pauseHold"!==e.actions[e.interactionIdx].state&&"pauseHold"!==e.actions[0].type||e.player.pause(),e.holdStatus=!1}}),jt.set(this,{writable:!0,value:function(){if(e.container.removeEventListener("click",gt(e,kt)),e.container.removeEventListener("click",gt(e,Ct)),e.container.removeEventListener("mouseenter",gt(e,kt)),e.container.removeEventListener("touchstart",gt(e,kt)),e.container.removeEventListener("touchmove",gt(e,xt)),e.container.removeEventListener("mouseenter",gt(e,Ct)),e.container.removeEventListener("touchstart",gt(e,Ct)),e.container.removeEventListener("mouseenter",gt(e,Mt)),e.container.removeEventListener("touchstart",gt(e,Mt)),e.container.removeEventListener("mouseleave",gt(e,Tt)),e.container.removeEventListener("mousemove",gt(e,Et)),e.container.removeEventListener("mouseout",gt(e,At)),e.container.removeEventListener("touchend",gt(e,Tt)),e.player)try{e.player.removeEventListener("loopComplete",gt(e,It)),e.player.removeEventListener("complete",gt(e,It)),e.player.removeEventListener("enterFrame",gt(e,Ot)),e.player.removeEventListener("enterFrame",gt(e,$t))}catch(t){}}}),mt(this,"jumpToInteraction",(function(t){gt(e,jt).call(e),e.interactionIdx=t,e.interactionIdx<0?e.interactionIdx=0:e.interactionIdx,e.nextInteraction(!1)})),mt(this,"nextInteraction",(function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.oldInterctionIdx=e.interactionIdx,gt(e,jt).call(e),e.player.loop=!1;var i=e.actions[e.interactionIdx].jumpTo;i?i>=0&&i<e.actions.length?(e.interactionIdx=i,gt(e,zt).call(e,{ignorePath:!1})):(e.interactionIdx=0,e.player.goToAndStop(0,!0),gt(e,zt).call(e,{ignorePath:!1})):(t&&e.interactionIdx++,e.interactionIdx>=e.actions.length?e.actions[e.actions.length-1].reset?(e.interactionIdx=0,e.player.resetSegments(!0),e.actions[e.interactionIdx].frames?e.player.goToAndStop(e.actions[e.interactionIdx].frames,!0):e.player.goToAndStop(0,!0),gt(e,zt).call(e,{ignorePath:!1})):(e.interactionIdx=e.actions.length-1,gt(e,zt).call(e,{ignorePath:!1})):gt(e,zt).call(e,{ignorePath:!1})),e.container.dispatchEvent(new CustomEvent("transition",{bubbles:!0,composed:!0,detail:{oldIndex:e.oldInterctionIdx,newIndex:e.interactionIdx}}))})),Nt.set(this,{writable:!0,value:function(t){var i=e.actions[e.interactionIdx].frames;if(!i)return e.player.resetSegments(!0),void e.player.goToAndPlay(0,!0);"string"==typeof i?e.player.goToAndPlay(i,t):e.player.playSegments(i,t)}}),Ut.set(this,{writable:!0,value:function(){var t=e.actions[e.interactionIdx].path;if(!t)if("object"===vt(e.enteredPlayer)&&"AnimationItem"===e.enteredPlayer.constructor.name){if(t=e.enteredPlayer,e.player===t)return void gt(e,zt).call(e,{ignorePath:!0})}else{var i=(t=e.loadedAnimation).substr(t.lastIndexOf("/")+1);if(i=i.substr(0,i.lastIndexOf(".json")),e.player.fileName===i)return void gt(e,zt).call(e,{ignorePath:!0})}var n=e.container.getBoundingClientRect(),o="width: "+n.width+"px !important; height: "+n.height+"px !important; background: "+e.container.style.background;if(e.container.setAttribute("style",o),"object"!==vt(e.enteredPlayer)||"AnimationItem"!==e.enteredPlayer.constructor.name){if("string"==typeof e.enteredPlayer){var r=document.querySelector(e.enteredPlayer);r&&"LOTTIE-PLAYER"===r.nodeName&&(e.attachedListeners||(r.addEventListener("ready",(function(){e.container.style.width="",e.container.style.height=""})),r.addEventListener("load",(function(){e.player=r.getLottie(),gt(e,zt).call(e,{ignorePath:!0})})),e.attachedListeners=!0),r.load(t))}else e.enteredPlayer instanceof HTMLElement&&"LOTTIE-PLAYER"===e.enteredPlayer.nodeName&&(e.attachedListeners||(e.enteredPlayer.addEventListener("ready",(function(){e.container.style.width="",e.container.style.height=""})),e.enteredPlayer.addEventListener("load",(function(){e.player=e.enteredPlayer.getLottie(),gt(e,zt).call(e,{ignorePath:!0})})),e.attachedListeners=!0),e.enteredPlayer.load(t));if(!e.player)throw new Error("".concat(bt," Specified player is invalid."),e.enteredPlayer)}else{if(!window.lottie)throw new Error("".concat(bt," A Lottie player is required."));e.stop(),e.container.innerHTML="","object"===vt(t)&&"AnimationItem"===t.constructor.name?e.player=window.lottie.loadAnimation({loop:!1,autoplay:!1,animationData:t.animationData,container:e.container}):e.player=window.lottie.loadAnimation({loop:!1,autoplay:!1,path:t,container:e.container}),e.player.addEventListener("DOMLoaded",(function(){e.container.style.width="",e.container.style.height="",gt(e,zt).call(e,{ignorePath:!0})}))}e.clickCounter=0,e.playCounter=0}}),zt.set(this,{writable:!0,value:function(t){var i=t.ignorePath,n=e.actions[e.interactionIdx].frames,o=e.actions[e.interactionIdx].state,r=e.actions[e.interactionIdx].transition,s=e.actions[e.interactionIdx].path,a=e.stateHandler.get(o),l=e.transitionHandler.get(r),h=e.actions[e.interactionIdx].speed?e.actions[e.interactionIdx].speed:1,d=e.actions[e.interactionIdx].delay?e.actions[e.interactionIdx].delay:0;i||!(s||e.actions[e.actions.length-1].reset&&0===e.interactionIdx)?setTimeout((function(){n&&(e.player.autoplay=!1,e.player.resetSegments(!0),e.player.goToAndStop(n[0],!0)),a?a.call():"none"===o&&(e.player.loop=!1,e.player.autoplay=!1),l&&l.call(),e.player.autoplay&&(e.player.resetSegments(!0),gt(e,Nt).call(e,!0)),e.player.setSpeed(h)}),d):gt(e,Ut).call(e)}}),Ht.set(this,{writable:!0,value:function(t,i){if(-1!==t&&-1!==i){var n=e.getContainerCursorPosition(t,i);t=n.x,i=n.y}var o=e.actions.find((function(e){var n=e.position;if(n){if(Array.isArray(n.x)&&Array.isArray(n.y))return t>=n.x[0]&&t<=n.x[1]&&i>=n.y[0]&&i<=n.y[1];if(!Number.isNaN(n.x)&&!Number.isNaN(n.y))return t===n.x&&i===n.y}return!1}));if(o)if("seek"===o.type||"seek"===o.transition){var r=(t-o.position.x[0])/(o.position.x[1]-o.position.x[0]),s=(i-o.position.y[0])/(o.position.y[1]-o.position.y[0]);e.player.playSegments(o.frames,!0),o.position.y[0]<0&&o.position.y[1]>1?e.player.goToAndStop(Math.floor(r*e.player.totalFrames),!0):e.player.goToAndStop(Math.ceil((r+s)/2*e.player.totalFrames),!0)}else"loop"===o.type?e.player.playSegments(o.frames,!0):"play"===o.type?(!0===e.player.isPaused&&e.player.resetSegments(),e.player.playSegments(o.frames)):"stop"===o.type&&(e.player.resetSegments(!0),e.player.goToAndStop(o.frames[0],!0))}}),Ft.set(this,{writable:!0,value:function(){var t=e.getContainerVisibility(),i=e.actions.find((function(e){var i=e.visibility;return t>=i[0]&&t<=i[1]}));if(i)if("seek"===i.type){var n=i.frames[0],o=2==i.frames.length?i.frames[1]:e.player.totalFrames-1;null!==e.assignedSegment&&(e.player.resetSegments(!0),e.assignedSegment=null),e.player.goToAndStop(n+Math.round((t-i.visibility[0])/(i.visibility[1]-i.visibility[0])*(o-n)),!0)}else if("loop"===i.type)e.player.loop=!0,(null===e.assignedSegment||e.assignedSegment!==i.frames||!0===e.player.isPaused)&&(e.player.playSegments(i.frames,!0),e.assignedSegment=i.frames);else if("play"===i.type||"playOnce"===i.type){if("playOnce"===i.type&&!e.scrolledAndPlayed)return e.scrolledAndPlayed=!0,e.player.resetSegments(!0),void(i.frames?e.player.playSegments(i.frames,!0):e.player.play());"play"===i.type&&e.player.isPaused&&(e.player.resetSegments(!0),i.frames?e.player.playSegments(i.frames,!0):e.player.play())}else"stop"===i.type&&e.player.goToAndStop(i.frames[0],!0)}}),this.enteredPlayer=s,"object"!==vt(s)||"AnimationItem"!==s.constructor.name){if("string"==typeof s){var l=document.querySelector(s);l&&"LOTTIE-PLAYER"===l.nodeName&&(s=l.getLottie())}else s instanceof HTMLElement&&"LOTTIE-PLAYER"===s.nodeName&&(s=s.getLottie());if(!s)throw new Error(bt+"Specified player:"+s+" is invalid.")}"string"==typeof o&&(o=document.querySelector(o)),o||(o=s.wrapper),this.player=s,this.loadedAnimation=this.player.path+this.player.fileName+".json",this.attachedListeners=!1,this.container=o,this.mode=r,this.actions=n,this.options=a,this.assignedSegment=null,this.scrolledAndPlayed=!1,this.interactionIdx=0,this.oldInterctionIdx=0,this.clickCounter=0,this.playCounter=0,this.stateHandler=new Map,this.transitionHandler=new Map}var e,i;return e=t,(i=[{key:"getContainerVisibility",value:function(){var t=this.container.getBoundingClientRect(),e=t.top,i=t.height;return(window.innerHeight-e)/(window.innerHeight+i)}},{key:"getContainerCursorPosition",value:function(t,e){var i=this.container.getBoundingClientRect(),n=i.top;return{x:(t-i.left)/i.width,y:(e-n)/i.height}}},{key:"initScrollMode",value:function(){this.player.stop(),window.addEventListener("scroll",gt(this,Ft),!0)}},{key:"initCursorMode",value:function(){this.actions&&1===this.actions.length?"click"===this.actions[0].type?(this.player.loop=!1,this.player.stop(),this.container.addEventListener("click",gt(this,kt))):"hover"===this.actions[0].type?(this.player.loop=!1,this.player.stop(),this.container.addEventListener("mouseenter",gt(this,kt)),this.container.addEventListener("touchstart",gt(this,kt),{passive:!0})):"toggle"===this.actions[0].type?(this.player.loop=!1,this.player.stop(),this.container.addEventListener("click",gt(this,St))):"hold"===this.actions[0].type||"pauseHold"===this.actions[0].type?(this.container.addEventListener("mouseenter",gt(this,Mt)),this.container.addEventListener("mouseleave",gt(this,Tt)),this.container.addEventListener("touchstart",gt(this,Mt),{passive:!0}),this.container.addEventListener("touchend",gt(this,Tt),{passive:!0})):"seek"===this.actions[0].type&&(this.player.loop=!0,this.player.stop(),this.container.addEventListener("mousemove",gt(this,Et)),this.container.addEventListener("touchmove",gt(this,xt),{passive:!1}),this.container.addEventListener("mouseout",gt(this,At))):(this.player.loop=!0,this.player.stop(),this.container.addEventListener("mousemove",gt(this,Et)),this.container.addEventListener("mouseleave",gt(this,At)),gt(this,Ht).call(this,-1,-1))}},{key:"initChainMode",value:function(){gt(this,Lt).call(this),this.player.loop=!1,this.player.stop(),gt(this,zt).call(this,{ignorePath:!1})}},{key:"start",value:function(){var t=this;"scroll"===this.mode?this.player.isLoaded?this.initScrollMode():this.player.addEventListener("DOMLoaded",(function(){t.initScrollMode()})):"cursor"===this.mode?this.player.isLoaded?this.initCursorMode():this.player.addEventListener("DOMLoaded",(function(){t.initCursorMode()})):"chain"===this.mode&&(this.player.isLoaded?this.initChainMode():this.player.addEventListener("DOMLoaded",(function(){t.initChainMode()})))}},{key:"redefineOptions",value:function(t){var e=t.actions,i=t.container,n=t.mode,o=t.player,r=yt(t,["actions","container","mode","player"]);if(this.stop(),this.enteredPlayer=o,"object"!==vt(o)||"AnimationItem"!==o.constructor.name){if("string"==typeof o){var s=document.querySelector(o);s&&"LOTTIE-PLAYER"===s.nodeName&&(o=s.getLottie())}else o instanceof HTMLElement&&"LOTTIE-PLAYER"===o.nodeName&&(o=o.getLottie());if(!o)throw new Error(bt+"Specified player:"+o+" is invalid.",o)}"string"==typeof i&&(i=document.querySelector(i)),i||(i=o.wrapper),this.player=o,this.loadedAnimation=this.player.path+this.player.fileName+".json",this.attachedListeners=!1,this.container=i,this.mode=n,this.actions=e,this.options=r,this.assignedSegment=null,this.scrolledAndPlayed=!1,this.interactionIdx=0,this.clickCounter=0,this.playCounter=0,this.holdStatus=null,this.stateHandler=new Map,this.transitionHandler=new Map,this.start()}},{key:"stop",value:function(){if("scroll"===this.mode&&window.removeEventListener("scroll",gt(this,Ft),!0),"cursor"===this.mode&&(this.container.removeEventListener("click",gt(this,kt)),this.container.removeEventListener("click",gt(this,St)),this.container.removeEventListener("mouseenter",gt(this,kt)),this.container.removeEventListener("touchstart",gt(this,kt)),this.container.removeEventListener("touchmove",gt(this,xt)),this.container.removeEventListener("mousemove",gt(this,Et)),this.container.removeEventListener("mouseleave",gt(this,At)),this.container.removeEventListener("touchstart",gt(this,Mt)),this.container.removeEventListener("touchend",gt(this,Tt))),"chain"===this.mode&&(this.container.removeEventListener("click",gt(this,kt)),this.container.removeEventListener("click",gt(this,Ct)),this.container.removeEventListener("mouseenter",gt(this,kt)),this.container.removeEventListener("touchstart",gt(this,kt)),this.container.removeEventListener("touchmove",gt(this,xt)),this.container.removeEventListener("mouseenter",gt(this,Ct)),this.container.removeEventListener("touchstart",gt(this,Ct)),this.container.removeEventListener("mouseenter",gt(this,Mt)),this.container.removeEventListener("touchstart",gt(this,Mt)),this.container.removeEventListener("mouseleave",gt(this,Tt)),this.container.removeEventListener("mousemove",gt(this,Et)),this.container.removeEventListener("mouseout",gt(this,At)),this.container.removeEventListener("touchend",gt(this,Tt)),this.player))try{this.player.removeEventListener("loopComplete",gt(this,It)),this.player.removeEventListener("complete",gt(this,It)),this.player.removeEventListener("enterFrame",gt(this,Ot)),this.player.removeEventListener("enterFrame",gt(this,$t))}catch(t){}this.player&&(this.player.destroy(),this.player=null)}}])&&ft(e.prototype,i),t}(),Lt=new WeakMap,Ct=new WeakMap,St=new WeakMap,kt=new WeakMap,Et=new WeakMap,xt=new WeakMap,At=new WeakMap,It=new WeakMap,Pt=new WeakMap,Ot=new WeakMap,$t=new WeakMap,Mt=new WeakMap,Tt=new WeakMap,jt=new WeakMap,Nt=new WeakMap,Ut=new WeakMap,zt=new WeakMap,Ht=new WeakMap,Ft=new WeakMap,Dt=function(t){var e=new wt(t);return e.start(),e};function Bt(t,e){var i=this;this.container=t,this.observers=[],this.lastX=0,this.lastY=0;var n=!1,o=function(){n||(n=!0,requestAnimationFrame((function(){for(var t=i.observers,e=i.getState(),o=t.length;o--;)t[o].check(e);i.lastX=e.positionX,i.lastY=e.positionY,n=!1})))},r=e.handleScrollResize,s=this.handler=r?r(o):o,a=function(){(i.mutationObserver=new MutationObserver(o)).observe(document,{attributes:!0,childList:!0,subtree:!0})},l={capture:!0,passive:!0};addEventListener("scroll",s,l),addEventListener("resize",s,l),"loading"!==document.readyState?a():addEventListener("DOMContentLoaded",a)}function Rt(t){var e=~~t.offset||0;return this.offsetX=null!=t.offsetX?~~t.offsetX:e,this.offsetY=null!=t.offsetY?~~t.offsetY:e,this.container=t.container||document.body,this.once=!!t.once,this.observerCollection=t.observerCollection||qt,this.activate()}Bt.prototype={getState:function(){var t,e,i,n,o=this,r=o.container,s=o.lastX,a=o.lastY;return r===document.body?(t=window.innerWidth,e=window.innerHeight,i=window.pageXOffset,n=window.pageYOffset):(t=r.offsetWidth,e=r.offsetHeight,i=r.scrollLeft,n=r.scrollTop),{width:t,height:e,positionX:i,positionY:n,directionX:s<i?"right":s>i?"left":"none",directionY:a<n?"down":a>n?"up":"none"}},destroy:function(){var t=this.handler,e=this.mutationObserver;removeEventListener("scroll",t),removeEventListener("resize",t),e&&e.disconnect()}},Rt.prototype={activate:function(){var t=this.container,e=this.observerCollection,i=e.viewports,n=i.get(t);n||(n=new Bt(t,e),i.set(t,n));var o=n.observers;return o.indexOf(this)<0&&o.push(this),n},destroy:function(){var t=this.container,e=this.observerCollection.viewports,i=e.get(t);if(i){var n=i.observers,o=n.indexOf(this);o>-1&&n.splice(o,1),n.length||(i.destroy(),e.delete(t))}}};var qt=new function t(e){if(void 0===e&&(e={}),!(this instanceof t))return new t(e);this.viewports=new Map,this.handleScrollResize=e.handleScrollResize};function Vt(t){if(void 0===t&&(t={}),!(this instanceof Vt))return new Vt(t);this.onTop=t.onTop,this.onBottom=t.onBottom,this.onLeft=t.onLeft,this.onRight=t.onRight,this.onFit=t.onFit,this._wasTop=!0,this._wasBottom=!1,this._wasLeft=!0,this._wasRight=!1,this._wasFit=!1;var e=Rt.call(this,t);this.check(e.getState())}function Wt(t,e){if(void 0===e&&(e={}),!(this instanceof Wt))return new Wt(t,e);this.element=t,this.onEnter=e.onEnter,this.onExit=e.onExit,this._didEnter=!1;var i=Rt.call(this,e);Zt(t)&&this.check(i.getState())}function Zt(t){return t&&t.parentNode}Vt.prototype=Object.create(Rt.prototype),Vt.prototype.constructor=Vt,Vt.prototype.check=function(t){var e=this,i=e.onTop,n=e.onBottom,o=e.onLeft,r=e.onRight,s=e.onFit,a=e._wasTop,l=e._wasBottom,h=e._wasLeft,d=e._wasRight,c=e._wasFit,u=e.container,p=e.offsetX,v=e.offsetY,f=e.once,m=u.scrollHeight,y=u.scrollWidth,g=t.width,_=t.height,b=t.positionX,w=t.positionY,L=w-v<=0,C=m>_&&_+w+v>=m,S=b-p<=0,k=y>g&&g+b+p>=y,E=m<=_&&y<=g,x=!1;n&&!l&&C?n.call(this,u,t):i&&!a&&L?i.call(this,u,t):r&&!d&&k?r.call(this,u,t):o&&!h&&S?o.call(this,u,t):s&&!c&&E?s.call(this,u,t):x=!0,f&&!x&&this.destroy(),this._wasTop=L,this._wasBottom=C,this._wasLeft=S,this._wasRight=k,this._wasFit=E},Wt.prototype=Object.create(Rt.prototype),Wt.prototype.constructor=Wt,Wt.prototype.check=function(t){var e=this,i=e.container,n=e.onEnter,o=e.onExit,r=e.element,s=e.offsetX,a=e.offsetY,l=e.once,h=e._didEnter;if(!Zt(r))return this.destroy();var d=function(t,e,i,n,o){var r,s,a,l,h=t.getBoundingClientRect();if(!h.width||!h.height)return!1;var d=window.innerWidth,c=window.innerHeight,u=d;if(o===document.body)r=c,s=0,a=u,l=0;else{if(!(h.top<c&&h.bottom>0&&h.left<u&&h.right>0))return!1;var p=o.getBoundingClientRect();r=p.bottom,s=p.top,a=p.right,l=p.left}return h.top<r+i&&h.bottom>s-i&&h.left<a+e&&h.right>l-e}(r,s,a,0,i);!h&&d?(this._didEnter=!0,n&&(n.call(this,r,t),l&&this.destroy())):h&&!d&&(this._didEnter=!1,o&&(o.call(this,r,t),l&&this.destroy()))},document.addEventListener("DOMContentLoaded",(t=>{var e=document.getElementsByTagName("dotlottie-player");void 0!==e&&null!=e&&Array.from(e,(t=>{let e=document.getElementById(t.id),i=[];i.id=t.id,i.name=e.dataset.animationName,i.frame=e.dataset.animationFrames,i.interactive=e.dataset.animationInteractive,i.ignoreObserver=e.dataset.animationIgnoreObserver;let n=`/wp-content/themes/payo/assets/svg-animations/${i.name}.lottie`;e.load(n),e.addEventListener("ready",(t=>{let n=e.shadowRoot;if(n){n.querySelectorAll("svg").forEach((t=>{t.removeAttribute("style"),t.style.height="auto",t.style.maxWidth="100%"})),n.querySelectorAll(".animation").forEach((t=>{t.style.justifyContent="center"}))}if("1"===i.interactive)Dt({player:e.getLottie(),mode:"scroll",container:"#"+i.id,actions:[{visibility:[0,1],type:"seek",frames:[0,i.frame]}]});else{let t;e.setAttribute("autoplay",""),t=Wt(e,{onEnter(t,e){t.play()},onExit(t,e){"1"===i.ignoreObserver?t.play():t.pause()},offset:0,offsetX:0,offsetY:0,once:!1})}}))}))}))})()})();