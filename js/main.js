const slideList = [
    {
        img: "images/img1.jpg",
        text: "Pierwszy text"
    },
    {
        img: "images/img2.jpg",
        text: "Drugi text"
    },
    {
        img: "images/img3.jpg",
        text: "Trzeci text"
    }
];
const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

//  Interfejs
const time = 1500;
let active = 0;
const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove("active");
    dots[active].classList.add("active");
};
const changeSlide = () => {
    active++;
    if (active >= slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
};

const keyChangeSlide = e => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval);
        e.keyCode == 37 ? active-- : active++;
        console.log(active);
        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();
        indexInterval = setInterval(changeSlide, time)
    }
};

let indexInterval = setInterval(changeSlide, time);

window.addEventListener("keydown", keyChangeSlide);
