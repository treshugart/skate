(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{259:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,r,i,s=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),p=function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(['\n      <x-layout title="Migrating between major versions">\n        <x-marked src="','"></x-marked>\n      </x-layout>\n    '],['\n      <x-layout title="Migrating between major versions">\n        <x-marked src="','"></x-marked>\n      </x-layout>\n    ']);t(25),t(28);var a=t(8),l=t(21);var m=(0,a.define)((i=r=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,l.Component),s(e,[{key:"render",value:function(){return this.$(p,"\n          This is a guide for migrating between major versions.\n\n          ## 4.x to 5.x\n\n          ### Component base class\n\n          ```js\n          - import { h, Component, define } from 'skatejs';\n          + import { withComponent } from 'skatejs';\n          + import { h } from 'preact';\n          + import withPreact from '@skatejs/renderer-preact';\n\n          + const Component = withComponent(withPreact());\n\n            class Hello extends Component {\n              static is = 'x-hello';\n              render() {\n                return <div>Hello <slot/></div>;\n              }\n            }\n\n            define(MyElement);\n          ```\n\n          ### Props API\n\n          ___The ability to use a static getter for props is now back in 5.1!___\n\n          - In 5.0, you must explicitly set the static props property.\n          - The ability to use a getter has been restored in 5.1.\n\n          ```js\n            class Hello extends Component {\n              // This doesn't work in 5.0, but does in 5.1.\n          -   static get props() {\n          -     return {\n          -       who: prop.string()\n          -     }\n          -   }\n\n              // You can do this in both 5.0 and 5.1.\n          +   static props = {\n          +     who: props.string\n          +   };\n            }\n          ```\n\n\n          #### Configuring component props\n\n          ```js\n          - import { define, Component, prop } from 'skatejs';\n          + import { withComponent, props } from 'skatejs';\n            import { h } from 'preact';\n            import withPreact from '@skatejs/renderer-preact';\n\n            const Component = withComponent(withPreact());\n\n            class Hello extends Component {\n              static is = 'x-hello';\n              static props = {\n          -     who: prop.string()\n          +     who: props.string\n              };\n              render() {\n                return <div>Hello {this.who}</div>;\n              }\n            }\n\n            define(MyElement);\n          ```\n\n          #### Overriding pre-defined props\n\n          Built-in props used to be exposed as functions that would mix in whatever object you gave it. Now, it's just an object and if you want to merge objects, you can use the built-in object spread operator, or `Object.assign()`.\n\n          ```js\n          - import { define, Component, prop } from 'skatejs';\n          + import { withComponent, props } from 'skatejs';\n            import { h } from 'preact';\n            import withPreact from '@skatejs/renderer-preact';\n\n            const Component = withComponent(withPreact())\n\n            class Hello extends Component {\n              static is = 'x-hello';\n              static props = {\n          -     who: prop.string({ attributes:true })\n          +     who: { ...props.string, ...{ attributes: true } }\n              };\n              render() {\n                return <div>Hello {this.who}</div>;\n              }\n            }\n\n            define(MyElement);\n          ```\n\n          > Built-in props still reflect to attributes like before, but only one-way. If an attribute is set, it will set the linked property. However, if the property is set, it will _not_ set the linked attribute. This prevents unwanted mutations to the DOM and keeps the performance bar high.\n\n          #### Props configuration\n\n          ```js\n            type PropTypeAttributeIdentifier = boolean | string;\n            type PropTypeAttribute =\n              | PropTypeAttributeIdentifier\n              | {\n                  source?: PropTypeAttributeIdentifier,\n                  target?: PropTypeAttributeIdentifier\n                };\n            type PropOptions = {\n              attribute?: PropTypeAttribute,\n              coerce?: Function,\n              default?: any,\n              deserialize?: (val: string) => mixed,\n              serialize?: (val: mixed) => null | string\n          -   get?: <R>(elem: El, data: { name: string; internalValue: T; }) => R;\n          -   set?: (elem: El, data: { name: string; newValue: T | null | undefined; oldValue: T | null | undefined; }) => void;\n          -   initial?: T | null | undefined | ((elem: El, data: { name: string; }) => T | null | undefined);\n            }\n          ```\n\n          #### Change / get props\n\n          ```js\n          - import { withComponent, props, prop } from 'skatejs';\n          + import { withComponent, props } from 'skatejs';\n            import { h } from 'preact';\n            import withPreact from '@skatejs/renderer-preact';\n\n            const Component = withComponent(withPreact());\n\n            class Hello extends Component {\n              static is = 'x-hello';\n              static props = {\n                myArray: props.array,\n                myBoolean: props.boolean\n              };\n\n              // Some internal property.\n              someNonPublicApiProp = 'Who are you?';\n\n              _changeProps() {\n          -     props(this, { myBoolean: true });\n          +     this.props = { myBoolean: true };\n\n                // Implementation detail -> props on the instance is getter / setter.\n                // Or just directly.\n                this.myBoolean = true\n\n          -     console.log( props(this) ) // { myArray: [], myBoolean: true }\n          +     console.log( this.props ) // { myArray: [], myBoolean: true }\n\n          -     props( this, {myArray: ['hello']} )\n          +     this.props = { myArray: ['hello'] }\n\n                // Or just directly.\n                this.myArray = ['hello'];\n\n          -     console.log(props(this)) // { myArray: ['hello'], myBoolean: true }\n          +     console.log(this.props) // { myArray: ['hello'], myBoolean: true }\n\n                // this will not trigger re-render\n                this.someNonPublicApiProp = 'Im David'\n              }\n              render() {\n                return <div>Hello {this.myBoolean}</div>;\n              }\n            }\n\n            define(MyElement);\n          ```\n\n          ### Return array of VNodes with Preact as renderer\n\n          ```js\n          - import { Component, define, h } from 'skatejs';\n          + import { define, withComponent } from 'skatejs';\n          + import { h } from 'preact';\n          + import withPreact from '@skatejs/renderer-preact';\n\n          + const Component = withComponent(withPreact());\n\n            class MyElement extends Component {\n              static is = 'x-hello';\n              render() {\n          -     return [\n          -       <div>Hello <slot/></div>,\n          -       <div>Yo what's up?</div>\n          -     ];\n          +     return <div>\n          +       <div>Hello <slot/></div>\n          +       <div>Yo what's up?</div>\n          +     </div>;\n              }\n            }\n\n            define(MyElement);\n          ```\n\n          > If you decide to use the [LitHTML renderer](/renderers/with-lit-html) you can return a fragment of nodes by simply omitting a wrapper.\n        ")}}]),e}(),r.is="x-pages-migrating",o=i))||o;e.default=m}}]);