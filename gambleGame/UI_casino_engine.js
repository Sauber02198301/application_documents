
const parentBody = document.querySelector('.body_section');



const control_UI_engine = {

    //btnFactory function hier gebe ich eine liste von object arrays hinein.
    // Was brauche ich zum das es funktioniert?!
    /*
        Als erstes brauche ich einen Taktgeber mit den zuverarbeitetnden propertyValues 
        ich brauche ja nicht alles doppelt schreiben nur dataset, id und createText!
        die classList kann ich duplizieren sowie addClassList wobei die kann auch oben stehen weil es immer eine 
        art einzige class sein kann.

        Example: 
        btnlistArray:{ 
            "classList": ["one",  "two", "three"], 
            "addClassList": ["specifyKey"],
            btnList: [
                { 
                    "dataset": "x",
                    "id_name": "y"
                },
            ],
            "childrenContent": [
                {"classList": ["a", "b", "c"], "addClassList": ["specify"], "text": "Muster Text" },
                {"classList": ["a", "b", "c"], "addClassList": ["specify"], "text": "Muster Text" },
                // mit shift + option immer wieder duplizieren und nur den Text ändern ich hoffe das ist das kiss prinzip
                Warum habe ich gerade ein lied von kiss im kopf?!
            ]


        }
    */

    btn_createrFunction(btnObject) {
        // arbeie ich hier mit return oder sende ich die erstellte object mit den parentDom wieder einfach zurück?!
        console.log(btnObject)
        

    },

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
        /*if (!Array.isArray(classSet) && typeof classSet === 'string') {
            const toConvertClassSet = libraryList[classSet] || null;
            if (!toConvertClassSet) { return };
            if (!Array.isArray(toConvertClassSet)) { Array(toConvertClassSet); };
            htmlDOM.classList.add(...toConvertClassSet);
            if (!addClassList || !Array.isArray(addClassList)) { return; };
            htmlDOM.classList.add(...addClassList);
        };*/

        htmlDOM.classList.add(...classSet);
        if (!addClassList || !Array.isArray(addClassList)) { return; };
        htmlDOM.classList.add(...addClassList);

    },

    addDatasetProperty(dataKey, htmlDOM) {
        if (!dataKey || !htmlDOM) { return };
        console.log(dataKey, htmlDOM);

        htmlDOM.dataset.action = dataKey;

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
            const { createElement: htmlTag = null, classList: classSet = null, addClassList = null, dataset: dataKey = null, id_name = null, children = null, createText: text = null } = metaHTML_object;

            const htmlDOM = this.generate_a_htmlTag(htmlTag);
            this.add_classSetting(htmlDOM, classSet, addClassList);
            this.addDatasetProperty(dataKey, htmlDOM);
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