export function admin_view_def() {
    return {
        template: "<div><a ui-sref='admin_tags'>Tags</a></div>" +
            "<div><a ui-sref='admin_webhook'>Webhook Config</a></div>",
        url: '/admin'
    };
}
