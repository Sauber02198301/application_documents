const functionsFactory = {
    objectRendering_function(propertyKey, domArea) {
        console.log(propertyKey, domArea);


        if (!domArea) { console.error('domArea_is_null_or_undefined'); };
        let html_tag = null;

        propertyKey.forEach((propertyKey) => {
            Object.entries(propertyKey).forEach(([keyword, propertyValue]) => {
                //console.log(keyword, propertyValue);
                switch (keyword) {
                    case 'createElement':
                        console.log(keyword, propertyValue);
                        const htmlName = this.libraryContent(keyword, propertyValue);
                        //console.log(htmlName);
                        html_tag = this.assignmentCreateElement(keyword, htmlName);
                        console.log(html_tag);
                        break;
                    case 'createTextNode':
                        console.log(keyword, propertyValue);
                        this.assignmentCreateTextNode_function(keyword, propertyValue, html_tag);
                    case 'classList':
                        console.log(keyword, propertyValue);
                        this.assignmentStatementCSS(keyword, propertyValue, html_tag);
                        break;
                    case 'src':
                    case 'alt':
                    case 'href':
                        const srcKey = this.libraryContent(keyword, propertyValue);
                        console.log(srcKey);
                        this.assignment_srcElement(keyword, srcKey, html_tag);
                        break;
                    case 'dataset':
                        console.log(keyword, propertyValue);
                        this.assignment_dataset_action(keyword, propertyValue, html_tag);
                        break;
                    case 'childItems':
                        console.log(keyword, propertyValue);
                        this.createChildFunction(propertyValue, html_tag);
                        break;

                    case 'createBtn_function':
                    case 'assignment_paragraph_function':
                        console.log(keyword, propertyValue);
                        this.functionsCheck(keyword, propertyValue, domArea);
                        console.log(html_tag);
                        break;
                    case 'textSpanContent_function':
                    case 'active_automaticSlideShow':
                    case 'hyperlinkContent_function':
                        console.log(keyword, propertyValue);
                        this.functionsCheck(keyword, propertyValue, html_tag);
                        break;
                    default: break;
                };
            });
            this.dom_parring(domArea, html_tag);
        });

    },

    dom_parring(dom_parent, child_dom) {
        console.log(dom_parent, child_dom);
        if (!child_dom) { return console.error('child_dom is null || undefined'); };
        dom_parent.appendChild(child_dom);

    },

    domTerminationFunction(html_tag, callInstruction, instructionValue, toExecuteObject, functionsCall) {
        /*
            Legende:
            html_tag = DOM_Section was entfernt werden soll.
            callInstruction = welches loeschen ausgefuehrt werden soll
            instructionValue = der zu vergebene wert / tauschwert.
            toExecute)bject = das zu bearbeitende object
            functionsCall functions aufruf,

            (.innerHTML ='', bei gezielten terminations benutzt man die Methoden removeChild() diese erwartet die position die entfernt werden soll, 
            genauso gibt dazu diese keyWords "firstChild" || "lastChild", in verbindung mit removeChild() eine starke kombination).
        */




    },

    functionsCheck(functionsName, valueContent, domArea) {
        /* 
            Legende
            fuctionsName = der Funktions Name ,
            valueContent = ObjectContent,
            dom_area = dom_content
        */
        let booleanValue = null;
        console.log(functionsName, valueContent, domArea);
        if (typeof functionsFactory[functionsName] !== 'function') {
            return;
        } else {
            functionsFactory[functionsName](valueContent, domArea);
        };

    },

    libraryContent(keyword, propertyValue) {
        /* 
            Legende: 
            keyword = PropertyKey
            propertyValue = Wert;
            foundContent = Der aus der Kombination entstandende Wert
        */
        console.log(keyword, propertyValue);
        if (!libraryBook[keyword] && !libraryBook[keyword][propertyValue]) { return console.error('htmlTag_is_not_found'); };
        const foundContent = libraryBook[keyword][propertyValue];
        console.log(foundContent);
        return foundContent;
    },

    assignmentObjectContent(finishObject, htmlObject) {
        /* 
            Legende 
            finischObject = ist der neu erstelte container,
            htmlObject = die html_eigenschaftswerte 
        */
        console.log(finishObject, htmlObject);
        if (typeof htmlObject === 'object' && Array.isArray(htmlObject)) { htmlObject.forEach((htmlObject) => this.assignmentObjectContent(finishObject, htmlObject)); return };

        Object.entries(htmlObject).forEach(([keyword, valueContent]) => {
            console.log(keyword, valueContent);
            finishObject[keyword] = valueContent;
        });
        return structuredClone(finishObject);
    },

    assignmentCreateElement(assignmentKey, assignmentContent) {
        console.log(assignmentKey, assignmentContent);
        if (!assignmentContent) { return console.error('assignmentContent is null || undefined'); };
        /*
            Legende
            assignmentKey = schlüsselwort,
            assignmentContent = contentValue
        */
        const htmlCont = document[assignmentKey](assignmentContent);
        return htmlCont;
    },

    assignment_srcElement(assignmentKey, assignmentValue, html_tag) {
        console.log(assignmentKey, assignmentValue, html_tag);
        if (!assignmentValue) { return console.error('assignment_srcValue is null || undefined'); };
        /*
            Legende
            assignmentKey = keyword zuweisung,
            assignmentValue = imgValue,
            html_tag = dom_content
        */
        html_tag[assignmentKey] = assignmentValue;

    },

    assignment_altElement(assignment_altKey, assignment_altValue, html_tag) {
        console.log(assignment_altKey, assignment_altValue, html_tag);
        if (!assignment_altValue) { return console.error('assignment_altValue is undefined || null'); };
        /*
            Legende
            assignment_altKey = zuweisungswort
            assignment_altValue = altValue
            html_tag = dom_content
        */
        html_tag[assignment_altKey] = assignment_altValue;
    },

    assignment_dataset_action(callToAction, actionObject, html_tag) {
        console.log(callToAction, actionObject, html_tag);
        if (!actionObject || !callToAction || !html_tag) { return console.error('content is null or undefined'); };

        if (typeof actionObject === 'object' && Array.isArray(actionObject)) { return console.error('this is array'); };
        Object.entries(actionObject).forEach(([keywordAction, valueAction]) => {
            console.log(keywordAction, valueAction);
            if (!keywordAction || !valueAction) { return console.log('skip the function'); };

            html_tag[callToAction][keywordAction] = valueAction;

        });
    },

    assignment_paragraph_function(assignmentObject, domParent) {
        /*
            Legende
            assignmentObject = Object,
            domParent = der Ziel DOM
        */
        console.log(assignmentObject, domParent);
        if (typeof assignmentObject === 'object' && Array.isArray(assignmentObject)) { return console.error('this is a Array'); };

        Object.entries(assignmentObject).forEach(([propertyKey, propertyValue]) => {
            console.log(propertyKey, propertyValue);
        });

    },

    assignmentCreateTextNode_function(assignKey, assignValue, html_tag) {
        console.log(assignKey, assignValue, html_tag);
        /* 
            Legende
            assignKey = schluesselwort,
            assignValue = zuweisungstext,
            html_tag = dom_content
        */
        const node = document[assignKey](assignValue);
        html_tag.appendChild(node);
        return;
    },

    assignmentStatementCSS(attributeClass, classValue, html_tag) {
        console.log(attributeClass, classValue, html_tag);
        /*
            Legende
            attributeClass = classList,
            classValue = objectCode,
            html_tag = Das zu bearbeitende Object
        */
        const classObject = this.libraryContent(attributeClass, classValue);
        console.log(classObject);
        if (!classObject) { return console.error('classObject is null || undefind'); };
        if (typeof classObject === 'object' && !Array.isArray(classObject)) { console.error('this is a Object or null || undefind') };
        html_tag[attributeClass] = '';
        classObject.forEach((classObject) => {
            Object.entries(classObject).forEach(([classKey, className]) => {
                console.log(classKey, className);

                if (typeof className === 'string' && className.length <= 0) { return; };
                html_tag[attributeClass][classKey](className);
            });
        });
    },

    createChildFunction(childContend, html_tag) {
        /*
            legende 
            childContend = das zu bearbeitende Object
            html_tag = der empfänger dom

        */
        console.log(childContend, html_tag);
        if (typeof childContend === 'object' && !Array.isArray(childContend)) {
            this.objectRendering_function([childContend], html_tag);
            return console.error('this is a Object');
        };

        childContend.forEach((childContend) => {
            console.log(childContend);
            let copyChild = !Array.isArray(childContend) ? [childContend] : childContend;
            console.log(copyChild);
            this.objectRendering_function(copyChild, html_tag)
        });

    },

    createBtn_function(Object_contend, dom_area) {
        /*
            legende
            Object_contend = das zu bearbeitende Object
            html_tag = ziel Dom
        */
        console.log(Object_contend, dom_area);
        if (typeof Object_contend === 'object' && !Array.isArray(Object_contend)) { return console.error('this is a Object not a Array'); };
        Object_contend.forEach((Object_contend) => {
            console.log(Object_contend);
            const btnObject = {
                createElement: 'button_tag',
                ...Object_contend
            };

            const copyContent = !Array.isArray(btnObject) ? [btnObject] : btnObject;

            console.log(btnObject);
            this.objectRendering_function(copyContent, dom_area);
        });

    },

    textSpanContent_function(objectContend, html_tag) {
        console.log(objectContend, html_tag);
        /*
            Legende
            objectContend = das auszulesende Object,
            html_tag = dom_contend,
        */
        let textContend = null;
        const arrayText = [];
        const newTextObject = {
            createElement: 'span_tag',
        };
        Object.entries(objectContend).forEach(([textKey, textValue]) => textContend = this.libraryContent(textKey, textValue));
        console.log(textContend);
        if (typeof textContend === 'object' && !Array.isArray(textContend)) {

            Object.entries(textContend).forEach(([textKey, valueKey]) => {
                console.log(textKey, valueKey);
                switch (textKey) {
                    case 'classList':
                        console.log(textKey, valueKey, newTextObject);
                        newTextObject[textKey] = valueKey;
                        break;
                    case 'createTextNode':
                        console.log(textKey, valueKey, newTextObject);
                        newTextObject[textKey] = valueKey;
                        arrayText.push(structuredClone(newTextObject));
                        break;
                    default: break;
                };
            });
            this.objectRendering_function(arrayText, html_tag);
            return;
        };

        textContend.forEach((textContend) => {
            console.log(textContend);
            const newTextObject = {
                createElement: 'span_tag',
                ...textContend
            };
            arrayText.push(structuredClone(newTextObject));

        });
        console.log(arrayText);
        this.objectRendering_function(arrayText, html_tag);
    },

    textslideContent_function(objectContend, html_tag) {
        console.log(objectContend, html_tag);

        const arrayList = [];
        let cTN = {
            createElement: 'span_tag',
        };
        if (typeof objectContend === 'object' && Array.isArray(objectContend)) { return console.error('this is Array'); };
        Object.entries(objectContend).forEach(([textKey, valueKey]) => {
            console.log(textKey, valueKey);
            switch (textKey) {
                case 'classList':
                    cTN[textKey] = valueKey
                    break;
                case 'createTextNode':
                    if (!Array.isArray) { return; };
                    valueKey.forEach((valueKey) => {
                        cTN[textKey] = valueKey
                        arrayList.push(structuredClone(cTN));
                    });
                    break;
                default: break;
            };
        });
        console.log(arrayList);
        this.objectRendering_function(arrayList, html_tag);
    },

    hyperlinkContent_function(anchorObject, html_tag) {
        /*
            Legende 
            anchorObject = das zu entpackende hyperlinkObject
            html_tag = das Ziel DOM
        */
        console.log(anchorObject, html_tag, 'hyperlink');
        const anchorArrayList = [];
        const anchorMetaData = {
            "createElement": "a_tag",

        };
        if (typeof anchorObject === 'object' && Array.isArray(anchorObject)) {
            console.error('this is a array');
            anchorObject.forEach((anchorObject) => this.hyperlinkContent_function(anchorObject, html_tag));
            return;
        };

        Object.entries(anchorObject).forEach(([anchorKey, anchorValue]) => {
            console.log(anchorKey, anchorValue);
            const anchorTextContent = this.libraryContent(anchorKey, anchorValue);
            console.log(anchorTextContent);
            if (!Array.isArray(anchorTextContent)) { return console.error('this is array'); };
            anchorTextContent.forEach((anchorTextContent) => {
                console.log(anchorTextContent);
                anchorArrayList.push(this.assignmentObjectContent(anchorMetaData, anchorTextContent));
            });
        });
        console.log(anchorArrayList);
        this.objectRendering_function(anchorArrayList, html_tag);
    },

    animation_fadeOutFunction(functionsName, objectText, html_tag) {
        console.log(functionsName, objectText, html_tag);
        /*
            Legende

            functionsName = die aufzurufende function's Name der mit functionsCheck ueberprueft wird,
            objectText = das object mit den auszulesenden Werten zum anzeigen oder verarbeiten.
            html_tag = Das Ziel DOM

        */
        html_tag.classList.add('is-hidden');
        html_tag.style.opacity = 0;
        html_tag.addEventListener('transitionend', (/* eventuel der auszufuehrende functions aufruf */) => {
            if (html_tag.innerHTML.trim() !== '') {
                //opacity & transition ausblenden lassen  und dann leeren 

                console.log('dom ist befuelt');
                html_tag.innerHTML = '';
                this.functionsCheck(functionsName, objectText, html_tag);
                html_tag.classList.remove('is-hidden');
                html_tag.style.opacity = 1;
            } else {
                // wenn leer im dom_setzen und dann wieder mit opacity und transition einblenden lassen

                console.log('dom ist leer');
                this.functionsCheck(functionsName, objectText, html_tag);
            };
        }, { once: true });

    },

    mainActiveUI(fillCallUp, activeBoolean, propertyKey, boolenValue) {
        console.log(fillCallUp, activeBoolean, propertyKey, boolenValue);
        /* 
            Legende 
            fillCallUp = abruf Name,
            activeBoolean = der Object Wert,
            propertyKey = abrufname fuer fillCallUp,
            booleanValue = der aenderungswert des Boolean's
        */

        if (!activeBoolean && boolenValue) {
            console.log('this is active');
            libraryBook[fillCallUp][propertyKey] = boolenValue
            console.log(libraryBook[fillCallUp][propertyKey]);
        } else if (activeBoolean && !boolenValue) {
            console.log('this is clear');
            libraryBook[fillCallUp][propertyKey] = boolenValue;
            console.log(libraryBook[fillCallUp][propertyKey]);
        };
        return boolenValue;
    },

    active_automaticSlideShow(content, dom_content) {
        console.log(content, dom_content, "activeAutomatic");

        /*
            legende 
            content = das zu bearbeitende Object,
            dom_content = Ziel_DOM
        */

        if (!content || !dom_content) { return console.error('undefined or null'); };
        if (typeof content === 'object' && Array.isArray(content)) { return console.error('this is a Array'); };

        Object.entries(content).forEach(([contendKey, propertyValue]) => {
            console.log(contendKey, propertyValue);
            /*
                Legende arrowFunction
                contendKey = propertyKey's
                propertyValue = the extraction Value

                the Switch extraition the only values and assignment to the variablen => active, functionsName, childContent
            */
            switch (contendKey) {

                case 'textslideContent_function':
                    console.log(contendKey, propertyValue);
                    slideShow_content.functionsName = contendKey;
                    let extractionText = null;
                    Object.entries(propertyValue).forEach(([libraryKey, libraryValue]) => extractionText = this.libraryContent(libraryKey, libraryValue));
                    console.log(extractionText);
                    slideShow_content.objectContent = extractionText;
                    break;
                case 'classList':
                    console.log(contendKey, propertyValue);
                    slideShow_content[contendKey] = propertyValue;
                    break;
                case 'slideShow_intro':
                    if (slideShow_content[contendKey] !== propertyValue) {
                        console.log(slideShow_content[contendKey]);
                        slideShow_content[contendKey] = propertyValue;
                        this.activeControlSlideShow(slideShow_content, dom_content);
                        return;
                    };
                    break;
                default: break;
            };
        });
    },

    activeControlSlideShow(contentObject, DOM_content) {
        console.log(contentObject, DOM_content);
        /*
            Legende 
            contentObject = das auszulesende Object,
            DOM_contend = Ziel DOM

            Notiz es kann sein wenn ich die function einmal durch den Boolean beende das hier eventuell ein Fehler 
            aufkommen kann also muss mann das hier im spaeteren verlauf sehen. Wenn ich den Text content anhalten werde weil ich den ganzen inhalt terminieren muss. 
            Wegen des aufrufen eines anderem Programm deswegen im hinterkopf behalten den DOM display_sectionCenter alles separat halten und eine eigen boolean function hier fuer erstellen!
            Das ist der Hauptanzeige Container fuer die Programme
        
        */

        if (typeof contentObject === 'object' && Array.isArray(contentObject)) { return console.error('this is a Array'); };
        const { slideShow_intro, intervalReset, objectContent, functionsName, classList } = contentObject;
        console.log(slideShow_intro, intervalReset, objectContent, functionsName, classList);
        if (!slideShow_intro) {

        } else {
            if (intervalReset) { clearInterval(intervalReset) };
            this.slideShowInterval(intervalReset, functionsName, objectContent, DOM_content);
        };

    },

    slideShowInterval(active, functionsName, childContent, dom_content) {
        console.log(active, functionsName, childContent, dom_content);
        /*
            Legende SetInterval 
            active = boolean wert zum aktivieren, 
            functionsName = der functions Aufruf Name "string",
            childContent = kinder Object,
            dom_content = Der Ziel DOM_Bereich
        */
        const copySlideInterval = structuredClone(slideShowImportValue);
        let { index, counter } = copySlideInterval;
        index = childContent.length - 1;
        console.log(index);
        let = childContentCounter = childContent[0];
        this.functionsCheck(functionsName, childContentCounter, dom_content);
        console.log(childContentCounter)
        active = setInterval(() => {

            console.log(index, counter);
            console.log(active, functionsName, childContent, dom_content);
            if (index === counter) {
                counter = 0;
                childContent[counter];
                console.log(childContent[counter]);
                console.log(dom_content);
                this.animation_fadeOutFunction(functionsName, childContent[counter], dom_content);
            } else {
                console.log(childContent[counter]);
                counter++;
                console.log(dom_content);
                this.animation_fadeOutFunction(functionsName, childContent[counter], dom_content);
                console.log(counter);
                console.log(childContent[counter]);
            };
        }, 40000);

    },

};