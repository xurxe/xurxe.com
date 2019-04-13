const nav = document.querySelector('nav');
const main = document.querySelector('main');
const navLogoDiv = document.querySelector('.nav-logo-div');
const navDivs = document.querySelectorAll('.nav-div');

let hamburgerTucked;


function hideNavContent() {
    let opacity = 1;
    let effect = setInterval(runEffect, 1);

    function runEffect() {
        if (opacity < 0) {
            for (let i = 0; i < navDivs.length; i++) {
                navDivs[i].style.opacity = '0';
                navDivs[i].style.display = 'none';
            };

            clearInterval(effect);
        }

        else {
            opacity -= 0.03;

            for (let i = 0; i < navDivs.length; i++) {
                navDivs[i].style.opacity = opacity;
            };
        };
    };
};



function showNavContent() {
    let opacity = 0;
    for (let i = 0; i < navDivs.length; i++) {
        navDivs[i].style.opacity = opacity;
        navDivs[i].style.display = 'block';
    };

    let effect = setInterval(runEffect, 1);

    function runEffect() {
        if (opacity > 1) {
            for (let i = 0; i < navDivs.length; i++) {
                navDivs[i].style.opacity = 1;
            };

            clearInterval(effect);
            return;
        }

        else {
            opacity += 0.03;

            for (let i = 0; i < navDivs.length; i++) {
                navDivs[i].style.opacity = opacity;
            };
        };
    };
};



function tuckHamburger() {
    let navWidth = nav.style.width;
    navWidth = navWidth.substring(0, navWidth.length - 3);
    navWidth = parseInt(navWidth);

    let mainPaddingLeft = main.style.paddingLeft;
    mainPaddingLeft = mainPaddingLeft.substring(0, mainPaddingLeft.length - 3);
    mainPaddingLeft = parseInt(mainPaddingLeft);

    let effect = setInterval(runEffect, 1);

    function runEffect() {
        if (navWidth < 3) {
            nav.style.width = '3rem';
            main.style.paddingLeft = '5rem';
            hamburgerTucked = true;
            clearInterval(effect);
            return;
        }

        else {
            navWidth -= 0.1;
            mainPaddingLeft -= 0.1;
            nav.style.width = `${navWidth}rem`;
            main.style.paddingLeft = `${mainPaddingLeft}rem`;
        };
    };
};



function untuckHamburger() {
    let navWidth = nav.style.width;
    navWidth = navWidth.substring(0, navWidth.length - 3);
    navWidth = parseInt(navWidth);

    let mainPaddingLeft = main.style.paddingLeft;
    mainPaddingLeft = mainPaddingLeft.substring(0, mainPaddingLeft.length - 3);
    mainPaddingLeft = parseInt(mainPaddingLeft);

    let effect = setInterval(runEffect, 1);

    function runEffect() {
        if (navWidth > 10) {
            nav.style.width = '10rem';
            main.style.paddingLeft = '12rem';
            hamburgerTucked = false;

            clearInterval(effect);
            return;
        }

        else {
            navWidth += 0.1;
            mainPaddingLeft += 0.1;
            nav.style.width = `${navWidth}rem`;
            main.style.paddingLeft = `${mainPaddingLeft}rem`;
        };
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
        nav.style.width = '10rem';
        main.style.paddingLeft = '12rem';
        hamburgerTucked = false;
    }

    else {
        nav.style.width = '3rem';
        main.style.paddingLeft = '5rem';
        hamburgerTucked = true;

        for (let i = 0; i < navDivs.length; i++) {
            navDivs[i].style.opacity = '0';
            navDivs[i].style.display = 'none';
        };
    };
};

initialize();