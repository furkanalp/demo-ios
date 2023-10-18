/*! For license information please see sl.js.LICENSE.txt */
import moment from"../moment";function processRelativeTime(e,s,a,t){var r=e+" ";switch(a){case"s":return s||t?"nekaj sekund":"nekaj sekundami";case"ss":return r+(1===e?s?"sekundo":"sekundi":2===e?s||t?"sekundi":"sekundah":e<5?s||t?"sekunde":"sekundah":"sekund");case"m":return s?"ena minuta":"eno minuto";case"mm":return r+(1===e?s?"minuta":"minuto":2===e?s||t?"minuti":"minutama":e<5?s||t?"minute":"minutami":s||t?"minut":"minutami");case"h":return s?"ena ura":"eno uro";case"hh":return r+(1===e?s?"ura":"uro":2===e?s||t?"uri":"urama":e<5?s||t?"ure":"urami":s||t?"ur":"urami");case"d":return s||t?"en dan":"enim dnem";case"dd":return r+(1===e?s||t?"dan":"dnem":2===e?s||t?"dni":"dnevoma":s||t?"dni":"dnevi");case"M":return s||t?"en mesec":"enim mesecem";case"MM":return r+(1===e?s||t?"mesec":"mesecem":2===e?s||t?"meseca":"mesecema":e<5?s||t?"mesece":"meseci":s||t?"mesecev":"meseci");case"y":return s||t?"eno leto":"enim letom";case"yy":return r+(1===e?s||t?"leto":"letom":2===e?s||t?"leti":"letoma":e<5?s||t?"leta":"leti":s||t?"let":"leti")}}export default moment.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:processRelativeTime,ss:processRelativeTime,m:processRelativeTime,mm:processRelativeTime,h:processRelativeTime,hh:processRelativeTime,d:processRelativeTime,dd:processRelativeTime,M:processRelativeTime,MM:processRelativeTime,y:processRelativeTime,yy:processRelativeTime},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});