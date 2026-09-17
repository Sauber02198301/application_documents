function btnUI_clickFunction(clickEvent, dom_className) {
    console.log(clickEvent, dom_className);
    const domContainer = document.querySelector(`.${dom_className}`);

    console.log(domContainer.classList.contains(clickEvent));
    if (!domContainer.classList.contains(clickEvent)) {

        domContainer.classList.add(clickEvent);
        //domContainer.style.opacity = 1;

    } else {

        domContainer.classList.remove(clickEvent);
        //domContainer.style.opacity = 0;

    };

}

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
    console.log(keyword, valueCode, activeBoolean);

    if (!libraryBook[keyword] && !libraryBook[keyword][valueCode]) { return console.error('booleanContent_not_found'); };
    console.log(libraryBook[keyword][valueCode]);
    if (typeof libraryBook[keyword][valueCode] !== 'boolean') { return console.error('this_is_no_a_boolean'); };
    if (!libraryBook[keyword][valueCode] && activeBoolean) {
        libraryBook[keyword][valueCode] = activeBoolean;
    } else if (libraryBook[keyword][valueCode] && !activeBoolean) {
        libraryBook[keyword][valueCode] = activeBoolean;
    };
    console.log(libraryBook[keyword][valueCode]);
    return libraryBook[keyword][valueCode];
};

function searchFunction(keyword, funcKey, oblectCont, domArea) {
    console.log(keyword, funcKey, oblectCont, domArea);
    if (!libraryBook[keyword] && !libraryBook[keyword][funcKey]) { return console.error('this_is_not_found'); };
    if (typeof oblectCont === 'object' && Array.isArray(oblectCont)) {
        console.log('this_is_array');
        if (typeof libraryBook[keyword][funcKey] !== 'function') { return console.error('function_is_not_locate') };
        libraryBook[keyword][funcKey](oblectCont, domArea);
        return;
    } else {
        console.log('this_isObject');
        libraryBook[keyword][funcKey]([oblectCont], domArea);
        return
    };
};


const controlUnit = {

    currentSlideEvent: null,
    introIntervall: null,
    intrevalIndex: 0,

    currentSlideEventFunction(currentKey, currentValue) {
        console.error(currentKey, currentValue);
        if (currentValue === 'mainText_intro') {
            this.currentSlideEvent = functionsFactory.libraryContent(currentKey, currentValue);
            if (!this.currentSlideEvent) {

            } else {

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
        functionsFactory.functionsCheck('textslideContent_function', this.currentSlideEvent[this.intrevalIndex]);

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

    changeContentArea(objectElement, html_tag) {
        console.error(objectElement, html_tag);


        Object.entries(objectElement).forEach(([keyword, valueCode]) => this.currentSlideEventFunction(keyword, valueCode));
        if (!this.introIntervall) {
            console.error('curentSlideEvent is null');
            return;
        } else {
            console.error('currentSlideEvent have data');
            if (this.introIntervall) { clearInterval(this.introIntervall) };
            this.introIntervallFunction(html_tag);
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
    "mainUiBooleanSetting": mainUiBoolaenSetting,
    "controlUnit": controlUnit,
};


UI_checkControl(mainContent, 'body_section', true);





