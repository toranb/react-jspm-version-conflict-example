import React from 'react';
import ReactRouter from 'react-nested-router';

var Link = ReactRouter.Link;

export default React.createClass({
  render: function() {
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
