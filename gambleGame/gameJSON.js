

const pokerData = [
    {
        "UI_DisplayActive": {
            "UI_control": "pokerGameActive",
            "active": true,
            "children": [
                {
                    "createElement": "header",
                    "classList": ["flex_row", "pokerIntroHeader", "pokerIntroHeaderBrowser"],
                    "addClassList": ["pokerIntroMobil"],
                    "id_code": "pokerIntroHeader",
                    "children": [
                        {
                            "createElement": "h2",
                            "classList": ["flex_row", "default_fontProp", "font_family_game"],
                            "addClassList": ["pokerIntroHeading_h2"],
                            "id_code": "pokerHeading_ID"
                        }
                    ]
                },
                {
                    "createElement": "article",
                    "classList": ["flex_column", "articlePokerIntro", "articlePokerBrowser"],
                    "addClassList": ["articlePokerMobil"],
                    "id_code": "pokerIntroArticle"
                },
                {
                    "createElement": "footer",
                    "classList": ["flex_row", "pokerIntroFooter", "introPokerBrowserFooter"],
                    "addClassList": ["introPokerMobilFooter"],
                    "id_code": "introPokerFooter",
                    "children": [
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "btnBoxPoker", "boxBrowserStyle"],
                            "addClassList": ["btnBoxMobilStyle"],
                            "children": [
                                {
                                    "createElement": "button",
                                    "classList": ["flex_row", "btn", "btnSecondary", "btnSecondStyle"],
                                    "addClassList": ["btn_sub"],
                                    "id_code": "poker_btn_sub",
                                    "children": [
                                        {
                                            "createElement": "span",
                                            "classList": ["flex_row", "btnTextStyle", "material-symbols-outlined"],
                                            "addClassList": ["textZeroBtn"],
                                            "createText": "skip_previous"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "dotBox_setting", "boxStyle"],
                            "addClassList": ["dotBox"]
                        },
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "btnBox", "boxStyle"],
                            "addClassList": ["btnBoxOne"],
                            "children": [
                                {
                                    "createElement": "button",
                                    "classList": ["flex_row", "btn", "btnSecondary", "btnSecondStyle"],
                                    "addClassList": ["btn_Add"],
                                    "id_code": "btnAdd",
                                    "children": [
                                        {
                                            "createElement": "span",
                                            "classList": ["flex_row", "btnTextStyle", "material-symbols-outlined"],
                                            "addClassList": ["textZeroBtn"],
                                            "createText": "skip_next"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    }

];

// object with all section

const mainData = {

    "introTextDocuments": [
        {
            "headerContent": {
                "headerText": "Die Idee hinter meinem Poker-Spielautomaten"
            },
            "textArea": {
                "classList": ["flex_row", "default_fontProp", "font_family_game"],
                "addClassList": ["text_p"],
                "textArea": [
                    "Ursprünglich wollte ich mit einem eigenen Projekt meine Chancen auf einen Praktikumsplatz bei Merkur verbessern. Dafür habe ich verschiedene Spielideen durchdacht. vom klassischen Drei-Walzen-Automaten bis hin zu älteren Merkur-Spielautomaten.",
                    "Schließlich entschied ich mich für einen Poker-Spielautomaten mit fünf Walzen. Dabei stellte mich besonders die Verteilung der Spielkarten vor eine Herausforderung. Nicht jede Anordnung ermöglichte die gewünschten Pokerkombinationen.",
                    "Deshalb habe ich ganz klassisch mit Papier gearbeitet, verschiedene Kartenanordnungen ausprobiert und miteinander verglichen. Da ich jede reguläre Spielkarte nur einmal verwenden wollte, musste ich einige Kompromisse eingehen.",
                    "Meine Lösung besteht aus 60 Positionen auf fünf Walzen, einschließlich Jokern und Leerfeldern. Dadurch konnte ich viele der gewünschten Kartenkombinationen berücksichtigen, auch wenn nicht jede Kombination möglich ist.",
                    "Als Nächstes folgen die Gestaltung des Spielfeldes und die CSS-Animationen. Fehlendes Wissen werde ich mir dabei Schritt für Schritt aneignen.",
                    "Mit diesem Projekt möchte ich zeigen, wie ich technische Herausforderungen angehe, selbstständig Lösungswege entwickle, Fehler analysiere und meine bisherigen Lösungen kontinuierlich verbessere."
                ]
            }
        },
        {
            "headerContent": {
                "headerText": "Die Gestaltung der Spielkarten"
            },
            "textArea": {
                "classList": ["flex_row", "default_fontProp", "font_family_game"],
                "addClassList": ["text_p"],
                "textArea": [
                    "Ursprünglich wollte ich für die grafische Darstellung Google Icons verwenden. Diese sahen zwar ansprechend aus, allerdings fehlte mir dabei das typische Poker-Feeling.",
                    "Deshalb entschied ich mich, einzelne Bildelemente mithilfe künstlicher Intelligenz zu generieren und diese anschließend in Pixelmator Pro zu bearbeiten und zusammenzusetzen.",
                    "Für die Gestaltung wählte ich einen Barockstil in Verbindung mit einem Flammenhintergrund. Dieses Design soll an moderne Spielautomaten erinnern und symbolisiert das „Spiel mit dem Feuer“. Jede Kartenkategorie erhielt dabei ihren eigenen Farbstil.",
                    "Meine Stärke liegt darin, eine konkrete Vorstellung vom gewünschten Erscheinungsbild zu entwickeln und diese mit den verfügbaren technischen Möglichkeiten umzusetzen.",
                    "Da ich sämtliche Projektbereiche selbstständig bearbeite, beschäftige ich mich nicht nur mit der Programmierung, sondern auch mit der grafischen Gestaltung und der Bedienung unterschiedlicher Software. Dadurch erweitere ich kontinuierlich meine technischen und gestalterischen Fähigkeiten."
                ]
            }
        },
        {
            "headerContent": {
                "headerText": "Um zu wachsen, muss man sich selbst kritisch hinterfragen"
            },
            "textArea": {
                "classList": ["flex_row", "default_fontProp", "font_family_game"],
                "addClassList": ["text_p"],
                "textArea": [
                    "Seit dem 1. Januar 2025 beschäftige ich mich intensiv mit JavaScript. Mithilfe von Fachliteratur, englischsprachigen Lernplattformen und eigenen Projekten habe ich mir Schritt für Schritt neue Kenntnisse angeeignet.",
                    "Von kleinen Anwendungen entwickelte ich mich zunehmend zu umfangreicheren Projekten weiter. Dabei erarbeitete ich mir unter anderem den Umgang mit Objekten, Destructuring, Array-Methoden, rekursiven Funktionen und der dynamischen DOM-Erzeugung.",
                    "Ich entwickle bewusst mit Vanilla JavaScript und verzichte in diesem Projekt auf zusätzliche Bibliotheken und Frameworks. Mein Ziel ist es, die technischen Zusammenhänge nicht nur anzuwenden, sondern auch grundlegend zu verstehen.",
                    "Dabei hinterfrage ich regelmäßig meine bisherigen Lösungen. Fehler, Rückschläge und Phasen der Stagnation gehören für mich zum Lernprozess. Sie zeigen mir, an welchen Stellen ich mein Wissen vertiefen und meine Arbeitsweise verbessern kann.",
                    "Auch deshalb habe ich mich für die Entwicklung eines Poker-Spielautomaten entschieden. Die Kombination aus Spielmechanik, grafischer Gestaltung, Animation und Softwareentwicklung stellt mich vor unterschiedliche Herausforderungen.",
                    "Für mich steht nicht allein das fertige Ergebnis im Vordergrund, sondern auch die Erfahrung, die ich auf dem Weg dorthin sammle.",
                    "Es ist die Herausforderung, an der man wächst."
                ]
            }
        }
    ],

    "introDomFramework": [
        {
            "createElement": "div",
            "classList": ["grid", "displaySection", "outputStyle"],
            "addClassList": ["mobilDisplaySection"],
            "children": [
                {
                    "createElement": "header",
                    "classList": ["flex_row", "introHeader", "introHeaderBrowser"],
                    "addClassList": ["introMobil"],
                    "id_code": "introHeader",
                    "children": [
                        {
                            "createElement": "h2",
                            "classList": ["flex_row", "default_fontProp", "font_family_game"],
                            "addClassList": ["introHeading_h2"],
                            "id_code": "heading_ID"
                        }
                    ]
                },
                {
                    "createElement": "article",
                    "classList": ["flex_column", "articleIntro", "articleBrowser"],
                    "addClassList": ["articleMobil"],
                    "id_code": "introArticle"
                },
                {
                    "createElement": "footer",
                    "classList": ["flex_row", "introFooter", "introBrowserFooter"],
                    "addClassList": ["introMobilFooter"],
                    "id_code": "introFooter",
                    "children": [
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "btnBox", "boxStyle"],
                            "addClassList": ["btnBoxZero"],
                            "children": [
                                {
                                    "createElement": "button",
                                    "classList": ["flex_row", "btn", "btnSecondary", "btnSecondStyle"],
                                    "addClassList": ["btn_sub"],
                                    "id_code": "btn_sub",
                                    "children": [
                                        {
                                            "createElement": "span",
                                            "classList": ["flex_row", "btnTextStyle", "material-symbols-outlined"],
                                            "addClassList": ["textZeroBtn"],
                                            "createText": "skip_previous"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "dotBox_setting", "boxStyle"],
                            "addClassList": ["dotBox"]
                        },
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "btnBox", "boxStyle"],
                            "addClassList": ["btnBoxOne"],
                            "children": [
                                {
                                    "createElement": "button",
                                    "classList": ["flex_row", "btn", "btnSecondary", "btnSecondStyle"],
                                    "addClassList": ["btn_Add"],
                                    "id_code": "btnAdd",
                                    "children": [
                                        {
                                            "createElement": "span",
                                            "classList": ["flex_row", "btnTextStyle", "material-symbols-outlined"],
                                            "addClassList": ["textZeroBtn"],
                                            "createText": "skip_next"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "UI_DisplayActive": {
                        "id_code": "introTextDocuments",
                        "displayID": {
                            "displayHeader": "heading_ID",
                            "displayArticle": "introArticle",
                            "display_dotBox": "dotBox"
                        },
                        "indexActive": true,
                        "counterObject": {
                            "articleCopy": null,
                            "t_Index": 0,
                            "intro_length": null,
                            "contentText": null,
                            "displayIDCopy": null,
                            "dotActive": false,
                            "dotBtnActive": null,
                            "headerContent": null,
                            "headerDisplay": null,
                            "articleTag": null,
                            "dotTag": null
                        }
                    },
                    "booleanValue": { "introSideActive": true },
                    "functionName": "creatorTextArea",
                    "functionEvent": "controlIntroArea"
                }
            ]
        }

    ],

    "bodyMainFramework": [
        {
            "createElement": "header",
            "classList": ["flex_row", "header_gameBody", "header_style"],
            "addClassList": ["controlHeader_section_body"],
            "children": [
                {
                    "createElement": "div",
                    "classList": ["flex_column", "headingBox", "headingBox_style"],
                    "addClassList": ["div_h_zero"],
                    "children": [
                        {
                            "createElement": "h1",
                            "classList": ["display_block", "default_fontProp", "font_family_game"],
                            "addClassList": ["h1_headerStyle"],
                            "createText": "Casino Games"
                        },
                        {
                            "createElement": "span",
                            "classList": ["display_block", "font_family_game"],
                            "addClassList": ["headerTextStyle"],
                            "createText": "Gambling machine",
                        }
                    ]
                },
                {
                    "createElement": "div",
                    "classList": ["flex_column", "headingBox", "headingBox_style"],
                    "addClassList": ["div_h_one"],
                    "children": [
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "iconBox", "iconBoxStyle"],
                            "addClassList": ["iconListZero"],
                            "children": [
                                {
                                    "createElement": "span",
                                    "classList": ["display_block", "material-symbols-outlined", "logoHeader"],
                                    "addClassList": ["logoZero"],
                                    "createText": "Casino playing_cards"
                                },
                                {
                                    "createElement": "span",
                                    "classList": ["display_block", "material-symbols-outlined", "logoHeader"],
                                    "addClassList": ["logoOne"],
                                    "createText": "Casino",
                                }
                            ]
                        },
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "iconBox", "iconBoxStyle"],
                            "addClassList": ["iconListZero"],
                            "children": [
                                {
                                    "createElement": "span",
                                    "classList": ["display_block", "material-symbols-outlined", "logoHeader"],
                                    "addClassList": ["logoZero"],
                                    "createText": "Casino"
                                },
                                {
                                    "createElement": "span",
                                    "classList": ["display_block", "material-symbols-outlined", "logoHeader"],
                                    "addClassList": ["logoOne"],
                                    "createText": "playing_cards Casino"
                                }
                            ]
                        }
                    ]
                }
            ]
        },  //header_parent
        {
            "createElement": "nav",
            "classList": ["flex_row", "nav_gameList", "nav_style"],
            "addClassList": ["control_nav_body"],
            "children": [
                {
                    "createElement": "button",
                    "classList": ["flex_column", "btn", "primaryBtn", "primaryBtn_style"],
                    "addClassList": ["gameList"],
                    "dataset": "gameStart",
                    "id_code": "pokerData",
                    "children": [
                        {
                            "createElement": "img",
                            "classList": ["display_block", "pokerChip_navIMG"],
                            "addClassList": ["iconNav"],
                            "srcObject": "game_img/pokerChip.png",
                        },
                        {
                            "createElement": "span",
                            "classList": ["display_block", "font_family_game"],
                            "addClassList": ["gaming_instruction"],
                            "createText": "Poker Automat",
                        }
                    ]
                }
            ]
        },  //nav_parent 
        {
            "createElement": "main",
            "classList": ["grid", "grid_property", "main_sectionBrowserBody", "main_section_bodyStyle"],
            "addClassList": ["mobilMainBody"],
            "id_code": "displayMainDom",
            "UI_DisplayActive": { "UI_control": "displayActive", "active": true },
            "functionName": "UI_DISPLAY_area",
            "functionEvent": "UI_controlDisplay"
        },
        {
            "createElement": "footer",
            "classList": ["flex_row", "footer_section", "footer_style"],
            "addClassList": ["footer_appControl"],
            "children": [
                {
                    "createElement": "div",
                    "classList": ["flex_row", "btnTextBox", "textBoxStyle"],
                    "addClassList": ["kontakt_section"],
                    "children": [
                        {
                            "createElement": "span",
                            "classList": ["display_block", "font_family_game", "footerText"],
                            "addClassList": ["contactTextStyle"],
                            "createText": "Kontakt"
                        },
                        {
                            "createElement": "span",
                            "classList": ["display_block", "material-symbols-outlined", "footerText"],
                            "addClassList": ["contactTextStyle"],
                            "createText": "contacts_product"
                        }
                    ]
                },
                {
                    "createElement": "div",
                    "classList": ["flex_row", "btnTextBox", "textBoxStyle"],
                    "addClassList": ["contakt_section"],
                    "children": [
                        {
                            "createElement": "span",
                            "classList": ["display_block", "font_family_game", "footerText"],
                            "addClassList": ["contactTextStyle"],
                            "createText": "Impressum"
                        },
                        {
                            "createElement": "span",
                            "classList": ["display_block", "material-symbols-outlined", "footerText"],
                            "addClassList": ["contactTextStyle"],
                            "createText": "format_paragraph"
                        }
                    ]
                }
            ]

        },
        {
            "UI_DisplayActive": { "UI_control": "introSideActive", "active": true, "id_code": "introDomFramework" },
            "functionName": "UI_DISPLAY_area",
            "functionEvent": "UI_toReadout_function"

        }
    ]

};

