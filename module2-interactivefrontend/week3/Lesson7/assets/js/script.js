function keydownAction(event) {
    // TODO: Complete keydown function
    console.log(event)
    document.getElementById('key').innerText = event.key
    document.getElementById('code').innerText = event.code
    document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

function keyupAction() {
    document.querySelector("#status").innerHTML = "KEYUP Event";
}


document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);