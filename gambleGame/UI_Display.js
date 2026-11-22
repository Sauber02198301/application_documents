

const UI_DISPLAY_area = {

    displayActive: false,

    UI_controlDisplay(metaObject, objectName) {

        const { UI_control, active, children } = metaObject;

        if (!libraryUI[objectName][UI_control]) {
            libraryUI[objectName][UI_control] = active;
            // ist dies true entweder gleich ein object zum auswerten mitgeben oder spater ueberpruefen ob der displayDom active ist.
            if (!children) {
                console.error('error_404');
            } else {
                const checkLibrary = libraryUI[children] || null;
                if (!checkLibrary) { return; };
                const createNewArray = structuredClone(libraryUI[children]);
                return createNewArray
            }
        } else {
            libraryUI[objectName][UI_control] = false;
            //hier muss ich den dom loeschen lassen. Wenn ein neues Object dafuer geladen werden soll wieder an die render function senden.
        };
        console.log(UI_control, active, libraryUI[objectName][UI_control], libraryUI[children], htmlDOM);


    },

};

const creatorTextArea = {

    copyCounterObject: null,
    objectCopy: null,

    checkLibraryFunction(object4Search) {
        console.log(object4Search);
        object4Search.introText = libraryUI[object4Search.introText];
        console.log(object4Search);
    },
    
    controlIntroArea(content) {
        console.log(content);
        if (!content) { return};
        this.checkLibraryFunction(content);
        if (this.objectCopy === null) { this.objectCopy = structuredClone(content) }

        const { introText, indexActive, counterObject, displayID } = this.objectCopy;
        console.log(introText);

        if (!indexActive) {
            this.copyCounterObject = null;
        } else {
            this.copyCounterObject = structuredClone(counterObject);
            console.log(this.copyCounterObject, introText.length);
            this.copyCounterObject.intro_length = introText.length;
            this.copyCounterObject.displayIDCopy = displayID;
            this.counterFunction();

        };
    },

    counterFunction() {
        console.log(this.copyCounterObject.t_Index);
        const { displayHeader, displayArticle, display_dotBox } = this.copyCounterObject.displayIDCopy;
        const { headerContent: headerElement, textArea } = this.objectCopy.introText[this.copyCounterObject.t_Index];
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
        let dotBtn = document.querySelectorAll('.dotBtn')[this.copyCounterObject.t_Index];
        console.log(dotBtn);    
        if (!this.dotBtnActive) { 
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
        console.log(classList, addClassList, textArea);
        if (this.copyCounterObject.articleTag === null) {
            this.copyCounterObject.articleTag = document.querySelector(`#${displayArticle}`);
        }

        const pTag = {
            "createElement": "p",
            "classList": classList,
            "addClassList": addClassList,
            "createText": null,
        };

        if (this.copyCounterObject.articleTag.innerHTML.trim() !== '') { this.copyCounterObject.articleTag.innerHTML = ''; }

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
            console.log('this htmlTag is empty');
            this.copyCounterObject.headerDisplay.innerText = headerText;
        } else {
            console.log('this htmlTag is full');
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
            console.log(i);
            dot_btn.id_code = String(i);
            const copyDot = structuredClone(dot_btn);
            control_UI_engine.renderingEngine_UI([copyDot], this.copyCounterObject.dotTag);
        };
        this.dotActiveFunction();
    },

};

const libraryUI = {
    "introContent": introContent,
    "introChild_data": introChild_data,
    "UI_DISPLAY_area": UI_DISPLAY_area,
    "creatorTextArea": creatorTextArea,
};

