var Gt=Object.create;var x=Object.defineProperty,_t=Object.defineProperties,Jt=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,Wt=Object.getOwnPropertyNames,U=Object.getOwnPropertySymbols,Yt=Object.getPrototypeOf,Y=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable;var W=(t,o,r)=>o in t?x(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,f=(t,o)=>{for(var r in o||(o={}))Y.call(o,r)&&W(t,r,o[r]);if(U)for(var r of U(o))qt.call(o,r)&&W(t,r,o[r]);return t},d=(t,o)=>_t(t,Ut(o));var Kt=(t,o)=>{for(var r in o)x(t,r,{get:o[r],enumerable:!0})},q=(t,o,r,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of Wt(o))!Y.call(t,i)&&i!==r&&x(t,i,{get:()=>o[i],enumerable:!(s=Jt(o,i))||s.enumerable});return t};var p=(t,o,r)=>(r=t!=null?Gt(Yt(t)):{},q(o||!t||!t.__esModule?x(r,"default",{value:t,enumerable:!0}):r,t)),Qt=t=>q(x({},"__esModule",{value:!0}),t);var oe={};Kt(oe,{NumericStepper:()=>ee});module.exports=Qt(oe);var n=p(require("react")),u=require("framer-motion"),bt=p(require("textfit"));var K=require("react");function Q(){let t=(0,K.useRef)(!0);return t.current?(t.current=!1,!0):t.current}var nt=require("framer-motion");var Z=p(require("@emotion/styled")),tt=p(require("@emotion/is-prop-valid")),et=require("@emotion/react"),ot=require("framer-motion");function e(t){switch(t){case"sm":return 1;case"md":return 1.5;case"lg":return 2}}var Zt={shouldForwardProp:tt.default},rt=(0,Z.default)(ot.m.div,Zt)`
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

  ${t=>t.thumbShadowAnimationOnTrackHoverEnabled&&et.css`
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
`;function it(t,o){return(0,nt.useTransform)(t,[0,22*e(o)],[1,0])}var st=require("framer-motion");function at(t,o,r,s,i){return(0,st.useTransform)(t,[16*e(o),0,-16*e(o)],[i,r,s])}var ct=require("framer-motion");function ut(t,o,r,s,i){return(0,ct.useTransform)(t,[-16*e(o),0,16*e(o)],[i,r,s])}var mt=require("framer-motion");function lt(t,o,r,s){return(0,mt.useTransform)(t,[-110*e(o),0,110*e(o)],[s,r,s])}var P=require("framer-motion");function pt(t,o){let r=(0,P.useTransform)(t,i=>i/5.5),s=(0,P.useTransform)(o,i=>i/6.5);return{x:r,y:s}}var ft=require("framer-motion");function dt(t,o){return(0,ft.useTransform)(t,[0,62*e(o)],[0,1])}var y=p(require("react")),R=y.forwardRef((t,o)=>y.createElement("svg",d(f({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),{ref:o}),y.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M20 12H4"})));R.displayName="MinusIcon";var v=p(require("react")),V=v.forwardRef((t,o)=>v.createElement("svg",d(f({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),{ref:o}),v.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M6 18L18 6M6 6l12 12"})));V.displayName="XIcon";var h=p(require("react")),L=h.forwardRef((t,o)=>h.createElement("svg",d(f({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t),{ref:o}),h.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M12 4v16m8-8H4"})));L.displayName="PlusIcon";var te=5;function ee({minimumValue:t=0,maximumValue:o=Number.MAX_SAFE_INTEGER,stepValue:r=1,value:s,onChange:i,size:c="sm",inactiveTrackColor:E="#2b2b2b",activeTrackColor:N="#1f1f1f",hoverButtonColor:gt="transparent",activeButtonColor:xt="#ececec",inactiveIconColor:M="#858585",hoverIconColor:w="#ffffff",activeIconColor:yt="#000000",disabledIconColor:C="#383838",thumbColor:vt="#444444",thumbLabelColor:ht="#ffffff",thumbShadowAnimationOnTrackHoverEnabled:St=!0,focusRingColor:Tt="#ececec",stepIntervalSpeed:$t=300,decrementButtonAriaLabel:zt,thumbAriaLabel:Mt,incrementButtonAriaLabel:wt}){let[Ct,O]=n.useState(!0),[l,kt]=n.useState(),[A,B]=n.useState(!1),[It,X]=n.useState(0),F=n.useRef(null),S=n.useRef(null),H=Q(),b=(0,u.useMotionValue)(0),T=(0,u.useMotionValue)(0),j=it(T,c),Dt=at(b,c,M,w,C),Pt=ut(b,c,M,w,C),Rt=lt(b,c,E,N),G=pt(b,T),Vt=dt(T,c),Lt=a=>a+_(a),_=a=>It<te||a<=9?1:a<=60?Et(a):15;function Et(a){let m=a%5;return m===0?5:m===4?4:5-m}let Nt=a=>a-_(a);n.useEffect(()=>{H||i==null||i(s)},[H,i,s]),n.useLayoutEffect(()=>{S.current&&S.current.getBoundingClientRect().width&&(0,bt.default)(S.current,{detectMultiLine:!1,minFontSize:4*e(c),maxFontSize:25*e(c),widthOnly:!0})},[c,s]);let $=s-r>=t,g=s+r<=o;function k(){$&&i(Nt(s))}function Ot(){$&&i(s-1)}function z(){g&&i(Lt(s))}function At(){g&&i(s+1)}function I(){i(t)}function Bt(a){kt(a)}function Xt(){B(!0),X(0)}function Ft(a,m){O(!1),setTimeout(()=>{B(!1),O(!0)},350),l==="x"&&m.offset.x>=6*e(c)?z():l==="x"&&m.offset.x<=-6*e(c)?k():l==="y"&&m.offset.y>=2*e(c)&&I()}let Ht=n.useCallback(()=>{let a=Date.now();return(m,D)=>{let J=Date.now();J-a>$t&&(a=J,l==="x"&&D.offset.x>=6*e(c)?z():l==="x"&&D.offset.x<=-6*e(c)?k():l==="y"&&D.offset.y>=2*e(c)&&I(),X(jt=>jt+1))}},[l,z,k,I]);return n.createElement(u.LazyMotion,{features:u.domMax,strict:!0},n.createElement(rt,{size:c,inactiveTrackColor:E,activeTrackColor:N,hoverButtonColor:gt,activeButtonColor:xt,inactiveIconColor:M,hoverIconColor:w,activeIconColor:yt,disabledIconColor:C,thumbColor:vt,thumbLabelColor:ht,thumbShadowAnimationOnTrackHoverEnabled:St,focusRingColor:Tt,isDragging:A,style:{x:G.x,y:G.y,backgroundColor:Rt},"data-testid":"numeric-stepper"},n.createElement("div",{ref:F},n.createElement(u.m.button,{type:"button",style:{opacity:j,color:Dt},"aria-disabled":!$,"aria-label":zt,"data-testid":"numeric-stepper-decrement-button",onClick:$?Ot:void 0},n.createElement(R,{"aria-hidden":"true"})),n.createElement(u.m.div,{style:{opacity:Vt},"aria-hidden":"true"},n.createElement(V,null)),n.createElement(u.m.button,{drag:!0,dragConstraints:F,dragDirectionLock:!0,dragSnapToOrigin:!0,dragElastic:{left:.3,bottom:.5,right:.3},dragMomentum:!1,dragTransition:{bounceStiffness:250,bounceDamping:15},dragListener:Ct,type:"button",style:{x:b,y:T},"aria-label":Mt,"aria-live":"polite","data-testid":"numeric-stepper-thumb",onDirectionLock:Bt,onDragStart:Xt,onDrag:Ht(),onDragEnd:Ft,onClick:g&&!A?z:void 0},n.createElement("div",{ref:S},s)),n.createElement(u.m.button,{type:"button",style:{opacity:j,color:Pt},"aria-disabled":!g,"aria-label":wt,"data-testid":"numeric-stepper-increment-button",onClick:g?At:void 0},n.createElement(L,{"aria-hidden":"true"})))))}
//# sourceMappingURL=index.js.map
