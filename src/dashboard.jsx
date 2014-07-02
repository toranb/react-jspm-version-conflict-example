import React from 'react';
import ReactRouter from 'react-nested-router';
import AjaxReactComponent from './helper';
import AnotherPromiseMixin from './mixin';

var Link = ReactRouter.Link;

var Dashboard = React.createClass({
    mixins: [AjaxReactComponent, AnotherPromiseMixin],
    render: function() {
        this.fire();
        this.gotime();
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
