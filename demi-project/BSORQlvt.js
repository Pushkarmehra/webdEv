import {ay as n, a} from "./BSORQlvt.js";
function c() {
    const o = n("bodyLock", () => !1)
      , e = a();
    function s() {
        o.value = !0,
        e.lenis.stop()
    }
    function t() {
        o.value = !1,
        e.lenis.start()
    }
    return {
        bodyLock: s,
        bodyUnlock: t
    }
}
export {c as u};
