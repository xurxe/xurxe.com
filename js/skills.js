skills = {
    'coding': [
        {'HTML': 5},
        {'CSS': 5},
        {'JavaScript': 3},
        {'C#': 2},
        {'R': 2},
        {'binary': 1},
    ],

    'languages': [
        {'English': 5},
        {'Spanish': 5},
        {'Galician': 5},
        {'Finnish': 4},
        {'Portuguese': 3},
    ],

    'photo and illustration': [
        {'photography': 5},
        {'Lightroom CC': 5},
        {'watercolor': 5},
        {'gouache': 4},
        {'InDesign CC': 4},
        {'Gravit Designer': 4},
        {'Photoshop CC': 2},
    ],

    'video and animation': [
        {'Premiere Pro': 4},
        {'Final Cut Pro': 4},
        {'After Effects': 2},
        {'AR Studio': 2},
        {'Blender': 1},
    ],

    'game development': [
        {'Bitsy': 5},
        {'Twine': 5},
        {'Unity': 3},
    ],

    'citation management': [
        {'Zotero': 5},
        {'Refworks': 5},
        {'EndNote': 5},
    ],

    collaboration: [
        {'GitHub': 5},
        {'Slack': 5},
        {'Google Drive': 5},
        {'scheduling': 5},
        {'coordinating': 5},
        {'brainstorming': 5},
        {'teamwork': 5},
        {'communication': 5},
        {'feedback': 5},
    ],

    miscelaneous: [
        {'active listening': 5},
        {'public speaking': 5},
        {'learning': 5},
        {'teaching': 5},
        {'research': 5},
        {'scientific writing': 5},
        {'popular writing': 5},
        {'empathy': 5},
        {'enthusiasm': 8},
    ],
};



function generateStars(value) {
    let innerHtml = '';
    for (let i = 0; i < value; i++) {
        innerHtml += `
                    <div class="star-div star-${i + 1}"></div>`
    };

    return innerHtml;
};



function generateSkill(object) {
    let key = Object.keys(object);
    let innerHtml = `
            <div class="skill-div">
                <p class="skill-p">${key}</p>
                <div class="stars-div">`
    ;

    let value = Object.values(object);
    innerHtml += generateStars(value)

    innerHtml += `
                </div>
            </div>`
    ;

    return innerHtml;
};



function generateSkillCategory(object) {
    let categories = Object.keys(object);
    let innerHtml = '';

    for (i = 0; i < categories.length; i++) {
        innerHtml +=`
        <div class="skill-category-div">
            <h2>${categories[i]}</h2>
            <div class="skills-div">`
        ;
    
        let array = Object.values(Object.values(object)[i]);
        for (let j = 0; j < array.length; j++) {
            innerHtml += generateSkill(array[j]);
        }
    
        innerHtml += `
            </div>
        </div>
        `;
    };

    return innerHtml;
};

main.innerHTML = generateSkillCategory(skills);