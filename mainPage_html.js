const mainContent = {
    "toggleEvent": "webside_toggle",
    "functionsFactory": {
        "objectRendering_function": [
            {
                "createElement": "header_tag",
                "classList": "header_css",
                "childItems": [
                    {
                        "createBtn_function": [
                            {
                                "classList": "btn_Home_css",
                                "dataset": { "action": "btnHome_open" },
                                "textSpanContent_function": {
                                    "createTextNode": "btnHome_text",
                                }
                            }
                        ]
                    },
                    {
                        "createElement": "img_tag",
                        "classList": "imgLogo_css",
                        "src": "headerLogo",
                        "alt": "logo_header_accessible"
                    }
                ]
            },
            {
                "createElement": "main_tag",
                "classList": "main_css",
                "childItems": [
                    {
                        "createElement": "nav_tag",
                        "classList": "nav_css",
                        "childItems": {
                            "createBtn_function": {
                                "btn_elements": "dropDownBtn"
                            }
                        }

                    },
                    {
                        "createElement": "div_tag",
                        "classList": "contentDisplay_css",
                        "childItems": [
                            {
                                "createElement": "div_tag",
                                "classList": "contentDisplayLeft_css"
                            },
                            {
                                "createElement": "div_tag",
                                "classList": "contentDisplayCenter_css",
                                "childItems": {
                                    "createElement": "p_tag",
                                    "classList": "p_textCont_css",
                                    "active_automaticSlideShow": {
                                        "textslideContent_function": {
                                            "createTextNode": "mainText_intro"
                                        },
                                        "slideShow_intro": true
                                    }
                                }

                            },
                            {
                                "createElement": "div_tag",
                                "classList": "contentDisplayRight_css"
                            }
                        ]
                    }
                ],
            },
            {
                "createElement": "footer_tag",
                "classList": "footer_css",
                "childItems": [
                    {
                        "createElement": "div_tag",
                        "classList": "contact_section_css",
                        "createBtn_function": {
                            "btn_elements": "contactBtn"
                        }
                    },
                    {
                        "createElement": "div_tag",
                        "classList": "logo_container_css",
                        "hyperlinkContent_function": {
                            "anchor": "anchorFooter",
                        },

                    }
                ]
            }
        ]
    }
};



/*
            {
                "createElement": "",
                "classList": "nav_css",
                //"settingFunction": { "childItems": "btn_navBar_elements", "functionFactory": "btnFunction" }
            },

*/