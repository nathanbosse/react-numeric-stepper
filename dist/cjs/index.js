var Po=Object.create;var f=Object.defineProperty,Do=Object.defineProperties,Lo=Object.getOwnPropertyDescriptor,Eo=Object.getOwnPropertyDescriptors,No=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,Bo=Object.getPrototypeOf,H=Object.prototype.hasOwnProperty,Ao=Object.prototype.propertyIsEnumerable;var G=(o,e,r)=>e in o?f(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,u=(o,e)=>{for(var r in e||(e={}))H.call(e,r)&&G(o,r,e[r]);if(j)for(var r of j(e))Ao.call(e,r)&&G(o,r,e[r]);return o},l=(o,e)=>Do(o,Eo(e));var Oo=(o,e)=>{for(var r in e)f(o,r,{get:e[r],enumerable:!0})},J=(o,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of No(e))!H.call(o,n)&&n!==r&&f(o,n,{get:()=>e[n],enumerable:!(s=Lo(e,n))||s.enumerable});return o};var m=(o,e,r)=>(r=o!=null?Po(Bo(o)):{},J(e||!o||!o.__esModule?f(r,"default",{value:o,enumerable:!0}):r,o)),Xo=o=>J(f({},"__esModule",{value:!0}),o);var Go={};Oo(Go,{NumericStepper:()=>jo});module.exports=Xo(Go);var i=m(require("react")),c=require("framer-motion"),uo=m(require("textfit"));var W=require("react");function _(){let o=(0,W.useRef)(!0);return o.current?(o.current=!1,!0):o.current}var Z=require("framer-motion");var Y=m(require("@emotion/styled")),q=m(require("@emotion/is-prop-valid")),K=require("@emotion/react"),Q=require("framer-motion");function t(o){switch(o){case"sm":return 1;case"md":return 1.5;case"lg":return 2}}var Fo={shouldForwardProp:q.default},U=(0,Y.default)(Q.m.div,Fo)`
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

  ${o=>o.thumbShadowAnimationOnTrackHoverEnabled&&K.css`
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
`;function oo(o,e){return(0,Z.useTransform)(o,[0,22*t(e)],[1,0])}var to=require("framer-motion");function eo(o,e,r,s,n){return(0,to.useTransform)(o,[16*t(e),0,-16*t(e)],[n,r,s])}var ro=require("framer-motion");function io(o,e,r,s,n){return(0,ro.useTransform)(o,[-16*t(e),0,16*t(e)],[n,r,s])}var no=require("framer-motion");function so(o,e,r,s){return(0,no.useTransform)(o,[-110*t(e),0,110*t(e)],[s,r,s])}var k=require("framer-motion");function ao(o,e){let r=(0,k.useTransform)(o,n=>n/5.5),s=(0,k.useTransform)(e,n=>n/6.5);return{x:r,y:s}}var co=require("framer-motion");function mo(o,e){return(0,co.useTransform)(o,[0,62*t(e)],[0,1])}var d=m(require("react")),C=d.forwardRef((o,e)=>d.createElement("svg",l(u({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},o),{ref:e}),d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M20 12H4"})));C.displayName="MinusIcon";var b=m(require("react")),I=b.forwardRef((o,e)=>b.createElement("svg",l(u({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},o),{ref:e}),b.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M6 18L18 6M6 6l12 12"})));I.displayName="XIcon";var g=m(require("react")),V=g.forwardRef((o,e)=>g.createElement("svg",l(u({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},o),{ref:e}),g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M12 4v16m8-8H4"})));V.displayName="PlusIcon";function jo({minimumValue:o=0,maximumValue:e=Number.MAX_SAFE_INTEGER,stepValue:r=1,value:s,onChange:n,size:a="sm",inactiveTrackColor:R="#2b2b2b",activeTrackColor:P="#1f1f1f",hoverButtonColor:lo="transparent",activeButtonColor:po="#ececec",inactiveIconColor:S="#858585",hoverIconColor:v="#ffffff",activeIconColor:fo="#000000",disabledIconColor:z="#383838",thumbColor:bo="#444444",thumbLabelColor:go="#ffffff",thumbShadowAnimationOnTrackHoverEnabled:xo=!0,focusRingColor:yo="#ececec",decrementButtonAriaLabel:ho,thumbAriaLabel:So,incrementButtonAriaLabel:vo}){let[zo,D]=i.useState(!0),[$,$o]=i.useState(),[L,E]=i.useState(!1),N=i.useRef(null),x=i.useRef(null),B=_(),p=(0,c.useMotionValue)(0),y=(0,c.useMotionValue)(0),A=oo(y,a),To=eo(p,a,S,v,z),Mo=io(p,a,S,v,z),wo=so(p,a,R,P),O=ao(p,y),ko=mo(y,a);i.useEffect(()=>{B||n==null||n(s)},[B,n,s]),i.useLayoutEffect(()=>{x.current&&x.current.getBoundingClientRect().width&&(0,uo.default)(x.current,{detectMultiLine:!1,minFontSize:4*t(a),maxFontSize:25*t(a),widthOnly:!0})},[a,s]);let T=s-r>=o,h=s+r<=e;function X(){T&&n(s-r)}function M(){h&&n(s+r)}function Co(){n(o)}function Io(F){$o(F)}function Vo(){E(!0)}function Ro(F,w){D(!1),setTimeout(()=>{E(!1),D(!0)},350),$==="x"&&w.offset.x>=6*t(a)?M():$==="x"&&w.offset.x<=-6*t(a)?X():$==="y"&&w.offset.y>=2*t(a)&&Co()}return i.createElement(c.LazyMotion,{features:c.domMax,strict:!0},i.createElement(U,{size:a,inactiveTrackColor:R,activeTrackColor:P,hoverButtonColor:lo,activeButtonColor:po,inactiveIconColor:S,hoverIconColor:v,activeIconColor:fo,disabledIconColor:z,thumbColor:bo,thumbLabelColor:go,thumbShadowAnimationOnTrackHoverEnabled:xo,focusRingColor:yo,isDragging:L,style:{x:O.x,y:O.y,backgroundColor:wo},"data-testid":"numeric-stepper"},i.createElement("div",{ref:N},i.createElement(c.m.button,{type:"button",style:{opacity:A,color:To},"aria-disabled":!T,"aria-label":ho,"data-testid":"numeric-stepper-decrement-button",onClick:T?X:void 0},i.createElement(C,{"aria-hidden":"true"})),i.createElement(c.m.div,{style:{opacity:ko},"aria-hidden":"true"},i.createElement(I,null)),i.createElement(c.m.button,{drag:!0,dragConstraints:N,dragDirectionLock:!0,dragSnapToOrigin:!0,dragElastic:{left:.3,bottom:.5,right:.3},dragMomentum:!1,dragTransition:{bounceStiffness:250,bounceDamping:15},dragListener:zo,type:"button",style:{x:p,y},"aria-label":So,"aria-live":"polite","data-testid":"numeric-stepper-thumb",onDirectionLock:Io,onDragStart:Vo,onDragEnd:Ro,onClick:h&&!L?M:void 0},i.createElement("div",{ref:x},s)),i.createElement(c.m.button,{type:"button",style:{opacity:A,color:Mo},"aria-disabled":!h,"aria-label":vo,"data-testid":"numeric-stepper-increment-button",onClick:h?M:void 0},i.createElement(V,{"aria-hidden":"true"})))))}
//# sourceMappingURL=index.js.map
