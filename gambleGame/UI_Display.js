

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

    t_Index: 0,
    intro_length: null,
    objectCopy: null,
    headerDisplay: null,
    articleTag: null,


    controlIntroArea(content) {
        console.log(content);
        this.objectCopy = structuredClone(content);


        const { introText } = this.objectCopy;
        console.log(this.intro_length);
        this.intro_length = introText.length;
        console.log(this.intro_length);


        console.log(introText[this.t_Index]);
        const { headerContent, textArea } = introText[this.t_Index];
        console.log(headerContent, textArea);

        this.headerTextContent(headerContent);
        this.textAreaCreator(textArea);

    },

    textAreaCreator(contentArea) {
        console.log(contentArea);

        const { displayID, textArea, classList, addClassList } = contentArea;
        console.log(displayID, classList, addClassList, textArea);
        this.articleTag = document.querySelector(`#${displayID}`);

        const pTag = {
            "createElement": "p",
            "classList": classList,
            "addClassList": addClassList,
            "createText": null,
        };
        if (this.articleTag.innerHTML.trim() === '') { this.articleTag.innerHTML = ''; }
        textArea.forEach((textArea, i) => {

            const copy_p_tag = structuredClone(pTag);
            copy_p_tag.createText = textArea;
            control_UI_engine.renderingEngine_UI([copy_p_tag], this.articleTag);


        });
    },

    headerTextContent(contentHeader) {
        console.log(contentHeader);

        const { displayID, headerText } = contentHeader;
        console.log(displayID, headerText);
        this.headerDisplay = document.getElementById(displayID);
        console.log(this.headerDisplay);
        if (!this.headerDisplay.innerText.trim() !== '') {
            console.log('this htmlTag is empty');
            this.headerDisplay.innerText = headerText;
        } else {
            console.log('this htmlTag is full');
            this.headerDisplay.innerText = '';
            this.headerDisplay.innerText = headerText;
        };

    },

};

const libraryUI = {
    "introContent": introContent,
    "UI_DISPLAY_area": UI_DISPLAY_area,
    "creatorTextArea": creatorTextArea,
};

