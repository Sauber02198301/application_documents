const gambleMashine = {
    "gameGambleMachine": true,

    "gambleFramework": [
        {
            "createElement": "div",
            "classList": ["grid", "gridGambleProperty", "gambleStyle"],
            "addClassList": ["gambleControl"],
            "id_name": "gambleId_system",
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
                                            "classList": ["display_block", "font_family_game", "headingGameTxt"],
                                            "addClassList": ["paymentText"],
                                            "id_name": "euro",
                                            "createText": "Guthaben:"
                                        },
                                        {
                                            "createElement": "h3",
                                            "classList": ["display_block", "font_family_game", "headingGameTxt"],
                                            "addClassList": ["bigNumber"],
                                            "id_name": "euro",
                                            "createText": "10"
                                        },
                                        {
                                            "createElement": "h3",
                                            "classList": ["display_block", "font_family_game", "headingGameTxt"],
                                            "addClassList": ["pointFont"],
                                            "createText": "."
                                        },
                                        {
                                            "createElement": "h3",
                                            "classList": ["display_block", "font_family_game", "headingGameTxt"],
                                            "addClassList": ["smallNumber"],
                                            "id_name": "cent",
                                            "createText": "00"
                                        },
                                        {
                                            "createElement": "h3",
                                            "classList": ["display_block", "font_family_game", "headingGameTxt"],
                                            "addClassList": ["euroText"],
                                            "createText": "Euro"
                                        }
                                    ]
                                },
                                {
                                    "createElement": "div",
                                    "classList": ["flex_row", "displayScoreZone"],
                                    "addClassList": ["freeGameScore"],
                                    "children": [
                                        {
                                            "createElement": "h3",
                                            "classList": ["display_block", "font_family_game", "headingGameTxt"],
                                            "addClassList": ["textFreeGame"],
                                            "createText": "Freispiel:"
                                        },
                                        {
                                            "createElement": "h3",
                                            "classList": ["display_block", "font_family_game", "headingGameTxt"],
                                            "addClassList": ["freeGame_score"],
                                            "id_name": "freeGame",
                                            "createText": "0"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};