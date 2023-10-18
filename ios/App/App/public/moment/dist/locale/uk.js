/*! For license information please see uk.js.LICENSE.txt */
import moment from"../moment";function plural(e,t){var _=e.split("_");return t%10==1&&t%100!=11?_[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?_[1]:_[2]}function relativeTimeWithPlural(e,t,_){return"m"===_?t?"хвилина":"хвилину":"h"===_?t?"година":"годину":e+" "+plural({ss:t?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:t?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:t?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"}[_],+e)}function weekdaysCaseReplace(e,t){var _={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")};return!0===e?_.nominative.slice(1,7).concat(_.nominative.slice(0,1)):e?_[/(\[[ВвУу]\]) ?dddd/.test(t)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)?"genitive":"nominative"][e.day()]:_.nominative}function processHoursFunction(e){return function(){return e+"о"+(11===this.hours()?"б":"")+"] LT"}}export default moment.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:weekdaysCaseReplace,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:processHoursFunction("[Сьогодні "),nextDay:processHoursFunction("[Завтра "),lastDay:processHoursFunction("[Вчора "),nextWeek:processHoursFunction("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return processHoursFunction("[Минулої] dddd [").call(this);case 1:case 2:case 4:return processHoursFunction("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",ss:relativeTimeWithPlural,m:relativeTimeWithPlural,mm:relativeTimeWithPlural,h:"годину",hh:relativeTimeWithPlural,d:"день",dd:relativeTimeWithPlural,M:"місяць",MM:relativeTimeWithPlural,y:"рік",yy:relativeTimeWithPlural},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(e){return/^(дня|вечора)$/.test(e)},meridiem:function(e,t,_){return e<4?"ночі":e<12?"ранку":e<17?"дня":"вечора"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e+"-й";case"D":return e+"-го";default:return e}},week:{dow:1,doy:7}});