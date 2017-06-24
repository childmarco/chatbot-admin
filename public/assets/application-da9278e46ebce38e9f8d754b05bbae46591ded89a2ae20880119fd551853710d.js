!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length, n = fe.type(e);
        return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        if (fe.isFunction(t))return fe.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType)return fe.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Te.test(t))return fe.filter(t, e, n);
            t = fe.filter(t, e)
        }
        return fe.grep(e, function (e) {
            return fe.inArray(e, t) > -1 !== n
        })
    }

    function i(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = {};
        return fe.each(e.match(Ne) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (re.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (a(), fe.ready())
    }

    function u(e, t, n) {
        if (n === undefined && 1 === e.nodeType) {
            var r = "data-" + t.replace(je, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : De.test(n) ? fe.parseJSON(n) : n)
                } catch (e) {
                }
                fe.data(e, t, n)
            } else n = undefined
        }
        return n
    }

    function l(e) {
        var t;
        for (t in e)if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (Re(e)) {
            var i, o, a = fe.expando, s = e.nodeType, u = s ? fe.cache : e, l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || n !== undefined || "string" != typeof t)return l || (l = s ? e[a] = ne.pop() || fe.guid++ : a), u[l] || (u[l] = s ? {} : {toJSON: fe.noop}), "object" != typeof t && "function" != typeof t || (r ? u[l] = fe.extend(u[l], t) : u[l].data = fe.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), n !== undefined && (o[fe.camelCase(t)] = n), "string" == typeof t ? null == (i = o[t]) && (i = o[fe.camelCase(t)]) : i = o, i
        }
    }

    function d(e, t, n) {
        if (Re(e)) {
            var r, i, o = e.nodeType, a = o ? fe.cache : e, s = o ? e[fe.expando] : fe.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    fe.isArray(t) ? t = t.concat(fe.map(t, fe.camelCase)) : t in r ? t = [t] : (t = fe.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;)delete r[t[i]];
                    if (n ? !l(r) : !fe.isEmptyObject(r))return
                }
                (n || (delete a[s].data, l(a[s]))) && (o ? fe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = undefined)
            }
        }
    }

    function p(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function () {
            return r.cur()
        } : function () {
            return fe.css(e, t, "")
        }, u = s(), l = n && n[3] || (fe.cssNumber[t] ? "" : "px"), c = (fe.cssNumber[t] || "px" !== l && +u) && Pe.exec(fe.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                o = o || ".5", c /= o, fe.style(e, t, c + l)
            } while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function f(e) {
        var t = ze.split("|"), n = e.createDocumentFragment();
        if (n.createElement)for (; t.length;)n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        var n, r, i = 0, o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
        if (!o)for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)!t || fe.nodeName(r, t) ? o.push(r) : fe.merge(o, h(r, t));
        return t === undefined || t && fe.nodeName(e, t) ? fe.merge([e], o) : o
    }

    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)fe._data(n, "globalEval", !t || fe._data(t[r], "globalEval"))
    }

    function y(e) {
        Me.test(e.type) && (e.defaultChecked = e.checked)
    }

    function g(e, t, n, r, i) {
        for (var o, a, s, u, l, c, d, p = e.length, g = f(t), v = [], b = 0; b < p; b++)if ((a = e[b]) || 0 === a)if ("object" === fe.type(a))fe.merge(v, a.nodeType ? [a] : a); else if ($e.test(a)) {
            for (u = u || g.appendChild(t.createElement("div")), l = (Oe.exec(a) || ["", ""])[1].toLowerCase(), d = Ve[l] || Ve._default, u.innerHTML = d[1] + fe.htmlPrefilter(a) + d[2], o = d[0]; o--;)u = u.lastChild;
            if (!de.leadingWhitespace && We.test(a) && v.push(t.createTextNode(We.exec(a)[0])), !de.tbody)for (a = "table" !== l || Ue.test(a) ? "<table>" !== d[1] || Ue.test(a) ? 0 : u : u.firstChild, o = a && a.childNodes.length; o--;)fe.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (fe.merge(v, u.childNodes), u.textContent = ""; u.firstChild;)u.removeChild(u.firstChild);
            u = g.lastChild
        } else v.push(t.createTextNode(a));
        for (u && g.removeChild(u), de.appendChecked || fe.grep(h(v, "input"), y), b = 0; a = v[b++];)if (r && fe.inArray(a, r) > -1)i && i.push(a); else if (s = fe.contains(a.ownerDocument, a), u = h(g.appendChild(a), "script"), s && m(u), n)for (o = 0; a = u[o++];)_e.test(a.type || "") && n.push(a);
        return u = null, g
    }

    function v() {
        return !0
    }

    function b() {
        return !1
    }

    function x() {
        try {
            return re.activeElement
        } catch (e) {
        }
    }

    function w(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = undefined);
            for (s in t)w(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = undefined) : null == i && ("string" == typeof n ? (i = r, r = undefined) : (i = r, r = n, n = undefined)), !1 === i)i = b; else if (!i)return e;
        return 1 === o && (a = i, i = function (e) {
            return fe().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = fe.guid++)), e.each(function () {
            fe.event.add(this, t, i, r, n)
        })
    }

    function E(e, t) {
        return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function T(e) {
        return e.type = (null !== fe.find.attr(e, "type")) + "/" + e.type, e
    }

    function S(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function C(e, t) {
        if (1 === t.nodeType && fe.hasData(e)) {
            var n, r, i, o = fe._data(e), a = fe._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)for (r = 0, i = s[n].length; r < i; r++)fe.event.add(t, n, s[n][r])
            }
            a.data && (a.data = fe.extend({}, a.data))
        }
    }

    function k(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[fe.expando]) {
                i = fe._data(t);
                for (r in i.events)fe.removeEvent(t, r, i.handle);
                t.removeAttribute(fe.expando)
            }
            "script" === n && t.text !== e.text ? (T(t).text = e.text, S(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Me.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function L(e, t, n, r) {
        t = oe.apply([], t);
        var i, o, a, s, u, l, c = 0, d = e.length, p = d - 1, f = t[0], m = fe.isFunction(f);
        if (m || d > 1 && "string" == typeof f && !de.checkClone && nt.test(f))return e.each(function (i) {
            var o = e.eq(i);
            m && (t[0] = f.call(this, i, o.html())), L(o, t, n, r)
        });
        if (d && (l = g(t, e[0].ownerDocument, !1, e, r), i = l.firstChild, 1 === l.childNodes.length && (l = i), i || r)) {
            for (s = fe.map(h(l, "script"), T), a = s.length; c < d; c++)o = l, c !== p && (o = fe.clone(o, !0, !0), a && fe.merge(s, h(o, "script"))), n.call(e[c], o, c);
            if (a)for (u = s[s.length - 1].ownerDocument, fe.map(s, S), c = 0; c < a; c++)o = s[c], _e.test(o.type || "") && !fe._data(o, "globalEval") && fe.contains(u, o) && (o.src ? fe._evalUrl && fe._evalUrl(o.src) : fe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(it, "")));
            l = i = null
        }
        return e
    }

    function N(e, t, n) {
        for (var r, i = t ? fe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || fe.cleanData(h(r)), r.parentNode && (n && fe.contains(r.ownerDocument, r) && m(h(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function A(e, t) {
        var n = fe(t.createElement(e)).appendTo(t.body), r = fe.css(n[0], "display");
        return n.detach(), r
    }

    function q(e) {
        var t = re, n = ut[e];
        return n || (n = A(e, t), "none" !== n && n || (st = (st || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (st[0].contentWindow || st[0].contentDocument).document, t.write(), t.close(), n = A(e, t), st.detach()), ut[e] = n), n
    }

    function R(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function D(e) {
        if (e in Tt)return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Et.length; n--;)if ((e = Et[n] + t)in Tt)return e
    }

    function j(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)r = e[a], r.style && (o[a] = fe._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ie(r) && (o[a] = fe._data(r, "olddisplay", q(r.nodeName)))) : (i = Ie(r), (n && "none" !== n || !i) && fe._data(r, "olddisplay", i ? n : fe.css(r, "display"))));
        for (a = 0; a < s; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function H(e, t, n) {
        var r = bt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function P(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)"margin" === n && (a += fe.css(e, n + Fe[o], !0, i)), r ? ("content" === n && (a -= fe.css(e, "padding" + Fe[o], !0, i)), "margin" !== n && (a -= fe.css(e, "border" + Fe[o] + "Width", !0, i))) : (a += fe.css(e, "padding" + Fe[o], !0, i), "padding" !== n && (a += fe.css(e, "border" + Fe[o] + "Width", !0, i)));
        return a
    }

    function F(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = ft(e), a = de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = ht(e, t, o), (i < 0 || null == i) && (i = e.style[t]), ct.test(i))return i;
            r = a && (de.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + P(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function I(e, t, n, r, i) {
        return new I.prototype.init(e, t, n, r, i)
    }

    function B() {
        return e.setTimeout(function () {
            St = undefined
        }), St = fe.now()
    }

    function M(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t)n = Fe[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function O(e, t, n) {
        for (var r, i = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e))return r
    }

    function _(e, t, n) {
        var r, i, o, a, s, u, l, c = this, d = {}, p = e.style, f = e.nodeType && Ie(e), h = fe._data(e, "fxshow");
        n.queue || (s = fe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
            s.unqueued || u()
        }), s.unqueued++, c.always(function () {
            c.always(function () {
                s.unqueued--, fe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = fe.css(e, "display"), "inline" === ("none" === l ? fe._data(e, "olddisplay") || q(e.nodeName) : l) && "none" === fe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== q(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", de.shrinkWrapBlocks() || c.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)if (i = t[r], kt.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
                if ("show" !== i || !h || h[r] === undefined)continue;
                f = !0
            }
            d[r] = h && h[r] || fe.style(e, r)
        } else l = undefined;
        if (fe.isEmptyObject(d))"inline" === ("none" === l ? q(e.nodeName) : l) && (p.display = l); else {
            h ? "hidden"in h && (f = h.hidden) : h = fe._data(e, "fxshow", {}), o && (h.hidden = !f), f ? fe(e).show() : c.done(function () {
                fe(e).hide()
            }), c.done(function () {
                var t;
                fe._removeData(e, "fxshow");
                for (t in d)fe.style(e, t, d[t])
            });
            for (r in d)a = O(f ? h[r] : 0, r, c), r in h || (h[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function W(e, t) {
        var n, r, i, o, a;
        for (n in e)if (r = fe.camelCase(n), i = t[r], o = e[n], fe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = fe.cssHooks[r]) && "expand"in a) {
            o = a.expand(o), delete e[r];
            for (n in o)n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function z(e, t, n) {
        var r, i, o = 0, a = z.prefilters.length, s = fe.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i)return !1;
            for (var t = St || B(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++)l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: fe.extend({}, t),
            opts: fe.extend(!0, {specialEasing: {}, easing: fe.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: St || B(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = fe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i)return this;
                for (i = !0; n < r; n++)l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (W(c, l.opts.specialEasing); o < a; o++)if (r = z.prefilters[o].call(l, e, c, l.opts))return fe.isFunction(r.stop) && (fe._queueHooks(l.elem, l.opts.queue).stop = fe.proxy(r.stop, r)), r;
        return fe.map(c, O, l), fe.isFunction(l.opts.start) && l.opts.start.call(e, l), fe.fx.timer(fe.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function V(e) {
        return fe.attr(e, "class") || ""
    }

    function $(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(Ne) || [];
            if (fe.isFunction(n))for (; r = o[i++];)"+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function U(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, fe.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }

        var o = {}, a = e === Jt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function X(e, t) {
        var n, r, i = fe.ajaxSettings.flatOptions || {};
        for (r in t)t[r] !== undefined && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && fe.extend(!0, e, n), e
    }

    function K(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];)u.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)for (a in s)if (s[a] && s[a].test(i)) {
            u.unshift(a);
            break
        }
        if (u[0]in n)o = u[0]; else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        if (o)return o !== u[0] && u.unshift(o), n[o]
    }

    function G(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])for (a in e.converters)l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())if ("*" === o)o = u; else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))for (i in l)if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                break
            }
            if (!0 !== a)if (a && e["throws"])t = a(t); else try {
                t = a(t)
            } catch (e) {
                return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function Y(e) {
        return e.style && e.style.display || fe.css(e, "display")
    }

    function J(e) {
        if (!fe.contains(e.ownerDocument || re, e))return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === Y(e) || "hidden" === e.type)return !0;
            e = e.parentNode
        }
        return !1
    }

    function Q(e, t, n, r) {
        var i;
        if (fe.isArray(t))fe.each(t, function (t, i) {
            n || nn.test(e) ? r(e, i) : Q(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== fe.type(t))r(e, t); else for (i in t)Q(e + "[" + i + "]", t[i], n, r)
    }

    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    function te(e) {
        return fe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    var ne = [], re = e.document, ie = ne.slice, oe = ne.concat, ae = ne.push, se = ne.indexOf, ue = {}, le = ue.toString, ce = ue.hasOwnProperty, de = {}, pe = "1.12.4", fe = function (e, t) {
        return new fe.fn.init(e, t)
    }, he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, me = /^-ms-/, ye = /-([\da-z])/gi, ge = function (e, t) {
        return t.toUpperCase()
    };
    fe.fn = fe.prototype = {
        jquery: pe, constructor: fe, selector: "", length: 0, toArray: function () {
            return ie.call(this)
        }, get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : ie.call(this)
        }, pushStack: function (e) {
            var t = fe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e) {
            return fe.each(this, e)
        }, map: function (e) {
            return this.pushStack(fe.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(ie.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: ae, sort: ne.sort, splice: ne.splice
    }, fe.extend = fe.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || fe.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (i = arguments[s]))for (r in i)e = a[r], n = i[r], a !== n && (l && n && (fe.isPlainObject(n) || (t = fe.isArray(n))) ? (t ? (t = !1, o = e && fe.isArray(e) ? e : []) : o = e && fe.isPlainObject(e) ? e : {}, a[r] = fe.extend(l, o, n)) : n !== undefined && (a[r] = n));
        return a
    }, fe.extend({
        expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === fe.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === fe.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !fe.isArray(e) && t - parseFloat(t) + 1 >= 0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, isPlainObject: function (e) {
            var t;
            if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e))return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (e) {
                return !1
            }
            if (!de.ownFirst)for (t in e)return ce.call(e, t);
            for (t in e);
            return t === undefined || ce.call(e, t)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[le.call(e)] || "object" : typeof e
        }, globalEval: function (t) {
            t && fe.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(me, "ms-").replace(ye, ge)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var r, i = 0;
            if (n(e))for (r = e.length; i < r && !1 !== t.call(e[i], i, e[i]); i++); else for (i in e)if (!1 === t.call(e[i], i, e[i]))break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(he, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? fe.merge(r, "string" == typeof e ? [e] : e) : ae.call(r, e)), r
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (se)return se.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)if (n in t && t[n] === e)return n
            }
            return -1
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n;)e[i++] = t[r++];
            if (n !== n)for (; t[r] !== undefined;)e[i++] = t[r++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)!t(e[i], i) !== a && r.push(e[i]);
            return r
        }, map: function (e, t, r) {
            var i, o, a = 0, s = [];
            if (n(e))for (i = e.length; a < i; a++)null != (o = t(e[a], a, r)) && s.push(o); else for (a in e)null != (o = t(e[a], a, r)) && s.push(o);
            return oe.apply([], s)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), fe.isFunction(e) ? (n = ie.call(arguments, 2), r = function () {
                return e.apply(t || this, n.concat(ie.call(arguments)))
            }, r.guid = e.guid = e.guid || fe.guid++, r) : undefined
        }, now: function () {
            return +new Date
        }, support: de
    }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ue["[object " + t + "]"] = t.toLowerCase()
    });
    var ve = function (e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, d, f, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)return n;
            if (!r && ((t ? t.ownerDocument || t : O) !== D && R(t), t = t || D, H)) {
                if (11 !== m && (l = ge.exec(e)))if (i = l[1]) {
                    if (9 === m) {
                        if (!(a = t.getElementById(i)))return n;
                        if (a.id === i)return n.push(a), n
                    } else if (h && (a = h.getElementById(i)) && B(t, a) && a.id === i)return n.push(a), n
                } else {
                    if (l[2])return Q.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName)return Q.apply(n, t.getElementsByClassName(i)), n
                }
                if (w.qsa && !$[e + " "] && (!P || !P.test(e))) {
                    if (1 !== m)h = t, f = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = M), d = C(e), o = d.length, u = pe.test(s) ? "#" + s : "[id='" + s + "']"; o--;)d[o] = u + " " + p(d[o]);
                        f = d.join(","), h = ve.test(e) && c(t.parentNode) || t
                    }
                    if (f)try {
                        return Q.apply(n, h.querySelectorAll(f)), n
                    } catch (e) {
                    } finally {
                        s === M && t.removeAttribute("id")
                    }
                }
            }
            return L(e.replace(se, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > E.cacheLength && delete e[t.shift()], e[n + " "] = r
            }

            var t = [];
            return e
        }

        function r(e) {
            return e[M] = !0, e
        }

        function i(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;)E.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r)return r;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {
        }

        function p(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value;
            return r
        }

        function f(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = W++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
            } : function (t, n, a) {
                var s, u, l, c = [_, o];
                if (a) {
                    for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, a))return !0
                } else for (; t = t[r];)if (1 === t.nodeType || i) {
                    if (l = t[M] || (t[M] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === _ && s[1] === o)return c[2] = s[2];
                    if (u[r] = c, c[2] = e(t, n, a))return !0
                }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function m(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++)t(e, n[i], r);
            return r
        }

        function y(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function g(e, t, n, i, o, a) {
            return i && !i[M] && (i = g(i)), o && !o[M] && (o = g(o, a)), r(function (r, a, s, u) {
                var l, c, d, p = [], f = [], h = a.length, g = r || m(t || "*", s.nodeType ? [s] : s, []), v = !e || !r && t ? g : y(g, p, e, s, u), b = n ? o || (r ? e : h || i) ? [] : a : v;
                if (n && n(v, b, s, u), i)for (l = y(b, f), i(l, [], s, u), c = l.length; c--;)(d = l[c]) && (b[f[c]] = !(v[f[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = b.length; c--;)(d = b[c]) && l.push(v[c] = d);
                            o(null, b = [], l, u)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (l = o ? ee(r, d) : p[c]) > -1 && (r[l] = !(a[l] = d))
                    }
                } else b = y(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, u) : Q.apply(a, b)
            })
        }

        function v(e) {
            for (var t, n, r, i = e.length, o = E.relative[e[0].type], a = o || E.relative[" "], s = o ? 1 : 0, u = f(function (e) {
                return e === t
            }, a, !0), l = f(function (e) {
                return ee(t, e) > -1
            }, a, !0), c = [function (e, n, r) {
                var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null, i
            }]; s < i; s++)if (n = E.relative[e[s].type])c = [f(h(c), n)]; else {
                if (n = E.filter[e[s].type].apply(null, e[s].matches), n[M]) {
                    for (r = ++s; r < i && !E.relative[e[r].type]; r++);
                    return g(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(se, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && p(e))
                }
                c.push(n)
            }
            return h(c)
        }

        function b(e, n) {
            var i = n.length > 0, o = e.length > 0, a = function (r, a, s, u, l) {
                var c, d, p, f = 0, h = "0", m = r && [], g = [], v = N, b = r || o && E.find.TAG("*", l), x = _ += null == v ? 1 : Math.random() || .1, w = b.length;
                for (l && (N = a === D || a || l); h !== w && null != (c = b[h]); h++) {
                    if (o && c) {
                        for (d = 0, a || c.ownerDocument === D || (R(c), s = !H); p = e[d++];)if (p(c, a || D, s)) {
                            u.push(c);
                            break
                        }
                        l && (_ = x)
                    }
                    i && ((c = !p && c) && f--, r && m.push(c))
                }
                if (f += h, i && h !== f) {
                    for (d = 0; p = n[d++];)p(m, g, a, s);
                    if (r) {
                        if (f > 0)for (; h--;)m[h] || g[h] || (g[h] = Y.call(u));
                        g = y(g)
                    }
                    Q.apply(u, g), l && !r && g.length > 0 && f + n.length > 1 && t.uniqueSort(u)
                }
                return l && (_ = x, N = v), m
            };
            return i ? r(a) : a
        }

        var x, w, E, T, S, C, k, L, N, A, q, R, D, j, H, P, F, I, B, M = "sizzle" + 1 * new Date, O = e.document, _ = 0, W = 0, z = n(), V = n(), $ = n(), U = function (e, t) {
            return e === t && (q = !0), 0
        }, X = 1 << 31, K = {}.hasOwnProperty, G = [], Y = G.pop, J = G.push, Q = G.push, Z = G.slice, ee = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++)if (e[n] === t)return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(oe), pe = new RegExp("^" + re + "$"), fe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        }, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ye = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, Ee = function () {
            R()
        };
        try {
            Q.apply(G = Z.call(O.childNodes), O.childNodes), G[O.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: G.length ? function (e, t) {
                    J.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, S = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, R = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : O;
            return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, j = D.documentElement, H = !S(D), (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ee, !1) : n.attachEvent && n.attachEvent("onunload", Ee)), w.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function (e) {
                return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ye.test(D.getElementsByClassName), w.getById = i(function (e) {
                return j.appendChild(e).id = M, !D.getElementsByName || !D.getElementsByName(M).length
            }), w.getById ? (E.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, E.filter.ID = function (e) {
                var t = e.replace(xe, we);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete E.find.ID, E.filter.ID = function (e) {
                var t = e.replace(xe, we);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), E.find.TAG = w.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];)1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, E.find.CLASS = w.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && H)return t.getElementsByClassName(e)
            }, F = [], P = [], (w.qsa = ye.test(D.querySelectorAll)) && (i(function (e) {
                j.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + M + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || P.push(".#.+[+~]")
            }), i(function (e) {
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
            })), (w.matchesSelector = ye.test(I = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i(function (e) {
                w.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), F.push("!=", oe)
            }), P = P.length && new RegExp(P.join("|")), F = F.length && new RegExp(F.join("|")), t = ye.test(j.compareDocumentPosition), B = t || ye.test(j.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, U = t ? function (e, t) {
                if (e === t)return q = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === O && B(O, e) ? -1 : t === D || t.ownerDocument === O && B(O, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t)return q = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], u = [t];
                if (!i || !o)return e === D ? -1 : t === D ? 1 : i ? -1 : o ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                if (i === o)return a(e, t);
                for (n = e; n = n.parentNode;)s.unshift(n);
                for (n = t; n = n.parentNode;)u.unshift(n);
                for (; s[r] === u[r];)r++;
                return r ? a(s[r], u[r]) : s[r] === O ? -1 : u[r] === O ? 1 : 0
            }, D) : D
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== D && R(e), n = n.replace(ce, "='$1']"), w.matchesSelector && H && !$[n + " "] && (!F || !F.test(n)) && (!P || !P.test(n)))try {
                var r = I.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
            } catch (e) {
            }
            return t(n, D, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== D && R(e), B(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== D && R(e);
            var n = E.attrHandle[t.toLowerCase()], r = n && K.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !H) : undefined;
            return r !== undefined ? r : w.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (q = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(U), q) {
                for (; t = e[i++];)t === e[i] && (r = n.push(i));
                for (; r--;)e.splice(n[r], 1)
            }
            return A = null, e
        }, T = t.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += T(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r++];)n += T(t);
            return n
        }, E = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(xe, we).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, d, p, f, h, m = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode, g = s && t.nodeName.toLowerCase(), v = !u && !s, b = !1;
                        if (y) {
                            if (o) {
                                for (; m;) {
                                    for (p = t; p = p[m];)if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType)return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && v) {
                                for (p = y, d = p[M] || (p[M] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), l = c[e] || [], f = l[0] === _ && l[1], b = f && l[2], p = f && y.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();)if (1 === p.nodeType && ++b && p === t) {
                                    c[e] = [_, f, b];
                                    break
                                }
                            } else if (v && (p = t, d = p[M] || (p[M] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), l = c[e] || [], f = l[0] === _ && l[1], b = f), !1 === b)for (; (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (v && (d = p[M] || (p[M] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), c[e] = [_, b]), p !== t)););
                            return (b -= i) === r || b % r == 0 && b / r >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var i, o = E.pseudos[e] || E.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n], E.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;)r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = k(e.replace(se, "$1"));
                    return i[M] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: r(function (e) {
                    return e = e.replace(xe, we), function (t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === j
                }, focus: function (e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return !1 === e.disabled
                }, disabled: function (e) {
                    return !0 === e.disabled
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !E.pseudos.empty(e)
                }, header: function (e) {
                    return me.test(e.nodeName)
                }, input: function (e) {
                    return he.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: l(function () {
                    return [0]
                }), last: l(function (e, t) {
                    return [t - 1]
                }), eq: l(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: l(function (e, t) {
                    for (var n = 0; n < t; n += 2)e.push(n);
                    return e
                }), odd: l(function (e, t) {
                    for (var n = 1; n < t; n += 2)e.push(n);
                    return e
                }), lt: l(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;)e.push(r);
                    return e
                }), gt: l(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r);
                    return e
                })
            }
        }, E.pseudos.nth = E.pseudos.eq;
        for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})E.pseudos[x] = s(x);
        for (x in{submit: !0, reset: !0})E.pseudos[x] = u(x);
        return d.prototype = E.filters = E.pseudos, E.setFilters = new d, C = t.tokenize = function (e, n) {
            var r, i, o, a, s, u, l, c = V[e + " "];
            if (c)return n ? 0 : c.slice(0);
            for (s = e, u = [], l = E.preFilter; s;) {
                r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(se, " ")
                }), s = s.slice(r.length));
                for (a in E.filter)!(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r)break
            }
            return n ? s.length : s ? t.error(e) : V(e, u).slice(0)
        }, k = t.compile = function (e, t) {
            var n, r = [], i = [], o = $[e + " "];
            if (!o) {
                for (t || (t = C(e)), n = t.length; n--;)o = v(t[n]), o[M] ? r.push(o) : i.push(o);
                o = $(e, b(i, r)), o.selector = e
            }
            return o
        }, L = t.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, d = !r && C(e = l.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && H && E.relative[o[1].type]) {
                    if (!(t = (E.find.ID(a.matches[0].replace(xe, we), t) || [])[0]))return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !E.relative[s = a.type]);)if ((u = E.find[s]) && (r = u(a.matches[0].replace(xe, we), ve.test(o[0].type) && c(t.parentNode) || t))) {
                    if (o.splice(i, 1), !(e = r.length && p(o)))return Q.apply(n, r), n;
                    break
                }
            }
            return (l || k(e, d))(r, t, !H, n, !t || ve.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = M.split("").sort(U).join("") === M, w.detectDuplicates = !!q, R(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n)return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())return e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function (e, t, n) {
            var r;
            if (!n)return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    fe.find = ve, fe.expr = ve.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ve.uniqueSort, fe.text = ve.getText, fe.isXMLDoc = ve.isXML, fe.contains = ve.contains;
    var be = function (e, t, n) {
        for (var r = [], i = n !== undefined; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
            if (i && fe(e).is(n))break;
            r.push(e)
        }
        return r
    }, xe = function (e, t) {
        for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
    }, we = fe.expr.match.needsContext, Ee = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Te = /^.[^:#\[\.,]*$/;
    fe.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? fe.find.matchesSelector(r, e) ? [r] : [] : fe.find.matches(e, fe.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, fe.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)return this.pushStack(fe(e).filter(function () {
                for (t = 0; t < i; t++)if (fe.contains(r[t], this))return !0
            }));
            for (t = 0; t < i; t++)fe.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? fe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        }, is: function (e) {
            return !!r(this, "string" == typeof e && we.test(e) ? fe(e) : e || [], !1).length
        }
    });
    var Se, Ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (fe.fn.init = function (e, t, n) {
        var r, i;
        if (!e)return this;
        if (n = n || Se, "string" == typeof e) {
            if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ce.exec(e)) || !r[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), Ee.test(r[1]) && fe.isPlainObject(t))for (r in t)fe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            if ((i = re.getElementById(r[2])) && i.parentNode) {
                if (i.id !== r[2])return Se.find(e);
                this.length = 1, this[0] = i
            }
            return this.context = re, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : fe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(fe) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), fe.makeArray(e, this))
    }).prototype = fe.fn, Se = fe(re);
    var ke = /^(?:parents|prev(?:Until|All))/, Le = {children: !0, contents: !0, next: !0, prev: !0};
    fe.fn.extend({
        has: function (e) {
            var t, n = fe(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++)if (fe.contains(this, n[t]))return !0
            })
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = we.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? fe.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), fe.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return be(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return be(e, "parentNode", n)
        }, next: function (e) {
            return i(e, "nextSibling")
        }, prev: function (e) {
            return i(e, "previousSibling")
        }, nextAll: function (e) {
            return be(e, "nextSibling")
        }, prevAll: function (e) {
            return be(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return be(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return be(e, "previousSibling", n)
        }, siblings: function (e) {
            return xe((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return xe(e.firstChild)
        }, contents: function (e) {
            return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
        }
    }, function (e, t) {
        fe.fn[e] = function (n, r) {
            var i = fe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = fe.filter(r, i)), this.length > 1 && (Le[e] || (i = fe.uniqueSort(i)), ke.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var Ne = /\S+/g;
    fe.Callbacks = function (e) {
        e = "string" == typeof e ? o(e) : fe.extend({}, e);
        var t, n, r, i, a = [], s = [], u = -1, l = function () {
            for (i = e.once, r = t = !0; s.length; u = -1)for (n = s.shift(); ++u < a.length;)!1 === a[u].apply(n[0], n[1]) && e.stopOnFalse && (u = a.length, n = !1);
            e.memory || (n = !1), t = !1, i && (a = n ? [] : "")
        }, c = {
            add: function () {
                return a && (n && !t && (u = a.length - 1, s.push(n)), function t(n) {
                    fe.each(n, function (n, r) {
                        fe.isFunction(r) ? e.unique && c.has(r) || a.push(r) : r && r.length && "string" !== fe.type(r) && t(r)
                    })
                }(arguments), n && !t && l()), this
            }, remove: function () {
                return fe.each(arguments, function (e, t) {
                    for (var n; (n = fe.inArray(t, a, n)) > -1;)a.splice(n, 1), n <= u && u--
                }), this
            }, has: function (e) {
                return e ? fe.inArray(e, a) > -1 : a.length > 0
            }, empty: function () {
                return a && (a = []), this
            }, disable: function () {
                return i = s = [], a = n = "", this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return i = !0, n || c.disable(), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, n) {
                return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return c
    }, fe.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", fe.Callbacks("once memory"), "resolved"], ["reject", "fail", fe.Callbacks("once memory"), "rejected"], ["notify", "progress", fe.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return fe.Deferred(function (n) {
                        fe.each(t, function (t, o) {
                            var a = fe.isFunction(e[t]) && e[t];
                            i[o[1]](function () {
                                var e = a && a.apply(this, arguments);
                                e && fe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? fe.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, fe.each(t, function (e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, o = ie.call(arguments), a = o.length, s = 1 !== a || e && fe.isFunction(e.promise) ? a : 0, u = 1 === s ? e : fe.Deferred(), l = function (e, n, r) {
                return function (i) {
                    n[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1)for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++)o[i] && fe.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var Ae;
    fe.fn.ready = function (e) {
        return fe.ready.promise().done(e), this
    }, fe.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? fe.readyWait++ : fe.ready(!0)
        }, ready: function (e) {
            (!0 === e ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, !0 !== e && --fe.readyWait > 0 || (Ae.resolveWith(re, [fe]), fe.fn.triggerHandler && (fe(re).triggerHandler("ready"), fe(re).off("ready"))))
        }
    }), fe.ready.promise = function (t) {
        if (!Ae)if (Ae = fe.Deferred(), "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll)e.setTimeout(fe.ready); else if (re.addEventListener)re.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s); else {
            re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && re.documentElement
            } catch (e) {
            }
            n && n.doScroll && function t() {
                if (!fe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (n) {
                        return e.setTimeout(t, 50)
                    }
                    a(), fe.ready()
                }
            }()
        }
        return Ae.promise(t)
    }, fe.ready.promise();
    var qe;
    for (qe in fe(de))break;
    de.ownFirst = "0" === qe, de.inlineBlockNeedsLayout = !1, fe(function () {
        var e, t, n, r;
        (n = re.getElementsByTagName("body")[0]) && n.style && (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
    }), function () {
        var e = re.createElement("div");
        de.deleteExpando = !0;
        try {
            delete e.test
        } catch (e) {
            de.deleteExpando = !1
        }
        e = null
    }();
    var Re = function (e) {
        var t = fe.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }, De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, je = /([A-Z])/g;
    fe.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return !!(e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando]) && !l(e)
        },
        data: function (e, t, n) {
            return c(e, t, n)
        },
        removeData: function (e, t) {
            return d(e, t)
        },
        _data: function (e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return d(e, t, !0)
        }
    }), fe.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (e === undefined) {
                if (this.length && (i = fe.data(o), 1 === o.nodeType && !fe._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;)a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = fe.camelCase(r.slice(5)), u(o, r, i[r])));
                    fe._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                fe.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                fe.data(this, e, t)
            }) : o ? u(o, e, fe.data(o, e)) : undefined
        }, removeData: function (e) {
            return this.each(function () {
                fe.removeData(this, e)
            })
        }
    }), fe.extend({
        queue: function (e, t, n) {
            var r;
            if (e)return t = (t || "fx") + "queue", r = fe._data(e, t), n && (!r || fe.isArray(n) ? r = fe._data(e, t, fe.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = fe.queue(e, t), r = n.length, i = n.shift(), o = fe._queueHooks(e, t), a = function () {
                fe.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return fe._data(e, n) || fe._data(e, n, {
                    empty: fe.Callbacks("once memory").add(function () {
                        fe._removeData(e, t + "queue"), fe._removeData(e, n)
                    })
                })
        }
    }), fe.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : t === undefined ? this : this.each(function () {
                var n = fe.queue(this, e, t);
                fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                fe.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = fe.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;)(n = fe._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    }), function () {
        var e;
        de.shrinkWrapBlocks = function () {
            if (null != e)return e;
            e = !1;
            var t, n, r;
            return (n = re.getElementsByTagName("body")[0]) && n.style ? (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(re.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Pe = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i"), Fe = ["Top", "Right", "Bottom", "Left"], Ie = function (e, t) {
        return e = t || e, "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e)
    }, Be = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === fe.type(n)) {
            i = !0;
            for (s in n)Be(e, t, s, n[s], !0, o, a)
        } else if (r !== undefined && (i = !0, fe.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                return l.call(fe(e), n)
            })), t))for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, Me = /^(?:checkbox|radio)$/i, Oe = /<([\w:-]+)/, _e = /^$|\/(?:java|ecma)script/i, We = /^\s+/, ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function () {
        var e = re.createElement("div"), t = re.createDocumentFragment(), n = re.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = re.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[fe.expando] = 1, de.attributes = !e.getAttribute(fe.expando)
    }();
    var Ve = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
    var $e = /<|&#?\w+;/, Ue = /<tbody/i;
    !function () {
        var t, n, r = re.createElement("div");
        for (t in{
            submit: !0,
            change: !0,
            focusin: !0
        })n = "on" + t, (de[t] = n in e) || (r.setAttribute(n, "t"), de[t] = !1 === r.attributes[n].expando);
        r = null
    }();
    var Xe = /^(?:input|select|textarea)$/i, Ke = /^key/, Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ye = /^(?:focusinfocus|focusoutblur)$/, Je = /^([^.]*)(?:\.(.+)|)/;
    fe.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, d, p, f, h, m, y = fe._data(e);
            if (y) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = fe.guid++), (a = y.events) || (a = y.events = {}), (c = y.handle) || (c = y.handle = function (e) {
                    return void 0 === fe || e && fe.event.triggered === e.type ? undefined : fe.event.dispatch.apply(c.elem, arguments)
                }, c.elem = e), t = (t || "").match(Ne) || [""], s = t.length; s--;)o = Je.exec(t[s]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f && (l = fe.event.special[f] || {}, f = (i ? l.delegateType : l.bindType) || f, l = fe.event.special[f] || {}, d = fe.extend({
                    type: f,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && fe.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, u), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, h, c) || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, d) : p.push(d), fe.event.global[f] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, d, p, f, h, m, y = fe.hasData(e) && fe._data(e);
            if (y && (c = y.events)) {
                for (t = (t || "").match(Ne) || [""], l = t.length; l--;)if (s = Je.exec(t[l]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                    for (d = fe.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, p = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;)a = p[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                    u && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, y.handle) || fe.removeEvent(e, f, y.handle), delete c[f])
                } else for (f in c)fe.event.remove(e, f + t[l], n, r, !0);
                fe.isEmptyObject(c) && (delete y.handle, fe._removeData(e, "events"))
            }
        },
        trigger: function (t, n, r, i) {
            var o, a, s, u, l, c, d, p = [r || re], f = ce.call(t, "type") ? t.type : t, h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !Ye.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[fe.expando] ? t : new fe.Event(f, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : fe.makeArray(n, [t]), l = fe.event.special[f] || {}, i || !l.trigger || !1 !== l.trigger.apply(r, n))) {
                if (!i && !l.noBubble && !fe.isWindow(r)) {
                    for (u = l.delegateType || f, Ye.test(u + f) || (s = s.parentNode); s; s = s.parentNode)p.push(s), c = s;
                    c === (r.ownerDocument || re) && p.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0; (s = p[d++]) && !t.isPropagationStopped();)t.type = d > 1 ? u : l.bindType || f, o = (fe._data(s, "events") || {})[t.type] && fe._data(s, "handle"), o && o.apply(s, n), (o = a && s[a]) && o.apply && Re(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault());
                if (t.type = f, !i && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), n)) && Re(r) && a && r[f] && !fe.isWindow(r)) {
                    c = r[a], c && (r[a] = null), fe.event.triggered = f;
                    try {
                        r[f]()
                    } catch (e) {
                    }
                    fe.event.triggered = undefined, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = fe.event.fix(e);
            var t, n, r, i, o, a = [], s = ie.call(arguments), u = (fe._data(this, "events") || {})[e.type] || [], l = fe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (a = fe.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, (r = ((fe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) !== undefined && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                for (r = [], n = 0; n < s; n++)o = t[n], i = o.selector + " ", r[i] === undefined && (r[i] = o.needsContext ? fe(i, this).index(u) > -1 : fe.find(i, this, null, [u]).length), r[i] && r.push(o);
                r.length && a.push({elem: u, handlers: r})
            }
            return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
        },
        fix: function (e) {
            if (e[fe.expando])return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ge.test(i) ? this.mouseHooks : Ke.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new fe.Event(o), t = r.length; t--;)n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || o === undefined || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== x() && this.focus)try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === x() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (fe.nodeName(this, "input") && "checkbox" === this.type && this.click)return this.click(), !1
                }, _default: function (e) {
                    return fe.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n) {
            var r = fe.extend(new fe.Event, n, {type: e, isSimulated: !0});
            fe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }, fe.removeEvent = re.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
    }, fe.Event = function (e, t) {
        if (!(this instanceof fe.Event))return new fe.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? v : b) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), this[fe.expando] = !0
    }, fe.Event.prototype = {
        constructor: fe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = v, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = v, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = v, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, fe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        fe.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || fe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), de.submit || (fe.event.special.submit = {
        setup: function () {
            if (fe.nodeName(this, "form"))return !1;
            fe.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target, n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? fe.prop(t, "form") : undefined;
                n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function (e) {
                    e._submitBubble = !0
                }), fe._data(n, "submit", !0))
            })
        }, postDispatch: function (e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e))
        }, teardown: function () {
            if (fe.nodeName(this, "form"))return !1;
            fe.event.remove(this, "._submit")
        }
    }), de.change || (fe.event.special.change = {
        setup: function () {
            if (Xe.test(this.nodeName))return "checkbox" !== this.type && "radio" !== this.type || (fe.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), fe.event.add(this, "click._change", function (e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), fe.event.simulate("change", this, e)
            })), !1;
            fe.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Xe.test(t.nodeName) && !fe._data(t, "change") && (fe.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e)
                }), fe._data(t, "change", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)return e.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return fe.event.remove(this, "._change"), !Xe.test(this.nodeName)
        }
    }), de.focusin || fe.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            fe.event.simulate(t, e.target, fe.event.fix(e))
        };
        fe.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = fe._data(r, t);
                i || r.addEventListener(e, n, !0), fe._data(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = fe._data(r, t) - 1;
                i ? fe._data(r, t, i) : (r.removeEventListener(e, n, !0), fe._removeData(r, t))
            }
        }
    }), fe.fn.extend({
        on: function (e, t, n, r) {
            return w(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return w(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)return r = e.handleObj, fe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = b), this.each(function () {
                fe.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                fe.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n)return fe.event.trigger(e, t, n, !0)
        }
    });
    var Qe = / jQuery\d+="(?:null|\d+)"/g, Ze = new RegExp("<(?:" + ze + ")[\\s/>]", "i"), et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, tt = /<script|<style|<link/i, nt = /checked\s*(?:[^=]|=\s*.checked.)/i, rt = /^true\/(.*)/, it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ot = f(re), at = ot.appendChild(re.createElement("div"));
    fe.extend({
        htmlPrefilter: function (e) {
            return e.replace(et, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, s, u = fe.contains(e.ownerDocument, e);
            if (de.html5Clone || fe.isXMLDoc(e) || !Ze.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(o = at.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))for (r = h(o), s = h(e), a = 0; null != (i = s[a]); ++a)r[a] && k(i, r[a]);
            if (t)if (n)for (s = s || h(e), r = r || h(o), a = 0; null != (i = s[a]); a++)C(i, r[a]); else C(e, o);
            return r = h(o, "script"), r.length > 0 && m(r, !u && h(e, "script")), r = s = i = null, o
        }, cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = fe.expando, u = fe.cache, l = de.attributes, c = fe.event.special; null != (n = e[a]); a++)if ((t || Re(n)) && (i = n[s], o = i && u[i])) {
                if (o.events)for (r in o.events)c[r] ? fe.event.remove(n, r) : fe.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], l || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), ne.push(i))
            }
        }
    }), fe.fn.extend({
        domManip: L, detach: function (e) {
            return N(this, e, !0)
        }, remove: function (e) {
            return N(this, e)
        }, text: function (e) {
            return Be(this, function (e) {
                return e === undefined ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return L(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    E(this, e).appendChild(e)
                }
            })
        }, prepend: function () {
            return L(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return L(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return L(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && fe.cleanData(h(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                e.options && fe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return fe.clone(this, e, t)
            })
        }, html: function (e) {
            return Be(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (e === undefined)return 1 === t.nodeType ? t.innerHTML.replace(Qe, "") : undefined;
                if ("string" == typeof e && !tt.test(e) && (de.htmlSerialize || !Ze.test(e)) && (de.leadingWhitespace || !We.test(e)) && !Ve[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = fe.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)t = this[n] || {}, 1 === t.nodeType && (fe.cleanData(h(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return L(this, arguments, function (t) {
                var n = this.parentNode;
                fe.inArray(this, e) < 0 && (fe.cleanData(h(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), fe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        fe.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = fe(e), a = o.length - 1; r <= a; r++)n = r === a ? this : this.clone(!0), fe(o[r])[t](n), ae.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var st, ut = {
        HTML: "block",
        BODY: "block"
    }, lt = /^margin/, ct = new RegExp("^(" + He + ")(?!px)[a-z%]+$", "i"), dt = function (e, t, n, r) {
        var i, o, a = {};
        for (o in t)a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)e.style[o] = a[o];
        return i
    }, pt = re.documentElement;
    !function () {
        function t() {
            var t, c, d = re.documentElement;
            d.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = i = s = !1, r = a = !0, e.getComputedStyle && (c = e.getComputedStyle(l), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, i = "4px" === (c || {width: "4px"}).width, l.style.marginRight = "50%", r = "4px" === (c || {marginRight: "4px"}).marginRight, t = l.appendChild(re.createElement("div")), t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", l.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), l.removeChild(t)), l.style.display = "none", o = 0 === l.getClientRects().length, o && (l.style.display = "",
                l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l.childNodes[0].style.borderCollapse = "separate", t = l.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), d.removeChild(u)
        }

        var n, r, i, o, a, s, u = re.createElement("div"), l = re.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === l.style.opacity, de.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === l.style.backgroundClip, u = re.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), de.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, fe.extend(de, {
            reliableHiddenOffsets: function () {
                return null == n && t(), o
            }, boxSizingReliable: function () {
                return null == n && t(), i
            }, pixelMarginRight: function () {
                return null == n && t(), r
            }, pixelPosition: function () {
                return null == n && t(), n
            }, reliableMarginRight: function () {
                return null == n && t(), a
            }, reliableMarginLeft: function () {
                return null == n && t(), s
            }
        }))
    }();
    var ft, ht, mt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ft = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, ht = function (e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || ft(e), a = n ? n.getPropertyValue(t) || n[t] : undefined, "" !== a && a !== undefined || fe.contains(e.ownerDocument, e) || (a = fe.style(e, t)), n && !de.pixelMarginRight() && ct.test(a) && lt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), a === undefined ? a : a + ""
    }) : pt.currentStyle && (ft = function (e) {
        return e.currentStyle
    }, ht = function (e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || ft(e), a = n ? n[t] : undefined, null == a && s && s[t] && (a = s[t]), ct.test(a) && !mt.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), a === undefined ? a : a + "" || "auto"
    });
    var yt = /alpha\([^)]*\)/i, gt = /opacity\s*=\s*([^)]*)/i, vt = /^(none|table(?!-c[ea]).+)/, bt = new RegExp("^(" + He + ")(.*)$", "i"), xt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, wt = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Et = ["Webkit", "O", "Moz", "ms"], Tt = re.createElement("div").style;
    fe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = ht(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": de.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = fe.camelCase(t), u = e.style;
                if (t = fe.cssProps[s] || (fe.cssProps[s] = D(s) || s), a = fe.cssHooks[t] || fe.cssHooks[s], n === undefined)return a && "get"in a && (i = a.get(e, !1, r)) !== undefined ? i : u[t];
                if (o = typeof n, "string" === o && (i = Pe.exec(n)) && i[1] && (n = p(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (fe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set"in a && (n = a.set(e, n, r)) === undefined)))try {
                    u[t] = n
                } catch (e) {
                }
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = fe.camelCase(t);
            return t = fe.cssProps[s] || (fe.cssProps[s] = D(s) || s), a = fe.cssHooks[t] || fe.cssHooks[s], a && "get"in a && (o = a.get(e, !0, n)), o === undefined && (o = ht(e, t, r)), "normal" === o && t in wt && (o = wt[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), fe.each(["height", "width"], function (e, t) {
        fe.cssHooks[t] = {
            get: function (e, n, r) {
                if (n)return vt.test(fe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, xt, function () {
                    return F(e, t, r)
                }) : F(e, t, r)
            }, set: function (e, n, r) {
                var i = r && ft(e);
                return H(e, n, r ? P(e, t, r, de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), de.opacity || (fe.cssHooks.opacity = {
        get: function (e, t) {
            return gt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === fe.trim(o.replace(yt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = yt.test(o) ? o.replace(yt, i) : o + " " + i)
        }
    }), fe.cssHooks.marginRight = R(de.reliableMarginRight, function (e, t) {
        if (t)return dt(e, {display: "inline-block"}, ht, [e, "marginRight"])
    }), fe.cssHooks.marginLeft = R(de.reliableMarginLeft, function (e, t) {
        if (t)return (parseFloat(ht(e, "marginLeft")) || (fe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {marginLeft: 0}, function () {
                return e.getBoundingClientRect().left
            }) : 0)) + "px"
    }), fe.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        fe.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)i[e + Fe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, lt.test(e) || (fe.cssHooks[e + t].set = H)
    }), fe.fn.extend({
        css: function (e, t) {
            return Be(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (fe.isArray(t)) {
                    for (r = ft(e), i = t.length; a < i; a++)o[t[a]] = fe.css(e, t[a], !1, r);
                    return o
                }
                return n !== undefined ? fe.style(e, t, n) : fe.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return j(this, !0)
        }, hide: function () {
            return j(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Ie(this) ? fe(this).show() : fe(this).hide()
            })
        }
    }), fe.Tween = I, I.prototype = {
        constructor: I, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (fe.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = I.propHooks[this.prop];
            return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }, set: function (e) {
                fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, fe.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, fe.fx = I.prototype.init, fe.fx.step = {};
    var St, Ct, kt = /^(?:toggle|show|hide)$/, Lt = /queueHooks$/;
    fe.Animation = fe.extend(z, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return p(n.elem, e, Pe.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
            for (var n, r = 0, i = e.length; r < i; r++)n = e[r], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
        }, prefilters: [_], prefilter: function (e, t) {
            t ? z.prefilters.unshift(e) : z.prefilters.push(e)
        }
    }), fe.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? fe.extend({}, e) : {
            complete: n || !n && t || fe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !fe.isFunction(t) && t
        };
        return r.duration = fe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in fe.fx.speeds ? fe.fx.speeds[r.duration] : fe.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            fe.isFunction(r.old) && r.old.call(this), r.queue && fe.dequeue(this, r.queue)
        }, r
    }, fe.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Ie).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = fe.isEmptyObject(e), o = fe.speed(t, n, r), a = function () {
                var t = z(this, fe.extend({}, e), o);
                (i || fe._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = fe.timers, a = fe._data(this);
                if (i)a[i] && a[i].stop && r(a[i]); else for (i in a)a[i] && a[i].stop && Lt.test(i) && r(a[i]);
                for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || fe.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = fe._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = fe.timers, a = r ? r.length : 0;
                for (n.finish = !0, fe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), fe.each(["toggle", "show", "hide"], function (e, t) {
        var n = fe.fn[t];
        fe.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, r, i)
        }
    }), fe.each({
        slideDown: M("show"),
        slideUp: M("hide"),
        slideToggle: M("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        fe.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), fe.timers = [], fe.fx.tick = function () {
        var e, t = fe.timers, n = 0;
        for (St = fe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || fe.fx.stop(), St = undefined
    }, fe.fx.timer = function (e) {
        fe.timers.push(e), e() ? fe.fx.start() : fe.timers.pop()
    }, fe.fx.interval = 13, fe.fx.start = function () {
        Ct || (Ct = e.setInterval(fe.fx.tick, fe.fx.interval))
    }, fe.fx.stop = function () {
        e.clearInterval(Ct), Ct = null
    }, fe.fx.speeds = {slow: 600, fast: 200, _default: 400}, fe.fn.delay = function (t, n) {
        return t = fe.fx ? fe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    }, function () {
        var e, t = re.createElement("input"), n = re.createElement("div"), r = re.createElement("select"), i = r.appendChild(re.createElement("option"));
        n = re.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = i.selected, de.enctype = !!re.createElement("form").enctype, r.disabled = !0, de.optDisabled = !i.disabled, t = re.createElement("input"), t.setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
    }();
    var Nt = /\r/g, At = /[\x20\t\r\n\f]+/g;
    fe.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)return r = fe.isFunction(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, fe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : fe.isArray(i) && (i = fe.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()]) && "set"in t && t.set(this, i, "value") !== undefined || (this.value = i))
                });
                if (i)return (t = fe.valHooks[i.type] || fe.valHooks[i.nodeName.toLowerCase()]) && "get"in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, "string" == typeof n ? n.replace(Nt, "") : null == n ? "" : n)
            }
        }
    }), fe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = fe.find.attr(e, "value");
                    return null != t ? t : fe.trim(fe.text(e)).replace(At, " ")
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)if (n = r[u], (n.selected || u === i) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                        if (t = fe(n).val(), o)return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = fe.makeArray(t), a = i.length; a--;)if (r = i[a], fe.inArray(fe.valHooks.option.get(r), o) > -1)try {
                        r.selected = n = !0
                    } catch (e) {
                        r.scrollHeight
                    } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), fe.each(["radio", "checkbox"], function () {
        fe.valHooks[this] = {
            set: function (e, t) {
                if (fe.isArray(t))return e.checked = fe.inArray(fe(e).val(), t) > -1
            }
        }, de.checkOn || (fe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var qt, Rt, Dt = fe.expr.attrHandle, jt = /^(?:checked|selected)$/i, Ht = de.getSetAttribute, Pt = de.input;
    fe.fn.extend({
        attr: function (e, t) {
            return Be(this, fe.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                fe.removeAttr(this, e)
            })
        }
    }), fe.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === o && fe.isXMLDoc(e) || (t = t.toLowerCase(), i = fe.attrHooks[t] || (fe.expr.match.bool.test(t) ? Rt : qt)), n !== undefined ? null === n ? void fe.removeAttr(e, t) : i && "set"in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""), n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = fe.find.attr(e, t), null == r ? undefined : r))
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!de.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(Ne);
            if (o && 1 === e.nodeType)for (; n = o[i++];)r = fe.propFix[n] || n, fe.expr.match.bool.test(n) ? Pt && Ht || !jt.test(n) ? e[r] = !1 : e[fe.camelCase("default-" + n)] = e[r] = !1 : fe.attr(e, n, ""), e.removeAttribute(Ht ? n : r)
        }
    }), Rt = {
        set: function (e, t, n) {
            return !1 === t ? fe.removeAttr(e, n) : Pt && Ht || !jt.test(n) ? e.setAttribute(!Ht && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Dt[t] || fe.find.attr;
        Pt && Ht || !jt.test(t) ? Dt[t] = function (e, t, r) {
            var i, o;
            return r || (o = Dt[t], Dt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Dt[t] = o), i
        } : Dt[t] = function (e, t, n) {
            if (!n)return e[fe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Pt && Ht || (fe.attrHooks.value = {
        set: function (e, t, n) {
            if (!fe.nodeName(e, "input"))return qt && qt.set(e, t, n);
            e.defaultValue = t
        }
    }), Ht || (qt = {
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n))return t
        }
    }, Dt.id = Dt.name = Dt.coords = function (e, t, n) {
        var r;
        if (!n)return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, fe.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified)return n.value
        }, set: qt.set
    }, fe.attrHooks.contenteditable = {
        set: function (e, t, n) {
            qt.set(e, "" !== t && t, n)
        }
    }, fe.each(["width", "height"], function (e, t) {
        fe.attrHooks[t] = {
            set: function (e, n) {
                if ("" === n)return e.setAttribute(t, "auto"), n
            }
        }
    })), de.style || (fe.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || undefined
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Ft = /^(?:input|select|textarea|button|object)$/i, It = /^(?:a|area)$/i;
    fe.fn.extend({
        prop: function (e, t) {
            return Be(this, fe.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = fe.propFix[e] || e, this.each(function () {
                try {
                    this[e] = undefined, delete this[e]
                } catch (e) {
                }
            })
        }
    }), fe.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)return 1 === o && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, i = fe.propHooks[t]), n !== undefined ? i && "set"in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = fe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ft.test(e.nodeName) || It.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), de.hrefNormalized || fe.each(["href", "src"], function (e, t) {
        fe.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), de.optSelected || (fe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        fe.propFix[this.toLowerCase()] = this
    }), de.enctype || (fe.propFix.enctype = "encoding");
    var Bt = /[\t\r\n\f]/g;
    fe.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (fe.isFunction(e))return this.each(function (t) {
                fe(this).addClass(e.call(this, t, V(this)))
            });
            if ("string" == typeof e && e)for (t = e.match(Ne) || []; n = this[u++];)if (i = V(n), r = 1 === n.nodeType && (" " + i + " ").replace(Bt, " ")) {
                for (a = 0; o = t[a++];)r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                s = fe.trim(r), i !== s && fe.attr(n, "class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (fe.isFunction(e))return this.each(function (t) {
                fe(this).removeClass(e.call(this, t, V(this)))
            });
            if (!arguments.length)return this.attr("class", "");
            if ("string" == typeof e && e)for (t = e.match(Ne) || []; n = this[u++];)if (i = V(n), r = 1 === n.nodeType && (" " + i + " ").replace(Bt, " ")) {
                for (a = 0; o = t[a++];)for (; r.indexOf(" " + o + " ") > -1;)r = r.replace(" " + o + " ", " ");
                s = fe.trim(r), i !== s && fe.attr(n, "class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function (n) {
                fe(this).toggleClass(e.call(this, n, V(this), t), t)
            }) : this.each(function () {
                var t, r, i, o;
                if ("string" === n)for (r = 0, i = fe(this), o = e.match(Ne) || []; t = o[r++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else e !== undefined && "boolean" !== n || (t = V(this), t && fe._data(this, "__className__", t), fe.attr(this, "class", t || !1 === e ? "" : fe._data(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)if (1 === n.nodeType && (" " + V(n) + " ").replace(Bt, " ").indexOf(t) > -1)return !0;
            return !1
        }
    }), fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        fe.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), fe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Mt = e.location, Ot = fe.now(), _t = /\?/, Wt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    fe.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse)return e.JSON.parse(t + "");
        var n, r = null, i = fe.trim(t + "");
        return i && !fe.trim(i.replace(Wt, function (e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : fe.error("Invalid JSON: " + t)
    }, fe.parseXML = function (t) {
        var n, r;
        if (!t || "string" != typeof t)return null;
        try {
            e.DOMParser ? (r = new e.DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (e) {
            n = undefined
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), n
    };
    var zt = /#.*$/, Vt = /([?&])_=[^&]*/, $t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Xt = /^(?:GET|HEAD)$/, Kt = /^\/\//, Gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Yt = {}, Jt = {}, Qt = "*/".concat("*"), Zt = Mt.href, en = Gt.exec(Zt.toLowerCase()) || [];
    fe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Zt,
            type: "GET",
            isLocal: Ut.test(en[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": fe.parseJSON, "text xml": fe.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? X(X(e, fe.ajaxSettings), t) : X(fe.ajaxSettings, e)
        },
        ajaxPrefilter: $(Yt),
        ajaxTransport: $(Jt),
        ajax: function (t, n) {
            function r(t, n, r, i) {
                var o, d, v, b, w, T = n;
                2 !== x && (x = 2, u && e.clearTimeout(u), c = undefined, s = i || "", E.readyState = t > 0 ? 4 : 0, o = t >= 200 && t < 300 || 304 === t, r && (b = K(p, E, r)), b = G(p, b, E, o), o ? (p.ifModified && (w = E.getResponseHeader("Last-Modified"), w && (fe.lastModified[a] = w), (w = E.getResponseHeader("etag")) && (fe.etag[a] = w)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, d = b.data, v = b.error, o = !v)) : (v = T, !t && T || (T = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || T) + "", o ? m.resolveWith(f, [d, T, E]) : m.rejectWith(f, [E, T, v]), E.statusCode(g), g = undefined, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [E, p, o ? d : v]), y.fireWith(f, [E, T]), l && (h.trigger("ajaxComplete", [E, p]), --fe.active || fe.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = undefined), n = n || {};
            var i, o, a, s, u, l, c, d, p = fe.ajaxSetup({}, n), f = p.context || p, h = p.context && (f.nodeType || f.jquery) ? fe(f) : fe.event, m = fe.Deferred(), y = fe.Callbacks("once memory"), g = p.statusCode || {}, v = {}, b = {}, x = 0, w = "canceled", E = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === x) {
                        if (!d)for (d = {}; t = $t.exec(s);)d[t[1].toLowerCase()] = t[2];
                        t = d[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === x ? s : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, v[e] = t), this
                },
                overrideMimeType: function (e) {
                    return x || (p.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (x < 2)for (t in e)g[t] = [g[t], e[t]]; else E.always(e[E.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || w;
                    return c && c.abort(t), r(0, t), this
                }
            };
            if (m.promise(E).complete = y.add, E.success = E.done, E.error = E.fail, p.url = ((t || p.url || Zt) + "").replace(zt, "").replace(Kt, en[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = fe.trim(p.dataType || "*").toLowerCase().match(Ne) || [""], null == p.crossDomain && (i = Gt.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === en[1] && i[2] === en[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = fe.param(p.data, p.traditional)), U(Yt, p, n, E), 2 === x)return E;
            l = fe.event && p.global, l && 0 == fe.active++ && fe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Xt.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (_t.test(a) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = Vt.test(a) ? a.replace(Vt, "$1_=" + Ot++) : a + (_t.test(a) ? "&" : "?") + "_=" + Ot++)), p.ifModified && (fe.lastModified[a] && E.setRequestHeader("If-Modified-Since", fe.lastModified[a]), fe.etag[a] && E.setRequestHeader("If-None-Match", fe.etag[a])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && E.setRequestHeader("Content-Type", p.contentType), E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Qt + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers)E.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (!1 === p.beforeSend.call(f, E, p) || 2 === x))return E.abort();
            w = "abort";
            for (o in{success: 1, error: 1, complete: 1})E[o](p[o]);
            if (c = U(Jt, p, n, E)) {
                if (E.readyState = 1, l && h.trigger("ajaxSend", [E, p]), 2 === x)return E;
                p.async && p.timeout > 0 && (u = e.setTimeout(function () {
                    E.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, c.send(v, r)
                } catch (e) {
                    if (!(x < 2))throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return E
        },
        getJSON: function (e, t, n) {
            return fe.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return fe.get(e, undefined, t, "script")
        }
    }), fe.each(["get", "post"], function (e, t) {
        fe[t] = function (e, n, r, i) {
            return fe.isFunction(n) && (i = i || r, r = n, n = undefined), fe.ajax(fe.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, fe.isPlainObject(e) && e))
        }
    }), fe._evalUrl = function (e) {
        return fe.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, fe.fn.extend({
        wrapAll: function (e) {
            if (fe.isFunction(e))return this.each(function (t) {
                fe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = fe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return fe.isFunction(e) ? this.each(function (t) {
                fe(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = fe(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = fe.isFunction(e);
            return this.each(function (n) {
                fe(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), fe.expr.filters.hidden = function (e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : J(e)
    }, fe.expr.filters.visible = function (e) {
        return !fe.expr.filters.hidden(e)
    };
    var tn = /%20/g, nn = /\[\]$/, rn = /\r?\n/g, on = /^(?:submit|button|image|reset|file)$/i, an = /^(?:input|select|textarea|keygen)/i;
    fe.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = fe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (t === undefined && (t = fe.ajaxSettings && fe.ajaxSettings.traditional), fe.isArray(e) || e.jquery && !fe.isPlainObject(e))fe.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e)Q(n, e[n], t, i);
        return r.join("&").replace(tn, "+")
    }, fe.fn.extend({
        serialize: function () {
            return fe.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = fe.prop(this, "elements");
                return e ? fe.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !fe(this).is(":disabled") && an.test(this.nodeName) && !on.test(e) && (this.checked || !Me.test(e))
            }).map(function (e, t) {
                var n = fe(this).val();
                return null == n ? null : fe.isArray(n) ? fe.map(n, function (e) {
                    return {name: t.name, value: e.replace(rn, "\r\n")}
                }) : {name: t.name, value: n.replace(rn, "\r\n")}
            }).get()
        }
    }), fe.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function () {
        return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    } : Z;
    var sn = 0, un = {}, ln = fe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in un)un[e](undefined, !0)
    }), de.cors = !!ln && "withCredentials"in ln, ln = de.ajax = !!ln, ln && fe.ajaxTransport(function (t) {
        if (!t.crossDomain || de.cors) {
            var n;
            return {
                send: function (r, i) {
                    var o, a = t.xhr(), s = ++sn;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (o in t.xhrFields)a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r)r[o] !== undefined && a.setRequestHeader(o, r[o] + "");
                    a.send(t.hasContent && t.data || null), n = function (e, r) {
                        var o, u, l;
                        if (n && (r || 4 === a.readyState))if (delete un[s], n = undefined, a.onreadystatechange = fe.noop, r)4 !== a.readyState && a.abort(); else {
                            l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
                            try {
                                u = a.statusText
                            } catch (e) {
                                u = ""
                            }
                            o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                        }
                        l && i(o, u, l, a.getAllResponseHeaders())
                    }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = un[s] = n : n()
                }, abort: function () {
                    n && n(undefined, !0)
                }
            }
        }
    }), fe.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return fe.globalEval(e), e
            }
        }
    }), fe.ajaxPrefilter("script", function (e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), fe.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = re.head || fe("head")[0] || re.documentElement;
            return {
                send: function (r, i) {
                    t = re.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                }, abort: function () {
                    t && t.onload(undefined, !0)
                }
            }
        }
    });
    var cn = [], dn = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = cn.pop() || fe.expando + "_" + Ot++;
            return this[e] = !0, e
        }
    }), fe.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])return i = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(dn, "$1" + i) : !1 !== t.jsonp && (t.url += (_t.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || fe.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            o === undefined ? fe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, cn.push(i)), a && fe.isFunction(o) && o(a[0]), a = o = undefined
        }), "script"
    }), fe.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || re;
        var r = Ee.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = g([e], t, i), i && i.length && fe(i).remove(), fe.merge([], r.childNodes))
    };
    var pn = fe.fn.load;
    fe.fn.load = function (e, t, n) {
        if ("string" != typeof e && pn)return pn.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = fe.trim(e.slice(s, e.length)), e = e.slice(0, s)), fe.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (i = "POST"), a.length > 0 && fe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? fe("<div>").append(fe.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        fe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), fe.expr.filters.animated = function (e) {
        return fe.grep(fe.timers, function (t) {
            return e === t.elem
        }).length
    }, fe.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l, c = fe.css(e, "position"), d = fe(e), p = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = fe.css(e, "top"), u = fe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && fe.inArray("auto", [o, u]) > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using"in t ? t.using.call(e, p) : d.css(p)
        }
    }, fe.fn.extend({
        offset: function (e) {
            if (arguments.length)return e === undefined ? this : this.each(function (t) {
                fe.offset.setOffset(this, e, t)
            });
            var t, n, r = {top: 0, left: 0}, i = this[0], o = i && i.ownerDocument;
            if (o)return t = o.documentElement, fe.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = te(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        }, position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === fe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), fe.nodeName(e[0], "html") || (n = e.offset()), n.top += fe.css(e[0], "borderTopWidth", !0), n.left += fe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - fe.css(r, "marginTop", !0),
                    left: t.left - n.left - fe.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position");)e = e.offsetParent;
                return e || pt
            })
        }
    }), fe.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = /Y/.test(t);
        fe.fn[e] = function (r) {
            return Be(this, function (e, r, i) {
                var o = te(e);
                if (i === undefined)return o ? t in o ? o[t] : o.document.documentElement[r] : e[r];
                o ? o.scrollTo(n ? fe(o).scrollLeft() : i, n ? i : fe(o).scrollTop()) : e[r] = i
            }, e, r, arguments.length, null)
        }
    }), fe.each(["top", "left"], function (e, t) {
        fe.cssHooks[t] = R(de.pixelPosition, function (e, n) {
            if (n)return n = ht(e, t), ct.test(n) ? fe(e).position()[t] + "px" : n
        })
    }), fe.each({Height: "height", Width: "width"}, function (e, t) {
        fe.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            fe.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r), a = n || (!0 === r || !0 === i ? "margin" : "border");
                return Be(this, function (t, n, r) {
                    var i;
                    return fe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? fe.css(t, n, a) : fe.style(t, n, r, a)
                }, t, o ? r : undefined, o, null)
            }
        })
    }), fe.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), fe.fn.size = function () {
        return this.length
    }, fe.fn.andSelf = fe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return fe
    });
    var fn = e.jQuery, hn = e.$;
    return fe.noConflict = function (t) {
        return e.$ === fe && (e.$ = hn), t && e.jQuery === fe && (e.jQuery = fn), fe
    }, t || (e.jQuery = e.$ = fe), fe
}), function (e, t) {
    "use strict";
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, r = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function () {
            return e("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function () {
            return e("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function (e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function () {
            e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function (t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), !1 !== i.result
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e[0].href
        },
        isRemote: function (e) {
            return e.data("remote") !== t && !1 !== e.data("remote")
        },
        handleRemote: function (r) {
            var i, o, a, s, u, l;
            if (n.fire(r, "ajax:before")) {
                if (s = r.data("with-credentials") || null, u = r.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, r.is("form")) {
                    i = r.data("ujs:submit-button-formmethod") || r.attr("method"), o = r.data("ujs:submit-button-formaction") || r.attr("action"), a = e(r[0]).serializeArray();
                    var c = r.data("ujs:submit-button");
                    c && (a.push(c), r.data("ujs:submit-button", null)), r.data("ujs:submit-button-formmethod", null), r.data("ujs:submit-button-formaction", null)
                } else r.is(n.inputChangeSelector) ? (i = r.data("method"), o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get", o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : (i = r.data("method"), o = n.href(r), a = r.data("params") || null);
                return l = {
                    type: i || "GET", data: a, dataType: u, beforeSend: function (e, i) {
                        if (i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), !n.fire(r, "ajax:beforeSend", [e, i]))return !1;
                        r.trigger("ajax:send", e)
                    }, success: function (e, t, n) {
                        r.trigger("ajax:success", [e, t, n])
                    }, complete: function (e, t) {
                        r.trigger("ajax:complete", [e, t])
                    }, error: function (e, t, n) {
                        r.trigger("ajax:error", [e, t, n])
                    }, crossDomain: n.isCrossDomain(o)
                }, s && (l.xhrFields = {withCredentials: s}), o && (l.url = o), n.ajax(l)
            }
            return !1
        },
        isCrossDomain: function (e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (e) {
                return !0
            }
        },
        handleMethod: function (r) {
            var i = n.href(r), o = r.data("method"), a = r.attr("target"), s = n.csrfToken(), u = n.csrfParam(), l = e('<form method="post" action="' + i + '"></form>'), c = '<input name="_method" value="' + o + '" type="hidden" />';
            u === t || s === t || n.isCrossDomain(i) || (c += '<input name="' + u + '" value="' + s + '" type="hidden" />'), a && l.attr("target", a), l.hide().append(c).appendTo("body"), l.submit()
        },
        formElements: function (t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function (t) {
            n.formElements(t, n.disableSelector).each(function () {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function (e) {
            var n, r;
            n = e.is("button") ? "html" : "val", r = e.data("disable-with"), r !== t && (e.data("ujs:enable-with", e[n]()), e[n](r)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
        },
        enableFormElements: function (t) {
            n.formElements(t, n.enableSelector).each(function () {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function (e) {
            var n = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
        },
        allowAction: function (e) {
            var t, r = e.data("confirm"), i = !1;
            if (!r)return !0;
            if (n.fire(e, "confirm")) {
                try {
                    i = n.confirm(r)
                } catch (e) {
                    (console.error || console.log).call(console, e.stack || e)
                }
                t = n.fire(e, "confirm:complete", [i])
            }
            return i && t
        },
        blankInputs: function (t, n, r) {
            var i, o, a, s, u = e(), l = n || "input,textarea", c = t.find(l), d = {};
            return c.each(function () {
                i = e(this), i.is("input[type=radio]") ? (s = i.attr("name"), d[s] || (0 === t.find('input[type=radio]:checked[name="' + s + '"]').length && (a = t.find('input[type=radio][name="' + s + '"]'), u = u.add(a)), d[s] = s)) : (o = i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val()) === r && (u = u.add(i))
            }), !!u.length && u
        },
        nonBlankInputs: function (e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function (e) {
            var r = e.data("disable-with");
            r !== t && (e.data("ujs:enable-with", e.html()), e.html(r)), e.bind("click.railsDisable", function (e) {
                return n.stopEverything(e)
            }), e.data("ujs:disabled", !0)
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
        }
    }, n.fire(r, "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, r) {
        e.crossDomain || n.CSRFProtection(r)
    }), e(window).on("pageshow.rails", function () {
        e(e.rails.enableSelector).each(function () {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function () {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableElement(t)
        })
    }), r.on("ajax:complete", n.linkDisableSelector, function () {
        n.enableElement(e(this))
    }), r.on("ajax:complete", n.buttonDisableSelector, function () {
        n.enableFormElement(e(this))
    }), r.on("click.rails", n.linkClickSelector, function (t) {
        var r = e(this), i = r.data("method"), o = r.data("params"), a = t.metaKey || t.ctrlKey;
        if (!n.allowAction(r))return n.stopEverything(t);
        if (!a && r.is(n.linkDisableSelector) && n.disableElement(r), n.isRemote(r)) {
            if (a && (!i || "GET" === i) && !o)return !0;
            var s = n.handleRemote(r);
            return !1 === s ? n.enableElement(r) : s.fail(function () {
                n.enableElement(r)
            }), !1
        }
        return i ? (n.handleMethod(r), !1) : void 0
    }), r.on("click.rails", n.buttonClickSelector, function (t) {
        var r = e(this);
        if (!n.allowAction(r) || !n.isRemote(r))return n.stopEverything(t);
        r.is(n.buttonDisableSelector) && n.disableFormElement(r);
        var i = n.handleRemote(r);
        return !1 === i ? n.enableFormElement(r) : i.fail(function () {
            n.enableFormElement(r)
        }), !1
    }), r.on("change.rails", n.inputChangeSelector, function (t) {
        var r = e(this);
        return n.allowAction(r) && n.isRemote(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
    }), r.on("submit.rails", n.formSubmitSelector, function (r) {
        var i, o, a = e(this), s = n.isRemote(a);
        if (!n.allowAction(a))return n.stopEverything(r);
        if (a.attr("novalidate") === t)if (a.data("ujs:formnovalidate-button") === t) {
            if ((i = n.blankInputs(a, n.requiredInputSelector, !1)) && n.fire(a, "ajax:aborted:required", [i]))return n.stopEverything(r)
        } else a.data("ujs:formnovalidate-button", t);
        if (s) {
            if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
                setTimeout(function () {
                    n.disableFormElements(a)
                }, 13);
                var u = n.fire(a, "ajax:aborted:file", [o]);
                return u || setTimeout(function () {
                    n.enableFormElements(a)
                }, 13), u
            }
            return n.handleRemote(a), !1
        }
        setTimeout(function () {
            n.disableFormElements(a)
        }, 13)
    }), r.on("click.rails", n.formInputClickSelector, function (t) {
        var r = e(this);
        if (!n.allowAction(r))return n.stopEverything(t);
        var i = r.attr("name"), o = i ? {name: i, value: r.val()} : null, a = r.closest("form");
        0 === a.length && (a = e("#" + r.attr("form"))), a.data("ujs:submit-button", o), a.data("ujs:formnovalidate-button", r.attr("formnovalidate")), a.data("ujs:submit-button-formaction", r.attr("formaction")), a.data("ujs:submit-button-formmethod", r.attr("formmethod"))
    }), r.on("ajax:send.rails", n.formSubmitSelector, function (t) {
        this === t.target && n.disableFormElements(e(this))
    }), r.on("ajax:complete.rails", n.formSubmitSelector, function (t) {
        this === t.target && n.enableFormElements(e(this))
    }), e(function () {
        n.refreshCSRFTokens()
    }))
}(jQuery), function () {
    (function () {
        (function () {
            this.Turbolinks = {
                supported: function () {
                    return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener
                }(), visit: function (t, n) {
                    return e.controller.visit(t, n)
                }, clearCache: function () {
                    return e.controller.clearCache()
                }
            }
        }).call(this)
    }).call(this);
    var e = this.Turbolinks;
    (function () {
        (function () {
            var t, n, r = [].slice;
            e.copyObject = function (e) {
                var t, n, r;
                n = {};
                for (t in e)r = e[t], n[t] = r;
                return n
            }, e.closest = function (e, n) {
                return t.call(e, n)
            }, t = function () {
                var e, t;
                return e = document.documentElement, null != (t = e.closest) ? t : function (e) {
                    var t;
                    for (t = this; t;) {
                        if (t.nodeType === Node.ELEMENT_NODE && n.call(t, e))return t;
                        t = t.parentNode
                    }
                }
            }(), e.defer = function (e) {
                return setTimeout(e, 1)
            }, e.throttle = function (e) {
                var t;
                return t = null, function () {
                    var n;
                    return n = 1 <= arguments.length ? r.call(arguments, 0) : [], null != t ? t : t = requestAnimationFrame(function (r) {
                        return function () {
                            return t = null, e.apply(r, n)
                        }
                    }(this))
                }
            }, e.dispatch = function (e, t) {
                var n, r, i, o, a;
                return o = null != t ? t : {}, a = o.target, n = o.cancelable, r = o.data, i = document.createEvent("Events"), i.initEvent(e, !0, !0 === n), i.data = null != r ? r : {}, (null != a ? a : document).dispatchEvent(i), i
            }, e.match = function (e, t) {
                return n.call(e, t)
            }, n = function () {
                var e, t, n, r;
                return e = document.documentElement, null != (t = null != (n = null != (r = e.matchesSelector) ? r : e.webkitMatchesSelector) ? n : e.msMatchesSelector) ? t : e.mozMatchesSelector
            }(), e.uuid = function () {
                var e, t, n;
                for (n = "", e = t = 1; 36 >= t; e = ++t)n += 9 === e || 14 === e || 19 === e || 24 === e ? "-" : 15 === e ? "4" : 20 === e ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
                return n
            }
        }).call(this), function () {
            e.Location = function () {
                function e(e) {
                    var t, n;
                    null == e && (e = ""), n = document.createElement("a"), n.href = e.toString(), this.absoluteURL = n.href, t = n.hash.length, 2 > t ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -t), this.anchor = n.hash.slice(1))
                }

                var t, n, r, i;
                return e.wrap = function (e) {
                    return e instanceof this ? e : new this(e)
                }, e.prototype.getOrigin = function () {
                    return this.absoluteURL.split("/", 3).join("/")
                }, e.prototype.getPath = function () {
                    var e, t;
                    return null != (e = null != (t = this.absoluteURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? t[1] : void 0) ? e : "/"
                }, e.prototype.getPathComponents = function () {
                    return this.getPath().split("/").slice(1)
                }, e.prototype.getLastPathComponent = function () {
                    return this.getPathComponents().slice(-1)[0]
                }, e.prototype.getExtension = function () {
                    var e, t;
                    return null != (e = null != (t = this.getLastPathComponent().match(/\.[^.]*$/)) ? t[0] : void 0) ? e : ""
                }, e.prototype.isHTML = function () {
                    return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
                }, e.prototype.isPrefixedBy = function (e) {
                    var t;
                    return t = n(e), this.isEqualTo(e) || i(this.absoluteURL, t)
                }, e.prototype.isEqualTo = function (e) {
                    return this.absoluteURL === (null != e ? e.absoluteURL : void 0)
                }, e.prototype.toCacheKey = function () {
                    return this.requestURL
                }, e.prototype.toJSON = function () {
                    return this.absoluteURL
                }, e.prototype.toString = function () {
                    return this.absoluteURL
                }, e.prototype.valueOf = function () {
                    return this.absoluteURL
                }, n = function (e) {
                    return t(e.getOrigin() + e.getPath())
                }, t = function (e) {
                    return r(e, "/") ? e : e + "/"
                }, i = function (e, t) {
                    return e.slice(0, t.length) === t
                }, r = function (e, t) {
                    return e.slice(-t.length) === t
                }, e
            }()
        }.call(this), function () {
            var t = function (e, t) {
                return function () {
                    return e.apply(t, arguments)
                }
            };
            e.HttpRequest = function () {
                function n(n, r, i) {
                    this.delegate = n, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(r).requestURL, this.referrer = e.Location.wrap(i).absoluteURL, this.createXHR()
                }

                return n.NETWORK_FAILURE = 0, n.TIMEOUT_FAILURE = -1, n.timeout = 60, n.prototype.send = function () {
                    var e;
                    return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof(e = this.delegate).requestStarted ? e.requestStarted() : void 0) : void 0
                }, n.prototype.cancel = function () {
                    return this.xhr && this.sent ? this.xhr.abort() : void 0
                }, n.prototype.requestProgressed = function (e) {
                    return e.lengthComputable ? this.setProgress(e.loaded / e.total) : void 0
                }, n.prototype.requestLoaded = function () {
                    return this.endRequest(function (e) {
                        return function () {
                            var t;
                            return 200 <= (t = e.xhr.status) && 300 > t ? e.delegate.requestCompletedWithResponse(e.xhr.responseText, e.xhr.getResponseHeader("Turbolinks-Location")) : (e.failed = !0, e.delegate.requestFailedWithStatusCode(e.xhr.status, e.xhr.responseText))
                        }
                    }(this))
                }, n.prototype.requestFailed = function () {
                    return this.endRequest(function (e) {
                        return function () {
                            return e.failed = !0, e.delegate.requestFailedWithStatusCode(e.constructor.NETWORK_FAILURE)
                        }
                    }(this))
                }, n.prototype.requestTimedOut = function () {
                    return this.endRequest(function (e) {
                        return function () {
                            return e.failed = !0, e.delegate.requestFailedWithStatusCode(e.constructor.TIMEOUT_FAILURE)
                        }
                    }(this))
                }, n.prototype.requestCanceled = function () {
                    return this.endRequest()
                }, n.prototype.notifyApplicationBeforeRequestStart = function () {
                    return e.dispatch("turbolinks:request-start", {data: {url: this.url, xhr: this.xhr}})
                }, n.prototype.notifyApplicationAfterRequestEnd = function () {
                    return e.dispatch("turbolinks:request-end", {data: {url: this.url, xhr: this.xhr}})
                }, n.prototype.createXHR = function () {
                    return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled
                }, n.prototype.endRequest = function (e) {
                    return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != e && e.call(this), this.destroy()) : void 0
                }, n.prototype.setProgress = function (e) {
                    var t;
                    return this.progress = e, "function" == typeof(t = this.delegate).requestProgressed ? t.requestProgressed(this.progress) : void 0
                }, n.prototype.destroy = function () {
                    var e;
                    return this.setProgress(1), "function" == typeof(e = this.delegate).requestFinished && e.requestFinished(), this.delegate = null, this.xhr = null
                }, n
            }()
        }.call(this), function () {
            var t = function (e, t) {
                return function () {
                    return e.apply(t, arguments)
                }
            };
            e.ProgressBar = function () {
                function e() {
                    this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement()
                }

                var n;
                return n = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + n + "ms ease-out, opacity " + n / 2 + "ms " + n / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
                    return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling())
                }, e.prototype.hide = function () {
                    return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (e) {
                        return function () {
                            return e.uninstallProgressElement(), e.stopTrickling(), e.visible = !1, e.hiding = !1
                        }
                    }(this))) : void 0
                }, e.prototype.setValue = function (e) {
                    return this.value = e, this.refresh()
                }, e.prototype.installStylesheetElement = function () {
                    return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
                }, e.prototype.installProgressElement = function () {
                    return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh()
                }, e.prototype.fadeProgressElement = function (e) {
                    return this.progressElement.style.opacity = 0, setTimeout(e, 1.5 * n)
                }, e.prototype.uninstallProgressElement = function () {
                    return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
                }, e.prototype.startTrickling = function () {
                    return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, n)
                }, e.prototype.stopTrickling = function () {
                    return clearInterval(this.trickleInterval), this.trickleInterval = null
                }, e.prototype.trickle = function () {
                    return this.setValue(this.value + Math.random() / 100)
                }, e.prototype.refresh = function () {
                    return requestAnimationFrame(function (e) {
                        return function () {
                            return e.progressElement.style.width = 10 + 90 * e.value + "%"
                        }
                    }(this))
                }, e.prototype.createStylesheetElement = function () {
                    var e;
                    return e = document.createElement("style"), e.type = "text/css", e.textContent = this.constructor.defaultCSS, e
                }, e.prototype.createProgressElement = function () {
                    var e;
                    return e = document.createElement("div"), e.className = "turbolinks-progress-bar", e
                }, e
            }()
        }.call(this), function () {
            var t = function (e, t) {
                return function () {
                    return e.apply(t, arguments)
                }
            };
            e.BrowserAdapter = function () {
                function n(n) {
                    this.controller = n, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar
                }

                var r, i, o, a;
                return a = e.HttpRequest, r = a.NETWORK_FAILURE, o = a.TIMEOUT_FAILURE, i = 500, n.prototype.visitProposedToLocationWithAction = function (e, t) {
                    return this.controller.startVisitToLocationWithAction(e, t)
                }, n.prototype.visitStarted = function (e) {
                    return e.issueRequest(), e.changeHistory(), e.loadCachedSnapshot()
                }, n.prototype.visitRequestStarted = function (e) {
                    return this.progressBar.setValue(0), e.hasCachedSnapshot() || "restore" !== e.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
                }, n.prototype.visitRequestProgressed = function (e) {
                    return this.progressBar.setValue(e.progress)
                }, n.prototype.visitRequestCompleted = function (e) {
                    return e.loadResponse()
                }, n.prototype.visitRequestFailedWithStatusCode = function (e, t) {
                    switch (t) {
                        case r:
                        case o:
                            return this.reload();
                        default:
                            return e.loadResponse()
                    }
                }, n.prototype.visitRequestFinished = function () {
                    return this.hideProgressBar()
                }, n.prototype.visitCompleted = function (e) {
                    return e.followRedirect()
                }, n.prototype.pageInvalidated = function () {
                    return this.reload()
                }, n.prototype.showProgressBarAfterDelay = function () {
                    return this.progressBarTimeout = setTimeout(this.showProgressBar, i)
                }, n.prototype.showProgressBar = function () {
                    return this.progressBar.show()
                }, n.prototype.hideProgressBar = function () {
                    return this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
                }, n.prototype.reload = function () {
                    return window.location.reload()
                }, n
            }()
        }.call(this), function () {
            var t = function (e, t) {
                return function () {
                    return e.apply(t, arguments)
                }
            };
            e.History = function () {
                function n(e) {
                    this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this)
                }

                return n.prototype.start = function () {
                    return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0)
                }, n.prototype.stop = function () {
                    return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0
                }, n.prototype.push = function (t, n) {
                    return t = e.Location.wrap(t), this.update("push", t, n)
                }, n.prototype.replace = function (t, n) {
                    return t = e.Location.wrap(t), this.update("replace", t, n)
                }, n.prototype.onPopState = function (t) {
                    var n, r, i, o;
                    return this.shouldHandlePopState() && (o = null != (r = t.state) ? r.turbolinks : void 0) ? (n = e.Location.wrap(window.location), i = o.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(n, i)) : void 0
                }, n.prototype.onPageLoad = function () {
                    return e.defer(function (e) {
                        return function () {
                            return e.pageLoaded = !0
                        }
                    }(this))
                }, n.prototype.shouldHandlePopState = function () {
                    return this.pageIsLoaded()
                }, n.prototype.pageIsLoaded = function () {
                    return this.pageLoaded || "complete" === document.readyState
                }, n.prototype.update = function (e, t, n) {
                    var r;
                    return r = {turbolinks: {restorationIdentifier: n}}, history[e + "State"](r, null, t)
                }, n
            }()
        }.call(this), function () {
            e.Snapshot = function () {
                function t(e) {
                    var t, n;
                    n = e.head, t = e.body, this.head = null != n ? n : document.createElement("head"), this.body = null != t ? t : document.createElement("body")
                }

                return t.wrap = function (e) {
                    return e instanceof this ? e : this.fromHTML(e)
                }, t.fromHTML = function (e) {
                    var t;
                    return t = document.createElement("html"), t.innerHTML = e, this.fromElement(t)
                }, t.fromElement = function (e) {
                    return new this({head: e.querySelector("head"), body: e.querySelector("body")})
                }, t.prototype.clone = function () {
                    return new t({head: this.head.cloneNode(!0), body: this.body.cloneNode(!0)})
                }, t.prototype.getRootLocation = function () {
                    var t, n;
                    return n = null != (t = this.getSetting("root")) ? t : "/", new e.Location(n)
                }, t.prototype.getCacheControlValue = function () {
                    return this.getSetting("cache-control")
                }, t.prototype.hasAnchor = function (e) {
                    try {
                        return null != this.body.querySelector("[id='" + e + "']")
                    } catch (e) {
                    }
                }, t.prototype.isPreviewable = function () {
                    return "no-preview" !== this.getCacheControlValue()
                }, t.prototype.isCacheable = function () {
                    return "no-cache" !== this.getCacheControlValue()
                }, t.prototype.getSetting = function (e) {
                    var t, n;
                    return n = this.head.querySelectorAll("meta[name='turbolinks-" + e + "']"), t = n[n.length - 1], null != t ? t.getAttribute("content") : void 0
                }, t
            }()
        }.call(this), function () {
            var t = [].slice;
            e.Renderer = function () {
                function e() {
                }

                var n;
                return e.render = function () {
                    var e, n, r, i;
                    return r = arguments[0], n = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], i = function (e, t, n) {
                        n.prototype = e.prototype;
                        var r = new n, i = e.apply(r, t);
                        return Object(i) === i ? i : r
                    }(this, e, function () {
                    }), i.delegate = r, i.render(n), i
                }, e.prototype.renderView = function (e) {
                    return this.delegate.viewWillRender(this.newBody), e(), this.delegate.viewRendered(this.newBody)
                }, e.prototype.invalidateView = function () {
                    return this.delegate.viewInvalidated()
                }, e.prototype.createScriptElement = function (e) {
                    var t;
                    return "false" === e.getAttribute("data-turbolinks-eval") ? e : (t = document.createElement("script"), t.textContent = e.textContent, n(t, e), t)
                }, n = function (e, t) {
                    var n, r, i, o, a, s, u;
                    for (o = t.attributes, s = [], n = 0, r = o.length; r > n; n++)a = o[n], i = a.name, u = a.value, s.push(e.setAttribute(i, u));
                    return s
                }, e
            }()
        }.call(this), function () {
            e.HeadDetails = function () {
                function e(e) {
                    var t, n, o, a, s, u, l;
                    for (this.element = e, this.elements = {}, l = this.element.childNodes, a = 0, u = l.length; u > a; a++)o = l[a], o.nodeType === Node.ELEMENT_NODE && (s = o.outerHTML, n = null != (t = this.elements)[s] ? t[s] : t[s] = {
                        type: i(o),
                        tracked: r(o),
                        elements: []
                    }, n.elements.push(o))
                }

                var t, n, r, i;
                return e.prototype.hasElementWithKey = function (e) {
                    return e in this.elements
                }, e.prototype.getTrackedElementSignature = function () {
                    var e, t;
                    return function () {
                        var n, r;
                        n = this.elements, r = [];
                        for (e in n)(t = n[e].tracked) && r.push(e);
                        return r
                    }.call(this).join("")
                }, e.prototype.getScriptElementsNotInDetails = function (e) {
                    return this.getElementsMatchingTypeNotInDetails("script", e)
                }, e.prototype.getStylesheetElementsNotInDetails = function (e) {
                    return this.getElementsMatchingTypeNotInDetails("stylesheet", e)
                }, e.prototype.getElementsMatchingTypeNotInDetails = function (e, t) {
                    var n, r, i, o, a, s;
                    i = this.elements, a = [];
                    for (r in i)o = i[r], s = o.type, n = o.elements, s !== e || t.hasElementWithKey(r) || a.push(n[0]);
                    return a
                }, e.prototype.getProvisionalElements = function () {
                    var e, t, n, r, i, o, a;
                    n = [], r = this.elements;
                    for (t in r)i = r[t], a = i.type, o = i.tracked, e = i.elements, null != a || o ? e.length > 1 && n.push.apply(n, e.slice(1)) : n.push.apply(n, e);
                    return n
                }, i = function (e) {
                    return t(e) ? "script" : n(e) ? "stylesheet" : void 0
                }, r = function (e) {
                    return "reload" === e.getAttribute("data-turbolinks-track")
                }, t = function (e) {
                    return "script" === e.tagName.toLowerCase()
                }, n = function (e) {
                    var t;
                    return "style" === (t = e.tagName.toLowerCase()) || "link" === t && "stylesheet" === e.getAttribute("rel")
                }, e
            }()
        }.call(this), function () {
            var t = function (e, t) {
                function r() {
                    this.constructor = e
                }

                for (var i in t)n.call(t, i) && (e[i] = t[i]);
                return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
            }, n = {}.hasOwnProperty;
            e.SnapshotRenderer = function (n) {
                function r(t, n) {
                    this.currentSnapshot = t, this.newSnapshot = n, this.currentHeadDetails = new e.HeadDetails(this.currentSnapshot.head), this.newHeadDetails = new e.HeadDetails(this.newSnapshot.head), this.newBody = this.newSnapshot.body
                }

                return t(r, n), r.prototype.render = function (e) {
                    return this.trackedElementsAreIdentical() ? (this.mergeHead(), this.renderView(function (t) {
                        return function () {
                            return t.replaceBody(), t.focusFirstAutofocusableElement(), e()
                        }
                    }(this))) : this.invalidateView()
                }, r.prototype.mergeHead = function () {
                    return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements()
                }, r.prototype.replaceBody = function () {
                    return this.activateBodyScriptElements(), this.importBodyPermanentElements(), this.assignNewBody()
                }, r.prototype.trackedElementsAreIdentical = function () {
                    return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
                }, r.prototype.copyNewHeadStylesheetElements = function () {
                    var e, t, n, r, i;
                    for (r = this.getNewHeadStylesheetElements(), i = [], t = 0, n = r.length; n > t; t++)e = r[t], i.push(document.head.appendChild(e));
                    return i
                }, r.prototype.copyNewHeadScriptElements = function () {
                    var e, t, n, r, i;
                    for (r = this.getNewHeadScriptElements(), i = [], t = 0, n = r.length; n > t; t++)e = r[t], i.push(document.head.appendChild(this.createScriptElement(e)));
                    return i
                }, r.prototype.removeCurrentHeadProvisionalElements = function () {
                    var e, t, n, r, i;
                    for (r = this.getCurrentHeadProvisionalElements(), i = [], t = 0, n = r.length; n > t; t++)e = r[t], i.push(document.head.removeChild(e));
                    return i
                }, r.prototype.copyNewHeadProvisionalElements = function () {
                    var e, t, n, r, i;
                    for (r = this.getNewHeadProvisionalElements(), i = [], t = 0, n = r.length; n > t; t++)e = r[t], i.push(document.head.appendChild(e));
                    return i
                }, r.prototype.importBodyPermanentElements = function () {
                    var e, t, n, r, i, o;
                    for (r = this.getNewBodyPermanentElements(), o = [], t = 0, n = r.length; n > t; t++)i = r[t], (e = this.findCurrentBodyPermanentElement(i)) ? o.push(i.parentNode.replaceChild(e, i)) : o.push(void 0);
                    return o
                }, r.prototype.activateBodyScriptElements = function () {
                    var e, t, n, r, i, o;
                    for (r = this.getNewBodyScriptElements(), o = [], t = 0, n = r.length; n > t; t++)i = r[t], e = this.createScriptElement(i), o.push(i.parentNode.replaceChild(e, i));
                    return o
                }, r.prototype.assignNewBody = function () {
                    return document.body = this.newBody
                }, r.prototype.focusFirstAutofocusableElement = function () {
                    var e;
                    return null != (e = this.findFirstAutofocusableElement()) ? e.focus() : void 0
                }, r.prototype.getNewHeadStylesheetElements = function () {
                    return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
                }, r.prototype.getNewHeadScriptElements = function () {
                    return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
                }, r.prototype.getCurrentHeadProvisionalElements = function () {
                    return this.currentHeadDetails.getProvisionalElements()
                }, r.prototype.getNewHeadProvisionalElements = function () {
                    return this.newHeadDetails.getProvisionalElements()
                }, r.prototype.getNewBodyPermanentElements = function () {
                    return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]")
                }, r.prototype.findCurrentBodyPermanentElement = function (e) {
                    return document.body.querySelector("#" + e.id + "[data-turbolinks-permanent]")
                }, r.prototype.getNewBodyScriptElements = function () {
                    return this.newBody.querySelectorAll("script")
                }, r.prototype.findFirstAutofocusableElement = function () {
                    return document.body.querySelector("[autofocus]")
                }, r
            }(e.Renderer)
        }.call(this), function () {
            var t = function (e, t) {
                function r() {
                    this.constructor = e
                }

                for (var i in t)n.call(t, i) && (e[i] = t[i]);
                return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
            }, n = {}.hasOwnProperty;
            e.ErrorRenderer = function (e) {
                function n(e) {
                    this.html = e
                }

                return t(n, e), n.prototype.render = function (e) {
                    return this.renderView(function (t) {
                        return function () {
                            return t.replaceDocumentHTML(), t.activateBodyScriptElements(), e()
                        }
                    }(this))
                }, n.prototype.replaceDocumentHTML = function () {
                    return document.documentElement.innerHTML = this.html
                }, n.prototype.activateBodyScriptElements = function () {
                    var e, t, n, r, i, o;
                    for (r = this.getScriptElements(), o = [], t = 0, n = r.length; n > t; t++)i = r[t], e = this.createScriptElement(i), o.push(i.parentNode.replaceChild(e, i));
                    return o
                }, n.prototype.getScriptElements = function () {
                    return document.documentElement.querySelectorAll("script")
                }, n
            }(e.Renderer)
        }.call(this), function () {
            e.View = function () {
                function t(e) {
                    this.delegate = e, this.element = document.documentElement
                }

                return t.prototype.getRootLocation = function () {
                    return this.getSnapshot().getRootLocation()
                }, t.prototype.getSnapshot = function () {
                    return e.Snapshot.fromElement(this.element)
                }, t.prototype.render = function (e, t) {
                    var n, r, i;
                    return i = e.snapshot, n = e.error, r = e.isPreview, this.markAsPreview(r), null != i ? this.renderSnapshot(i, t) : this.renderError(n, t)
                }, t.prototype.markAsPreview = function (e) {
                    return e ? this.element.setAttribute("data-turbolinks-preview", "") : this.element.removeAttribute("data-turbolinks-preview")
                }, t.prototype.renderSnapshot = function (t, n) {
                    return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t))
                }, t.prototype.renderError = function (t, n) {
                    return e.ErrorRenderer.render(this.delegate, n, t)
                }, t
            }()
        }.call(this), function () {
            var t = function (e, t) {
                return function () {
                    return e.apply(t, arguments)
                }
            };
            e.ScrollManager = function () {
                function n(n) {
                    this.delegate = n, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll)
                }

                return n.prototype.start = function () {
                    return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0)
                }, n.prototype.stop = function () {
                    return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0
                }, n.prototype.scrollToElement = function (e) {
                    return e.scrollIntoView()
                }, n.prototype.scrollToPosition = function (e) {
                    var t, n;
                    return t = e.x, n = e.y, window.scrollTo(t, n)
                }, n.prototype.onScroll = function () {
                    return this.updatePosition({x: window.pageXOffset, y: window.pageYOffset})
                }, n.prototype.updatePosition = function (e) {
                    var t;
                    return this.position = e, null != (t = this.delegate) ? t.scrollPositionChanged(this.position) : void 0
                }, n
            }()
        }.call(this), function () {
            e.SnapshotCache = function () {
                function t(e) {
                    this.size = e, this.keys = [], this.snapshots = {}
                }

                var n;
                return t.prototype.has = function (e) {
                    return n(e)in this.snapshots
                }, t.prototype.get = function (e) {
                    var t;
                    if (this.has(e))return t = this.read(e), this.touch(e), t
                }, t.prototype.put = function (e, t) {
                    return this.write(e, t), this.touch(e), t
                }, t.prototype.read = function (e) {
                    var t;
                    return t = n(e), this.snapshots[t]
                }, t.prototype.write = function (e, t) {
                    var r;
                    return r = n(e), this.snapshots[r] = t
                }, t.prototype.touch = function (e) {
                    var t, r;
                    return r = n(e), t = this.keys.indexOf(r), t > -1 && this.keys.splice(t, 1), this.keys.unshift(r), this.trim()
                }, t.prototype.trim = function () {
                    var e, t, n, r, i;
                    for (r = this.keys.splice(this.size), i = [], e = 0, n = r.length; n > e; e++)t = r[e], i.push(delete this.snapshots[t]);
                    return i
                }, n = function (t) {
                    return e.Location.wrap(t).toCacheKey()
                }, t
            }()
        }.call(this), function () {
            var t = function (e, t) {
                return function () {
                    return e.apply(t, arguments)
                }
            };
            e.Visit = function () {
                function n(n, r, i) {
                    this.controller = n, this.action = i, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(r), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {}
                }

                var r;
                return n.prototype.start = function () {
                    return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0
                }, n.prototype.cancel = function () {
                    var e;
                    return "started" === this.state ? (null != (e = this.request) && e.cancel(), this.cancelRender(), this.state = "canceled") : void 0
                }, n.prototype.complete = function () {
                    var e;
                    return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof(e = this.adapter).visitCompleted && e.visitCompleted(this), this.controller.visitCompleted(this)) : void 0
                }, n.prototype.fail = function () {
                    var e;
                    return "started" === this.state ? (this.state = "failed", "function" == typeof(e = this.adapter).visitFailed ? e.visitFailed(this) : void 0) : void 0
                }, n.prototype.changeHistory = function () {
                    var e, t;
                    return this.historyChanged ? void 0 : (e = this.location.isEqualTo(this.referrer) ? "replace" : this.action, t = r(e), this.controller[t](this.location, this.restorationIdentifier), this.historyChanged = !0)
                }, n.prototype.issueRequest = function () {
                    return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0
                }, n.prototype.getCachedSnapshot = function () {
                    var e;
                    return !(e = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !e.hasAnchor(this.location.anchor) || "restore" !== this.action && !e.isPreviewable() ? void 0 : e
                }, n.prototype.hasCachedSnapshot = function () {
                    return null != this.getCachedSnapshot()
                }, n.prototype.loadCachedSnapshot = function () {
                    var e, t;
                    return (t = this.getCachedSnapshot()) ? (e = this.shouldIssueRequest(), this.render(function () {
                        var n;
                        return this.cacheSnapshot(), this.controller.render({
                            snapshot: t, isPreview: e
                        }, this.performScroll), "function" == typeof(n = this.adapter).visitRendered && n.visitRendered(this), e ? void 0 : this.complete()
                    })) : void 0
                }, n.prototype.loadResponse = function () {
                    return null != this.response ? this.render(function () {
                        var e, t;
                        return this.cacheSnapshot(), this.request.failed ? (this.controller.render({error: this.response}, this.performScroll), "function" == typeof(e = this.adapter).visitRendered && e.visitRendered(this), this.fail()) : (this.controller.render({snapshot: this.response}, this.performScroll), "function" == typeof(t = this.adapter).visitRendered && t.visitRendered(this), this.complete())
                    }) : void 0
                }, n.prototype.followRedirect = function () {
                    return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0
                }, n.prototype.requestStarted = function () {
                    var e;
                    return this.recordTimingMetric("requestStart"), "function" == typeof(e = this.adapter).visitRequestStarted ? e.visitRequestStarted(this) : void 0
                }, n.prototype.requestProgressed = function (e) {
                    var t;
                    return this.progress = e, "function" == typeof(t = this.adapter).visitRequestProgressed ? t.visitRequestProgressed(this) : void 0
                }, n.prototype.requestCompletedWithResponse = function (t, n) {
                    return this.response = t, null != n && (this.redirectedToLocation = e.Location.wrap(n)), this.adapter.visitRequestCompleted(this)
                }, n.prototype.requestFailedWithStatusCode = function (e, t) {
                    return this.response = t, this.adapter.visitRequestFailedWithStatusCode(this, e)
                }, n.prototype.requestFinished = function () {
                    var e;
                    return this.recordTimingMetric("requestEnd"), "function" == typeof(e = this.adapter).visitRequestFinished ? e.visitRequestFinished(this) : void 0
                }, n.prototype.performScroll = function () {
                    return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0)
                }, n.prototype.scrollToRestoredPosition = function () {
                    var e, t;
                    return e = null != (t = this.restorationData) ? t.scrollPosition : void 0, null != e ? (this.controller.scrollToPosition(e), !0) : void 0
                }, n.prototype.scrollToAnchor = function () {
                    return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0
                }, n.prototype.scrollToTop = function () {
                    return this.controller.scrollToPosition({x: 0, y: 0})
                }, n.prototype.recordTimingMetric = function (e) {
                    var t;
                    return null != (t = this.timingMetrics)[e] ? t[e] : t[e] = (new Date).getTime()
                }, n.prototype.getTimingMetrics = function () {
                    return e.copyObject(this.timingMetrics)
                }, r = function (e) {
                    switch (e) {
                        case"replace":
                            return "replaceHistoryWithLocationAndRestorationIdentifier";
                        case"advance":
                        case"restore":
                            return "pushHistoryWithLocationAndRestorationIdentifier"
                    }
                }, n.prototype.shouldIssueRequest = function () {
                    return "restore" !== this.action || !this.hasCachedSnapshot()
                }, n.prototype.cacheSnapshot = function () {
                    return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0)
                }, n.prototype.render = function (e) {
                    return this.cancelRender(), this.frame = requestAnimationFrame(function (t) {
                        return function () {
                            return t.frame = null, e.call(t)
                        }
                    }(this))
                }, n.prototype.cancelRender = function () {
                    return this.frame ? cancelAnimationFrame(this.frame) : void 0
                }, n
            }()
        }.call(this), function () {
            var t = function (e, t) {
                return function () {
                    return e.apply(t, arguments)
                }
            };
            e.Controller = function () {
                function n() {
                    this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache()
                }

                return n.prototype.start = function () {
                    return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0
                }, n.prototype.disable = function () {
                    return this.enabled = !1
                }, n.prototype.stop = function () {
                    return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0
                }, n.prototype.clearCache = function () {
                    return this.cache = new e.SnapshotCache(10)
                }, n.prototype.visit = function (t, n) {
                    var r, i;
                    return null == n && (n = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (r = null != (i = n.action) ? i : "advance", this.adapter.visitProposedToLocationWithAction(t, r)) : window.location = t : void 0
                }, n.prototype.startVisitToLocationWithAction = function (t, n, r) {
                    var i;
                    return e.supported ? (i = this.getRestorationDataForIdentifier(r), this.startVisit(t, n, {restorationData: i})) : window.location = t
                }, n.prototype.startHistory = function () {
                    return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier)
                }, n.prototype.stopHistory = function () {
                    return this.history.stop()
                }, n.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, n) {
                    return this.restorationIdentifier = n, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier)
                }, n.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, n) {
                    return this.restorationIdentifier = n, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier)
                }, n.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, n) {
                    var r;
                    return this.restorationIdentifier = n, this.enabled ? (r = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
                        restorationIdentifier: this.restorationIdentifier,
                        restorationData: r,
                        historyChanged: !0
                    }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated()
                }, n.prototype.getCachedSnapshotForLocation = function (e) {
                    var t;
                    return t = this.cache.get(e), t ? t.clone() : void 0
                }, n.prototype.shouldCacheSnapshot = function () {
                    return this.view.getSnapshot().isCacheable()
                }, n.prototype.cacheSnapshot = function () {
                    var e;
                    return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), e = this.view.getSnapshot(), this.cache.put(this.lastRenderedLocation, e.clone())) : void 0
                }, n.prototype.scrollToAnchor = function (e) {
                    var t;
                    return (t = document.getElementById(e)) ? this.scrollToElement(t) : this.scrollToPosition({
                        x: 0,
                        y: 0
                    })
                }, n.prototype.scrollToElement = function (e) {
                    return this.scrollManager.scrollToElement(e)
                }, n.prototype.scrollToPosition = function (e) {
                    return this.scrollManager.scrollToPosition(e)
                }, n.prototype.scrollPositionChanged = function (e) {
                    var t;
                    return t = this.getCurrentRestorationData(), t.scrollPosition = e
                }, n.prototype.render = function (e, t) {
                    return this.view.render(e, t)
                }, n.prototype.viewInvalidated = function () {
                    return this.adapter.pageInvalidated()
                }, n.prototype.viewWillRender = function (e) {
                    return this.notifyApplicationBeforeRender(e)
                }, n.prototype.viewRendered = function () {
                    return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender()
                }, n.prototype.pageLoaded = function () {
                    return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad()
                }, n.prototype.clickCaptured = function () {
                    return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1)
                }, n.prototype.clickBubbled = function (e) {
                    var t, n, r;
                    return this.enabled && this.clickEventIsSignificant(e) && (n = this.getVisitableLinkForNode(e.target)) && (r = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, r) ? (e.preventDefault(), t = this.getActionForLink(n), this.visit(r, {action: t})) : void 0
                }, n.prototype.applicationAllowsFollowingLinkToLocation = function (e, t) {
                    var n;
                    return n = this.notifyApplicationAfterClickingLinkToLocation(e, t), !n.defaultPrevented
                }, n.prototype.applicationAllowsVisitingLocation = function (e) {
                    var t;
                    return t = this.notifyApplicationBeforeVisitingLocation(e), !t.defaultPrevented
                }, n.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, n) {
                    return e.dispatch("turbolinks:click", {target: t, data: {url: n.absoluteURL}, cancelable: !0})
                }, n.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
                    return e.dispatch("turbolinks:before-visit", {data: {url: t.absoluteURL}, cancelable: !0})
                }, n.prototype.notifyApplicationAfterVisitingLocation = function (t) {
                    return e.dispatch("turbolinks:visit", {data: {url: t.absoluteURL}})
                }, n.prototype.notifyApplicationBeforeCachingSnapshot = function () {
                    return e.dispatch("turbolinks:before-cache")
                }, n.prototype.notifyApplicationBeforeRender = function (t) {
                    return e.dispatch("turbolinks:before-render", {data: {newBody: t}})
                }, n.prototype.notifyApplicationAfterRender = function () {
                    return e.dispatch("turbolinks:render")
                }, n.prototype.notifyApplicationAfterPageLoad = function (t) {
                    return null == t && (t = {}), e.dispatch("turbolinks:load", {
                        data: {
                            url: this.location.absoluteURL,
                            timing: t
                        }
                    })
                }, n.prototype.startVisit = function (e, t, n) {
                    var r;
                    return null != (r = this.currentVisit) && r.cancel(), this.currentVisit = this.createVisit(e, t, n), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(e)
                }, n.prototype.createVisit = function (t, n, r) {
                    var i, o, a, s, u;
                    return o = null != r ? r : {}, s = o.restorationIdentifier, a = o.restorationData, i = o.historyChanged, u = new e.Visit(this, t, n), u.restorationIdentifier = null != s ? s : e.uuid(), u.restorationData = e.copyObject(a), u.historyChanged = i, u.referrer = this.location, u
                }, n.prototype.visitCompleted = function (e) {
                    return this.notifyApplicationAfterPageLoad(e.getTimingMetrics())
                }, n.prototype.clickEventIsSignificant = function (e) {
                    return !(e.defaultPrevented || e.target.isContentEditable || e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)
                }, n.prototype.getVisitableLinkForNode = function (t) {
                    return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0
                }, n.prototype.getVisitableLocationForLink = function (t) {
                    var n;
                    return n = new e.Location(t.getAttribute("href")), this.locationIsVisitable(n) ? n : void 0
                }, n.prototype.getActionForLink = function (e) {
                    var t;
                    return null != (t = e.getAttribute("data-turbolinks-action")) ? t : "advance"
                }, n.prototype.nodeIsVisitable = function (t) {
                    var n;
                    return !(n = e.closest(t, "[data-turbolinks]")) || "false" !== n.getAttribute("data-turbolinks")
                }, n.prototype.locationIsVisitable = function (e) {
                    return e.isPrefixedBy(this.view.getRootLocation()) && e.isHTML()
                }, n.prototype.getCurrentRestorationData = function () {
                    return this.getRestorationDataForIdentifier(this.restorationIdentifier)
                }, n.prototype.getRestorationDataForIdentifier = function (e) {
                    var t;
                    return null != (t = this.restorationData)[e] ? t[e] : t[e] = {}
                }, n
            }()
        }.call(this), function () {
            var t, n, r;
            e.start = function () {
                return n() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0
            }, n = function () {
                return null == window.Turbolinks && (window.Turbolinks = e), r()
            }, t = function () {
                var t;
                return t = new e.Controller, t.adapter = new e.BrowserAdapter(t), t
            }, (r = function () {
                return window.Turbolinks === e
            })() && e.start()
        }.call(this)
    }).call(this), "object" == typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd && define(e)
}.call(this), function () {
}.call(this);