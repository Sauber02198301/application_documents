


const bdi_question = [
    {
        "questionTitle": "Frage",
        "question": "Wie Traurig fühlen sie sich gerade?",
        "answer": [
            { "createText": "Ich bin nicht traurig.", "points": "0" },
            { "createText": "Ich bin oft traurig.", "points": "1" },
            { "createText": "Ich bin ständig traurig.", "points": "2" },
            { "createText": "Ich bin so traurig oder unglücklich, dass ich es nicht aushalten kann.", "points": "3" }
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Wie hoffnungslos fühlen sie sich?",
        "answer": [
            { "createText": "Ich habe keine Hoffnungslosigkeit / Meine Zukunft sieht genauso aus wie immer.", "points": "0" },
            { "createText": "Ich habe oft Hoffnungslosigkeit / Meine Zukunft sieht schlechter aus als sonst.", "points": "1" },
            { "createText": "Ich bin ständig hoffnungslos / Meine Situation wird sich nie verbessern.", "points": "2" },
            { "createText": "Ich habe so viel Hoffnungslosigkeit, dass meine Zukunft aussichtslos erscheint.", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Ich fühle mich Wertlos oder als Versager?",
        "answer": [
            { "createText": "Ich fühle mich nicht als ein Versager.", "points": "0" },
            { "createText": "Ich fühle mich oft als ein Versager.", "points": "1" },
            { "createText": "Ich fühle mich ständig als ein Versager.", "points": "2" },
            { "createText": "Ich fühle mich als kompletter Versager.", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Verlust von Interesse oder Freude an Aktivitäten?",
        "answer": [
            { "createText": "Ich kann die Dinge immer genau so genießen wie sonst.", "points": "0" },
            { "createText": "Ich kann die Dinge nicht so genießen wie sonst.", "points": "1" },
            { "createText": "Es gibt Dinge, die ich nicht mehr genießen kann.", "points": "2" },
            { "createText": "Ich kann nichts mehr genießen.", "points": "3" },
        ]
    }
];

const bdi_setup = {

    "indexBDI": 0,
    "questionLength": bdi_question.length,

    "points": 0,

};

const bdi_answer = {
    "evaluation": {
        "none_depressive": {
            "min_points": 0,
            "max_points": 8,
            "lable_text": "Aktuell weisen Ihre Antworten auf keine oder eine nur minimale depressive Symptomatik hin. Das ist ein sehr erfreuliches Ergebnis, das auf eine gute psychische Stabilität hindeutet."
        },
        "min_depressive": {
            "min_points": 9,
            "max_points": 13,
            "lable_text": "Aktuell weisen Ihre Antworten auf keine oder eine nur minimale depressive Symptomatik hin. Das ist ein sehr erfreuliches Ergebnis, das auf eine gute psychische Stabilität hindeutet."
        },
        "light_depressive": {
            "min_points": 14,
            "max_points": 19,
            "lable_text": "Das Ergebnis deutet auf eine leichte depressive Symptomatik hin. Möglicherweise fühlen Sie sich aktuell etwas belastet. Es könnte hilfreich sein, diese Tendenz im Auge zu behalten und sich bei Bedarf frühzeitig Unterstützung zu suchen."
        },
        "medium_depressive": {
            "min_points": 20,
            "max_points": 28,
            "lable_text": "Ihre Punktzahl deutet auf eine mittelschwere depressive Symptomatik hin. Die Belastungen im Alltag scheinen aktuell erheblich zu sein. Wir empfehlen Ihnen, zeitnah das Gespräch mit einem Arzt oder Therapeuten zu suchen, um die Situation professionell abzuklären."
        },
        // severe_depressive
        "difficult_depressive": {
            "min_points": 29,
            "max_points": 63,
            "lable_text": "Das Testergebnis weist auf eine schwere depressive Symptomatik hin. Bitte nehmen Sie dieses Signal ernst. Es ist wichtig, dass Sie sich jetzt zeitnah professionelle Hilfe suchen (z.B. durch Ihren Hausarzt oder einen Facharzt), um gemeinsam Wege aus dieser belastenden Phase zu finden."
        }

    },

    "suicide_dark_thoughts": {

        "suicide_boolean_flag": false,
        "title": "Wichtiger Hinweis!",
        "main_text": "Ihre Antwort auf die Frage zu Suizidgedanken hat das System alarmiert. Bitte nehmen Sie diese Gefühle ernst.",
        "action_text": "Wir raten Ihnen dringend, sich sofort Unterstützung zu suchen. Sie müssen da nicht alleine durch.",
        "contacts": [
            {
                "name": "Telefonseelsorge (24h erreichbar)",
                "webside": "https://www.telefonseelsorge.de/",
                "number": "0800 111 0 111",
                "info": "Kostenlos und anonym."
            },
            {
                "name": "Notruf",
                "number": "112",
                "info": "Bei akuter Gefahr."
            }
        ]
    },
}

const arrayAnswer = [];

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
                "createText": bdi_question[bdi_setup.indexBDI].questionTitle + ` ${bdi_setup.indexBDI + 1}`
                // ich kann den index dafuer nutzen um den takt vorzugeben i ersetzt 0 
            },
            {
                "createElement": "h3",
                "classList": "text_font_h3",
                "addClassList": ["bdi_question_h3"],
                "createText": bdi_question[bdi_setup.indexBDI].question
                // so wie hier i ersetzt 0 
            }
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

const answer_bdiQuest = {
    "parentDom": ".form_container",
    "content": bdi_question[bdi_setup.indexBDI].answer,
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

/*

    

*/