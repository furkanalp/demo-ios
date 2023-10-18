import{makeGetSet}from"../moment/get-set";import{addFormatToken}from"../format/format";import{addUnitAlias}from"./aliases";import{addUnitPriority}from"./priorities";import{addRegexToken,match1to2,match2}from"../parse/regex";import{addParseToken}from"../parse/token";import{MINUTE}from"./constants";addFormatToken("m",["mm",2],0,"minute"),addUnitAlias("minute","m"),addUnitPriority("minute",14),addRegexToken("m",match1to2),addRegexToken("mm",match1to2,match2),addParseToken(["m","mm"],MINUTE);export var getSetMinute=makeGetSet("Minutes",!1);