document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            document.getElementById('output').innerHTML = "<h3>You pressed the left arrow key</h3>";
            break;
        case 38:
            document.getElementById('output').innerHTML = "<h3>You pressed the up arrow key</h3>";
            break;
        case 39:
            document.getElementById('output').innerHTML = "<h3>You pressed the right arrow key</h3>";
            break;
        case 40:
            document.getElementById('output').innerHTML = "<h3>You pressed the down arrow key</h3>";
            break;
    }
};
