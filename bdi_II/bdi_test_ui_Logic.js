// controll ui_function
const bdi_UI_controll_setup = {


    bdi_active_object: {
        active: false,
        test_active: false,
        activeForm: false
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

    copy_bdi_setup: null,

    input_initiation_function(questionBDI_label) {
        console.log(questionBDI_label);
        
    },

    initiation_label_function() {
        if (!this.bdi_active_object.activeForm) { return console.error("sorry_im_failed"); };

        const questionBDI_label = {
            "parentDom": ".form_container",
            "content": bdi_question[this.copy_bdi_setup.indexBDI].answer,
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
        console.log(questionBDI_label);
        this.input_initiation_function(questionBDI_label);
    },

    function_first_initiation(parentDOM) {
        if (this.copy_bdi_setup === null || this.copy_bdi_setup === undefined || this.copy_bdi_setup === '') { return };
        console.log(parentDOM);
        const mainBDI_container = [
            {
                "createElement": "header",
                "classList": "questionHeader",
                "addClassList": ["bdi_question_h2"],
                "children": [
                    {
                        "createElement": "h2",
                        "classList": "text_font_h2",
                        "addClassList": ["bdi_question_h2"],
                        "createText": bdi_question[this.copy_bdi_setup.indexBDI].questionTitle + ` ${this.copy_bdi_setup.indexBDI + 1}`
                        // ich kann den index dafuer nutzen um den takt vorzugeben i ersetzt 0 
                    },
                    {
                        "createElement": "h3",
                        "classList": "text_font_h3",
                        "addClassList": ["bdi_question_h3"],
                        "createText": bdi_question[this.copy_bdi_setup.indexBDI].question
                        // so wie hier i ersetzt 0 
                    },
                ]
            },
            {
                "createElement": "form",
                "classList": "questionForm",
                "addClassList": ["questinMain_radio"],
                "children": arrayAnswer
                // hier muss ich mit einer for loop arbeiten das ich children immer nach der anzahl von answer reproduziere
                //Ich ueberlege gerade ob es nicht sogar besser hier zwei ebenen zu bauen! Das sehe ich gleich wenn ich die function dafuer baue. 
            }
        ];
        renderingFunction_object.rendering_functionSystem(mainBDI_container, parentDOM);
        this.bdi_active_object.activeForm = true;
        this.initiation_label_function();
    },

    function_activeBDI(metaObject, parentDom_key) {
        console.log(metaObject, parentDom_key);
        const parentDOM = document.querySelector(parentDom_key);
        if (this.bdi_active_object.active) {
            console.log('active the terminator || t-1000');
            // diese funktion terminiert nicht nur sondern kehrt wieder auf die erste seite zurueck
            renderingFunction_object.removeChildFunction(parentDOM);
            this.bdi_active_object.active = false;
            this.bdi_active_object.test_active = false;
            this.copy_bdi_setup = null
            renderingFunction_object.rendering_functionSystem(metaObject, parentDOM);
        } else {
            this.bdi_active_object.active = true;
            console.log('active kyle reese');
            // diese funktion soll die naechste ebene aktivieren und die vorherige terminieren. I'll bee back XD
            renderingFunction_object.removeChildFunction(parentDOM);
            renderingFunction_object.rendering_functionSystem(metaObject, parentDOM);
        };
    },

    function_activeBDI_test(parentDom_key, controlKey) {
        console.log(parentDom_key, this.copy_bdi_setup);
        const parentDOM = document.querySelector(parentDom_key);
        // hier aktiviere ich den test wenn mann so sieht John Connor. Ich ueberpruefe hier ob copy_bdi_setup daten hat. wenn ja perfekt am ende oder wenn man abbricht loesche ich nur copy fertig
        if (this.bdi_active_object.active && !this.bdi_active_object.test_active) {
            this.bdi_active_object.test_active = true;
            renderingFunction_object.removeChildFunction(parentDOM)
            this.function_first_initiation(parentDOM);
            console.log('first Avenger', parentDOM);
        } else if (this.bdi_active_object.test_active && this.bdi_active_object.test_active) {
            console.log('ironMan, this is only lable', parentDOM);
        }

    }

};
