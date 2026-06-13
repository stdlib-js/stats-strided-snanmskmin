"use strict";var o=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var m=o(function(F,p){
var b=require('@stdlib/math-base-assert-is-nanf/dist'),g=require('@stdlib/math-base-assert-is-negative-zerof/dist');function E(r,e,a,f,u,c,_){var t,s,v,i,n;if(r<=0)return NaN;for(s=f,v=_,n=0;n<r&&(i=e[s],!(i===i&&u[v]===0));n++)s+=a,v+=c;if(n===r)return NaN;for(t=i,n+=1,n;n<r;n++)s+=a,v+=c,!u[v]&&(i=e[s],!b(i)&&(i<t||i===t&&g(i))&&(t=i));return t}p.exports=E
});var j=o(function(G,x){
var y=require('@stdlib/strided-base-stride2offset/dist'),O=m();function Z(r,e,a,f,u){return O(r,e,a,y(r,a),f,u,y(r,u))}x.exports=Z
});var l=o(function(H,k){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=j(),w=m();h(d,"ndarray",w);k.exports=d
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=l(),q,R=A(z(__dirname,"./native.js"));B(R)?q=C:q=R;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
