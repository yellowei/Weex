// { "framework": "Vue" }
"use weex:vue";

! function(t) { var e = {};

    function n(r) { if (e[r]) return e[r].exports; var o = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } n.m = t, n.c = e, n.d = function(t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r }) }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 37) }([function(t, e) { var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, function(t, e) { var n = {}.hasOwnProperty;
    t.exports = function(t, e) { return n.call(t, e) } }, function(t, e, n) { var r = n(3),
        o = n(11);
    t.exports = n(4) ? function(t, e, n) { return r.f(t, e, o(1, n)) } : function(t, e, n) { return t[e] = n, t } }, function(t, e, n) { var r = n(9),
        o = n(29),
        i = n(17),
        u = Object.defineProperty;
    e.f = n(4) ? Object.defineProperty : function(t, e, n) { if (r(t), e = i(e, !0), r(n), o) try { return u(t, e, n) } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (t[e] = n.value), t } }, function(t, e, n) { t.exports = !n(10)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(t, e, n) { var r = n(55),
        o = n(15);
    t.exports = function(t) { return r(o(t)) } }, function(t, e, n) { var r = n(21)("wks"),
        o = n(12),
        i = n(0).Symbol,
        u = "function" == typeof i;
    (t.exports = function(t) { return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t)) }).store = r }, function(t, e) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, e) { var n = t.exports = { version: "2.5.3" }; "number" == typeof __e && (__e = n) }, function(t, e, n) { var r = n(7);
    t.exports = function(t) { if (!r(t)) throw TypeError(t + " is not an object!"); return t } }, function(t, e) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, e) { t.exports = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function(t, e) { var n = 0,
        r = Math.random();
    t.exports = function(t) { return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36)) } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.fetchNews = e.fetchDoodle = e.readAbout = e.saveAbout = e.fetchAbout = e.readGuide = e.saveGuide = e.fetchGuide = e.readExamples = e.saveExamples = e.fetchExamples = void 0; var r = i(n(44)),
        o = i(n(46));

    function i(t) { return t && t.__esModule ? t : { default: t } } e.createLink = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = []; for (var r in e) "string" == typeof e[r] && n.push(f(r) + "=" + f(e[r])); if ("Web" === WXEnvironment.platform) return n.unshift("page=" + t + ".web.js"), "/?" + n.join("&"); return "" + function() { var t = weex.config.bundleUrl,
                e = t.indexOf("your_current_IP") >= 0 || t.indexOf("file://assets/") >= 0,
                n = t.indexOf("file:///") >= 0 && t.indexOf("WeexDemo.app") > 0; if (e) return "file://assets/"; if (n) return t.substring(0, t.lastIndexOf("/") + 1); return "" }() + t + ".weex.js" + (n.length ? "?" + n.join("&") : "") }, e.createURL = s, e.i18n = l, e.parseLanguage = d, e.setLanguage = function(t) { var e = d(t);
        e && a.setItem("WEEX_PLAYGROUND_LANGUAGE", e) }, e.clearStorageLanguage = function() { a.removeItem("WEEX_PLAYGROUND_LANGUAGE") }, e.getStorageLanguage = v, e.getSystemLanguage = y, e.getLanguage = h, e.jumpTo = function(t, e, n) { h(function(r) { a.setItem("CURRENT_DOCUMENT_URL", l(t, n || r)), c.push({ url: s("bf0305c14b511b24a4e616f53926432b", { language: r, title: l(e, n || r) }) }) }) }, e.viewSource = function(t) { h(function(e) { c.push({ url: s("f6ce29faf686eabc38b410bf4828fa5a", { hash: t, language: e }) }) }) }, e.setTitleBar = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en"; if ("[object Object]" !== Object.prototype.toString.apply(t)) return; var n = weex.requireModule("titleBar"); if (t.color || t.backgroundColor) try { n.setStyle({ foregroundColor: t.color || "#FFFFFF", backgroundColor: t.backgroundColor || "#00B4FF" }) } catch (t) {}
        var r = l(t.title, e); if (r) try { n.setTitle(r) } catch (t) {} }, e.fetchData = b, e.saveData = _, e.readData = x; var u = weex.requireModule("stream"),
        a = weex.requireModule("storage"),
        c = weex.requireModule("navigator"),
        f = "function" == typeof encodeURIComponent ? encodeURIComponent : "function" == typeof encodeURI ? encodeURI : function(t) { return t };

    function s(t, e) { if ("Web" === WXEnvironment.platform) return "http://dotwe.org/raw/htmlVue/" + t; var n = "http://dotwe.org/raw/dist/" + t + ".bundle.wx",
            r = function(t) { if (!t || "object" !== (void 0 === t ? "undefined" : (0, o.default)(t))) return ""; var e = []; for (var n in t) "string" == typeof t[n] && e.push(f(n) + "=" + f(t[n])); return e.join("&") }(e); return "TB" === WXEnvironment.appName ? n + "?_wx_tpl=" + n + "&" + r : "WXSample" === WXEnvironment.appName ? n + "?" + r : n + "?wx_weex=true&" + r }

    function l(t, e) { return "string" == typeof t ? t : "[object Object]" === Object.prototype.toString.call(t) ? t[this && this.language || e || "en"] : void 0 } var p = /(en|zh)\_?\w*/i;

    function d(t) { var e = p.exec(t + ""); return e && e[1] ? e[1] : "" }

    function v(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}; if ("function" !== !(void 0 === t || (0, o.default)(t))) try { a.getItem("WEEX_PLAYGROUND_LANGUAGE", function(n) { if ("success" === n.result) { var r = d(n.data);
                    r ? t(r) : e() } else e(n) }) } catch (t) { e(t) } }

    function y(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}; if ("function" !== !(void 0 === t || (0, o.default)(t)))
            if ("web" === WXEnvironment.platform.toLowerCase()) { var n = d(window.navigator.language);
                n ? t(n) : e() } else try { var r = weex.requireModule("locale") || weex.requireModule("local"),
                    i = !1,
                    u = d(r.getLanguage(function(n) { var r = d(n);
                        r ? i || t(r) : e() }));
                u ? (i = !0, t(u)) : e() } catch (t) { e(t) } } var g = /.+[\?\&]{1}language=([\d\w]+)[\?\&]?.*/i;

    function h() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
            e = g.exec(weex.config.bundleUrl || ""),
            n = d(e && e[1]);
        n ? t(n) : v(t, function() { y(t, function() { t("en") }) }) } var m = { doodle: "WEEX_PLAYGROUND_APP_DOODLE", guide: "WEEX_PLAYGROUND_APP_GUIDE", examples: "WEEX_PLAYGROUND_APP_EXAMPLES", news: "WEEX_PLAYGROUND_APP_NEWS", about: "WEEX_PLAYGROUND_APP_ABOUT" };

    function b(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}; try { u.fetch({ url: "http://dotwe.org/query/weex-playground-app", method: "post", headers: { "Content-Type": "application/x-www-form-urlencoded" }, type: "json", body: "name=" + t }, function(t) { t.ok && t.data && t.data.success ? e(t.data) : n(t) }) } catch (t) { n(t) } }

    function _(t, e) { var n = m[t];
        n && e && "object" === (void 0 === e ? "undefined" : (0, o.default)(e)) && (e.timestamp = Date.now(), a.setItem(n, (0, r.default)(e))) }

    function x(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
            r = m[t]; if (!r) return n(); try { a.getItem(r, function(r) { if ("success" === r.result) { var o = JSON.parse(r.data); if (o && Array.isArray(o[t])) return e(o[t]) } n(r) }) } catch (t) { n(t) } } e.fetchExamples = function() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return b.apply(void 0, ["examples"].concat(e)) }, e.saveExamples = function() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return _.apply(void 0, ["examples"].concat(e)) }, e.readExamples = function() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return x.apply(void 0, ["examples"].concat(e)) }, e.fetchGuide = function() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return b.apply(void 0, ["guide"].concat(e)) }, e.saveGuide = function() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return _.apply(void 0, ["guide"].concat(e)) }, e.readGuide = function() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return x.apply(void 0, ["guide"].concat(e)) }, e.fetchAbout = function() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return b.apply(void 0, ["about"].concat(e)) }, e.saveAbout = function() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return _.apply(void 0, ["about"].concat(e)) }, e.readAbout = function() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return x.apply(void 0, ["about"].concat(e)) }, e.fetchDoodle = function() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return b.apply(void 0, ["doodle"].concat(e)) }, e.fetchNews = function() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return b.apply(void 0, ["news"].concat(e)) } }, function(t, e) { var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t) } }, function(t, e) { t.exports = function(t) { if (void 0 == t) throw TypeError("Can't call method on  " + t); return t } }, function(t, e) { t.exports = !0 }, function(t, e, n) { var r = n(7);
    t.exports = function(t, e) { if (!r(t)) return t; var n, o; if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o; if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o; if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o; throw TypeError("Can't convert object to primitive value") } }, function(t, e) { t.exports = {} }, function(t, e, n) { var r = n(33),
        o = n(22);
    t.exports = Object.keys || function(t) { return r(t, o) } }, function(t, e, n) { var r = n(21)("keys"),
        o = n(12);
    t.exports = function(t) { return r[t] || (r[t] = o(t)) } }, function(t, e, n) { var r = n(0),
        o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    t.exports = function(t) { return o[t] || (o[t] = {}) } }, function(t, e) { t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(t, e, n) { var r = n(3).f,
        o = n(1),
        i = n(6)("toStringTag");
    t.exports = function(t, e, n) { t && !o(t = n ? t : t.prototype, i) && r(t, i, { configurable: !0, value: e }) } }, function(t, e, n) { e.f = n(6) }, function(t, e, n) { var r = n(0),
        o = n(8),
        i = n(16),
        u = n(24),
        a = n(3).f;
    t.exports = function(t) { var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {}); "_" == t.charAt(0) || t in e || a(e, t, { value: u.f(t) }) } }, function(t, e) { e.f = {}.propertyIsEnumerable }, function(t, e, n) { "use strict"; var r = n(16),
        o = n(28),
        i = n(31),
        u = n(2),
        a = n(1),
        c = n(18),
        f = n(53),
        s = n(23),
        l = n(60),
        p = n(6)("iterator"),
        d = !([].keys && "next" in [].keys()),
        v = function() { return this };
    t.exports = function(t, e, n, y, g, h, m) { f(n, e, y); var b, _, x, w = function(t) { if (!d && t in j) return j[t]; switch (t) {
                    case "keys":
                    case "values":
                        return function() { return new n(this, t) } } return function() { return new n(this, t) } },
            O = e + " Iterator",
            S = "values" == g,
            E = !1,
            j = t.prototype,
            L = j[p] || j["@@iterator"] || g && j[g],
            A = !d && L || w(g),
            C = g ? S ? w("entries") : A : void 0,
            P = "Array" == e && j.entries || L; if (P && (x = l(P.call(new t))) !== Object.prototype && x.next && (s(x, O, !0), r || a(x, p) || u(x, p, v)), S && L && "values" !== L.name && (E = !0, A = function() { return L.call(this) }), r && !m || !d && !E && j[p] || u(j, p, A), c[e] = A, c[O] = v, g)
            if (b = { values: S ? A : w("values"), keys: h ? A : w("keys"), entries: C }, m)
                for (_ in b) _ in j || i(j, _, b[_]);
            else o(o.P + o.F * (d || E), e, b); return b } }, function(t, e, n) { var r = n(0),
        o = n(8),
        i = n(51),
        u = n(2),
        a = function(t, e, n) { var c, f, s, l = t & a.F,
                p = t & a.G,
                d = t & a.S,
                v = t & a.P,
                y = t & a.B,
                g = t & a.W,
                h = p ? o : o[e] || (o[e] = {}),
                m = h.prototype,
                b = p ? r : d ? r[e] : (r[e] || {}).prototype; for (c in p && (n = e), n)(f = !l && b && void 0 !== b[c]) && c in h || (s = f ? b[c] : n[c], h[c] = p && "function" != typeof b[c] ? n[c] : y && f ? i(s, r) : g && b[c] == s ? function(t) { var e = function(e, n, r) { if (this instanceof t) { switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, n) } return new t(e, n, r) } return t.apply(this, arguments) }; return e.prototype = t.prototype, e }(s) : v && "function" == typeof s ? i(Function.call, s) : s, v && ((h.virtual || (h.virtual = {}))[c] = s, t & a.R && m && !m[c] && u(m, c, s))) };
    a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a }, function(t, e, n) { t.exports = !n(4) && !n(10)(function() { return 7 != Object.defineProperty(n(30)("div"), "a", { get: function() { return 7 } }).a }) }, function(t, e, n) { var r = n(7),
        o = n(0).document,
        i = r(o) && r(o.createElement);
    t.exports = function(t) { return i ? o.createElement(t) : {} } }, function(t, e, n) { t.exports = n(2) }, function(t, e, n) { var r = n(9),
        o = n(54),
        i = n(22),
        u = n(20)("IE_PROTO"),
        a = function() {},
        c = function() { var t, e = n(30)("iframe"),
                r = i.length; for (e.style.display = "none", n(59).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; r--;) delete c.prototype[i[r]]; return c() };
    t.exports = Object.create || function(t, e) { var n; return null !== t ? (a.prototype = r(t), n = new a, a.prototype = null, n[u] = t) : n = c(), void 0 === e ? n : o(n, e) } }, function(t, e, n) { var r = n(1),
        o = n(5),
        i = n(56)(!1),
        u = n(20)("IE_PROTO");
    t.exports = function(t, e) { var n, a = o(t),
            c = 0,
            f = []; for (n in a) n != u && r(a, n) && f.push(n); for (; e.length > c;) r(a, n = e[c++]) && (~i(f, n) || f.push(n)); return f } }, function(t, e) { var n = {}.toString;
    t.exports = function(t) { return n.call(t).slice(8, -1) } }, function(t, e) { e.f = Object.getOwnPropertySymbols }, function(t, e, n) { var r = n(33),
        o = n(22).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) { return r(t, o) } }, function(t, e, n) { "use strict"; var r = u(n(38)),
        o = u(n(79)),
        i = function(t) { if (t && t.__esModule) return t; var e = {}; if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e.default = t, e }(n(13));

    function u(t) { return t && t.__esModule ? t : { default: t } } try { weex.requireModule("titleBar").showTitleBar(!1) } catch (t) {} Vue.mixin(o.default), setTimeout(function() { i.fetchExamples(i.saveExamples), i.fetchGuide(i.saveGuide), i.fetchAbout(i.saveAbout) }, 10), r.default.el = "#root", new Vue(r.default) }, function(t, e, n) { var r, o, i = [];
    i.push(n(39)), r = n(40); var u = n(78);
    o = r = r || {}, "object" != typeof r.default && "function" != typeof r.default || (Object.keys(r).some(function(t) { return "default" !== t && "__esModule" !== t }) && console.error("named exports are not supported in *.vue files."), o = r = r.default), "function" == typeof o && (o = o.options), o.__file = "/Users/Hanks/Codes/work/weex-vue-examples/src/pages/Landing.vue", o.render = u.render, o.staticRenderFns = u.staticRenderFns, o._scopeId = "data-v-50791ba3", o.style = o.style || {}, i.forEach(function(t) { for (var e in t) o.style[e] = t[e] }), "function" == typeof __register_static_styles__ && __register_static_styles__(o._scopeId, i), t.exports = r }, function(t, e) { t.exports = { doodle: { width: "750", height: "880" }, "menu-list": { flex: 1 }, "menu-row": { flex: 1, flexDirection: "row", justifyContent: "center", borderTopWidth: "1", borderTopStyle: "solid", borderTopColor: "#CCCCCC" }, "menu-item": { flex: 1, backgroundColor: "#FBFBFB", justifyContent: "center", paddingTop: "50", paddingBottom: "50", "backgroundColor:active": "#F2F2F2" }, "menu-item-1": { borderRightWidth: "1", borderRightStyle: "solid", borderRightColor: "#CCCCCC" }, "menu-text": { textAlign: "center", fontSize: "52", fontWeight: "bold", color: "#8B8B8B" }, "menu-text-zh": { fontSize: "56" } } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var r, o = n(41),
        i = (r = o) && r.__esModule ? r : { default: r };
    e.default = { components: { Doodle: i.default }, data: function() { return { language: "en", menus: [
                    [{ name: "guide", title: { en: "Guide", zh: "教程" } }, { name: "examples", title: { en: "Examples", zh: "实例" } }],
                    [{ name: "news", title: { en: "News", zh: "资讯" } }, { name: "about", title: { en: "About", zh: "关于" } }]
                ] } } } }, function(t, e, n) { var r, o, i = [];
    i.push(n(42)), r = n(43); var u = n(77);
    o = r = r || {}, "object" != typeof r.default && "function" != typeof r.default || (Object.keys(r).some(function(t) { return "default" !== t && "__esModule" !== t }) && console.error("named exports are not supported in *.vue files."), o = r = r.default), "function" == typeof o && (o = o.options), o.__file = "/Users/Hanks/Codes/work/weex-vue-examples/src/components/Doodle.vue", o.render = u.render, o.staticRenderFns = u.staticRenderFns, o._scopeId = "data-v-312c24c9", o.style = o.style || {}, i.forEach(function(t) { for (var e in t) o.style[e] = t[e] }), "function" == typeof __register_static_styles__ && __register_static_styles__(o._scopeId, i), t.exports = r }, function(t, e) { t.exports = { wrapper: { alignItems: "center", justifyContent: "space-between", backgroundColor: "#FFFFFF" }, center: { alignItems: "center", justifyContent: "center" }, logo: { width: "750", height: "318" }, btn: { width: "450", height: "160", marginTop: "50", marginRight: "50", marginBottom: "50", marginLeft: "50", opacity: .7, "opacity:active": 1 }, "scan-bg": { width: "450", height: "160", position: "absolute", top: 0, left: 0 }, "btn-text": { color: "#505050", fontSize: "56", textAlign: "center" }, "btn-text-zh": { fontSize: "64" } } }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(13),
        o = (weex.requireModule("modal"), weex.requireModule("navigator")),
        i = weex.requireModule("event");
    e.default = { props: ["lang"], data: function() { return { language: this.lang || "en", showDoodle: !1, seenDoodle: !1, SCAN: { en: "Scan QR Code", zh: "扫描二维码" }, doodle: {} } }, beforeCreate: function() { var t = this;
            (0, r.fetchDoodle)(function(e) { var n = e.doodle;
                (function(t) { var e = (new Date).getTime(); return t && t.src && parseInt(t.from, 10) < e && e < parseInt(t.to, 10) })(n) && !t.seenDoodle && (t.doodle = n, t.showDoodle = !0, n.duration && setTimeout(function() { t.showDoodle = !1, t.seenDoodle = !0 }, parseInt(n.duration, 10))) }) }, methods: { scan: function() { try { i.openURL("weex://go/scan") } catch (t) { try { o.push({ url: "weex://go/scan" }) } catch (t) {} } }, magic: function() { this.doodle && this.doodle.next && (this.showDoodle = !1, o.push({ url: this.createURL(this.doodle.next, { language: this.language }) })) } } } }, function(t, e, n) { t.exports = { default: n(45), __esModule: !0 } }, function(t, e, n) { var r = n(8),
        o = r.JSON || (r.JSON = { stringify: JSON.stringify });
    t.exports = function(t) { return o.stringify.apply(o, arguments) } }, function(t, e, n) { "use strict";
    e.__esModule = !0; var r = u(n(47)),
        o = u(n(66)),
        i = "function" == typeof o.default && "symbol" == typeof r.default ? function(t) { return typeof t } : function(t) { return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : typeof t };

    function u(t) { return t && t.__esModule ? t : { default: t } } e.default = "function" == typeof o.default && "symbol" === i(r.default) ? function(t) { return void 0 === t ? "undefined" : i(t) } : function(t) { return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : void 0 === t ? "undefined" : i(t) } }, function(t, e, n) { t.exports = { default: n(48), __esModule: !0 } }, function(t, e, n) { n(49), n(62), t.exports = n(24).f("iterator") }, function(t, e, n) { "use strict"; var r = n(50)(!0);
    n(27)(String, "String", function(t) { this._t = String(t), this._i = 0 }, function() { var t, e = this._t,
            n = this._i; return n >= e.length ? { value: void 0, done: !0 } : (t = r(e, n), this._i += t.length, { value: t, done: !1 }) }) }, function(t, e, n) { var r = n(14),
        o = n(15);
    t.exports = function(t) { return function(e, n) { var i, u, a = String(o(e)),
                c = r(n),
                f = a.length; return c < 0 || c >= f ? t ? "" : void 0 : (i = a.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === f || (u = a.charCodeAt(c + 1)) < 56320 || u > 57343 ? t ? a.charAt(c) : i : t ? a.slice(c, c + 2) : u - 56320 + (i - 55296 << 10) + 65536 } } }, function(t, e, n) { var r = n(52);
    t.exports = function(t, e, n) { if (r(t), void 0 === e) return t; switch (n) {
            case 1:
                return function(n) { return t.call(e, n) };
            case 2:
                return function(n, r) { return t.call(e, n, r) };
            case 3:
                return function(n, r, o) { return t.call(e, n, r, o) } } return function() { return t.apply(e, arguments) } } }, function(t, e) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(t + " is not a function!"); return t } }, function(t, e, n) { "use strict"; var r = n(32),
        o = n(11),
        i = n(23),
        u = {};
    n(2)(u, n(6)("iterator"), function() { return this }), t.exports = function(t, e, n) { t.prototype = r(u, { next: o(1, n) }), i(t, e + " Iterator") } }, function(t, e, n) { var r = n(3),
        o = n(9),
        i = n(19);
    t.exports = n(4) ? Object.defineProperties : function(t, e) { o(t); for (var n, u = i(e), a = u.length, c = 0; a > c;) r.f(t, n = u[c++], e[n]); return t } }, function(t, e, n) { var r = n(34);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) { return "String" == r(t) ? t.split("") : Object(t) } }, function(t, e, n) { var r = n(5),
        o = n(57),
        i = n(58);
    t.exports = function(t) { return function(e, n, u) { var a, c = r(e),
                f = o(c.length),
                s = i(u, f); if (t && n != n) { for (; f > s;)
                    if ((a = c[s++]) != a) return !0 } else
                for (; f > s; s++)
                    if ((t || s in c) && c[s] === n) return t || s || 0; return !t && -1 } } }, function(t, e, n) { var r = n(14),
        o = Math.min;
    t.exports = function(t) { return t > 0 ? o(r(t), 9007199254740991) : 0 } }, function(t, e, n) { var r = n(14),
        o = Math.max,
        i = Math.min;
    t.exports = function(t, e) { return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e) } }, function(t, e, n) { var r = n(0).document;
    t.exports = r && r.documentElement }, function(t, e, n) { var r = n(1),
        o = n(61),
        i = n(20)("IE_PROTO"),
        u = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) { return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null } }, function(t, e, n) { var r = n(15);
    t.exports = function(t) { return Object(r(t)) } }, function(t, e, n) { n(63); for (var r = n(0), o = n(2), i = n(18), u = n(6)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < a.length; c++) { var f = a[c],
            s = r[f],
            l = s && s.prototype;
        l && !l[u] && o(l, u, f), i[f] = i.Array } }, function(t, e, n) { "use strict"; var r = n(64),
        o = n(65),
        i = n(18),
        u = n(5);
    t.exports = n(27)(Array, "Array", function(t, e) { this._t = u(t), this._i = 0, this._k = e }, function() { var t = this._t,
            e = this._k,
            n = this._i++; return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]) }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries") }, function(t, e) { t.exports = function() {} }, function(t, e) { t.exports = function(t, e) { return { value: e, done: !!t } } }, function(t, e, n) { t.exports = { default: n(67), __esModule: !0 } }, function(t, e, n) { n(68), n(74), n(75), n(76), t.exports = n(8).Symbol }, function(t, e, n) { "use strict"; var r = n(0),
        o = n(1),
        i = n(4),
        u = n(28),
        a = n(31),
        c = n(69).KEY,
        f = n(10),
        s = n(21),
        l = n(23),
        p = n(12),
        d = n(6),
        v = n(24),
        y = n(25),
        g = n(70),
        h = n(71),
        m = n(9),
        b = n(7),
        _ = n(5),
        x = n(17),
        w = n(11),
        O = n(32),
        S = n(72),
        E = n(73),
        j = n(3),
        L = n(19),
        A = E.f,
        C = j.f,
        P = S.f,
        M = r.Symbol,
        T = r.JSON,
        D = T && T.stringify,
        R = d("_hidden"),
        k = d("toPrimitive"),
        N = {}.propertyIsEnumerable,
        F = s("symbol-registry"),
        I = s("symbols"),
        U = s("op-symbols"),
        G = Object.prototype,
        W = "function" == typeof M,
        X = r.QObject,
        B = !X || !X.prototype || !X.prototype.findChild,
        q = i && f(function() { return 7 != O(C({}, "a", { get: function() { return C(this, "a", { value: 7 }).a } })).a }) ? function(t, e, n) { var r = A(G, e);
            r && delete G[e], C(t, e, n), r && t !== G && C(G, e, r) } : C,
        z = function(t) { var e = I[t] = O(M.prototype); return e._k = t, e },
        V = W && "symbol" == typeof M.iterator ? function(t) { return "symbol" == typeof t } : function(t) { return t instanceof M },
        H = function(t, e, n) { return t === G && H(U, e, n), m(t), e = x(e, !0), m(n), o(I, e) ? (n.enumerable ? (o(t, R) && t[R][e] && (t[R][e] = !1), n = O(n, { enumerable: w(0, !1) })) : (o(t, R) || C(t, R, w(1, {})), t[R][e] = !0), q(t, e, n)) : C(t, e, n) },
        J = function(t, e) { m(t); for (var n, r = g(e = _(e)), o = 0, i = r.length; i > o;) H(t, n = r[o++], e[n]); return t },
        Y = function(t) { var e = N.call(this, t = x(t, !0)); return !(this === G && o(I, t) && !o(U, t)) && (!(e || !o(this, t) || !o(I, t) || o(this, R) && this[R][t]) || e) },
        K = function(t, e) { if (t = _(t), e = x(e, !0), t !== G || !o(I, e) || o(U, e)) { var n = A(t, e); return !n || !o(I, e) || o(t, R) && t[R][e] || (n.enumerable = !0), n } },
        Q = function(t) { for (var e, n = P(_(t)), r = [], i = 0; n.length > i;) o(I, e = n[i++]) || e == R || e == c || r.push(e); return r },
        $ = function(t) { for (var e, n = t === G, r = P(n ? U : _(t)), i = [], u = 0; r.length > u;) !o(I, e = r[u++]) || n && !o(G, e) || i.push(I[e]); return i };
    W || (a((M = function() { if (this instanceof M) throw TypeError("Symbol is not a constructor!"); var t = p(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) { this === G && e.call(U, n), o(this, R) && o(this[R], t) && (this[R][t] = !1), q(this, t, w(1, n)) }; return i && B && q(G, t, { configurable: !0, set: e }), z(t) }).prototype, "toString", function() { return this._k }), E.f = K, j.f = H, n(36).f = S.f = Q, n(26).f = Y, n(35).f = $, i && !n(16) && a(G, "propertyIsEnumerable", Y, !0), v.f = function(t) { return z(d(t)) }), u(u.G + u.W + u.F * !W, { Symbol: M }); for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt;) d(Z[tt++]); for (var et = L(d.store), nt = 0; et.length > nt;) y(et[nt++]);
    u(u.S + u.F * !W, "Symbol", { for: function(t) { return o(F, t += "") ? F[t] : F[t] = M(t) }, keyFor: function(t) { if (!V(t)) throw TypeError(t + " is not a symbol!"); for (var e in F)
                if (F[e] === t) return e }, useSetter: function() { B = !0 }, useSimple: function() { B = !1 } }), u(u.S + u.F * !W, "Object", { create: function(t, e) { return void 0 === e ? O(t) : J(O(t), e) }, defineProperty: H, defineProperties: J, getOwnPropertyDescriptor: K, getOwnPropertyNames: Q, getOwnPropertySymbols: $ }), T && u(u.S + u.F * (!W || f(function() { var t = M(); return "[null]" != D([t]) || "{}" != D({ a: t }) || "{}" != D(Object(t)) })), "JSON", { stringify: function(t) { for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]); if (n = e = r[1], (b(e) || void 0 !== t) && !V(t)) return h(e) || (e = function(t, e) { if ("function" == typeof n && (e = n.call(this, t, e)), !V(e)) return e }), r[1] = e, D.apply(T, r) } }), M.prototype[k] || n(2)(M.prototype, k, M.prototype.valueOf), l(M, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0) }, function(t, e, n) { var r = n(12)("meta"),
        o = n(7),
        i = n(1),
        u = n(3).f,
        a = 0,
        c = Object.isExtensible || function() { return !0 },
        f = !n(10)(function() { return c(Object.preventExtensions({})) }),
        s = function(t) { u(t, r, { value: { i: "O" + ++a, w: {} } }) },
        l = t.exports = { KEY: r, NEED: !1, fastKey: function(t, e) { if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t; if (!i(t, r)) { if (!c(t)) return "F"; if (!e) return "E";
                    s(t) } return t[r].i }, getWeak: function(t, e) { if (!i(t, r)) { if (!c(t)) return !0; if (!e) return !1;
                    s(t) } return t[r].w }, onFreeze: function(t) { return f && l.NEED && c(t) && !i(t, r) && s(t), t } } }, function(t, e, n) { var r = n(19),
        o = n(35),
        i = n(26);
    t.exports = function(t) { var e = r(t),
            n = o.f; if (n)
            for (var u, a = n(t), c = i.f, f = 0; a.length > f;) c.call(t, u = a[f++]) && e.push(u); return e } }, function(t, e, n) { var r = n(34);
    t.exports = Array.isArray || function(t) { return "Array" == r(t) } }, function(t, e, n) { var r = n(5),
        o = n(36).f,
        i = {}.toString,
        u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) { return u && "[object Window]" == i.call(t) ? function(t) { try { return o(t) } catch (t) { return u.slice() } }(t) : o(r(t)) } }, function(t, e, n) { var r = n(26),
        o = n(11),
        i = n(5),
        u = n(17),
        a = n(1),
        c = n(29),
        f = Object.getOwnPropertyDescriptor;
    e.f = n(4) ? f : function(t, e) { if (t = i(t), e = u(e, !0), c) try { return f(t, e) } catch (t) {}
        if (a(t, e)) return o(!r.f.call(t, e), t[e]) } }, function(t, e) {}, function(t, e, n) { n(25)("asyncIterator") }, function(t, e, n) { n(25)("observable") }, function(t, e) { t.exports = { render: function() { var t = this,
                e = t.$createElement,
                n = t._self._c || e; return n("div", { staticClass: ["wrapper"] }, [t.showDoodle && t.doodle.src ? n("embed", { staticStyle: { flex: "1" }, attrs: { src: t._f("url")(t.doodle.src) }, on: { click: t.magic } }) : n("div", { staticClass: ["center"], staticStyle: { flex: "1" } }, [n("image", { staticClass: ["logo"], attrs: { src: "https://gw.alicdn.com/tfs/TB1Q9VBkRfH8KJjy1XbXXbLdXXa-3799-1615.png" } }), n("div", { staticClass: ["btn", "center"], on: { click: t.scan } }, [n("image", { staticClass: ["scan-bg"], attrs: { src: "https://gw.alicdn.com/tfs/TB1qnO0kLDH8KJjy1XcXXcpdXXa-900-320.png" } }), n("text", { class: ["btn-text", "btn-text-" + t.language] }, [t._v(t._s(t.i18n(t.SCAN)))])])])]) }, staticRenderFns: [] }, t.exports.render._withStripped = !0 }, function(t, e) { t.exports = { render: function() { var t = this,
                e = t.$createElement,
                n = t._self._c || e; return n("div", { staticClass: ["wrapper"] }, [n("doodle", { staticClass: ["doodle"], attrs: { lang: t.language } }), n("div", { staticClass: ["menu-list"] }, t._l(t.menus, function(e, r) { return n("div", { key: r, class: ["menu-row", "menu-row-" + (r + 1)] }, t._l(e, function(e, r) { return n("a", { key: e.name, class: ["menu-item", "menu-item-" + (r + 1)], attrs: { href: t._f("link")(e.name, { language: t.language }) } }, [n("text", { class: ["menu-text", "menu-text-" + t.language] }, [t._v(t._s(t.i18n(e.title)))])]) })) }))], 1) }, staticRenderFns: [] }, t.exports.render._withStripped = !0 }, function(t, e, n) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }); var r = function(t) { if (t && t.__esModule) return t; var e = {}; if (null != t)
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e.default = t, e }(n(13)); var o = weex.requireModule("storage");
    e.default = { filters: { i18n: r.i18n, url: r.createURL, link: r.createLink }, methods: { createLink: r.createLink, createURL: r.createURL, i18n: r.i18n, getLanguage: r.getLanguage, fetchData: r.fetchData, saveData: r.saveData, readData: r.readData, jumpTo: r.jumpTo }, created: function() { var t = this;
            r.getLanguage(function(e) { t.language = e, r.setTitleBar(t.navigationBarOptions, e) }), new BroadcastChannel("language").onmessage = function(e) { e.data && e.data.language && (t.language = e.data.language) } }, beforeDestroy: function() { o.removeItem("CURRENT_DOCUMENT_URL"), o.removeItem("CURRENT_SOURCE_HASH") } } }]);