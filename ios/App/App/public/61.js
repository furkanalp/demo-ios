"use strict";(self.webpackChunkds_mobile=self.webpackChunkds_mobile||[]).push([[61],{518:(e,t,s)=>{s.d(t,{p:()=>c});var n=s(9223);const i=(0,n.fo)("App",{web:()=>s.e(544).then(s.bind(s,544)).then((e=>new e.AppWeb))});class c extends n.Uw{addResumeListener(e){return i.addListener("appStateChange",(({isActive:t})=>{t&&this.checkBiometry().then((t=>{e(t)})).catch(console.error)}))}}},5061:(e,t,s)=>{s.r(t),s.d(t,{BiometricAuthNative:()=>c});var n=s(518),i=s(1667);class c extends n.p{constructor(e){super(),this.checkBiometry=e.checkBiometry,this.authenticate=e.authenticate}async checkBiometry(){return Promise.resolve({isAvailable:!0,biometryType:i.dz.none,reason:"",code:i.Ds.none})}async authenticate(e){}async setBiometryType(e){throw this.unimplemented("setBiometryType is web only")}}}}]);
//# sourceMappingURL=61.js.map