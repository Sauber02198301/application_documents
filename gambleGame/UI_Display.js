
const UI_DISPLAY_area = {

    displayActive: false,
    displayMain: null,
    displayMainDom: null,

    displayContentActive: {
        introSideActive: false,
        pokerGameActive: false,
        testOne: false,
        testTwo: false
    },

    checkBooleanFunction(keyNameBoolean, valueBoolean) {
        console.log(keyNameBoolean, valueBoolean);
        console.log(this.displayContentActive);

        Object.entries(this.displayContentActive).forEach(([propertyName, propertyValue]) => {
            //console.log(propertyName, propertyValue);
            if (propertyName !== keyNameBoolean) {
                console.log(propertyName, keyNameBoolean);
                if (propertyValue === valueBoolean) {
                    this.displayContentActive[propertyName] = false;
                    this.deleteFunction()
                };
            } else {
                if (propertyValue !== valueBoolean) {
                    console.log(propertyValue, valueBoolean);
                    this.displayContentActive[keyNameBoolean] = valueBoolean;
                };
            };

        });
        console.log(this.displayContentActive);

    },

    UI_controlDisplay(metaObject, objectName) {

        const { UI_control, active, children } = metaObject;
        if (typeof UI_DISPLAY_area[UI_control] !== 'boolean') { return }
        if (UI_DISPLAY_area[UI_control] !== active) {
            UI_DISPLAY_area[UI_control] = active;
            if (!this.displayMainDom) {
                this.displayMainDom = objectName;
            };
        } else {
            UI_DISPLAY_area[UI_control] = active;
            if (this.displayMainDom) { this.displayMainDom = null; }
        };
    },

    deleteFunction() {
        console.log('hey');
        if (!this.displayMainDom) { return };

        if (this.displayMainDom.innerHTML.trim() !== '') {
            console.log('container ist voll');
            this.displayMainDom.innerHTML = '';
        };
    },

    initialisierungsFunction(keyCode, valueCode) {

        Object.entries(this.displayContentActive).forEach(([contentKey, contentValue]) => {
            console.log(contentKey, contentValue);
            if (contentKey !== keyCode) {
                if (contentValue === valueCode) {
                    this.displayContentActive[contentKey] = false;
                    this.deleteFunction(this.displayMain);
                };
            } else {
                if (!contentValue && valueCode) {
                    this.displayContentActive[keyCode] = valueCode;
                };
            };
            console.log(this.displayContentActive);

        });
    },

    UI_toReadout_function(metaObject, content) {

        if (!Array.isArray(metaObject) && typeof metaObject !== 'object') { return; };
        console.log(metaObject, content);
        const { UI_control, active, id_code } = metaObject;
        console.log(UI_control, active, id_code);
        this.checkBooleanFunction(UI_control, active);
        if (this.displayContentActive[UI_control] !== active) { console.error('this_is_not_equal'); };

        const dataObject = mainData[id_code] || null;
        if (dataObject === null || !parentBody.contains(this.displayMainDom)) { return };
        console.log(dataObject, parentBody.contains(this.displayMainDom));
        control_UI_engine.controlEngine(dataObject, this.displayMainDom);

    },

    btnInputEvaluation(code) {
        console.log(code);
        if (!this.displayMainDom || !code) { return };
        console.log(code, this.displayMainDom);
        control_UI_engine.controlEngine(code, this.displayMainDom);

    }

};

const creatorTextArea = {

    copyCounterObject: null,
    objectCopy: null,


    controlIntroArea(content, booleanObject) {
        console.log(content, booleanObject);
        if (!content) { return };

        if (this.objectCopy === null) { this.objectCopy = structuredClone(content) }
        const { id_code, displayID, indexActive, counterObject } = this.objectCopy;
        console.log(id_code, displayID, indexActive, counterObject);
        const textDocument = mainData[id_code] || null;
        console.log(textDocument);
        if (!indexActive) {
            this.copyCounterObject = null;
        } else {
            this.copyCounterObject = structuredClone(counterObject);
            this.copyCounterObject.articleCopy = structuredClone(textDocument);
            this.copyCounterObject.intro_length = textDocument.length;
            this.copyCounterObject.displayIDCopy = displayID;
            this.counterFunction();

        };

    },

    counterFunction() {
        if (!this.copyCounterObject.displayIDCopy) { return };
        const { displayHeader, displayArticle, display_dotBox } = this.copyCounterObject.displayIDCopy;

        const { headerContent: headerElement, textArea } = this.copyCounterObject.articleCopy[this.copyCounterObject.t_Index];
        this.copyCounterObject.contentText = structuredClone(textArea);
        this.copyCounterObject.headerContent = structuredClone(headerElement);

        this.headerTextContent(displayHeader);
        this.textAreaCreator(displayArticle);
        if (!this.copyCounterObject.dotActive) {
            this.copyCounterObject.dotActive = true;
            this.dotCreatorFunction(display_dotBox);
        } else {
            this.dotActiveFunction();
        };
    },



    dotActiveFunction() {
        const dotBtn = document.querySelectorAll('.dotBtn')[this.copyCounterObject.t_Index];
        if (!this.copyCounterObject.dotBtnActive) {
            dotBtn.classList.add('dotBtnActive');
            this.copyCounterObject.dotBtnActive = dotBtn;
        } else {
            this.copyCounterObject.dotBtnActive.classList.remove('dotBtnActive');
            dotBtn.classList.add('dotBtnActive');
            this.copyCounterObject.dotBtnActive = dotBtn;
        };
    },

    textAreaCreator(displayArticle) {

        const { textArea, classList, addClassList } = this.copyCounterObject.contentText;

        if (this.copyCounterObject.articleTag === null) {
            this.copyCounterObject.articleTag = document.querySelector(`#${displayArticle}`);
        };

        const pTag = {
            "createElement": "p",
            "classList": classList,
            "addClassList": addClassList,
            "createText": null,
        };

        if (this.copyCounterObject.articleTag.innerHTML.trim() !== '') { this.copyCounterObject.articleTag.innerHTML = ''; };

        textArea.forEach((textArea, i) => {
            const copy_p_tag = structuredClone(pTag);
            copy_p_tag.createText = textArea;
            control_UI_engine.renderingEngine_UI([copy_p_tag], this.copyCounterObject.articleTag);
        });
    },

    headerTextContent(displayHeader) {

        const { headerText } = this.copyCounterObject.headerContent;

        if (this.copyCounterObject.headerDisplay === null) { this.copyCounterObject.headerDisplay = document.getElementById(displayHeader); }

        if (!this.copyCounterObject.headerDisplay.innerText.trim() !== '') {
            this.copyCounterObject.headerDisplay.innerText = headerText;
        } else {
            this.copyCounterObject.headerDisplay.innerText = '';
            this.copyCounterObject.headerDisplay.innerText = headerText;
        };
    },

    dotCreatorFunction(display_dotBox) {

        if (this.copyCounterObject.dotTag === null) {
            this.copyCounterObject.dotTag = document.querySelector(`.${display_dotBox}`);
        }

        const dot_btn = {
            "createElement": "button",
            "classList": ["flex_row", "btn", "btnSecondary", "btnSecondStyle"],
            "addClassList": ["dotBtn"],
            "id_code": null
        };

        for (let i = 0; i < this.copyCounterObject.intro_length; ++i) {
            dot_btn.id_code = String(i);
            const copyDot = structuredClone(dot_btn);
            control_UI_engine.renderingEngine_UI([copyDot], this.copyCounterObject.dotTag);
        };
        this.dotActiveFunction();
    },

};

const pokerGameFuction = {

    booleanRoll: null,


};

const pokerUI_function = {

    rollSettFunction(rollSet) {
        console.log(rollSet);
        const {srcObject: srcSet = null, id_code, alt_text, classList, addClassList} = rollSet;
        console.log(srcSet, id_code, alt_text, classList, addClassList);

        if (!srcSet) {return};

        const createObject = {
            "createElement": "img",
            "classList": classList,
            "addClassList": addClassList,
            "alt_text": alt_text,
            "id_code": id_code,
            "srcObject": srcSet
        };
        console.log(createObject);
        return structuredClone(createObject);
    },

    checkInputFunction(objectProperties) {
        console.log(objectProperties);
        const { roll = null, libraryName, functionPokerEvent, rollActiveBoolean = null } = objectProperties;
        console.log(roll, libraryName, functionPokerEvent, rollActiveBoolean);

        const cardArray = mainData[libraryName][roll] || null;
        if (!cardArray) { return; };
        console.log(cardArray);

        const createNewRollArray = [];

        console.log(typeof this[functionPokerEvent] === 'function');
        if (typeof this[functionPokerEvent] !== 'function') { return };

        cardArray.forEach((cardArray) => createNewRollArray.push(this[functionPokerEvent](cardArray)));
        console.log(createNewRollArray);

        return structuredClone(createNewRollArray.filter(Boolean));
    }
};


