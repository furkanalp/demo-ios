import{copyConfig}from"../moment/constructor";import{configFromStringAndFormat}from"./from-string-and-format";import getParsingFlags from"./parsing-flags";import{isValid}from"./valid";import extend from"../utils/extend";export function configFromStringAndArray(r){var n,o,t,i,g,a,e=!1,s=r._f.length;if(0===s)return getParsingFlags(r).invalidFormat=!0,void(r._d=new Date(NaN));for(i=0;i<s;i++)g=0,a=!1,n=copyConfig({},r),null!=r._useUTC&&(n._useUTC=r._useUTC),n._f=r._f[i],configFromStringAndFormat(n),isValid(n)&&(a=!0),g+=getParsingFlags(n).charsLeftOver,g+=10*getParsingFlags(n).unusedTokens.length,getParsingFlags(n).score=g,e?g<t&&(t=g,o=n):(null==t||g<t||a)&&(t=g,o=n,a&&(e=!0));extend(r,o||n)}