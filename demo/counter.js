// counter.js
function updateCounter() {
    // Get the current counter value
    const counterValue = localStorage.getItem('counter');

    // Select all elements with data-id="counter"
    const elements = document.querySelectorAll('[data-id="counter"]');

    // Update the textContent or value of each element
    elements.forEach(element => {
        if (element.tagName === 'INPUT') {
            element.value = counterValue;
        } else {
            element.textContent = 'Counter: ' + counterValue;
        }
    });
}

// Increment button
const incrementButton = document.getElementById('increment');
if (incrementButton) {
    incrementButton.addEventListener('click', function() {
        let counter = Number(localStorage.getItem('counter'));
        counter++;
        localStorage.setItem('counter', counter.toString());
        updateCounter();
    });
}

// Decrement button
const decrementButton = document.getElementById('decrement');
if (decrementButton) {
    decrementButton.addEventListener('click', function() {
        let counter = Number(localStorage.getItem('counter'));
        counter--;
        localStorage.setItem('counter', counter.toString());
        updateCounter();
    });
}

// Initial counter update
updateCounter();