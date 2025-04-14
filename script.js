let roll = document.querySelector('.roll');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let section=document.querySelector('section');
let interval='';

//array of images url
let imageArray = [
  'img0.jpg','img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg','img9.jpg',
];

//make elements for first time
imageArray.map((a) => {
  let slide = document.createElement('div');
  slide.classList.add('slide');
  slide.id = a;
  let img = document.createElement('img');
  img.src = a;
  slide.appendChild(img);
  let p = document.createElement('p');
  p.innerHTML = a;
  slide.appendChild(p);
  roll.appendChild(slide);
});

//function for next slide
function nextSlide() {
  let slides = document.querySelectorAll('.slide');
  slides[0].style.width = '0%';
  setTimeout(() => {
    let a = slides[0].id;
    slides[0].remove();
    let slide = document.createElement('div');
    slide.classList.add('slide');
    slide.id = a;
    let img = document.createElement('img');
    img.src = a;
    slide.appendChild(img);
    let p = document.createElement('p');
    p.innerHTML = a;
    slide.appendChild(p);
    roll.appendChild(slide);
  }, 300)
}

//function for previous slide
function prevSlide() {
  let slides = document.querySelectorAll('.slide');
  let a = slides[slides.length-1].id;
  slides[slides.length-1].remove();
  let slide = document.createElement('div');
  slide.classList.add('slide');
  slide.id = a;
  let img = document.createElement('img');
  img.src = a;
  slide.appendChild(img);
  let p = document.createElement('p');
  p.innerHTML = a;
  slide.appendChild(p);
  roll.prepend(slide);
}

//prevent abnormal behaviour
function prevent(){
  next.disabled=true;
  prev.disabled=true;
  clearInterval(interval);
  setTimeout(()=>{
    next.disabled=false;
    prev.disabled=false;
  },300);
}

//next button click
next.addEventListener('click', () => {
  nextSlide();prevent();
});

//previous button click
prev.addEventListener('click', () => {
  prevSlide();prevent();
});

//mouse hover on section
section.addEventListener('mouseover',()=>{
  clearInterval(interval);
})

//mouseout from section
section.addEventListener('mouseout',()=>{
  interval=setInterval(nextSlide,3000);
});

//auto side in 3sec.
interval=setInterval(nextSlide,3000);