
export function filterSetup(mod){

    marked.setOptions({
        breaks: true
    });
    
    mod.filter('renderHtml', function() {
        return function(val) {
            if (val) {
                var div = document.createElement('div');
                div.innerHTML = marked(val);
                var list = div.getElementsByTagName('code');
                for (var i = 0; i < list.length; i++) {
                    if (list[i].parentNode.nodeName === 'PRE') {
                        list[i].innerHTML = PR.prettyPrintOne(list[i].innerHTML, null, true);
                    } else {
                        list[i].innerHTML = PR.prettyPrintOne(list[i].innerHTML);
                    }
                }
                return div.innerHTML;
            }
            return "";
        };
    });

    mod.filter('formatDate', function() {
        return function(d, local) {
            if (d) {
                if (!local) {
                    d = d.replace(' ', 'T') + 'Z';
                    d = new Date(d);
                }
                var hr = d.getHours();
                var min = d.getMinutes();
                min = ("0" + min).slice(-2);
                var mo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()];
                var yr = d.getFullYear().toString().slice(2);
                var date = d.getDate();
                return (mo + " " + date + ", '" + yr + " at " + hr + ":" + min);
            }
        };
    });
    
    mod.filter('formatShortDate', function() {
        return function(d, local) {
            if (d) {
                if (!local) {
                    d = d.replace(' ', 'T') + 'Z';
                    d = new Date(d);
                }
                var mo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()];
                var yr = d.getFullYear().toString().slice(2);
                var date = d.getDate();
                return (mo + " " + date + ", " + yr);
            }
        };
    });
}