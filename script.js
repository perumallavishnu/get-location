function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    getIP(lat, long);
}

async function getIP(lat, long) {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    let ip = data.ip;

    saveData(lat, long, ip);
}

function saveData(lat, long, ip) {
    fetch('save_data.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            latitude: lat,
            longitude: long,
            ip_address: ip
        })
    });
}