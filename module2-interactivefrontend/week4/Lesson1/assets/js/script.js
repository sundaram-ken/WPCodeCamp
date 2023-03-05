var container = document.querySelector(".container");

container.addEventListener("click", function (event) {
    var element = event.target;

    // TODO: Complete function
    if (element.matches("div")) {

        var state = element.getAttribute("data-state");
        var num = element.getAttribute("data-number");
        var pos = event.target.dataset.number

        if (state === "hidden") {
            console.log(event);
            if (pos == 1) {
                event.target.innerHTML = 1
            }
            if (pos == 2) {
                event.target.innerHTML = 2
            }
            if (pos == 3) {
                event.target.innerHTML = 3
            }
            if (pos == 4) {
                event.target.innerHTML = 4
            }
            if (pos == 5) {
                event.target.innerHTML = 5
            }
            if (pos == 6) {
                event.target.innerHTML = 6
            }

        }
    }
});
