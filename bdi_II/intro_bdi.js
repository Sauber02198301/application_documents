// Bedienungsanleitung des BDI-II Test's 

const instruction_sheet = [
    {
        "createElement": "div",
        "classList": "bdi_Box_ins_column",
        "addClassList": ["instruction", "instructionStyle"],
        "children": [
            {
                "createElement": "div",
                "classList": "bdi_master_container",
                "addClassList": ["display_bdi"],
                "children": [
                    {
                        "createElement": "header",
                        "classList": "bdi_Box_ins_column",
                        "addClassList": ["instruction_header", "instruction_headerStyle"],
                        "children": [
                            {
                                "createElement": "h1",
                                "classList": "text_font_h1",
                                "addClassList": ["instruction_heading_h1", "instruction_h1Style"],
                                "createText": "Anleitung"
                            },
                            {
                                "createElement": "h2",
                                "classList": "text_font_h2",
                                "addClassList": ["instruction_heading_h2", "instruction_h2Style"],
                                "createText": "Kurze Anleitung vor dem Start"
                            }
                        ]
                    },
                    {
                        "createElement": "main",
                        "classList": "bdi_Box_ins_column",
                        "addClassList": ["instruction_main", "instruction_main"],
                        "children": [
                            {
                                "createElement": "article",
                                "classList": "bdi_Box_ins_column",
                                "addClassList": ["instruction_article", "instruction_articleStyle"],
                                "children": [
                                    // wenn das Programm lauft kann ich ja screenShots anfertigen wie das system genutzt wird 
                                    {
                                        "createElement": "p",
                                        "classList": "para_text_ins",
                                        "addClassList": ["instruction_para", "instruction_paraStyle"],
                                        "createText": [
                                            "Dieser Fragebogen besteht aus 21 Gruppen von Aussagen. Bitte lies jede Gruppe sorgfältig durch und wähle die Aussage aus, die am besten beschreibt, wie du dich in den letzten zwei Wochen – einschließlich heute – gefühlt hast.",
                                            "So funktioniert die Steuerung ohne Weiter-Button: Beim ersten Klick auf einen Auswahlpunkt (Radio-Button) wird deine Antwort markiert. Mit einem zweiten Klick auf denselben Punkt bestätigst du deine Wahl und springst automatisch zur nächsten Frage.",
                                            "Du kannst den Durchlauf jederzeit über den Button ‚Abbrechen / Schließen‘ beenden und kehrst dann direkt zur Projekt-Übersicht zurück.",
                                            "Dieser Fragebogen hilft dir dabei, deine aktuelle Stimmung besser einzuschätzen. Bitte beantworte alle Fragen ehrlich und beziehe dich dabei auf dein Befinden in den letzten zwei Wochen. Wichtig: Dieser Test dient lediglich als grober Richtwert und ist nicht zur Selbstdiagnose geeignet. Er ersetzt keinen Besuch bei einem Arzt oder Psychotherapeuten. Solltest du dich in einer Krise befinden, suche dir bitte umgehend professionelle Hilfe."
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "createElement": "footer",
                "classList": "bdi_Box_ins_row",
                "addClassList": ["instruction_footer", "instruction_footerStyle"],
                "children": [
                    {
                        "createElement": "div",
                        "classList": "bdi_Box_ins_row",
                        "addClassList": ["instruction_div", "instruction_divZero"],
                        "children": [
                            {
                                "createElement": "button",
                                "classList": "inst_secondary_btn",
                                "addClassList": ["btn_zero"],
                                "dataset": "testStart",
                                "children": [
                                    {
                                        "createElement": "span",
                                        "classList": "spanText",
                                        "addClassList": ["textStart"],
                                        "createText": "start"
                                    },
                                    {
                                        "createElement": "span",
                                        "classList": "spanIcon",
                                        "addClassList": ["btn_icon_start"],
                                        "createText": "Start"
                                    }
                                ]
                            },

                        ]
                    },
                    {
                        "createElement": "div",
                        "classList": "bdi_Box_ins_row",
                        "addClassList": ["instruction_div", "instruction_divOne"],
                        "children": [
                            {
                                "createElement": "button",
                                "classList": "inst_secondary_btn",
                                "addClassList": ["btn_one"],
                                "dataset": "stepBack",
                                "children": [
                                    {
                                        "createElement": "span",
                                        "classList": "spanText",
                                        "addClassList": ["text_back"],
                                        "createText": "Zurück"
                                    },
                                    {
                                        "createElement": "span",
                                        "classList": "spanIcon",
                                        "addClassList": ["back"],
                                        "createText": "arrow_back"
                                    }
                                ]
                            },

                        ]
                    },
                    {
                        "createElement": "div",
                        "classList": "bdi_Box_ins_row",
                        "addClassList": ["instruction_div", "instruction_divTwo"],
                        "children": [
                            {
                                "createElement": "button",
                                "classList": "inst_secondary_btn",
                                "addClassList": ["btn_two"],
                                "dataset": "close",
                                "children": [
                                    {
                                        "createElement": "span",
                                        "classList": "spanText",
                                        "addClassList": ["close"],
                                        "createText": "Schließen / Abbrechen"
                                    },
                                    {
                                        "createElement": "span",
                                        "classList": "spanIcon",
                                        "addClassList": ["closeText"],
                                        "createText": "cancel"
                                    }
                                ]
                            },

                        ]
                    }
                ]
            }
        ]
    }
]
