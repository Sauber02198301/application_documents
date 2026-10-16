

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


    createHTML_element_func(htmlTag) {
        if (!htmlTag) { return };
        const html_element = document.createElement(htmlTag);
        //console.log(html_element);

        return html_element;
    },

    addClass_func(html_element, classSet) {
        //console.log(html_element, classSet);
        if (!classSet) { return };
        html_element.classList = '';
        //console.log(html_element, classSet);
        const class_array = bdiLibrary.classList_main[classSet];
        console.log(class_array);
        html_element.classList.add(...class_array);
        console.log(html_element);

    },

    appendFunct(html_element, parentDom) {
        console.log(html_element, parentDom);
        if (!html_element || !parentDom) { return };

        parentDom.appendChild(html_element);

    },

    rendering_functionSystem(htmlObject, parentBody) {
        console.log(htmlObject, parentBody);
        if (!parentBody || !htmlObject) { return };
        if (!Array.isArray(htmlObject)) {

            renderingFunction_object(Array(htmlObject), parentBody);
            return;
        }

        /*
            Legenden 
            extObject = extration the object from htmlObject
        */

        for (const extObject of htmlObject) {
            //console.log(extObject);
            const { createElement: htmlTag, classList: classSet } = extObject;

            //console.log(htmlTag, classSet);
            const html_element = this.createHTML_element_func(htmlTag);
            this.addClass_func(html_element, classSet);
            console.log(html_element);
            this.appendFunct(html_element, parentBody);

        };

    }

};

const bdiBody = document.querySelector('.bdi_body_section');

renderingFunction_object.rendering_functionSystem(bdi_intro, bdiBody)
