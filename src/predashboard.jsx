import React from 'react';
import AsyncReactComponent from './component';

var PreDashboard = React.createClass({displayName: 'PreDashboard',
    mixins: [AsyncReactComponent],
    bundle: './build/dashboard',
    preRender: function() {
        return <div>Loading dashboard...</div>
    }
});

export default PreDashboard;
