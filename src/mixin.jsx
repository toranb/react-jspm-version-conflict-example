import PromiseMixin from 'promise-mixin-two';

var AnotherPromiseMixin = {
    gotime: function() {
        var hash = {};
        hash.url = "/api/incoming";
        hash.type = "GET";
        hash.dataType = "json";
        var mixin = new PromiseMixin();
        mixin.promise("/api/incoming", "GET", hash).then(function(response) {
            response.forEach(function(item) {
                console.log("promise-mixin-two result");
                console.log(item);
            });
        });
    }
};

export default AnotherPromiseMixin;
