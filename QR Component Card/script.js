const card = document.getElementById('card');
const container = document.querySelector('body');

container.addEventListener('mousemove', (e) => {
    // Calculate mouse position relative to center of screen
    const xAxis = (window.innerWidth / 2 - e.pageX) / 20; 
    const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    
    // Rotate the card
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset animation when mouse leaves
container.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});