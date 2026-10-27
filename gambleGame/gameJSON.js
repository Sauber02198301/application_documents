// Das gefällt mir noch nicht so ich werde die knöpfe im Main bereich platzieren wo auch der Gamble hineinkommt
//so kann ich auch das Spiel separat auf rufe sowie andere Spiele wie CodeBraeker implementieren. 
//Sowie spiel Logik vom design trennen. 
/*"children": [
    {
        "createElement": "div",
        "classList": ["flex_row"],
        "addClassList": ["div_zero"],
        "children": [
            {
                "createElement": "button",
                "classList": ["flex_row", "btn", "btn_secondary", "btn_style"],
                "addClassList": ["btn_login"],
                "dataset": "login",
                "children": [
                    {
                        "createElement": "span",
                        "classList": ["display_block", "material-symbols-outlined"],
                        "addClassList": ["login_textStyle"],
                        "createText": "play_arrow"
                    },
                    {
                        "createElement": "span",
                        "classList": ["display_block", "font_family_game"],
                        "addClassList": ["login_textStyle"],
                        "createText": "Start"
                    }
                ]
            }
        ]
    },
    {
        "createElement": "div",
        "classList": ["flex_column"],
        "addClassList": ["div_one"],
        "children": [
            {
                "createElement": "button",
                "classList": ["flex_row", "btn", "btn_secondary", "btn_style"],
                "addClassList": ["btn_login"],
                "dataset": "add",
                "children": [
                    {
                        "createElement": "span",
                        "classList": ["display_block", "material-symbols-outlined"],
                        "addClassList": ["login_textStyle"],
                        "createText": "add"
                    },
                    {
                        "createElement": "span",
                        "classList": ["display_block", "font_family_game"],
                        "addClassList": ["login_textStyle"],
                        "createText": "Euro"
                    }
                ]
            },
            {
                "createElement": "button",
                "classList": ["flex_row", "btn", "btn_secondary", "btn_style"],
                "addClassList": ["btn_login"],
                "dataset": "remove",
                "children": [
                    {
                        "createElement": "span",
                        "classList": ["display_block", "material-symbols-outlined"],
                        "addClassList": ["login_textStyle"],
                        "createText": "remove"
                    },
                    {
                        "createElement": "span",
                        "classList": ["display_block", "font_family_game"],
                        "addClassList": ["login_textStyle"],
                        "createText": "Euro"
                    }
                ]
            }
        ]
    }
]*/

/*
    An sich kann ich dann das Spielprinzip nach und nach dann erweitern der main bereich bleibt clean,
    die einzelnen games werden dann ueber eine controlUI abgerufen und so das nur eins aktive sein kann.
    An sich kann ich dann Spiele wie CodeBraker, Snake, einen GambleMachine
*/


const bodyGame = [
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
    },
    {
        "createElement": "nav",
        "classList": ["flex_column", "nav_gameList", "nav_style"],
        "addClassList": ["control_nav_body"],
        "children": [
            // hier baue ich eine automatische btn_createrFabrik so brauche ich nicht immer btn oder span schreiben
            // eine zwei ebenen Prinzip 1. die btn_propertys vergeben mit destructering
            {
                "createElement": "button",
                "classList": ["flex_column", "btn", "primaryBtn", "primaryBtn_style"],
                "addClassList": ["gameList"],
                "dataset": "active_dropDown",
                "children": [
                    {
                        "createElement": "span",
                        "classList": ["display_block", "material-symbols-outlined"],
                        "addClassList": ["iconNav"],
                        "createText": "poker_chip",
                    },
                    {
                        "createElement": "span",
                        "classList": ["display_block", "font_family_game"],
                        "addClassList": ["gaming_instruction"],
                        "createText": "Spielanleitung",
                    }
                ]
            }
        ]
    },
    {
        "createElement": "main",
        "classList": ["grid", "grid_property", "main_section", "main_sectionStyle"],
        "addClassList": ["hallo"],
        "children": [
            {
                "createElement": "header",
                "classList": ["flex_column", "gamingHeader", "gamingHeaderStyle"],
                "addClassList": ["score_dispalyArea"],
                "children": [
                    {
                        "createElement": "div",
                        "classList": ["flex_row", "displayZone", "displayZoneStyle"],
                        "addClassList": ["gameHeading"],
                        "children": [
                            {
                                "createElement": "h2",
                                "classList": ["display_block", "font_family_game"],
                                "addClassList": ["headingGameTxt"],
                                "createText": "Wie nenne ich das Spiel??"
                            }
                        ]
                    },
                    {
                        "createElement": "div",
                        "classList": ["flex_row", "displayZone", "displayZoneStyle"],
                        "addClassList": ["score"],
                        "children": [
                            {
                                "createElement": "div",
                                "classList": ["flex_row", "displayScoreZone"],
                                "addClassList": ["scoreZone"],
                                "children": [
                                    {
                                        "createElement": "h3",
                                        "classList": ["display_block", "font_family_game"],
                                        "addClassList": ["headingGameTxt"],
                                        "createText": "10.00"
                                    }
                                ]
                            },
                            {
                                "createElement": "div",
                                "classList": ["flex_row", "displayScoreZone"],
                                "addClassList": ["scoreZoneTxt"],
                                "children": [
                                    {
                                        "createElement": "h3",
                                        "classList": ["display_block", "font_family_game"],
                                        "addClassList": ["headingGameTxt"],
                                        "createText": "Euro"
                                    }
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
                "addClassList": ["kontakt_section"],
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

    }
];


/*

    span_content, h1 or other else text propertys from HTML5: 
        {
            "createElement": "",
            "classList": ["display_block", "font_family_game"],
            "addClassList": [""],
            "createText": ""
        }
        this ist the object for icon's it give from google or fa fastyle icon's
        google: "material-symbols-outlined", 
        fa_icon: "fa...keyword..." or "fa" and the keyword is initiation with textCreater

    ;
    div_content, header, main this is a universal Object for create a htmlDom object:
        {
            "createElement": "",
            "classList": [""],
            "addClassList": [""],
            "children": []
        }
    ;


    gedanken zur meiner btnFabrik

        functionEvent: "btnCreateFactory"

        objectProperty: {
                            //btnProperty's
                            "classList": [""]    //hier konnte man auch einen anderen property Name benutzen
                            "addClassList": [""]    //nur so waren alle gleich dies wurde die lesbarkeit foerdern 
                            "dataset": "valueName"        
                            "textChildren": {
                                                "createText"["0", "1", .....u.s.w],    //takt geber und classList & addClassList sollen nur immer gecolont werden. 
                                                "classList": [""],
                                                "addClassList": [""],
                                           
                                            }   
                        }

*/