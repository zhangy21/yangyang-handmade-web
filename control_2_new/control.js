
function getRandomNumber(num) {
    return Math.floor(Math.random() * (num + 1));
}

function animateMove(element, prop, pixels) {
    return anime({
        targets: element,
        [prop]: `${pixels}px`,
        easing: "easeOutCirc"
    });
}

const container = document.getElementById('button-container'); 
for (let i = 1; i <= 10; i++) {
    const button = document.createElement("button");
    button.className = 'dynamic-btn'; 
    button.id = `runaway-btn-${i}`;
    button.innerHTML = `<img src="fishshrimp/reshape${i}.png" alt="Decorative image ${i}"> Grab Me ${i}! &#129322;`;
    container.appendChild(button);
}

const buttons = document.querySelectorAll('.dynamic-btn');
buttons.forEach(function(button) {
    ["mouseover", "click"].forEach(function(eventType) {
        button.addEventListener(eventType, function() {
            const top = getRandomNumber(window.innerHeight - this.offsetHeight);
            const left = getRandomNumber(window.innerWidth - this.offsetWidth);

            animateMove(this, "left", left).play();
            animateMove(this, "top", top).play();
        });
    });
});