creations = [
    {
        title: 'The faces of Integrify',
        src: '',
        alt: '',
        href: '', 
    }, 
    {
        title: 'Rokotin',
        src: '',
        alt: '',
        href: '', 
    }, 
    {
        title: 'Duloxetine Violets',
        src: '',
        alt: '',
        href: '', 
    }, 
    {
        title: 'Re-telling',
        src: '',
        alt: '',
        href: '', 
    }, 
    {
        title: 'Ajak Majok',
        src: '',
        alt: '',
        href: '', 
    }, 
    {
        title: 'Lomgem Ipsum',
        src: '',
        alt: '',
        href: '', 
    }, 
    {
        title: 'Unicorn Cell',
        src: '',
        alt: '',
        href: '', 
    }, 
    {
        title: 'Trans Pyre',
        src: '',
        alt: '',
        href: '', 
    }, 
    {
        title: 'Hex that!',
        src: '',
        alt: '',
        href: '', 
    }, 
];


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

function initialize() {
    for (let i = 0; i < creations.length; i++) {
        generateCreation(creations[i]);
    };
};

initialize();