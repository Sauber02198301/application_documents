const booleanCheckFunction = {

    checkIsArray(checkObject) {
        //console.log(checkObject);
        let check = null;
        if (!Array.isArray(checkObject)) {
            check = false;
        } else {
            check = true;
        };
        return check;
    },
};

const mainViev = {

    mainViewActive: null,
    mainViewContainer: document.querySelector('.mainView_section'),

    mainViewActiveUI(introText) {
        //console.log(introText);
        if (this.mainViewActive) {
            this.mainViewContainer.innerHTML = '';
            this.mainViewActive = null;

        } else {
            this.mainViewActive = introText;
            functionsFactory.renderDOM(introText, this.mainViewContainer);
        };

    },


};

const functionsFactory = {

    imgCreaterSection(gallaryData, parentDOM) {
        console.log(gallaryData, parentDOM);
        for (const gallaryX of gallaryData) {
            const { src: srcImg = null, imgClassList = [], alt: altAttribute = '', classList_div = [], classListText_h = '', title = '', classListTextSpan = [], desc = '' } = gallaryX;
            console.log(srcImg, imgClassList, altAttribute, classList_div, classListText_h, title, desc);
            const imgHtml = this.createHTMLDocument('img');
            //console.log(imgHtml);
            this.addingCSS(imgClassList, imgHtml);
            this.injectSrc(srcImg, altAttribute, imgHtml);
            //console.log(imgHtml);
            this.injectHTML(imgHtml, parentDOM);

            const html_div = this.createHTMLDocument('div');
            this.addingCSS(classList_div, html_div);
            

            const h2_html = this.createHTMLDocument('h2');
            this.addingCSS(classListText_h, h2_html);
            this.injectcreateText(title, h2_html);
            this.injectHTML(h2_html, html_div);

            const html_span = this.createHTMLDocument('span');
            this.addingCSS(classListTextSpan, html_span);
            this.injectcreateText(desc, html_span);
            this.injectHTML(html_span, html_div);

            this.injectHTML(html_div, parentDOM);
        };

    },

    createSpanInjectText(createText, classSet, parentDOM) {
        console.log(createText, classSet, parentDOM);

        for (const textElement of createText) {
            //console.log(textElement);
            const htmlTag = this.createHTMLDocument('span');
            this.addingCSS(classSet, htmlTag);
            this.injectcreateText(textElement, htmlTag);
            this.injectHTML(htmlTag, parentDOM);
        }
    },

    childrenCheck(children, htmlTag) {
        //console.log(children, htmlTag);
        const child = childrenObject[children] || children || null;
        //console.log(child);
        if (!child) { return console.error('child is not found', children); };
        this.renderDOM(child, htmlTag);

    },

    injectHref(hrefAttr, targetSet, htmlTag) {
        htmlTag.href = hrefAttr;

        htmlTag.target = targetSet;
        if (targetSet === '_blank') {
            htmlTag.rel = "noopener noreferrer";
        }
    },

    addingCSS(cssClass, htmlTag) {
        //console.log(cssClass, htmlTag);
        if (!cssClass) { return; };
        htmlTag.classList.add(...cssClass);
        //console.log(htmlTag);
    },

    injectSrc(img, altString, htmlTag) {
        //console.log(img, altString, htmlTag);
        if (!img) { return };
        htmlTag.src = img;
        htmlTag.alt = altString;
    },

    injectId(only_id, htmlTag) {
        if (!only_id) { return };
        //console.log(only_id, htmlTag);
        htmlTag.id = only_id;
    },

    injectDataSet(dataBtn, htmlTag) {
        if (!dataBtn) { return };
        htmlTag.dataset.action = dataBtn;

    },

    injectHTML(childHTML, parentHTML) {
        //console.log(childHTML, parentHTML);
        if (!childHTML) { return; }
        parentHTML.appendChild(childHTML);
    },

    injectcreateText(createText, htmlTag) {
        if (!createText) { return };
        const textNode = document.createTextNode(createText);
        //console.log(textNode);
        htmlTag.appendChild(textNode);

    },

    createHTMLDocument(tag) {
        //console.log(tag);
        if (!tag) { return console.error('tagKey is not found'); }
        const htmlTag = document.createElement(tag);
        htmlTag.classList = '';
        return htmlTag;
    },

    renderDOM(renderObject, parentDom) {
        //console.log(renderObject, parentDom);
        if (!Array.isArray(renderObject)) { return console.error('this is not a array', renderObject); }
        //console.log('that is a array');
        let htmlTag = null;

        for (const { createElement: tag = null, classList: classSet = [], only_id = null, src: img = null, alt: altString = null, hrefAttr = "", gallaryData = null, target: targetSet = '', dataset: dateBtn = null, functionsEvent = null, createText = [], children = [] } of renderObject) {
            console.log(tag, classSet, createText, children, functionsEvent, gallaryData);
            htmlTag = this.createHTMLDocument(tag, htmlTag);
            //console.log(htmlTag);
            if (typeof this[functionsEvent] === 'function') {
                if (functionsEvent === 'createSpanInjectText') {
                    htmlTag = this[functionsEvent](createText, classSet, parentDom);
                    return;
                } else if (functionsEvent === 'imgCreaterSection') {
                    //console.log(functionsEvent);
                    htmlTag = this[functionsEvent](gallaryData, parentDom);
                    return;
                };

            };
            if (!Array.isArray(classSet)) { return; };
            //console.log(htmlTag);
            this.addingCSS(classSet, htmlTag);
            this.injectId(only_id, htmlTag);
            this.injectSrc(img, altString, htmlTag);
            this.injectDataSet(dateBtn, htmlTag);
            this.injectcreateText(createText, htmlTag);
            this.injectHref(hrefAttr, targetSet, htmlTag);
            if (!children) { return };
            this.childrenCheck(children, htmlTag);

            this.injectHTML(htmlTag, parentDom);

            //console.log(htmlTag);
        };

    },

};
// notiz sich vielleicht eine function checkliste zu bauen wo man pruft ob es ein array ist so kann ich sie immer wieder 
//benutzen und das kann ich mit allen wesentlich wichtigen objecten machen. array, object function, "", usw. so brauche ich nur ein boolean abrufen.
// oder ist das zu viel?? Ich weis ja nicht ob das gute praxis ist. Aber es wurde functionen extrem verkleinern und unzaehlige if fragen minimieren weil man immer nur dann an wichtigen 
//schnittstellen einmal abfragt bist du true || false!
const controlUnit = {

    loadWebside: false,

    load(functionsKey, propertyValue, parentDOM) {

        if (this.loadWebside) {
            //console.log('sie wurde schon mal geladen.')
            return;
        } else {
            //console.log('erste mal laden');
            let content = null;
            let keyFunction = null;
            //console.log(this.loadWebside, functionsKey, propertyValue, parentDOM);
            if (Array.isArray(propertyValue)) { propertyValue.forEach((propertyValue) => this.load(functionsKey, propertyValue, parentDOM)); return; };
            this.loadWebside = true;
            //console.log(this.loadWebside);
            Object.entries(propertyValue).forEach(([keyword, valueProperty]) => {
                //console.log(keyword, valueProperty);
                if (typeof libraryBook[functionsKey][keyword] !== 'function') { console.log('this is not a function'); return; };
                if (Array.isArray(valueProperty) && typeof valueProperty !== 'object') { console.error('this is a object'); return; };
                libraryBook[functionsKey][keyword](valueProperty, parentDOM);
                return;
            });
        };
    },

    assignProperties(UI_control) {
        let parentDOM = null;
        let websideActive = null;
        //console.log(UI_control);
        Object.entries(UI_control).forEach(([keyword, propertyValue]) => {

            switch (keyword) {

                case 'parentDOM':
                    //console.log(document.querySelector(`${propertyValue}`));
                    if (document.querySelector(`${propertyValue}`)) {
                        parentDOM = document.querySelector(`${propertyValue}`);
                    } else {
                        return;
                    }
                    break;
                case 'websideActive':
                    //console.log(websideActive);
                    websideActive = propertyValue;
                    break;
                case 'functionsFactory':
                    console.log(propertyValue, parentDOM, websideActive);
                    //console.log(typeof this[websideActive] === 'function');
                    if (typeof this[websideActive] !== 'function') { return; };
                    this[websideActive](keyword, propertyValue, parentDOM);
                    return;
                    break;
                default: break;
            };
        });
    },

    inputCheck(object_c) {
        //console.log(object_c);
        const { UI_control } = object_c;
        //console.log(UI_control);
        if (Array.isArray(UI_control)) { console.error('controlUnit: zeile: 7'); UI_control.forEach((UI_control) => this.inputCheck(UI_control)); return; };
        if (typeof UI_control !== 'object') { return console.error('this is not a object', 'zeile: 8'); };

        this.assignProperties(UI_control);

    },

};

const libraryBook = {
    "functionsFactory": functionsFactory,

};



controlUnit.inputCheck(mainContent);



