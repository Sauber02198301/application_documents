// die eigene btn target functin die soll

const bdi_bodyDOM = document.querySelector('.bdi_body_section');

const btn_primeKey = 'btn_primar_bdi';
const btn_seconKey = 'btn_secondary_ins';

bdi_bodyDOM.addEventListener('click', (t) => {

    const click_bdi_prime = t.target.closest(`.${btn_primeKey}`);
    const click_ins_secondary = t.target.closest(`.${btn_seconKey}`);

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

    if (click_ins_secondary && bdi_bodyDOM.contains(click_ins_secondary)) {
        
        switch (click_ins_secondary.dataset.action) {

            case 'close':

                let booleanActive = renderingFunction_object.bdi_active_object.active;
                if (booleanActive) {
                    console.log(click_ins_secondary);
                    const metaObject = bdiLibrary.article_bdi;
                    const parentDom = document.querySelector('.display_section');
                    renderingFunction_object.function_activeBDI(false, metaObject, parentDom);
                }
                break
            case 'testStart':

                    if (renderingFunction_object.bdi_active_object.active && !renderingFunction_object.bdi_active_object.test_active) {
                        console.log(click_ins_secondary);
                        const displayBDI_test = document.querySelector('.display_bdi_section');
                        const questionBDI = bdi_question;
                        const questionObject = question_bdi
                        console.log(displayBDI_test, questionBDI, questionObject);
                        renderingFunction_object.function_activeBDI_test(true, questionBDI, questionObject, displayBDI_test);
                    };

                break;
            default: break;

        };

    };

});