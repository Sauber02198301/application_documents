// Bedienungsanleitung des BDI-II Test's 

const instruction_sheet = [
    {
        "createElement": "div",
        "classList": "bdi_Box_ins_column",
        "addClassList": ["instruction", "instructionStyle"],
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
                                    "Du kannst den Durchlauf jederzeit über den Button ‚Abbrechen / Schließen‘ beenden und kehrst dann direkt zur Projekt-Übersicht zurück."
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

                    },
                    {
                        "createElement": "div",
                        "classList": "bdi_Box_ins_row",
                        "addClassList": ["instruction_div", "instruction_divOne"],

                    },
                    {
                        "createElement": "div",
                        "classList": "div_section_ins",
                        "addClassList": ["instruction_div", "instruction_divTwo"],

                    }
                ]
            }
        ]
    }
]
