"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tertiary = exports.Secondary = exports.Primary = exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _Button = require("./Button");

// Button.stories.js | Button.stories.jsx
var _default = {
  title: 'Components/Test',
  component: _Button.Button,
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
    color: {
      control: 'color'
    },
    padding: {
      name: 'padding',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: 'Hello',
      description: 'demo description',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'Hello'
        }
      },
      control: {
        type: 'text'
      }
    }
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true
  }
}; //👇 We create a “template” of how args map to rendering

exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.Button, args);
}; //👇 Each story then reuses that template


var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  label: 'Button'
};
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = (0, _objectSpread2.default)((0, _objectSpread2.default)({
  primary: false
}, Primary.args), {}, {
  label: '😄👍😍💯'
});
var Tertiary = Template.bind({});
exports.Tertiary = Tertiary;
Tertiary.args = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, Primary.args), {}, {
  label: '📚📕📈🤓'
});