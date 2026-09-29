const introText = [
    {
        "createElement": "p",
        "classList": ["flex", "paragraphIntro", "paragraphStyle"],
        "textObject": [
            {
                "createText": [
                    "Die Begeisterung für Computer und Technik begleitet mich schon seit meiner Jugend.",
                    "Auch wenn mein beruflicher Weg zunächst in eine andere Richtung führte, habe ich mich privat kontinuierlich und mit großer Leidenschaft weiterentwickelt.",
                    "Ob das Planen, Zusammenstellen und Konfigurieren kompletter PC-Systeme inklusive BIOS-Setup oder anspruchsvolle Hardware-Reparaturen an MacBooks – wie das Beheben von Display- und Sensorfehlern sowie Firmware-Wiederherstellungen:",
                    "Ich liebe es, komplexen Ursachen auf den Grund zu gehen und funktionierende Lösungen zu finden.",
                    "Um mein technisches Profil abzurunden, habe ich mich intensiv in die moderne Software- und Webentwicklung eingearbeitet.",
                    "Neben soliden Kenntnissen in HTML und CSS liegt mein Schwerpunkt dabei vor allem auf JavaScript, mit dem ich bereits eigene praxisnahe Anwendungen und Logiken umsetze."
                ],
                "classList": ["block", "font_standardValue", "introTextStyle"],
            },
            {
                "createText": [
                    "Meine Faszination für Technik endet nicht bei der Software: Aktuell realisiere ich eigene Hardware-Projekte, wie den anspruchsvollen Umbau klassischer Handheld-Konsolen.",
                    "Dabei modifiziere ich Gehäuse präzise, um moderne Komponenten wie einen Raspberry Pi, separate Power-Management-Platinen und IPS-Displays samt Konverterboards auf engstem Raum einzubinden – inklusive feiner Lötarbeiten an Schnittstellen und Stromversorgung.",
                    "Wo klassische Bildungswege oft an Grenzen stießen, habe ich gelernt, mir selbst anspruchsvolle Systeme vollkommen autark und strukturiert anzueignen.",
                    "Wenn mich ein Projekt packt, entwickle ich einen absoluten Biss, um logische und stabile Lösungen zu erschaffen."
                ],
                "classList": ["block", "font_standardValue", "introTextStyle"],
            },
            {
                "createText": [
                    "Genau diese Kombination aus logischem Denken, Hardware-Verständnis und Software-Entwicklung möchte ich nun im professionellen Umfeld einbringen.",
                    "Ein Einstieg bzw. Praktikum in Ihrem Haus ist für mich der nächste logische Schritt, um an echten Herausforderungen mitzuwirken und Ihr Team tatkräftig zu unterstützen.",
                    "In meinem beigefügten Lebenslauf finden Sie meinen bisherigen Werdegang. Er zeigt, wer ich bin, welche praktischen Erfahrungen mich ausmachen und mit welcher großen Motivation ich diesen Neustart anstrebe.",
                    "Über die Gelegenheit, mich Ihnen in einem persönlichen Gespräch vorzustellen und meine Projekte im Detail zu präsentieren, freue ich mich sehr.",
                    "Mit freundlichen Grüßen",
                    "Dennis Nickel"
                ],
                "classList": ["block", "font_standardValue", "introTextStyle"],
            },
            {
                "createText": [
                    "Erfolg ist kein Glück, sondern nur das Ergebnis von Blut, Schweiß und Tränen.",
                    "— Kontra K"
                ],
                "classList": ["block", "font_standardValue", "introTextStyle"],
            }
        ],

    }
];

const aboutName = {

    "function_x": {
        "parent": {
            "createElement": "p",
            "classList": ["flex", "paraAbout_section", "paraAbout_section"],
        },
        "childContent": [
            {
                "classList": ["block", "font_standardValue", "spanAboutStyle"],
                "spanContent": [
                    "Mein Name ist Dennis. Ich bin 41 Jahre alt und durch und durch leidenschaftlicher Technik-Nerd.",
                    "Meine Faszination für Computer begann früh: Erste Berührungspunkte hatte ich am PC meiner Mutter, als man noch DOS-Befehle manuell eintippen musste, um Daten von Disketten zu laden.",
                    "Auch mein Entdeckerdrang war damals schon grenzenlos, inklusive des schmerzhaften Experiments, was passiert, wenn man Wasser in den Modulschacht eines Sega MegaDrive 16 bit gießt (Spoiler: nichts Gutes)!",
                    "Mein Vater hat das damals gerettet: Er hat die Platine trockengelegt und alle Kontakte nachgelötet.",
                    "Genau dieses Tüftler-Gen und den Drang, Dingen auf den Grund zu gehen, habe ich von ihm geerbt.",
                    "Über die Jahre begleitete mich jede Rechner-Generation: vom Compaq Presario mit seiner interaktiven Windows 3.1-Oberfläche und Klassikern wie King’s Quest 7, über Siemens Nixdorf All-in-One-Systeme bis hin zu den ersten Towern mit Intel Celeron und AMD 64.",
                    "Ich kann mich an jedes einzelne Gerät erinnern, weil mich Systeme und ihre Mechanik nie wieder losgelassen haben.",
                    "Vom ersten Rechner bis zum heutigen Code: Systeme zu verstehen, zu warten und selbst zu bauen, ist für mich kein Berufswunsch, sondern eine Lebenseinstellung."
                ]
            }
        ]
    }

};

const aboutName_x = [
    {
        "createElement": "p",
        "classList": ["flex", "paraAbout_section", "paraAbout_sectionStyle"],
        "children": [
            {
                "functionsEvent": "createSpanInjectText",
                "classList": ["block", "font_standardValue", "spanAboutStyle"],
                "createText": [
                    "Mein Name ist Dennis. Ich bin 41 Jahre alt und durch und durch leidenschaftlicher Technik-Nerd.",
                    "Meine Faszination für Computer begann früh: Erste Berührungspunkte hatte ich am PC meiner Mutter, als man noch DOS-Befehle manuell eintippen musste, um Daten von Disketten zu laden.",
                    "Auch mein Entdeckerdrang war damals schon grenzenlos, inklusive des schmerzhaften Experiments, was passiert, wenn man Wasser in den Modulschacht eines Sega MegaDrive 16 bit gießt (Spoiler: nichts Gutes)!",
                    "Mein Vater hat das damals gerettet: Er hat die Platine trockengelegt und alle Kontakte nachgelötet.",
                    "Genau dieses Tüftler-Gen und den Drang, Dingen auf den Grund zu gehen, habe ich von ihm geerbt.",
                    "Über die Jahre begleitete mich jede Rechner-Generation: vom Compaq Presario mit seiner interaktiven Windows 3.1-Oberfläche und Klassikern wie King’s Quest 7, über Siemens Nixdorf All-in-One-Systeme bis hin zu den ersten Towern mit Intel Celeron und AMD 64.",
                    "Ich kann mich an jedes einzelne Gerät erinnern, weil mich Systeme und ihre Mechanik nie wieder losgelassen haben.",
                    "Vom ersten Rechner bis zum heutigen Code: Systeme zu verstehen, zu warten und selbst zu bauen, ist für mich kein Berufswunsch, sondern eine Lebenseinstellung."
                ]
            }
        ]
    }
];

const childrenObject = {

    "childsHeaderContainer": [
        {
            "createElement": "div",
            "classList": ["flex", "img_section", "img_sectionStyle"],
            "children": [
                {
                    "createElement": "img",
                    "classList": ["block", "img_header_section", "img_headingStyle"],
                    "src": "imgContent/dennis.png",
                    "alt": "Ein Mann mittlerem Alters"
                }
            ]
        },
        {
            "createElement": "nav",
            "classList": ["flex", "navigation_section", "navigation_sectionStyle"],
            "children": [
                {
                    "createElement": "button",
                    "classList": ["btn_flex", "btn_primary", "btn_navStyle"],
                    "dataset": "openNav",
                    "children": [
                        {
                            "createElement": "span",
                            "classList": ["block", "material-symbols-outlined", "iconStyle"],
                            "createText": "menu"
                        },
                        {
                            "createElement": "span",
                            "classList": ["block", "font_standardValue", "btnTextStyle"],
                            "createText": "Menu"
                        }
                    ]

                },
                {
                    "createElement": "div",
                    "classList": ["flex", "dropDown_nav", "dropDown_navStyle"],
                    "children": [
                        {
                            "createElement": "a",
                            "classList": ["flex", "anchorDrop_section", "anchorDrop_sectionStyle"],
                            "hrefAttr": "#about",
                            "children": [
                                {
                                    "createElement": "span",
                                    "classList": ["block", "material-symbols-outlined", "iconStyle"],
                                    "createText": "article_person"
                                },
                                {
                                    "createElement": "span",
                                    "classList": ["block", "font_standardValue", "btnTextStyle"],
                                    "createText": "About"
                                }
                            ]

                        },
                        {
                            "createElement": "a",
                            "classList": ["flex", "anchorDrop_section", "anchorDrop_sectionStyle"],
                            "hrefAttr": "#portfolio",
                            "children": [
                                {
                                    "createElement": "span",
                                    "classList": ["block", "material-symbols-outlined", "iconStyle"],
                                    "createText": "business_center"
                                },
                                {
                                    "createElement": "span",
                                    "classList": ["block", "font_standardValue", "btnTextStyle"],
                                    "createText": "My Portfolio"
                                }
                            ]

                        },
                        {
                            "createElement": "button",
                            "classList": ["btn_flex", "btn_navStyle"],
                            "dataset": "x",
                            "children": [
                                {
                                    "createElement": "span",
                                    "classList": ["block", "material-symbols-outlined", "iconStyle"],
                                    "createText": ""
                                },
                                {
                                    "createElement": "span",
                                    "classList": ["block", "font_standardValue", "btnTextStyle"],
                                    "createText": "platzhalter"
                                }
                            ]

                        },
                        {
                            "createElement": "button",
                            "classList": ["btn_flex", "btn_navStyle"],
                            "dataset": "x",
                            "children": [
                                {
                                    "createElement": "span",
                                    "classList": ["block", "material-symbols-outlined", "iconStyle"],
                                    "createText": ""
                                },
                                {
                                    "createElement": "span",
                                    "classList": ["block", "font_standardValue", "btnTextStyle"],
                                    "createText": "platzhalter"
                                }
                            ]

                        }
                    ]
                }
            ],
        }
    ]

};

const mainContent = {
    // UI_control Function sie soll das activieren der seite regeln 'load', soll die seite Laden, 'reset' die seite reseten und neu laden und delete sie komplett terminieren 
    /* copie eines domObjects
    {
        "createElement": "",
        "classList": [],
        "childrens": [] || {} | "", 'check es bevor es ausgelesen wird.' 
    }

    "_css":[
        {"add": ""},
        {"add": ""},
        {"add": ""}
    ],

    "createElement": "div",
    "classList": ["flex", "mainView_section", "mainView_style"],
    "childrean": [
        {
            "createElement": "div",
            "classList": ["flex", "textArea", "textAreaStyle"],
            textCreaterFunc() {
                
            }
            
        }
    ]
    
    */

    "UI_control": {
        "parentDOM": ".body_section",
        "websideActive": "load",
        "functionsFactory": {
            "renderDOM": [
                {
                    "createElement": "header",
                    "classList": ["flex", "header_section", "header_sectionStyle"],
                    "children": "childsHeaderContainer"
                },
                {
                    "createElement": "main",
                    "classList": ["grid_container", "main_section", "main_sectionStyle"],
                    "children": [
                        {
                            "createElement": "div",
                            "classList": ["flex", "mainView_section", "mainView_style"],
                            "children": [
                                {
                                    "createElement": "div",
                                    "classList": ["flex", "about_section", "about_sectionStyle"],
                                    "only_id": "about",
                                    "children": [
                                        {
                                            "createElement": "h1",
                                            "classList": ["block", "font_standardValue", "about_h1_style", "h_style_underline"],
                                            "createText": "About"   // oder lieber mit deutsch schreiben , alternativ später einen switch auf deutsch oder englisch einrichten
                                        },
                                        {
                                            "createElement": "div",
                                            "classList": ["flex", "about_boxOne", "about_boxOneStyle"],
                                            "children": [
                                                {
                                                    "createElement": "h2",
                                                    "classList": ["block", "font_standardValue", "about_h2_style"],
                                                    "createText": "Wer bin ich!"
                                                },
                                                {
                                                    "createElement": "p",
                                                    "classList": ["flex", "paraAbout_section", "paraAbout_sectionStyle"],
                                                    "children": [
                                                        {
                                                            "functionsEvent": "createSpanInjectText",
                                                            "classList": ["block", "font_standardValue", "spanAboutStyle"],
                                                            "createText": [
                                                                "Mein Name ist Dennis. Ich bin 41 Jahre alt und durch und durch leidenschaftlicher Technik-Nerd.",
                                                                "Meine Faszination für Computer begann früh: Erste Berührungspunkte hatte ich am PC meiner Mutter, als man noch DOS-Befehle manuell eintippen musste, um Daten von Disketten zu laden.",
                                                                "Auch mein Entdeckerdrang war damals schon grenzenlos, inklusive des schmerzhaften Experiments, was passiert, wenn man Wasser in den Modulschacht eines Sega MegaDrive 16 bit gießt (Spoiler: nichts Gutes)!",
                                                                "Mein Vater hat das damals gerettet: Er hat die Platine trockengelegt und alle Kontakte nachgelötet.",
                                                                "Genau dieses Tüftler-Gen und den Drang, Dingen auf den Grund zu gehen, habe ich von ihm geerbt.",
                                                                "Über die Jahre begleitete mich jede Rechner-Generation: vom Compaq Presario mit seiner interaktiven Windows 3.1-Oberfläche und Klassikern wie King’s Quest 7, über Siemens Nixdorf All-in-One-Systeme bis hin zu den ersten Towern mit Intel Celeron und AMD 64.",
                                                                "Ich kann mich an jedes einzelne Gerät erinnern, weil mich Systeme und ihre Mechanik nie wieder losgelassen haben.",
                                                                "Vom ersten Rechner bis zum heutigen Code: Systeme zu verstehen, zu warten und selbst zu bauen, ist für mich kein Berufswunsch, sondern eine Lebenseinstellung."
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "createElement": "div",
                                            "classList": ["flex", "about_boxOne", "about_boxOneStyle"],
                                            "children": [
                                                {
                                                    "createElement": "h2",
                                                    "classList": ["block", "font_standardValue", "about_h2_style"],
                                                    "createText": "Was ist mein Weg & mein Ziel?"
                                                },
                                                {
                                                    "createElement": "p",
                                                    "classList": ["flex", "paraAbout_section", "paraAbout_sectionStyle"],
                                                    "children": [
                                                        {
                                                            "functionsEvent": "createSpanInjectText",
                                                            "classList": ["block", "font_standardValue", "spanAboutStyle"],
                                                            "createText": [
                                                                "Mein Lebensweg verlief nicht geradlinig – und genau das ist heute meine größte Stärke. Wenn Standardwege für mich verschlossen schienen oder starre Systeme an Grenzen stießen, habe ich gelernt, eigene kreative Lösungsstrategien zu entwickeln und dranzubleiben.",
                                                                "Wo andere aufgeben, fängt mein Antrieb erst an: Ich bin ein Stehaufmensch, der Zähne zusammenbeißen und durchziehen kann.",
                                                                "In der Praxis hat sich früh gezeigt, wo meine Stärken liegen: Besonders dann, wenn unerwartete Probleme oder Chaos auftraten, konnte ich meine Fähigkeit auszuspielen, schnell zu strukturieren, zu koordinieren und Ruhe ins System zu bringen.",
                                                                "Verantwortung zu übernehmen und praktische Ergebnisse abzuliefern, war für mich stets oberstes Gebot.",
                                                                "Nach vielen Jahren im operativen Einsatz habe ich die Weichen neu gestellt und meinen vollen Fokus auf meine wahre Leidenschaft gelegt: die Informationstechnik.",
                                                                "Mit eiserner Disziplin stehe ich jeden Morgen um 4:00 bis 5:00 Uhr auf und vertiefe mich in Web-Technologien wie JavaScript, HTML/CSS sowie systemnahe Zusammenhänge.",
                                                                "Mein Ziel ist der Einstieg in die IT – sei es im Bereich Systemintegration oder Anwendungsentwicklung.",
                                                                "Ich suche keine Abkürzungen, sondern echte Herausforderungen in einem Team, in dem ich meine Macher-Mentalität, meinen hohen Fokus und mein technisches Verständnis voll einbringen kann."
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "createElement": "div",
                                            "classList": ["flex", "about_boxOne", "lastAboutBoxOne", "about_boxOneStyle"],
                                            "children": [
                                                {
                                                    "createElement": "h2",
                                                    "classList": ["block", "font_standardValue", "about_h2_style"],
                                                    "createText": "Was brauche ich?"
                                                },
                                                {
                                                    "createElement": "p",
                                                    "classList": ["flex", "paraAbout_section", "paraAbout_sectionStyle"],
                                                    "children": [
                                                        {
                                                            "functionsEvent": "createSpanInjectText",
                                                            "classList": ["block", "font_standardValue", "spanAboutStyle"],
                                                            "createText": [
                                                                "Um meine Fähigkeiten optimal einzubringen, schätze ich ein Arbeitsumfeld, das auf Klarheit, Verlässlichkeit und ehrlicher Kommunikation basiert.",
                                                                "Ich bin kein Mensch für taktische Spiele oder Fassaden – für mich zählen praktische Ergebnisse, handfeste Lösungen und ein respektvoller Austausch auf Augenhöhe.",
                                                                "Ich funktioniere am besten dort, wo Struktur herrscht und Aufgaben mit klarem Ziel angegangen werden.",
                                                                "Wenn man mir den Raum gibt, mich tief in analytische Fragestellungen einzuarbeiten, entwickle ich höchste Konzentration und ziehe Projekte mit Ausdauer durch.",
                                                                "Was ich suche, ist kein bequemer Arbeitsplatz, sondern ein Team und Mentoren, die Engagement,",
                                                                "Neugier und Macher-Mentalität zu schätzen wissen und mir das Vertrauen schenken,",
                                                                "durch praktische Mitarbeit und kontinuierliches Lernen gemeinsam messbaren Mehrwert zu schaffen."
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "createElement": "div",
                                            "classList": ["flex", "about_boxOne", "footerAnchorList", "about_boxOneStyle"],
                                            "children": [
                                                {
                                                    "createElement": "a",
                                                    "classList": ["flex", "anchor_footerAbout", "anchor_footer_about_style"],
                                                    "hrefAttr": "pdf_data/Lebenslauf.pdf",
                                                    "target": "_blank",
                                                    "children": [
                                                        {
                                                            "createElement": "span",
                                                            "classList": ["block", "font_standardValue", "anchorAboutFontStyle"],
                                                            "createText": "Lebenslauf"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "createElement": "a",
                                                    "classList": ["flex", "anchor_footerAbout", "anchor_footer_about_style"],
                                                    "hrefAttr": "pdf_data/zertifikate.pdf",
                                                    "target": "_blank",
                                                    "children": [
                                                        {
                                                            "createElement": "span",
                                                            "classList": ["block", "font_standardValue", "anchorAboutFontStyle"],
                                                            "createText": "Erworbene Zertifikate"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "createElement": "a",
                                                    "classList": ["flex", "anchor_footerAbout", "anchor_footer_about_style"],
                                                    "hrefAttr": "pdf_data/IHK_B96_test Kopie.pdf",
                                                    "target": "_blank",
                                                    "children": [
                                                        {
                                                            "createElement": "span",
                                                            "classList": ["block", "font_standardValue", "anchorAboutFontStyle"],
                                                            "createText": "Erworbener Führerschein und dazugehörigen Güterverkehrqualifikation"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "createElement": "div",
                                    "classList": ["flex", "portfolioSection", "portfolioSectionStyle"],
                                    "only_id": "portfolio",
                                    "children": [
                                        {
                                            "createElement": "h1",
                                            "classList": ["block", "font_standardValue", "portfolio_h1_style", "h_style_underline"],
                                            "createText": "My Portfolio"   // oder lieber mit deutsch schreiben , alternativ später einen switch auf deutsch oder englisch einrichten
                                        },
                                        {
                                            "createElement": "div",
                                            "classList": ["flex", "portfolioBox", "portfolioStyle"],
                                            "children": [
                                                {
                                                    "createElement": "div",
                                                    "classList": ["flex", "headerPortfolio", "headerPortfolioStyle"],
                                                    "children": [
                                                        {
                                                            "createElement": "h3",
                                                            "classList": ["block", "font_standardValue", "portfolioStyle_h3"],
                                                            "createText": "Fokus auf Präzision & Verantwortung",
                                                        },
                                                        {
                                                            "createElement": "h4",
                                                            "classList": ["block", "font_standardValue", "portfolioStyle_h4"],
                                                            "createText": "Präzision am Steuer & Logistik",
                                                        }
                                                    ]
                                                },
                                                {
                                                    "createElement": "div",
                                                    "classList": ["flex", "photoPortfolio_section", "photoPortfolio_sectionStyle", "lkwSection"],
                                                    "children": [
                                                        {
                                                            "createElement": "p",
                                                            "classList": ["flex", "portfolio_para", "paraPortfolioStyle"],
                                                            "children": [
                                                                {
                                                                    "functionsEvent": "createSpanInjectText",
                                                                    "classList": ["block", "font_standardValue", "spanPortfolioStyle"],
                                                                    "createText": [
                                                                        "Ich habe keine Herausforderung gescheut und den LKW selbst durch engste Einfahrten und anspruchsvolle Anlieferungsstellen manövriert.",
                                                                        "Diese Galerie zeigt Einblicke in meine praktische Erfahrung und mein hohes Maß an Konzentration und Präzision im Fahralltag."
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "createElement": "div",
                                                            "classList": ["flex", "photoGalery", "photoGaleryStyle"],
                                                            "children": [
                                                                {
                                                                    "createElement": "button",
                                                                    "classList": ["btn_flex", "secondaryBtn", "collapsibleBtn", "collapsibleStyle"],
                                                                    "children": [
                                                                        {
                                                                            "createElement": "span",
                                                                            "classList": ["block", "font_standardValue", "spanCollapsibleFontStyle"],
                                                                            "createText": "Beherrschung komplexer Situationen auf engstem Raum"
                                                                        },
                                                                        {
                                                                            "createElement": "span",
                                                                            "classList": ["block", "material-symbols-outlined", "iconAdd"],
                                                                            "createText": "add"
                                                                            // minusIcon: remove
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "createElement": "div",
                                                                    "classList": ["flex", "galaryBoxCollapsible", "galaryBoxCollapsible_style"],
                                                                    "children": [
                                                                        {
                                                                            "functionsEvent": "imgCreaterSection",
                                                                            "gallaryData": [
                                                                                {
                                                                                    "imgClassList": ["block", "portfolioImg", "portfolioImgStyle"],
                                                                                    "src": "myPortfolio/lkwSection/braunschweig_laderampeSalz.jpeg",
                                                                                    "alt": "Geparkter LKW mit Anhaenger gepackt an einer Laderampe",
                                                                                    "classList_div": ["flex", "galleryTextBox", "galleryTextBox_style"],
                                                                                    "classListText_h": ["block", "font_standardValue", "gallaryText_h2"],
                                                                                    "title": "Braunschweig millimeter genau eingeparkt",
                                                                                    "classListTextSpan": ["block", "font_standardValue", "gallaryTextSpan"],
                                                                                    "desc": "Um das Salzdalumer Klinik im Braunschweig zu beliefern muss man eine s-kurve rückwerts mit Anhänger hinunter fahren. Ich muss nahe mit der Rechten Kante vom LKW an der mauer hinunter fahren."
                                                                                }
                                                                            ]
                                                                        },

                                                                    ]
                                                                },
                                                                {
                                                                    "createElement": "button",
                                                                    "classList": ["btn_flex", "secondaryBtn", "collapsibleBtn", "collapsibleStyle"],      
                                                                    "children": [
                                                                        {
                                                                            "createElement": "span",
                                                                            "classList": ["block", "font_standardValue", "spanCollapsibleFontStyle"],
                                                                            "createText": "Beherrschung komplexer Situationen auf engstem Raum"
                                                                        },
                                                                        {
                                                                            "createElement": "span",
                                                                            "classList": ["block", "material-symbols-outlined", "iconAdd"],
                                                                            "createText": "add"
                                                                            // minusIcon: remove
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "createElement": "div",
                                                                    "classList": ["flex", "galaryBoxCollapsible", "galaryBoxCollapsible_style"],
                                                                    "children": [
                                                                        {
                                                                            "functionsEvent": "imgCreaterSection",
                                                                            "gallaryData": [
                                                                                {
                                                                                    "imgClassList": ["block", "portfolioImg", "portfolioImgStyle"],
                                                                                    "src": "myPortfolio/lkwSection/laderampe_hamm_links.jpeg",
                                                                                    "alt": "Geparkter LKW mit Anhaenger gepackt an einer Laderampe",
                                                                                    "classList_div": ["flex", "galleryTextBox", "galleryTextBox_style"],
                                                                                    "classListText_h": ["block", "font_standardValue", "gallaryText_h2"],
                                                                                    "title": "Kinder Hamm mm genaues einparken",
                                                                                    "classListTextSpan": ["block", "font_standardValue", "gallaryTextSpan"],
                                                                                    "desc": "Hier stehe ich inder minimalen Parkbucht wo ich bis auf der rille soweit rects wenn man vor dem LKW steht kein mm platz ist so das an der Linken seite genug platz ist das das Personal Hochgehen kann vom Kinder krankenhaus Hamm"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                            ]
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
                            "createElement": "div",
                            "classList": ["flex", "sideBarRight", "sideBarRightStyle"],
                            "children": [
                                {
                                    "createElement": "button",
                                    "classList": ["btn_flex", "secondaryBtn", "imgButtonStyle"],
                                    "dataset": "imgBoxSetting",
                                    "children": [
                                        {
                                            "createElement": "span",
                                            "classList": ["block", "material-symbols-outlined", "iconPlay"],
                                            "createText": "play_pause"
                                        }
                                    ]
                                },
                                {
                                    "createElement": "div",
                                    "classList": ["flex", "imgBox"],
                                    "children": [
                                        {
                                            "createElement": "img",
                                            "classList": ["block", "imgSideRest", "javaScriptLogo"],
                                            "src": "logo_code/javaScriptLogo.png",
                                            "alt": "JavaScript_Logo"
                                        },
                                        {
                                            "createElement": "img",
                                            "classList": ["block", "imgSideRest", "htmlLogo"],
                                            "src": "logo_code/html5_logo.png",
                                            "alt": "html_Logo"
                                        },
                                        {
                                            "createElement": "img",
                                            "classList": ["block", "imgSideRest", "cssLogo"],
                                            "src": "logo_code/css_logo.png",
                                            "alt": "css_Logo"
                                        },
                                        {
                                            "createElement": "img",
                                            "classList": ["block", "imgSideRest", "nodejs"],
                                            "src": "logo_code/node.js_logo.png",
                                            "alt": "nodejs_Logo"
                                        },
                                        {
                                            "createElement": "img",
                                            "classList": ["block", "imgSideRest", "nodejs"],
                                            "src": "logo_code/python_logo.png",
                                            "alt": "python_Logo"
                                        },
                                    ]
                                }
                            ]
                        }
                    ],
                },
                {
                    "createElement": "footer",
                    "classList": ["flex", "footer_section", "footer_sectionStyle"],
                    "children": [
                        {
                            "createElement": "div",
                            "classList": ["flex", "footerIcon_box", "footerIconStyle"],
                            "children": [
                                {
                                    "createElement": "a",
                                    "classList": ["flex", "anchor_settings", "anchorStyle"],
                                    "hrefAttr": "https://www.instagram.com/sauber0183/?hl=de",
                                    "target": "_blank",
                                    "children": [
                                        {
                                            "createElement": "span",
                                            "classList": ["block", "fa", "fa-instagram", "anchorHover"],
                                        },
                                        /*{
                                            "createElement": "span",
                                            "classList": ["block", "font_standardValue", "fa_textStyle"],
                                            "createText": ["Insta"]
                                        }*/
                                    ]
                                },
                                {
                                    "createElement": "a",
                                    "classList": ["flex", "anchor_settings", "anchorStyle"],
                                    "hrefAttr": "https://github.com/Sauber02198301",
                                    "target": "_blank",
                                    "children": [
                                        {
                                            "createElement": "span",
                                            "classList": ["block", "fa", "fa-github-square", "anchorHover"],
                                        },
                                        /*{
                                            "createElement": "span",
                                            "classList": ["block", "font_standardValue", "fa_textStyle"],
                                            "createText": ["Github"]
                                        }*/
                                    ]
                                },
                                {
                                    "createElement": "a",
                                    "classList": ["flex", "anchor_settings", "anchorStyle"],
                                    "hrefAttr": "mailto:d.nickel85@outlook.de",
                                    "children": [
                                        {
                                            "createElement": "span",
                                            "classList": ["block", "material-symbols-outlined", "mailStyle", "anchorHover"],
                                            "createText": "mail"
                                        },
                                        /*{
                                            "createElement": "span",
                                            "classList": ["block", "font_standardValue", "fa_textStyle"],
                                            "createText": ["E-m@il"]
                                            fa-phone-square
                                        }*/
                                    ]
                                },
                                {
                                    "createElement": "a",
                                    "classList": ["flex", "anchor_settings", "anchorStyle"],
                                    //"hrefAttr": "tel:+49 176 30666073",
                                    "children": [
                                        {
                                            "createElement": "span",
                                            "classList": ["block", "fa", "fa-phone-square", "anchorHover"],
                                        },
                                        /*{
                                            "createElement": "span",
                                            "classList": ["block", "font_standardValue", "fa_textStyle"],
                                            "createText": ["E-m@il"]
                                            
                                        }*/
                                    ]
                                }
                            ]
                        }

                    ],
                }
            ]
        }
    },
};

const imgContent = [
    {
        "createElement": "div",
        "classList": ["flex", "galaryBoxCollapsible", "galaryBoxCollapsible_style"],
        "children": [
            {
                "functionsEvent": "imgCreaterSection",
                "gallaryData": [
                    {
                        "imgClassList": ["block", "portfolioImg", "portfolioImgStyle"],
                        "src": "myPortfolio/lkwSection/braunschweig_laderampeSalz.jpeg",
                        "alt": "Geparkter LKW mit Anhaenger gepackt an einer Laderampe",
                    },
                    {
                        "classList_div": ["flex", "galleryTextBox", "galleryTextBox_style"],
                        "children": [
                            {
                                "classListText_h": ["block", "font_standardValue", "gallaryText_h2"],
                                "title": "Braunschweig millimeter genau eingeparkt",
                            },
                            {
                                "classList_para": ["flex", "para_gallaryText", "paraGallaryStyle"],
                                "children": [
                                    {
                                        "classListTextSpan": ["block", "font_standardValue", "gallaryTextSpan"],
                                        "desc": "Um das Salzdalumer Klinik im Braunschweig zu beliefern muss man eine s-kurve rückwerts mit Anhänger hinunter fahren. Ich muss nahe mit der Rechten Kante vom LKW an der mauer hinunter fahren."
                                    }
                                ]
                            }
                        ]

                    }

                ]
            }
        ]
    },
    // zweite variante des codes
    {
        "createElement": "div",
        "classList": ["flex", "galaryBoxCollapsible", "galaryBoxCollapsible_style"],
        "children": [
            {
                "functionsEvent": "imgCreaterSection",
                "classSettings": {
                    "imgClassList": ["block", "portfolioImg", "portfolioImgStyle"],
                    "classList_div": ["flex", "galleryTextBox", "galleryTextBox_style"],
                    "classListText_h": ["block", "font_standardValue", "gallaryText_h2"],
                    "classList_para": ["flex", "para_gallaryText", "paraGallaryStyle"],
                    "classListTextSpan": ["block", "font_standardValue", "gallaryTextSpan"],
                },
                "gallaryData": [
                    {
                        "src": "myPortfolio/lkwSection/braunschweig_laderampeSalz.jpeg",
                        "alt": "Geparkter LKW mit Anhaenger gepackt an einer Laderampe",
                    },
                    {
                        // ?? Hier ist die frage was mache ich weil ab hier gibt es keinen anhaltspunkt was der pc machen soll.
                        // ich würde eine schlüssel nummer bauen. 
                        "classSettings": "classList_div", // das ist der wert der sagt erstelle hier ein div-tag
                        "children": [
                            {
                                // und title signaliesiert auch das es sich um den h hällt 
                                "title": "Braunschweig millimeter genau eingeparkt",
                            },
                            {
                                "classSettings": "classList_para",
                                // hier erstelle ein p-tag
                                "children": [
                                    {
                                        // desc ist das schluesselwort
                                        "desc": "Um das Salzdalumer Klinik im Braunschweig zu beliefern muss man eine s-kurve rückwerts mit Anhänger hinunter fahren. Ich muss nahe mit der Rechten Kante vom LKW an der mauer hinunter fahren."
                                    }
                                ]
                            }
                        ]

                    }
                ]
            }
        ]
    }
];
/*


{
                    "src": "",
                    "alt": "",
                    "title": "",
                    "desc": ""
                },
                {
                    "src": "",
                    "alt": "",
                    "title": "",
                    "desc": ""
                },
   {
       // was brauche ich hier das ist ja jetzt der moment wo wir die ganze zeit ideen und diskutiert habe.
       1. auslesen des Objectes "eigenschaft" => functions aufruf??? Der wert beinhaltet das child / parent und desen child 
           nehmen wir an das p ist das parent wird dieses element ja auch einen parent container haben und p seine kinder 
           sind die <span> childs. mussen wir das so sehen das wir das object

           example: 
           "p_property": {
               "createElement": "p",
               "classList": ["flex", "aboutPara", "aboutParaStyle"],
           }

*/