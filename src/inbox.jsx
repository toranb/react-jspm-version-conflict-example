import React from 'react';
import AjaxMixin from 'ajax-mixin';

var Inbox = React.createClass({
    render: function() {
        var mixin = new AjaxMixin();
        mixin.xhr("/api/incoming", "GET").then(function(response) {
            response.forEach(function(item) {
                console.log(item);
            });
        });
        return (
          <div>
            <h1>Inbox!</h1>
          </div>
        );
    }
});

export default Inbox;
