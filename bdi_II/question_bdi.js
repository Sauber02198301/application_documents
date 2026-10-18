const bdi_question = [
    {
        "questionTitle": "Frage",
        "question": "Wie Traurig fühlen sie sich gerade?",
        "answer": [
            { "lable_text": "Ich bin nicht traurig.", "points": "0" },
            { "lable_text": "Ich bin oft traurig.", "points": "1" },
            { "lable_text": "Ich bin ständig traurig.", "points": "2" },
            { "lable_text": "Ich bin so traurig oder unglücklich, dass ich es nicht aushalten kann.", "points": "3" }
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Wie hoffnungslos fühlen sie sich?",
        "answer": [
            { "lable_text": "Ich habe keine Hoffnungslosigkeit / Meine Zukunft sieht genauso aus wie immer.", "points": "0" },
            { "lable_text": "Ich habe oft Hoffnungslosigkeit / Meine Zukunft sieht schlechter aus als sonst.", "points": "1" },
            { "lable_text": "Ich bin ständig hoffnungslos / Meine Situation wird sich nie verbessern.", "points": "2" },
            { "lable_text": "Ich habe so viel Hoffnungslosigkeit, dass meine Zukunft aussichtslos erscheint.", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Ich fühle mich Wertlos oder als Versager?",
        "answer": [
            { "lable_text": "Ich fühle mich nicht als ein Versager.", "points": "0" },
            { "lable_text": "Ich fühle mich oft als ein Versager.", "points": "1" },
            { "lable_text": "Ich fühle mich ständig als ein Versager.", "points": "2" },
            { "lable_text": "Ich fühle mich als kompletter Versager.", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Verlust von Interesse oder Freude an Aktivitäten?",
        "answer": [
            { "lable_text": "Ich kann die Dinge immer genau so genießen wie sonst.", "points": "0" },
            { "lable_text": "Ich kann die Dinge nicht so genießen wie sonst.", "points": "1" },
            { "lable_text": "Es gibt Dinge, die ich nicht mehr genießen kann.", "points": "2" },
            { "lable_text": "Ich kann nichts mehr genießen.", "points": "3" },
        ]
    }
];

const question_bdi = [

    {
        "createElement": "header",
        "classList": "questionHeader",
        "addClassList": ["bdi_question_h2"],
        "children": [
            {
                "createElement": "h2",
                "classList": "text_font_h2",
                "addClassList": ["bdi_question_h2"],
                "createText": bdi_question[0].questionTitle
                // ich kann den index dafuer nutzen um den takt vorzugeben i ersetzt 0 
            },
            {
                "createElement": "h3",
                "classList": "text_font_h3",
                "addClassList": ["bdi_question_h3"],
                "createText": bdi_question[0].question
                // so wie hier i ersetzt 0 
            }
        ]
    },
    {
        "createElement": "form",
        "classList": "questionForm",
        "addClassList": ["questinMain_radio"],
        "children": [
            // hier muss ich mit einer for loop arbeiten das ich children immer nach der anzahl von answer reproduziere
            {
                "createElement": "input",
                "classList": "questionInput",
                "addClassList": ["questinMain_radio"],
                "type": "inputRadio",
                "value": "",
            },
            {
                "createElement": "label",
                "classList": "questionLabel",
                "addClassList": ["questinMain_label"],
                "for": "",
                "createText": ""
            }
        ]
    }
];

