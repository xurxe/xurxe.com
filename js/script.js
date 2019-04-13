const nav = document.querySelector('nav');
const navLogoDiv = document.querySelector('.nav-logo-div');
const navDivs = document.querySelectorAll('.nav-div');

const header = document.querySelector('header');
const main = document.querySelector('main');

let hamburgerTucked;
let opacity;
let navWidth;
let paddingLeft;


function hideNavContent() {
    hamburgerTucked = true;
    opacity = 1;

    let effect = setInterval(runEffect, 1);

    function runEffect() {
        if (opacity < 0) {
            opacity = 0;
            for (let i = 0; i < navDivs.length; i++) {
                navDivs[i].style.opacity = opacity;
                navDivs[i].style.display = 'none';
            };

            clearInterval(effect);
            return;
        }

        else {
            opacity -= 0.05;

            for (let i = 0; i < navDivs.length; i++) {
                navDivs[i].style.opacity = opacity;
            };
        };

        console.log(opacity);
    };
};



function showNavContent() {
    hamburgerTucked = false;
    opacity = 0;

    for (let i = 0; i < navDivs.length; i++) {
        navDivs[i].style.opacity = opacity;
        navDivs[i].style.display = 'block';
    };

    let effect = setInterval(runEffect, 1);

    function runEffect() {
        if (opacity > 1) {

            for (let i = 0; i < navDivs.length; i++) {
                navDivs[i].style.opacity = '1';
            };

            clearInterval(effect);
            return;
        }

        else {
            opacity += 0.05;

            for (let i = 0; i < navDivs.length; i++) {
                navDivs[i].style.opacity = opacity;
            };
        };

        console.log(opacity);
    };
};



function tuckHamburger() {
    hamburgerTucked = true;
    navWidth = 10;
    paddingLeft = 13;

    let effect = setInterval(runEffect, 1);

    function runEffect() {
        if (navWidth < 3) {
            nav.style.width = '3rem';
            header.style.paddingLeft = '6rem';
            main.style.paddingLeft = '6rem';

            clearInterval(effect);
            return;
        }

        else {
            navWidth -= 0.1;
            nav.style.width = `${navWidth}rem`;

            paddingLeft -= 0.1;
            header.style.paddingLeft = `${paddingLeft}rem`;
            main.style.paddingLeft = `${paddingLeft}rem`;
        };

        console.log(navWidth);
    };
};



function untuckHamburger() {
    hamburgerTucked = false;
    navWidth = 3;
    paddingLeft = 5;

    let effect = setInterval(runEffect, 1);

    function runEffect() {
        if (navWidth > 10) {
            nav.style.width = '10rem';
            header.style.paddingLeft = '13rem';
            main.style.paddingLeft = '13rem';

            clearInterval(effect);
            return;
        }

        else {
            navWidth += 0.1;
            nav.style.width = `${navWidth}rem`;

            paddingLeft += 0.1;
            header.style.paddingLeft = `${paddingLeft}rem`;
            main.style.paddingLeft = `${paddingLeft}rem`;
        };

        console.log(navWidth);
    };
};



window.addEventListener('resize', function() {
    if (window.innerWidth > 600) {
        if (hamburgerTucked === true) {
            untuckHamburger();
            setTimeout(showNavContent, 300);
        };
    };

    if (window.innerWidth < 600) {
        if (hamburgerTucked === false) {
            hideNavContent();
            setTimeout(tuckHamburger, 100);
        };
    };
});


function initialize() {

    if (window.innerWidth > 600) {
        hamburgerTucked = false;
    }

    else {
        nav.style.width = '3rem';
        header.style.paddingLeft = '6rem';
        main.style.paddingLeft = '6rem';
        hamburgerTucked = true;

        for (let i = 0; i < navDivs.length; i++) {
            navDivs[i].style.opacity = '0';
            navDivs[i].style.display = 'none';
        };
    };
};

initialize();