/*! For license information please see mr.js.LICENSE.txt */
import moment from"../moment";var symbolMap={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},numberMap={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};function relativeTimeMr(e,a,r,s){var m="";if(a)switch(r){case"s":m="काही सेकंद";break;case"ss":m="%d सेकंद";break;case"m":m="एक मिनिट";break;case"mm":m="%d मिनिटे";break;case"h":m="एक तास";break;case"hh":m="%d तास";break;case"d":m="एक दिवस";break;case"dd":m="%d दिवस";break;case"M":m="एक महिना";break;case"MM":m="%d महिने";break;case"y":m="एक वर्ष";break;case"yy":m="%d वर्षे"}else switch(r){case"s":m="काही सेकंदां";break;case"ss":m="%d सेकंदां";break;case"m":m="एका मिनिटा";break;case"mm":m="%d मिनिटां";break;case"h":m="एका तासा";break;case"hh":m="%d तासां";break;case"d":m="एका दिवसा";break;case"dd":m="%d दिवसां";break;case"M":m="एका महिन्या";break;case"MM":m="%d महिन्यां";break;case"y":m="एका वर्षा";break;case"yy":m="%d वर्षां"}return m.replace(/%d/i,e)}export default moment.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm वाजता",LLLL:"dddd, D MMMM YYYY, A h:mm वाजता"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%sमध्ये",past:"%sपूर्वी",s:relativeTimeMr,ss:relativeTimeMr,m:relativeTimeMr,mm:relativeTimeMr,h:relativeTimeMr,hh:relativeTimeMr,d:relativeTimeMr,dd:relativeTimeMr,M:relativeTimeMr,MM:relativeTimeMr,y:relativeTimeMr,yy:relativeTimeMr},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,(function(e){return numberMap[e]}))},postformat:function(e){return e.replace(/\d/g,(function(e){return symbolMap[e]}))},meridiemParse:/पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,meridiemHour:function(e,a){return 12===e&&(e=0),"पहाटे"===a||"सकाळी"===a?e:"दुपारी"===a||"सायंकाळी"===a||"रात्री"===a?e>=12?e:e+12:void 0},meridiem:function(e,a,r){return e>=0&&e<6?"पहाटे":e<12?"सकाळी":e<17?"दुपारी":e<20?"सायंकाळी":"रात्री"},week:{dow:0,doy:6}});