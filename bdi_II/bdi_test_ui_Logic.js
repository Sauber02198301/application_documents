// controll ui_function
const bdi_UI_controll_setup = {


    bdi_active_object: {
        active: false,
        test_active: false,
    },


    bdi_setup: {
        "indexBDI": 0,
        "questionLength": bdi_question.length,
        "display_container": null,

        "btn_click_i": 0,
        "buffer_clickEvent": 1,
        "inputValue": null,

        "bufferPoints": null,
        "points": 0,
    },

    function_activeBDI(activeBoolean, metaObject, parentDom) {
        // activeBoolean = fals || true, metaObject = das zu bearbeitende object, parentDom = das zu loschende dom & gleichzeitg das ziel;
        //console.log(activeBoolean, metaObject, parentDom);
        if (activeBoolean !== this.bdi_active_object.active) {
            this.bdi_active_object.active = activeBoolean;
            console.log(activeBoolean, metaObject, parentDom);
            renderingFunction_object.removeChildFunction(parentDom);
            renderingFunction_object.rendering_functionSystem(metaObject, parentDom);

        } else if (activeBoolean === this.bdi_active_object.active) {
            this.bdi_active_object.active = activeBoolean;
            renderingFunction_object.removeChildFunction(parentDom);
            renderingFunction_object.rendering_functionSystem(metaObject, parentDom);
        };
    },

    clickForward_function(forward) {

        const formDisplay = document.querySelector('.form_container');
        renderingFunction_object.removeChildFunction(formDisplay);



    },



    bufferPoints_function(btn_points) {
        // Legende: bufferPoints => voruebergehnder behaelter, points => permanenter behaelter & btn_points => die akuellen Punkte
        // legend: bufferPoint => nonPermanent_container, points => is a permanent container & btn_poins is the currentPoinst
        if (this.bdi_setup.bufferPoints === null) {
            this.bdi_setup.bufferPoints = btn_points;
            console.log(this.bdi_setup.bufferPoints);
            this.bdi_setup.indexBDI++;
            console.log(this.bdi_setup);
        } else {
            this.bdi_setup.points += Number(this.bdi_setup.bufferPoints);
            this.bdi_setup.bufferPoints = null;
        }


    },

    clickEvent_contol(btn_information) {
        // btn_information sendet hier seine Daten
        // btn_information send his Value propertys
        console.log(btn_information);

        if (this.bdi_setup.btn_click_i < this.bdi_setup.buffer_clickEvent) {
            //checking is btn_click smaller then buffer_clickEvent, if is it btn_click_i +1
            this.bdi_setup.btn_click_i++;
            if (this.bdi_setup.inputValue === null) { this.bdi_setup.inputValue = btn_information.id }; // id for checkUp if push a another btn

            console.log(this.bdi_setup.btn_click_i, this.bdi_setup.buffer_clickEvent, 'beide sollten hier auf 1 stehen', this.bdi_setup.inputValue);
            // hier wird nur geprueft erst wenn der zweite click kommt gehts weiter 
            //versuch englisch: i wan't checkUp to click two and that go to the next step

        } else if (this.bdi_setup.btn_click_i === this.bdi_setup.buffer_clickEvent && this.bdi_setup.inputValue === btn_information.id) {
            console.log(this.bdi_setup.btn_click_i, this.bdi_setup.buffer_clickEvent, 'is it equal go to the next step & inputValue is equel btn_information.id');
            console.log(this.bdi_setup.btn_click_i, this.bdi_setup.buffer_clickEvent, 'es geht weiter ');

            this.bufferPoints_function(btn_information.value);
        } else if (this.bdi_setup.btn_click_i === this.bdi_setup.buffer_clickEvent && this.bdi_setup.inputValue !== btn_information.id) {
            console.log('btnInformation ist not equal');
            this.bdi_setup.inputValue = btn_information.id;
            this.bdi_setup.btn_click_i = 1;
        };

    },

    /*
    
        am besten nochmal die ganze BDI_function umgestallten die functionen die im herzen der render engine sind hier 
        ansiedeln und aus dieser datei werden sie nur noch an die rendering_systemFunction übergeben.
        Die question_bdi objecte werde ich in eine function bauen so kann ich immer den richtigen index verarbeiten 
        weil wenn ich den indexBDI auf 1 setze passiert nichts. 
    
    */

    toInsert_formFunction() {



    },

    lableCreateFunction(content, answer, parentDom) {
        console.log(answer, content, parentDom);
        const formDom = document.querySelector(parentDom);
        const arrayList = [];
        console.log(formDom);
        if (!Array.isArray(content)) { Array(content) };
        content.forEach((content, a_index) => {
            console.log(content, a_index);
            const { createText: text = null, points = null } = content;
            const copy_answer = structuredClone(answer);

            copy_answer.children[0].value = String(points);
            copy_answer.children[0].id = String(a_index);
            copy_answer.children[1].createText = text;
            copy_answer.children[2].createText = `${points} Punkte`;
            // ich glaube das input muss in einen label oder ich brauche noch das for dafuer weil es lassen sich alle anklicken das hatte ich schonmal das weis ich. Ich meine das lag am for kann auch an der reihen folge liegen. 

            arrayList.push(copy_answer);

        });
        console.log(arrayList);
        renderingFunction_object.rendering_functionSystem(arrayList, formDom);
    },

    bdi_unpackageFunction(toOperate, questionBDI_label) {
        console.log(toOperate, questionBDI_label);
        const { content, answer, parentDom } = questionBDI_label;
        console.log(content, answer, parentDom);

        switch (toOperate) {

            case 'startBDI':
                console.log(toOperate, this.bdi_setup.indexBDI);
                this.lableCreateFunction(content, answer, parentDom);

                break;

            default: break;
        };
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

        const headerBDI = [
            {
                "createElement": "header",
                "classList": "questionHeader",
                "addClassList": ["bdi_question_h2"],
                "children": [
                    {
                        "createElement": "h2",
                        "classList": "text_font_h2",
                        "addClassList": ["bdi_question_h2"],
                        "createText": bdi_question[this.bdi_setup.indexBDI].questionTitle + ` ${this.bdi_setup.indexBDI + 1}`
                        // ich kann den index dafuer nutzen um den takt vorzugeben i ersetzt 0 
                    },
                    {
                        "createElement": "h3",
                        "classList": "text_font_h3",
                        "addClassList": ["bdi_question_h3"],
                        "createText": bdi_question[this.bdi_setup.indexBDI].question
                        // so wie hier i ersetzt 0 
                    }
                ]
            },
        ];
        const questionBDI_form = [
            {
                "createElement": "form",
                "classList": "questionForm",
                "addClassList": ["questinMain_radio"],
                "children": arrayAnswer
                // hier muss ich mit einer for loop arbeiten das ich children immer nach der anzahl von answer reproduziere
                //Ich ueberlege gerade ob es nicht sogar besser hier zwei ebenen zu bauen! Das sehe ich gleich wenn ich die function dafuer baue. 
            }
        ];
        const questionBDI_label = {
            "parentDom": ".form_container",
            "content": bdi_question[this.bdi_setup.indexBDI].answer,
            "answer": {
                "createElement": "label",
                "classList": "questionLabel",
                "addClassList": ["questinMain_label"],
                "children": [
                    {
                        "createElement": "input",
                        "classList": "questionInput",
                        "addClassList": ["questinMain_radio"],
                        "type": "radio",
                        "name": "answer",
                        "value": "",
                    },
                    {
                        "createElement": "span",
                        "classList": "questionText",
                        "addClassList": ["answer_inputSpan"],
                        "createText": ""
                    },
                    {
                        "createElement": "span",
                        "classList": "questionText",
                        "addClassList": ["answer_inputSpan"],
                        "createText": ""
                    }
                ]
            }
        };
        console.log(displayStartBDI, metaData_questionBDI, questionBDI_form, questionBDI_label);

        if (boolean_BDI !== this.bdi_active_object.test_active && this.bdi_active_object.active && codeWord === 'activeTest') {
            console.log(displayStartBDI, metaData_questionBDI, questionBDI_form, questionBDI_label);
            this.bdi_active_object.test_active = boolean_BDI;
            renderingFunction_object.removeChildFunction(displayStartBDI);

            renderingFunction_object.rendering_functionSystem(headerBDI, displayStartBDI);
            renderingFunction_object.rendering_functionSystem(questionBDI_form, displayStartBDI);
            this.bdi_unpackageFunction("startBDI", questionBDI_label);

        } else if (boolean_BDI === renderingFunction_object.bdi_active_object.test_active && !renderingFunction_object.bdi_active_object.active && codeWord === 'close') {
            console.log('wenn du mich siehst ist was schiefgelaufen beim aktivieren XD');
        };

    }


};
