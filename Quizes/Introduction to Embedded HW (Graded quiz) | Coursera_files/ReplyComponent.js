define("bundles/discussions/components/repliesList/ReplyComponent",["require","exports","module","underscore","jquery","react","react-dom","classnames","bundles/cml/components/CML","bundles/discussions/components/profiles/ProfileArea","bundles/discussions/components/ProfileName","bundles/discussions/components/AdminDetails","bundles/discussions/components/repliesList/ReplyCMLEdit","bundles/discussions/components/repliesList/JumpToReply","bundles/discussions/components/Badge","bundles/discussions/components/CreatedTimeLink","bundles/discussions/components/EditIndicator","bundles/discussions/components/Upvote","bundles/discussions/components/ModerationDropdown","bundles/discussions/components/SoftDelete","bundles/discussions/lib/propTypes","js/lib/coursera.react-intl","i18n!nls/discussions","css!./__styles__/ReplyComponent"],function(require,exports,module){"use strict";function _defaults(e,n){for(var r=Object.getOwnPropertyNames(n),o=0;o<r.length;o++){var s=r[o],t=Object.getOwnPropertyDescriptor(n,s);t&&t.configurable&&void 0===e[s]&&Object.defineProperty(e,s,t)}return e}function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(o,e){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?o:e}function _inherits(o,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(o,e):_defaults(o,e))}var t,n,_=require("underscore"),$=require("jquery"),e=require("react"),L=require("react-dom"),o=require("classnames"),p=require("bundles/cml/components/CML"),a=require("bundles/discussions/components/profiles/ProfileArea"),d=require("bundles/discussions/components/ProfileName"),m=require("bundles/discussions/components/AdminDetails"),u=require("bundles/discussions/components/repliesList/ReplyCMLEdit"),c=require("bundles/discussions/components/repliesList/JumpToReply"),f=require("bundles/discussions/components/Badge"),y=require("bundles/discussions/components/CreatedTimeLink"),b=require("bundles/discussions/components/EditIndicator"),h=require("bundles/discussions/components/Upvote"),g=require("bundles/discussions/components/ModerationDropdown"),E=require("bundles/discussions/components/SoftDelete"),T=require("bundles/discussions/lib/propTypes"),v=T.replyPropType,w=require("js/lib/coursera.react-intl"),r=w.FormattedMessage,s=require("i18n!nls/discussions"),i=1e3,l=10;require("css!./__styles__/ReplyComponent");var C=(n=t=function(t){function ReplyComponent(o,s){_classCallCheck(this,ReplyComponent);var e=_possibleConstructorReturn(this,t.call(this,o,s));return e.wrappedScrollToLocation=_.once(e.scrollToLocation),e}return _inherits(ReplyComponent,t),ReplyComponent.prototype.componentDidUpdate=function componentDidUpdate(){this.isDeepLinked()&&this.props.isQuestionLoaded&&this.wrappedScrollToLocation()},ReplyComponent.prototype.isDeepLinked=function isDeepLinked(){var o=this.props,e=o.reply,s=o.commentId,t=o.answerId;return s&&"comment"===e.type&&e.forumCommentId===s||t&&!s&&"answer"===e.type&&e.topLevelForumAnswerId===t},ReplyComponent.prototype.scrollToLocation=function scrollToLocation(){var o=L.findDOMNode(this.refs.reply),e=$(o).offset().top;if($("main.od-contents").length)$("main.od-contents").animate({scrollTop:e+$("main.od-contents").scrollTop()-$("main.od-contents").offset().top-l},i);else if("hidden"!==$("body").css("overflow")){var s=$(".rc-PageHeader").length?$(".rc-PageHeader")[0].offsetHeight:0;$("body").animate({scrollTop:e+$("body").scrollTop()-$("body").offset().top-s-l},i)}},ReplyComponent.prototype.renderShowToggle=function renderShowToggle(){var t=this.props,n=t.commentsEnabled,o=t.commentCount,i=e.createElement("button",{onClick:this.props.toggleComments},e.createElement(r,{message:s("Show {count} {count, plural, =1 {Reply} other {Replies}}"),count:o})),l=e.createElement("button",{onClick:this.props.toggleComments},e.createElement(r,{message:s("Hide {count} {count, plural, =1 {Reply} other {Replies}}"),count:o})),c=e.createElement("button",{onClick:this.props.toggleComments},s("Reply")),p=e.createElement("button",{onClick:this.props.toggleComments},s("Hide"));return n?o?l:p:o?i:c},ReplyComponent.prototype.render=function render(){var t=this.props,s=t.reply,r=t.forumLink,T=t.showJumpLink,i=t.isHighlighted,n=s.creator;if(s.hide)return null;var v=o("horizontal-box",{"bgcolor-primary-light":this.isDeepLinked()},"reply-content"),w=o("rc-ReplyComponent",this.props.className),L=o("reply-details",{flag:s.flagDetails&&s.flagDetails.isActive}),l=o("action-area","horizontal-box","align-items-vertical-center","caption-text","color-secondary-text");return e.createElement("div",{className:w,ref:"reply"},e.createElement("div",null,e.createElement("div",{className:v},e.createElement("div",{className:"profile"},e.createElement(a,{externalUserId:s.creator.externalUserId,fullName:s.creator.fullName,profileImageUrl:s.creator.isDefaultPhoto?"":s.creator.photoUrl||""})),s.showEditor&&e.createElement("div",{className:"flex-1"},e.createElement(u,{reply:s})),!s.showEditor&&e.createElement("div",{className:"flex-1 preview-container"},e.createElement("div",{className:"metadata caption-text color-secondary-text"},e.createElement(d,{fullName:n.fullName,externalId:n.externalUserId}),e.createElement(f,{creator:n}),e.createElement("span",null," · "),e.createElement(y,{post:s,forumLink:r}),e.createElement(b,{post:s})),e.createElement("div",{className:L},e.createElement(p,{cml:s.content})),e.createElement("div",{className:l},e.createElement(h,{post:s}),"answer"===s.type&&e.createElement("span",null," · "),"answer"===s.type&&this.renderShowToggle(),T&&e.createElement(c,{reply:s,forumLink:r}),e.createElement(m,{post:s}))),e.createElement(g,{creator:n,post:s,isHighlighted:i,forumLink:r})),s.state.deleted&&e.createElement(E,{entry:s}),this.props.children))},ReplyComponent}(e.Component),t.propTypes={reply:v.isRequired,commentsEnabled:e.PropTypes.bool,toggleComments:e.PropTypes.func,answerId:e.PropTypes.string,commentId:e.PropTypes.string,commentCount:e.PropTypes.number,className:e.PropTypes.string,children:e.PropTypes.node,isHighlighted:e.PropTypes.bool,isQuestionLoaded:e.PropTypes.bool,forumLink:e.PropTypes.string,showJumpLink:e.PropTypes.bool},n);module.exports=C});