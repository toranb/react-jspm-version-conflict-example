import RSVP from 'rsvp';

var AjaxReactComponent = {
    fire: function() {
        var getJSON = function(url) {
          var promise = new RSVP.Promise(function(resolve, reject){
            var client = new XMLHttpRequest();
            client.open("GET", url);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();

            function handler() {
              if (this.readyState === this.DONE) {
                if (this.status === 200) { resolve(this.response); }
                else { reject(this); }
              }
            };
          });

          return promise;
        };

        getJSON("/api/wat/").then(function(json) {
            console.log(json);
        });
    }
};

export default AjaxReactComponent;
