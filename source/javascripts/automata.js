!(function(t) {
  var n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var c = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(c.exports, c, c.exports, e), (c.l = !0), c.exports;
  }
  (e.m = t),
    (e.c = n),
    (e.d = function(t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
    }),
    (e.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.t = function(t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var c in t)
          e.d(
            r,
            c,
            function(n) {
              return t[n];
            }.bind(null, c)
          );
      return r;
    }),
    (e.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function(t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = ""),
    e((e.s = 19));
})([
  function(t, n, e) {
    "use strict";
    e.d(n, "b", function() {
      return i;
    }),
      e.d(n, "c", function() {
        return f;
      }),
      e.d(n, "a", function() {
        return a;
      });
    var r = e(29),
      c = e(27),
      u = e(2),
      o = e(5);
    function* i(t, n) {
      const e = t(Object(o.a)()),
        r = e[1],
        c = e[2];
      for (let t of n) {
        const n = c([], t);
        if (Object(u.c)(n)) return void (yield* Object(u.e)(r(n.deref())));
        n.length && (yield* n);
      }
      yield* Object(u.e)(r([]));
    }
    function* f(t, n) {
      const e = t([null, null, (t, n) => n])[2];
      for (let t of n) {
        let n = e(r.b, t);
        if (Object(u.c)(n))
          return void ((n = Object(u.e)(n.deref())) !== r.b && (yield n));
        n !== r.b && (yield n);
      }
    }
    const a = (t, n, e = f) => {
      const r = n.length - 1;
      return Object(c.a)(n[r])
        ? n.length > 1
          ? e(t.apply(null, n.slice(0, r)), n[r])
          : e(t(), n[0])
        : void 0;
    };
  },
  function(t, n, e) {
    "use strict";
    e.d(n, "b", function() {
      return f;
    }),
      e.d(n, "c", function() {
        return a;
      }),
      e.d(n, "a", function() {
        return s;
      });
    var r = e(25),
      c = e(26),
      u = e(27),
      o = e(24),
      i = e(2);
    function f(...t) {
      let n, e;
      switch (t.length) {
        case 3:
          (e = t[2]), (n = t[1]);
          break;
        case 2:
          e = t[1];
          break;
        default:
          Object(o.a)(t.length);
      }
      const u = t[0],
        f = u[0],
        a = u[1],
        s = u[2];
      if (((n = null == n ? f() : n), Object(r.a)(e, "$reduce")))
        n = e.$reduce(s, n);
      else if (Object(c.a)(e)) {
        for (let t = 0, r = e.length; t < r; t++)
          if (((n = s(n, e[t])), Object(i.c)(n))) {
            n = n.deref();
            break;
          }
      } else
        for (let t of e)
          if (((n = s(n, t)), Object(i.c)(n))) {
            n = n.deref();
            break;
          }
      return Object(i.e)(a(n));
    }
    const a = (t, n) => [t, t => t, n],
      s = (t, n) => {
        const e = n.length - 1;
        return Object(u.a)(n[e])
          ? n.length > 1
            ? f(t.apply(null, n.slice(0, e)), n[e])
            : f(t(), n[0])
          : void 0;
      };
  },
  function(t, n, e) {
    "use strict";
    e.d(n, "a", function() {
      return r;
    }),
      e.d(n, "d", function() {
        return c;
      }),
      e.d(n, "c", function() {
        return u;
      }),
      e.d(n, "b", function() {
        return o;
      }),
      e.d(n, "e", function() {
        return i;
      });
    class r {
      constructor(t) {
        this.value = t;
      }
      deref() {
        return this.value;
      }
    }
    const c = t => new r(t),
      u = t => t instanceof r,
      o = t => (t instanceof r ? t : new r(t)),
      i = t => (t instanceof r ? t.deref() : t);
  },
  function(t, n, e) {
    "use strict";
    e.d(n, "a", function() {
      return r;
    });
    const r = (t, n) => [t[0], t[1], n];
  },
  function(t, n, e) {
    "use strict";
    e.d(n, "a", function() {
      return u;
    });
    var r = e(3),
      c = e(0);
    function u(t, n) {
      return n
        ? Object(c.c)(u(t), n)
        : n => {
            const e = n[2];
            return Object(r.a)(n, (n, r) => e(n, t(r)));
          };
    }
  },
  function(t, n, e) {
    "use strict";
    e.d(n, "a", function() {
      return c;
    });
    var r = e(1);
    function c(t) {
      return t ? [...t] : Object(r.c)(() => [], (t, n) => (t.push(n), t));
    }
  },
  ,
  function(t, n, e) {
    "use strict";
    var r = e(24);
    function c(...t) {
      let [n, e, u, o, i, f, a, s, l, d] = t;
      switch (t.length) {
        case 0:
          Object(r.a)(0);
        case 1:
          return n;
        case 2:
          return (...t) => n(e(...t));
        case 3:
          return (...t) => n(e(u(...t)));
        case 4:
          return (...t) => n(e(u(o(...t))));
        case 5:
          return (...t) => n(e(u(o(i(...t)))));
        case 6:
          return (...t) => n(e(u(o(i(f(...t))))));
        case 7:
          return (...t) => n(e(u(o(i(f(a(...t)))))));
        case 8:
          return (...t) => n(e(u(o(i(f(a(s(...t))))))));
        case 9:
          return (...t) => n(e(u(o(i(f(a(s(l(...t)))))))));
        case 10:
        default:
          const b = (...t) => n(e(u(o(i(f(a(s(l(d(...t))))))))));
          return 10 === t.length ? b : c(b, ...t.slice(10));
      }
    }
    function u(...t) {
      return c.apply(null, t);
    }
    e.d(n, "a", function() {
      return u;
    });
  },
  ,
  ,
  ,
  function(t, n, e) {
    "use strict";
    e.r(n);
    var r = e(0),
      c = e(1),
      u = e(2),
      o = e(29),
      i = e(24),
      f = e(4);
    function a(...t) {
      let n, e;
      switch (t.length) {
        case 4:
          (e = t[3]), (n = t[2]);
          break;
        case 3:
          e = t[2];
          break;
        case 2:
          return Object(f.a)(n => a(t[0], t[1], n));
        default:
          Object(i.a)(t.length);
      }
      return Object(c.b)(t[0](t[1]), n, e);
    }
    const s = [o.a, o.a, o.a];
    function l(t, ...n) {
      if (1 === n.length) a(t, s, n[0]);
      else {
        const e = n[0];
        a(t, [o.a, o.a, (t, n) => e(n)], n[1]);
      }
    }
    var d = e(5);
    const b = t => {
      const [n, e, r] = t(Object(d.a)());
      let c = !1;
      return t => {
        if (!c) {
          let n = r([], t);
          return (
            (c = Object(u.c)(n)) && (n = e(n.deref())),
            1 === n.length ? n[0] : n.length > 0 ? n : void 0
          );
        }
      };
    };
    function O(...t) {
      const n = Object(c.a)(O, t);
      if (void 0 !== n) return n;
      const e = t[0] || 0;
      return Object(c.c)(() => e, (t, n) => t + n);
    }
    function j(t) {
      return t
        ? Object(c.b)(j(), t)
        : Object(c.c)(() => new Map(), (t, [n, e]) => t.set(n, e));
    }
    function h(t) {
      return t
        ? Object(c.b)(h(), t)
        : Object(c.c)(() => new Object(), (t, [n, e]) => ((t[n] = e), t));
    }
    function p(t) {
      return t
        ? Object(c.b)(p(), t)
        : Object(c.c)(() => new Set(), (t, n) => t.add(n));
    }
    function g(...t) {
      const n = Object(c.a)(g, t);
      if (void 0 !== n) return n;
      let e = t[0] || 0,
        r = t[1] || 1;
      return Object(c.c)(() => e, (t, n) => t + r);
    }
    function y(t, n) {
      return n ? Object(c.b)(y(t), n) : Object(c.c)(() => t, (t, n) => t / n);
    }
    function m(...t) {
      const n = Object(c.a)(m, t);
      if (void 0 !== n) return n;
      const e = t[0];
      return Object(c.c)(
        () => !0,
        e
          ? (t, n) => (e(n) ? t : Object(u.d)(!1))
          : (t, n) => (n ? t : Object(u.d)(!1))
      );
    }
    function v(...t) {
      const n = Object(c.a)(v, t);
      if (void 0 !== n) return n;
      let e = t[0] || 0;
      return Object(c.c)(() => [], (t, n) => ((t[e++] = n), t));
    }
    function k(...t) {
      return v(...t);
    }
    const w = t => t;
    function A(...t) {
      const n = Object(c.a)(A, t);
      if (void 0 !== n) return n;
      const e = Object.assign({ key: w, group: Object(d.a)() }, t[0]),
        [r, u, o] = e.group;
      return Object(c.c)(
        () => new Map(),
        (t, n) => {
          const c = e.key(n);
          return t.set(c, t.has(c) ? o(t.get(c), n) : o(r(), n));
        }
      );
    }
    function S(...t) {
      return Object(c.a)(S, t) || A({ key: t[0] || w, group: g() });
    }
    function _(...t) {
      const n = Object(c.a)(_, t);
      if (n) return n;
      const e = Object.assign({ key: w, group: Object(d.a)() }, t[0]),
        [r, u, o] = e.group;
      return Object(c.c)(
        () => ({}),
        (t, n) => {
          const c = e.key(n);
          return (t[c] = t[c] ? o(t[c], n) : o(r(), n)), t;
        }
      );
    }
    const R = (t, n, e, r) => c => (t(c) & n ? r : e),
      x = (t, n, e, r, c = "l", u = "r") => {
        const o = e || (() => ({}));
        let i = _({ key: R(n, 1, c, u), group: r || Object(d.a)() });
        for (let e = 2, r = 1 << t; e < r; e <<= 1)
          i = _({ key: R(n, e, c, u), group: [o, i[1], i[2]] });
        return [o, i[1], i[2]];
      };
    function M(t) {
      return t ? Object(c.b)(M(), t) : Object(c.c)(() => void 0, (t, n) => n);
    }
    const T = (t, n) =>
      t === n
        ? 0
        : null == t
          ? null == n
            ? 0
            : -1
          : null == n
            ? null == t
              ? 0
              : 1
            : "function" == typeof t.compare
              ? t.compare(n)
              : "function" == typeof n.compare
                ? -n.compare(t)
                : t < n
                  ? -1
                  : t > n
                    ? 1
                    : 0;
    function $(...t) {
      const n = Object(c.a)($, t);
      if (void 0 !== n) return n;
      const e = t[0],
        r = t[1] || T;
      return Object(c.c)(e, (t, n) => (r(t, n) >= 0 ? t : n));
    }
    function C(t) {
      return t
        ? Object(c.b)(C(), t)
        : Object(c.c)(() => -1 / 0, (t, n) => Math.max(t, n));
    }
    function I(t) {
      let n = 0;
      return t
        ? Object(c.b)(I(), t)
        : [() => 0, t => t / n, (t, e) => (n++, t + e)];
    }
    function P(...t) {
      const n = Object(c.a)(P, t);
      if (void 0 !== n) return n;
      const e = t[0],
        r = t[1] || T;
      return Object(c.c)(e, (t, n) => (r(t, n) <= 0 ? t : n));
    }
    function E(t) {
      return t
        ? Object(c.b)(E(), t)
        : Object(c.c)(() => 1 / 0, (t, n) => Math.min(t, n));
    }
    function N(...t) {
      const n = Object(c.a)(N, t);
      if (void 0 !== n) return n;
      const e = t[0] || 1;
      return Object(c.c)(() => e, (t, n) => t * n);
    }
    const F = () =>
      Object(c.c)(() => [], (t, n) => ((t = t.slice()).push(n), t));
    function U(t, n) {
      const [e, r, o] = t;
      return n
        ? Object(c.b)(U(t), n)
        : [
            () => [e()],
            t => ((t[t.length - 1] = r(t[t.length - 1])), t),
            (t, n) => {
              const e = o(t[t.length - 1], n);
              return Object(u.c)(e)
                ? (t.push(e.deref()), Objectt => "　█"(u.d)(t))
                : (t.push(e), t);
            }
          ];
    }
    function Y(...t) {
      const n = Object(c.a)(Y, t);
      if (void 0 !== n) return n;
      const e = t[0];
      return Object(c.c)(
        () => !1,
        e
          ? (t, n) => (e(n) ? Object(u.d)(!0) : t)
          : (t, n) => (n ? Object(u.d)(!0) : t)
      );
    }
    function D(t, n) {
      t = t || "";
      let e = !0;
      return n
        ? [...n].join(t)
        : Object(c.c)(
            () => "",
            (n, r) => ((n = e ? n + r : n + t + r), (e = !1), n)
          );
    }
    function z(...t) {
      const n = Object(c.a)(z, t);
      if (void 0 !== n) return n;
      const e = t[0] || 0;
      return Object(c.c)(() => e, (t, n) => t - n);
    }
    var L = e(3);
    function G(t) {
      return t
        ? Object(r.c)(G(), t)
        : t => {
            const n = t[2];
            let e = Date.now();
            return Object(L.a)(t, (t, r) => {
              const c = Date.now(),
                u = c - e;
              return (e = c), n(t, u);
            });
          };
    }
    const B = () => t => {
      const n = t[2];
      return Object(L.a)(t, (t, e) => {
        if (e)
          for (let r of Object(u.e)(e))
            if (((t = n(t, r)), Object(u.c)(t))) break;
        return Object(u.c)(e) ? Object(u.b)(t) : t;
      });
    };
    function q(...t) {
      return (
        Object(r.a)(q, t) ||
        (n => {
          const e = n[2],
            r = t[0];
          let c = o.b,
            i = !1;
          return Object(L.a)(
            n,
            (t, n) =>
              i || (c !== o.b && r(c, n))
                ? ((i = !0), Object(u.b)(e(t, n)))
                : ((c = n), e(t, n))
          );
        })
      );
    }
    var V = e(30);
    function W(t, n, e) {
      return new K(t, n, e);
    }
    class K {
      constructor(t, n, e) {
        void 0 === t
          ? ((t = 0), (n = 1 / 0))
          : void 0 === n && ((n = t), (t = 0)),
          (e = void 0 === e ? (t < n ? 1 : -1) : e),
          (this.from = t),
          (this.to = n),
          (this.step = e);
      }
      *[Symbol.iterator]() {
        const t = this.step,
          n = this.to;
        let e = this.from;
        if (t > 0) for (; e < n; ) yield e, (e += t);
        else if (t < 0) for (; e > n; ) yield e, (e += t);
      }
      $reduce(t, n) {
        const e = this.step;
        if (e > 0)
          for (let r = this.from, c = this.to; r < c && !Object(u.c)(n); r += e)
            n = t(n, r);
        else
          for (let r = this.from, c = this.to; r > c && !Object(u.c)(n); r += e)
            n = t(n, r);
        return n;
      }
    }
    function* H(...t) {
      let n, e, r, c, u, o;
      switch (t.length) {
        case 6:
          (u = t[4]), (o = t[5]);
        case 4:
          [n, e, r, c] = t;
          break;
        case 2:
          ([e, c] = t), (n = r = 0);
          break;
        default:
          Object(i.a)(t.length);
      }
      const f = W(n, e, u);
      for (let t of W(r, c, o)) for (let n of f) yield [n, t];
    }
    function* X(...t) {
      const n = t.map(t => t[Symbol.iterator]());
      for (;;) {
        const t = [];
        for (let e of n) {
          let n = e.next();
          if (n.done) return;
          t.push(n.value);
        }
        yield t;
      }
    }
    const J = X,
      Q = (t, n) => {
        const e = n >> 1;
        return [...X(t, W(-e, e + 1))];
      },
      Z = (t, n, e) => {
        const r = n >> 1,
          c = e >> 1;
        return [...X(t, H(-r, r + 1, -c, c + 1))];
      },
      tt = (t, n, e, r, c) =>
        r
          ? ([r, c]) => {
              return r * t[n < -c ? e + c : n >= e - c ? c - 1 : n + c];
            }
          : ([r, u]) => (n < -u || n >= e - u ? c : r * t[n + u]),
      nt = (t, n, e, r, c, u, o) =>
        u
          ? ([u, [o, i]]) => {
              return (
                u *
                t[
                  (e < -i ? c + i : e >= c - i ? i - 1 : e + i) * r +
                    (n < -o ? r + o : n >= r - o ? o - 1 : n + o)
                ]
              );
            }
          : ([u, [i, f]]) =>
              n < -i || e < -f || n >= r - i || e >= c - f
                ? o
                : u * t[(e + f) * r + n + i],
      et = () => Object(V.a)("no kernel or kernel config");
    function rt(t, n) {
      if (n) return Object(r.c)(rt(t), n);
      const { src: e, width: c } = t,
        u = !1 !== t.wrap,
        o = t.border || 0,
        i = t.reduce || O;
      let s = t.kernel;
      return (
        s || ((!t.weights || !t.kwidth) && et(), (s = Q(t.weights, t.kwidth))),
        Object(f.a)(t => a(Object(f.a)(tt(e, t, c, u, o)), i(), s))
      );
    }
    function ct(t, n) {
      if (n) return Object(r.c)(ct(t), n);
      const { src: e, width: c, height: u } = t,
        o = !1 !== t.wrap,
        i = t.border || 0,
        s = t.reduce || O;
      let l = t.kernel;
      return (
        l ||
          (!(t.weights && t.kwidth && t.kheight) && et(),
          (l = Z(t.weights, t.kwidth, t.kheight))),
        Object(f.a)(t => a(Object(f.a)(nt(e, t[0], t[1], c, u, o, i)), s(), l))
      );
    }
    function ut(...t) {
      return (
        Object(r.a)(ut, t) ||
        (n => {
          const e = n[2],
            r = t[0];
          let c = o.b;
          return Object(L.a)(
            n,
            r
              ? (t, n) => ((t = c !== o.b && r(c, n) ? t : e(t, n)), (c = n), t)
              : (t, n) => ((t = c === n ? t : e(t, n)), (c = n), t)
          );
        })
      );
    }
    const ot = t =>
      Object(f.a)(n =>
        ((t, n) => new Promise(e => setTimeout(() => e(t), n)))(n, t)
      );
    function it(...t) {
      return (
        Object(r.a)(it, t) ||
        (n => {
          const e = n[2],
            r = t[0] || {},
            c = r.key,
            u = (r.cache || (() => new Set()))();
          return Object(L.a)(
            n,
            c
              ? (t, n) => {
                  const r = c(n);
                  return u.has(r) ? t : (u.add(r), e(t, n));
                }
              : (t, n) => (u.has(n) ? t : (u.add(n), e(t, n)))
          );
        })
      );
    }
    function ft(t, n) {
      return n
        ? Object(r.c)(ft(t), n)
        : n => {
            const e = n[2],
              r = t();
            return Object(L.a)(n, (t, n) => (r(n) ? e(t, n) : t));
          };
    }
    function at(t, n) {
      return n
        ? Object(r.c)(at(t), n)
        : ((t = Math.max(0, t - 1)),
          ft(() => {
            let n = t;
            return () => n-- > 0 || ((n = t), !1);
          }));
    }
    function st(...t) {
      return (
        Object(r.a)(st, t) ||
        (n => {
          const e = n[2],
            r = t[0];
          let c = !0;
          return Object(L.a)(n, (t, n) => ((c = c && r(n)) ? t : e(t, n)));
        })
      );
    }
    function lt(t, n) {
      return n
        ? Object(r.c)(lt(t), n)
        : n => {
            const e = n[2];
            let r = t;
            return Object(L.a)(n, (t, n) => (r > 0 ? (r--, t) : e(t, n)));
          };
    }
    function dt(t = 1, n) {
      return n
        ? Object(r.b)(dt(t), n)
        : n => {
            const e = n[2];
            return Object(L.a)(n, (n, r) => {
              for (let c = t; c >= 0 && !Object(u.c)(n); c--) n = e(n, r);
              return n;
            });
          };
    }
    function bt(t, n) {
      return n
        ? Object(r.c)(bt(t), n)
        : n => {
            const e = n[2];
            return Object(L.a)(n, (n, r) => (t(r) ? e(n, r) : n));
          };
    }
    const Ot = Object.getPrototypeOf({}),
      jt = "function",
      ht = (t, n) => {
        let e;
        return (
          t === n ||
          (null == t
            ? t == n
            : typeof t.equiv === jt
              ? t.equiv(n)
              : null == n
                ? t == n
                : typeof n.equiv === jt
                  ? n.equiv(t)
                  : "string" != typeof t &&
                    "string" != typeof n &&
                    ((null != (e = Object.getPrototypeOf(t)) && e !== Ot) ||
                    (null != (e = Object.getPrototypeOf(n)) && e !== Ot)
                      ? typeof t !== jt &&
                        void 0 !== t.length &&
                        typeof n !== jt &&
                        void 0 !== n.length
                        ? pt(t, n)
                        : t instanceof Set && n instanceof Set
                          ? gt(t, n)
                          : t instanceof Map && n instanceof Map
                            ? yt(t, n)
                            : t instanceof Date && n instanceof Date
                              ? t.getTime() === n.getTime()
                              : t instanceof RegExp && n instanceof RegExp
                                ? t.toString() === n.toString()
                                : t != t && n != n
                      : mt(t, n)))
        );
      },
      pt = (t, n, e = ht) => {
        let r = t.length;
        if (r === n.length) for (; --r >= 0 && e(t[r], n[r]); );
        return r < 0;
      },
      gt = (t, n, e = ht) =>
        t.size === n.size && e([...t.keys()].sort(), [...n.keys()].sort()),
      yt = (t, n, e = ht) =>
        t.size === n.size && e([...t].sort(), [...n].sort()),
      mt = (t, n, e = ht) => {
        if (Object.keys(t).length !== Object.keys(n).length) return !1;
        for (let r in t) if (!n.hasOwnProperty(r) || !e(t[r], n[r])) return !1;
        return !0;
      },
      vt = (t, n, e = ht) => {
        const r = t.length,
          c = n.length;
        if (c > r) return !1;
        if (c === r) return e(n, t);
        t: for (let u = 0, o = 0; u < c; u++) {
          const c = n[u];
          for (; o < r; ) if (e(t[o++], c)) continue t;
          return !1;
        }
        return !0;
      };
    function kt(...t) {
      const n = t.length > 1 && Object(r.a)(kt, t);
      if (n) return n;
      const e = t[0],
        { key: c, equiv: u } = t[1] || {};
      return bt(t => vt(null != c ? c(t) : t, e, u));
    }
    function wt(t, n) {
      return n
        ? Object(r.b)(wt(t), n)
        : n => {
            const e = n[2],
              r = (n, c) => {
                const o = t(c);
                if (o) {
                  for (let t of o) if (((n = r(n, t)), Object(u.c)(n))) break;
                  return n;
                }
                return e(n, c);
              };
            return Object(L.a)(n, r);
          };
    }
    function At(t) {
      return wt(
        t =>
          null != t && t[Symbol.iterator] && "string" != typeof t ? t : void 0,
        t
      );
    }
    var St = e(15);
    function _t(...t) {
      const n = Object(r.a)(_t, t);
      if (n) return n;
      const e = t[0] || 0;
      return Object(St.a)((t, n) => [e + t, n]);
    }
    function Rt(t, n) {
      return n
        ? Object(r.b)(Rt(t), n)
        : n => {
            const e = n[2],
              r = "function" == typeof t ? t : () => t;
            return Object(L.a)(
              n,
              (t, n) => ((t = e(t, r())), Object(u.c)(t) ? t : e(t, n))
            );
          };
    }
    function xt(t, n) {
      return n
        ? Object(r.b)(xt(t), n)
        : n => {
            const e = n[2],
              r = "function" == typeof t ? t : () => t;
            let c = !0;
            return Object(L.a)(
              n,
              (t, n) =>
                c
                  ? ((c = !1), e(t, n))
                  : ((t = e(t, r())), Object(u.c)(t) ? t : e(t, n))
            );
          };
    }
    function Mt(...t) {
      return (
        Object(r.a)(Mt, t) ||
        (n => {
          const e = n[2],
            r = t[0] || w;
          return Object(L.a)(n, (t, n) => (null != r(n) ? e(t, n) : t));
        })
      );
    }
    var Tt = e(31);
    function $t(t, n) {
      return n
        ? Object(r.c)($t(t), n)
        : Object(f.a)(Object(Tt.a)(t) ? n => [t(n), n] : n => [t, n]);
    }
    const Ct = t => {
      if (Object(Tt.a)(t)) return t;
      const n = Object.keys(t[1] || {}).reduce(
        (n, e) => ((n[e] = Ct(t[1][e])), n),
        {}
      );
      return e => {
        const r = Object.assign({}, e);
        for (let t in n) r[t] = n[t](r[t]);
        return t[0](r);
      };
    };
    function It(t, n) {
      return n ? Object(r.c)(It(t), n) : Object(f.a)(Ct(t));
    }
    function Pt(...t) {
      const n = Object(r.a)(Pt, t);
      if (n) return n;
      const e = t[0],
        c = !1 !== t[1];
      return Object(f.a)(t => {
        const n = c ? Object.assign({}, t) : t;
        for (let r in e) n[r] = e[r](t[r]);
        return n;
      });
    }
    function Et(...t) {
      const n = Object(r.a)(Et, t);
      if (n) return n;
      let e,
        c,
        u = t[0] - 1;
      return (
        "number" == typeof t[1]
          ? ((e = t[1]), (c = t[2]))
          : ((c = t[1]), (e = 0)),
        t => {
          const n = t[2];
          let r = 0,
            o = e;
          return Object(L.a)(t, (t, e) => {
            if (0 === o) {
              if (0 === r) return (r = u), n(t, c(e));
              r--;
            } else o--;
            return n(t, e);
          });
        }
      );
    }
    function Nt(...t) {
      const n = Object(r.a)(Nt, t);
      if (n) return n;
      const e = t[0],
        c = !1 !== t[1];
      return Object(f.a)(t => {
        const n = c ? {} : t;
        for (let r in t) n[r] = e(t[r]);
        return n;
      });
    }
    var Ft = e(7);
    function Ut(t, n) {
      return n ? Object(r.b)(Ut(t), n) : Object(Ft.a)(Object(f.a)(t), B());
    }
    function Yt(t, n) {
      return n
        ? Object(r.b)(Yt(t), n)
        : n => {
            const e = n[2];
            let r = t;
            return Object(L.a)(
              n,
              (t, n) =>
                --r > 0
                  ? e(t, n)
                  : 0 === r
                    ? Object(u.b)(e(t, n))
                    : Object(u.d)(t)
            );
          };
    }
    function Dt(t, n) {
      return n ? [...Object(r.c)(Dt(t), n)][0] : Object(Ft.a)(bt(t), Yt(1));
    }
    function zt(t, n) {
      return n
        ? Object(r.b)(zt(t), n)
        : ([n, e, r]) => {
            const c = [];
            return [
              n,
              t => {
                for (; c.length && !Object(u.c)(t); ) t = r(t, c.shift());
                return e(t);
              },
              (n, e) => (c.length === t && c.shift(), c.push(e), n)
            ];
          };
    }
    function Lt(t, n) {
      return n ? [...Object(r.b)(Lt(t), n)][0] : Object(Ft.a)(bt(t), zt(1));
    }
    function Gt(t, n) {
      return n
        ? Object(r.c)(Gt(t), n)
        : n => {
            (t |= 0) < 2 && Object(V.a)("period must be >= 2");
            const e = n[2],
              r = [];
            let c = 0;
            return Object(L.a)(n, (n, u) => {
              const o = r.push(u);
              return (
                (c += u), o > t && (c -= r.shift()), o >= t ? e(n, c / t) : n
              );
            });
          };
    }
    var Bt = e(12);
    function qt(...t) {
      const n = Object(r.a)(qt, t);
      if (n) return n;
      const { key: e, compare: c } = Object.assign(
          { key: w, compare: T },
          t[1]
        ),
        u = t[0],
        o = u >> 1;
      return Object(Ft.a)(
        Object(Bt.a)(u, 1, !0),
        Object(f.a)(t => t.slice().sort((t, n) => c(e(t), e(n)))[o])
      );
    }
    var Vt = e(32);
    function Wt(...t) {
      return Object(f.a)(Vt.a.apply(null, t.map(b)));
    }
    const Kt = Array.isArray,
      Ht = t => {
        const n = Object.keys(t),
          [e, r, c] = n,
          [u, o, i] = n.map(n => t[n]);
        switch (n.length) {
          case 3:
            return t => {
              const n = {};
              let f;
              return (
                void 0 !== (f = t[i]) && (n[c] = f),
                void 0 !== (f = t[o]) && (n[r] = f),
                void 0 !== (f = t[u]) && (n[e] = f),
                n
              );
            };
          case 2:
            return t => {
              const n = {};
              let c;
              return (
                void 0 !== (c = t[o]) && (n[r] = c),
                void 0 !== (c = t[u]) && (n[e] = c),
                n
              );
            };
          case 1:
            return t => {
              const n = {};
              let r = t[u];
              return void 0 !== r && (n[e] = r), n;
            };
          default:
            return e => {
              let r, c;
              const u = {};
              for (let o = n.length - 1; o >= 0; o--)
                (r = n[o]), void 0 !== (c = e[t[r]]) && (u[r] = c);
              return u;
            };
        }
      };
    function Xt(...t) {
      const n = t.length > 2 && Object(r.a)(Xt, t);
      if (n) return n;
      let e = t[0];
      if ((Kt(e) && (e = e.reduce((t, n, e) => ((t[n] = e), t), {})), t[1])) {
        const n = Object.keys(e);
        return Object(f.a)(r =>
          a(
            Object(Ft.a)(
              Object(f.a)(t => [t, r[e[t]]]),
              bt(t => void 0 !== t[1])
            ),
            t[1],
            n
          )
        );
      }
      return Object(f.a)(Ht(e));
    }
    function Jt(...t) {
      const n = Object(r.a)(Jt, t);
      if (n) return n;
      const [e, c] = t,
        u = Object.keys(e);
      return Object(Ft.a)(Wt.apply(null, u.map(t => e[t])), Xt(u, c));
    }
    const Qt = () => t => t;
    var Zt = e(17);
    function tn(...t) {
      return (
        Object(r.a)(tn, t) ||
        Object(Ft.a)(lt(t[0] * (t[1] || 10)), Yt(t[1] || 10))
      );
    }
    function nn(...t) {
      return (
        Object(r.a)(nn, t, r.b) ||
        (([n, e, r]) => {
          const c = t[0],
            i = !0 === t[1] ? c() : c;
          let f,
            a = o.b;
          return [
            n,
            t => (f && f.length && ((t = r(t, f)), (f = null)), e(t)),
            (t, n) => {
              const e = i(n);
              return (
                a === o.b
                  ? ((a = e), (f = [n]))
                  : e === a
                    ? f.push(n)
                    : (f && (t = r(t, f)),
                      (f = Object(u.c)(t) ? null : [n]),
                      (a = e)),
                t
              );
            }
          ];
        })
      );
    }
    function en(t, n) {
      return n
        ? Object(r.b)(en(t), n)
        : nn(() => {
            let n = 0,
              e = 0;
            return () => (
              n++ === t[e] && ((n = 1), (e = (e + 1) % t.length)), e
            );
          }, !0);
    }
    function rn(...t) {
      const n = Object(r.a)(rn, t, r.b);
      if (n) return n;
      const { key: e, compare: c } = Object.assign(
        { key: w, compare: T },
        t[1]
      );
      return Object(Ft.a)(
        Object(Bt.a)(t[0], !0),
        Ut(t => t.slice().sort((t, n) => c(e(t), e(n))))
      );
    }
    function cn(...t) {
      return (
        Object(r.a)(cn, t, r.b) ||
        (([n, e, r]) => {
          let c = {},
            u = !0;
          const o = new Set(),
            { key: i, mergeOnly: f, reset: a, all: s } = Object.assign(
              { key: w, mergeOnly: !1, reset: !0, all: !0 },
              t[1]
            ),
            l = Kt(t[0]) ? new Set(t[0]) : t[0];
          return [
            n,
            t => (
              ((a && s && o.size > 0) || (!a && u)) &&
                ((t = r(t, c)), (c = void 0), o.clear(), (u = !1)),
              e(t)
            ),
            (t, n) => {
              const e = i(n);
              return (
                l.has(e) &&
                  ((c[e] = n),
                  o.add(e),
                  (f || o.size >= l.size) &&
                    ((t = r(t, c)),
                    (u = !1),
                    a ? ((c = {}), o.clear()) : (c = Object.assign({}, c)))),
                t
              );
            }
          ];
        })
      );
    }
    function un(t, n) {
      return n ? Object(r.c)(un(t), n) : Object(f.a)(n => n[t]);
    }
    var on = e(23);
    function fn(...t) {
      const n = Object(r.a)(fn, t);
      if (n) return n;
      const e = t[0],
        c = t[1] || on.a;
      return t => {
        const n = t[2];
        return Object(L.a)(t, (t, r) => (c.float() < e ? n(t, r) : t));
      };
    }
    function an(...t) {
      return (
        (t.length > 2 && Object(r.a)(an, t, r.b)) ||
        (([n, e, r]) => {
          const [c, o, i] = t[0];
          let f = t.length > 1 && null != t[1] ? t[1] : c();
          return [
            n,
            t => {
              let n = o(f);
              return n !== f && (t = Object(u.e)(r(t, n))), (f = n), e(t);
            },
            (t, n) => (
              (f = i(f, n)),
              Object(u.c)(f) ? Object(u.b)(r(t, f.deref())) : r(t, f)
            )
          ];
        })
      );
    }
    const sn = t => Ht(t.reduce((t, n) => ((t[n] = n), t), {}));
    function ln(t, n) {
      return n ? Object(r.c)(ln(t), n) : Object(f.a)(sn(t));
    }
    const dn = t => Object(f.a)(n => (t(n), n));
    function bn(...t) {
      const n = Object(r.a)(bn, t);
      if (n) return n;
      const e = t[0],
        c = !1 !== t[1];
      return t => {
        const n = t[2];
        let r = [];
        return Object(L.a)(
          t,
          (t, u) => (
            r.push(u),
            (c || r.length === e) &&
              ((t = n(t, r)), (r = r.slice(r.length === e ? 1 : 0))),
            t
          )
        );
      };
    }
    const On = (t, n = t.length, e = on.a) => {
      const r = (n = Math.min(n, t.length));
      if (r > 1)
        for (n = Math.min(n, r); --n >= 0; ) {
          const n = 0 | e.float(r),
            c = 0 | e.float(r),
            u = t[n];
          (t[n] = t[c]), (t[c] = u);
        }
      return t;
    };
    function jn(...t) {
      return (
        Object(r.a)(jn, t, r.b) ||
        (([n, e, r]) => {
          const c = t[0],
            o = t[1] || c,
            i = [];
          return [
            n,
            t => {
              for (; i.length && !Object(u.c)(t); )
                On(i, o), (t = r(t, i.shift()));
              return (t = e(t));
            },
            (t, n) => (
              i.push(n), On(i, o), i.length === c && (t = r(t, i.shift())), t
            )
          ];
        })
      );
    }
    const hn = (t, n, e = t => t, r = T) => {
      const c = e(n);
      let u = 0,
        o = t.length - 1;
      for (; u <= o; ) {
        const n = (u + o) >>> 1,
          i = r(e(t[n]), c);
        if (i < 0) u = n + 1;
        else {
          if (!(i > 0)) return n;
          o = n - 1;
        }
      }
      return -u - 1;
    };
    function pn(...t) {
      const n = Object(r.a)(pn, t, r.b);
      if (n) return n;
      const { key: e, compare: c } = Object.assign(
          { key: w, compare: T },
          t[1]
        ),
        o = t[0];
      return ([t, n, r]) => {
        const i = [];
        return [
          t,
          t => {
            for (; i.length && !Object(u.c)(t); ) t = r(t, i.shift());
            return n(t);
          },
          (t, n) => {
            const u = hn(i, n, e, c);
            return (
              i.splice(u < 0 ? -(u + 1) : u, 0, n),
              i.length === o && (t = r(t, i.shift())),
              t
            );
          }
        ];
      };
    }
    function gn(t, n) {
      return n
        ? Object(r.b)(gn(t), n)
        : Object(Ft.a)(
            en(t.map(t => t[1])),
            Object(Bt.a)(t.length),
            Xt(t.map(t => t[0])),
            Pt(t.reduce((t, n) => (n[2] ? ((t[n[0]] = n[2]), t) : t), {}), !1)
          );
    }
    const yn = t => {
      const [n, e, r, c, u, o, i, f] = t;
      switch (t.length) {
        case 0:
          return () => [];
        case 1:
          return t => [t[n]];
        case 2:
          return t => [t[n], t[e]];
        case 3:
          return t => [t[n], t[e], t[r]];
        case 4:
          return t => [t[n], t[e], t[r], t[c]];
        case 5:
          return t => [t[n], t[e], t[r], t[c], t[u]];
        case 6:
          return t => [t[n], t[e], t[r], t[c], t[u], t[o]];
        case 7:
          return t => [t[n], t[e], t[r], t[c], t[u], t[o], t[i]];
        case 8:
          return t => [t[n], t[e], t[r], t[c], t[u], t[o], t[i], t[f]];
        default:
          return n => {
            const e = [];
            for (let r = t.length; --r >= 0; ) e[r] = n[t[r]];
            return e;
          };
      }
    };
    function mn(t, n) {
      return n ? Object(r.c)(mn(t), n) : Object(f.a)(yn(t));
    }
    function vn(t, n) {
      return n
        ? Object(r.c)(vn(t), n)
        : ((t = Math.max(0, t - 1)),
          ft(() => {
            let n = 0;
            return () => (0 === n ? ((n = t), !0) : (n--, !1));
          }));
    }
    function kn(...t) {
      return (
        Object(r.a)(kn, t) ||
        (n => {
          const e = n[2],
            r = t[0];
          let c = !0;
          return Object(L.a)(
            n,
            (t, n) => ((c = c && r(n)) ? e(t, n) : Object(u.d)(t))
          );
        })
      );
    }
    function wn(t, n) {
      return n
        ? Object(r.c)(wn(t), n)
        : ft(() => {
            let n = 0;
            return () => {
              const e = Date.now();
              return e - n >= t && ((n = e), !0);
            };
          });
    }
    const An = (t = "") => dn(n => console.log(t, n));
    function Sn(...t) {
      const n = Object(r.a)(Sn, t, r.b);
      if (n) return n;
      const e = t[0],
        { delim: c, always: u } = Object.assign({ delim: 1, always: !0 }, t[1]);
      return nn(() => {
        let t = 0,
          n = !1;
        return r => (
          (t += r.length + c) > e + (u ? 0 : c) &&
            ((n = !n), (t = r.length + c)),
          n
        );
      }, !0);
    }
    function _n(...t) {
      let [n, e, r] = t;
      const c = t.length;
      switch (c) {
        case 1: {
          const t = n[2];
          return [
            () => [n[0]()],
            t => [n[1](t[0])],
            (n, e) => {
              const r = t(n[0], e);
              return Object(u.c)(r) ? Object(u.d)([Object(u.e)(r)]) : [r];
            }
          ];
        }
        case 2: {
          const t = n[2],
            r = e[2];
          return [
            () => [n[0](), e[0]()],
            t => [n[1](t[0]), e[1](t[1])],
            (n, e) => {
              const c = t(n[0], e),
                o = r(n[1], e);
              return Object(u.c)(c) || Object(u.c)(o)
                ? Object(u.d)([Object(u.e)(c), Object(u.e)(o)])
                : [c, o];
            }
          ];
        }
        case 3: {
          const t = n[2],
            c = e[2],
            o = r[2];
          return [
            () => [n[0](), e[0](), r[0]()],
            t => [n[1](t[0]), e[1](t[1]), r[1](t[2])],
            (n, e) => {
              const r = t(n[0], e),
                i = c(n[1], e),
                f = o(n[2], e);
              return Object(u.c)(r) || Object(u.c)(i) || Object(u.c)(f)
                ? Object(u.d)([Object(u.e)(r), Object(u.e)(i), Object(u.e)(f)])
                : [r, i, f];
            }
          ];
        }
        default:
          return [
            () => t.map(t => t[0]()),
            n => t.map((t, e) => t[1](n[e])),
            (n, e) => {
              let r = !1;
              const o = [];
              for (let i = 0; i < c; i++) {
                let c = t[i][2](n[i], e);
                Object(u.c)(c) && ((r = !0), (c = Object(u.e)(c))), (o[i] = c);
              }
              return r ? Object(u.d)(o) : o;
            }
          ];
      }
    }
    const Rn = t => n => t[n],
      xn = (t, n) => e => t[e[0] + e[1] * n],
      Mn = (t, n, e) => {
        const r = n * e;
        return e => t[e[0] + e[1] * n + e[2] * r];
      };
    function* Tn(t) {
      yield* t;
    }
    var $n = e(26);
    const Cn = t => (
        (null != t && t[Symbol.iterator]) ||
          Object(V.a)(`value is not iterable: ${t}`),
        t
      ),
      In = t => (Kt(t) ? t : [...Cn(t)]),
      Pn = t => (Object($n.a)(t) ? t : [...Cn(t)]);
    var En = e(16);
    const Nn = (t, n, e = on.a) =>
      Object(En.a)(
        n
          ? ((t, n, e = on.a) => {
              const r = t
                  .map(n ? (t, e) => [t, n[e]] : t => [t, 1])
                  .sort((t, n) => n[1] - t[1]),
                c = t.length;
              let u,
                o,
                i,
                f = 0;
              for (u = 0; u < c; u++) f += r[u][1];
              return () => {
                for (o = e.float(f), i = f, u = 0; u < c; u++)
                  if ((i -= r[u][1]) <= o) return r[u][0];
              };
            })(In(t), n, e)
          : () => t[0 | e.float(t.length)]
      );
    function* Fn(...t) {
      for (let n of t) null != n && (yield* Cn(n));
    }
    function* Un(t) {
      let n = [];
      for (let e of t) n.push(e), yield e;
      if (n.length > 0) for (;;) yield* n;
    }
    function* Yn(t, n = !0) {
      if (t > 0) for (let e = 0, r = n ? t + 1 : t; e < r; e++) yield e / t;
    }
    function* Dn(t, n = 1 / 0) {
      for (; n-- > 0; ) yield t;
    }
    function* zn(t, n, e, r, c, ...u) {
      let o = u.length;
      if (o < 1) return;
      1 === o && (yield* Dn(c(r(u[0][1], u[0][1]), 0), t)),
        u.sort((t, n) => t[0] - n[0]),
        u[o - 1][0] < e && u.push([e, u[o - 1][1]]),
        u[0][0] > n && u.unshift([n, u[0][1]]);
      const i = e - n;
      let f = u[0][0],
        a = u[1][0],
        s = a - f,
        l = r(u[0][1], u[1][1]),
        d = 1;
      o = u.length;
      for (let e of Yn(t)) {
        if ((e = n + i * e) > a) {
          for (; d < o && e > u[d][0]; ) d++;
          (f = u[d - 1][0]),
            (s = (a = u[d][0]) - f),
            (l = r(u[d - 1][1], u[d][1]));
        }
        yield c(l, 0 !== s ? (e - f) / s : 0);
      }
    }
    function* Ln(t, n) {
      let e = 0;
      for (;;) yield n, (n = t(n, ++e));
    }
    function* Gn(t) {
      for (let n in t) t.hasOwnProperty(n) && (yield n);
    }
    function* Bn(t) {
      for (let n in t) t.hasOwnProperty(n) && (yield [n, t[n]]);
    }
    function* qn(...t) {
      const n = t.length - 1;
      if (n < 0) return;
      const e = new Array(n + 1).fill(0),
        r = t.map(Pn),
        c = r.reduce((t, n) => t * n.length, 1);
      for (let t = 0; t < c; t++) {
        const t = [];
        for (let c = n; c >= 0; c--) {
          const n = r[c];
          let u = e[c];
          u === n.length && ((e[c] = u = 0), c > 0 && e[c - 1]++),
            (t[c] = n[u]);
        }
        e[n]++, yield t;
      }
    }
    const Vn = (t, n = t, e) => {
      e &&
        e.length < t &&
        Object(V.a)(`insufficient offsets, got ${e.length}, needed ${t}`);
      const r = [];
      for (; --t >= 0; ) {
        const c = e ? e[t] : 0;
        r[t] = W(c, c + n);
      }
      return qn.apply(null, r);
    };
    function* Wn(...t) {
      let n, e, r, c, u, o, f, a, s;
      switch (t.length) {
        case 9:
          (f = t[6]), (a = t[7]), (s = t[8]);
        case 6:
          [n, e, r, c, u, o] = t;
          break;
        case 3:
          ([e, c, o] = t), (n = r = u = 0);
          break;
        default:
          Object(i.a)(t.length);
      }
      const l = W(n, e, f),
        d = W(r, c, a);
      for (let t of W(u, o, s))
        for (let n of d) for (let e of l) yield [e, n, t];
    }
    function* Kn(t) {
      const n = In(t);
      let e = n.length;
      for (; --e >= 0; ) yield n[e];
    }
    function* Hn(t) {
      for (let n in t) t.hasOwnProperty(n) && (yield t[n]);
    }
    function* Xn(t, n = 1, e = !0, r = !0) {
      const c = In(t);
      if (
        ((n < 0 || n > c.length) &&
          Object(V.a)(
            `wrong number of wrap items: got ${n}, but max: ${c.length}`
          ),
        e)
      )
        for (let t = c.length, e = t - n; e < t; e++) yield c[e];
      if ((yield* c, r)) for (let t = 0; t < n; t++) yield c[t];
    }
    e.d(n, "iterator", function() {
      return r.b;
    }),
      e.d(n, "iterator1", function() {
        return r.c;
      }),
      e.d(n, "$iter", function() {
        return r.a;
      }),
      e.d(n, "reduce", function() {
        return c.b;
      }),
      e.d(n, "reducer", function() {
        return c.c;
      }),
      e.d(n, "$$reduce", function() {
        return c.a;
      }),
      e.d(n, "Reduced", function() {
        return u.a;
      }),
      e.d(n, "reduced", function() {
        return u.d;
      }),
      e.d(n, "isReduced", function() {
        return u.c;
      }),
      e.d(n, "ensureReduced", function() {
        return u.b;
      }),
      e.d(n, "unreduced", function() {
        return u.e;
      }),
      e.d(n, "run", function() {
        return l;
      }),
      e.d(n, "step", function() {
        return b;
      }),
      e.d(n, "transduce", function() {
        return a;
      }),
      e.d(n, "add", function() {
        return O;
      }),
      e.d(n, "assocMap", function() {
        return j;
      }),
      e.d(n, "assocObj", function() {
        return h;
      }),
      e.d(n, "conj", function() {
        return p;
      }),
      e.d(n, "count", function() {
        return g;
      }),
      e.d(n, "div", function() {
        return y;
      }),
      e.d(n, "every", function() {
        return m;
      }),
      e.d(n, "fill", function() {
        return v;
      }),
      e.d(n, "fillN", function() {
        return k;
      }),
      e.d(n, "frequencies", function() {
        return S;
      }),
      e.d(n, "groupBinary", function() {
        return x;
      }),
      e.d(n, "groupByMap", function() {
        return A;
      }),
      e.d(n, "groupByObj", function() {
        return _;
      }),
      e.d(n, "last", function() {
        return M;
      }),
      e.d(n, "maxCompare", function() {
        return $;
      }),
      e.d(n, "max", function() {
        return C;
      }),
      e.d(n, "mean", function() {
        return I;
      }),
      e.d(n, "minCompare", function() {
        return P;
      }),
      e.d(n, "min", function() {
        return E;
      }),
      e.d(n, "mul", function() {
        return N;
      }),
      e.d(n, "pushCopy", function() {
        return F;
      }),
      e.d(n, "push", function() {
        return d.a;
      }),
      e.d(n, "reductions", function() {
        return U;
      }),
      e.d(n, "some", function() {
        return Y;
      }),
      e.d(n, "str", function() {
        return D;
      }),
      e.d(n, "sub", function() {
        return z;
      }),
      e.d(n, "benchmark", function() {
        return G;
      }),
      e.d(n, "cat", function() {
        return B;
      }),
      e.d(n, "converge", function() {
        return q;
      }),
      e.d(n, "buildKernel1d", function() {
        return Q;
      }),
      e.d(n, "buildKernel2d", function() {
        return Z;
      }),
      e.d(n, "convolve1d", function() {
        return rt;
      }),
      e.d(n, "convolve2d", function() {
        return ct;
      }),
      e.d(n, "dedupe", function() {
        return ut;
      }),
      e.d(n, "delayed", function() {
        return ot;
      }),
      e.d(n, "distinct", function() {
        return it;
      }),
      e.d(n, "dropNth", function() {
        return at;
      }),
      e.d(n, "dropWhile", function() {
        return st;
      }),
      e.d(n, "drop", function() {
        return lt;
      }),
      e.d(n, "duplicate", function() {
        return dt;
      }),
      e.d(n, "filter", function() {
        return bt;
      }),
      e.d(n, "filterFuzzy", function() {
        return kt;
      }),
      e.d(n, "flattenWith", function() {
        return wt;
      }),
      e.d(n, "flatten", function() {
        return At;
      }),
      e.d(n, "indexed", function() {
        return _t;
      }),
      e.d(n, "interleave", function() {
        return Rt;
      }),
      e.d(n, "interpose", function() {
        return xt;
      }),
      e.d(n, "keep", function() {
        return Mt;
      }),
      e.d(n, "labeled", function() {
        return $t;
      }),
      e.d(n, "mapDeep", function() {
        return It;
      }),
      e.d(n, "mapIndexed", function() {
        return St.a;
      }),
      e.d(n, "mapKeys", function() {
        return Pt;
      }),
      e.d(n, "mapNth", function() {
        return Et;
      }),
      e.d(n, "mapVals", function() {
        return Nt;
      }),
      e.d(n, "map", function() {
        return f.a;
      }),
      e.d(n, "mapcat", function() {
        return Ut;
      }),
      e.d(n, "matchFirst", function() {
        return Dt;
      }),
      e.d(n, "matchLast", function() {
        return Lt;
      }),
      e.d(n, "movingAverage", function() {
        return Gt;
      }),
      e.d(n, "movingMedian", function() {
        return qt;
      }),
      e.d(n, "multiplex", function() {
        return Wt;
      }),
      e.d(n, "multiplexObj", function() {
        return Jt;
      }),
      e.d(n, "noop", function() {
        return Qt;
      }),
      e.d(n, "padLast", function() {
        return Zt.a;
      }),
      e.d(n, "page", function() {
        return tn;
      }),
      e.d(n, "partitionBy", function() {
        return nn;
      }),
      e.d(n, "partitionOf", function() {
        return en;
      }),
      e.d(n, "partitionSort", function() {
        return rn;
      }),
      e.d(n, "partitionSync", function() {
        return cn;
      }),
      e.d(n, "partition", function() {
        return Bt.a;
      }),
      e.d(n, "pluck", function() {
        return un;
      }),
      e.d(n, "rename", function() {
        return Xt;
      }),
      e.d(n, "sample", function() {
        return fn;
      }),
      e.d(n, "scan", function() {
        return an;
      }),
      e.d(n, "selectKeys", function() {
        return ln;
      }),
      e.d(n, "sideEffect", function() {
        return dn;
      }),
      e.d(n, "slidingWindow", function() {
        return bn;
      }),
      e.d(n, "streamShuffle", function() {
        return jn;
      }),
      e.d(n, "streamSort", function() {
        return pn;
      }),
      e.d(n, "struct", function() {
        return gn;
      }),
      e.d(n, "swizzle", function() {
        return mn;
      }),
      e.d(n, "takeNth", function() {
        return vn;
      }),
      e.d(n, "takeLast", function() {
        return zt;
      }),
      e.d(n, "takeWhile", function() {
        return kn;
      }),
      e.d(n, "take", function() {
        return Yt;
      }),
      e.d(n, "throttle", function() {
        return ft;
      }),
      e.d(n, "throttleTime", function() {
        return wn;
      }),
      e.d(n, "trace", function() {
        return An;
      }),
      e.d(n, "wordWrap", function() {
        return Sn;
      }),
      e.d(n, "comp", function() {
        return Ft.a;
      }),
      e.d(n, "compR", function() {
        return L.a;
      }),
      e.d(n, "deepTransform", function() {
        return Ct;
      }),
      e.d(n, "juxtR", function() {
        return _n;
      }),
      e.d(n, "keySelector", function() {
        return sn;
      }),
      e.d(n, "lookup1d", function() {
        return Rn;
      }),
      e.d(n, "lookup2d", function() {
        return xn;
      }),
      e.d(n, "lookup3d", function() {
        return Mn;
      }),
      e.d(n, "renamer", function() {
        return Ht;
      }),
      e.d(n, "asIterable", function() {
        return Tn;
      }),
      e.d(n, "choices", function() {
        return Nn;
      }),
      e.d(n, "concat", function() {
        return Fn;
      }),
      e.d(n, "cycle", function() {
        return Un;
      }),
      e.d(n, "interpolate", function() {
        return zn;
      }),
      e.d(n, "iterate", function() {
        return Ln;
      }),
      e.d(n, "keys", function() {
        return Gn;
      }),
      e.d(n, "normRange", function() {
        return Yn;
      }),
      e.d(n, "pairs", function() {
        return Bn;
      }),
      e.d(n, "permutations", function() {
        return qn;
      }),
      e.d(n, "permutationsN", function() {
        return Vn;
      }),
      e.d(n, "range", function() {
        return W;
      }),
      e.d(n, "Range", function() {
        return K;
      }),
      e.d(n, "range2d", function() {
        return H;
      }),
      e.d(n, "range3d", function() {
        return Wn;
      }),
      e.d(n, "repeat", function() {
        return Dn;
      }),
      e.d(n, "repeatedly", function() {
        return En.a;
      }),
      e.d(n, "reverse", function() {
        return Kn;
      }),
      e.d(n, "vals", function() {
        return Hn;
      }),
      e.d(n, "wrap", function() {
        return Xn;
      }),
      e.d(n, "zip", function() {
        return X;
      }),
      e.d(n, "tuples", function() {
        return J;
      });
  },
  function(t, n, e) {
    "use strict";
    e.d(n, "a", function() {
      return c;
    });
    var r = e(0);
    function c(...t) {
      const n = Object(r.a)(c, t, r.b);
      if (n) return n;
      let e,
        u,
        o = t[0];
      return (
        "number" == typeof t[1]
          ? ((u = t[1]), (e = t[2]))
          : ((u = o), (e = t[1])),
        ([t, n, r]) => {
          let c = [],
            i = 0;
          return [
            t,
            t => (e && c.length > 0 && ((t = r(t, c)), (c = [])), n(t)),
            (t, n) => (
              i <= 0
                ? (c.length < o && c.push(n),
                  c.length === o &&
                    ((t = r(t, c)), (c = u < o ? c.slice(u) : []), (i = u - o)))
                : i--,
              t
            )
          ];
        }
      );
    }
  },
  ,
  ,
  function(t, n, e) {
    "use strict";
    e.d(n, "a", function() {
      return u;
    });
    var r = e(3),
      c = e(0);
    function u(...t) {
      return (
        Object(c.a)(u, t) ||
        (n => {
          const e = n[2],
            c = t[0];
          let u = t[1] || 0;
          return Object(r.a)(n, (t, n) => e(t, c(u++, n)));
        })
      );
    }
  },
  function(t, n, e) {
    "use strict";
    function* r(t, n = 1 / 0) {
      for (; n-- > 0; ) yield t();
    }
    e.d(n, "a", function() {
      return r;
    });
  },
  function(t, n, e) {
    "use strict";
    e.d(n, "a", function() {
      return u;
    });
    var r = e(0),
      c = e(2);
    function u(t, n, e) {
      return e
        ? Object(r.b)(u(t, n), e)
        : ([e, r, u]) => {
            let o = 0;
            return [
              e,
              e => {
                let i = o % t;
                if (i > 0) for (; ++i <= t && !Object(c.c)(e); ) e = u(e, n);
                return r(e);
              },
              (t, n) => (o++, u(t, n))
            ];
          };
    }
  },
  ,
  function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    const r = e(20).home;
    window.Automata = window.Automata || { generateAutomata: r };
  },
  function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    const r = e(11),
      c = e(21),
      u = e(22);
    function o(t) {
      return [...c.bits(8, [t])];
    }
    function i(t, n) {
      return n[
        (function(t) {
          return parseInt(t, 2);
        })(t)
      ];
    }
    const f = [...c.randomBits(0.5, 280)],
      a = [o(18), o(30), o(60), o(90), o(110), o(150), o(184)];
    const s = [...Array(50)]
      .map((t, n) => n)
      .reduce(
        t => {
          const n = t[t.length - 1];
          return (
            t.push(
              (function(t, n) {
                return r.transduce(
                  r.comp(r.partition(3, 1), r.map(n => i(n.join(""), t))),
                  r.push(),
                  [
                    ...r.map(r.lookup1d(n), [0]),
                    ...n,
                    ...r.map(r.lookup1d(n), [n.length - 1])
                  ]
                );
              })(
                a[
                  (function(t, n) {
                    return (
                      (t = Math.ceil(t)),
                      (n = Math.floor(n)),
                      Math.floor(Math.random() * (n - t + 1)) + t
                    );
                  })(0, a.length - 1)
                ],
                n
              )
            ),
            t
          );
        },
        [f]
      )
      .map(t => [
        "div",
        { class: "ma0 pa0 automata-row" },
        t.map(t => "　◢"[t]).join("")
      ]);
    n.home = function(t) {
      const n = [
        "div",
        { class: "ma0 w-100 pa0 sans-serif" },
        [
          "div",
          { class: "ma0 pa0 automata-container", style: { height: `${t}px` } },
          s
        ]
      ];
      return u.serialize(n);
    };
  },
  function(t, n, e) {
    "use strict";
    var r;
    e.r(n),
      (function(t) {
        (t[(t.I8 = 0)] = "I8"),
          (t[(t.I8_ARRAY = 1)] = "I8_ARRAY"),
          (t[(t.U8 = 2)] = "U8"),
          (t[(t.U8_ARRAY = 3)] = "U8_ARRAY"),
          (t[(t.I16 = 4)] = "I16"),
          (t[(t.I16_ARRAY = 5)] = "I16_ARRAY"),
          (t[(t.U16 = 6)] = "U16"),
          (t[(t.U16_ARRAY = 7)] = "U16_ARRAY"),
          (t[(t.I32 = 8)] = "I32"),
          (t[(t.I32_ARRAY = 9)] = "I32_ARRAY"),
          (t[(t.U32 = 10)] = "U32"),
          (t[(t.U32_ARRAY = 11)] = "U32_ARRAY"),
          (t[(t.F32 = 12)] = "F32"),
          (t[(t.F32_ARRAY = 13)] = "F32_ARRAY"),
          (t[(t.F64 = 14)] = "F64"),
          (t[(t.F64_ARRAY = 15)] = "F64_ARRAY"),
          (t[(t.STR = 16)] = "STR");
      })(r || (r = {}));
    var c = e(0),
      u = e(3),
      o = e(2);
    const i =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      f = i.substr(0, 62) + "-_";
    function a(t) {
      return t
        ? Object(c.c)(a(), t)
        : t => {
            const n = t[2];
            let e = 0,
              r = 0;
            return Object(u.a)(t, (t, c) => {
              switch (c) {
                case "-":
                  c = "+";
                  break;
                case "_":
                  c = "/";
                  break;
                case "=":
                  return Object(o.d)(t);
              }
              let u = i.indexOf(c);
              return (
                (r = 3 & e ? (r << 6) + u : u),
                3 & e++ && (t = n(t, 255 & (r >> ((-2 * e) & 6)))),
                t
              );
            });
          };
    }
    function s(...t) {
      const n = Object(c.a)(s, t, c.b);
      return n
        ? [...n].join("")
        : ([n, e, r]) => {
            let c,
              u = 0;
            const a = Object.assign({ safe: !1, buffer: 1024 }, t[0]),
              s = a.safe ? f : i,
              l = [];
            return [
              n,
              t => {
                switch (u) {
                  case 1:
                    l.push(s[(c >> 18) & 63], s[(c >> 12) & 63], "=", "=");
                    break;
                  case 2:
                    l.push(
                      s[(c >> 18) & 63],
                      s[(c >> 12) & 63],
                      s[(c >> 6) & 63],
                      "="
                    );
                }
                for (; l.length && !Object(o.c)(t); ) t = r(t, l.shift());
                return e(t);
              },
              (t, n) => {
                switch (u) {
                  case 0:
                    (u = 1), (c = n << 16);
                    break;
                  case 1:
                    (u = 2), (c += n << 8);
                    break;
                  default:
                    if (
                      ((u = 0),
                      (c += n),
                      l.push(
                        s[(c >> 18) & 63],
                        s[(c >> 12) & 63],
                        s[(c >> 6) & 63],
                        s[63 & c]
                      ),
                      l.length >= a.buffer)
                    ) {
                      for (
                        let n = 0, e = l.length;
                        n < e && !Object(o.c)(t);
                        n++
                      )
                        t = r(t, l[n]);
                      l.length = 0;
                    }
                }
                return t;
              }
            ];
          };
    }
    var l = e(1);
    function d(t) {
      return t
        ? [...Object(c.c)(d(), t)].join("")
        : t => {
            const n = t[2];
            let e,
              r,
              c,
              o,
              i,
              f = 0;
            return Object(u.a)(t, (t, u) => {
              switch (f) {
                case 0:
                default:
                  if (u < 128) return n(t, String.fromCharCode(u));
                  (e = u), (f = 1);
                  break;
                case 1:
                  if (((r = 63 & u), 192 == (224 & e)))
                    return (
                      (f = 0), n(t, String.fromCharCode(((31 & e) << 6) | r))
                    );
                  f = 2;
                  break;
                case 2:
                  if (((c = 63 & u), 224 == (240 & e)))
                    return (
                      (f = 0),
                      n(t, String.fromCharCode(((15 & e) << 12) | (r << 6) | c))
                    );
                  f = 3;
                  break;
                case 3:
                  if (((o = 63 & u), 240 == (248 & e)))
                    return (
                      (f = 0),
                      n(t, O(((7 & e) << 18) | (r << 12) | (c << 6) | o))
                    );
                  f = 4;
                  break;
                case 4:
                  if (((i = 63 & u), 248 == (252 & e)))
                    return (
                      (f = 0),
                      n(
                        t,
                        O(
                          ((3 & e) << 24) | (r << 18) | (c << 12) | (o << 6) | i
                        )
                      )
                    );
                  f = 5;
                  break;
                case 5:
                  return (
                    (f = 0),
                    n(
                      t,
                      O(
                        ((1 & e) << 30) |
                          (r << 24) |
                          (c << 18) |
                          (o << 12) |
                          (i << 6) |
                          (63 & u)
                      )
                    )
                  );
              }
              return t;
            });
          };
    }
    function b(t) {
      return null != t
        ? Object(c.b)(b(), t)
        : t => {
            const n = t[2];
            return Object(u.a)(t, (t, e) => {
              let r,
                c = e.charCodeAt(0);
              if (
                (c >= 55296 &&
                  c <= 57343 &&
                  (c = (65536 + ((1023 & c) << 10)) | (1023 & e.charCodeAt(1))),
                c < 128)
              )
                return n(t, c);
              for (
                let e = 0,
                  u = (r =
                    c < 2048
                      ? [192 | (c >> 6), 128 | (63 & c)]
                      : c < 65536
                        ? [
                            224 | (c >> 12),
                            128 | ((c >> 6) & 63),
                            128 | (63 & c)
                          ]
                        : c < 2097152
                          ? [
                              240 | (c >> 18),
                              128 | ((c >> 12) & 63),
                              128 | ((c >> 6) & 63),
                              128 | (63 & c)
                            ]
                          : c < 67108864
                            ? [
                                248 | (c >> 24),
                                128 | ((c >> 18) & 63),
                                128 | ((c >> 12) & 63),
                                128 | ((c >> 6) & 63),
                                128 | (63 & c)
                              ]
                            : [
                                252 | (c >> 30),
                                128 | ((c >> 24) & 63),
                                128 | ((c >> 18) & 63),
                                128 | ((c >> 12) & 63),
                                128 | ((c >> 6) & 63),
                                128 | (63 & c)
                              ]).length;
                e < u && ((t = n(t, r[e])), !Object(o.c)(t));
                e++
              );
              return t;
            });
          };
    }
    const O = t =>
        t < 65536
          ? String.fromCharCode(t)
          : ((t -= 65536),
            String.fromCharCode(55296 | (t >> 10), 56320 | (1023 & t))),
      j = t => {
        const n = t.length;
        let e = 0;
        for (let r = 0; r < n; ++r) {
          let n = t.charCodeAt(r);
          n >= 55296 &&
            n <= 57343 &&
            (n = (65536 + ((1023 & n) << 10)) | (1023 & t.charCodeAt(++r))),
            n <= 127
              ? e++
              : (e +=
                  n <= 2047
                    ? 2
                    : n <= 65535
                      ? 3
                      : n <= 2097151
                        ? 4
                        : n <= 67108863
                          ? 5
                          : 6);
        }
        return e;
      },
      h = t => [0, t],
      p = t => [1, t],
      g = t => [2, t],
      y = t => [3, t],
      m = (t, n = !1) => [4, t, n],
      v = (t, n = !1) => [5, t, n],
      k = (t, n = !1) => [6, t, n],
      w = (t, n = !1) => [7, t, n],
      A = (t, n = !1) => [8, t, n],
      S = (t, n = !1) => [9, t, n],
      _ = (t, n = !1) => [10, t, n],
      R = (t, n = !1) => [11, t, n],
      x = (t, n = !1) => [12, t, n],
      M = (t, n = !1) => [13, t, n],
      T = (t, n = !1) => [14, t, n],
      $ = (t, n = !1) => [15, t, n],
      C = t => [16, t];
    function I(t = 1024, n) {
      let e,
        r = 0;
      const c = (n, c) => {
        if (r + c <= t) return n;
        t *= 2;
        const u = new Uint8Array(t);
        return u.set(n), (e = new DataView(u.buffer)), u;
      };
      return n
        ? Object(l.b)(I(t), n)
        : [
            () => new Uint8Array(t),
            t => t.slice(0, r),
            (n, [u, o, i = !1]) => {
              switch (
                ((e && e.buffer === n.buffer) ||
                  ((t = n.byteLength),
                  (e = new DataView(n.buffer, n.byteOffset))),
                u)
              ) {
                case 0:
                  (n = c(n, 1)), e.setInt8(r, o), r++;
                  break;
                case 1: {
                  const t = o.length;
                  (n = c(n, t)),
                    new Int8Array(n.buffer, n.byteOffset).set(o, r),
                    (r += t);
                  break;
                }
                case 2:
                  (n = c(n, 1)), e.setUint8(r, o), r++;
                  break;
                case 3: {
                  const t = o.length;
                  (n = c(n, t)).set(o, r), (r += t);
                  break;
                }
                case 4:
                  (n = c(n, 2)), e.setInt16(r, o, i), (r += 2);
                  break;
                case 5: {
                  const t = (o = o).length;
                  n = c(n, 2 * t);
                  for (let n = 0; n < t; n++, r += 2) e.setInt16(r, o[n], i);
                  break;
                }
                case 6:
                  (n = c(n, 4)), e.setUint16(r, o, i), (r += 4);
                  break;
                case 7: {
                  const t = (o = o).length;
                  n = c(n, 2 * t);
                  for (let n = 0; n < t; n++, r += 2) e.setUint16(r, o[n], i);
                  break;
                }
                case 8:
                  (n = c(n, 4)), e.setInt32(r, o, i), (r += 4);
                  break;
                case 9: {
                  const t = (o = o).length;
                  n = c(n, 4 * t);
                  for (let n = 0; n < t; n++, r += 4) e.setInt32(r, o[n], i);
                  break;
                }
                case 10:
                  (n = c(n, 4)), e.setUint32(r, o, i), (r += 4);
                  break;
                case 11: {
                  const t = (o = o).length;
                  n = c(n, 4 * t);
                  for (let n = 0; n < t; n++, r += 4) e.setUint32(r, o[n], i);
                  break;
                }
                case 12:
                  (n = c(n, 4)), e.setFloat32(r, o, i), (r += 4);
                  break;
                case 13: {
                  const t = (o = o).length;
                  n = c(n, 4 * t);
                  for (let n = 0; n < t; n++, r += 4) e.setFloat32(r, o[n], i);
                  break;
                }
                case 14:
                  (n = c(n, 8)), e.setFloat64(r, o, i), (r += 8);
                  break;
                case 15: {
                  const t = (o = o).length;
                  n = c(n, 8 * t);
                  for (let n = 0; n < t; n++, r += 8) e.setFloat64(r, o[n], i);
                  break;
                }
                case 16: {
                  let t = [...b(o)];
                  (n = c(n, t.length)).set(t, r), (r += t.length);
                  break;
                }
              }
              return n;
            }
          ];
    }
    function P(...t) {
      return (
        Object(c.a)(P, t, c.b) ||
        (n => {
          const e = n[2],
            r = (t[0] || 8) - 1,
            c = !1 !== t[1];
          return Object(u.a)(
            n,
            c
              ? (t, n) => {
                  for (let c = r; c >= 0 && !Object(o.c)(t); c--)
                    t = e(t, (n >>> c) & 1);
                  return t;
                }
              : (t, n) => {
                  for (let c = 0; c <= r && !Object(o.c)(t); c++)
                    t = e(t, (n >>> c) & 1);
                  return t;
                }
          );
        })
      );
    }
    var E = e(32);
    function N(t, n) {
      return (
        !n && (n = {}),
        (...e) => {
          const r = JSON.stringify(e);
          return void 0 !== r
            ? r in n
              ? n[r]
              : (n[r] = t.apply(null, e))
            : t.apply(null, e);
        }
      );
    }
    const F = N((t, n) => t.repeat(n)),
      U = N((t, n, e = "") => {
        const r = F("0", n);
        return c => (
          (c = (c >>> 0).toString(t)),
          e + (c.length < n ? r.substr(c.length) + c : c)
        );
      }),
      Y = (U(2, 8), U(16, 2)),
      D = (U(16, 4), U(16, 6), U(16, 8));
    var z = e(7),
      L = e(17),
      G = e(4),
      B = e(12),
      q = e(15);
    function V(...t) {
      const n = Object(c.a)(V, t, c.b);
      if (n) return n;
      const { cols: e, address: r } = Object.assign(
        { cols: 16, address: 0 },
        t[0]
      );
      return Object(z.a)(
        Object(L.a)(e, 0),
        Object(G.a)(
          Object(E.a)(
            Y,
            t => (t > 31 && t < 128 ? String.fromCharCode(t) : ".")
          )
        ),
        Object(B.a)(e, !0),
        Object(G.a)(
          Object(E.a)(
            t => t.map(t => t[0]).join(" "),
            t => t.map(t => t[1]).join("")
          )
        ),
        Object(q.a)((t, [n, c]) => `${D(r + t * e)} | ${n} | ${c}`)
      );
    }
    function W(...t) {
      return (
        Object(c.a)(W, t, c.b) ||
        (n => {
          const e = t[0],
            r = t[1] || 8;
          return e < r ? K(n, e, r) : e > r ? H(n, e, r) : n;
        })
      );
    }
    const K = ([t, n, e], r, c) => {
        const u = c - r,
          i = (1 << c) - 1,
          f = (1 << r) - 1;
        let a = 0,
          s = 0;
        return [
          t,
          t => n(a > 0 ? e(t, s) : t),
          (t, n) => {
            let l = 0;
            do {
              (t = e(t, s + ((n >>> (u + a)) & f))),
                (l += r - a),
                (n = (n << (r - a)) & i),
                (s = 0),
                (a = 0);
            } while (l <= u && !Object(o.c)(t));
            return (s = (a = c - l) > 0 ? (n >>> u) & f : 0), t;
          }
        ];
      },
      H = ([t, n, e], r, c) => {
        const u = (1 << c) - 1;
        let o = 0,
          i = 0;
        return [
          t,
          t => n(o > 0 ? e(t, i) : t),
          (t, n) => {
            if (o + c <= r)
              (i |= (n & u) << (r - c - o)),
                (o += c) === r && ((t = e(t, i)), (i = 0), (o = 0));
            else {
              const u = r - o;
              (t = e(t, i | ((n >>> (o = c - u)) & ((1 << u) - 1)))),
                (i = (n & ((1 << o) - 1)) << (r - o));
            }
            return t;
          }
        ];
      };
    var X = e(23),
      J = e(16);
    const Q = (t, n, e = X.a) => Object(J.a)(() => (e.float() < t ? 1 : 0), n);
    e.d(n, "Type", function() {
      return r;
    }),
      e.d(n, "base64Decode", function() {
        return a;
      }),
      e.d(n, "base64Encode", function() {
        return s;
      }),
      e.d(n, "i8", function() {
        return h;
      }),
      e.d(n, "i8array", function() {
        return p;
      }),
      e.d(n, "u8", function() {
        return g;
      }),
      e.d(n, "u8array", function() {
        return y;
      }),
      e.d(n, "i16", function() {
        return m;
      }),
      e.d(n, "i16array", function() {
        return v;
      }),
      e.d(n, "u16", function() {
        return k;
      }),
      e.d(n, "u16array", function() {
        return w;
      }),
      e.d(n, "i32", function() {
        return A;
      }),
      e.d(n, "i32array", function() {
        return S;
      }),
      e.d(n, "u32", function() {
        return _;
      }),
      e.d(n, "u32array", function() {
        return R;
      }),
      e.d(n, "f32", function() {
        return x;
      }),
      e.d(n, "f32array", function() {
        return M;
      }),
      e.d(n, "f64", function() {
        return T;
      }),
      e.d(n, "f64array", function() {
        return $;
      }),
      e.d(n, "str", function() {
        return C;
      }),
      e.d(n, "bytes", function() {
        return I;
      }),
      e.d(n, "bits", function() {
        return P;
      }),
      e.d(n, "hexDump", function() {
        return V;
      }),
      e.d(n, "partitionBits", function() {
        return W;
      }),
      e.d(n, "randomBits", function() {
        return Q;
      }),
      e.d(n, "utf8Decode", function() {
        return d;
      }),
      e.d(n, "utf8Encode", function() {
        return b;
      }),
      e.d(n, "utf8Length", function() {
        return j;
      });
  },
  function(t, n, e) {
    "use strict";
    e.r(n);
    const r = /^([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?$/,
      c = {
        "?xml": "?>\n",
        "!DOCTYPE": ">\n",
        "!ENTITY": ">\n",
        "!ELEMENT": ">\n",
        "!ATTLIST": ">\n"
      },
      u = "animate animateColor animateMotion animateTransform circle clipPath color-profile defs desc discard ellipse feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence filter font foreignObject g image line linearGradient marker mask metadata mpath path pattern polygon polyline radialGradient rect set stop style svg switch symbol text textPath title tref tspan use view"
        .split(" ")
        .reduce((t, n) => ((t[n] = 1), t), {}),
      o = "area base br circle col command ellipse embed hr img input keygen line link meta param path polygon polyline rect source stop track use wbr ?xml"
        .split(" ")
        .reduce((t, n) => ((t[n] = 1), t), {}),
      i = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
      },
      f = { button: 1, option: 1, text: 1, textarea: 1 },
      a = new RegExp(`[${Object.keys(i)}]`, "g");
    var s = e(31);
    const l = t => {
      let n,
        e = "";
      for (let r in t)
        (n = t[r]),
          Object(s.a)(n) && (n = n(t)),
          null != n && (e += `${r}:${n};`);
      return e;
    };
    var d = e(25);
    const b = (t, n) => {
        if (null == t || !n || !n.length) return t;
        const e = Object.assign({}, t);
        for (let t of n) {
          const n = e[t];
          Object(d.a)(n, "deref") && (e[t] = n.deref());
        }
        return e;
      },
      O = t => t.replace(a, t => i[t]),
      j = t => "string" == typeof t,
      h = t =>
        null != t &&
        "string" != typeof t &&
        "function" == typeof t[Symbol.iterator],
      p = Object.getPrototypeOf,
      g = t => {
        let n;
        return (
          null != t &&
          "object" == typeof t &&
          (null === (n = p(t)) || null === p(n))
        );
      };
    var y = e(30);
    const m = (t, n, e = !1, r = !1, c = r, u = [0]) => v(t, n, e, r, c, u),
      v = (t, n, e, r, u, i) => {
        if (null == t) return "";
        if (Array.isArray(t)) {
          if (!t.length) return "";
          let a = t[0];
          if (Object(s.a)(a))
            return v(a.apply(null, [n, ...t.slice(1)]), n, e, r, u, i);
          if (Object(d.a)(a, "render"))
            return v(a.render.apply(null, [n, ...t.slice(1)]), n, e, r, u, i);
          if (j(a)) {
            if ("__COMMENT__" === a)
              return t.length > 2
                ? `\n\x3c!--\n${t
                    .slice(1)
                    .map(t => "    " + t)
                    .join("\n")}\n--\x3e\n`
                : `\n\x3c!-- ${t[1]} --\x3e\n`;
            a = (t = w(t))[0];
            const l = t[1];
            if (l.__skip || !1 === l.__serialize) return "";
            let d = t[2],
              b = `<${a}`;
            u && void 0 === l.key && (l.key = i.join("-"));
            for (let t in l)
              if (!t.startsWith("__") && l.hasOwnProperty(t)) {
                let n = l[t];
                if (null != n) {
                  if (
                    Object(s.a)(n) &&
                    (/^on\w+/.test(t) || null == (n = n(l)))
                  )
                    continue;
                  !0 === n
                    ? (b += " " + t)
                    : !1 !== n &&
                      (n = n.toString()).length &&
                      (b += ` ${t}="${e ? O(n) : n}"`);
                }
              }
            if (d) {
              o[a] && Object(y.a)(`No body allowed in tag: ${a}`);
              const t = c[a];
              (b += t ? " " : ">"), (r = r && !t && !f[a]);
              for (let t = 0, c = d.length; t < c; t++)
                b += v(d[t], n, e, r, u, [...i, t]);
              return (b += t || `</${a}>`);
            }
            return o[a] ? (b += c[a] || "/>") : (b += `></${a}>`);
          }
          if (h(t)) return k(t, n, e, r, u, i);
          Object(y.a)(`invalid tree node: ${t}`);
        }
        return Object(s.a)(t)
          ? v(t(n), n, e, r, u, i)
          : Object(d.a)(t, "toHiccup")
            ? v(t.toHiccup(n), n, e, r, u, i)
            : Object(d.a)(t, "deref")
              ? v(t.deref(), n, e, r, u, i)
              : h(t)
                ? k(t, n, e, r, u, i)
                : ((t = e ? O(t.toString()) : t),
                  r
                    ? `<span${u ? ` key="${i.join("-")}"` : ""}>${t}</span>`
                    : t);
      },
      k = (t, n, e, r, c, u) => {
        const o = [],
          i = u.slice(0, u.length - 1);
        let f = 0;
        for (let u of t) o.push(v(u, n, e, r, c, [...i, f++]));
        return o.join("");
      },
      w = t => {
        let n,
          e,
          c,
          u = t[0];
        const o = g(t[1]),
          i = o ? Object.assign({}, t[1]) : {};
        return (
          (j(u) && (n = r.exec(u))) ||
            Object(y.a)(`"${u}" is not a valid tag name`),
          (u = n[1]),
          (e = n[2]),
          (c = n[3]),
          e && (i.id = e),
          c &&
            ((c = c.replace(/\./g, " ")),
            i.class ? (i.class += " " + c) : (i.class = c)),
          t.length > 1 &&
          (g(i.style) && (i.style = l(i.style)),
          (t = t.slice(o ? 2 : 1).filter(t => null != t)).length > 0)
            ? [u, i, t]
            : [u, i]
        );
      };
    e.d(n, "SVG_NS", function() {
      return "http://www.w3.org/2000/svg";
    }),
      e.d(n, "XLINK_NS", function() {
        return "http://www.w3.org/1999/xlink";
      }),
      e.d(n, "XHTML_NS", function() {
        return "http://www.w3.org/1999/xhtml";
      }),
      e.d(n, "TAG_REGEXP", function() {
        return r;
      }),
      e.d(n, "PROC_TAGS", function() {
        return c;
      }),
      e.d(n, "SVG_TAGS", function() {
        return u;
      }),
      e.d(n, "VOID_TAGS", function() {
        return o;
      }),
      e.d(n, "ENTITIES", function() {
        return i;
      }),
      e.d(n, "COMMENT", function() {
        return "__COMMENT__";
      }),
      e.d(n, "NO_SPANS", function() {
        return f;
      }),
      e.d(n, "ENTITY_RE", function() {
        return a;
      }),
      e.d(n, "css", function() {
        return l;
      }),
      e.d(n, "derefContext", function() {
        return b;
      }),
      e.d(n, "escape", function() {
        return O;
      }),
      e.d(n, "serialize", function() {
        return m;
      }),
      e.d(n, "normalize", function() {
        return w;
      });
  },
  function(t, n, e) {
    "use strict";
    const r = 1 / 4294967295;
    class c {
      float(t = 1) {
        return this.int() * r * t;
      }
      norm(t = 1) {
        return this.int() * r * t * 2 - t;
      }
      minmax(t, n) {
        return this.float() * (n - t) + t;
      }
      gaussian(t = 10, n = -0.5, e = 1) {
        let r = 0,
          c = t;
        for (; c-- > 0; ) r += this.float(e);
        return r / t + n;
      }
    }
    e.d(n, "a", function() {
      return o;
    });
    const u = Math.random;
    const o = new class extends c {
      int() {
        return (4294967295 * u()) >>> 0;
      }
      float(t = 1) {
        return u() * t;
      }
    }();
  },
  function(t, n, e) {
    "use strict";
    e.d(n, "a", function() {
      return r;
    });
    const r = t => {
      throw new class extends Error {
        constructor(t) {
          super(`illegal arity: ${t}`);
        }
      }(t);
    };
  },
  function(t, n, e) {
    "use strict";
    e.d(n, "a", function() {
      return r;
    });
    const r = (t, n) => null != t && "function" == typeof t[n];
  },
  function(t, n, e) {
    "use strict";
    e.d(n, "a", function() {
      return r;
    });
    const r = t => null != t && "function" != typeof t && void 0 !== t.length;
  },
  function(t, n, e) {
    "use strict";
    e.d(n, "a", function() {
      return r;
    });
    const r = t => null != t && "function" == typeof t[Symbol.iterator];
  },
  ,
  function(t, n, e) {
    "use strict";
    e.d(n, "b", function() {
      return r;
    }),
      e.d(n, "a", function() {
        return c;
      });
    const r = Symbol(),
      c = () => {};
  },
  function(t, n, e) {
    "use strict";
    e.d(n, "a", function() {
      return r;
    });
    const r = t => {
      throw new class extends Error {
        constructor(t) {
          super("illegal argument(s)" + (void 0 !== t ? ": " + t : ""));
        }
      }(t);
    };
  },
  function(t, n, e) {
    "use strict";
    e.d(n, "a", function() {
      return r;
    });
    const r = t => "function" == typeof t;
  },
  function(t, n, e) {
    "use strict";
    function r(...t) {
      const [n, e, r, c, u, o, i, f] = t;
      switch (t.length) {
        case 1:
          return t => [n(t)];
        case 2:
          return t => [n(t), e(t)];
        case 3:
          return t => [n(t), e(t), r(t)];
        case 4:
          return t => [n(t), e(t), r(t), c(t)];
        case 5:
          return t => [n(t), e(t), r(t), c(t), u(t)];
        case 6:
          return t => [n(t), e(t), r(t), c(t), u(t), o(t)];
        case 7:
          return t => [n(t), e(t), r(t), c(t), u(t), o(t), i(t)];
        case 8:
          return t => [n(t), e(t), r(t), c(t), u(t), o(t), i(t), f(t)];
        default:
          return n => {
            let e = new Array(t.length);
            for (let r = t.length; --r >= 0; ) e[r] = t[r](n);
            return e;
          };
      }
    }
    e.d(n, "a", function() {
      return r;
    });
  }
]);
