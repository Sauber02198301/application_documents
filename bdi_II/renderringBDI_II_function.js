// BDI UI_renderingFunction

const renderingFunction_object = {

    removeChildFunction(parentDom) {

        if (parentDom.innerHTML.trim() !== '') {

            parentDom.innerHTML = '';
            return;
        } else {

        };

    },

    destructChild_contentFunction(children, parentDom) {
        if (!children || !parentDom) { return };
        const childObject = bdiLibrary[children] || children;
        this.rendering_functionSystem(childObject, parentDom);
        return;

    },

    createHTML_element_func(htmlTag) {
        if (!htmlTag) { return };
        const html_element = document.createElement(htmlTag);
        return html_element;
    },

    toInsertValue(valueNumber, html_element) {
        if (valueNumber === null || valueNumber === undefined || valueNumber === "") { return };
        console.log(valueNumber, html_element);
        html_element.value = Number(valueNumber);
    },

    toInsert_type(typeSet, html_element) {
        if (!typeSet) { return };
        console.log(typeSet, html_element);
        html_element.type = typeSet
    },

    toInsert_name(nameInput, html_element) {
        if (!nameInput) { return };
        html_element.name = nameInput
    },

    createData_instruction(html_element, dataTyp) {
        if (!html_element || !dataTyp) { return };

        html_element.dataset.action = dataTyp;
    },

    addClass_func(html_element, classSet, addClassList) {
        if (!classSet) { return };
        html_element.classList = '';

        const class_array = bdiLibrary.classList_main[classSet] || bdiLibrary.classList_header[classSet] || bdiLibrary.classListText_icon[classSet] || bdiLibrary.classList_mainChildren[classSet] || bdiLibrary.classListInstr[classSet] || null;

        if (!class_array) { return; }
        html_element.classList.add(...class_array);
        if (!addClassList) { return };
        const add = bdiLibrary.classListText_icon[addClassList] || addClassList || null;
        if (!add) { return };
        html_element.classList.add(...add);
    },

    hrefInsertFunction(hrefAttr, targetSet, html_element) {
        if (!hrefAttr || !html_element) { return };
        html_element.href = hrefAttr;
        html_element.target = targetSet;
        if (targetSet === '_blank') { html_element.rel = "noopener noreferrer"; };
    },

    idInsertFunction(idName, html_element) {
        if (idName === null || idName === undefined || idName === '') { return };
        html_element.id = idName;
    },

    appendFunct(html_element, parentDom) {
        if (!html_element || !parentDom) { return };
        parentDom.appendChild(html_element);
    },

    createTextFunction(textContent, html_element, parentBody) {

        if (!textContent) { return };
        if (!Array.isArray(textContent)) {
            const textNode = document.createTextNode(textContent);
            html_element.appendChild(textNode);
            return;
        } else {
            //console.log(textContent);
            textContent.forEach((textContent, index) => {
                const copy_html_element = html_element.cloneNode(false);

                const textNode = document.createTextNode(textContent);
                copy_html_element.appendChild(textNode);
                this.appendFunct(copy_html_element, parentBody);
                /*
                    ist mir eben gar nicht aufgefallen ich habe ein p tag zu viel statt 3 habe ich 4
                    meine vermutung das liegt an der rendering weil da ist ja noch eine function die wieder in das dom schiebt damit kommt der 4 
                    1. baue ich mir jetzt zwei unterschiedliche functionen?  
                */
            });

            return;
        };

    },

    rendering_functionSystem(htmlObject, parentBody) {
        //console.log(htmlObject, parentBody);
        if (!parentBody || !htmlObject) { return };
        if (!Array.isArray(htmlObject)) {
            this.rendering_functionSystem(Array(htmlObject), parentBody);
            return;
        }
        /*
            Legenden 
            extObject = extration the object from htmlObject
        */
        for (const extObject of htmlObject) {

            const { createElement: htmlTag = null, classList: classSet = null, addClassList = null, hrefAttr = null, target: targetSet = null, id: idName = null, children = null, dataset: dataTyp = null, type = null, name: nameInput = null, value: valueNumber = null, createText: textContent = null } = extObject;


            const html_element = this.createHTML_element_func(htmlTag);
            this.addClass_func(html_element, classSet, addClassList);

            this.createData_instruction(html_element, dataTyp);
            this.toInsertValue(valueNumber, html_element);
            this.hrefInsertFunction(hrefAttr, targetSet, html_element);
            this.toInsert_type(type, html_element);
            this.idInsertFunction(idName, html_element);
            this.toInsert_name(nameInput, html_element);
            this.createTextFunction(textContent, html_element, parentBody);
            if (Array.isArray(textContent)) { continue }
            this.appendFunct(html_element, parentBody);

            this.destructChild_contentFunction(children, html_element);

        };

    }

};

const bdiBody = document.querySelector('.bdi_body_section');

renderingFunction_object.rendering_functionSystem(bdi_intro, bdiBody);
