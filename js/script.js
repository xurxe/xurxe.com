/* CONSTANTS ********************************************************************** */
let hamburgerTucked;



/* QUERY SELECTORS **************************************************************** */
const nav = document.querySelector('nav');
const navLogoDiv = document.querySelector('.nav-logo-div');
const navDivs = document.querySelectorAll('.nav-div');

const header = document.querySelector('header');
const main = document.querySelector('main');



/* FUNCTIONS ********************************************************************** */

function hideNavContent() {
    for (let i = 0; i < navDivs.length; i++) {
        navDivs[i].classList.remove('visible');
        navDivs[i].classList.add('invisible');
    };
    return;
};

function showNavContent() {
    for (let i = 0; i < navDivs.length; i++) {
        navDivs[i].classList.remove('invisible');
        navDivs[i].classList.add('visible');
    };
    return;
};

function tuckHamburger() {
    hamburgerTucked = true;
    nav.classList.remove('untucked');
    nav.classList.add('tucked');
    return;
};

function untuckHamburger() {
    hamburgerTucked = false;
    nav.classList.remove('tucked');
    nav.classList.add('untucked');
    return;
};

function decreasePaddingLeft() {
    header.classList.remove('increased');
    main.classList.remove('increased');
    header.classList.add('decreased');
    main.classList.add('decreased');
    return;
};

function increasePaddingLeft() {
    header.classList.remove('decreased');
    main.classList.remove('decreased');
    header.classList.add('increased');
    main.classList.add('increased');
    return;
};



/* EVENT LISTENERS ************************************************************** */

window.addEventListener('resize', function() {
    if (window.innerWidth > 600) {
        if (hamburgerTucked === true) {
            untuckHamburger();
            increasePaddingLeft();
            setTimeout(showNavContent, 600);
        }
    };

    if (window.innerWidth < 600) {
        if (hamburgerTucked === false) {
            hideNavContent();
            setTimeout(tuckHamburger, 300);
            setTimeout(decreasePaddingLeft, 300);
        };
    };
});



/* EXECUTION ********************************************************************** */

function initialize() {

    if (window.innerWidth > 600) {
        hamburgerTucked = false;
    }

    else {
        nav.style.width = '3rem';
        header.style.paddingLeft = '4rem';
        main.style.paddingLeft = '4rem';
        hamburgerTucked = true;

        for (let i = 0; i < navDivs.length; i++) {
            navDivs[i].style.opacity = '0';
            navDivs[i].style.display = 'none';
        };
    };
};

initialize();