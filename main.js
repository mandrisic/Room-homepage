const slides = [
    {
        imgDesktop: './images/desktop-image-hero-1.jpg',
        imgMobile: './images/mobile-image-hero-1.jpg',
        h1: 'Discover innovative ways to decorate',
        description: `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your own style with our 
        collection and make your property a reflection of you and what you love.`
    },
    {
        imgDesktop: './images/desktop-image-hero-2.jpg',
        imgMobile: './images/mobile-image-hero-2.jpg',
        h1: 'We are available all across the globe',
        description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`
    },
    {
        imgDesktop: './images/desktop-image-hero-3.jpg',
        imgMobile: './images/mobile-image-hero-3.jpg',
        h1: 'Manufactured with the best materials',
        description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`
    }
];

const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const open = document.getElementById('open-nav');
const overlay = document.getElementById('overlay');

const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const heading = document.getElementById('heading');
const description = document.getElementById('description');
const imgContainer = document.getElementById('imgContainer');

const closeNav = () => {
    open.classList.remove('translate-y-0', 'opacity-100');
    open.classList.add('-translate-y-0', 'opacity-0');
    overlay.classList.remove('opacity-50', 'visible');
    overlay.classList.add('opacity-0', 'invisible');
}

hamburger.addEventListener("click", () => {
    open.classList.remove('-translate-y-0', 'opacity-0');
    open.classList.add('translate-y-0', 'opacity-100');
    overlay.classList.remove('opacity-0', 'invisible');
    overlay.classList.add('opacity-50', 'visible');
});

close.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);

let count = 0;
const updateContent = () => {
    heading.textContent = slides[count].h1;
    description.textContent = slides[count].description;

    const imageUrl = window.innerWidth <= 768 ? slides[count].imgMobile : slides[count].imgDesktop;
    imgContainer.style.backgroundImage = `url('${imageUrl}')`;
    imgContainer.style.transition = 'background-image 0.3s ease-in-out';
}

leftBtn.addEventListener('click', () => {
    count = (count - 1 + slides.length) % slides.length;
    updateContent();
});

rightBtn.addEventListener('click', () => {
    count = (count + 1) % slides.length;
    updateContent();
});

updateContent();
window.addEventListener('resize', updateContent);