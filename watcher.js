(function() {
    var fileHash;
    var httpRequest;

    cssFiles = document.querySelectorAll("link[rel=stylesheet]");

    window.setInterval(makeRequest, 2000);

    function makeRequest() {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            console.log('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }

        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', 'file.php');
        httpRequest.send();
    }

     function alertContents() {
       if (httpRequest.readyState === XMLHttpRequest.DONE) {
         if (httpRequest.status === 200) {

             var newFileHash = httpRequest.responseText;

            if (fileHash != newFileHash) { //file changed - so fetch contents

                cssFiles.forEach(function(file, index) {
                  var href = file.getAttribute('href');
                  file.href = href;
               });
            }
         } else {
           console.log('There was a problem with the request.');
         }
       }
     }
})();
