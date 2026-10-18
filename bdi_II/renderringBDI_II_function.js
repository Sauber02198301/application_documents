

const renderingFunction_object = {

    bdi_active_object: {
        active: false,

    },

    function_activeBDI(activeBoolean) {

        console.log(activeBoolean);

        if (activeBoolean !== this.bdi_active_object.active) {
            this.bdi_active_object.active = activeBoolean;

        } else if (activeBoolean === this.bdi_active_object.active) {
            this.bdi_active_object.active = false;

        };

    },

    destructChild_contentFunction(children, parentDom) {
        console.log(children, parentDom);
        if (!children || !parentDom) { return };
        const childObject = bdiLibrary[children] || children;
        console.log(childObject);
        this.rendering_functionSystem(childObject, parentDom);
        return;

    },

    createHTML_element_func(htmlTag) {
        if (!htmlTag) { return };
        const html_element = document.createElement(htmlTag);
        //console.log(html_element);

        return html_element;
    },

    createData_instruction(html_element, dataTyp) {
        console.log(html_element, dataTyp);
        if (!html_element || !dataTyp) { return };

        html_element.dataset.action = dataTyp;
    },

    addClass_func(html_element, classSet, addClassList) {
        console.log(html_element, classSet, addClassList);
        if (!classSet) { return };
        html_element.classList = '';
        //console.log(html_element, classSet);
        const class_array = bdiLibrary.classList_main[classSet] || bdiLibrary.classList_header[classSet] || bdiLibrary.classListText_icon[classSet] || bdiLibrary.classList_mainChildren[classSet] || null;
        console.log(class_array);
        if (!class_array) { return; }
        html_element.classList.add(...class_array);
        if (!addClassList) { return };
        const add = bdiLibrary.classListText_icon[addClassList] || addClassList || null;
        if (!add) { return };
        html_element.classList.add(...add);
        console.log(html_element);

    },

    appendFunct(html_element, parentDom) {
        console.log(html_element, parentDom);
        if (!html_element || !parentDom) { return };

        parentDom.appendChild(html_element);

    },

    createTextFunction(textContent, html_element) {
        console.log(textContent, html_element);
        if (!textContent) { return };
        if (Array.isArray(textContent)) {
            console.log(textContent);
            for (const extr_text of textContent) {
                console.log(extr_text);
                const textNode = document.createTextNode(textContent);
                html_element.appendChild(textNode);
                continue;
            }
            return
        }
        const textNode = document.createTextNode(textContent);
        html_element.appendChild(textNode);

    },

    rendering_functionSystem(htmlObject, parentBody) {
        console.log(htmlObject, parentBody);
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
            //console.log(extObject);
            const { createElement: htmlTag = null, classList: classSet = null, addClassList = null, children = null, dataset: dataTyp = null, createText: textContent = null } = extObject;

            console.log(children, addClassList);
            const html_element = this.createHTML_element_func(htmlTag);
            this.addClass_func(html_element, classSet, addClassList);
            console.log(html_element);
            this.createData_instruction(html_element, dataTyp);
            this.createTextFunction(textContent, html_element);
            this.appendFunct(html_element, parentBody);

            this.destructChild_contentFunction(children, html_element);

        };

    }

};

const bdiBody = document.querySelector('.bdi_body_section');

renderingFunction_object.rendering_functionSystem(bdi_intro, bdiBody)
