const card = document.querySelector('article');
const container = document.querySelector('body');
container.addEventListener('mousemove', (e) => {
    const x_Axis = (window.innerWidth / 2 - e.pageX) / 20;
    const y_Axis = (window.innerHeight / 2 - e.pageY) / 20;

    card.style.transform = `rotateY(${x_Axis}deg) rotateX(${y_Axis}deg)`;

});

container.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
});