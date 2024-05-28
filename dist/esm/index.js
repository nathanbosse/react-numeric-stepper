var yo=Object.defineProperty,ho=Object.defineProperties;var So=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var vo=Object.prototype.hasOwnProperty,zo=Object.prototype.propertyIsEnumerable;var X=(o,e,r)=>e in o?yo(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,c=(o,e)=>{for(var r in e||(e={}))vo.call(e,r)&&X(o,r,e[r]);if(O)for(var r of O(e))zo.call(e,r)&&X(o,r,e[r]);return o},m=(o,e)=>ho(o,So(e));import*as i from"react";import{LazyMotion as Lo,domMax as Eo,useMotionValue as K,m as x}from"framer-motion";import No from"textfit";import{useRef as $o}from"react";function F(){let o=$o(!0);return o.current?(o.current=!1,!0):o.current}import{useTransform as Io}from"framer-motion";import To from"@emotion/styled";import Mo from"@emotion/is-prop-valid";import{css as wo}from"@emotion/react";import{m as ko}from"framer-motion";function t(o){switch(o){case"sm":return 1;case"md":return 1.5;case"lg":return 2}}var Co={shouldForwardProp:Mo},j=To(ko.div,Co)`
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 9999px;
  box-sizing: border-box;
  width: ${o=>185*t(o.size)}px;
  height: ${o=>74*t(o.size)}px;
  padding: ${o=>7*t(o.size)}px
    ${o=>17*t(o.size)}px;
  background-color: ${o=>o.inactiveTrackColor};

  ${o=>o.thumbShadowAnimationOnTrackHoverEnabled&&wo`
      &:hover > div > button:nth-of-type(2) {
        box-shadow: 0 ${20*t(o.size)}px
            ${25*t(o.size)}px ${28*t(o.size)}px
            rgb(0 0 0 / 0.1),
          0 ${1.5*t(o.size)}px ${2*t(o.size)}px
            ${-1*t(o.size)}px rgb(0 0 0 / 0.5);
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
      color: ${o=>o.hoverIconColor};

      & > svg {
        width: ${o=>30*t(o.size)}px;
        height: ${o=>30*t(o.size)}px;
      }
    }

    & > button {
      align-items: center;
      justify-content: center;
      display: flex;
      border: 0 solid ${o=>o.focusRingColor};
      border-radius: 50%;
      padding: 0;
      cursor: pointer;
      appearance: none;
      outline: none;
      -webkit-tap-highlight-color: transparent;

      &:focus {
        border-width: ${o=>1*t(o.size)}px;
      }

      &:focus:not(:focus-visible) {
        border-width: 0;
      }

      &:focus-visible {
        border-width: ${o=>1*t(o.size)}px;
      }
    }

    & > button:nth-of-type(2n + 1) {
      transition: border-width 50ms,
        color ${o=>o.isDragging?0:150}ms,
        background-color 150ms;
      width: ${o=>34*t(o.size)}px;
      height: ${o=>34*t(o.size)}px;
      margin: ${o=>5*t(o.size)}px;
      background-color: transparent;
      color: ${o=>o.inactiveIconColor};
      user-select: none;

      & > svg {
        width: ${o=>30*t(o.size)}px;
        height: ${o=>30*t(o.size)}px;
      }

      &[aria-disabled='false']:hover {
        background-color: ${o=>o.hoverButtonColor};
        color: ${o=>o.hoverIconColor} !important;
      }

      &[aria-disabled='false']:active {
        background-color: ${o=>o.activeButtonColor};
        color: ${o=>o.activeIconColor} !important;
      }

      &[aria-disabled='true'] {
        cursor: default;
        color: ${o=>o.disabledIconColor} !important;
      }
    }

    & > button:nth-of-type(2) {
      z-index: 1;
      transition: box-shadow 150ms;
      margin: 0 ${o=>2*t(o.size)}px;
      box-shadow: 0 ${o=>5*t(o.size)}px
          ${o=>5*t(o.size)}px
          ${o=>-2*t(o.size)}px rgb(0 0 0 / 0.1),
        0 ${o=>1.5*t(o.size)}px
          ${o=>2*t(o.size)}px
          ${o=>-1*t(o.size)}px rgb(0 0 0 / 0.5);
      width: ${o=>60*t(o.size)}px;
      height: ${o=>60*t(o.size)}px;
      background-color: ${o=>o.thumbColor};
      color: ${o=>o.thumbLabelColor};

      & > div {
        align-items: center;
        justify-content: center;
        display: flex;
        width: ${o=>46*t(o.size)}px;
      }

      &:active {
        box-shadow: 0 ${o=>5*t(o.size)}px
            ${o=>5*t(o.size)}px
            ${o=>-2*t(o.size)}px rgb(0 0 0 / 0.1),
          0 ${o=>1.5*t(o.size)}px
            ${o=>2*t(o.size)}px
            ${o=>-1*t(o.size)}px rgb(0 0 0 / 0.5);
      }
    }
  }
`;function G(o,e){return Io(o,[0,22*t(e)],[1,0])}import{useTransform as Vo}from"framer-motion";function H(o,e,r,n,s){return Vo(o,[16*t(e),0,-16*t(e)],[s,r,n])}import{useTransform as Ro}from"framer-motion";function J(o,e,r,n,s){return Ro(o,[-16*t(e),0,16*t(e)],[s,r,n])}import{useTransform as Po}from"framer-motion";function W(o,e,r,n){return Po(o,[-110*t(e),0,110*t(e)],[n,r,n])}import{useTransform as _}from"framer-motion";function Y(o,e){let r=_(o,s=>s/5.5),n=_(e,s=>s/6.5);return{x:r,y:n}}import{useTransform as Do}from"framer-motion";function q(o,e){return Do(o,[0,62*t(e)],[0,1])}import*as l from"react";var M=l.forwardRef((o,e)=>l.createElement("svg",m(c({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},o),{ref:e}),l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M20 12H4"})));M.displayName="MinusIcon";import*as p from"react";var w=p.forwardRef((o,e)=>p.createElement("svg",m(c({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},o),{ref:e}),p.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M6 18L18 6M6 6l12 12"})));w.displayName="XIcon";import*as f from"react";var k=f.forwardRef((o,e)=>f.createElement("svg",m(c({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},o),{ref:e}),f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M12 4v16m8-8H4"})));k.displayName="PlusIcon";function Tt({minimumValue:o=0,maximumValue:e=Number.MAX_SAFE_INTEGER,stepValue:r=1,value:n,onChange:s,size:a="sm",inactiveTrackColor:C="#2b2b2b",activeTrackColor:I="#1f1f1f",hoverButtonColor:Q="transparent",activeButtonColor:U="#ececec",inactiveIconColor:y="#858585",hoverIconColor:h="#ffffff",activeIconColor:Z="#000000",disabledIconColor:S="#383838",thumbColor:oo="#444444",thumbLabelColor:to="#ffffff",thumbShadowAnimationOnTrackHoverEnabled:eo=!0,focusRingColor:ro="#ececec",decrementButtonAriaLabel:io,thumbAriaLabel:no,incrementButtonAriaLabel:so}){let[ao,V]=i.useState(!0),[v,co]=i.useState(),[R,P]=i.useState(!1),D=i.useRef(null),d=i.useRef(null),L=F(),u=K(0),b=K(0),E=G(b,a),mo=H(u,a,y,h,S),uo=J(u,a,y,h,S),lo=W(u,a,C,I),N=Y(u,b),po=q(b,a);i.useEffect(()=>{L||s==null||s(n)},[L,s,n]),i.useLayoutEffect(()=>{d.current&&d.current.getBoundingClientRect().width&&No(d.current,{detectMultiLine:!1,minFontSize:4*t(a),maxFontSize:25*t(a),widthOnly:!0})},[a,n]);let z=n-r>=o,g=n+r<=e;function B(){z&&s(n-r)}function $(){g&&s(n+r)}function fo(){s(o)}function bo(A){co(A)}function go(){P(!0)}function xo(A,T){V(!1),setTimeout(()=>{P(!1),V(!0)},350),v==="x"&&T.offset.x>=6*t(a)?$():v==="x"&&T.offset.x<=-6*t(a)?B():v==="y"&&T.offset.y>=2*t(a)&&fo()}return i.createElement(Lo,{features:Eo,strict:!0},i.createElement(j,{size:a,inactiveTrackColor:C,activeTrackColor:I,hoverButtonColor:Q,activeButtonColor:U,inactiveIconColor:y,hoverIconColor:h,activeIconColor:Z,disabledIconColor:S,thumbColor:oo,thumbLabelColor:to,thumbShadowAnimationOnTrackHoverEnabled:eo,focusRingColor:ro,isDragging:R,style:{x:N.x,y:N.y,backgroundColor:lo},"data-testid":"numeric-stepper"},i.createElement("div",{ref:D},i.createElement(x.button,{type:"button",style:{opacity:E,color:mo},"aria-disabled":!z,"aria-label":io,"data-testid":"numeric-stepper-decrement-button",onClick:z?B:void 0},i.createElement(M,{"aria-hidden":"true"})),i.createElement(x.div,{style:{opacity:po},"aria-hidden":"true"},i.createElement(w,null)),i.createElement(x.button,{drag:!0,dragConstraints:D,dragDirectionLock:!0,dragSnapToOrigin:!0,dragElastic:{left:.3,bottom:.5,right:.3},dragMomentum:!1,dragTransition:{bounceStiffness:250,bounceDamping:15},dragListener:ao,type:"button",style:{x:u,y:b},"aria-label":no,"aria-live":"polite","data-testid":"numeric-stepper-thumb",onDirectionLock:bo,onDragStart:go,onDragEnd:xo,onClick:g&&!R?$:void 0},i.createElement("div",{ref:d},n)),i.createElement(x.button,{type:"button",style:{opacity:E,color:uo},"aria-disabled":!g,"aria-label":so,"data-testid":"numeric-stepper-increment-button",onClick:g?$:void 0},i.createElement(k,{"aria-hidden":"true"})))))}export{Tt as NumericStepper};
//# sourceMappingURL=index.js.map
