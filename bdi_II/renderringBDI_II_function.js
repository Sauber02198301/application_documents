// BDI UI_renderingFunction

const renderingFunction_object = {

    bdi_active_object: {
        active: false,
        test_active: false,
    },

    removeChildFunction(parentDom) {
        console.log(parentDom);
        if (parentDom.innerHTML.trim() !== '') {
            console.log('dom ist voll');
            parentDom.innerHTML = '';
            return;
        } else {
            console.log('dom ist leer');
        };

    },

    lableCreateFunction(content, answer, parentDom) {
        console.log(answer, content, parentDom);
        const formDom = document.querySelector(parentDom);
        const arrayList = [];
        console.log(formDom);
        if (!Array.isArray(content)) { Array(content) };
        content.forEach((content, a_index) => {
            console.log(content, a_index);
            const { createText: text = null, points = null } = content;
            const copy_answer = structuredClone(answer);

            copy_answer.children[0].value = String(points);
            copy_answer.children[0].id = String(a_index);
            copy_answer.children[1].createText = text;
            copy_answer.children[2].createText = `${points} Punkte`;
            // ich glaube das input muss in einen label oder ich brauche noch das for dafuer weil es lassen sich alle anklicken das hatte ich schonmal das weis ich. Ich meine das lag am for kann auch an der reihen folge liegen. 

            arrayList.push(copy_answer);

        });
        console.log(arrayList);
        this.rendering_functionSystem(arrayList, formDom);
    },

    unpackage_bdiFunction(bdi_question, bdi_object_prop, answer_content, display_bdi) {
        console.log(bdi_question, bdi_object_prop, answer_content, display_bdi);

        const { content, answer, parentDom } = answer_content;
        console.log(content, answer);

        this.rendering_functionSystem(bdi_object_prop, display_bdi);
        this.lableCreateFunction(content, answer, parentDom);
    },

    function_activeBDI(activeBoolean, metaObject, parentDom) {
        // activeBoolean = fals || true, metaObject = das zu bearbeitende object, parentDom = das zu loschende dom & gleichzeitg das ziel;
        //console.log(activeBoolean, metaObject, parentDom);
        if (activeBoolean !== this.bdi_active_object.active) {
            this.bdi_active_object.active = activeBoolean;
            console.log(activeBoolean, metaObject, parentDom);
            this.removeChildFunction(parentDom);
            this.rendering_functionSystem(metaObject, parentDom);

        } else if (activeBoolean === this.bdi_active_object.active) {
            this.bdi_active_object.active = activeBoolean;
            this.removeChildFunction(parentDom);
            this.rendering_functionSystem(metaObject, parentDom);
        };

    },

    function_activeBDI_test(activeBoolean, bdi_question, bdi_object_prop, answer_content, display_bdi) {
        console.log(activeBoolean, bdi_question, bdi_object_prop, answer_content, display_bdi);
        let boolean_bdi_active = this.bdi_active_object.active;
        let boolean_activeBDI_test = this.bdi_active_object.test_active;
        console.log(boolean_bdi_active, boolean_activeBDI_test);
        console.log(activeBoolean, bdi_question, bdi_object_prop, display_bdi);
        if (activeBoolean !== this.bdi_active_object.test_active && this.bdi_active_object.active) {
            this.bdi_active_object.test_active = activeBoolean;
            this.removeChildFunction(display_bdi);
            this.unpackage_bdiFunction(bdi_question, bdi_object_prop, answer_content, display_bdi);

        } else if (activeBoolean === this.bdi_active_object.test_active && !this.bdi_active_object.active) {
            this.bdi_active_object.test_active = activeBoolean;

        }


    },

    destructChild_contentFunction(children, parentDom) {
        //console.log(children, parentDom);
        if (!children || !parentDom) { return };
        const childObject = bdiLibrary[children] || children;
        //console.log(childObject);
        this.rendering_functionSystem(childObject, parentDom);
        return;

    },

    createHTML_element_func(htmlTag) {
        if (!htmlTag) { return };
        const html_element = document.createElement(htmlTag);
        //console.log(html_element);

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
        //console.log(html_element, dataTyp);
        if (!html_element || !dataTyp) { return };

        html_element.dataset.action = dataTyp;
    },

    addClass_func(html_element, classSet, addClassList) {
        //console.log(html_element, classSet, addClassList);
        if (!classSet) { return };
        html_element.classList = '';
        //console.log(html_element, classSet);
        const class_array = bdiLibrary.classList_main[classSet] || bdiLibrary.classList_header[classSet] || bdiLibrary.classListText_icon[classSet] || bdiLibrary.classList_mainChildren[classSet] || bdiLibrary.classListInstr[classSet] || null;
        //console.log(class_array);
        if (!class_array) { return; }
        html_element.classList.add(...class_array);
        if (!addClassList) { return };
        const add = bdiLibrary.classListText_icon[addClassList] || addClassList || null;
        if (!add) { return };
        html_element.classList.add(...add);
        //console.log(html_element);

    },

    idInsertFunction(idName, html_element) {
        if (idName === null || idName === undefined || idName === '') { return };

        html_element.id = idName;
    },

    appendFunct(html_element, parentDom) {
        //console.log(html_element, parentDom);
        if (!html_element || !parentDom) { return };

        parentDom.appendChild(html_element);

    },

    createTextFunction(textContent, html_element, parentBody) {
        //console.log(textContent, html_element);
        if (!textContent) { return };
        if (!Array.isArray(textContent)) {
            const textNode = document.createTextNode(textContent);
            html_element.appendChild(textNode);
            return;
        } else {
            //console.log(textContent);
            textContent.forEach((textContent, index) => {
                const copy_html_element = html_element.cloneNode(false);
                console.log(textContent, index);
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
            //console.log(extObject);
            const { createElement: htmlTag = null, classList: classSet = null, addClassList = null, id: idName = null, children = null, dataset: dataTyp = null, type = null, name: nameInput = null, value: valueNumber = null, createText: textContent = null } = extObject;

            //console.log(children, addClassList);
            const html_element = this.createHTML_element_func(htmlTag);
            this.addClass_func(html_element, classSet, addClassList);
            //console.log(html_element);
            this.createData_instruction(html_element, dataTyp);
            this.toInsertValue(valueNumber, html_element);
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
