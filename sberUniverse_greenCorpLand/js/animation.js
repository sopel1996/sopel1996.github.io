const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false;
function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber){
        if (i === endNumber){
            element.innerText = i +'+';
        } else {
            element.innerText = i;
        }
        i+=100;
    }
    setTimeout(()=>{increaseNumberAnimationStep(i,element,endNumber)}, INCREASE_NUMBER_ANIMATION_SPEED);
}
function initIncreaseNumberAnimation() {
    let element = document.querySelector('.features__clients-count');
    increaseNumberAnimationStep(0, element, 5000);
}
// initIncreaseNumberAnimation();

document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
        // Должны добавить еще одно текстовое поле
        let formContainer = document.createElement('div');
        formContainer.classList.add('form__group', 'form__other-input');
        let input =  document.createElement('input');
        input.placeholder = "Введите ваш вариант";
        input.type = "text";
        formContainer.appendChild(input);

        document.querySelector('.form form').insertBefore(formContainer, document.querySelector('.form__submit'))
    }
    if (event.target.value !== 'other') {
        // Удаляем ранее добавленное текстовое поле, если оно есть в DOM
        let otherInput = document.querySelector('.form__other-input');
        if(event.target.value !== 'other' && Boolean(otherInput)){
            document.querySelector('.form form').removeChild(otherInput);
        }
    }
});

function updateScroll() {
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    let windowBottomPosition = window.scrollY + window.innerHeight;
    if (window.scrollY > 0) {
        document.querySelector('header').classList.add('header__scrolled');
    } else {
        document.querySelector('header').classList.remove('header__scrolled');
    }
    if (windowBottomPosition>=countElementPosition && !animationInited){
        initIncreaseNumberAnimation();
        animationInited = true;
    }
}
window.addEventListener('scroll', updateScroll)

function addSmoothScroll(link) {
    link.addEventListener('click', onLinkClick);
}
function onLinkClick(event) {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href'));
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}
document.querySelectorAll('[href^="#"]').forEach(elem => {
    addSmoothScroll(elem);
})
addSmoothScroll(document.querySelector('.more-button'));