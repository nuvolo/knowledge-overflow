export default {

    buildQueryString: function(params) {
        //Build the query string with template '?param1=val1&param2=val2...'
        var esc = encodeURIComponent;
        var query = Object.keys(params)
            .map(function(k) {
                return esc(k) + '=' + esc(params[k]);
            })
            .join('&');
        return "?" + query;
    },

    transformResponse: function(res) {
        return res.data.result;
    }
};