"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

require("./button.css");

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var primary = _ref.primary,
      backgroundColor = _ref.backgroundColor,
      size = _ref.size,
      label = _ref.label,
      color = _ref.color,
      padding = _ref.padding,
      props = (0, _objectWithoutProperties2.default)(_ref, ["primary", "backgroundColor", "size", "label", "color", "padding"]);
  var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return /*#__PURE__*/_react.default.createElement("button", Object.assign({
    type: "button",
    className: ['storybook-button', "storybook-button--".concat(size), mode].join(' '),
    style: {
      backgroundColor: backgroundColor,
      color: color,
      padding: padding
    }
  }, props), label);
};

exports.Button = Button;
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
};