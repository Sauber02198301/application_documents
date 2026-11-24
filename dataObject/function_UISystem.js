
const UI_function = {

    metaLibrary: null,

    bodyDOM_document: null,


    redoutFunction(metaData) {
        console.log(metaData);
        if (!this.metaLibrary) { this.metaLibrary = metaData; };

        const { bodyDOM, bodyMainFramework } = this.metaLibrary;
        console.log(bodyMainFramework);
        if (!this.bodyDOM_document) { this.bodyDOM_document = bodyDOM; };

        console.log(this.bodyDOM_document);

    }

};

UI_function.redoutFunction(mainData);