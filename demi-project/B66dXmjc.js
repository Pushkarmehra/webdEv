import {_ as m} from "./Bd2XCY5b.js";
import {_ as d} from "./DE44x201.js";
import {d as p, c as t, e as s, q as i, l as f, s as _, t as h, h as u, f as x, F as v, r as w} from "./BSORQlvt.js";
import "./DEqDShTj.js";
const y = {
    ref: "section",
    class: "container my-14 text-center lg:my-20"
}
  , I = {
    key: 0,
    ref: "title",
    class: "mb-3 text-center lg:mb-9"
}
  , b = {
    class: "mx-auto flex w-full max-w-5xl items-center justify-between gap-x-6 px-5 lg:gap-x-8"
}
  , C = p({
    __name: "SectionLogos.global",
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    setup(a) {
        return (k, N) => {
            const n = m
              , r = d;
            return t(),
            s("div", y, [a.data.title ? (t(),
            s("div", I, [i(n, null, {
                default: f( () => [_(h(a.data.title), 1)]),
                _: 1
            })], 512)) : u("", !0), x("div", b, [(t(!0),
            s(v, null, w(a.data.logos, (e, c) => (t(),
            s("div", {
                key: c,
                class: "logo flex flex-1 flex-col justify-center"
            }, [i(r, {
                loading: "lazy",
                class: "mx-auto w-fit",
                src: e != null && e.logo.responsiveImage ? e == null ? void 0 : e.logo.responsiveImage.src : e == null ? void 0 : e.logo.url,
                srcset: e != null && e.logo.responsiveImage ? e == null ? void 0 : e.logo.responsiveImage.webpSrcSet : void 0,
                width: e != null && e.logo.responsiveImage ? e == null ? void 0 : e.logo.responsiveImage.width : e == null ? void 0 : e.logo.width,
                height: e != null && e.logo.responsiveImage ? e == null ? void 0 : e.logo.responsiveImage.height : e == null ? void 0 : e.logo.height,
                alt: e == null ? void 0 : e.logo.alt
            }, null, 8, ["src", "srcset", "width", "height", "alt"])]))), 128))])], 512)
        }
    }
});
export {C as default};
