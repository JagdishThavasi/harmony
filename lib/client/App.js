"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _component = _interopRequireDefault(require("@loadable/component"));

require("./main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const A = (0, _component.default)({
  resolved: {},

  chunkName() {
    return "letters-A";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }

    return false;
  },

  importAsync: () => Promise.resolve().then(() => _interopRequireWildcard(require('./letters/A'))),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("./letters/A");
    }

    return eval('require.resolve')("./letters/A");
  }

});
const B = (0, _component.default)({
  resolved: {},

  chunkName() {
    return "letters-B";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }

    return false;
  },

  importAsync: () => Promise.resolve().then(() => _interopRequireWildcard(require('./letters/B'))),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("./letters/B");
    }

    return eval('require.resolve')("./letters/B");
  }

});
const C = (0, _component.default)({
  resolved: {},

  chunkName() {
    return "letters-C";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }

    return false;
  },

  importAsync: () => Promise.resolve().then(() => _interopRequireWildcard(require('./letters/C'))),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("./letters/C");
    }

    return eval('require.resolve')("./letters/C");
  }

});
const D = (0, _component.default)({
  resolved: {},

  chunkName() {
    return "letters-D";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }

    return false;
  },

  importAsync: () => Promise.resolve().then(() => _interopRequireWildcard(require('./letters/D'))),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("./letters/D");
    }

    return eval('require.resolve')("./letters/D");
  }

});
const E = (0, _component.default)({
  resolved: {},

  chunkName() {
    return "letters-E";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }

    return false;
  },

  importAsync: () => Promise.resolve().then(() => _interopRequireWildcard(require('./letters/E'))),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("./letters/E");
    }

    return eval('require.resolve')("./letters/E");
  }

}, {
  ssr: false
});
const X = (0, _component.default)({
  resolved: {},

  chunkName(props) {
    return `letters-${props.letter}`.replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g, "-");
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }

    return false;
  },

  importAsync: props => Promise.resolve(`./letters/${props.letter}`).then(s => _interopRequireWildcard(require(s))),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve(props) {
    if (require.resolveWeak) {
      return require.resolveWeak(`./letters/${props.letter}`);
    }

    return eval('require.resolve')(`./letters/${props.letter}`);
  }

});
const Sub = (0, _component.default)({
  resolved: {},

  chunkName(props) {
    return `letters-${props.letter}-file`.replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g, "-");
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }

    return false;
  },

  importAsync: props => Promise.resolve(`./letters/${props.letter}/file`).then(s => _interopRequireWildcard(require(s))),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve(props) {
    if (require.resolveWeak) {
      return require.resolveWeak(`./letters/${props.letter}/file`);
    }

    return eval('require.resolve')(`./letters/${props.letter}/file`);
  }

});
const RootSub = (0, _component.default)({
  resolved: {},

  chunkName(props) {
    return `${props.letter}-file`.replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g, "-");
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }

    return false;
  },

  importAsync: props => Promise.resolve(`./${props.letter}/file`).then(s => _interopRequireWildcard(require(s))),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve(props) {
    if (require.resolveWeak) {
      return require.resolveWeak(`./${props.letter}/file`);
    }

    return eval('require.resolve')(`./${props.letter}/file`);
  }

}); // Load the 'G' component twice: once in SSR and once fully client-side

const GClient = (0, _component.default)({
  resolved: {},

  chunkName() {
    return "letters-G";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }

    return false;
  },

  importAsync: () => Promise.resolve().then(() => _interopRequireWildcard(require('./letters/G'))),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("./letters/G");
    }

    return eval('require.resolve')("./letters/G");
  }

}, {
  ssr: false,
  fallback: /*#__PURE__*/_react.default.createElement("span", {
    className: "loading-state"
  }, "ssr: false - Loading...")
});
const GServer = (0, _component.default)({
  resolved: {},

  chunkName() {
    return "letters-G";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }

    return false;
  },

  importAsync: () => Promise.resolve().then(() => _interopRequireWildcard(require('./letters/G'))),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("./letters/G");
    }

    return eval('require.resolve')("./letters/G");
  }

}, {
  ssr: true,
  fallback: /*#__PURE__*/_react.default.createElement("span", {
    className: "loading-state"
  }, "ssr: true - Loading...")
}); // We keep some references to prevent uglify remove

A.C = C;
A.D = D;

const Moment = _component.default.lib({
  resolved: {},

  chunkName() {
    return "moment";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }

    return false;
  },

  importAsync: () => Promise.resolve().then(() => _interopRequireWildcard(require('moment'))),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("moment");
    }

    return eval('require.resolve')("moment");
  }

}, {
  resolveComponent: moment => moment.default || moment
});

const App = () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(A, null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(B, null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(X, {
  letter: "A"
}), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(X, {
  letter: "F"
}), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(E, null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(GClient, {
  prefix: "ssr: false"
}), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(GServer, {
  prefix: "ssr: true"
}), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(Sub, {
  letter: "Z"
}), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(RootSub, {
  letter: "Y"
}), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(Moment, null, moment => moment().format('HH:mm')));

var _default = App;
exports.default = _default;