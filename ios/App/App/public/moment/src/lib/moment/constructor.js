import{hooks}from"../utils/hooks";import isUndefined from"../utils/is-undefined";import getParsingFlags from"../create/parsing-flags";var momentProperties=hooks.momentProperties=[],updateInProgress=!1;export function copyConfig(e,i){var t,n,s,o=momentProperties.length;if(isUndefined(i._isAMomentObject)||(e._isAMomentObject=i._isAMomentObject),isUndefined(i._i)||(e._i=i._i),isUndefined(i._f)||(e._f=i._f),isUndefined(i._l)||(e._l=i._l),isUndefined(i._strict)||(e._strict=i._strict),isUndefined(i._tzm)||(e._tzm=i._tzm),isUndefined(i._isUTC)||(e._isUTC=i._isUTC),isUndefined(i._offset)||(e._offset=i._offset),isUndefined(i._pf)||(e._pf=getParsingFlags(i)),isUndefined(i._locale)||(e._locale=i._locale),o>0)for(t=0;t<o;t++)s=i[n=momentProperties[t]],isUndefined(s)||(e[n]=s);return e}export function Moment(e){copyConfig(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===updateInProgress&&(updateInProgress=!0,hooks.updateOffset(this),updateInProgress=!1)}export function isMoment(e){return e instanceof Moment||null!=e&&null!=e._isAMomentObject}