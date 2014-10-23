/** @jsx React.DOM */
"use strict";
var React = require("react/addons");

var ChildMixin = require("./mixins/ChildMixin");

module.exports = React.createClass({
  displayName: "Map",

  mixins: [ChildMixin],

  contextTypes: {
    _set_map: React.PropTypes.func
  },

  componentDidMount () {
    this._init_map(this.context);
  },

  componentDidUpdate () {
    this._init_map(this.context);
  },

  render () {
    return this._render(this.props, this.state);
  },

  _init_map (context) {
    if (context.hasMap() || !context.getApi()) {
      return;
    }
    var {Map} = context.getApi();
    context._set_map(
      new Map(
        this.refs.mapCanvas.getDOMNode(),
        this.props
      )
    );
  },

  _render (props, state) {
    return <div ref="mapCanvas" style={{width:"100%", height:400}} />;
  }
});
