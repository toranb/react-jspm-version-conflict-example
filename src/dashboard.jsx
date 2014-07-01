import React from 'react';
import ReactRouter from 'react-nested-router';
import AjaxReactComponent from './helper';

var Link = ReactRouter.Link;

var Dashboard = React.createClass({
    mixins: [AjaxReactComponent],
    render: function() {
        this.fire();
        return (
          <div>
            <h1>Dashboard!</h1>
            <ul>
              <li><Link to="inbox">Inbox</Link></li>
            </ul>
            {this.props.activeRoute}
          </div>
        );
    }
});

export default Dashboard;
