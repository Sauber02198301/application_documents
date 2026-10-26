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
                        "classList": ["display_block", "default_fontProp", "h1_headerStyle"],
                        "addClassList": ["font_family_game"],
                        "createText": "Casino Games"
                    },
                    {
                        "createElement": "span",
                        "classList": ["display_block", "font_family_game"],
                        "addClassList": ["headerIcon"],
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
                        "createElement": "span",
                        "classList": ["display_block", "material-symbols-outlined", "logoHeader"],
                        "addClassList": ["logoZero"],
                        "createText": "Casino playing_cards"
                    },
                    {
                        "createElement": "span",
                        "classList": ["display_block", "material-symbols-outlined", "logoHeader"],
                        "addClassList": ["logoOne"],
                        "createText": "social_leaderboard Casino",
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
                                "classList": ["displa_block", "font_family_game"],
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
                                        "classList": ["displa_block", "font_family_game"],
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
                                        "classList": ["displa_block", "font_family_game"],
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
            }
        ]
    }
];