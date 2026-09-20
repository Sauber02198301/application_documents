const vitaContent = {
    // Mein Datenmodell zu meinem Lebenslauf
    "vita_timeline_entries": [
        {
            "side": "leftSide",
            "textContent": [
                {
                    "title": { "classList": "viteText_h2_css", "createTextNode": "Schulabschluss" },
                    "data": { "classList": "viteText_h3_css", "createTextNode": "12.06.2002" },
                    "institution": { "classList": "viteText_h3_css", "createTextNode": "Graf-Wilhelm-Schule, in Bückeburg" },
                    "description": {
                        "classList": "vitaText_css",
                        "createTextNode": [
                            "Der formelle Schulabschluss bildete das Fundament für meinen Einstieg in das Berufsleben.",
                            "Während starre Schulsysteme mein technisches Interesse damals noch nicht abbilden konnten,",
                            "zeigte sich schon früh meine ausgeprägte Neigung zu logischen Zusammenhängen,",
                            "PC-Hardware und handwerklichem Arbeiten."
                        ]
                    }
                    // das zeugniss mit einen PopUp einbinden oder weil die seite ja zu gänglich ist für jeden sollte man solche daten eventuell nich online stellen?
                }
            ]

        }
    ],

};


/*
"data": "12.06.2002",
            "title": "Schulabschluss",
            "institution": "Graf-Wilhelm-Schule, in Bückeburg",
            "description": ""

*/



const commentCode = {

    "childItems": [
        {
            "createElement": "div_tag",
            "classList": "vitaBox_one_css",
            "childItems": [
                {
                    "createElement": "div_tag",
                    "classList": "boxOne_header_css",
                    "childItems": [
                        {
                            "createElement": "h2_tag",
                            "classList": "vitaLifeHeading_css",
                            "createTextNode": "Schulabschluss"
                        },
                        {
                            "createElement": "h3_tag",
                            "classList": "vitaLifeHeading_h3_css",
                            "createTextNode": `Ich habe am 12.06.2002 meinen Hauptschulabschluss, an der Graf Wilhelm Schule gemacht.`
                        }
                    ]
                },
                {
                    // popUp vomZeugnis und einen Main Bereich mit einer kleinen beschreibung. 
                    "createElement": "div_tag",
                    "classList": "boxOne_mainSection",
                    "textCreaterFunction": {
                        "createTextNode": "schoolFolder",
                        "parentObject": {
                            "createElement": "p_tag",
                            "classList": "p_vitaSchooltext_css"
                        }
                    }
                }
            ]
        }
    ]
};