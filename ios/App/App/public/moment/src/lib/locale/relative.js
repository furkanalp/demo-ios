export var defaultRelativeTime={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};import isFunction from"../utils/is-function";export function relativeTime(e,t,i,s){var a=this._relativeTime[i];return isFunction(a)?a(e,t,i,s):a.replace(/%d/i,e)}export function pastFuture(e,t){var i=this._relativeTime[e>0?"future":"past"];return isFunction(i)?i(t):i.replace(/%s/i,t)}