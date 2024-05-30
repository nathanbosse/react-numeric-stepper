var Dt=Object.defineProperty,Pt=Object.defineProperties;var Rt=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var Vt=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable;var _=(t,o,n)=>o in t?Dt(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,l=(t,o)=>{for(var n in o||(o={}))Vt.call(o,n)&&_(t,n,o[n]);if(G)for(var n of G(o))Lt.call(o,n)&&_(t,n,o[n]);return t},p=(t,o)=>Pt(t,Rt(o));import*as r from"react";import{LazyMotion as Jt,domMax as Ut,useMotionValue as et,m as T}from"framer-motion";import Wt from"textfit";import{useRef as Et}from"react";function J(){let t=Et(!0);return t.current?(t.current=!1,!0):t.current}import{useTransform as Ft}from"framer-motion";import Nt from"@emotion/styled";import Ot from"@emotion/is-prop-valid";import{css as At}from"@emotion/react";import{m as Bt}from"framer-motion";function e(t){switch(t){case"sm":return 1;case"md":return 1.5;case"lg":return 2}}var Xt={shouldForwardProp:Ot},U=Nt(Bt.div,Xt)`
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 9999px;
  box-sizing: border-box;
  width: ${t=>185*e(t.size)}px;
  height: ${t=>74*e(t.size)}px;
  padding: ${t=>7*e(t.size)}px
    ${t=>17*e(t.size)}px;
  background-color: ${t=>t.inactiveTrackColor};

  ${t=>t.thumbShadowAnimationOnTrackHoverEnabled&&At`
      &:hover > div > button:nth-of-type(2) {
        box-shadow: 0 ${20*e(t.size)}px
            ${25*e(t.size)}px ${28*e(t.size)}px
            rgb(0 0 0 / 0.1),
          0 ${1.5*e(t.size)}px ${2*e(t.size)}px
            ${-1*e(t.size)}px rgb(0 0 0 / 0.5);
      }
    `}

  & > div {
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;

    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      color: ${t=>t.hoverIconColor};

      & > svg {
        width: ${t=>30*e(t.size)}px;
        height: ${t=>30*e(t.size)}px;
      }
    }

    & > button {
      align-items: center;
      justify-content: center;
      display: flex;
      border: 0 solid ${t=>t.focusRingColor};
      border-radius: 50%;
      padding: 0;
      cursor: pointer;
      appearance: none;
      outline: none;
      -webkit-tap-highlight-color: transparent;

      &:focus {
        border-width: ${t=>1*e(t.size)}px;
      }

      &:focus:not(:focus-visible) {
        border-width: 0;
      }

      &:focus-visible {
        border-width: ${t=>1*e(t.size)}px;
      }
    }

    & > button:nth-of-type(2n + 1) {
      transition: border-width 50ms,
        color ${t=>t.isDragging?0:150}ms,
        background-color 150ms;
      width: ${t=>34*e(t.size)}px;
      height: ${t=>34*e(t.size)}px;
      margin: ${t=>5*e(t.size)}px;
      background-color: transparent;
      color: ${t=>t.inactiveIconColor};
      user-select: none;

      & > svg {
        width: ${t=>30*e(t.size)}px;
        height: ${t=>30*e(t.size)}px;
      }

      &[aria-disabled='false']:hover {
        background-color: ${t=>t.hoverButtonColor};
        color: ${t=>t.hoverIconColor} !important;
      }

      &[aria-disabled='false']:active {
        background-color: ${t=>t.activeButtonColor};
        color: ${t=>t.activeIconColor} !important;
      }

      &[aria-disabled='true'] {
        cursor: default;
        color: ${t=>t.disabledIconColor} !important;
      }
    }

    & > button:nth-of-type(2) {
      z-index: 1;
      transition: box-shadow 150ms;
      margin: 0 ${t=>2*e(t.size)}px;
      box-shadow: 0 ${t=>5*e(t.size)}px
          ${t=>5*e(t.size)}px
          ${t=>-2*e(t.size)}px rgb(0 0 0 / 0.1),
        0 ${t=>1.5*e(t.size)}px
          ${t=>2*e(t.size)}px
          ${t=>-1*e(t.size)}px rgb(0 0 0 / 0.5);
      width: ${t=>60*e(t.size)}px;
      height: ${t=>60*e(t.size)}px;
      background-color: ${t=>t.thumbColor};
      color: ${t=>t.thumbLabelColor};

      & > div {
        align-items: center;
        justify-content: center;
        display: flex;
        width: ${t=>46*e(t.size)}px;
      }

      &:active {
        box-shadow: 0 ${t=>5*e(t.size)}px
            ${t=>5*e(t.size)}px
            ${t=>-2*e(t.size)}px rgb(0 0 0 / 0.1),
          0 ${t=>1.5*e(t.size)}px
            ${t=>2*e(t.size)}px
            ${t=>-1*e(t.size)}px rgb(0 0 0 / 0.5);
      }
    }
  }
`;function W(t,o){return Ft(t,[0,22*e(o)],[1,0])}import{useTransform as Ht}from"framer-motion";function Y(t,o,n,i,s){return Ht(t,[16*e(o),0,-16*e(o)],[s,n,i])}import{useTransform as jt}from"framer-motion";function q(t,o,n,i,s){return jt(t,[-16*e(o),0,16*e(o)],[s,n,i])}import{useTransform as Gt}from"framer-motion";function K(t,o,n,i){return Gt(t,[-110*e(o),0,110*e(o)],[i,n,i])}import{useTransform as Q}from"framer-motion";function Z(t,o){let n=Q(t,s=>s/5.5),i=Q(o,s=>s/6.5);return{x:n,y:i}}import{useTransform as _t}from"framer-motion";function tt(t,o){return _t(t,[0,62*e(o)],[0,1])}import*as b from"react";var I=b.forwardRef((t,o)=>b.createElement("svg",p(l({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),{ref:o}),b.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M20 12H4"})));I.displayName="MinusIcon";import*as g from"react";var D=g.forwardRef((t,o)=>g.createElement("svg",p(l({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),{ref:o}),g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M6 18L18 6M6 6l12 12"})));D.displayName="XIcon";import*as x from"react";var P=x.forwardRef((t,o)=>x.createElement("svg",p(l({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),{ref:o}),x.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M12 4v16m8-8H4"})));P.displayName="PlusIcon";var Yt=5;function Oe({minimumValue:t=0,maximumValue:o=Number.MAX_SAFE_INTEGER,stepValue:n=1,value:i,onChange:s,size:c="sm",inactiveTrackColor:R="#2b2b2b",activeTrackColor:V="#1f1f1f",hoverButtonColor:ot="transparent",activeButtonColor:rt="#ececec",inactiveIconColor:$="#858585",hoverIconColor:z="#ffffff",activeIconColor:nt="#000000",disabledIconColor:M="#383838",thumbColor:it="#444444",thumbLabelColor:st="#ffffff",thumbShadowAnimationOnTrackHoverEnabled:at=!0,focusRingColor:ct="#ececec",stepIntervalSpeed:ut=300,decrementButtonAriaLabel:mt,thumbAriaLabel:lt,incrementButtonAriaLabel:pt}){let[ft,L]=r.useState(!0),[m,dt]=r.useState(),[E,N]=r.useState(!1),[bt,O]=r.useState(0),A=r.useRef(null),y=r.useRef(null),B=J(),f=et(0),v=et(0),X=W(v,c),gt=Y(f,c,$,z,M),xt=q(f,c,$,z,M),yt=K(f,c,R,V),F=Z(f,v),vt=tt(v,c),ht=a=>a+H(a),H=a=>bt<Yt||a<=9?1:a<=60?St(a):15;function St(a){let u=a%5;return u===0?5:u===4?4:5-u}let Tt=a=>a-H(a);r.useEffect(()=>{B||s==null||s(i)},[B,s,i]),r.useLayoutEffect(()=>{y.current&&y.current.getBoundingClientRect().width&&Wt(y.current,{detectMultiLine:!1,minFontSize:4*e(c),maxFontSize:25*e(c),widthOnly:!0})},[c,i]);let h=i-n>=t,d=i+n<=o;function w(){h&&s(Tt(i))}function $t(){h&&s(i-1)}function S(){d&&s(ht(i))}function zt(){d&&s(i+1)}function C(){s(t)}function Mt(a){dt(a)}function wt(){N(!0),O(0)}function Ct(a,u){L(!1),setTimeout(()=>{N(!1),L(!0)},350),m==="x"&&u.offset.x>=6*e(c)?S():m==="x"&&u.offset.x<=-6*e(c)?w():m==="y"&&u.offset.y>=2*e(c)&&C()}let kt=r.useCallback(()=>{let a=Date.now();return(u,k)=>{let j=Date.now();j-a>ut&&(a=j,m==="x"&&k.offset.x>=6*e(c)?S():m==="x"&&k.offset.x<=-6*e(c)?w():m==="y"&&k.offset.y>=2*e(c)&&C(),O(It=>It+1))}},[m,S,w,C]);return r.createElement(Jt,{features:Ut,strict:!0},r.createElement(U,{size:c,inactiveTrackColor:R,activeTrackColor:V,hoverButtonColor:ot,activeButtonColor:rt,inactiveIconColor:$,hoverIconColor:z,activeIconColor:nt,disabledIconColor:M,thumbColor:it,thumbLabelColor:st,thumbShadowAnimationOnTrackHoverEnabled:at,focusRingColor:ct,isDragging:E,style:{x:F.x,y:F.y,backgroundColor:yt},"data-testid":"numeric-stepper"},r.createElement("div",{ref:A},r.createElement(T.button,{type:"button",style:{opacity:X,color:gt},"aria-disabled":!h,"aria-label":mt,"data-testid":"numeric-stepper-decrement-button",onClick:h?$t:void 0},r.createElement(I,{"aria-hidden":"true"})),r.createElement(T.div,{style:{opacity:vt},"aria-hidden":"true"},r.createElement(D,null)),r.createElement(T.button,{drag:!0,dragConstraints:A,dragDirectionLock:!0,dragSnapToOrigin:!0,dragElastic:{left:.3,bottom:.5,right:.3},dragMomentum:!1,dragTransition:{bounceStiffness:250,bounceDamping:15},dragListener:ft,type:"button",style:{x:f,y:v},"aria-label":lt,"aria-live":"polite","data-testid":"numeric-stepper-thumb",onDirectionLock:Mt,onDragStart:wt,onDrag:kt(),onDragEnd:Ct,onClick:d&&!E?S:void 0},r.createElement("div",{ref:y},i)),r.createElement(T.button,{type:"button",style:{opacity:X,color:xt},"aria-disabled":!d,"aria-label":pt,"data-testid":"numeric-stepper-increment-button",onClick:d?zt:void 0},r.createElement(P,{"aria-hidden":"true"})))))}export{Oe as NumericStepper};
//# sourceMappingURL=index.js.map
