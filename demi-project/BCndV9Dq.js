import {d as E, p as g, o as M, B as a, v as m, c as u, e as F, f as o, g as l, q as p, l as c, s as w, Z as h, K as i, x as k} from "./BSORQlvt.js";
const _ = {
    class: "container"
}
  , L = {
    class: "flex flex-col gap-3 font-tech !text-[1.25rem] text-subTech uppercase lg:flex-row lg:gap-10"
}
  , Z = {
    class: "lg:min-w-none min-w-[43px]"
}
  , H = {
    class: "fx-icon mx-auto",
    width: "43",
    height: "29",
    viewBox: "0 0 43 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}
  , y = ["stroke"]
  , $ = ["stroke"]
  , V = ["stroke"]
  , I = {
    class: "lg:min-w-none min-w-[43px]"
}
  , T = {
    class: "fx-icon mx-auto",
    width: "32",
    height: "31",
    viewBox: "0 0 32 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}
  , b = ["fill"]
  , N = ["stroke"]
  , A = ["fill"]
  , B = {
    class: "lg:min-w-none min-w-[43px]"
}
  , S = {
    class: "fx-icon mx-auto",
    width: "36",
    height: "35",
    viewBox: "0 0 36 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}
  , R = {
    "clip-path": "url(#clip0_1422_25020)"
}
  , q = ["fill"]
  , K = ["fill"]
  , O = ["fill"]
  , G = ["fill"]
  , z = ["fill"]
  , P = ["fill"]
  , U = ["fill"]
  , W = ["fill"]
  , D = E({
    __name: "HeroFeatures",
    setup(X) {
        const s = g(void 0)
          , d = n => {
            n.target && a.to(window, {
                duration: 1.5,
                scrollTo: n.target.hash,
                overwrite: "auto"
            })
        }
          , C = g(null);
        let f = null
          , v = null;
        return M( () => {
            C.value && (f = a.context(n => {
                n.selector(".fx-features-block").forEach( (t, r) => {
                    const e = t.querySelector(".fx-title")
                      , x = t.querySelector(".fx-icon");
                    a.set(x, {
                        scale: 0
                    }),
                    a.set(e, {
                        autoAlpha: 0,
                        y: 10
                    }),
                    v = a.timeline({
                        delay: r * .2 + 1
                    }),
                    v.to(x, {
                        duration: .6,
                        scale: 1,
                        ease: "back(1.5).out"
                    }),
                    v.to(e, {
                        duration: .8,
                        autoAlpha: 1,
                        y: 0,
                        ease: "power1.out"
                    }, "-=0.2")
                }
                )
            }
            , C.value))
        }
        ),
        m( () => {
            f && f.revert()
        }
        ),
        (n, t) => {
            const r = k;
            return u(),
            F("div", {
                ref_key: "ctxRef",
                ref: C,
                class: "pointer-events-auto z-10 w-full lg:absolute lg:bottom-10 lg:left-0"
            }, [o("div", _, [o("div", L, [o("div", {
                class: "fx-features-block flex items-center gap-4 transition-colors duration-300 ease-in-out hover:text-white",
                onMouseenter: t[3] || (t[3] = e => s.value = 0),
                onMouseleave: t[4] || (t[4] = e => s.value = void 0)
            }, [o("div", Z, [(u(),
            F("svg", H, [o("path", {
                d: "M1.86852 28L9.89002 15.9678H40.2283L32.2068 28H1.86852Z",
                stroke: l(s) === 0 ? "#FFFFFF" : "#12E2FF",
                class: "transition-colors duration-300",
                "stroke-opacity": "0.2",
                "stroke-width": "2"
            }, null, 8, y), o("path", {
                d: "M1.86852 20.5161L9.89002 8.48389H40.2283L32.2068 20.5161H1.86852Z",
                stroke: l(s) === 0 ? "#FFFFFF" : "#12E2FF",
                class: "transition-colors duration-300",
                "stroke-opacity": "0.5",
                "stroke-width": "2"
            }, null, 8, $), o("path", {
                d: "M1.86852 13.0323L9.89002 1H40.2283L32.2068 13.0323H1.86852Z",
                stroke: l(s) === 0 ? "#FFFFFF" : "#12E2FF",
                class: "transition-colors duration-300",
                "stroke-width": "2"
            }, null, 8, V)]))]), p(r, {
                to: "#tracks",
                class: "fx-title flex items-center gap-4 lg:py-2",
                onClick: t[0] || (t[0] = h(e => d(e), ["stop"])),
                onMouseenter: t[1] || (t[1] = e => ("useEvent"in n ? n.useEvent : l(i))("cursor:scale", !1)),
                onMouseleave: t[2] || (t[2] = e => ("useEvent"in n ? n.useEvent : l(i))("cursor:scale", !0))
            }, {
                default: c( () => t[15] || (t[15] = [w("NEXT-LEVEL TRACKS")])),
                _: 1
            })], 32), o("div", {
                class: "fx-features-block flex items-center gap-4 transition-colors duration-300 ease-in-out hover:text-white",
                onMouseover: t[8] || (t[8] = e => s.value = 1),
                onMouseleave: t[9] || (t[9] = e => s.value = void 0)
            }, [o("div", I, [(u(),
            F("svg", T, [o("mask", {
                id: "path-1-inside-1_1422_25015",
                fill: l(s) === 1 ? "#FFFFFF" : "#12E2FF",
                class: "transition-colors duration-300"
            }, t[16] || (t[16] = [o("path", {
                d: "M31.0968 15.5C31.0968 24.0604 24.1572 31 15.5968 31C7.03639 31 0.0968018 24.0604 0.0968018 15.5C0.0968018 6.93959 7.03639 0 15.5968 0C24.1572 0 31.0968 6.93959 31.0968 15.5ZM7.17848 15.5C7.17848 20.1493 10.9475 23.9183 15.5968 23.9183C20.2461 23.9183 24.0151 20.1493 24.0151 15.5C24.0151 10.8507 20.2461 7.08168 15.5968 7.08168C10.9475 7.08168 7.17848 10.8507 7.17848 15.5Z"
            }, null, -1)]), 8, b), o("path", {
                d: "M31.0968 15.5C31.0968 24.0604 24.1572 31 15.5968 31C7.03639 31 0.0968018 24.0604 0.0968018 15.5C0.0968018 6.93959 7.03639 0 15.5968 0C24.1572 0 31.0968 6.93959 31.0968 15.5ZM7.17848 15.5C7.17848 20.1493 10.9475 23.9183 15.5968 23.9183C20.2461 23.9183 24.0151 20.1493 24.0151 15.5C24.0151 10.8507 20.2461 7.08168 15.5968 7.08168C10.9475 7.08168 7.17848 10.8507 7.17848 15.5Z",
                stroke: l(s) === 1 ? "#FFFFFF" : "#12E2FF",
                class: "transition-colors duration-300",
                "stroke-width": "3",
                mask: "url(#path-1-inside-1_1422_25015)"
            }, null, 8, N), o("circle", {
                cx: "15.5967",
                cy: "15.4998",
                r: "2.78205",
                fill: l(s) === 1 ? "#FFFFFF" : "#12E2FF",
                class: "transition-colors duration-300"
            }, null, 8, A)]))]), p(r, {
                class: "fx-title lg:py-2",
                to: "#showroom",
                onClick: t[5] || (t[5] = h(e => d(e), ["stop"])),
                onMouseenter: t[6] || (t[6] = e => ("useEvent"in n ? n.useEvent : l(i))("cursor:scale", !1)),
                onMouseleave: t[7] || (t[7] = e => ("useEvent"in n ? n.useEvent : l(i))("cursor:scale", !0))
            }, {
                default: c( () => t[17] || (t[17] = [w("INNOVATIVE GO-KARTS")])),
                _: 1
            })], 32), o("div", {
                class: "fx-features-block flex items-center gap-4 transition-colors duration-300 ease-in-out hover:text-white",
                onMouseover: t[13] || (t[13] = e => s.value = 2),
                onMouseleave: t[14] || (t[14] = e => s.value = void 0)
            }, [o("div", B, [(u(),
            F("svg", S, [o("g", R, [o("path", {
                d: "M12.5656 17.1924C10.59 17.1924 8.97668 18.7988 8.97668 20.7812C8.97668 22.7637 10.5831 24.3701 12.5656 24.3701C14.5411 24.3701 16.1544 22.7637 16.1544 20.7812C16.1544 18.7988 14.5411 17.1924 12.5656 17.1924ZM12.5656 22.6885C11.5128 22.6885 10.6515 21.834 10.6515 20.7744C10.6515 19.7148 11.506 18.8604 12.5656 18.8604C13.6183 18.8604 14.4796 19.7148 14.4796 20.7744C14.4796 21.834 13.6183 22.6885 12.5656 22.6885Z",
                fill: l(s) === 2 ? "#FFFFFF" : "#12E2FF",
                class: "transition-colors duration-300"
            }, null, 8, q), o("path", {
                d: "M26.2169 20.7744C26.2169 18.7988 24.6105 17.1855 22.6281 17.1855C20.6525 17.1855 19.0392 18.792 19.0392 20.7744C19.0392 22.7568 20.6456 24.3633 22.6281 24.3633C24.6105 24.3633 26.2169 22.75 26.2169 20.7744ZM22.6281 22.6885C21.5753 22.6885 20.714 21.834 20.714 20.7744C20.714 19.7148 21.5685 18.8604 22.6281 18.8604C23.6808 18.8604 24.5421 19.7148 24.5421 20.7744C24.5421 21.834 23.6876 22.6885 22.6281 22.6885Z",
                fill: l(s) === 2 ? "#FFFFFF" : "#12E2FF",
                class: "transition-colors duration-300"
            }, null, 8, K), o("path", {
                d: "M32.0753 11.8672C31.5011 8.44922 28.6779 5.91992 25.1984 5.70801L25.0548 5.68066C25.007 5.67383 24.9591 5.66699 24.9113 5.66699H10.4532C6.80969 5.66699 3.72668 8.27148 3.12512 11.8467L0.917114 23.6797C0.848755 24.001 0.814575 24.3223 0.814575 24.6436C0.814575 27.2275 2.91321 29.3262 5.49719 29.3262C7.05579 29.3262 8.51184 28.5537 9.36633 27.2822L10.4327 25.8057C10.7062 25.4297 10.6173 24.9102 10.2413 24.6367C9.86536 24.3633 9.34583 24.4522 9.07239 24.8281L7.99231 26.3252C7.43176 27.1592 6.49524 27.6582 5.49719 27.6582C3.83606 27.6582 2.48938 26.3047 2.48938 24.6504C2.48938 24.4453 2.50989 24.2334 2.55774 24.0078L4.76575 12.1475C5.23059 9.36523 7.62317 7.34863 10.4464 7.34863H24.8429L24.9591 7.36914C24.9933 7.37598 25.0206 7.37598 25.0548 7.38281C27.7208 7.52637 29.9767 9.53613 30.421 12.1611L32.6359 24.0215C32.6769 24.2266 32.6974 24.4385 32.6974 24.6436C32.6974 26.3047 31.3439 27.6514 29.6896 27.6514C28.6847 27.6514 27.755 27.1523 27.174 26.2979L26.0255 24.7119C25.7521 24.3359 25.2325 24.2539 24.8566 24.5205C24.4806 24.7939 24.3986 25.3135 24.6652 25.6895L25.7931 27.2549C26.6681 28.5469 28.1173 29.3193 29.6759 29.3193C32.2599 29.3193 34.3585 27.2207 34.3585 24.6367C34.3585 24.3154 34.3243 23.9873 34.2628 23.6865L32.0753 11.8672Z",
                fill: l(s) === 2 ? "#FFFFFF" : "#12E2FF",
                class: "transition-colors duration-300"
            }, null, 8, O), o("path", {
                d: "M21.9376 13.5625C22.5643 13.5625 23.0724 13.0544 23.0724 12.4277C23.0724 11.801 22.5643 11.293 21.9376 11.293C21.3109 11.293 20.8029 11.801 20.8029 12.4277C20.8029 13.0544 21.3109 13.5625 21.9376 13.5625Z",
                fill: l(s) === 2 ? "#FFFFFF" : "#12E2FF",
                class: "transition-colors duration-300"
            }, null, 8, G), o("path", {
                d: "M26.5792 13.5625C27.2059 13.5625 27.714 13.0544 27.714 12.4277C27.714 11.801 27.2059 11.293 26.5792 11.293C25.9525 11.293 25.4445 11.801 25.4445 12.4277C25.4445 13.0544 25.9525 13.5625 26.5792 13.5625Z",
                fill: l(s) === 2 ? "#FFFFFF" : "#12E2FF",
                class: "transition-colors duration-300"
            }, null, 8, z), o("path", {
                d: "M11.0138 9.06445C10.5489 9.06445 10.173 9.44043 10.173 9.90527V11.416H8.66223C8.19739 11.416 7.82141 11.792 7.82141 12.2568C7.82141 12.7217 8.19739 13.0977 8.66223 13.0977H10.173V14.6084C10.173 15.0732 10.5489 15.4492 11.0138 15.4492C11.4786 15.4492 11.8546 15.0732 11.8546 14.6084V13.0977H13.3654C13.8302 13.0977 14.2062 12.7217 14.2062 12.2568C14.2062 11.792 13.8302 11.416 13.3654 11.416H11.8546V9.90527C11.8546 9.44043 11.4786 9.06445 11.0138 9.06445Z",
                fill: l(s) === 2 ? "#FFFFFF" : "#12E2FF",
                class: "transition-colors duration-300"
            }, null, 8, P), o("path", {
                d: "M24.255 15.8799C24.8817 15.8799 25.3898 15.3718 25.3898 14.7451C25.3898 14.1184 24.8817 13.6104 24.255 13.6104C23.6283 13.6104 23.1202 14.1184 23.1202 14.7451C23.1202 15.3718 23.6283 15.8799 24.255 15.8799Z",
                fill: l(s) === 2 ? "#FFFFFF" : "#12E2FF",
                class: "transition-colors duration-300"
            }, null, 8, U), o("path", {
                d: "M24.255 11.2383C24.8817 11.2383 25.3898 10.7302 25.3898 10.1035C25.3898 9.4768 24.8817 8.96875 24.255 8.96875C23.6283 8.96875 23.1202 9.4768 23.1202 10.1035C23.1202 10.7302 23.6283 11.2383 24.255 11.2383Z",
                fill: l(s) === 2 ? "#FFFFFF" : "#12E2FF",
                class: "transition-colors duration-300"
            }, null, 8, W)]), t[18] || (t[18] = o("defs", null, [o("clipPath", {
                id: "clip0_1422_25020"
            }, [o("rect", {
                width: "35",
                height: "35",
                fill: "white",
                transform: "translate(0.0968018)"
            })])], -1))]))]), p(r, {
                to: "#all-in-one",
                class: "fx-title lg:py-2",
                onClick: t[10] || (t[10] = h(e => d(e), ["stop"])),
                onMouseenter: t[11] || (t[11] = e => ("useEvent"in n ? n.useEvent : l(i))("cursor:scale", !1)),
                onMouseleave: t[12] || (t[12] = e => ("useEvent"in n ? n.useEvent : l(i))("cursor:scale", !0))
            }, {
                default: c( () => t[19] || (t[19] = [w("IMMERSIVE GAMIFICATION")])),
                _: 1
            })], 32)])])], 512)
        }
    }
});
export {D as default};
