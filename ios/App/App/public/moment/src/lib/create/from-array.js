import{hooks}from"../utils/hooks";import{createDate,createUTCDate}from"./date-from-array";import{daysInYear}from"../units/year";import{weekOfYear,weeksInYear,dayOfYearFromWeeks}from"../units/week-calendar-utils";import{YEAR,MONTH,DATE,HOUR,MINUTE,SECOND,MILLISECOND}from"../units/constants";import{createLocal}from"./local";import defaults from"../utils/defaults";import getParsingFlags from"./parsing-flags";function currentDateArray(e){var a=new Date(hooks.now());return e._useUTC?[a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()]:[a.getFullYear(),a.getMonth(),a.getDate()]}export function configFromArray(e){var a,r,t,l,o,n=[];if(!e._d){for(t=currentDateArray(e),e._w&&null==e._a[DATE]&&null==e._a[MONTH]&&dayOfYearFromWeekInfo(e),null!=e._dayOfYear&&(o=defaults(e._a[YEAR],t[YEAR]),(e._dayOfYear>daysInYear(o)||0===e._dayOfYear)&&(getParsingFlags(e)._overflowDayOfYear=!0),r=createUTCDate(o,0,e._dayOfYear),e._a[MONTH]=r.getUTCMonth(),e._a[DATE]=r.getUTCDate()),a=0;a<3&&null==e._a[a];++a)e._a[a]=n[a]=t[a];for(;a<7;a++)e._a[a]=n[a]=null==e._a[a]?2===a?1:0:e._a[a];24===e._a[HOUR]&&0===e._a[MINUTE]&&0===e._a[SECOND]&&0===e._a[MILLISECOND]&&(e._nextDay=!0,e._a[HOUR]=0),e._d=(e._useUTC?createUTCDate:createDate).apply(null,n),l=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[HOUR]=24),e._w&&void 0!==e._w.d&&e._w.d!==l&&(getParsingFlags(e).weekdayMismatch=!0)}}function dayOfYearFromWeekInfo(e){var a,r,t,l,o,n,_,s,f;null!=(a=e._w).GG||null!=a.W||null!=a.E?(o=1,n=4,r=defaults(a.GG,e._a[YEAR],weekOfYear(createLocal(),1,4).year),t=defaults(a.W,1),((l=defaults(a.E,1))<1||l>7)&&(s=!0)):(o=e._locale._week.dow,n=e._locale._week.doy,f=weekOfYear(createLocal(),o,n),r=defaults(a.gg,e._a[YEAR],f.year),t=defaults(a.w,f.week),null!=a.d?((l=a.d)<0||l>6)&&(s=!0):null!=a.e?(l=a.e+o,(a.e<0||a.e>6)&&(s=!0)):l=o),t<1||t>weeksInYear(r,o,n)?getParsingFlags(e)._overflowWeeks=!0:null!=s?getParsingFlags(e)._overflowWeekday=!0:(_=dayOfYearFromWeeks(r,t,l,o,n),e._a[YEAR]=_.year,e._dayOfYear=_.dayOfYear)}