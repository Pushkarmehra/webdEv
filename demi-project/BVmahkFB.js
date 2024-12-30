import {d as m, p as n, o as g, J as w, B as v, O as y, v as k, c as b, e as h, f as s, g as d, q as f, l as V, s as B, t as C, x as F, aw as R, E as S, ax as L} from "./BSORQlvt.js";
import {u as $} from "./Bg4TusBG.js";
const z = "" + new URL("cta.CX6BMl8d.webp",import.meta.url).href
  , E = {
    class: "relative block h-[31px] w-[123px] transform-gpu rounded-full bg-cta bg-[length:123px_31px] bg-top shadow-[0px_0px_22px_#12E2FF] transition duration-300 hover:shadow-[0px_0px_44px_#12E2FF]"
}
  , H = ["src"]
  , N = m({
    __name: "ButtonVideo",
    props: {
        disabled: {
            type: Boolean,
            default: !1
        },
        label: {},
        to: {},
        isVideoVisible: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["click"],
    setup(_, {emit: i}) {
        const {showVideo: o} = $()
          , r = _
          , u = i;
        function x(e) {
            r.disabled && (e.preventDefault(),
            e.stopPropagation()),
            u("click", e),
            o()
        }
        const t = n(null)
          , p = n(null)
          , l = n(null);
        return g( () => {
            w( () => {
                t.value && (v.set([t.value], {
                    scale: 0
                }),
                l.value = v.from([t.value], {
                    scale: 1,
                    paused: !0,
                    duration: .8,
                    ease: "back.inOut(1.6)"
                }).progress(1))
            }
            )
        }
        ),
        y( () => r.isVideoVisible, e => {
            var a, c;
            e ? (l.value.reverse(),
            (a = p.value) == null || a.play()) : (l.value.play(),
            (c = p.value) == null || c.pause())
        }
        ),
        k( () => {
            l.value && l.value.kill()
        }
        ),
        (e, a) => {
            const c = F;
            return b(),
            h("div", E, [s("span", {
                ref_key: "pinRef",
                ref: t,
                class: "absolute -top-[3px] right-[106px] block h-10 w-[54px] origin-right scale-0 cursor-pointer",
                onClick: x
            }, [a[0] || (a[0] = s("span", {
                class: "btn-pin absolute -left-[54px] -top-[54px] block h-[144px] w-[144px]"
            }, null, -1)), s("img", {
                src: d(z),
                loading: "lazy",
                class: "ratio-square absolute -left-px -top-px h-[38px] w-[38px] transform-gpu rounded-full object-cover transition duration-300 hover:opacity-50",
                alt: "",
                sizes: "38px"
            }, null, 8, H)], 512), f(c, {
                to: e.to,
                class: "inline-block py-1.5 pl-8 pr-4 text-sm font-semibold text-cyan"
            }, {
                default: V( () => [B(C(e.label), 1)]),
                _: 1
            }, 8, ["to"])])
        }
    }
})
  , M = {
    class: "container relative z-10 flex items-center justify-between"
}
  , j = {
    class: "pointer-events-auto lg:py-2"
}
  , q = {
    class: "pointer-events-auto lg:py-2"
}
  , T = m({
    __name: "Header",
    setup(_) {
        const i = n(null)
          , o = n(!1)
          , {y: r} = R(window, {
            onScroll: () => {
                i.value !== null && (r.value > window.innerHeight ? o.value = !0 : o.value = !1)
            }
        });
        return (u, x) => {
            const t = L
              , p = N;
            return b(),
            h("header", {
                ref_key: "headerRef",
                ref: i,
                class: "pointer-events-none fixed left-0 z-10 w-full py-4 lg:py-8 top-0"
            }, [s("div", M, [s("div", j, [f(t, {
                isFullLogo: d(o)
            }, null, 8, ["isFullLogo"])]), S(u.$slots, "default"), s("div", q, [f(p, {
                isVideoVisible: d(o),
                to: "/contact",
                label: "Contact us",
                class: "absolute right-0 top-0"
            }, null, 8, ["isVideoVisible"])])])], 512)
        }
    }
});
export {T as default};
