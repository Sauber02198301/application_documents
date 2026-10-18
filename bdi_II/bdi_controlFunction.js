
const bdiControl = {

    startFunctionBDI_test(bdi_boolean) {

        controlBooleans.toggle_bdi_II = bdi_boolean;
        const display_main = document.querySelector(`.main_section`);
        //console.log(dom_display, controlBooleans.toggle_bdi_II);
        if (!controlBooleans.toggle_bdi_II) {
            bdi_metaLibary.meta_setup.controlSettingsBDI.bdi_index = 0;
            bdi_metaLibary.meta_setup.controlSettingsBDI.storageValue = 0;
            display_main.innerHTML = '';
        } else {
            htmlStart.controlFunction(bdi_test.bdi_area, diplay_main);
        }


    },

    functionActiveBDI_II_test(bdi_toggleOn, bdi_test_objectCode) {
        //console.log(bdi_toggleOn);
        const inputObject = bdi_metaLibary.input_BDI_setup;

        const display_bdiContainer = document.querySelector(`.bdi_main`);
        const displayFooter = document.querySelector(`.bdi_footer`);
        display_bdiContainer.innerHTML = '';
        displayFooter.innerHTML = '';

        htmlStart.create_a_inputCode_code(inputObject, display_bdiContainer, displayFooter);
    },



    bdi_controlFunction(object_code, display_form, display_content_two) {

        console.log(object_code, display_form, display_content_two)
        const display_element = display_form ? display_form : null;
        const display_element_two = display_content_two ? display_content_two : null;
        const html_tag_element = document.querySelector(`.${display_element.class_code}`);

        //console.log(html_tag_element);
        //console.log(display_element, display_element_two);

        const { object_h1, object_h2, object_label, object_input, object_span, object_br, meta_content, meta_control_setting, meta_h1_setup, meta_h2_setup, meta_label_setup, meta_input_setup, meta_span_setup } = object_code;

        const test_question = { ...bdi_test[meta_content] } || null;
        //console.log(Array.isArray(test_question));
        let keyWords_question = null;
        if (!Array.isArray(test_question)) { keyWords_question = Object.keys(test_question); };

        //console.log(keyWords_question);

        const html_label = { ...html_brick_object[object_label] } || null;
        const html_h1 = { ...html_brick_object[object_h1] } || null;
        const html_h2 = { ...html_brick_object[object_h2] } || null;
        const html_input = { ...html_brick_object[object_input] } || null;
        const html_span = { ...html_brick_object[object_span] } || null;
        const html_br = { ...html_brick_object[object_br] } || null;

        const labelTest = htmlStart.findSetupFunction(meta_label_setup);
        htmlStart.object_pairing_fuction(html_label, labelTest);
        const h1_setup = htmlStart.findSetupFunction(meta_h1_setup);
        htmlStart.object_pairing_fuction(html_h1, h1_setup);
        const h2_setup = htmlStart.findSetupFunction(meta_h2_setup);
        htmlStart.object_pairing_fuction(html_h2, h2_setup);
        const input_setup = htmlStart.findSetupFunction(meta_input_setup);
        htmlStart.object_pairing_fuction(html_input, input_setup);
        const span_setup = htmlStart.findSetupFunction(meta_span_setup);
        htmlStart.object_pairing_fuction(html_span, span_setup);

        const spanPoints = { ...html_span };

        const controlSetup = htmlStart.findSetupFunction(meta_control_setting)

        console.log(controlSetup);

        //console.log(html_h1, html_h2, html_label, html_input, html_span);
        this.questionFunction(html_tag_element, display_element_two, test_question, keyWords_question, controlSetup, html_label, html_h1, html_h2, html_input, html_span, spanPoints, html_br);
    },

    questionFunction(html_tag_element, display_element_two, test_question, keyWords_question, controlSetup, html_label, html_h1, html_h2, html_input, html_span, spanPoints, html_br) {
        console.log(html_tag_element, display_element_two, test_question, keyWords_question, controlSetup, html_label, html_h1, html_h2, html_input, html_span, spanPoints, html_br);
        html_tag_element.innerHTML = '';
        const { clickIndex, bdi_index, inputId, controlBoolean_id, testStartBoolean, storageValue } = controlSetup;

        let index = bdi_index;
        let controlBoolean = testStartBoolean;
        let test_questionArrayIndex = keyWords_question[index];
        console.log(keyWords_question.length - 1, index);
        if (index >= keyWords_question.length) {
            console.log('exit')
            //this.startFunctionBDI_test(false);
            this.evaluationFunction(html_tag_element, display_element_two, storageValue);

            return;
        }

        let loadObjectData = test_question[test_questionArrayIndex];
        const { answer, question, questionTitle } = loadObjectData;

        html_h1.lable_text = `${questionTitle} ${index + 1}`
        html_h2.lable_text = question;
        // mein ausgabe array itemContent
        const itemContent = [html_h1, html_h2];

        Object.values(answer).forEach((answerText, i) => itemContent.push(this.answerCreateFunction(answerText, i, html_label, html_input, html_span, spanPoints)));
        console.log(itemContent);
        htmlStart.controlFunction(itemContent, html_tag_element);
        console.error(bdi_metaLibary.meta_setup.controlSettingsBDI.storageValue);
        //console.log(index, loadObjectData, testStartBoolean);

    },

    answerCreateFunction(answer, i, html_label, html_input, html_span, spanPoints) {

        console.log(answer, i, html_input, html_span, spanPoints);
        const { lable_text, points, action_typ } = answer;
        const copy_label = { ...html_label };
        const copy_input = { ...html_input };
        copy_input.id_code = `answer_${points}`;
        copy_input.name_code = `answer`;
        copy_input.value_code = Number(points);
        copy_input.action_type = action_typ;

        const copy_span = { ...html_span };
        copy_span.lable_text = lable_text;
        const span_points_copy = { ...spanPoints };
        span_points_copy.lable_text = `${points} Punkte`;

        copy_label.item_code = [copy_input, copy_span, span_points_copy];

        console.log(copy_label);
        return copy_label;

    },


    evaluationFunction(html_tag_element, display_element_two, storageValue) {

        console.log(html_tag_element, display_element_two, storageValue);
        const evaluation = bdi_test.evaluation;
        const suicide_dark = bdi_test.suicide_dark_thoughts;
        Object.keys(evaluation).forEach((evaluatet) => {
            console.log(evaluatet);
            const evaluatetObject = evaluation[evaluatet];
            const { min_points, max_points, lable_text } = evaluatetObject;
            console.log(min_points, max_points);
            if (storageValue >= min_points && storageValue <= max_points) {
                console.log(storageValue, 'text');
                if(suicide_dark.suicide_boolean_flag === true) {

                    console.log(suicide_dark.suicide_boolean_flag);

                };

                return
            }else {

            }; 
            
        });
        console.log(evaluation, suicide_dark);
    }




};