import { path } from './path';
import f from './functions';

export function results_service_def($http) {
    return {
        query: function (method, filter, page, obj) {
            obj.filter = filter;
            obj.page = page;

            var suffix = (function () {
                switch (method) {
                    case 'all':
                        return 'queryQuestions';
                    case 'profile':
                        return 'getProfile';
                    case 'tagSearch':
                        return 'searchTag';
                    case 'search':
                        return 'searchQuestion';
                    default:
                        return 'queryQuestions';
                }
            })();
            return $http.get(path[suffix] + f.buildQueryString(obj))
                .then(f.transformResponse);
        }
    };
}