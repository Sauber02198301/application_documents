// controll ui_function
const bdi_UI_controll_setup = {


    bdi_active_object: {
        active: false,
        test_active: false,
        activeForm: false,
        skipBack: false,
        criticalFlag_suizid: false
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

    // das evaluationSystem ist das auswertung system der Punkte sie soll das mit den hinterlegeten werten abgleichen. 


    bdi_displaySection_UI(keyWord, metaObject) {

        const parentDom = document.querySelector('.display_bdi');
        switch (keyWord) {
            case 'skipForward':
                renderingFunction_object.removeChildFunction(parentDom);
                this.function_first_initiation(parentDom);
                this.initiation_label_function();
                break;

            case 'skipBack':
                renderingFunction_object.removeChildFunction(parentDom);
                this.function_first_initiation(parentDom);
                this.initiation_label_function();

                break;
            case 'evaluation':
                console.log(metaObject);
                if (!metaObject) { return };
                renderingFunction_object.removeChildFunction(parentDom);
                renderingFunction_object.rendering_functionSystem(metaObject, parentDom);
                break;
            default: break;
        };
    },

    evaluationSystem() {
        const evalutionLogic = bdi_answer.evaluation;
        const critical_evaluationLogic = bdi_answer.suicide_dark_thoughts;

        const arrayList = [];

        if (!Array.isArray(evalutionLogic)) { Array(evalutionLogic) };
        evalutionLogic.forEach((evalutionLogic) => {
            console.log(evalutionLogic);
            const { min_points, max_points, createText: text } = evalutionLogic;
            console.log(min_points, min_points, text);
            if (min_points <= this.copy_bdi_setup.points && max_points >= this.copy_bdi_setup.points) {
                console.log('ich bins die' + this.copy_bdi_setup.points + 'Points');
                const evaluationText = {
                    'createElement': 'div',
                    'classList': 'evaluationClass',
                    'addClassList': ['evaluationValueCSS'],
                    'children': [
                        {
                            'createElement': 'p',
                            'classList': 'evaluation_pText',
                            'addClassList': ['clueText'],
                            'createText': text
                        },
                        {
                            'createElement': 'p',
                            'classList': 'evaluation_pText',
                            'addClassList': ['clueText'],
                            'createText': `Sie haben einen BDI-Punktewert von ${this.copy_bdi_setup.points}`
                        }
                    ]
                };

                arrayList.push(structuredClone(evaluationText));
                return;
            };

        });

        if (this.bdi_active_object.criticalFlag_suizid) {
            const { title, main_text, action_text, contacts } = critical_evaluationLogic;
            console.log(title, main_text, action_text, contacts);
            const emergancy = {
                'createElement': 'div',
                'classList': 'evaluationClass',
                'addClassList': ['emergancy_cryticalFlag'],
                'children': [
                    {
                        'createElement': 'header',
                        'classList': 'cryticalFlagHeader',
                        'addClassList': ['suzid_warning'],
                        'children': [
                            
                        ]
                    }
                ]
            }


        } else {

        };
        console.log(evalutionLogic);
        this.bdi_displaySection_UI('evaluation', arrayList);
    },

    //schrit 4.1 label & input 2/2
    input_initiation_function(content, parentDOM) {

        if (!this.bdi_active_object.activeForm) { return; };
        console.log(content, parentDOM);
        if (!Array.isArray(content)) { Array(content) };

        const arrayList_awser = [];

        content.forEach((content, i) => {
            console.log(content, i);

            const { createText: text = "", points, dataset: data = null } = content;

            const questionBDI_label = {
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
                        "dataset": data || '',
                        "id": String(i),
                        "value": String(points),
                    },
                    {
                        "createElement": "span",
                        "classList": "questionText",
                        "addClassList": ["answer_inputSpan"],
                        "createText": text
                    },
                    {
                        "createElement": "span",
                        "classList": "questionText",
                        "addClassList": ["answer_inputSpan"],
                        "createText": `${String(points)} Punkte`
                    }
                ]
            };
            arrayList_awser.push(structuredClone(questionBDI_label));
        });
        console.log(arrayList_awser);
        renderingFunction_object.rendering_functionSystem(arrayList_awser, parentDOM);
    },

    // Schritt 4 initialiesierung label & input 1/2
    initiation_label_function() {
        if (!this.bdi_active_object.activeForm) { return console.error("sorry_im_failed"); };
        const content = bdi_question[this.copy_bdi_setup.indexBDI].answer;
        const display_bdi_form = document.querySelector('.form_container');
        //renderingFunction_object.removeChildFunction(display_bdi_form);
        console.log(content, display_bdi_form, 'hey hier sind tick, trick & track');

        this.input_initiation_function(content, display_bdi_form);
    },

    // Schritt drei Header und form werden initialisiert
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
        if (!this.bdi_active_object.activeForm) {
            this.bdi_active_object.activeForm = true;
        }

    },

    //Schritt 2 aktiviert den Test
    function_activeBDI(metaObject, parentDom_key) {
        console.log(metaObject, parentDom_key);
        const parentDOM = document.querySelector(parentDom_key);
        if (this.bdi_active_object.active) {
            console.log('active the terminator || t-1000');
            // diese funktion terminiert nicht nur sondern kehrt wieder auf die erste seite zurueck
            renderingFunction_object.removeChildFunction(parentDOM);
            this.bdi_active_object.active = false;
            this.bdi_active_object.test_active = false;
            this.bdi_active_object.activeForm = false;
            this.bdi_active_object.skipBack = false;
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

    //Schritt 1 aktivierung des Testes
    function_activeBDI_test(parentDom_key, controlKey) {
        console.log(parentDom_key, this.copy_bdi_setup);
        const parentDOM = document.querySelector(parentDom_key);
        // hier aktiviere ich den test wenn mann so sieht John Connor. Ich ueberpruefe hier ob copy_bdi_setup daten hat. wenn ja perfekt am ende oder wenn man abbricht loesche ich nur copy fertig
        if (this.bdi_active_object.active && !this.bdi_active_object.test_active) {
            this.bdi_active_object.test_active = true;
            renderingFunction_object.removeChildFunction(parentDOM)
            this.function_first_initiation(parentDOM);
            console.log('first Avenger', parentDOM);
            if (this.bdi_active_object.activeForm) {
                console.log('hey major Tom voellig losgeloest');
                this.initiation_label_function('.form_container');
            }
        } else if (this.bdi_active_object.active && this.bdi_active_object.test_active) {
            console.log('ironMan, this is only lable', parentDOM);
        }

    },

    // storage Engine diese soll nur speichern
    storagePoints(inputValue) {
        console.log(inputValue);
        // stepOne das ertsemal Punkte entgegen nehmen

        if (this.copy_bdi_setup.bufferPoints === null) {
            this.copy_bdi_setup.bufferPoints = inputValue;
            console.log(this.copy_bdi_setup.bufferPoints, 'puffer storage');
        } else {
            this.copy_bdi_setup.points += this.copy_bdi_setup.bufferPoints;
            this.copy_bdi_setup.bufferPoints = inputValue;
            console.log(this.copy_bdi_setup.points, 'aktuelle Punkte');
            console.log(this.copy_bdi_setup.bufferPoints, 'puffer storage');
        }
        this.forward_function();
    },

    // skip funftion ++ hier schalte ich den index hoch und er verteilt nur 
    forward_function() {
        // Es fühlt sich noch zu gross an ich sollte es kleiner denken. Oder mehr aufteilen in kleine
        // mini Funktionen
        const parentDom = document.querySelector('.display_bdi');
        if (this.copy_bdi_setup.indexBDI < this.copy_bdi_setup.questionLength) {
            //if (this.copy_bdi_setup.indexBDI >= 1 && this.copy_bdi_setup.indexBDI <= this.copy_bdi_setup.questionLength - 1) { this.bdi_active_object.skipBack = true; console.log(this.bdi_active_object.skipBack); };
            console.log('fragen');
            if (this.copy_bdi_setup.indexBDI === this.copy_bdi_setup.questionLength - 1) {
                this.copy_bdi_setup.indexBDI++;
                console.log('letzte frage, hier geht es dann zum Auswerten.');

                this.copy_bdi_setup.points += this.copy_bdi_setup.bufferPoints;
                this.copy_bdi_setup.bufferPoints = null;
                console.log(this.copy_bdi_setup.points, this.copy_bdi_setup.indexBDI);
                this.evaluationSystem()
            } else {

                console.log('normale_fragen');
                this.copy_bdi_setup.indexBDI++;
                console.log(this.copy_bdi_setup.indexBDI);
                if (this.copy_bdi_setup.indexBDI === this.copy_bdi_setup.questionLength - 2) {
                    console.log('vorletzte Frage');
                    this.bdi_active_object.skipBack = false;
                };

                this.bdi_displaySection_UI('skipForward');

            };
        };
    },

    // hier soll man ein schritt zuruck gehen das die zwischen gespeicherten Punkte 
    oneStepBack_function() {
        if (this.bdi_active_object.skipBack) {
            console.log('hier darf noch immer ein schritt zurück gegangen werden');
            this.copy_bdi_setup.indexBDI--;
            this.copy_bdi_setup.bufferPoints = null;
            this.bdi_active_object.skipBack = false;
            this.copy_bdi_setup.inputValue = null
            this.bdi_displaySection_UI('skipBack');

        } else {
            console.log('computer sagt nein');
        };
    },

    UI_click_input(input) {
        // das UI_click_system läuft nicht rund ich denke es muss eine ueberlapung geben auch das aufrufen 
        //der einzelnen funktionen sind irgendie, am anfang laueft es gut so nach den zweiten zug ist der rytmus 
        // komisch am besten baue ich dies nochmal.  
        console.log(input);
        if (this.copy_bdi_setup.inputValue === null) {
            this.copy_bdi_setup.inputValue = input.id;
            console.log(this.copy_bdi_setup.inputValue);
            return;
        }

        if (this.copy_bdi_setup.inputValue !== input.id) {
            console.log('not equal');
            this.copy_bdi_setup.inputValue = input.id;
        } else {
            console.log('skip_forward');
            if (this.copy_bdi_setup.indexBDI >= this.copy_bdi_setup.questionLength) {
                return console.log('btn_is_locked', this.copy_bdi_setup.points, this.copy_bdi_setup.bufferPoints);
            } else {
                this.copy_bdi_setup.inputValue = null;
                if (input.dataset.action) { this.bdi_active_object.criticalFlag_suizid = true };
                this.storagePoints(Number(input.value));
            }

        }

    }

};
