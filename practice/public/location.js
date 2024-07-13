console.log("Page public location")

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
getLocation()

function showPosition(position) {
    console.log("Got position", position)
}
