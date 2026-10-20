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
                    renderingFunction_object.bdi_active_object.test_active = false;
                    renderingFunction_object.function_activeBDI(false, metaObject, parentDom);
                }
                break
            case 'testStart':

                if (renderingFunction_object.bdi_active_object.active && !renderingFunction_object.bdi_active_object.test_active) {
                    console.log(click_ins_secondary);
                    const displayBDI_test = document.querySelector('.display_bdi_section');
                    const questionBDI = bdi_question;
                    const questionObject = question_bdi
                    const answerContent = answer_bdiQuest;
                    console.log(displayBDI_test, questionBDI, questionObject);
                    renderingFunction_object.function_activeBDI_test(true, questionBDI, questionObject, answer_bdiQuest, displayBDI_test);
                };

                break;
            default: break;

        };

    };

    if (clickInput_bdi && bdi_bodyDOM.contains(clickInput_bdi)) {
        console.log(clickInput_bdi);

        console.log(bdi_setup.indexBDI, bdi_setup.questionLength, bdi_setup.btn_click_i, bdi_setup.buffer_clickEvent, bdi_setup.bufferPoints, bdi_setup.points);

        // ueberprueffen ob bdi_index < (kleiner als bdi_length ist) questionLength
        if (bdi_setup.indexBDI < bdi_setup.questionLength) {
            // sende an meiner const bdi_UI_controll_setup an die function clickEvent_contol()
            bdi_UI_controll_setup.clickEvent_contol(clickInput_bdi);
        } else if (bdi_setup.indexBDI === bdi_setup.questionLength) {
            // wenn gleich erfuelle diese bedingungen. 


        };


    };

});


/*

            if (bdi_setup.btn_click_i < bdi_setup.buffer_clickEvent) {

            console.log(bdi_setup.btn_click_i, 'noch einmal clicken zum bestaetigen.');
            if (!bdi_setup.inputValue) {
                bdi_setup.btn_click_i++;
                bdi_setup.inputValue = Number(clickInput_bdi.inputValue);
            } else if (bdi_setup.inputValue === clickInput_bdi.value) {
                console.log('weiter und inputValue & bdi_setup.btn_click_i reset auf null, 0');
                if (bdi_setup.bufferPoints === null) {
                    bdi_setup.bufferPoints = Number(clickInput_bdi);

                    bdi_setup.buffer_clickEvent = null;
                    bdi_setup.btn_click_i = 0;

                }



            } else if (bdi_setup.inputValue !== clickInput_bdi.value) {
                console.log('buffer_clickEvent reset auf 0');

            }



        }

            if (bdi_setup.indexBDI < bdi_setup.questionLength) {
                bdi_setup.indexBDI ++; // zaehlt den index rauf 

                bdi_setup.points += bdi_setup.bufferPoints;  // hier ist es wichtig den letzten aller letzten zug der darf nicht mehr in den buffer der muss in den points wandern 

                bdi_setup.bufferPoints += Number(clickInput_bdi.value);    // schiebe den punktestand 

                console.log(bdi_setup.bufferPoints); // checkUp of the corrct value
                
            } else if (bdi_setup.indexBDI === bdi_setup.questionLength) {
                bdi_setup.points += Number(clickInput_bdi);

                console.log(bdi_setup.indexBDI, 'test fertig & auswerten', bdi_setup.points);

            };
            bdi_setup.btn_click_i = 0;

            console.log(bdi_setup.btn_click_i, 'reset')

*/