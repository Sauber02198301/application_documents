const bdi_test = {

    "bdi_area": {
        "container": {
            "html_code": "div_tag",
            "class_code": "bdi_box",
            "style_class": "bdi_style",
            "item_code": "inititation"
        }
    },

    "inititation": {
        "heading": {
            "html_code": "header_tag",
            "class_code": "bdi_header_box",
            "style_class": "bdi_style",
            "item_code": "heading_text_content"
        },
        "main": {
            "html_code": "main_tag", // or div_tag??
            "class_code": "bdi_main_box",
            "style_class": "bdi_style",
            "item_code": "description_field"
        },
        "footer": {
            "html_code": "footer_tag",
            "class_code": "bdi_box_footer",
            "style_class": "bdi_style",
            "object_code": "btn_settings_BDI",
            "functionsElement": "render_logic_btn",
        }
    },

    "heading_text_content": {
        "hedingBdi": {
            "html_code": "h2_tag",
            "class_code": "bdi_h2_fount",
            "style_code": "bdi_textStyle",
            "lable_text": "heading_text"
        },
        "cancel_btn": {
            "html_code": "button_tag",
            "class_code": "btn_secondary_class",
            "style_class": "bdi_btn",
            "action_type": "close_bdi",
            "item_code": "close_content"
        }
    },

    "description_field": {
        "text_field": {
            "html_code": "p_tag",
            "class_code": "bdi_p_typeFace",
            "style_class": "bdi_textStyle",
            "object_code": "span_contect",
            "functionsElement": "textField_renderFunc",
        }
    },

    "close_content": {
        "close_item": {
            "html_code": "span_tag",
            "class_code": "icon_close",
            "style_class": "bdi_span_fount",
            "lable_text": "close_icon"
        }
    },

    /*
    "answerTitle": "Mögliche Antworten",
    */
    "bdi_question": {

        "one_question": {
            "questionTitle": "Frage",
            "question": "Wie Traurig fühlen sie sich gerade?",
            "answer": {
                "zero": { "lable_text": "Ich bin nicht traurig.", "points": "0" },
                "one": { "lable_text": "Ich bin oft traurig.", "points": "1" },
                "two": { "lable_text": "Ich bin ständig traurig.", "points": "2" },
                "three": { "lable_text": "Ich bin so traurig oder unglücklich, dass ich es nicht aushalten kann.", "points": "3" },
            }
        },
        "two_question": {
            "questionTitle": "Frage",
            "question": "Wie hoffnungslos fühlen sie sich?",
            "answer": {
                "zero": { "lable_text": "Ich habe keine Hoffnungslosigkeit / Meine Zukunft sieht genauso aus wie immer.", "points": "0" },
                "one": { "lable_text": "Ich habe oft Hoffnungslosigkeit / Meine Zukunft sieht schlechter aus als sonst.", "points": "1" },
                "two": { "lable_text": "Ich bin ständig hoffnungslos / Meine Situation wird sich nie verbessern.", "points": "2" },
                "three": { "lable_text": "Ich habe so viel Hoffnungslosigkeit, dass meine Zukunft aussichtslos erscheint.", "points": "3" },
            }
        },
        "three_question": {
            "questionTitle": "Frage",
            "question": "Ich fühle mich Wertlos oder als Versager?",
            "answer": {
                "zero": { "lable_text": "Ich fühle mich nicht als ein Versager.", "points": "0" },
                "one": { "lable_text": "Ich fühle mich oft als ein Versager.", "points": "1" },
                "two": { "lable_text": "Ich fühle mich ständig als ein Versager.", "points": "2" },
                "three": { "lable_text": "Ich fühle mich als kompletter Versager.", "points": "3" },
            }
        },
        "four_question": {
            "questionTitle": "Frage",
            "question": "Verlust von Interesse oder Freude an Aktivitäten?",
            "answer": {
                "zero": { "lable_text": "Ich kann die Dinge immer genau so genießen wie sonst.", "points": "0" },
                "one": { "lable_text": "Ich kann die Dinge nicht so genießen wie sonst.", "points": "1" },
                "two": { "lable_text": "Es gibt Dinge, die ich nicht mehr genießen kann.", "points": "2" },
                "three": { "lable_text": "Ich kann nichts mehr genießen.", "points": "3" },
            }
        },
        "five_question": {
            "questionTitle": "Frage",
            "question": "Ich fühle mich ständig Schuldig oder denkt an vergangene Fehler?",
            "answer": {
                "zero": { "lable_text": "Ich fühle mich nicht schuldig.", "points": "0" },
                "one": { "lable_text": "Ich fühle mich oft schuldig für das was ich mache oder nicht mache.", "points": "1" },
                "two": { "lable_text": "Ich fühle mich ständig schuldig.", "points": "2" },
                "three": { "lable_text": "Ich fühle mich so schuldig, dass ich die Gedanken nicht aushalten kann.", "points": "3" },
            }
        },
        "six_question": {
            "questionTitle": "Frage",
            "question": "Ich fühle mich ständig als wenn ich Bestraft werde?",
            "answer": {
                "zero": { "lable_text": "Ich fühle mich nicht bestraft.", "points": "0" },
                "one": { "lable_text": "Ich habe das Gefühl, das ich leicht bestraft werde.", "points": "1" },
                "two": { "lable_text": "Ich habe das Gefühl bestraft zu werden.", "points": "2" },
                "three": { "lable_text": "Ich habe das Gefühl, ich werde ständig bestraft.", "points": "3" },
            }
        },
        "seven_question": {
            "questionTitle": "Frage",
            "question": "Ich lehne mich sich selber ab / Selbsthass?",
            "answer": {
                "zero": { "lable_text": "Ich lehne mich nicht ab.", "points": "0" },
                "one": { "lable_text": "Mein Vertrauen in mir ist schwächer als sonst.", "points": "1" },
                "two": { "lable_text": "Ich bin ständig unzufieden mit mir.", "points": "2" },
                "three": { "lable_text": "Ich lehne mich so sehr ab, dass ich mich nicht mehr leiden kann.", "points": "3" },
            }
        },
        "eight_question": {
            "questionTitle": "Frage",
            "question": "Ich bin nie mit mir Zufrieden ich beziehe alles was passiert auf mich?",
            "answer": {
                "zero": { "lable_text": "Ich bin mit mir zufrieden wie sonst.", "points": "0" },
                "one": { "lable_text": "Ich bin nicht so zufrieden mit mir, das geht besser.", "points": "1" },
                "two": { "lable_text": "Ich bin ständig unzufrieden mit mir.", "points": "2" },
                "three": { "lable_text": "Ich bin so unzufrieden mit mir, dass ich mich selbst so bemitleide das alles schlimme nur mir passiert.", "points": "3" },
            }
        },
        "nine_question": {
            "questionTitle": "Frage",
            "question": "Selbstmordgedanken?",
            "answer": {
                "zero": { "lable_text": "Ich denke nicht daran mir was anzutun!", "points": "0" },
                "one": { "lable_text": "Ich denke daran mir was anzutun, ich würde es nicht tun!", "points": "1" },
                "two": { "lable_text": "Ich würde am liebsten nicht mehr leben oder mir was antun!", "points": "2", "action_typ": "criticalFlag"},
                "three": { "lable_text": "Wenn ich die Gelegenheit sehe werde ich mich umbringen!", "points": "3", "action_typ": "criticalFlag" },
                // wenn  two und three zu treffen am ende des test eine Meldung einbauen. mit telefonNummer fur seelsorge / link zur seite. 
            }
        },
        "ten_question": {
            "questionTitle": "Frage",
            "question": "Weinen?",
            "answer": {
                "zero": { "lable_text": "Ich weine nicht mehr als sonst.", "points": "0" },
                "one": { "lable_text": "Ich weine mehr als sonst.", "points": "1" },
                "two": { "lable_text": "Ich weine ständig und bei jedem Anlass!", "points": "2" },
                "three": { "lable_text": "Ich kann gar nicht mehr Weinen!", "points": "3" },
            }
        },
        "eleven_question": {
            "questionTitle": "Frage",
            "question": "Innere Unruhe?",
            "answer": {
                "zero": { "lable_text": "Ich bin nicht unruhig.", "points": "0" },
                "one": { "lable_text": "Ich bin unruhiger als sonst.", "points": "1" },
                "two": { "lable_text": "Ich bin ständig unruhig.", "points": "2" },
                "three": { "lable_text": "Ich bin so unruhig, dass ich mich ständig bewegen muss und zu tun haben muss!", "points": "3" },
            }
        },
        "twelve_question": {
            "questionTitle": "Frage",
            "question": "Wie sehr kannst du dich momentan für Dinge begeistern?",
            "answer": {
                "zero": { "lable_text": "Ich habe genauso viel Freude an meinen Hobbys und an anderen Menschen wie immer.", "points": "0" },
                "one": { "lable_text": "Ich merke, dass ich mich für vieles nicht mehr so begeistern kann wie früher.", "points": "1" },
                "two": { "lable_text": "Es fällt mir schwer, überhaupt noch echtes Interesse für meine Umwelt aufzubringen.", "points": "2" },
                "three": { "lable_text": "Mir ist mittlerweile fast alles egal; ich fühle kaum noch eine Verbindung zu Aktivitäten oder Menschen.", "points": "3" },
            }
        },
        "thirteen_question": {
            "questionTitle": "Frage",
            "question": "Ich kann mich schlecht entscheiden?",
            "answer": {
                "zero": { "lable_text": "Ich kann mich sehr gut entscheiden!", "points": "0" },
                "one": { "lable_text": "Ich kann mich nicht so gut entscheiden wie sonst!", "points": "1" },
                "two": { "lable_text": "Mir fällt es sehr schwer mich zu entscheiden!", "points": "2" },
                "three": { "lable_text": "Mir fällt es extrem schwer mich zu entscheiden!", "points": "3" },
            }
        },
        "fourteen_question": {
            "questionTitle": "Frage",
            "question": "Ich fühle mich Wertlos als Mensch?",
            "answer": {
                "zero": { "lable_text": "Ich fühle mich Wertvoll!", "points": "0" },
                "one": { "lable_text": "Ich fühle mich weniger Wertvoll als sonst!", "points": "1" },
                "two": { "lable_text": "Ich fühle mich Wertloser als andere Menschen!", "points": "2" },
                "three": { "lable_text": "Ich fühle mich so, dass ich nichts wert bin und dass ich nicht liebenswert bin!", "points": "3" },
            }
        },
        "fifteen_question": {
            "questionTitle": "Frage",
            "question": "Energieverlust, Trägheit?",
            "answer": {
                "zero": { "lable_text": "Ich habe sehr viel Energie und Tatendrang!", "points": "0" },
                "one": { "lable_text": "Ich fühle mich weniger energiegeladen als sonst!", "points": "1" },
                "two": { "lable_text": "Ich fühle mich sehr energielos!", "points": "2" },
                "three": { "lable_text": "Ich fühle mich so energielos, dass ich nichts mehr schaffen kann!", "points": "3" },
            }
        },
        "sixteen_question": {
            "questionTitle": "Frage",
            "question": "Schlafstörungen oder ständig das Gefühl schlafen zu müssen?",
            "answer": {
                "zero": { "lable_text": "ich schlafe wie immer sehr gut!", "points": "0" },
                "one": { "lable_text": "Ich schlafe mehr als sonst!", "points": "1" },
                "one_b": { "lable_text": "Ich schlafe weniger als sonst!", "points": "1" },
                "two": { "lable_text": "Ich schlafe sehr viel mehr als sonst!", "points": "2" },
                "two_b": { "lable_text": "Ich schlafe sehr viel weniger als sonst!", "points": "2" },
                "three": { "lable_text": "Ich schlafe ständig und kann nicht aufstehen!", "points": "3" },
                "three_b": { "lable_text": "Ich schlafe sehr unruhig und werde wach und kann nicht mehr einschlafen!", "points": "3" },
            }
        },
        "seventeen_question": {
            "questionTitle": "Frage",
            "question": "Reizbarkeit?",
            "answer": {
                "zero": { "lable_text": "Ich bin nicht reizbarer als sonst!", "points": "0" },
                "one": { "lable_text": "Ich bin reizbarer als sonst!", "points": "1" },
                "two": { "lable_text": "Ich bin sehr reizbar!", "points": "2" },
                "three": { "lable_text": "Ich bin so gereizt das mich jede Kleinigkeit zum ausrasten bringt!", "points": "3" },
            }
        },
        "eighteen_question": {
            "questionTitle": "Frage",
            "question": "Verlust von Appetit oder Heißhunger?",
            "answer": {
                "zero": { "lable_text": "Normaler Appetit!", "points": "0" },
                "one": { "lable_text": "Ich esse schlechter als sonst!", "points": "1" },
                "one_b": { "lable_text": "Ich esse mehr als sonst!", "points": "1" },
                "two": { "lable_text": "Ich esse schlechter als sonst!", "points": "2" },
                "two_b": { "lable_text": "Ich esse viel mehr als sonst vermehrt Heißhungerattacken!", "points": "2" },
                "three": { "lable_text": "Ich habe gar keinen Appetit mehr und esse so gut wie nichts mehr!", "points": "3" },
                "three_b": { "lable_text": "Ich habe ständig Heißhunger!", "points": "3" },
            }
        },
        "nineteen_question": {
            "questionTitle": "Frage",
            "question": "Konzentrationsstörungen?",
            "answer": {
                "zero": { "lable_text": "Ich kann mich sehr gut Konzentrieren!", "points": "0" },
                "one": { "lable_text": "Ich kann mich nicht so gut Konzentrieren wie sonst!", "points": "1" },
                "two": { "lable_text": "Es fällt mir sehr schwer mich länger zu Konzentrieren!", "points": "2" },
                "three": { "lable_text": "Ich kann mich auf gar nichts mehr Konzentrieren!", "points": "3" },
            }
        },
        "twenty_question": {
            "questionTitle": "Frage",
            "question": "Müdigkeit oder Energielosigkeit?",
            "answer": {
                "zero": { "lable_text": "Ich fühle mich sehr Fit und habe viel Energie!", "points": "0" },
                "one": { "lable_text": "Ich fühle mich weniger Energiegeladen als sonst!", "points": "1" },
                "two": { "lable_text": "Ich fühle mich für viele Aufgaben zu erschöpft!", "points": "2" },
                "three": { "lable_text": "Ich fühle mich sehr müde und Energielos und schaffe nichts mehr!", "points": "3" },
            }
        },
        "twentyone_question": {
            "questionTitle": "Frage",
            "question": "Sexuelle Unlust?",
            "answer": {
                "zero": { "lable_text": "Ich habe immer noch sehr viel Lust auf Sexualität!", "points": "0" },
                "one": { "lable_text": "Ich habe weniger Lust auf Sexualität als sonst!", "points": "1" },
                "two": { "lable_text": "Ich habe viel weniger Lust auf Sexualität!", "points": "2" },
                "three": { "lable_text": "Ich habe gar keine Lust auf Sexualität mehr!", "points": "3" },
            }
        },
    },


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

    "bdi_btn_close": {

        "blue_print": "btn_objectSecondary",
        "style_class": "btn_bdi_style",
        "item_Code": {
            "blue_print": "html_span_text",
            "class_code": ["icon_close", "bdi_span_fount", "bdi_textStyle"],
            "lable_text": "exit_title",
            "lable_icon": "exit_icon"
        }
    },
    "bdi_btn_pdf": {

        "blue_print": "btn_objectSecondary",
        "style_class": "btn_bdi_style",
        "item_Code": {
            "blue_print": "html_span_text",
            "class_code": ["icon_close", "bdi_span_fount", "bdi_textStyle"],
            "lable_text": "pdf_title",
            "lable_icon": "pdf_icon"
        }
    }

};