/* VARIABLES ********************************************************************** */



/* QUERY SELECTORS **************************************************************** */
const nav = document.querySelector('nav');
const navLogoDiv = document.querySelector('.nav-logo-div');
const navDivs = document.querySelectorAll('.nav-div');
const hamburger = document.querySelector('.hamburger');

const body = document.querySelector('body');
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
    nav.classList.remove('untucked');
    nav.classList.add('tucked');
    return;
};

function untuckNav() {
    nav.classList.remove('tucked');
    nav.classList.add('untucked');
    return;
};

function expandNav() {
    nav.classList.add('expanded');
    return;
};

function collapseNav() {
    nav.classList.remove('expanded');
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
        if (nav.classList.contains('tucked')) {
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
        if (nav.classList.contains('untucked')) {
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

    if (nav.classList.contains('expanded')) {
        for (let i = 0; i < navDivs.length; i++) {
            makeInvisible(navDivs[i]);
        };
        body.style.overflowX = 'scroll';

        setTimeout(function() {
            collapseNav();
            makeVisible(header);
            makeVisible(main);
        }, 300);
    }

    else {
        expandNav();
        body.style.overflowX = 'hidden';

        setTimeout(function() {
            for (let i = 0; i < navDivs.length; i++) {
                makeVisible(navDivs[i]);
            };
        }, 200);

        setTimeout(function() {
            makeInvisible(header);
            makeInvisible(main);
        }, 300);
    }


});


/* EXECUTION ********************************************************************** */

function initialize() {

    if (window.innerWidth < 600) {
        for (let i = 0; i < navDivs.length; i++) {
            makeInvisible(navDivs[i]);
        };
        tuckNav();
        makeVisible(hamburger);
        decreasePaddingLeft();
    };

    for (let i = 0; i < creations.length; i++) {
        generateCreation(creations[i]);
    };

    return;
};

initialize();