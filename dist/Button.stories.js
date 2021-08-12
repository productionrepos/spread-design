"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllButtons = exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = require("./Button");

var _Icon = require("./Icon");

var _StoryLinkWrapper = require("./StoryLinkWrapper");

var _templateObject;

var CustomButton = _styledComponents.default.button(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  border: 1px solid green;\n  background: lightgreen;\n  color: rebeccapurple;\n  padding: 1em;\n  font-size: 1.2em;\n"])));

function ButtonWrapper(props) {
  return /*#__PURE__*/_react.default.createElement(CustomButton, props);
}

var _default = {
  title: 'Design System/Button',
  component: _Button.Button
};
exports.default = _default;

var AllButtons = function AllButtons(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "primary"
  }, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "secondary"
  }, "Secondary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "tertiary"
  }, "Tertiary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    appearance: "outline"
  }, "Outline"));
};

exports.AllButtons = AllButtons;
AllButtons.storyName = 'all buttons'; // export const buttonWrapper = (args) => (
//   <div>
//     <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
//     <br />
//     <Button ButtonWrapper={ButtonWrapper} appearance="primary">
//       Primary
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="secondary">
//       Secondary
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="tertiary">
//       Tertiary
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="outline">
//       Outline
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="primaryOutline">
//       Outline primary
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="secondaryOutline">
//       Outline secondary
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="primary" isDisabled>
//       Disabled
//     </Button>
//     <br />
//     <Button ButtonWrapper={ButtonWrapper} appearance="primary" isLoading>
//       Primary
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="secondary" isLoading>
//       Secondary
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="tertiary" isLoading>
//       Tertiary
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="outline" isLoading>
//       Outline
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="outline" isLoading loadingText="Custom...">
//       Outline
//     </Button>
//     <br />
//     <Button ButtonWrapper={ButtonWrapper} appearance="primary" size="small">
//       Primary
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="secondary" size="small">
//       Secondary
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="tertiary" size="small">
//       Tertiary
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small">
//       Outline
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="primary" isDisabled size="small">
//       Disabled
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small" containsIcon>
//       <Icon icon="link" aria-label="Link" />
//     </Button>
//     <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small">
//       <Icon icon="link" />
//       Link
//     </Button>
//   </div>
// );
// buttonWrapper.storyName='button wrapper';
// export const AnchorWrapper = (args) => (
//   <div>
//     <StoryLinkWrapper to="http://storybook.js.org">Original Link Wrapper</StoryLinkWrapper>
//     <br />
//     <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" href="http://storybook.js.org">
//       Primary
//     </Button>
//     <Button ButtonWrapper={StoryLinkWrapper} appearance="secondary" href="http://storybook.js.org">
//       Secondary
//     </Button>
//     <Button ButtonWrapper={StoryLinkWrapper} appearance="tertiary" href="http://storybook.js.org">
//       Tertiary
//     </Button>
//     <Button ButtonWrapper={StoryLinkWrapper} appearance="outline" href="http://storybook.js.org">
//       Outline
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="primaryOutline"
//       href="http://storybook.js.org"
//     >
//       Outline primary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="secondaryOutline"
//       href="http://storybook.js.org"
//     >
//       Outline secondary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="primary"
//       isDisabled
//       href="http://storybook.js.org"
//     >
//       Disabled
//     </Button>
//     <br />
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="primary"
//       isLoading
//       href="http://storybook.js.org"
//     >
//       Primary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="secondary"
//       isLoading
//       href="http://storybook.js.org"
//     >
//       Secondary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="tertiary"
//       isLoading
//       href="http://storybook.js.org"
//     >
//       Tertiary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="outline"
//       isLoading
//       href="http://storybook.js.org"
//     >
//       Outline
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="outline"
//       isLoading
//       loadingText="Custom..."
//       href="http://storybook.js.org"
//     >
//       Outline
//     </Button>
//     <br />
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="primary"
//       size="small"
//       href="http://storybook.js.org"
//     >
//       Primary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="secondary"
//       size="small"
//       href="http://storybook.js.org"
//     >
//       Secondary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="tertiary"
//       size="small"
//       href="http://storybook.js.org"
//     >
//       Tertiary
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="outline"
//       size="small"
//       href="http://storybook.js.org"
//     >
//       Outline
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="primary"
//       isDisabled
//       size="small"
//       href="http://storybook.js.org"
//     >
//       Disabled
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="outline"
//       size="small"
//       containsIcon
//       href="http://storybook.js.org"
//     >
//       <Icon icon="link" aria-label="Link" />
//     </Button>
//     <Button
//       ButtonWrapper={StoryLinkWrapper}
//       appearance="outline"
//       size="small"
//       href="http://storybook.js.org"
//     >
//       <Icon icon="link" />
//       Link
//     </Button>
//   </div>
// );
// AnchorWrapper.storyName= 'anchor wrapper';