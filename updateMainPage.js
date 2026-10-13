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

const img_columnObject = [
    {
        "classList": ["flex", "img_container_column", "img_container_column_style"],
        "createIMG_list": [
            {
                "classList": ["block", "img_column", "img_columnStyle"],
                "imgContent": [
                    { "src": "myPortfolio/pcMeinesSohns/28D5C2A6-F09B-4240-8C12-964F5E36EEA0_4_5005_c.jpeg", "alt": "Ein weisser PC mit LED's" },
                    { "src": "myPortfolio/surfacePro/555AF927-F100-485C-AD77-7EAF1757E80C_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/nintendo_gameBoy/00B93E39-5704-4180-B272-31B45BDB0097_1_105_c.jpeg", "alt": "Umgebauter GameBoy Color mit Shiggy Design" },
                    { "src": "myPortfolio/surfacePro/029ADAD3-F57C-44B2-ABF4-B6E42D13966E_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/nintendo_gameBoy/04A59AEC-6750-48D5-8248-7C34858C64C2_1_105_c.jpeg", "alt": "Vergleich mit einen normalen GamBoy mit keinem IPS-Display" },
                    { "src": "myPortfolio/nintendoDS_lite/19D13E50-452A-47B9-B86B-B5809CEE3921_1_105_c.jpeg", "alt": "Vergleich mit einen normalen GamBoy mit keinem IPS-Display" },
                    { "src": "myPortfolio/nintendo_gameBoy/1E9E3F02-332C-467A-9D83-F24727119BD0_1_201_a.jpeg", "alt": "Vergleich mit einen normalen GamBoy mit keinem IPS-Display" },
                    { "src": "myPortfolio/nintendoDS_lite/ED31DD41-9936-48CB-A78F-4DD2835B6A6D_1_105_c.jpeg", "alt": "Vergleich mit einen normalen GamBoy mit keinem IPS-Display" },
                    { "src": "myPortfolio/nintendoDS_lite/F9CE79BC-014E-448B-8632-A91EC1843E90_1_105_c.jpeg", "alt": "Vergleich mit einen normalen GamBoy mit keinem IPS-Display" },
                    { "src": "myPortfolio/nintendoDS_lite/DC1E9514-E2F4-4471-B003-DF62B19323CF_4_5005_c.jpeg", "alt": "Vergleich mit einen normalen GamBoy mit keinem IPS-Display" },
                ]
            },
            {
                "classList": ["block", "img_column", "img_columnStyle"],
                "imgContent": [
                    { "src": "myPortfolio/surfacePro/85703A2F-3807-4CCC-91CF-B8B13075525B_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/pcMeinesSohns/3256CC7A-1CD1-47A2-BA28-42F93748AD07_4_5005_c.jpeg", "alt": "Ein weisser PC mit LED's" },
                    { "src": "myPortfolio/MacBookPro_lidSensor/IMG_241B724A-273A-4BCD-8A78-FB1894247F7C.jpeg", "alt": "MacBook Pro angel Lid Sensor" },
                    { "src": "myPortfolio/surfacePro/04DEA672-C138-404D-BC6B-7F1B9E6E12FB_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/MacBookPro_lidSensor/4B4E5EC6-8BDF-418C-9AFA-7ADDC2100C75_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/rasperryPi_3A/41061BBA-84F8-4169-8B52-687685CB58CC_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/surfacePro/5F214723-44F7-4CE3-B672-E551B671CD37_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/rasperryPi_3A/A2581D46-9730-4151-A141-F9EF6FDDAEA1_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/MacBookPro_lidSensor/IMG_4603.jpeg", "alt": "Hier habe ich das display und den lid sensor entfernt" },
                    { "src": "myPortfolio/nintendoDS_lite/6F066E0C-4CD8-468F-BAE4-156883801B05_1_105_c.jpeg", "alt": "Hier habe ich das display und den lid sensor entfernt" },
                ]
            },
            {
                "classList": ["block", "img_column", "img_columnStyle"],
                "imgContent": [
                    { "src": "myPortfolio/MacBookPro_lidSensor/IMG_4612.jpeg", "alt": "" },
                    { "src": "myPortfolio/nintendoDS_lite/3FDD0BD5-CEB7-4559-8004-1AA9C1BE6DE2_1_105_c.jpeg", "alt": "" },
                    //{ "src": "myPortfolio/MacBookPro_lidSensor/00011D7C-8F0C-46F3-87A5-8C0AE522662C_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/MacBookPro_lidSensor/IMG_4600.jpeg", "alt": "" },
                    { "src": "myPortfolio/nintendoDS_lite/3FDD13B9-94DD-4DDB-95AD-AC2AD1364829_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/MacBookPro_lidSensor/00011D7C-8F0C-46F3-87A5-8C0AE522662C_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/MacBookPro_lidSensor/AA080C79-A8E4-47BD-835E-940B26551E29_4_5005_c.jpeg", "alt": "Das ist der kaputte Lid-Sensor" },
                    { "src": "myPortfolio/MacBookPro_lidSensor/B26A8329-E76E-4D81-8242-018FA337C1F2_1_105_c.jpeg", "alt": "Hier habe ich das display und den lid sensor entfernt" },
                    { "src": "myPortfolio/MacBookPro_lidSensor/IMG_4601.jpeg", "alt": "" },
                    { "src": "myPortfolio/rasperryPi_3A/FB9C6CA2-04C2-4077-AC2F-50CA5A8928D6_1_105_c.jpeg", "alt": "" },
                ]
            },
            {
                "classList": ["block", "img_column", "img_columnStyle"],
                "imgContent": [
                    { "src": "myPortfolio/rasperryPi_3A/DD359EB0-096C-45EE-A751-4530FDAAC0EB_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/MacBookPro_lidSensor/EE20AB3D-63E9-4994-B15C-BB071BB96DA9_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/rasperryPi_3A/0707641A-3757-4255-B470-9DA0E411E631_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/MacBookPro_lidSensor/IMG_4589.jpeg", "alt": "" },
                    { "src": "myPortfolio/rasperryPi_3A/1A72E2E3-C157-4A58-A1F7-D85EC8C31016_1_105_c.png", "alt": "" },
                    { "src": "myPortfolio/MacBookPro_lidSensor/IMG_4590.jpeg", "alt": "" },
                    { "src": "myPortfolio/rasperryPi_3A/3C0A2235-1A78-4E6A-AA2B-116099CFEE12_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/MacBookPro_lidSensor/IMG_4597.jpeg", "alt": "" },
                    { "src": "myPortfolio/rasperryPi_3A/7D58CA92-5B8A-405A-BC20-6072ED5CEC58_1_105_c.jpeg", "alt": "" },
                    { "src": "myPortfolio/nintendoDS_lite/7264321C-705B-47D4-8383-34995E2221E7_1_105_c.jpeg", "alt": "" },
                ]
            }
        ]
    }
]

const childrenObject = {

    "childsHeaderContainer": [
        {
            "createElement": "div",
            "classList": ["flex", "img_section", "img_sectionStyle"],
            "children": [
                {
                    "createElement": "img",
                    "classList": ["block", "img_header_section", "img_headingStyle"],
                    "src": "imgContent/dennis.jpg",
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
                                    "createText": "Über mich"
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
                                    "createText": "Mein Portfolio"
                                }
                            ]

                        },
                        {
                            "createElement": "a",
                            "classList": ["flex", "anchorDrop_section", "anchorDrop_sectionStyle"],
                            "hrefAttr": "#gallery",
                            "children": [
                                {
                                    "createElement": "span",
                                    "classList": ["block", "material-symbols-outlined", "iconStyle"],
                                    "createText": "gallery_thumbnail"
                                },
                                {
                                    "createElement": "span",
                                    "classList": ["block", "font_standardValue", "btnTextStyle"],
                                    "createText": "Gallery reparatur"
                                }
                            ]

                        },
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
    
    {
        "createElement": "h4",
        "classList": ["block", "font_standardValue", "portfolioStyle_h4"],
        "createText": "Souveräne Fahrzeugbeherrschung auf engstem Raum",
    }


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
                
                
            ]
        }
    },
};

// hier muss ich mir fuer spaeter was ueberlegen wie ich die auszulesende Datei hineinschiebe 
//ich muss mir eine beta JSON datei erarbeiten wie ich mir die dateien auslese 
//bei der datei fuer xcode muss ich kein div oder h1 beachten aber auch hier muss ich bedenken wenn ich die rohdaten fuer javaScript nehme 
//muss ich mir ein system aus denken das javaScript weis was es erstellen soll, wenn ich ehrlich bin koennte ich
// auch alles im html schreiben und den rest reinschieben ich habe auch die moeglichkeit jede menge html elemente vorzu rendern und sie spaeter 
// mit kontent zu fuellen. wobei man das prinzip keep at simple halten soll weil dies noch ein diverses problem fuer mich ist 

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

"createText": [
    "Ich gelte oft als nüchterner und rationaler Mensch – aber wenn mich eine Sache packt, brenne ich dafür mit jeder Faser.",
    "Das LKW-Fahren fiel mir von der ersten Sekunde an leicht.",
    "Als ich in der Fahrschule den Hängerzug beim allerersten Versuch absolut fehlerfrei rückwärts einparkte, traute mein Fahrlehrer seinen Augen nicht. Er fragte mich, ob ich das heimlich geübt hätte. Ich verneinte.",
    "Er ließ mich die Übung noch einmal fahren und filmte sie mit dem Smartphone – das Manöver saß wieder auf den Millimeter genau.",
    "Es war keine Glückssache, sondern ein instinktives Gespür für Mechanik, Schleppkurven und Raum.",
    "Ich habe auf der Straße viel gemeistert: von der engen Anfahrt an die Kinderklinik in Hamm über die Krankenhäuser in Bielefeld Mitte und an der Rosenhöhe, bis hin zu anspruchsvollen Touren über Hannover, Celle, Bad Nenndorf, Nienburg und Stolzenau.",
    "Ich liebe Maschinen und Fahrzeuge – vom klassischen Porsche 911 Targa über den 944 bis hin zu Meilensteinen wie dem BMW Z1. Sie sind für mich pure Ingenieurskunst.",
    "Genau dieselbe tiefe Begeisterung empfinde ich für Computer und Code: Ein komplexes technisches System bis ins letzte Detail zu verstehen, zu beherrschen und sauber zu steuern, ist für mich kein Job, sondern ein Teil meiner Identität."
]

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

/*

    [
                                                                
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
                                                                            "createText": "Beherrschung komplexer Situationen auf engstem Raum in Hamm"
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


*/

/*{
                                            "createElement": "div",
                                            "classList": ["flex", "portfolioChildBox", "portfolioChildStyle", "specify_01"],
                                            "children": [
                                                {
                                                    "createElement": "header",
                                                    "classList": ["flex", "headingCont", "secondaryHeading", "heading_01"],
                                                    "children": [
                                                        {
                                                            "createElement": "h3",
                                                            "classList": ["block", "font_standardValue", "portfolioStyle_h3"],
                                                            "createText": "1. Einstieg in die Arbeitswelt!"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "createElement": "div",
                                                    "classList": ["flex", "portfolioChildBox", "portfolioChildStyle", "specifyChild_00"],
                                                    "functionsEvent": "description_List",
                                                    "descriptionItems": "workingList"
                                                }
                                            ]
                                        },*/