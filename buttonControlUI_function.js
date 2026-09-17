// Legendende: dom = HTML_bereich der sichtbar ist; DOM = document object model; 
const DOM_bodyContainer = document.querySelector('.body_section');

const btn_primary_class = 'btn_primary';
const btn_secondary_class = 'btn_secondary';

DOM_bodyContainer.addEventListener('click', (t) => {

    const btn_primaryClick = t.target.closest(`.${btn_primary_class}`);
    const btn_secondaryClick = t.target.closest(`.${btn_secondary_class}`);

    const displaySection = document.querySelector('.display_sectionCenter');

    console.log(t);

    if (btn_primaryClick && DOM_bodyContainer.contains(btn_primaryClick)) {

        switch (btn_primaryClick.dataset.action) {

            case 'btnHome_open':
                console.log(btn_primaryClick);
                btnUI_clickFunction('toggle_dropDown', 'nav_style');
                //console.log(typeof btnFunctionsLibrary.btnUI_clickFunction[btn_secondaryClick.dataset.action] === 'function');
                break;
            default: break;
        };

    };

    if (btn_secondaryClick && DOM_bodyContainer.contains(btn_secondaryClick)) {

        switch (btn_secondaryClick.dataset.action) {
            case 'contact_id':

                console.log(btn_secondaryClick);
                btnUI_clickFunction('contactActive', 'contact_box_mainSection');
                break;
            case 'lebenslauf':
                console.log(btn_secondaryClick);

                

                const cleanDOM = dom_terminationFunction(displaySection, slideShow_content, false);

                //mainUiBoolaenSetting.mainUiBooleanSetting(vitaObject, displaySection); 
                break;
            default: break;
        };

    };

});

function dom_terminationFunction(html_element, slideShow_content, intervalBoolean) {
    console.log(html_element, slideShow_content, intervalBoolean);

    Object.entries(slideShow_content).forEach(([keyName, propertyValue]) => {
        console.log(keyName, propertyValue);
        if (typeof propertyValue === 'boolean') {
            slideShow_content[keyName] = intervalBoolean;
        };
    });
    console.log(slideShow_content);
    if (html_element.innerHTML.trim() !== "") {
        console.log('domElement ist befuelt');
        
    } else {
        console.log('dom ist leer');

    };

};