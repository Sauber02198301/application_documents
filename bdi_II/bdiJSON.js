/*
    Hier gehe ich eine andere herangehensweise an ich baue mal alles extern dies hat vorteile bringt auch nachteile mit sich,
    weil nicht alles in einem Objeckt steht leidet die übersicht massive wenn ich aber moechte das ich wiederverwendbarkeit
    haben mochte muss ich ueben ueben ueben weil viele sachen fuehlen sich sehr unnatuerlich an also muss ich an mir arbeiten.

    An sich was ich gut finde classList_main symbolisiert den body man weis sofort was das ist. 
    Als nachstes baue ich nur im classList bereich die standart werte rein spezifische class kommen als,
    "addClassList" extra hinein. Wenn ich keine brauche nehme ich nur die standard werte! 
*/

/*
    Legende flexList
    flex_directin_row_reverse,
    flex_directin_row,
    flex_directin_column_reverse,
    flex_directin_column 
*/

/*
    Legende property's Name

    "createElement": "",
    "classList": [],
    "addClassList":[],
    "children": [],
    "createText": "",

    "content" *Dieser ist nur fuer eine function reservierter befehl*
    "functionsCall" *functinsname fuer die jeweilige aufgabe.*
*/


const bdiLibrary = {

    // introText


    //body klassen

    "classList_main": {
        "bdi_header": ["flex_directin_row", "bdi_header_section_intro", "bdi_boxSettings"],
        "leftSide_center_bdi": ["flex_directin_column", "bdi_leftSide", "bdi_boxSettings"],
        "bdi_main_section": ["flex_directin_column", "bdi_mainSection", "bdi_boxSettings"],
        "rightSide_center_bdi": ["flex_directin_column", "bdi_rightSide", "bdi_boxSettings"],
        "footer_section_bdi": ["flex_directin_row", "bdi_footer_section", "bdi_boxSettings"]
    },

    //header klassen

    "classList_header": {
        "classHeaderLogo": ["flex_directin_row", "headerChild"],
        "articleHeader": ["flex_directin_column", "header_article"]
    },

    //main_section klassen

    "classList_mainChildren": {
        "displayView": ["flex_directin_column", "display_section", "display_sectionStyle"],
        "mainChild_class": ["flex_directin_column", "main_childSection", "mainChildStyle"],
        "bdi_Box": ["flex_directin_column", "bdiBoxStyle"], // boxStyle darf nur styling elemente besitzen die andere auch haben spezifische immer separieren
        "paragraph_bdi_intro": ["flex_directin_column", "bdiBoxParaStyle"]
    },

    // klass text_elemente

    "classListText_icon": {
        "class_iconSet": ["flex_directin_column", "material-symbols-outlined"],
        "font_bdiSet_value": ["font_standardValue", "bdi_fontStyle"],
        "introBDI_h2_style": ["font_standardValue", "bdi_intro_h2"],
        "article_section": ["flex_directin_column", "article_box", "article_box_style"],
        "introBDI_h2_style": ["font_standardValue", "bdi_intro_h2"],
        "article_section": ["flex_directin_column", "article_box", "article_box_style"],
        "paragraph_bdi_intro": ["flex_directin_column", "font_standardValue", "bdi_fontStyle_p"]
    },

    "bdi_headerChildren": [
        {
            "createElement": "div",
            "classList": "classHeaderLogo",
            "addClassList": ["logosetHeading"],
            "children": [
                {
                    "createElement": "span",
                    "classList": "class_iconSet",
                    "addClassList": ["psychiatry_style", "psy_iconStyle"],
                    "createText": "psychiatry"
                },
                {
                    "createElement": "h1",
                    "classList": "font_bdiSet_value",
                    "addClassList": ["psychiatry_h1_style"],
                    "createText": "BDI-II Testverfahren"
                }
            ],


        }
    ],

    "bdi_displayView": [
        {
            "createElement": "div",
            "classList": "displayView",
            "children": [
                {
                    "createElement": "div",
                    "classList": "bdi_Box",
                    "addClassList": ["parentBoxIntro"],
                    "children": "article_bdi"
                }
            ],
        }
    ],

    "article_bdi": [
        {
            "createElement": "article",
            "classList": "article_section",
            "addClassList": ["article_zero"],
            "children": [
                {
                    "createElement": "header",
                    "classList": "articleHeader",
                    "addClassList": ["article_header_zero"],
                    "children": [
                        {
                            "createElement": "h2",
                            "classList": "introBDI_h2_style",
                            "addClassList": ["h2_article_zero_zero"],
                            "createText": "Warum ich den BDI-II-Test gebaut habe"

                        },
                        {
                            "createElement": "h2",
                            "classList": "introBDI_h2_style",
                            "addClassList": ["h2_article_zero_one"],
                            "createText": "(Vom Mega-if zur Doppelklick-Mechanik)"

                        }
                    ]
                },
                {
                    "createElement": "p",
                    "classList": "paragraph_bdi_intro",
                    "addClassList": ["article_p_zero"],
                    "createText": "Meine allererste Version habe ich damals gebaut, um die komplexe Punkte-Auswertung über if-Abfragen zu knacken. Der Code war am Ende riesig lang. Aber als er lief, habe ich mich gefreut wie ein Schneekönig! Zumindest so lange, bis ich gemerkt habe, dass diese endlose Kette klassische ‚Bad Practice‘ war und das genaue Gegenteil vom KISS-Prinzip (mit dem ich auch heute noch manchmal kämpfe. Aber nobody is perfect 😉)."

                },
                {
                    "createElement": "p",
                    "classList": "paragraph_bdi_intro",
                    "addClassList": ["article_p_zero"],
                    "createText": "Statt den Kram frustriert hinzuschmeißen, habe ich einfach weitergemacht und das System neu gedacht. Mich hat bei anderen Tests im Netz immer gestört, dass man nach jeder Frage umständlich auf einen ‚Weiter‘-Button klicken muss. Also habe ich die Steuerung auf Effizienz getrimmt: Ein Klick auf den Radio-Button wählt die Antwort vor, der zweite Klick bestätigt sie und schaltet ohne Umwege direkt zur nächsten Frage."

                }

            ]
        },
        {
            "createElement": "article",
            "classList": "article_section",
            "addClassList": ["article_one"],
            "children": [
                {
                    "createElement": "header",
                    "classList": "articleHeader",
                    "addClassList": ["article_header_zero"],
                    "children": [
                        {
                            "createElement": "h2",
                            "classList": "introBDI_h2_style",
                            "addClassList": ["h2_article_zero_zero"],
                            "createText": "Wieso ich dieses Projekt hier präsentiere"

                        },
                        {
                            "createElement": "h2",
                            "classList": "introBDI_h2_style",
                            "addClassList": ["h2_article_zero_one"],
                            "createText": "(Kein Sprint, sondern echter Antrieb)"

                        }
                    ]
                },
                {
                    "createElement": "p",
                    "classList": "paragraph_bdi_intro",
                    "addClassList": ["article_p_zero"],
                    "createText": "Für mich ist Programmieren kein kurzer Sprint, sondern ein echter Marathon – einer, der zwar Kraft kostet, weil man fachlich nie ganz ausgelernt hat, bei dem ich aber komplett die Zeit vergesse, weil es mir einfach riesigen Spaß macht."
                },
                {
                    "createElement": "p",
                    "classList": "paragraph_bdi_intro",
                    "addClassList": ["article_p_zero"],
                    "createText": "Genau deshalb zeige ich dieses Projekt hier: Von meiner ersten unübersichtlichen if-Wand bis hin zur heutigen, datengesteuerten Engine sieht man hier schwarz auf weiß, wie ich meine Fehler reflektiere und mich Stück für Stück selbst weiterentwickle. Bis hierher habe ich mir die Strecke alleine erarbeitet – wenn ich jetzt noch den richtigen Mentor und ein starkes Team finde, die mich fordern und fachlich weiter schleifen, kann ich erst recht über mich hinauswachsen."
                }
            ]
        },
        {
            "createElement": "article",
            "classList": "article_section",
            "addClassList": ["article_two"],
            "children": [
                {
                    "createElement": "header",
                    "classList": "articleHeader",
                    "addClassList": ["article_header_zero"],
                    "children": [
                        {
                            "createElement": "h2",
                            "classList": "introBDI_h2_style",
                            "addClassList": ["h2_article_zero_zero"],
                            "createText": "Die Odyssee im Code"

                        },
                        {
                            "createElement": "h2",
                            "classList": "introBDI_h2_style",
                            "addClassList": ["h2_article_zero_one"],
                            "createText": "Vom rohen Erstversuch zur sauberen Architektur"
                        }
                    ]
                },
                {
                    "createElement": "p",
                    "classList": "paragraph_bdi_intro",
                    "addClassList": ["article_p_zero"],
                    "createText": "Jedes Programm in meinem Portfolio ist eine eigene kleine Reise. Mir ist es wichtig, hier nicht nur das polierte Endergebnis ins Schaufenster zu stellen, sondern auch den steinigen Weg dorthin zu zeigen – inklusive altem, rohem Code, der noch meilenweit von ‚Good Practice‘ entfernt war."

                },
                {
                    "createElement": "p",
                    "classList": "paragraph_bdi_intro",
                    "addClassList": ["article_p_zero"],
                    "createText": "Ich verstecke meine frühen Entwürfe nicht, denn genau an diesem Kontrast sieht man meine Entwicklung am besten: Wie aus endlosen, starr verschachtelten Abfragen Schritt für Schritt ein durchdachtes System mit klaren Bauplänen und strikter Trennung von Daten (bdiJSON.js) und Logik (renderringBDI_II_function.js) entstanden ist."
                }
                /*
                    Ich hatte was anderes im kopf aber egal, ich schreibe mir das mal auf gerade
                    ich wollte eigentlich eine function bauen die das content ueber geben bekommt!

                    function_article(content, parentDom) {
                        console.log(content, parentDom);
                        if (!content || !parentDom) { return; };
                        // hier kommt noch ein for of hin wenn diese mehrere elemente hat als nur einen
                        const {classList: classElement = null, addClassList = null, children = *Ich habe mal gesehen wie man das children element weiter extrarieren kann wenn das kann*} = content

                        const articleObject = {
                            "createElement": "article",
                            "classList": `${classElement}`,
                            "addClassList": `${addClassList}`,
                            "children": [
                                {
                                    "createElement": "article",
                                    "classList": `${classElement}`,
                                    "addClassList": `${addClassList}`,
                                    "createText": ``${createText},
                                    u.s.w
                                }
                            ]
                        }

                    }

                */

            ]
        }
    ],

};

const bdi_intro = [
    {
        "createElement": "header",
        "classList": "bdi_header",
        "children": "bdi_headerChildren"
    },
    {
        "createElement": "div",
        "classList": "leftSide_center_bdi",

    },
    {
        "createElement": "main",
        "classList": "bdi_main_section",
        "children": "bdi_displayView",
    },
    {
        "createElement": "div",
        "classList": "rightSide_center_bdi"
    },
    {
        "createElement": "footer",
        "classList": "footer_section_bdi"
    }
]