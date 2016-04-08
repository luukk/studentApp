function HttpRequest() {}

HttpRequest.prototype.load = function(url, callback) {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", url);
    xmlhttp.send();

    xmlhttp.addEventListener('readystatechange', function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (callback) {

                callback(JSON.parse(xmlhttp.responseText));
            }
        }
    });
};
