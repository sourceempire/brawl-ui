import D, { useRef as Te, useEffect as Se, useState as De } from "react";
var ee = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function pr() {
  if (je)
    return I;
  je = 1;
  var t = D, a = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(v, m, x) {
    var _, w = {}, P = null, W = null;
    x !== void 0 && (P = "" + x), m.key !== void 0 && (P = "" + m.key), m.ref !== void 0 && (W = m.ref);
    for (_ in m)
      i.call(m, _) && !d.hasOwnProperty(_) && (w[_] = m[_]);
    if (v && v.defaultProps)
      for (_ in m = v.defaultProps, m)
        w[_] === void 0 && (w[_] = m[_]);
    return { $$typeof: a, type: v, key: P, ref: W, props: w, _owner: u.current };
  }
  return I.Fragment = o, I.jsx = g, I.jsxs = g, I;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function br() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var t = D, a = Symbol.for("react.element"), o = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), v = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), te = Symbol.iterator, Ie = "@@iterator";
    function $e(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[Ie];
      return typeof r == "function" ? r : null;
    }
    var F = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          n[s - 1] = arguments[s];
        We("error", e, n);
      }
    }
    function We(e, r, n) {
      {
        var s = F.ReactDebugCurrentFrame, f = s.getStackAddendum();
        f !== "" && (r += "%s", n = n.concat([f]));
        var h = n.map(function(l) {
          return String(l);
        });
        h.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var Le = !1, Be = !1, Ve = !1, Ue = !1, ze = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Je(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === d || ze || e === u || e === x || e === _ || Ue || e === W || Le || Be || Ve || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === w || e.$$typeof === g || e.$$typeof === v || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function He(e, r, n) {
      var s = e.displayName;
      if (s)
        return s;
      var f = r.displayName || r.name || "";
      return f !== "" ? n + "(" + f + ")" : n;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case o:
          return "Portal";
        case d:
          return "Profiler";
        case u:
          return "StrictMode";
        case x:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return ae(r) + ".Consumer";
          case g:
            var n = e;
            return ae(n._context) + ".Provider";
          case m:
            return He(e, e.render, "ForwardRef");
          case w:
            var s = e.displayName || null;
            return s !== null ? s : T(e.type) || "Memo";
          case P: {
            var f = e, h = f._payload, l = f._init;
            try {
              return T(l(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, Y = 0, oe, ie, se, ue, ce, le, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function qe() {
      {
        if (Y === 0) {
          oe = console.log, ie = console.info, se = console.warn, ue = console.error, ce = console.group, le = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Y++;
      }
    }
    function Ge() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: oe
            }),
            info: k({}, e, {
              value: ie
            }),
            warn: k({}, e, {
              value: se
            }),
            error: k({}, e, {
              value: ue
            }),
            group: k({}, e, {
              value: ce
            }),
            groupCollapsed: k({}, e, {
              value: le
            }),
            groupEnd: k({}, e, {
              value: fe
            })
          });
        }
        Y < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = F.ReactCurrentDispatcher, H;
    function L(e, r, n) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (f) {
            var s = f.stack.trim().match(/\n( *(at )?)/);
            H = s && s[1] || "";
          }
        return `
` + H + e;
      }
    }
    var q = !1, B;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ke();
    }
    function ve(e, r) {
      if (!e || q)
        return "";
      {
        var n = B.get(e);
        if (n !== void 0)
          return n;
      }
      var s;
      q = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = J.current, J.current = null, qe();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (S) {
              s = S;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (S) {
              s = S;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            s = S;
          }
          e();
        }
      } catch (S) {
        if (S && s && typeof S.stack == "string") {
          for (var c = S.stack.split(`
`), R = s.stack.split(`
`), y = c.length - 1, p = R.length - 1; y >= 1 && p >= 0 && c[y] !== R[p]; )
            p--;
          for (; y >= 1 && p >= 0; y--, p--)
            if (c[y] !== R[p]) {
              if (y !== 1 || p !== 1)
                do
                  if (y--, p--, p < 0 || c[y] !== R[p]) {
                    var O = `
` + c[y].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, O), O;
                  }
                while (y >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        q = !1, J.current = h, Ge(), Error.prepareStackTrace = f;
      }
      var N = e ? e.displayName || e.name : "", Oe = N ? L(N) : "";
      return typeof e == "function" && B.set(e, Oe), Oe;
    }
    function Xe(e, r, n) {
      return ve(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ze(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case x:
          return L("Suspense");
        case _:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return Xe(e.render);
          case w:
            return V(e.type, r, n);
          case P: {
            var s = e, f = s._payload, h = s._init;
            try {
              return V(h(f), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, he = {}, me = F.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, n = V(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(n);
      } else
        me.setExtraStackFrame(null);
    }
    function Qe(e, r, n, s, f) {
      {
        var h = Function.call.bind(U);
        for (var l in e)
          if (h(e, l)) {
            var c = void 0;
            try {
              if (typeof e[l] != "function") {
                var R = Error((s || "React class") + ": " + n + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              c = e[l](r, l, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              c = y;
            }
            c && !(c instanceof Error) && (z(f), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, l, typeof c), z(null)), c instanceof Error && !(c.message in he) && (he[c.message] = !0, z(f), E("Failed %s type: %s", n, c.message), z(null));
          }
      }
    }
    var er = Array.isArray;
    function G(e) {
      return er(e);
    }
    function rr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function tr(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function _e(e) {
      if (tr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), ge(e);
    }
    var A = F.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, pe, K;
    K = {};
    function ar(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ir(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var n = T(A.current.type);
        K[n] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(A.current.type), e.ref), K[n] = !0);
      }
    }
    function sr(e, r) {
      {
        var n = function() {
          ye || (ye = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function ur(e, r) {
      {
        var n = function() {
          pe || (pe = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, n, s, f, h, l) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: l,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function lr(e, r, n, s, f) {
      {
        var h, l = {}, c = null, R = null;
        n !== void 0 && (_e(n), c = "" + n), or(r) && (_e(r.key), c = "" + r.key), ar(r) && (R = r.ref, ir(r, f));
        for (h in r)
          U.call(r, h) && !nr.hasOwnProperty(h) && (l[h] = r[h]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (h in y)
            l[h] === void 0 && (l[h] = y[h]);
        }
        if (c || R) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && sr(l, p), R && ur(l, p);
        }
        return cr(e, c, R, f, s, A.current, l);
      }
    }
    var X = F.ReactCurrentOwner, be = F.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, n = V(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(n);
      } else
        be.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function we() {
      {
        if (X.current) {
          var e = T(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function fr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function dr(e) {
      {
        var r = we();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = dr(r);
        if (Ee[n])
          return;
        Ee[n] = !0;
        var s = "";
        e && e._owner && e._owner !== X.current && (s = " It was passed a child from " + T(e._owner.type) + "."), M(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), M(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            Q(s) && Re(s, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = $e(e);
          if (typeof f == "function" && f !== e.entries)
            for (var h = f.call(e), l; !(l = h.next()).done; )
              Q(l.value) && Re(l.value, r);
        }
      }
    }
    function vr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          n = r.propTypes;
        else
          return;
        if (n) {
          var s = T(r);
          Qe(n, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var f = T(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var s = r[n];
          if (s !== "children" && s !== "key") {
            M(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), M(null);
            break;
          }
        }
        e.ref !== null && (M(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
      }
    }
    function xe(e, r, n, s, f, h) {
      {
        var l = Je(e);
        if (!l) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = fr(f);
          R ? c += R : c += we();
          var y;
          e === null ? y = "null" : G(e) ? y = "array" : e !== void 0 && e.$$typeof === a ? (y = "<" + (T(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, c);
        }
        var p = lr(e, r, n, f, h);
        if (p == null)
          return p;
        if (l) {
          var O = r.children;
          if (O !== void 0)
            if (s)
              if (G(O)) {
                for (var N = 0; N < O.length; N++)
                  Ce(O[N], e);
                Object.freeze && Object.freeze(O);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(O, e);
        }
        return e === i ? hr(p) : vr(p), p;
      }
    }
    function mr(e, r, n) {
      return xe(e, r, n, !0);
    }
    function gr(e, r, n) {
      return xe(e, r, n, !1);
    }
    var _r = gr, yr = mr;
    $.Fragment = i, $.jsx = _r, $.jsxs = yr;
  }()), $;
}
process.env.NODE_ENV === "production" ? ee.exports = pr() : ee.exports = br();
var C = ee.exports;
const wr = "_button_olbu3_1", Er = "_primary_olbu3_10", Rr = "_accent_olbu3_22", Cr = "_secondary_olbu3_35", xr = "_surfaceSecondary_olbu3_47", ke = {
  button: wr,
  primary: Er,
  accent: Rr,
  secondary: Cr,
  surfaceSecondary: xr
};
function Or({ children: t, className: a, variant: o = "secondary", onClick: i }) {
  return /* @__PURE__ */ C.jsx("button", { className: `${ke.button} ${ke[o]} ${a}`, onClick: i, children: t });
}
function Tr({ month: t, year: a }) {
  const o = [], i = new Date(a, t, 1), u = new Date(a, t + 1, 0), d = new Date(i);
  d.setDate(d.getDate() - (d.getDay() + 6) % 7);
  let g;
  u.getDay() === 0 ? g = new Date(u) : (g = new Date(u), g.setDate(g.getDate() + (7 - g.getDay())));
  for (let v = new Date(d); v <= g; v.setDate(v.getDate() + 1))
    o.push({
      isInMonth: v >= i && v <= u,
      date: new Date(v)
    });
  return o;
}
const Sr = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], Dr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function Fe(t, a) {
  return t.getDate() === a.getDate() && t.getMonth() === a.getMonth() && t.getFullYear() === a.getFullYear();
}
function jr(t, a) {
  const o = new Date(t), i = new Date(a);
  return o.setHours(0, 0, 0, 0), i.setHours(0, 0, 0, 0), o < i;
}
function Pr(t, a) {
  const o = new Date(t), i = new Date(a);
  return o.setHours(0, 0, 0, 0), i.setHours(0, 0, 0, 0), o > i;
}
function kr(t, a) {
  return t.getFullYear() < a.getFullYear() || t.getFullYear() === a.getFullYear() && t.getMonth() <= a.getMonth();
}
function Fr(t, a) {
  return t.getFullYear() > a.getFullYear() || t.getFullYear() === a.getFullYear() && t.getMonth() >= a.getMonth();
}
function Mr(t) {
  return `${t.getDate()}-${t.getMonth()}`;
}
function Nr(t) {
  return (t ?? /* @__PURE__ */ new Date()).getFullYear();
}
function Yr(t) {
  return (t ?? /* @__PURE__ */ new Date()).getMonth();
}
function Ar({ selectedDate: t, disableBefore: a, disableAfter: o, onChange: i }) {
  const u = Te(i), d = Te(t);
  Se(() => {
    u.current = i, d.current = t;
  }, [i, t]), Se(() => {
    if (!d.current)
      return;
    const g = a && d.current < a, v = o && d.current > o;
    (g || v) && u.current(null);
  }, [a, o]);
}
function Ir({ initialDate: t }) {
  const [a, o] = De(Nr(t)), [i, u] = De(Yr(t)), d = (m) => {
    u((x) => {
      const _ = x + m;
      return _ > 11 ? (o((w) => w + 1), 0) : _ < 0 ? (o((w) => w - 1), 11) : _;
    });
  };
  return {
    shownYear: a,
    shownMonth: i,
    incrementMonth: () => {
      d(1);
    },
    decrementMonth: () => {
      d(-1);
    }
  };
}
var Ne = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Me = D.createContext && D.createContext(Ne), j = globalThis && globalThis.__assign || function() {
  return j = Object.assign || function(t) {
    for (var a, o = 1, i = arguments.length; o < i; o++) {
      a = arguments[o];
      for (var u in a)
        Object.prototype.hasOwnProperty.call(a, u) && (t[u] = a[u]);
    }
    return t;
  }, j.apply(this, arguments);
}, $r = globalThis && globalThis.__rest || function(t, a) {
  var o = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) && a.indexOf(i) < 0 && (o[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, i = Object.getOwnPropertySymbols(t); u < i.length; u++)
      a.indexOf(i[u]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[u]) && (o[i[u]] = t[i[u]]);
  return o;
};
function Ye(t) {
  return t && t.map(function(a, o) {
    return D.createElement(a.tag, j({
      key: o
    }, a.attr), Ye(a.child));
  });
}
function Ae(t) {
  return function(a) {
    return D.createElement(Wr, j({
      attr: j({}, t.attr)
    }, a), Ye(t.child));
  };
}
function Wr(t) {
  var a = function(o) {
    var i = t.attr, u = t.size, d = t.title, g = $r(t, ["attr", "size", "title"]), v = u || o.size || "1em", m;
    return o.className && (m = o.className), t.className && (m = (m ? m + " " : "") + t.className), D.createElement("svg", j({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, o.attr, i, g, {
      className: m,
      style: j(j({
        color: t.color || o.color
      }, o.style), t.style),
      height: v,
      width: v,
      xmlns: "http://www.w3.org/2000/svg"
    }), d && D.createElement("title", null, d), t.children);
  };
  return Me !== void 0 ? D.createElement(Me.Consumer, null, function(o) {
    return a(o);
  }) : a(Ne);
}
function Lr(t) {
  return Ae({ tag: "svg", attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" } }] })(t);
}
function Br(t) {
  return Ae({ tag: "svg", attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" } }] })(t);
}
function re(t) {
  return Object.entries(t).filter((a) => a[1]).map((a) => a[0]).join(" ");
}
const Vr = "_calendar_afe1x_1", Ur = "_monthAndYear_afe1x_5", zr = "_arrowContainer_afe1x_13", Jr = "_arrow_afe1x_13", Hr = "_dayName_afe1x_32", qr = "_dates_afe1x_41", Gr = "_date_afe1x_41", Kr = "_today_afe1x_58", Xr = "_disabled_afe1x_62", Zr = "_selected_afe1x_72", Qr = "_hidden_afe1x_82", et = "_clearButton_afe1x_87", b = {
  calendar: Vr,
  monthAndYear: Ur,
  arrowContainer: zr,
  arrow: Jr,
  dayName: Hr,
  dates: qr,
  date: Gr,
  today: Kr,
  disabled: Xr,
  selected: Zr,
  hidden: Qr,
  clearButton: et
};
function rt({ selectedDate: t, disableBefore: a, disableAfter: o, onChange: i }) {
  Ar({ selectedDate: t, disableAfter: o, disableBefore: a, onChange: i });
  const { incrementMonth: u, decrementMonth: d, shownMonth: g, shownYear: v } = Ir({ initialDate: t }), m = Tr({ month: g, year: v });
  return /* @__PURE__ */ C.jsxs("div", { className: b.calendar, children: [
    /* @__PURE__ */ C.jsxs("div", { className: b.monthAndYear, children: [
      /* @__PURE__ */ C.jsx("div", { className: nt({ shownMonth: g, shownYear: v, disableBefore: a }), onClick: d, children: /* @__PURE__ */ C.jsx(Lr, { className: b.arrow }) }),
      /* @__PURE__ */ C.jsxs("div", { children: [
        Dr[g],
        " ",
        v
      ] }),
      /* @__PURE__ */ C.jsx("div", { className: at({ shownMonth: g, shownYear: v, disableAfter: o }), onClick: u, children: /* @__PURE__ */ C.jsx(Br, { className: b.arrow }) })
    ] }),
    /* @__PURE__ */ C.jsx("div", { className: b.dates, children: Array.from({ length: 7 }).map((x, _) => /* @__PURE__ */ C.jsx("div", { className: b.dayName, children: Sr[_] })) }),
    /* @__PURE__ */ C.jsx("div", { className: b.dates, children: m.map(({ date: x, isInMonth: _ }) => {
      const w = tt({
        isInMonth: _,
        date: x,
        selectedDate: t,
        disableBefore: a,
        disableAfter: o
      });
      return /* @__PURE__ */ C.jsx("div", { className: w, onClick: () => i(x), children: x.getDate() }, Mr(x));
    }) }),
    /* @__PURE__ */ C.jsx(Or, { className: b.clearButton, onClick: () => i(null), children: "Clear" })
  ] });
}
function tt({ isInMonth: t, date: a, selectedDate: o, disableBefore: i, disableAfter: u }) {
  const d = Fe(a, /* @__PURE__ */ new Date()), g = o ? Fe(a, o) : !1, v = (i ? jr(a, i) : !1) || (u ? Pr(a, u) : !1);
  return re({
    [b.date]: !0,
    // Always include styles.date
    [b.disabled]: v,
    [b.hidden]: !t,
    [b.today]: d,
    [b.selected]: g
  });
}
function nt(t) {
  const { disableBefore: a, shownYear: o, shownMonth: i } = t, u = new Date(o, i, 1), d = a ? kr(u, a) : !1;
  return re({
    [b.arrowContainer]: !0,
    [b.hidden]: d
  });
}
function at(t) {
  const { disableAfter: a, shownYear: o, shownMonth: i } = t, u = new Date(o, i + 1, 0), d = a ? Fr(u, a) : !1;
  return re({
    [b.arrowContainer]: !0,
    [b.hidden]: d
  });
}
const ot = "_datePicker_p8sw6_1", it = {
  datePicker: ot
};
function ut({ selectedDate: t, disableBefore: a, disableAfter: o, onChange: i }) {
  return /* @__PURE__ */ C.jsx("div", { className: it.datePicker, children: /* @__PURE__ */ C.jsx(rt, { selectedDate: t, disableBefore: a, disableAfter: o, onChange: i }) });
}
export {
  Or as Button,
  Lr as ChevronLeft,
  Br as ChevronRight,
  ut as DatePicker
};
