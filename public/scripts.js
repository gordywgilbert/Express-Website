// this does a vanilla javascript AJAX request- its better to use a library for AJAX requests usually.
function getUsers() {
    var request = new XMLHttpRequest();
    var usersDiv = document.getElementById('usersDiv');

    // HTTP GET request to /users
    request.open('GET', '/users', true);

    // code that runs when the request is executed
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success! data should be an array of objects with a name and age field
            var users = JSON.parse(request.responseText);

            // for each user...
            for(var i = 0; i < users.length; i++) {
                // build some HTML ... usually want to use a framework, building HTML in javascript is bad practice
                usersDiv.innerHTML += '<p>' + users[i].name + ', age ' + users[i].age + '</p>';
            }
        } else {
            usersDiv.innerHTML = 'We reached our target server, but it returned an error';
        }
    };

    request.onerror = function() {
        usersDiv.innerHTML = 'There was a connection error of some sort';
    };

    request.send();
}