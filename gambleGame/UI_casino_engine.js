
const parentBody = document.querySelector('.body_section');



const control_UI_engine = {

    appendChild_function(parentDom, htmlDOM) {

        parentDom.appendChild(htmlDOM);

    },

    createText_function(htmlDOM, text) {
        console.log(htmlDOM, text);
        if (!text) { return };
        const txt = document.createTextNode(text);
        htmlDOM.appendChild(txt);

    },

    add_classSetting(htmlDOM, classSet, addClassList) {
        //legende htmlDom = htmlTag; classSet ein Array mit classNames; addClassList = zusatzName;
        console.log(htmlDOM, classSet, addClassList);
        if (!Array.isArray(classSet) && typeof classSet === 'string') {
            const toConvertClassSet = libraryList[classSet] || null;
            if (!toConvertClassSet) { return };
            if (!Array.isArray(toConvertClassSet)) { Array(toConvertClassSet); };
            htmlDOM.classList.add(...toConvertClassSet);
            if (!addClassList || !Array.isArray(addClassList)) { return; };
            htmlDOM.classList.add(...addClassList);
        };

        htmlDOM.classList.add(...classSet);
        if (!addClassList || !Array.isArray(addClassList)) { return; };
        htmlDOM.classList.add(...addClassList);

    },

    generate_a_htmlTag(htmlTag) {
        console.log(htmlTag);
        if (!htmlTag) { return; }
        const htmlDOM = document.createElement(htmlTag);
        if (htmlDOM) { htmlDOM.classList = ''; };
        //console.log(htmlDOM);
        return htmlDOM;
    },

    renderingEngine_UI(metaHTML_object, parentDom) {
        console.log(metaHTML_object, parentDom);

        metaHTML_object.forEach((metaHTML_object) => {
            const { createElement: htmlTag = null, classList: classSet = null, addClassList = null, children = null, createText: text = null } = metaHTML_object;

            const htmlDOM = this.generate_a_htmlTag(htmlTag);
            this.add_classSetting(htmlDOM, classSet, addClassList);
            console.log(htmlDOM);
            this.createText_function(htmlDOM, text);
            this.appendChild_function(parentDom, htmlDOM);
            if (!children) { return };
            console.log(children);
            if (!Array.isArray(children)) { Array(children); };
            this.renderingEngine_UI(children, htmlDOM);

        })

    },

    controlEngine(bodyGame, parentBody) {
        // sie soll sicher gehen das es immer ein Array ist und wenn es ein Object ist soll sie es in ein array umwandelen
        console.log(bodyGame, parentBody);

        if (!Array.isArray(bodyGame) && typeof bodyGame === 'object') { Array(bodyGame); };

        this.renderingEngine_UI(bodyGame, parentBody);
    }

};


control_UI_engine.controlEngine(bodyGame, parentBody);