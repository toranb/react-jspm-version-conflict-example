import React from 'react';
import ReactRouter from 'react-nested-router';

//we included this in the original bundle
import AjaxReactComponent from './helper';

//this include will fire off an on demand
//request to load the new ES6 mixin
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
