
const parentBody = document.querySelector('.bodyInput');

const libraryList = {
    "UI_DISPLAY_area": UI_DISPLAY_area,
    "creatorTextArea": creatorTextArea,
};

const control_UI_engine = {

    appendChild_function(parentDom, htmlDOM) {
        if (!parentDom || !htmlDOM) { return }
        parentDom.appendChild(htmlDOM);
    },

    add_srcFunction(srcObject, htmlDOM) {
        if (!srcObject) { return };
        htmlDOM.src = srcObject;
    },

    createText_function(htmlDOM, text) {
        if (!text) { return };
        const txt = document.createTextNode(text);
        htmlDOM.appendChild(txt);
    },

    add_classSetting(htmlDOM, classSet, addClassList) {
        if (!classSet) {
            console.error('classList is not found');
        } else {
            htmlDOM.classList.add(...classSet);
        };

        if (!addClassList || !Array.isArray(addClassList)) {
            //console.error('addClassList is not found');
        } else {
            htmlDOM.classList.add(...addClassList);
        };
    },

    createID_function(id_code, htmlDOM) {
        if (!id_code) { return };
        htmlDOM.id = id_code;
    },

    addDatasetProperty(dataKey, htmlDOM) {
        if (!dataKey || !htmlDOM) { return };

        htmlDOM.dataset.action = dataKey;
    },

    generate_a_htmlTag(htmlTag) {
        if (!htmlTag) { return; }
        const htmlDOM = document.createElement(htmlTag);
        if (htmlDOM) { htmlDOM.classList = ''; };
        return htmlDOM;
    },

    renderingEngine_UI(metaHTML_object, parentDom) {

        metaHTML_object.forEach((metaHTML_object) => {

            const { createElement: htmlTag = null, classList: classSet = null, addClassList = null, id_code = null, booleanValue = null, dataset: dataKey = null, id_name = null, children = null, srcObject = null, createText: text = null, UI_DisplayActive = null, functionName = null, functionEvent = null } = metaHTML_object;

            let copyChildren = structuredClone(children);

            const htmlDOM = this.generate_a_htmlTag(htmlTag);
            this.add_classSetting(htmlDOM, classSet, addClassList);
            this.createID_function(id_code, htmlDOM);



            this.addDatasetProperty(dataKey, htmlDOM);

            this.add_srcFunction(srcObject, htmlDOM);
            this.createText_function(htmlDOM, text);
            this.appendChild_function(parentDom, htmlDOM);

            if (functionName && functionEvent) {
                if (typeof libraryList[functionName][functionEvent] === 'function') {
                    copyChildren = libraryList[functionName][functionEvent](UI_DisplayActive, booleanValue || htmlDOM || null);
                };
            };
            if (!copyChildren) { return };

            if (!Array.isArray(copyChildren)) { Array(copyChildren); };
            this.renderingEngine_UI(copyChildren, htmlDOM);
        });

    },

    controlEngine(bodyGame, parentBody) {
        let arrayCode = null;

        if (!Array.isArray(bodyGame) && typeof bodyGame === 'object') { arrayCode = Array(bodyGame); };
        arrayCode = bodyGame
        this.renderingEngine_UI(bodyGame, parentBody);
    }



};


control_UI_engine.controlEngine(mainData.bodyMainFramework, parentBody);