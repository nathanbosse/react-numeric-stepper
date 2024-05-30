var Ft = Object.create
var x = Object.defineProperty,
  Ht = Object.defineProperties,
  jt = Object.getOwnPropertyDescriptor,
  Gt = Object.getOwnPropertyDescriptors,
  _t = Object.getOwnPropertyNames,
  J = Object.getOwnPropertySymbols,
  Ut = Object.getPrototypeOf,
  Y = Object.prototype.hasOwnProperty,
  Jt = Object.prototype.propertyIsEnumerable
var W = (t, e, r) =>
    e in t
      ? x(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r),
  f = (t, e) => {
    for (var r in e || (e = {})) Y.call(e, r) && W(t, r, e[r])
    if (J) for (var r of J(e)) Jt.call(e, r) && W(t, r, e[r])
    return t
  },
  d = (t, e) => Ht(t, Gt(e))
var Wt = (t, e) => {
    for (var r in e) x(t, r, { get: e[r], enumerable: !0 })
  },
  q = (t, e, r, s) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let i of _t(e))
        !Y.call(t, i) &&
          i !== r &&
          x(t, i, {
            get: () => e[i],
            enumerable: !(s = jt(e, i)) || s.enumerable,
          })
    return t
  }
var p = (t, e, r) => (
    (r = t != null ? Ft(Ut(t)) : {}),
    q(
      e || !t || !t.__esModule
        ? x(r, 'default', { value: t, enumerable: !0 })
        : r,
      t
    )
  ),
  Yt = (t) => q(x({}, '__esModule', { value: !0 }), t)
var to = {}
Wt(to, { NumericStepper: () => Zt })
module.exports = Yt(to)
var n = p(require('react')),
  u = require('framer-motion'),
  bt = p(require('textfit'))
var K = require('react')
function Q() {
  let t = (0, K.useRef)(!0)
  return t.current ? ((t.current = !1), !0) : t.current
}
var nt = require('framer-motion')
var Z = p(require('@emotion/styled')),
  tt = p(require('@emotion/is-prop-valid')),
  ot = require('@emotion/react'),
  et = require('framer-motion')
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
var qt = { shouldForwardProp: tt.default },
  rt = (0, Z.default)(et.m.div, qt)`
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
    ot.css`
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
function it(t, e) {
  return (0, nt.useTransform)(t, [0, 22 * o(e)], [1, 0])
}
var st = require('framer-motion')
function at(t, e, r, s, i) {
  return (0, st.useTransform)(t, [16 * o(e), 0, -16 * o(e)], [i, r, s])
}
var ct = require('framer-motion')
function ut(t, e, r, s, i) {
  return (0, ct.useTransform)(t, [-16 * o(e), 0, 16 * o(e)], [i, r, s])
}
var mt = require('framer-motion')
function lt(t, e, r, s) {
  return (0, mt.useTransform)(t, [-110 * o(e), 0, 110 * o(e)], [s, r, s])
}
var R = require('framer-motion')
function pt(t, e) {
  let r = (0, R.useTransform)(t, (i) => i / 5.5),
    s = (0, R.useTransform)(e, (i) => i / 6.5)
  return { x: r, y: s }
}
var ft = require('framer-motion')
function dt(t, e) {
  return (0, ft.useTransform)(t, [0, 62 * o(e)], [0, 1])
}
var y = p(require('react')),
  P = y.forwardRef((t, e) =>
    y.createElement(
      'svg',
      d(
        f(
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
      y.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 1,
        d: 'M20 12H4',
      })
    )
  )
P.displayName = 'MinusIcon'
var h = p(require('react')),
  E = h.forwardRef((t, e) =>
    h.createElement(
      'svg',
      d(
        f(
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
      h.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 1,
        d: 'M6 18L18 6M6 6l12 12',
      })
    )
  )
E.displayName = 'XIcon'
var v = p(require('react')),
  V = v.forwardRef((t, e) =>
    v.createElement(
      'svg',
      d(
        f(
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
      v.createElement('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 1,
        d: 'M12 4v16m8-8H4',
      })
    )
  )
V.displayName = 'PlusIcon'
var Kt = 500,
  Qt = 10
function Zt({
  minimumValue: t = 0,
  maximumValue: e = Number.MAX_SAFE_INTEGER,
  stepValue: r = 1,
  value: s,
  onChange: i,
  size: c = 'sm',
  inactiveTrackColor: L = '#2b2b2b',
  activeTrackColor: N = '#1f1f1f',
  hoverButtonColor: gt = 'transparent',
  activeButtonColor: xt = '#ececec',
  inactiveIconColor: C = '#858585',
  hoverIconColor: M = '#ffffff',
  activeIconColor: yt = '#000000',
  disabledIconColor: w = '#383838',
  thumbColor: ht = '#444444',
  thumbLabelColor: vt = '#ffffff',
  thumbShadowAnimationOnTrackHoverEnabled: St = !0,
  focusRingColor: Tt = '#ececec',
  decrementButtonAriaLabel: $t,
  thumbAriaLabel: zt,
  incrementButtonAriaLabel: Ct,
}) {
  let [Mt, A] = n.useState(!0),
    [l, wt] = n.useState(),
    [B, O] = n.useState(!1),
    [kt, X] = n.useState(0),
    F = n.useRef(null),
    S = n.useRef(null),
    H = Q(),
    b = (0, u.useMotionValue)(0),
    T = (0, u.useMotionValue)(0),
    j = it(T, c),
    It = at(b, c, C, M, w),
    Dt = ut(b, c, C, M, w),
    Rt = lt(b, c, L, N),
    G = pt(b, T),
    Pt = dt(T, c),
    Et = (a) => a + _(a),
    _ = (a) => (kt < Qt || a <= 9 ? 1 : a <= 60 ? Vt(a) : 15)
  function Vt(a) {
    let m = a % 5
    return m === 0 ? 5 : m === 4 ? 4 : 5 - m
  }
  let Lt = (a) => a - _(a)
  n.useEffect(() => {
    H || i == null || i(s)
  }, [H, i, s]),
    n.useLayoutEffect(() => {
      S.current &&
        S.current.getBoundingClientRect().width &&
        (0, bt.default)(S.current, {
          detectMultiLine: !1,
          minFontSize: 4 * o(c),
          maxFontSize: 25 * o(c),
          widthOnly: !0,
        })
    }, [c, s])
  let k = s - r >= t,
    $ = s + r <= e
  function z() {
    k && i(Lt(s))
  }
  function g() {
    $ && i(Et(s))
  }
  function I() {
    i(t)
  }
  function Nt(a) {
    wt(a)
  }
  function At() {
    O(!0), X(0)
  }
  function Bt(a, m) {
    A(!1),
      setTimeout(() => {
        O(!1), A(!0)
      }, 350),
      l === 'x' && m.offset.x >= 6 * o(c)
        ? g()
        : l === 'x' && m.offset.x <= -6 * o(c)
        ? z()
        : l === 'y' && m.offset.y >= 2 * o(c) && I()
  }
  let Ot = n.useCallback(() => {
    let a = Date.now()
    return (m, D) => {
      let U = Date.now()
      U - a > Kt &&
        ((a = U),
        l === 'x' && D.offset.x >= 6 * o(c)
          ? g()
          : l === 'x' && D.offset.x <= -6 * o(c)
          ? z()
          : l === 'y' && D.offset.y >= 2 * o(c) && I(),
        X((Xt) => Xt + 1))
    }
  }, [l, g, z, I])
  return n.createElement(
    u.LazyMotion,
    { features: u.domMax, strict: !0 },
    n.createElement(
      rt,
      {
        size: c,
        inactiveTrackColor: L,
        activeTrackColor: N,
        hoverButtonColor: gt,
        activeButtonColor: xt,
        inactiveIconColor: C,
        hoverIconColor: M,
        activeIconColor: yt,
        disabledIconColor: w,
        thumbColor: ht,
        thumbLabelColor: vt,
        thumbShadowAnimationOnTrackHoverEnabled: St,
        focusRingColor: Tt,
        isDragging: B,
        style: { x: G.x, y: G.y, backgroundColor: Rt },
        'data-testid': 'numeric-stepper',
      },
      n.createElement(
        'div',
        { ref: F },
        n.createElement(
          u.m.button,
          {
            type: 'button',
            style: { opacity: j, color: It },
            'aria-disabled': !k,
            'aria-label': $t,
            'data-testid': 'numeric-stepper-decrement-button',
            onClick: k ? z : void 0,
          },
          n.createElement(P, { 'aria-hidden': 'true' })
        ),
        n.createElement(
          u.m.div,
          { style: { opacity: Pt }, 'aria-hidden': 'true' },
          n.createElement(E, null)
        ),
        n.createElement(
          u.m.button,
          {
            drag: !0,
            dragConstraints: F,
            dragDirectionLock: !0,
            dragSnapToOrigin: !0,
            dragElastic: { left: 0.3, bottom: 0.5, right: 0.3 },
            dragMomentum: !1,
            dragTransition: { bounceStiffness: 250, bounceDamping: 15 },
            dragListener: Mt,
            type: 'button',
            style: { x: b, y: T },
            'aria-label': zt,
            'aria-live': 'polite',
            'data-testid': 'numeric-stepper-thumb',
            onDirectionLock: Nt,
            onDragStart: At,
            onDrag: Ot(),
            onDragEnd: Bt,
            onClick: $ && !B ? g : void 0,
          },
          n.createElement('div', { ref: S }, s)
        ),
        n.createElement(
          u.m.button,
          {
            type: 'button',
            style: { opacity: j, color: Dt },
            'aria-disabled': !$,
            'aria-label': Ct,
            'data-testid': 'numeric-stepper-increment-button',
            onClick: $ ? g : void 0,
          },
          n.createElement(V, { 'aria-hidden': 'true' })
        )
      )
    )
  )
}
//# sourceMappingURL=index.js.map
