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
                            },
                            {
                                "createElement": "div_tag",
                                "classList": "contactBox_css",
                                "childItems": [
                                    {
                                        "createElement": "div_tag",
                                        "classList": "img_conatct_imagesBox_css",
                                        "childItems": [
                                            { "createElement": "img_tag", "classList": "img_contactPicture", "src": "contact_img", "alt": "img_man" },
                                        ]
                                    },
                                    {
                                        "createElement": "div_tag",
                                        "classList": "nameContact_css",
                                        "childItems": [
                                            {
                                                "createElement": "header_tag",
                                                "classList": "contactheaderBox",
                                                "childItems": {
                                                    "createElement": "h2_tag",
                                                    "classList": "contactText_css",
                                                    "createTextNode": "Dennis Nickel"
                                                },
                                            },
                                            {
                                                "createElement": "div_tag",
                                                "classList": "flipCard_contact",
                                                "childItems": {
                                                    "createElement": "div_tag",
                                                    "classList": "flipCard_inner",
                                                    "childItems": [
                                                        {
                                                            "createElement": "div_tag",
                                                            "classList": "contactTextBox_flipCard_front",
                                                            "childItems": [
                                                                {
                                                                    "createElement": "p_tag",
                                                                    "classList": "p_Contact_box",
                                                                    "childItems": [
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "Autodidaktischer"
                                                                        },
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "Softwareentwickler"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "createElement": "p_tag",
                                                                    "classList": "p_Contact_box",
                                                                    "childItems": [
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "Vanilla JavaScript"
                                                                        },
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "•"
                                                                        },
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "Systemarchitektur"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "createElement": "p_tag",
                                                                    "classList": "p_Contact_box",
                                                                    "childItems": [
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "Praktikant IT"
                                                                        },
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "&"
                                                                        },
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "Softwareentwicklung"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "createElement": "p_tag",
                                                                    "classList": "p_Contact_box",
                                                                    "childItems": [
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "Web-"
                                                                        },
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "&"
                                                                        },
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "Anwendungsentwicklung"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "createElement": "p_tag",
                                                                    "classList": "p_Contact_box",
                                                                    "childItems": [
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "Autark"
                                                                        },
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "•"
                                                                        },
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "Praxisorientiert"
                                                                        },
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "•"
                                                                        },
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "textContactId",
                                                                            "createTextNode": "Fokussiert"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "createElement": "div_tag",
                                                            "classList": "contactTextFlipBoxBack",
                                                            "childItems": [
                                                                {
                                                                    "createElement": "div_tag",
                                                                    "classList": "emailContact",
                                                                    "childItems": [
                                                                        {
                                                                            "createElement": "span_tag",
                                                                            "classList": "emailFont_text",
                                                                            "createTextNode": "Email:"
                                                                        },
                                                                        {
                                                                            "createElement": "a_tag",
                                                                            "classList": "anchorEmailContact",
                                                                            "href": "emailAdress",
                                                                            "childItems": {
                                                                                "createElement": "span_tag",
                                                                                "classList": "emailFont_text",
                                                                                "createTextNode": "d.nickel85@outlook.de"
                                                                            }
                                                                        }
                                                                    ]
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
                                            },
                                        ]
                                    },
                                ]
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
                        "childItems": {
                            "createBtn_function": {
                                "btn_elements": "contactBtn"
                            }
                        }
                    },

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