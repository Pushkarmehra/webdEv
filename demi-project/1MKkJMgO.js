import {d as j, p as h, a7 as T, c as p, e as b, G, f as o, ab as R, n as O, t as k, h as x, g as _, ae as M, O as q, v as J, j as U, q as a, l as v, T as I, E, aS as W, a3 as H, U as K, u as Q, D as X, R as Y, o as Z, I as ee, M as se, s as P, F as oe, r as te, x as le, _ as ae} from "./BSORQlvt.js";
import {u as ne} from "./BR8TwMtL.js";
const ie = ["for"]
  , ce = ["checked", "disabled"]
  , re = {
    key: 0,
    class: "flex cursor-pointer items-center gap-2 pl-2"
}
  , de = j({
    inheritAttrs: !1,
    __name: "FormToggle",
    props: {
        label: {},
        isLabelVisible: {
            type: Boolean,
            default: !0
        },
        modelValue: {
            type: Boolean,
            default: !1
        },
        isDisabled: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["update:modelValue", "on-change"],
    setup(n, {emit: i}) {
        const c = i
          , d = t => {
            const l = t.target.checked;
            c("update:modelValue", l),
            c("on-change", l)
        }
          , u = h(null);
        return (t, l) => {
            var e;
            const g = T("uid");
            return p(),
            b("label", {
                for: (e = _(u)) == null ? void 0 : e.id,
                class: "flex"
            }, [G(o("input", R({
                ref_key: "input",
                ref: u
            }, t.$attrs, {
                class: "sr-only",
                checked: t.modelValue,
                disabled: t.isDisabled,
                type: "checkbox",
                onInput: d
            }), null, 16, ce), [[g]]), o("div", {
                class: O(["relative inline-flex h-5 w-9 rounded-full transition-all duration-300 md:h-6 md:w-11", [t.isDisabled ? "bg-neutral-200 cursor-not-allowed" : ["cursor-pointer", t.modelValue ? "bg-primary" : "bg-neutral-300"]]])
            }, [o("div", {
                class: O(["absolute left-0.5 top-0.5 block h-4 w-4 rounded-full bg-white transition-all duration-300 md:h-5 md:w-5", t.modelValue && "translate-x-full"])
            }, null, 2)], 2), t.isLabelVisible ? (p(),
            b("span", re, k(t.label), 1)) : x("", !0)], 8, ie)
        }
    }
})
  , ue = {
    key: 0,
    class: "fixed inset-0 z-50 bg-black opacity-50"
}
  , fe = {
    key: 0,
    class: "fixed inset-0 z-50 flex overflow-auto md:p-8"
}
  , pe = {
    class: "flex h-full w-full flex-1 flex-col items-center md:h-fit md:flex-none"
}
  , me = j({
    inheritAttrs: !1,
    __name: "Modal",
    props: {
        show: {
            type: Boolean
        },
        showClose: {
            type: Boolean,
            default: !0
        },
        variant: {
            default: "basic"
        },
        contentClass: {}
    },
    emits: ["on-close"],
    setup(n, {emit: i}) {
        const c = n
          , d = i
          , u = h(null)
          , t = h(null)
          , {bodyLock: l, bodyUnlock: g} = ne();
        M(t, () => {
            d("on-close", {
                outside: !0
            })
        }
        );
        function e() {
            d("on-close", {
                outside: !1
            })
        }
        return q( () => c.show, f => {
            f ? l() : g()
        }
        ),
        J( () => {
            g()
        }
        ),
        (f, $) => {
            const V = H;
            return p(),
            U(W, {
                to: "body"
            }, [a(I, {
                name: "fade",
                appear: ""
            }, {
                default: v( () => [f.show ? (p(),
                b("div", ue)) : x("", !0)]),
                _: 1
            }), a(I, {
                appear: "",
                name: "dialog"
            }, {
                default: v( () => [f.show ? (p(),
                b("div", fe, [o("div", pe, [o("div", R({
                    ref_key: "modalRef",
                    ref: t,
                    class: ["relative flex w-full flex-col rounded-3xl border-4 border-primary bg-dark sm:w-auto sm:min-w-[600px]", [f.variant === "fullscreen" && "flex-1 md:flex-none"]]
                }, f.$attrs), [f.showClose ? (p(),
                b("button", {
                    key: 0,
                    class: "absolute right-4 top-4 z-[1] md:right-6 md:top-6",
                    type: "button",
                    onClick: $[0] || ($[0] = S => e())
                }, [a(V, {
                    name: "close"
                })])) : x("", !0), o("div", {
                    ref_key: "contentRef",
                    ref: u,
                    class: "max-h-full overflow-auto p-4 md:overflow-visible md:p-10"
                }, [E(f.$slots, "default")], 512)], 16)])])) : x("", !0)]),
                _: 3
            })])
        }
    }
});
var m = (n => (n.CookieConsent = "cookie-consent",
n))(m || {});
const ge = {
    key: 0,
    class: "fixed bottom-4 left-1/2 z-10 w-[calc(100%-32px)] max-w-xl -translate-x-1/2 rounded-3xl border-4 border-primary bg-dark sm:bottom-6 md:w-[calc(100%-52px)] lg:max-w-5xl"
}
  , ye = {
    class: "relative flex flex-col justify-between px-5 py-5 md:px-8 lg:flex-row"
}
  , ve = {
    class: "mb-5 flex-1 text-sm lg:mb-0 lg:pr-6"
}
  , be = {
    class: "mb-2 font-semibold"
}
  , ke = {
    class: "flex w-full flex-wrap justify-end lg:w-fit lg:grow-0"
}
  , _e = {
    class: "flex w-full flex-row flex-wrap items-end justify-end gap-4 lg:w-fit lg:grow-0 lg:gap-6"
}
  , he = {
    class: "mb-4 font-semibold"
}
  , we = {
    class: "mb-6"
}
  , Ce = {
    class: "mb-12 flex flex-col gap-4"
};
var D = (n => (n.Necessary = "necessary",
n.Analytics = "analytics",
n.Advertising = "advertising",
n))(D || {});
const Ve = j({
    __name: "CookieBanner",
    setup(n) {
        const {t: i} = K()
          , c = Q()
          , d = h(!1)
          , u = h(!1)
          , t = h([{
            type: "necessary",
            title: i("cookies.comply.preferences.necessary.title"),
            description: i("cookies.comply.preferences.necessary.description"),
            isRequired: !0
        }, {
            type: "analytics",
            title: i("cookies.comply.preferences.analytics.title"),
            description: i("cookies.comply.preferences.analytics.description")
        }, {
            type: "advertising",
            title: i("cookies.comply.preferences.advertising.title"),
            description: i("cookies.comply.preferences.advertising.description")
        }])
          , l = h("Waiting for user interaction...")
          , g = X({
            necessary: !0,
            analytics: !1,
            advertising: !1
        })
          , e = Y()
          , f = () => {
            const s = ["necessary"];
            l.value = `User accepted the following cookies 📋: ${s.join(", ")}`,
            localStorage.setItem(m.CookieConsent, JSON.stringify(s)),
            d.value = !1,
            e == null || e.enable(!1),
            console.log(l.value)
        }
          , $ = () => {
            const s = Object.values(D);
            l.value = `User accepted all cookies. 👍: ${s.join(", ")}`,
            localStorage.setItem(m.CookieConsent, JSON.stringify(s)),
            S(),
            e == null || e.enable(!0),
            e == null || e.trackView(c.name, c.path),
            d.value = !1,
            console.log(l.value)
        }
          , V = () => {
            const s = Object.values(D).filter(r => g[r]);
            l.value = "User accepted the following cookies 📋: " + s.join(", "),
            localStorage.setItem(m.CookieConsent, JSON.stringify(s)),
            u.value = !1,
            d.value = !1,
            s.includes("advertising") || s.includes("analytics") ? (s.includes("advertising") && s.includes("analytics") ? S() : s.includes("analytics") ? N() : s.includes("advertising") && L(),
            e == null || e.enable(!0),
            e == null || e.trackView(c.name, c.path)) : e == null || e.enable(!1),
            console.log(l.value)
        }
        ;
        function S() {
            gtag("consent", "update", {
                ad_user_data: "granted",
                ad_personalization: "granted",
                ad_storage: "granted",
                analytics_storage: "granted"
            })
        }
        function N() {
            gtag("consent", "update", {
                analytics_storage: "granted"
            })
        }
        function L() {
            gtag("consent", "update", {
                ad_user_data: "granted",
                ad_personalization: "granted",
                ad_storage: "granted"
            })
        }
        return Z( () => {
            ee( () => {
                var s, r, w, C;
                d.value = !localStorage.getItem(m.CookieConsent),
                ((s = localStorage.getItem(m.CookieConsent)) != null && s.includes("analytics") || (r = localStorage.getItem(m.CookieConsent)) != null && r.includes("advertising")) && ((w = localStorage.getItem(m.CookieConsent)) != null && w.includes("analytics") && N(),
                (C = localStorage.getItem(m.CookieConsent)) != null && C.includes("advertising") && L(),
                e == null || e.enable(!0),
                e == null || e.trackView(c.name, c.path))
            }
            , 5e3)
        }
        ),
        (s, r) => {
            const w = le
              , C = se("i18n-t")
              , B = ae
              , z = de
              , A = me;
            return p(),
            U(I, {
                name: "fade"
            }, {
                default: v( () => [_(d) ? (p(),
                b("aside", ge, [o("div", ye, [o("div", ve, [o("div", be, k(s.$t("cookies.title")), 1), a(C, {
                    keypath: "cookies.message",
                    tag: "p",
                    class: "mb-5 md:mb-6",
                    scope: "global"
                }, {
                    privacyPolicy: v( () => [a(w, {
                        to: s.$t("cookies.privacyLink"),
                        class: "underline hover:no-underline",
                        noPrefetch: ""
                    }, {
                        default: v( () => [P(k(s.$t("cookies.privacyPolicy")), 1)]),
                        _: 1
                    }, 8, ["to"])]),
                    _: 1
                }), o("button", {
                    class: "underline hover:no-underline",
                    type: "button",
                    onClick: r[0] || (r[0] = y => u.value = !0)
                }, k(_(i)("cookies.preferences")), 1)]), o("div", ke, [o("div", _e, [o("div", null, [a(B, {
                    class: "md:!w-fit",
                    variant: "outline",
                    label: s.$t("cookies.decline"),
                    onClick: f
                }, null, 8, ["label"])]), o("div", null, [a(B, {
                    class: "!w-full md:!w-fit",
                    label: s.$t("cookies.acceptAll"),
                    onClick: $
                }, null, 8, ["label"])])])])]), a(A, {
                    show: _(u),
                    class: "max-w-[600px]",
                    "content-class": "!px-4 !py-6",
                    variant: "fullscreen",
                    showClose: !1,
                    onOnClose: r[2] || (r[2] = () => u.value = !1)
                }, {
                    default: v( () => [o("div", he, k(s.$t("cookies.preferences")), 1), a(C, {
                        keypath: "cookies.message",
                        tag: "p",
                        class: "mb-12",
                        scope: "global"
                    }, {
                        privacyPolicy: v( () => [a(w, {
                            to: s.$t("cookies.privacyLink"),
                            class: "underline hover:no-underline",
                            noPrefetch: "",
                            onClick: r[1] || (r[1] = y => u.value = !1)
                        }, {
                            default: v( () => [P(k(s.$t("cookies.privacyPolicy")), 1)]),
                            _: 1
                        }, 8, ["to"])]),
                        _: 1
                    }), o("p", we, k(s.$t("cookies.comply.manage")), 1), o("div", Ce, [(p(!0),
                    b(oe, null, te(_(t), y => (p(),
                    b("div", {
                        key: y.type,
                        class: "relative flex gap-2"
                    }, [a(z, {
                        modelValue: _(g)[y.type],
                        "onUpdate:modelValue": F => _(g)[y.type] = F,
                        name: y.type,
                        label: y.title,
                        isDisabled: y.isRequired
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "label", "isDisabled"])]))), 128))]), a(B, {
                        label: s.$t("cookies.allowSelection"),
                        onClick: V
                    }, null, 8, ["label"])]),
                    _: 1
                }, 8, ["show"])])) : x("", !0)]),
                _: 1
            })
        }
    }
});
export {Ve as default};
