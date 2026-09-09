// Legendende: dom = HTML_bereich der sichtbar ist; DOM = document object model; 
const DOM_bodyContainer = document.querySelector('.body_section');

const btn_primary_class = 'btn_primary';
const btn_secondary_class = 'btn_secondary';

DOM_bodyContainer.addEventListener('click', (t) => {

    const btn_primaryClick = t.target.closest(`.${btn_primary_class}`);
    const btn_secondaryClick = t.target.closest(`.${btn_secondary_class}`);

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

        switch(btn_secondaryClick.dataset.action) {
            case 'contact_id':

                console.log(btn_secondaryClick);
            btnUI_clickFunction('contactActive', 'contact_box_mainSection');
            break;
            default: break;
        };

    };

});