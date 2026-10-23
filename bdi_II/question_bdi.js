// BDI_question Library


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
    },
    {
        "questionTitle": "Frage",
        "question": "Ich fühle mich ständig Schuldig oder denkt an vergangene Fehler?",
        "answer": [
            { "createText": "Ich fühle mich nicht schuldig.", "points": "0" },
            { "createText": "Ich fühle mich oft schuldig für das was ich mache oder nicht mache.", "points": "1" },
            { "createText": "Ich fühle mich ständig schuldig.", "points": "2" },
            { "createText": "Ich fühle mich so schuldig, dass ich die Gedanken nicht aushalten kann.", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Ich fühle mich ständig als wenn ich Bestraft werde?",
        "answer": [
            { "createText": "Ich fühle mich nicht bestraft.", "points": "0" },
            { "createText": "Ich habe das Gefühl, das ich leicht bestraft werde.", "points": "1" },
            { "createText": "Ich habe das Gefühl bestraft zu werden.", "points": "2" },
            { "createText": "Ich habe das Gefühl, ich werde ständig bestraft.", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Ich lehne mich sich selber ab / Selbsthass?",
        "answer": [
            { "createText": "Ich lehne mich nicht ab.", "points": "0" },
            { "createText": "Mein Vertrauen in mir ist schwächer als sonst.", "points": "1" },
            { "createText": "Ich bin ständig unzufieden mit mir.", "points": "2" },
            { "createText": "Ich lehne mich so sehr ab, dass ich mich nicht mehr leiden kann.", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Ich bin nie mit mir Zufrieden ich beziehe alles was passiert auf mich?",
        "answer": [
            { "createText": "Ich bin mit mir zufrieden wie sonst.", "points": "0" },
            { "createText": "Ich bin nicht so zufrieden mit mir, das geht besser.", "points": "1" },
            { "createText": "Ich bin ständig unzufrieden mit mir.", "points": "2" },
            { "createText": "Ich bin so unzufrieden mit mir, dass ich mich selbst so bemitleide das alles schlimme nur mir passiert.", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Selbstmordgedanken?",
        "answer": [
            { "createText": "Ich denke nicht daran mir was anzutun!", "points": "0" },
            { "createText": "Ich denke daran mir was anzutun, ich würde es nicht tun!", "points": "1" },
            { "createText": "Ich würde am liebsten nicht mehr leben oder mir was antun!", "points": "2", "dataset": "criticalFlag" },
            { "createText": "Wenn ich die Gelegenheit sehe werde ich mich umbringen!", "points": "3", "dataset": "criticalFlag" },
            // wenn  two und three zu treffen am ende des test eine Meldung einbauen. mit telefonNummer fur seelsorge / link zur seite. 
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Weinen?",
        "answer": [
            { "createText": "Ich weine nicht mehr als sonst.", "points": "0" },
            { "createText": "Ich weine mehr als sonst.", "points": "1" },
            { "createText": "Ich weine ständig und bei jedem Anlass!", "points": "2" },
            { "createText": "Ich kann gar nicht mehr Weinen!", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Innere Unruhe?",
        "answer": [
            { "createText": "Ich bin nicht unruhig.", "points": "0" },
            { "createText": "Ich bin unruhiger als sonst.", "points": "1" },
            { "createText": "Ich bin ständig unruhig.", "points": "2" },
            { "createText": "Ich bin so unruhig, dass ich mich ständig bewegen muss und zu tun haben muss!", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Wie sehr kannst du dich momentan für Dinge begeistern?",
        "answer": [
            { "createText": "Ich habe genauso viel Freude an meinen Hobbys und an anderen Menschen wie immer.", "points": "0" },
            { "createText": "Ich merke, dass ich mich für vieles nicht mehr so begeistern kann wie früher.", "points": "1" },
            { "createText": "Es fällt mir schwer, überhaupt noch echtes Interesse für meine Umwelt aufzubringen.", "points": "2" },
            { "createText": "Mir ist mittlerweile fast alles egal; ich fühle kaum noch eine Verbindung zu Aktivitäten oder Menschen.", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Ich kann mich schlecht entscheiden?",
        "answer": [
            { "createText": "Ich kann mich sehr gut entscheiden!", "points": "0" },
            { "createText": "Ich kann mich nicht so gut entscheiden wie sonst!", "points": "1" },
            { "createText": "Mir fällt es sehr schwer mich zu entscheiden!", "points": "2" },
            { "createText": "Mir fällt es extrem schwer mich zu entscheiden!", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Ich fühle mich Wertlos als Mensch?",
        "answer": [
            { "createText": "Ich fühle mich Wertvoll!", "points": "0" },
            { "createText": "Ich fühle mich weniger Wertvoll als sonst!", "points": "1" },
            { "createText": "Ich fühle mich Wertloser als andere Menschen!", "points": "2" },
            { "createText": "Ich fühle mich so, dass ich nichts wert bin und dass ich nicht liebenswert bin!", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Energieverlust, Trägheit?",
        "answer": [
            { "createText": "Ich habe sehr viel Energie und Tatendrang!", "points": "0" },
            { "createText": "Ich fühle mich weniger energiegeladen als sonst!", "points": "1" },
            { "createText": "Ich fühle mich sehr energielos!", "points": "2" },
            { "createText": "Ich fühle mich so energielos, dass ich nichts mehr schaffen kann!", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Schlafstörungen oder ständig das Gefühl schlafen zu müssen?",
        "answer": [
            { "createText": "ich schlafe wie immer sehr gut!", "points": "0" },
            { "createText": "Ich schlafe mehr als sonst!", "points": "1" },
            { "createText": "Ich schlafe weniger als sonst!", "points": "1" },
            { "createText": "Ich schlafe sehr viel mehr als sonst!", "points": "2" },
            { "createText": "Ich schlafe sehr viel weniger als sonst!", "points": "2" },
            { "createText": "Ich schlafe ständig und kann nicht aufstehen!", "points": "3" },
            { "createText": "Ich schlafe sehr unruhig und werde wach und kann nicht mehr einschlafen!", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Reizbarkeit?",
        "answer": [
            { "createText": "Ich bin nicht reizbarer als sonst!", "points": "0" },
            { "createText": "Ich bin reizbarer als sonst!", "points": "1" },
            { "createText": "Ich bin sehr reizbar!", "points": "2" },
            { "createText": "Ich bin so gereizt das mich jede Kleinigkeit zum ausrasten bringt!", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Verlust von Appetit oder Heißhunger?",
        "answer": [
            { "createText": "Normaler Appetit!", "points": "0" },
            { "createText": "Ich esse schlechter als sonst!", "points": "1" },
            { "createText": "Ich esse mehr als sonst!", "points": "1" },
            { "createText": "Ich esse schlechter als sonst!", "points": "2" },
            { "createText": "Ich esse viel mehr als sonst vermehrt Heißhungerattacken!", "points": "2" },
            { "createText": "Ich habe gar keinen Appetit mehr und esse so gut wie nichts mehr!", "points": "3" },
            { "createText": "Ich habe ständig Heißhunger!", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Konzentrationsstörungen?",
        "answer": [
            { "createText": "Ich kann mich sehr gut Konzentrieren!", "points": "0" },
            { "createText": "Ich kann mich nicht so gut Konzentrieren wie sonst!", "points": "1" },
            { "createText": "Es fällt mir sehr schwer mich länger zu Konzentrieren!", "points": "2" },
            { "createText": "Ich kann mich auf gar nichts mehr Konzentrieren!", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Müdigkeit oder Energielosigkeit?",
        "answer": [
            { "createText": "Ich fühle mich sehr Fit und habe viel Energie!", "points": "0" },
            { "createText": "Ich fühle mich weniger Energiegeladen als sonst!", "points": "1" },
            { "createText": "Ich fühle mich für viele Aufgaben zu erschöpft!", "points": "2" },
            { "createText": "Ich fühle mich sehr müde und Energielos und schaffe nichts mehr!", "points": "3" },
        ]
    },
    {
        "questionTitle": "Frage",
        "question": "Sexuelle Unlust?",
        "answer": [
            { "createText": "Ich habe immer noch sehr viel Lust auf Sexualität!", "points": "0" },
            { "createText": "Ich habe weniger Lust auf Sexualität als sonst!", "points": "1" },
            { "createText": "Ich habe viel weniger Lust auf Sexualität!", "points": "2" },
            { "createText": "Ich habe gar keine Lust auf Sexualität mehr!", "points": "3" },
        ]
    }
];

/*const bdi_setup = {

    "indexBDI": 0,
    "questionLength": bdi_question.length,
    "display_container": null,


    "btn_click_i": 0,
    "buffer_clickEvent": 1,
    "inputValue": null,


    "bufferPoints": null,
    "points": 0,

};*/

const bdi_answer = {
    "evaluation": [
        {
            "min_points": 0,
            "max_points": 8,
            "createText": "Aktuell weisen Ihre Antworten auf keine oder eine nur minimale depressive Symptomatik hin. Das ist ein sehr erfreuliches Ergebnis, das auf eine gute psychische Stabilität hindeutet."
        },
        {
            "min_points": 9,
            "max_points": 13,
            "createText": "Aktuell weisen Ihre Antworten auf keine oder eine nur minimale depressive Symptomatik hin. Das ist ein sehr erfreuliches Ergebnis, das auf eine gute psychische Stabilität hindeutet."
        },
        {
            "min_points": 14,
            "max_points": 19,
            "createText": "Das Ergebnis deutet auf eine leichte depressive Symptomatik hin. Möglicherweise fühlen Sie sich aktuell etwas belastet. Es könnte hilfreich sein, diese Tendenz im Auge zu behalten und sich bei Bedarf frühzeitig Unterstützung zu suchen."
        },
        {
            "min_points": 20,
            "max_points": 28,
            "createText": "Ihre Punktzahl deutet auf eine mittelschwere depressive Symptomatik hin. Die Belastungen im Alltag scheinen aktuell erheblich zu sein. Wir empfehlen Ihnen, zeitnah das Gespräch mit einem Arzt oder Therapeuten zu suchen, um die Situation professionell abzuklären."
        },
        // severe_depressive
        {
            "min_points": 29,
            "max_points": 63,
            "createText": "Das Testergebnis weist auf eine schwere depressive Symptomatik hin. Bitte nehmen Sie dieses Signal ernst. Es ist wichtig, dass Sie sich jetzt zeitnah professionelle Hilfe suchen (z.B. durch Ihren Hausarzt oder einen Facharzt), um gemeinsam Wege aus dieser belastenden Phase zu finden."
        }

    ],

    "suicide_dark_thoughts": {
        "title": "Wichtiger Hinweis!",
        "main_text": "Ihre Antwort auf die Frage zu Suizidgedanken hat das System alarmiert. Bitte nehmen Sie diese Gefühle ernst.",
        "action_text": "Wir raten Ihnen dringend, sich sofort Unterstützung zu suchen. Sie müssen da nicht alleine durch.",
        "contacts": [
            {
                "webName": "Telefonseelsorge (24h erreichbar)",
                "webside": "https://www.telefonseelsorge.de/",
                "numberList": "0800 111 0 111",
                "info": "Kostenlos und anonym."
            },
            {
                "webName": "Notruf",
                "numberList": "112",
                "info": "Bei akuter Gefahr."
            }
        ]
    },
}

const arrayAnswer = [];
