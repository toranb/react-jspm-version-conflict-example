import React from 'react';
import AjaxMixin from 'ajax-mixin';
import AnotherPromiseMixin from './mixin';

var Inbox = React.createClass({
    mixins: [AnotherPromiseMixin],
    render: function() {
        this.gotime();
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
