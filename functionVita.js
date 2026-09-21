const vitaContent = {
    // Mein Datenmodell zu meinem Lebenslauf
    "vita_timeline_entries": [
        {
            "side": "leftSide",
            "childContent": {
                "createElement": "div_tag",
                "classList": "vitaBox_one_css",
                "textContent": [
                    {
                        "title": { "createElement": "h2_tag", "classList": "viteText_h2_css", "createTextNode": "Schulabschluss" },
                        "data": { "createElement": "h3_tag", "classList": "viteText_h3_css", "createTextNode": "12.06.2002" },
                        "institution": { "createElement": "h3_tag", "classList": "viteText_h3_css", "createTextNode": "Graf-Wilhelm-Schule, in Bückeburg" },
                        "description": {
                            "parentObject": {
                                "createElement": "p_tag",
                                "classList": "vita_para_css",
                            },
                            "childObject": {
                                "createElement": "span_tag",
                                "classList": "vitaText_css",
                            },
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
        },
        {
            "side": "rightSide",
            "childContent": {
                "createElement": "div_tag",
                "classList": "vitaBoxLeft_css",
                "textContent": [
                    {
                        "title": { "createElement": "h2_tag", "classList": "viteText_h2_css", "createTextNode": "Einjährige Berufsfachschule Fahrzeugtechnik" },
                        "data": { "createElement": "h3_tag", "classList": "viteText_h3_css", "createTextNode": "08/2002 – 07/2003" },
                        "institution": { "createElement": "h3_tag", "classList": "viteText_h3_css", "createTextNode": "Berufsbildende Schulen des Landkreises Schaumburg, Stadthagen" },
                        "description": {
                            "parentObject": {
                                "createElement": "p_tag",
                                "classList": "vita_paraRight_css",
                            },
                            "childObject": {
                                "createElement": "span_tag",
                                "classList": "vitaText_css",
                            },
                            "createTextNode": [
                                "Grundausbildung im Berufsfeld Metall- und Fahrzeugtechnik (Fachpraxis und Fachtheorie)",
                                "Fertigungsverfahren und Werkstoffbearbeitung (Trennen, Ur- und Umformen, Fügen)",
                                "Grundlagen der Maschinen-, Geräte- und Elektrotechnik",
                                "Erfolgreicher Abschluss (anerkannt als erstes Ausbildungsjahr)"
                            ]
                        }
                    }
                ]
            }
        }
    ],

};

function textExtraction(stringObject, spanContent, i) {
    console.log(stringObject, spanContent, i);
    const copy_spanContent = structuredClone(spanContent);

    copy_spanContent.createTextNode = stringObject;
    //console.log(copy_spanContent);
    return copy_spanContent;
};

function extractionDescription(description) {
    console.log(description);
    const { parentObject, childObject, createTextNode } = description;
    console.log(parentObject, childObject, createTextNode);
    if (!Array.isArray(createTextNode)) { return; };
    const arrayList = [];
   
    createTextNode.forEach((createTextNode, index) => arrayList.push(textExtraction(createTextNode, childObject, index)));
    console.log(arrayList);

    parentObject.childItems = arrayList;
    const copyParent = structuredClone(parentObject);
    return copyParent;
};

function extractionVitaChild(key, value, htmlDOM) {
    console.log(key, value, htmlDOM);
    const { title, data, institution, description } = value;
    console.log(title, data, institution, description);

    functionsFactory.objectRendering_function([title], htmlDOM);
    functionsFactory.objectRendering_function([data], htmlDOM);
    functionsFactory.objectRendering_function([institution], htmlDOM);

    const createObject = []
    createObject.push(extractionDescription(description));
    console.log(createObject);
    functionsFactory.objectRendering_function(createObject, htmlDOM);

};

function extractionVitaContent(metaObject, htmlDom) {
    //console.log(metaObject, htmlDom);
    let html_tag = null;
    if (Array.isArray(metaObject)) { metaObject.forEach((metaObject) => extractionVitaContent(metaObject, htmlDom)); return; }
    Object.entries(metaObject).forEach(([keyword, valueCode]) => {

        //console.log(keyword, valueCode);

        switch (keyword) {
            case 'createElement':
                //console.log(keyword, valueCode);
                const htmlKey = functionsFactory.libraryContent(keyword, valueCode);
                html_tag = functionsFactory.assignmentCreateElement(keyword, htmlKey);

                break;
            case 'classList':
                //console.log(keyword, valueCode);
                functionsFactory.assignmentStatementCSS(keyword, valueCode, html_tag);
                break;
            case 'textContent':
                //console.log(keyword, valueCode);
                Object.entries(valueCode).forEach(([textContent_key, textContent_value]) => extractionVitaChild(textContent_key, textContent_value, html_tag));

                break;
            default: break;
        };

    });
    //console.log(html_tag);
    if (!html_tag) { return };
    functionsFactory.dom_parring(htmlDom, html_tag);
};

function vitaEvaluationFunction(vitaObject) {
    //console.error(vitaObject);
    // Ich hatte das gestern geandert weil er immer null zurueck gegeben hat. 
    //Ich habe dann den aufrufpunkt der funktion geaendert und nur die schlusselwoerter vergeben 
    // statt sie vorhher mit den dom zu verknuepfen!
    const sideContent = {
        "leftSide": 'vitaLeftBox',
        "rightSide": 'vitaRightBox',
        "centerLine": 'centerLineVita'
    };
    // dom zuweisung des ziel DOM's
    if (Array.isArray(vitaObject)) {
        console.log('this is a Array');
        vitaObject.forEach((vitaObject) => vitaEvaluationFunction(vitaObject));
        return;
    };

    let setOne = null;
    let childObject = null;
    let evaluationVita = null;
    Object.entries(vitaObject).forEach(([vitaKey, vitaProperty]) => evaluationVita = searchLibraryContent(vitaKey, vitaProperty));
    // evaluationVita scheint das ich die als globale variable angelegt habe 
    if (!Array.isArray(evaluationVita)) { return console.log('this is not a Array'); };
    evaluationVita.forEach((evaluationVita) => {
        //console.log(evaluationVita);
        let { side, childContent } = evaluationVita;
        //console.log(side, childContent);
        setOne = sideContent[side];
        childObject = childContent;

        const domContent = document.querySelector(`.${setOne}`);
        extractionVitaContent(childObject, domContent);
    });



    //console.log(domContent, childObject);

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