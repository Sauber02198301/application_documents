// die eigene btn target functin die soll

const bdi_bodyDOM = document.querySelector('.bdi_body_section');

const btn_primeKey = 'btn_primar_bdi';

bdi_bodyDOM.addEventListener('click', (t) => {

    const click_bdi_prime = t.target.closest(`.${btn_primeKey}`);

    if (click_bdi_prime && bdi_bodyDOM.contains(click_bdi_prime)) {

        switch (click_bdi_prime.dataset.action) {
            case 'start_BDI':
                console.log(click_bdi_prime);
                let booleanActive = renderingFunction_object.bdi_active_object.active;
                console.log(booleanActive);
                if (!booleanActive) {
                    const parentDom = document.querySelector('.display_section');
                    const metaObject = instruction_sheet;
                    console.log(parentDom, metaObject);
                    renderingFunction_object.function_activeBDI(true, metaObject, parentDom);
                    return;
                };


                break;

            default: break;
        }

    };

});