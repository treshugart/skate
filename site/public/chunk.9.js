webpackJsonp([9], {
  141: function(n, t, e) {
    'use strict';
    function o(n) {
      return n && n.__esModule ? n : { default: n };
    }
    function r(n, t) {
      if (!(n instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function c(n, t) {
      if (!n)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? n : t;
    }
    function i(n, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (n.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: n,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(n, t)
            : (n.__proto__ = t));
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
    var a,
      l,
      s,
      u = (function() {
        function n(n, t) {
          for (var e = 0; e < t.length; e++) {
            var o = t[e];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(n, o.key, o);
          }
        }
        return function(t, e, o) {
          return e && n(t.prototype, e), o && n(t, o), t;
        };
      })(),
      d = (function(n, t) {
        return Object.freeze(
          Object.defineProperties(n, { raw: { value: Object.freeze(t) } })
        );
      })(
        [
          '\n      ',
          '\n      <x-layout title="Context">\n        <p>\n          The <code>withContext</code> mixin allows you to use\n          <code>context</code> like in <a href="https://reactjs.org/">React</a>.\n        </p>\n        <x-runnable\n          code="',
          '"\n          html="',
          '"\n        ></x-runnable>\n      </x-layout>\n    '
        ],
        [
          '\n      ',
          '\n      <x-layout title="Context">\n        <p>\n          The <code>withContext</code> mixin allows you to use\n          <code>context</code> like in <a href="https://reactjs.org/">React</a>.\n        </p>\n        <x-runnable\n          code="',
          '"\n          html="',
          '"\n        ></x-runnable>\n      </x-layout>\n    '
        ]
      );
    e(29), e(26);
    var f = e(7),
      p = e(24);
    e(142);
    var h = e(143),
      b = o(h),
      x = e(144),
      y = o(x),
      w =
        (0, f.define)(
          ((s = l = (function(n) {
            function t() {
              return (
                r(this, t),
                c(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              i(t, n),
              u(t, [
                {
                  key: 'render',
                  value: function() {
                    return this.$(d, this.$style, b.default, y.default);
                  }
                }
              ]),
              t
            );
          })(p.Component)),
          (l.is = 'x-pages-mixins-context'),
          (a = s))
        ) || a;
    t.default = w;
  },
  142: function(n, t, e) {
    'use strict';
    function o(n, t) {
      if (!(n instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function r(n, t) {
      if (!n)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? n : t;
    }
    function c(n, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (n.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: n,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(n, t)
            : (n.__proto__ = t));
    }
    var i = (function() {
        function n(n, t) {
          for (var e = 0; e < t.length; e++) {
            var o = t[e];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(n, o.key, o);
          }
        }
        return function(t, e, o) {
          return e && n(t.prototype, e), o && n(t, o), t;
        };
      })(),
      a = e(7),
      l = (function(n) {
        function t() {
          var n, e, c, i;
          o(this, t);
          for (var a = arguments.length, l = Array(a), s = 0; s < a; s++)
            l[s] = arguments[s];
          return (
            (e = c = r(
              this,
              (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                n,
                [this].concat(l)
              )
            )),
            (c.context = {
              background: 'white',
              color: 'black',
              margin: '10px 0',
              padding: '10px'
            }),
            (i = e),
            r(c, i)
          );
        }
        return (
          c(t, n),
          i(t, [
            {
              key: 'connectedCallback',
              value: function() {
                this.attachShadow({ mode: 'open' }).innerHTML =
                  '\n      <slot></slot>\n      <with-context-descendant>\n        ...and shadow DOM!\n      </with-context-descendant>\n    ';
              }
            }
          ]),
          t
        );
      })((0, a.withContext)()),
      s = (function(n) {
        function t() {
          return (
            o(this, t),
            r(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          c(t, n),
          i(t, [
            {
              key: 'connectedCallback',
              value: function() {
                var n = this.context,
                  t = n.background,
                  e = n.color,
                  o = n.margin,
                  r = n.padding;
                this.attachShadow({ mode: 'open' }).innerHTML =
                  '\n      <style>\n        :host {\n          background: ' +
                  t +
                  ';\n          color: ' +
                  e +
                  ';\n          display: block;\n          margin: ' +
                  o +
                  ';\n          padding: ' +
                  r +
                  ';\n        }\n      </style>\n      <slot></slot>\n    ';
              }
            }
          ]),
          t
        );
      })((0, a.withContext)());
    customElements.define('with-context', l),
      customElements.define('with-context-descendant', s);
  },
  143: function(n, t) {
    n.exports =
      "import { withContext } from 'skatejs';\n\nclass WithContext extends withContext() {\n  context = {\n    background: 'white',\n    color: 'black',\n    margin: '10px 0',\n    padding: '10px'\n  };\n  connectedCallback() {\n    this.attachShadow({ mode: 'open' }).innerHTML = `\n      <slot></slot>\n      <with-context-descendant>\n        ...and shadow DOM!\n      </with-context-descendant>\n    `;\n  }\n}\n\nclass WithContextDescendant extends withContext() {\n  connectedCallback() {\n    const { background, color, margin, padding } = this.context;\n    this.attachShadow({ mode: 'open' }).innerHTML = `\n      <style>\n        :host {\n          background: ${background};\n          color: ${color};\n          display: block;\n          margin: ${margin};\n          padding: ${padding};\n        }\n      </style>\n      <slot></slot>\n    `;\n  }\n}\n\ncustomElements.define('with-context', WithContext);\ncustomElements.define('with-context-descendant', WithContextDescendant);\n";
  },
  144: function(n, t) {
    n.exports =
      '<with-context>\n  <with-context-descendant>\n    Works with light DOM...\n  </with-context-descendant>\n</with-context>\n';
  }
});
