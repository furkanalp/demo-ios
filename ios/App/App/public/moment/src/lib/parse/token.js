import hasOwnProp from"../utils/has-own-prop";import isNumber from"../utils/is-number";import toInt from"../utils/to-int";var tokens={};export function addParseToken(o,n){var t,r,e=n;for("string"==typeof o&&(o=[o]),isNumber(n)&&(e=function(o,t){t[n]=toInt(o)}),r=o.length,t=0;t<r;t++)tokens[o[t]]=e}export function addWeekParseToken(o,n){addParseToken(o,(function(o,t,r,e){r._w=r._w||{},n(o,r._w,r,e)}))}export function addTimeToArrayFromToken(o,n,t){null!=n&&hasOwnProp(tokens,o)&&tokens[o](n,t._a,t,o)}