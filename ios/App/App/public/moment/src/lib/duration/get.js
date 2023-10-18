import{normalizeUnits}from"../units/aliases";import absFloor from"../utils/abs-floor";export function get(e){return e=normalizeUnits(e),this.isValid()?this[e+"s"]():NaN}function makeGetter(e){return function(){return this.isValid()?this._data[e]:NaN}}var milliseconds=makeGetter("milliseconds"),seconds=makeGetter("seconds"),minutes=makeGetter("minutes"),hours=makeGetter("hours"),days=makeGetter("days"),months=makeGetter("months"),years=makeGetter("years");export{milliseconds,seconds,minutes,hours,days,months,years};export function weeks(){return absFloor(this.days()/7)}