import hasOwnProp from"./has-own-prop";var keys;keys=Object.keys?Object.keys:function(r){var e,s=[];for(e in r)hasOwnProp(r,e)&&s.push(e);return s};export{keys as default};