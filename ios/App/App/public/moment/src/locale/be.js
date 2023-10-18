/*! For license information please see be.js.LICENSE.txt */
import moment from"../moment";function plural(e,_){var t=e.split("_");return _%10==1&&_%100!=11?t[0]:_%10>=2&&_%10<=4&&(_%100<10||_%100>=20)?t[1]:t[2]}function relativeTimeWithPlural(e,_,t){return"m"===t?_?"хвіліна":"хвіліну":"h"===t?_?"гадзіна":"гадзіну":e+" "+plural({ss:_?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:_?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:_?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"}[t],+e)}export default moment.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:{format:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:relativeTimeWithPlural,mm:relativeTimeWithPlural,h:relativeTimeWithPlural,hh:relativeTimeWithPlural,d:"дзень",dd:relativeTimeWithPlural,M:"месяц",MM:relativeTimeWithPlural,y:"год",yy:relativeTimeWithPlural},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(e){return/^(дня|вечара)$/.test(e)},meridiem:function(e,_,t){return e<4?"ночы":e<12?"раніцы":e<17?"дня":"вечара"},dayOfMonthOrdinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(e,_){switch(_){case"M":case"d":case"DDD":case"w":case"W":return e%10!=2&&e%10!=3||e%100==12||e%100==13?e+"-ы":e+"-і";case"D":return e+"-га";default:return e}},week:{dow:1,doy:7}});