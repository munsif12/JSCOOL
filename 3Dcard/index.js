const card = document.querySelector(".app");
const cont = document.querySelector(".mainCon");
const heading = document.querySelector("h4");
//moving anim
cont.addEventListener('mousemove', (e) => {
    //console.log(e.pageX, e.pageY);
    //console.log(window.innerWidth);
    heading.style.transform = `translateZ(150px)`;
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
cont.addEventListener('click', e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});