/*! For license information please see theme.js.LICENSE.txt */
(self.webpackChunkunseen = self.webpackChunkunseen || []).push([
  [155],
  {
    4212: function (e) {
      var t;
      self,
        (t = function () {
          return (() => {
            var e = {
                4672: (e) => {
                  const t = {
                    html: document.documentElement,
                    body: document.body,
                    window: { w: window.innerWidth, h: window.innerHeight },
                  };
                  e.exports = t;
                },
                5336: (e) => {
                  e.exports = function (e, t) {
                    let n = null;
                    return function () {
                      clearTimeout(n);
                      const i = arguments,
                        r = this;
                      n = setTimeout(function () {
                        e.apply(r, i);
                      }, t);
                    };
                  };
                },
                6077: (e, t, n) => {
                  var i = n(111);
                  e.exports = function (e) {
                    if (!i(e) && null !== e)
                      throw TypeError(
                        "Can't set " + String(e) + " as a prototype"
                      );
                    return e;
                  };
                },
                1223: (e, t, n) => {
                  var i = n(5112),
                    r = n(30),
                    o = n(3070),
                    s = i("unscopables"),
                    a = Array.prototype;
                  null == a[s] &&
                    o.f(a, s, { configurable: !0, value: r(null) }),
                    (e.exports = function (e) {
                      a[s][e] = !0;
                    });
                },
                9670: (e, t, n) => {
                  var i = n(111);
                  e.exports = function (e) {
                    if (!i(e)) throw TypeError(String(e) + " is not an object");
                    return e;
                  };
                },
                1318: (e, t, n) => {
                  var i = n(5656),
                    r = n(7466),
                    o = n(1400),
                    s = function (e) {
                      return function (t, n, s) {
                        var a,
                          l = i(t),
                          u = r(l.length),
                          c = o(s, u);
                        if (e && n != n) {
                          for (; u > c; ) if ((a = l[c++]) != a) return !0;
                        } else
                          for (; u > c; c++)
                            if ((e || c in l) && l[c] === n) return e || c || 0;
                        return !e && -1;
                      };
                    };
                  e.exports = { includes: s(!0), indexOf: s(!1) };
                },
                4326: (e) => {
                  var t = {}.toString;
                  e.exports = function (e) {
                    return t.call(e).slice(8, -1);
                  };
                },
                9920: (e, t, n) => {
                  var i = n(6656),
                    r = n(3887),
                    o = n(1236),
                    s = n(3070);
                  e.exports = function (e, t) {
                    for (
                      var n = r(t), a = s.f, l = o.f, u = 0;
                      u < n.length;
                      u++
                    ) {
                      var c = n[u];
                      i(e, c) || a(e, c, l(t, c));
                    }
                  };
                },
                8544: (e, t, n) => {
                  var i = n(7293);
                  e.exports = !i(function () {
                    function e() {}
                    return (
                      (e.prototype.constructor = null),
                      Object.getPrototypeOf(new e()) !== e.prototype
                    );
                  });
                },
                4994: (e, t, n) => {
                  "use strict";
                  var i = n(3383).IteratorPrototype,
                    r = n(30),
                    o = n(9114),
                    s = n(8003),
                    a = n(7497),
                    l = function () {
                      return this;
                    };
                  e.exports = function (e, t, n) {
                    var u = t + " Iterator";
                    return (
                      (e.prototype = r(i, { next: o(1, n) })),
                      s(e, u, !1, !0),
                      (a[u] = l),
                      e
                    );
                  };
                },
                8880: (e, t, n) => {
                  var i = n(9781),
                    r = n(3070),
                    o = n(9114);
                  e.exports = i
                    ? function (e, t, n) {
                        return r.f(e, t, o(1, n));
                      }
                    : function (e, t, n) {
                        return (e[t] = n), e;
                      };
                },
                9114: (e) => {
                  e.exports = function (e, t) {
                    return {
                      enumerable: !(1 & e),
                      configurable: !(2 & e),
                      writable: !(4 & e),
                      value: t,
                    };
                  };
                },
                654: (e, t, n) => {
                  "use strict";
                  var i = n(2109),
                    r = n(4994),
                    o = n(9518),
                    s = n(7674),
                    a = n(8003),
                    l = n(8880),
                    u = n(1320),
                    c = n(5112),
                    h = n(1913),
                    d = n(7497),
                    f = n(3383),
                    m = f.IteratorPrototype,
                    p = f.BUGGY_SAFARI_ITERATORS,
                    v = c("iterator"),
                    g = "keys",
                    x = "values",
                    y = "entries",
                    D = function () {
                      return this;
                    };
                  e.exports = function (e, t, n, c, f, b, _) {
                    r(n, t, c);
                    var w,
                      S,
                      E,
                      P = function (e) {
                        if (e === f && M) return M;
                        if (!p && e in F) return F[e];
                        switch (e) {
                          case g:
                          case x:
                          case y:
                            return function () {
                              return new n(this, e);
                            };
                        }
                        return function () {
                          return new n(this);
                        };
                      },
                      C = t + " Iterator",
                      T = !1,
                      F = e.prototype,
                      A = F[v] || F["@@iterator"] || (f && F[f]),
                      M = (!p && A) || P(f),
                      O = ("Array" == t && F.entries) || A;
                    if (
                      (O &&
                        ((w = o(O.call(new e()))),
                        m !== Object.prototype &&
                          w.next &&
                          (h ||
                            o(w) === m ||
                            (s
                              ? s(w, m)
                              : "function" != typeof w[v] && l(w, v, D)),
                          a(w, C, !0, !0),
                          h && (d[C] = D))),
                      f == x &&
                        A &&
                        A.name !== x &&
                        ((T = !0),
                        (M = function () {
                          return A.call(this);
                        })),
                      (h && !_) || F[v] === M || l(F, v, M),
                      (d[t] = M),
                      f)
                    )
                      if (
                        ((S = {
                          values: P(x),
                          keys: b ? M : P(g),
                          entries: P(y),
                        }),
                        _)
                      )
                        for (E in S) (p || T || !(E in F)) && u(F, E, S[E]);
                      else i({ target: t, proto: !0, forced: p || T }, S);
                    return S;
                  };
                },
                9781: (e, t, n) => {
                  var i = n(7293);
                  e.exports = !i(function () {
                    return (
                      7 !=
                      Object.defineProperty({}, 1, {
                        get: function () {
                          return 7;
                        },
                      })[1]
                    );
                  });
                },
                317: (e, t, n) => {
                  var i = n(7854),
                    r = n(111),
                    o = i.document,
                    s = r(o) && r(o.createElement);
                  e.exports = function (e) {
                    return s ? o.createElement(e) : {};
                  };
                },
                8324: (e) => {
                  e.exports = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0,
                  };
                },
                5268: (e, t, n) => {
                  var i = n(4326),
                    r = n(7854);
                  e.exports = "process" == i(r.process);
                },
                8113: (e, t, n) => {
                  var i = n(5005);
                  e.exports = i("navigator", "userAgent") || "";
                },
                7392: (e, t, n) => {
                  var i,
                    r,
                    o = n(7854),
                    s = n(8113),
                    a = o.process,
                    l = a && a.versions,
                    u = l && l.v8;
                  u
                    ? (r = (i = u.split("."))[0] + i[1])
                    : s &&
                      (!(i = s.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
                      (i = s.match(/Chrome\/(\d+)/)) &&
                      (r = i[1]),
                    (e.exports = r && +r);
                },
                748: (e) => {
                  e.exports = [
                    "constructor",
                    "hasOwnProperty",
                    "isPrototypeOf",
                    "propertyIsEnumerable",
                    "toLocaleString",
                    "toString",
                    "valueOf",
                  ];
                },
                2109: (e, t, n) => {
                  var i = n(7854),
                    r = n(1236).f,
                    o = n(8880),
                    s = n(1320),
                    a = n(3505),
                    l = n(9920),
                    u = n(4705);
                  e.exports = function (e, t) {
                    var n,
                      c,
                      h,
                      d,
                      f,
                      m = e.target,
                      p = e.global,
                      v = e.stat;
                    if (
                      (n = p
                        ? i
                        : v
                        ? i[m] || a(m, {})
                        : (i[m] || {}).prototype)
                    )
                      for (c in t) {
                        if (
                          ((d = t[c]),
                          (h = e.noTargetGet ? (f = r(n, c)) && f.value : n[c]),
                          !u(p ? c : m + (v ? "." : "#") + c, e.forced) &&
                            void 0 !== h)
                        ) {
                          if (typeof d == typeof h) continue;
                          l(d, h);
                        }
                        (e.sham || (h && h.sham)) && o(d, "sham", !0),
                          s(n, c, d, e);
                      }
                  };
                },
                7293: (e) => {
                  e.exports = function (e) {
                    try {
                      return !!e();
                    } catch (e) {
                      return !0;
                    }
                  };
                },
                5005: (e, t, n) => {
                  var i = n(857),
                    r = n(7854),
                    o = function (e) {
                      return "function" == typeof e ? e : void 0;
                    };
                  e.exports = function (e, t) {
                    return arguments.length < 2
                      ? o(i[e]) || o(r[e])
                      : (i[e] && i[e][t]) || (r[e] && r[e][t]);
                  };
                },
                7854: (e, t, n) => {
                  var i = function (e) {
                    return e && e.Math == Math && e;
                  };
                  e.exports =
                    i("object" == typeof globalThis && globalThis) ||
                    i("object" == typeof window && window) ||
                    i("object" == typeof self && self) ||
                    i("object" == typeof n.g && n.g) ||
                    (function () {
                      return this;
                    })() ||
                    Function("return this")();
                },
                6656: (e, t, n) => {
                  var i = n(7908),
                    r = {}.hasOwnProperty;
                  e.exports = function (e, t) {
                    return r.call(i(e), t);
                  };
                },
                3501: (e) => {
                  e.exports = {};
                },
                490: (e, t, n) => {
                  var i = n(5005);
                  e.exports = i("document", "documentElement");
                },
                4664: (e, t, n) => {
                  var i = n(9781),
                    r = n(7293),
                    o = n(317);
                  e.exports =
                    !i &&
                    !r(function () {
                      return (
                        7 !=
                        Object.defineProperty(o("div"), "a", {
                          get: function () {
                            return 7;
                          },
                        }).a
                      );
                    });
                },
                8361: (e, t, n) => {
                  var i = n(7293),
                    r = n(4326),
                    o = "".split;
                  e.exports = i(function () {
                    return !Object("z").propertyIsEnumerable(0);
                  })
                    ? function (e) {
                        return "String" == r(e) ? o.call(e, "") : Object(e);
                      }
                    : Object;
                },
                2788: (e, t, n) => {
                  var i = n(5465),
                    r = Function.toString;
                  "function" != typeof i.inspectSource &&
                    (i.inspectSource = function (e) {
                      return r.call(e);
                    }),
                    (e.exports = i.inspectSource);
                },
                9909: (e, t, n) => {
                  var i,
                    r,
                    o,
                    s = n(8536),
                    a = n(7854),
                    l = n(111),
                    u = n(8880),
                    c = n(6656),
                    h = n(5465),
                    d = n(6200),
                    f = n(3501),
                    m = "Object already initialized",
                    p = a.WeakMap;
                  if (s) {
                    var v = h.state || (h.state = new p()),
                      g = v.get,
                      x = v.has,
                      y = v.set;
                    (i = function (e, t) {
                      if (x.call(v, e)) throw new TypeError(m);
                      return (t.facade = e), y.call(v, e, t), t;
                    }),
                      (r = function (e) {
                        return g.call(v, e) || {};
                      }),
                      (o = function (e) {
                        return x.call(v, e);
                      });
                  } else {
                    var D = d("state");
                    (f[D] = !0),
                      (i = function (e, t) {
                        if (c(e, D)) throw new TypeError(m);
                        return (t.facade = e), u(e, D, t), t;
                      }),
                      (r = function (e) {
                        return c(e, D) ? e[D] : {};
                      }),
                      (o = function (e) {
                        return c(e, D);
                      });
                  }
                  e.exports = {
                    set: i,
                    get: r,
                    has: o,
                    enforce: function (e) {
                      return o(e) ? r(e) : i(e, {});
                    },
                    getterFor: function (e) {
                      return function (t) {
                        var n;
                        if (!l(t) || (n = r(t)).type !== e)
                          throw TypeError(
                            "Incompatible receiver, " + e + " required"
                          );
                        return n;
                      };
                    },
                  };
                },
                4705: (e, t, n) => {
                  var i = n(7293),
                    r = /#|\.prototype\./,
                    o = function (e, t) {
                      var n = a[s(e)];
                      return (
                        n == u ||
                        (n != l && ("function" == typeof t ? i(t) : !!t))
                      );
                    },
                    s = (o.normalize = function (e) {
                      return String(e).replace(r, ".").toLowerCase();
                    }),
                    a = (o.data = {}),
                    l = (o.NATIVE = "N"),
                    u = (o.POLYFILL = "P");
                  e.exports = o;
                },
                111: (e) => {
                  e.exports = function (e) {
                    return "object" == typeof e
                      ? null !== e
                      : "function" == typeof e;
                  };
                },
                1913: (e) => {
                  e.exports = !1;
                },
                3383: (e, t, n) => {
                  "use strict";
                  var i,
                    r,
                    o,
                    s = n(7293),
                    a = n(9518),
                    l = n(8880),
                    u = n(6656),
                    c = n(5112),
                    h = n(1913),
                    d = c("iterator"),
                    f = !1;
                  [].keys &&
                    ("next" in (o = [].keys())
                      ? (r = a(a(o))) !== Object.prototype && (i = r)
                      : (f = !0));
                  var m =
                    null == i ||
                    s(function () {
                      var e = {};
                      return i[d].call(e) !== e;
                    });
                  m && (i = {}),
                    (h && !m) ||
                      u(i, d) ||
                      l(i, d, function () {
                        return this;
                      }),
                    (e.exports = {
                      IteratorPrototype: i,
                      BUGGY_SAFARI_ITERATORS: f,
                    });
                },
                7497: (e) => {
                  e.exports = {};
                },
                133: (e, t, n) => {
                  var i = n(5268),
                    r = n(7392),
                    o = n(7293);
                  e.exports =
                    !!Object.getOwnPropertySymbols &&
                    !o(function () {
                      return !Symbol.sham && (i ? 38 === r : r > 37 && r < 41);
                    });
                },
                8536: (e, t, n) => {
                  var i = n(7854),
                    r = n(2788),
                    o = i.WeakMap;
                  e.exports =
                    "function" == typeof o && /native code/.test(r(o));
                },
                30: (e, t, n) => {
                  var i,
                    r = n(9670),
                    o = n(6048),
                    s = n(748),
                    a = n(3501),
                    l = n(490),
                    u = n(317),
                    c = n(6200),
                    h = c("IE_PROTO"),
                    d = function () {},
                    f = function (e) {
                      return "<script>" + e + "</script>";
                    },
                    m = function () {
                      try {
                        i = document.domain && new ActiveXObject("htmlfile");
                      } catch (e) {}
                      var e, t;
                      m = i
                        ? (function (e) {
                            e.write(f("")), e.close();
                            var t = e.parentWindow.Object;
                            return (e = null), t;
                          })(i)
                        : (((t = u("iframe")).style.display = "none"),
                          l.appendChild(t),
                          (t.src = String("javascript:")),
                          (e = t.contentWindow.document).open(),
                          e.write(f("document.F=Object")),
                          e.close(),
                          e.F);
                      for (var n = s.length; n--; ) delete m.prototype[s[n]];
                      return m();
                    };
                  (a[h] = !0),
                    (e.exports =
                      Object.create ||
                      function (e, t) {
                        var n;
                        return (
                          null !== e
                            ? ((d.prototype = r(e)),
                              (n = new d()),
                              (d.prototype = null),
                              (n[h] = e))
                            : (n = m()),
                          void 0 === t ? n : o(n, t)
                        );
                      });
                },
                6048: (e, t, n) => {
                  var i = n(9781),
                    r = n(3070),
                    o = n(9670),
                    s = n(1956);
                  e.exports = i
                    ? Object.defineProperties
                    : function (e, t) {
                        o(e);
                        for (var n, i = s(t), a = i.length, l = 0; a > l; )
                          r.f(e, (n = i[l++]), t[n]);
                        return e;
                      };
                },
                3070: (e, t, n) => {
                  var i = n(9781),
                    r = n(4664),
                    o = n(9670),
                    s = n(7593),
                    a = Object.defineProperty;
                  t.f = i
                    ? a
                    : function (e, t, n) {
                        if ((o(e), (t = s(t, !0)), o(n), r))
                          try {
                            return a(e, t, n);
                          } catch (e) {}
                        if ("get" in n || "set" in n)
                          throw TypeError("Accessors not supported");
                        return "value" in n && (e[t] = n.value), e;
                      };
                },
                1236: (e, t, n) => {
                  var i = n(9781),
                    r = n(5296),
                    o = n(9114),
                    s = n(5656),
                    a = n(7593),
                    l = n(6656),
                    u = n(4664),
                    c = Object.getOwnPropertyDescriptor;
                  t.f = i
                    ? c
                    : function (e, t) {
                        if (((e = s(e)), (t = a(t, !0)), u))
                          try {
                            return c(e, t);
                          } catch (e) {}
                        if (l(e, t)) return o(!r.f.call(e, t), e[t]);
                      };
                },
                8006: (e, t, n) => {
                  var i = n(6324),
                    r = n(748).concat("length", "prototype");
                  t.f =
                    Object.getOwnPropertyNames ||
                    function (e) {
                      return i(e, r);
                    };
                },
                5181: (e, t) => {
                  t.f = Object.getOwnPropertySymbols;
                },
                9518: (e, t, n) => {
                  var i = n(6656),
                    r = n(7908),
                    o = n(6200),
                    s = n(8544),
                    a = o("IE_PROTO"),
                    l = Object.prototype;
                  e.exports = s
                    ? Object.getPrototypeOf
                    : function (e) {
                        return (
                          (e = r(e)),
                          i(e, a)
                            ? e[a]
                            : "function" == typeof e.constructor &&
                              e instanceof e.constructor
                            ? e.constructor.prototype
                            : e instanceof Object
                            ? l
                            : null
                        );
                      };
                },
                6324: (e, t, n) => {
                  var i = n(6656),
                    r = n(5656),
                    o = n(1318).indexOf,
                    s = n(3501);
                  e.exports = function (e, t) {
                    var n,
                      a = r(e),
                      l = 0,
                      u = [];
                    for (n in a) !i(s, n) && i(a, n) && u.push(n);
                    for (; t.length > l; )
                      i(a, (n = t[l++])) && (~o(u, n) || u.push(n));
                    return u;
                  };
                },
                1956: (e, t, n) => {
                  var i = n(6324),
                    r = n(748);
                  e.exports =
                    Object.keys ||
                    function (e) {
                      return i(e, r);
                    };
                },
                5296: (e, t) => {
                  "use strict";
                  var n = {}.propertyIsEnumerable,
                    i = Object.getOwnPropertyDescriptor,
                    r = i && !n.call({ 1: 2 }, 1);
                  t.f = r
                    ? function (e) {
                        var t = i(this, e);
                        return !!t && t.enumerable;
                      }
                    : n;
                },
                7674: (e, t, n) => {
                  var i = n(9670),
                    r = n(6077);
                  e.exports =
                    Object.setPrototypeOf ||
                    ("__proto__" in {}
                      ? (function () {
                          var e,
                            t = !1,
                            n = {};
                          try {
                            (e = Object.getOwnPropertyDescriptor(
                              Object.prototype,
                              "__proto__"
                            ).set).call(n, []),
                              (t = n instanceof Array);
                          } catch (e) {}
                          return function (n, o) {
                            return (
                              i(n),
                              r(o),
                              t ? e.call(n, o) : (n.__proto__ = o),
                              n
                            );
                          };
                        })()
                      : void 0);
                },
                3887: (e, t, n) => {
                  var i = n(5005),
                    r = n(8006),
                    o = n(5181),
                    s = n(9670);
                  e.exports =
                    i("Reflect", "ownKeys") ||
                    function (e) {
                      var t = r.f(s(e)),
                        n = o.f;
                      return n ? t.concat(n(e)) : t;
                    };
                },
                857: (e, t, n) => {
                  var i = n(7854);
                  e.exports = i;
                },
                1320: (e, t, n) => {
                  var i = n(7854),
                    r = n(8880),
                    o = n(6656),
                    s = n(3505),
                    a = n(2788),
                    l = n(9909),
                    u = l.get,
                    c = l.enforce,
                    h = String(String).split("String");
                  (e.exports = function (e, t, n, a) {
                    var l,
                      u = !!a && !!a.unsafe,
                      d = !!a && !!a.enumerable,
                      f = !!a && !!a.noTargetGet;
                    "function" == typeof n &&
                      ("string" != typeof t || o(n, "name") || r(n, "name", t),
                      (l = c(n)).source ||
                        (l.source = h.join("string" == typeof t ? t : ""))),
                      e !== i
                        ? (u ? !f && e[t] && (d = !0) : delete e[t],
                          d ? (e[t] = n) : r(e, t, n))
                        : d
                        ? (e[t] = n)
                        : s(t, n);
                  })(Function.prototype, "toString", function () {
                    return (
                      ("function" == typeof this && u(this).source) || a(this)
                    );
                  });
                },
                4488: (e) => {
                  e.exports = function (e) {
                    if (null == e) throw TypeError("Can't call method on " + e);
                    return e;
                  };
                },
                3505: (e, t, n) => {
                  var i = n(7854),
                    r = n(8880);
                  e.exports = function (e, t) {
                    try {
                      r(i, e, t);
                    } catch (n) {
                      i[e] = t;
                    }
                    return t;
                  };
                },
                8003: (e, t, n) => {
                  var i = n(3070).f,
                    r = n(6656),
                    o = n(5112)("toStringTag");
                  e.exports = function (e, t, n) {
                    e &&
                      !r((e = n ? e : e.prototype), o) &&
                      i(e, o, { configurable: !0, value: t });
                  };
                },
                6200: (e, t, n) => {
                  var i = n(2309),
                    r = n(9711),
                    o = i("keys");
                  e.exports = function (e) {
                    return o[e] || (o[e] = r(e));
                  };
                },
                5465: (e, t, n) => {
                  var i = n(7854),
                    r = n(3505),
                    o = "__core-js_shared__",
                    s = i[o] || r(o, {});
                  e.exports = s;
                },
                2309: (e, t, n) => {
                  var i = n(1913),
                    r = n(5465);
                  (e.exports = function (e, t) {
                    return r[e] || (r[e] = void 0 !== t ? t : {});
                  })("versions", []).push({
                    version: "3.11.1",
                    mode: i ? "pure" : "global",
                    copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
                  });
                },
                1400: (e, t, n) => {
                  var i = n(9958),
                    r = Math.max,
                    o = Math.min;
                  e.exports = function (e, t) {
                    var n = i(e);
                    return n < 0 ? r(n + t, 0) : o(n, t);
                  };
                },
                5656: (e, t, n) => {
                  var i = n(8361),
                    r = n(4488);
                  e.exports = function (e) {
                    return i(r(e));
                  };
                },
                9958: (e) => {
                  var t = Math.ceil,
                    n = Math.floor;
                  e.exports = function (e) {
                    return isNaN((e = +e)) ? 0 : (e > 0 ? n : t)(e);
                  };
                },
                7466: (e, t, n) => {
                  var i = n(9958),
                    r = Math.min;
                  e.exports = function (e) {
                    return e > 0 ? r(i(e), 9007199254740991) : 0;
                  };
                },
                7908: (e, t, n) => {
                  var i = n(4488);
                  e.exports = function (e) {
                    return Object(i(e));
                  };
                },
                7593: (e, t, n) => {
                  var i = n(111);
                  e.exports = function (e, t) {
                    if (!i(e)) return e;
                    var n, r;
                    if (
                      t &&
                      "function" == typeof (n = e.toString) &&
                      !i((r = n.call(e)))
                    )
                      return r;
                    if (
                      "function" == typeof (n = e.valueOf) &&
                      !i((r = n.call(e)))
                    )
                      return r;
                    if (
                      !t &&
                      "function" == typeof (n = e.toString) &&
                      !i((r = n.call(e)))
                    )
                      return r;
                    throw TypeError("Can't convert object to primitive value");
                  };
                },
                9711: (e) => {
                  var t = 0,
                    n = Math.random();
                  e.exports = function (e) {
                    return (
                      "Symbol(" +
                      String(void 0 === e ? "" : e) +
                      ")_" +
                      (++t + n).toString(36)
                    );
                  };
                },
                3307: (e, t, n) => {
                  var i = n(133);
                  e.exports =
                    i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
                },
                5112: (e, t, n) => {
                  var i = n(7854),
                    r = n(2309),
                    o = n(6656),
                    s = n(9711),
                    a = n(133),
                    l = n(3307),
                    u = r("wks"),
                    c = i.Symbol,
                    h = l ? c : (c && c.withoutSetter) || s;
                  e.exports = function (e) {
                    return (
                      (o(u, e) && (a || "string" == typeof u[e])) ||
                        (a && o(c, e)
                          ? (u[e] = c[e])
                          : (u[e] = h("Symbol." + e))),
                      u[e]
                    );
                  };
                },
                6992: (e, t, n) => {
                  "use strict";
                  var i = n(5656),
                    r = n(1223),
                    o = n(7497),
                    s = n(9909),
                    a = n(654),
                    l = "Array Iterator",
                    u = s.set,
                    c = s.getterFor(l);
                  (e.exports = a(
                    Array,
                    "Array",
                    function (e, t) {
                      u(this, { type: l, target: i(e), index: 0, kind: t });
                    },
                    function () {
                      var e = c(this),
                        t = e.target,
                        n = e.kind,
                        i = e.index++;
                      return !t || i >= t.length
                        ? ((e.target = void 0), { value: void 0, done: !0 })
                        : "keys" == n
                        ? { value: i, done: !1 }
                        : "values" == n
                        ? { value: t[i], done: !1 }
                        : { value: [i, t[i]], done: !1 };
                    },
                    "values"
                  )),
                    (o.Arguments = o.Array),
                    r("keys"),
                    r("values"),
                    r("entries");
                },
                3948: (e, t, n) => {
                  var i = n(7854),
                    r = n(8324),
                    o = n(6992),
                    s = n(8880),
                    a = n(5112),
                    l = a("iterator"),
                    u = a("toStringTag"),
                    c = o.values;
                  for (var h in r) {
                    var d = i[h],
                      f = d && d.prototype;
                    if (f) {
                      if (f[l] !== c)
                        try {
                          s(f, l, c);
                        } catch (e) {
                          f[l] = c;
                        }
                      if ((f[u] || s(f, u, h), r[h]))
                        for (var m in o)
                          if (f[m] !== o[m])
                            try {
                              s(f, m, o[m]);
                            } catch (e) {
                              f[m] = o[m];
                            }
                    }
                  }
                },
              },
              t = {};
            function n(i) {
              var r = t[i];
              if (void 0 !== r) return r.exports;
              var o = (t[i] = { exports: {} });
              return e[i](o, o.exports, n), o.exports;
            }
            (n.n = (e) => {
              var t = e && e.__esModule ? () => e.default : () => e;
              return n.d(t, { a: t }), t;
            }),
              (n.d = (e, t) => {
                for (var i in t)
                  n.o(t, i) &&
                    !n.o(e, i) &&
                    Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
              }),
              (n.g = (function () {
                if ("object" == typeof globalThis) return globalThis;
                try {
                  return this || new Function("return this")();
                } catch (e) {
                  if ("object" == typeof window) return window;
                }
              })()),
              (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
            var i = {};
            return (
              (() => {
                "use strict";
                n.d(i, { default: () => L });
                var e = n(5336),
                  t = n.n(e),
                  r = n(4672),
                  o = n.n(r);
                function s() {
                  if (!(this instanceof s)) return new s();
                  (this.size = 0),
                    (this.uid = 0),
                    (this.selectors = []),
                    (this.selectorObjects = {}),
                    (this.indexes = Object.create(this.indexes)),
                    (this.activeIndexes = []);
                }
                var a = window.document.documentElement,
                  l =
                    a.matches ||
                    a.webkitMatchesSelector ||
                    a.mozMatchesSelector ||
                    a.oMatchesSelector ||
                    a.msMatchesSelector;
                (s.prototype.matchesSelector = function (e, t) {
                  return l.call(e, t);
                }),
                  (s.prototype.querySelectorAll = function (e, t) {
                    return t.querySelectorAll(e);
                  }),
                  (s.prototype.indexes = []);
                var u = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
                s.prototype.indexes.push({
                  name: "ID",
                  selector: function (e) {
                    var t;
                    if ((t = e.match(u))) return t[0].slice(1);
                  },
                  element: function (e) {
                    if (e.id) return [e.id];
                  },
                });
                var c = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
                s.prototype.indexes.push({
                  name: "CLASS",
                  selector: function (e) {
                    var t;
                    if ((t = e.match(c))) return t[0].slice(1);
                  },
                  element: function (e) {
                    var t = e.className;
                    if (t) {
                      if ("string" == typeof t) return t.split(/\s/);
                      if ("object" == typeof t && "baseVal" in t)
                        return t.baseVal.split(/\s/);
                    }
                  },
                });
                var h,
                  d = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
                s.prototype.indexes.push({
                  name: "TAG",
                  selector: function (e) {
                    var t;
                    if ((t = e.match(d))) return t[0].toUpperCase();
                  },
                  element: function (e) {
                    return [e.nodeName.toUpperCase()];
                  },
                }),
                  (s.prototype.indexes.default = {
                    name: "UNIVERSAL",
                    selector: function () {
                      return !0;
                    },
                    element: function () {
                      return [!0];
                    },
                  }),
                  (h =
                    "function" == typeof window.Map
                      ? window.Map
                      : (function () {
                          function e() {
                            this.map = {};
                          }
                          return (
                            (e.prototype.get = function (e) {
                              return this.map[e + " "];
                            }),
                            (e.prototype.set = function (e, t) {
                              this.map[e + " "] = t;
                            }),
                            e
                          );
                        })());
                var f =
                  /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
                function m(e, t) {
                  var n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l = (e = e.slice(0).concat(e.default)).length,
                    u = t,
                    c = [];
                  do {
                    if (
                      (f.exec(""), (r = f.exec(u)) && ((u = r[3]), r[2] || !u))
                    )
                      for (n = 0; n < l; n++)
                        if ((s = (a = e[n]).selector(r[1]))) {
                          for (i = c.length, o = !1; i--; )
                            if (c[i].index === a && c[i].key === s) {
                              o = !0;
                              break;
                            }
                          o || c.push({ index: a, key: s });
                          break;
                        }
                  } while (r);
                  return c;
                }
                function p(e, t) {
                  var n, i, r;
                  for (n = 0, i = e.length; n < i; n++)
                    if (((r = e[n]), t.isPrototypeOf(r))) return r;
                }
                function v(e, t) {
                  return e.id - t.id;
                }
                (s.prototype.logDefaultIndexUsed = function () {}),
                  (s.prototype.add = function (e, t) {
                    var n,
                      i,
                      r,
                      o,
                      s,
                      a,
                      l,
                      u,
                      c = this.activeIndexes,
                      d = this.selectors,
                      f = this.selectorObjects;
                    if ("string" == typeof e) {
                      for (
                        f[(n = { id: this.uid++, selector: e, data: t }).id] =
                          n,
                          l = m(this.indexes, e),
                          i = 0;
                        i < l.length;
                        i++
                      )
                        (o = (u = l[i]).key),
                          (s = p(c, (r = u.index))) ||
                            (((s = Object.create(r)).map = new h()), c.push(s)),
                          r === this.indexes.default &&
                            this.logDefaultIndexUsed(n),
                          (a = s.map.get(o)) || ((a = []), s.map.set(o, a)),
                          a.push(n);
                      this.size++, d.push(e);
                    }
                  }),
                  (s.prototype.remove = function (e, t) {
                    if ("string" == typeof e) {
                      var n,
                        i,
                        r,
                        o,
                        s,
                        a,
                        l,
                        u,
                        c = this.activeIndexes,
                        h = (this.selectors = []),
                        d = this.selectorObjects,
                        f = {},
                        p = 1 === arguments.length;
                      for (n = m(this.indexes, e), r = 0; r < n.length; r++)
                        for (i = n[r], o = c.length; o--; )
                          if (((a = c[o]), i.index.isPrototypeOf(a))) {
                            if ((l = a.map.get(i.key)))
                              for (s = l.length; s--; )
                                (u = l[s]).selector !== e ||
                                  (!p && u.data !== t) ||
                                  (l.splice(s, 1), (f[u.id] = !0));
                            break;
                          }
                      for (r in f) delete d[r], this.size--;
                      for (r in d) h.push(d[r].selector);
                    }
                  }),
                  (s.prototype.queryAll = function (e) {
                    if (!this.selectors.length) return [];
                    var t,
                      n,
                      i,
                      r,
                      o,
                      s,
                      a,
                      l,
                      u = {},
                      c = [],
                      h = this.querySelectorAll(this.selectors.join(", "), e);
                    for (t = 0, i = h.length; t < i; t++)
                      for (
                        o = h[t], n = 0, r = (s = this.matches(o)).length;
                        n < r;
                        n++
                      )
                        u[(l = s[n]).id]
                          ? (a = u[l.id])
                          : ((a = {
                              id: l.id,
                              selector: l.selector,
                              data: l.data,
                              elements: [],
                            }),
                            (u[l.id] = a),
                            c.push(a)),
                          a.elements.push(o);
                    return c.sort(v);
                  }),
                  (s.prototype.matches = function (e) {
                    if (!e) return [];
                    var t,
                      n,
                      i,
                      r,
                      o,
                      s,
                      a,
                      l,
                      u,
                      c,
                      h,
                      d = this.activeIndexes,
                      f = {},
                      m = [];
                    for (t = 0, r = d.length; t < r; t++)
                      if ((l = (a = d[t]).element(e)))
                        for (n = 0, o = l.length; n < o; n++)
                          if ((u = a.map.get(l[n])))
                            for (i = 0, s = u.length; i < s; i++)
                              !f[(h = (c = u[i]).id)] &&
                                this.matchesSelector(e, c.selector) &&
                                ((f[h] = !0), m.push(c));
                    return m.sort(v);
                  });
                const g = {},
                  x = {},
                  y = ["mouseenter", "mouseleave"];
                function D(e) {
                  void 0 === x[e] && (x[e] = []);
                }
                function b(e) {
                  return "string" == typeof e
                    ? document.querySelectorAll(e)
                    : e;
                }
                function _(e) {
                  let t = (function (e, t) {
                    const n = [];
                    let i = t;
                    do {
                      if (1 !== i.nodeType) break;
                      const t = e.matches(i);
                      t.length && n.push({ delegatedTarget: i, stack: t });
                    } while ((i = i.parentElement));
                    return n;
                  })(g[e.type], e.target);
                  if (t.length)
                    for (let n = 0; n < t.length; n++)
                      for (let i = 0; i < t[n].stack.length; i++)
                        -1 !== y.indexOf(e.type)
                          ? (w(e, t[n].delegatedTarget),
                            e.target === t[n].delegatedTarget &&
                              t[n].stack[i].data(e))
                          : (w(e, t[n].delegatedTarget), t[n].stack[i].data(e));
                }
                function w(e, t) {
                  Object.defineProperty(e, "currentTarget", {
                    configurable: !0,
                    enumerable: !0,
                    get: () => t,
                  });
                }
                function S(e) {
                  return JSON.parse(JSON.stringify(e));
                }
                const E = new (class {
                  bindAll(e, t) {
                    void 0 === t &&
                      (t = Object.getOwnPropertyNames(
                        Object.getPrototypeOf(e)
                      ));
                    for (let n = 0; n < t.length; n++)
                      e[t[n]] = e[t[n]].bind(e);
                  }
                  on(e, t, n, i) {
                    if ("function" == typeof t && void 0 === n)
                      return D(e), void x[e].push(t);
                    const r = e.split(" ");
                    for (let e = 0; e < r.length; e++)
                      if (
                        (t.nodeType && 1 === t.nodeType) ||
                        t === window ||
                        t === document
                      )
                        t.addEventListener(r[e], n, i);
                      else {
                        t = b(t);
                        for (let o = 0; o < t.length; o++)
                          t[o].addEventListener(r[e], n, i);
                      }
                  }
                  delegate(e, t, n) {
                    const i = e.split(" ");
                    for (let e = 0; e < i.length; e++) {
                      let r = g[i[e]];
                      void 0 === r &&
                        ((r = new s()),
                        (g[i[e]] = r),
                        -1 !== y.indexOf(i[e])
                          ? document.addEventListener(i[e], _, !0)
                          : document.addEventListener(i[e], _)),
                        r.add(t, n);
                    }
                  }
                  off(e, t, n, i) {
                    if (void 0 === t) return void (x[e] = []);
                    if ("function" == typeof t) {
                      D(e);
                      for (let n = 0; n < x[e].length; n++)
                        x[e][n] === t && x[e].splice(n, 1);
                      return;
                    }
                    const r = e.split(" ");
                    for (let e = 0; e < r.length; e++) {
                      const o = g[r[e]];
                      if (void 0 === o || (o.remove(t, n), 0 !== o.size))
                        if (void 0 === t.removeEventListener) {
                          t = b(t);
                          for (let o = 0; o < t.length; o++)
                            t[o].removeEventListener(r[e], n, i);
                        } else t.removeEventListener(r[e], n, i);
                      else
                        delete g[r[e]], document.removeEventListener(r[e], _);
                    }
                  }
                  emit(e, ...t) {
                    !(function (e, t) {
                      if (x[e])
                        for (let n = 0; n < x[e].length; n++) x[e][n](...t);
                    })(e, t);
                  }
                  debugDelegated() {
                    return S(g);
                  }
                  debugBus() {
                    return S(x);
                  }
                })();
                function P(e, t, n) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n),
                    e
                  );
                }
                class C {
                  constructor(e = {}) {
                    P(this, "onRaf", () => {
                      E.emit(C.INTERNALRAF),
                        this.options.disableRaf ||
                          requestAnimationFrame(this.onRaf);
                    }),
                      (this.options = e),
                      this.addEvents();
                  }
                  addEvents() {
                    this.options.disableRaf ||
                      requestAnimationFrame(this.onRaf),
                      this.options.disableResize ||
                        E.on(
                          "resize",
                          window,
                          t()(() => {
                            this.onResize();
                          }, 150)
                        ),
                      this.onScroll(),
                      "ontouchstart" in document.documentElement &&
                        ((o().isTouch = !0), this.detectMouse());
                  }
                  onScroll() {
                    E.on(
                      "wheel",
                      window,
                      (e) => {
                        E.emit(C.WHEEL, { event: e });
                      },
                      { passive: !1 }
                    ),
                      E.on(
                        "scroll",
                        window,
                        (e) => {
                          E.emit(C.INTERNALSCROLL, { event: e });
                        },
                        { passive: !0 }
                      );
                  }
                  onResize({ width: e, height: t } = {}) {
                    (o().window.w = e || window.innerWidth),
                      (o().window.h = t || window.innerHeight),
                      E.emit(C.RESIZE);
                  }
                  detectMouse() {
                    window.addEventListener("mousemove", function e(t) {
                      (Math.abs(t.movementX) > 0 ||
                        Math.abs(t.movementY) > 0) &&
                        ((o().isTouch = !1),
                        E.emit(C.MOUSEDETECTED),
                        window.removeEventListener("mousemove", e));
                    });
                  }
                }
                function T(e, t, n) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n),
                    e
                  );
                }
                P(C, "INTERNALRAF", "raf:internal"),
                  P(C, "EXTERNALRAF", "raf:external"),
                  P(C, "WHEEL", "wheel"),
                  P(C, "INTERNALSCROLL", "scroll:internal"),
                  P(C, "EXTERNALSCROLL", "scroll:external"),
                  P(C, "RESIZE", "resize"),
                  P(C, "MOUSEDETECTED", "mouseDetected"),
                  P(C, "SCROLLEND", "scrollEnd"),
                  n(3948);
                class F {
                  constructor(e) {
                    T(this, "onMouseMove", (e) => {
                      this.mouseDown &&
                        ((this.mousePos = e.clientY),
                        (this.position -= this.prevMousePos - this.mousePos),
                        (this.position = Math.min(
                          Math.max(this.position, 0),
                          this.maxY
                        )),
                        (this.prevMousePos = this.mousePos),
                        (this.controller.targetPos =
                          (this.position / this.maxY) *
                          this.controller.maxScroll),
                        this.controller.clamp(),
                        (this.controller.syncScroll = !0),
                        this.transform(),
                        E.emit(C.EXTERNALSCROLL, -this.controller.targetPos));
                    }),
                      T(this, "onMouseDown", (e) => {
                        (this.mousePos = this.prevMousePos = e.clientY),
                          (this.mouseDown = !0),
                          (o().body.style.userSelect = "none"),
                          this.el.classList.add("active");
                      }),
                      T(this, "onMouseUp", () => {
                        (this.mouseDown = !1),
                          o().body.style.removeProperty("user-select"),
                          this.el.classList.remove("active");
                      }),
                      (this.controller = e),
                      this.addHTML(),
                      (this.el = document.querySelector(
                        this.controller.options.scrollbarEl
                      )),
                      (this.handle = document.querySelector(
                        this.controller.options.scrollbarHandleEl
                      )),
                      (this.position = 0),
                      (this.mousePos = 0),
                      (this.prevMousePos = 0),
                      this.addStyles(),
                      this.addEvents();
                  }
                  transform() {
                    let e;
                    this.mouseDown
                      ? (e = this.position)
                      : ((e =
                          (-this.controller.targetPos /
                            -this.controller.maxScroll) *
                          (o().window.h - this.handleHeight)),
                        (this.position = e)),
                      (this.handle.style.transform = "translate3d(0, ".concat(
                        e,
                        "px, 0)"
                      ));
                  }
                  show() {
                    this.el.classList.add("show");
                  }
                  hide() {
                    this.el.classList.remove("show");
                  }
                  addEvents() {
                    E.on("mousedown", this.handle, this.onMouseDown),
                      E.on("mousemove", window, this.onMouseMove),
                      E.on("mouseup", window, this.onMouseUp);
                  }
                  onResize() {
                    (this.scale =
                      (-this.controller.maxScroll + o().window.h) /
                      o().window.h),
                      this.scale <= 1
                        ? (this.handle.style.height = 0)
                        : ((this.trueSize = o().window.h / this.scale),
                          (this.handleHeight = Math.max(this.trueSize, 40)),
                          (this.handle.style.height = "".concat(
                            this.handleHeight,
                            "px"
                          )),
                          (this.maxY = o().window.h - this.handleHeight));
                  }
                  addHTML() {
                    if (
                      document.querySelector(
                        this.controller.options.scrollbarEl
                      )
                    )
                      return;
                    const e = document.createElement("div");
                    e.classList.add(
                      this.controller.options.scrollbarEl.substring(1)
                    ),
                      (e.innerHTML = '<div class="'.concat(
                        this.controller.options.scrollbarHandleEl.substring(1),
                        '"><div></div></div>'
                      )),
                      document.body.appendChild(e);
                  }
                  addStyles() {
                    if (
                      !this.controller.options.disableNativeScrollbar &&
                      !this.controller.options.scrollbarStyles
                    )
                      return;
                    let e = "";
                    this.controller.options.disableNativeScrollbar &&
                      (e +=
                        "html{scrollbar-width:none;}body{-ms-overflow-style:none;}body::-webkit-scrollbar{width:0;height:0;}"),
                      this.controller.options.scrollbarStyles &&
                        (e += ""
                          .concat(
                            this.controller.options.scrollbarEl,
                            " {position:fixed;top:0;right:0;width:20px;height:100%;z-index:900;}.is-touch "
                          )
                          .concat(
                            this.controller.options.scrollbarEl,
                            " {display:none;}"
                          )
                          .concat(
                            this.controller.options.scrollbarEl,
                            " > div {padding:6px 0;width:10px;height:0;margin:0 auto;visibility:hidden;}"
                          )
                          .concat(
                            this.controller.options.scrollbarEl,
                            " > div > div {width:100%;height:100%;border-radius:10px;opacity:0.3;background-color:#000;}"
                          )
                          .concat(
                            this.controller.options.scrollbarEl,
                            " > div > div:hover {opacity:0.9;}"
                          )
                          .concat(
                            this.controller.options.scrollbarEl,
                            ":hover > div, "
                          )
                          .concat(
                            this.controller.options.scrollbarEl,
                            ".show > div, "
                          )
                          .concat(
                            this.controller.options.scrollbarEl,
                            ".active > div {visibility:visible;}"
                          )
                          .concat(
                            this.controller.options.scrollbarEl,
                            ".active > div > div {opacity:0.9;}"
                          ));
                    const t = document.createElement("style");
                    t.styleSheet
                      ? (t.styleSheet.cssText = e)
                      : t.appendChild(document.createTextNode(e)),
                      document.getElementsByTagName("head")[0].appendChild(t);
                  }
                  destroy() {
                    E.off("mousedown", this.handle, this.onMouseDown),
                      E.off("mousemove", window, this.onMouseMove),
                      E.off("mouseup", window, this.onMouseUp);
                  }
                }
                function A(e, t, n) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n),
                    e
                  );
                }
                class M {
                  constructor(e = {}) {
                    A(this, "onScroll", ({ event: e }) => {
                      if (
                        (this.scrolling ||
                          (this.options.customScrollbar &&
                            this.scrollbar.show(),
                          this.toggleIframes(),
                          (this.scrolling = !0)),
                        o().isTouch || "wheel" !== e.type)
                      ) {
                        if (this.preventResizeScroll)
                          return void (this.preventResizeScroll = !1);
                        o().isTouch &&
                        "scrollTop" === this.options.touchScrollType
                          ? (this.targetPos = this.horizontalScroll
                              ? -this.containerElement.scrollLeft
                              : -this.containerElement.scrollTop)
                          : (this.targetPos = -window.scrollY),
                          o().isTouch &&
                            "transform" !== this.options.touchScrollType &&
                            (this.currentPos = this.targetPos);
                      } else
                        e.preventDefault(),
                          (this.syncScroll = !0),
                          (this.targetPos += -1 * e.deltaY);
                      this.clamp(),
                        this.options.customScrollbar &&
                          this.scrollbar.transform(),
                        E.emit(C.EXTERNALSCROLL, -this.targetPos);
                    }),
                      A(this, "onRAF", () => {
                        if (
                          (this.testFps &&
                            this.options.limitLerpRate &&
                            ((this.time = 0.001 * performance.now()),
                            (this.delta = Math.min(
                              60 * (this.time - this.startTime),
                              1
                            )),
                            (this.startTime = this.time)),
                          !this.render)
                        )
                          return;
                        Math.abs(this.targetPos - this.currentPos) < 0.5
                          ? ((this.currentPos = this.targetPos),
                            this.scrolling &&
                              !this.syncScroll &&
                              ((this.scrolling = !1),
                              this.options.customScrollbar &&
                                this.scrollbar.hide(),
                              this.toggleIframes(!0),
                              E.emit(C.SCROLLEND, -this.targetPos)),
                            this.syncScroll &&
                              (window.scrollTo(0, -this.targetPos),
                              (this.syncScroll = !1)))
                          : (this.currentPos +=
                              (this.targetPos - this.currentPos) *
                              this.ease *
                              this.delta);
                        const e = this.horizontalScroll ? this.currentPos : 0,
                          t = this.horizontalScroll ? 0 : this.currentPos;
                        this.applyTransform(e, t),
                          E.emit(C.EXTERNALRAF, {
                            targetPos: -this.targetPos,
                            currentPos: -this.currentPos,
                          });
                      }),
                      A(this, "onResize", () => {
                        if (this.scrollElementsLength > 1) {
                          const e =
                              this.scrollElements[
                                this.scrollElementsLength - 1
                              ],
                            t = window.getComputedStyle(e),
                            n = parseFloat(
                              this.horizontalScroll
                                ? t.marginRight
                                : t.marginBottom
                            ),
                            i = e.getBoundingClientRect(),
                            r = this.horizontalScroll ? i.right : i.bottom;
                          this.scrollLength = r + n - this.currentPos;
                        } else
                          this.scrollLength = this.horizontalScroll
                            ? this.scrollElements[0].scrollWidth
                            : this.scrollElements[0].scrollHeight;
                        const e = this.horizontalScroll
                          ? o().window.w
                          : o().window.h;
                        (this.maxScroll =
                          this.scrollLength > e ? -(this.scrollLength - e) : 0),
                          this.clamp(),
                          this.firstResize || (this.preventResizeScroll = !0),
                          (o().body.style.height = this.scrollLength + "px"),
                          this.options.customScrollbar &&
                            this.scrollbar.onResize(),
                          (this.firstResize = !1);
                      }),
                      A(this, "toggleFixedContainer", () => {
                        this.containerElement.style.position = "static";
                        const e = this.currentPos;
                        this.applyTransform(0, 0),
                          requestAnimationFrame(() => {
                            this.containerElement.style.position = "fixed";
                            const t = this.horizontalScroll ? e : 0,
                              n = this.horizontalScroll ? 0 : e;
                            this.applyTransform(t, n);
                          });
                      }),
                      (this.options = e),
                      (this.targetPos =
                        this.currentPos =
                        this.prevScrollPos =
                        this.maxScroll =
                          0),
                      (this.enabled = !1),
                      (this.render = !1),
                      (this.scrolling = !1),
                      (this.syncScroll = !1),
                      (this.horizontalScroll = !1),
                      (this.firstResize = !0),
                      (this.preventResizeScroll = !1),
                      (this.ease = o().isTouch
                        ? this.options.touchEase
                        : this.options.ease),
                      (this.originalScrollbarSetting =
                        this.options.customScrollbar),
                      (this.testFps = !0),
                      (this.delta = 1),
                      (this.time = this.startTime = performance.now()),
                      this.setElements(),
                      o().isTouch
                        ? ((this.options.customScrollbar = !1),
                          "transform" === this.options.touchScrollType
                            ? this.setupSmoothScroll()
                            : "scrollTop" === this.options.touchScrollType &&
                              (document.documentElement.classList.add(
                                "asscroll-touch"
                              ),
                              this.addTouchStyles(),
                              E.on(
                                "scroll",
                                this.containerElement,
                                (e) => {
                                  E.emit(C.INTERNALSCROLL, { event: e });
                                },
                                { passive: !0 }
                              )))
                        : this.setupSmoothScroll(),
                      this.addEvents();
                  }
                  setElements() {
                    (this.containerElement =
                      "string" == typeof this.options.containerElement
                        ? document.querySelector(this.options.containerElement)
                        : this.options.containerElement),
                      null === this.containerElement &&
                        console.error(
                          "ASScroll: could not find container element"
                        ),
                      this.containerElement.setAttribute(
                        "asscroll-container",
                        ""
                      ),
                      (this.scrollElements =
                        "string" == typeof this.options.scrollElements
                          ? document.querySelectorAll(
                              this.options.scrollElements
                            )
                          : this.options.scrollElements),
                      this.scrollElements.length &&
                        (this.scrollElements = [...this.scrollElements]),
                      (this.scrollElements = this.scrollElements.length
                        ? this.scrollElements
                        : [this.containerElement.firstElementChild]),
                      (this.scrollElementsLength = this.scrollElements.length),
                      this.scrollElements.forEach((e) =>
                        e.setAttribute("asscroll", "")
                      );
                  }
                  setupSmoothScroll() {
                    Object.assign(this.containerElement.style, {
                      position: "fixed",
                      top: "0px",
                      left: "0px",
                      width: "100%",
                      height: "100%",
                      contain: "content",
                    }),
                      this.options.customScrollbar &&
                        (this.scrollbar = new F(this)),
                      E.on(C.INTERNALRAF, this.onRAF),
                      E.on(C.RESIZE, this.onResize),
                      this.options.limitLerpRate &&
                        setTimeout(() => {
                          (this.testFps = !1),
                            (this.delta = 0.1 * Math.round(10 * this.delta));
                        }, 2e3);
                  }
                  applyTransform(e, t) {
                    for (let n = 0; n < this.scrollElementsLength; n++)
                      this.scrollElements[n].style.transform = "translate3d("
                        .concat(e, "px, ")
                        .concat(t, "px, 0px)");
                  }
                  enable({
                    newScrollElements: e = !1,
                    reset: t = !1,
                    restore: n = !1,
                    horizontalScroll: i = !1,
                  } = {}) {
                    this.enabled ||
                      ((this.enabled = !0),
                      (this.render = !0),
                      (this.horizontalScroll = i),
                      e &&
                        ((this.scrollElements = e.length ? [...e] : [e]),
                        (this.scrollElementsLength =
                          this.scrollElements.length),
                        this.scrollElements.forEach((e) =>
                          e.setAttribute("asscroll", "")
                        )),
                      (this.iframes =
                        this.containerElement.querySelectorAll("iframe")),
                      o().isTouch &&
                      "transform" !== this.options.touchScrollType
                        ? (o().body.style.removeProperty("height"),
                          (this.maxScroll =
                            -this.containerElement.scrollHeight),
                          t &&
                            ((this.targetPos = this.currentPos = 0),
                            this.scrollTo(0, !1)))
                        : ((this.firstResize = !0),
                          t &&
                            ((this.targetPos = this.currentPos = 0),
                            this.applyTransform(0, 0)),
                          this.onResize()),
                      n && this.scrollTo(this.prevScrollPos, !1),
                      E.on(C.WHEEL, this.onScroll),
                      E.on(C.INTERNALSCROLL, this.onScroll));
                  }
                  disable({ inputOnly: e = !1 } = {}) {
                    this.enabled &&
                      ((this.enabled = !1),
                      e || (this.render = !1),
                      E.off(C.WHEEL, this.onScroll),
                      E.off(C.INTERNALSCROLL, this.onScroll),
                      (this.prevScrollPos = this.targetPos),
                      (o().body.style.height = "0px"));
                  }
                  clamp() {
                    this.targetPos = Math.max(
                      Math.min(this.targetPos, 0),
                      this.maxScroll
                    );
                  }
                  scrollTo(e, t = !0) {
                    (this.targetPos = e),
                      o().isTouch &&
                        "transform" !== this.options.touchScrollType &&
                        (this.horizontalScroll
                          ? this.containerElement.scrollTo(-this.targetPos, 0)
                          : this.containerElement.scrollTo(0, -this.targetPos)),
                      this.clamp(),
                      (this.syncScroll = !0),
                      t && E.emit(C.EXTERNALSCROLL, -this.targetPos);
                  }
                  toggleIframes(e) {
                    for (let t = 0; t < this.iframes.length; t++)
                      this.iframes[t].style.pointerEvents = e ? "auto" : "none";
                  }
                  blockScrollEvent(e) {
                    e.stopPropagation();
                  }
                  addEvents() {
                    E.on(C.MOUSEDETECTED, () => {
                      "transform" !== this.options.touchScrollType &&
                        ((this.options.customScrollbar =
                          this.originalScrollbarSetting),
                        (this.ease = this.options.ease),
                        this.setupSmoothScroll(),
                        this.onResize());
                    }),
                      o().isTouch ||
                        (E.on("mouseleave", document, () => {
                          window.scrollTo(0, -this.targetPos);
                        }),
                        E.on("keydown", window, (e) => {
                          ("ArrowUp" !== e.key &&
                            "ArrowDown" !== e.key &&
                            "PageUp" !== e.key &&
                            "PageDown" !== e.key &&
                            "Home" !== e.key &&
                            "End" !== e.key &&
                            "Tab" !== e.key) ||
                            window.scrollTo(0, -this.targetPos),
                            "Tab" === e.key && this.toggleFixedContainer();
                        }),
                        E.delegate(
                          "click",
                          'a[href^="#"]',
                          this.toggleFixedContainer
                        ),
                        E.delegate(
                          "wheel",
                          this.options.blockScrollClass,
                          this.blockScrollEvent
                        ));
                  }
                  addTouchStyles() {
                    const e =
                        ".asscroll-touch [asscroll-container] {position:absolute;top:0;left:0;right:0;bottom:-0.1px;overflow-y: auto;} .asscroll-touch [asscroll] {margin-bottom:0.1px;}",
                      t = document.createElement("style");
                    t.styleSheet
                      ? (t.styleSheet.cssText = e)
                      : t.appendChild(document.createTextNode(e)),
                      document.getElementsByTagName("head")[0].appendChild(t);
                  }
                }
                function O(e, t, n) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n),
                    e
                  );
                }
                const L = class {
                  constructor(e = {}) {
                    O(this, "update", () => {
                      this.events.onRaf();
                    }),
                      O(this, "resize", (e) => {
                        this.events.onResize(e);
                      });
                    const {
                      containerElement: t = "[asscroll-container]",
                      scrollElements: n = "[asscroll]",
                      ease: i = 0.075,
                      touchEase: r = 1,
                      touchScrollType: o = "none",
                      scrollbarEl: s = ".asscrollbar",
                      scrollbarHandleEl: a = ".asscrollbar__handle",
                      customScrollbar: l = !0,
                      scrollbarStyles: u = !0,
                      disableNativeScrollbar: c = !0,
                      disableRaf: h = !1,
                      disableResize: d = !1,
                      limitLerpRate: f = !0,
                      blockScrollClass: m = ".asscroll-block",
                    } = e;
                    (this.events = new C({ disableRaf: h, disableResize: d })),
                      (this.controller = new M({
                        containerElement: t,
                        scrollElements: n,
                        ease: i,
                        touchEase: r,
                        customScrollbar: l,
                        scrollbarEl: s,
                        scrollbarHandleEl: a,
                        scrollbarStyles: u,
                        disableNativeScrollbar: c,
                        touchScrollType: o,
                        limitLerpRate: f,
                        blockScrollClass: m,
                      }));
                  }
                  enable(e) {
                    void 0 !== e &&
                      "object" != typeof e &&
                      console.warn(
                        "ASScroll: Please pass an object with your parameters. Since 2.0"
                      ),
                      this.controller.enable(e);
                  }
                  disable(e) {
                    void 0 !== e &&
                      "object" != typeof e &&
                      console.warn(
                        "ASScroll: Please pass an object with your parameters. Since 2.0"
                      ),
                      this.controller.disable(e);
                  }
                  on(e, t) {
                    "function" == typeof t
                      ? "scroll" !== e
                        ? "update" !== e
                          ? "scrollEnd" !== e
                            ? console.warn(
                                'ASScroll: "'.concat(
                                  e,
                                  '" is not a valid event'
                                )
                              )
                            : E.on(C.SCROLLEND, t)
                          : E.on(C.EXTERNALRAF, t)
                        : E.on(C.EXTERNALSCROLL, t)
                      : console.error(
                          "ASScroll: Function not provided as second parameter"
                        );
                  }
                  off(e, t) {
                    "function" == typeof t
                      ? "scroll" !== e
                        ? "update" !== e
                          ? "scrollEnd" !== e
                            ? console.warn(
                                'ASScroll: "'.concat(
                                  e,
                                  '" is not a valid event'
                                )
                              )
                            : E.off(C.SCROLLEND, t)
                          : E.off(C.EXTERNALRAF, t)
                        : E.off(C.EXTERNALSCROLL, t)
                      : console.error(
                          "ASScroll: Function not provided as second parameter"
                        );
                  }
                  scrollTo(e, t = !0) {
                    this.controller.scrollTo(-e, t);
                  }
                  get targetPos() {
                    return -this.controller.targetPos;
                  }
                  get currentPos() {
                    return -this.controller.currentPos;
                  }
                  set currentPos(e) {
                    this.controller.targetPos = this.controller.currentPos = -e;
                  }
                  get maxScroll() {
                    return -this.controller.maxScroll;
                  }
                  get containerElement() {
                    return this.controller.containerElement;
                  }
                  get scrollElements() {
                    return this.controller.scrollElements;
                  }
                  get isHorizontal() {
                    return this.controller.horizontalScroll;
                  }
                  get scrollPos() {}
                  get smoothScrollPos() {}
                  onRaf() {}
                  onResize() {}
                };
              })(),
              (i = i.default)
            );
          })();
        }),
        (e.exports = t());
    },
    3364: function (e, t, n) {
      "use strict";
      n(3948), n(285);
      var i = n(1138),
        r = n(7542),
        o = n.n(r);
      const s = window.navigator.userAgent,
        a = o()(s),
        l =
          s.match(/(iPad)/) ||
          ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1);
      var u = {
        html: document.documentElement,
        body: document.body,
        window: {
          w: window.innerWidth,
          h: window.innerHeight,
          dpr: window.devicePixelRatio,
        },
        mq: {
          smMax: window.matchMedia("(max-width: 767px)"),
          xs: window.matchMedia("(min-width: 415px)"),
          sm: window.matchMedia("(min-width: 768px)"),
          md: window.matchMedia("(min-width: 1024px)"),
          lg: window.matchMedia("(min-width: 1366px)"),
          xlg: window.matchMedia("(min-width: 1921px)"),
          "4k": window.matchMedia("(min-width: 3840px)"),
        },
        pointer: {
          default: new i.F(),
          gl: new i.F(),
          glNormalized: new i.F(),
          isDragging: !1,
        },
        components: {},
        keys: { UP: 38, DOWN: 40, ENTER: 13, ESC: 27, HOME: 36, END: 35 },
        cookieNoticeAccepted: !1,
        sectionName: "home",
        sectionIndex: 0,
        sectionProgress: 0,
        isTablet: l,
        isMobile: a.features.mobile && !l,
        isDesktop: !a.features.mobile && !l,
        ASS: null,
        AssetLoader: null,
        enableLogs: new URLSearchParams(window.location.search).has("logs"),
      };
      var c = new (n(3039).Z)();
      var h = n(2642);
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class f {
        static detectTouchDevice() {
          "ontouchstart" in document.documentElement &&
            ((u.isTouch = !0), u.html.classList.add("is-touch"));
        }
        static enableMousemove() {
          void 0 === f.enabled.mousemove &&
            ((f.enabled.mousemove = !0),
            c.on("mousemove touchmove", window, f.handleMousemove, {
              passive: !0,
            }));
        }
        static enableResize(e = !1) {
          void 0 === f.enabled.resize &&
            ((f.enabled.resize = !0),
            e
              ? c.on(
                  "resize",
                  window,
                  (function (e, t) {
                    let n = null;
                    return function () {
                      clearTimeout(n);
                      const i = arguments,
                        r = this;
                      n = setTimeout(function () {
                        e.apply(r, i);
                      }, t);
                    };
                  })((e) => f.handleResize(e), e)
                )
              : c.on("resize", window, f.handleResize));
        }
        static enableRAF(e = !1) {
          void 0 === f.enabled.raf &&
            ((f.enabled.raf = !0),
            e
              ? ((f.currentRafId = null), h.ZP.ticker.add(f.handleRaf))
              : (f.currentRafId = window.requestAnimationFrame(f.handleRaf)));
        }
        static enableDrag() {
          void 0 === f.enabled.drag &&
            ((f.enabled.drag = !0),
            c.on("mousedown touchstart", window, f.handleMousedown),
            c.on("mouseup touchend", window, f.handleMouseup));
        }
        static handleMousemove(e) {
          if (
            ((u.pointer.default.x = e.changedTouches
              ? e.changedTouches[0].clientX
              : e.clientX),
            (u.pointer.default.y = e.changedTouches
              ? e.changedTouches[0].clientY
              : e.clientY),
            u.pointer.gl.set(
              u.pointer.default.x - u.window.w / 2,
              -u.pointer.default.y + u.window.h / 2
            ),
            u.pointer.glNormalized.set(
              (u.pointer.default.x / u.window.w) * 2 - 1,
              (-u.pointer.default.y / u.window.h) * 2 + 1
            ),
            e.changedTouches ? c.emit(f.TOUCHMOVE, e) : c.emit(f.MOUSEMOVE, e),
            u.pointer.isDragging)
          ) {
            const t = {
              deltaX: u.pointer.default.x - f.dragInfo.px,
              deltaY: u.pointer.default.y - f.dragInfo.py,
              startX: f.dragInfo.x,
              startY: f.dragInfo.y,
            };
            c.emit(e.changedTouches ? f.TOUCHDRAG : f.MOUSEDRAG, e, t),
              (f.dragInfo.px = u.pointer.default.x),
              (f.dragInfo.py = u.pointer.default.y);
          }
        }
        static handleMousedown(e) {
          f.handleMousemove(e),
            (u.pointer.isDragging = !0),
            (f.dragInfo.x = f.dragInfo.px = u.pointer.default.x),
            (f.dragInfo.y = f.dragInfo.py = u.pointer.default.y),
            c.emit(f.POINTERDOWN, e);
        }
        static handleMouseup(e) {
          (u.pointer.isDragging = !1),
            f.handleMousemove(e),
            (f.dragInfo = { x: 0, y: 0, px: 0, py: 0 }),
            c.emit(f.POINTERUP, e);
        }
        static handleResize(e) {
          (u.window.w = window.innerWidth),
            (u.window.h = window.innerHeight),
            u.html.style.setProperty(
              "--vh",
              "".concat(0.01 * u.window.h, "px")
            ),
            c.emit(f.RESIZE, e);
        }
        static handleRaf(e) {
          (f.previousTime = f.currentTime),
            (f.currentTime = e),
            (f.deltaTime = f.currentTime - f.previousTime),
            c.emit(f.RAF, e),
            null !== f.currentRafId &&
              (f.currentRafId = window.requestAnimationFrame(f.handleRaf));
        }
      }
      d(f, "MOUSEMOVE", "global:mousemove"),
        d(f, "TOUCHMOVE", "global:touchmove"),
        d(f, "MOUSEDRAG", "global:mousedrag"),
        d(f, "TOUCHDRAG", "global:touchdrag"),
        d(f, "POINTERMOVE", "".concat(f.MOUSEMOVE, " ").concat(f.TOUCHMOVE)),
        d(f, "POINTERDRAG", "".concat(f.TOUCHDRAG, " ").concat(f.MOUSEDRAG)),
        d(f, "POINTERDOWN", "global:pointerdown"),
        d(f, "POINTERUP", "global:pointerup"),
        d(f, "RAF", "global:raf"),
        d(f, "RESIZE", "global:resize"),
        d(f, "currentRafId", null),
        d(f, "currentTime", null),
        d(f, "previousTime", null),
        d(f, "deltaTime", null),
        d(f, "enabled", {}),
        d(f, "dragInfo", { x: 0, y: 0, px: 0, py: 0 });
      class m {
        constructor() {
          var e, t, n;
          (n = (e) => {
            let t = 0;
            const n = this.callbacks.length;
            for (; t < n; t++) this.callbacks[t].cb(e);
          }),
            (t = "fire") in (e = this)
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            (this.callbacks = []),
            c.on("global:raf", this.fire);
        }
        add(e, t) {
          this.callbacks.push({ index: t, cb: e }),
            this.callbacks.sort(this.sort);
        }
        remove(e) {
          for (let t = 0; t < this.callbacks.length; t++)
            this.callbacks[t].cb === e && this.callbacks.splice(t, 1);
        }
        sort(e, t) {
          return e.index > t.index ? 1 : -1;
        }
      }
      var p = n(4212),
        v = n.n(p);
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class x {
        static withScrollTrigger(e, t) {
          return (
            (this.scrollTrigger = e),
            this.gsap || (this.gsap = t),
            this.gsap && this.gsap.registerPlugin(e),
            this
          );
        }
        static useGsapRaf(e) {
          return (
            (this.params.disableRaf = !0),
            (this.usesGsapRaf = !0),
            this.gsap || (this.gsap = e),
            this
          );
        }
        static config(e) {
          return Object.assign(this.params, e), this;
        }
        static create() {
          void 0 === this.params.disableResize &&
            (f.enabled.resize || this.scrollTrigger) &&
            (this.params.disableResize = !0);
          const e = new (v())(this.params);
          return (
            this.usesGsapRaf && this.gsap.ticker.add(e.update),
            !0 === this.params.disableResize &&
              f.enabled.resize &&
              !this.scrollTrigger &&
              c.on(f.RESIZE, () => {
                e.resize({ width: u.window.w, height: u.window.h });
              }),
            this.scrollTrigger && this.configureScrollTrigger(e),
            e
          );
        }
        static configureScrollTrigger(e) {
          this.scrollTrigger.addEventListener("refresh", () => {
            e.resize({ width: u.window.w, height: u.window.h });
          }),
            this.scrollTrigger.defaults({ scroller: e.containerElement }),
            this.scrollTrigger.scrollerProxy(e.containerElement, {
              scrollTop(t) {
                return arguments.length ? e.scrollTo(t) : e.currentPos;
              },
              getBoundingClientRect: () => ({
                top: 0,
                left: 0,
                width: u.window.w,
                height: u.window.h,
              }),
            });
        }
      }
      g(x, "params", {}),
        g(x, "gsap", null),
        g(x, "usesGsapRaf", !1),
        g(x, "scrollTrigger", null);
      var y = n(7082),
        D =
          (n(5306),
          n(5069),
          /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/);
      function b(e) {
        var t = e.nodeType,
          n = "";
        if (1 === t || 9 === t || 11 === t) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += b(e);
        } else if (3 === t || 4 === t) return e.nodeValue;
        return n;
      }
      var _,
        w,
        S,
        E = /(?:\r|\n|\t\t)/g,
        P = /(?:\s\s+)/g,
        C = function (e) {
          return w.getComputedStyle(e);
        },
        T = Array.isArray,
        F = [].slice,
        A = function (e, t) {
          var n;
          return T(e)
            ? e
            : "string" == (n = typeof e) && !t && e
            ? F.call(_.querySelectorAll(e), 0)
            : e && "object" === n && "length" in e
            ? F.call(e, 0)
            : e
            ? [e]
            : [];
        },
        M = function (e) {
          return "absolute" === e.position || !0 === e.absolute;
        },
        O = function (e, t) {
          for (var n, i = t.length; --i > -1; )
            if (((n = t[i]), e.substr(0, n.length) === n)) return n.length;
        },
        L = function (e, t) {
          void 0 === e && (e = "");
          var n = ~e.indexOf("++"),
            i = 1;
          return (
            n && (e = e.split("++").join("")),
            function () {
              return (
                "<" +
                t +
                " style='position:relative;display:inline-block;'" +
                (e ? " class='" + e + (n ? i++ : "") + "'>" : ">")
              );
            }
          );
        },
        I = function e(t, n, i) {
          var r = t.nodeType;
          if (1 === r || 9 === r || 11 === r)
            for (t = t.firstChild; t; t = t.nextSibling) e(t, n, i);
          else
            (3 !== r && 4 !== r) ||
              (t.nodeValue = t.nodeValue.split(n).join(i));
        },
        R = function (e, t) {
          for (var n = t.length; --n > -1; ) e.push(t[n]);
        },
        k = function (e, t, n) {
          for (var i; e && e !== t; ) {
            if ((i = e._next || e.nextSibling))
              return i.textContent.charAt(0) === n;
            e = e.parentNode || e._parent;
          }
        },
        z = function e(t) {
          var n,
            i,
            r = A(t.childNodes),
            o = r.length;
          for (n = 0; n < o; n++)
            (i = r[n])._isSplit
              ? e(i)
              : (n && 3 === i.previousSibling.nodeType
                  ? (i.previousSibling.nodeValue +=
                      3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue)
                  : 3 !== i.nodeType && t.insertBefore(i.firstChild, i),
                t.removeChild(i));
        },
        U = function (e, t) {
          return parseFloat(t[e]) || 0;
        },
        j = function (e, t, n, i, r, o, s) {
          var a,
            l,
            u,
            c,
            h,
            d,
            f,
            m,
            p,
            v,
            g,
            x,
            y = C(e),
            D = U("paddingLeft", y),
            b = -999,
            w = U("borderBottomWidth", y) + U("borderTopWidth", y),
            S = U("borderLeftWidth", y) + U("borderRightWidth", y),
            E = U("paddingTop", y) + U("paddingBottom", y),
            P = U("paddingLeft", y) + U("paddingRight", y),
            T = 0.2 * U("fontSize", y),
            F = y.textAlign,
            A = [],
            O = [],
            L = [],
            j = t.wordDelimiter || " ",
            B = t.tag ? t.tag : t.span ? "span" : "div",
            N = t.type || t.split || "chars,words,lines",
            V = r && ~N.indexOf("lines") ? [] : null,
            G = ~N.indexOf("words"),
            W = ~N.indexOf("chars"),
            H = M(t),
            q = t.linesClass,
            Y = ~(q || "").indexOf("++"),
            Z = [];
          for (
            Y && (q = q.split("++").join("")),
              u = (l = e.getElementsByTagName("*")).length,
              h = [],
              a = 0;
            a < u;
            a++
          )
            h[a] = l[a];
          if (V || H)
            for (a = 0; a < u; a++)
              ((d = (c = h[a]).parentNode === e) || H || (W && !G)) &&
                ((x = c.offsetTop),
                V &&
                  d &&
                  Math.abs(x - b) > T &&
                  ("BR" !== c.nodeName || 0 === a) &&
                  ((f = []), V.push(f), (b = x)),
                H &&
                  ((c._x = c.offsetLeft),
                  (c._y = x),
                  (c._w = c.offsetWidth),
                  (c._h = c.offsetHeight)),
                V &&
                  (((c._isSplit && d) ||
                    (!W && d) ||
                    (G && d) ||
                    (!G &&
                      c.parentNode.parentNode === e &&
                      !c.parentNode._isSplit)) &&
                    (f.push(c), (c._x -= D), k(c, e, j) && (c._wordEnd = !0)),
                  "BR" === c.nodeName &&
                    ((c.nextSibling && "BR" === c.nextSibling.nodeName) ||
                      0 === a) &&
                    V.push([])));
          for (a = 0; a < u; a++)
            (d = (c = h[a]).parentNode === e),
              "BR" !== c.nodeName
                ? (H &&
                    ((p = c.style),
                    G ||
                      d ||
                      ((c._x += c.parentNode._x), (c._y += c.parentNode._y)),
                    (p.left = c._x + "px"),
                    (p.top = c._y + "px"),
                    (p.position = "absolute"),
                    (p.display = "block"),
                    (p.width = c._w + 1 + "px"),
                    (p.height = c._h + "px")),
                  !G && W
                    ? c._isSplit
                      ? ((c._next = c.nextSibling), c.parentNode.appendChild(c))
                      : c.parentNode._isSplit
                      ? ((c._parent = c.parentNode),
                        !c.previousSibling &&
                          c.firstChild &&
                          (c.firstChild._isFirst = !0),
                        c.nextSibling &&
                          " " === c.nextSibling.textContent &&
                          !c.nextSibling.nextSibling &&
                          Z.push(c.nextSibling),
                        (c._next =
                          c.nextSibling && c.nextSibling._isFirst
                            ? null
                            : c.nextSibling),
                        c.parentNode.removeChild(c),
                        h.splice(a--, 1),
                        u--)
                      : d ||
                        ((x = !c.nextSibling && k(c.parentNode, e, j)),
                        c.parentNode._parent &&
                          c.parentNode._parent.appendChild(c),
                        x && c.parentNode.appendChild(_.createTextNode(" ")),
                        "span" === B && (c.style.display = "inline"),
                        A.push(c))
                    : c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML
                    ? O.push(c)
                    : W &&
                      !c._isSplit &&
                      ("span" === B && (c.style.display = "inline"), A.push(c)))
                : V || H
                ? (c.parentNode && c.parentNode.removeChild(c),
                  h.splice(a--, 1),
                  u--)
                : G || e.appendChild(c);
          for (a = Z.length; --a > -1; ) Z[a].parentNode.removeChild(Z[a]);
          if (V) {
            for (
              H &&
                ((v = _.createElement(B)),
                e.appendChild(v),
                (g = v.offsetWidth + "px"),
                (x = v.offsetParent === e ? 0 : e.offsetLeft),
                e.removeChild(v)),
                p = e.style.cssText,
                e.style.cssText = "display:none;";
              e.firstChild;

            )
              e.removeChild(e.firstChild);
            for (
              m = " " === j && (!H || (!G && !W)), a = 0;
              a < V.length;
              a++
            ) {
              for (
                f = V[a],
                  (v = _.createElement(B)).style.cssText =
                    "display:block;text-align:" +
                    F +
                    ";position:" +
                    (H ? "absolute;" : "relative;"),
                  q && (v.className = q + (Y ? a + 1 : "")),
                  L.push(v),
                  u = f.length,
                  l = 0;
                l < u;
                l++
              )
                "BR" !== f[l].nodeName &&
                  ((c = f[l]),
                  v.appendChild(c),
                  m && c._wordEnd && v.appendChild(_.createTextNode(" ")),
                  H &&
                    (0 === l &&
                      ((v.style.top = c._y + "px"),
                      (v.style.left = D + x + "px")),
                    (c.style.top = "0px"),
                    x && (c.style.left = c._x - x + "px")));
              0 === u
                ? (v.innerHTML = "&nbsp;")
                : G || W || (z(v), I(v, String.fromCharCode(160), " ")),
                H && ((v.style.width = g), (v.style.height = c._h + "px")),
                e.appendChild(v);
            }
            e.style.cssText = p;
          }
          H &&
            (s > e.clientHeight &&
              ((e.style.height = s - E + "px"),
              e.clientHeight < s && (e.style.height = s + w + "px")),
            o > e.clientWidth &&
              ((e.style.width = o - P + "px"),
              e.clientWidth < o && (e.style.width = o + S + "px"))),
            R(n, A),
            G && R(i, O),
            R(r, L);
        },
        B = function (e, t, n, i) {
          var r,
            o,
            s,
            a,
            l,
            u,
            c,
            h,
            d = t.tag ? t.tag : t.span ? "span" : "div",
            f = ~(t.type || t.split || "chars,words,lines").indexOf("chars"),
            m = M(t),
            p = t.wordDelimiter || " ",
            v = " " !== p ? "" : m ? "&#173; " : " ",
            g = "</" + d + ">",
            x = 1,
            y = t.specialChars
              ? "function" == typeof t.specialChars
                ? t.specialChars
                : O
              : null,
            w = _.createElement("div"),
            S = e.parentNode;
          for (
            S.insertBefore(w, e),
              w.textContent = e.nodeValue,
              S.removeChild(e),
              c = -1 !== (r = b((e = w))).indexOf("<"),
              !1 !== t.reduceWhiteSpace &&
                (r = r.replace(P, " ").replace(E, "")),
              c && (r = r.split("<").join("{{LT}}")),
              l = r.length,
              o = (" " === r.charAt(0) ? v : "") + n(),
              s = 0;
            s < l;
            s++
          )
            if (((u = r.charAt(s)), y && (h = y(r.substr(s), t.specialChars))))
              (u = r.substr(s, h || 1)),
                (o += f && " " !== u ? i() + u + "</" + d + ">" : u),
                (s += h - 1);
            else if (u === p && r.charAt(s - 1) !== p && s) {
              for (o += x ? g : "", x = 0; r.charAt(s + 1) === p; )
                (o += v), s++;
              s === l - 1
                ? (o += v)
                : ")" !== r.charAt(s + 1) && ((o += v + n()), (x = 1));
            } else
              "{" === u && "{{LT}}" === r.substr(s, 6)
                ? ((o += f ? i() + "{{LT}}</" + d + ">" : "{{LT}}"), (s += 5))
                : (u.charCodeAt(0) >= 55296 && u.charCodeAt(0) <= 56319) ||
                  (r.charCodeAt(s + 1) >= 65024 && r.charCodeAt(s + 1) <= 65039)
                ? ((a =
                    ((r.substr(s, 12).split(D) || [])[1] || "").length || 2),
                  (o +=
                    f && " " !== u
                      ? i() + r.substr(s, a) + "</" + d + ">"
                      : r.substr(s, a)),
                  (s += a - 1))
                : (o += f && " " !== u ? i() + u + "</" + d + ">" : u);
          (e.outerHTML = o + (x ? g : "")), c && I(S, "{{LT}}", "<");
        },
        N = function e(t, n, i, r) {
          var o,
            s,
            a = A(t.childNodes),
            l = a.length,
            u = M(n);
          if (3 !== t.nodeType || l > 1) {
            for (n.absolute = !1, o = 0; o < l; o++)
              (3 !== (s = a[o]).nodeType || /\S+/.test(s.nodeValue)) &&
                (u &&
                  3 !== s.nodeType &&
                  "inline" === C(s).display &&
                  ((s.style.display = "inline-block"),
                  (s.style.position = "relative")),
                (s._isSplit = !0),
                e(s, n, i, r));
            return (n.absolute = u), void (t._isSplit = !0);
          }
          B(t, n, i, r);
        },
        V = (function () {
          function e(e, t) {
            S || ((_ = document), (w = window), (S = 1)),
              (this.elements = A(e)),
              (this.chars = []),
              (this.words = []),
              (this.lines = []),
              (this._originals = []),
              (this.vars = t || {}),
              this.split(t);
          }
          var t = e.prototype;
          return (
            (t.split = function (e) {
              this.isSplit && this.revert(),
                (this.vars = e = e || this.vars),
                (this._originals.length =
                  this.chars.length =
                  this.words.length =
                  this.lines.length =
                    0);
              for (
                var t,
                  n,
                  i,
                  r = this.elements.length,
                  o = e.tag ? e.tag : e.span ? "span" : "div",
                  s = L(e.wordsClass, o),
                  a = L(e.charsClass, o);
                --r > -1;

              )
                (i = this.elements[r]),
                  (this._originals[r] = i.innerHTML),
                  (t = i.clientHeight),
                  (n = i.clientWidth),
                  N(i, e, s, a),
                  j(i, e, this.chars, this.words, this.lines, n, t);
              return (
                this.chars.reverse(),
                this.words.reverse(),
                this.lines.reverse(),
                (this.isSplit = !0),
                this
              );
            }),
            (t.revert = function () {
              var e = this._originals;
              if (!e) throw "revert() call wasn't scoped properly.";
              return (
                this.elements.forEach(function (t, n) {
                  return (t.innerHTML = e[n]);
                }),
                (this.chars = []),
                (this.words = []),
                (this.lines = []),
                (this.isSplit = !1),
                this
              );
            }),
            (e.create = function (t, n) {
              return new e(t, n);
            }),
            e
          );
        })();
      V.version = "3.0.0";
      var G = V;
      function W(e, t = document) {
        const n = t.querySelectorAll(e);
        return Array.prototype.slice.call(n);
      }
      function H(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                Y(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Y(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function $(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var X = {
        splitCharsWipeUpIn: {
          name: "splitCharsWipeUpIn",
          extendTimeline: !0,
          effect: (e, t) => {
            const n = [],
              i = [];
            if (t.children) {
              for (let r = 0; r < e.length; r++) {
                const o = new G(e[r].querySelectorAll(t.children), {
                  type: "lines",
                  linesClass: "split-line js-split-line",
                });
                n.push(o), i.push(o.lines);
              }
              delete t.children;
            } else {
              const t = new G(e, {
                type: "lines",
                linesClass: "split-line js-split-line",
              });
              n.push(t), i.push(t.lines);
            }
            const r = [];
            for (let e = 0; e < i.length; e++)
              for (let t = 0; t < i[e].length; t++) {
                const n = i[e][t].innerHTML,
                  o = document.createElement("div");
                (o.innerHTML = n),
                  (i[e][t].style.overflow = "hidden"),
                  (i[e][t].innerHTML = ""),
                  i[e][t].appendChild(o),
                  r.push(o);
              }
            const o = [],
              s = [],
              a = [];
            for (let e = 0; e < i[0].length; e++) {
              const t = new G(i[e], { type: "chars", charsClass: "js-chars" });
              n.push(t), o.push(t.chars);
              const r = W(".js-chars", i[0][e]);
              let a;
              (a = e > 0 ? r.length + s[e - 1] : r.length), s.push(a);
            }
            (t.duration = t.duration || 1.5), (t.delay = t.delay || 0);
            for (let e = 0; e < o[0].length; e++) {
              const n = e + 1,
                i = s.reduce(function (e, t) {
                  return e >= n ? e : t;
                }),
                r = 0.035 * s.indexOf(i) + 0.025 * e + t.delay;
              a.push(r);
            }
            return h.ZP.from(
              o[0],
              q(
                q({}, t),
                {},
                {
                  stagger: function (e) {
                    return a[e];
                  },
                }
              )
            );
          },
          defaults: { y: "100%", ease: "expo.out" },
        },
        splitTextRotateIn: {
          name: "splitTextRotateIn",
          extendTimeline: !0,
          effect: (e, t) => {
            const n = [],
              i = [];
            if (t.children) {
              for (let r = 0; r < e.length; r++) {
                const o = new G(e[r].querySelectorAll(t.children), {
                  type: "lines",
                });
                n.push(o), i.push(o.lines);
              }
              delete t.children;
            } else {
              const t = new G(e, { type: "lines" });
              n.push(t), i.push(t.lines);
            }
            const r = [];
            for (let e = 0; e < i.length; e++)
              for (let t = 0; t < i[e].length; t++) {
                const n = i[e][t].innerHTML,
                  o = document.createElement("div");
                (o.innerHTML = n),
                  (i[e][t].style.overflow = "hidden"),
                  (i[e][t].innerHTML = ""),
                  i[e][t].appendChild(o),
                  r.push(o);
              }
            const o = h.ZP.from(
              r,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? Z(Object(n), !0).forEach(function (t) {
                        $(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : Z(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({ rotate: t.rotation }, t)
            );
            return (
              (o._onResize = () => {
                for (let e = 0; e < n.length; e++) n[e].revert();
              }),
              o
            );
          },
          defaults: {
            duration: 1.5,
            y: "120%",
            transformOrigin: "0 0",
            stagger: { each: 0.1, ease: "power1.in" },
            ease: "power3.out",
          },
          resize: !0,
        },
      };
      function K(e) {
        return Function('"use strict";return (' + e + ")")();
      }
      var Q = n(2043);
      function J(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? J(Object(n), !0).forEach(function (t) {
                te(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function te(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class ne {
        constructor() {
          te(this, "onResize", () => {
            for (let e = 0; e < this.resizeTweens.length; e++) {
              const t = this.resizeTweens[e].tween.progress();
              this.resizeTweens[e].tween.scrollTrigger &&
                this.resizeTweens[e].tween.scrollTrigger.kill(),
                this.resizeTweens[e].tween.kill(),
                this.resizeTweens[e].tween._onResize &&
                  this.resizeTweens[e].tween._onResize(),
                0 === t &&
                  (this.resizeTweens[e].tween = h.ZP.effects[
                    this.resizeTweens[e].preset
                  ](
                    this.resizeTweens[e].tweenEl,
                    ee({}, this.resizeTweens[e].from)
                  ));
            }
          }),
            (this.fromAttr = "animate-from"),
            (this.toAttr = "animate-to"),
            (this.mqAttr = "animate-mq"),
            (this.els = []),
            (this.resizeTweens = []),
            (this.mirrorGlProps = {
              x: "position.x",
              y: "position.y",
              z: "position.z",
              rotationX: "rotation.x",
              rotationY: "rotation.y",
              rotationZ: "rotation.z",
            }),
            c.on(f.RESIZE, this.onResize),
            this.registerGsapPlugins(),
            this.registerGsapEffects();
        }
        build() {
          const e = document.querySelectorAll(
              "[".concat(this.fromAttr, "], [").concat(this.toAttr, "]")
            ),
            t = e.length;
          for (let n = 0; n < t; n++) {
            if (
              e[n].attributes[this.mqAttr] &&
              "" !== e[n].attributes[this.mqAttr].value &&
              !u.mq[e[n].attributes[this.mqAttr].value].matches
            )
              continue;
            if (
              e[n].attributes[this.fromAttr] &&
              "" === e[n].attributes[this.fromAttr].value &&
              e[n].attributes[this.toAttr] &&
              "" === e[n].attributes[this.toAttr].value
            )
              continue;
            let t = { uniforms: {} };
            const i = {
                ease: "none",
                duration: 1.5,
                scrollTrigger: {
                  trigger: e[n],
                  horizontal: u.ASS.isHorizontal,
                  once: !0,
                },
              },
              r = e[n].getBoundingClientRect();
            let o,
              s = e[n],
              a = !1,
              l = !1;
            if (
              e[n].attributes[this.fromAttr] &&
              ((a = K("{".concat(e[n].attributes[this.fromAttr].value, "}"))),
              e[n].hasAttribute("dom2webgl"))
            ) {
              const e = this.parseGlPropsFrom(a, t, r);
              (a = e.from), (t = e.glProps);
            }
            if (
              (e[n].attributes[this.toAttr] &&
                ((l = ee(
                  ee({}, i),
                  K("{".concat(e[n].attributes[this.toAttr].value, "}"))
                )),
                e[n].hasAttribute("dom2webgl") &&
                  (l = this.parseGlPropsTo(l, r))),
              (l.stagger || a.stagger) && (s = e[n].children),
              (i.scrollTrigger = Object.assign(
                i.scrollTrigger,
                a.scrollTrigger
              )),
              delete a.scrollTrigger,
              !s.length &&
                s.hasAttribute("dom2webgl") &&
                (s._glProps || (s._glProps = t),
                i.scrollTrigger.pin &&
                  (this.updateGlPropsPinPos(i, s),
                  (i.scrollTrigger.onUpdate = () => {
                    this.updateGlPropsPinPos(i, s);
                  }))),
              a && a.preset)
            ) {
              const e = a.preset;
              delete a.preset,
                X[e].defaults.scrollTrigger &&
                  (i.scrollTrigger = Object.assign(
                    i.scrollTrigger,
                    X[e].defaults.scrollTrigger
                  )),
                (a.scrollTrigger = i.scrollTrigger);
              const t = ee({}, a);
              (o = h.ZP.effects[e](s, a)),
                X[e].resize &&
                  this.resizeTweens.push({
                    tween: o,
                    preset: e,
                    tweenEl: s,
                    from: t,
                  });
            } else
              a && l
                ? ((l = Object.assign(i, l)), (o = h.ZP.fromTo(s, a, l)))
                : !l && a
                ? ((a = Object.assign(i, a)), (o = h.ZP.from(s, a)))
                : ((l = Object.assign(i, l)), (o = h.ZP.to(s, l)));
            o.scrollTrigger && o.scrollTrigger.disable(),
              o.pause(),
              this.els.push({ el: e[n], tween: o });
          }
        }
        enable() {
          for (let e = 0; e < this.els.length; e++)
            this.els[e].tween.scrollTrigger &&
              (this.els[e].tween.scrollTrigger.enable(),
              this.els[e].tween.scrollTrigger &&
                this.els[e].tween.scrollTrigger.isActive &&
                !this.els[e].tween.scrollTrigger.vars.scrub &&
                this.els[e].tween.restart(!0));
        }
        parseGlPropsFrom(e, t, n) {
          (e.glProps = {}),
            Object.prototype.hasOwnProperty.call(e, "uniforms") &&
              ((e.glProps.uniforms = ee({}, e.uniforms)),
              (t.uniforms = ee({}, e.uniforms)),
              delete e.uniforms);
          for (const i in e)
            if (Object.prototype.hasOwnProperty.call(this.mirrorGlProps, i)) {
              const r = this.parseMirroredValue(i, e[i], n);
              (e.glProps[this.mirrorGlProps[i]] = r),
                (t[this.mirrorGlProps[i]] = r);
            }
          return { from: e, glProps: t };
        }
        parseGlPropsTo(e, t) {
          (e.glProps = {}),
            Object.prototype.hasOwnProperty.call(e, "uniforms") &&
              ((e.glProps.uniforms = ee({}, e.uniforms)), delete e.uniforms);
          for (const n in e)
            if (Object.prototype.hasOwnProperty.call(this.mirrorGlProps, n)) {
              const i = this.parseMirroredValue(n, e[n], t);
              e.glProps[this.mirrorGlProps[n]] = i;
            }
          return e;
        }
        parseMirroredValue(e, t, n) {
          if ("string" == typeof t && t.includes("%")) {
            t = ("x" === e ? n.width : n.height) * parseFloat(t) * 0.01;
          }
          return e.includes("rotation") && (t = Q.Id(t)), t;
        }
        updateGlPropsPinPos(e, t) {
          e.scrollTrigger.horizontal
            ? (t._glProps["position.x"] = h.ZP.getProperty(t, "x"))
            : (t._glProps["position.y"] = h.ZP.getProperty(t, "y"));
        }
        registerGsapEffects() {
          for (const e in X) h.ZP.registerEffect(X[e]);
        }
        registerGsapPlugins() {
          h.ZP.registerPlugin(y.Z),
            h.ZP.registerPlugin({
              name: "glProps",
              init(e, t) {
                for (const n in t)
                  if ("object" != typeof t[n])
                    this.add(e._glProps, n, e._glProps[n], t[n]);
                  else
                    for (const i in t[n])
                      this.add(e._glProps[n], i, e._glProps[n][i], t[n][i]),
                        this._props.push(i);
              },
            });
        }
        destroy() {
          for (let e = 0; e < this.els.length; e++)
            this.els[e].tween.scrollTrigger &&
              this.els[e].tween.scrollTrigger.kill(!1),
              this.els[e].tween && this.els[e].tween.kill();
          (this.els = []), (this.resizeTweens = []);
        }
      }
      var ie = n(3360),
        re = n(9398),
        oe = n(2854),
        se = n(5643),
        ae = n(3278);
      function le(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class ue {
        constructor(e = "AssetsProgress") {
          le(
            this,
            "load",
            ({ element: e = document.body, progress: t = !0 } = {}) => {
              e && ((this.element = e), this.addFonts(), this.addMedia());
              let n = 0;
              if (t)
                for (let e = 0; e < this.promisesToLoad.length; e++)
                  this.promisesToLoad[e].then(() => {
                    n++,
                      this.progressCallback(
                        (100 * n) / this.promisesToLoad.length
                      );
                  });
              return (
                (this.loaded = new Promise((e) => {
                  Promise.all(this.promisesToLoad).then(() => {
                    this.reset(), e();
                  });
                })),
                this.loaded
              );
            }
          ),
            le(this, "progressCallback", (e) => {
              c.emit(this.progressEventName, { percent: Math.ceil(e) });
            }),
            le(this, "add", (e) => (this.promisesToLoad.push(e), e)),
            le(this, "addMedia", () => {
              const e = this.element.querySelectorAll(
                'img:not([loading="lazy"])'
              );
              for (let t = 0; t < e.length; t++) this.addImage(e[t]);
              const t = this.element.querySelectorAll("video:not([lazy])");
              for (let e = 0; e < t.length; e++)
                this.add(
                  new Promise((n) => {
                    (t[e].crossOrigin = ""),
                      t[e].addEventListener("canplaythrough", function i() {
                        t[e].removeEventListener("canplaythrough", i),
                          t[e].addEventListener("timeupdate", function i() {
                            t[e].removeEventListener("timeupdate", i),
                              t[e].pause(),
                              n();
                          });
                      }),
                      t[e].addEventListener("error", n),
                      "" === t[e].src &&
                        t[e].dataset.src &&
                        (t[e].src = t[e].dataset.src),
                      t[e].load(),
                      t[e].play();
                  })
                );
            }),
            le(this, "addFonts", () => {
              document.fonts && this.add(document.fonts.ready),
                !this.fontsLoaded &&
                  window.Typekit &&
                  this.add(
                    new Promise((e) => {
                      window.Typekit.load({
                        active: () => {
                          (this.fontsLoaded = !0), e();
                        },
                      });
                    })
                  );
            }),
            le(
              this,
              "loadJson",
              (e) => (
                this.jsons[e] ||
                  (this.jsons[e] = this.add(
                    new Promise((t, n) => {
                      fetch(e, {
                        headers: { "Content-Type": "application/json" },
                      }).then((n) => {
                        if (!n.ok)
                          throw new Error(
                            "Network response was not ok for request: ",
                            e
                          );
                        t(n.json());
                      }, n);
                    })
                  )),
                this.jsons[e]
              )
            ),
            le(
              this,
              "loadGltf",
              (e) => (
                this.gltfs[e] ||
                  (this.gltfs[e] = this.add(
                    new Promise((t, n) => {
                      u.TaskScheduler.enqueueTask(() => {
                        this.gltfLoader.load(
                          e,
                          (e) => {
                            t(e);
                          },
                          void 0,
                          n
                        );
                      });
                    })
                  )),
                this.gltfs[e]
              )
            ),
            le(
              this,
              "loadTexture",
              (e) => (
                this.textures[e] ||
                  (this.textures[e] = this.add(
                    new Promise((t, n) => {
                      this.textureLoader.load(
                        e,
                        (e) => {
                          u.TaskScheduler.enqueueTask(() => {
                            t(u.Gl.generateTexture(e));
                          });
                        },
                        void 0,
                        n
                      );
                    })
                  )),
                this.textures[e]
              )
            ),
            le(this, "reset", () => {
              this.promisesToLoad = [];
            }),
            (this.promisesToLoad = []),
            (this.fontsLoaded = !1),
            (this.loaded = !1),
            (this.progressEventName = e),
            (this.jsons = {}),
            (this.gltfs = {}),
            (this.textures = {}),
            (this.ktxTextures = {}),
            (this.textureLoader = new ae.d()),
            (this.ktxLoader = new se.a()),
            this.ktxLoader.setTranscoderPath("".concat(u.assetsUrl, "basis/")),
            (this.exrLoader = new ie.I()),
            (this.gltfLoader = new re.E()),
            (this.dracoLoader = new oe._()),
            this.dracoLoader.setDecoderPath("".concat(u.assetsUrl, "draco/")),
            this.gltfLoader.setDRACOLoader(this.dracoLoader);
        }
        addImage(e) {
          return this.add(
            new Promise((t) => {
              e.complete && 0 !== e.naturalWidth
                ? t(e)
                : (e.addEventListener("load", () => {
                    t(e);
                  }),
                  e.addEventListener("error", () => {
                    t(e);
                  }));
            })
          );
        }
        loadKtxTexture(e) {
          return (
            this.ktxTextures[e] ||
              (this.ktxTextures[e] = this.add(
                new Promise((t, n) => {
                  this.ktxLoader.load(
                    e,
                    (e) => {
                      u.TaskScheduler.enqueueTask(() => {
                        t(u.Gl.generateTexture(e));
                      });
                    },
                    void 0,
                    n
                  );
                })
              )),
            this.ktxTextures[e]
          );
        }
      }
      n(6337);
      function ce(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class he extends IntersectionObserver {
        constructor(e = {}, t, n) {
          super((...e) => this.handler(...e), e),
            ce(this, "handler", (e, t) => {
              for (let t = 0; t < e.length; t++)
                for (let n = 0; n < this.els.length; n++)
                  this.els[n].el === e[t].target &&
                    ((this.els[n].bcr = e[t].boundingClientRect),
                    this.eventName && c.emit(this.eventName, this.els[n]),
                    e[t].isIntersecting
                      ? (this.els[n].enter &&
                          this.els[n].enter(
                            this.els[n].el,
                            this.els[n].params || null
                          ),
                        (this.visibleEls[n] = this.els[n]))
                      : (this.els[n].leave &&
                          this.els[n].leave(
                            this.els[n].el,
                            this.els[n].params || null
                          ),
                        (this.visibleEls[n] = !1)));
              this.fireFirstObservation &&
                ((this.firstObservationFired = !0),
                c.emit("firstObservation", this.els));
            }),
            ce(this, "reset", () => {
              this.disconnect(),
                (this.els = []),
                (this.visibleEls = []),
                (this.firstObservationFired = !1);
            }),
            (this.eventName = t),
            (this.fireFirstObservation = n),
            (this.firstObservationFired = !1),
            (this.els = []),
            (this.visibleEls = []);
        }
      }
      var de = n(2250),
        fe = n(3977),
        me = n(1661),
        pe = n(6454),
        ve = n(8478),
        ge = n(4164);
      class xe {
        constructor() {
          var e, t, n;
          (n = (e) => {
            if (!e || this.resources.has(e)) return e;
            if (Array.isArray(e)) return e.forEach((e) => this.track(e)), e;
            if (
              ((e.dispose || e instanceof ve.T) && this.resources.add(e),
              e instanceof ve.T)
            )
              this.track(e.geometry),
                this.track(e.material),
                this.track(e.children);
            else if (e instanceof ge.F) {
              for (const t of Object.values(e))
                t instanceof fe.x && this.track(t);
              if (e.uniforms)
                for (const t of Object.values(e.uniforms))
                  if (t) {
                    const e = t.value;
                    (e instanceof fe.x || Array.isArray(e)) && this.track(e);
                  }
            }
            return e;
          }),
            (t = "track") in (e = this)
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            (this.resources = new Set());
        }
        untrack(e) {
          if (!e || !this.resources.has(e)) return e;
          if (Array.isArray(e)) return e.forEach((e) => this.untrack(e)), e;
          if ((this.resources.delete(e), e instanceof ve.T))
            this.untrack(e.geometry),
              this.untrack(e.material),
              this.untrack(e.children);
          else if (e instanceof ge.F) {
            for (const t of Object.values(e))
              t instanceof fe.x && this.untrack(t);
            if (e.uniforms)
              for (const t of Object.values(e.uniforms))
                if (t) {
                  const e = t.value;
                  (e instanceof fe.x || Array.isArray(e)) && this.untrack(e);
                }
          }
        }
        dispose() {
          for (const e of this.resources)
            e instanceof ve.T && e.parent && e.parent.remove(e),
              e.dispose && e.dispose();
          this.resources.clear();
        }
      }
      var ye = n(5553),
        De = n(5317),
        be = n(6173);
      function _e(e, t, n) {
        const i = (t, n) => {
          "style" !== t
            ? "classList" !== t
              ? e.setAttribute(t, !0 === n ? t : n)
              : we(e, n)
            : Object.assign(e.style, n);
        };
        if ("object" == typeof t)
          for (const n in t) !1 !== t[n] ? i(n, t[n]) : e.removeAttribute(n);
        else {
          if (void 0 === n) return e.getAttribute(t);
          if (!1 === n) return void e.removeAttribute(t);
          i(t, n);
        }
      }
      function we(e, t) {
        Array.isArray(t)
          ? e.classList.add(...t)
          : "string" != typeof t
          ? (t.add && we(e, t.add),
            t.remove &&
              (function (e, t) {
                if (Array.isArray(t)) return void e.classList.remove(...t);
                "string" == typeof t && e.classList.remove(...t.split(" "));
              })(e, t.remove))
          : e.classList.add(...t.split(" "));
      }
      var Se = n(2010),
        Ee = n(1898),
        Pe = n(6881);
      function Ce(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ce(Object(n), !0).forEach(function (t) {
                Fe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ce(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Fe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class Ae extends Se.Z {
        constructor(e) {
          super(),
            (this.options = Te(
              { name: "", domEl: null, targetScene: null, assetType: null },
              e
            )),
            this.options.item &&
              ((this.item = this.options.item), this.add(this.item)),
            (this.name = this.options.name),
            (this.domEl = this.options.domEl),
            (this.domEl._webGLItem = this),
            (this.assetType = this.options.assetType),
            (this.pbbox = new Ee.Z()),
            (this.bbox = new Ee.Z()),
            (this.pixelScale = new i.F()),
            (this.offsetPosition = new Pe.P()),
            (this.originalPosition = new Pe.P()),
            (this.originalRotation = new Pe.P()),
            (this.visible = !1),
            (this.animateProps = !1);
        }
        calcPixelScale() {
          this.bbox.setFromObject(this.item),
            this.pixelScale.set(
              -this.bbox.min.x + this.bbox.max.x,
              -this.bbox.min.y + this.bbox.max.y
            );
        }
        syncDomSize() {
          (this.widthPx = this.domEl.clientWidth),
            (this.heightPx = this.domEl.clientHeight),
            this.item.scale.set(this.widthPx, this.heightPx, 1),
            "image" === this.assetType &&
              (this.item.material.uniforms.u_size &&
                (this.item.material.uniforms.u_size.value = [
                  this.widthPx,
                  this.heightPx,
                ]),
              this.item.material.uniforms.u_imageSize &&
                (this.item.material.uniforms.u_imageSize.value = [
                  this.domEl.naturalWidth,
                  this.domEl.naturalHeight,
                ]));
        }
        build() {
          "image" === this.assetType &&
            ((this.item.material.uniforms.u_texture.value.needsUpdate = !0),
            u.WebGL.renderer.initTexture(
              this.item.material.uniforms.u_texture.value
            ));
        }
        mapAnimateProps() {
          if (this.domEl._glProps) {
            this.animateProps = Te({}, this.domEl._glProps);
            for (const e in this.animateProps)
              if (((this.animateProps[e] = {}), "uniforms" === e))
                for (const t in this.domEl._glProps.uniforms)
                  (this.animateProps[e][t] = {}),
                    (this.animateProps[e][t].target =
                      this.item.material.uniforms[t]),
                    (this.animateProps[e][t].property = "value");
              else {
                const t = e.split(".");
                (this.animateProps[e].target =
                  t.length > 1 ? this.item[t[0]] : this.item),
                  (this.animateProps[e].property = t[1] || t[0]);
              }
          }
        }
        animate(e, t) {
          const n = u.Dom2Webgl.axis;
          if (
            ((this.position[n] = u.Dom2Webgl.operations[u.Dom2Webgl.operator](
              this.originalPosition[n],
              e
            )),
            this.animateProps)
          )
            for (const t in this.animateProps)
              if ("uniforms" !== t)
                t === "position." + n
                  ? (this.position[n] = u.Dom2Webgl.operations[
                      u.Dom2Webgl.operator
                    ](this.originalPosition[n], e, this.domEl._glProps[t]))
                  : (this.animateProps[t].target[
                      this.animateProps[t].property
                    ] = this.domEl._glProps[t]);
              else
                for (const e in this.animateProps[t])
                  this.animateProps[t][e].target[
                    this.animateProps[t][e].property
                  ] = this.domEl._glProps[t][e];
        }
        onAfterPositionSync() {}
        enter() {}
        leave() {}
        destroy() {
          this.domEl._webGLItem = null;
        }
      }
      var Me = n(4595),
        Oe = n(3662),
        Le = n(1516),
        Ie = n(5920),
        Re = n(5785),
        ke = n(6249),
        ze = n(8069);
      function Ue(e, t = document) {
        return t.querySelector(e);
      }
      var je = (e) => -1 * Math.cos(e * (Math.PI / 2)) + 1,
        Be = (e) => -0.5 * (Math.cos(Math.PI * e) - 1);
      var Ne = {
          Pyramid: class extends Ae {
            constructor(e) {
              var t, n, i;
              super(e),
                (i = () => {
                  if (this.entered) return;
                  this.entered = !0;
                  const e = Q.Qy(2, 2.5);
                  ye.ZP.timeline({
                    onComplete: () => {
                      this.enterComplete = !0;
                    },
                  })
                    .to(this.animPos, {
                      x: 0,
                      y: 0,
                      z: 0,
                      scalar: 0,
                      duration: e,
                      delay: 0.2,
                      ease: De.tQ.easeOut.config(0.8, 1.2),
                    })
                    .call(
                      () => {
                        this.textTl.play();
                      },
                      null,
                      0.8 * e
                    );
                }),
                (n = "enter") in (t = this)
                  ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[n] = i),
                (this.options = e),
                (this.color = _e(this.domEl, "material-color")),
                (this.assets = { textures: {} }),
                (this.dom = { text: this.domEl.nextElementSibling }),
                (this.speed = parseInt(_e(this.domEl, "parallax-speed"))),
                (this.parallax = 200);
            }
            build() {
              const e = [-1, 1];
              (this.randFlipA = e[Q.rO(0, 1)]),
                (this.randFlipB = e[Q.rO(0, 1)]),
                (this.material = new be.v({ color: Number(this.color) })),
                (this.item =
                  u.WebGL.assets.models.piramed_thinner.scene.children[0].clone()),
                (this.item.material = this.material),
                this.item.rotation.set(
                  Q.Qy(Q.Id(0), Q.Id(45)),
                  Q.Qy(Q.Id(0), Q.Id(45)),
                  Q.Qy(Q.Id(0), Q.Id(45))
                ),
                (this.animPos = {
                  x: _e(this.domEl, "start-x"),
                  y: 3e3,
                  z: -1e4,
                  scalar: 1,
                }),
                (this.rotationSpeed = {
                  x: Q.Qy(5e-4, 0.0015),
                  y: Q.Qy(5e-4, 0.0015),
                  z: Q.Qy(5e-4, 0.0015),
                }),
                (this.textTl = ye.ZP.timeline({
                  immediateRender: !0,
                  paused: !0,
                }).splitTextRotateIn(
                  this.dom.text,
                  { duration: 1, children: "div" },
                  0
                )),
                this.add(this.item);
            }
            syncDomSize() {
              super.syncDomSize(),
                this.item.scale.setScalar(
                  Math.min(
                    this.widthPx / this.pixelScale.x,
                    this.heightPx / this.pixelScale.y
                  )
                );
            }
            animate(e, t) {
              super.animate(e, t);
              const n = Q.ZZ(Q.uZ(u.sectionProgress, 5.2, 6.5), 5.2, 6.5, 0, 1),
                i = -this.speed * this.parallax * n;
              this.item &&
                ((this.item.rotation.x +=
                  this.rotationSpeed.x + 0.04 * this.animPos.scalar),
                (this.item.rotation.y +=
                  this.rotationSpeed.y + 0.04 * this.animPos.scalar),
                (this.item.rotation.z +=
                  this.rotationSpeed.z + 0.04 * this.animPos.scalar),
                this.enterComplete
                  ? ((this.item.position.y = i),
                    (this.dom.text.style.transform = "translateY(".concat(
                      this.speed * this.parallax * n,
                      "px)"
                    )))
                  : ((this.item.position.x =
                      this.animPos.x +
                      1200 *
                        Math.cos(
                          -1 *
                            (this.animPos.scalar - 1) *
                            2 *
                            this.animPos.scalar +
                            1e3
                        ) *
                        this.animPos.scalar),
                    (this.item.position.y =
                      i +
                      this.animPos.y +
                      1e3 *
                        Math.sin(
                          -1 *
                            (this.animPos.scalar - 1) *
                            2 *
                            this.animPos.scalar +
                            1e3
                        ) *
                        this.animPos.scalar),
                    (this.item.position.z = this.animPos.z),
                    (this.dom.text.style.transform = "translateY(".concat(
                      this.speed * this.parallax * n,
                      "px)"
                    ))));
            }
            dispose() {
              super.dispose();
            }
          },
          SearchBar: class extends Ae {
            constructor(e) {
              super(e),
                (this.options = e),
                (this.dom = {
                  startBar: Ue(".js-search-bar-start"),
                  endBar: Ue(".js-search-bar-end"),
                  section: Ue(".js-search-bar-section"),
                  startHead: Ue(".js-search-bar-start-head"),
                  endHead: Ue(".js-search-bar-end-head"),
                  endCta: Ue(".js-search-bar-end-cta"),
                }),
                (this.startMin = 4.9),
                (this.startMax = 5.2),
                (this.endMin = 9.6),
                (this.endMax = 10),
                (this.isFullScreenSize = !1),
                (this.assets = { textures: {} });
            }
            build() {
              (this.widthPx = this.domEl.clientWidth),
                (this.heightPx = this.domEl.clientHeight),
                (this.item = new pe.K(
                  this.roundedRect(
                    (-this.widthPx / this.heightPx) * 0.5,
                    -0.5,
                    this.widthPx / this.heightPx,
                    1,
                    0.2
                  ),
                  new Me.j({
                    uniforms: {
                      uResolution: {
                        value: new i.F(
                          u.window.w * u.window.dpr,
                          u.window.h * u.window.dpr
                        ),
                      },
                      uBlurScale: { value: 0.7 },
                      uNoiseScale: { value: 0.001 },
                      uTime: { value: 0 },
                      uPosA: { value: { x: -0.5, y: -0.5 } },
                      uColorA: { value: new Oe.I(272673) },
                      uScaleA: { value: 0.5 },
                      uPosB: { value: { x: 0.5, y: 0.5 } },
                      uColorB: { value: new Oe.I(1313075) },
                      uScaleB: { value: 0.5 },
                      uNoiseTexture: { value: u.WebGL.assets.textures.noise },
                      uAlpha: { value: 0 },
                      uCoordScale: { value: 1 },
                    },
                    vertexShader:
                      "#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main () {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1 );\n}",
                    fragmentShader:
                      "//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n#ifndef PI\n#define PI 3.141592653589793\n#endif\n\nfloat sineInOut(float t) {\n  return -0.5 * (cos(PI * t) - 1.0);\n}\n\n#ifndef PI\n#define PI 3.141592653589793\n#endif\n\nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\n\nuniform float uTime;\nuniform sampler2D uNoiseTexture;\nuniform float uBlurScale;\nuniform float uNoiseScale;\nuniform vec2 uPosA;\nuniform vec3 uColorA;\nuniform float uScaleA;\nuniform vec2 uPosB;\nuniform vec3 uColorB;\nuniform float uScaleB;\nuniform float uAlpha;\nuniform float uCoordScale;\n\nfloat circle(vec2 circle_pos, vec2 coord, float rad, float blur) {\n    float dist = distance(circle_pos, coord);\n    return smoothstep(rad + blur, rad - blur, dist);\n}\n\nvoid main() {\n    vec2 uv = vUv;\n    vec2 coord = vUv * uCoordScale;\n    // coord.y *= 1.5;\n    // coord.y -= 0.25;\n    vec4 noiseColor = texture2D(uNoiseTexture, (uv * uNoiseScale) + (uTime * 0.01));\n    vec4 finalColor;\n\n    float noiseA = noiseColor.r;\n    float noiseB = noiseColor.b;\n\n    vec2 posA = uPosA;\n    posA.x *= (noiseA * 0.1) + 1.0;\n    posA.y *= (noiseB * 0.1) + 1.0;\n\n    float mixAmountA = circle(posA, coord, uScaleA * noiseA, uBlurScale);\n    vec4 spotColorA = vec4(uColorA, 1.0);\n    vec4 bgColorA = vec4( vec3( 0.0 ), mixAmountA );\n    finalColor += mix(bgColorA, spotColorA, mixAmountA);\n\n    vec2 posB = uPosB;\n    posB.x *= noiseB;\n    posB.y *= noiseA;\n\n    float mixAmountB = circle(posB, coord, uScaleB * noiseB, uBlurScale);\n    vec4 spotColorB = vec4(uColorB, 1.0);\n    vec4 bgColorB = vec4( vec3( 0.0 ), mixAmountB );\n\n    finalColor += mix(bgColorB, spotColorB, mixAmountB);\n\n    finalColor *= uAlpha;\n\n\tgl_FragColor = finalColor;\n}",
                  })
                )),
                (this.edges = new Le.T(this.item.geometry)),
                (this.outline = new Ie.e(
                  this.edges,
                  new Re.n({ color: 16777215 })
                )),
                this.item.add(this.outline),
                this.add(this.item),
                (this.dom.endHead.style.transform = "translateY(-".concat(
                  u.window.h,
                  "%)"
                )),
                (this.dom.endHead.style.opacity = 0),
                (this.dom.endCta.style.transform = "translateY(".concat(
                  u.window.h,
                  "%)"
                )),
                (this.dom.endCta.style.opacity = 0);
            }
            syncDomSize() {
              (this.widthPx = this.domEl.clientWidth),
                (this.heightPx = this.domEl.clientHeight),
                (this.screenToHeightRatio = (u.window.h / this.heightPx) * 1.1),
                (this.scaleBase = this.heightPx / this.pixelScale.y),
                (this.maxScreenScalar =
                  this.scaleBase * (this.screenToHeightRatio + 1)),
                this.item.scale.set(
                  this.heightPx / this.pixelScale.y,
                  this.heightPx / this.pixelScale.y,
                  1
                ),
                (this.sectionHeight =
                  this.dom.section.getBoundingClientRect().height),
                (this.startBarTop =
                  this.dom.startBar.getBoundingClientRect().top -
                  u.ASS.currentPos),
                (this.endBarTop =
                  this.dom.endBar.getBoundingClientRect().top -
                  u.ASS.currentPos),
                (this.endBarScrollOffset = this.startBarTop - this.endBarTop);
            }
            roundedRect(e, t, n, i, r) {
              const o = new ke.b();
              return (
                o.moveTo(e, t + r),
                o.lineTo(e, t + i - r),
                o.quadraticCurveTo(e, t + i, e + r, t + i),
                o.lineTo(e + n - r, t + i),
                o.quadraticCurveTo(e + n, t + i, e + n, t + i - r),
                o.lineTo(e + n, t + r),
                o.quadraticCurveTo(e + n, t, e + n - r, t),
                o.lineTo(e + r, t),
                o.quadraticCurveTo(e, t, e, t + r),
                new ze.o(o)
              );
            }
            round(e) {
              return Number(Math.round(e + "e4") + "e-4");
            }
            animate(e, t) {
              if (!this.item) return;
              this.item.material.uniforms.uTime.value = t;
              const n = u.sectionProgress >= this.startMin,
                i = u.sectionProgress >= this.endMax,
                r = this.round(
                  je(
                    Q.ZZ(
                      Q.uZ(u.sectionProgress, this.startMin, this.startMax),
                      this.startMin,
                      this.startMax,
                      0,
                      1
                    )
                  )
                );
              if (r < 1) {
                (this.isFullScreenSize = !1),
                  (this.item.material.uniforms.uCoordScale.value =
                    r * (this.heightPx / u.window.w + 1)),
                  (this.item.material.uniforms.uAlpha.value = Q.uZ(r, 0, 1));
                const n = this.screenToHeightRatio * r + 1,
                  i = this.scaleBase * n;
                this.item.scale.set(i, i, 1);
                const o = Q.ZZ(1 - r, 0.1, 1, 0, 1),
                  s =
                    this.sectionHeight *
                    (0.5 * (this.startMax - this.startMin)) *
                    r;
                return (
                  (this.dom.startHead.style.transform = "translateY(-"
                    .concat(s, "%) scale(")
                    .concat(n, ")")),
                  (this.dom.startHead.style.opacity = o),
                  void super.animate(e + s, t)
                );
              }
              const o = this.round(
                Be(
                  Q.ZZ(
                    Q.uZ(u.sectionProgress, this.endMin, this.endMax),
                    this.endMin,
                    this.endMax,
                    1,
                    0
                  )
                )
              );
              if (o < 1) {
                (this.isFullScreenSize = !1),
                  (this.item.material.uniforms.uCoordScale.value =
                    o * (this.heightPx / u.window.w + 1)),
                  (this.item.material.uniforms.uAlpha.value = Q.uZ(o, 0, 1));
                const n = this.screenToHeightRatio * o + 1,
                  i = this.scaleBase * n;
                this.item.scale.set(i, i, 1);
                const r = Q.ZZ(1 - o, 0.5, 1, 0, 1),
                  s = -0.5 * this.sectionHeight * o;
                return (
                  (this.dom.endHead.style.transform = "translateY("
                    .concat(s, "%) scale(")
                    .concat(n, ")")),
                  (this.dom.endHead.style.opacity = "".concat(r)),
                  (this.dom.endHead.style.backdropFilter = "blur(".concat(
                    20 * o,
                    "px)"
                  )),
                  (this.dom.endCta.style.transform = "translateY("
                    .concat(s, "%) scale(")
                    .concat(n, ")")),
                  (this.dom.endCta.style.opacity = "".concat(r)),
                  (this.dom.endCta.style.backdropFilter = "blur(".concat(
                    20 * o,
                    "px)"
                  )),
                  void super.animate(e - this.endBarScrollOffset + s, t)
                );
              }
              !n ||
                i ||
                this.isFullScreenSize ||
                (this.item.scale.set(
                  this.maxScreenScalar,
                  this.maxScreenScalar,
                  1
                ),
                (this.isFullScreenSize = !0));
            }
            dispose() {
              super.dispose();
            }
          },
        },
        Ve = n(4078);
      const Ge = new Ve.B(),
        We = new Me.j({
          uniforms: { u_texture: { value: null } },
          vertexShader:
            "#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main () {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1 );\n}",
          fragmentShader:
            "precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\n\nuniform sampler2D u_texture;\n\nvoid main() {\n    vec2 uv = vUv;\n    vec4 texColor = texture2D(u_texture, uv);\n\tgl_FragColor = texColor;\n}",
        });
      function He(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class qe {
        constructor() {
          He(this, "onRaf", (e) => {
            (this.currentPos = -u.ASS.currentPos), this.animateDomEls(e);
          }),
            He(this, "onElIntersect", (e) => {
              !this.firstObservation &&
                e.updateSize &&
                ((e.updateSize = !1), this.updateDom2Webgl(e));
            }),
            He(this, "onFirstObservation", (e) => {
              if (this.firstObservation) {
                this.firstObservation = !1;
                for (let t = 0; t < e.length; t++)
                  this.webGLItems[e[t].params.webglEl].mapAnimateProps(),
                    (this.webGLItems[e[t].params.webglEl].visible = !0),
                    this.updateDom2Webgl(e[t]),
                    (e[t].updateSize = !1);
              }
            }),
            He(this, "onResize", () => {
              for (let e = 0; e < u.Dom2WebglObserver.els.length; e++)
                u.Dom2WebglObserver.unobserve(u.Dom2WebglObserver.els[e].el),
                  this.webGLItems[
                    u.Dom2WebglObserver.els[e].params.webglEl
                  ].syncDomSize(),
                  u.Dom2WebglObserver.observe(u.Dom2WebglObserver.els[e].el);
              (this.firstObservation = !0),
                (u.Dom2WebglObserver.firstObservationFired = !0),
                this.updateAxis();
            }),
            (this.selector = "dom2webgl"),
            this.updateAxis(),
            (this.resourceTracker = new xe()),
            (this.components = Ne),
            c.on("global:resize", this.onResize),
            c.on("dom2webgl", this.onElIntersect),
            c.on("firstObservation", this.onFirstObservation),
            u.RAFCollection.add(this.onRaf, 3);
        }
        build() {
          this.els = [];
          const e = document.querySelectorAll("[".concat(this.selector, "]"));
          (this.visibleEls = u.Dom2WebglObserver.visibleEls),
            (this.webGLItems = {}),
            (this.componentIds = {}),
            (this.firstObservation = !0);
          const t = e.length;
          for (let n = 0; n < t; n++) {
            if (
              null === e[n].offsetParent &&
              0 === e[n].offsetWidth &&
              0 === e[n].offsetHeight
            )
              continue;
            let t;
            const i = e[n].attributes[this.selector].value,
              r = { el: e[n], updateSize: !0, params: {} };
            if (
              e[n] instanceof HTMLImageElement ||
              e[n] instanceof HTMLVideoElement
            )
              t = this.addImage(e[n]);
            else {
              if (!i.includes("c:")) continue;
              {
                const e = i.substring(2);
                if (!this.components[e]) continue;
                t = this.addComponent(e, i, r);
              }
            }
            (r.params.webglEl = t),
              this.els.push(e[n]),
              this.webGLItems[t].enter && (r.enter = this.webGLItems[t].enter),
              this.webGLItems[t].leave && (r.leave = this.webGLItems[t].leave),
              u.Dom2WebglObserver.els.push(r);
          }
        }
        addComponent(e, t, n) {
          const i = t + this.componentIdGen(e);
          return (
            (this.webGLItems[i] = new this.components[e]({
              name: i,
              domEl: n.el,
              assetType: "component",
              elObj: n,
            })),
            this.resourceTracker.track(this.webGLItems[i]),
            i
          );
        }
        componentIdGen(e) {
          return (
            this.componentIds[e] || (this.componentIds[e] = 0),
            this.componentIds[e]++
          );
        }
        addImage(e) {
          const t = e.attributes.dom2webgl.value,
            n = e instanceof HTMLVideoElement ? new de.f(e) : new fe.x(e);
          (n.generateMipmaps = !1), (n.minFilter = n.magFilter = me.wem);
          const i = We.clone();
          i.uniforms.u_texture.value = n;
          const r = new pe.K(Ge, i);
          return (
            (this.webGLItems[t] = new Ae({
              item: r,
              name: t,
              domEl: e,
              assetType: "image",
            })),
            this.resourceTracker.track(this.webGLItems[t]),
            t
          );
        }
        enable() {
          for (const e in this.webGLItems)
            u.Dom2WebglObserver.observe(this.webGLItems[e].domEl),
              this.webGLItems[e].build && this.webGLItems[e].build(),
              this.webGLItems[e].calcPixelScale(),
              this.webGLItems[e].syncDomSize(),
              this.webGLItems[e].options.scene
                ? (this.webGLItems[e].options.scene.add(this.webGLItems[e]),
                  (this.webGLItems[e].frustumCulled = !1))
                : u.WebGL.scene.add(this.webGLItems[e]);
        }
        animateDomEls(e) {
          for (const t in this.webGLItems)
            this.webGLItems[t].animate(this.currentPos, e);
        }
        updateDom2Webgl(e) {
          const t =
              e.el._glProps && e.el._glProps["position.x"]
                ? parseFloat(e.el._glProps["position.x"])
                : 0,
            n =
              e.el._glProps && e.el._glProps["position.y"]
                ? parseFloat(e.el._glProps["position.y"])
                : 0,
            i =
              -u.window.w / 2 +
              (e.bcr.x + e.bcr.width / 2) -
              t -
              (u.ASS.isHorizontal ? this.currentPos : 0) +
              this.webGLItems[e.params.webglEl].offsetPosition.x,
            r =
              u.window.h / 2 -
              e.bcr.y -
              e.bcr.height / 2 +
              n +
              (u.ASS.isHorizontal ? 0 : this.currentPos) +
              this.webGLItems[e.params.webglEl].offsetPosition.y;
          (this.webGLItems[e.params.webglEl].position.x = i),
            (this.webGLItems[e.params.webglEl].position.y = r),
            this.webGLItems[e.params.webglEl].originalPosition.copy(
              this.webGLItems[e.params.webglEl].position.clone()
            ),
            this.webGLItems[e.params.webglEl].onAfterPositionSync();
        }
        updateAxis() {
          ([this.operator, this.axis] = u.isHorizontalScroll
            ? ["+", "x"]
            : ["-", "y"]),
            (this.operations = {
              "+": (e, t, n) => e + t + (n || 0),
              "-": (e, t, n) => e - t - (n || 0),
            });
        }
        reset() {
          this.resourceTracker.dispose();
          for (const e in this.webGLItems) this.webGLItems[e].destroy();
        }
      }
      n(1817);
      let Ye;
      function Ze(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      Ye = Symbol.iterator;
      class $e {
        constructor(e) {
          if (
            (Ze(this, "components", []),
            Ze(this, "args", []),
            Ze(this, "negationSelector", null),
            void 0 === e.selector)
          )
            throw new Error(
              'The component "'.concat(
                e.name,
                '" does not implement the selector property, or it is not available statically'
              )
            );
          this.Component = e;
        }
        init(e = document) {
          const t = W(this.Component.selector, e);
          this.components = [];
          for (let e = 0; e < t.length; e++)
            (null !== this.negationSelector &&
              !1 !== t[e].matches(this.negationSelector)) ||
              this.components.push(new this.Component(t[e], ...this.args));
          return this;
        }
        with(...e) {
          return (this.args = [...e]), this;
        }
        not(e) {
          return (this.negationSelector = e), this;
        }
        make(e, ...t) {
          const n = new this.Component(e, ...t);
          return this.components.push(n), n;
        }
        get(e = null) {
          return null !== e && this.components[e]
            ? this.components[e]
            : this.components;
        }
        forEach(e) {
          for (let t = 0; t < this.components.length; t++)
            e(this.components[t]);
          return this;
        }
        callAll(e, ...t) {
          for (let n = 0; n < this.components.length; n++)
            this.components[n][e](...t);
          return this;
        }
        destroy() {
          return this.callAll("destroy"), this;
        }
        [Ye]() {
          return this.components.values();
        }
      }
      class Xe {
        static init() {
          document.location.hash &&
            Xe.focus(
              document.getElementById(window.location.hash.replace("#", "")),
              !0
            ),
            c.on("hashchange", window, () => {
              Xe.focus(
                document.getElementById(window.location.hash.replace("#", "")),
                !0
              );
            });
        }
        static isFocusable(e) {
          return (
            Element.prototype.matches ||
              (Element.prototype.matches = Element.prototype.msMatchesSelector),
            e.matches(
              "input:not([disabled]), a, button, textarea, select, iframe, object, [tabindex]"
            )
          );
        }
        static focusTrapElement(e) {
          const t = e.parentNode,
            n = document.createElement("div");
          n.setAttribute("data-focus-trap", "pre"),
            n.setAttribute("tabindex", "0");
          const i = document.createElement("div");
          i.setAttribute("data-focus-trap", "post"),
            i.setAttribute("tabindex", "0"),
            c.on("focus", i, () => this.focusFirstChild(e)),
            c.on("focus", n, () => this.focusLastChild(e)),
            t.insertBefore(n, e),
            t.insertBefore(i, e.nextSibling);
        }
        static focusFirstChild(e) {
          for (let t = 0; t < e.children.length; t++) {
            const n = e.children[t];
            if (Xe.focus(n) || Xe.focusFirstChild(n)) return !0;
          }
          return !1;
        }
        static focusLastChild(e) {
          for (let t = e.children.length - 1; t >= 0; t--) {
            const n = e.children[t];
            if (Xe.focus(n) || Xe.focusLastChild(n)) return !0;
          }
          return !1;
        }
        static focus(e, t = !1) {
          if (null == e) return !1;
          !0 === t &&
            !1 === Xe.isFocusable(e) &&
            (e.setAttribute("tabindex", "-1"),
            c.on("blur", e, Xe.removeTabIndex),
            c.on("focusout", e, Xe.removeTabIndex));
          try {
            e.focus();
          } catch (e) {}
          return document.activeElement === e;
        }
        static removeTabIndex() {
          this.removeAttribute("tabindex"),
            c.off("blur", this, Xe.removeTabIndex),
            c.off("focusout", this, Xe.removeTabIndex);
        }
      }
      var Ke,
        Qe,
        Je,
        et = Xe;
      function tt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class nt {
        constructor(e) {
          tt(this, "el", null), (this.el = e);
        }
        destroy() {}
      }
      tt(nt, "selector", null);
      class it extends nt {
        constructor(e) {
          super(e), console.log("Constructed ".concat(this.name), this.el);
        }
        destroy() {}
      }
      function rt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      (Je = ".js-example-selector"),
        (Qe = "selector") in (Ke = it)
          ? Object.defineProperty(Ke, Qe, {
              value: Je,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (Ke[Qe] = Je);
      class ot extends nt {
        constructor(e) {
          super(e),
            rt(this, "onScroll", (e) => {
              if (e > 1) return (this.isCompact = !0), void this.shrink();
              (this.isCompact = !1), this.grow();
            }),
            rt(this, "revealLogoText", () => {
              if (!this.isCompact || this.isHiding) return;
              ye.ZP.timeline({
                onStart: () => {
                  this.isAnimating = !0;
                },
                onComplete: () => {
                  this.isAnimating = !1;
                },
              }).fromTo(
                this.dom.logoText,
                { y: this.logoTextTranslateValue },
                { y: 0, duration: 1, ease: "expo.out", stagger: 0.05 },
                0
              );
            }),
            rt(this, "hideLogoText", () => {
              if (!this.isCompact || this.isRevealing) return;
              ye.ZP.timeline({
                onStart: () => {
                  this.isAnimating = !0;
                },
                onComplete: () => {
                  this.isAnimating = !1;
                },
              })
                .to(
                  this.dom.logoText,
                  {
                    y: -this.logoTextTranslateValue,
                    duration: 1,
                    ease: "expo.out",
                    stagger: 0.05,
                  },
                  0
                )
                .set(
                  this.dom.logoText,
                  { y: this.logoTextTranslateValue },
                  ">"
                );
            }),
            rt(this, "onRaf", () => {}),
            rt(this, "onResize", () => {
              (this.logoTextTranslateValue =
                Math.ceil(
                  this.dom.logoTextGroup.getBoundingClientRect().height
                ) + 5),
                this.removeEvents(),
                this.addEvents(),
                u.mq.sm.matches
                  ? (this.shrink(), (this.isCompact = !0))
                  : (this.grow(), (this.isCompact = !1));
            }),
            (this.dom = {
              el: this.el,
              inner: Ue(".js-header-inner", this.el),
              background: Ue(".js-header-bg", this.el),
              logo: Ue(".js-header-logo", this.el),
              logoText: W(".js-header-logo-text", this.el),
              logoTextGroup: Ue(".js-header-logo-text-group", this.el),
            }),
            (this.logoTextTranslateValue =
              Math.ceil(this.dom.logoTextGroup.getBoundingClientRect().height) +
              10),
            (this.isRevealing = !1),
            (this.isHiding = !1),
            (this.logoAnimating = !1),
            (this.logoHidden = !1),
            this.addEvents();
        }
        addEvents() {
          c.on(f.RESIZE, this.onResize),
            u.ASS.on("scroll", this.onScroll),
            c.on("mouseenter", this.dom.logo, this.revealLogoText),
            c.on("mouseleave", this.dom.logo, this.hideLogoText);
        }
        removeEvents() {
          c.off(f.RESIZE, this.onResize),
            u.ASS.off("scroll", this.onScroll),
            c.off("mouseenter", this.dom.logo, this.revealLogoText),
            c.off("mouseleave", this.dom.logo, this.hideLogoText);
        }
        shrink() {
          var e;
          this.logoAnimating ||
            this.logoHidden ||
            ((this.logoAnimating = !0),
            (this.logoHidden = !0),
            null === (e = this.growTl) || void 0 === e || e.kill(),
            (this.shrinkTl = ye.ZP.timeline()
              .to(
                this.dom.background,
                { scaleY: 1, duration: 1, ease: "expo.out" },
                0
              )
              .to(this.dom.inner, { y: 0, duration: 1, ease: "expo.out" }, 0)
              .to(
                this.dom.logoText,
                {
                  y: -this.logoTextTranslateValue,
                  duration: 1,
                  ease: "expo.out",
                  stagger: 0.05,
                  onComplete: () => {
                    this.logoAnimating = !1;
                  },
                },
                0
              )
              .set(
                this.dom.logoText,
                { y: this.logoTextTranslateValue + 10 },
                ">"
              )));
        }
        grow() {
          var e;
          this.logoHidden &&
            ((this.logoAnimating = !0),
            (this.logoHidden = !1),
            null === (e = this.shrinkTl) || void 0 === e || e.kill(),
            (this.growTl = ye.ZP.timeline({})
              .to(
                this.dom.inner,
                {
                  y: u.mq.sm.matches ? "1rem" : 0,
                  duration: 1,
                  ease: "expo.out",
                },
                0
              )
              .to(
                this.dom.background,
                { scaleY: 0, duration: 1, ease: "expo.out" },
                0
              )
              .to(
                this.dom.logoText,
                {
                  y: 0,
                  duration: 1,
                  ease: "expo.out",
                  stagger: 0.05,
                  onComplete: () => {
                    this.logoAnimating = !1;
                  },
                },
                0
              )));
        }
        destroy() {
          this.removeEvents();
        }
      }
      function st(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      rt(ot, "selector", ".js-header"), rt(ot, "isCompact", !1);
      class at extends nt {
        constructor(e) {
          super(e),
            st(this, "onMousenterNavLink", (e) => {
              u.isTouch ||
                (e.currentTarget.classList.contains("js-nav-link") &&
                  (this.targetLink = e.currentTarget),
                (_e(this.targetLink, "anchor-link") &&
                  _e(this.targetLink, "anchor-link") === this.activeSection) ||
                  ((this.targetLinkChars = W(
                    ".js-nav-link-chars",
                    this.targetLink
                  )),
                  (this.hoverItemIndex = this.dom.links.indexOf(
                    this.targetLink
                  )),
                  (this.hoverTl = this.itemHoverTimelines[this.hoverItemIndex]),
                  this.hoverTl.isActive() || this.hoverTl.restart()));
            }),
            st(this, "onMouseleaveNavLink", (e) => {
              (this.targetLink = null),
                (this.hoverTl = null),
                (this.clickTl = null),
                (this.targetLinkChars = null);
            }),
            st(this, "onPointerDown", (e) => {
              u.isTouch &&
                e.currentTarget.classList.contains("js-nav-link") &&
                (this.targetLink = e.currentTarget);
              const t = _e(this.targetLink, "anchor-link");
              t !== this.activeSection &&
                null !== Ue('[anchor-target="'.concat(t, '"]')) &&
                ((this.clickItemIndex = this.dom.links.indexOf(
                  this.targetLink
                )),
                (this.clickTl = this.itemClickTimelines[this.clickItemIndex]),
                this.clickTl.isActive() || this.clickTl.restart());
            }),
            st(this, "navigateTo", (e) => {
              e.preventDefault();
              const t = _e(e.currentTarget, "anchor-link"),
                n = Ue('[anchor-target="'.concat(t, '"]'));
              if (!n)
                return void (
                  t &&
                  (window.location =
                    e.currentTarget.href || e.target.href || "/")
                );
              const i = u.ASS.controller.ease;
              (u.ASS.controller.ease = 1),
                u.mq.sm.matches || this.close(),
                ye.ZP.timeline()
                  .set(this.dom.spinnerSVG, { scale: 0, rotation: 0 })
                  .set(this.dom.mask, { pointerEvents: "auto" })
                  .to(this.dom.mask, { duration: 0.5, ease: "expo.in" }, 0)
                  .to(
                    this.dom.maskBg,
                    { autoAlpha: 1, duration: 0.5, ease: "expo.in" },
                    0
                  )
                  .to(
                    this.dom.spinnerSVG,
                    { autoAlpha: 1, scale: 1, duration: 0.5, ease: "expo.in" },
                    0.2
                  )
                  .to(
                    this.dom.spinnerSVG,
                    { rotate: 90, repeat: 2, duration: 1, ease: "quad.inOut" },
                    0.2
                  )
                  .call(
                    () => {
                      u.ASS.scrollTo(
                        n.getBoundingClientRect().top + u.ASS.currentPos
                      );
                    },
                    null,
                    1
                  )
                  .to(
                    this.dom.spinnerSVG,
                    { autoAlpha: 0, scale: 0, duration: 0.5, ease: "expo.in" },
                    2
                  )
                  .to(this.dom.mask, { duration: 0.5, ease: "expo.out" }, 2.3)
                  .to(
                    this.dom.maskBg,
                    { autoAlpha: 0, duration: 0.5, ease: "expo.out" },
                    2.3
                  )
                  .set(this.dom.mask, { pointerEvents: "none" })
                  .call(() => {
                    u.ASS.controller.ease = i;
                  });
            }),
            st(this, "updateActiveItem", () => {
              this.activeSection !== u.sectionName &&
                ((this.activeSection = u.sectionName),
                this.items.forEach((e) => {
                  e.el.classList[e.name === u.sectionName ? "add" : "remove"](
                    "isActive"
                  );
                }));
            }),
            st(this, "toggle", () => {
              this.isMobileOpen ? this.close() : this.open();
            }),
            st(this, "splitNavItemChars", () => {
              this.dom.items.forEach((e) => {
                this.split = new G(Ue(".js-nav-link", e), {
                  type: "chars",
                  charsClass:
                    "nav__link__chars js-nav-link-chars pointer-events-none",
                });
              });
            }),
            st(this, "onRaf", () => {}),
            st(this, "onResize", () => {
              this.removeEvents(),
                this.addEvents(),
                u.mq.sm.matches || this.isMobileOpen
                  ? (ye.ZP.set(this.dom.headerItems, { autoAlpha: 1 }),
                    (this.dom.list.style.pointerEvents = "auto"))
                  : (ye.ZP.set(this.dom.headerItems, { autoAlpha: 0 }),
                    (this.dom.list.style.pointerEvents = "none"));
            });
          const t = Ue(".js-nav-toggle");
          (this.dom = {
            el: this.el,
            toggle: t,
            crossIcon: Ue(".js-nav-toggle-cross", t),
            burgerIcon: Ue(".js-nav-toggle-burger", t),
            background: Ue(".js-nav-bg", this.el),
            list: Ue(".js-nav-list", this.el),
            items: W(".js-nav-item"),
            headerItems: W(".js-nav-item", this.el),
            links: W(".js-nav-link"),
            mask: Ue(".js-nav-transition-mask"),
            maskBg: Ue(".js-nav-transition-mask-bg"),
            anchorLinks: W("[anchor-link]"),
          }),
            (this.dom.spinner = Ue(
              ".js-nav-transition-mask-spinner",
              this.dom.mask
            )),
            (this.dom.spinnerSVG = Ue(
              ".js-nav-transition-mask-spinner-svg",
              this.dom.mask
            )),
            (this.activeSection = null),
            (this.items = []),
            this.dom.items.forEach((e) => {
              this.items.push({ el: e, name: _e(e, "section-name") });
            }),
            (this.itemHoverTimelines = []),
            (this.itemClickTimelines = []),
            this.addEvents(),
            this.splitNavItemChars(),
            this.buildHoverTimelines(),
            this.buildClickTimelines();
        }
        addEvents() {
          c.on(f.RESIZE, this.onResize),
            c.on("click", this.dom.toggle, this.toggle),
            c.on("section:enter", this.updateActiveItem),
            c.on("click", this.dom.anchorLinks, this.navigateTo),
            c.on("mouseenter", this.dom.links, this.onMousenterNavLink),
            c.on("mouseleave", this.dom.links, this.onMouseleaveNavLink),
            c.on("mousedown touchstart", this.dom.links, this.onPointerDown);
        }
        buildHoverTimelines() {
          this.dom.links.forEach((e) => {
            const t = W(".js-nav-link-chars", e),
              n = ye.ZP.timeline({ paused: !0 }).fromTo(
                t,
                { yPercent: 0, ease: "power1.out" },
                {
                  yPercent: -15,
                  duration: 0.25,
                  ease: "power1.out",
                  stagger: { each: 0.035, yoyo: !0, repeat: 1 },
                },
                0
              );
            this.itemHoverTimelines.push(n);
          });
        }
        buildClickTimelines() {
          this.dom.links.forEach((e) => {
            const t = W(".js-nav-link-chars", e),
              n = ye.ZP.timeline({ paused: !0 })
                .set(t, { textShadow: "0 1.68rem", ease: "none" }, 0)
                .to(
                  t,
                  {
                    yPercent: -100,
                    duration: 0.5,
                    ease: "power1.out",
                    stagger: 0.035,
                  },
                  0
                )
                .set(t, { yPercent: 0, textShadow: "none", ease: "none" });
            this.itemClickTimelines.push(n);
          });
        }
        removeEvents() {
          c.off(f.RESIZE, this.onResize),
            c.off("click", this.dom.toggle, this.toggle),
            c.off("section:enter", this.updateActiveItem),
            c.off("click", this.dom.anchorLinks, this.navigateTo),
            c.off("mouseenter", this.dom.links, this.onMousenterNavLink),
            c.off("mouseleave", this.dom.links, this.onMouseleaveNavLink),
            c.off("mousedown touchstart", this.dom.links, this.onPointerDown);
        }
        open() {
          var e;
          (this.isMobileOpen = !0),
            (this.dom.crossIcon.style.display = "block"),
            (this.dom.burgerIcon.style.display = "none"),
            (this.dom.list.style.pointerEvents = "auto"),
            null === (e = this.closeTl) || void 0 === e || e.kill(),
            (this.showTl = ye.ZP.timeline()
              .to(
                this.dom.background,
                { scaleY: 1, duration: 1, ease: "expo.out" },
                0
              )
              .to(
                this.dom.headerItems,
                {
                  autoAlpha: 1,
                  duration: 1,
                  ease: "expo.out",
                  stagger: { amount: 0.17, from: "start" },
                },
                0.2
              ));
        }
        close() {
          var e;
          (this.isMobileOpen = !1),
            (this.dom.crossIcon.style.display = "none"),
            (this.dom.burgerIcon.style.display = "block"),
            (this.dom.list.style.pointerEvents = "none"),
            null === (e = this.showTl) || void 0 === e || e.kill(),
            (this.closeTl = ye.ZP.timeline()
              .to(
                this.dom.headerItems,
                {
                  autoAlpha: 0,
                  duration: 1,
                  ease: "expo.out",
                  stagger: { amount: 0.17, from: "end" },
                },
                0
              )
              .to(
                this.dom.background,
                { scaleY: 0, duration: 1, ease: "expo.out" },
                0.2
              ));
        }
        destroy() {
          this.removeEvents();
        }
      }
      st(at, "selector", ".js-nav"), st(at, "isMobileOpen", !1);
      var lt = n(3460),
        ut = n(66),
        ct = n(1051),
        ht = n(7365),
        dt = n(2114);
      var ft = {
          images: [],
          textures: [
            { id: "cone_scale", url: "/images/sc-33.png" },
            { id: "cone_color", url: "/images/cd-33.png" },
            { id: "cone_position_exr", url: "/images/pos-33.exr" },
            { id: "sprite", url: "/images/dof-2k-10.jpg" },
            { id: "noise", url: "/images/gradient-noise.jpg" },
            { id: "grain", url: "/images/noise.jpg" },
          ],
          sounds: [],
          videos: [],
          models: [
            { id: "piramed_thinner", url: "/models/py-lod7.glb" },
            {
              id: "piramed",
              url: u.isDesktop
                ? "/models/py-lod7.glb"
                : "/models/py-monbile.glb",
            },
            { id: "piramed_back", url: "/models/py-lod1.glb" },
            { id: "piramed_medium", url: "/models/py-lod2.glb" },
            { id: "piramed_front", url: "/models/py-lod3.glb" },
          ],
          jsons: [],
          fontTextures: [],
          fonts: [],
        },
        mt = (n(9575), n(4197), n(3824), n(7936)),
        pt = n(9203),
        vt = n(7092),
        gt = n(4758);
      function xt(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function yt(e, t, n, i, r) {
        return ((e - t) / (n - t)) * (r - i) + i;
      }
      class Dt extends be.v {
        constructor(e = { customUniforms: [], onBeforeCompile: (e) => {} }) {
          super(e),
            (this._customUniforms = e.customUniforms),
            (this.onBeforeCompile = e.onBeforeCompile),
            this._setup();
        }
        get customUniforms() {
          return this._customUniforms;
        }
        _setup() {}
      }
      class bt extends Me.j {
        constructor({
          customUniforms: e = {},
          near: t = 0.1,
          far: n = 13,
          transparent: i = !1,
          onBeforeCompile: r = (e) => {},
        } = {}) {
          let o =
              "#define GLSLIFY 1\nvarying vec2 vUv;\nvarying float vViewZDepth;\n\nvoid main() {\n  #include <begin_vertex>\n  #include <project_vertex>\n  vViewZDepth = - mvPosition.z;\n  vUv = uv;\n}",
            s =
              "#define GLSLIFY 1\nvarying float vViewZDepth;\nvarying vec2 vUv;\n\nvoid main() {\n  float color = 1.0 - smoothstep( u_near, u_far, vViewZDepth );\n  gl_FragColor = vec4( vec3( color ), 1.0 );\n}";
          (e.u_near = { type: "float", value: t }),
            (e.u_far = { type: "float", value: n });
          const a = {};
          Object.keys(e).forEach((t) => {
            (a["".concat(t)] = e[t]),
              (o = "uniform ".concat(e[t].type, " ").concat(t, ";\n") + o),
              (s = "uniform ".concat(e[t].type, " ").concat(t, ";\n") + s);
          }),
            super({
              transparent: i,
              uniforms: a,
              vertexShader: o,
              fragmentShader: s,
            }),
            (this._customUniforms = e),
            (this.onBeforeCompile = r),
            this._setup();
        }
        get customUniforms() {
          return this._customUniforms;
        }
        _setup() {}
      }
      function _t(e, t) {
        const n = (e.fov * Math.PI) / 180,
          i = 2 * Math.tan(n / 2) * Math.abs(t);
        return { width: i * e.aspect, height: i };
      }
      var wt =
          "#define GLSLIFY 1\nmat4 rotationMatrix(vec3 axis, float angle)\n{\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n    \n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n",
        St =
          "#define GLSLIFY 1\nmat4 rotMat = rotationMatrix(vec3(a_angle.x, a_angle.y, a_angle.z), mod(a_angle.w * u_time * 0.15, 3.1416 * 2.));\nvec4 mvPosition = vec4( transformed, 1.0 );\n\nv_color = a_color;\n\n#ifdef USE_INSTANCING\n  mat4 instanceMat = instanceMatrix;\n\n  float zFactor = map(instanceMat[3][2], 0., 9., 0.5, 0.2);\n\n  instanceMat[3][0] = instanceMat[3][0] * u_resolution.x * zFactor - u_mouse.x * a_param.x + sin(u_time * a_param.w * 0.5) * a_param.y * 0.15;\n  instanceMat[3][1] = instanceMat[3][1] * u_resolution.y * zFactor - u_mouse.y * a_param.x + cos(u_time * a_param.w * 0.5) * a_param.z * 0.15;\n  instanceMat[3][2] = instanceMat[3][2];\n\n  instanceMat[0][0] = instanceMat[0][0] * u_scale;\n  instanceMat[1][1] = instanceMat[1][1] * u_scale;\n  instanceMat[2][2] = instanceMat[2][2] * u_scale;\n\n  instanceMat *= rotMat;\n\n\tmvPosition = instanceMat * mvPosition;\n#endif\n\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
        Et =
          "#define GLSLIFY 1\nfloat map(float value, float min1, float max1, float min2, float max2) {\n  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n}\n";
      class Pt extends ve.T {
        constructor() {
          super(),
            (this._params = { basePosition: new Pe.P() }),
            (this._mouseTg = { x: 0, y: 0 }),
            (this._easing = 0.1),
            (this._nb = 250),
            (this._loaded = !1);
        }
        _setupGeometry() {
          u.WebGL.assets.models.piramed.scene.traverse((e) => {
            "Mesh" === e.type && (this._geometry = e.geometry.clone());
          });
        }
        _setupMaterial() {
          this._material = new Dt({
            color: new Oe.I("white"),
            vertexColors: !0,
            transparent: !0,
            customUniforms: [
              { id: "u_time", type: "float", value: 0 },
              { id: "u_scale", type: "float", value: 1 },
              { id: "u_resolution", type: "vec2", value: new i.F() },
              { id: "u_mouse", type: "vec2", value: new i.F() },
            ],
            onBeforeCompile: function (e) {
              for (let t = 0; t < this._customUniforms.length; t++) {
                const n = this._customUniforms[t];
                (e.uniforms[n.id] = n),
                  (e.vertexShader =
                    "uniform ".concat(n.type, " ").concat(n.id, ";\n") +
                    e.vertexShader),
                  (e.fragmentShader =
                    "uniform ".concat(n.type, " ").concat(n.id, ";\n") +
                    e.fragmentShader);
              }
              (e.vertexShader = wt + e.vertexShader),
                (e.vertexShader = Et + e.vertexShader),
                (e.vertexShader = "attribute vec4 a_param;\n" + e.vertexShader),
                (e.vertexShader = "attribute vec4 a_angle;\n" + e.vertexShader),
                (e.vertexShader = "attribute vec4 a_color;\n" + e.vertexShader),
                (e.vertexShader = "varying vec4 v_color;\n" + e.vertexShader),
                (e.vertexShader = e.vertexShader.replace(
                  "#include <project_vertex>",
                  St
                )),
                (e.vertexShader = e.vertexShader.replace(
                  "#include <worldpos_vertex>",
                  "#define GLSLIFY 1\n#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMat * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif"
                )),
                (e.fragmentShader =
                  "varying vec4 v_color;\n" + e.fragmentShader),
                (e.fragmentShader = e.fragmentShader.replace(
                  "#include <output_fragment>",
                  "#define GLSLIFY 1\nvec3 col = v_color.rgb;\n\n#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n// https://github.com/mrdoob/three.js/pull/22425\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\noutgoingLight.rgb = col.rgb;\ndiffuseColor.a *= v_color.a;\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );"
                ));
            },
          });
        }
        _setupMesh() {
          this._mesh = new mt.S(this._geometry, this._material, this._nb);
          const e = new pt.y(),
            t = new Pe.P(),
            n = new vt._(),
            r = new Pe.P(),
            o = new Float32Array(4 * this._nb),
            s = new Float32Array(4 * this._nb),
            a = new Float32Array(4 * this._nb),
            l = [
              { r: 93, g: 57, b: 154 },
              { r: 186, g: 136, b: 43 },
              { r: 40, g: 116, b: 100 },
              { r: 164, g: 148, b: 175 },
            ];
          for (let i = 0; i < this._nb; i++) {
            const c = 2 * Math.random() - 1,
              h = 2 * Math.random() - 1,
              d = 9 * Math.random(),
              f = u.mq.sm.matches ? 0.075 : 0.05;
            t.set(c, h, d),
              r.set(f, f, f),
              e.compose(t, n, r),
              this._mesh.setMatrixAt(i, e),
              e.identity(),
              (o[4 * i] = l[i % 4].r / 255),
              (o[4 * i + 1] = l[i % 4].g / 255),
              (o[4 * i + 2] = l[i % 4].b / 255),
              (o[4 * i + 3] = Math.random()),
              (s[4 * i] = 2 * Math.random() - 1),
              (s[4 * i + 1] = 2 * Math.random() - 1),
              (s[4 * i + 2] = 2 * Math.random() - 1),
              (s[4 * i + 3] = 2 * Math.random() - 1 * Math.PI),
              (a[4 * i] = Math.random()),
              (a[4 * i + 1] = Math.random()),
              (a[4 * i + 2] = Math.random()),
              (a[4 * i + 3] = Math.random());
          }
          this._geometry.setAttribute("a_param", new gt.l(a, 4)),
            this._geometry.setAttribute("a_color", new gt.l(o, 4)),
            this._geometry.setAttribute("a_angle", new gt.l(s, 4)),
            (this._depthMaterial = new bt({
              transparent: !0,
              customUniforms: {
                u_time: { type: "float", value: 0 },
                u_scale: { type: "float", value: 1 },
                u_resolution: { type: "vec2", value: new i.F() },
                u_mouse: { type: "vec2", value: new i.F() },
              },
              onBeforeCompile: function (e) {
                (e.vertexShader = wt + e.vertexShader),
                  (e.vertexShader = Et + e.vertexShader),
                  (e.vertexShader =
                    "attribute vec4 a_param;\n" + e.vertexShader),
                  (e.vertexShader =
                    "attribute vec4 a_angle;\n" + e.vertexShader),
                  (e.vertexShader =
                    "attribute vec4 a_color;\n" + e.vertexShader),
                  (e.vertexShader = "varying vec4 v_color;\n" + e.vertexShader),
                  (e.vertexShader = e.vertexShader.replace(
                    "#include <project_vertex>",
                    St
                  ));
              },
            })),
            (this._mesh.customDepthMaterial = this._depthMaterial),
            this.add(this._mesh);
        }
        onMousemove(e) {
          (this._mouseTg.x = e.x), (this._mouseTg.y = e.y);
        }
        onAssetsLoaded() {
          (this._loaded = !0),
            this._setupGeometry(),
            this._setupMaterial(),
            this._setupMesh();
        }
        resize({ camera: e }) {
          this._loaded &&
            ((this._pSize = _t(e, 9.9)),
            this._material.customUniforms[2].value.set(
              this._pSize.width,
              this._pSize.height
            ),
            this._depthMaterial.customUniforms.u_resolution.value.set(
              this._pSize.width,
              this._pSize.height
            ));
        }
        update(e) {
          this._loaded &&
            ((this._material.customUniforms[0].value = e),
            (this._depthMaterial.customUniforms.u_time.value = e),
            this._updateMouse(),
            u.mq.sm.matches && this._updatePosition());
        }
        _updateMouse() {
          (this._material.customUniforms[3].value.x +=
            (0.25 * this._mouseTg.x -
              this._material.customUniforms[3].value.x) *
            this._easing),
            (this._material.customUniforms[3].value.y +=
              (0.25 * this._mouseTg.y -
                this._material.customUniforms[3].value.y) *
              this._easing),
            (this._depthMaterial.customUniforms.u_mouse.value.x +=
              (0.25 * this._mouseTg.x -
                this._depthMaterial.customUniforms.u_mouse.value.x) *
              this._easing),
            (this._depthMaterial.customUniforms.u_mouse.value.y +=
              (0.25 * this._mouseTg.y -
                this._depthMaterial.customUniforms.u_mouse.value.y) *
              this._easing);
        }
        _updatePosition() {
          const e = u.sectionProgress,
            t =
              xt(yt(e, 0, 1, 2, -5), -5, 1) +
              xt(yt(e, 1.25, 1.5, 0, 5), 0, 5) -
              xt(yt(e, 2.7, 3, 0, 5), 0, 5) +
              xt(yt(e, 3.3, 3.5, 0, 5), 0, 9) -
              xt(yt(e, 4.5, 5, 0, 5), 0, 4);
          (this._params.basePosition.x = 0.25 * t),
            (this.position.x +=
              (this._params.basePosition.x - this.position.x) * this._easing);
        }
      }
      n(2472);
      var Ct = n(3993),
        Tt = n(8549),
        Ft = n(4302);
      class At {
        constructor({
          width: e = 256,
          height: t = 256,
          format: n = me.wk1,
          type: i = me.VzW,
          minFilter: r = me.TyD,
          magFilter: o = me.TyD,
          depthBuffer: s = !1,
          stencilBuffer: a = !1,
          generateMipmaps: l = !1,
          material: u,
          debug: c = !1,
        }) {
          this.simulation = u;
          const h = {
            wrapS: me.uWy,
            wrapT: me.uWy,
            minFilter: r,
            magFilter: o,
            format: n,
            type: i,
            stencilBuffer: a,
            depthBuffer: s,
            generateMipmaps: l,
          };
          (this._read = new Ft.d(e, t, h)),
            (this._write = new Ft.d(e, t, h)),
            c && this.debug();
        }
        swap() {
          const e = this._read;
          (this._read = this._write), (this._write = e);
        }
        setSize(e, t) {
          this._read.setSize(e, t), this._write.setSize(e, t);
        }
        debug() {
          (this.debug1 = new pe.K(
            new Ve.B(4, 4),
            new be.v({ map: this._read.texture })
          )),
            (this.debug1.renderOrder = 1),
            (this.debug2 = new pe.K(
              new Ve.B(1.4, 1.4),
              new be.v({ map: this._write.texture })
            )),
            (this.debug2.renderOrder = 2),
            this.debug1.position.set(0, 2.5, 1),
            this.debug2.position.set(0, 0, 0),
            u.WebGL.add(this.debug1);
        }
        get read() {
          return this._read;
        }
        get write() {
          return this._write;
        }
      }
      var Mt = n(9046),
        Ot = n(140),
        Lt = n(3131);
      class It extends ve.T {
        constructor({
          positions: e = new Float32Array([-0.5, -0.5, 1.5, -0.5, -0.5, 1.5]),
          uvs: t = new Float32Array([0, 0, 2, 0, 0, 2]),
          material: n = new Tt.F({
            uniforms: { t_diffuse: { value: null } },
            vertexShader:
              "precision highp float;\n#define GLSLIFY 1\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 modelViewMatrix;\n\nattribute lowp vec2 position;\nattribute lowp vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0., 1.);\n}\n",
            fragmentShader:
              "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D t_diffuse;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n  vec4 texture = texture2D(t_diffuse, vUv);\n\n  vec3 color = texture.rgb;\n  float alpha = texture.a;\n\n  gl_FragColor = vec4(color, alpha);\n}\n",
          }),
          texture: i = null,
          scene: r = !1,
        } = {}) {
          super(),
            (this._geometry = new Mt.u()),
            this._geometry.setAttribute("position", new Ot.Tl(e, 2)),
            this._geometry.setAttribute("uv", new Ot.Tl(t, 2)),
            i &&
              ((n.uniforms.t_diffuse = { value: i }),
              (n.uniforms.t_diffuse.value.needsUpdate = !0)),
            (this._material = n),
            (this._mesh = new pe.K(this._geometry, this._material)),
            this.add(this._mesh),
            r &&
              ((this._camera = this.addOrthographicCamera({
                width: 1,
                height: 1,
                near: 0,
                far: 1,
              })),
              (this._scene = this.addScene()),
              this._scene.add(this));
        }
        addOrthographicCamera({
          width: e = window.innerWidth,
          height: t = window.innerHeight,
          near: n = 0,
          far: i = 100,
        } = {}) {
          return new Lt.i(e / -2, e / 2, t / 2, t / -2, n, i);
        }
        addScene({ scene: e = new ht.x() } = {}) {
          return e;
        }
        get geometry() {
          return this._geometry;
        }
        get material() {
          return this._material;
        }
        set material(e) {
          (this._material = e), (this._mesh.material = this._material);
        }
        get customDepthMaterial() {
          return this._mesh.customDepthMaterial;
        }
        set customDepthMaterial(e) {
          this._mesh.customDepthMaterial = e;
        }
        get scene() {
          return this._scene;
        }
        get camera() {
          return this._camera;
        }
      }
      var Rt =
          "#define GLSLIFY 1\nmat4 rotationMatrix(vec3 axis, float angle)\n{\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n    \n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n\nmat3 calcLookAtMatrix(vec3 origin, vec3 target, float roll) {\n  vec3 rr = vec3(sin(roll), cos(roll), 0.0);\n  vec3 ww = normalize(target - origin);\n  vec3 uu = normalize(cross(ww, rr));\n  vec3 vv = normalize(cross(uu, ww));\n\n  return mat3(uu, vv, ww);\n}\n",
        kt =
          "#define GLSLIFY 1\n// mat4 rotMat = rotationMatrix(vec3(0., 0., a_angle.z), a_angle.w);\nvec4 mvPosition = vec4( transformed, 1.0 );\n\n// // Show Animation -----\n// float d = 0.00005;\n// float showVal = min(1., max(0., (u_show * (1. + d * (u_length - 1.))) - d * a_order));\n// showVal = qinticInOut(showVal);\n// float radius = mix(u_factor + a_random.x * 3., u_factor, showVal) + u_explode * a_random.y;\n\nvec3 pos = texture2D(t_position, a_id).xyz;\nvec3 basePos = pos;\n\n// pos.x = (pos.x - 0.5) * 2. * radius;\n// pos.y = (pos.y - 0.5) * 2. * radius;\n// pos.z = (pos.z - 0.5) * 2. * radius;\n\n// vec3 pos2 = texture2D(t_position, vec2(a_id.x + 0.5, a_id.y)).xyz;\n// pos2.x = (pos2.x - 0.5) * 2. * radius;\n// pos2.y = (pos2.y - 0.5) * 2. * radius;\n// pos2.z = (pos2.z - 0.5) * 2. * radius;\n\n// vec3 pos3 = texture2D(t_position, vec2(a_id.x, a_id.y + 0.5)).xyz;\n// pos3.x = (pos3.x - 0.5) * 2. * radius;\n// pos3.y = (pos3.y - 0.5) * 2. * radius;\n// pos3.z = (pos3.z - 0.5) * 2. * radius;\n\n// vec3 pos4 = texture2D(t_position, vec2(a_id.x + 0.5, a_id.y + 0.5)).xyz;\n// pos4.x = (pos4.x - 0.5) * 2. * radius;\n// pos4.y = (pos4.y - 0.5) * 2. * radius;\n// pos4.z = (pos4.z - 0.5) * 2. * radius;\n\n// pos = mix(pos, pos2, u_progress);\n// pos = mix(pos, pos3, max(0., u_progress - 1.));\n// pos = mix(pos, pos4, max(0., u_progress - 2.));\n\npos = texture2D(t_simulation, vec2(a_id.x * 2., a_id.y * 2.)).xyz;\n// vec3 basePos = pos;\n\n// Mouse Animation -----\nvec4 mPos = vec4(pos, 1.);\nmPos *= rotationMatrix(vec3(1., 0., 0.), u_rotation.x * -1.);\nmPos *= rotationMatrix(vec3(0., 1., 0.), u_rotation.y * -1.);\nmPos *= rotationMatrix(vec3(0., 0., 1.), u_rotation.z * -1.);\nmPos.y -= 1.;\nmPos.x += u_offset.x;\nmPos.y += u_offset.y;\nvec2 resolution = mix(\n  u_resolution - u_resolution * 0.5,\n  u_resolution2 - u_resolution2 * 0.5,\n  min(1., max(0., u_progress2))\n);\nvec2 m = u_mouse * vec2(1., 1.);\nfloat dist = smoothstep( 1.25 + abs(max(u_delta.x, u_delta.y)), 0., distance(mPos.xy, m * resolution)); \npos.x += dist * sin(u_time * a_random.y) * (a_random.z*0.35 + u_delta.x) * abs( u_explode - 1.);\npos.y += dist * cos(u_time * a_random.y) * (a_random.z* 0.35 + u_delta.y) * abs( u_explode - 1.);\n\n// pos.x += m.x * 0.05;\n// pos.y += m.y * 0.05;\n\n// Offset Position -----\n// pos += u_offset;\n\n// Mouse Animation -----\n// vec4 fake_frag_coord  = mvPosition * vec4(pos, 1.);\n// fake_frag_coord.xyz /= fake_frag_coord.w;\n// fake_frag_coord.w = 1.0 / fake_frag_coord.w;\n// fake_frag_coord.xyz *= vec3 (0.5) + vec3 (0.5);\n// fake_frag_coord.xy  *= u_resolution.xy * 0.5; \n// fake_frag_coord.xy  *= vec2(-1., 1.); \n\n// // Mouse Animation -----\n// vec4 mPos = vec4(pos.xy, 1., 1.);\n// mPos.y -= 1.;\n// mPos.xy += u_offset.xy;\n// // mPos *= rotationMatrix(vec3(1., 0., 0.), u_rotation.x);\n// // mPos *= rotationMatrix(vec3(0., 1., 0.), u_rotation.y);\n// // mPos *= rotationMatrix(vec3(0., 0., 1.), u_rotation.z);\n// vec4 tFluid = texture2D( t_fluid, (mPos.xy + u_resolution * 0.5) / u_resolution );\n// // pos.x += tFluid.r * 0.025;\n// // pos.x -= tFluid.b * 0.025;\n// pos.z -= tFluid.r * 0.01;\n\n// vec2 resolution = u_resolution * 0.5;\n// vec2 m = resolution * u_mouse * vec2(1., 1.);\n// float dist = smoothstep(2., 0., distance(pos.xy + u_offset.xy, m));\n// pos *= max(1., 1. + dist * 0.1 + dist * abs(sin(basePos.y * 120. + u_time * 0.5)) * 0.1);\n\nfloat n = snoise(pos * u_amplitude);\n// float n2 = snoise(pos * u_amplitude2 + u_time * 0.2);\nmat4 rotMat = rotationMatrix(vec3(1., 0., 1.), n);\n// mat4 rotMat2 = rotationMatrix(vec3(0., 1., 0.), mod(u_time * a_random.x * 2., 3.1416 * 2.));\nmat4 rotMat2 = rotationMatrix(vec3(0., 1., 1.), mod(n + u_time, 3.1416 * 2.));\n\nfloat scale = texture2D(t_scale, a_id).x * u_scale;\nfloat scale2 = texture2D(t_scale, vec2(a_id.x + 0.5, a_id.y)).x * u_scale;\nfloat scale3 = texture2D(t_scale, vec2(a_id.x, a_id.y + 0.5)).x * u_scale;\nfloat scale4 = texture2D(t_scale, vec2(a_id.x + 0.5, a_id.y + 0.5)).x * u_scale;\nscale = mix(scale, scale2, u_progress);\nscale = mix(scale, scale3, max(0., u_progress - 1.));\nscale = mix(scale, scale4, max(0., u_progress - 2.));\n\nscale += dist * 0.75 * abs( u_explode - 1.);\n\n#ifdef USE_INSTANCING\n  mat4 instanceMat = instanceMatrix;\n\n  instanceMat[3][0] = instanceMat[3][0] + pos.x;\n  instanceMat[3][1] = instanceMat[3][1] + pos.y;\n  instanceMat[3][2] = instanceMat[3][2] + pos.z;\n\n  mat4 rotMat3 = mat4(calcLookAtMatrix(vec3(instanceMat[3][0] + u_offset.x, instanceMat[3][1] + u_offset.y, instanceMat[3][2]), cameraPosition, 0.));\n\n  // instanceMat[0][0] = instanceMat[0][0] * smoothstep(0., 1., scale);\n  // instanceMat[1][1] = instanceMat[1][1] * smoothstep(0., 1., scale);\n  // instanceMat[2][2] = instanceMat[2][2] * smoothstep(0., 1., scale);\n\n  instanceMat[0][0] = instanceMat[0][0] * scale;\n  instanceMat[1][1] = instanceMat[1][1] * scale;\n  instanceMat[2][2] = instanceMat[2][2] * scale;\n\n  // instanceMat *= rotMat;\n  if (u_mobileRotation > 0.) {\n    instanceMat *= rotMat3;\n  } else {\n    instanceMat *= rotMat2;\n  }\n\n\tmvPosition = instanceMat * mvPosition;\n  // mvPosition.xyz += u_offset;\n#endif\n\n// Offset Position -----\nmat4 modViewMatrix = modelViewMatrix;\nmodViewMatrix[3][0] += u_offset.x;\nmodViewMatrix[3][1] += u_offset.y;\nmodViewMatrix *= rotationMatrix(vec3(1., 0., 0.), u_rotation.x);\nmodViewMatrix *= rotationMatrix(vec3(0., 1., 0.), u_rotation.y);\nmodViewMatrix *= rotationMatrix(vec3(0., 0., 1.), u_rotation.z);\n\nmvPosition = modViewMatrix * mvPosition;\n\n// mat4 testMatrix = modelMatrix;\n// testMatrix[3][0] += u_offset.x;\n// testMatrix *= rotationMatrix(vec3(0., 1., 0.), u_rotation);\n\n// mvPosition2 = testMatrix * mvPosition2;\n\nv_pos = mvPosition.xyz;\nv_pos.z += 10.;\n\n// // Mouse Animation -----\n// vec2 resolution = u_resolution * 0.5;\n// vec2 m = u_mouse * vec2(1., 1.);\n// // float dist = smoothstep(.1, 0., distance(mvPosition.xy / resolution, m));\n// float dist = step(distance(mvPosition.xy / resolution, m), .1);\n// mvPosition.x += dist * sin(u_time * a_random.y) * a_random.z;\n// mvPosition.y += dist * cos(u_time * a_random.y) * a_random.z;\n// // mvPosition.z += dist * cos(u_time * a_random.y) * a_random.z;\n// // mvPosition.z += dist * abs(sin(basePos.y * 120. + u_time * 0.5)) * 1.5;\n\n// vec4 tFluid = texture2D( t_fluid, (mvPosition.xy + vec2(1.) ) * 0.5);\n// mvPosition.x += tFluid.r * 0.01;\n// mvPosition.x -= tFluid.b * 0.01;\n// pos.y += tFluid.g * 0.01;\n// mvPosition.z += tFluid.r * 0.05;\n\ngl_Position = projectionMatrix * mvPosition;\n\nv_id = a_id;\nv_hover = dist;",
        zt =
          "#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex \n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20201014 (stegu)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n// \n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+10.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  { \n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i); \n  vec4 p = permute( permute( permute( \n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n                                dot(p2,x2), dot(p3,x3) ) );\n  }",
        Ut =
          "#define GLSLIFY 1\nfloat qinticOut(float t) {\n  // return 1.0 - (pow(t - 1.0, 5.0));\n  return 1.0 - pow(1.0 - t , 5.0);\n  // return 1.0 - ((t - 1.0)*(t - 1.0)*(t - 1.0)*(t - 1.0)*(t - 1.0));\n}\n",
        jt =
          "#define GLSLIFY 1\nfloat qinticInOut(float x)\n{\n  //  x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;\n  float inValue = 16.0 * x * x * x * x * x;\n  float outValue = 1.0 - pow(-2.0 * x + 2.0, 5.0) / 2.0;\n  return step(inValue , 0.5) * inValue + step(0.5,outValue) * outValue;\n}\n",
        Bt =
          "precision highp float;\n#define GLSLIFY 1\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 modelViewMatrix;\n\nattribute lowp vec2 position;\nattribute highp vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0., 1.);\n}\n";
      class Nt extends ve.T {
        constructor({ fluid: e = null } = {}) {
          super(),
            (this._nb = u.isMobile ? 7e3 : 1e4),
            (this._loaded = !1),
            (this.objectVisible = !0),
            (this.active = !1),
            (this._hasRendered = !1),
            (this._posRT = null),
            (this._easing = 0.1),
            (this._factor = u.isMobile ? 2.5 : 4.35),
            (this._scale = u.isMobile ? 1.2 : 1.55),
            (this._m = { x: 0, y: 0 }),
            (this._mTg = { x: 0, y: 0 }),
            (this._mPr = { x: 0, y: 0 }),
            (this._mDelta = { x: 0, y: 0 }),
            (this.royYEnd = u.isMobile ? 5.8 : 6),
            (this._params = {
              pr: 0,
              baseRotation: new Pe.P(0, -0.25 * Math.PI, 0),
              basePosition: new Pe.P(),
            }),
            (this._position1 = new Pe.P(0, -1.19, 0)),
            this.position.copy(this._position1),
            (this._fluid = e);
        }
        _setupFBO() {
          const e = new Uint8Array(4e4);
          u.WebGL.renderer.readRenderTargetPixels(
            this._posRT,
            0,
            0,
            100,
            100,
            e
          );
          const t = new Uint8Array(4e4);
          u.WebGL.renderer.readRenderTargetPixels(
            this._posRT,
            100,
            0,
            100,
            100,
            t
          );
          const n = new Uint8Array(4e4);
          u.WebGL.renderer.readRenderTargetPixels(
            this._posRT,
            0,
            100,
            100,
            100,
            n
          );
          const r = new Uint8Array(4e4);
          u.WebGL.renderer.readRenderTargetPixels(
            this._posRT,
            100,
            100,
            100,
            100,
            r
          );
          const o = new Uint8Array(4e4);
          u.WebGL.renderer.readRenderTargetPixels(
            this._posRT,
            0,
            0,
            100,
            100,
            o
          );
          const s = [],
            a = [],
            l = [],
            c = [],
            h = [];
          {
            let t = 0;
            for (let n = 0; n < e.length; n += 4)
              s.push({
                x: e[n],
                y: e[n + 1],
                z: e[n + 2],
                index: t,
                order: null,
              }),
                t++;
            s.sort((e, t) => t.y - e.y);
            for (let e = 0; e < s.length; e++) s[e].order = e;
            s.sort((e, t) => e.index - t.index);
          }
          {
            let e = 0;
            for (let n = 0; n < t.length; n += 4)
              a.push({ x: t[n], index: e, order: null }), e++;
            a.sort((e, t) => e.x - t.x);
            for (let e = 0; e < a.length; e++) a[e].order = e;
            a.sort((e, t) => e.index - t.index);
          }
          {
            let e = 0;
            for (let t = 0; t < n.length; t += 4)
              l.push({ x: n[t], index: e, order: null }), e++;
            l.sort((e, t) => t.x - e.x);
            for (let e = 0; e < l.length; e++) l[e].order = e;
            l.sort((e, t) => e.index - t.index);
          }
          {
            let e = 0;
            for (let t = 0; t < r.length; t += 4)
              c.push({ y: r[t + 1], index: e, order: null }), e++;
            c.sort((e, t) => t.y - e.y);
            for (let e = 0; e < c.length; e++) c[e].order = e;
            c.sort((e, t) => e.index - t.index);
          }
          {
            let e = 0;
            for (let t = 0; t < o.length; t += 4)
              h.push({ y: o[t + 1], index: e, order: null }), e++;
            h.sort((e, t) => e.y - t.y);
            for (let e = 0; e < h.length; e++) h[e].order = e;
            h.sort((e, t) => e.index - t.index);
          }
          const d = 100,
            f = 100,
            m = new Float32Array(4e4);
          (this._tParams = new Ct.I(
            m,
            d,
            f,
            me.wk1,
            me.VzW,
            me.xfE,
            me.rpg,
            me.rpg,
            me.TyD,
            me.TyD,
            0
          )),
            (this._tParams.generateMipmaps = !1);
          const p = new Float32Array(4e4);
          (this._tParams2 = new Ct.I(
            p,
            d,
            f,
            me.wk1,
            me.VzW,
            me.xfE,
            me.rpg,
            me.rpg,
            me.TyD,
            me.TyD,
            0
          )),
            (this._tParams2.generateMipmaps = !1);
          const v = new Float32Array(4e4);
          (this._tParams3 = new Ct.I(
            v,
            d,
            f,
            me.wk1,
            me.VzW,
            me.xfE,
            me.rpg,
            me.rpg,
            me.TyD,
            me.TyD,
            0
          )),
            (this._tParams3.generateMipmaps = !1);
          for (let e = 0; e < this._nb; e++)
            (this._tParams.image.data[4 * e] =
              e % 2 == 0 ? Math.random() : -1 * Math.random()),
              (this._tParams.image.data[4 * e + 1] =
                Math.floor(e / 100) / 200 + 0.0025),
              (this._tParams.image.data[4 * e + 2] = s[e].order),
              (this._tParams.image.data[4 * e + 3] =
                2e-4 * Math.random() - 1e-4),
              (this._tParams2.image.data[4 * e] = a[e].order),
              (this._tParams2.image.data[4 * e + 1] = l[e].order),
              (this._tParams2.image.data[4 * e + 2] = c[e].order),
              (this._tParams2.image.data[4 * e + 3] = h[e].order),
              (this._tParams3.image.data[4 * e] = 1 + 5 * Math.random()),
              (this._tParams3.image.data[4 * e + 1] = 2 * Math.random() - 1),
              (this._tParams3.image.data[4 * e + 2] = yt(
                s[e].x,
                0,
                256,
                -1,
                1
              )),
              (this._tParams3.image.data[4 * e + 3] = 0);
          (this._tParams.needsUpdate = !0),
            (this._tParams2.needsUpdate = !0),
            (this._tParams3.needsUpdate = !0),
            (this._fboPos = new At({
              width: 200,
              height: 200,
              type: u.isDesktop ? me.VzW : me.cLu,
            })),
            (this._fboSpring = new At({
              width: 200,
              height: 200,
              type: u.isDesktop ? me.VzW : me.cLu,
            })),
            (this._simulationPos = new It({
              material: new Tt.F({
                uniforms: {
                  t_position: { value: null },
                  t_velocity: { value: null },
                  t_params: { value: this._tParams },
                  t_params2: { value: this._tParams2 },
                  t_pos: { value: null },
                  t_oPos: { value: null },
                  u_show: { value: 0 },
                  u_length: { value: this._nb },
                  u_explode: { value: 0 },
                  u_factor: { value: this._factor },
                  u_progress: { value: 0 },
                  u_rendered: { value: 0 },
                },
                vertexShader: Bt,
                fragmentShader:
                  "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D t_position;\nuniform sampler2D t_oPos;\nuniform sampler2D t_velocity;\nuniform sampler2D t_params;\nuniform sampler2D t_params2;\n\nuniform float u_factor;\nuniform float u_length;\nuniform float u_show;\nuniform float u_explode;\nuniform float u_progress;\nuniform float u_rendered;\n\nvarying vec2 vUv;\n\nfloat qinticInOut(float x)\n{\n  //  x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;\n  float inValue = 16.0 * x * x * x * x * x;\n  float outValue = 1.0 - pow(-2.0 * x + 2.0, 5.0) / 2.0;\n  return step(inValue , 0.5) * inValue + step(0.5,outValue) * outValue;\n}\n\nvoid main() {\n  vec4 tOpos = texture2D(t_oPos, vUv);\n  vec3 pos = tOpos.xyz;\n\n  if (u_rendered > 0.) {\n    vec4 tVelocity = texture2D(t_velocity, vUv);\n    pos += tVelocity.xyz;\n\n  } else {\n    vec4 tParams = texture2D(t_params, vUv);\n    vec4 tParams2 = texture2D(t_params2, vUv);\n\n    // Show Animation -----\n    float d = 0.00005;\n    float d2 = 0.0005;\n    float showVal = min(1., max(0., (u_show * (1. + d * (u_length - 1.))) - d * tParams.z));\n    showVal = qinticInOut(showVal);\n    // float radius = mix(u_factor + tParams.x * 3., u_factor, showVal) + u_explode * tParams.y;\n    float radius = mix(u_factor + tParams.x * 3., u_factor, showVal) + min(1., max(0., (u_explode * (u_length - 1.)) - d2 * tParams2.w));\n\n    pos = texture2D(t_position, vec2(vUv.x * 0.5, vUv.y * 0.5)).xyz;\n    vec3 basePos = pos;\n\n    pos.x = (pos.x - 0.5) * 2. * radius;\n    pos.y = (pos.y - 0.5) * 2. * radius;\n    pos.z = (pos.z - 0.5) * 2. * radius;\n\n    vec3 pos2 = texture2D(t_position, vec2(vUv.x * 0.5 + 0.5, vUv.y * 0.5)).xyz;\n    pos2.x = (pos2.x - 0.5) * 2. * radius;\n    pos2.y = (pos2.y - 0.5) * 2. * radius;\n    pos2.z = (pos2.z - 0.5) * 2. * radius;\n\n    vec3 pos3 = texture2D(t_position, vec2(vUv.x * 0.5, vUv.y * 0.5 + 0.5)).xyz;\n    pos3.x = (pos3.x - 0.5) * 2. * radius;\n    pos3.y = (pos3.y - 0.5) * 2. * radius;\n    pos3.z = (pos3.z - 0.5) * 2. * radius;\n\n    vec3 pos4 = texture2D(t_position, vec2(vUv.x * 0.5 + 0.5, vUv.y * 0.5 + 0.5)).xyz;\n    pos4.x = (pos4.x - 0.5) * 2. * radius;\n    pos4.y = (pos4.y - 0.5) * 2. * radius;\n    pos4.z = (pos4.z - 0.5) * 2. * radius;\n\n    pos = mix(pos, pos2, u_progress);\n    pos = mix(pos, pos3, max(0., u_progress - 1.));\n    pos = mix(pos, pos4, max(0., u_progress - 2.));\n  }\n\n  gl_FragColor = vec4(pos, 1.);\n}\n",
              }),
              scene: !0,
            })),
            (this._simulationPos.material.uniforms.t_position.value =
              u.WebGL.assets.textures.cone_position_exr),
            (this._simulationPos.material.uniforms.t_position.value.minFilter =
              this._simulationPos.material.uniforms.t_position.value.magFilter =
                me.TyD),
            (this._simulationPos.material.uniforms.t_position.value.flipY = !0),
            (this._simulationPos.material.uniforms.t_position.value.needsUpdate =
              !0),
            (this._simulationPos.material.needsUpdate = !0),
            (this._simulationSpring = new It({
              material: new Tt.F({
                uniforms: {
                  t_position: { value: null },
                  t_oTarget: { value: null },
                  t_params: { value: this._tParams },
                  t_params2: { value: this._tParams2 },
                  t_params3: { value: this._tParams3 },
                  t_velocity: { value: null },
                  t_oVelocity: { value: null },
                  u_show: { value: 0 },
                  u_length: { value: this._nb },
                  u_explode: { value: 0 },
                  u_factor: { value: this._factor },
                  u_progress: { value: 0 },
                  u_spring: { value: 0.006 },
                  u_friction: { value: 0.892 },
                  u_resolution: { value: new i.F() },
                  u_rendered: { value: 0 },
                },
                vertexShader: Bt,
                fragmentShader:
                  "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D t_oTarget;\nuniform sampler2D t_position;\nuniform sampler2D t_oVelocity;\nuniform sampler2D t_params;\nuniform sampler2D t_params2;\nuniform sampler2D t_params3;\n\nuniform vec2 u_resolution;\nuniform float u_factor;\nuniform float u_length;\nuniform float u_show;\nuniform float u_explode;\nuniform float u_progress;\nuniform float u_spring;\nuniform float u_friction;\nuniform float u_rendered;\nuniform float u_delay;\n\nvarying vec2 vUv;\n\nfloat qinticInOut(float x)\n{\n  //  x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;\n  float inValue = 16.0 * x * x * x * x * x;\n  float outValue = 1.0 - pow(-2.0 * x + 2.0, 5.0) / 2.0;\n  return step(inValue , 0.5) * inValue + step(0.5,outValue) * outValue;\n}\n\nvoid main() {\n  float vx = 0.;\n  float vy = 0.;\n  float vz = 0.;\n\n  if (u_rendered > 0.) {\n    vec4 tParams = texture2D(t_params, vUv);\n    vec4 tParams2 = texture2D(t_params2, vUv);\n    vec4 tParams3 = texture2D(t_params3, vUv);\n\n    // Show Animation -----\n    float d = 0.00005;\n    float d3 = 0.00015;\n    float showVal = min(1., max(0., (u_show * (1. + d * (u_length - 1.))) - d * tParams.z));\n    showVal = qinticInOut(showVal);\n    // float radius = mix(u_factor + tParams.x * 3., u_factor, showVal) + u_explode * tParams.y;\n    // float radius = mix(u_factor + tParams.x * 3., u_factor, showVal) + min(1., max(0., u_explode * (1. + d3 * (u_length - 1.)) - d3 * tParams2.w)) * 6.;\n    float radius = mix(u_factor + tParams.x * 3., u_factor, showVal);\n\n    vec3 pos = texture2D(t_position, vec2(vUv.x * 0.5, vUv.y * 0.5)).xyz;\n    vec3 basePos = pos;\n\n    pos.x = (pos.x - 0.5) * 2. * radius;\n    pos.y = (pos.y - 0.5) * 2. * radius;\n    pos.z = (pos.z - 0.5) * 2. * radius;\n\n    vec3 pos2 = texture2D(t_position, vec2(vUv.x * 0.5 + 0.5, vUv.y * 0.5)).xyz;\n    pos2.x = (pos2.x - 0.5) * 2. * radius;\n    pos2.y = (pos2.y - 0.5) * 2. * radius;\n    pos2.z = (pos2.z - 0.5) * 2. * radius;\n\n    vec3 pos3 = texture2D(t_position, vec2(vUv.x * 0.5, vUv.y * 0.5 + 0.5)).xyz;\n    pos3.x = (pos3.x - 0.5) * 2. * radius;\n    pos3.y = (pos3.y - 0.5) * 2. * radius;\n    pos3.z = (pos3.z - 0.5) * 2. * radius;\n\n    vec3 pos4 = texture2D(t_position, vec2(vUv.x * 0.5 + 0.5, vUv.y * 0.5 + 0.5)).xyz;\n    pos4.x = (pos4.x - 0.5) * 2. * radius;\n    pos4.y = (pos4.y - 0.5) * 2. * radius;\n    pos4.z = (pos4.z - 0.5) * 2. * radius;\n\n    // vec3 pos5 = tParams3.xyz;\n    // pos5.xy *= u_resolution * 2.;\n\n    // vec3 pos5 = tParams3.xyz;\n    // pos5.xyz *= vec3(u_resolution * 2., u_resolution.x * 2.);\n\n    float d2 = 0.0005;\n    float d4 = u_delay; // 0.000025 for mobile and 0.0005 for dekstop\n    pos = mix(pos, pos2, min(1., max(0., ((u_progress * (1. + d4 * (u_length - 1.))) - d4 * tParams2.x))));\n    pos = mix(pos, pos3, min(1., max(0., ((max(0., u_progress - 1.) * (1. + d2 * (u_length - 1.))) - d2 * tParams2.y))));\n    pos = mix(pos, pos4, min(1., max(0., ((max(0., u_progress - 2.) * (1. + d4 * (u_length - 1.))) - d4 * tParams2.z))));\n    pos = mix(pos, pos * tParams3.x, min(1., max(0., u_explode * (1. + d3 * (u_length - 1.)) - d3 * tParams2.w)));\n\n    vec4 tOtarget = texture2D(t_oTarget, vUv);\n    vec4 tOVelocity = texture2D(t_oVelocity, vUv);\n\n    float spring = u_spring + tParams.w;\n    float friction = u_friction;\n\n    float dx = pos.x - tOtarget.x;\n    float dy = pos.y - tOtarget.y;\n    float dz = pos.z - tOtarget.z;\n\n    float ax = dx * spring;\n    float ay = dy * spring;\n    float az = dz * spring;\n\n    vx = tOVelocity.x + ax;\n    vy = tOVelocity.y + ay;\n    vz = tOVelocity.z + az;\n\n    vx *= friction;\n    vy *= friction;\n    vz *= friction;\n  }\n\n  gl_FragColor = vec4(vec3(vx, vy, vz), 1.);\n}\n",
              }),
              scene: !0,
            })),
            (this._simulationSpring.material.uniforms.t_position.value =
              u.WebGL.assets.textures.cone_position_exr),
            (this._simulationSpring.material.uniforms.t_position.value.minFilter =
              this._simulationSpring.material.uniforms.t_position.value.magFilter =
                me.TyD),
            (this._simulationSpring.material.uniforms.t_position.value.flipY =
              !0),
            (this._simulationSpring.material.uniforms.t_position.value.needsUpdate =
              !0),
            (this._simulationSpring.material.needsUpdate = !0);
        }
        _setupGeometry() {
          u.WebGL.assets.models.piramed.scene.traverse((e) => {
            "Mesh" === e.type && (this._geometry = e.geometry.clone());
          });
        }
        _setupMaterial() {
          (this._material = new Dt({
            transparent: !0,
            customUniforms: [
              { id: "t_position", type: "sampler2D", value: null },
              { id: "t_scale", type: "sampler2D", value: null },
              { id: "t_color", type: "sampler2D", value: null },
              { id: "u_factor", type: "float", value: this._factor },
              { id: "u_time", type: "float", value: 0 },
              { id: "u_scale", type: "float", value: this._scale },
              { id: "u_amplitude", type: "float", value: 0.619 },
              { id: "u_colorFactor", type: "float", value: 1.3 },
              { id: "u_show", type: "float", value: 0 },
              { id: "u_length", type: "float", value: this._nb },
              { id: "u_mouse", type: "vec2", value: new i.F(0, 0) },
              {
                id: "u_resolution",
                type: "vec2",
                value: new i.F(u.window.w, u.window.h),
              },
              { id: "u_offset", type: "vec3", value: new Pe.P(0, 0, 0) },
              { id: "u_explode", type: "float", value: 0 },
              { id: "u_progress", type: "float", value: 0 },
              { id: "u_rotation", type: "vec3", value: new Pe.P() },
              { id: "u_amplitude2", type: "float", value: 0.5 },
              { id: "t_simulation", type: "sampler2D", value: null },
              {
                id: "t_fluid",
                type: "sampler2D",
                value: this._fluid ? this._fluid.density.read.texture : null,
              },
              { id: "u_resolution2", type: "vec2", value: new i.F() },
              { id: "u_progress2", type: "float", value: 0 },
              { id: "u_delta", type: "vec2", value: new i.F() },
              { id: "u_delay", type: "vec2", value: u.isMobile ? 25e-6 : 5e-4 },
              {
                id: "u_mobileRotation",
                type: "float",
                value: u.isDesktop ? 0 : 1 * Math.PI,
              },
            ],
            onBeforeCompile: function (e) {
              for (let t = 0; t < this._customUniforms.length; t++) {
                const n = this._customUniforms[t];
                (e.uniforms[n.id] = n),
                  (e.vertexShader =
                    "uniform ".concat(n.type, " ").concat(n.id, ";\n") +
                    e.vertexShader),
                  (e.fragmentShader =
                    "uniform ".concat(n.type, " ").concat(n.id, ";\n") +
                    e.fragmentShader);
              }
              (e.vertexShader = zt + e.vertexShader),
                (e.vertexShader = jt + e.vertexShader),
                (e.vertexShader = Rt + e.vertexShader),
                (e.vertexShader = Ut + e.vertexShader),
                (e.vertexShader =
                  "attribute vec4 a_random;\n" + e.vertexShader),
                (e.vertexShader = "attribute vec4 a_angle;\n" + e.vertexShader),
                (e.vertexShader = "attribute vec2 a_id;\n" + e.vertexShader),
                (e.vertexShader = "varying vec2 v_id;\n" + e.vertexShader),
                (e.vertexShader = "varying vec3 v_pos;\n" + e.vertexShader),
                (e.vertexShader = "varying float v_hover;\n" + e.vertexShader),
                (e.vertexShader =
                  "attribute float a_order;\n" + e.vertexShader),
                (e.vertexShader =
                  "attribute float a_index;\n" + e.vertexShader),
                (e.vertexShader = e.vertexShader.replace(
                  "#include <project_vertex>",
                  kt
                )),
                (e.vertexShader = e.vertexShader.replace(
                  "#include <worldpos_vertex>",
                  "#define GLSLIFY 1\n#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMat * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif"
                )),
                (e.fragmentShader = "varying vec3 v_pos;\n" + e.fragmentShader),
                (e.fragmentShader = "varying vec2 v_id;\n" + e.fragmentShader),
                (e.fragmentShader =
                  "varying float v_hover;\n" + e.fragmentShader),
                (e.fragmentShader = e.fragmentShader.replace(
                  "#include <output_fragment>",
                  "#define GLSLIFY 1\nvec3 col = texture2D(t_color, v_id).xyz;\nvec3 col2 = texture2D(t_color, vec2(v_id.x + 0.5, v_id.y)).xyz;\nvec3 col3 = texture2D(t_color, vec2(v_id.x, v_id.y + 0.5)).xyz;\nvec3 col4 = texture2D(t_color, vec2(v_id.x + 0.5, v_id.y + 0.5)).xyz;\ncol = mix(col, col2, u_progress);\ncol = mix(col, col3, max(0., u_progress - 1.));\ncol = mix(col, col4, max(0., u_progress - 2.));\n// col += v_hover * 0.5;\ncol = mix(col, vec3(0.45), max(0., v_hover - u_explode) * abs( u_explode - 1.));\n\n#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n// https://github.com/mrdoob/three.js/pull/22425\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\noutgoingLight.rgb = col.rgb * u_colorFactor;\n// outgoingLight.rgb = vec3(smoothstep(-7., 5., v_pos.z));\n// outgoingLight.rgb = vec3(step(1., v_pos.y / (u_resolution.y * 0.5)));\n// outgoingLight.rgb = vec3(v_pos.x / (u_resolution.x * 0.5));\n// outgoingLight.rgb = vec3(v_pos.y / (u_resolution.y * 0.5));\n// float alpha = diffuseColor.a * mix(smoothstep(-8., 5., v_pos.z), 1., u_explode);\nfloat alpha = diffuseColor.a * smoothstep(-4.5, 4., v_pos.z);\ngl_FragColor = vec4( outgoingLight, alpha );"
                ));
            },
          })),
            (this._material.customUniforms[0].value =
              u.WebGL.assets.textures.cone_position_exr),
            (this._material.customUniforms[1].value =
              u.WebGL.assets.textures.cone_scale),
            (this._material.customUniforms[2].value =
              u.WebGL.assets.textures.cone_color),
            (this._material.customUniforms[0].value.minFilter =
              this._material.customUniforms[0].value.magFilter =
                me.TyD),
            (this._material.customUniforms[0].value.flipY = !0),
            (this._material.customUniforms[0].value.needsUpdate = !0),
            (this._material.customUniforms[1].value.minFilter =
              this._material.customUniforms[0].value.magFilter =
                me.TyD),
            (this._material.customUniforms[1].value.flipY = !1),
            (this._material.customUniforms[1].value.needsUpdate = !0),
            (this._material.customUniforms[2].value.minFilter =
              this._material.customUniforms[0].value.magFilter =
                me.TyD),
            (this._material.customUniforms[2].value.flipY = !1),
            (this._material.customUniforms[2].value.needsUpdate = !0),
            (this._material.needsUpdate = !0);
        }
        _setupMesh() {
          this._mesh = new mt.S(this._geometry, this._material, this._nb);
          const e = new pt.y(),
            t = new Pe.P(),
            n = new vt._(),
            r = new Pe.P(),
            o = new Float32Array(4 * this._nb),
            s = new Float32Array(4 * this._nb),
            a = new Float32Array(2 * this._nb),
            l = new Float32Array(this._nb),
            c = new Float32Array(this._nb);
          let h = 0;
          for (let i = 0; i < this._nb; i++) {
            const d = 0,
              f = 0,
              m = 0,
              p = 0.1;
            t.set(d, f, m),
              r.set(p, p, p),
              e.compose(t, n, r),
              this._mesh.setMatrixAt(i, e),
              e.identity(),
              (a[2 * i] = (i % 100) / 200 + 0.0025),
              (a[2 * i + 1] = Math.floor(h / 100) / 200 + 0.0025),
              (s[4 * i] = Math.random()),
              (s[4 * i + 1] = Math.random()),
              (s[4 * i + 2] = Math.random()),
              (s[4 * i + 3] = Math.random()),
              (l[i] = i),
              (c[i] = 0),
              (o[4 * i] = i % 2 == 0 ? Math.random() : -1 * Math.random()),
              (o[4 * i + 1] = 0.8 * Math.random() + 0.2),
              (o[4 * i + 2] = u.isMobile
                ? 0.5 * Math.random()
                : 0.5 * Math.random() + 0.5),
              (o[4 * i + 3] = 0),
              h++;
          }
          this._geometry.setAttribute("a_index", new gt.l(l, 1)),
            this._geometry.setAttribute("a_order", new gt.l(c, 1)),
            this._geometry.setAttribute("a_id", new gt.l(a, 2)),
            this._geometry.setAttribute("a_angle", new gt.l(s, 4)),
            this._geometry.setAttribute("a_random", new gt.l(o, 4)),
            (this._depthMaterial = new bt({
              transparent: !0,
              customUniforms: {
                t_position: {
                  type: "sampler2D",
                  value: this._material.customUniforms[0].value,
                },
                t_scale: {
                  type: "sampler2D",
                  value: this._material.customUniforms[1].value,
                },
                t_color: {
                  type: "sampler2D",
                  value: this._material.customUniforms[2].value,
                },
                u_factor: { type: "float", value: this._factor },
                u_time: { type: "float", value: 0 },
                u_scale: { type: "float", value: this._scale },
                u_amplitude: { type: "float", value: 0.619 },
                u_colorFactor: { type: "float", value: 1.3 },
                u_show: { type: "float", value: 0 },
                u_length: { type: "float", value: this._nb },
                u_mouse: { type: "vec2", value: new i.F(0, 0) },
                u_resolution: {
                  type: "vec2",
                  value: new i.F(u.window.w, u.window.h),
                },
                u_offset: { type: "vec3", value: new Pe.P(0, 0, 0) },
                u_explode: { type: "float", value: 0 },
                u_progress: { type: "float", value: 0 },
                u_rotation: { type: "vec3", value: new Pe.P() },
                u_amplitude2: { type: "float", value: 0.5 },
                t_simulation: { type: "sampler2D", value: null },
                t_fluid: {
                  type: "sampler2D",
                  value: this._fluid ? this._fluid.density.read.texture : null,
                },
                u_resolution2: { type: "vec2", value: new i.F() },
                u_progress2: { type: "float", value: 0 },
                u_delta: { type: "vec2", value: new i.F() },
                u_mobileRotation: {
                  type: "float",
                  value: u.isDesktop ? 1 * Math.PI : 0,
                },
              },
              onBeforeCompile: function (e) {
                (e.vertexShader = zt + e.vertexShader),
                  (e.vertexShader = jt + e.vertexShader),
                  (e.vertexShader = Rt + e.vertexShader),
                  (e.vertexShader = Ut + e.vertexShader),
                  (e.vertexShader =
                    "attribute vec4 a_random;\n" + e.vertexShader),
                  (e.vertexShader =
                    "attribute vec4 a_angle;\n" + e.vertexShader),
                  (e.vertexShader = "attribute vec2 a_id;\n" + e.vertexShader),
                  (e.vertexShader = "varying vec2 v_id;\n" + e.vertexShader),
                  (e.vertexShader = "varying vec3 v_pos;\n" + e.vertexShader),
                  (e.vertexShader =
                    "varying float v_hover;\n" + e.vertexShader),
                  (e.vertexShader =
                    "attribute float a_order;\n" + e.vertexShader),
                  (e.vertexShader =
                    "attribute float a_index;\n" + e.vertexShader),
                  (e.vertexShader = e.vertexShader.replace(
                    "#include <project_vertex>",
                    kt
                  ));
              },
            })),
            (this._mesh.customDepthMaterial = this._depthMaterial),
            this.add(this._mesh);
        }
        activate({ delay: e = 0 } = {}) {
          if (!this.active) {
            const t = 3;
            h.p8.killTweensOf(this._simulationPos.material.uniforms.u_show),
              h.p8.to(this._simulationPos.material.uniforms.u_show, {
                value: 1,
                duration: t,
                ease: "Power0.easeNone",
                delay: e,
              }),
              h.p8.killTweensOf(
                this._simulationSpring.material.uniforms.u_show
              ),
              h.p8.to(this._simulationSpring.material.uniforms.u_show, {
                value: 1,
                duration: t,
                ease: "Power0.easeNone",
                delay: e,
              }),
              h.p8.killTweensOf(this._material.customUniforms[8]),
              h.p8.to(this._material.customUniforms[8], {
                value: 1,
                duration: t,
                ease: "Power0.easeNone",
                delay: e,
              }),
              h.p8.killTweensOf(this._depthMaterial.customUniforms.u_show),
              h.p8.to(this._depthMaterial.customUniforms.u_show, {
                value: 1,
                duration: t,
                ease: "Power0.easeNone",
                delay: e,
              }),
              h.p8.killTweensOf(this._params.baseRotation),
              h.p8.to(this._params.baseRotation, {
                y: 0,
                duration: t,
                ease: "Power2.easeOut",
                delay: e,
              }),
              (this.active = !0);
          }
        }
        deactivate({ delay: e = 0 } = {}) {
          this.active &&
            (h.p8.killTweensOf(this._material.customUniforms[8]),
            h.p8.to(this._material.customUniforms[8], {
              value: 3,
              duration: 3,
              ease: "Power0.easeNone",
              delay: e,
            }),
            h.p8.killTweensOf(this._depthMaterial.customUniforms.u_show),
            h.p8.to(this._depthMaterial.customUniforms.u_show, {
              value: 3,
              duration: 3,
              ease: "Power0.easeNone",
              delay: e,
            }),
            (this.active = !1));
        }
        setProgess(e) {}
        onMousedown(e) {
          (this._mTg = e),
            (this._mPr.x = this._mTg.x),
            (this._mPr.y = this._mTg.y),
            (this._mDelta.x = 0),
            (this._mDelta.y = 0);
        }
        onMousemove(e) {
          (this._mTg = e),
            u.isMobile
              ? ((this._mDelta.x = xt(
                  50 * (this._mTg.x - this._mPr.x),
                  -0.1,
                  0.1
                )),
                (this._mDelta.y = xt(
                  50 * (this._mTg.y - this._mPr.y),
                  -0.1,
                  0.1
                )))
              : ((this._mDelta.x = xt(50 * (this._mTg.x - this._mPr.x), -2, 2)),
                (this._mDelta.y = xt(50 * (this._mTg.y - this._mPr.y), -2, 2))),
            (this._mPr.x = this._mTg.x),
            (this._mPr.y = this._mTg.y);
        }
        onMouseleave() {
          (this._mDelta.x = 0), (this._mDelta.y = 0);
        }
        onAssetsLoaded({ renderTarget: e } = {}) {
          (this._posRT = e),
            this._setupFBO(),
            this._setupGeometry(),
            this._setupMaterial(),
            this._setupMesh(),
            (this._loaded = !0);
        }
        resize({ camera: e } = {}) {
          this._material &&
            ((this._pSize = _t(e, 10)),
            (this._pSize2 = _t(e, 6.5)),
            (this._material.customUniforms[11].value.x = this._pSize.width),
            (this._material.customUniforms[11].value.y = this._pSize.height),
            (this._depthMaterial.customUniforms.u_resolution.value.x =
              this._pSize.width),
            (this._depthMaterial.customUniforms.u_resolution.value.y =
              this._pSize.height),
            this._simulationSpring.material.uniforms.u_resolution.value.set(
              this._pSize.width,
              this._pSize.height
            ),
            (this._material.customUniforms[19].value.x = this._pSize2.width),
            (this._material.customUniforms[19].value.y = this._pSize2.height),
            (this._depthMaterial.customUniforms.u_resolution2.value.x =
              this._pSize2.width),
            (this._depthMaterial.customUniforms.u_resolution2.value.y =
              this._pSize2.height));
        }
        update(e) {
          this._loaded &&
            ((this._material.customUniforms[4].value = e),
            (this._depthMaterial.customUniforms.u_time.value = e),
            (this._material.customUniforms[18].value = this._fluid
              ? this._fluid.density.read.texture
              : null),
            (this._depthMaterial.customUniforms.t_fluid.value = this._fluid
              ? this._fluid.density.read.texture
              : null),
            this._updateRotation(),
            this._updateMouse(),
            u.isMobile ? this._updateMobilePosition() : this._updatePosition(),
            this._updateFBO());
        }
        _updateFBO() {
          this._hasRendered
            ? ((this._simulationSpring.material.uniforms.t_oTarget.value =
                this._fboPos.read.texture),
              u.WebGL.renderer.setRenderTarget(this._fboSpring.write),
              u.WebGL.renderer.render(
                this._simulationSpring.scene,
                this._simulationSpring.camera
              ),
              this._fboSpring.swap(),
              (this._simulationSpring.material.uniforms.t_oVelocity.value =
                this._fboSpring.read.texture),
              (this._simulationSpring.material.uniforms.t_velocity.value =
                this._fboSpring.write.texture),
              (this._simulationPos.material.uniforms.t_velocity.value =
                this._fboSpring.write.texture),
              u.WebGL.renderer.setRenderTarget(this._fboPos.write),
              u.WebGL.renderer.render(
                this._simulationPos.scene,
                this._simulationPos.camera
              ),
              this._fboPos.swap(),
              (this._simulationPos.material.uniforms.t_oPos.value =
                this._fboPos.read.texture),
              (this._simulationPos.material.uniforms.t_pos.value =
                this._fboPos.write.texture),
              (this._material.customUniforms[17].value =
                this._fboPos.write.texture),
              (this._depthMaterial.customUniforms.t_simulation.value =
                this._fboPos.write.texture))
            : (u.WebGL.renderer.setRenderTarget(this._fboPos.write),
              u.WebGL.renderer.render(
                this._simulationPos.scene,
                this._simulationPos.camera
              ),
              this._fboPos.swap(),
              (this._simulationPos.material.uniforms.t_oPos.value =
                this._fboPos.read.texture),
              (this._simulationPos.material.uniforms.t_pos.value =
                this._fboPos.write.texture),
              (this._material.customUniforms[17].value =
                this._fboPos.write.texture),
              (this._depthMaterial.customUniforms.t_simulation.value =
                this._fboPos.write.texture),
              u.WebGL.renderer.setRenderTarget(this._fboSpring.write),
              u.WebGL.renderer.render(
                this._simulationSpring.scene,
                this._simulationSpring.camera
              ),
              this._fboSpring.swap(),
              (this._simulationSpring.material.uniforms.t_oVelocity.value =
                this._fboSpring.read.texture),
              (this._simulationSpring.material.uniforms.t_velocity.value =
                this._fboSpring.write.texture),
              (this._simulationPos.material.uniforms.u_rendered.value = 1),
              (this._simulationSpring.material.uniforms.u_rendered.value = 1),
              (this._hasRendered = !0));
        }
        _updateRotation() {
          const e = u.sectionProgress,
            t =
              xt(yt(e, 0, 1, 0, 0.5 * -Math.PI), 0.5 * -Math.PI, 0) +
              xt(yt(e, 2.7, 3, 0, 0.5 * Math.PI), 0, 0.5 * Math.PI) +
              xt(yt(e, 3.3, 3.5, 0, 0.25 * Math.PI), 0, 0.25 * Math.PI) -
              xt(yt(e, 4.5, 5, 0, 1.25 * Math.PI), 0, 1.25 * Math.PI) +
              xt(yt(e, 5.7, this.royYEnd, 0, Math.PI), 0, Math.PI),
            n =
              xt(yt(e, 2.7, 3, 0, -0.489), -0.489, 0) +
              xt(yt(e, 3.3, 3.5, 0, 0.6), 0, 0.6);
          (this._material.customUniforms[15].value.x +=
            (0 - this._material.customUniforms[15].value.x) *
            (0.75 * this._easing)),
            (this._material.customUniforms[15].value.y +=
              (t - this._material.customUniforms[15].value.y) *
              (0.75 * this._easing)),
            (this._material.customUniforms[15].value.z +=
              (n - this._material.customUniforms[15].value.z) *
              (0.75 * this._easing)),
            (this._depthMaterial.customUniforms.u_rotation.value.x +=
              (0 - this._depthMaterial.customUniforms.u_rotation.value.x) *
              (0.75 * this._easing)),
            (this._depthMaterial.customUniforms.u_rotation.value.y +=
              (t - this._depthMaterial.customUniforms.u_rotation.value.y) *
              (0.75 * this._easing)),
            (this._depthMaterial.customUniforms.u_rotation.value.z +=
              (n - this._depthMaterial.customUniforms.u_rotation.value.z) *
              (0.75 * this._easing)),
            (this.rotation.y = this._params.baseRotation.y);
        }
        _updateMouse() {
          (this._mDelta.x += (0 - this._mDelta.x) * this._easing),
            (this._mDelta.y += (0 - this._mDelta.y) * this._easing),
            (this._material.customUniforms[10].value.x +=
              (this._mTg.x - this._material.customUniforms[10].value.x) *
              (0.75 * this._easing)),
            (this._material.customUniforms[10].value.y +=
              (this._mTg.y - this._material.customUniforms[10].value.y) *
              (0.75 * this._easing)),
            (this._depthMaterial.customUniforms.u_mouse.value.x +=
              (this._mTg.x -
                this._depthMaterial.customUniforms.u_mouse.value.x) *
              (0.75 * this._easing)),
            (this._depthMaterial.customUniforms.u_mouse.value.y +=
              (this._mTg.y -
                this._depthMaterial.customUniforms.u_mouse.value.y) *
              (0.75 * this._easing)),
            (this._material.customUniforms[21].value.x +=
              (this._mDelta.x - this._material.customUniforms[21].value.x) *
              (0.75 * this._easing)),
            (this._material.customUniforms[21].value.y +=
              (this._mDelta.y - this._material.customUniforms[21].value.y) *
              (0.75 * this._easing)),
            (this._depthMaterial.customUniforms.u_delta.value.x +=
              (this._mDelta.x -
                this._depthMaterial.customUniforms.u_delta.value.x) *
              (0.75 * this._easing)),
            (this._depthMaterial.customUniforms.u_delta.value.y +=
              (this._mDelta.y -
                this._depthMaterial.customUniforms.u_delta.value.y) *
              (0.75 * this._easing));
        }
        _updatePosition() {
          const e = u.sectionProgress,
            t =
              xt(yt(e, 0, 1, 3, -4.5), -4.5, 3) +
              xt(yt(e, 1.25, 1.5, 0.905, 5), 0.905, 5) -
              xt(yt(e, 2.8, 3, 0.905, 3), 0.905, 3) +
              xt(yt(e, 3.3, 3.5, 0.905, 6), 0.905, 6) -
              xt(yt(e, 4.5, 5, 0.905, 5), 0.905, 4);
          this._params.basePosition.x =
            t + 0 * this._material.customUniforms[10].value.x;
          const n =
            xt(yt(e, 2.7, 3, 0, 0.5), 0, 0.5) -
            xt(yt(e, 3.3, 3.5, 0, 0.5), 0, 0.5) +
            xt(yt(e, 5.7, 6, 0, 1.75), 0, 1.75);
          this._params.basePosition.y =
            n + 0 * this._material.customUniforms[10].value.y;
          const i =
            xt(yt(e, 1.1, 2.2, 0, 1), 0, 1) -
            xt(yt(e, 2.8, 3, 0, 1), 0, 1) +
            xt(yt(e, 4.5, 5, 0, 1), 0, 1) -
            xt(yt(e, 5.7, 6, 0, 1), 0, 1);
          (this._material.customUniforms[13].value +=
            (i - this._material.customUniforms[13].value) * this._easing),
            (this._simulationPos.material.uniforms.u_explode.value +=
              (i - this._simulationPos.material.uniforms.u_explode.value) *
              this._easing),
            (this._simulationSpring.material.uniforms.u_explode.value +=
              (i - this._simulationSpring.material.uniforms.u_explode.value) *
              this._easing);
          const r =
            this._factor +
            xt(yt(e, 0, 1, 0, 1), 0, 1) -
            xt(yt(e, 1.25, 1.5, 0, 1), 0, 1) +
            xt(yt(e, 3.3, 3.5, 0, 0.3), 0, 0.3) -
            xt(yt(e, 5.7, 6, 0, 1), 0, 1);
          (this._material.customUniforms[3].value +=
            (r - this._material.customUniforms[3].value) * this._easing),
            (this._simulationPos.material.uniforms.u_factor.value +=
              (r - this._simulationPos.material.uniforms.u_factor.value) *
              this._easing),
            (this._simulationSpring.material.uniforms.u_factor.value +=
              (r - this._simulationPos.material.uniforms.u_factor.value) *
              this._easing);
          const o =
            xt(yt(e, 2.7, 3, 0, 1), 0, 1) +
            xt(yt(e, 3.3, 3.5, 0, 1), 0, 1) +
            xt(yt(e, 5.7, 6, 0, 1), 0, 1);
          (this._material.customUniforms[14].value +=
            (o - this._material.customUniforms[14].value) * this._easing),
            (this._simulationPos.material.uniforms.u_progress.value +=
              (o - this._simulationPos.material.uniforms.u_progress.value) *
              this._easing),
            (this._simulationSpring.material.uniforms.u_progress.value +=
              (o - this._simulationSpring.material.uniforms.u_progress.value) *
              this._easing);
          const s =
            xt(yt(e, 0, 1, 0, 1), 0, 1) -
            xt(yt(e, 2.7, 3, 0, 1), 0, 1) +
            xt(yt(e, 3, 3.5, 0, 1), 0, 1) -
            xt(yt(e, 5.5, 5.5, 0, 1), 0, 1);
          (this._material.customUniforms[20].value +=
            (s - this._material.customUniforms[20].value) * this._easing),
            (this._depthMaterial.customUniforms.u_progress2.value +=
              (s - this._depthMaterial.customUniforms.u_progress2.value) *
              this._easing),
            (this._material.customUniforms[12].value.x +=
              (this._params.basePosition.x -
                this._material.customUniforms[12].value.x) *
              this._easing),
            (this._material.customUniforms[12].value.y +=
              (this._params.basePosition.y -
                this._material.customUniforms[12].value.y) *
              this._easing),
            (this._depthMaterial.customUniforms.u_offset.value.x +=
              (this._params.basePosition.x -
                this._depthMaterial.customUniforms.u_offset.value.x) *
              this._easing),
            (this._depthMaterial.customUniforms.u_offset.value.y +=
              (this._params.basePosition.y -
                this._depthMaterial.customUniforms.u_offset.value.y) *
              this._easing);
        }
        _updateMobilePosition() {
          const e = u.sectionProgress,
            t =
              xt(yt(e, 0, 1, 1.5, 0), 0, 1.5) +
              xt(yt(e, 1.25, 1.5, 0, 0), 0, 0) -
              xt(yt(e, 2.8, 3, 0, 0), 0, 0) +
              xt(yt(e, 3.3, 3.5, 0, 0), 0, 0) -
              xt(yt(e, 4.5, 5, 0, 0), 0, 0);
          this._params.basePosition.x =
            t + 0.052 * this._material.customUniforms[10].value.x;
          this._params.basePosition.y =
            2 + 0 * this._material.customUniforms[10].value.y;
          const n =
            xt(yt(e, 1.4, 1.7, 0, 1), 0, 1) -
            xt(yt(e, 2.7, 3, 0, 1), 0, 1) +
            xt(yt(e, 4.5, 5, 0, 1), 0, 1) -
            xt(yt(e, 5.7, 5.8, 0, 1), 0, 1);
          (this._material.customUniforms[13].value +=
            (n - this._material.customUniforms[13].value) * this._easing),
            (this._simulationPos.material.uniforms.u_explode.value +=
              (n - this._simulationPos.material.uniforms.u_explode.value) *
              this._easing),
            (this._simulationSpring.material.uniforms.u_explode.value +=
              (n - this._simulationSpring.material.uniforms.u_explode.value) *
              this._easing);
          const i =
            xt(yt(e, 2.7, 3, 0, 1), 0, 1) +
            xt(yt(e, 3.3, 3.5, 0, 1), 0, 1) +
            xt(yt(e, 5.7, 5.8, 0, 1), 0, 1);
          (this._material.customUniforms[14].value +=
            (i - this._material.customUniforms[14].value) * this._easing),
            (this._simulationPos.material.uniforms.u_progress.value +=
              (i - this._simulationPos.material.uniforms.u_progress.value) *
              this._easing),
            (this._simulationSpring.material.uniforms.u_progress.value +=
              (i - this._simulationSpring.material.uniforms.u_progress.value) *
              this._easing),
            (this._material.customUniforms[12].value.x +=
              (this._params.basePosition.x -
                this._material.customUniforms[12].value.x) *
              this._easing),
            (this._material.customUniforms[12].value.y +=
              (this._params.basePosition.y -
                this._material.customUniforms[12].value.y) *
              this._easing),
            (this._depthMaterial.customUniforms.u_offset.value.x +=
              (this._params.basePosition.x -
                this._depthMaterial.customUniforms.u_offset.value.x) *
              this._easing),
            (this._depthMaterial.customUniforms.u_offset.value.y +=
              (this._params.basePosition.y -
                this._depthMaterial.customUniforms.u_offset.value.y) *
              this._easing);
        }
      }
      var Vt = n(3967),
        Gt = n(4458),
        Wt = n(6682),
        Ht = n(8304);
      const qt = {
        defines: { RINGS: 4, SAMPLES: 6 },
        uniforms: {
          textureWidth: { value: 1 },
          textureHeight: { value: 1 },
          focalDepth: { value: 1.2 },
          focalLength: { value: 35 },
          fstop: { value: 0.9 },
          tColor: { value: null },
          tDepth: { value: null },
          maxblur: { value: 1 },
          showFocus: { value: 0 },
          manualdof: { value: 0 },
          vignetting: { value: 0 },
          depthblur: { value: 0 },
          threshold: { value: 0.5 },
          gain: { value: 2 },
          bias: { value: 0.5 },
          fringe: { value: 0.7 },
          znear: { value: 0.1 },
          zfar: { value: 100 },
          noise: { value: 1 },
          dithering: { value: 1e-4 },
          pentagon: { value: 0 },
          shaderFocus: { value: 0 },
          focusCoords: { value: new i.F() },
        },
        vertexShader:
          "#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main() {\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}",
        fragmentShader:
          "#define GLSLIFY 1\n#include <common>\n\nvarying vec2 vUv;\n\nuniform sampler2D tColor;\nuniform sampler2D tDepth;\nuniform float textureWidth;\nuniform float textureHeight;\n\nuniform float focalDepth;  //focal distance value in meters, but you may use autofocus option below\nuniform float focalLength; //focal length in mm\nuniform float fstop; //f-stop value\nuniform bool showFocus; //show debug focus point and focal range (red = focal point, green = focal range)\n\n/*\nmake sure that these two values are the same for your camera, otherwise distances will be wrong.\n*/\n\nuniform float znear; // camera clipping start\nuniform float zfar; // camera clipping end\n\n//------------------------------------------\n//user variables\n\nconst int samples = SAMPLES; //samples on the first ring\nconst int rings = RINGS; //ring count\n\nconst int maxringsamples = rings * samples;\n\nuniform bool manualdof; // manual dof calculation\nfloat ndofstart = 1.0; // near dof blur start\nfloat ndofdist = 2.0; // near dof blur falloff distance\nfloat fdofstart = 1.0; // far dof blur start\nfloat fdofdist = 3.0; // far dof blur falloff distance\n\nfloat CoC = 0.03; //circle of confusion size in mm (35mm film = 0.03mm)\n\nuniform bool vignetting; // use optical lens vignetting\n\nfloat vignout = 1.3; // vignetting outer border\nfloat vignin = 0.0; // vignetting inner border\nfloat vignfade = 22.0; // f-stops till vignete fades\n\nuniform bool shaderFocus;\n// disable if you use external focalDepth value\n\nuniform vec2 focusCoords;\n// autofocus point on screen (0.0,0.0 - left lower corner, 1.0,1.0 - upper right)\n// if center of screen use vec2(0.5, 0.5);\n\nuniform float maxblur;\n//clamp value of max blur (0.0 = no blur, 1.0 default)\n\nuniform float threshold; // highlight threshold;\nuniform float gain; // highlight gain;\n\nuniform float bias; // bokeh edge bias\nuniform float fringe; // bokeh chromatic aberration / fringing\n\nuniform bool noise; //use noise instead of pattern for sample dithering\n\nuniform float dithering;\n\nuniform bool depthblur; // blur the depth buffer\nfloat dbsize = 1.25; // depth blur size\n\n/*\nnext part is experimental\nnot looking good with small sample and ring count\nlooks okay starting from samples = 4, rings = 4\n*/\n\nuniform bool pentagon; //use pentagon as bokeh shape?\nfloat feather = 0.4; //pentagon shape feather\n\n//------------------------------------------\n\nfloat penta(vec2 coords) {\n  //pentagonal shape\n  float scale = float(rings) - 1.3;\n  vec4  HS0 = vec4( 1.0,         0.0,         0.0,  1.0);\n  vec4  HS1 = vec4( 0.309016994, 0.951056516, 0.0,  1.0);\n  vec4  HS2 = vec4(-0.809016994, 0.587785252, 0.0,  1.0);\n  vec4  HS3 = vec4(-0.809016994,-0.587785252, 0.0,  1.0);\n  vec4  HS4 = vec4( 0.309016994,-0.951056516, 0.0,  1.0);\n  vec4  HS5 = vec4( 0.0        ,0.0         , 1.0,  1.0);\n\n  vec4  one = vec4( 1.0 );\n\n  vec4 P = vec4((coords),vec2(scale, scale));\n\n  vec4 dist = vec4(0.0);\n  float inorout = -4.0;\n\n  dist.x = dot( P, HS0 );\n  dist.y = dot( P, HS1 );\n  dist.z = dot( P, HS2 );\n  dist.w = dot( P, HS3 );\n\n  dist = smoothstep( -feather, feather, dist );\n\n  inorout += dot( dist, one );\n\n  dist.x = dot( P, HS4 );\n  dist.y = HS5.w - abs( P.z );\n\n  dist = smoothstep( -feather, feather, dist );\n  inorout += dist.x;\n\n  return clamp( inorout, 0.0, 1.0 );\n}\n\nfloat bdepth(vec2 coords) {\n  // Depth buffer blur\n  float d = 0.0;\n  float kernel[9];\n  vec2 offset[9];\n\n  vec2 wh = vec2(1.0/textureWidth,1.0/textureHeight) * dbsize;\n\n  offset[0] = vec2(-wh.x,-wh.y);\n  offset[1] = vec2( 0.0, -wh.y);\n  offset[2] = vec2( wh.x -wh.y);\n\n  offset[3] = vec2(-wh.x,  0.0);\n  offset[4] = vec2( 0.0,   0.0);\n  offset[5] = vec2( wh.x,  0.0);\n\n  offset[6] = vec2(-wh.x, wh.y);\n  offset[7] = vec2( 0.0,  wh.y);\n  offset[8] = vec2( wh.x, wh.y);\n\n  kernel[0] = 1.0/16.0;   kernel[1] = 2.0/16.0;   kernel[2] = 1.0/16.0;\n  kernel[3] = 2.0/16.0;   kernel[4] = 4.0/16.0;   kernel[5] = 2.0/16.0;\n  kernel[6] = 1.0/16.0;   kernel[7] = 2.0/16.0;   kernel[8] = 1.0/16.0;\n\n  for( int i=0; i<9; i++ ) {\n    float tmp = texture2D(tDepth, coords + offset[i]).r;\n    d += tmp * kernel[i];\n  }\n\n  return d;\n}\n\nvec3 color(vec2 coords,float blur) {\n  //processing the sample\n\n  vec3 col = vec3(0.0);\n  vec2 texel = vec2(1.0/textureWidth,1.0/textureHeight);\n\n  col.r = texture2D(tColor,coords + vec2(0.0,1.0)*texel*fringe*blur).r;\n  col.g = texture2D(tColor,coords + vec2(-0.866,-0.5)*texel*fringe*blur).g;\n  col.b = texture2D(tColor,coords + vec2(0.866,-0.5)*texel*fringe*blur).b;\n\n  vec3 lumcoeff = vec3(0.299,0.587,0.114);\n  float lum = dot(col.rgb, lumcoeff);\n  float thresh = max((lum-threshold)*gain, 0.0);\n  return col+mix(vec3(0.0),col,thresh*blur);\n}\n\nvec3 debugFocus(vec3 col, float blur, float depth) {\n  float edge = 0.002*depth; //distance based edge smoothing\n  float m = clamp(smoothstep(0.0,edge,blur),0.0,1.0);\n  float e = clamp(smoothstep(1.0-edge,1.0,blur),0.0,1.0);\n\n  col = mix(col,vec3(1.0,0.5,0.0),(1.0-m)*0.6);\n  col = mix(col,vec3(0.0,0.5,1.0),((1.0-e)-(1.0-m))*0.2);\n\n  return col;\n}\n\nfloat linearize(float depth) {\n  return -zfar * znear / (depth * (zfar - znear) - zfar);\n}\n\nfloat vignette() {\n  float dist = distance(vUv.xy, vec2(0.5,0.5));\n  dist = smoothstep(vignout+(fstop/vignfade), vignin+(fstop/vignfade), dist);\n  return clamp(dist,0.0,1.0);\n}\n\nfloat gather(float i, float j, int ringsamples, inout vec3 col, float w, float h, float blur) {\n  float rings2 = float(rings);\n  float step = PI*2.0 / float(ringsamples);\n  float pw = cos(j*step)*i;\n  float ph = sin(j*step)*i;\n  float p = 1.0;\n  if (pentagon) {\n    p = penta(vec2(pw,ph));\n  }\n  col += color(vUv.xy + vec2(pw*w,ph*h), blur) * mix(1.0, i/rings2, bias) * p;\n  return 1.0 * mix(1.0, i /rings2, bias) * p;\n}\n\nvoid main() {\n  //scene depth calculation\n\n  float depth = linearize(texture2D(tDepth,vUv.xy).x);\n\n  // Blur depth?\n  if ( depthblur ) {\n    depth = linearize(bdepth(vUv.xy));\n  }\n\n  //focal plane calculation\n\n  float fDepth = focalDepth;\n\n  if (shaderFocus) {\n\n    fDepth = linearize(texture2D(tDepth,focusCoords).x);\n\n  }\n\n  // dof blur factor calculation\n\n  float blur = 0.0;\n\n  if (manualdof) {\n    float a = depth-fDepth; // Focal plane\n    float b = (a-fdofstart)/fdofdist; // Far DoF\n    float c = (-a-ndofstart)/ndofdist; // Near Dof\n    blur = (a>0.0) ? b : c;\n  } else {\n    float f = focalLength; // focal length in mm\n    float d = fDepth*1000.0; // focal plane in mm\n    float o = depth*1000.0; // depth in mm\n\n    float a = (o*f)/(o-f);\n    float b = (d*f)/(d-f);\n    float c = (d-f)/(d*fstop*CoC);\n\n    blur = abs(a-b)*c;\n  }\n\n  blur = clamp(blur,0.0,1.0);\n\n  // calculation of pattern for dithering\n\n  vec2 noise = vec2(rand(vUv.xy), rand( vUv.xy + vec2( 0.4, 0.6 ) ) )*dithering*blur;\n\n  // getting blur x and y step factor\n\n  float w = (1.0/textureWidth)*blur*maxblur+noise.x;\n  float h = (1.0/textureHeight)*blur*maxblur+noise.y;\n\n  // calculation of final color\n\n  vec3 col = vec3(0.0);\n\n  if(blur < 0.05) {\n    //some optimization thingy\n    col = texture2D(tColor, vUv.xy).rgb;\n  } else {\n    col = texture2D(tColor, vUv.xy).rgb;\n    float s = 1.0;\n    int ringsamples;\n\n    for (int i = 1; i <= rings; i++) {\n      /*unboxstart*/\n      ringsamples = i * samples;\n\n      for (int j = 0 ; j < maxringsamples ; j++) {\n        if (j >= ringsamples) break;\n        s += gather(float(i), float(j), ringsamples, col, w, h, blur);\n      }\n      /*unboxend*/\n    }\n\n    col /= s; //divide by sample count\n  }\n\n  if (showFocus) {\n    col = debugFocus(col, blur, depth);\n  }\n\n  if (vignetting) {\n    col *= vignette();\n  }\n\n  gl_FragColor.rgb = col;\n  gl_FragColor.a = 1.0;\n}",
      };
      class Yt extends Ht.w {
        constructor(
          e,
          t,
          {
            focalDepth: n = 1,
            focalLength: r = 35,
            fstop: o = 0.9,
            maxblur: s = 1,
            showFocus: a = 0,
            manualdof: l = 0,
            vignetting: u = 0,
            depthblur: c = 0,
            threshold: h = 0.5,
            gain: d = 2,
            bias: f = 0.5,
            fringe: m = 0.7,
            znear: p = 0.1,
            zfar: v = 100,
            noise: g = 1,
            dithering: x = 1e-4,
            pentagon: y = 0,
            shaderFocus: D = 0,
            focusCoords: b = new i.F(),
            width: _ = window.innerWidth,
            height: w = window.innerHeight,
          } = {}
        ) {
          super(),
            (this.scene = e),
            (this.camera = t),
            (this.renderTargetDepth = new Ft.d(_, w, {
              minFilter: me.wem,
              magFilter: me.wem,
            })),
            (this.renderTargetDepth.texture.name = "BokehPass.depth"),
            (this.materialDepth = new dt.l()),
            (this.materialDepth.depthPacking = me.mSO),
            (this.materialDepth.blending = me.jFi),
            void 0 === qt && console.error("BokehPass relies on BokehShader");
          const S = qt,
            E = Wt.rD.clone(S.uniforms);
          (E.tDepth.value = this.renderTargetDepth.texture),
            (E.textureWidth.value = _),
            (E.textureHeight.value = w),
            (E.focalDepth.value = n),
            (E.focalLength.value = r),
            (E.fstop.value = o),
            (E.maxblur.value = s),
            (E.showFocus.value = a),
            (E.manualdof.value = l),
            (E.vignetting.value = u),
            (E.depthblur.value = c),
            (E.threshold.value = h),
            (E.gain.value = d),
            (E.bias.value = f),
            (E.fringe.value = m),
            (E.znear.value = p),
            (E.zfar.value = v),
            (E.noise.value = g),
            (E.dithering.value = x),
            (E.pentagon.value = y),
            (E.shaderFocus.value = D),
            (E.focusCoords.value = b),
            (this.materialBokeh = new Me.j({
              defines: Object.assign({}, S.defines),
              uniforms: E,
              vertexShader: S.vertexShader,
              fragmentShader: S.fragmentShader,
            })),
            (this.uniforms = E),
            (this.needsSwap = !0),
            (this.fsQuad = new Ht.T(this.materialBokeh)),
            (this._oldClearColor = new Oe.I());
        }
        setSize(e, t) {
          (this.uniforms.textureWidth.value = e),
            (this.uniforms.textureHeight.value = t);
        }
        render(e, t, n) {
          this.scene.traverse((e) => {
            "Mesh" === e.type &&
              (void 0 !== e.customDepthMaterial
                ? ((e._material = e.material),
                  (e.material = e.customDepthMaterial))
                : ((e._material = e.material),
                  (e.material = this.materialDepth)));
          }),
            e.getClearColor(this._oldClearColor);
          const i = e.getClearAlpha(),
            r = e.autoClear;
          (e.autoClear = !1),
            e.setClearColor(0),
            e.setClearAlpha(1),
            e.setRenderTarget(this.renderTargetDepth),
            e.clear(),
            e.render(this.scene, this.camera),
            (this.uniforms.tColor.value = n.texture),
            (this.uniforms.znear.value = this.camera.near),
            (this.uniforms.zfar.value = this.camera.far),
            this.renderToScreen
              ? (e.setRenderTarget(null), this.fsQuad.render(e))
              : (e.setRenderTarget(t), e.clear(), this.fsQuad.render(e)),
            this.scene.traverse((e) => {
              "Mesh" === e.type &&
                ((e.material = e._material), (e._material = null));
            }),
            e.setClearColor(this._oldClearColor),
            e.setClearAlpha(i),
            (e.autoClear = r);
        }
      }
      var Zt = n(5484),
        $t = n(1264),
        Xt = n(7531);
      class Kt {
        constructor({
          scene: e,
          camera: t,
          scene2: n,
          camera2: r,
          renderer: o,
          texture: s,
        } = {}) {
          (this._scene = e),
            (this._camera = t),
            (this._scene2 = n),
            (this._camera2 = r),
            (this._renderer = o),
            (this._renderScene = new Gt.C(e, t)),
            (this._renderScene2 = new Gt.C(n, r)),
            (this._renderScene2.clear = !1),
            (this._renderScene2.clearDepth = !0),
            (this._bloomPass = new Zt.m(
              new i.F(window.innerWidth, window.innerHeight),
              1.5,
              0.4,
              0.85
            )),
            (this._bloomPass.threshold = Number(0.159)),
            (this._bloomPass.strength = Number(0.4)),
            (this._bloomPass.radius = Number(1)),
            (this._bokehApertureF = 1e-5),
            (this._bokehPass = new Yt(e, t, {
              focalDepth: 0.125,
              focalLength: 27,
              fstop: 2509,
              maxblur: 10,
              gain: 0,
              bias: 0,
              rings: 4,
              samples: 6,
              znear: t.near,
              zfar: t.far,
              width: u.window.w,
              height: u.window.h,
            })),
            (this._vignettePass = new Xt.T($t.E)),
            (this._vignettePass.uniforms.offset.value = 0.3),
            (this._vignettePass.uniforms.darkness.value = 4),
            (this._renderer.toneMappingExposure = Math.pow(1, 5)),
            (this._composer = new Vt.xC(o)),
            this._composer.addPass(this._renderScene),
            this._composer.addPass(this._renderScene2),
            this._composer.addPass(this._bloomPass),
            u.isDesktop && this._composer.addPass(this._bokehPass),
            this._composer.addPass(this._vignettePass);
        }
        resize(e, t) {
          this._composer.setSize(e, t);
        }
        update({ delta: e } = {}) {
          (this._renderScene2.clear = !1),
            (this._renderScene2.clearDepth = !0),
            this._composer.render({ delta: e });
        }
      }
      class Qt {
        constructor({
          width: e = 256,
          height: t = 256,
          format: n = me.wk1,
          type: i = me.ywz,
          minFilter: r = me.wem,
          magFilter: o = me.wem,
          depthBuffer: s = !0,
          generateMipmaps: a = !1,
          stencilBuffer: l = !1,
          stageID: u = "fbo-".concat(Math.random()),
          debug: c = !1,
        } = {}) {
          const h = {
            wrapS: me.uWy,
            wrapT: me.uWy,
            minFilter: r,
            magFilter: o,
            format: n,
            type: i,
            stencilBuffer: l,
            depthBuffer: s,
            generateMipmaps: a,
          };
          (this._fbo = new Ft.d(e, t, h)), c && this.debug();
        }
        setSize(e, t) {
          this._fbo.setSize(e, t);
        }
        dispose() {
          this._fbo.dispose();
        }
        get renderTarget() {
          return this._fbo;
        }
        get texture() {
          return this._fbo.texture;
        }
      }
      class Jt extends ve.T {
        constructor() {
          super(), (this.objectVisible = !0), this._setupMesh();
        }
        _setupMesh() {
          (this._mesh = new It({
            material: new Tt.F({
              uniforms: {
                t_noise: { value: null },
                u_show: { value: 0 },
                u_alpha: { value: u.window.dpr >= 2 ? 0.138 : 0.149 },
                u_bright: { value: u.window.dpr >= 2 ? 0.185 : 0.252 },
                u_scale: { value: u.window.dpr >= 2 ? 1.072 : 1.366 },
                u_time: { value: 0 },
              },
              transparent: !0,
              vertexShader:
                "precision highp float;\n#define GLSLIFY 1\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 modelViewMatrix;\n\nattribute lowp vec2 position;\nattribute lowp vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0., 1.);\n}\n",
              fragmentShader:
                "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D t_noise;\n\nuniform float u_show;\nuniform float u_bright;\nuniform float u_alpha;\nuniform float u_scale;\nuniform float u_time;\n\nvarying vec2 vUv;\n\nfloat random (vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))*\n        43758.5453123);\n}\n\nfloat pattern() {\n  float s = sin( 0.5 ), c = cos( 0.5 );\n  vec2 center = vec2(random(vUv + u_time));\n  vec2 tex = vUv * vec2(4096, 4096) * u_scale - center;\n  vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y );\n  return ( sin( point.x ) * sin( point.y ) ) * 4.0;\n}\n\nvoid main() {\n  // vec4 tNoise = texture2D(t_noise, vUv * u_scale);\n\n  // // vec3 color = vec3(0.);\n  // // float dist = distance(vec2(0.5), vUv) * 2.;\n  // // float alpha = smoothstep(u_show - 0.1, u_show + 0.1, dist);\n\n  // // gl_FragColor = vec4(color, alpha);\n\n  // vec4 black = vec4(0., 0., 0., 1.);\n  // vec4 grain = vec4(tNoise.rgb * u_bright, u_alpha);\n  // float dist = distance(vec2(0.5), vUv) * 2.;\n  // vec4 color = mix(grain, black, smoothstep(u_show - 0.1, u_show + 0.1, dist));\n\n  // gl_FragColor = vec4(color, alpha);\n\n  float dist = distance(vec2(0.5), vUv) * 2.;\n\n  vec4 black = vec4(0., 0., 0., 1.);\n  float rand = random(gl_FragCoord.xy * 0.01 * u_scale + u_time * 0.01);\n  // float distVignette = smoothstep(0.5, 0.9, dist);\n  // vec4 grain = mix(vec4(rand, rand, rand, u_alpha), vec4(0., 0., 0., 1.), distVignette);\n  // vec4 grain = vec4(rand, rand, rand, u_alpha);\n  float pat = pattern();\n  vec4 grain = vec4(pat, pat, pat, u_alpha);\n  grain.rgb *= u_bright;\n\n  vec4 color = mix(grain, black, smoothstep(u_show - 0.1, u_show + 0.1, dist));\n\n  gl_FragColor = color;\n}\n",
            }),
          })),
            (this._depthMaterial = new be.v({ opacity: 0, transparent: !0 })),
            (this._mesh.customDepthMaterial = this._depthMaterial),
            this.add(this._mesh);
        }
        show({ delay: e = 0 } = {}) {
          this.objectVisible ||
            (h.p8.killTweensOf(this._mesh.material.uniforms.u_show),
            h.p8.to(this._mesh.material.uniforms.u_show, {
              duration: 2,
              value: 0,
              ease: "Power2.easeInOut",
              delay: e,
              onComplete: () => {
                (this.objectVisible = !0), (this.visible = !0);
              },
            }));
        }
        hide({ delay: e = 0 } = {}) {
          this.objectVisible &&
            (h.p8.killTweensOf(this._mesh.material.uniforms.u_show),
            h.p8.to(this._mesh.material.uniforms.u_show, {
              duration: 2,
              value: 1,
              ease: "Power2.easeInOut",
              delay: e,
              onComplete: () => {
                this.objectVisible = !1;
              },
            }));
        }
        onAssetsLoaded() {
          (this._mesh.material.uniforms.t_noise.value =
            u.WebGL.assets.textures.grain),
            (this._mesh.material.uniforms.t_noise.value.needsUpdate = !0),
            (this._mesh.material.needsUpdate = !0);
        }
        resize() {}
        update(e) {
          this._mesh.material.uniforms.u_time.value = e;
        }
      }
      function en(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class tn {
        constructor() {
          en(this, "onResize", () => {
            this.resize();
          }),
            en(this, "onRaf", (e) => {
              (this.globalUniforms.uTime.value = e),
                this._updateCamera(),
                this._layer.update(e),
                this._cones.update(e),
                this._frontCones.update(e),
                this._composer.update({ delta: f.deltaTime });
            }),
            (this.dom = { canvas: document.getElementById("canvas") }),
            (this.textureLoader = new ae.d()),
            (this.cubeTextureLoader = new lt.c()),
            (this._m = { x: 0, y: 0 }),
            this.setup(),
            this.loadGlobalAssets(),
            this.addEvents(),
            this.particleSceneTest();
        }
        setup() {
          let e = 1;
          (e = u.isMobile ? 2 : 1),
            (this.renderer = new ut.C({
              alpha: !1,
              antialias: !1,
              canvas: this.dom.canvas,
              powerPreference: "high-performance",
              stencil: !1,
            })),
            this.renderer.setPixelRatio(e),
            this.renderer.setSize(u.window.w, u.window.h);
          const t = (2 * Math.atan(u.window.h / 2 / 2e3) * 180) / Math.PI;
          (this.camera = new ct.c(t, u.window.w / u.window.h, 1, 1e4)),
            this.camera.position.set(0, 0, 2e3),
            (this.camera.aspect = u.window.w / u.window.h),
            this.camera.updateProjectionMatrix(),
            (this.scene = new ht.x());
          (this.particleCamera = new ct.c(
            50,
            u.window.w / u.window.h,
            0.1,
            30
          )),
            this.particleCamera.position.set(0, 0, 10),
            (this.particleCamera.aspect = u.window.w / u.window.h),
            this.particleCamera.setFocalLength(35),
            this.particleCamera.updateProjectionMatrix(),
            (this.particleScene = new ht.x()),
            (this.materialDepth = new dt.l()),
            (this.materialDepth.depthPacking = me.mSO),
            (this.materialDepth.blending = me.jFi),
            u.AssetLoader.ktxLoader.detectSupport(this.renderer),
            (this._fboMain = new Qt({
              width: window.innerWidth,
              height: window.innerHeight,
            })),
            (this._composer = new Kt({
              scene: this.particleScene,
              camera: this.particleCamera,
              scene2: this.scene,
              camera2: this.camera,
              renderer: this.renderer,
              texture: this._fboMain.texture,
            })),
            (this.globalUniforms = {
              uTime: { value: 0 },
              uResolution: {
                value: new i.F(
                  u.window.w * this.renderer.getPixelRatio(),
                  u.window.h * this.renderer.getPixelRatio()
                ),
              },
            });
        }
        particleSceneTest() {
          (this._fbo = new Qt({
            width: 200,
            height: 200,
            minFilter: me.TyD,
            magFilter: me.TyD,
            depthBuffer: !1,
          })),
            (this._layer = new Jt({ texture: this._fboMain.texture })),
            this._layer.position.set(0, 0, 9.6),
            this.particleScene.add(this._layer),
            (this._cones = new Nt()),
            this.particleScene.add(this._cones),
            (this._frontCones = new Pt()),
            this._frontCones.position.set(0, 0, 0.1),
            this.particleScene.add(this._frontCones),
            this.resize();
        }
        loadGlobalAssets() {
          this.assets = { models: {}, textures: {}, cubeTextures: {} };
          const e = ft.textures.length + ft.models.length;
          let t = 0;
          for (let n = 0; n < ft.textures.length; n++) {
            const i = ft.textures[n];
            u.AssetLoader.add(
              new Promise((n) => {
                "png" === i.url.split(".").pop() ||
                "jpg" === i.url.split(".").pop()
                  ? this.textureLoader.load(i.url, (r) => {
                      this.renderer.initTexture(r),
                        (this.assets.textures["".concat(i.id)] = r),
                        t++,
                        e === t && this.onAssetsLoaded(),
                        n();
                    })
                  : "exr" === i.url.split(".").pop() &&
                    u.AssetLoader.exrLoader.load(i.url, (r, o) => {
                      this.renderer.initTexture(r),
                        (this.assets.textures["".concat(i.id)] = r),
                        t++,
                        e === t && this.onAssetsLoaded(),
                        n();
                    });
              })
            );
          }
          for (let n = 0; n < ft.models.length; n++) {
            const i = ft.models[n];
            u.AssetLoader.add(
              new Promise((n) => {
                u.AssetLoader.gltfLoader.load(i.url, (r) => {
                  (this.assets.models["".concat(i.id)] = r),
                    t++,
                    e === t && this.onAssetsLoaded(),
                    n();
                });
              })
            );
          }
        }
        addEvents() {
          c.on(f.RESIZE, this.onResize),
            c.on(f.POINTERDOWN, this.onMousedown.bind(this)),
            c.on(f.POINTERMOVE, this.onMousemove.bind(this)),
            u.RAFCollection.add(this.onRaf, 99);
        }
        resize() {
          const e = u.window.w,
            t = u.window.h;
          this.renderer.setSize(e, t),
            (this.camera.fov =
              (2 * Math.atan(u.window.h / 2 / this.camera.position.z) * 180) /
              Math.PI),
            (this.camera.aspect = e / t),
            this.camera.updateProjectionMatrix(),
            (this.particleCamera.fov = 50),
            (this.particleCamera.aspect = e / t),
            this.particleCamera.updateProjectionMatrix(),
            this.globalUniforms.uResolution.value.set(
              u.window.w * this.renderer.getPixelRatio(),
              u.window.h * this.renderer.getPixelRatio()
            ),
            this._layer.resize(),
            this._cones.resize({ camera: this.particleCamera }),
            this._composer.resize(e, t),
            this._frontCones.resize({ camera: this.particleCamera });
        }
        onMousedown(e) {
          const t = e.changedTouches ? e.targetTouches[0] : e;
          void 0 !== t &&
            void 0 !== t.clientX &&
            ((this._m.x = 2 * (t.clientX / window.innerWidth - 0.5)),
            (this._m.y = -2 * (t.clientY / window.innerHeight - 0.5)),
            this._cones.onMousedown(this._m));
        }
        onMousemove(e) {
          const t = e.changedTouches ? e.targetTouches[0] : e;
          void 0 !== t &&
            void 0 !== t.clientX &&
            ((this._m.x = 2 * (t.clientX / window.innerWidth - 0.5)),
            (this._m.y = -2 * (t.clientY / window.innerHeight - 0.5)),
            this._cones.onMousemove(this._m),
            this._frontCones.onMousemove(this._m));
        }
        onMouseleave() {
          this._cones.onMouseleave();
        }
        onAssetsLoaded() {
          (u.WebGL.assets.textures.cone_position_exr.minFilter =
            u.WebGL.assets.textures.cone_position_exr.magFilter =
              me.TyD),
            (u.WebGL.assets.textures.cone_position_exr.flipY = !0),
            (u.WebGL.assets.textures.cone_position_exr.needsUpdate = !0),
            (this._bigTriangle = new It({
              texture: u.WebGL.assets.textures.cone_position_exr,
              scene: !0,
            })),
            this.renderer.setRenderTarget(this._fbo.renderTarget),
            this.renderer.render(
              this._bigTriangle.scene,
              this._bigTriangle.camera
            ),
            this._cones.onAssetsLoaded({
              renderTarget: this._fbo.renderTarget,
            }),
            this._frontCones.onAssetsLoaded(),
            this._layer.onAssetsLoaded(),
            this.resize();
        }
        onEnterSite() {
          this._layer.hide({ delay: 0 }), this._cones.activate({ delay: 0 });
        }
        _updateCamera() {
          const e = -0.075 * this._m.x,
            t = 0.05 * this._m.y;
          (this.particleCamera.rotation.y +=
            0.1 * (e - this.particleCamera.rotation.y)),
            (this.particleCamera.rotation.x +=
              0.1 * (t - this.particleCamera.rotation.x));
        }
      }
      function nn(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class rn extends nt {
        constructor(e, t) {
          super(e),
            nn(this, "onResize", () => {
              (this.bcr = this.el.getBoundingClientRect()),
                (this.bcrTop = this.bcr.top + u.ASS.currentPos);
            }),
            nn(this, "onRaf", () => {
              u.sectionIndex === this.id &&
                (u.sectionProgress =
                  u.sectionIndex +
                  Math.abs((u.ASS.currentPos - this.bcrTop) / this.bcr.height));
            }),
            nn(this, "enter", () => {
              this.entered || (this.entered = !0),
                (u.sectionIndex = this.id),
                (u.sectionName = this.name),
                this.addEvents(),
                c.emit("section:enter");
            }),
            nn(this, "leave", () => {
              this.entered && ((this.entered = !0), this.removeEvents());
            }),
            nn(this, "destroy", () => {
              this.removeEvents();
            }),
            (this.id = t),
            (this.name = _e(this.el, "section-name")),
            (this.bcr = this.el.getBoundingClientRect()),
            this.onResize(),
            this.observe();
        }
        observe() {
          u.sectionObserver.observe(this.el),
            (this.elObj = {
              el: this.el,
              enter: this.enter,
              leave: this.leave,
              destroy: this.destroy,
              bcr: this.bcr,
            }),
            u.sectionObserver.els.push(this.elObj);
        }
        addEvents() {
          c.on(f.RAF, this.onRaf), c.on(f.RESIZE, this.onResize);
        }
        removeEvents() {
          c.off(f.RAF, this.onRaf), c.off(f.RESIZE, this.onResize);
        }
        ease(e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : e < 0.5
            ? Math.pow(2, 20 * e - 10) / 2
            : (2 - Math.pow(2, -20 * e + 10)) / 2;
        }
      }
      nn(rn, "selector", ".js-section");
      class on {
        constructor() {
          !(function (e, t, n) {
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n);
          })(this, "onResize", () => {
            for (let e = 0; e < u.sectionObserver.els.length; e++)
              u.sectionObserver.unobserve(u.sectionObserver.els[e].el),
                u.sectionObserver.els[e].destroy();
            (u.sectionObserver.els = []), this.build();
          }),
            this.build(),
            this.addEvents();
        }
        build() {
          (this.sections = W(".js-section")),
            (this.components = []),
            this.sections.forEach((e, t) => {
              this.components.push(new rn(e, t));
            }),
            Object.assign(u.components, { sections: this.components });
        }
        addEvents() {
          c.on(f.RESIZE, this.onResize);
        }
      }
      function sn(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class an extends nt {
        constructor(e) {
          super(e),
            sn(this, "previous", () => {
              if (this.allowAnimation) {
                if (u.isTouch) {
                  ye.ZP.timeline({ yoyo: !0, repeat: 1 })
                    .fromTo(
                      this.dom.prevBtnBg,
                      { scale: 1 },
                      { scale: 1.1, ease: "expo.inOut", duration: 0.6 },
                      0
                    )
                    .fromTo(
                      this.dom.prevBtnHover,
                      { scale: 0 },
                      { scale: 1.1, ease: "expo.inOut", duration: 0.6 },
                      0
                    );
                }
                (this.allowAnimation = !1),
                  this.activeIndex--,
                  this.activeIndex === -this.itemCount &&
                    ((this.activeIndex = 0),
                    this.setActiveSlide(
                      this.itemCount + this.centerIndexOffset + 1,
                      !0
                    ),
                    ye.ZP.set(this.dom.slideContainer, {
                      x:
                        this.translateBase -
                        this.translateIncriment * (this.activeIndex + 1),
                    })),
                  (this.previousTl = ye.ZP.timeline().to(
                    this.dom.slideContainer,
                    {
                      x:
                        this.translateBase -
                        this.translateIncriment * this.activeIndex,
                    }
                  )),
                  this.setActiveSlide(
                    this.activeIndex + (this.itemCount + this.centerIndexOffset)
                  );
              }
            }),
            sn(this, "next", () => {
              if (this.allowAnimation) {
                if (u.isTouch) {
                  ye.ZP.timeline({ yoyo: !0, repeat: 1 })
                    .fromTo(
                      this.dom.nextBtnBg,
                      { scale: 1 },
                      { scale: 1.1, ease: "expo.inOut", duration: 0.6 },
                      0
                    )
                    .fromTo(
                      this.dom.nextBtnHover,
                      { scale: 0 },
                      { scale: 1.1, ease: "expo.inOut", duration: 0.6 },
                      0
                    );
                }
                (this.allowAnimation = !1),
                  this.activeIndex++,
                  this.activeIndex === this.itemCount &&
                    ((this.activeIndex = 0),
                    this.setActiveSlide(
                      this.itemCount + this.centerIndexOffset - 1,
                      !0
                    ),
                    ye.ZP.set(this.dom.slideContainer, {
                      x:
                        this.translateBase -
                        this.translateIncriment * (this.activeIndex - 1),
                    })),
                  (this.previousTl = ye.ZP.timeline().to(
                    this.dom.slideContainer,
                    {
                      x:
                        this.translateBase -
                        this.translateIncriment * this.activeIndex,
                    }
                  )),
                  this.setActiveSlide(
                    this.activeIndex + (this.itemCount + this.centerIndexOffset)
                  );
              }
            }),
            sn(this, "onResize", () => {
              this.reset();
            }),
            (this.dom = {
              slideContainer: Ue(".js-slides", this.el),
              slides: W(".js-slide", this.el),
              prevBtn: Ue(".js-slider-prev"),
              prevBtnHover: Ue(".js-slider-prev-hover", this.el),
              nextBtn: Ue(".js-slider-next"),
              nextBtnHover: Ue(".js-slider-next-hover", this.el),
              contentEls: W(".js-slide-content"),
            }),
            (this.itemCount = 3),
            (this.activeIndex = 0),
            (this.allowAnimation = !0),
            (this.contentTimelines = {}),
            this.reset(),
            this.addEvents();
        }
        addEvents() {
          c.on("click", this.dom.prevBtn, this.previous),
            c.on("click", this.dom.nextBtn, this.next),
            c.on(f.RESIZE, this.onResize);
        }
        reset() {
          (this.slides = []),
            (this.content = {}),
            this.dom.contentEls.forEach((e) => {
              this.content[_e(e, "slide-id")] = e;
            }),
            this.dom.slides.forEach((e) => {
              const t = _e(e, "slide-id"),
                n = this.content[t],
                i = this.contentTimelines[t]
                  ? this.contentTimelines[t]
                  : this.buildContentTimelines(n);
              this.slides.push({
                slide: e,
                image: Ue(".js-slide-image", e),
                content: { el: n, inTl: i.inTl, outTl: i.outTl },
              });
            }),
            (this.itemBcr = this.slides[0].slide.getBoundingClientRect()),
            (this.imageBcr = this.slides[0].image.getBoundingClientRect()),
            (this.centerIndexOffset = u.mq.md.matches ? 2 : 1),
            (this.centerPositionOffset = u.mq.md.matches
              ? 0.5 * this.imageBcr.width
              : 0.18 * u.window.w),
            (this.translateIncriment = this.itemBcr.width),
            (this.translateBase = -(
              this.translateIncriment * this.itemCount +
              this.centerPositionOffset
            )),
            (this.dom.slideContainer.style.transform = "translateX(".concat(
              this.translateBase,
              "px)"
            )),
            this.setActiveSlide(this.itemCount + this.centerIndexOffset),
            (this.activeIndex = 0),
            u.isTouch
              ? (this.dom.prevBtn.classList.remove("hover-enabled"),
                this.dom.nextBtn.classList.remove("hover-enabled"))
              : (this.dom.prevBtn.classList.add("hover-enabled"),
                this.dom.nextBtn.classList.add("hover-enabled"));
        }
        setActiveSlide(e, t = !1) {
          var n, i;
          const r = this.slides[e],
            o = t ? "set" : "to";
          null === (n = this.activeContentInTl) || void 0 === n || n.kill(),
            null === (i = this.activeContentOuTl) || void 0 === i || i.kill(),
            (this.setActiveTl = ye.ZP.timeline()),
            this.activeSlide &&
              (this.setActiveTl[o](
                this.activeSlide.image,
                {
                  scale: 1,
                  filter: "grayscale(1) brightness(0.1)",
                  duration: 0.5,
                  ease: "quad.out",
                },
                0
              )[o](
                this.activeSlide.slide,
                { autoAlpha: 0.9, duration: 0.5, ease: "quad.out" },
                0
              ),
              t ||
                ((this.activeContentInTl.outTl =
                  this.activeSlide.content.outTl),
                this.activeSlide.content.outTl.progress(0),
                this.activeSlide.content.outTl.paused(!1),
                this.setActiveTl.add(this.activeSlide.content.outTl, 0))),
            (this.activeSlide = r),
            this.setActiveTl[o](
              r.slide,
              { autoAlpha: 1, duration: 0.5, ease: "quad.out" },
              0
            )
              .call(
                () => {
                  this.allowAnimation = !0;
                },
                null,
                0.5
              )
              [o](
                r.image,
                {
                  scale: 1.2,
                  filter: "grayscale(0) brightness(1)",
                  duration: 0.5,
                  ease: "quad.out",
                },
                0
              ),
            t ||
              ((this.activeContentInTl = r.content.inTl),
              r.content.inTl.progress(0),
              r.content.inTl.paused(!1),
              this.setActiveTl.add(r.content.inTl, 0.2));
        }
        buildContentTimelines(e) {
          const t = Ue(".js-role", e),
            n = Ue(".js-name", e),
            i = W(".js-social-icon", e),
            r = ye.ZP.timeline({ immediateRender: !0, paused: !0 })
              .splitCharsWipeUpIn(t, { duration: 0.7 }, 0)
              .splitCharsWipeUpIn(n, { duration: 0.7 }, 0.5),
            o = [];
          r.getChildren().forEach((e) => {
            o.push(e.targets());
          }),
            r
              .set(e.parentElement, { pointerEvents: "auto" }, 0)
              .to(
                i,
                { scale: 1, duration: 0.7, stagger: 0.2, ease: "expo.out" },
                1
              );
          const s = {
            inTl: r,
            outTl: ye.ZP.timeline({ immediateRender: !0, paused: !0 })
              .set(e.parentElement, { pointerEvents: "none" })
              .to(o, { y: "-110%", ease: "expo.out", duration: 0.7 }, 0)
              .to(
                i,
                { scale: 0, stagger: 0.1, duration: 0.7, ease: "expo.out" },
                0
              ),
          };
          return (this.contentTimelines[_e(e, "slide-id")] = s), s;
        }
      }
      function ln(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      sn(an, "selector", ".js-slider");
      class un {
        constructor() {
          ln(this, "onCriticalAnimationEnd", () => {
            (this.criticalAnimationEnded = !0),
              100 === this.currentProgress
                ? this.expeditedOutTl.play()
                : ((this.dom.progress.style.visibility = "visible"),
                  (this.dom.progress.style.opacity = 1),
                  (this.counterIsVisible = !0));
          }),
            ln(this, "onAssetsProgress", ({ percent: e }) => {
              this.currentProgress = e;
              let t = 0;
              this.slowProgressInterval &&
                clearInterval(this.slowProgressInterval),
                (this.slowProgressInterval = setInterval(() => {
                  t >= 3 || 100 === this.currentProgress
                    ? clearInterval(this.slowProgressInterval)
                    : ((this.currentProgress += 1),
                      this.updateProgressCounter(),
                      t++);
                }, 250)),
                100 === this.currentProgress &&
                  this.criticalAnimationEnded &&
                  (clearInterval(this.slowProgressInterval),
                  this.standardOutTl.play()),
                this.counterIsVisible && this.updateProgressCounter();
            }),
            ln(
              this,
              "enterSite",
              () => (
                (this.revealed = new Promise((e) => {
                  this.revealedResolve = e;
                })),
                (this.skip || "/" !== window.location.pathname) &&
                  this.revealedResolve(),
                this.revealed
              )
            );
          const e = document.querySelector(".js-site-loader");
          (this.dom = {
            el: e,
            spinner: Ue(".js-site-loader-spinner", e),
            spinnerSVG: Ue(".js-site-loader-spinner-svg", e),
            progress: Ue(".js-site-loader-progress", e),
            progressDigits: W(".js-site-loader-progress-digit", e),
            loadingText: Ue(".js-site-loader-loading-text", e),
            completedText: Ue(".js-site-loader-completed-text span", e),
            heading: W(".js-site-loader-heading-text", e),
            ellipsis: W(".js-site-loader-ellipses-wrapper", e),
            text: W(".js-site-loader-text span", e),
          }),
            (this.skip = new URLSearchParams(window.location.search).has(
              "skiploader"
            )),
            this.skip || "/" !== window.location.pathname
              ? h.ZP.set(this.dom.el, { autoAlpha: 0, pointerEvents: "none" })
              : this.build(),
            (this.currentProgress = 0);
        }
        build() {
          this.buildTimelines(), this.addEvents();
        }
        addEvents() {
          c.on("AssetsProgress", this.onAssetsProgress),
            "matrix(1, 0, 0, 1, 0, 0)" ===
            getComputedStyle(this.dom.loadingText).getPropertyValue("transform")
              ? this.onCriticalAnimationEnd()
              : this.dom.heading[0].addEventListener(
                  "animationend",
                  this.onCriticalAnimationEnd
                );
        }
        updateProgressCounter() {
          const e = Array.from(this.currentProgress.toString())
            .map(Number)
            .reverse();
          (this.dom.progressDigits[2].textContent = e[0]),
            (this.dom.progressDigits[1].textContent = e[1]),
            (this.dom.progressDigits[0].textContent = e[2]);
        }
        buildTimelines() {
          (this.expeditedOutTl = h.ZP.timeline({
            paused: !0,
            immediateRender: !0,
            delay: 0.5,
            onStart: () => {
              this.dom.heading[0].removeEventListener(
                "animationend",
                this.onCriticalAnimationEnd
              ),
                c.off("AssetsProgress", this.onAssetsProgress),
                this.dom.el.classList.add("loaded");
            },
            onComplete: () => {
              this.expeditedOutTl.kill(), this.standardOutTl.kill();
            },
          })
            .to(
              this.dom.loadingText,
              { yPercent: -110, rotate: 5, ease: "expo.out", duration: 2 },
              0
            )
            .set(this.dom.ellipsis, { autoAlpha: 0 }, 0)
            .to(
              this.dom.heading,
              {
                yPercent: -120,
                rotate: 2,
                ease: "expo.out",
                duration: 2,
                stagger: 0.1,
              },
              0
            )
            .set(
              this.dom.spinnerSVG,
              {
                transform: "scale(1)",
                animationName: "scaleDown",
                animationFillMode: "forwards",
                animationDirection: "normal",
                animationDuration: "0.4s",
                animationDelay: "0",
              },
              0
            )
            .to(
              this.dom.completedText,
              { y: 0, rotate: 0, duration: 0.5, ease: "power1.out" },
              0
            )
            .to(this.dom.el, { autoAlpha: 0, ease: "none", duration: 0.5 }, 0.5)
            .call(
              () => {
                this.revealedResolve(), c.emit("siteloader:hide");
              },
              null,
              "<"
            )),
            (this.standardOutTl = h.ZP.timeline({
              paused: !0,
              immediateRender: !0,
              onStart: () => {
                this.dom.heading[0].removeEventListener(
                  "animationend",
                  this.onCriticalAnimationEnd
                ),
                  c.off("AssetsProgress", this.onAssetsProgress),
                  this.dom.el.classList.add("loaded");
              },
              onComplete: () => {
                this.expeditedOutTl.kill(), this.standardOutTl.kill();
              },
            })
              .to(
                this.dom.loadingText,
                { yPercent: -110, rotate: 5, ease: "expo.out", duration: 2 },
                0
              )
              .set(this.dom.ellipsis, { autoAlpha: 0 }, 0)
              .to(
                this.dom.heading,
                {
                  yPercent: -120,
                  rotate: 2,
                  ease: "expo.out",
                  duration: 2,
                  stagger: 0.15,
                },
                0
              )
              .set(
                this.dom.spinnerSVG,
                {
                  transform: "scale(1)",
                  animationName: "scaleDown",
                  animationFillMode: "forwards",
                  animationDirection: "normal",
                  animationDuration: "0.4s",
                  animationDelay: "0",
                },
                0
              )
              .to(
                this.dom.progress,
                { autoAlpha: 0, duration: 0.5, ease: "power1.out" },
                0.2
              )
              .to(
                this.dom.completedText,
                { y: 0, rotate: 0, duration: 0.5, ease: "power1.out" },
                0.2
              )
              .to(this.dom.el, { autoAlpha: 0, ease: "none", duration: 0.5 }, 1)
              .call(
                () => {
                  this.revealedResolve(), c.emit("siteloader:hide");
                },
                null,
                "<"
              ));
        }
      }
      function cn(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class hn extends nt {
        constructor(e) {
          super(e),
            cn(this, "hostname", null),
            cn(this, "includeSubDomains", !1),
            cn(this, "toggleBtn", null),
            cn(this, "onClick", () => {
              const e = new Date();
              e.setMonth(e.getMonth() + 1);
              let t = "cookie_notice_accepted=true;expires=".concat(
                e.toUTCString(),
                ";path=/"
              );
              !0 === this.includeSubDomains &&
                (t += ";domain=".concat(this.hostname)),
                (document.cookie = t),
                this.updateStore(),
                this.hide();
            }),
            null === this.hostname &&
              (this.hostname = window.location.hostname),
            (this.toggleBtn = Ue(".js-cookie-notice-toggle", this.el)),
            this.updateStore(),
            !1 === u.cookieNoticeAccepted
              ? (c.on("click", this.toggleBtn, this.onClick), this.show())
              : this.hide();
        }
        hide() {
          this.el.classList.remove("is-open"), (this.el.style.display = "none");
        }
        show() {
          this.el.classList.add("is-open"), this.el.classList.remove("d-none");
        }
        updateStore() {
          (u.cookieNoticeAccepted = document.cookie
            .split(";")
            .some((e) => e.includes("cookie_notice_accepted=true"))),
            !0 === u.cookieNoticeAccepted && c.emit("cookienotice:accepted");
        }
      }
      cn(hn, "selector", ".js-cookie-notice"),
        (history.scrollRestoration = "manual"),
        u.enableLogs || ((console.warn = () => {}), (console.error = () => {})),
        c.on("DOMContentLoaded", window, function () {
          f.detectTouchDevice(),
            f.enableMousemove(),
            f.enableRAF(!0),
            f.enableResize(),
            f.enableDrag(),
            u.html.style.setProperty(
              "--vh",
              "".concat(0.01 * u.window.h, "px")
            ),
            (u.RAFCollection = new m()),
            (u.ASS = x
              .config({
                scrollbarStyles: !1,
                disableRaf: !0,
                touchScrollType: "scrollTop",
              })
              .withScrollTrigger(y.Z, h.ZP)
              .create()),
            u.RAFCollection.add(u.ASS.update, 0),
            (u.ScrollAnimations = new ne()),
            (u.AssetLoader = new ue()),
            (u.WebGL = new tn()),
            u.mq.sm.matches &&
              ((u.Dom2WebglObserver = new he(
                { rootMargin: "0% 0% 0% 0%" },
                "dom2webgl",
                !0
              )),
              (u.Dom2Webgl = new qe())),
            (u.sectionObserver = new he(
              { rootMargin: "0% 0% -99.999% 0%" },
              !1,
              !1
            )),
            (u.SiteLoader = new un()),
            (u.components = Object.assign(u.components, {
              examples: new $e(it).init(),
              headers: new $e(ot).init(),
              sliders: new $e(an).init(),
              navigations: new $e(at).init(),
              cookieNotice: new $e(hn).init(),
            })),
            (u.sectionManager = new on()),
            u.AssetLoader.load().then(() => {
              u.mq.sm.matches && u.Dom2Webgl.enable(),
                u.ScrollAnimations.build(),
                u.SiteLoader.enterSite().then(() => {
                  u.ScrollAnimations.enable(),
                    u.ASS.enable(),
                    (u.ASS.controller.ease = 0.075),
                    u.WebGL.onEnterSite(),
                    setTimeout(() => {
                      !(function () {
                        const e = window,
                          t = e.Intercom;
                        if ("function" == typeof t)
                          t("reattach_activator"),
                            t("update", e.intercomSettings);
                        else {
                          const t = document;
                          var n = function () {
                            n.c(arguments);
                          };
                          (n.q = []),
                            (n.c = function (e) {
                              n.q.push(e);
                            }),
                            (e.Intercom = n);
                          const i = function () {
                            const e = t.createElement("script");
                            (e.type = "text/javascript"),
                              (e.async = !0),
                              (e.src =
                                "https://widget.intercom.io/widget/ee6u4z7r");
                            const n = t.getElementsByTagName("script")[0];
                            n.parentNode.insertBefore(e, n);
                          };
                          "complete" === document.readyState
                            ? i()
                            : e.attachEvent
                            ? e.attachEvent("onload", i)
                            : e.addEventListener("load", i, !1);
                        }
                      })(),
                        window.Intercom("boot", { app_id: "ee6u4z7r" });
                    }, 1200),
                    document
                      .querySelectorAll('img[loading="lazy"]')
                      .forEach((e) => e.removeAttribute("loading"));
                });
            }),
            u.mq.sm.matches && u.Dom2Webgl.build(),
            et.init();
        });
    },
    3099: function (e) {
      e.exports = function (e) {
        if ("function" != typeof e)
          throw TypeError(String(e) + " is not a function");
        return e;
      };
    },
    6077: function (e, t, n) {
      var i = n(111);
      e.exports = function (e) {
        if (!i(e) && null !== e)
          throw TypeError("Can't set " + String(e) + " as a prototype");
        return e;
      };
    },
    1223: function (e, t, n) {
      var i = n(5112),
        r = n(30),
        o = n(3070),
        s = i("unscopables"),
        a = Array.prototype;
      null == a[s] && o.f(a, s, { configurable: !0, value: r(null) }),
        (e.exports = function (e) {
          a[s][e] = !0;
        });
    },
    1530: function (e, t, n) {
      "use strict";
      var i = n(8710).charAt;
      e.exports = function (e, t, n) {
        return t + (n ? i(e, t).length : 1);
      };
    },
    5787: function (e) {
      e.exports = function (e, t, n) {
        if (!(e instanceof t))
          throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e;
      };
    },
    9670: function (e, t, n) {
      var i = n(111);
      e.exports = function (e) {
        if (!i(e)) throw TypeError(String(e) + " is not an object");
        return e;
      };
    },
    4019: function (e) {
      e.exports =
        "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
    },
    260: function (e, t, n) {
      "use strict";
      var i,
        r,
        o,
        s = n(4019),
        a = n(9781),
        l = n(7854),
        u = n(111),
        c = n(6656),
        h = n(648),
        d = n(8880),
        f = n(1320),
        m = n(3070).f,
        p = n(9518),
        v = n(7674),
        g = n(5112),
        x = n(9711),
        y = l.Int8Array,
        D = y && y.prototype,
        b = l.Uint8ClampedArray,
        _ = b && b.prototype,
        w = y && p(y),
        S = D && p(D),
        E = Object.prototype,
        P = E.isPrototypeOf,
        C = g("toStringTag"),
        T = x("TYPED_ARRAY_TAG"),
        F = x("TYPED_ARRAY_CONSTRUCTOR"),
        A = s && !!v && "Opera" !== h(l.opera),
        M = !1,
        O = {
          Int8Array: 1,
          Uint8Array: 1,
          Uint8ClampedArray: 1,
          Int16Array: 2,
          Uint16Array: 2,
          Int32Array: 4,
          Uint32Array: 4,
          Float32Array: 4,
          Float64Array: 8,
        },
        L = { BigInt64Array: 8, BigUint64Array: 8 },
        I = function (e) {
          if (!u(e)) return !1;
          var t = h(e);
          return c(O, t) || c(L, t);
        };
      for (i in O) (o = (r = l[i]) && r.prototype) ? d(o, F, r) : (A = !1);
      for (i in L) (o = (r = l[i]) && r.prototype) && d(o, F, r);
      if (
        (!A || "function" != typeof w || w === Function.prototype) &&
        ((w = function () {
          throw TypeError("Incorrect invocation");
        }),
        A)
      )
        for (i in O) l[i] && v(l[i], w);
      if ((!A || !S || S === E) && ((S = w.prototype), A))
        for (i in O) l[i] && v(l[i].prototype, S);
      if ((A && p(_) !== S && v(_, S), a && !c(S, C)))
        for (i in ((M = !0),
        m(S, C, {
          get: function () {
            return u(this) ? this[T] : void 0;
          },
        }),
        O))
          l[i] && d(l[i], T, i);
      e.exports = {
        NATIVE_ARRAY_BUFFER_VIEWS: A,
        TYPED_ARRAY_CONSTRUCTOR: F,
        TYPED_ARRAY_TAG: M && T,
        aTypedArray: function (e) {
          if (I(e)) return e;
          throw TypeError("Target is not a typed array");
        },
        aTypedArrayConstructor: function (e) {
          if (v && !P.call(w, e))
            throw TypeError("Target is not a typed array constructor");
          return e;
        },
        exportTypedArrayMethod: function (e, t, n) {
          if (a) {
            if (n)
              for (var i in O) {
                var r = l[i];
                if (r && c(r.prototype, e))
                  try {
                    delete r.prototype[e];
                  } catch (e) {}
              }
            (S[e] && !n) || f(S, e, n ? t : (A && D[e]) || t);
          }
        },
        exportTypedArrayStaticMethod: function (e, t, n) {
          var i, r;
          if (a) {
            if (v) {
              if (n)
                for (i in O)
                  if ((r = l[i]) && c(r, e))
                    try {
                      delete r[e];
                    } catch (e) {}
              if (w[e] && !n) return;
              try {
                return f(w, e, n ? t : (A && w[e]) || t);
              } catch (e) {}
            }
            for (i in O) !(r = l[i]) || (r[e] && !n) || f(r, e, t);
          }
        },
        isView: function (e) {
          if (!u(e)) return !1;
          var t = h(e);
          return "DataView" === t || c(O, t) || c(L, t);
        },
        isTypedArray: I,
        TypedArray: w,
        TypedArrayPrototype: S,
      };
    },
    3331: function (e, t, n) {
      "use strict";
      var i = n(7854),
        r = n(9781),
        o = n(4019),
        s = n(8880),
        a = n(2248),
        l = n(7293),
        u = n(5787),
        c = n(9958),
        h = n(7466),
        d = n(7067),
        f = n(1179),
        m = n(9518),
        p = n(7674),
        v = n(8006).f,
        g = n(3070).f,
        x = n(1285),
        y = n(8003),
        D = n(9909),
        b = D.get,
        _ = D.set,
        w = "ArrayBuffer",
        S = "DataView",
        E = "Wrong index",
        P = i.ArrayBuffer,
        C = P,
        T = i.DataView,
        F = T && T.prototype,
        A = Object.prototype,
        M = i.RangeError,
        O = f.pack,
        L = f.unpack,
        I = function (e) {
          return [255 & e];
        },
        R = function (e) {
          return [255 & e, (e >> 8) & 255];
        },
        k = function (e) {
          return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
        },
        z = function (e) {
          return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
        },
        U = function (e) {
          return O(e, 23, 4);
        },
        j = function (e) {
          return O(e, 52, 8);
        },
        B = function (e, t) {
          g(e.prototype, t, {
            get: function () {
              return b(this)[t];
            },
          });
        },
        N = function (e, t, n, i) {
          var r = d(n),
            o = b(e);
          if (r + t > o.byteLength) throw M(E);
          var s = b(o.buffer).bytes,
            a = r + o.byteOffset,
            l = s.slice(a, a + t);
          return i ? l : l.reverse();
        },
        V = function (e, t, n, i, r, o) {
          var s = d(n),
            a = b(e);
          if (s + t > a.byteLength) throw M(E);
          for (
            var l = b(a.buffer).bytes, u = s + a.byteOffset, c = i(+r), h = 0;
            h < t;
            h++
          )
            l[u + h] = c[o ? h : t - h - 1];
        };
      if (o) {
        if (
          !l(function () {
            P(1);
          }) ||
          !l(function () {
            new P(-1);
          }) ||
          l(function () {
            return new P(), new P(1.5), new P(NaN), P.name != w;
          })
        ) {
          for (
            var G,
              W = ((C = function (e) {
                return u(this, C), new P(d(e));
              }).prototype = P.prototype),
              H = v(P),
              q = 0;
            H.length > q;

          )
            (G = H[q++]) in C || s(C, G, P[G]);
          W.constructor = C;
        }
        p && m(F) !== A && p(F, A);
        var Y = new T(new C(2)),
          Z = F.setInt8;
        Y.setInt8(0, 2147483648),
          Y.setInt8(1, 2147483649),
          (!Y.getInt8(0) && Y.getInt8(1)) ||
            a(
              F,
              {
                setInt8: function (e, t) {
                  Z.call(this, e, (t << 24) >> 24);
                },
                setUint8: function (e, t) {
                  Z.call(this, e, (t << 24) >> 24);
                },
              },
              { unsafe: !0 }
            );
      } else
        (C = function (e) {
          u(this, C, w);
          var t = d(e);
          _(this, { bytes: x.call(new Array(t), 0), byteLength: t }),
            r || (this.byteLength = t);
        }),
          (T = function (e, t, n) {
            u(this, T, S), u(e, C, S);
            var i = b(e).byteLength,
              o = c(t);
            if (o < 0 || o > i) throw M("Wrong offset");
            if (o + (n = void 0 === n ? i - o : h(n)) > i)
              throw M("Wrong length");
            _(this, { buffer: e, byteLength: n, byteOffset: o }),
              r ||
                ((this.buffer = e),
                (this.byteLength = n),
                (this.byteOffset = o));
          }),
          r &&
            (B(C, "byteLength"),
            B(T, "buffer"),
            B(T, "byteLength"),
            B(T, "byteOffset")),
          a(T.prototype, {
            getInt8: function (e) {
              return (N(this, 1, e)[0] << 24) >> 24;
            },
            getUint8: function (e) {
              return N(this, 1, e)[0];
            },
            getInt16: function (e) {
              var t = N(
                this,
                2,
                e,
                arguments.length > 1 ? arguments[1] : void 0
              );
              return (((t[1] << 8) | t[0]) << 16) >> 16;
            },
            getUint16: function (e) {
              var t = N(
                this,
                2,
                e,
                arguments.length > 1 ? arguments[1] : void 0
              );
              return (t[1] << 8) | t[0];
            },
            getInt32: function (e) {
              return z(
                N(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)
              );
            },
            getUint32: function (e) {
              return (
                z(
                  N(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)
                ) >>> 0
              );
            },
            getFloat32: function (e) {
              return L(
                N(this, 4, e, arguments.length > 1 ? arguments[1] : void 0),
                23
              );
            },
            getFloat64: function (e) {
              return L(
                N(this, 8, e, arguments.length > 1 ? arguments[1] : void 0),
                52
              );
            },
            setInt8: function (e, t) {
              V(this, 1, e, I, t);
            },
            setUint8: function (e, t) {
              V(this, 1, e, I, t);
            },
            setInt16: function (e, t) {
              V(this, 2, e, R, t, arguments.length > 2 ? arguments[2] : void 0);
            },
            setUint16: function (e, t) {
              V(this, 2, e, R, t, arguments.length > 2 ? arguments[2] : void 0);
            },
            setInt32: function (e, t) {
              V(this, 4, e, k, t, arguments.length > 2 ? arguments[2] : void 0);
            },
            setUint32: function (e, t) {
              V(this, 4, e, k, t, arguments.length > 2 ? arguments[2] : void 0);
            },
            setFloat32: function (e, t) {
              V(this, 4, e, U, t, arguments.length > 2 ? arguments[2] : void 0);
            },
            setFloat64: function (e, t) {
              V(this, 8, e, j, t, arguments.length > 2 ? arguments[2] : void 0);
            },
          });
      y(C, w), y(T, S), (e.exports = { ArrayBuffer: C, DataView: T });
    },
    1285: function (e, t, n) {
      "use strict";
      var i = n(7908),
        r = n(1400),
        o = n(7466);
      e.exports = function (e) {
        for (
          var t = i(this),
            n = o(t.length),
            s = arguments.length,
            a = r(s > 1 ? arguments[1] : void 0, n),
            l = s > 2 ? arguments[2] : void 0,
            u = void 0 === l ? n : r(l, n);
          u > a;

        )
          t[a++] = e;
        return t;
      };
    },
    8457: function (e, t, n) {
      "use strict";
      var i = n(9974),
        r = n(7908),
        o = n(3411),
        s = n(7659),
        a = n(7466),
        l = n(6135),
        u = n(8554),
        c = n(1246);
      e.exports = function (e) {
        var t,
          n,
          h,
          d,
          f,
          m,
          p = r(e),
          v = "function" == typeof this ? this : Array,
          g = arguments.length,
          x = g > 1 ? arguments[1] : void 0,
          y = void 0 !== x,
          D = c(p),
          b = 0;
        if (
          (y && (x = i(x, g > 2 ? arguments[2] : void 0, 2)),
          null == D || (v == Array && s(D)))
        )
          for (n = new v((t = a(p.length))); t > b; b++)
            (m = y ? x(p[b], b) : p[b]), l(n, b, m);
        else
          for (f = (d = u(p, D)).next, n = new v(); !(h = f.call(d)).done; b++)
            (m = y ? o(d, x, [h.value, b], !0) : h.value), l(n, b, m);
        return (n.length = b), n;
      };
    },
    1318: function (e, t, n) {
      var i = n(5656),
        r = n(7466),
        o = n(1400),
        s = function (e) {
          return function (t, n, s) {
            var a,
              l = i(t),
              u = r(l.length),
              c = o(s, u);
            if (e && n != n) {
              for (; u > c; ) if ((a = l[c++]) != a) return !0;
            } else
              for (; u > c; c++)
                if ((e || c in l) && l[c] === n) return e || c || 0;
            return !e && -1;
          };
        };
      e.exports = { includes: s(!0), indexOf: s(!1) };
    },
    2092: function (e, t, n) {
      var i = n(9974),
        r = n(8361),
        o = n(7908),
        s = n(7466),
        a = n(5417),
        l = [].push,
        u = function (e) {
          var t = 1 == e,
            n = 2 == e,
            u = 3 == e,
            c = 4 == e,
            h = 6 == e,
            d = 7 == e,
            f = 5 == e || h;
          return function (m, p, v, g) {
            for (
              var x,
                y,
                D = o(m),
                b = r(D),
                _ = i(p, v, 3),
                w = s(b.length),
                S = 0,
                E = g || a,
                P = t ? E(m, w) : n || d ? E(m, 0) : void 0;
              w > S;
              S++
            )
              if ((f || S in b) && ((y = _((x = b[S]), S, D)), e))
                if (t) P[S] = y;
                else if (y)
                  switch (e) {
                    case 3:
                      return !0;
                    case 5:
                      return x;
                    case 6:
                      return S;
                    case 2:
                      l.call(P, x);
                  }
                else
                  switch (e) {
                    case 4:
                      return !1;
                    case 7:
                      l.call(P, x);
                  }
            return h ? -1 : u || c ? c : P;
          };
        };
      e.exports = {
        forEach: u(0),
        map: u(1),
        filter: u(2),
        some: u(3),
        every: u(4),
        find: u(5),
        findIndex: u(6),
        filterReject: u(7),
      };
    },
    4362: function (e) {
      var t = Math.floor,
        n = function (e, o) {
          var s = e.length,
            a = t(s / 2);
          return s < 8 ? i(e, o) : r(n(e.slice(0, a), o), n(e.slice(a), o), o);
        },
        i = function (e, t) {
          for (var n, i, r = e.length, o = 1; o < r; ) {
            for (i = o, n = e[o]; i && t(e[i - 1], n) > 0; ) e[i] = e[--i];
            i !== o++ && (e[i] = n);
          }
          return e;
        },
        r = function (e, t, n) {
          for (
            var i = e.length, r = t.length, o = 0, s = 0, a = [];
            o < i || s < r;

          )
            o < i && s < r
              ? a.push(n(e[o], t[s]) <= 0 ? e[o++] : t[s++])
              : a.push(o < i ? e[o++] : t[s++]);
          return a;
        };
      e.exports = n;
    },
    7475: function (e, t, n) {
      var i = n(111),
        r = n(3157),
        o = n(5112)("species");
      e.exports = function (e) {
        var t;
        return (
          r(e) &&
            ("function" != typeof (t = e.constructor) ||
            (t !== Array && !r(t.prototype))
              ? i(t) && null === (t = t[o]) && (t = void 0)
              : (t = void 0)),
          void 0 === t ? Array : t
        );
      };
    },
    5417: function (e, t, n) {
      var i = n(7475);
      e.exports = function (e, t) {
        return new (i(e))(0 === t ? 0 : t);
      };
    },
    3411: function (e, t, n) {
      var i = n(9670),
        r = n(9212);
      e.exports = function (e, t, n, o) {
        try {
          return o ? t(i(n)[0], n[1]) : t(n);
        } catch (t) {
          r(e, "throw", t);
        }
      };
    },
    7072: function (e, t, n) {
      var i = n(5112)("iterator"),
        r = !1;
      try {
        var o = 0,
          s = {
            next: function () {
              return { done: !!o++ };
            },
            return: function () {
              r = !0;
            },
          };
        (s[i] = function () {
          return this;
        }),
          Array.from(s, function () {
            throw 2;
          });
      } catch (e) {}
      e.exports = function (e, t) {
        if (!t && !r) return !1;
        var n = !1;
        try {
          var o = {};
          (o[i] = function () {
            return {
              next: function () {
                return { done: (n = !0) };
              },
            };
          }),
            e(o);
        } catch (e) {}
        return n;
      };
    },
    4326: function (e) {
      var t = {}.toString;
      e.exports = function (e) {
        return t.call(e).slice(8, -1);
      };
    },
    648: function (e, t, n) {
      var i = n(1694),
        r = n(4326),
        o = n(5112)("toStringTag"),
        s =
          "Arguments" ==
          r(
            (function () {
              return arguments;
            })()
          );
      e.exports = i
        ? r
        : function (e) {
            var t, n, i;
            return void 0 === e
              ? "Undefined"
              : null === e
              ? "Null"
              : "string" ==
                typeof (n = (function (e, t) {
                  try {
                    return e[t];
                  } catch (e) {}
                })((t = Object(e)), o))
              ? n
              : s
              ? r(t)
              : "Object" == (i = r(t)) && "function" == typeof t.callee
              ? "Arguments"
              : i;
          };
    },
    9920: function (e, t, n) {
      var i = n(6656),
        r = n(3887),
        o = n(1236),
        s = n(3070);
      e.exports = function (e, t) {
        for (var n = r(t), a = s.f, l = o.f, u = 0; u < n.length; u++) {
          var c = n[u];
          i(e, c) || a(e, c, l(t, c));
        }
      };
    },
    8544: function (e, t, n) {
      var i = n(7293);
      e.exports = !i(function () {
        function e() {}
        return (
          (e.prototype.constructor = null),
          Object.getPrototypeOf(new e()) !== e.prototype
        );
      });
    },
    4994: function (e, t, n) {
      "use strict";
      var i = n(3383).IteratorPrototype,
        r = n(30),
        o = n(9114),
        s = n(8003),
        a = n(7497),
        l = function () {
          return this;
        };
      e.exports = function (e, t, n) {
        var u = t + " Iterator";
        return (
          (e.prototype = r(i, { next: o(1, n) })),
          s(e, u, !1, !0),
          (a[u] = l),
          e
        );
      };
    },
    8880: function (e, t, n) {
      var i = n(9781),
        r = n(3070),
        o = n(9114);
      e.exports = i
        ? function (e, t, n) {
            return r.f(e, t, o(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          };
    },
    9114: function (e) {
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        };
      };
    },
    6135: function (e, t, n) {
      "use strict";
      var i = n(4948),
        r = n(3070),
        o = n(9114);
      e.exports = function (e, t, n) {
        var s = i(t);
        s in e ? r.f(e, s, o(0, n)) : (e[s] = n);
      };
    },
    654: function (e, t, n) {
      "use strict";
      var i = n(2109),
        r = n(4994),
        o = n(9518),
        s = n(7674),
        a = n(8003),
        l = n(8880),
        u = n(1320),
        c = n(5112),
        h = n(1913),
        d = n(7497),
        f = n(3383),
        m = f.IteratorPrototype,
        p = f.BUGGY_SAFARI_ITERATORS,
        v = c("iterator"),
        g = "keys",
        x = "values",
        y = "entries",
        D = function () {
          return this;
        };
      e.exports = function (e, t, n, c, f, b, _) {
        r(n, t, c);
        var w,
          S,
          E,
          P = function (e) {
            if (e === f && M) return M;
            if (!p && e in F) return F[e];
            switch (e) {
              case g:
              case x:
              case y:
                return function () {
                  return new n(this, e);
                };
            }
            return function () {
              return new n(this);
            };
          },
          C = t + " Iterator",
          T = !1,
          F = e.prototype,
          A = F[v] || F["@@iterator"] || (f && F[f]),
          M = (!p && A) || P(f),
          O = ("Array" == t && F.entries) || A;
        if (
          (O &&
            ((w = o(O.call(new e()))),
            m !== Object.prototype &&
              w.next &&
              (h ||
                o(w) === m ||
                (s ? s(w, m) : "function" != typeof w[v] && l(w, v, D)),
              a(w, C, !0, !0),
              h && (d[C] = D))),
          f == x &&
            A &&
            A.name !== x &&
            ((T = !0),
            (M = function () {
              return A.call(this);
            })),
          (h && !_) || F[v] === M || l(F, v, M),
          (d[t] = M),
          f)
        )
          if (((S = { values: P(x), keys: b ? M : P(g), entries: P(y) }), _))
            for (E in S) (p || T || !(E in F)) && u(F, E, S[E]);
          else i({ target: t, proto: !0, forced: p || T }, S);
        return S;
      };
    },
    9781: function (e, t, n) {
      var i = n(7293);
      e.exports = !i(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    317: function (e, t, n) {
      var i = n(7854),
        r = n(111),
        o = i.document,
        s = r(o) && r(o.createElement);
      e.exports = function (e) {
        return s ? o.createElement(e) : {};
      };
    },
    8324: function (e) {
      e.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    8886: function (e, t, n) {
      var i = n(8113).match(/firefox\/(\d+)/i);
      e.exports = !!i && +i[1];
    },
    256: function (e, t, n) {
      var i = n(8113);
      e.exports = /MSIE|Trident/.test(i);
    },
    8113: function (e, t, n) {
      var i = n(5005);
      e.exports = i("navigator", "userAgent") || "";
    },
    7392: function (e, t, n) {
      var i,
        r,
        o = n(7854),
        s = n(8113),
        a = o.process,
        l = o.Deno,
        u = (a && a.versions) || (l && l.version),
        c = u && u.v8;
      c
        ? (r = (i = c.split("."))[0] < 4 ? 1 : i[0] + i[1])
        : s &&
          (!(i = s.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
          (i = s.match(/Chrome\/(\d+)/)) &&
          (r = i[1]),
        (e.exports = r && +r);
    },
    8008: function (e, t, n) {
      var i = n(8113).match(/AppleWebKit\/(\d+)\./);
      e.exports = !!i && +i[1];
    },
    748: function (e) {
      e.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    2109: function (e, t, n) {
      var i = n(7854),
        r = n(1236).f,
        o = n(8880),
        s = n(1320),
        a = n(3505),
        l = n(9920),
        u = n(4705);
      e.exports = function (e, t) {
        var n,
          c,
          h,
          d,
          f,
          m = e.target,
          p = e.global,
          v = e.stat;
        if ((n = p ? i : v ? i[m] || a(m, {}) : (i[m] || {}).prototype))
          for (c in t) {
            if (
              ((d = t[c]),
              (h = e.noTargetGet ? (f = r(n, c)) && f.value : n[c]),
              !u(p ? c : m + (v ? "." : "#") + c, e.forced) && void 0 !== h)
            ) {
              if (typeof d == typeof h) continue;
              l(d, h);
            }
            (e.sham || (h && h.sham)) && o(d, "sham", !0), s(n, c, d, e);
          }
      };
    },
    7293: function (e) {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      };
    },
    7007: function (e, t, n) {
      "use strict";
      n(4916);
      var i = n(1320),
        r = n(2261),
        o = n(7293),
        s = n(5112),
        a = n(8880),
        l = s("species"),
        u = RegExp.prototype;
      e.exports = function (e, t, n, c) {
        var h = s(e),
          d = !o(function () {
            var t = {};
            return (
              (t[h] = function () {
                return 7;
              }),
              7 != ""[e](t)
            );
          }),
          f =
            d &&
            !o(function () {
              var t = !1,
                n = /a/;
              return (
                "split" === e &&
                  (((n = {}).constructor = {}),
                  (n.constructor[l] = function () {
                    return n;
                  }),
                  (n.flags = ""),
                  (n[h] = /./[h])),
                (n.exec = function () {
                  return (t = !0), null;
                }),
                n[h](""),
                !t
              );
            });
        if (!d || !f || n) {
          var m = /./[h],
            p = t(h, ""[e], function (e, t, n, i, o) {
              var s = t.exec;
              return s === r || s === u.exec
                ? d && !o
                  ? { done: !0, value: m.call(t, n, i) }
                  : { done: !0, value: e.call(n, t, i) }
                : { done: !1 };
            });
          i(String.prototype, e, p[0]), i(u, h, p[1]);
        }
        c && a(u[h], "sham", !0);
      };
    },
    9974: function (e, t, n) {
      var i = n(3099);
      e.exports = function (e, t, n) {
        if ((i(e), void 0 === t)) return e;
        switch (n) {
          case 0:
            return function () {
              return e.call(t);
            };
          case 1:
            return function (n) {
              return e.call(t, n);
            };
          case 2:
            return function (n, i) {
              return e.call(t, n, i);
            };
          case 3:
            return function (n, i, r) {
              return e.call(t, n, i, r);
            };
        }
        return function () {
          return e.apply(t, arguments);
        };
      };
    },
    5005: function (e, t, n) {
      var i = n(7854),
        r = function (e) {
          return "function" == typeof e ? e : void 0;
        };
      e.exports = function (e, t) {
        return arguments.length < 2 ? r(i[e]) : i[e] && i[e][t];
      };
    },
    1246: function (e, t, n) {
      var i = n(648),
        r = n(7497),
        o = n(5112)("iterator");
      e.exports = function (e) {
        if (null != e) return e[o] || e["@@iterator"] || r[i(e)];
      };
    },
    8554: function (e, t, n) {
      var i = n(9670),
        r = n(1246);
      e.exports = function (e, t) {
        var n = arguments.length < 2 ? r(e) : t;
        if ("function" != typeof n)
          throw TypeError(String(e) + " is not iterable");
        return i(n.call(e));
      };
    },
    647: function (e, t, n) {
      var i = n(7908),
        r = Math.floor,
        o = "".replace,
        s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        a = /\$([$&'`]|\d{1,2})/g;
      e.exports = function (e, t, n, l, u, c) {
        var h = n + e.length,
          d = l.length,
          f = a;
        return (
          void 0 !== u && ((u = i(u)), (f = s)),
          o.call(c, f, function (i, o) {
            var s;
            switch (o.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return e;
              case "`":
                return t.slice(0, n);
              case "'":
                return t.slice(h);
              case "<":
                s = u[o.slice(1, -1)];
                break;
              default:
                var a = +o;
                if (0 === a) return i;
                if (a > d) {
                  var c = r(a / 10);
                  return 0 === c
                    ? i
                    : c <= d
                    ? void 0 === l[c - 1]
                      ? o.charAt(1)
                      : l[c - 1] + o.charAt(1)
                    : i;
                }
                s = l[a - 1];
            }
            return void 0 === s ? "" : s;
          })
        );
      };
    },
    7854: function (e, t, n) {
      var i = function (e) {
        return e && e.Math == Math && e;
      };
      e.exports =
        i("object" == typeof globalThis && globalThis) ||
        i("object" == typeof window && window) ||
        i("object" == typeof self && self) ||
        i("object" == typeof n.g && n.g) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    },
    6656: function (e, t, n) {
      var i = n(7908),
        r = {}.hasOwnProperty;
      e.exports =
        Object.hasOwn ||
        function (e, t) {
          return r.call(i(e), t);
        };
    },
    3501: function (e) {
      e.exports = {};
    },
    490: function (e, t, n) {
      var i = n(5005);
      e.exports = i("document", "documentElement");
    },
    4664: function (e, t, n) {
      var i = n(9781),
        r = n(7293),
        o = n(317);
      e.exports =
        !i &&
        !r(function () {
          return (
            7 !=
            Object.defineProperty(o("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    1179: function (e) {
      var t = Math.abs,
        n = Math.pow,
        i = Math.floor,
        r = Math.log,
        o = Math.LN2;
      e.exports = {
        pack: function (e, s, a) {
          var l,
            u,
            c,
            h = new Array(a),
            d = 8 * a - s - 1,
            f = (1 << d) - 1,
            m = f >> 1,
            p = 23 === s ? n(2, -24) - n(2, -77) : 0,
            v = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0,
            g = 0;
          for (
            (e = t(e)) != e || e === 1 / 0
              ? ((u = e != e ? 1 : 0), (l = f))
              : ((l = i(r(e) / o)),
                e * (c = n(2, -l)) < 1 && (l--, (c *= 2)),
                (e += l + m >= 1 ? p / c : p * n(2, 1 - m)) * c >= 2 &&
                  (l++, (c /= 2)),
                l + m >= f
                  ? ((u = 0), (l = f))
                  : l + m >= 1
                  ? ((u = (e * c - 1) * n(2, s)), (l += m))
                  : ((u = e * n(2, m - 1) * n(2, s)), (l = 0)));
            s >= 8;
            h[g++] = 255 & u, u /= 256, s -= 8
          );
          for (
            l = (l << s) | u, d += s;
            d > 0;
            h[g++] = 255 & l, l /= 256, d -= 8
          );
          return (h[--g] |= 128 * v), h;
        },
        unpack: function (e, t) {
          var i,
            r = e.length,
            o = 8 * r - t - 1,
            s = (1 << o) - 1,
            a = s >> 1,
            l = o - 7,
            u = r - 1,
            c = e[u--],
            h = 127 & c;
          for (c >>= 7; l > 0; h = 256 * h + e[u], u--, l -= 8);
          for (
            i = h & ((1 << -l) - 1), h >>= -l, l += t;
            l > 0;
            i = 256 * i + e[u], u--, l -= 8
          );
          if (0 === h) h = 1 - a;
          else {
            if (h === s) return i ? NaN : c ? -1 / 0 : 1 / 0;
            (i += n(2, t)), (h -= a);
          }
          return (c ? -1 : 1) * i * n(2, h - t);
        },
      };
    },
    8361: function (e, t, n) {
      var i = n(7293),
        r = n(4326),
        o = "".split;
      e.exports = i(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (e) {
            return "String" == r(e) ? o.call(e, "") : Object(e);
          }
        : Object;
    },
    9587: function (e, t, n) {
      var i = n(111),
        r = n(7674);
      e.exports = function (e, t, n) {
        var o, s;
        return (
          r &&
            "function" == typeof (o = t.constructor) &&
            o !== n &&
            i((s = o.prototype)) &&
            s !== n.prototype &&
            r(e, s),
          e
        );
      };
    },
    2788: function (e, t, n) {
      var i = n(5465),
        r = Function.toString;
      "function" != typeof i.inspectSource &&
        (i.inspectSource = function (e) {
          return r.call(e);
        }),
        (e.exports = i.inspectSource);
    },
    9909: function (e, t, n) {
      var i,
        r,
        o,
        s = n(8536),
        a = n(7854),
        l = n(111),
        u = n(8880),
        c = n(6656),
        h = n(5465),
        d = n(6200),
        f = n(3501),
        m = "Object already initialized",
        p = a.WeakMap;
      if (s || h.state) {
        var v = h.state || (h.state = new p()),
          g = v.get,
          x = v.has,
          y = v.set;
        (i = function (e, t) {
          if (x.call(v, e)) throw new TypeError(m);
          return (t.facade = e), y.call(v, e, t), t;
        }),
          (r = function (e) {
            return g.call(v, e) || {};
          }),
          (o = function (e) {
            return x.call(v, e);
          });
      } else {
        var D = d("state");
        (f[D] = !0),
          (i = function (e, t) {
            if (c(e, D)) throw new TypeError(m);
            return (t.facade = e), u(e, D, t), t;
          }),
          (r = function (e) {
            return c(e, D) ? e[D] : {};
          }),
          (o = function (e) {
            return c(e, D);
          });
      }
      e.exports = {
        set: i,
        get: r,
        has: o,
        enforce: function (e) {
          return o(e) ? r(e) : i(e, {});
        },
        getterFor: function (e) {
          return function (t) {
            var n;
            if (!l(t) || (n = r(t)).type !== e)
              throw TypeError("Incompatible receiver, " + e + " required");
            return n;
          };
        },
      };
    },
    7659: function (e, t, n) {
      var i = n(5112),
        r = n(7497),
        o = i("iterator"),
        s = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (r.Array === e || s[o] === e);
      };
    },
    3157: function (e, t, n) {
      var i = n(4326);
      e.exports =
        Array.isArray ||
        function (e) {
          return "Array" == i(e);
        };
    },
    4705: function (e, t, n) {
      var i = n(7293),
        r = /#|\.prototype\./,
        o = function (e, t) {
          var n = a[s(e)];
          return n == u || (n != l && ("function" == typeof t ? i(t) : !!t));
        },
        s = (o.normalize = function (e) {
          return String(e).replace(r, ".").toLowerCase();
        }),
        a = (o.data = {}),
        l = (o.NATIVE = "N"),
        u = (o.POLYFILL = "P");
      e.exports = o;
    },
    8730: function (e, t, n) {
      var i = n(111),
        r = Math.floor;
      e.exports = function (e) {
        return !i(e) && isFinite(e) && r(e) === e;
      };
    },
    111: function (e) {
      e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      };
    },
    1913: function (e) {
      e.exports = !1;
    },
    2190: function (e, t, n) {
      var i = n(5005),
        r = n(3307);
      e.exports = r
        ? function (e) {
            return "symbol" == typeof e;
          }
        : function (e) {
            var t = i("Symbol");
            return "function" == typeof t && Object(e) instanceof t;
          };
    },
    9212: function (e, t, n) {
      var i = n(9670);
      e.exports = function (e, t, n) {
        var r, o;
        i(e);
        try {
          if (void 0 === (r = e.return)) {
            if ("throw" === t) throw n;
            return n;
          }
          r = r.call(e);
        } catch (e) {
          (o = !0), (r = e);
        }
        if ("throw" === t) throw n;
        if (o) throw r;
        return i(r), n;
      };
    },
    3383: function (e, t, n) {
      "use strict";
      var i,
        r,
        o,
        s = n(7293),
        a = n(9518),
        l = n(8880),
        u = n(6656),
        c = n(5112),
        h = n(1913),
        d = c("iterator"),
        f = !1;
      [].keys &&
        ("next" in (o = [].keys())
          ? (r = a(a(o))) !== Object.prototype && (i = r)
          : (f = !0));
      var m =
        null == i ||
        s(function () {
          var e = {};
          return i[d].call(e) !== e;
        });
      m && (i = {}),
        (h && !m) ||
          u(i, d) ||
          l(i, d, function () {
            return this;
          }),
        (e.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: f });
    },
    7497: function (e) {
      e.exports = {};
    },
    133: function (e, t, n) {
      var i = n(7392),
        r = n(7293);
      e.exports =
        !!Object.getOwnPropertySymbols &&
        !r(function () {
          var e = Symbol();
          return (
            !String(e) ||
            !(Object(e) instanceof Symbol) ||
            (!Symbol.sham && i && i < 41)
          );
        });
    },
    590: function (e, t, n) {
      var i = n(7293),
        r = n(5112),
        o = n(1913),
        s = r("iterator");
      e.exports = !i(function () {
        var e = new URL("b?a=1&b=2&c=3", "http://a"),
          t = e.searchParams,
          n = "";
        return (
          (e.pathname = "c%20d"),
          t.forEach(function (e, i) {
            t.delete("b"), (n += i + e);
          }),
          (o && !e.toJSON) ||
            !t.sort ||
            "http://a/c%20d?a=1&c=3" !== e.href ||
            "3" !== t.get("c") ||
            "a=1" !== String(new URLSearchParams("?a=1")) ||
            !t[s] ||
            "a" !== new URL("https://a@b").username ||
            "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
            "xn--e1aybc" !== new URL("http://тест").host ||
            "#%D0%B1" !== new URL("http://a#б").hash ||
            "a1c3" !== n ||
            "x" !== new URL("http://x", void 0).host
        );
      });
    },
    8536: function (e, t, n) {
      var i = n(7854),
        r = n(2788),
        o = i.WeakMap;
      e.exports = "function" == typeof o && /native code/.test(r(o));
    },
    1574: function (e, t, n) {
      "use strict";
      var i = n(9781),
        r = n(7293),
        o = n(1956),
        s = n(5181),
        a = n(5296),
        l = n(7908),
        u = n(8361),
        c = Object.assign,
        h = Object.defineProperty;
      e.exports =
        !c ||
        r(function () {
          if (
            i &&
            1 !==
              c(
                { b: 1 },
                c(
                  h({}, "a", {
                    enumerable: !0,
                    get: function () {
                      h(this, "b", { value: 3, enumerable: !1 });
                    },
                  }),
                  { b: 2 }
                )
              ).b
          )
            return !0;
          var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
          return (
            (e[n] = 7),
            r.split("").forEach(function (e) {
              t[e] = e;
            }),
            7 != c({}, e)[n] || o(c({}, t)).join("") != r
          );
        })
          ? function (e, t) {
              for (
                var n = l(e), r = arguments.length, c = 1, h = s.f, d = a.f;
                r > c;

              )
                for (
                  var f,
                    m = u(arguments[c++]),
                    p = h ? o(m).concat(h(m)) : o(m),
                    v = p.length,
                    g = 0;
                  v > g;

                )
                  (f = p[g++]), (i && !d.call(m, f)) || (n[f] = m[f]);
              return n;
            }
          : c;
    },
    30: function (e, t, n) {
      var i,
        r = n(9670),
        o = n(6048),
        s = n(748),
        a = n(3501),
        l = n(490),
        u = n(317),
        c = n(6200),
        h = c("IE_PROTO"),
        d = function () {},
        f = function (e) {
          return "<script>" + e + "</" + "script>";
        },
        m = function (e) {
          e.write(f("")), e.close();
          var t = e.parentWindow.Object;
          return (e = null), t;
        },
        p = function () {
          try {
            i = new ActiveXObject("htmlfile");
          } catch (e) {}
          var e, t;
          p =
            "undefined" != typeof document
              ? document.domain && i
                ? m(i)
                : (((t = u("iframe")).style.display = "none"),
                  l.appendChild(t),
                  (t.src = String("javascript:")),
                  (e = t.contentWindow.document).open(),
                  e.write(f("document.F=Object")),
                  e.close(),
                  e.F)
              : m(i);
          for (var n = s.length; n--; ) delete p.prototype[s[n]];
          return p();
        };
      (a[h] = !0),
        (e.exports =
          Object.create ||
          function (e, t) {
            var n;
            return (
              null !== e
                ? ((d.prototype = r(e)),
                  (n = new d()),
                  (d.prototype = null),
                  (n[h] = e))
                : (n = p()),
              void 0 === t ? n : o(n, t)
            );
          });
    },
    6048: function (e, t, n) {
      var i = n(9781),
        r = n(3070),
        o = n(9670),
        s = n(1956);
      e.exports = i
        ? Object.defineProperties
        : function (e, t) {
            o(e);
            for (var n, i = s(t), a = i.length, l = 0; a > l; )
              r.f(e, (n = i[l++]), t[n]);
            return e;
          };
    },
    3070: function (e, t, n) {
      var i = n(9781),
        r = n(4664),
        o = n(9670),
        s = n(4948),
        a = Object.defineProperty;
      t.f = i
        ? a
        : function (e, t, n) {
            if ((o(e), (t = s(t)), o(n), r))
              try {
                return a(e, t, n);
              } catch (e) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e;
          };
    },
    1236: function (e, t, n) {
      var i = n(9781),
        r = n(5296),
        o = n(9114),
        s = n(5656),
        a = n(4948),
        l = n(6656),
        u = n(4664),
        c = Object.getOwnPropertyDescriptor;
      t.f = i
        ? c
        : function (e, t) {
            if (((e = s(e)), (t = a(t)), u))
              try {
                return c(e, t);
              } catch (e) {}
            if (l(e, t)) return o(!r.f.call(e, t), e[t]);
          };
    },
    8006: function (e, t, n) {
      var i = n(6324),
        r = n(748).concat("length", "prototype");
      t.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return i(e, r);
        };
    },
    5181: function (e, t) {
      t.f = Object.getOwnPropertySymbols;
    },
    9518: function (e, t, n) {
      var i = n(6656),
        r = n(7908),
        o = n(6200),
        s = n(8544),
        a = o("IE_PROTO"),
        l = Object.prototype;
      e.exports = s
        ? Object.getPrototypeOf
        : function (e) {
            return (
              (e = r(e)),
              i(e, a)
                ? e[a]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? l
                : null
            );
          };
    },
    6324: function (e, t, n) {
      var i = n(6656),
        r = n(5656),
        o = n(1318).indexOf,
        s = n(3501);
      e.exports = function (e, t) {
        var n,
          a = r(e),
          l = 0,
          u = [];
        for (n in a) !i(s, n) && i(a, n) && u.push(n);
        for (; t.length > l; ) i(a, (n = t[l++])) && (~o(u, n) || u.push(n));
        return u;
      };
    },
    1956: function (e, t, n) {
      var i = n(6324),
        r = n(748);
      e.exports =
        Object.keys ||
        function (e) {
          return i(e, r);
        };
    },
    5296: function (e, t) {
      "use strict";
      var n = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        r = i && !n.call({ 1: 2 }, 1);
      t.f = r
        ? function (e) {
            var t = i(this, e);
            return !!t && t.enumerable;
          }
        : n;
    },
    7674: function (e, t, n) {
      var i = n(9670),
        r = n(6077);
      e.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var e,
                t = !1,
                n = {};
              try {
                (e = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set).call(n, []),
                  (t = n instanceof Array);
              } catch (e) {}
              return function (n, o) {
                return i(n), r(o), t ? e.call(n, o) : (n.__proto__ = o), n;
              };
            })()
          : void 0);
    },
    2140: function (e, t, n) {
      var i = n(111);
      e.exports = function (e, t) {
        var n, r;
        if (
          "string" === t &&
          "function" == typeof (n = e.toString) &&
          !i((r = n.call(e)))
        )
          return r;
        if ("function" == typeof (n = e.valueOf) && !i((r = n.call(e))))
          return r;
        if (
          "string" !== t &&
          "function" == typeof (n = e.toString) &&
          !i((r = n.call(e)))
        )
          return r;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    3887: function (e, t, n) {
      var i = n(5005),
        r = n(8006),
        o = n(5181),
        s = n(9670);
      e.exports =
        i("Reflect", "ownKeys") ||
        function (e) {
          var t = r.f(s(e)),
            n = o.f;
          return n ? t.concat(n(e)) : t;
        };
    },
    2248: function (e, t, n) {
      var i = n(1320);
      e.exports = function (e, t, n) {
        for (var r in t) i(e, r, t[r], n);
        return e;
      };
    },
    1320: function (e, t, n) {
      var i = n(7854),
        r = n(8880),
        o = n(6656),
        s = n(3505),
        a = n(2788),
        l = n(9909),
        u = l.get,
        c = l.enforce,
        h = String(String).split("String");
      (e.exports = function (e, t, n, a) {
        var l,
          u = !!a && !!a.unsafe,
          d = !!a && !!a.enumerable,
          f = !!a && !!a.noTargetGet;
        "function" == typeof n &&
          ("string" != typeof t || o(n, "name") || r(n, "name", t),
          (l = c(n)).source ||
            (l.source = h.join("string" == typeof t ? t : ""))),
          e !== i
            ? (u ? !f && e[t] && (d = !0) : delete e[t],
              d ? (e[t] = n) : r(e, t, n))
            : d
            ? (e[t] = n)
            : s(t, n);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && u(this).source) || a(this);
      });
    },
    7651: function (e, t, n) {
      var i = n(4326),
        r = n(2261);
      e.exports = function (e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
          var o = n.call(e, t);
          if ("object" != typeof o)
            throw TypeError(
              "RegExp exec method returned something other than an Object or null"
            );
          return o;
        }
        if ("RegExp" !== i(e))
          throw TypeError("RegExp#exec called on incompatible receiver");
        return r.call(e, t);
      };
    },
    2261: function (e, t, n) {
      "use strict";
      var i,
        r,
        o = n(1340),
        s = n(7066),
        a = n(2999),
        l = n(2309),
        u = n(30),
        c = n(9909).get,
        h = n(9441),
        d = n(8173),
        f = RegExp.prototype.exec,
        m = l("native-string-replace", String.prototype.replace),
        p = f,
        v =
          ((i = /a/),
          (r = /b*/g),
          f.call(i, "a"),
          f.call(r, "a"),
          0 !== i.lastIndex || 0 !== r.lastIndex),
        g = a.UNSUPPORTED_Y || a.BROKEN_CARET,
        x = void 0 !== /()??/.exec("")[1];
      (v || x || g || h || d) &&
        (p = function (e) {
          var t,
            n,
            i,
            r,
            a,
            l,
            h,
            d = this,
            y = c(d),
            D = o(e),
            b = y.raw;
          if (b)
            return (
              (b.lastIndex = d.lastIndex),
              (t = p.call(b, D)),
              (d.lastIndex = b.lastIndex),
              t
            );
          var _ = y.groups,
            w = g && d.sticky,
            S = s.call(d),
            E = d.source,
            P = 0,
            C = D;
          if (
            (w &&
              (-1 === (S = S.replace("y", "")).indexOf("g") && (S += "g"),
              (C = D.slice(d.lastIndex)),
              d.lastIndex > 0 &&
                (!d.multiline ||
                  (d.multiline && "\n" !== D.charAt(d.lastIndex - 1))) &&
                ((E = "(?: " + E + ")"), (C = " " + C), P++),
              (n = new RegExp("^(?:" + E + ")", S))),
            x && (n = new RegExp("^" + E + "$(?!\\s)", S)),
            v && (i = d.lastIndex),
            (r = f.call(w ? n : d, C)),
            w
              ? r
                ? ((r.input = r.input.slice(P)),
                  (r[0] = r[0].slice(P)),
                  (r.index = d.lastIndex),
                  (d.lastIndex += r[0].length))
                : (d.lastIndex = 0)
              : v && r && (d.lastIndex = d.global ? r.index + r[0].length : i),
            x &&
              r &&
              r.length > 1 &&
              m.call(r[0], n, function () {
                for (a = 1; a < arguments.length - 2; a++)
                  void 0 === arguments[a] && (r[a] = void 0);
              }),
            r && _)
          )
            for (r.groups = l = u(null), a = 0; a < _.length; a++)
              l[(h = _[a])[0]] = r[h[1]];
          return r;
        }),
        (e.exports = p);
    },
    7066: function (e, t, n) {
      "use strict";
      var i = n(9670);
      e.exports = function () {
        var e = i(this),
          t = "";
        return (
          e.global && (t += "g"),
          e.ignoreCase && (t += "i"),
          e.multiline && (t += "m"),
          e.dotAll && (t += "s"),
          e.unicode && (t += "u"),
          e.sticky && (t += "y"),
          t
        );
      };
    },
    2999: function (e, t, n) {
      var i = n(7293),
        r = n(7854).RegExp;
      (t.UNSUPPORTED_Y = i(function () {
        var e = r("a", "y");
        return (e.lastIndex = 2), null != e.exec("abcd");
      })),
        (t.BROKEN_CARET = i(function () {
          var e = r("^r", "gy");
          return (e.lastIndex = 2), null != e.exec("str");
        }));
    },
    9441: function (e, t, n) {
      var i = n(7293),
        r = n(7854).RegExp;
      e.exports = i(function () {
        var e = r(".", "s");
        return !(e.dotAll && e.exec("\n") && "s" === e.flags);
      });
    },
    8173: function (e, t, n) {
      var i = n(7293),
        r = n(7854).RegExp;
      e.exports = i(function () {
        var e = r("(?<a>b)", "g");
        return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
      });
    },
    4488: function (e) {
      e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e;
      };
    },
    3505: function (e, t, n) {
      var i = n(7854);
      e.exports = function (e, t) {
        try {
          Object.defineProperty(i, e, {
            value: t,
            configurable: !0,
            writable: !0,
          });
        } catch (n) {
          i[e] = t;
        }
        return t;
      };
    },
    6340: function (e, t, n) {
      "use strict";
      var i = n(5005),
        r = n(3070),
        o = n(5112),
        s = n(9781),
        a = o("species");
      e.exports = function (e) {
        var t = i(e),
          n = r.f;
        s &&
          t &&
          !t[a] &&
          n(t, a, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    8003: function (e, t, n) {
      var i = n(3070).f,
        r = n(6656),
        o = n(5112)("toStringTag");
      e.exports = function (e, t, n) {
        e &&
          !r((e = n ? e : e.prototype), o) &&
          i(e, o, { configurable: !0, value: t });
      };
    },
    6200: function (e, t, n) {
      var i = n(2309),
        r = n(9711),
        o = i("keys");
      e.exports = function (e) {
        return o[e] || (o[e] = r(e));
      };
    },
    5465: function (e, t, n) {
      var i = n(7854),
        r = n(3505),
        o = "__core-js_shared__",
        s = i[o] || r(o, {});
      e.exports = s;
    },
    2309: function (e, t, n) {
      var i = n(1913),
        r = n(5465);
      (e.exports = function (e, t) {
        return r[e] || (r[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: "3.17.2",
        mode: i ? "pure" : "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
      });
    },
    6707: function (e, t, n) {
      var i = n(9670),
        r = n(3099),
        o = n(5112)("species");
      e.exports = function (e, t) {
        var n,
          s = i(e).constructor;
        return void 0 === s || null == (n = i(s)[o]) ? t : r(n);
      };
    },
    8710: function (e, t, n) {
      var i = n(9958),
        r = n(1340),
        o = n(4488),
        s = function (e) {
          return function (t, n) {
            var s,
              a,
              l = r(o(t)),
              u = i(n),
              c = l.length;
            return u < 0 || u >= c
              ? e
                ? ""
                : void 0
              : (s = l.charCodeAt(u)) < 55296 ||
                s > 56319 ||
                u + 1 === c ||
                (a = l.charCodeAt(u + 1)) < 56320 ||
                a > 57343
              ? e
                ? l.charAt(u)
                : s
              : e
              ? l.slice(u, u + 2)
              : a - 56320 + ((s - 55296) << 10) + 65536;
          };
        };
      e.exports = { codeAt: s(!1), charAt: s(!0) };
    },
    3197: function (e) {
      "use strict";
      var t = 2147483647,
        n = /[^\0-\u007E]/,
        i = /[.\u3002\uFF0E\uFF61]/g,
        r = "Overflow: input needs wider integers to process",
        o = Math.floor,
        s = String.fromCharCode,
        a = function (e) {
          return e + 22 + 75 * (e < 26);
        },
        l = function (e, t, n) {
          var i = 0;
          for (e = n ? o(e / 700) : e >> 1, e += o(e / t); e > 455; i += 36)
            e = o(e / 35);
          return o(i + (36 * e) / (e + 38));
        },
        u = function (e) {
          var n,
            i,
            u = [],
            c = (e = (function (e) {
              for (var t = [], n = 0, i = e.length; n < i; ) {
                var r = e.charCodeAt(n++);
                if (r >= 55296 && r <= 56319 && n < i) {
                  var o = e.charCodeAt(n++);
                  56320 == (64512 & o)
                    ? t.push(((1023 & r) << 10) + (1023 & o) + 65536)
                    : (t.push(r), n--);
                } else t.push(r);
              }
              return t;
            })(e)).length,
            h = 128,
            d = 0,
            f = 72;
          for (n = 0; n < e.length; n++) (i = e[n]) < 128 && u.push(s(i));
          var m = u.length,
            p = m;
          for (m && u.push("-"); p < c; ) {
            var v = t;
            for (n = 0; n < e.length; n++) (i = e[n]) >= h && i < v && (v = i);
            var g = p + 1;
            if (v - h > o((t - d) / g)) throw RangeError(r);
            for (d += (v - h) * g, h = v, n = 0; n < e.length; n++) {
              if ((i = e[n]) < h && ++d > t) throw RangeError(r);
              if (i == h) {
                for (var x = d, y = 36; ; y += 36) {
                  var D = y <= f ? 1 : y >= f + 26 ? 26 : y - f;
                  if (x < D) break;
                  var b = x - D,
                    _ = 36 - D;
                  u.push(s(a(D + (b % _)))), (x = o(b / _));
                }
                u.push(s(a(x))), (f = l(d, g, p == m)), (d = 0), ++p;
              }
            }
            ++d, ++h;
          }
          return u.join("");
        };
      e.exports = function (e) {
        var t,
          r,
          o = [],
          s = e.toLowerCase().replace(i, ".").split(".");
        for (t = 0; t < s.length; t++)
          (r = s[t]), o.push(n.test(r) ? "xn--" + u(r) : r);
        return o.join(".");
      };
    },
    1400: function (e, t, n) {
      var i = n(9958),
        r = Math.max,
        o = Math.min;
      e.exports = function (e, t) {
        var n = i(e);
        return n < 0 ? r(n + t, 0) : o(n, t);
      };
    },
    7067: function (e, t, n) {
      var i = n(9958),
        r = n(7466);
      e.exports = function (e) {
        if (void 0 === e) return 0;
        var t = i(e),
          n = r(t);
        if (t !== n) throw RangeError("Wrong length or index");
        return n;
      };
    },
    5656: function (e, t, n) {
      var i = n(8361),
        r = n(4488);
      e.exports = function (e) {
        return i(r(e));
      };
    },
    9958: function (e) {
      var t = Math.ceil,
        n = Math.floor;
      e.exports = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? n : t)(e);
      };
    },
    7466: function (e, t, n) {
      var i = n(9958),
        r = Math.min;
      e.exports = function (e) {
        return e > 0 ? r(i(e), 9007199254740991) : 0;
      };
    },
    7908: function (e, t, n) {
      var i = n(4488);
      e.exports = function (e) {
        return Object(i(e));
      };
    },
    4590: function (e, t, n) {
      var i = n(3002);
      e.exports = function (e, t) {
        var n = i(e);
        if (n % t) throw RangeError("Wrong offset");
        return n;
      };
    },
    3002: function (e, t, n) {
      var i = n(9958);
      e.exports = function (e) {
        var t = i(e);
        if (t < 0) throw RangeError("The argument can't be less than 0");
        return t;
      };
    },
    7593: function (e, t, n) {
      var i = n(111),
        r = n(2190),
        o = n(2140),
        s = n(5112)("toPrimitive");
      e.exports = function (e, t) {
        if (!i(e) || r(e)) return e;
        var n,
          a = e[s];
        if (void 0 !== a) {
          if (
            (void 0 === t && (t = "default"), (n = a.call(e, t)), !i(n) || r(n))
          )
            return n;
          throw TypeError("Can't convert object to primitive value");
        }
        return void 0 === t && (t = "number"), o(e, t);
      };
    },
    4948: function (e, t, n) {
      var i = n(7593),
        r = n(2190);
      e.exports = function (e) {
        var t = i(e, "string");
        return r(t) ? t : String(t);
      };
    },
    1694: function (e, t, n) {
      var i = {};
      (i[n(5112)("toStringTag")] = "z"),
        (e.exports = "[object z]" === String(i));
    },
    1340: function (e, t, n) {
      var i = n(2190);
      e.exports = function (e) {
        if (i(e)) throw TypeError("Cannot convert a Symbol value to a string");
        return String(e);
      };
    },
    9843: function (e, t, n) {
      "use strict";
      var i = n(2109),
        r = n(7854),
        o = n(9781),
        s = n(3832),
        a = n(260),
        l = n(3331),
        u = n(5787),
        c = n(9114),
        h = n(8880),
        d = n(8730),
        f = n(7466),
        m = n(7067),
        p = n(4590),
        v = n(4948),
        g = n(6656),
        x = n(648),
        y = n(111),
        D = n(2190),
        b = n(30),
        _ = n(7674),
        w = n(8006).f,
        S = n(7321),
        E = n(2092).forEach,
        P = n(6340),
        C = n(3070),
        T = n(1236),
        F = n(9909),
        A = n(9587),
        M = F.get,
        O = F.set,
        L = C.f,
        I = T.f,
        R = Math.round,
        k = r.RangeError,
        z = l.ArrayBuffer,
        U = l.DataView,
        j = a.NATIVE_ARRAY_BUFFER_VIEWS,
        B = a.TYPED_ARRAY_CONSTRUCTOR,
        N = a.TYPED_ARRAY_TAG,
        V = a.TypedArray,
        G = a.TypedArrayPrototype,
        W = a.aTypedArrayConstructor,
        H = a.isTypedArray,
        q = "BYTES_PER_ELEMENT",
        Y = "Wrong length",
        Z = function (e, t) {
          for (var n = 0, i = t.length, r = new (W(e))(i); i > n; )
            r[n] = t[n++];
          return r;
        },
        $ = function (e, t) {
          L(e, t, {
            get: function () {
              return M(this)[t];
            },
          });
        },
        X = function (e) {
          var t;
          return (
            e instanceof z ||
            "ArrayBuffer" == (t = x(e)) ||
            "SharedArrayBuffer" == t
          );
        },
        K = function (e, t) {
          return H(e) && !D(t) && t in e && d(+t) && t >= 0;
        },
        Q = function (e, t) {
          return (t = v(t)), K(e, t) ? c(2, e[t]) : I(e, t);
        },
        J = function (e, t, n) {
          return (
            (t = v(t)),
            !(K(e, t) && y(n) && g(n, "value")) ||
            g(n, "get") ||
            g(n, "set") ||
            n.configurable ||
            (g(n, "writable") && !n.writable) ||
            (g(n, "enumerable") && !n.enumerable)
              ? L(e, t, n)
              : ((e[t] = n.value), e)
          );
        };
      o
        ? (j ||
            ((T.f = Q),
            (C.f = J),
            $(G, "buffer"),
            $(G, "byteOffset"),
            $(G, "byteLength"),
            $(G, "length")),
          i(
            { target: "Object", stat: !0, forced: !j },
            { getOwnPropertyDescriptor: Q, defineProperty: J }
          ),
          (e.exports = function (e, t, n) {
            var o = e.match(/\d+$/)[0] / 8,
              a = e + (n ? "Clamped" : "") + "Array",
              l = "get" + e,
              c = "set" + e,
              d = r[a],
              v = d,
              g = v && v.prototype,
              x = {},
              D = function (e, t) {
                L(e, t, {
                  get: function () {
                    return (function (e, t) {
                      var n = M(e);
                      return n.view[l](t * o + n.byteOffset, !0);
                    })(this, t);
                  },
                  set: function (e) {
                    return (function (e, t, i) {
                      var r = M(e);
                      n && (i = (i = R(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i),
                        r.view[c](t * o + r.byteOffset, i, !0);
                    })(this, t, e);
                  },
                  enumerable: !0,
                });
              };
            j
              ? s &&
                ((v = t(function (e, t, n, i) {
                  return (
                    u(e, v, a),
                    A(
                      y(t)
                        ? X(t)
                          ? void 0 !== i
                            ? new d(t, p(n, o), i)
                            : void 0 !== n
                            ? new d(t, p(n, o))
                            : new d(t)
                          : H(t)
                          ? Z(v, t)
                          : S.call(v, t)
                        : new d(m(t)),
                      e,
                      v
                    )
                  );
                })),
                _ && _(v, V),
                E(w(d), function (e) {
                  e in v || h(v, e, d[e]);
                }),
                (v.prototype = g))
              : ((v = t(function (e, t, n, i) {
                  u(e, v, a);
                  var r,
                    s,
                    l,
                    c = 0,
                    h = 0;
                  if (y(t)) {
                    if (!X(t)) return H(t) ? Z(v, t) : S.call(v, t);
                    (r = t), (h = p(n, o));
                    var d = t.byteLength;
                    if (void 0 === i) {
                      if (d % o) throw k(Y);
                      if ((s = d - h) < 0) throw k(Y);
                    } else if ((s = f(i) * o) + h > d) throw k(Y);
                    l = s / o;
                  } else (l = m(t)), (r = new z((s = l * o)));
                  for (
                    O(e, {
                      buffer: r,
                      byteOffset: h,
                      byteLength: s,
                      length: l,
                      view: new U(r),
                    });
                    c < l;

                  )
                    D(e, c++);
                })),
                _ && _(v, V),
                (g = v.prototype = b(G))),
              g.constructor !== v && h(g, "constructor", v),
              h(g, B, v),
              N && h(g, N, a),
              (x[a] = v),
              i({ global: !0, forced: v != d, sham: !j }, x),
              q in v || h(v, q, o),
              q in g || h(g, q, o),
              P(a);
          }))
        : (e.exports = function () {});
    },
    3832: function (e, t, n) {
      var i = n(7854),
        r = n(7293),
        o = n(7072),
        s = n(260).NATIVE_ARRAY_BUFFER_VIEWS,
        a = i.ArrayBuffer,
        l = i.Int8Array;
      e.exports =
        !s ||
        !r(function () {
          l(1);
        }) ||
        !r(function () {
          new l(-1);
        }) ||
        !o(function (e) {
          new l(), new l(null), new l(1.5), new l(e);
        }, !0) ||
        r(function () {
          return 1 !== new l(new a(2), 1, void 0).length;
        });
    },
    7321: function (e, t, n) {
      var i = n(7908),
        r = n(7466),
        o = n(8554),
        s = n(1246),
        a = n(7659),
        l = n(9974),
        u = n(260).aTypedArrayConstructor;
      e.exports = function (e) {
        var t,
          n,
          c,
          h,
          d,
          f,
          m = i(e),
          p = arguments.length,
          v = p > 1 ? arguments[1] : void 0,
          g = void 0 !== v,
          x = s(m);
        if (null != x && !a(x))
          for (f = (d = o(m, x)).next, m = []; !(h = f.call(d)).done; )
            m.push(h.value);
        for (
          g && p > 2 && (v = l(v, arguments[2], 2)),
            n = r(m.length),
            c = new (u(this))(n),
            t = 0;
          n > t;
          t++
        )
          c[t] = g ? v(m[t], t) : m[t];
        return c;
      };
    },
    9711: function (e) {
      var t = 0,
        n = Math.random();
      e.exports = function (e) {
        return (
          "Symbol(" +
          String(void 0 === e ? "" : e) +
          ")_" +
          (++t + n).toString(36)
        );
      };
    },
    3307: function (e, t, n) {
      var i = n(133);
      e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    5112: function (e, t, n) {
      var i = n(7854),
        r = n(2309),
        o = n(6656),
        s = n(9711),
        a = n(133),
        l = n(3307),
        u = r("wks"),
        c = i.Symbol,
        h = l ? c : (c && c.withoutSetter) || s;
      e.exports = function (e) {
        return (
          (o(u, e) && (a || "string" == typeof u[e])) ||
            (a && o(c, e) ? (u[e] = c[e]) : (u[e] = h("Symbol." + e))),
          u[e]
        );
      };
    },
    9575: function (e, t, n) {
      "use strict";
      var i = n(2109),
        r = n(7293),
        o = n(3331),
        s = n(9670),
        a = n(1400),
        l = n(7466),
        u = n(6707),
        c = o.ArrayBuffer,
        h = o.DataView,
        d = c.prototype.slice;
      i(
        {
          target: "ArrayBuffer",
          proto: !0,
          unsafe: !0,
          forced: r(function () {
            return !new c(2).slice(1, void 0).byteLength;
          }),
        },
        {
          slice: function (e, t) {
            if (void 0 !== d && void 0 === t) return d.call(s(this), e);
            for (
              var n = s(this).byteLength,
                i = a(e, n),
                r = a(void 0 === t ? n : t, n),
                o = new (u(this, c))(l(r - i)),
                f = new h(this),
                m = new h(o),
                p = 0;
              i < r;

            )
              m.setUint8(p++, f.getUint8(i++));
            return o;
          },
        }
      );
    },
    6992: function (e, t, n) {
      "use strict";
      var i = n(5656),
        r = n(1223),
        o = n(7497),
        s = n(9909),
        a = n(654),
        l = "Array Iterator",
        u = s.set,
        c = s.getterFor(l);
      (e.exports = a(
        Array,
        "Array",
        function (e, t) {
          u(this, { type: l, target: i(e), index: 0, kind: t });
        },
        function () {
          var e = c(this),
            t = e.target,
            n = e.kind,
            i = e.index++;
          return !t || i >= t.length
            ? ((e.target = void 0), { value: void 0, done: !0 })
            : "keys" == n
            ? { value: i, done: !1 }
            : "values" == n
            ? { value: t[i], done: !1 }
            : { value: [i, t[i]], done: !1 };
        },
        "values"
      )),
        (o.Arguments = o.Array),
        r("keys"),
        r("values"),
        r("entries");
    },
    5069: function (e, t, n) {
      "use strict";
      var i = n(2109),
        r = n(3157),
        o = [].reverse,
        s = [1, 2];
      i(
        {
          target: "Array",
          proto: !0,
          forced: String(s) === String(s.reverse()),
        },
        {
          reverse: function () {
            return r(this) && (this.length = this.length), o.call(this);
          },
        }
      );
    },
    4916: function (e, t, n) {
      "use strict";
      var i = n(2109),
        r = n(2261);
      i({ target: "RegExp", proto: !0, forced: /./.exec !== r }, { exec: r });
    },
    8783: function (e, t, n) {
      "use strict";
      var i = n(8710).charAt,
        r = n(1340),
        o = n(9909),
        s = n(654),
        a = "String Iterator",
        l = o.set,
        u = o.getterFor(a);
      s(
        String,
        "String",
        function (e) {
          l(this, { type: a, string: r(e), index: 0 });
        },
        function () {
          var e,
            t = u(this),
            n = t.string,
            r = t.index;
          return r >= n.length
            ? { value: void 0, done: !0 }
            : ((e = i(n, r)), (t.index += e.length), { value: e, done: !1 });
        }
      );
    },
    5306: function (e, t, n) {
      "use strict";
      var i = n(7007),
        r = n(7293),
        o = n(9670),
        s = n(9958),
        a = n(7466),
        l = n(1340),
        u = n(4488),
        c = n(1530),
        h = n(647),
        d = n(7651),
        f = n(5112)("replace"),
        m = Math.max,
        p = Math.min,
        v = "$0" === "a".replace(/./, "$0"),
        g = !!/./[f] && "" === /./[f]("a", "$0");
      i(
        "replace",
        function (e, t, n) {
          var i = g ? "$" : "$0";
          return [
            function (e, n) {
              var i = u(this),
                r = null == e ? void 0 : e[f];
              return void 0 !== r ? r.call(e, i, n) : t.call(l(i), e, n);
            },
            function (e, r) {
              var u = o(this),
                f = l(e);
              if (
                "string" == typeof r &&
                -1 === r.indexOf(i) &&
                -1 === r.indexOf("$<")
              ) {
                var v = n(t, u, f, r);
                if (v.done) return v.value;
              }
              var g = "function" == typeof r;
              g || (r = l(r));
              var x = u.global;
              if (x) {
                var y = u.unicode;
                u.lastIndex = 0;
              }
              for (var D = []; ; ) {
                var b = d(u, f);
                if (null === b) break;
                if ((D.push(b), !x)) break;
                "" === l(b[0]) && (u.lastIndex = c(f, a(u.lastIndex), y));
              }
              for (var _, w = "", S = 0, E = 0; E < D.length; E++) {
                b = D[E];
                for (
                  var P = l(b[0]),
                    C = m(p(s(b.index), f.length), 0),
                    T = [],
                    F = 1;
                  F < b.length;
                  F++
                )
                  T.push(void 0 === (_ = b[F]) ? _ : String(_));
                var A = b.groups;
                if (g) {
                  var M = [P].concat(T, C, f);
                  void 0 !== A && M.push(A);
                  var O = l(r.apply(void 0, M));
                } else O = h(P, f, C, T, A, r);
                C >= S && ((w += f.slice(S, C) + O), (S = C + P.length));
              }
              return w + f.slice(S);
            },
          ];
        },
        !!r(function () {
          var e = /./;
          return (
            (e.exec = function () {
              var e = [];
              return (e.groups = { a: "7" }), e;
            }),
            "7" !== "".replace(e, "$<a>")
          );
        }) ||
          !v ||
          g
      );
    },
    1817: function (e, t, n) {
      "use strict";
      var i = n(2109),
        r = n(9781),
        o = n(7854),
        s = n(6656),
        a = n(111),
        l = n(3070).f,
        u = n(9920),
        c = o.Symbol;
      if (
        r &&
        "function" == typeof c &&
        (!("description" in c.prototype) || void 0 !== c().description)
      ) {
        var h = {},
          d = function () {
            var e =
                arguments.length < 1 || void 0 === arguments[0]
                  ? void 0
                  : String(arguments[0]),
              t = this instanceof d ? new c(e) : void 0 === e ? c() : c(e);
            return "" === e && (h[t] = !0), t;
          };
        u(d, c);
        var f = (d.prototype = c.prototype);
        f.constructor = d;
        var m = f.toString,
          p = "Symbol(test)" == String(c("test")),
          v = /^Symbol\((.*)\)[^)]+$/;
        l(f, "description", {
          configurable: !0,
          get: function () {
            var e = a(this) ? this.valueOf() : this,
              t = m.call(e);
            if (s(h, e)) return "";
            var n = p ? t.slice(7, -1) : t.replace(v, "$1");
            return "" === n ? void 0 : n;
          },
        }),
          i({ global: !0, forced: !0 }, { Symbol: d });
      }
    },
    4197: function (e, t, n) {
      n(9843)("Float32", function (e) {
        return function (t, n, i) {
          return e(this, t, n, i);
        };
      });
    },
    3824: function (e, t, n) {
      "use strict";
      var i = n(260),
        r = n(7854),
        o = n(7293),
        s = n(3099),
        a = n(7466),
        l = n(4362),
        u = n(8886),
        c = n(256),
        h = n(7392),
        d = n(8008),
        f = i.aTypedArray,
        m = i.exportTypedArrayMethod,
        p = r.Uint16Array,
        v = p && p.prototype.sort,
        g =
          !!v &&
          !o(function () {
            var e = new p(2);
            e.sort(null), e.sort({});
          }),
        x =
          !!v &&
          !o(function () {
            if (h) return h < 74;
            if (u) return u < 67;
            if (c) return !0;
            if (d) return d < 602;
            var e,
              t,
              n = new p(516),
              i = Array(516);
            for (e = 0; e < 516; e++)
              (t = e % 4), (n[e] = 515 - e), (i[e] = e - 2 * t + 3);
            for (
              n.sort(function (e, t) {
                return ((e / 4) | 0) - ((t / 4) | 0);
              }),
                e = 0;
              e < 516;
              e++
            )
              if (n[e] !== i[e]) return !0;
          });
      m(
        "sort",
        function (e) {
          var t = this;
          if ((void 0 !== e && s(e), x)) return v.call(t, e);
          f(t);
          var n,
            i = a(t.length),
            r = Array(i);
          for (n = 0; n < i; n++) r[n] = t[n];
          for (
            r = l(
              t,
              (function (e) {
                return function (t, n) {
                  return void 0 !== e
                    ? +e(t, n) || 0
                    : n != n
                    ? -1
                    : t != t
                    ? 1
                    : 0 === t && 0 === n
                    ? 1 / t > 0 && 1 / n < 0
                      ? 1
                      : -1
                    : t > n;
                };
              })(e)
            ),
              n = 0;
            n < i;
            n++
          )
            t[n] = r[n];
          return t;
        },
        !x || g
      );
    },
    2472: function (e, t, n) {
      n(9843)("Uint8", function (e) {
        return function (t, n, i) {
          return e(this, t, n, i);
        };
      });
    },
    3948: function (e, t, n) {
      var i = n(7854),
        r = n(8324),
        o = n(6992),
        s = n(8880),
        a = n(5112),
        l = a("iterator"),
        u = a("toStringTag"),
        c = o.values;
      for (var h in r) {
        var d = i[h],
          f = d && d.prototype;
        if (f) {
          if (f[l] !== c)
            try {
              s(f, l, c);
            } catch (e) {
              f[l] = c;
            }
          if ((f[u] || s(f, u, h), r[h]))
            for (var m in o)
              if (f[m] !== o[m])
                try {
                  s(f, m, o[m]);
                } catch (e) {
                  f[m] = o[m];
                }
        }
      }
    },
    1637: function (e, t, n) {
      "use strict";
      n(6992);
      var i = n(2109),
        r = n(5005),
        o = n(590),
        s = n(1320),
        a = n(2248),
        l = n(8003),
        u = n(4994),
        c = n(9909),
        h = n(5787),
        d = n(6656),
        f = n(9974),
        m = n(648),
        p = n(9670),
        v = n(111),
        g = n(1340),
        x = n(30),
        y = n(9114),
        D = n(8554),
        b = n(1246),
        _ = n(5112),
        w = r("fetch"),
        S = r("Request"),
        E = S && S.prototype,
        P = r("Headers"),
        C = _("iterator"),
        T = "URLSearchParams",
        F = "URLSearchParamsIterator",
        A = c.set,
        M = c.getterFor(T),
        O = c.getterFor(F),
        L = /\+/g,
        I = Array(4),
        R = function (e) {
          return (
            I[e - 1] ||
            (I[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
          );
        },
        k = function (e) {
          try {
            return decodeURIComponent(e);
          } catch (t) {
            return e;
          }
        },
        z = function (e) {
          var t = e.replace(L, " "),
            n = 4;
          try {
            return decodeURIComponent(t);
          } catch (e) {
            for (; n; ) t = t.replace(R(n--), k);
            return t;
          }
        },
        U = /[!'()~]|%20/g,
        j = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
        },
        B = function (e) {
          return j[e];
        },
        N = function (e) {
          return encodeURIComponent(e).replace(U, B);
        },
        V = function (e, t) {
          if (t)
            for (var n, i, r = t.split("&"), o = 0; o < r.length; )
              (n = r[o++]).length &&
                ((i = n.split("=")),
                e.push({ key: z(i.shift()), value: z(i.join("=")) }));
        },
        G = function (e) {
          (this.entries.length = 0), V(this.entries, e);
        },
        W = function (e, t) {
          if (e < t) throw TypeError("Not enough arguments");
        },
        H = u(
          function (e, t) {
            A(this, { type: F, iterator: D(M(e).entries), kind: t });
          },
          "Iterator",
          function () {
            var e = O(this),
              t = e.kind,
              n = e.iterator.next(),
              i = n.value;
            return (
              n.done ||
                (n.value =
                  "keys" === t
                    ? i.key
                    : "values" === t
                    ? i.value
                    : [i.key, i.value]),
              n
            );
          }
        ),
        q = function () {
          h(this, q, T);
          var e,
            t,
            n,
            i,
            r,
            o,
            s,
            a,
            l,
            u = arguments.length > 0 ? arguments[0] : void 0,
            c = this,
            f = [];
          if (
            (A(c, {
              type: T,
              entries: f,
              updateURL: function () {},
              updateSearchParams: G,
            }),
            void 0 !== u)
          )
            if (v(u))
              if ("function" == typeof (e = b(u)))
                for (n = (t = D(u, e)).next; !(i = n.call(t)).done; ) {
                  if (
                    (s = (o = (r = D(p(i.value))).next).call(r)).done ||
                    (a = o.call(r)).done ||
                    !o.call(r).done
                  )
                    throw TypeError("Expected sequence with length 2");
                  f.push({ key: g(s.value), value: g(a.value) });
                }
              else for (l in u) d(u, l) && f.push({ key: l, value: g(u[l]) });
            else
              V(
                f,
                "string" == typeof u
                  ? "?" === u.charAt(0)
                    ? u.slice(1)
                    : u
                  : g(u)
              );
        },
        Y = q.prototype;
      if (
        (a(
          Y,
          {
            append: function (e, t) {
              W(arguments.length, 2);
              var n = M(this);
              n.entries.push({ key: g(e), value: g(t) }), n.updateURL();
            },
            delete: function (e) {
              W(arguments.length, 1);
              for (
                var t = M(this), n = t.entries, i = g(e), r = 0;
                r < n.length;

              )
                n[r].key === i ? n.splice(r, 1) : r++;
              t.updateURL();
            },
            get: function (e) {
              W(arguments.length, 1);
              for (var t = M(this).entries, n = g(e), i = 0; i < t.length; i++)
                if (t[i].key === n) return t[i].value;
              return null;
            },
            getAll: function (e) {
              W(arguments.length, 1);
              for (
                var t = M(this).entries, n = g(e), i = [], r = 0;
                r < t.length;
                r++
              )
                t[r].key === n && i.push(t[r].value);
              return i;
            },
            has: function (e) {
              W(arguments.length, 1);
              for (var t = M(this).entries, n = g(e), i = 0; i < t.length; )
                if (t[i++].key === n) return !0;
              return !1;
            },
            set: function (e, t) {
              W(arguments.length, 1);
              for (
                var n,
                  i = M(this),
                  r = i.entries,
                  o = !1,
                  s = g(e),
                  a = g(t),
                  l = 0;
                l < r.length;
                l++
              )
                (n = r[l]).key === s &&
                  (o ? r.splice(l--, 1) : ((o = !0), (n.value = a)));
              o || r.push({ key: s, value: a }), i.updateURL();
            },
            sort: function () {
              var e,
                t,
                n,
                i = M(this),
                r = i.entries,
                o = r.slice();
              for (r.length = 0, n = 0; n < o.length; n++) {
                for (e = o[n], t = 0; t < n; t++)
                  if (r[t].key > e.key) {
                    r.splice(t, 0, e);
                    break;
                  }
                t === n && r.push(e);
              }
              i.updateURL();
            },
            forEach: function (e) {
              for (
                var t,
                  n = M(this).entries,
                  i = f(e, arguments.length > 1 ? arguments[1] : void 0, 3),
                  r = 0;
                r < n.length;

              )
                i((t = n[r++]).value, t.key, this);
            },
            keys: function () {
              return new H(this, "keys");
            },
            values: function () {
              return new H(this, "values");
            },
            entries: function () {
              return new H(this, "entries");
            },
          },
          { enumerable: !0 }
        ),
        s(Y, C, Y.entries),
        s(
          Y,
          "toString",
          function () {
            for (var e, t = M(this).entries, n = [], i = 0; i < t.length; )
              (e = t[i++]), n.push(N(e.key) + "=" + N(e.value));
            return n.join("&");
          },
          { enumerable: !0 }
        ),
        l(q, T),
        i({ global: !0, forced: !o }, { URLSearchParams: q }),
        !o && "function" == typeof P)
      ) {
        var Z = function (e) {
          if (v(e)) {
            var t,
              n = e.body;
            if (m(n) === T)
              return (
                (t = e.headers ? new P(e.headers) : new P()).has(
                  "content-type"
                ) ||
                  t.set(
                    "content-type",
                    "application/x-www-form-urlencoded;charset=UTF-8"
                  ),
                x(e, { body: y(0, String(n)), headers: y(0, t) })
              );
          }
          return e;
        };
        if (
          ("function" == typeof w &&
            i(
              { global: !0, enumerable: !0, forced: !0 },
              {
                fetch: function (e) {
                  return w(e, arguments.length > 1 ? Z(arguments[1]) : {});
                },
              }
            ),
          "function" == typeof S)
        ) {
          var $ = function (e) {
            return (
              h(this, $, "Request"),
              new S(e, arguments.length > 1 ? Z(arguments[1]) : {})
            );
          };
          (E.constructor = $),
            ($.prototype = E),
            i({ global: !0, forced: !0 }, { Request: $ });
        }
      }
      e.exports = { URLSearchParams: q, getState: M };
    },
    285: function (e, t, n) {
      "use strict";
      n(8783);
      var i,
        r = n(2109),
        o = n(9781),
        s = n(590),
        a = n(7854),
        l = n(6048),
        u = n(1320),
        c = n(5787),
        h = n(6656),
        d = n(1574),
        f = n(8457),
        m = n(8710).codeAt,
        p = n(3197),
        v = n(1340),
        g = n(8003),
        x = n(1637),
        y = n(9909),
        D = a.URL,
        b = x.URLSearchParams,
        _ = x.getState,
        w = y.set,
        S = y.getterFor("URL"),
        E = Math.floor,
        P = Math.pow,
        C = "Invalid scheme",
        T = "Invalid host",
        F = "Invalid port",
        A = /[A-Za-z]/,
        M = /[\d+-.A-Za-z]/,
        O = /\d/,
        L = /^0x/i,
        I = /^[0-7]+$/,
        R = /^\d+$/,
        k = /^[\dA-Fa-f]+$/,
        z = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
        U = /[\0\t\n\r #/:<>?@[\\\]^|]/,
        j = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,
        B = /[\t\n\r]/g,
        N = function (e, t) {
          var n, i, r;
          if ("[" == t.charAt(0)) {
            if ("]" != t.charAt(t.length - 1)) return T;
            if (!(n = G(t.slice(1, -1)))) return T;
            e.host = n;
          } else if (K(e)) {
            if (((t = p(t)), z.test(t))) return T;
            if (null === (n = V(t))) return T;
            e.host = n;
          } else {
            if (U.test(t)) return T;
            for (n = "", i = f(t), r = 0; r < i.length; r++) n += $(i[r], H);
            e.host = n;
          }
        },
        V = function (e) {
          var t,
            n,
            i,
            r,
            o,
            s,
            a,
            l = e.split(".");
          if (
            (l.length && "" == l[l.length - 1] && l.pop(), (t = l.length) > 4)
          )
            return e;
          for (n = [], i = 0; i < t; i++) {
            if ("" == (r = l[i])) return e;
            if (
              ((o = 10),
              r.length > 1 &&
                "0" == r.charAt(0) &&
                ((o = L.test(r) ? 16 : 8), (r = r.slice(8 == o ? 1 : 2))),
              "" === r)
            )
              s = 0;
            else {
              if (!(10 == o ? R : 8 == o ? I : k).test(r)) return e;
              s = parseInt(r, o);
            }
            n.push(s);
          }
          for (i = 0; i < t; i++)
            if (((s = n[i]), i == t - 1)) {
              if (s >= P(256, 5 - t)) return null;
            } else if (s > 255) return null;
          for (a = n.pop(), i = 0; i < n.length; i++) a += n[i] * P(256, 3 - i);
          return a;
        },
        G = function (e) {
          var t,
            n,
            i,
            r,
            o,
            s,
            a,
            l = [0, 0, 0, 0, 0, 0, 0, 0],
            u = 0,
            c = null,
            h = 0,
            d = function () {
              return e.charAt(h);
            };
          if (":" == d()) {
            if (":" != e.charAt(1)) return;
            (h += 2), (c = ++u);
          }
          for (; d(); ) {
            if (8 == u) return;
            if (":" != d()) {
              for (t = n = 0; n < 4 && k.test(d()); )
                (t = 16 * t + parseInt(d(), 16)), h++, n++;
              if ("." == d()) {
                if (0 == n) return;
                if (((h -= n), u > 6)) return;
                for (i = 0; d(); ) {
                  if (((r = null), i > 0)) {
                    if (!("." == d() && i < 4)) return;
                    h++;
                  }
                  if (!O.test(d())) return;
                  for (; O.test(d()); ) {
                    if (((o = parseInt(d(), 10)), null === r)) r = o;
                    else {
                      if (0 == r) return;
                      r = 10 * r + o;
                    }
                    if (r > 255) return;
                    h++;
                  }
                  (l[u] = 256 * l[u] + r), (2 != ++i && 4 != i) || u++;
                }
                if (4 != i) return;
                break;
              }
              if (":" == d()) {
                if ((h++, !d())) return;
              } else if (d()) return;
              l[u++] = t;
            } else {
              if (null !== c) return;
              h++, (c = ++u);
            }
          }
          if (null !== c)
            for (s = u - c, u = 7; 0 != u && s > 0; )
              (a = l[u]), (l[u--] = l[c + s - 1]), (l[c + --s] = a);
          else if (8 != u) return;
          return l;
        },
        W = function (e) {
          var t, n, i, r;
          if ("number" == typeof e) {
            for (t = [], n = 0; n < 4; n++)
              t.unshift(e % 256), (e = E(e / 256));
            return t.join(".");
          }
          if ("object" == typeof e) {
            for (
              t = "",
                i = (function (e) {
                  for (var t = null, n = 1, i = null, r = 0, o = 0; o < 8; o++)
                    0 !== e[o]
                      ? (r > n && ((t = i), (n = r)), (i = null), (r = 0))
                      : (null === i && (i = o), ++r);
                  return r > n && ((t = i), (n = r)), t;
                })(e),
                n = 0;
              n < 8;
              n++
            )
              (r && 0 === e[n]) ||
                (r && (r = !1),
                i === n
                  ? ((t += n ? ":" : "::"), (r = !0))
                  : ((t += e[n].toString(16)), n < 7 && (t += ":")));
            return "[" + t + "]";
          }
          return e;
        },
        H = {},
        q = d({}, H, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
        Y = d({}, q, { "#": 1, "?": 1, "{": 1, "}": 1 }),
        Z = d({}, Y, {
          "/": 1,
          ":": 1,
          ";": 1,
          "=": 1,
          "@": 1,
          "[": 1,
          "\\": 1,
          "]": 1,
          "^": 1,
          "|": 1,
        }),
        $ = function (e, t) {
          var n = m(e, 0);
          return n > 32 && n < 127 && !h(t, e) ? e : encodeURIComponent(e);
        },
        X = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
        K = function (e) {
          return h(X, e.scheme);
        },
        Q = function (e) {
          return "" != e.username || "" != e.password;
        },
        J = function (e) {
          return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
        },
        ee = function (e, t) {
          var n;
          return (
            2 == e.length &&
            A.test(e.charAt(0)) &&
            (":" == (n = e.charAt(1)) || (!t && "|" == n))
          );
        },
        te = function (e) {
          var t;
          return (
            e.length > 1 &&
            ee(e.slice(0, 2)) &&
            (2 == e.length ||
              "/" === (t = e.charAt(2)) ||
              "\\" === t ||
              "?" === t ||
              "#" === t)
          );
        },
        ne = function (e) {
          var t = e.path,
            n = t.length;
          !n || ("file" == e.scheme && 1 == n && ee(t[0], !0)) || t.pop();
        },
        ie = function (e) {
          return "." === e || "%2e" === e.toLowerCase();
        },
        re = {},
        oe = {},
        se = {},
        ae = {},
        le = {},
        ue = {},
        ce = {},
        he = {},
        de = {},
        fe = {},
        me = {},
        pe = {},
        ve = {},
        ge = {},
        xe = {},
        ye = {},
        De = {},
        be = {},
        _e = {},
        we = {},
        Se = {},
        Ee = function (e, t, n, r) {
          var o,
            s,
            a,
            l,
            u,
            c = n || re,
            d = 0,
            m = "",
            p = !1,
            v = !1,
            g = !1;
          for (
            n ||
              ((e.scheme = ""),
              (e.username = ""),
              (e.password = ""),
              (e.host = null),
              (e.port = null),
              (e.path = []),
              (e.query = null),
              (e.fragment = null),
              (e.cannotBeABaseURL = !1),
              (t = t.replace(j, ""))),
              t = t.replace(B, ""),
              o = f(t);
            d <= o.length;

          ) {
            switch (((s = o[d]), c)) {
              case re:
                if (!s || !A.test(s)) {
                  if (n) return C;
                  c = se;
                  continue;
                }
                (m += s.toLowerCase()), (c = oe);
                break;
              case oe:
                if (s && (M.test(s) || "+" == s || "-" == s || "." == s))
                  m += s.toLowerCase();
                else {
                  if (":" != s) {
                    if (n) return C;
                    (m = ""), (c = se), (d = 0);
                    continue;
                  }
                  if (
                    n &&
                    (K(e) != h(X, m) ||
                      ("file" == m && (Q(e) || null !== e.port)) ||
                      ("file" == e.scheme && !e.host))
                  )
                    return;
                  if (((e.scheme = m), n))
                    return void (
                      K(e) &&
                      X[e.scheme] == e.port &&
                      (e.port = null)
                    );
                  (m = ""),
                    "file" == e.scheme
                      ? (c = ge)
                      : K(e) && r && r.scheme == e.scheme
                      ? (c = ae)
                      : K(e)
                      ? (c = he)
                      : "/" == o[d + 1]
                      ? ((c = le), d++)
                      : ((e.cannotBeABaseURL = !0), e.path.push(""), (c = _e));
                }
                break;
              case se:
                if (!r || (r.cannotBeABaseURL && "#" != s)) return C;
                if (r.cannotBeABaseURL && "#" == s) {
                  (e.scheme = r.scheme),
                    (e.path = r.path.slice()),
                    (e.query = r.query),
                    (e.fragment = ""),
                    (e.cannotBeABaseURL = !0),
                    (c = Se);
                  break;
                }
                c = "file" == r.scheme ? ge : ue;
                continue;
              case ae:
                if ("/" != s || "/" != o[d + 1]) {
                  c = ue;
                  continue;
                }
                (c = de), d++;
                break;
              case le:
                if ("/" == s) {
                  c = fe;
                  break;
                }
                c = be;
                continue;
              case ue:
                if (((e.scheme = r.scheme), s == i))
                  (e.username = r.username),
                    (e.password = r.password),
                    (e.host = r.host),
                    (e.port = r.port),
                    (e.path = r.path.slice()),
                    (e.query = r.query);
                else if ("/" == s || ("\\" == s && K(e))) c = ce;
                else if ("?" == s)
                  (e.username = r.username),
                    (e.password = r.password),
                    (e.host = r.host),
                    (e.port = r.port),
                    (e.path = r.path.slice()),
                    (e.query = ""),
                    (c = we);
                else {
                  if ("#" != s) {
                    (e.username = r.username),
                      (e.password = r.password),
                      (e.host = r.host),
                      (e.port = r.port),
                      (e.path = r.path.slice()),
                      e.path.pop(),
                      (c = be);
                    continue;
                  }
                  (e.username = r.username),
                    (e.password = r.password),
                    (e.host = r.host),
                    (e.port = r.port),
                    (e.path = r.path.slice()),
                    (e.query = r.query),
                    (e.fragment = ""),
                    (c = Se);
                }
                break;
              case ce:
                if (!K(e) || ("/" != s && "\\" != s)) {
                  if ("/" != s) {
                    (e.username = r.username),
                      (e.password = r.password),
                      (e.host = r.host),
                      (e.port = r.port),
                      (c = be);
                    continue;
                  }
                  c = fe;
                } else c = de;
                break;
              case he:
                if (((c = de), "/" != s || "/" != m.charAt(d + 1))) continue;
                d++;
                break;
              case de:
                if ("/" != s && "\\" != s) {
                  c = fe;
                  continue;
                }
                break;
              case fe:
                if ("@" == s) {
                  p && (m = "%40" + m), (p = !0), (a = f(m));
                  for (var x = 0; x < a.length; x++) {
                    var y = a[x];
                    if (":" != y || g) {
                      var D = $(y, Z);
                      g ? (e.password += D) : (e.username += D);
                    } else g = !0;
                  }
                  m = "";
                } else if (
                  s == i ||
                  "/" == s ||
                  "?" == s ||
                  "#" == s ||
                  ("\\" == s && K(e))
                ) {
                  if (p && "" == m) return "Invalid authority";
                  (d -= f(m).length + 1), (m = ""), (c = me);
                } else m += s;
                break;
              case me:
              case pe:
                if (n && "file" == e.scheme) {
                  c = ye;
                  continue;
                }
                if (":" != s || v) {
                  if (
                    s == i ||
                    "/" == s ||
                    "?" == s ||
                    "#" == s ||
                    ("\\" == s && K(e))
                  ) {
                    if (K(e) && "" == m) return T;
                    if (n && "" == m && (Q(e) || null !== e.port)) return;
                    if ((l = N(e, m))) return l;
                    if (((m = ""), (c = De), n)) return;
                    continue;
                  }
                  "[" == s ? (v = !0) : "]" == s && (v = !1), (m += s);
                } else {
                  if ("" == m) return T;
                  if ((l = N(e, m))) return l;
                  if (((m = ""), (c = ve), n == pe)) return;
                }
                break;
              case ve:
                if (!O.test(s)) {
                  if (
                    s == i ||
                    "/" == s ||
                    "?" == s ||
                    "#" == s ||
                    ("\\" == s && K(e)) ||
                    n
                  ) {
                    if ("" != m) {
                      var b = parseInt(m, 10);
                      if (b > 65535) return F;
                      (e.port = K(e) && b === X[e.scheme] ? null : b), (m = "");
                    }
                    if (n) return;
                    c = De;
                    continue;
                  }
                  return F;
                }
                m += s;
                break;
              case ge:
                if (((e.scheme = "file"), "/" == s || "\\" == s)) c = xe;
                else {
                  if (!r || "file" != r.scheme) {
                    c = be;
                    continue;
                  }
                  if (s == i)
                    (e.host = r.host),
                      (e.path = r.path.slice()),
                      (e.query = r.query);
                  else if ("?" == s)
                    (e.host = r.host),
                      (e.path = r.path.slice()),
                      (e.query = ""),
                      (c = we);
                  else {
                    if ("#" != s) {
                      te(o.slice(d).join("")) ||
                        ((e.host = r.host), (e.path = r.path.slice()), ne(e)),
                        (c = be);
                      continue;
                    }
                    (e.host = r.host),
                      (e.path = r.path.slice()),
                      (e.query = r.query),
                      (e.fragment = ""),
                      (c = Se);
                  }
                }
                break;
              case xe:
                if ("/" == s || "\\" == s) {
                  c = ye;
                  break;
                }
                r &&
                  "file" == r.scheme &&
                  !te(o.slice(d).join("")) &&
                  (ee(r.path[0], !0)
                    ? e.path.push(r.path[0])
                    : (e.host = r.host)),
                  (c = be);
                continue;
              case ye:
                if (s == i || "/" == s || "\\" == s || "?" == s || "#" == s) {
                  if (!n && ee(m)) c = be;
                  else if ("" == m) {
                    if (((e.host = ""), n)) return;
                    c = De;
                  } else {
                    if ((l = N(e, m))) return l;
                    if (("localhost" == e.host && (e.host = ""), n)) return;
                    (m = ""), (c = De);
                  }
                  continue;
                }
                m += s;
                break;
              case De:
                if (K(e)) {
                  if (((c = be), "/" != s && "\\" != s)) continue;
                } else if (n || "?" != s)
                  if (n || "#" != s) {
                    if (s != i && ((c = be), "/" != s)) continue;
                  } else (e.fragment = ""), (c = Se);
                else (e.query = ""), (c = we);
                break;
              case be:
                if (
                  s == i ||
                  "/" == s ||
                  ("\\" == s && K(e)) ||
                  (!n && ("?" == s || "#" == s))
                ) {
                  if (
                    (".." === (u = (u = m).toLowerCase()) ||
                    "%2e." === u ||
                    ".%2e" === u ||
                    "%2e%2e" === u
                      ? (ne(e),
                        "/" == s || ("\\" == s && K(e)) || e.path.push(""))
                      : ie(m)
                      ? "/" == s || ("\\" == s && K(e)) || e.path.push("")
                      : ("file" == e.scheme &&
                          !e.path.length &&
                          ee(m) &&
                          (e.host && (e.host = ""), (m = m.charAt(0) + ":")),
                        e.path.push(m)),
                    (m = ""),
                    "file" == e.scheme && (s == i || "?" == s || "#" == s))
                  )
                    for (; e.path.length > 1 && "" === e.path[0]; )
                      e.path.shift();
                  "?" == s
                    ? ((e.query = ""), (c = we))
                    : "#" == s && ((e.fragment = ""), (c = Se));
                } else m += $(s, Y);
                break;
              case _e:
                "?" == s
                  ? ((e.query = ""), (c = we))
                  : "#" == s
                  ? ((e.fragment = ""), (c = Se))
                  : s != i && (e.path[0] += $(s, H));
                break;
              case we:
                n || "#" != s
                  ? s != i &&
                    ("'" == s && K(e)
                      ? (e.query += "%27")
                      : (e.query += "#" == s ? "%23" : $(s, H)))
                  : ((e.fragment = ""), (c = Se));
                break;
              case Se:
                s != i && (e.fragment += $(s, q));
            }
            d++;
          }
        },
        Pe = function (e) {
          var t,
            n,
            i = c(this, Pe, "URL"),
            r = arguments.length > 1 ? arguments[1] : void 0,
            s = v(e),
            a = w(i, { type: "URL" });
          if (void 0 !== r)
            if (r instanceof Pe) t = S(r);
            else if ((n = Ee((t = {}), v(r)))) throw TypeError(n);
          if ((n = Ee(a, s, null, t))) throw TypeError(n);
          var l = (a.searchParams = new b()),
            u = _(l);
          u.updateSearchParams(a.query),
            (u.updateURL = function () {
              a.query = String(l) || null;
            }),
            o ||
              ((i.href = Te.call(i)),
              (i.origin = Fe.call(i)),
              (i.protocol = Ae.call(i)),
              (i.username = Me.call(i)),
              (i.password = Oe.call(i)),
              (i.host = Le.call(i)),
              (i.hostname = Ie.call(i)),
              (i.port = Re.call(i)),
              (i.pathname = ke.call(i)),
              (i.search = ze.call(i)),
              (i.searchParams = Ue.call(i)),
              (i.hash = je.call(i)));
        },
        Ce = Pe.prototype,
        Te = function () {
          var e = S(this),
            t = e.scheme,
            n = e.username,
            i = e.password,
            r = e.host,
            o = e.port,
            s = e.path,
            a = e.query,
            l = e.fragment,
            u = t + ":";
          return (
            null !== r
              ? ((u += "//"),
                Q(e) && (u += n + (i ? ":" + i : "") + "@"),
                (u += W(r)),
                null !== o && (u += ":" + o))
              : "file" == t && (u += "//"),
            (u += e.cannotBeABaseURL
              ? s[0]
              : s.length
              ? "/" + s.join("/")
              : ""),
            null !== a && (u += "?" + a),
            null !== l && (u += "#" + l),
            u
          );
        },
        Fe = function () {
          var e = S(this),
            t = e.scheme,
            n = e.port;
          if ("blob" == t)
            try {
              return new Pe(t.path[0]).origin;
            } catch (e) {
              return "null";
            }
          return "file" != t && K(e)
            ? t + "://" + W(e.host) + (null !== n ? ":" + n : "")
            : "null";
        },
        Ae = function () {
          return S(this).scheme + ":";
        },
        Me = function () {
          return S(this).username;
        },
        Oe = function () {
          return S(this).password;
        },
        Le = function () {
          var e = S(this),
            t = e.host,
            n = e.port;
          return null === t ? "" : null === n ? W(t) : W(t) + ":" + n;
        },
        Ie = function () {
          var e = S(this).host;
          return null === e ? "" : W(e);
        },
        Re = function () {
          var e = S(this).port;
          return null === e ? "" : String(e);
        },
        ke = function () {
          var e = S(this),
            t = e.path;
          return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "";
        },
        ze = function () {
          var e = S(this).query;
          return e ? "?" + e : "";
        },
        Ue = function () {
          return S(this).searchParams;
        },
        je = function () {
          var e = S(this).fragment;
          return e ? "#" + e : "";
        },
        Be = function (e, t) {
          return { get: e, set: t, configurable: !0, enumerable: !0 };
        };
      if (
        (o &&
          l(Ce, {
            href: Be(Te, function (e) {
              var t = S(this),
                n = v(e),
                i = Ee(t, n);
              if (i) throw TypeError(i);
              _(t.searchParams).updateSearchParams(t.query);
            }),
            origin: Be(Fe),
            protocol: Be(Ae, function (e) {
              var t = S(this);
              Ee(t, v(e) + ":", re);
            }),
            username: Be(Me, function (e) {
              var t = S(this),
                n = f(v(e));
              if (!J(t)) {
                t.username = "";
                for (var i = 0; i < n.length; i++) t.username += $(n[i], Z);
              }
            }),
            password: Be(Oe, function (e) {
              var t = S(this),
                n = f(v(e));
              if (!J(t)) {
                t.password = "";
                for (var i = 0; i < n.length; i++) t.password += $(n[i], Z);
              }
            }),
            host: Be(Le, function (e) {
              var t = S(this);
              t.cannotBeABaseURL || Ee(t, v(e), me);
            }),
            hostname: Be(Ie, function (e) {
              var t = S(this);
              t.cannotBeABaseURL || Ee(t, v(e), pe);
            }),
            port: Be(Re, function (e) {
              var t = S(this);
              J(t) || ("" == (e = v(e)) ? (t.port = null) : Ee(t, e, ve));
            }),
            pathname: Be(ke, function (e) {
              var t = S(this);
              t.cannotBeABaseURL || ((t.path = []), Ee(t, v(e), De));
            }),
            search: Be(ze, function (e) {
              var t = S(this);
              "" == (e = v(e))
                ? (t.query = null)
                : ("?" == e.charAt(0) && (e = e.slice(1)),
                  (t.query = ""),
                  Ee(t, e, we)),
                _(t.searchParams).updateSearchParams(t.query);
            }),
            searchParams: Be(Ue),
            hash: Be(je, function (e) {
              var t = S(this);
              "" != (e = v(e))
                ? ("#" == e.charAt(0) && (e = e.slice(1)),
                  (t.fragment = ""),
                  Ee(t, e, Se))
                : (t.fragment = null);
            }),
          }),
        u(
          Ce,
          "toJSON",
          function () {
            return Te.call(this);
          },
          { enumerable: !0 }
        ),
        u(
          Ce,
          "toString",
          function () {
            return Te.call(this);
          },
          { enumerable: !0 }
        ),
        D)
      ) {
        var Ne = D.createObjectURL,
          Ve = D.revokeObjectURL;
        Ne &&
          u(Pe, "createObjectURL", function (e) {
            return Ne.apply(D, arguments);
          }),
          Ve &&
            u(Pe, "revokeObjectURL", function (e) {
              return Ve.apply(D, arguments);
            });
      }
      g(Pe, "URL"), r({ global: !0, forced: !s, sham: !o }, { URL: Pe });
    },
    6337: function () {
      !(function () {
        "use strict";
        if ("object" == typeof window)
          if (
            "IntersectionObserver" in window &&
            "IntersectionObserverEntry" in window &&
            "intersectionRatio" in window.IntersectionObserverEntry.prototype
          )
            "isIntersecting" in window.IntersectionObserverEntry.prototype ||
              Object.defineProperty(
                window.IntersectionObserverEntry.prototype,
                "isIntersecting",
                {
                  get: function () {
                    return this.intersectionRatio > 0;
                  },
                }
              );
          else {
            var e = (function (e) {
                for (var t = window.document, n = r(t); n; )
                  n = r((t = n.ownerDocument));
                return t;
              })(),
              t = [],
              n = null,
              i = null;
            (s.prototype.THROTTLE_TIMEOUT = 100),
              (s.prototype.POLL_INTERVAL = null),
              (s.prototype.USE_MUTATION_OBSERVER = !0),
              (s._setupCrossOriginUpdater = function () {
                return (
                  n ||
                    (n = function (e, n) {
                      (i =
                        e && n
                          ? h(e, n)
                          : {
                              top: 0,
                              bottom: 0,
                              left: 0,
                              right: 0,
                              width: 0,
                              height: 0,
                            }),
                        t.forEach(function (e) {
                          e._checkForIntersections();
                        });
                    }),
                  n
                );
              }),
              (s._resetCrossOriginUpdater = function () {
                (n = null), (i = null);
              }),
              (s.prototype.observe = function (e) {
                if (
                  !this._observationTargets.some(function (t) {
                    return t.element == e;
                  })
                ) {
                  if (!e || 1 != e.nodeType)
                    throw new Error("target must be an Element");
                  this._registerInstance(),
                    this._observationTargets.push({ element: e, entry: null }),
                    this._monitorIntersections(e.ownerDocument),
                    this._checkForIntersections();
                }
              }),
              (s.prototype.unobserve = function (e) {
                (this._observationTargets = this._observationTargets.filter(
                  function (t) {
                    return t.element != e;
                  }
                )),
                  this._unmonitorIntersections(e.ownerDocument),
                  0 == this._observationTargets.length &&
                    this._unregisterInstance();
              }),
              (s.prototype.disconnect = function () {
                (this._observationTargets = []),
                  this._unmonitorAllIntersections(),
                  this._unregisterInstance();
              }),
              (s.prototype.takeRecords = function () {
                var e = this._queuedEntries.slice();
                return (this._queuedEntries = []), e;
              }),
              (s.prototype._initThresholds = function (e) {
                var t = e || [0];
                return (
                  Array.isArray(t) || (t = [t]),
                  t.sort().filter(function (e, t, n) {
                    if ("number" != typeof e || isNaN(e) || e < 0 || e > 1)
                      throw new Error(
                        "threshold must be a number between 0 and 1 inclusively"
                      );
                    return e !== n[t - 1];
                  })
                );
              }),
              (s.prototype._parseRootMargin = function (e) {
                var t = (e || "0px").split(/\s+/).map(function (e) {
                  var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                  if (!t)
                    throw new Error(
                      "rootMargin must be specified in pixels or percent"
                    );
                  return { value: parseFloat(t[1]), unit: t[2] };
                });
                return (
                  (t[1] = t[1] || t[0]),
                  (t[2] = t[2] || t[0]),
                  (t[3] = t[3] || t[1]),
                  t
                );
              }),
              (s.prototype._monitorIntersections = function (t) {
                var n = t.defaultView;
                if (n && -1 == this._monitoringDocuments.indexOf(t)) {
                  var i = this._checkForIntersections,
                    o = null,
                    s = null;
                  this.POLL_INTERVAL
                    ? (o = n.setInterval(i, this.POLL_INTERVAL))
                    : (a(n, "resize", i, !0),
                      a(t, "scroll", i, !0),
                      this.USE_MUTATION_OBSERVER &&
                        "MutationObserver" in n &&
                        (s = new n.MutationObserver(i)).observe(t, {
                          attributes: !0,
                          childList: !0,
                          characterData: !0,
                          subtree: !0,
                        })),
                    this._monitoringDocuments.push(t),
                    this._monitoringUnsubscribes.push(function () {
                      var e = t.defaultView;
                      e && (o && e.clearInterval(o), l(e, "resize", i, !0)),
                        l(t, "scroll", i, !0),
                        s && s.disconnect();
                    });
                  var u =
                    (this.root && (this.root.ownerDocument || this.root)) || e;
                  if (t != u) {
                    var c = r(t);
                    c && this._monitorIntersections(c.ownerDocument);
                  }
                }
              }),
              (s.prototype._unmonitorIntersections = function (t) {
                var n = this._monitoringDocuments.indexOf(t);
                if (-1 != n) {
                  var i =
                    (this.root && (this.root.ownerDocument || this.root)) || e;
                  if (
                    !this._observationTargets.some(function (e) {
                      var n = e.element.ownerDocument;
                      if (n == t) return !0;
                      for (; n && n != i; ) {
                        var o = r(n);
                        if ((n = o && o.ownerDocument) == t) return !0;
                      }
                      return !1;
                    })
                  ) {
                    var o = this._monitoringUnsubscribes[n];
                    if (
                      (this._monitoringDocuments.splice(n, 1),
                      this._monitoringUnsubscribes.splice(n, 1),
                      o(),
                      t != i)
                    ) {
                      var s = r(t);
                      s && this._unmonitorIntersections(s.ownerDocument);
                    }
                  }
                }
              }),
              (s.prototype._unmonitorAllIntersections = function () {
                var e = this._monitoringUnsubscribes.slice(0);
                (this._monitoringDocuments.length = 0),
                  (this._monitoringUnsubscribes.length = 0);
                for (var t = 0; t < e.length; t++) e[t]();
              }),
              (s.prototype._checkForIntersections = function () {
                if (this.root || !n || i) {
                  var e = this._rootIsInDom(),
                    t = e
                      ? this._getRootRect()
                      : {
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          width: 0,
                          height: 0,
                        };
                  this._observationTargets.forEach(function (i) {
                    var r = i.element,
                      s = u(r),
                      a = this._rootContainsTarget(r),
                      l = i.entry,
                      c =
                        e &&
                        a &&
                        this._computeTargetAndRootIntersection(r, s, t),
                      h = null;
                    this._rootContainsTarget(r)
                      ? (n && !this.root) || (h = t)
                      : (h = {
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          width: 0,
                          height: 0,
                        });
                    var d = (i.entry = new o({
                      time:
                        window.performance &&
                        performance.now &&
                        performance.now(),
                      target: r,
                      boundingClientRect: s,
                      rootBounds: h,
                      intersectionRect: c,
                    }));
                    l
                      ? e && a
                        ? this._hasCrossedThreshold(l, d) &&
                          this._queuedEntries.push(d)
                        : l && l.isIntersecting && this._queuedEntries.push(d)
                      : this._queuedEntries.push(d);
                  }, this),
                    this._queuedEntries.length &&
                      this._callback(this.takeRecords(), this);
                }
              }),
              (s.prototype._computeTargetAndRootIntersection = function (
                t,
                r,
                o
              ) {
                if ("none" != window.getComputedStyle(t).display) {
                  for (
                    var s, a, l, c, d, m, p, v, g = r, x = f(t), y = !1;
                    !y && x;

                  ) {
                    var D = null,
                      b = 1 == x.nodeType ? window.getComputedStyle(x) : {};
                    if ("none" == b.display) return null;
                    if (x == this.root || 9 == x.nodeType)
                      if (((y = !0), x == this.root || x == e))
                        n && !this.root
                          ? !i || (0 == i.width && 0 == i.height)
                            ? ((x = null), (D = null), (g = null))
                            : (D = i)
                          : (D = o);
                      else {
                        var _ = f(x),
                          w = _ && u(_),
                          S =
                            _ &&
                            this._computeTargetAndRootIntersection(_, w, o);
                        w && S
                          ? ((x = _), (D = h(w, S)))
                          : ((x = null), (g = null));
                      }
                    else {
                      var E = x.ownerDocument;
                      x != E.body &&
                        x != E.documentElement &&
                        "visible" != b.overflow &&
                        (D = u(x));
                    }
                    if (
                      (D &&
                        ((s = D),
                        (a = g),
                        (l = void 0),
                        (c = void 0),
                        (d = void 0),
                        (m = void 0),
                        (p = void 0),
                        (v = void 0),
                        (l = Math.max(s.top, a.top)),
                        (c = Math.min(s.bottom, a.bottom)),
                        (d = Math.max(s.left, a.left)),
                        (m = Math.min(s.right, a.right)),
                        (v = c - l),
                        (g =
                          ((p = m - d) >= 0 &&
                            v >= 0 && {
                              top: l,
                              bottom: c,
                              left: d,
                              right: m,
                              width: p,
                              height: v,
                            }) ||
                          null)),
                      !g)
                    )
                      break;
                    x = x && f(x);
                  }
                  return g;
                }
              }),
              (s.prototype._getRootRect = function () {
                var t;
                if (this.root && !m(this.root)) t = u(this.root);
                else {
                  var n = m(this.root) ? this.root : e,
                    i = n.documentElement,
                    r = n.body;
                  t = {
                    top: 0,
                    left: 0,
                    right: i.clientWidth || r.clientWidth,
                    width: i.clientWidth || r.clientWidth,
                    bottom: i.clientHeight || r.clientHeight,
                    height: i.clientHeight || r.clientHeight,
                  };
                }
                return this._expandRectByRootMargin(t);
              }),
              (s.prototype._expandRectByRootMargin = function (e) {
                var t = this._rootMarginValues.map(function (t, n) {
                    return "px" == t.unit
                      ? t.value
                      : (t.value * (n % 2 ? e.width : e.height)) / 100;
                  }),
                  n = {
                    top: e.top - t[0],
                    right: e.right + t[1],
                    bottom: e.bottom + t[2],
                    left: e.left - t[3],
                  };
                return (
                  (n.width = n.right - n.left), (n.height = n.bottom - n.top), n
                );
              }),
              (s.prototype._hasCrossedThreshold = function (e, t) {
                var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                  i = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                if (n !== i)
                  for (var r = 0; r < this.thresholds.length; r++) {
                    var o = this.thresholds[r];
                    if (o == n || o == i || o < n != o < i) return !0;
                  }
              }),
              (s.prototype._rootIsInDom = function () {
                return !this.root || d(e, this.root);
              }),
              (s.prototype._rootContainsTarget = function (t) {
                var n =
                  (this.root && (this.root.ownerDocument || this.root)) || e;
                return d(n, t) && (!this.root || n == t.ownerDocument);
              }),
              (s.prototype._registerInstance = function () {
                t.indexOf(this) < 0 && t.push(this);
              }),
              (s.prototype._unregisterInstance = function () {
                var e = t.indexOf(this);
                -1 != e && t.splice(e, 1);
              }),
              (window.IntersectionObserver = s),
              (window.IntersectionObserverEntry = o);
          }
        function r(e) {
          try {
            return (e.defaultView && e.defaultView.frameElement) || null;
          } catch (e) {
            return null;
          }
        }
        function o(e) {
          (this.time = e.time),
            (this.target = e.target),
            (this.rootBounds = c(e.rootBounds)),
            (this.boundingClientRect = c(e.boundingClientRect)),
            (this.intersectionRect = c(
              e.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0,
              }
            )),
            (this.isIntersecting = !!e.intersectionRect);
          var t = this.boundingClientRect,
            n = t.width * t.height,
            i = this.intersectionRect,
            r = i.width * i.height;
          this.intersectionRatio = n
            ? Number((r / n).toFixed(4))
            : this.isIntersecting
            ? 1
            : 0;
        }
        function s(e, t) {
          var n,
            i,
            r,
            o = t || {};
          if ("function" != typeof e)
            throw new Error("callback must be a function");
          if (o.root && 1 != o.root.nodeType && 9 != o.root.nodeType)
            throw new Error("root must be a Document or Element");
          (this._checkForIntersections =
            ((n = this._checkForIntersections.bind(this)),
            (i = this.THROTTLE_TIMEOUT),
            (r = null),
            function () {
              r ||
                (r = setTimeout(function () {
                  n(), (r = null);
                }, i));
            })),
            (this._callback = e),
            (this._observationTargets = []),
            (this._queuedEntries = []),
            (this._rootMarginValues = this._parseRootMargin(o.rootMargin)),
            (this.thresholds = this._initThresholds(o.threshold)),
            (this.root = o.root || null),
            (this.rootMargin = this._rootMarginValues
              .map(function (e) {
                return e.value + e.unit;
              })
              .join(" ")),
            (this._monitoringDocuments = []),
            (this._monitoringUnsubscribes = []);
        }
        function a(e, t, n, i) {
          "function" == typeof e.addEventListener
            ? e.addEventListener(t, n, i || !1)
            : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n);
        }
        function l(e, t, n, i) {
          "function" == typeof e.removeEventListener
            ? e.removeEventListener(t, n, i || !1)
            : "function" == typeof e.detatchEvent &&
              e.detatchEvent("on" + t, n);
        }
        function u(e) {
          var t;
          try {
            t = e.getBoundingClientRect();
          } catch (e) {}
          return t
            ? ((t.width && t.height) ||
                (t = {
                  top: t.top,
                  right: t.right,
                  bottom: t.bottom,
                  left: t.left,
                  width: t.right - t.left,
                  height: t.bottom - t.top,
                }),
              t)
            : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
        }
        function c(e) {
          return !e || "x" in e
            ? e
            : {
                top: e.top,
                y: e.top,
                bottom: e.bottom,
                left: e.left,
                x: e.left,
                right: e.right,
                width: e.width,
                height: e.height,
              };
        }
        function h(e, t) {
          var n = t.top - e.top,
            i = t.left - e.left;
          return {
            top: n,
            left: i,
            height: t.height,
            width: t.width,
            bottom: n + t.height,
            right: i + t.width,
          };
        }
        function d(e, t) {
          for (var n = t; n; ) {
            if (n == e) return !0;
            n = f(n);
          }
          return !1;
        }
        function f(t) {
          var n = t.parentNode;
          return 9 == t.nodeType && t != e
            ? r(t)
            : (n && n.assignedSlot && (n = n.assignedSlot.parentNode),
              n && 11 == n.nodeType && n.host ? n.host : n);
        }
        function m(e) {
          return e && 9 === e.nodeType;
        }
      })();
    },
    7030: function () {},
    8439: function (e, t, n) {
      "use strict";
      function i() {
        if (!(this instanceof i)) return new i();
        (this.size = 0),
          (this.uid = 0),
          (this.selectors = []),
          (this.selectorObjects = {}),
          (this.indexes = Object.create(this.indexes)),
          (this.activeIndexes = []);
      }
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = window.document.documentElement,
        o =
          r.matches ||
          r.webkitMatchesSelector ||
          r.mozMatchesSelector ||
          r.oMatchesSelector ||
          r.msMatchesSelector;
      (i.prototype.matchesSelector = function (e, t) {
        return o.call(e, t);
      }),
        (i.prototype.querySelectorAll = function (e, t) {
          return t.querySelectorAll(e);
        }),
        (i.prototype.indexes = []);
      var s = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
      i.prototype.indexes.push({
        name: "ID",
        selector: function (e) {
          var t;
          if ((t = e.match(s))) return t[0].slice(1);
        },
        element: function (e) {
          if (e.id) return [e.id];
        },
      });
      var a = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
      i.prototype.indexes.push({
        name: "CLASS",
        selector: function (e) {
          var t;
          if ((t = e.match(a))) return t[0].slice(1);
        },
        element: function (e) {
          var t = e.className;
          if (t) {
            if ("string" == typeof t) return t.split(/\s/);
            if ("object" == typeof t && "baseVal" in t)
              return t.baseVal.split(/\s/);
          }
        },
      });
      var l,
        u = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
      i.prototype.indexes.push({
        name: "TAG",
        selector: function (e) {
          var t;
          if ((t = e.match(u))) return t[0].toUpperCase();
        },
        element: function (e) {
          return [e.nodeName.toUpperCase()];
        },
      }),
        (i.prototype.indexes.default = {
          name: "UNIVERSAL",
          selector: function () {
            return !0;
          },
          element: function () {
            return [!0];
          },
        }),
        (l =
          "function" == typeof window.Map
            ? window.Map
            : (function () {
                function e() {
                  this.map = {};
                }
                return (
                  (e.prototype.get = function (e) {
                    return this.map[e + " "];
                  }),
                  (e.prototype.set = function (e, t) {
                    this.map[e + " "] = t;
                  }),
                  e
                );
              })());
      var c =
        /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
      function h(e, t) {
        var n,
          i,
          r,
          o,
          s,
          a,
          l = (e = e.slice(0).concat(e.default)).length,
          u = t,
          h = [];
        do {
          if ((c.exec(""), (r = c.exec(u)) && ((u = r[3]), r[2] || !u)))
            for (n = 0; n < l; n++)
              if ((s = (a = e[n]).selector(r[1]))) {
                for (i = h.length, o = !1; i--; )
                  if (h[i].index === a && h[i].key === s) {
                    o = !0;
                    break;
                  }
                o || h.push({ index: a, key: s });
                break;
              }
        } while (r);
        return h;
      }
      function d(e, t) {
        var n, i, r;
        for (n = 0, i = e.length; n < i; n++)
          if (((r = e[n]), t.isPrototypeOf(r))) return r;
      }
      function f(e, t) {
        return e.id - t.id;
      }
      (i.prototype.logDefaultIndexUsed = function () {}),
        (i.prototype.add = function (e, t) {
          var n,
            i,
            r,
            o,
            s,
            a,
            u,
            c,
            f = this.activeIndexes,
            m = this.selectors,
            p = this.selectorObjects;
          if ("string" == typeof e) {
            for (
              p[(n = { id: this.uid++, selector: e, data: t }).id] = n,
                u = h(this.indexes, e),
                i = 0;
              i < u.length;
              i++
            )
              (o = (c = u[i]).key),
                (s = d(f, (r = c.index))) ||
                  (((s = Object.create(r)).map = new l()), f.push(s)),
                r === this.indexes.default && this.logDefaultIndexUsed(n),
                (a = s.map.get(o)) || ((a = []), s.map.set(o, a)),
                a.push(n);
            this.size++, m.push(e);
          }
        }),
        (i.prototype.remove = function (e, t) {
          if ("string" == typeof e) {
            var n,
              i,
              r,
              o,
              s,
              a,
              l,
              u,
              c = this.activeIndexes,
              d = (this.selectors = []),
              f = this.selectorObjects,
              m = {},
              p = 1 === arguments.length;
            for (n = h(this.indexes, e), r = 0; r < n.length; r++)
              for (i = n[r], o = c.length; o--; )
                if (((a = c[o]), i.index.isPrototypeOf(a))) {
                  if ((l = a.map.get(i.key)))
                    for (s = l.length; s--; )
                      (u = l[s]).selector !== e ||
                        (!p && u.data !== t) ||
                        (l.splice(s, 1), (m[u.id] = !0));
                  break;
                }
            for (r in m) delete f[r], this.size--;
            for (r in f) d.push(f[r].selector);
          }
        }),
        (i.prototype.queryAll = function (e) {
          if (!this.selectors.length) return [];
          var t,
            n,
            i,
            r,
            o,
            s,
            a,
            l,
            u = {},
            c = [],
            h = this.querySelectorAll(this.selectors.join(", "), e);
          for (t = 0, i = h.length; t < i; t++)
            for (o = h[t], n = 0, r = (s = this.matches(o)).length; n < r; n++)
              u[(l = s[n]).id]
                ? (a = u[l.id])
                : ((a = {
                    id: l.id,
                    selector: l.selector,
                    data: l.data,
                    elements: [],
                  }),
                  (u[l.id] = a),
                  c.push(a)),
                a.elements.push(o);
          return c.sort(f);
        }),
        (i.prototype.matches = function (e) {
          if (!e) return [];
          var t,
            n,
            i,
            r,
            o,
            s,
            a,
            l,
            u,
            c,
            h,
            d = this.activeIndexes,
            m = {},
            p = [];
          for (t = 0, r = d.length; t < r; t++)
            if ((l = (a = d[t]).element(e)))
              for (n = 0, o = l.length; n < o; n++)
                if ((u = a.map.get(l[n])))
                  for (i = 0, s = u.length; i < s; i++)
                    !m[(h = (c = u[i]).id)] &&
                      this.matchesSelector(e, c.selector) &&
                      ((m[h] = !0), p.push(c));
          return p.sort(f);
        });
    },
    7542: function (e) {
      !(function (t) {
        "use strict";
        var n = function (e) {
          var t = {
              browser: {
                fullName: "",
                name: "",
                version: "",
                majorVersion: null,
                minorVersion: null,
                patchVersion: null,
                engine: "",
              },
              os: {
                fullName: "",
                name: "",
                version: "",
                versionName: "",
                versionAltNames: [],
                majorVersion: null,
                minorVersion: null,
                patchVersion: null,
              },
              features: { bw: !1, mobile: !1, tv: !1, proxy: !1 },
            },
            n = {
              browser: [
                {
                  test: ["SailfishBrowser"],
                  browser: {
                    fullName: "Sailfish Browser",
                    name: "sailfishbrowser",
                    engine: "gecko",
                    $version: { search: "SailfishBrowser/" },
                  },
                  features: { mobile: !0 },
                },
                {
                  test: ["Edge/"],
                  browser: {
                    fullName: "Edge",
                    name: "edge",
                    engine: "edgehtml",
                    $version: { search: "Edge/" },
                  },
                },
                {
                  test: ["Edg/"],
                  browser: {
                    fullName: "Edge",
                    name: "edge",
                    engine: "webkit",
                    $version: { search: "Edg/" },
                  },
                },
                {
                  test: ["MSIE"],
                  browser: {
                    fullName: "Internet Explorer",
                    name: "ie",
                    engine: "trident",
                    $version: { search: "MSIE " },
                  },
                },
                {
                  test: ["Trident"],
                  browser: {
                    fullName: "Internet Explorer",
                    name: "ie",
                    engine: "trident",
                    $version: { search: "rv:" },
                  },
                },
                {
                  test: ["OPR/"],
                  browser: {
                    fullName: "Opera",
                    name: "opera",
                    engine: "webkit",
                    $version: { search: "OPR/" },
                  },
                },
                {
                  test: ["UCBrowser"],
                  browser: {
                    fullName: "UC Browser",
                    name: "ucbrowser",
                    engine: "webkit",
                    $version: { search: "UCBrowser/" },
                  },
                },
                {
                  test: ["YaBrowser"],
                  browser: {
                    fullName: "Yandex Browser",
                    name: "yabrowser",
                    engine: "webkit",
                    $version: { search: "YaBrowser/" },
                  },
                },
                {
                  test: ["Chrome"],
                  browser: {
                    fullName: "Chrome",
                    name: "chrome",
                    engine: "webkit",
                    $version: { search: "Chrome/" },
                  },
                },
                {
                  test: ["Firefox"],
                  browser: {
                    fullName: "Firefox",
                    name: "firefox",
                    engine: "gecko",
                    $version: { search: "Firefox/" },
                  },
                },
                {
                  test: ["NokiaBrowser"],
                  browser: {
                    fullName: "Nokia Browser",
                    name: "nokiabrowser",
                    engine: "webkit",
                    $version: { search: "NokiaBrowser/" },
                  },
                  features: { mobile: !0 },
                },
                {
                  test: ["Opera Mini", "Presto"],
                  browser: {
                    fullName: "Opera Mini",
                    name: "operamini",
                    engine: "presto",
                    $version: { search: "Version/" },
                  },
                  features: { mobile: !0, proxy: !0 },
                },
                {
                  test: ["Opera Mini", "WebKit"],
                  browser: {
                    fullName: "Opera Mini",
                    name: "operamini",
                    engine: "webkit",
                  },
                  features: { mobile: !0, proxy: !0 },
                },
                {
                  test: ["Opera"],
                  browser: {
                    fullName: "Opera",
                    name: "opera",
                    engine: "presto",
                    $version: { search: "Version/" },
                  },
                },
                {
                  test: ["OviBrowser"],
                  browser: {
                    fullName: "Ovi Browser",
                    name: "ovi",
                    engine: "gecko",
                    $version: { search: "OviBrowser/" },
                  },
                  features: { mobile: !0, proxy: !0 },
                },
                {
                  test: ["CriOS/"],
                  browser: {
                    fullName: "Chrome",
                    name: "chrome",
                    engine: "webkit",
                    $version: { search: "CriOS/" },
                  },
                },
                {
                  test: ["Coast/"],
                  browser: {
                    fullName: "Opera Coast",
                    name: "coast",
                    engine: "webkit",
                    $version: { search: "Coast/" },
                  },
                },
                {
                  test: [
                    "Safari",
                    "Version/",
                    /(iPhone|iPod|iPad|Macintosh|Windows)/,
                  ],
                  browser: {
                    fullName: "Safari",
                    name: "safari",
                    engine: "webkit",
                    $version: { search: "Version/" },
                  },
                },
                { test: ["WebKit"], browser: { engine: "webkit" } },
                { test: ["Gecko/"], browser: { engine: "gecko" } },
              ],
              os: [
                {
                  test: ["Sailfish"],
                  os: { fullName: "Sailfish OS", name: "sailfish" },
                  features: { mobile: !0 },
                },
                {
                  test: ["Windows Phone"],
                  os: {
                    fullName: "Windows Phone",
                    name: "winphone",
                    $version: { search: "Windows Phone " },
                  },
                  features: { mobile: !0 },
                },
                {
                  test: ["Windows"],
                  os: {
                    fullName: "Windows",
                    name: "win",
                    $version: {
                      search: "Windows NT ",
                      names: {
                        "10.0": "10",
                        6.3: "8.1",
                        6.2: "8",
                        6.1: "7",
                        "6.0": "Vista",
                        5.2: "XP",
                        5.1: "XP",
                        5.01: "2000",
                        "5.0": "2000",
                      },
                      altNames: { 5.2: ["Server 2003"] },
                    },
                  },
                },
                {
                  test: ["Macintosh", "OS X"],
                  os: {
                    fullName: "macOS",
                    name: "osx",
                    $version: {
                      search: /OS X /,
                      names: {
                        10.6: "Snow Leopard",
                        10.7: "Lion",
                        10.8: "Mountain Lion",
                        10.9: "Mavericks",
                        "10.10": "Yosemite",
                        10.11: "El Capitan",
                        10.12: "Sierra",
                        10.13: "High Sierra",
                        10.14: "Mojave",
                        10.15: "Catalina",
                        "11.0": "Big Sur",
                      },
                    },
                  },
                },
                {
                  test: ["Ubuntu"],
                  os: { fullName: "Ubuntu", name: "ubuntu" },
                },
                {
                  test: ["Fedora"],
                  os: {
                    fullName: "Fedora",
                    name: "fedora",
                    $version: {
                      search: "Fedora/",
                      names: {
                        20: "Heisenbug",
                        19: "Schrödinger's Cat",
                        18: "Spherical Cow",
                        17: "Beefy Miracle",
                        16: "Verne",
                        15: "Lovelock",
                        14: "Laughlin",
                        13: "Goddard",
                        12: "Constantine",
                        11: "Leonidas",
                        10: "Cambridge",
                        9: "Sulphur",
                        8: "Werewolf",
                        7: "Moonshine",
                      },
                    },
                  },
                },
                {
                  test: ["Kindle"],
                  os: {
                    fullName: "Kindle",
                    name: "kindle",
                    $version: { search: "Kindle/" },
                  },
                  features: { bw: !0, mobile: !0 },
                },
                {
                  test: [/(BlackBerry|BB\d+)/],
                  os: {
                    fullName: "BlackBerry",
                    name: "blackberry",
                    $version: { search: "Version/" },
                  },
                  features: { mobile: !0 },
                },
                {
                  test: ["Symbian"],
                  os: { fullName: "Symbian", name: "symbian" },
                  features: { mobile: !0 },
                },
                {
                  test: ["Series40"],
                  os: { fullName: "Symbian", name: "symbian" },
                  features: { mobile: !0 },
                },
                {
                  test: ["PlayStation Vita"],
                  os: { fullName: "PlayStation Vita", name: "psvita" },
                  features: { mobile: !0 },
                },
                {
                  test: [/playstation/i],
                  os: {
                    fullName: "PlayStation",
                    name: "playstation",
                    $version: { search: /playstation\s/i },
                  },
                  features: { tv: !0 },
                },
                {
                  test: ["Nintendo DSi"],
                  os: { fullName: "Nintendo DSi", name: "dsi" },
                  features: { mobile: !0 },
                },
                {
                  test: ["New Nintendo 3DS"],
                  os: { fullName: "New Nintendo 3DS", name: "n3ds" },
                  browser: { engine: "webkit" },
                  features: { mobile: !0 },
                },
                {
                  test: ["Nintendo 3DS"],
                  os: { fullName: "Nintendo 3DS", name: "3ds" },
                  browser: { engine: "webkit" },
                  features: { mobile: !0 },
                },
                {
                  test: ["Viera"],
                  os: { fullName: "Viera", name: "viera" },
                  browser: { engine: "webkit" },
                  features: { tv: !0 },
                },
                { test: ["SonyDTV"], features: { tv: !0 } },
                {
                  test: ["Android"],
                  os: {
                    fullName: "Android",
                    name: "android",
                    $version: { search: "Android " },
                  },
                  features: { mobile: !0 },
                },
                {
                  test: [/iPhone|iPod|iPad/],
                  os: {
                    fullName: "iOS",
                    name: "ios",
                    $version: { search: "OS " },
                  },
                  features: { mobile: !0 },
                },
              ],
              features: [
                { test: [/mobile/i], features: { mobile: !0 } },
                { test: [/smart-{0,1}tv/i], features: { tv: !0 } },
              ],
            };
          if (!e) return t;
          function i(t) {
            for (var n = 0; n < t.length; n++) {
              for (var i = !0, o = 0; o < t[n].test.length; o++)
                if (t[n].test[o] instanceof RegExp) {
                  if (!t[n].test[o].test(e)) {
                    i = !1;
                    break;
                  }
                } else if (-1 == e.indexOf(t[n].test[o])) {
                  i = !1;
                  break;
                }
              if (i) {
                r(t[n]);
                break;
              }
            }
          }
          function r(e) {
            for (var i in n)
              if (n.hasOwnProperty(i) && e[i]) {
                if (e[i].$version) {
                  var r = o(e[i].$version.search);
                  if (r) {
                    var s = r.split("."),
                      a = e[i].$version.names,
                      l = e[i].$version.altNames;
                    if (
                      ((e[i].version = r),
                      s[0] && (e[i].majorVersion = parseInt(s[0])),
                      s[1] && (e[i].minorVersion = parseInt(s[1])),
                      s[2] && (e[i].patchVersion = parseInt(s[2])),
                      a)
                    )
                      for (var u, c = [], h = 0; h < s.length; h++)
                        c.push(s[h]),
                          a[(u = c.join("."))] && (e[i].versionName = a[u]),
                          l && l[u] && (e[i].versionAltNames = l[u]);
                  }
                }
                for (var d in e[i])
                  e[i].hasOwnProperty(d) && "$" !== d[0] && (t[i][d] = e[i][d]);
              }
          }
          function o(t) {
            var n;
            if (t instanceof RegExp) {
              if (!(n = (e.match(t) || [])[0])) return;
            } else n = t;
            var i = e.indexOf(n);
            if (-1 != i) {
              var r = e.substring(i + n.length),
                o = /^(\d+(\.|_)){0,2}\d+/.exec(r);
              if (o) return o[0].replace(/_/g, ".");
            }
          }
          return (
            (function () {
              for (var e in n) i(n[e]);
            })(),
            t
          );
        };
        e.exports ? (e.exports = n) : (t.Sniffer = n);
      })(this);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [938, 941], function () {
      return t(3364), t(7030);
    });
    e.O();
  },
]);
