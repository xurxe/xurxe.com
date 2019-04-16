/* CONSTANTS ********************************************************************** */
let navTucked;
let navExpanded;


/* QUERY SELECTORS **************************************************************** */
const nav = document.querySelector('nav');
const navLogoDiv = document.querySelector('.nav-logo-div');
const navDivs = document.querySelectorAll('.nav-div');
const hamburger = document.querySelector('.hamburger');

const header = document.querySelector('header');
const main = document.querySelector('main');



/* FUNCTIONS ********************************************************************** */

function setDisplayBlock(element) {
    element.style.display = 'block';

    return;
};

function setDisplayNone(element) {
    element.style.display = 'none';

    return;
};

function makeVisible(element) {
    element.classList.remove('invisible');
    element.classList.add('visible');

    return;
};

function makeInvisible(element) {
    element.classList.remove('visible');
    element.classList.add('invisible');

    return;
};

function tuckNav() {
    navTucked = true;
    nav.classList.remove('untucked');
    nav.classList.add('tucked');

    return;
};

function untuckNav() {
    navTucked = false;
    nav.classList.remove('tucked');
    nav.classList.add('untucked');

    return;
};

function toggleNav() {
    if (navExpanded === false) {
        nav.classList.add('expanded');
        navExpanded = true;
    }

    else {
        nav.classList.remove('expanded');
        navExpanded = false;
    }

    return;
};

function increasePaddingLeft() {
    header.classList.remove('decreased');
    main.classList.remove('decreased');

    header.classList.add('increased');
    main.classList.add('increased');

    return;
};

function decreasePaddingLeft() {
    header.classList.remove('increased');
    main.classList.remove('increased');

    header.classList.add('decreased');
    main.classList.add('decreased');

    return;
};

function generateCreationColor() {
    let L = Math.round(Math.random() * (95 - 65) + 65);
    let hsl = `hsl(274, 47%, ${L}%)`;

    return hsl;
};

function generateCreation(object) {
    let {title, src, alt, href} = object;
    let creation = document.createElement('a');
    creation.className = 'creation';
    creation.href = href;
    creation.style.backgroundColor = generateCreationColor();
    main.appendChild(creation);

    let innerHTML = `
    <div class="creation-div">
        <img class="creation-img" src="${src}" alt="${alt}">
    </div>

    <p class="creation-p">${title}</p>`

    creation.innerHTML = innerHTML;
    return;
};




/* EVENT LISTENERS ************************************************************** */

window.addEventListener('resize', function() {
    if (window.innerWidth > 600) {
        if (navTucked === true) {
            makeInvisible(hamburger);
            untuckNav();
            increasePaddingLeft();

            setTimeout(function() {
                for (let i = 0; i < navDivs.length; i++) {
                    makeInvisible(navDivs[i]);
                };
                setDisplayNone(hamburger);

            }, 300);

            setTimeout(function() {
                for (let i = 0; i < navDivs.length; i++) {
                    makeVisible(navDivs[i]);
                };
            }, 600);
        };
    }

    else {
        if (navTucked === false) {
            for (let i = 0; i < navDivs.length; i++) {
                makeInvisible(navDivs[i]);
            };

            setTimeout(function() {
                for (let i = 0; i < navDivs.length; i++) {
                    makeInvisible(navDivs[i]);
                };

                setDisplayBlock(hamburger);
            }, 200);

            setTimeout(function() {
                tuckNav();
                makeVisible(hamburger);
                decreasePaddingLeft();
            }, 300);
        };
    };
});

hamburger.addEventListener('click', function() {
    toggleNav();
});


/* EXECUTION ********************************************************************** */

function initialize() {

    if (window.innerWidth > 600) {
        navTucked = false;
    }

    else {
        for (let i = 0; i < navDivs.length; i++) {
            makeInvisible(navDivs[i]);
        };
        tuckNav();
        makeVisible(hamburger);
        decreasePaddingLeft();
    };

    for (let i = 0; i < creations.length; i++) {
        generateCreation(creations[i]);
    }

    return;
};

initialize();