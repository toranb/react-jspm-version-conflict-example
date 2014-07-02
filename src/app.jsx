import React from 'react';
import ReactRouter from 'react-nested-router';
import AjaxReactComponent from './helper';

var Link = ReactRouter.Link;

export default React.createClass({
  mixins: [AjaxReactComponent],
  render: function() {
    this.fire();
    return (
      <div>
        <ul>
          <li><Link to="dashboard">Dashboard</Link></li>
        </ul>
        {this.props.activeRoute}
      </div>
    );
  }
});
