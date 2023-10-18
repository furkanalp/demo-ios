import extend from"../utils/extend";import{createUTC}from"./utc";import getParsingFlags from"../create/parsing-flags";import some from"../utils/some";export function isValid(e){if(null==e._isValid){var i=getParsingFlags(e),r=some.call(i.parsedDateParts,(function(e){return null!=e})),t=!isNaN(e._d.getTime())&&i.overflow<0&&!i.empty&&!i.invalidEra&&!i.invalidMonth&&!i.invalidWeekday&&!i.weekdayMismatch&&!i.nullInput&&!i.invalidFormat&&!i.userInvalidated&&(!i.meridiem||i.meridiem&&r);if(e._strict&&(t=t&&0===i.charsLeftOver&&0===i.unusedTokens.length&&void 0===i.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return t;e._isValid=t}return e._isValid}export function createInvalid(e){var i=createUTC(NaN);return null!=e?extend(getParsingFlags(i),e):getParsingFlags(i).userInvalidated=!0,i}