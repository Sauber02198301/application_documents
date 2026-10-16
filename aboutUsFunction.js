// Hier uebertrage ich die abutUs Daten um einen sauberen cut zu machen und so kann ich auch eine slideShow bauen,
// diese slideShow soll eine dot list haben sowie ohne 'click' event auskommen nur mit slide sowie jeweilige anzeige was active ist. 
// ich baue hier erst mal nur theoretisch und fuge es noch nicht ein. so kann ich die classList auch anpassen ohen das ich das fertige veraendere. 

const aboutUs_classList = {

    // um wiederholungen zu vermeiden oder dopplungen classen zusammen legen und eine einheitliche webDesign baue sehe ich noch
    // das ich nicht wieder haengen bleibe muss ich mich drosseln weil ich muss auch noch die apps einbauen und ueber einen hyperlink einbaue
    // einen iframe macht auch irgendwie sinn so wahren Mein Portfolio und ueber mich separat. 

    "div_parent": ["flex", "about_section", "about_sectionStyle"],
    "header_parent": ["flex", "header_aboutSection", "mainView_sectionHeader_childStyle"],
    "parent_h1_section": ["block", "font_standardValue", "about_h1_style"],
    "div_child": ["flex", "about_boxOne", "mainView_child_style"],
    "header_child": ["flex", "header_aboutOneSection", "header_aboutOneSectionStyle"],
    "child_h2_section": ["block", "font_standardValue", "about_h2_style"],
    "mainView_paragraph": ["flex", "paraAbout_section", "paraAbout_sectionStyle"],
    "mainView_text": ["block", "font_standardValue", "spanAboutStyle"]
};

const aboutText = {
    "parentAboutText": "Über mich",
    "aboutTextContent": [
        {
            "headingText": "Wer bin ich?",
            "mainText": [
                "Mein Name ist Dennis. Ich bin 41 Jahre alt und durch und durch leidenschaftlicher Technik-Nerd.",
                "Meine Faszination für Computer begann früh: Erste Berührungspunkte hatte ich am PC meiner Mutter, als man noch DOS-Befehle manuell eintippen musste, um Daten von Disketten zu laden.",
                "Auch mein Entdeckerdrang war damals schon grenzenlos, inklusive des schmerzhaften Experiments, was passiert, wenn man Wasser in den Modulschacht eines Sega MegaDrive 16-Bit gießt (Spoiler: nichts Gutes)!",
                "Mein Vater hat das damals gerettet: Er hat die Platine trockengelegt und alle Kontakte nachgelötet.",
                "Genau dieses Tüftler-Gen und den Drang, Dingen auf den Grund zu gehen, habe ich von ihm geerbt.",
                "Über die Jahre begleitete mich jede Rechner-Generation: vom Compaq Presario mit seiner interaktiven Windows 3.1-Oberfläche und Klassikern wie King’s Quest 7 über Siemens Nixdorf All-in-One-Systeme bis hin zu den ersten Towern mit Intel Celeron und AMD 64.",
                "Ich kann mich an jedes einzelne Gerät erinnern, weil mich Systeme und ihre Mechanik nie wieder losgelassen haben.",
                "Vom ersten Rechner bis zum heutigen Code: Systeme zu verstehen, zu warten und selbst zu bauen, ist für mich kein Berufswunsch, sondern eine Lebenseinstellung."
            ]
        },
        {
            "headingText": "Was ist mein Weg & mein Ziel?",
            "mainText": [
                "Um meine Fähigkeiten optimal einzubringen, schätze ich ein Arbeitsumfeld, das auf Klarheit, Verlässlichkeit und ehrlicher Kommunikation basiert.",
                "Ich bin kein Mensch für taktische Spiele oder Fassaden – für mich zählen praktische Ergebnisse, handfeste Lösungen und ein respektvoller Austausch auf Augenhöhe.",
                "Ich funktioniere am besten dort, wo Struktur herrscht und Aufgaben mit einem klaren Ziel angegangen werden.",
                "Wenn man mir den Raum gibt, mich tief in analytische Fragestellungen einzuarbeiten, entwickle ich höchste Konzentration und ziehe Projekte mit Ausdauer durch.",
                "Was ich suche, ist kein bequemer Arbeitsplatz, sondern ein Team und Mentoren, die Engagement, Neugier und Macher-Mentalität zu schätzen wissen und mir das Vertrauen schenken, durch praktische Mitarbeit und kontinuierliches Lernen gemeinsam messbaren Mehrwert zu schaffen."
            ]
        },
        {
            "headingText": "Was brauche ich?",
            "mainText": [
                "Mein Lebensweg verlief nicht geradlinig – und genau das ist heute meine größte Stärke. Wenn Standardwege für mich verschlossen schienen oder starre Systeme an Grenzen stießen, habe ich gelernt, eigene kreative Lösungsstrategien zu entwickeln und dranzubleiben.",
                "Wo andere aufgeben, fängt mein Antrieb erst an: Ich bin ein Stehaufmensch, der die Zähne zusammenbeißen und durchziehen kann.",
                "In der Praxis hat sich früh gezeigt, wo meine Stärken liegen: Besonders dann, wenn unerwartete Probleme oder Hektik auftraten, konnte ich meine Fähigkeit ausspielen, schnell zu strukturieren, zu koordinieren und Ruhe ins System zu bringen.",
                "Verantwortung zu übernehmen und praktische Ergebnisse abzuliefern, war für mich stets oberstes Gebot.",
                "Nach vielen Jahren im operativen Einsatz habe ich die Weichen neu gestellt und meinen vollen Fokus auf meine wahre Leidenschaft gelegt: die Informationstechnik.",
                "Mit eiserner Disziplin stehe ich jeden Morgen um 4:00 bis 5:00 Uhr auf und vertiefe mich in Web-Technologien wie JavaScript, HTML/CSS sowie systemnahe Zusammenhänge.",
                "Mein Ziel ist der Einstieg in die IT – sei es im Bereich Systemintegration oder Anwendungsentwicklung.",
                "Ich suche keine Abkürzungen, sondern echte Herausforderungen in einem Team, in dem ich meine Macher-Mentalität, meinen hohen Fokus und mein technisches Verständnis voll einbringen kann."
            ]
        }
    ]
};

const libraryAboutUs = {

// als naechstes kann ich dann das programm kurzen alle dopplungen weg das macht das programm fur nur noch die obrigen classen,
// die anzahl des aboutUs container werde ich nur noch dezimieren auf einen div child der sich immer dupliziert / noch besser finde ich das er einfach da ist nur den textContent und heading getauscht wird. 
// ich hoffe das ist das kiss prinzip ;) 

    "aboutUs_content": [
        {
            "createElement": "div",
            "classList": "div_parent",
            "only_id": "about",
            "children": [
                {
                    "createElement": "header",
                    "classList": "header_parent",
                    "children": [
                        {
                            "createElement": "h1",
                            "classList": "parent_h1_section",
                            "createText": "parentAboutText"   // oder lieber mit deutsch schreiben , alternativ später einen switch auf deutsch oder englisch einrichten
                        },
                    ]
                },
                {
                    "createElement": "div",
                    "classList": "div_child",
                    "children": [
                        {
                            "createElement": "header",
                            "classList": "header_child",
                            "children": [
                                {
                                    "createElement": "h2",
                                    "classList": "child_h2_section",
                                    "createText": ''
                                }
                            ]
                        },
                        {
                            "createElement": "p",
                            "classList": "mainView_paragraph",
                            "children": [
                                {
                                    "functionsEvent": "createSpanInjectText",
                                    "classList": ["block", "font_standardValue", "spanAboutStyle"],
                                    "createText": "",
                                }
                            ]
                        }
                    ]
                },
                {
                    "createElement": "div",
                    "classList": ["flex", "about_boxOne", "mainView_child_style"],
                    "children": [
                        {
                            "createElement": "header",
                            "classList": ["flex", "header_aboutOneSection", "header_aboutOneSectionStyle"],
                            "children": [
                                {
                                    "createElement": "h2",
                                    "classList": "child_h2_section",
                                    "createText": ""
                                }
                            ]
                        },
                        {
                            "createElement": "p",
                            "classList": ["flex", "paraAbout_section", "paraAbout_sectionStyle"],
                            "children": [
                                {
                                    "functionsEvent": "createSpanInjectText",
                                    "classList": ["block", "font_standardValue", "spanAboutStyle"],
                                    "createText": ""
                                }
                            ]
                        }
                    ]
                },
                {
                    "createElement": "div",
                    "classList": ["flex", "about_boxOne", "lastAboutBoxOne", "mainView_child_style"],
                    "children": [
                        {
                            "createElement": "header",
                            "classList": ["flex", "header_aboutOneSection", "header_aboutOneSectionStyle"],
                            "children": [
                                {
                                    "createElement": "h2",
                                    "classList": ["block", "font_standardValue", "about_h2_style"],
                                    "createText": ""
                                }
                            ]
                        },
                        {
                            "createElement": "p",
                            "classList": ["flex", "paraAbout_section", "paraAbout_sectionStyle"],
                            "children": [
                                {
                                    "functionsEvent": "createSpanInjectText",
                                    "classList": ["block", "font_standardValue", "spanAboutStyle"],
                                    "createText": ""
                                }
                            ]
                        }
                    ]
                }
            ]
        }

    ]

};