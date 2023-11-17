function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById('location-data').innerHTML = 'Geolocation is not supported by this browser.';
    }
}

function showPosition(position) {
    const data = {
        ip: '',
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };

    // Send data to PHP for processing
    sendDataToPHP(data);
}

function sendDataToPHP(data) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'save_location.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('location-data').innerHTML = xhr.responseText;
        }
    };

    xhr.send(JSON.stringify(data));
}
