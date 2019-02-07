/**
 * The Web platform provides several ways to get notified of and to handle the
 * DOM events. Two common approaches in registering handlers are:
 *      - using the on-event handlers (e.g. onclick handler)
 *      - using the generalized addEventListener()
 *
 * When you need to pass parameter values to your handler, there are different
 * approaches you can take:
 *  - using an anonymous function (usually in the procedural approach)
 *  - using the bind() method (usually in the OO approach, using arrow functions is another alternative).
 */
window.onload = function () {
    document.getElementById('colorInput').onchange = changeTextColor;
    document.getElementById('backgroundColorInput').addEventListener('change', changeTextBackground);


};

function changeTextColor() {
    document.getElementById('textToStyle').style.color = this.value;

}

function changeTextBackground(event) {
    document.getElementById('textToStyle').style.backgroundColor = this.value;
    console.log("event type: " + event.type);

}
