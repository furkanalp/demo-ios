import extend from"./extend";import{hooks}from"./hooks";import hasOwnProp from"./has-own-prop";function warn(e){!1===hooks.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}export function deprecate(e,n){var o=!0;return extend((function(){if(null!=hooks.deprecationHandler&&hooks.deprecationHandler(null,e),o){var r,a,t,p=[],s=arguments.length;for(a=0;a<s;a++){if(r="","object"==typeof arguments[a]){for(t in r+="\n["+a+"] ",arguments[0])hasOwnProp(arguments[0],t)&&(r+=t+": "+arguments[0][t]+", ");r=r.slice(0,-2)}else r=arguments[a];p.push(r)}warn(e+"\nArguments: "+Array.prototype.slice.call(p).join("")+"\n"+(new Error).stack),o=!1}return n.apply(this,arguments)}),n)}var deprecations={};export function deprecateSimple(e,n){null!=hooks.deprecationHandler&&hooks.deprecationHandler(e,n),deprecations[e]||(warn(n),deprecations[e]=!0)}hooks.suppressDeprecationWarnings=!1,hooks.deprecationHandler=null;