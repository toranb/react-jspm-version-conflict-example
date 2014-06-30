import React from 'react';
import ReactRouter from 'react-nested-router';

var Link = ReactRouter.Link;

var Dashboard = React.createClass({
    render: function() {
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
