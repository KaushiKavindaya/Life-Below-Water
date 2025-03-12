// JavaScript to dynamically stagger the animation delay
const titleSpans = document.querySelectorAll('.splash-heading span');
titleSpans.forEach((span, index) => {
    const randomDelay = Math.random() * 1.5 + index * 0.1; // Random delay between 0 and 0.2 seconds
    span.style.animationDelay = `${randomDelay}s`;
});
