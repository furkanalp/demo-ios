import{createDuration}from"../duration/create";import{createLocal}from"../create/local";import{isMoment}from"../moment/constructor";export function from(t,o){return this.isValid()&&(isMoment(t)&&t.isValid()||createLocal(t).isValid())?createDuration({to:this,from:t}).locale(this.locale()).humanize(!o):this.localeData().invalidDate()}export function fromNow(t){return this.from(createLocal(),t)}