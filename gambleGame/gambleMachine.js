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
        }
    ]
};