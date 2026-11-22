

const introChild_data = [
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
];

const introContent = [
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
        // das muss ich wo anders nochmal platzieren so kann ich es nicht noch mal abrufen als home Bildschirm. 
        "UI_DisplayActive": {
            "introText": "introChild_data",
            "displayID": {
                "displayHeader": "heading_ID",
                "displayArticle": "introArticle",
                "display_dotBox": "dotBox"
            },
            "indexActive": true,
            "counterObject": {
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
];

