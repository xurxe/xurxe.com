const nav = document.querySelector('nav');
const main = document.querySelector('main');
const navLogoDiv = document.querySelector('.nav-logo-div');
const navDivs = document.querySelectorAll('.nav-div');



function hideNavContent() {
    let opacity = 1;
    let effect = setInterval(runEffect, 1);

    function runEffect() {
        if (opacity < 0) {
            for (let i = 0; i < navDivs.length; i++) {
                navDivs[i].style.display = 'none';
            };

            clearInterval(effect);
        }

        else {
            opacity -= 0.05;

            for (let i = 0; i < navDivs.length; i++) {
                navDivs[i].style.opacity = opacity;
            };
        };
    };
};



function tuckHamburger() {
    let navWidth = nav.style.width;
    navWidth = navWidth.substring(0, navWidth.length - 3);

    let mainPaddingLeft = main.style.paddingLeft;
    mainPaddingLeft = mainPaddingLeft.substring(0, mainPaddingLeft.length - 3);

    let effect = setInterval(runEffect, 1);

    function runEffect() {
        if (Math.abs(navWidth - 3) < 0.1) {
            nav.style.width = '3rem';
            main.style.paddingLeft = '5rem';
            clearInterval(effect);
        }

        else {
            navWidth -= 0.1;
            mainPaddingLeft -= 0.1;
            nav.style.width = `${navWidth}rem`;
            main.style.paddingLeft = `${mainPaddingLeft}rem`;
        };
    };
};



window.addEventListener('resize', function() {
    if (window.innerWidth > 600) {
        nav.style.width = `10rem`;
        main.style.paddingLeft = '12rem';
        for (let i = 0; i < navDivs.length; i++) {
            navDivs[i].style.opacity = 1;
            navDivs[i].style.display = 'block';
        };
    };

    if (window.innerWidth < 600) {
        hideNavContent();
        tuckHamburger();
    };
});