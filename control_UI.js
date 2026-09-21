function btnUI_clickFunction(clickEvent, dom_className) {
    console.log(clickEvent, dom_className);
    /*
        Legende: 
        btnUI_clickFunction steuert das ein und ausblenden des Containers,

        clickEvent = name des childObjects,
        dom_className = parentObject
    */
    const domContainer = document.querySelector(`.${dom_className}`);

    if (!domContainer.classList.contains(clickEvent)) {
        // clickEvent in die classList hinzufuegen mit "add" 
        domContainer.classList.add(clickEvent);
        domContainer.style.zIndex = 1;

    } else {
        // und hier mit remove wieder loeschen;  eng: The "clickEvent" with the keyword "remove" delete of the classList 
        domContainer.classList.remove(clickEvent);
        domContainer.style.zIndex = 0;
    };
    console.log(domContainer.classList.contains(clickEvent));
};

function UI_checkControl(contentObject, dom_name, activeBoolean) {
    console.log(contentObject, dom_name, activeBoolean);
    if (!document.querySelector(`.${dom_name}`)) { return console.error('the_domContent can\'t not assain') };
    const domBody = document.querySelector(`.${dom_name}`);
    if (typeof contentObject === 'object' && Array.isArray(contentObject)) {
        contentObject.forEach((contentObject) => UI_checkControl(contentObject, dom_name));
        return;
    };
    let booleanCode = null;
    Object.entries(contentObject).forEach(([keyword, valueContent]) => {
        console.log(keyword, valueContent);
        switch (keyword) {
            case 'toggleEvent':
                console.log(keyword);
                booleanCode = activeBoolean_function(keyword, valueContent, activeBoolean);
                console.log(booleanCode);
                break;
            case 'functionsFactory':
                console.log(keyword, domBody);
                if (!booleanCode) {
                    console.log('termination_the_dom_content');
                } else {
                    console.log(keyword);
                    if (!typeof libraryBook[keyword]) { return console.error('functionsFactory_not_found'); };
                    if (typeof valueContent === 'object' && Array.isArray(valueContent)) {

                    } else {
                        Object.entries(valueContent).forEach(([funcKey, oblectCont]) => searchFunction(keyword, funcKey, oblectCont, domBody))
                    };
                };
                break;
            default: break;
        };
    });
};

function activeBoolean_function(keyword, valueCode, activeBoolean) {
    //console.log(keyword, valueCode, activeBoolean);

    if (!libraryBook[keyword] && !libraryBook[keyword][valueCode]) { return console.error('booleanContent_not_found'); };
    //console.log(libraryBook[keyword][valueCode]);
    if (typeof libraryBook[keyword][valueCode] !== 'boolean') { return console.error('this_is_no_a_boolean'); };
    if (!libraryBook[keyword][valueCode] && activeBoolean) {
        libraryBook[keyword][valueCode] = activeBoolean;
    } else if (libraryBook[keyword][valueCode] && !activeBoolean) {
        libraryBook[keyword][valueCode] = activeBoolean;
    };
    //console.log(libraryBook[keyword][valueCode]);
    return libraryBook[keyword][valueCode];
};

function searchFunction(keyword, funcKey, oblectCont, domArea) {
    //console.log(keyword, funcKey, oblectCont, domArea);
    if (!libraryBook[keyword] && !libraryBook[keyword][funcKey]) { return console.error('this_is_not_found'); };
    if (typeof oblectCont === 'object' && Array.isArray(oblectCont)) {
        //console.log('this_is_array');
        if (typeof libraryBook[keyword][funcKey] !== 'function') { return console.error('function_is_not_locate') };
        libraryBook[keyword][funcKey](oblectCont, domArea);
        return;
    } else {
        //console.log('this_isObject');
        libraryBook[keyword][funcKey]([oblectCont], domArea);
        return
    };
};


const controlUnit = {

    // activeDefault soll immer wieder der active erst wert sein! Wenn man ein Programm schließt / die anwendung deaktiviert
    parentHTML: null,
    // mainContent TextIntro
    activeDefault: {
        "createTextNode": "mainText_intro",
        "parentObject": {
            "createElement": "p_tag",
            "classList": "p_textCont_css"
        }
    },

    lebenslauf: lebenslauf,

    introIntervall: null,

    intervalSetup: {
        currentSlideEvent: null,
        intervalIndex: 0,
        intervalLength: null
    },

    terminationFunction() {

        this.parentHTML.innerHTML = '';

    },

    currentSlideEventFunction(parentHTML, intervalObject, childHTML) {
        //console.log(parentHTML, intervalObject, childHTML);
        /*
            Legende
            functionsName = die aufzurufende function's Name der mit functionsCheck ueberprueft wird,
            objectText = das object mit den auszulesenden Werten zum anzeigen oder verarbeiten.
            html_tag = Das Ziel DOM
        */
        if (!parentHTML.classList.contains('is-hidden')) {
            parentHTML.classList.add('is-hidden');
        };

        parentHTML.addEventListener('transitionend', () => {
            if (parentHTML.innerHTML.trim() !== "") {
                //console.log('parentHTML is to charge');
                this.terminationFunction();

                functionsFactory.textslideContent_function(intervalObject, childHTML, parentHTML);
                functionsFactory.objectRendering_function([childHTML], parentHTML);
            };
            if (parentHTML.classList.contains('is-hidden')) {
                parentHTML.classList.remove('is-hidden');
            };
        }, { once: true });
    },

    intervalFunction_introText(intervalObject, childHTML) {

        let { currentSlideEvent, intervalIndex, intervalLength } = this.intervalSetup;
        intervalLength = intervalObject.length - 1;
        //console.log(intervalObject[intervalIndex]);
        let copyContent = structuredClone(childHTML);
        functionsFactory.textslideContent_function(intervalObject[intervalIndex], copyContent, this.parentHTML);
        //console.log(copyContent);
        functionsFactory.objectRendering_function([copyContent], this.parentHTML);
        //console.error(intervalObject, childHTML, this.parentHTML, currentSlideEvent, intervalIndex, intervalLength);
        this.introIntervall = setInterval(() => {
            if (intervalIndex === intervalLength) {
                intervalIndex = 0;
                copyContent = structuredClone(childHTML);
                //console.error(intervalObject, childHTML, this.parentHTML, currentSlideEvent, intervalIndex, intervalLength);
                this.currentSlideEventFunction(this.parentHTML, intervalObject[intervalIndex], copyContent);
            } else {
                intervalIndex++;

                //console.error(intervalObject[intervalIndex], childHTML, this.parentHTML, currentSlideEvent, intervalIndex, intervalLength);
                copyContent = structuredClone(childHTML)
                this.currentSlideEventFunction(this.parentHTML, intervalObject[intervalIndex], copyContent);

            };

        }, 30000);

    },

    controlInterval(intervalObject) {
        let contentObject = null;
        let childHTML = null;
        if (!intervalObject) { return clearInterval(this.introIntervall); };

        Object.entries(intervalObject).forEach(([keyword, propertyValue]) => {

            switch (keyword) {
                case 'createTextNode':
                    contentObject = functionsFactory.libraryContent(keyword, propertyValue)
                    break;
                case 'parentObject':
                    childHTML = propertyValue;
                    break;
                default: break;
            };

        });
        if (!contentObject && !childHTML) { return };
        this.intervalFunction_introText(contentObject, childHTML);
        //console.error(intervalObject);
    },

    changeContentArea(UI_name, html_tag) {
        /* 
            UI_name = der aufruf Name
            html_tag = der einmalige displayName der wird nie ersetzt. 
        */
        let switchName = null;
        let copyContent = null;
        console.error(UI_name, html_tag);
        if (!UI_name) { switchName = 'activeDefault'; } else { switchName = UI_name };
        if (!this.parentHTML) { this.parentHTML = html_tag };
        if (!controlUnit[switchName]) { return console.error('notFound_404'); }

        copyContent = structuredClone(controlUnit[switchName]);

        switch (switchName) {
            case 'activeDefault':
                console.log(copyContent, this.parentHTML);
                this.controlInterval(copyContent);
                break;
            case 'lebenslauf':
                console.log(switchName);

                if (this.introIntervall) { clearInterval(this.introIntervall) };
                this.terminationFunction();
                console.log(copyContent, this.parentHTML);
                functionsFactory.objectRendering_function(copyContent, this.parentHTML);
                break;
            default: break;
        };

    },



};

const libraryBook = {
    "toggleEvent": toggleEvent,
    "createElement": createElement,
    "classList": classList,
    "anchor": anchor,
    "src": src,
    "alt": alt,
    "href": href,
    "btn_elements": btn_elements,
    "createTextNode": createTextNode,
    "functionsFactory": functionsFactory,
    "mainAreaContent": mainAreaContent,
    "controlUnit": controlUnit,
    "vitaFolder": vitaFolder,
    "vitaContent": vitaContent,
    "vitaEvaluationFunction": vitaEvaluationFunction,
};


UI_checkControl(mainContent, 'body_section', true);



/*

currentSlideEventFunction(currentKey, currentValue) {
        console.error(currentKey, currentValue);
        if (currentValue === 'mainText_intro') {
            this.currentSlideEvent = functionsFactory.libraryContent(currentKey, currentValue);
            if (!this.currentSlideEvent) {
                return;
            } else {
                this.introIntervallFunction()
            };
        }
    },

    animationsFunction(currenObject, htmlTag, functionsName) {
        console.log(currenObject, htmlTag, functionsName);

        htmlTag.classList.add('is-hidden');
        htmlTag.style.opacity = 0;
        htmlTag.addEventListener('transitionend', () => {

            if (htmlTag.innerHTML.trim() !== "") {

                htmlTag.innerHTML = '';
                functionsFactory.functionsCheck(functionsName, currenObject, htmlTag);
                htmlTag.classList.remove('is-hidden');
                htmlTag.style.opacity = 1;

            } else {
                htmlTag.style.opacity = 1;
                functionsFactory.functionsCheck(functionsName, currenObject, htmlTag);
            }

        }, { once: true });
    },

    introIntervallFunction(html_tag) {
        console.error(html_tag);
        const current_length = this.currentSlideEvent.length - 1;
        const parentHTML = html_tag;

        let currentSlide = this.currentSlideEvent[this.intrevalIndex];
        functionsFactory.functionsCheck('textslideContent_function', this.currentSlideEvent[this.intrevalIndex], parentHTML);

        introIntervall = setInterval(() => {

            console.log(this.currentSlideEvent[this.intrevalIndex], current_length, parentHTML);
            if (this.intrevalIndex === current_length) {
                this.intrevalIndex = 0;
                this.animationsFunction(this.currentSlideEvent[this.intrevalIndex], parentHTML, 'textslideContent_function');
            } else {
                this.intrevalIndex++;
                console.log(this.intrevalIndex);

                this.animationsFunction(this.currentSlideEvent[this.intrevalIndex], parentHTML, 'textslideContent_function');
            };


        }, 20000);

    },

*/

