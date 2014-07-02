import React from 'react';
import ReactRouter from 'react-nested-router';

//this helper module will be the first place
//we require and use RSVP 3.0.6
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
