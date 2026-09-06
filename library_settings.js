const createElement = {
    "header_tag": "header",
    "nav_tag": "nav",
    "main_tag": "main",
    "footer_tag": "footer",
    "div_tag": "div",
    "button_tag": "button",
    "a_tag": "a",
    "span_tag": "span",
    "p_tag": "p",
    "h1_tag": "h1",
    "h2_tag": "h2",
    "h3_tag": "h3",
    "h4_tag": "h4",
    "h5_tag": "h5",
    "h6_tag": "h6",
    "br_tag": "br",
    "form_tag": "form",
    "label_tag": "label",
    "input_tag": "input",
    "img_tag": "img",
    "select_tag": "select",
    "option_tag": "option",
    "ul_tag": "ul",
    "ol_tag": "ol",
    "dl_tag": "dl",
    "li_tag": "li",
    "dt_tag": "dt",
    "dd_tag": "dd",
    "table_tag": "table",
    "th_tag": "th",
    "tr_tag": "tr",
    "td_tag": "td",
};

const createTextNode = {

    "btnHome_text": [
        { "createTextNode": "Home", "classList": "btn_text_css" },
        { "createTextNode": "menu", "classList": "iconText_css" },
    ],

    "mainText_intro": [
        {
            "classList": "textSection_one",
            "createTextNode": [
                "Für mich stand schnell fest, dass ich mich bei WAGO im Bereich der IT und Softwareentwicklung einbringen möchte.",
                "Um Ihnen mein selbst angeeignetes Wissen nicht nur theoretisch, sondern direkt praktisch zu beweisen, habe ich verschiedene Anwendungen entwickelt, die meine Vielseitigkeit zeigen.",
                "Neben einer Software zur Auswertung des BDI-II-Tests habe ich ein simulationsbasiertes Energiemanagement-System programmiert.",
                "Dieses orientiert sich direkt an Ihrer Produktpalette und stellt Verbräuche im Haushaltskontext logisch dar.",
                "In meinem beigefügten Lebenslauf habe ich meinen gesamten Werdegang niedergeschrieben.",
                "Er zeigt, wer ich bin, welche praktischen Erfahrungen mich ausmachen und mit welcher großen Motivation ich diesen Neustart anstrebe."
            ],
        },
        {
            "classList": "textSection_two",
            "createTextNode": [
                "Dass mein Weg mich zu WAGO führt, verdanke ich einem glücklichen Zufall und einem inspirierenden Gespräch auf den AzubiVibes.",
                "Dieses Treffen hat in mir eine ganz neue Motivation entfacht.",
                "Während mir die klassischen, starren Bildungswege in der Vergangenheit oft Steine in den Weg gelegt haben, weiß ich heute genau, wo meine Stärken liegen.",
                "Mein Weg zeichnet sich dadurch aus, dass ich mir komplexe Systeme mit unbändiger Disziplin, Ausdauer und Schweiß vollkommen autark erarbeite.",
                "Wenn mich ein Projekt packt, entwickele ich einen absoluten Biss, um logische und stabile Lösungen zu erschaffen.",
                "Ich muss und möchte härter arbeiten als andere, um mein Potenzial voll auszuschöpfen, und genau diese Energie möchte ich gewinnbringend in Ihr Team einbringen."
            ],
        },
        {
            "classList": "textSection_three",
            "createTextNode": [
                "Ein Praktikum in Ihrem Haus ist für mich der nächste logische Schritt, um meine praktischen Fähigkeiten in einem professionellen Umfeld zu vertiefen und aktiv an echten Herausforderungen mitzuwirken.",
                "Ich brenne darauf, Ihnen zu zeigen, was in mir steckt und wie ich Ihr Team mit meinem Fokus verstärken kann.",
                "Über die Gelegenheit, mich Ihnen in einem persönlichen Gespräch vorzustellen und meine Anwendungen im Detail zu präsentieren, freue ich mich sehr.",
                "Mit freundlichen Grüßen",
                "Dennis Nickel"
            ],
        }
    ],

    "instaContent": { "classList": "icon_footer_css", "createTextNode": "&#xf16d;" },// insta
    "gitHubContent": { "classList": "icon_footer_css", "createTextNode": "&#xf092;" } // gitHub
};



const toggleEvent = {
    "webside_toggle": false,
    "dropDown": false,

};

const toggleUI_active = {
    "slideShow_intro": false,
}

const slideShowImportValue = {
    "index": 0,
    "counter": 0
}

const slideShow_content = {
    "functionsName": null,
    "objectContent": null,
    "intervalReset": null,
    "slideShow_intro": false,
    "classList": null,
};

const anchor = {
    "anchorFooter": [
        { "classList": "anchorFooter_css", "href": "insta", "textSpanContent_function": { "createTextNode": "instaContent" } },// insta
        { "classList": "anchorFooter_css", "href": "gitHub", "textSpanContent_function": { "createTextNode": "gitHubContent" } } // gitHub
    ],
};

const href = {
    "insta": "https://www.instagram.com/sauber0183/?hl=de",
    "gitHub": "https://github.com/Sauber02198301"
};

const src = {
    "headerLogo": "imgContent/dynamicLogo.png"
};

const alt = {
    "logo_header_accessible": "levelUp & < >"
};

const classList = {
    /*
    "_css":[
        {"add": ""},
        {"add": ""},
        {"add": ""}
    ],
    */

    "header_css": [
        { "add": "flex_container" },
        { "add": "header_section" },
        { "add": "header_style" }
    ],

    "nav_css": [
        { "add": "flex_container" },
        { "add": "nav_section" },
        { "add": "nav_style" }
    ],

    "main_css": [
        { "add": "flex_container" },
        { "add": "main_section" },
        { "add": "main_style" }
    ],

    "contentDisplay_css": [
        { "add": "flex_container" },
        { "add": "display_sectionMain" },
        { "add": "display_style" }
    ],

    "contentDisplayLeft_css": [
        { "add": "flex_container" },
        { "add": "display_sectionLeft" },
        { "add": "display_childStyle" }
    ],

    "contentDisplayCenter_css": [
        { "add": "flex_container" },
        { "add": "display_sectionCenter" },
        { "add": "display_childStyle" }
    ],

    "contentDisplayRight_css": [
        { "add": "flex_container" },
        { "add": "display_sectionRight" },
        { "add": "display_childStyle" }
    ],

    "footer_css": [
        { "add": "flex_container" },
        { "add": "footer_section" },
        { "add": "footer_style" }
    ],

    "btn_Home_css": [
        { "add": "flex_container" },
        { "add": "btn_primary" },
        { "add": "btnHome_style" }
    ],

    "imgLogo_css": [
        { "add": "block_container" },
        { "add": "img_header_section" },
        { "add": "img_logoHeader_style" }
    ],

    "iconText_css": [
        { "add": "block_container" },
        { "add": "material-symbols-outlined" },
        { "add": "homeBtn_style" }
    ],

    "btn_text_css": [
        { "add": "font_standardValue" },
        { "add": "btn_primaryText" },
        { "add": "homeBtn_style" }
    ],

    "p_textCont_css": [
        { "add": "flex_container" },
        { "add": "displaySection_paragraph" },
        { "add": "paragraph_mainStyle" }
    ],

    "textSection_one": [
        { "add": "font_standardValue" },
        { "add": "introText_style" },
        { "add": "setOne" }
    ],

    "textSection_two": [
        { "add": "font_standardValue" },
        { "add": "introText_style" },
        { "add": "setTwo" }
    ],

    "textSection_three": [
        { "add": "font_standardValue" },
        { "add": "introText_style" },
        { "add": "setThree" }
    ],

    "logo_container_css": [
        { "add": "flex_container" },
        { "add": "footer_icon_section" },
        { "add": "iconContainerStyle" }
    ],

    "anchorFooter_css": [
        { "add": "flex_container" },
        { "add": "anchor_settings" },
        { "add": "anchor_footerStyle" }
    ],

    "icon_footer_css": [
        { "add": "block_container" },
        { "add": "font_standardValue" },
        { "add": "fa" }

    ],

}