var wt = Object.defineProperty,
  kt = Object.defineProperties
var It = Object.getOwnPropertyDescriptors
var G = Object.getOwnPropertySymbols
var Dt = Object.prototype.hasOwnProperty,
  Rt = Object.prototype.propertyIsEnumerable
var _ = (t, e, n) =>
    e in t
      ? wt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  l = (t, e) => {
    for (var n in e || (e = {})) Dt.call(e, n) && _(t, n, e[n])
    if (G) for (var n of G(e)) Rt.call(e, n) && _(t, n, e[n])
    return t
  },
  p = (t, e) => kt(t, It(e))
import * as r from 'react'
import {
  LazyMotion as jt,
  domMax as Gt,
  useMotionValue as ot,
  m as T,
} from 'framer-motion'
import _t from 'textfit'
import { useRef as Pt } from 'react'
function U() {
  let t = Pt(!0)
  return t.current ? ((t.current = !1), !0) : t.current
}
import { useTransform as Bt } from 'framer-motion'
import Et from '@emotion/styled'
import Vt from '@emotion/is-prop-valid'
import { css as Lt } from '@emotion/react'
import { m as Nt } from 'framer-motion'
function o(t) {
  switch (t) {
    case 'sm':
      return 1
    case 'md':
      return 1.5
    case 'lg':
      return 2
  }
}
var At = { shouldForwardProp: Vt },
  J = Et(Nt.div, At)`
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 9999px;
  box-sizing: border-box;
  width: ${(t) => 185 * o(t.size)}px;
  height: ${(t) => 74 * o(t.size)}px;
  padding: ${(t) => 7 * o(t.size)}px
    ${(t) => 17 * o(t.size)}px;
  background-color: ${(t) => t.inactiveTrackColor};

  ${(t) =>
    t.thumbShadowAnimationOnTrackHoverEnabled &&
    Lt`
      &:hover > div > button:nth-of-type(2) {
        box-shadow: 0 ${20 * o(t.size)}px
            ${25 * o(t.size)}px ${28 * o(t.size)}px
            rgb(0 0 0 / 0.1),
          0 ${1.5 * o(t.size)}px ${2 * o(t.size)}px
            ${-1 * o(t.size)}px rgb(0 0 0 / 0.5);
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
      color: ${(t) => t.hoverIconColor};

      & > svg {
        width: ${(t) => 30 * o(t.size)}px;
        height: ${(t) => 30 * o(t.size)}px;
      }
    }

    & > button {
      align-items: center;
      justify-content: center;
      display: flex;
      border: 0 solid ${(t) => t.focusRingColor};
      border-radius: 50%;
      padding: 0;
      cursor: pointer;
      appearance: none;
      outline: none;
      -webkit-tap-highlight-color: transparent;

      &:focus {
        border-width: ${(t) => 1 * o(t.size)}px;
      }

      &:focus:not(:focus-visible) {
        border-width: 0;
      }

      &:focus-visible {
        border-width: ${(t) => 1 * o(t.size)}px;
      }
    }

    & > button:nth-of-type(2n + 1) {
      transition: border-width 50ms,
        color ${(t) => (t.isDragging ? 0 : 150)}ms,
        background-color 150ms;
      width: ${(t) => 34 * o(t.size)}px;
      height: ${(t) => 34 * o(t.size)}px;
      margin: ${(t) => 5 * o(t.size)}px;
      background-color: transparent;
      color: ${(t) => t.inactiveIconColor};
      user-select: none;

      & > svg {
        width: ${(t) => 30 * o(t.size)}px;
        height: ${(t) => 30 * o(t.size)}px;
      }

      &[aria-disabled='false']:hover {
        background-color: ${(t) => t.hoverButtonColor};
        color: ${(t) => t.hoverIconColor} !important;
      }

      &[aria-disabled='false']:active {
        background-color: ${(t) => t.activeButtonColor};
        color: ${(t) => t.activeIconColor} !important;
      }

      &[aria-disabled='true'] {
        cursor: default;
        color: ${(t) => t.disabledIconColor} !important;
      }
    }

    & > button:nth-of-type(2) {
      z-index: 1;
      transition: box-shadow 150ms;
      margin: 0 ${(t) => 2 * o(t.size)}px;
      box-shadow: 0 ${(t) => 5 * o(t.size)}px
          ${(t) => 5 * o(t.size)}px
          ${(t) => -2 * o(t.size)}px rgb(0 0 0 / 0.1),
        0 ${(t) => 1.5 * o(t.size)}px
          ${(t) => 2 * o(t.size)}px
          ${(t) => -1 * o(t.size)}px rgb(0 0 0 / 0.5);
      width: ${(t) => 60 * o(t.size)}px;
      height: ${(t) => 60 * o(t.size)}px;
      background-color: ${(t) => t.thumbColor};
      color: ${(t) => t.thumbLabelColor};

      & > div {
        align-items: center;
        justify-content: center;
        display: flex;
        width: ${(t) => 46 * o(t.size)}px;
      }

      &:active {
        box-shadow: 0 ${(t) => 5 * o(t.size)}px
            ${(t) => 5 * o(t.size)}px
            ${(t) => -2 * o(t.size)}px rgb(0 0 0 / 0.1),
          0 ${(t) => 1.5 * o(t.size)}px
            ${(t) => 2 * o(t.size)}px
            ${(t) => -1 * o(t.size)}px rgb(0 0 0 / 0.5);
      }
    }
  }
`
function W(t, e) {
  return Bt(t, [0, 22 * o(e)], [1, 0])
}
import { useTransform as Ot } from 'framer-motion'
function Y(t, e, n, i, a) {
  return Ot(t, [16 * o(e), 0, -16 * o(e)], [a, n, i])
}
import { useTransform as Xt } from 'framer-motion'
function q(t, e, n, i, a) {
  return Xt(t, [-16 * o(e), 0, 16 * o(e)], [a, n, i])
}
import { useTransform as Ft } from 'framer-motion'
function K(t, e, n, i) {
  return Ft(t, [-110 * o(e), 0, 110 * o(e)], [i, n, i])
}
import { useTransform as Q } from 'framer-motion'
function Z(t, e) {
  let n = Q(t, (a) => a / 5.5),
    i = Q(e, (a) => a / 6.5)
  return { x: n, y: i }
}
import { useTransform as Ht } from 'framer-motion'
function tt(t, e) {
  return Ht(t, [0, 62 * o(e)], [0, 1])
}
import * as b from 'react'
var I = b.forwardRef((t, e) =>
  b.createElement(
    'svg',
    p(
      l(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          stroke: 'currentColor',
        },
        t
      ),
      { ref: e }
    ),
    b.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 1,
      d: 'M20 12H4',
    })
  )
)
I.displayName = 'MinusIcon'
import * as g from 'react'
var D = g.forwardRef((t, e) =>
  g.createElement(
    'svg',
    p(
      l(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          stroke: 'currentColor',
        },
        t
      ),
      { ref: e }
    ),
    g.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 1,
      d: 'M6 18L18 6M6 6l12 12',
    })
  )
)
D.displayName = 'XIcon'
import * as x from 'react'
var R = x.forwardRef((t, e) =>
  x.createElement(
    'svg',
    p(
      l(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          stroke: 'currentColor',
        },
        t
      ),
      { ref: e }
    ),
    x.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 1,
      d: 'M12 4v16m8-8H4',
    })
  )
)
R.displayName = 'PlusIcon'
var Ut = 500,
  Jt = 10
function No({
  minimumValue: t = 0,
  maximumValue: e = Number.MAX_SAFE_INTEGER,
  stepValue: n = 1,
  value: i,
  onChange: a,
  size: c = 'sm',
  inactiveTrackColor: P = '#2b2b2b',
  activeTrackColor: E = '#1f1f1f',
  hoverButtonColor: et = 'transparent',
  activeButtonColor: rt = '#ececec',
  inactiveIconColor: $ = '#858585',
  hoverIconColor: z = '#ffffff',
  activeIconColor: nt = '#000000',
  disabledIconColor: C = '#383838',
  thumbColor: it = '#444444',
  thumbLabelColor: st = '#ffffff',
  thumbShadowAnimationOnTrackHoverEnabled: at = !0,
  focusRingColor: ct = '#ececec',
  decrementButtonAriaLabel: ut,
  thumbAriaLabel: mt,
  incrementButtonAriaLabel: lt,
}) {
  let [pt, V] = r.useState(!0),
    [m, ft] = r.useState(),
    [L, N] = r.useState(!1),
    [dt, A] = r.useState(0),
    B = r.useRef(null),
    y = r.useRef(null),
    O = U(),
    f = ot(0),
    h = ot(0),
    X = W(h, c),
    bt = Y(f, c, $, z, C),
    gt = q(f, c, $, z, C),
    xt = K(f, c, P, E),
    F = Z(f, h),
    yt = tt(h, c),
    ht = (s) => s + H(s),
    H = (s) => (dt < Jt || s <= 9 ? 1 : s <= 60 ? vt(s) : 15)
  function vt(s) {
    let u = s % 5
    return u === 0 ? 5 : u === 4 ? 4 : 5 - u
  }
  let St = (s) => s - H(s)
  r.useEffect(() => {
    O || a == null || a(i)
  }, [O, a, i]),
    r.useLayoutEffect(() => {
      y.current &&
        y.current.getBoundingClientRect().width &&
        _t(y.current, {
          detectMultiLine: !1,
          minFontSize: 4 * o(c),
          maxFontSize: 25 * o(c),
          widthOnly: !0,
        })
    }, [c, i])
  let M = i - n >= t,
    v = i + n <= e
  function S() {
    M && a(St(i))
  }
  function d() {
    v && a(ht(i))
  }
  function w() {
    a(t)
  }
  function Tt(s) {
    ft(s)
  }
  function $t() {
    N(!0), A(0)
  }
  function zt(s, u) {
    V(!1),
      setTimeout(() => {
        N(!1), V(!0)
      }, 350),
      m === 'x' && u.offset.x >= 6 * o(c)
        ? d()
        : m === 'x' && u.offset.x <= -6 * o(c)
        ? S()
        : m === 'y' && u.offset.y >= 2 * o(c) && w()
  }
  let Ct = r.useCallback(() => {
    let s = Date.now()
    return (u, k) => {
      let j = Date.now()
      j - s > Ut &&
        ((s = j),
        m === 'x' && k.offset.x >= 6 * o(c)
          ? d()
          : m === 'x' && k.offset.x <= -6 * o(c)
          ? S()
          : m === 'y' && k.offset.y >= 2 * o(c) && w(),
        A((Mt) => Mt + 1))
    }
  }, [m, d, S, w])
  return r.createElement(
    jt,
    { features: Gt, strict: !0 },
    r.createElement(
      J,
      {
        size: c,
        inactiveTrackColor: P,
        activeTrackColor: E,
        hoverButtonColor: et,
        activeButtonColor: rt,
        inactiveIconColor: $,
        hoverIconColor: z,
        activeIconColor: nt,
        disabledIconColor: C,
        thumbColor: it,
        thumbLabelColor: st,
        thumbShadowAnimationOnTrackHoverEnabled: at,
        focusRingColor: ct,
        isDragging: L,
        style: { x: F.x, y: F.y, backgroundColor: xt },
        'data-testid': 'numeric-stepper',
      },
      r.createElement(
        'div',
        { ref: B },
        r.createElement(
          T.button,
          {
            type: 'button',
            style: { opacity: X, color: bt },
            'aria-disabled': !M,
            'aria-label': ut,
            'data-testid': 'numeric-stepper-decrement-button',
            onClick: M ? S : void 0,
          },
          r.createElement(I, { 'aria-hidden': 'true' })
        ),
        r.createElement(
          T.div,
          { style: { opacity: yt }, 'aria-hidden': 'true' },
          r.createElement(D, null)
        ),
        r.createElement(
          T.button,
          {
            drag: !0,
            dragConstraints: B,
            dragDirectionLock: !0,
            dragSnapToOrigin: !0,
            dragElastic: { left: 0.3, bottom: 0.5, right: 0.3 },
            dragMomentum: !1,
            dragTransition: { bounceStiffness: 250, bounceDamping: 15 },
            dragListener: pt,
            type: 'button',
            style: { x: f, y: h },
            'aria-label': mt,
            'aria-live': 'polite',
            'data-testid': 'numeric-stepper-thumb',
            onDirectionLock: Tt,
            onDragStart: $t,
            onDrag: Ct(),
            onDragEnd: zt,
            onClick: v && !L ? d : void 0,
          },
          r.createElement('div', { ref: y }, i)
        ),
        r.createElement(
          T.button,
          {
            type: 'button',
            style: { opacity: X, color: gt },
            'aria-disabled': !v,
            'aria-label': lt,
            'data-testid': 'numeric-stepper-increment-button',
            onClick: v ? d : void 0,
          },
          r.createElement(R, { 'aria-hidden': 'true' })
        )
      )
    )
  )
}
export { No as NumericStepper }
//# sourceMappingURL=index.js.map
