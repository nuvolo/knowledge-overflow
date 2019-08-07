import { path } from './path';
import f from './functions';

export function attachment_service_def($http) {
    return {
        uploadImage: function (encoded_url) {
            encoded_url = encoded_url.split(";base64,");
            var type = encoded_url[0].replace("data:", "");
            var encoded_data = encoded_url[1];
            //Create a blank entry on the ko table
            return $http.post(path.createAttachment)
                .then(f.transformResponse)
                .then(function (img) {
                    var name = "ko-" + ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
                        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
                    });
                    //Attach the image to it
                    var data =
                        "<request><entry><agent>KO Image Upload</agent><topic>AttachmentCreator</topic><name>"
                        .concat(name, ":").concat(type, "</name><source>x_nuvo_ko_attachments:")
                        .concat(img.sys_id, "</source><payload>").concat(encoded_data, "</payload></entry></request>");

                    return $http.post(path.eccQueue, data, {
                        headers: {
                            'Content-Type': 'text/xml',
                            'Accept': 'application/json'
                        }
                    }).then(f.transformResponse).then(function (data) {
                        //And then query the attachment download link
                        return $http.get(path.attachmentApi + '?sysparm_query=file_name=' + name)
                            .then(f.transformResponse)
                            .then(function (data) {
                                return data[0].download_link;
                            });
                    });
                });

        },

        upload: function (file) {
            //Create blank attachment entry, upload the attachment to it, and return a link
            return $http.post(path.createAttachment)
                .then(f.transformResponse).then(function (obj) {
                    var queryString = f.buildQueryString({
                        file_name: file.name,
                        table_name: 'x_nuvo_ko_attachments',
                        table_sys_id: obj.sys_id
                    });
                    return $http.post(path.fileApi + queryString, file, {
                        headers: {
                            'Content-Type': file.type,
                            'Accept': 'application/json'
                        }
                    }).then(f.transformResponse).then(function (data) {
                        return {
                            link: data.download_link,
                            name: file.name
                        };
                    });
                });
        }
    };
}