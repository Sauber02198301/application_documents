// die eigene btn target functin die soll

const bdi_bodyDOM = document.querySelector('.bdi_body_section');

const btn_primeKey = 'btn_primar_bdi';
const btn_seconKey = 'btn_secondary_ins';

const bdi_inputKey = 'input_bdi';

bdi_bodyDOM.addEventListener('click', (t) => {

    const click_bdi_prime = t.target.closest(`.${btn_primeKey}`);
    const click_ins_secondary = t.target.closest(`.${btn_seconKey}`);
    // Ich erstelle hier den bdi_inptut btn.  
    const clickInput_bdi = t.target.closest(`.${bdi_inputKey}`);
    let booleanActive = bdi_UI_controll_setup.bdi_active_object.active;
    let booleanActiveTest = bdi_UI_controll_setup.bdi_active_object.test_active;

    if (click_bdi_prime && bdi_bodyDOM.contains(click_bdi_prime)) {

        switch (click_bdi_prime.dataset.action) {
            case 'start_BDI':
                if (!booleanActive) {
                    const parentDom = '.display_section';
                    const metaObject = instruction_sheet;
                    bdi_UI_controll_setup.function_activeBDI(metaObject, parentDom);
                    return;
                };
                break;
            default: break;
        }
    };

    if (click_ins_secondary && bdi_bodyDOM.contains(click_ins_secondary)) {

        switch (click_ins_secondary.dataset.action) {

            case 'close':
                if (booleanActive) {
                    const metaObject = bdiLibrary.article_bdi;
                    const parentDom = '.display_section';
                    bdi_UI_controll_setup.function_activeBDI(metaObject, parentDom);
                }
                break
            case 'testStart':
                if (booleanActive && !booleanActiveTest) {
                    const parentDOM = '.display_bdi';
                    if (bdi_UI_controll_setup.copy_bdi_setup === null || bdi_UI_controll_setup.copy_bdi_setup === undefined || bdi_UI_controll_setup.copy_bdi_setup === '') { bdi_UI_controll_setup.copy_bdi_setup = structuredClone(bdi_UI_controll_setup.bdi_setup); };
                    bdi_UI_controll_setup.function_activeBDI_test(parentDOM);
                }
                break;
            case 'stepBack':
                console.log('btn_click');
                if (bdi_UI_controll_setup.bdi_active_object.active && bdi_UI_controll_setup.bdi_active_object.test_active) {
                    console.log('wenn beide aktive sollte es hier clicken')
                    if (bdi_UI_controll_setup.copy_bdi_setup.indexBDI >= 1 || bdi_UI_controll_setup.copy_bdi_setup.indexBDI <= bdi_UI_controll_setup.copy_bdi_setup.questionLength - 2) {
                        bdi_UI_controll_setup.bdi_active_object.skipBack = true;
                        console.log(bdi_UI_controll_setup.bdi_active_object.skipBack);
                        bdi_UI_controll_setup.oneStepBack_function();
                    } else {
                        bdi_UI_controll_setup.bdi_active_object.skipBack = false;
                    };
                };

                break;
            default: break;
        };

    };

    if (clickInput_bdi && bdi_bodyDOM.contains(clickInput_bdi)) {

        bdi_UI_controll_setup.UI_click_input(clickInput_bdi);
    };

});