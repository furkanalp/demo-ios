import hasOwnProp from"./has-own-prop";export default function isObjectEmpty(r){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(r).length;var t;for(t in r)if(hasOwnProp(r,t))return!1;return!0}