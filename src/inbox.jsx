import React from 'react';
import AjaxMixin from 'ajax-mixin';

//once again we reference this mixin
//but because it's already been pulled in
//we don't need to fetch the module a 2nd time
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
