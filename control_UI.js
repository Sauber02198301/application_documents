const libraryBook = {
    "toggleEvent": toggleEvent,
    "createElement": createElement,
    "classList": classList,
    "anchor": anchor,
    "src": src,
    "alt": alt,
    "href": href,
    "createTextNode": createTextNode,
    "functionsFactory": functionsFactory,
    "toggleUI_active": toggleUI_active,
};

function UI_checkControl(contentObject, dom_name, activeBoolean) {
    console.log(contentObject, dom_name, activeBoolean);
    if (!document.querySelector(`.${dom_name}`)) { return console.error('the_domContent can\'t not assain') };
    const domBody = document.querySelector(`.${dom_name}`);
    if (typeof contentObject === 'object' && Array.isArray(contentObject)) {
        contentObject.forEach((contentObject) => UI_checkControl(contentObject, dom_name));
        return;
    };
    let booleanCode = null;
    Object.entries(contentObject).forEach(([keyword, valueContent]) => {
        console.log(keyword, valueContent);

        switch (keyword) {

            case 'toggleEvent':
                console.log(keyword);
                booleanCode = activeBoolean_function(keyword, valueContent, activeBoolean);
                console.log(booleanCode);
                break;
            case 'functionsFactory':
                console.log(keyword, domBody);
                if (!booleanCode) {
                    console.log('termination_the_dom_content');
                } else {
                    console.log(keyword);
                    if (!typeof libraryBook[keyword]) { return console.error('functionsFactory_not_found'); };
                    if (typeof valueContent === 'object' && Array.isArray(valueContent)) {

                    } else {
                        Object.entries(valueContent).forEach(([funcKey, oblectCont]) => searchFunction(keyword, funcKey, oblectCont, domBody))
                    };
                };

                break;
            default: break;
        };

    });

};

function activeBoolean_function(keyword, valueCode, activeBoolean) {
    console.log(keyword, valueCode, activeBoolean);
    
    if (!libraryBook[keyword] && !libraryBook[keyword][valueCode]) { return console.error('booleanContent_not_found'); };
    console.log(libraryBook[keyword][valueCode]);
    if (typeof libraryBook[keyword][valueCode] !== 'boolean') { return console.error('this_is_no_a_boolean'); };
    if (!libraryBook[keyword][valueCode] && activeBoolean) {
        libraryBook[keyword][valueCode] = activeBoolean;
    } else if (libraryBook[keyword][valueCode] && !activeBoolean) {
        libraryBook[keyword][valueCode] = activeBoolean;
    };
    console.log(libraryBook[keyword][valueCode]);
    return libraryBook[keyword][valueCode];
};

function searchFunction(keyword, funcKey, oblectCont, domArea) {
    console.log(keyword, funcKey, oblectCont, domArea);
    if (!libraryBook[keyword] && !libraryBook[keyword][funcKey]) { return console.error('this_is_not_found'); };
    if(typeof oblectCont === 'object' && Array.isArray(oblectCont)) {
        console.log('this_is_array');
        if (typeof libraryBook[keyword][funcKey] !== 'function') { return console.error('function_is_not_locate')};
        libraryBook[keyword][funcKey](oblectCont, domArea);
        return; 
    } else {
        console.log('this_isObject');
        libraryBook[keyword][funcKey]([oblectCont], domArea);
        return
    };
};

UI_checkControl(mainContent, 'body_section', true);





