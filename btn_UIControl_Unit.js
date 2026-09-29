
// the mainDOM content body_section

const body_section = document.querySelector('.body_section');

const btn_primaryClass = 'btn_primary';
const btn_secondaryClass = 'secondaryBtn';

body_section.addEventListener('click', (t) => {
    console.log(t);
    const btn_primaryClick = t.target.closest(`.${btn_primaryClass}`);
    const btn_secondaryClick = t.target.closest(`.${btn_secondaryClass}`);

    if (btn_primaryClick && body_section.contains(btn_primaryClick)) {
        
        switch (btn_primaryClick.dataset.action) {

            case 'openNav':
                console.log(btn_primaryClick);
                const dropDown_nav = document.querySelector('.dropDown_nav');
                const activeDropDown = btn_primaryClick.dataset.action;

                if(!dropDown_nav.classList.contains(`${activeDropDown}`)) {
                    dropDown_nav.classList.add(activeDropDown);
                } else {
                    dropDown_nav.classList.remove(activeDropDown);
                };

                break;

            default: break;
        };

    };

    if (btn_secondaryClick && body_section.contains(btn_secondaryClick)) {
        console.log(btn_secondaryClick);
        switch (btn_secondaryClick.dataset.action) {
            case 'imgBoxSetting':

                const imgSlideBox = document.querySelector('.imgBox');
                const active = btn_secondaryClick.dataset.action;
                console.log(imgSlideBox.classList.contains(`${active}`));
                if (!imgSlideBox.classList.contains(`${active}`)) {
                    imgSlideBox.classList.add(active);
                } else {
                    imgSlideBox.classList.remove(active);
                };

                break;
            default: break;
        };

        if (btn_secondaryClick.classList.contains('collapsibleBtn')) {
            console.log(btn_secondaryClick);
            let i;

            for(i = 0; i < btn_secondaryClick.classList.contains('collapsibleBtn').length; i++) {

                console.log(i);

            };

        };

    };

});