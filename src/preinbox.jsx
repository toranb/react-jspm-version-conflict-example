import React from 'react';
import AsyncReactComponent from './component';

var PreInbox = React.createClass({displayName: 'PreInbox',
    mixins: [AsyncReactComponent],
    bundle: './build/inbox',
    preRender: function() {
      return <div>Loading inbox...</div>
    }
});

export default PreInbox;
