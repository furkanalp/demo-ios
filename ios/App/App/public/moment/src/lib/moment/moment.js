import{createLocal}from"../create/local";import{createUTC}from"../create/utc";import{createInvalid}from"../create/valid";import{isMoment}from"./constructor";import{min,max}from"./min-max";import{now}from"./now";import momentPrototype from"./prototype";function createUnix(e){return createLocal(1e3*e)}function createInZone(){return createLocal.apply(null,arguments).parseZone()}export{now,min,max,isMoment,createUTC,createUnix,createLocal,createInZone,createInvalid,momentPrototype};