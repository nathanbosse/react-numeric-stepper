var kt=Object.defineProperty,It=Object.defineProperties;var Dt=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var Pt=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable;var _=(t,o,n)=>o in t?kt(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,l=(t,o)=>{for(var n in o||(o={}))Pt.call(o,n)&&_(t,n,o[n]);if(G)for(var n of G(o))Rt.call(o,n)&&_(t,n,o[n]);return t},p=(t,o)=>It(t,Dt(o));import*as r from"react";import{LazyMotion as Gt,domMax as _t,useMotionValue as et,m as T}from"framer-motion";import Jt from"textfit";import{useRef as Vt}from"react";function J(){let t=Vt(!0);return t.current?(t.current=!1,!0):t.current}import{useTransform as Ot}from"framer-motion";import Lt from"@emotion/styled";import Et from"@emotion/is-prop-valid";import{css as Nt}from"@emotion/react";import{m as At}from"framer-motion";function e(t){switch(t){case"sm":return 1;case"md":return 1.5;case"lg":return 2}}var Bt={shouldForwardProp:Et},U=Lt(At.div,Bt)`
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

  ${t=>t.thumbShadowAnimationOnTrackHoverEnabled&&Nt`
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
`;function W(t,o){return Ot(t,[0,22*e(o)],[1,0])}import{useTransform as Xt}from"framer-motion";function Y(t,o,n,i,a){return Xt(t,[16*e(o),0,-16*e(o)],[a,n,i])}import{useTransform as Ft}from"framer-motion";function q(t,o,n,i,a){return Ft(t,[-16*e(o),0,16*e(o)],[a,n,i])}import{useTransform as Ht}from"framer-motion";function K(t,o,n,i){return Ht(t,[-110*e(o),0,110*e(o)],[i,n,i])}import{useTransform as Q}from"framer-motion";function Z(t,o){let n=Q(t,a=>a/5.5),i=Q(o,a=>a/6.5);return{x:n,y:i}}import{useTransform as jt}from"framer-motion";function tt(t,o){return jt(t,[0,62*e(o)],[0,1])}import*as b from"react";var I=b.forwardRef((t,o)=>b.createElement("svg",p(l({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),{ref:o}),b.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M20 12H4"})));I.displayName="MinusIcon";import*as g from"react";var D=g.forwardRef((t,o)=>g.createElement("svg",p(l({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),{ref:o}),g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M6 18L18 6M6 6l12 12"})));D.displayName="XIcon";import*as x from"react";var P=x.forwardRef((t,o)=>x.createElement("svg",p(l({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),{ref:o}),x.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M12 4v16m8-8H4"})));P.displayName="PlusIcon";var Ut=5;function Ee({minimumValue:t=0,maximumValue:o=Number.MAX_SAFE_INTEGER,stepValue:n=1,value:i,onChange:a,size:u="sm",inactiveTrackColor:R="#2b2b2b",activeTrackColor:V="#1f1f1f",hoverButtonColor:ot="transparent",activeButtonColor:rt="#ececec",inactiveIconColor:$="#858585",hoverIconColor:z="#ffffff",activeIconColor:nt="#000000",disabledIconColor:C="#383838",thumbColor:it="#444444",thumbLabelColor:st="#ffffff",thumbShadowAnimationOnTrackHoverEnabled:at=!0,focusRingColor:ut="#ececec",stepIntervalSpeed:ct=300,decrementButtonAriaLabel:mt,thumbAriaLabel:lt,incrementButtonAriaLabel:pt}){let[ft,L]=r.useState(!0),[m,dt]=r.useState(),[E,N]=r.useState(!1),[bt,A]=r.useState(0),B=r.useRef(null),y=r.useRef(null),O=J(),f=et(0),h=et(0),X=W(h,u),gt=Y(f,u,$,z,C),xt=q(f,u,$,z,C),yt=K(f,u,R,V),F=Z(f,h),ht=tt(h,u),vt=s=>s+H(s),H=s=>bt<Ut||s<=9?1:s<=60?St(s):15;function St(s){let c=s%5;return c===0?5:c===4?4:5-c}let Tt=s=>s-H(s);r.useEffect(()=>{O||a==null||a(i)},[O,a,i]),r.useLayoutEffect(()=>{y.current&&y.current.getBoundingClientRect().width&&Jt(y.current,{detectMultiLine:!1,minFontSize:4*e(u),maxFontSize:25*e(u),widthOnly:!0})},[u,i]);let M=i-n>=t,v=i+n<=o;function S(){M&&a(Tt(i))}function d(){v&&a(vt(i))}function w(){a(t)}function $t(s){dt(s)}function zt(){N(!0),A(0)}function Ct(s,c){L(!1),setTimeout(()=>{N(!1),L(!0)},350),m==="x"&&c.offset.x>=6*e(u)?d():m==="x"&&c.offset.x<=-6*e(u)?S():m==="y"&&c.offset.y>=2*e(u)&&w()}let Mt=r.useCallback(()=>{let s=Date.now();return(c,k)=>{let j=Date.now();j-s>ct&&(s=j,m==="x"&&k.offset.x>=6*e(u)?d():m==="x"&&k.offset.x<=-6*e(u)?S():m==="y"&&k.offset.y>=2*e(u)&&w(),A(wt=>wt+1))}},[m,d,S,w]);return r.createElement(Gt,{features:_t,strict:!0},r.createElement(U,{size:u,inactiveTrackColor:R,activeTrackColor:V,hoverButtonColor:ot,activeButtonColor:rt,inactiveIconColor:$,hoverIconColor:z,activeIconColor:nt,disabledIconColor:C,thumbColor:it,thumbLabelColor:st,thumbShadowAnimationOnTrackHoverEnabled:at,focusRingColor:ut,isDragging:E,style:{x:F.x,y:F.y,backgroundColor:yt},"data-testid":"numeric-stepper"},r.createElement("div",{ref:B},r.createElement(T.button,{type:"button",style:{opacity:X,color:gt},"aria-disabled":!M,"aria-label":mt,"data-testid":"numeric-stepper-decrement-button",onClick:M?S:void 0},r.createElement(I,{"aria-hidden":"true"})),r.createElement(T.div,{style:{opacity:ht},"aria-hidden":"true"},r.createElement(D,null)),r.createElement(T.button,{drag:!0,dragConstraints:B,dragDirectionLock:!0,dragSnapToOrigin:!0,dragElastic:{left:.3,bottom:.5,right:.3},dragMomentum:!1,dragTransition:{bounceStiffness:250,bounceDamping:15},dragListener:ft,type:"button",style:{x:f,y:h},"aria-label":lt,"aria-live":"polite","data-testid":"numeric-stepper-thumb",onDirectionLock:$t,onDragStart:zt,onDrag:Mt(),onDragEnd:Ct,onClick:v&&!E?d:void 0},r.createElement("div",{ref:y},i)),r.createElement(T.button,{type:"button",style:{opacity:X,color:xt},"aria-disabled":!v,"aria-label":pt,"data-testid":"numeric-stepper-increment-button",onClick:v?d:void 0},r.createElement(P,{"aria-hidden":"true"})))))}export{Ee as NumericStepper};
//# sourceMappingURL=index.js.map
