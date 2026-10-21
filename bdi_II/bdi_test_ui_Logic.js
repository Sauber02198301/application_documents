// controll ui_function
const bdi_UI_controll_setup = {

    bdi_setup_resret: {

        "indexBDI": 0,
        "questionLength": bdi_question.length,
        "display_container": null,


        "btn_click_i": 0,
        "buffer_clickEvent": 1,
        "inputValue": null,


        "bufferPoints": null,
        "points": 0,

    },

/*    
    bdi_active_object: {
        active: false,
        test_active: false,
    },
*/
    clickForward_function(forward) {

        const formDisplay = document.querySelector('.form_container');
        renderingFunction_object.removeChildFunction(formDisplay);



    },

    bufferPoints_function(btn_points) {
        // Legende: bufferPoints => voruebergehnder behaelter, points => permanenter behaelter & btn_points => die akuellen Punkte
        // legend: bufferPoint => nonPermanent_container, points => is a permanent container & btn_poins is the currentPoinst
        if (bdi_setup.bufferPoints === null) {
            bdi_setup.bufferPoints = btn_points;
            console.log(bdi_setup.bufferPoints);
            bdi_setup.indexBDI++;
            console.log(bdi_setup);
        } else {
            bdi_setup.points += Number(bdi_setup.bufferPoints);
            bdi_setup.bufferPoints = null;
        }


    },

    clickEvent_contol(btn_information) {
        // btn_information sendet hier seine Daten
        // btn_information send his Value propertys
        console.log(btn_information);

        if (bdi_setup.btn_click_i < bdi_setup.buffer_clickEvent) {
            //checking is btn_click smaller then buffer_clickEvent, if is it btn_click_i +1
            bdi_setup.btn_click_i++;
            if (bdi_setup.inputValue === null) { bdi_setup.inputValue = btn_information.id }; // id for checkUp if push a another btn

            console.log(bdi_setup.btn_click_i, bdi_setup.buffer_clickEvent, 'beide sollten hier auf 1 stehen', bdi_setup.inputValue);
            // hier wird nur geprueft erst wenn der zweite click kommt gehts weiter 
            //versuch englisch: i wan't checkUp to click two and that go to the next step

        } else if (bdi_setup.btn_click_i === bdi_setup.buffer_clickEvent && bdi_setup.inputValue === btn_information.id) {
            console.log(bdi_setup.btn_click_i, bdi_setup.buffer_clickEvent, 'is it equal go to the next step & inputValue is equel btn_information.id');
            console.log(bdi_setup.btn_click_i, bdi_setup.buffer_clickEvent, 'es geht weiter ');

            this.bufferPoints_function(btn_information.value);
        } else if (bdi_setup.btn_click_i === bdi_setup.buffer_clickEvent && bdi_setup.inputValue !== btn_information.id) {
            console.log('btnInformation ist not equal');
            bdi_setup.inputValue = btn_information.id;
            bdi_setup.btn_click_i = 1;
        };

    },

    bdi_unpackageFunction(metaData_questionBDI) {
        console.log(metaData_questionBDI);


    },

    bdi_UIStart_function(boolean_BDI, codeWord) {

        /*
            bdi_question => metaDaten des bdi_test
            question_bdi => ist der form content
            answer_bdiQuest => dies ist der label content
            displayStartBDI => der bdi Anzeige container
        */
        // Start bdiTest display
        const displayStartBDI = document.querySelector('.display_bdi_section');

        // metaData enthalten den kompletten daten / index wert
        const metaData_questionBDI = bdi_question

        const questionBDI_form = question_bdi;
        const questionBDI_label = answer_bdiQuest;
        console.log(displayStartBDI, metaData_questionBDI, questionBDI_form, questionBDI_label);

        if (boolean_BDI !== renderingFunction_object.bdi_active_object.test_active && renderingFunction_object.bdi_active_object.active && codeWord === 'activeTest') {
            console.log(displayStartBDI, metaData_questionBDI, questionBDI_form, questionBDI_label);
            console.log(boolean_BDI, renderingFunction_object.bdi_active_object, codeWord);
            renderingFunction_object.removeChildFunction(displayStartBDI);
            this.bdi_unpackageFunction(metaData_questionBDI, )
            console.log('wenn du mich siehst ist was schiefgelaufen beim aktivieren XD')
        } else if (boolean_BDI === renderingFunction_object.bdi_active_object.test_active && !renderingFunction_object.bdi_active_object.active && codeWord === 'close');

    }


};
