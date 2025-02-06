!(function () {
  var e = {
      2853: function (e, t, n) {
        "use strict";
        n.d(t, {
          Mi: function () {
            return E;
          },
          gZ: function () {
            return g;
          },
          nP: function () {
            return w;
          },
        });
        var r = n(885),
          a = n(1413),
          o = n(7762),
          i = n(4165),
          l = n(5861),
          s = n(7313),
          c = n(8642),
          u = n(1852),
          d = n(1826),
          f = n(450),
          p = n(1054),
          m = n(2325),
          h = n(3704);
        u.Ue("AppWrapperState");
        var v = !1,
          g = function () {
            (v = !0), E("parent", "init");
          },
          y = {},
          b = {},
          w = function (e) {
            return (b = e);
          },
          E = function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {};
            return new Promise(
              (function () {
                var a = (0, l.Z)(
                  (0, i.Z)().mark(function a(o) {
                    var l, s, c, u;
                    return (0, i.Z)().wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!(0, h.b9)()) {
                              a.next = 2;
                              break;
                            }
                            return a.abrupt("return", o(null));
                          case 2:
                            if (!f.wU() || !r.mock) {
                              a.next = 4;
                              break;
                            }
                            return a.abrupt("return", o(r.mock));
                          case 4:
                            return (
                              (l = window.GetParentResourceName
                                ? window.GetParentResourceName()
                                : "onx-tuning"),
                              (s = "https://".concat(
                                l,
                                "/onx-ui:doNuiRequest"
                              )),
                              (a.next = 8),
                              fetch(s, {
                                method: "POST",
                                headers: {
                                  "Content-Type":
                                    "application/json; charset=UTF-8",
                                },
                                body: JSON.stringify({
                                  action: t,
                                  app: e,
                                  data: n,
                                }),
                              })
                            );
                          case 8:
                            return (c = a.sent), (a.next = 11), c.json();
                          case 11:
                            (u = a.sent), o(u.body);
                          case 13:
                          case "end":
                            return a.stop();
                        }
                    }, a);
                  })
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })()
            );
          },
          x = [],
          C = function (e, t, n, r) {
            if (y[e])
              return "open" === t
                ? ("function" === typeof y[e].onOpen && y[e].onOpen(n, r),
                  void (x.includes(e) || x.push(e)))
                : "close" === t
                ? ("function" === typeof y[e].onClose && y[e].onClose(n, r),
                  void (x = x.filter(function (t) {
                    return t !== e;
                  })))
                : void (
                    "event" !== t ||
                    ("function" === typeof y[e].onEvent && y[e].onEvent(n, r))
                  );
            console.warn(
              "app not found for action",
              e,
              t,
              JSON.stringify({ app: e, action: t, data: n })
            );
          },
          S = (function () {
            var e = (0, l.Z)(
              (0, i.Z)().mark(function e(t, n, r) {
                var a,
                  o = arguments;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((a =
                            o.length > 3 && void 0 !== o[3]
                              ? o[3]
                              : { debug: !1 }),
                          v)
                        ) {
                          e.next = 4;
                          break;
                        }
                        return (
                          (e.next = 4),
                          (0, c.xl)(
                            50,
                            function () {
                              return v;
                            },
                            3e5
                          )
                        );
                      case 4:
                        if (!1 !== b[t]) {
                          e.next = 7;
                          break;
                        }
                        return (
                          (e.next = 7),
                          (0, c.xl)(
                            50,
                            function () {
                              return !!b[t];
                            },
                            3e5
                          )
                        );
                      case 7:
                        C(t, n, r, a);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n, r) {
              return e.apply(this, arguments);
            };
          })(),
          k = (function () {
            var e = (0, l.Z)(
              (0, i.Z)().mark(function e(t) {
                var n, r, a, o, l, s, c;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t && t.data && "onx-ui" === t.data.source) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        if (
                          ((n = t.data),
                          (r = n.app),
                          (a = n.action),
                          (o = n.data),
                          (l = n.args),
                          "main" !== r)
                        ) {
                          e.next = 7;
                          break;
                        }
                        return (
                          (c = {
                            app: r,
                            data: o,
                            action:
                              null !==
                                (s =
                                  null === o || void 0 === o
                                    ? void 0
                                    : o.action) && void 0 !== s
                                ? s
                                : "",
                            args: null !== l && void 0 !== l ? l : {},
                          }),
                          d.Nu("main-event", c),
                          e.abrupt("return")
                        );
                      case 7:
                        S(r, a, o, l);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          T = (function () {
            var e = (0, l.Z)(
              (0, i.Z)().mark(function e() {
                var t,
                  n,
                  r,
                  a,
                  l,
                  s,
                  c,
                  u,
                  d,
                  f,
                  p,
                  m = arguments;
                return (0, i.Z)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t = m.length > 0 && void 0 !== m[0] && m[0]),
                            (n = m.length > 1 && void 0 !== m[1] && m[1]),
                            (r = []),
                            (a = (0, o.Z)(x)),
                            (e.prev = 4),
                            a.s();
                        case 6:
                          if ((l = a.n()).done) {
                            e.next = 21;
                            break;
                          }
                          if (
                            ((u = l.value),
                            !t ||
                              "function" !==
                                typeof (null === (s = y[u]) || void 0 === s
                                  ? void 0
                                  : s.onEscape))
                          ) {
                            e.next = 17;
                            break;
                          }
                          return (e.next = 11), y[u].onEscape();
                        case 11:
                          if (
                            ((d = e.sent), (f = d.cancel), (p = d.focus), !f)
                          ) {
                            e.next = 16;
                            break;
                          }
                          return e.abrupt("continue", 19);
                        case 16:
                          "undefined" !== typeof p && (n = p);
                        case 17:
                          r.push(u),
                            "function" ===
                              typeof (null === (c = y[u]) || void 0 === c
                                ? void 0
                                : c.onClose) && y[u].onClose({ _fromEsc: t });
                        case 19:
                          e.next = 6;
                          break;
                        case 21:
                          e.next = 26;
                          break;
                        case 23:
                          (e.prev = 23), (e.t0 = e.catch(4)), a.e(e.t0);
                        case 26:
                          return (e.prev = 26), a.f(), e.finish(26);
                        case 29:
                          if (r.length) {
                            e.next = 31;
                            break;
                          }
                          return e.abrupt("return");
                        case 31:
                          (x = x.filter(function (e) {
                            return !r.includes(e);
                          })),
                            E("main", "close-application", {
                              apps: r,
                              keepFocus: n,
                              _fromEsc: t,
                            });
                        case 33:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[4, 23, 26, 29]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        window.addEventListener("message", k, !1),
          document.addEventListener("keyup", function (e) {
            27 === (e || window.event).keyCode && ((0, h.b9)() || T(!0));
          });
        var R = {};
        window.addEventListener("socket:client_message_received", function (e) {
          var t = e.data,
            n = t.action,
            r = t.payload;
          if (R[n]) {
            var a,
              i = (0, o.Z)(R[n]);
            try {
              for (i.s(); !(a = i.n()).done; ) {
                (0, a.value)(r);
              }
            } catch (l) {
              i.e(l);
            } finally {
              i.f();
            }
          }
        });
        var D = function (e) {
            var t = {
                opacity: 0,
                pointerEvents: "none",
                position: "fixed",
                width: 1,
                height: 1,
                left: -1,
                top: -1,
              },
              n = s.useRef(null),
              r = s.useRef(null),
              a = function (e) {
                return function (t) {
                  t.preventDefault(), t.stopPropagation(), e.current.focus();
                };
              },
              o = function (t) {
                e.hasFocus || (t.preventDefault(), t.stopPropagation());
              },
              i = s.useRef(!1);
            return (
              s.useEffect(
                function () {
                  i.current !== e.hasFocus &&
                    ((i.current = e.hasFocus), n.current.focus());
                },
                [e.hasFocus]
              ),
              s.createElement(
                s.Fragment,
                null,
                s.createElement("input", {
                  onFocus: a(r),
                  style: t,
                  tabIndex: 0,
                }),
                s.createElement("input", {
                  onKeyDown: o,
                  ref: n,
                  style: t,
                  tabIndex: -1,
                }),
                e.children,
                s.createElement("input", {
                  onKeyDown: o,
                  ref: r,
                  style: t,
                  tabIndex: -1,
                }),
                s.createElement("input", {
                  onFocus: a(n),
                  style: t,
                  tabIndex: 0,
                })
              )
            );
          },
          A = function (e) {
            var t,
              n,
              r = u.eJ("AppWrapperState", {
                active: null !== (t = e.active) && void 0 !== t && t,
                name: e.name,
                status: "none",
              }),
              o = u.VH("AppWrapperState"),
              i = s.useId();
            (s.useEffect(function () {
              return function () {
                y[e.name] = null;
              };
            }, []),
            e.name) ||
              console.error(
                "app id must be unique, not provided: ",
                null !== (n = e.name) && void 0 !== n ? n : ""
              );
            return (
              y[e.name] ||
                (y[e.name] = (0, a.Z)(
                  (0, a.Z)({}, e),
                  {},
                  {
                    onOpen: function (t) {
                      var n = (
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {}
                      ).debug;
                      (!(void 0 !== n && n) || (e.showing && f.wU())) &&
                        u.Vx(r, { data: t, active: !0, status: "open" });
                    },
                    onClose: function (t) {
                      var n = (
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {}
                      ).debug;
                      (!(void 0 !== n && n) || (e.showing && f.wU())) &&
                        u.Vx(r, { data: t, status: "closed" });
                    },
                    onOpenOrig: function (t) {
                      e.onOpen && e.onOpen(t);
                    },
                    onCloseOrig: function (t) {
                      u.Vx(r, { active: !1 }), e.onClose && e.onClose(t);
                    },
                  }
                )),
              (b[e.name] = !0),
              s.createElement(
                o,
                { value: r },
                s.createElement(
                  "div",
                  {
                    id: f.Wf() || f.wU() ? "app-wrapper-".concat(e.name) : i,
                    style: {
                      display: e.alwaysDisplay || r.active ? "block" : "none",
                      overflow: "hidden",
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100vh",
                      width: "100vw",
                      pointerEvents: "none",
                    },
                  },
                  s.createElement(D, { hasFocus: r.active }, e.children)
                )
              )
            );
          };
        (A.Body = function (e) {
          var t,
            n,
            o,
            d,
            f,
            h,
            v,
            g,
            b = u.U2("AppWrapperState"),
            w = s.useRef(b);
          w.current = b;
          var E = s.useState("closed"),
            x = (0, r.Z)(E, 2),
            C = x[0],
            S = x[1],
            k = s.useRef(null),
            T = s.useRef(!0),
            R = (0, p.V)(),
            D = (0, m.c0)(
              null !== (t = e.containerRef) && void 0 !== t ? t : k,
              { innerSnap: !0 }
            ),
            A = (0, m.VI)(
              (0, l.Z)(
                (0, i.Z)().mark(function t() {
                  var n, r;
                  return (0, i.Z)().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ("none" !== (n = w.current).status) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt("return");
                        case 3:
                          if (((r = y[n.name]), "open" !== n.status)) {
                            t.next = 10;
                            break;
                          }
                          T.current &&
                            e.onFirstLoad &&
                            ((T.current = !1), e.onFirstLoad()),
                            S("pre-open"),
                            setTimeout(function () {
                              S("open"), r.onOpenOrig(n.data);
                            }, 32),
                            (t.next = 16);
                          break;
                        case 10:
                          if ("closed" !== n.status) {
                            t.next = 16;
                            break;
                          }
                          if ((S("closed"), !e.closeDelay)) {
                            t.next = 15;
                            break;
                          }
                          return (t.next = 15), (0, c.NT)(e.closeDelay);
                        case 15:
                          r.onCloseOrig(n.data);
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )
            );
          s.useEffect(
            function () {
              A();
            },
            [b.status]
          );
          var F =
            null ===
              (n = (null !== (o = e.containerRef) && void 0 !== o ? o : k)
                .current) || void 0 === n
              ? void 0
              : n.getBoundingClientRect();
          return s.createElement(
            R,
            {
              value: {
                containerRef:
                  null !== (d = e.containerRef) && void 0 !== d ? d : k,
              },
            },
            s.createElement(
              "div",
              {
                onClick: e.onClick,
                onMouseMove: e.onMouseMove,
                onMouseEnter: e.onMouseEnter,
                onMouseLeave: e.onMouseLeave,
                ref: null !== (f = e.containerRef) && void 0 !== f ? f : k,
                style: (0, a.Z)(
                  (0, a.Z)(
                    (0, a.Z)(
                      (0, a.Z)({}, e.draggable ? { position: "absolute" } : {}),
                      e.style
                    ),
                    "open" === C && null !== (h = e.styleOnOpen) && void 0 !== h
                      ? h
                      : {}
                  ),
                  D.pos
                ),
              },
              "function" === typeof e.children
                ? e.children({ open: "open" === C })
                : e.children,
              e.draggable &&
                s.createElement(
                  "div",
                  (0, a.Z)(
                    (0, a.Z)({}, D.funcs),
                    {},
                    {
                      style: {
                        pointerEvents: "auto",
                        cursor: "move",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height:
                          null !== (v = e.draggableHeight) && void 0 !== v
                            ? v
                            : "5vh",
                        width:
                          null !==
                            (g =
                              null === F || void 0 === F ? void 0 : F.width) &&
                          void 0 !== g
                            ? g
                            : 0,
                        zIndex: 1e3,
                      },
                    }
                  )
                )
            )
          );
        }),
          (t.ZP = A);
      },
      3704: function (e, t, n) {
        "use strict";
        n.d(t, {
          ZP: function () {
            return Ot;
          },
          b9: function () {
            return Ft;
          },
        });
        var r = n(7762),
          a = n(885),
          o = n(1413),
          i = n(4165),
          l = n(5861),
          s = n(7313),
          c = n(450),
          u = n(1826),
          d = n(6573);
        let f = {},
          p = {};
        const m = (e, t, n) => {
            const r = n ? `?${v(n)}` : "",
              a = f[e] ?? e,
              o = 0 === a.indexOf("https://"),
              [i, l] = a.split(o ? "https://" : "http://");
            return `http${o ? "s" : ""}://${`${l}/${t}`.replace(
              /\/\/+/g,
              "/"
            )}${r}`;
          },
          h = (e, { withCookies: t }) => {
            let n;
            return (
              (n =
                e?.data?.data && e?.data?.status
                  ? e.data
                  : { data: e?.data ?? {}, status: e?.status ?? 500 }),
              t
                ? {
                    response: n,
                    cookies: ((r = e.headers), r["set-cookie"] ?? []),
                  }
                : n
            );
            var r;
          },
          v = (e) => new URLSearchParams(e).toString(),
          g = (e, t) => (
            t(),
            {
              get: (
                t,
                {
                  axios: n = {},
                  headers: r = {},
                  query: a = null,
                  withCookies: o = !1,
                } = {}
              ) =>
                (async (
                  e,
                  t,
                  {
                    axios: n = {},
                    headers: r = {},
                    query: a = null,
                    withCookies: o = !1,
                  } = {}
                ) => {
                  const i = m(e, t, a),
                    l = {
                      headers: {
                        "Content-Type": "application/json",
                        ...(p[e] ?? {}),
                        ...r,
                      },
                      ...n,
                    };
                  let s;
                  try {
                    s = await d.Z.get(i, l);
                  } catch (c) {
                    s = c.response;
                  }
                  return h(s, { withCookies: o });
                })(e, t, { axios: n, headers: r, query: a, withCookies: o }),
              post: (
                t,
                n,
                {
                  axios: r = {},
                  headers: a = {},
                  query: o = null,
                  withCookies: i = !1,
                } = {}
              ) =>
                (async (
                  e,
                  t,
                  n,
                  {
                    axios: r = {},
                    headers: a = {},
                    query: o = null,
                    withCookies: i = !1,
                  } = {}
                ) => {
                  const l = m(e, t, o),
                    s = {
                      headers: {
                        "Content-Type": "application/json",
                        ...(p[e] ?? {}),
                        ...a,
                      },
                      ...r,
                    };
                  let c;
                  try {
                    c = await d.Z.post(l, n ?? {}, s);
                  } catch (u) {
                    c = u.response;
                  }
                  return h(c, { withCookies: i });
                })(e, t, n, { axios: r, headers: a, query: o, withCookies: i }),
            }
          ),
          y = (e, t, n) =>
            g(e, () => {
              var r;
              ((e, t) => {
                f[e] = t;
              })(e, t),
                (r = n),
                (p[e] = r);
            });
        var b,
          w = function (e) {
            return new URLSearchParams(window.location.search).get(e);
          },
          E = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = w("api_url") || c.U2("api.url");
            y(
              "game_server",
              n,
              (0, o.Z)({ authorization: "Player ".concat(e) }, t)
            );
          },
          x = function () {
            var e = w("auth_url") || c.U2("auth.url");
            b = y("auth", e, {});
          },
          C = n(2325),
          S = n(9842),
          k = n(7201),
          T = n(6071);
        const R = s.forwardRef((e, t) =>
          s.createElement(k.Z, { ref: t, ...e })
        );
        R.Stack = s.forwardRef((e, t) =>
          s.createElement(T.Z, {
            ref: t,
            ...e,
            sx: { width: "100%", ...(e.sx ?? {}) },
          })
        );
        var D = R,
          A = n(4930),
          F = n(9500);
        const P = ({
          children: e = null,
          trim: t = !1,
          maxWidth: n,
          ...r
        } = {}) => {
          const a = {
            ...r.style,
            ...(t
              ? {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textWrap: "nowrap",
                  whiteSpace: "nowrap",
                }
              : {}),
            ...(n ? { maxWidth: n } : {}),
          };
          return s.createElement(F.ZP, { level: "body1", ...r, style: a }, e);
        };
        (P.H1 = (e) => s.createElement(P, { level: "h3", ...e }, e.children)),
          (P.H2 = (e) => s.createElement(P, { level: "h5", ...e }, e.children)),
          (P.H3 = (e) => s.createElement(P, { level: "h6", ...e }, e.children)),
          (P.Body2 = (e) =>
            s.createElement(P, { level: "body2", ...e }, e.children)),
          (P.Label = ({ active: e = !1, ...t } = {}) => {
            const n = (0, C.cI)();
            return s.createElement(
              P,
              { ...t, sx: { ...t.sx, color: t.active ? "white" : n.label() } },
              t.children
            );
          });
        var _ = P;
        var Z = (e) =>
            s.createElement(
              D.Stack,
              {
                justifyContent: "center",
                alignItems: "center",
                sx: { padding: "1rem", flexGrow: 1 },
              },
              s.createElement(A.Z, {
                iconFull: e.icon ?? "fa-face-frown",
                extra: "fa-4x",
              }),
              s.createElement(_, { sx: { marginTop: "1rem" } }, e.text1),
              s.createElement(_.Body2, null, e.text2)
            ),
          I = n(1852);
        const B = {},
          L = {},
          M = (e = "default") => 1 === B[e]?.socket?.readyState,
          j = async (
            e,
            t = null,
            {
              name: n = "default",
              onClose: r = () => {},
              retryTimer: a = 1e3,
              pingTimer: o = 15e3,
              resumeQueue: i = () => !0,
              timeout: l = 6e4,
            } = {}
          ) => {
            const s = new WebSocket(`${e}${t ?? ""}`);
            (s.onerror = (e) => console.error("socket error: ", e)),
              (s.onmessage = ({ data: e }) => {
                try {
                  const { event: t, data: r } = JSON.parse(e.toString()),
                    a = ["socket", `socket:${n}`];
                  if (("default" !== n && a.shift(), "init" === t))
                    for (const e of a) {
                      const t = new Event(`${e}:init`);
                      (t.data = { name: n, ...r }), window.dispatchEvent(t);
                    }
                  else if ("client_message_response" === t) {
                    const { payload: e, request_id: t } = r;
                    if (!L[`id_${t}`]) return;
                    L[`id_${t}`].resolve(e);
                  } else if ("client_message_receive" === t) {
                    const e = new Event("socket:client_message_received");
                    (e.data = r), window.dispatchEvent(e);
                    for (const t of a) {
                      const e = new Event(`${t}:${r.action}`);
                      (e.data = r.payload), window.dispatchEvent(e);
                    }
                  }
                } catch (t) {}
              });
            let c = !1;
            const u = setInterval(() => {
              M(n) && V("ping", {}, { name: n });
            }, o);
            (s.onclose = () => {
              (c = !0),
                console.error("socket disconnected, attempting retry..."),
                clearInterval(u),
                r(n),
                setTimeout(async () => {
                  try {
                    await j(e, t, {
                      name: n,
                      onClose: r,
                      pingTimer: o,
                      resumeQueue: i,
                      retryTimer: a,
                      timeout: l,
                    });
                  } catch (s) {}
                }, a);
            }),
              (B[n] = {
                path: t,
                resumeQueue: i,
                socket: s,
                url: e,
                ready: !1,
              });
            let d = !1;
            const f = setTimeout(() => {
              d = !0;
            }, l);
            for (; !d && !c && !M(); )
              await new Promise((e) => setTimeout(e, 100));
            if ((clearTimeout(f), (B[n].ready = !d && !c && M()), B[n].ready)) {
              const e = ["socket", `socket:${n}`];
              "default" !== n && e.shift();
              for (const t of e) {
                const e = new Event(`${t}:connected`);
                (e.data = { name: n }), window.dispatchEvent(e);
              }
            } else d && s.close();
            return B[n].ready;
          };
        let H = 0;
        const O = (
            e,
            t = {},
            { name: n = "default", respond: r = !1 } = {}
          ) => {
            if (
              ((H += 1),
              G(
                n,
                JSON.stringify({
                  event: "client_message_send",
                  data: { action: e, payload: t, respond: r, request_id: H },
                })
              ),
              !r)
            )
              return null;
            return new Promise((e, t) => {
              L[`id_${H}`] = { resolve: e, reject: t };
            });
          },
          N = async (e, t = {}, { name: n = "default" } = {}) =>
            O(e, t, { name: n, respond: !0 }),
          V = (e, t = {}, { name: n = "default" } = {}) => {
            G(n, JSON.stringify({ event: e, data: t }));
          };
        let U = [],
          W = !1;
        const G = async (e, t) => {
          if (!B[e]) return;
          const n = B[e].socket;
          U.push({ name: e, socket: n, message: t }),
            (async () => {
              if (!W) {
                for (W = !0; U.length; ) {
                  const e = [];
                  for (let t = 0; t < U.length; t += 1) {
                    const n = U[t],
                      { name: r, message: a } = n;
                    if (!M(r)) {
                      await new Promise((e) => setTimeout(e, 100));
                      continue;
                    }
                    const o = B[r]?.socket;
                    o
                      ? B[r].resumeQueue(r, a) && (o.send(a), e.push(t))
                      : await new Promise((e) => setTimeout(e, 100));
                  }
                  (U = U.filter((t, n) => !e.includes(n))),
                    await new Promise((e) => setTimeout(e, 100));
                }
                W = !1;
              }
            })();
        };
        var Y = n(8642),
          z = n(2853),
          K = n(4862),
          q = n(4800),
          $ = n(6597),
          J = n(5030),
          X = n(6565);
        const Q = {};
        (Q.Primary = s.forwardRef((e, t) =>
          s.createElement(X.Z, {
            ref: t,
            color: "primary",
            variant: "solid",
            ...e,
          })
        )),
          (Q.Secondary = s.forwardRef((e, t) =>
            s.createElement(X.Z, {
              ref: t,
              color: "primary",
              variant: "outlined",
              ...e,
            })
          )),
          (Q.Clear = s.forwardRef((e, t) =>
            s.createElement(X.Z, {
              ref: t,
              color: "secondary",
              variant: "plain",
              ...e,
            })
          )),
          (Q.Cancel = s.forwardRef((e, t) =>
            s.createElement(X.Z, {
              ref: t,
              color: "primary",
              variant: "plain",
              ...e,
            })
          )),
          (Q.Danger = s.forwardRef((e, t) =>
            s.createElement(X.Z, {
              ref: t,
              color: "danger",
              variant: "solid",
              ...e,
            })
          )),
          (Q.Standard = s.forwardRef((e, t) => {
            const n = (0, C.cI)(),
              [r, a] = (0, C.XI)();
            return s.createElement(
              "div",
              {
                ...e,
                ...a,
                ref: t,
                style: {
                  ...e.style,
                  display: "inline-block",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  backgroundColor: r
                    ? "rgba(0, 0, 0, 0.75)"
                    : "rgba(0, 0, 0, 0.25)",
                  cursor: "pointer",
                },
              },
              s.createElement(
                _,
                { style: { color: r ? "white" : n.label() } },
                e.children
              )
            );
          })),
          (Q.StandardSmall = s.forwardRef((e, t) => {
            const n = (0, C.cI)(),
              [r, a] = (0, C.XI)();
            return s.createElement(
              "div",
              {
                ...e,
                ...a,
                ref: t,
                style: {
                  ...e.style,
                  display: "inline-block",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  backgroundColor: r
                    ? "rgba(0, 0, 0, 0.75)"
                    : "rgba(0, 0, 0, 0.25)",
                  cursor: "pointer",
                },
              },
              s.createElement(
                _.Body2,
                { style: { color: r ? "white" : n.label() } },
                e.children
              )
            );
          }));
        var ee = Q,
          te = n(1124);
        var ne = (e) => {
            if (!e.loading) return null;
            const t = e.disableBg
              ? {}
              : { backgroundColor: "rgba(0, 0, 0, 0.5)" };
            return e.absolute
              ? s.createElement(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      zIndex: 1e3,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      ...t,
                    },
                  },
                  s.createElement(te.Z, null)
                )
              : s.createElement(
                  "div",
                  {
                    style: {
                      width: "100%",
                      padding: "2rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  },
                  s.createElement(te.Z, null)
                );
          },
          re = n(1054);
        const ae = (e) => {
          const t = {
              opacity: 0,
              pointerEvents: "none",
              position: "fixed",
              width: 1,
              height: 1,
              left: -1,
              top: -1,
            },
            n = s.useRef(null),
            r = s.useRef(null),
            a = (e) => (t) => {
              t.preventDefault(), t.stopPropagation(), e.current.focus();
            },
            o = (t) => {
              e.hasFocus || (t.preventDefault(), t.stopPropagation());
            },
            i = s.useRef(!1);
          return (
            s.useEffect(() => {
              i.current !== e.hasFocus &&
                ((i.current = e.hasFocus), n.current.focus());
            }, [e.hasFocus]),
            s.createElement(
              s.Fragment,
              null,
              s.createElement("input", {
                onFocus: a(r),
                style: t,
                tabIndex: 0,
              }),
              s.createElement("input", {
                onKeyDown: o,
                ref: n,
                style: t,
                tabIndex: -1,
              }),
              e.children,
              s.createElement("input", {
                onKeyDown: o,
                ref: r,
                style: t,
                tabIndex: -1,
              }),
              s.createElement("input", { onFocus: a(n), style: t, tabIndex: 0 })
            )
          );
        };
        var oe = (e) => {
          const t = (0, C.cI)(),
            [n, r] = s.useState(!1),
            a = { marginTop: "0.5rem" },
            o = s.useRef(null),
            [i, l] = s.useState(!1),
            c = e.disableOverflow
              ? { maxHeight: i ? "50vh" : "70vh" }
              : { maxHeight: i ? "50vh" : "70vh", overflowY: "scroll" },
            u = I.VH("CardContext"),
            d = I.U2("ModalContainerState"),
            f = (0, re.V)();
          return s.createElement(
            u,
            { value: { level: 1 } },
            s.createElement(
              f,
              { value: { containerRef: o } },
              s.createElement(
                $.Z,
                {
                  ref: o,
                  disableEnforceFocus: !0,
                  open: e.open,
                  onClose: e.onClose,
                  container: d?.containerRef?.current,
                  sx: {
                    ...(i ? { position: "fixed", top: "15vh", left: 0 } : {}),
                  },
                  slotProps: {
                    backdrop: { sx: { position: "absolute", top: 0, left: 0 } },
                  },
                  hideBackdrop: e.hideBackdrop,
                },
                s.createElement(
                  J.Z,
                  {
                    sx: {
                      position: "relative",
                      maxWidth: e.maxWidth ?? "30vw",
                      ...(i ? { marginTop: "-7.5vh" } : {}),
                      background: t.gradient(e.background),
                    },
                  },
                  s.createElement(
                    ae,
                    null,
                    s.createElement(
                      "div",
                      null,
                      s.createElement("input", {
                        autoFocus: !0,
                        style: {
                          position: "absolute",
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      }),
                      s.createElement(ne, {
                        loading: n || e.loading,
                        absolute: !0,
                      }),
                      s.createElement(
                        D.Stack,
                        null,
                        e.title &&
                          s.createElement(
                            s.Fragment,
                            null,
                            s.createElement(
                              D,
                              {
                                container: !0,
                                direction: K.tq ? "column" : "row",
                              },
                              s.createElement(
                                D,
                                { xs: !0, sx: { height: "100%" } },
                                s.createElement(_.H1, null, e.title)
                              ),
                              !!e.titleRightDecorator &&
                                s.createElement(
                                  D,
                                  { xs: K.tq ? 12 : 6, sx: { height: "100%" } },
                                  s.createElement(
                                    D,
                                    {
                                      container: !0,
                                      justifyContent: "flex-end",
                                      alignItems: "center",
                                      sx: { height: "100%" },
                                    },
                                    e.titleRightDecorator
                                  )
                                )
                            ),
                            s.createElement(q.Z, { sx: a })
                          ),
                        s.createElement(
                          D.Stack,
                          { sx: c, style: e.style },
                          e.children
                        ),
                        s.createElement(q.Z, { sx: a }),
                        s.createElement(
                          D.Stack,
                          { direction: "row", sx: a },
                          !!e.enableExpand &&
                            s.createElement(
                              D.Stack,
                              { sx: { flexGrow: 1 }, justifyContent: "center" },
                              s.createElement(
                                "div",
                                {
                                  onClick: () => {
                                    l(!i);
                                  },
                                },
                                s.createElement(A.Z, {
                                  iconFull: i ? "fa-expand" : "fa-compress",
                                  extra: "fa-lg",
                                })
                              )
                            ),
                          s.createElement(
                            D,
                            { xs: !0 },
                            s.createElement(
                              D,
                              {
                                container: !0,
                                justifyContent: "flex-end",
                                alignItems: "center",
                              },
                              !e.hideCancelButton &&
                                s.createElement(
                                  ee.Cancel,
                                  {
                                    sx: { marginRight: "1rem" },
                                    onClick: e.onClose,
                                  },
                                  e.cancelText || "Cancel"
                                ),
                              e.buttons &&
                                e.buttons.map((e, t) =>
                                  s.createElement(e, { key: t })
                                ),
                              !e.hideSubmitButton &&
                                s.createElement(
                                  ee.Primary,
                                  {
                                    onClick: async () => {
                                      r(!0), await e.onSubmit(), r(!1);
                                    },
                                  },
                                  e.submitText || "Submit"
                                )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
        const ie = (e) => {
          const t = (e.text || "").split("\n");
          return s.createElement(
            oe,
            {
              open: !0,
              hideBackdrop: e.hideBackdrop,
              title: e.title || "Confirm",
              onClose: e.onClose,
              onSubmit: e.onSubmit,
              submitText: e.submitText,
              cancelText: e.cancelText,
              hideCancelButton: e.hideCancelButton,
            },
            !e.children &&
              s.createElement(
                _,
                { style: { margin: "1rem 0" } },
                t.map((e, n) =>
                  s.createElement(
                    s.Fragment,
                    { key: n },
                    e,
                    n !== t.length - 1 && s.createElement("br", null)
                  )
                )
              ),
            e.children
          );
        };
        (ie.doConfirm = (e, t, n = {}) => {
          I.Vx(e, { _confirm: { options: n, resolve: async (e) => t(e) } });
        }),
          (ie.getState = (e) => e.get("FormState"));
        var le = ie,
          se = (n(4230), n(8114)),
          ce = n(6436),
          ue = n(5020),
          de = n(2323),
          fe = n(8744),
          pe = n(977),
          me = n(3887),
          he = n(3702),
          ve = n(7253),
          ge = n(2172),
          ye = n(4418),
          be = n(7729),
          we = n(1551),
          Ee = n(1174),
          xe = n(8952),
          Ce = n(8067),
          Se = n(9422),
          ke = n(1863),
          Te = n(3920),
          Re = n(4023),
          De = n(1612),
          Ae = n(2180),
          Fe = n(1024),
          Pe = n(1957),
          _e = n(3126),
          Ze = n(5781),
          Ie = n(1920),
          Be = n(8178),
          Le = n(6162),
          Me = n(4436),
          je = n(3338),
          He = n(2423),
          Oe = n(1538),
          Ne = n(623),
          Ve = n(7774),
          Ue = n(9805),
          We = n(5714),
          Ge = n(8293);
        const Ye = (e) => {
            const t = e.isActive,
              [n, r] = s.useState(!1),
              a = s.useRef(null),
              [o, i] = s.useState(null),
              l = s.useRef({}),
              c = K.tq ? "4.5vw" : "1.75vw";
            if ("divider" === e.name)
              return s.createElement("div", {
                style: {
                  height: "100%",
                  width: 0,
                  borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
                  maxWidth: 0,
                  marginRight: "1vw",
                },
              });
            if (e.color)
              return s.createElement(
                "div",
                {
                  style: {
                    width: c,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                },
                s.createElement("div", {
                  style: {
                    height: "2vh",
                    aspectRatio: 1,
                    backgroundColor: e.color,
                    borderRadius: 4,
                  },
                })
              );
            let u = "rgba(255, 255, 255, 0.25)";
            return (
              t
                ? (u = e.bubble ? "white" : "rgba(255, 255, 255, 0.75)")
                : e.bubble && (u = "rgba(255, 255, 255, 0.5)"),
              "color" === e.name
                ? s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      "div",
                      {
                        ref: a,
                        onClick: (e) => {
                          r(e);
                        },
                        style: {
                          cursor: "pointer",
                          width: c,
                          maxWidth: c,
                          display: "flex",
                          alignItems: "center",
                          ...(e.center ? { justifyContent: "center" } : {}),
                        },
                      },
                      s.createElement(A.Z, { iconFull: e.icon, color: u })
                    ),
                    !!n &&
                      s.createElement(mt.ColorPickerRaw, {
                        relativeRef: a.current,
                        onClose: () => r(!1),
                        onChange: (t) => {
                          e.editor.chain()[e.fn](t).run(), i(t);
                        },
                        value: { hex: o },
                        popoverProps: {
                          position: ["cursor", "cursor-top"],
                          event: n,
                        },
                      })
                  )
                : "fontsize" === e.name
                ? s.createElement(mt.Select, {
                    style: { width: "4vw", maxWidth: "4vw" },
                    onChange: (t, n) => e.editor.chain().focus()[e.fn](n).run(),
                    options: [16, 30].map((e) => ({
                      label: `${e}`,
                      value: `${e}px`,
                    })),
                    value: "16",
                  })
                : "image" === e.name
                ? s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      "div",
                      {
                        ref: a,
                        onClick: (e) => {
                          r(e);
                        },
                        style: {
                          cursor: "pointer",
                          width: c,
                          maxWidth: c,
                          display: "flex",
                          alignItems: "center",
                          ...(e.center ? { justifyContent: "center" } : {}),
                        },
                      },
                      s.createElement(A.Z, { iconFull: e.icon, color: u })
                    ),
                    !!n &&
                      s.createElement(Rt, {
                        fields: [
                          {
                            name: "src",
                            label: "Image",
                            type: "image",
                            defaultValue: e.fnArgs.src,
                            route: "mdw-report",
                          },
                        ],
                        formRef: l,
                        onClose: () => r(!1),
                        onSubmit: () => {
                          r(!1),
                            l.current.src &&
                              e.editor
                                .chain()
                                .focus()
                                [e.fn]({ src: l.current.src })
                                .run();
                        },
                      })
                  )
                : s.createElement(
                    "div",
                    {
                      onClick: (t) => {
                        t.preventDefault(),
                          t.stopPropagation(),
                          e.editor.chain().focus()[e.fn](e.fnArgs).run();
                      },
                      style: {
                        cursor: "pointer",
                        width: c,
                        maxWidth: c,
                        display: "flex",
                        alignItems: "center",
                        ...(e.center ? { justifyContent: "center" } : {}),
                      },
                    },
                    s.createElement(A.Z, { iconFull: e.icon, color: u })
                  )
            );
          },
          ze = [
            ["heading", "fa-heading", "toggleHeading", [{ level: 2 }]],
            ["divider"],
            [
              "align-left",
              "fa-align-left",
              "setTextAlign",
              "left",
              [{ textAlign: "left" }],
            ],
            [
              "align-center",
              "fa-align-center",
              "setTextAlign",
              "center",
              [{ textAlign: "center" }],
            ],
            [
              "align-right",
              "fa-align-right",
              "setTextAlign",
              "right",
              [{ textAlign: "right" }],
            ],
            ["divider"],
            ["bulletList", "fa-list-ul", "toggleBulletList"],
            ["orderedList", "fa-list-ol", "toggleOrderedList"],
            ["taskList", "fa-list-check", "toggleTaskList"],
            ["divider"],
            ["blockquote", "fa-quote-left", "toggleBlockquote"],
            ["horizontal-rule", "fa-grip-lines", "setHorizontalRule"],
            [
              "table",
              "fa-table",
              "insertTable",
              { rows: 1, withHeaderRow: !0, cols: 2 },
            ],
            [
              "image",
              "fa-image",
              "setImage",
              { src: "https://placehold.it/400x400" },
            ],
          ],
          Ke = (e) => ({ HTMLAttributes: { class: e } }),
          qe = (e) => {
            const { editor: t } = (0, fe.fi)();
            return t
              ? "fivem" === e.preset
                ? null
                : s.createElement(
                    "div",
                    { className: "tiptap-menu-bar" },
                    ze.map(([e, n, r, a, o], i) => {
                      let l = !1,
                        c = r;
                      return (
                        "divider" !== e && (l = t.isActive(...(o || [e]))),
                        "color" === e && l && (c = "unsetColor"),
                        "font" === e && l && (c = "unsetFontFamily"),
                        s.createElement(Ye, {
                          key: "divider" === e ? i : e,
                          editor: t,
                          isActive: l,
                          icon: n,
                          fn: c,
                          fnArgs: a,
                          name: e,
                        })
                      );
                    })
                  )
              : null;
          },
          $e = (e) => {
            const { editor: t } = (0, fe.fi)();
            return t
              ? s.createElement(
                  fe.NM,
                  { tippyOptions: { duration: 100 } },
                  s.createElement(
                    "div",
                    { className: "tiptap-menu-bar-bubble-container" },
                    s.createElement(
                      "div",
                      { className: "tiptap-menu-bar tiptap-menu-bar-bubble" },
                      ((n = e.preset),
                      "fivem" === n
                        ? [
                            ["color", "fa-palette", "setColor"],
                            ["fontsize", "fa-palette", "setFontSize"],
                            [
                              "font",
                              "fa-font",
                              "setFontFamily",
                              "Nova Mono",
                              ["textStyle", { fontFamily: "Nova Mono" }],
                            ],
                            ["bold", "fa-bold", "toggleBold"],
                            ["italic", "fa-italic", "toggleItalic"],
                          ]
                        : [
                            [
                              "font",
                              "fa-font",
                              "setFontFamily",
                              "monospace",
                              ["textStyle", { fontFamily: "monospace" }],
                            ],
                            ["bold", "fa-bold", "toggleBold"],
                            ["italic", "fa-italic", "toggleItalic"],
                            ["underline", "fa-underline", "toggleUnderline"],
                            ["strike", "fa-strikethrough", "toggleStrike"],
                          ]).map(([e, n, r, a, o], i) => {
                        let l = !1,
                          c = r;
                        return (
                          "divider" !== e && (l = t.isActive(...(o || [e]))),
                          "color" === e && l && (c = "unsetColor"),
                          "font" === e && l && (c = "unsetFontFamily"),
                          s.createElement(Ye, {
                            bubble: !0,
                            center: !0,
                            key: "divider" === e ? i : e,
                            editor: t,
                            isActive: l,
                            icon: n,
                            fn: c,
                            fnArgs: a,
                            name: e,
                          })
                        );
                      })
                    )
                  )
                )
              : null;
            var n;
          },
          Je = (e) => {
            const [t, n] = s.useState(!1),
              [r, a] = s.useState(e.value ?? ""),
              o = s.useRef(null),
              i = (0, C.VI)(async () => {
                if (!e.readOnly || !e.synced) return void n(!0);
                const { content: t } = await N("tiptap:document:get", {
                  name: e.documentName,
                });
                a(t), n(!0);
              });
            return (
              s.useEffect(() => {
                i();
              }, []),
              s.useEffect(() => {
                e.synced ||
                  r === e.value ||
                  o?.current?.commands?.setContent(e.value);
              }, [e.value]),
              t
                ? s.createElement(
                    fe.KU,
                    {
                      editable: !e.readOnly,
                      slotBefore: e.readOnly
                        ? null
                        : s.createElement(qe, { preset: e.preset }),
                      extensions: e.extensions,
                      content: r,
                      onFocus: () => e.setFocused(!0),
                      onBlur: () => e.setFocused(!1),
                      onCreate: ({ editor: t }) => {
                        (o.current = t), e.setEditor(t);
                        t.getText() ||
                          !e.defaultValue ||
                          (e.synced && !e.readOnly) ||
                          t.commands.setContent(e.defaultValue);
                      },
                      onUpdate: ({ editor: t }) => {
                        const n = t.getHTML();
                        a(n), e.onChange && e.onChange(n);
                      },
                      editorProps: e.editorProps,
                    },
                    s.createElement($e, { preset: e.preset })
                  )
                : null
            );
          };
        var Xe = (e) => {
            const [t, n] = s.useState(null),
              [r, a] = s.useState(!1),
              o = s.useRef(null),
              i = s.useRef(null),
              l = () => {
                const t = !!e.readOnly,
                  r = t ? null : new We.QW();
                !t && e.documentName && new Ge.H7(e.documentName, r);
                const a =
                  !e.synced || t
                    ? null
                    : new Ue.Ui({
                        url: e.wsUrl,
                        name: e.documentName,
                        document: r,
                        token: e.token,
                        onSynced: ({ state: t }) => {
                          if (!t) return;
                          if (!e.synced || e.readOnly || !e.defaultValue)
                            return;
                          o.current.getText() ||
                            o.current.commands.setContent(e.defaultValue);
                        },
                      });
                (i.current = a),
                  n(
                    ((e, t, n, r, a) => [
                      fe.NM,
                      pe.Z,
                      me.Z,
                      Me.Z,
                      He.ZP.configure({
                        oneHalf: !1,
                        oneQuarter: !1,
                        threeQuarters: !1,
                      }),
                      we.Z,
                      Re.ZP,
                      De.Z.configure({ ...Ke("tip-tap-p") }),
                      Ee.Z.configure({ ...Ke("tip-tap-h") }),
                      ve.ZP,
                      Te.ZP,
                      Oe.Z,
                      Ae.ZP,
                      je.Z,
                      Se.Z,
                      ge.ZP,
                      ke.ZP,
                      Ce.Z,
                      he.ZP,
                      Ie.ZP,
                      Be.Z,
                      Fe.ZP,
                      Pe.Z,
                      _e.Z,
                      Ze.Z,
                      be.Z,
                      ye.Z,
                      xe.ZP.configure({ multicolor: !0 }),
                      Le.Z.configure({ types: ["heading", "paragraph"] }),
                      ...(t ? [Ne.ZP.configure({ document: t })] : []),
                      ...(e ? [] : [Ve.Z.configure({ provider: n, user: r })]),
                    ])(!!e.readOnly || !e.synced, r, a, e.collabUser, e.preset)
                  );
              };
            return (
              s.useEffect(
                () => (
                  l(),
                  () => {
                    i.current && i.current.disconnect();
                  }
                ),
                []
              ),
              t
                ? s.createElement(
                    "div",
                    {
                      className: "tiptap-wrapper",
                      style: {
                        ...e.style,
                        border: `1px solid rgba(255, 255, 255, ${
                          r ? 0.25 : 0
                        })`,
                      },
                    },
                    s.createElement(Je, {
                      ...e,
                      setEditor: (e) => (o.current = e),
                      setFocused: a,
                      extensions: t,
                      preset: e.preset,
                    })
                  )
                : null
            );
          },
          Qe = n(1378),
          et = n.n(Qe),
          tt = (n(2632), n(7267)),
          nt = n(838),
          rt = n(6202);
        const at =
            ({
              route: e,
              disabled: t,
              allowTextPaste: n,
              allowFilePaste: r,
              allowVideo: a,
              allowImage: o,
              onLoad: i,
              onFail: l,
              onDone: s,
            }) =>
            (c) => {
              if (t) return void c.preventDefault();
              if (!r) return;
              const u = c.clipboardData.getData("text/plain");
              if (u.startsWith("https://static.onx.gg/"))
                return s && s(u.trim()), void c.preventDefault();
              if (!c.clipboardData.files[0]) {
                if (n) return;
                return void c.preventDefault();
              }
              const d = c.clipboardData.files[0],
                f = -1 !== d.type.indexOf("image"),
                p = -1 !== d.type.indexOf("video");
              if ((!f || !o) && (!p || !a))
                return void (l && l("Invalid file type"));
              const m = p ? 20 : 10;
              if (d.size > 1e6 * m) return void (l && l("File is too large"));
              const h = new FileReader();
              (h.onload = async (t) => {
                if (!t.target) return;
                const n = t.target.result;
                if (
                  (i && i(),
                  "true" ===
                    {
                      NODE_ENV: "production",
                      PUBLIC_URL: "/ui",
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                      REACT_APP_BUILD_ENV: "dev",
                      REACT_APP_DISABLE_MINIMIZE: "true",
                      REACT_APP_IS_LOCAL: "true",
                    }.DISABLE_UPLOAD)
                )
                  return void (s && s(n));
                const { url: r } = await N("upload:create", {
                  type: f ? "image" : "video",
                  ext: d.name.split(".").pop(),
                  route: e ?? "user-images",
                  data: n,
                  wait: !0,
                  contentType: d.type,
                });
                s && s(r);
              }),
                h.readAsDataURL(d);
            },
          ot = (e) => {
            const t = (0, C.cI)(),
              n = (0, C.wr)(),
              r = e.label ?? "";
            return s.createElement(
              s.Fragment,
              null,
              s.createElement(
                "div",
                {
                  style: {
                    position: "absolute",
                    zIndex: 990,
                    top: e.active ? 0 : 2,
                    left: "0.75rem",
                    padding: r ? "0 0.75rem" : 0,
                    height: 8,
                    backgroundColor: e.select ? "transparent" : t.level(n + 1),
                    pointerEvents: "none",
                  },
                },
                s.createElement(
                  "p",
                  { style: { opacity: 0, fontSize: "0.95rem" } },
                  r
                )
              ),
              s.createElement(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: 0,
                    transition: "top 200ms, font-size 200ms, padding 200ms",
                    padding: "0.5rem",
                    paddingLeft: "0.75rem",
                    zIndex: 995,
                    pointerEvents: "none",
                    fontSize: "var(--joy-fontSize-lg)",
                    color: t.label(),
                    ...(e.active
                      ? {
                          top: "-1.4rem",
                          fontSize: "0.95rem",
                          paddingLeft: "1.25rem",
                        }
                      : {}),
                    ...(e.focused
                      ? { color: "var(--joy-palette-primary-plainColor)" }
                      : {}),
                  },
                },
                r
              )
            );
          },
          it = (e) => {
            const [t, n] = s.useState(!1);
            return s.createElement(
              "div",
              {
                style: { width: "100%", position: "relative", ...e.labelStyle },
                ref: e.containerRef,
              },
              !e.checkbox &&
                s.createElement(ot, {
                  select: e.select,
                  active: t || !!(e.value || "").length,
                  focused: t,
                  label: e.label,
                }),
              e.input({
                active: t,
                focus: {
                  onBlur: () => {
                    n(!1), e.onBlur && e.onBlur();
                  },
                  onFocus: () => {
                    n(!0), e.onFocus && e.onFocus();
                  },
                },
                hover: {
                  onMouseOver: () => {
                    n(!0), e.onMouseOver && e.onMouseOver();
                  },
                  onMouseLeave: () => {
                    n(!1), e.onMouseLeave && e.onMouseLeave();
                  },
                },
              })
            );
          },
          lt = ({ colors: e, focused: t, label: n }) => ({
            position: "absolute",
            height: "100%",
            zIndex: 5,
            paddingTop: n ? "1.5rem" : "0.25rem",
            paddingLeft: n ? "1rem" : "0.25rem",
            outline: "none",
            border: "unset",
            width: "100%",
            color: t ? "white" : e.label(),
            transition: "all 250ms",
            font: "inherit",
            background: "unset",
          }),
          st = (e) => {
            const [t, n] = s.useState(!1),
              r = (0, C.cI)(),
              a = t || !!e.hasValue;
            return s.createElement(
              "div",
              {
                ref: e.containerRef,
                style: {
                  position: "relative",
                  width: "100%",
                  backgroundColor: r.gradientBgLevel(),
                  borderRadius: "8px",
                  overflow: "hidden",
                  minHeight: e.label ? "52px" : "30px",
                  border: t
                    ? "1px solid rgba(255, 255, 255, 0.25)"
                    : "1px solid transparent",
                  ...e.style,
                },
              },
              e.label &&
                s.createElement(
                  _,
                  {
                    sx: {
                      position: "absolute",
                      top: a ? "0.125rem" : "50%",
                      transform: a ? null : "translateY(-50%)",
                      pl: "1rem",
                      transition: "all 250ms",
                      fontSize: a ? "0.85rem" : null,
                      color: t ? "white" : r.label(),
                    },
                  },
                  e.label
                ),
              e.children({
                focused: t,
                focus: {
                  onFocus: (t) => {
                    n(!0), e.onFocus && e.onFocus(t);
                  },
                  onBlur: (t) => {
                    n(!1), e.onBlur && e.onBlur(t);
                  },
                },
              }),
              !!e.endDecorator &&
                s.createElement(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: "50%",
                      right: "1rem",
                      zIndex: 6,
                      transform: "translateY(-50%)",
                    },
                  },
                  "function" === typeof e.endDecorator
                    ? e.endDecorator({ onChange: e.onChange })
                    : e.endDecorator
                )
            );
          },
          ct = (e) => {
            const [t, n] = s.useState((e.value || "").toString());
            s.useEffect(() => {
              (t || e.value) && t !== e.value && n(e.value);
            }, [e.value]);
            const r = (t) => {
                const r = t.target.value;
                n(r), e.onChange && e.onChange(t, r);
              },
              a = (0, C.cI)(),
              o = ((0, C.wr)(), { ...e });
            delete o.containerRef, delete o.valueRef, delete o.noMt;
            const i = {};
            return (
              e.type && (i.type = e.type),
              s.createElement(
                st,
                { ...e, hasValue: !!t },
                ({ focus: n, focused: o }) =>
                  s.createElement("input", {
                    ...n,
                    ...i,
                    style: lt({ colors: a, focused: o, label: e.label }),
                    value: t,
                    onChange: r,
                    onPaste: e.onPaste,
                    onKeyDown: e.onKeyDown,
                    disabled: e.disabled,
                    readOnly: e.readOnly,
                    ref: e.valueRef,
                    placeholder: e.placeholder,
                  })
              )
            );
          };
        ct.Search = ({ noLabel: e = !1, ...t } = {}) =>
          s.createElement(ct, {
            label: e ? "" : "Search",
            endDecorator: s.createElement(A.Z, {
              color: "var(--joy-palette-neutral-400)",
              iconFull: "fa-search",
            }),
            ...t,
          });
        const ut = (e) => {
          const [t, n] = s.useState(!1),
            r = (0, C.cI)(),
            a = e.option;
          return s.createElement(
            "div",
            {
              onMouseOver: () => n(!0),
              onMouseLeave: () => n(!1),
              onClick: (t) => e.onClick(t, a.value),
              style: {
                display: "flex",
                alignItems: "center",
                paddingLeft: "1rem",
                height: "44px",
                width: "100%",
                cursor: "pointer",
                backgroundColor: t || e.active ? r.gradientBgLevel() : "unset",
                borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
              },
            },
            s.createElement(_, null, a.label ?? a.value)
          );
        };
        (ct.Select = ({
          options: e = [],
          noMt: t = !1,
          containerRef: n = null,
          freeSolo: r = !1,
          ...a
        } = {}) => {
          const [o, i] = s.useState(a.value ?? null),
            [l, c] = s.useState(!1),
            [u, d] = s.useState(""),
            [f, p] = s.useState(!1),
            m = (0, C.cI)();
          s.useEffect(() => {
            (o || a.value) && o !== a.value && i(a.value);
          }, [a.value]);
          const h = s.useRef(null),
            v = (e, t) => {
              const n = t;
              i(n), r && d(n), a.onChange && a.onChange(e, n);
            },
            g = h.current?.getBoundingClientRect(),
            y = e.filter((e) => {
              const t = (e.label ?? e.value).toLowerCase();
              return !u || -1 !== t.indexOf(u.toLowerCase());
            }),
            b = () => {
              c(!1), p(!1);
            },
            w = e.find((e) => e.value === o),
            E = w?.label ?? w?.value ?? o ?? "";
          return s.createElement(
            s.Fragment,
            null,
            !!l &&
              s.createElement(
                re.Z,
                {
                  onClose: b,
                  positionRef: h.current,
                  offset: { top: 4 },
                  containerStyle: {
                    maxHeight: "20vh",
                    background: "unset",
                    backgroundColor: m.gradientTopColor(),
                    ...a.containerStyle,
                  },
                },
                s.createElement(
                  "div",
                  { style: { width: g.width } },
                  y.map((e) =>
                    s.createElement(ut, {
                      key: e.value,
                      option: e,
                      active: o === e.value,
                      onClick: (e, t) => {
                        v(e, t), b();
                      },
                    })
                  )
                )
              ),
            s.createElement(ct, {
              ...a,
              containerRef: h,
              onFocus: () => {
                c(!0), p(!0);
              },
              endDecorator: s.createElement(A.Z, {
                iconFull: "fa-caret-down",
                color: "var(--joy-palette-neutral-400)",
              }),
              label: a.label,
              value: f ? u : E,
              onChange: (e) => (r ? v(e, e.target.value) : d(e.target.value)),
            })
          );
        }),
          (ct.SelectNormal = (e) => {
            const [t, n] = s.useState(e.value ?? "");
            s.useEffect(() => {
              t !== e.value && n(e.value);
            }, [e.value]);
            return s.createElement(
              "div",
              { style: { borderRadius: 8, overflow: "hidden", ...e.style } },
              s.createElement(
                "select",
                {
                  style: {
                    border: 0,
                    outline: 0,
                    margin: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                    padding: "0.5rem",
                    fontSize: "1em",
                    color: "white",
                    width: "100%",
                  },
                  onChange: (t) => {
                    const r = t.target.value;
                    n(r), e.onChange && e.onChange(t, r);
                  },
                  value: t,
                },
                !!e.label && s.createElement("option", { value: "" }, e.label),
                e.options.map((e) =>
                  s.createElement(
                    "option",
                    { key: e.value, value: e.value },
                    e.label ?? e.value
                  )
                )
              )
            );
          }),
          (ct.Autocomplete = ({ options: e = [], ...t } = {}) => {
            const [n, r] = s.useState(t.value ?? null),
              a = "object" === typeof e[0];
            return (
              s.useEffect(() => {
                (n || t.value) && n !== t.value && r(t.value);
              }, [t.value]),
              s.createElement(tt.Z, {
                startDecorator: t.icon
                  ? s.createElement(A.Z, { iconFull: t.icon })
                  : null,
                ...t,
                style: { backgroundColor: "rgba(0, 0, 0, 0.25)", ...t.style },
                onChange: (e, n) =>
                  ((e, n) => {
                    let o;
                    (o = a
                      ? t.multiple
                        ? n.map((e) =>
                            "string" === typeof e ? { value: e } : e
                          )
                        : "string" === typeof n
                        ? { value: n }
                        : n
                      : n),
                      r(o),
                      t.onChange && t.onChange(e, o);
                  })(e, n),
                value: n,
                options: e,
                getOptionLabel: (e) => e.label ?? e.value ?? e,
                isOptionEqualToValue: (e, t) =>
                  a ? e.value === t.value : e === t,
                placeholder: t.label,
              })
            );
          }),
          (ct.TextArea = (e) => {
            const [t, n] = s.useState((e.value || "").toString()),
              r = s.useRef(null),
              a = e.textareaRef ?? r,
              o = () => {
                (a.current.style.height = "0px"),
                  e.minRows &&
                    (a.current.style["min-height"] = 1.5 * e.minRows + "rem"),
                  e.maxRows &&
                    (a.current.style["max-height"] = 1.5 * e.maxRows + "rem"),
                  (a.current.style.height = `${a.current.scrollHeight}px`);
              };
            s.useEffect(() => {
              t !== e.value && (n(e.value), o());
            }, [e.value]),
              s.useEffect(() => {
                o();
              }, [t]);
            const i = (t) => {
                let r = t.target.value,
                  a = null;
                if (
                  (e.trim && (r = r.replace(/[\r\n]+/g, "")),
                  e.extractAttachments)
                ) {
                  const e = r.match(/https:\/\/static\.onx\.gg\/[^\s]+/gi);
                  (a = e?.[0]), a && (r = r.replace(a, ""));
                }
                e.limit && r.length > e.limit && (r = r.substring(0, e.limit)),
                  n(r),
                  e.onChange && e.onChange(t, r, a);
              },
              l = (0, C.cI)(),
              c = ((0, C.wr)(), { ...e });
            return (
              delete c.containerRef,
              delete c.valueRef,
              delete c.noMt,
              s.createElement(
                s.Fragment,
                null,
                s.createElement(
                  st,
                  {
                    ...e,
                    hasValue: !!t,
                    style: {
                      ...e.style,
                      overflow: "hidden",
                      maxHeight: "100%",
                      overflowY: "scroll",
                    },
                  },
                  ({ focus: n, focused: r }) =>
                    s.createElement(
                      s.Fragment,
                      null,
                      s.createElement("textarea", {
                        ...n,
                        ref: a,
                        onKeyUp: e.onKeyUp,
                        style: {
                          ...lt({ colors: l, focused: r }),
                          position: "relative",
                          paddingTop: 0,
                          marginTop: e.label ? "1.5rem" : 0,
                          transition: "unset",
                          resize: "none",
                          font: "inherit",
                          overflow: "scroll",
                          ...e.textareaStyle,
                        },
                        rows: 1,
                        value: t,
                        onChange: i,
                        onKeyDown: e.onKeyDown,
                        onPaste: at({
                          route: e.route,
                          allowTextPaste: !0,
                          allowFilePaste: e.extractAttachments,
                          disabled: e.disabled || !e.onChange,
                          allowImage: !0,
                          allowVideo: !1,
                          onDone: (n) => {
                            e.onChange(null, t, n);
                          },
                          onFail: (t) => {
                            e.onChange(null, null, null, t);
                          },
                        }),
                      }),
                      e.children
                    )
                ),
                !!e.limit &&
                  s.createElement(
                    _.Body2,
                    { style: { textAlign: "right" } },
                    t.length,
                    "/",
                    e.limit
                  )
              )
            );
          }),
          (ct.Checkbox = ({
            noMt: e = !1,
            checked: t = !1,
            value: n = !1,
            disabled: r = !1,
            ...a
          } = {}) => {
            const [o, i] = s.useState(!(!t && !n));
            s.useEffect(() => {
              let e = t || n;
              "boolean" === typeof e && o !== e && i(e);
            }, [t, n]);
            const l = (0, C.cI)();
            (0, C.wr)();
            return s.createElement(
              "div",
              {
                onClick: () =>
                  !r &&
                  ((e) => {
                    const t = e;
                    (a.onChange && !1 === a.onChange(null, t)) || i(t);
                  })(!o),
                style: {
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  ...a.style,
                },
              },
              s.createElement(
                "div",
                {
                  style: {
                    backgroundColor: l.gradientBgLevel(),
                    padding: "0.25rem",
                    height: "26px",
                    maxHeight: "26px",
                    minHeight: "26px",
                    width: "26px",
                    maxWidth: "26px",
                    minWidth: "26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    overflow: "hidden",
                  },
                },
                !!o &&
                  s.createElement(A.Z, { iconFull: "fa-check", extra: "fa-lg" })
              ),
              s.createElement(
                _,
                { sx: { pl: "1rem", color: o ? "white" : l.label() } },
                a.label
              )
            );
          }),
          (ct.Slider = ({ noMt: e = !1, ...t } = {}) => {
            const [n, r] = s.useState(t.value ?? t.defaultValue ?? t.min);
            s.useEffect(() => {
              n !== t.value && r(t.value);
            }, [t.value]);
            const a = (0, C.cI)();
            (0, C.wr)();
            return s.createElement(
              "div",
              { style: { marginTop: t.noMt ? 0 : "0.5rem" } },
              t.label && s.createElement(_.Label, null, t.label),
              s.createElement(de.Z, {
                valueLabelDisplay: "auto",
                ...t,
                slotProps: {
                  rail: { sx: { backgroundColor: a.background() } },
                },
                onChange: (e, n) => {
                  r(n), t.onChange && t.onChange(e, n);
                },
                value: n,
              })
            );
          }),
          (ct.Switch = ({
            noMt: e = !1,
            checked: t = !1,
            value: n = !1,
            labelStyle: r = {},
            ...a
          } = {}) => {
            const [o, i] = s.useState(!(!t && !n));
            s.useEffect(() => {
              const e = t || n;
              e !== o && i(e);
            }, [t, n]);
            const l = (0, C.cI)(),
              c = (0, C.wr)();
            return s.createElement(it, {
              checkbox: !0,
              noMt: e,
              label: a.label,
              labelStyle: r,
              input: () =>
                s.createElement(ue.Z, {
                  size: "lg",
                  variant: "solid",
                  color: o ? "primary" : "neutral",
                  slotProps: {
                    checkbox: { sx: { backgroundColor: l.level(c + 1) } },
                    label: { sx: { color: o ? "white" : l.label() } },
                  },
                  endDecorator: s.createElement(
                    _.Label,
                    { active: !!o },
                    a.label
                  ),
                  ...a,
                  onChange: (e) =>
                    ((e) => {
                      const t = e.target.checked;
                      i(t), a.onChange && a.onChange(e, t);
                    })(e),
                  checked: o,
                }),
            });
          }),
          (ct.SwitchRaw = ({
            noMt: e = !1,
            checked: t = !1,
            value: n = !1,
            ...r
          } = {}) => {
            const [a, o] = s.useState(!(!t && !n));
            s.useEffect(() => {
              const e = t || n;
              e !== a && o(e);
            }, [t, n]);
            const i = (0, C.cI)(),
              l = (0, C.wr)();
            return s.createElement(ue.Z, {
              size: "lg",
              variant: "solid",
              color: a ? "primary" : "neutral",
              slotProps: {
                checkbox: { sx: { backgroundColor: i.level(l + 1) } },
                label: { sx: { color: a ? "white" : i.label() } },
              },
              endDecorator: s.createElement(_.Label, { active: !!a }, r.label),
              ...r,
              onChange: (e) =>
                ((e) => {
                  const t = e.target.checked;
                  o(t), r.onChange && r.onChange(e, t);
                })(e),
              checked: a,
            });
          }),
          (ct.DatePicker = (e) => {
            const [t, n] = s.useState(e.value ?? null),
              [r, a] = s.useState(!1),
              o = s.useRef(null),
              i = t,
              l = !!e.withTime,
              c = !!e.showTimeSelectOnly,
              u = (t, r) => {
                (l && !c) || a(!1), n(t), e.onChange && e.onChange(r, t);
              };
            s.useEffect(() => {
              t !== e.value && n(e.value);
            }, [e.value]);
            const d = { showTimeSelect: l };
            let f = "";
            return (
              (f = c
                ? nt.WU(i, nt.Iv, e.invalid)
                : l || e.formatTime
                ? nt.WU(i, nt.rW, e.invalid)
                : nt.WU(i, nt.r0, e.invalid)),
              s.createElement(
                s.Fragment,
                null,
                s.createElement(ct, {
                  readOnly: !0,
                  ...e,
                  value: f,
                  containerRef: o,
                  endDecorator: s.createElement(
                    s.Fragment,
                    null,
                    e.clear &&
                      s.createElement(A.Z, {
                        color: "var(--joy-palette-neutral-400)",
                        iconFull: "fa-circle-xmark",
                        style: { cursor: "pointer", marginRight: "0.5rem" },
                        onClick: () => u("", null),
                      }),
                    s.createElement(A.Z, {
                      color: "var(--joy-palette-neutral-400)",
                      iconFull: c ? "fa-clock" : "fa-calendar",
                    })
                  ),
                  onFocus: () => a(!0),
                }),
                r &&
                  s.createElement(
                    re.Z,
                    {
                      onClose: () => a(!1),
                      positionRef: o.current,
                      popoverRef: o.current,
                      style: { paddingLeft: "0.75rem", paddingTop: "0.5rem" },
                    },
                    s.createElement(et(), {
                      disabledKeyboardNavigation: !0,
                      inline: !0,
                      ...d,
                      ...e,
                      value: t,
                      selected: i,
                      onChange: (e, t) => u(e, t),
                    })
                  )
              )
            );
          }),
          (ct.ColorPickerRaw = (e) =>
            s.createElement(
              re.Z,
              {
                style: { paddingLeft: 32, paddingTop: "0.5rem" },
                onClose: () => e.onClose(!1),
                positionRef: e.relativeRef,
                popoverRef: e.popoverRef,
                ...e.popoverProps,
              },
              s.createElement(rt.xS, {
                disableAlpha: !0,
                presetColors: [],
                color: e.value,
                onChangeComplete: (t) => e.onChange(t.hex),
              })
            )),
          (ct.ColorPicker = (e) => {
            const [t, n] = s.useState((e.value ?? "").toString());
            s.useEffect(() => {
              t !== e.value && n(e.value);
            }, [e.value]);
            const [r, a] = s.useState(!1),
              o = s.useRef(null);
            return s.createElement(
              s.Fragment,
              null,
              s.createElement(ct, {
                readOnly: !0,
                label: e.label,
                value: t,
                onFocus: () => a(!0),
                containerRef: o,
                startDecorator: t
                  ? s.createElement("div", {
                      style: { height: 16, width: 16, backgroundColor: t },
                    })
                  : null,
                endDecorator: s.createElement(A.Z, {
                  color: "var(--joy-palette-neutral-400)",
                  iconFull: "fa-palette",
                }),
                ...e,
              }),
              r &&
                s.createElement(ct.ColorPickerRaw, {
                  relativeRef: o.current,
                  onClose: () => a(!1),
                  value: t,
                  onChange: (t) => {
                    n(t), e.onChange && e.onChange(null, t);
                  },
                  popoverRef: e.popoverRef,
                })
            );
          });
        ct.WYSIWYG = Xe;
        const dt = (0, se.Z)("input")(({ theme: e }) => ({
            border: "none",
            minWidth: 0,
            outline: 0,
            padding: 0,
            paddingTop: "1em",
            flex: 1,
            color: "inherit",
            backgroundColor: e.vars.palette.background.level1,
            fontFamily: "inherit",
            fontSize: "inherit",
            fontStyle: "inherit",
            fontWeight: "inherit",
            lineHeight: "inherit",
            textOverflow: "ellipsis",
            "&::placeholder": { opacity: 0, transition: "0.1s ease-out" },
            "&:focus::placeholder": { opacity: 1 },
            "&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label":
              { top: "0.5rem", fontSize: "0.75rem" },
            "&:focus ~ label": { color: "var(--Input-focusedHighlight)" },
            "&:-webkit-autofill": { alignSelf: "stretch" },
            "&:-webkit-autofill:not(* + &)": {
              marginInlineStart: "calc(-1 * var(--Input-paddingInline))",
              paddingInlineStart: "var(--Input-paddingInline)",
              borderTopLeftRadius:
                "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
              borderBottomLeftRadius:
                "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
            },
          })),
          ft = (0, se.Z)("label")(({ theme: e }) => ({
            position: "absolute",
            lineHeight: 1,
            top: "calc((var(--Input-minHeight) - 1em) / 2)",
            color: e.vars.palette.text.tertiary,
            backgroundColor: e.vars.palette.background.level1,
            fontWeight: e.vars.fontWeight.md,
            transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
          })),
          pt = s.forwardRef(function (e, t) {
            const n = s.useId();
            return s.createElement(
              s.Fragment,
              null,
              s.createElement(dt, { ...e, ref: t, id: n }),
              s.createElement(ft, { htmlFor: n }, "Label")
            );
          });
        ct.FloatingLabelInput = () =>
          s.createElement(ce.ZP, {
            slots: { input: pt },
            slotProps: {
              input: { placeholder: "A placeholder", type: "text" },
            },
            sx: { "--Input-minHeight": "56px", "--Input-radius": "6px" },
          });
        var mt = ct,
          ht = n(7938),
          vt = (e) => {
            const t = {
              height: "100%",
              width: "100%",
              maxWidth: "100%",
              maxHeightl: "100%",
            };
            let n = () =>
              s.createElement("img", {
                style: t,
                src: e.src,
                onClick: () => (0, ht.JG)(e.src),
              });
            return (
              (-1 === e.src.indexOf("mp4") && -1 === e.src.indexOf("webm")) ||
                (n = () =>
                  s.createElement("video", {
                    autoPlay: !0,
                    muted: !0,
                    controls: !1,
                    style: t,
                    src: e.src,
                    onClick: () => (0, ht.JG)(e.src),
                  })),
              s.createElement(
                re.Z,
                {
                  disableBackdrop: !0,
                  noBg: !0,
                  containerStyle: {
                    background: "unset",
                    pointerEvents: "none",
                    maxHeight: "50vh",
                    maxWidth: "25vw",
                    overflow: "visible",
                    border: "unset",
                  },
                  offset: { top: 48 },
                  positionRef: e.containerRef,
                  position: ["cursor", "cursor-middle", "cursor-top"],
                  event: e.event,
                },
                s.createElement(n, null)
              )
            );
          },
          gt = n(7264);
        let yt, bt, wt;
        const Et = async (e, t) => {
          try {
            wt = [];
            const n = await (async (e) => {
              const t = await window.parent.navigator.mediaDevices.getUserMedia(
                  { audio: { autoGainControl: !1 } }
                ),
                n = (e) => {
                  t.getAudioTracks().forEach((t) => {
                    "ended" !== t.readyState && (t.enabled = e);
                  });
                };
              return e && (Ct || n(!1), (xt = n)), t;
            })(e.requireVoip);
            e.onRecord && e.onRecord(),
              (yt = new MediaRecorder(n, {
                mimeType: "audio/webm; codecs=opus",
              })),
              (yt.ondataavailable = (e) => {
                wt.push(e.data);
              }),
              (yt.onstop = async () => {
                n.getTracks().forEach((e) => {
                  e.stop();
                });
                const t = new Blob(wt, { type: "audio/webm" }),
                  r = await ((e) =>
                    new Promise((t) => {
                      const n = new FileReader();
                      n.readAsDataURL(e), (n.onloadend = () => t(n.result));
                    }))(t);
                if ((e.onRecordEnd && e.onRecordEnd(r), !e.onDone)) return;
                const { url: a } = await N("upload:create", {
                  type: "audio",
                  ext: "webm",
                  route: e.route ?? "user-audio",
                  data: r,
                  wait: !0,
                  contentType: "audio/webm",
                  ttl: e.ttl ?? 0,
                });
                e.onDone(a);
              }),
              yt.start(1e3),
              e.maxDuration &&
                setTimeout(() => {
                  bt === t && yt && (yt.stop(), (yt = null));
                }, 1e3 * e.maxDuration);
          } catch (n) {
            e.onError && e.onError(n);
          }
        };
        let xt,
          Ct = !1;
        u.Oo("voip:active", (e) => {
          (Ct = e.data), xt && xt(Ct);
        });
        var St = (e) => {
          const t = s.useRef(null);
          return (
            s.useEffect(() => {
              if (e.record) {
                const { stop: n } = ((e) => {
                  const t = (0, gt.Z)();
                  return (
                    (bt = t),
                    Et(e, t),
                    {
                      stop: () => {
                        bt === t && yt && (yt.stop(), (yt = null));
                      },
                    }
                  );
                })(e);
                t.current = n;
              } else t.current && t.current(), (t.current = null);
            }, [e.record]),
            null
          );
        };
        const kt = (e) => {
            const [t, n] = s.useState(!1),
              r = s.useRef(null);
            return s.createElement(
              s.Fragment,
              null,
              !!t &&
                !!t.src &&
                s.createElement(vt, {
                  event: t.event,
                  src: t.src,
                  containerRef: r.current,
                }),
              s.createElement(
                D,
                {
                  ref: r,
                  onMouseEnter: (t) => n({ event: t, src: e.src }),
                  onMouseLeave: () => n(!1),
                  style: {
                    padding: "0.5rem 1rem",
                    borderRadius: 8,
                    cursor: "pointer",
                    alignItems: "center",
                  },
                },
                s.createElement(_, { style: { color: "white" } }, e.label)
              )
            );
          },
          Tt = (e) => {
            const [t, n] = s.useState({}),
              [r, a] = s.useState(null),
              o = (0, C.cI)();
            s.useEffect(() => {
              e.changeValue &&
                (e.formRef &&
                  (e.formRef.current[e.changeValue.name] = e.changeValue.value),
                n({ ...t, [e.changeValue.name]: e.changeValue.value }));
            }, [e.changeValue]);
            const i = s.useRef(null);
            if (!i.current) {
              i.current = {};
              for (const t of e.fields)
                i.current[t.name] = t.value ?? ("checkbox" !== t.type && "");
              e.formRef && (e.formRef.current = i.current);
            }
            const l = (r, a, o = !1) => {
                r.readonly ||
                  (e.formRef &&
                    ((e.formRef.current[r.name] = a),
                    e.onChange &&
                      e.onChange({ ...e.formRef.current }, r.name, (r) => {
                        if (e.formRef)
                          for (const [t, n] of Object.entries(r))
                            e.formRef.current[t] = n;
                        n({ ...t, ...r });
                      }),
                    (e.preview || o) && n({ ...e.formRef.current })));
              },
              c = () =>
                e.fields.map((n, r) => {
                  const a = {
                      ...(n.inputProps ?? {}),
                      style: {
                        marginTop: "0.5rem",
                        marginBottom: "0.25rem",
                        ...(n.inputProps ?? {}).style,
                      },
                    },
                    c = {
                      width: "100%",
                      position: "relative",
                      backgroundColor: o.gradientBgLevel(),
                      borderRadius: "8px",
                      overflow: "hidden",
                      minHeight: "52px",
                      border: "1px solid transparent",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      ...a.style,
                    };
                  if (
                    "function" === typeof n.hidden &&
                    n.hidden({ ...i.current, ...t })
                  )
                    return null;
                  if ("hr" === n.type) return s.createElement(q.Z, { key: r });
                  if ("select" === n.type)
                    return s.createElement(mt.Select, {
                      key: n.name,
                      label: n.label,
                      onChange: (e, t) => l(n, t, !0),
                      value: t[n.name] ?? n.value,
                      containerRef: e.containerRef,
                      ...a,
                    });
                  if ("select-normal" === n.type)
                    return s.createElement(mt.SelectNormal, {
                      key: n.name,
                      label: n.label,
                      onChange: (e, t) => l(n, t, !0),
                      value: t[n.name] ?? n.value,
                      containerRef: e.containerRef,
                      ...a,
                    });
                  if ("checkbox" === n.type)
                    return s.createElement(mt.Checkbox, {
                      key: n.name,
                      label: n.label,
                      onChange: (e, t) => l(n, t),
                      checked: t[n.name] ?? n.value,
                      ...a,
                    });
                  if ("textarea" === n.type)
                    return s.createElement(mt.TextArea, {
                      key: n.name,
                      label: n.label,
                      onChange: (e) => l(n, e.target.value),
                      value: (t[n.name] ?? n.value) || "",
                      textareaStyle: { paddingBottom: "0.5rem" },
                      ...a,
                    });
                  if ("WYSIWYG" === n.type)
                    return s.createElement(mt.WYSIWYG, {
                      key: n.name,
                      label: n.label,
                      onChange: (e) => l(n, e),
                      value: t[n.name] ?? n.value,
                      ...a,
                    });
                  if ("color" === n.type)
                    return s.createElement(mt.ColorPicker, {
                      key: n.name,
                      label: n.label,
                      onChange: (e, t) => l(n, t),
                      value: t[n.name] ?? n.value,
                      ...a,
                    });
                  if ("datepicker" === n.type)
                    return s.createElement(mt.DatePicker, {
                      key: n.name,
                      label: n.label,
                      onChange: (e, t) => l(n, t, !0),
                      value: t[n.name] ?? n.value,
                      ...a,
                    });
                  if ("datetimepicker" === n.type)
                    return s.createElement(mt.DatePicker, {
                      withTime: !0,
                      key: n.name,
                      label: n.label,
                      onChange: (e, t) => l(n, t, !0),
                      value: t[n.name] ?? n.value,
                      ...a,
                    });
                  if ("search" === n.type)
                    return s.createElement(mt.Search, {
                      key: n.name,
                      onChange: (e, t) => l(n, t),
                      value: (t[n.name] ?? n.value ?? "").toString(),
                      ...a,
                    });
                  if ("password" === n.type)
                    return s.createElement(mt, {
                      key: n.name,
                      label: n.label,
                      onChange: (e, t) => l(n, t),
                      value: (t[n.name] ?? n.value ?? "").toString(),
                      type: "password",
                      ...a,
                    });
                  if ("autocomplete" === n.type)
                    return s.createElement(mt.Autocomplete, {
                      key: n.name,
                      label: n.label,
                      onChange: (e, t) => l(n, t),
                      value: t[n.name] ?? n.value,
                      ...a,
                    });
                  if ("slider" === n.type)
                    return s.createElement(mt.Slider, {
                      key: n.name,
                      label: n.label,
                      onChange: (e, t) => l(n, t),
                      value: t[n.name] ?? n.value,
                      ...a,
                    });
                  if ("text-display" === n.type)
                    return s.createElement(
                      D,
                      {
                        key: n.name,
                        container: !0,
                        alignItems: "center",
                        style: { padding: "0.5rem" },
                        ...a.containerProps,
                      },
                      s.createElement(_, { ...a.textProps }, n.label)
                    );
                  if ("text-display-b2" === n.type)
                    return s.createElement(
                      D,
                      {
                        key: n.name,
                        container: !0,
                        alignItems: "center",
                        style: { padding: "0.5rem" },
                        ...a.containerProps,
                      },
                      s.createElement(_.Body2, { ...a.textProps }, n.label)
                    );
                  if ("image" === n.type) {
                    let e = (t[n.name] ?? n.value ?? "").toString(),
                      r = "loading" === e || e.startsWith("Upload Failed: ");
                    if ((r && e === n.value && ((e = ""), (r = !1)), r))
                      return s.createElement(
                        D,
                        {
                          key: n.name,
                          container: !0,
                          alignItems: "center",
                          style: { padding: "0.5rem" },
                          ...a.containerProps,
                        },
                        "loading" === e &&
                          s.createElement(te.Z, {
                            sx: { marginRight: "0.5rem" },
                          }),
                        s.createElement(
                          _.Body2,
                          { ...a.textProps },
                          "loading" === e ? "Uploading..." : e
                        )
                      );
                    if (e)
                      return s.createElement(
                        "div",
                        { key: n.name, style: c },
                        s.createElement(kt, { label: n.label, src: e }),
                        !n.disabled &&
                          s.createElement(A.Z, {
                            icon: "xmark",
                            onClick: () => l(n, "", !0),
                            style: {
                              cursor: "pointer",
                              flexShrink: 0,
                              flexGrow: 0,
                              marginRight: "1rem",
                            },
                          })
                      );
                    const o = n.inputProps?.allowImage ?? !0;
                    let i = "Image";
                    return (
                      n.inputProps?.allowVideo &&
                        (i = o ? "Image/Video" : "Video"),
                      s.createElement(mt, {
                        key: n.name,
                        label: `${n.label} (Paste ${i} File)`,
                        onKeyDown: (e) => {
                          ("v" === e.key.toLowerCase() &&
                            e.ctrlKey &&
                            !a.disabled) ||
                            e.preventDefault();
                        },
                        onPaste: at({
                          route: n.route,
                          disabled: a.disabled,
                          allowTextPaste: !1,
                          allowFilePaste: !0,
                          allowImage: o,
                          allowVideo: a.allowVideo,
                          onLoad: () => l(n, "loading", !0),
                          onDone: (e) => l(n, e, !0),
                          onFail: (e) => {
                            l(n, "Upload Failed: " + e, !0),
                              setTimeout(() => l(n, "", !0), 3e3);
                          },
                        }),
                        value: e,
                        onChange: (e, t) => l(n, t, !0),
                        ...a,
                      })
                    );
                  }
                  if ("audio" === n.type) {
                    let e = (t[n.name] ?? n.value ?? "").toString(),
                      r =
                        "loading" === e ||
                        e.startsWith("Upload Failed: ") ||
                        e.startsWith("Recording Failed: ");
                    return (
                      r && e === n.value && ((e = ""), (r = !1)),
                      r
                        ? s.createElement(
                            D,
                            {
                              key: n.name,
                              container: !0,
                              alignItems: "center",
                              style: { padding: "0.5rem" },
                              ...a.containerProps,
                            },
                            "loading" === e &&
                              s.createElement(te.Z, {
                                sx: { marginRight: "0.5rem" },
                              }),
                            s.createElement(
                              _.Body2,
                              { ...a.textProps },
                              "loading" === e ? "Uploading..." : e
                            )
                          )
                        : "Recording" !== e &&
                          "Recording Ended" !== e &&
                          "Recording Starting" !== e &&
                          e
                        ? s.createElement(
                            "div",
                            { key: n.name, style: c },
                            s.createElement(
                              _.Body2,
                              {
                                ...a.textProps,
                                style: {
                                  ...a.textProps?.style,
                                  marginLeft: "1rem",
                                },
                              },
                              n.label
                            ),
                            s.createElement("audio", {
                              controls: !0,
                              src: e,
                              style: { margin: "0 1rem" },
                            }),
                            !n.disabled &&
                              s.createElement(A.Z, {
                                icon: "xmark",
                                onClick: () => l(n, "", !0),
                                style: {
                                  cursor: "pointer",
                                  flexShrink: 0,
                                  flexGrow: 0,
                                  marginRight: "1rem",
                                },
                              })
                          )
                        : s.createElement(
                            "div",
                            { key: n.name, style: c },
                            s.createElement(St, {
                              record:
                                "Recording" === e || "Recording Starting" === e,
                              onRecord: () => l(n, "Recording", !0),
                              onRecordEnd: () => l(n, "loading", !0),
                              onDone: (e) => l(n, e, !0),
                              onError: (e) => {
                                l(n, "Recording Failed: " + e.message, !0),
                                  setTimeout(() => l(n, "", !0), 3e3);
                              },
                              route: n.route,
                              ttl: a.ttl ?? 0,
                              maxDuration: a?.maxDuration,
                            }),
                            s.createElement(
                              _.Body2,
                              {
                                ...a.textProps,
                                style: {
                                  ...a.textProps?.style,
                                  marginLeft: "1rem",
                                },
                              },
                              n.label
                            ),
                            s.createElement(
                              "div",
                              {
                                style: {
                                  borderRadius: "50%",
                                  backgroundColor: "red",
                                  width: "2rem",
                                  height: "2rem",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  margin: "0 1rem",
                                  color: "#ffb7b7",
                                  cursor: "pointer",
                                },
                                onClick: () =>
                                  l(
                                    n,
                                    "Recording" === e
                                      ? "Recording Ended"
                                      : "Recording Starting",
                                    !0
                                  ),
                              },
                              s.createElement(A.Z, {
                                icon:
                                  "Recording" === e
                                    ? "stop"
                                    : "Recording Starting" === e
                                    ? "ellipsis"
                                    : "microphone",
                              })
                            )
                          )
                    );
                  }
                  return s.createElement(mt, {
                    key: n.name,
                    label: n.label,
                    onChange: (e, t) => l(n, t),
                    value: (t[n.name] ?? n.value ?? "").toString(),
                    readOnly: n.readonly,
                    ...a,
                  });
                });
            return e.inline
              ? s.createElement("div", { style: e.inlineStyle }, c())
              : s.createElement(
                  oe,
                  {
                    open: !0,
                    hideBackdrop: e.hideBackdrop ?? !1,
                    hideCancelButton: e.hideCancelButton ?? !1,
                    hideSubmitButton: e.hideSubmitButton ?? !1,
                    buttons: e.buttons,
                    onClose: e.onClose,
                    onSubmit: async (...t) => {
                      if (!e.onSubmit) return;
                      const n = await e.onSubmit(...t);
                      n?.error && a(n.message);
                    },
                    title: e.title,
                    maxWidth: e.maxWidth,
                    titleRightDecorator: e.preview ? e.preview() : null,
                  },
                  c(),
                  !!r &&
                    s.createElement(
                      D,
                      {
                        container: !0,
                        alignItems: "center",
                        style: { marginTop: "1rem", marginLeft: "0.5rem" },
                        flexWrap: "nowrap",
                      },
                      s.createElement(A.Z, { iconFull: "fa-exclamation" }),
                      s.createElement(
                        "div",
                        { style: { marginLeft: "0.5rem" } },
                        s.createElement(_, null, r)
                      )
                    )
                );
          };
        (Tt.doForm = (e, t, n, r = {}) => {
          I.Vx(e, {
            _form: { options: { ...r, fields: n }, resolve: async (e) => t(e) },
          });
        }),
          (Tt.getState = (e) => e.get("FormState"));
        var Rt = Tt,
          Dt = (function () {
            var e,
              t = [];
            return (
              (e = n(5531)).keys().forEach(function (n) {
                if (0 !== n.indexOf("./phone/apps")) {
                  var r = e(n).default;
                  t.push(r);
                }
              }),
              t
            );
          })(),
          At = !1,
          Ft = function () {
            return At;
          };
        I.Ue("AppState"), I.Ue("FormState"), I.Ue("ExternalState");
        var Pt = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return u.Nu("message", {
              source: "onx-ui",
              app: "character",
              action: "event",
              data: { character: e, data: t },
            });
          },
          _t = null,
          Zt = !1,
          It = !1,
          Bt = (function () {
            var e = (0, l.Z)(
              (0, i.Z)().mark(function e() {
                var t, n, r;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (It = !1),
                          (t = !1),
                          (n = function (e) {
                            var n = e.data.active;
                            t = n;
                          }),
                          window.addEventListener("socket:init", n),
                          V("auth", { token: _t, type: "fivem_player" }),
                          (e.next = 7),
                          (0, Y.xl)(
                            50,
                            function () {
                              return t && M();
                            },
                            3e5
                          )
                        );
                      case 7:
                        if (
                          ((r = e.sent),
                          window.removeEventListener("socket:init", n),
                          (Zt = r),
                          r)
                        ) {
                          e.next = 13;
                          break;
                        }
                        return (
                          console.error(
                            "failed to connect to socket, not active",
                            { USER_TOKEN: _t, active: r, IS_ACTIVE: t }
                          ),
                          e.abrupt("return")
                        );
                      case 13:
                        return (
                          u.Nu("app:socket:reconnected"),
                          (e.next = 16),
                          (0, Y.NT)(1e3)
                        );
                      case 16:
                        It = !0;
                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          Lt = function (e, t) {
            return !!It || "client_message_send" !== JSON.parse(t).event;
          },
          Mt = function (e) {
            var t = I.U2("FormState"),
              n = s.useRef({}),
              r = (0, C.VI)(
                (function () {
                  var e = (0, l.Z)(
                    (0, i.Z)().mark(function e(n) {
                      var r;
                      return (0, i.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), t._form.resolve(n);
                            case 2:
                              if (((r = e.sent), n)) {
                                e.next = 6;
                                break;
                              }
                              return (
                                I.Vx(t, { _form: null }), e.abrupt("return")
                              );
                            case 6:
                              if (null !== r && void 0 !== r && r.error) {
                                e.next = 9;
                                break;
                              }
                              return (
                                I.Vx(t, { _form: null }), e.abrupt("return")
                              );
                            case 9:
                              return e.abrupt("return", {
                                error: !0,
                                message: r.message,
                              });
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            return t._form
              ? s.createElement(
                  Rt,
                  (0, o.Z)(
                    {
                      onClose: function () {
                        return r(!1);
                      },
                      onSubmit: function () {
                        return r(n.current);
                      },
                      formRef: n,
                    },
                    t._form.options
                  )
                )
              : null;
          },
          jt = function () {
            var e = I.U2("FormState"),
              t = s.useRef({}),
              n = (0, C.VI)(
                (function () {
                  var t = (0, l.Z)(
                    (0, i.Z)().mark(function t(n) {
                      var r;
                      return (0, i.Z)().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), e._confirm.resolve(n);
                            case 2:
                              if (((r = t.sent), n)) {
                                t.next = 6;
                                break;
                              }
                              return (
                                I.Vx(e, { _confirm: null }), t.abrupt("return")
                              );
                            case 6:
                              if (null !== r && void 0 !== r && r.error) {
                                t.next = 9;
                                break;
                              }
                              return (
                                I.Vx(e, { _confirm: null }), t.abrupt("return")
                              );
                            case 9:
                              return t.abrupt("return", {
                                error: !0,
                                message: r.message,
                              });
                            case 10:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })()
              );
            return e._confirm
              ? s.createElement(
                  le,
                  (0, o.Z)(
                    {
                      onClose: function () {
                        return n(!1);
                      },
                      onSubmit: function () {
                        return n(t.current);
                      },
                    },
                    e._confirm.options
                  )
                )
              : null;
          },
          Ht = function () {
            var e = s.useState(!1),
              t = (0, a.Z)(e, 2),
              n = t[0],
              o = t[1],
              u = s.useState(!1),
              d = (0, a.Z)(u, 2),
              f = d[0],
              p = d[1],
              m = s.useState(""),
              h = (0, a.Z)(m, 2),
              v = h[0],
              g = h[1],
              y =
                (s.useRef(null),
                I.eJ("FormState", { _confirm: null, _form: null })),
              S = I.VH("FormState"),
              k = I.eJ("ExternalState", { app: null, meta: {} }),
              T = I.VH("ExternalState"),
              R = new URLSearchParams(window.location.search);
            At = !!R.get("_e_t");
            var D = (0, C.VI)(
                (0, l.Z)(
                  (0, i.Z)().mark(function e() {
                    return (0, i.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            p(!0);
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )
              ),
              A = (0, C.VI)(
                (0, l.Z)(
                  (0, i.Z)().mark(function e() {
                    var t, n, r;
                    return (0, i.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              (0, Y.xl)(50, function () {
                                return c.DK();
                              })
                            );
                          case 2:
                            if (
                              !{
                                NODE_ENV: "production",
                                PUBLIC_URL: "/ui",
                                WDS_SOCKET_HOST: void 0,
                                WDS_SOCKET_PATH: void 0,
                                WDS_SOCKET_PORT: void 0,
                                FAST_REFRESH: !0,
                                REACT_APP_BUILD_ENV: "dev",
                                REACT_APP_DISABLE_MINIMIZE: "true",
                                REACT_APP_IS_LOCAL: "true",
                              }.REACT_APP_CONNECT_SOCKET
                            ) {
                              e.next = 14;
                              break;
                            }
                            if (
                              (E(_t),
                              (t = {
                                url: w("socket_url") || c.U2("api.sockets.url"),
                                path:
                                  w("socket_path") || c.U2("api.sockets.path"),
                              }),
                              (n = t.url),
                              (r = t.path),
                              M())
                            ) {
                              e.next = 8;
                              break;
                            }
                            return (
                              (e.next = 8),
                              j(n, r, {
                                onClose: function () {
                                  return (It = !1);
                                },
                                resumeQueue: Lt,
                              })
                            );
                          case 8:
                            return (
                              (e.next = 10),
                              (0, Y.xl)(
                                50,
                                function () {
                                  return Zt;
                                },
                                6e5
                              )
                            );
                          case 10:
                            if (e.sent) {
                              e.next = 14;
                              break;
                            }
                            return (
                              console.log("could not auth with socket"),
                              e.abrupt("return")
                            );
                          case 14:
                            o(!0),
                              setTimeout(function () {
                                (0, z.gZ)(),
                                  D(),
                                  c.wU() &&
                                    !At &&
                                    Pt(
                                      {
                                        id: 1003,
                                        name: "Some Name",
                                        phone_number: "6505551323",
                                      },
                                      { battlePass: { tier: 4 } }
                                    );
                              }, 1e3);
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )
              ),
              F = (0, C.VI)(
                (function () {
                  var e = (0, l.Z)(
                    (0, i.Z)().mark(function e(t) {
                      var n,
                        r,
                        a,
                        o,
                        l,
                        s,
                        u,
                        d = arguments;
                      return (0, i.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((n = d.length > 1 && void 0 !== d[1] && d[1]),
                                !c.wU())
                              ) {
                                e.next = 8;
                                break;
                              }
                              return (
                                (_t = "STEAM"),
                                A(),
                                (a = R.get("cid")),
                                Pt(
                                  {
                                    id: a ? parseInt(a) : 1003,
                                    name: "Some Name",
                                    phone_number:
                                      null !== (r = R.get("phone_number")) &&
                                      void 0 !== r
                                        ? r
                                        : "6505551323",
                                  },
                                  { battlePass: { tier: 4 } }
                                ),
                                I.Vx(k, {
                                  app: ["phone", "mdw"].includes(R.get("_e_t"))
                                    ? R.get("_e_t")
                                    : "mdw",
                                }),
                                e.abrupt("return")
                              );
                            case 8:
                              return (
                                x(),
                                (e.next = 11),
                                b.get("/game/external?_e_t=".concat(t))
                              );
                            case 11:
                              if (
                                ((o = e.sent), (l = o.data), 200 === o.status)
                              ) {
                                e.next = 17;
                                break;
                              }
                              return (
                                g("URL is invalid, deactivated, or expired."),
                                e.abrupt("return")
                              );
                            case 17:
                              if (!n) {
                                e.next = 22;
                                break;
                              }
                              return (
                                (e.next = 20),
                                b.get(
                                  "/game/external?_e_t=".concat(
                                    t,
                                    "&deactivate=1"
                                  )
                                )
                              );
                            case 20:
                              return g("URL deactivated."), e.abrupt("return");
                            case 22:
                              return (
                                (_t = l.token),
                                A(),
                                (e.next = 26),
                                (0, Y.xl)(
                                  50,
                                  function () {
                                    return Zt;
                                  },
                                  6e5
                                )
                              );
                            case 26:
                              return (e.next = 28), N("characters:get");
                            case 28:
                              (s = e.sent),
                                (u = s.find(function (e) {
                                  return e.id === l.character.id;
                                })),
                                Pt(u, l.data),
                                I.Vx(k, { app: l.app, meta: l.meta });
                            case 32:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            if (
              (s.useEffect(function () {
                return (
                  window.addEventListener("socket:connected", Bt),
                  At
                    ? F(R.get("_e_t"), !!R.get("deactivate"))
                    : ((_t = c.wU() ? "STEAM" : R.get("token")), A()),
                  function () {
                    window.removeEventListener("socket:connected", Bt);
                  }
                );
              }, []),
              v)
            )
              return s.createElement(
                _,
                { style: { textAlign: "center", color: "black" } },
                v
              );
            if (!n) return null;
            var P,
              Z = {},
              B = (0, r.Z)(Dt);
            try {
              for (B.s(); !(P = B.n()).done; ) {
                Z[P.value.name] = !1;
              }
            } catch (L) {
              B.e(L);
            } finally {
              B.f();
            }
            return (
              (0, z.nP)(Z),
              s.createElement(
                S,
                { value: y },
                s.createElement(
                  T,
                  { value: k },
                  (c.wU() || Ft()) &&
                    s.createElement("div", { className: "browser-main-div" }),
                  s.createElement(jt, null),
                  s.createElement(Mt, null),
                  Dt.filter(function (e) {
                    return !At || e.includeExternal;
                  })
                    .filter(function (e) {
                      return !!e.skipCharacterWait || f;
                    })
                    .sort(function (e, t) {
                      return (e.order || 0) - (t.order || 0);
                    })
                    .map(function (e) {
                      return s.createElement(e.Component, { key: e.name });
                    })
                )
              )
            );
          },
          Ot = function (e) {
            var t = s.useState(!1),
              n = (0, a.Z)(t, 2),
              r = n[0],
              o = n[1],
              i = s.useRef(null),
              l = s.useCallback(function (e) {
                var t,
                  n = e.data.action;
                "restart" !== n
                  ? "focus" === n &&
                    (null === (t = i.current) || void 0 === t || t.focus())
                  : c(null);
              }, []);
            s.useEffect(function () {
              return (
                u.Oo("main-event", l),
                function () {
                  u.xg("main-event", l);
                }
              );
            }, []);
            var c = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              e &&
                (console.error(e),
                O("ui:error", { message: e.message, stack: e.stack })),
                t && (0, z.Mi)("main", "ui-restarted"),
                o(!0),
                setTimeout(function () {
                  o(!1);
                }, 2e3);
            };
            return r
              ? s.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      paddingTop: "0.5rem",
                      height: "100vh",
                      width: "100vw",
                    },
                  },
                  s.createElement(
                    "div",
                    {
                      style: {
                        padding: "0.5rem 1rem",
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                        borderRadius: 8,
                      },
                    },
                    s.createElement(
                      _,
                      null,
                      "UI Encountered an error, restarting..."
                    )
                  )
                )
              : s.createElement(
                  S.SV,
                  {
                    fallback: s.createElement(Z, {
                      text1: "App encountered a catastrophic error",
                      text2: "Please try again",
                    }),
                    onError: function (e) {
                      return c(e, !0);
                    },
                  },
                  s.createElement("input", {
                    ref: i,
                    style: { opacity: 0, position: "absolute" },
                  }),
                  s.createElement(Ht, null)
                );
          };
      },
      7164: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            componentName: function () {
              return ne;
            },
            default: function () {
              return re;
            },
          });
        var r = n(1413),
          a = n(2853),
          o = n(1852),
          i = n(7313),
          l = n(9129),
          s = n(9025),
          c = n(5140),
          u = n(2864),
          d = n(4915),
          f = n(4800),
          p = n(4930),
          m = n(8032);
        var h = (e) =>
            i.createElement(
              m.Z,
              { title: e.label, placement: "top", arrow: !0, ...e },
              e.children
            ),
          v = n(2325),
          g = n(885),
          y = n(6565),
          b = n(1124),
          w = n(9500),
          E = n(838),
          x = n(7264),
          C = n(7938),
          S = n(7230),
          k = n(2208),
          T = [
            "HANDLING_TYPE_INVALID",
            "HANDLING_TYPE_BIKE",
            "HANDLING_TYPE_FLYING",
            "HANDLING_TYPE_VERTICAL_FLYING",
            "HANDLING_TYPE_BOAT",
            "HANDLING_TYPE_SEAPLANE",
            "HANDLING_TYPE_SUBMARINE",
            "HANDLING_TYPE_TRAIN",
            "HANDLING_TYPE_TRAILER",
            "HANDLING_TYPE_CAR",
            "HANDLING_TYPE_WEAPON",
            "HANDLING_TYPE_SPECIAL_FLIGHT",
            "HANDLING_TYPE_MAX_TYPES",
          ],
          R = {
            HANDLING_TYPE_INVALID: "Invalid",
            HANDLING_TYPE_BIKE: "Bike",
            HANDLING_TYPE_FLYING: "Flying",
            HANDLING_TYPE_VERTICAL_FLYING: "Vertical Flying",
            HANDLING_TYPE_BOAT: "Boat",
            HANDLING_TYPE_SEAPLANE: "Seaplane",
            HANDLING_TYPE_SUBMARINE: "Submarine",
            HANDLING_TYPE_TRAIN: "Train",
            HANDLING_TYPE_TRAILER: "Trailer",
            HANDLING_TYPE_CAR: "Car",
            HANDLING_TYPE_WEAPON: "Weapon",
            HANDLING_TYPE_SPECIAL_FLIGHT: "Special Flight",
            HANDLING_TYPE_MAX_TYPES: "Max Types",
          },
          D = function () {
            var e = o.U2("AppState");
            return i.createElement(
              S.Z,
              {
                size: "sm",
                placeholder: "Select Handling Type",
                value: e.selectedHandlingType,
                onChange: function (t, n) {
                  o.Vx(e, { selectedHandlingType: n });
                },
                startDecorator: i.createElement(p.Z, { icon: "gears" }),
                sx: { width: "160px" },
              },
              T.map(function (e) {
                return i.createElement(
                  k.Z,
                  { key: "".concat(e, "-option"), value: e },
                  R[e]
                );
              })
            );
          },
          A = { 1: 0, 0.1: 1, 0.01: 2, 0.001: 3, 1e-4: 4, 1e-5: 5 },
          F = function () {
            var e = o.U2("AppState"),
              t = (0, i.useMemo)(
                function () {
                  var t;
                  return (
                    (null ===
                      (t = Object.entries(A).find(function (t) {
                        return (0, g.Z)(t, 2)[1] === e.precision;
                      })) || void 0 === t
                      ? void 0
                      : t[0]) || ""
                  );
                },
                [e.precision]
              ),
              n = (0, i.useCallback)(
                function (t) {
                  if (t) {
                    var n = A[t];
                    o.Vx(e, { precision: n });
                  }
                },
                [e]
              );
            return {
              precision: e.precision,
              setPrecision: n,
              precisionLabel: t,
              precisionSteps: A,
            };
          },
          P = function () {
            var e = F(),
              t = e.setPrecision,
              n = e.precisionSteps,
              r = e.precisionLabel;
            return i.createElement(
              S.Z,
              {
                sx: { width: "160px" },
                onChange: function (e, r) {
                  r && Object.keys(n).includes(r) && t(r);
                },
                value: r,
                size: "sm",
                startDecorator: i.createElement(p.Z, { icon: "ruler" }),
              },
              Object.entries(n).map(function (e) {
                var t = (0, g.Z)(e, 2),
                  n = t[0],
                  r = t[1];
                return i.createElement(
                  k.Z,
                  { key: "".concat(n, "-").concat(r), value: n },
                  n
                );
              })
            );
          },
          _ = [
            "fMass",
            "fInitialDragCoeff",
            "fDownforceModifier",
            "fPercentSubmerged",
            "vecCentreOfMassOffset",
            "vecInertiaMultiplier",
            "fDriveBiasFront",
            "nInitialDriveGears",
            "fInitialDriveForce",
            "fDriveInertia",
            "fClutchChangeRateScaleUpShift",
            "fClutchChangeRateScaleDownShift",
            "fInitialDriveMaxFlatVel",
            "fBrakeForce",
            "fBrakeBiasFront",
            "fHandBrakeForce",
            "fSteeringLock",
            "fTractionCurveMax",
            "fTractionCurveMin",
            "fTractionCurveLateral",
            "fTractionSpringDeltaMax",
            "fLowSpeedTractionLossMult",
            "fCamberStiffnesss",
            "fTractionBiasFront",
            "fTractionLossMult",
            "fSuspensionForce",
            "fSuspensionCompDamp",
            "fSuspensionReboundDamp",
            "fSuspensionUpperLimit",
            "fSuspensionLowerLimit",
            "fSuspensionRaise",
            "fSuspensionBiasFront",
            "fAntiRollBarForce",
            "fAntiRollBarBiasFront",
            "fRollCentreHeightFront",
            "fRollCentreHeightRear",
            "fCollisionDamageMult",
            "fWeaponDamageMult",
            "fDeformationDamageMult",
            "fEngineDamageMult",
            "fPetrolTankVolume",
            "fPetrolConsumptionRate",
            "fOilVolume",
            "fSeatOffsetDistX",
            "fSeatOffsetDistY",
            "fSeatOffsetDistZ",
            "nMonetaryValue",
            "fBackEndPopUpCarImpulseMult",
            "fBackEndPopUpBuildingImpulseMult",
            "fBackEndPopUpMaxDeltaSpeed",
            "fToeFront",
            "fToeRear",
            "fCamberFront",
            "fCamberRear",
            "fCastor",
            "fEngineResistance",
            "fMaxDriveBiasTransfer",
            "fJumpForceScale",
            "fIncreasedRammingForceScale",
            "strAdvancedFlags",
            "fBoxFrontMult",
            "fBoxRearMult",
            "fBoxSideMult",
            "fSampleTop",
            "fSampleBottom",
            "fSampleBottomTestCorrection",
            "fAquaplaneForce",
            "fAquaplanePushWaterMult",
            "fAquaplanePushWaterCap",
            "fAquaplanePushWaterApply",
            "fRudderForce",
            "fRudderOffsetSubmerge",
            "fRudderOffsetForce",
            "fRudderOffsetForceZMult",
            "fWaveAudioMult",
            "vecMoveResistance",
            "vecTurnResistance",
            "fLook_L_R_CamHeight",
            "fDragCoefficient",
            "fKeelSphereSize",
            "fPropRadius",
            "fLowLodAngOffset",
            "fLowLodDraughtOffset",
            "fImpellerOffset",
            "fImpellerForceMult",
            "fDinghySphereBuoyConst",
            "fProwRaiseMult",
            "fDeepWaterSampleBuoyancyMult",
            "fTransmissionMultiplier",
            "fTractionMultiplier",
            "fLeanFwdCOMMult",
            "fLeanFwdForceMult",
            "fLeanBakCOMMult",
            "fLeanBakForceMult",
            "fMaxBankAngle",
            "fFullAnimAngle",
            "fDesLeanReturnFrac",
            "fStickLeanMult",
            "fBrakingStabilityMult",
            "fInAirSteerMult",
            "fWheelieBalancePoint",
            "fStoppieBalancePoint",
            "fWheelieSteerMult",
            "fRearBalanceMult",
            "fFrontBalanceMult",
            "fBikeGroundSideFrictionMult",
            "fBikeWheelGroundSideFrictionMult",
            "fBikeOnStandLeanAngle",
            "fBikeOnStandSteerAngle",
            "fJumpForce",
            "fThrust",
            "fThrustFallOff",
            "fThrustVectoring",
            "fInitialThrust",
            "fInitialThrustFallOff",
            "fYawMult",
            "fYawStabilise",
            "fSideSlipMult",
            "fInitialYawMult",
            "fRollMult",
            "fRollStabilise",
            "fInitialRollMult",
            "fPitchMult",
            "fPitchStabilise",
            "fInitialPitchMult",
            "fFormLiftMult",
            "fAttackLiftMult",
            "fAttackDiveMult",
            "fGearDownDragV",
            "fGearDownLiftMult",
            "fWindMult",
            "fMoveRes",
            "vecTurnRes",
            "vecSpeedRes",
            "fGearDoorFrontOpen",
            "fGearDoorRearOpen",
            "fGearDoorRearOpen2",
            "fGearDoorRearMOpen",
            "fTurublenceMagnitudeMax",
            "fTurublenceForceMulti",
            "fTurublenceRollTorqueMulti",
            "fTurublencePitchTorqueMulti",
            "fBodyDamageControlEffectMult",
            "fInputSensitivityForDifficulty",
            "fOnGroundYawBoostSpeedPeak",
            "fOnGroundYawBoostSpeedCap",
            "fEngineOffGlideMulti",
            "fAfterburnerEffectRadius",
            "fAfterburnerEffectDistance",
            "fAfterburnerEffectForceMulti",
            "fSubmergeLevelToPullHeliUnderwater",
            "fExtraLiftWithRoll",
            "uWeaponHash",
            "fTurretSpeed",
            "fTurretPitchMin",
            "fTurretPitchMax",
            "fTurretCamPitchMin",
            "fTurretCamPitchMax",
            "fBulletVelocityForGravity",
            "fTurretPitchForwardMin",
            "fUvAnimationMult",
            "fMiscGadgetVar",
            "fWheelImpactOffset",
            "vTurnRes",
            "fMoveResXY",
            "fMoveResZ",
            "fPitchMult",
            "fPitchAngle",
            "fYawMult",
            "fDiveSpeed",
            "fRollMult",
            "fRollStab",
            "fAttachLimitPitch",
            "fAttachLimitRoll",
            "fAttachLimitYaw",
            "fUprightSpringConstant",
            "fUprightDampingConstant",
            "fAttachedMaxDistance",
            "fAttachedMaxPenetration",
            "fAttachRaiseZ",
            "fPosConstraintMassRatio",
            "fLeftPontoonComponentId",
            "fRightPontoonComponentId",
            "fPontoonBuoyConst",
            "fPontoonSampleSizeFront",
            "fPontoonSampleSizeMiddle",
            "fPontoonSampleSizeRear",
            "fPontoonLengthFractionForSamples",
            "fPontoonDragCoefficient",
            "fPontoonVerticalDampingCoefficientUp",
            "fPontoonVerticalDampingCoefficientDown",
            "fKeelSphereSize",
            "vecAngularDamping",
            "vecAngularDampingMin",
            "vecLinearDamping",
            "vecLinearDampingMin",
            "fLiftCoefficient",
            "fCriticalLiftAngle",
            "fInitialLiftAngle",
            "fMaxLiftAngle",
            "fDragCoefficient",
            "fBrakingDrag",
            "fMaxLiftVelocity",
            "fMinLiftVelocity",
            "fRollTorqueScale",
            "fMaxTorqueVelocity",
            "fMinTorqueVelocity",
            "fYawTorqueScale",
            "fSelfLevelingPitchTorqueScale",
            "fInitalOverheadAssist",
            "fMaxPitchTorque",
            "fMaxSteeringRollTorque",
            "fPitchTorqueScale",
            "fSteeringTorqueScale",
            "fMaxThrust",
            "fTransitionDuration",
            "fHoverVelocityScale",
            "fStabilityAssist",
            "fMinSpeedForThrustFalloff",
            "fBrakingThrustScale",
            "mode",
            "strFlags",
          ],
          Z = {
            fMaxDriveBiasTransfer: -1,
            fJumpForceScale: 1,
            fIncreasedRammingForceScale: 1,
          },
          I = function (e) {
            return (
              e < 0 && (e = 4294967295 + e + 1), e.toString(16).toUpperCase()
            );
          },
          B = function (e, t, n) {
            var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "",
              a = function (t) {
                try {
                  return e.startsWith("n") ? t.toFixed(0) : t.toFixed(n);
                } catch (r) {
                  return String(t);
                }
              };
            if ("object" === typeof t) {
              var o = [a(t.x), a(t.y), a(t.z)],
                i = o[0],
                l = o[1],
                s = o[2];
              return ""
                .concat(r, "<")
                .concat(e, ' x="')
                .concat(i, '" y="')
                .concat(l, '" z="')
                .concat(s, '" />');
            }
            var c = a(t);
            return "".concat(r, "<").concat(e, ' value="').concat(c, '" />');
          },
          L = function (e, t) {
            var n = e.handling,
              r = e.subHandling,
              a = e.flags,
              o = e.handlingType,
              i = e.indentation,
              l = Object.entries(n)
                .sort(function (e, t) {
                  var n = (0, g.Z)(e, 1)[0],
                    r = (0, g.Z)(t, 1)[0];
                  return _.indexOf(n) - _.indexOf(r);
                })
                .map(function (e) {
                  var n = (0, g.Z)(e, 2),
                    r = n[0],
                    a = n[1];
                  return B(r, a, t);
                })
                .join("\n"),
              s = r
                .map(function (e) {
                  var n = e.type,
                    r = e.data,
                    a = Object.entries(r)
                      .sort(function (e, t) {
                        var n = (0, g.Z)(e, 1)[0],
                          r = (0, g.Z)(t, 1)[0];
                        return _.indexOf(n) - _.indexOf(r);
                      })
                      .filter(function (e) {
                        var t = (0, g.Z)(e, 2),
                          n = t[0],
                          r = t[1];
                        return !Z[n] || r !== Z[n];
                      })
                      .map(function (e) {
                        var n = (0, g.Z)(e, 2),
                          r = n[0],
                          a = n[1];
                        return "strAdvancedFlags" === r
                          ? ""
                              .concat(i.repeat(2), "<strAdvancedFlags>")
                              .concat(I(a), "</strAdvancedFlags>")
                          : B(r, a, t, i.repeat(2));
                      })
                      .join("\n");
                  return (
                    "CFlyingHandlingData" === n &&
                      o &&
                      (a += "\n"
                        .concat(i.repeat(2), "<handlingType>")
                        .concat(o, "</handlingType>")),
                    ""
                      .concat(i, '<Item type="')
                      .concat(n, '">\n')
                      .concat(a, "\n")
                      .concat(i, "</Item>")
                  );
                })
                .join("\n"),
              c = Math.max(0, 3 - r.length),
              u = Array(c)
                .fill("".concat(i, '<Item type="NULL" />'))
                .join("\n");
            return ""
              .concat(l, "\n<strModelFlags>")
              .concat(
                I(a.VehicleModelFlag),
                "</strModelFlags>\n<strHandlingFlags>"
              )
              .concat(
                I(a.VehicleHandlingFlag),
                "</strHandlingFlags>\n<strDamageFlags>"
              )
              .concat(
                I(a.VehicleDamageFlag),
                "</strDamageFlags>\n<AIHandling>AVERAGE</AIHandling>\n<SubHandlingData>\n"
              )
              .concat(s, "\n")
              .concat(u, "\n</SubHandlingData>")
              .trim();
          },
          M = function () {
            var e = o.U2("AppState"),
              t = F().precision,
              n = (0, i.useState)(""),
              l = (0, g.Z)(n, 2),
              s = l[0],
              u = l[1],
              d = (0, i.useState)(!0),
              f = (0, g.Z)(d, 2),
              m = f[0],
              h = f[1],
              v = (0, i.useState)(""),
              S = (0, g.Z)(v, 2),
              k = S[0],
              T = S[1],
              R = (0, i.useState)(null),
              A = (0, g.Z)(R, 2),
              _ = A[0],
              Z = A[1],
              I = (0, i.useState)(!1),
              B = (0, g.Z)(I, 2),
              M = B[0],
              j = B[1],
              H = (0, i.useCallback)(
                function () {
                  var e = (0, x.Z)();
                  T(e),
                    h(!0),
                    (0, a.Mi)(ne, "onx-vehicles:handling:ui:export", {
                      uuid: e,
                      precision: t,
                    });
                },
                [t]
              );
            (0, i.useEffect)(
              function () {
                H();
              },
              [H]
            ),
              (0, i.useEffect)(
                function () {
                  if (e.export && e.export.uuid === k) {
                    var n = e.export.subHandling.some(function (e) {
                      return "CFlyingHandlingData" === e.type;
                    });
                    j(n);
                    var a = (0, r.Z)(
                      (0, r.Z)({}, e.export),
                      {},
                      { handlingType: n ? e.selectedHandlingType : void 0 }
                    );
                    u(L(a, t)), h(!1), Z(new Date());
                  }
                },
                [e.export, k, t, e.selectedHandlingType]
              );
            var O = (0, i.useMemo)(
                function () {
                  var e = s
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/\n/g, "<br>");
                  return e.replace(
                    /(&lt;[\/!]?[a-zA-Z0-9]+)([^&]*?)(&gt;|\/&gt;)/g,
                    '<span style="color: var(--joy-palette-primary-500);">$1</span>$2<span style="color: var(--joy-palette-primary-500);">$3</span>'
                  );
                },
                [s]
              ),
              N = (0, i.useCallback)(
                function () {
                  return (0, C.JG)(
                    e.export.indentation.repeat(3) +
                      s.replace(/\n/g, "\n" + e.export.indentation.repeat(3))
                  );
                },
                [s, e.export]
              );
            return i.createElement(
              c.Z,
              {
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  m: 0.5,
                  width: "550px",
                  position: "relative",
                },
              },
              i.createElement(
                c.Z,
                {
                  sx: {
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    mb: 1,
                    gap: 1,
                  },
                },
                M && i.createElement(D, null),
                i.createElement(
                  c.Z,
                  { sx: { display: "flex", gap: 1 } },
                  i.createElement(P, null),
                  i.createElement(
                    y.Z,
                    { variant: "outlined", onClick: H, size: "sm" },
                    i.createElement(p.Z, { icon: "refresh" })
                  ),
                  i.createElement(
                    y.Z,
                    { variant: "outlined", onClick: N, size: "sm" },
                    i.createElement(p.Z, { icon: "copy" })
                  )
                )
              ),
              m
                ? i.createElement(
                    c.Z,
                    {
                      sx: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      },
                    },
                    i.createElement(b.Z, null)
                  )
                : i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(
                      c.Z,
                      {
                        sx: {
                          cursor: "text",
                          userSelect: "text",
                          height: "calc(100% - 80px)",
                          overflow: "auto",
                          fontFamily: "monospace",
                          fontSize: "0.8rem",
                          fontWeight: "bolder",
                          border: "1px solid",
                          borderColor: "divider",
                          borderRadius: "sm",
                          p: 1,
                          backgroundColor: "background.body",
                          boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
                          "&:hover": { borderColor: "primary.main" },
                          "&:focus-within": {
                            borderColor: "primary.main",
                            boxShadow: function (e) {
                              return "0 0 0 2px ".concat(
                                e.vars.palette.primary.outlinedBorder
                              );
                            },
                          },
                        },
                      },
                      i.createElement("pre", {
                        style: {
                          margin: 0,
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                          minHeight: "100%",
                          outline: "none",
                        },
                        dangerouslySetInnerHTML: { __html: O },
                        tabIndex: 0,
                      })
                    ),
                    i.createElement(
                      c.Z,
                      {
                        sx: {
                          display: "flex",
                          justifyContent: "flex-end",
                          mt: 1,
                        },
                      },
                      i.createElement(
                        w.ZP,
                        { level: "body3", sx: { mr: 1 } },
                        "Gerado: ",
                        _ ? (0, E.WU)(_, "hh:mm:ss a") : "N/A"
                      )
                    )
                  )
            );
          },
          j = i.memo(M),
          H = n(6436),
          O = n(3703),
          N = n(2982),
          V = function (e) {
            var t = e.initialValue,
              n = e.fieldKey,
              r = e.messageType,
              l = void 0 === r ? "fieldUpdate" : r,
              s = e.meta,
              c = F().precision,
              u = (0, i.useCallback)(
                function (e) {
                  return Number(e.toFixed(c));
                },
                [c]
              ),
              d = Array.isArray(t),
              f = (0, i.useState)(function () {
                return d
                  ? t.map(function (e) {
                      return u(e).toString();
                    })
                  : u(t).toString();
              }),
              p = (0, g.Z)(f, 2),
              m = p[0],
              h = p[1],
              v = (0, i.useState)(t),
              y = (0, g.Z)(v, 2),
              b = y[0],
              w = y[1],
              E = (0, i.useRef)(null),
              C = (0, i.useRef)(null),
              S = (0, i.useState)("idle"),
              k = (0, g.Z)(S, 2),
              T = k[0],
              R = k[1],
              D = (0, i.useState)(null),
              A = (0, g.Z)(D, 2),
              P = A[0],
              _ = A[1],
              Z = o.U2("AppState");
            (0, i.useEffect)(function () {
              return function () {
                E.current && clearTimeout(E.current),
                  C.current && clearTimeout(C.current);
              };
            }, []),
              (0, i.useEffect)(
                function () {
                  w(t);
                },
                [t]
              ),
              (0, i.useEffect)(
                function () {
                  Z.resolvedUpdate &&
                    "" !== Z.resolvedUpdate &&
                    Z.resolvedUpdate === P &&
                    (_(null),
                    R("resolved"),
                    setTimeout(function () {
                      return R("idle");
                    }, 1e3));
                },
                [Z.resolvedUpdate, P]
              ),
              (0, i.useEffect)(
                function () {
                  var e = d
                    ? b.map(function (e) {
                        return u(e).toString();
                      })
                    : u(b).toString();
                  h(e);
                },
                [c, b, u, d]
              );
            var I = (0, i.useCallback)(
                function (e) {
                  if ((!d || !e.some(isNaN)) && (d || !isNaN(e))) {
                    var t = (0, x.Z)();
                    R("loading"),
                      _(t),
                      (0, a.Mi)(ne, "onx-vehicles:handling:ui:".concat(l), {
                        uuid: t,
                        updatedField: {
                          key: n,
                          value: d ? e.map(u) : u(e),
                          meta: s,
                        },
                      });
                  }
                },
                [n, u, d, l]
              ),
              B = (0, i.useCallback)(
                function (e) {
                  E.current && clearTimeout(E.current),
                    C.current && clearTimeout(C.current);
                  var n = function () {
                      var e = d
                        ? t.map(function (e) {
                            return u(e).toString();
                          })
                        : u(t).toString();
                      h(e), w(t);
                    },
                    r = d ? 2e3 : 1e3;
                  d
                    ? e.some(function (e) {
                        return "-" === e;
                      })
                      ? (C.current = setTimeout(n, 3e3))
                      : e.every(function (e) {
                          return !isNaN(parseFloat(e));
                        }) &&
                        (E.current = setTimeout(function () {
                          var t = e.map(function (e) {
                              return parseFloat(e);
                            }),
                            n = t.map(u);
                          h(
                            n.map(function (e) {
                              return e.toString();
                            })
                          ),
                            w(t),
                            I(n);
                        }, r))
                    : "-" === e
                    ? (C.current = setTimeout(n, 3e3))
                    : isNaN(parseFloat(e)) ||
                      (E.current = setTimeout(function () {
                        var t = parseFloat(e),
                          n = u(t);
                        h(n.toString()), w(t), I(n);
                      }, r));
                },
                [I, t, u, d]
              );
            return {
              displayValues: m,
              updateStatus: T,
              handleChange: d
                ? function (e) {
                    return function (t) {
                      var n = t.target.value;
                      if (/^-?\d*\.?\d*$/.test(n)) {
                        var r = (0, N.Z)(m);
                        (r[e] = n), h(r), B(r);
                      }
                    };
                  }
                : function (e) {
                    var t = e.target.value;
                    /^-?\d*\.?\d*$/.test(t) && (h(t), B(t));
                  },
            };
          },
          U = function (e) {
            var t = e.initialValue,
              n = e.fieldKey,
              r = e.type,
              a = e.meta,
              o = e.disabled,
              l = V({ initialValue: t, fieldKey: n, messageType: r, meta: a }),
              s = l.displayValues,
              c = l.updateStatus,
              u = l.handleChange;
            return i.createElement(H.ZP, {
              size: "sm",
              value: s,
              onChange: u,
              endDecorator: (function () {
                switch (c) {
                  case "loading":
                    return i.createElement(p.Z, { icon: "spinner" });
                  case "resolved":
                    return i.createElement(p.Z, { icon: "check" });
                  default:
                    return null;
                }
              })(),
              disabled: !!o,
            });
          },
          W = n(6071),
          G = function (e) {
            var t = e.initialValue,
              n = e.fieldKey,
              r = e.disabled,
              a = V({ initialValue: t, fieldKey: n }),
              o = a.displayValues,
              l = a.updateStatus,
              s = a.handleChange,
              c = function () {
                switch (l) {
                  case "loading":
                    return i.createElement(p.Z, { icon: "spinner" });
                  case "resolved":
                    return i.createElement(p.Z, { icon: "check" });
                  default:
                    return null;
                }
              };
            return i.createElement(
              W.Z,
              {
                direction: "row",
                alignItems: "center",
                sx: { width: "100%", justifyContent: "space-between" },
              },
              o.map(function (e, t) {
                return i.createElement(H.ZP, {
                  key: "".concat(n, "-").concat(t, "-vector"),
                  size: "sm",
                  value: e,
                  onChange: s(t),
                  endDecorator: c(),
                  disabled: !!r,
                });
              })
            );
          },
          Y = {
            borderAxis: "none",
            size: "md",
            stickyFooter: !1,
            stickyHeader: !0,
            variant: "plain",
            sx: {
              tableLayout: "fixed",
              "& td": {
                overflowWrap: "break-word",
                wordBreak: "break-all",
                border: "0",
              },
              "& th": { position: "sticky", top: 0, zIndex: 1 },
              "& tbody tr:nth-of-type(odd)": { backgroundColor: "transparent" },
              "& tbody tr:nth-of-type(even)": {
                backgroundColor: "rgba(0,0,0,0.15)",
              },
              "& th:nth-of-type(1)": { width: "35%" },
              "& th:nth-of-type(2)": { width: "70px" },
              "& th:nth-of-type(3)": { width: "auto" },
              "& th:nth-of-type(4)": { width: "auto" },
              "& th:nth-of-type(5)": { width: "125px" },
            },
          },
          z = JSON.parse(
            '{"fMass":"Peso do veículo em quilogramas. Isso afeta apenas como o veículo se comporta em colisões. O peso que influencia na dirigibilidade é determinado pelas propriedades de massa do volume de colisão do modelo 3D. Valores mais altos fazem o veículo parecer mais pesado ao colidir com objetos, pedestres ou outros veículos.","fInitialDragCoeff":"Coeficiente de arrasto aerodinâmico. Menores valores = menos arrasto. Este valor funciona em conjunto com o fInitialDriveMaxFlatVel para impor uma velocidade máxima definida. Valores padrão para o coeficiente de arrasto criam a sensação de um limitador rígido para a velocidade máxima. Um coeficiente de arrasto menor permitirá uma subida mais gradual para uma velocidade máxima maior. Não é recomendado usar valores menores que 1. Use valores maiores para impor um limitador rígido em uma distância mais curta e valores menores para uma sensação mais realista. Hiper/Super: 1.5 a 3, Esportivos: 3 a 4.5, Sedãs/SUVs: 4.5 a 6, Pickups/Vans: 6 a 7.5, Caminhões grandes/Comerciais: 7.5+","fDownforceModifier":"Aumenta a aderência ao fazer curvas em altas velocidades. Recomendado: Carros de Corrida: 1.5 a 2, Esportivos: 1.2 a 1.5, Sedãs/SUVs: 0.9 a 1.2, Pickups/Vans: 0.6 a 0.9, Caminhões: ~0.6","fPercentSubmerged":"A porcentagem do veículo que deve estar submersa na água antes de começar a flutuar.","fDriveBiasFront":"Distribuição da potência para as rodas. 0 = Tração traseira (RWD), 0< & <1 = Tração total/4x4 (AWD/4WD), 1 = Tração dianteira (FWD)","nInitialDriveGears":"Número de marchas na transmissão. Mais marchas = marchas mais curtas, menos marchas = marchas mais longas.","fInitialDriveForce":"Aceleração do veículo. Valores maiores = mais potência. O mesmo valor pode produzir diferentes potências dependendo dos outros atributos de handling com os quais o fInitialDriveForce trabalha em conjunto. Um valor maior de fInitialDriveMaxFlatVel aumentará a saída de potência. Qualquer carro AWD (fDriveBiasFront não configurado como 0 ou 1) precisará de aproximadamente 5-10% menos fInitialDriveForce para igualar a potência percebida de um carro RWD/FWD. Exemplos aproximados de potência para um carro esportivo pesando 1500 kg, com fInitialDragCoeff = 3 e fInitialDriveMaxFlatVel = 170: 300hp =  fInitialDriveForce: 0.203, 600hp = fInitialDriveForce: 0.3223, 1000hp = fInitialDriveForce: 0.4531","fDriveInertia":"Taxa de aumento de rpm do motor ao longo do tempo. O impacto na aceleração é insignificante; isso é usado principalmente para áudio. O valor padrão é 1. Reduza para até 0.5 para motores diesel ou veículos com aceleração lenta. Aumente para até 1.5 para motores rápidos e de alta rotação.","fClutchChangeRateScaleUpShift":"Quão rápido o veículo troca para marchas superiores. Caminhão: 1 a 2, Manual: 2 a 4, Automático: 4 a 6, Esportivo Automático: 6 a 8, Corrida: 8+","fClutchChangeRateScaleDownShift":"Quão rápido o veículo troca para marchas inferiores. Caminhão: 1 a 2, Manual: 2 a 4, Automático: 4 a 6, Esportivo Automático: 6 a 8, Corrida: 8+","fInitialDriveMaxFlatVel":"Limitador de velocidade máxima do veículo. Este valor é cerca de 30 mph acima da velocidade máxima real em mph para configurações padrão (vanilla). No entanto, muitos outros valores de handling influenciam na velocidade máxima. Este valor também reduz/aumenta a aceleração e encurta/alonga as relações de marcha. Por exemplo, se você quiser aumentar a velocidade máxima, mas manter a mesma aceleração, terá que reduzir o fInitialDriveForce à medida que aumenta este valor.","fBrakeForce":"Potência de frenagem. Valores mais altos param o veículo em uma distância menor e fazem as rodas travarem mais rapidamente se as flags de ABS não estiverem configuradas. Recomendado: Caminhões: 0.1 a 0.3, Muscle Cars Clássicos: 0.2 a 0.4, SUVs/Pickups: 0.3 a 0.6, Sedãs: 0.5 a 0.6, Esportivos: 0.6 a 0.8, Corrida: 0.8 a 1.5","fBrakeBiasFront":"Distribuição da força de frenagem entre as rodas dianteiras e traseiras. Um viés dianteiro melhora a estabilidade na frenagem em linha reta, mas muito pode causar subesterço(Frente) durante frenagens em curva. Um viés traseiro é mais propenso a induzir sobresterço(Traseira). 0 = Toda a força para as rodas traseiras, 1 = Toda a força para as rodas dianteiras. ","fHandBrakeForce":"Força do freio de mão. Valores mais altos facilitam o travamento das rodas, especialmente em baixas velocidades. Valores altos são melhores para iniciar derrapagens e entradas mais agressivas, simulando um kick da embreagem ao engatar o freio de mão.","fSteeringLock":"Define o ângulo máximo de direção em graus de rotação. Ângulo menor para mais estabilidade em altas velocidades. Ângulo maior para veículos que precisam de mais raio de curva. Recomendado: Corrida: 30 a 40, Regular: 35 a 45, Comercial: 45 a 60, Drift: 70 a 85. A rotação visível pode ser menor do que a definida por este valor para alguns veículos","fTractionCurveMax":"A tração máxima ao fazer curvas quando o veículo não está deslizando. Valores mais altos oferecem mais aderência, impedindo o veículo de perder tração, derrapar ou perder controle em curvas mais agressivas. Mínimo recomendado: 1.5, máximo: 2.5","fTractionCurveMin":"Quando o veículo começa a perder tração, define quanta tração deve ser aplicada. Esse valor deve sempre ser menor que o fTractionCurveMax, pois você espera que o veículo tenha menos aderência ao deslizar/derrapar. Um valor mais alto melhora a recuperação do veículo quando ele perde tração. Quanto mais próximo o valor Min estiver do Max, mais consistente será a sensação de aderência. Uma diferença maior permite que o veículo recupere aderência e também mantenha derrapagens quando perde tração. Mínimo recomendado: 1, máximo: 2.3","fTractionCurveLateral":"O ângulo de aderência máxima lateral do veículo, em graus, ao fazer uma curva. Valores menores resultam em uma sensação mais responsiva e abrupta, produzindo mais subesterço(Frente) sem aderência suficiente e alcançando a aderência máxima mais cedo. Valores mais altos proporcionam uma sensação mais solta, com maior margem para perder tração, induzindo sobresterço(Traseira) antes de alcançar o ângulo de aderência máxima e permitindo deslizes mais consistentes. Corrida: 17.5 a 22, Normal: 22 a 25.","fTractionSpringDeltaMax":"O efeito que o deslocamento da suspensão tem na aderência. Valores mais altos permitem maiores variações na tração com o deslocamento da suspensão, enquanto valores mais baixos minimizam o impacto do deslocamento da suspensão na tração. Recomendado: 0.1 a 0.2","fLowSpeedTractionLossMult":"Perda de tração durante a aceleração em baixas velocidades e arrancadas. 0 = Nenhuma perda de tração. Valores mais altos = Mais derrapagem em baixas velocidades. Recomendado: 0 a 1.","fCamberStiffnesss":"Geralmente não utilizado em veículos padrão, produz resultados bugados em movimentos laterais se não for 0.","fTractionBiasFront":"A distribuição de tração entre as rodas dianteiras e traseiras. Um viés dianteiro proporciona maior responsividade e provoca mais sobresterço(Traseira). Um viés traseiro é mais estável e provoca mais subesterço(Frente).","fTractionLossMult":"Multiplicador de perda máxima de tração aplicado em superfícies que reduzem a aderência, como terra, neve, chuva, cascalho, etc. 0 = nenhuma perda de tração em comparação com a aderência usual. Recomendado: 0 a 1.5","fSuspensionForce":"A rigidez da suspensão. Uma suspensão mais rígida reduz a inclinação da carroceria e ajuda a manter a tração. É maior em carros esportivos/de corrida e menor em veículos off-road ou de grande porte. Uma suspensão mais macia absorve melhor os impactos de terrenos irregulares.","fSuspensionCompDamp":"Amortecimento de compressão da suspensão: valores mais altos reduzem o impacto das mudanças de elevação do terreno na capacidade das rodas de se moverem para cima, diminuindo a quantidade de compressão que a suspensão sofre. Um valor mais alto de amortecimento de compressão melhora a estabilidade para corridas, mas valores excessivamente altos reduzem a responsividade do veículo. Valores menores melhoram a absorção de impacto em terrenos irregulares, como em veículos off-road. Recomendado: 1 a 2.","fSuspensionReboundDamp":"Amortecimento de retorno da suspensão: valores mais altos reduzem o tempo necessário para a suspensão descomprimir e se estender para baixo. Um valor mais alto de amortecimento de retorno aumenta a responsividade do veículo. Valores típicos padrão podem fazer com que os veículos pareçam muito rígidos; para permitir mais movimento da carroceria e transferência de peso semelhante ao GTA IV, recomenda-se um valor menor que 1 e menor que o fSuspensionCompDamp. Recomendado: 0.5 a 1.5.","fSuspensionUpperLimit":"A quantidade de deslocamento permitida para as rodas quando a suspensão é comprimida e as rodas se movem para cima. Valores muito altos podem causar sobreposição visual das rodas com a carroceria, enquanto valores muito baixos podem impedir que as rodas se movam o suficiente, resultando em impulsos de velocidade na suspensão devido a compressões rápidas. Recomendado: 0.08 a 0.13.","fSuspensionLowerLimit":"A quantidade de deslocamento permitida para as rodas quando a suspensão retorna e as rodas se movem para baixo. Valores muito altos podem fazer com que as rodas se afastem demais da carroceria do veículo, enquanto valores muito baixos podem impedir que as rodas se movam o suficiente, resultando em impulsos de velocidade na suspensão devido a um retorno rápido. Recomendado: -0.1 a -0.15.","fSuspensionRaise":"A quantidade para aumentar ou diminuir a altura do veículo. Não é recomendado reduzir a altura significativamente usando este valor, pois diminuir demais a altura prejudicará negativamente a dirigibilidade. Essa altura será reduzida ainda mais por qualquer modificação na suspensão. Valores negativos diminuem a altura, enquanto valores positivos a aumentam.","fSuspensionBiasFront":"Distribuição da força da suspensão entre a frente e a traseira do veículo. Um viés na suspensão dianteira aumentará a estabilidade, mas causará subesterço(Frente). Um viés na suspensão traseira resultará em maior transferência de peso e causará sobresterço(Traseira). Observe que a inclinação visual do veículo também muda para valores que se desviam de 0.5; um viés dianteiro fará com que a traseira fique mais baixa, enquanto um viés traseiro abaixará o nariz do veículo. Recomendado: 0.47 a 0.53.","fAntiRollBarForce":"Força da barra anti-rolagem/estabilizadora. Valores mais altos produzirão uma barra estabilizadora mais reativa quando o veículo começar a inclinar ao fazer uma curva; o lado interno da curva será puxado para baixo ou para cima de forma mais agressiva. Se o veículo atingir o limite de inclinação, uma força mais alta da barra estabilizadora fará com que ele vire rapidamente, enquanto uma força mais baixa permitirá uma inclinação gradual até que ele caia. O que determina se o veículo irá capotar são os valores da altura do centro dianteiro e traseiro. Recomendado: 0 a 1. Um valor 0 parecerá mais animado e permitirá transferência de peso, enquanto 1 será mais rígido.","fAntiRollBarBiasFront":"Distribuição da força da barra estabilizadora. Um viés dianteiro > 0.5 proporciona maior estabilidade nas curvas e melhor resposta ao sobresterço(Traseira). Um viés traseiro < 0.5 resulta em maior transferência de peso e balanço da traseira. 0 é totalmente voltado para o viés traseiro, enquanto 1 é totalmente voltado para o viés dianteiro. Recomendado: 0.25 a 0.75.","fRollCentreHeightFront":"O ponto em que o modelo do veículo gira em torno das rodas dianteiras. Esse ponto de pivô, em relação ao seu centro de massa, determina como o veículo inclina/rola. Valores menores resultam em mais inclinação, enquanto valores maiores reduzem a inclinação. Quanto mais próximo ao centro de massa do veículo, mais rígido ele parecerá. Este valor é um fator importante para movimentos realistas. Valores muito altos podem ultrapassar o centro de massa, resultando em inclinação invertida (o veículo inclina para dentro da curva em vez de para fora). Esse valor é exclusivo para cada veículo.","fRollCentreHeightRear":"O ponto em que o modelo do veículo gira em torno das rodas traseiras. Esse ponto de pivô, em relação ao seu centro de massa, determina como o veículo inclina/rola. Valores menores resultam em mais rolagem, enquanto valores maiores reduzem a rolagem. Quanto mais próximo ao centro de massa do veículo, mais rígido ele parecerá. Este valor é um fator importante para movimentos realistas. Valores muito altos podem ultrapassar o centro de massa, resultando em inclinação invertida (o veículo inclina para dentro da curva em vez de para fora). Esse valor é exclusivo para cada veículo.","fCollisionDamageMult":"Taxa de dano à saúde do veículo causado por colisões.","fWeaponDamageMult":"Taxa de dano à saúde do veículo causado por armas.","fDeformationDamageMult":"Quantidade de deformação visual por colisões. Menor = Menos dano visual. Maior = Mais dano visual e amassados. Valores muito altos podem causar efeitos negativos na dirigibilidade, já que as rodas podem entortar.","fEngineDamageMult":"Taxa de dano à saúde do motor até que ele pegue fogo ou se torne inoperável.","fPetrolTankVolume":"Quantidade de combustível que o tanque comporta, em litros. Não usado nativamente.","fPetrolConsumptionRate":"Taxa de consumo de combustível. Este é um recurso nativo do FiveM se o consumo de combustível estiver habilitado. Não usado no jogo base.","fOilVolume":"Quantidade de óleo mantida pelo motor, em litros. Não usado nativamente.","fSeatOffsetDistX":"Offsets de entrada/saída em relação à posição do assento, em metros, no eixo X (esquerda/direita em relação ao veículo).","fSeatOffsetDistY":"Offsets de entrada/saída em relação à posição do assento, em metros, no eixo Y (frente/trás em relação ao veículo).","fSeatOffsetDistZ":"Offsets de entrada/saída em relação à posição do assento, em metros, no eixo Z (para cima/para baixo em relação ao veículo).","nMonetaryValue":"Valor do veículo usado para custos de reparo nativos e revenda.","fBackEndPopUpCarImpulseMult":"Sensibilidade do impulso de velocidade aplicada para cima na traseira do veículo ao colidir com outros veículos. Valores mais altos tornam o veículo mais reativo em impactos. Deve ser usado em combinação com fBackEndPopUpMaxDeltaSpeed","fBackEndPopUpBuildingImpulseMult":"Sensibilidade do impulso de velocidade aplicada para cima na traseira do veículo ao colidir com o ambiente. Valores mais altos tornam o veículo mais reativo em impactos. Deve ser usado em combinação com fBackEndPopUpMaxDeltaSpeed","fBackEndPopUpMaxDeltaSpeed":"Velocidade e força que a traseira do veículo experimenta ao colidir. 0 significa nenhuma velocidade. Recomendado: 0 a 1","fToeFront":"Alinhamento de toe das rodas dianteiras. Toe positivo (toe-in) é quando a frente das rodas aponta para dentro do veículo. Toe negativo (toe-out) é quando a frente das rodas aponta para fora do veículo. Toe positivo dianteiro aumenta a estabilidade da direção, enquanto toe negativo dianteiro aumenta a responsividade da direção. 0.001 equivale a 1 grau de rotação. Recomendado: 0 a -0.03","fToeRear":"Alinhamento de toe das rodas traseiras. Toe positivo (toe-in) é quando a frente das rodas aponta para dentro do veículo. Toe negativo (toe-out) é quando a frente das rodas aponta para fora do veículo. Toe positivo traseiro reduz o sobresterço(Traseira), enquanto toe negativo reduz a estabilidade em linha reta. 0.001 equivale a 1 grau de rotação. Recomendado: 0 a 0.03","fCamberFront":"Ângulo de cambagem das rodas dianteiras. Cambagem positiva inclina a parte inferior das rodas para dentro em direção ao centro do veículo, enquanto cambagem negativa inclina a parte superior das rodas para dentro. 0.001 equivale a 1 grau de rotação. Maior cambagem negativa fornece aderência ideal em curvas de alta velocidade. Recomendado: Normal: 0, Corrida: -0.02 a -0.035, Drift: -0.03 a -0.07.","fCamberRear":"Ângulo de cambagem das rodas traseiras. Cambagem positiva inclina a parte inferior das rodas para dentro em direção ao centro do veículo, enquanto cambagem negativa inclina a parte superior das rodas para dentro. 0.001 equivale a 1 grau de rotação. Maior cambagem negativa proporciona aderência ideal em curvas de alta velocidade. Quantidades menores em relação à dianteira evitam sobresterço(Traseira). Recomendado: Normal: 0, Corrida: -0.01 a -0.025, Drift: -0.01 a -0.03.","fCastor":"Ângulo de pivô da direção (castor). Castor positivo é quando o ponto de pivô da direção está deslocado para trás em relação ao centro da roda na frente do veículo. Castor negativo é quando o ponto de pivô da direção está deslocado para frente. Castor positivo melhora a estabilidade em linha reta e o autoalinhamento ao dirigir. 0.001 equivale a 1 grau de ângulo de castor. Recomendado: Normal: 0, Corrida: 0.05 a 0.08, Drift: 0.06 a 0.12"}'
          ),
          K = function () {
            var e = o.U2("AppState"),
              t = (0, i.useState)(""),
              n = (0, g.Z)(t, 2),
              a = n[0],
              l = n[1],
              s = (0, i.useMemo)(
                function () {
                  var t =
                    "" !== a
                      ? Object.fromEntries(
                          Object.entries(e.handling).filter(function (e) {
                            return (0, g.Z)(e, 1)[0]
                              .toLowerCase()
                              .includes(a.toLowerCase());
                          })
                        )
                      : e.handling;
                  return _.filter(function (e) {
                    return e in t;
                  }).reduce(function (e, n) {
                    return (e[n] = t[n]), e;
                  }, {});
                },
                [a, e.handling]
              ),
              u = (0, i.useCallback)(function (e) {
                l(e.target.value);
              }, []);
            return i.createElement(
              c.Z,
              {
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                },
              },
              i.createElement(
                c.Z,
                {
                  sx: {
                    m: 0.5,
                    display: "flex",
                    justifyContent: "space-between",
                  },
                },
                i.createElement(H.ZP, {
                  size: "sm",
                  startDecorator: i.createElement(p.Z, {
                    icon: "magnifying-glass",
                  }),
                  placeholder: "Pesquisar parâmetros",
                  value: a,
                  onChange: u,
                  sx: { width: "100%", marginRight: "8px" },
                }),
                i.createElement(P, null)
              ),
              i.createElement(
                c.Z,
                {
                  sx: {
                    flexGrow: 1,
                    overflow: "auto",
                    m: 0.5,
                    position: "relative",
                    width: "570px",
                  },
                },
                i.createElement(
                  O.Z,
                  (0, r.Z)(
                    (0, r.Z)({}, Y),
                    {},
                    {
                      sx: (0, r.Z)(
                        (0, r.Z)({}, Y.sx),
                        {},
                        {
                          "& th:nth-of-type(1)": { width: "250px" },
                          "& th:nth-of-type(2)": { width: "80px" },
                          "& th:nth-of-type(3)": { width: "80px" },
                          "& th:nth-of-type(4)": { width: "80px" },
                          "& th:nth-of-type(5)": { width: "80px" },
                        }
                      ),
                    }
                  ),
                  i.createElement(
                    "thead",
                    null,
                    i.createElement(
                      "tr",
                      null,
                      i.createElement("th", null, "Nome"),
                      i.createElement("th", null, "Info"),
                      i.createElement("th", null, "Original"),
                      i.createElement("th", null, "Atual")
                    )
                  ),
                  i.createElement(
                    "tbody",
                    null,
                    Object.entries(s)
                      .filter(function (e) {
                        var t = (0, g.Z)(e, 2),
                          n = t[0];
                        t[1];
                        return !n.startsWith("vec");
                      })
                      .map(function (t) {
                        var n = (0, g.Z)(t, 2),
                          r = n[0],
                          a = n[1];
                        return i.createElement(
                          "tr",
                          { key: "".concat(r, "-table-row") },
                          i.createElement(
                            "td",
                            { style: { color: "#ededed" } },
                            r
                          ),
                          i.createElement(
                            "td",
                            null,
                            z[r]
                              ? i.createElement(
                                  h,
                                  {
                                    title: z[r],
                                    placement: "right",
                                    arrow: !0,
                                    sx: { maxWidth: "40vw" },
                                  },
                                  i.createElement(
                                    y.Z,
                                    { size: "sm", variant: "plain" },
                                    i.createElement(p.Z, { icon: "info" })
                                  )
                                )
                              : ""
                          ),
                          i.createElement(
                            "td",
                            null,
                            "number" !== typeof e.baseHandling[r] ||
                              isNaN(e.baseHandling[r])
                              ? Array.isArray(e.baseHandling[r]) &&
                                3 === e.baseHandling[r].length &&
                                e.baseHandling[r].every(function (e) {
                                  return "number" === typeof e && !isNaN(e);
                                })
                                ? i.createElement(G, {
                                    initialValue: e.baseHandling[r],
                                    fieldKey: r,
                                    disabled: !0,
                                  })
                                : "N/A"
                              : i.createElement(U, {
                                  initialValue: e.baseHandling[r],
                                  fieldKey: r,
                                  type: "baseFieldUpdate",
                                  disabled: !0,
                                })
                          ),
                          i.createElement(
                            "td",
                            null,
                            "number" !== typeof a || isNaN(a)
                              ? Array.isArray(a) &&
                                3 === a.length &&
                                a.every(function (e) {
                                  return "number" === typeof e && !isNaN(e);
                                })
                                ? i.createElement(G, {
                                    initialValue: a,
                                    fieldKey: r,
                                  })
                                : "N/A"
                              : i.createElement(U, {
                                  initialValue: a,
                                  fieldKey: r,
                                  type: "fieldUpdate",
                                })
                          )
                        );
                      })
                  )
                )
              )
            );
          },
          q = n(4942),
          $ = n(4182),
          J = i.memo(function (e) {
            var t,
              n = e.flagType,
              l = e.flagNames,
              s = e.searchTerm,
              u = e.isEnabled,
              d = o.U2("AppState"),
              f = null === (t = !d.collapsedHeaders[n]) || void 0 === t || t,
              m = (0, i.useCallback)(
                function () {
                  o.Vx(d, {
                    collapsedHeaders: (0, r.Z)(
                      (0, r.Z)({}, d.collapsedHeaders),
                      {},
                      (0, q.Z)({}, n, f)
                    ),
                  });
                },
                [d, n, f]
              ),
              h = s.toLowerCase(),
              v = n.toLowerCase().includes(h),
              g = (0, i.useMemo)(
                function () {
                  return v
                    ? l
                    : l.filter(function (e) {
                        return e.toLowerCase().includes(h);
                      });
                },
                [l, h, v]
              );
            return 0 !== g.length || v
              ? i.createElement(
                  c.Z,
                  { sx: { mb: 1 } },
                  i.createElement(
                    y.Z,
                    {
                      size: "sm",
                      variant: "plain",
                      onClick: m,
                      endDecorator: i.createElement(p.Z, {
                        icon: f ? "chevron-up" : "chevron-down",
                      }),
                      sx: {
                        minWidth: "400px",
                        justifyContent: "space-between",
                        mb: f ? 1 : 0,
                        backgroundColor: v ? "action.selected" : "transparent",
                      },
                    },
                    i.createElement(w.ZP, { level: "h5" }, n)
                  ),
                  f &&
                    i.createElement(
                      c.Z,
                      {
                        sx: {
                          flexGrow: 1,
                          overflow: "auto",
                          m: 0.5,
                          position: "relative",
                          width: "500px",
                        },
                      },
                      i.createElement(
                        O.Z,
                        (0, r.Z)(
                          (0, r.Z)({}, Y),
                          {},
                          {
                            sx: (0, r.Z)(
                              (0, r.Z)({}, Y.sx),
                              {},
                              {
                                "& th:nth-of-type(1)": { width: "80px" },
                                "& th:nth-of-type(2)": { width: "10px" },
                                "& th:nth-of-type(3)": { width: "10px" },
                                "& th:nth-of-type(4)": { width: "10px" },
                              }
                            ),
                          }
                        ),
                        i.createElement(
                          "thead",
                          null,
                          i.createElement(
                            "tr",
                            null,
                            i.createElement("th", null, "Nome"),
                            i.createElement("th", null, "Base"),
                            i.createElement("th", null, "Atual")
                          )
                        ),
                        i.createElement(
                          "tbody",
                          null,
                          g.map(function (e) {
                            return i.createElement(
                              "tr",
                              { key: e },
                              i.createElement("td", null, e),
                              i.createElement(
                                "td",
                                null,
                                i.createElement($.Z, {
                                  sx: { userSelect: "none" },
                                  size: "sm",
                                  checked: u(!0, n, e),
                                  disabled: !0,
                                })
                              ),
                              i.createElement(
                                "td",
                                null,
                                i.createElement($.Z, {
                                  sx: { userSelect: "none" },
                                  size: "sm",
                                  checked: u(!1, n, e),
                                  onChange: function (t) {
                                    (0, a.Mi)(
                                      ne,
                                      "onx-vehicles:handling:ui:flagUpdate",
                                      {
                                        name: e,
                                        type: n,
                                        enabled: t.target.checked,
                                      }
                                    );
                                  },
                                })
                              )
                            );
                          })
                        )
                      )
                    )
                )
              : null;
          }),
          X = function () {
            var e = o.U2("AppState"),
              t = (0, i.useState)(""),
              n = (0, g.Z)(t, 2),
              r = n[0],
              a = n[1],
              l = (0, i.useCallback)(
                function (t, n, r) {
                  return ((t ? e.baseFlags : e.flags)[n] || []).includes(r);
                },
                [e.flags, e.baseFlags]
              ),
              s = (0, i.useMemo)(
                function () {
                  return Object.entries(e.allFlags);
                },
                [e.allFlags]
              );
            return i.createElement(
              c.Z,
              {
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  m: 0.5,
                  overflowY: "auto",
                },
              },
              i.createElement(H.ZP, {
                size: "sm",
                startDecorator: i.createElement(p.Z, {
                  icon: "magnifying-glass",
                }),
                placeholder: "Pesquisar flags",
                value: r,
                onChange: function (e) {
                  a(e.target.value);
                },
                sx: { width: "100%", mb: 2 },
              }),
              i.createElement(
                c.Z,
                { sx: { pb: 1 } },
                s.map(function (e) {
                  var t = (0, g.Z)(e, 2),
                    n = t[0],
                    a = t[1];
                  return i.createElement(J, {
                    key: n,
                    flagType: n,
                    flagNames: a,
                    searchTerm: r,
                    isEnabled: l,
                  });
                })
              )
            );
          },
          Q = function (e) {
            var t = e.children,
              n = e.value,
              r = (0, v.cI)();
            return i.createElement(
              l.Z,
              {
                value: n,
                sx: {
                  height: "100%",
                  overflow: "unset",
                  background: r.gradient(),
                },
              },
              t
            );
          },
          ee = function (e) {
            var t = e.icon,
              n = e.name;
            return i.createElement(
              h,
              { label: n, placement: "right" },
              i.createElement(
                s.Z,
                { sx: { maxHeight: "25px" } },
                i.createElement(p.Z, { icon: t })
              )
            );
          },
          te = function () {
            var e = (0, v.cI)(),
              t = [
                {
                  name: "Parâmetros",
                  icon: "car",
                  content: function (e) {
                    return i.createElement(K, (0, r.Z)({}, e));
                  },
                },
                {
                  name: "Flags",
                  icon: "flag",
                  content: function (e) {
                    return i.createElement(X, (0, r.Z)({}, e));
                  },
                },
                {
                  name: "Exportar Handling",
                  icon: "file-export",
                  content: function (e) {
                    return i.createElement(j, (0, r.Z)({}, e));
                  },
                },
              ],
              n = {
                position: "absolute",
                top: "1vh",
                left: "0.5vw",
                width: "min-content",
                height: "98vh",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                background: e.gradient(),
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                userSelect: "none",
              },
              a = {
                height: "100%",
                background: e.gradient(),
                "& .MuiTab-root.Mui-selected": {
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                },
                borderRadius: 0,
              };
            return i.createElement(
              i.Fragment,
              null,
              i.createElement(
                c.Z,
                { sx: n },
                i.createElement(
                  u.Z,
                  {
                    defaultValue: 0,
                    orientation: "vertical",
                    size: "md",
                    sx: { height: "100%" },
                  },
                  i.createElement(
                    c.Z,
                    { sx: { display: "flex", height: "100%" } },
                    i.createElement(
                      d.Z,
                      { sx: a },
                      t.map(function (e, t) {
                        return i.createElement(ee, {
                          key: "".concat(e.name, "-").concat(t, "-tab"),
                          icon: e.icon,
                          name: e.name,
                        });
                      }),
                      i.createElement(
                        h,
                        { label: "onx.gg", placement: "right" },
                        i.createElement(
                          s.Z,
                          {
                            sx: { maxHeight: "25px", marginTop: "auto" },
                            disabled: !0,
                          },
                          i.createElement("div", {
                            style: {
                              backgroundImage:
                                "url(https://static.onx.gg/images/logo-white.png)",
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              height: "25px",
                              width: "100%",
                              margin: "auto 0 10px 0",
                            },
                          })
                        )
                      )
                    ),
                    i.createElement(f.Z, {
                      orientation: "vertical",
                      sx: { backgroundColor: "rgba(255,255,255,0.2)" },
                    })
                  ),
                  t.map(function (e, t) {
                    return i.createElement(
                      Q,
                      {
                        key: "".concat(e.name, "-").concat(t, "-content"),
                        value: t,
                      },
                      (function (e) {
                        return e.name, e.content({});
                      })(e)
                    );
                  })
                )
              )
            );
          },
          ne = "vehicle-tuning",
          re = {
            name: ne,
            Component: function () {
              var e = o.VH("AppState"),
                t = o.eJ("AppState", {
                  show: !1,
                  precision: 4,
                  collapsedHeaders: {},
                  handling: {},
                  baseHandling: {},
                  flags: {},
                  allFlags: {},
                  export: {},
                  resolvedUpdate: "",
                  selectedHandlingType: "HANDLING_TYPE_FLYING",
                  history: {},
                  exportCeilings: "",
                  currentCeilings: {},
                  allMods: {},
                  currentUpgrades: {},
                });
              return i.createElement(
                a.ZP,
                {
                  name: ne,
                  onOpen: function (e) {
                    o.Vx(t, (0, r.Z)((0, r.Z)({}, e), {}, { show: !0 }));
                  },
                  onClose: function (e) {
                    o.Vx(t, { show: !1, handling: {}, flags: {} });
                  },
                  onEvent: function (e) {
                    "display" !== e.action
                      ? o.Vx(t, (0, r.Z)({}, e))
                      : o.Vx(t, { show: e.show });
                  },
                },
                i.createElement(
                  a.ZP.Body,
                  { style: { pointerEvents: "auto" } },
                  i.createElement(
                    e,
                    { value: t },
                    t.show && i.createElement(te, null)
                  )
                )
              );
            },
          };
      },
      4891: function (e, t) {
        "use strict";
        t.Z = function () {
          return {};
        };
      },
      2963: function (e, t) {
        "use strict";
        t.Z = function () {
          return {};
        };
      },
      450: function (e, t, n) {
        "use strict";
        n.d(t, {
          U2: function () {
            return u;
          },
          wU: function () {
            return f;
          },
          DK: function () {
            return c;
          },
          Wf: function () {
            return d;
          },
        });
        var r = n(4165),
          a = n(1413),
          o = n(5861),
          i = n(4942),
          l = !1,
          s = {};
        (0, o.Z)(
          (0, r.Z)().mark(function e() {
            var t, o;
            return (0, r.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (t = n(4891).Z),
                      (s = (0, a.Z)(
                        (0, a.Z)(
                          {},
                          (0, i.Z)(
                            {},
                            "build.local",
                            !!{
                              NODE_ENV: "production",
                              PUBLIC_URL: "/ui",
                              WDS_SOCKET_HOST: void 0,
                              WDS_SOCKET_PATH: void 0,
                              WDS_SOCKET_PORT: void 0,
                              FAST_REFRESH: !0,
                              REACT_APP_BUILD_ENV: "dev",
                              REACT_APP_DISABLE_MINIMIZE: "true",
                              REACT_APP_IS_LOCAL: "true",
                            }.REACT_APP_IS_START_BUILD
                          )
                        ),
                        t()
                      )),
                      {
                        NODE_ENV: "production",
                        PUBLIC_URL: "/ui",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0,
                        REACT_APP_BUILD_ENV: "dev",
                        REACT_APP_DISABLE_MINIMIZE: "true",
                        REACT_APP_IS_LOCAL: "true",
                      }.REACT_APP_ONX_STAGING &&
                        ((o = n(2963).Z), (s = (0, a.Z)((0, a.Z)({}, s), o()))),
                      (l = !0);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )();
        var c = function () {
            return l;
          },
          u = function (e) {
            var t,
              n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            return null !== (t = null !== (n = s[e]) && void 0 !== n ? n : r) &&
              void 0 !== t
              ? t
              : null;
          },
          d = function () {
            return {
              NODE_ENV: "production",
              PUBLIC_URL: "/ui",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
              REACT_APP_BUILD_ENV: "dev",
              REACT_APP_DISABLE_MINIMIZE: "true",
              REACT_APP_IS_LOCAL: "true",
            }.REACT_APP_IS_START_BUILD;
          },
          f = function () {
            return {
              NODE_ENV: "production",
              PUBLIC_URL: "/ui",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
              REACT_APP_BUILD_ENV: "dev",
              REACT_APP_DISABLE_MINIMIZE: "true",
              REACT_APP_IS_LOCAL: "true",
            }.REACT_APP_IS_BROWSER_BUILD;
          };
      },
      2339: function (e, t, n) {
        "use strict";
        var r = n(1413),
          a = n(7313),
          o = n(1739),
          i = n(8249),
          l = n(3866),
          s = n(6605),
          c = n(71);
        var u = {
            fontFamily: {
              body: '"Roboto, sans-serif", var(--joy-fontFamily-fallback)',
              display: '"Roboto, sans-serif", var(--joy-fontFamily-fallback)',
              code: "Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
              fallback:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            },
            colorSchemes: {
              light: {
                palette: {
                  primary: {
                    50: "#f7a3de",
                    100: "#f591d7",
                    200: "#f37ed1",
                    300: "#f16cca",
                    400: "#f059c4",
                    500: "#e01a84",
                    600: "#d640aa",
                    700: "#be3997",
                    800: "#a73284",
                    900: "#8f2b71",
                    plainColor: "var(--joy-palette-primary-300)",
                    plainHoverBg: "var(--joy-palette-primary-800)",
                    plainActiveBg: "var(--joy-palette-primary-700)",
                    plainDisabledColor: "var(--joy-palette-primary-800)",
                    outlinedColor: "var(--joy-palette-primary-200)",
                    outlinedBorder: "var(--joy-palette-primary-700)",
                    outlinedHoverBg: "var(--joy-palette-primary-800)",
                    outlinedHoverBorder: "var(--joy-palette-primary-600)",
                    outlinedActiveBg: "var(--joy-palette-primary-900)",
                    outlinedDisabledColor: "var(--joy-palette-primary-800)",
                    outlinedDisabledBorder: "var(--joy-palette-primary-800)",
                    softColor: "var(--joy-palette-primary-200)",
                    softBg: "var(--joy-palette-primary-900)",
                    softHoverBg: "var(--joy-palette-primary-800)",
                    softActiveBg: "var(--joy-palette-primary-700)",
                    softDisabledColor: "var(--joy-palette-primary-800)",
                    softDisabledBg: "var(--joy-palette-primary-900)",
                    solidColor: "#fff",
                    solidBg: "var(--joy-palette-primary-600)",
                    solidHoverBg: "var(--joy-palette-primary-700)",
                    solidActiveBg: "var(--joy-palette-primary-800)",
                    solidDisabledColor: "var(--joy-palette-primary-700)",
                    solidDisabledBg: "var(--joy-palette-primary-900)",
                    mainChannel: "9 107 222",
                    lightChannel: "173 219 255",
                    darkChannel: "7 40 89",
                  },
                  neutral: {
                    50: "#F7F7F8",
                    100: "#EBEBEF",
                    200: "#D8D8DF",
                    300: "#B9B9C6",
                    400: "#8F8FA3",
                    500: "#73738C",
                    600: "#5A5A72",
                    700: "#434356",
                    800: "#25252D",
                    900: "#131318",
                    plainColor: "var(--joy-palette-neutral-200)",
                    plainHoverColor: "var(--joy-palette-neutral-50)",
                    plainHoverBg: "var(--joy-palette-neutral-800)",
                    plainActiveBg: "var(--joy-palette-neutral-700)",
                    plainDisabledColor: "var(--joy-palette-neutral-700)",
                    outlinedColor: "var(--joy-palette-neutral-200)",
                    outlinedBorder: "var(--joy-palette-neutral-800)",
                    outlinedHoverColor: "var(--joy-palette-neutral-50)",
                    outlinedHoverBg: "var(--joy-palette-neutral-800)",
                    outlinedHoverBorder: "var(--joy-palette-neutral-700)",
                    outlinedActiveBg: "var(--joy-palette-neutral-800)",
                    outlinedDisabledColor: "var(--joy-palette-neutral-800)",
                    outlinedDisabledBorder: "var(--joy-palette-neutral-800)",
                    softColor: "var(--joy-palette-neutral-200)",
                    softBg: "var(--joy-palette-neutral-800)",
                    softHoverColor: "var(--joy-palette-neutral-50)",
                    softHoverBg: "var(--joy-palette-neutral-700)",
                    softActiveBg: "var(--joy-palette-neutral-600)",
                    softDisabledColor: "var(--joy-palette-neutral-700)",
                    softDisabledBg: "var(--joy-palette-neutral-900)",
                    solidColor: "var(--joy-palette-common-white)",
                    solidBg: "var(--joy-palette-neutral-600)",
                    solidHoverBg: "var(--joy-palette-neutral-700)",
                    solidActiveBg: "var(--joy-palette-neutral-800)",
                    solidDisabledColor: "var(--joy-palette-neutral-700)",
                    solidDisabledBg: "var(--joy-palette-neutral-900)",
                    mainChannel: "115 115 140",
                    lightChannel: "216 216 223",
                    darkChannel: "37 37 45",
                  },
                  danger: {
                    50: "#FFF8F6",
                    100: "#FFE9E8",
                    200: "#FFC7C5",
                    300: "#FF9192",
                    400: "#FA5255",
                    500: "#D3232F",
                    600: "#A10E25",
                    700: "#77061B",
                    800: "#580013",
                    900: "#39000D",
                    plainColor: "var(--joy-palette-danger-300)",
                    plainHoverBg: "var(--joy-palette-danger-800)",
                    plainActiveBg: "var(--joy-palette-danger-700)",
                    plainDisabledColor: "var(--joy-palette-danger-800)",
                    outlinedColor: "var(--joy-palette-danger-200)",
                    outlinedBorder: "var(--joy-palette-danger-700)",
                    outlinedHoverBg: "var(--joy-palette-danger-800)",
                    outlinedHoverBorder: "var(--joy-palette-danger-600)",
                    outlinedActiveBg: "var(--joy-palette-danger-900)",
                    outlinedDisabledColor: "var(--joy-palette-danger-800)",
                    outlinedDisabledBorder: "var(--joy-palette-danger-800)",
                    softColor: "var(--joy-palette-danger-200)",
                    softBg: "var(--joy-palette-danger-900)",
                    softHoverBg: "var(--joy-palette-danger-800)",
                    softActiveBg: "var(--joy-palette-danger-700)",
                    softDisabledColor: "var(--joy-palette-danger-800)",
                    softDisabledBg: "var(--joy-palette-danger-900)",
                    solidColor: "#fff",
                    solidBg: "var(--joy-palette-danger-600)",
                    solidHoverBg: "var(--joy-palette-danger-700)",
                    solidActiveBg: "var(--joy-palette-danger-800)",
                    solidDisabledColor: "var(--joy-palette-danger-700)",
                    solidDisabledBg: "var(--joy-palette-danger-900)",
                    mainChannel: "211 35 47",
                    lightChannel: "255 199 197",
                    darkChannel: "88 0 19",
                  },
                  info: {
                    50: "#FDF7FF",
                    100: "#F4EAFF",
                    200: "#E1CBFF",
                    300: "#C69EFF",
                    400: "#A374F9",
                    500: "#814DDE",
                    600: "#5F35AE",
                    700: "#452382",
                    800: "#301761",
                    900: "#1D0A42",
                    plainColor: "var(--joy-palette-info-300)",
                    plainHoverBg: "var(--joy-palette-info-800)",
                    plainActiveBg: "var(--joy-palette-info-700)",
                    plainDisabledColor: "var(--joy-palette-info-800)",
                    outlinedColor: "var(--joy-palette-info-200)",
                    outlinedBorder: "var(--joy-palette-info-700)",
                    outlinedHoverBg: "var(--joy-palette-info-800)",
                    outlinedHoverBorder: "var(--joy-palette-info-600)",
                    outlinedActiveBg: "var(--joy-palette-info-900)",
                    outlinedDisabledColor: "var(--joy-palette-info-800)",
                    outlinedDisabledBorder: "var(--joy-palette-info-800)",
                    softColor: "var(--joy-palette-info-200)",
                    softBg: "var(--joy-palette-info-900)",
                    softHoverBg: "var(--joy-palette-info-800)",
                    softActiveBg: "var(--joy-palette-info-700)",
                    softDisabledColor: "var(--joy-palette-info-800)",
                    softDisabledBg: "var(--joy-palette-info-900)",
                    solidColor: "#fff",
                    solidBg: "var(--joy-palette-info-600)",
                    solidHoverBg: "var(--joy-palette-info-700)",
                    solidActiveBg: "var(--joy-palette-info-800)",
                    solidDisabledColor: "var(--joy-palette-info-700)",
                    solidDisabledBg: "var(--joy-palette-info-900)",
                    mainChannel: "129 77 222",
                    lightChannel: "225 203 255",
                    darkChannel: "48 23 97",
                  },
                  success: {
                    50: "#F3FEF5",
                    100: "#D7F5DD",
                    200: "#77EC95",
                    300: "#4CC76E",
                    400: "#2CA24D",
                    500: "#1A7D36",
                    600: "#0F5D26",
                    700: "#034318",
                    800: "#002F0F",
                    900: "#001D09",
                    plainColor: "var(--joy-palette-success-300)",
                    plainHoverBg: "var(--joy-palette-success-800)",
                    plainActiveBg: "var(--joy-palette-success-700)",
                    plainDisabledColor: "var(--joy-palette-success-800)",
                    outlinedColor: "var(--joy-palette-success-200)",
                    outlinedBorder: "var(--joy-palette-success-700)",
                    outlinedHoverBg: "var(--joy-palette-success-800)",
                    outlinedHoverBorder: "var(--joy-palette-success-600)",
                    outlinedActiveBg: "var(--joy-palette-success-900)",
                    outlinedDisabledColor: "var(--joy-palette-success-800)",
                    outlinedDisabledBorder: "var(--joy-palette-success-800)",
                    softColor: "var(--joy-palette-success-200)",
                    softBg: "var(--joy-palette-success-900)",
                    softHoverBg: "var(--joy-palette-success-800)",
                    softActiveBg: "var(--joy-palette-success-700)",
                    softDisabledColor: "var(--joy-palette-success-800)",
                    softDisabledBg: "var(--joy-palette-success-900)",
                    solidColor: "#fff",
                    solidBg: "var(--joy-palette-success-600)",
                    solidHoverBg: "var(--joy-palette-success-700)",
                    solidActiveBg: "var(--joy-palette-success-800)",
                    solidDisabledColor: "var(--joy-palette-success-700)",
                    solidDisabledBg: "var(--joy-palette-success-900)",
                    mainChannel: "26 125 54",
                    lightChannel: "119 236 149",
                    darkChannel: "0 47 15",
                  },
                  warning: {
                    50: "#FFF8C5",
                    100: "#FAE17D",
                    200: "#EAC54F",
                    300: "#D4A72C",
                    400: "#BF8700",
                    500: "#9A6700",
                    600: "#7D4E00",
                    700: "#633C01",
                    800: "#4D2D00",
                    900: "#3B2300",
                    plainColor: "var(--joy-palette-warning-300)",
                    plainHoverBg: "var(--joy-palette-warning-800)",
                    plainActiveBg: "var(--joy-palette-warning-700)",
                    plainDisabledColor: "var(--joy-palette-warning-800)",
                    outlinedColor: "var(--joy-palette-warning-200)",
                    outlinedBorder: "var(--joy-palette-warning-700)",
                    outlinedHoverBg: "var(--joy-palette-warning-800)",
                    outlinedHoverBorder: "var(--joy-palette-warning-600)",
                    outlinedActiveBg: "var(--joy-palette-warning-900)",
                    outlinedDisabledColor: "var(--joy-palette-warning-800)",
                    outlinedDisabledBorder: "var(--joy-palette-warning-800)",
                    softColor: "var(--joy-palette-warning-200)",
                    softBg: "var(--joy-palette-warning-900)",
                    softHoverBg: "var(--joy-palette-warning-800)",
                    softActiveBg: "var(--joy-palette-warning-700)",
                    softDisabledColor: "var(--joy-palette-warning-800)",
                    softDisabledBg: "var(--joy-palette-warning-900)",
                    solidColor: "var(--joy-palette-common-black)",
                    solidBg: "var(--joy-palette-warning-300)",
                    solidHoverBg: "var(--joy-palette-warning-400)",
                    solidActiveBg: "var(--joy-palette-warning-500)",
                    solidDisabledColor: "var(--joy-palette-warning-700)",
                    solidDisabledBg: "var(--joy-palette-warning-900)",
                    mainChannel: "154 103 0",
                    lightChannel: "234 197 79",
                    darkChannel: "77 45 0",
                  },
                  common: { white: "#FFF", black: "#09090D" },
                  text: {
                    primary: "var(--joy-palette-neutral-100)",
                    secondary: "var(--joy-palette-neutral-300)",
                    tertiary: "var(--joy-palette-neutral-400)",
                  },
                  background: {
                    body: "#121212",
                    surface: "var(--joy-palette-common-black)",
                    popup: "var(--joy-palette-neutral-800)",
                    level1: "#2a2a2a",
                    level2: "#414141",
                    level3: "#595959",
                    tooltip: "var(--joy-palette-neutral-600)",
                    backdrop:
                      "rgba(var(--joy-palette-neutral-darkChannel) / 0.5)",
                  },
                  divider:
                    "rgba(var(--joy-palette-neutral-mainChannel) / 0.24)",
                  focusVisible: "var(--joy-palette-primary-500)",
                },
                shadowRing: "0 0 #000",
                shadowChannel: "0 0 0",
              },
            },
          },
          d = n(3704),
          f = { height: "100vh", width: "100vw", overflow: "hidden" },
          p = function () {
            var e,
              t,
              n,
              o = new URLSearchParams(
                null !==
                  (e =
                    null === (t = window) ||
                    void 0 === t ||
                    null === (n = t.location) ||
                    void 0 === n
                      ? void 0
                      : n.search) && void 0 !== e
                  ? e
                  : ""
              ),
              p = a.createElement(d.ZP, null);
            return (
              a.useEffect(function () {
                document.addEventListener("mousedown", function (e) {
                  1 === e.button && (e.preventDefault(), e.stopPropagation());
                });
              }, []),
              a.createElement(
                i.lL,
                { defaultMode: "light", theme: (0, l.Z)((0, r.Z)({}, u)) },
                a.createElement(s.Z, null),
                a.createElement(c.Z, {
                  styles: {
                    "html, body, #app-root, #app-wrapper, #services-wrapper": f,
                    "body, #app-wrapper": o.get("bg")
                      ? {}
                      : { backgroundColor: "unset !important" },
                    a: { textDecoration: "none" },
                    "*::-webkit-scrollbar": { display: "none" },
                    ".MuiAutocomplete-listbox, .MuiMenu-root": {
                      zIndex: "10000 !important",
                    },
                  },
                }),
                p
              )
            );
          };
        o.createRoot(document.getElementById("app-root")).render(
          a.createElement(p, null)
        );
      },
      838: function (e, t, n) {
        "use strict";
        n.d(t, {
          Iv: function () {
            return l;
          },
          WU: function () {
            return s;
          },
          r0: function () {
            return a;
          },
          rW: function () {
            return o;
          },
        });
        var r = n(4762);
        const a = "DDD",
          o = "DDD - hh:mm:ss a (ZZZZ)",
          i = "optional_year",
          l = "hh:mm a (ZZZZ)",
          s = (e, t, n) => {
            let a;
            if (
              ((a =
                "number" === typeof e
                  ? r.ou.fromSeconds(e)
                  : r.ou.fromJSDate(e)),
              !a.isValid && n)
            )
              return n;
            if ("optional_day" === t) {
              const e = r.ou.utc();
              t =
                e.day === a.day && e.month === a.month && e.year === a.year
                  ? "hh:mm a"
                  : i;
            }
            if (t === i) {
              t =
                r.ou.utc().year === a.year
                  ? "MMMM dd - hh:mm a"
                  : "DDD - hh:mm a";
            }
            return a.toFormat(t);
          };
      },
      8642: function (e, t, n) {
        "use strict";
        n.d(t, {
          NT: function () {
            return r;
          },
          xl: function () {
            return a;
          },
        });
        const r = (e) => new Promise((t) => setTimeout(t, e)),
          a = async (e, t, n = 5e3) =>
            new Promise(async (r) => {
              let a = !1;
              const o = n > 0 ? setTimeout(() => (a = !0), n) : void 0;
              if (await t()) return clearTimeout(o), void r(!0);
              const i = setInterval(async () => {
                const e = await t();
                (e || a) && (clearInterval(i), clearTimeout(o), r(!a && e));
              }, e);
            });
      },
      7264: function (e, t, n) {
        "use strict";
        var r = n(9631);
        t.Z = () => r.v4();
      },
      4930: function (e, t, n) {
        "use strict";
        var r = n(7313);
        t.Z = ({
          icon: e = "",
          prefix: t = "fa",
          extra: n = "",
          iconFull: a = null,
          type: o = "fa-solid",
          color: i = null,
          onClick: l,
          style: s,
        } = {}) => {
          const c = a ?? `${t}-${e}`;
          let u = o;
          return (
            (-1 === c.indexOf("fa-regular") && "flaticon" !== t) || (u = ""),
            r.createElement("i", {
              onClick: l,
              className: `${u} ${c} ${n}`,
              style: { ...s, color: i ?? "inherit" },
            })
          );
        };
      },
      1054: function (e, t, n) {
        "use strict";
        n.d(t, {
          V: function () {
            return l;
          },
        });
        var r = n(7313),
          a = n(1168),
          o = n(1852),
          i = n(2325);
        o.Ue("PopoverContainerComponent"),
          o.Ue("PopoverContainerComponentInternal");
        const l = () => o.VH("PopoverContainerComponent");
        t.Z = (e) => {
          const [t, n] = r.useState(e.positionRef.getBoundingClientRect()),
            [l, s] = r.useState(null),
            c = e.position ?? ["bottom", "left"],
            u = (0, i.cI)(),
            d = o.U2("PopoverContainerComponentInternal"),
            f = o.U2("PopoverContainerComponent"),
            p =
              f?.containerRef?.current ??
              document.getElementsByTagName("body")[0],
            m = r.useRef(null),
            h = o.VH("PopoverContainerComponentInternal"),
            v = d?.zIndex ?? 1e5,
            g = () => {
              const n = m.current.getBoundingClientRect(),
                r = e?.offset?.top ?? 0,
                a = e?.offset?.left ?? 0,
                o = {};
              if (c.includes("cursor")) {
                const t = e.event;
                (o.top = t.clientY + r),
                  (o.left = t.clientX + a),
                  c.includes("cursor-middle") &&
                    (o.left = t.clientX - n.width / 2 + a),
                  c.includes("cursor-top") &&
                    (o.top = t.clientY - n.height - r),
                  o.left + n.width > window.innerWidth &&
                    (o.left = t.clientX - n.width),
                  o.top + n.height > window.innerHeight &&
                    (o.top = t.clientY - n.height);
              }
              c.includes("bottom") && (o.top = t.bottom + r),
                c.includes("left") && (o.left = t.left + a),
                c.includes("top") && (o.top = t.top + r),
                c.includes("right") && (o.left = t.right + a),
                o.left + n.width > window.innerWidth &&
                  (o.left = window.innerWidth - n.width),
                o.top + n.height > window.innerHeight &&
                  (o.top = window.innerHeight - n.height),
                o.left < 0 && (o.left = 0),
                o.top < 0 && (o.top = 0),
                s(o);
            };
          return (
            r.useEffect(() => {
              g();
            }, []),
            r.useEffect(() => {
              g();
            }, [e.event?.clientX ?? null, e.event?.clientY ?? null]),
            r.useEffect(() => {
              g();
            }, [l?.left ?? null, l?.top ?? null]),
            r.createElement(
              h,
              { value: { ...d, zIndex: v + 2 } },
              a.createPortal(
                [
                  e.disableBackdrop
                    ? null
                    : r.createElement("div", {
                        key: 1,
                        style: {
                          position: "fixed",
                          top: 0,
                          left: 0,
                          height: "100vh",
                          width: "100vw",
                          pointerEvents: "auto",
                          zIndex: v,
                        },
                        onClick: e.onClose,
                        onContextMenu: e.closeOnRightClick
                          ? (t) => {
                              t.preventDefault(), e.onClose(t);
                            }
                          : void 0,
                      }),
                  r.createElement(
                    "div",
                    {
                      ref: m,
                      key: 2,
                      style: {
                        position: "fixed",
                        ...l,
                        boxShadow: e.noBg ? null : u.boxShadow(),
                        maxWidth: "100vw",
                        maxHeight: "100vh",
                        overflow: "scroll",
                        borderRadius: "8px",
                        background: e.noBg ? null : u.gradient(),
                        zIndex: v + 1,
                        opacity: l ? 1 : 0,
                        pointerEvents: "auto",
                        ...e.containerStyle,
                      },
                    },
                    e.children
                  ),
                ],
                p
              )
            )
          );
        };
      },
      2325: function (e, t, n) {
        "use strict";
        n.d(t, {
          VI: function () {
            return l;
          },
          XI: function () {
            return d;
          },
          c0: function () {
            return u;
          },
          cI: function () {
            return s;
          },
          wr: function () {
            return c;
          },
        });
        var r = n(7313),
          a = n(9842),
          o = n(5437),
          i = n(1852);
        const l = (e) => {
            const { showBoundary: t } = (0, a.cO)();
            return async (...n) => {
              try {
                return await e(...n);
              } catch (r) {
                t(r);
              }
            };
          },
          s = () => {
            const e = (0, o.F)();
            return {
              accent: (e = 1) =>
                1 === e ? "#2196f3" : 2 === e ? "#7c4dff" : void 0,
              background: () => e.vars.palette.background.body,
              level: (t) =>
                e.vars.palette.background[`level${t}`] ??
                e.vars.palette.background.level1,
              label: () => e.vars.palette.neutral[400],
              outline: () => e.vars.palette.primary[500],
              gradient: (e = "default") =>
                ({
                  default: "linear-gradient(150deg, #251d3b 0%, #1c242d 100%)",
                  bg: "linear-gradient(150deg, #1a1429 0%, #161123 100%)",
                }[e]),
              gradientBgLevel: (e = 1) => "rgba(0, 0, 0, 0.25)",
              gradientTopColor: (e = "default") =>
                ({ default: "#251d3b", bg: "#1a1429" }[e]),
              boxShadow: () =>
                "1px 1px rgba(0, 0, 0, 0.5), -1px 1px rgba(0, 0, 0, 0.5), -1px -1px rgba(0, 0, 0, 0.5), 1px -1px rgba(0, 0, 0, 0.5)",
            };
          },
          c = () => {
            const e = i.U2("CardContext");
            return e?.level ?? 0;
          },
          u = (e, t = {}) => {
            const [n, a] = r.useState(null),
              o = r.useRef({ top: 0, left: 0, bottom: 0, right: 0 }),
              i = r.useCallback((n) => {
                let r = n.clientY - o.current.top,
                  i = n.clientX - o.current.left;
                if (t.innerSnap) {
                  const t = e.current.getBoundingClientRect(),
                    a = n.clientY - o.current.bottom;
                  r < 0 && (r = 0),
                    i < 0 && (i = 0),
                    n.clientX - o.current.right > window.innerWidth &&
                      (i = window.innerWidth - t.width),
                    a > window.innerHeight &&
                      (r = window.innerHeight - t.height);
                }
                a({ top: r, left: i });
              }, []),
              l = r.useRef("");
            return {
              funcs: {
                onMouseDown: (t) => {
                  ((t) => {
                    (l.current = e.current.style["user-select"]),
                      (e.current.style["user-select"] = "none");
                    const n = e.current.getBoundingClientRect();
                    (o.current = {
                      top: t.clientY - n.top,
                      bottom: t.clientY - n.bottom,
                      left: t.clientX - n.left,
                      right: t.clientX - n.right,
                    }),
                      window.addEventListener("mousemove", i);
                  })(t);
                },
                onMouseUp: (t) => {
                  (e.current.style["user-select"] = l.current),
                    window.removeEventListener("mousemove", i);
                },
              },
              pos: n,
            };
          },
          d = (e = !1) => {
            const [t, n] = r.useState(e);
            return [
              t,
              { onMouseEnter: () => n(!0), onMouseLeave: () => n(!1) },
            ];
          };
      },
      1852: function (e, t, n) {
        "use strict";
        n.d(t, {
          U2: function () {
            return i;
          },
          Ue: function () {
            return o;
          },
          VH: function () {
            return l;
          },
          Vx: function () {
            return u;
          },
          eJ: function () {
            return c;
          },
        });
        var r = n(7313);
        const a = {},
          o = (e, t = {}) => {
            a[e] = r.createContext(t);
          },
          i = (e) => (a[e] ? r.useContext(a[e]) : null),
          l = (e) => a[e]?.Provider ?? r.Fragment,
          s = {},
          c = (e, t = {}) => {
            if (!s[e]) {
              const t = (e, t) =>
                "function" === typeof t
                  ? { ...e, ...t(e) }
                  : t.___reset
                  ? {}
                  : { ...e, ...t };
              s[e] = { cb: t };
            }
            const [n, a] = r.useReducer(s[e].cb, t);
            return {
              ...n,
              __reset: () => a({ ___reset: !0 }),
              __replace: (e) => a({ ...e, __replace: !0 }),
              __update: a,
            };
          },
          u = (e, t, n = !1) => {
            e.__update(t);
          };
      },
      1826: function (e, t, n) {
        "use strict";
        n.d(t, {
          Nu: function () {
            return o;
          },
          Oo: function () {
            return r;
          },
          xg: function () {
            return a;
          },
        });
        const r = (e, t) => {
            window.addEventListener(e, t);
          },
          a = (e, t) => {
            window.removeEventListener(e, t);
          },
          o = (e, t = {}) => {
            const n = new Event(e);
            (n.data = t), window.dispatchEvent(n);
          };
      },
      7938: function (e, t, n) {
        "use strict";
        n.d(t, {
          JG: function () {
            return r;
          },
        });
        const r = (e) => {
          const t = document.createElement("textarea");
          (t.style.position = "fixed"),
            (t.style.top = "-1000px"),
            (t.style.opacity = "0"),
            (t.value = e),
            document.body.appendChild(t),
            t.select(),
            document.execCommand("copy"),
            document.body.removeChild(t);
        };
      },
      5531: function (e, t, n) {
        var r = { "./vehicle-tuning/index.tsx": 7164 };
        function a(e) {
          var t = o(e);
          return n(t);
        }
        function o(e) {
          if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return r[e];
        }
        (a.keys = function () {
          return Object.keys(r);
        }),
          (a.resolve = o),
          (e.exports = a),
          (a.id = 5531);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports;
  }
  (n.m = e),
    (n.amdO = {}),
    (function () {
      var e = [];
      n.O = function (t, r, a, o) {
        if (!r) {
          var i = 1 / 0;
          for (u = 0; u < e.length; u++) {
            (r = e[u][0]), (a = e[u][1]), (o = e[u][2]);
            for (var l = !0, s = 0; s < r.length; s++)
              (!1 & o || i >= o) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](r[s]);
              })
                ? r.splice(s--, 1)
                : ((l = !1), o < i && (i = o));
            if (l) {
              e.splice(u--, 1);
              var c = a();
              void 0 !== c && (t = c);
            }
          }
          return t;
        }
        o = o || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
        e[u] = [r, a, o];
      };
    })(),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & a && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach(function (e) {
            i[e] = function () {
              return r[e];
            };
          });
        return (
          (i.default = function () {
            return r;
          }),
          n.d(o, i),
          o
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    }),
    (function () {
      var e = { 179: 0 };
      n.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, r) {
          var a,
            o,
            i = r[0],
            l = r[1],
            s = r[2],
            c = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (s) var u = s(n);
          }
          for (t && t(r); c < i.length; c++)
            (o = i[c]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return n.O(u);
        },
        r = (self.webpackChunksrc = self.webpackChunksrc || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = n.O(void 0, [216], function () {
    return n(2339);
  });
  r = n.O(r);
})();
