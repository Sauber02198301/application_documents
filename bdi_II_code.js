//          BDI_II Test

const bdi_question = [
    // frage 1 : "index: 0";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Wie Traurig fühlen sie sich gerade?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin nicht traurig.", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin oft traurig.", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin ständig traurig.", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin so traurig oder unglücklich, dass ich es nicht aushalten kann.", "3" + "Punkte"] },
            ]
        },
    },
    // frage 2 : "index: 1";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Wie hoffnungslos fühlen sie sich?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich habe keine Hoffnungslosigkeit / Meine Zukunft sieht genauso aus wie immer.", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich habe oft Hoffnungslosigkeit / Meine Zukunft sieht schlechter aus als sonst.", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin ständig hoffnungslos / Meine Situation wird sich nie verbessern.", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich habe so viel Hoffnungslosigkeit, dass meine Zukunft aussichtslos erscheint.", "3" + "Punkte"] },
            ]
        }
    },
    // frage 3 : "index: 2";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Ich fühle mich Wertlos oder als Versager?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich nicht als ein Versager.", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich oft als ein Versager.", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich ständig als ein Versager.", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich als kompletter Versager.", "3" + "Punkte"] },
            ]
        }
    },
    // frage 4 : "index: 3"; 
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Verlust von Interesse oder Freude an Aktivitäten?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich kann die Dinge immer genau so genießen wie sonst.", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich kann die Dinge nicht so genießen wie sonst.", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Es gibt Dinge, die ich nicht mehr genießen kann.", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich kann nichts mehr genießen.", "3" + "Punkte"] },
            ]
        }
    },
    // frage 5 : "index: 4";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Ich fühle mich ständig Schuldig oder denkt an vergangene Fehler?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich nicht schuldig.", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich oft schuldig für das was ich mache oder nicht mache.", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich ständig schuldig.", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich so schuldig, dass ich die Gedanken nicht aushalten kann.", "3" + "Punkte"] },
            ]
        }
    },
    // frage 6 : "index: 5"
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Ich fühle mich ständig als wenn ich Bestraft werde?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich nicht bestraft.", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich habe das Gefühl, das ich leicht bestraft werde.", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich habe das Gefühl bestraft zu werden.", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich habe das Gefühl, ich werde ständig bestraft.", "3" + "Punkte"] },
            ]
        }
    },
    // frage 7 : "index: 6";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Ich lehne mich sich selber ab / Selbsthass?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich lehne mich nicht ab.", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Mein Vertrauen in mir ist schwächer als sonst.", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin ständig unzufieden mit mir.", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich lehne mich so sehr ab, dass ich mich nicht mehr leiden kann.", "3" + "Punkte"] },
            ]
        }
    },
    // frage 8 : "index: 7";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Ich bin nie mit mir Zufrieden ich beziehe alles was passiert auf mich?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin mit mir zufrieden wie sonst.", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin nicht so zufrieden mit mir, das geht besser.", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin ständig unzufrieden mit mir.", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin so unzufrieden mit mir, dass ich mich selbst so bemitleide das alles schlimme nur mir passiert.", "3" + "Punkte"] },
            ]
        }
    },
    // frage 9 : "index: 8";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Selbstmordgedanken?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich denke nicht daran mir was anzutun!", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich denke daran mir was anzutun, ich würde es nicht tun!", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich würde am liebsten nicht mehr leben oder mir was antun!", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Wenn ich die Gelegenheit sehe werde ich mich umbringen!", "3" + "Punkte"] },
            ]
        }
    },
    // frage 10 : "index: 9";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Weinen?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich weine nicht mehr als sonst.", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich weine mehr als sonst.", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich weine ständig und bei jedem Anlass!", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich kann gar nicht mehr Weinen!", "3" + "Punkte"] },
            ]
        }
    },
    // frage 11 : "index: 10";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Innere Unruhe?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin nicht unruhig.", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin unruhiger als sonst.", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin ständig unruhig.", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin so unruhig, dass ich mich ständig bewegen muss und zu tun haben muss!", "3" + "Punkte"] },
            ]
        }
    },
    // frage 12 : "index: 11";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Wie sehr kannst du dich momentan für Dinge begeistern?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich habe genauso viel Freude an meinen Hobbys und an anderen Menschen wie immer.", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich merke, dass ich mich für vieles nicht mehr so begeistern kann wie früher.", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Es fällt mir schwer, überhaupt noch echtes Interesse für meine Umwelt aufzubringen.", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Mir ist mittlerweile fast alles egal; ich fühle kaum noch eine Verbindung zu Aktivitäten oder Menschen.", "3" + "Punkte"] },
            ]
        }
    },
    // frage 13: "index: 12";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Ich kann mich schlecht entscheiden?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich kann mich sehr gut entscheiden!", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich kann mich nicht so gut entscheiden wie sonst!", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Mir fällt es sehr schwer mich zu entscheiden!", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Mir fällt es extrem schwer mich zu entscheiden!", "3" + "Punkte"] },
            ]
        }
    },
    // frage 14: "index: 13";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Ich fühle mich Wertlos als Mensch?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich Wertvoll!", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich weniger Wertvoll als sonst!", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich Wertloser als andere Menschen!", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich so, dass ich nichts wert bin und dass ich nicht liebenswert bin!", "3" + "Punkte"] },
            ]
        }
    },
    // frage 15: "index: 14";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Energieverlust, Trägheit?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich habe sehr viel Energie und Tatendrang!", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich weniger energiegeladen als sonst!", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich sehr energielos!", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich so energielos, dass ich nichts mehr schaffen kann!", "3" + "Punkte"] },
            ]
        }
    },
    // frage 16: "index: 15";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Schlafstörungen oder ständig das Gefühl schlafen zu müssen?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["ich schlafe wie immer sehr gut!", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich schlafe mehr als sonst!", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich schlafe weniger als sonst!", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich schlafe sehr viel mehr als sonst!", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich schlafe sehr viel weniger als sonst!", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich schlafe ständig und kann nicht aufstehen!", "3" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich schlafe sehr unruhig und werde wach und kann nicht mehr einschlafen!", "3" + "Punkte"] },
            ]
        }
    },
    // frage 17: "index: 16":
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Reizbarkeit?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin nicht reizbarer als sonst!", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin reizbarer als sonst!", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin sehr reizbar!", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich bin so gereizt das mich jede Kleinigkeit zum ausrasten bringt!", "3" + "Punkte"] },
            ]
        }
    },
    // frage 18: "index: 17";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Verlust von Appetit oder Heißhunger?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Normaler Appetit!", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich esse schlechter als sonst!", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich esse mehr als sonst!", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich esse schlechter als sonst!", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich esse viel mehr als sonst vermehrt Heißhungerattacken!", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich habe gar keinen Appetit mehr und esse so gut wie nichts mehr!", "3" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich habe ständig Heißhunger!", "3" + "Punkte"] },
            ]
        }
    },
    // frage 19: "index: 18";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Konzentrationsstörungen?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich kann mich sehr gut Konzentrieren!", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich kann mich nicht so gut Konzentrieren wie sonst!", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Es fällt mir sehr schwer mich länger zu Konzentrieren!", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich kann mich auf gar nichts mehr Konzentrieren!", "3" + "Punkte"] },
            ]
        }
    },
    // frage 20: "index: 19";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Müdigkeit oder Energielosigkeit?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich sehr Fit und habe viel Energie!", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich weniger Energiegeladen als sonst!", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich für viele Aufgaben zu erschöpft!", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich fühle mich sehr müde und Energielos und schaffe nichts mehr!", "3" + "Punkte"] },
            ]
        }
    },
    // frage 21: "index: 21";
    {
        "createTextNode": {
            "headingTitle": "Frage",
            "question": "Sexuelle Unlust?",
            "answer": [
                { "classList": "bdi_II_css", "createTextNode": ["Ich habe immer noch sehr viel Lust auf Sexualität!", "0" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich habe weniger Lust auf Sexualität als sonst!", "1" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich habe viel weniger Lust auf Sexualität!", "2" + "Punkte"] },
                { "classList": "bdi_II_css", "createTextNode": ["Ich habe gar keine Lust auf Sexualität mehr!", "3" + "Punkte"] },
            ]
        }
    },
];


const evaluationResult = {
    "none_depression": {
        "endResult": null,
        "min_points": 0,
        "max_points": 8,
        "depressions_level": "Keine Depression",
        "resultText": [
            { "classList": "", "createTextNode": "Aktuell weisen Ihre Antworten auf keine depressive Symptomatik hin. Das ist ein sehr erfreuliches Ergebnis, das auf eine gute psychische Stabilität hindeutet." },
            { "classList": "", "createTextNode": "Dieser Bereich (${depression}) ist definiert von ${min_points} bis ${max_points} Punkten. Ihr persönliches Ergebnis liegt bei ${endResult} Punkten." }
        ]
    },
    "min_depression": {
        "endResult": "",
        "min_points": 9,
        "max_points": 13,
        "depression": "Minimale Depression",
        "resultText": [
            { "classList": "", "createTextNode": "Aktuell weisen Ihre Antworten auf keine depressive Symptomatik hin. Das ist ein sehr erfreuliches Ergebnis, das auf eine gute psychische Stabilität hindeutet." },
            { "classList": "", "createTextNode": "Dieser Bereich (${depression}) ist definiert von ${min_points} bis ${max_points} Punkten. Ihr persönliches Ergebnis liegt bei ${endResult} Punkten." }
        ]
    },
    "light_depression": {
        "endResult": "",
        "min_points": 14,
        "max_points": 19,
        "depression": "Leichte Depression",
        "resultText": [
            { "classList": "", "createTextNode": "Das Ergebnis deutet auf eine leichte depressive Symptomatik hin. Möglicherweise fühlen Sie sich aktuell etwas belastet. Es könnte hilfreich sein, diese Tendenz im Auge zu behalten und sich bei Bedarf frühzeitig Unterstützung zu suchen." },
            { "classList": "", "createTextNode": "Dieser Bereich (${depression}) ist definiert von ${min_points} bis ${max_points} Punkten. Ihr persönliches Ergebnis liegt bei ${endResult} Punkten." }
        ]
    },
    "medium_depression": {
        "endResult": "",
        "min_points": 20,
        "max_points": 28,
        "depression": "Mittelschwere Depression",
        "resultText": [
            { "classList": "", "createTextNode": "Ihre Punktzahl deutet auf eine mittelschwere depressive Symptomatik hin. Die Belastungen im Alltag scheinen aktuell erheblich zu sein. Wir empfehlen Ihnen, zeitnah das Gespräch mit einem Arzt oder Therapeuten zu suchen, um die Situation professionell abzuklären." },
            { "classList": "", "createTextNode": "Dieser Bereich (${depression}) ist definiert von ${min_points} bis ${max_points} Punkten. Ihr persönliches Ergebnis liegt bei ${endResult} Punkten." }
        ]
    },
    "difficult_deprission": {
        "endResult": "",
        "min_points": 29,
        "max_points": 63,
        "depression": "Schwere Depression",
        "resultText": [
            { "createTextNode": "Das Testergebnis weist auf eine schwere depressive Symptomatik hin. Bitte nehmen Sie dieses Signal ernst. Es ist wichtig, dass Sie sich jetzt zeitnah professionelle Hilfe suchen (z.B. durch Ihren Hausarzt oder einen Facharzt), um gemeinsam Wege aus dieser belastenden Phase zu finden." },
            { "createTextNode": "Dieser Bereich ${depression} ist definiert von ${min_points} bis ${max_points} Punkten. Ihr persönliches Ergebnis liegt bei ${endResult} Punkten." }
        ]
    }
};