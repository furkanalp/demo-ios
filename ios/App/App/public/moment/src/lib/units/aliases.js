import hasOwnProp from"../utils/has-own-prop";var aliases={};export function addUnitAlias(a,s){var i=a.toLowerCase();aliases[i]=aliases[i+"s"]=aliases[s]=a}export function normalizeUnits(a){return"string"==typeof a?aliases[a]||aliases[a.toLowerCase()]:void 0}export function normalizeObjectUnits(a){var s,i,o={};for(i in a)hasOwnProp(a,i)&&(s=normalizeUnits(i))&&(o[s]=a[i]);return o}