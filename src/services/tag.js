import { path } from './path';
import f from './functions';

export function tags_service_def($http) {
    var publicApi = {
        autofillTags: autofillTags,
        getTopTags: getTopTags,
        watchTag: watchTag,
        isWatched: isWatched,
        autoSubscribe: autoSubscribe
    };

    function autofillTags(input, fullView) {
        var query = f.buildQueryString({
            input: input,
            full: fullView
        });
        return $http.get(path.autofillTags + query)
            .then(f.transformResponse).then(autoTagsCallback);
    }
    var autoTagsCallback;

    function autoSubscribe(callback) {
        autoTagsCallback = callback;
    }

    function getTopTags(fullView) {
        var query = f.buildQueryString({
            full: fullView
        });
        return $http.get(path.getTopTags + query).then(f.transformResponse);
    }

    function watchTag(tag, watch) {
        var query = f.buildQueryString({
            tag: tag,
            watch: watch
        });
        return $http.post(path.watchTag + query).then(f.transformResponse);
    }

    function isWatched(tag) {
        var query = f.buildQueryString({
            tag: tag
        });
        return $http.get(path.tagIsWatched + query)
            .then(f.transformResponse);
    }

    return publicApi;
}