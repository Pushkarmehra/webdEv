import {d as ee, p as T, an as te, O as se, o as ne, B as b, v as re, c as ie, j as le, l as oe, f as ae, E as pe, n as he, g as ce, k as fe} from "./BSORQlvt.js";
import {e as g, g as z, S as A} from "./DEqDShTj.js";
/*!
 * ScrambleTextPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var v = function() {
    function f(e) {
        this.chars = g(e),
        this.sets = [],
        this.length = 50;
        for (var r = 0; r < 20; r++)
            this.sets[r] = K(80, this.chars)
    }
    var s = f.prototype;
    return s.grow = function(r) {
        for (var p = 0; p < 20; p++)
            this.sets[p] += K(r - this.length, this.chars);
        this.length = r
    }
    ,
    f
}(), w, J, Q = function() {
    return w || typeof window < "u" && (w = window.gsap) && w.registerPlugin && w
}, ge = 1, F = /\s+/g, K = function(s, e) {
    for (var r = e.length, p = ""; --s > -1; )
        p += e[~~(Math.random() * r)];
    return p
}, B = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", U = B.toLowerCase(), me = {
    upperCase: new v(B),
    lowerCase: new v(U),
    upperAndLowerCase: new v(B + U)
}, W = function() {
    J = w = Q()
}, L = {
    version: "3.12.5",
    name: "scrambleText",
    register: function(s, e, r) {
        w = s,
        W()
    },
    init: function(s, e, r, p, m) {
        if (J || W(),
        this.prop = "innerHTML"in s ? "innerHTML" : "textContent"in s ? "textContent" : 0,
        !!this.prop) {
            this.target = s,
            typeof e != "object" && (e = {
                text: e
            });
            var i = e.text || e.value || "", l = e.trim !== !1, t = this, n, h, o, C;
            return t.delimiter = n = e.delimiter || "",
            t.original = g(z(s).replace(F, " ").split("&nbsp;").join(""), n, l),
            (i === "{original}" || i === !0 || i == null) && (i = t.original.join(n)),
            t.text = g((i || "").replace(F, " "), n, l),
            t.hasClass = !!(e.newClass || e.oldClass),
            t.newClass = e.newClass,
            t.oldClass = e.oldClass,
            C = n === "",
            t.textHasEmoji = C && !!t.text.emoji,
            t.charsHaveEmoji = !!e.chars && !!g(e.chars).emoji,
            t.length = C ? t.original.length : t.original.join(n).length,
            t.lengthDif = (C ? t.text.length : t.text.join(n).length) - t.length,
            t.fillChar = e.fillChar || e.chars && ~e.chars.indexOf(" ") ? "&nbsp;" : "",
            t.charSet = o = me[e.chars || "upperCase"] || new v(e.chars),
            t.speed = .05 / (e.speed || 1),
            t.prevScrambleTime = 0,
            t.setIndex = Math.random() * 20 | 0,
            h = t.length + Math.max(t.lengthDif, 0),
            h > o.length && o.grow(h),
            t.chars = o.sets[t.setIndex],
            t.revealDelay = e.revealDelay || 0,
            t.tweenLength = e.tweenLength !== !1,
            t.tween = r,
            t.rightToLeft = !!e.rightToLeft,
            t._props.push("scrambleText", "text"),
            ge
        }
    },
    render: function(s, e) {
        var r = e.target, p = e.prop, m = e.text, i = e.delimiter, l = e.tween, t = e.prevScrambleTime, n = e.revealDelay, h = e.setIndex, o = e.chars, C = e.charSet, X = e.length, D = e.textHasEmoji, I = e.charsHaveEmoji, Y = e.lengthDif, Z = e.tweenLength, O = e.oldClass, R = e.newClass, j = e.rightToLeft, $ = e.fillChar, G = e.speed, N = e.original, q = e.hasClass, V = m.length, x = l._time, E = x - t, _, y, u, a, P, H, c, M, k, S, d;
        n && (l._from && (x = l._dur - x),
        s = x === 0 ? 0 : x < n ? 1e-6 : x === l._dur ? 1 : l._ease((x - n) / (l._dur - n))),
        s < 0 ? s = 0 : s > 1 && (s = 1),
        j && (s = 1 - s),
        _ = ~~(s * V + .5),
        s ? ((E > G || E < -G) && (e.setIndex = h = (h + (Math.random() * 19 | 0)) % 20,
        e.chars = C.sets[h],
        e.prevScrambleTime += E),
        a = o) : a = N.join(i),
        d = l._from ? s : 1 - s,
        S = X + (Z ? l._from ? d * d * d : 1 - d * d * d : 1) * Y,
        j ? s === 1 && (l._from || l.data === "isFromStart") ? (u = "",
        a = N.join(i)) : (c = m.slice(_).join(i),
        I ? u = g(a).slice(0, S - (D ? g(c) : c).length + .5 | 0).join("") : u = a.substr(0, S - (D ? g(c) : c).length + .5 | 0),
        a = c) : (u = m.slice(0, _).join(i),
        y = (D ? g(u) : u).length,
        I ? a = g(a).slice(y, S + .5 | 0).join("") : a = a.substr(y, S - y + .5 | 0)),
        q ? (M = j ? O : R,
        k = j ? R : O,
        P = M && _ !== 0,
        H = k && _ !== V,
        c = (P ? "<span class='" + M + "'>" : "") + u + (P ? "</span>" : "") + (H ? "<span class='" + k + "'>" : "") + i + a + (H ? "</span>" : "")) : c = u + i + a,
        r[p] = $ === "&nbsp;" && ~c.indexOf("  ") ? c.split("  ").join("&nbsp;&nbsp;") : c
    }
};
L.emojiSafeSplit = g;
L.getText = z;
Q() && w.registerPlugin(L);
const de = ee({
    __name: "TextAnimation",
    props: {
        blockLevel: {
            type: Boolean,
            default: !1
        },
        animation: {
            default: "scramble"
        },
        delay: {
            default: 0
        },
        animate: {
            type: Boolean,
            default: !0
        }
    },
    setup(f) {
        const s = f
          , e = T(null)
          , r = T(null)
          , p = T(null)
          , m = T(null)
          , i = T(!1)
          , {stop: l} = te(e, ([{isIntersecting: n}], h) => {
            var o;
            n && s.animate && ((o = m.value) == null || o.play())
        }
        , {
            threshold: .1
        });
        se( () => s.animate, (n, h) => {
            var o;
            h || (o = m.value) == null || o.play()
        }
        );
        let t = null;
        return ne( () => {
            b.registerPlugin(A),
            b.registerPlugin(L),
            i.value = !0,
            e.value && (t = b.context( () => {
                p.value = new A(r.value,{
                    type: "chars, words"
                });
                const n = new A(r.value,{
                    type: "chars, words"
                });
                b.set(n.words, {
                    perspective: 900
                }),
                m.value = b.from(n.words, {
                    autoAlpha: 0,
                    stagger: {
                        each: .02
                    },
                    scrambleText: {
                        text: "{original}",
                        chars: "SPACEKART"
                    },
                    paused: !0
                })
            }
            , e.value))
        }
        ),
        re( () => {
            t && t.revert(),
            l()
        }
        ),
        (n, h) => (ie(),
        le(fe(n.blockLevel ? "div" : "span"), {
            ref_key: "ctxRef",
            ref: e,
            class: he(["transform-gpu", [ce(i) ? "opacity-100" : "opacity-0"]])
        }, {
            default: oe( () => [ae("span", {
                ref_key: "textRef",
                ref: r
            }, [pe(n.$slots, "default")], 512)]),
            _: 3
        }, 8, ["class"]))
    }
});
export {de as _};
