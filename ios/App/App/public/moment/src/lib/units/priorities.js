import hasOwnProp from"../utils/has-own-prop";var priorities={};export function addUnitPriority(r,i){priorities[r]=i}export function getPrioritizedUnits(r){var i,t=[];for(i in r)hasOwnProp(r,i)&&t.push({unit:i,priority:priorities[i]});return t.sort((function(r,i){return r.priority-i.priority})),t}