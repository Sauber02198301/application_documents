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

    "closeVitaText": [
        { "createTextNode": "Close", "classList": "VitaTextBtn_css" },
        { "createTextNode": "close", "classList": "iconCloseText_css" },
    ],

    "mainText_intro": [
        {
            "classList": "textSection_one",
            "createTextNode": [
                "Die Begeisterung für Computer und Technik begleitet mich schon seit meiner Jugend.",
                "Auch wenn mein beruflicher Weg zunächst in eine andere Richtung führte, habe ich mich privat kontinuierlich und mit großer Leidenschaft weiterentwickelt.",
                "Ob das Planen, Zusammenstellen und Konfigurieren kompletter PC-Systeme inklusive BIOS-Setup oder anspruchsvolle Hardware-Reparaturen an MacBooks – wie das Beheben von Display- und Sensorfehlern sowie Firmware-Wiederherstellungen:",
                "Ich liebe es, komplexen Ursachen auf den Grund zu gehen und funktionierende Lösungen zu finden.",
                "Um mein technisches Profil abzurunden, habe ich mich intensiv in die moderne Software- und Webentwicklung eingearbeitet.",
                "Neben soliden Kenntnissen in HTML und CSS liegt mein Schwerpunkt dabei vor allem auf JavaScript, mit dem ich bereits eigene praxisnahe Anwendungen und Logiken umsetze."
            ]
        },
        {
            "classList": "textSection_two",
            "createTextNode": [
                "Meine Faszination für Technik endet nicht bei der Software: Aktuell realisiere ich eigene Hardware-Projekte, wie den anspruchsvollen Umbau klassischer Handheld-Konsolen.",
                "Dabei modifiziere ich Gehäuse präzise, um moderne Komponenten wie einen Raspberry Pi, separate Power-Management-Platinen und IPS-Displays samt Konverterboards auf engstem Raum einzubinden – inklusive feiner Lötarbeiten an Schnittstellen und Stromversorgung.",
                "Wo klassische Bildungswege oft an Grenzen stießen, habe ich gelernt, mir selbst anspruchsvolle Systeme vollkommen autark und strukturiert anzueignen.",
                "Wenn mich ein Projekt packt, entwickle ich einen absoluten Biss, um logische und stabile Lösungen zu erschaffen."
            ]
        },
        {
            "classList": "textSection_three",
            "createTextNode": [
                "Genau diese Kombination aus logischem Denken, Hardware-Verständnis und Software-Entwicklung möchte ich nun im professionellen Umfeld einbringen.",
                "Ein Einstieg bzw. Praktikum in Ihrem Haus ist für mich der nächste logische Schritt, um an echten Herausforderungen mitzuwirken und Ihr Team tatkräftig zu unterstützen.",
                "In meinem beigefügten Lebenslauf finden Sie meinen bisherigen Werdegang. Er zeigt, wer ich bin, welche praktischen Erfahrungen mich ausmachen und mit welcher großen Motivation ich diesen Neustart anstrebe.",
                "Über die Gelegenheit, mich Ihnen in einem persönlichen Gespräch vorzustellen und meine Projekte im Detail zu präsentieren, freue ich mich sehr.",
                "Mit freundlichen Grüßen",
                "Dennis Nickel"
            ]
        },
        {
            "classList": "textSection_three",
            "createTextNode": [
                "Erfolg ist kein Glück, sondern nur das Ergebnis von Blut, Schweiß und Tränen.",
                "— Kontra K"
            ]
        }
    ],

    "schoolFolder": [
        {
            "classList": "",
            "createTextNode": [
                "Der formelle Schulabschluss bildete das Fundament für meinen Einstieg in das Berufsleben.",
                "Während starre Schulsysteme mein technisches Interesse damals noch nicht abbilden konnten,",
                "zeigte sich schon früh meine ausgeprägte Neigung zu logischen Zusammenhängen,",
                "C-Hardware und handwerklichem Arbeiten."
            ]
        }
    ],

    "vitaHeadingText": "Lebenslauf",
    "vita_workLife_time": "Die Einzelnen Lebensstation",

    "instaContent": { "classList": "icon_Insta_css", /*"createTextNode": "&#xf16d;"*/ },// insta
    "gitHubContent": { "classList": "icon_gitHub_css", /*"createTextNode": "&#xf092;"*/ }, // gitHub
    "btn_lebenslauf": { "classList": "dropBtnText_class", "createTextNode": "Lebenslauf" },
    "btn_bdi_II": { "classList": "dropBtnText_class", "createTextNode": "BDI-II Depressionstest" },
};

const btn_elements = {
    // {"classList": "", "dataset": { "action": "" }, "textSpanContent_function": { "createTextNode":"" }}
    "dropDownBtn": [
        { "classList": "btn_dropDown_css", "dataset": { "action": "lebenslauf" }, "textSpanContent_function": { "createTextNode": "btn_lebenslauf" } },
        { "classList": "btn_dropDown_css", "dataset": { "action": "bdi_II" }, "textSpanContent_function": { "createTextNode": "btn_bdi_II" } }
    ],

    "contactBtn": [{ "classList": "btn_contactFooter_css", "dataset": { "action": "contact_id" }, "childItems": [{ "createElement": "img_tag", "classList": "contactChip_img", "src": "contactLogo", "alt": "chipImg_footer" }, { "createElement": "span_tag", "classList": "contactChip_text_footer", "createTextNode": "Kontakt" }] }],
    //"chipImg_Text_createrFunction": { "createTextNode": "contact_text" }
};

const toggleEvent = {
    "webside_toggle": false,
};

const slideShowImportValue = {
    "index": 0,
    "counter": 0
}

const anchor = {
    "anchorFooter": [
        { "classList": "anchorFooter_css", "href": "insta", "textSpanContent_function": { "createTextNode": "instaContent" } },// insta
        { "classList": "anchorFooter_css", "href": "gitHub", "textSpanContent_function": { "createTextNode": "gitHubContent" } } // gitHub
    ],
};

const href = {
    "insta": "https://www.instagram.com/sauber0183/?hl=de",
    "gitHub": "https://github.com/Sauber02198301",
    "emailAdress": "mailto:d.nickel85@outlook.de"
};

const src = {
    "headerLogo": "imgContent/dynamicLogo.png",
    "contactLogo": "imgContent/dennis_logo.png",
    "contact_img": "imgContent/A6E64024-1ED4-4EED-A050-0D4C3E9F06BD_1_105_c.png",
};

const alt = {
    "logo_header_accessible": "levelUp & < >",
    "chipImg_footer": "Ein Bild von eines Mann mittlerem Alter. Es steht der Name Dennis im Text",
    "img_man": "Ein Mann mittlers Alter",
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

    "controlNavBtn_container": [
        { "add": "flex_container" },
        { "add": "navigation_container" },
        { "add": "navigation_containerStyle" }
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

    "btn_VitaBtn_css": [
        { "add": "flex_container" },
        { "add": "btn_secondary" },
        { "add": "vita_btnCloseStyle" }
    ],

    "VitaTextBtn_css": [
        { "add": "font_standardValue" },
        { "add": "vitaText" },
        { "add": "btnVitaTextStyle" }
    ],

    "iconCloseText_css": [
        { "add": "material-symbols-outlined" },
        { "add": "vitaText" },
        { "add": "" }
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

    "contact_section_css": [
        { "add": "flex_container" },
        { "add": "footer_btn_section" },
        { "add": "contactBoxStyle" }
    ],

    "anchorFooter_css": [
        { "add": "flex_container" },
        { "add": "anchor_settings" },
        { "add": "anchor_footerStyle" }
    ],

    "icon_gitHub_css": [
        { "add": "font_iconValue" },
        { "add": "fa" },
        { "add": "fa-github-square" }
    ],

    "icon_Insta_css": [
        { "add": "font_iconValue" },
        { "add": "fa" },
        { "add": "fa-instagram" }
    ],

    "btn_dropDown_css": [
        { "add": "flex_container" },
        { "add": "btn_secondary" },
        { "add": "btnStyle_dropdownBtn" }
    ],

    "dropBtnText_class": [
        { "add": "font_standardValue" },
        { "add": "btn_primaryText" },
        { "add": "navBtn_text" }
    ],

    "btn_contactFooter_css": [
        { "add": "flex_container" },
        { "add": "btn_secondary" },
        { "add": "contactBtnStyle" }
    ],

    "contactChip_text_footer": [
        { "add": "font_standardValue" },
        { "add": "contactChip_text" },
        { "add": "contactChip_text_style" }
    ],

    "contactChip_img": [
        { "add": "block_container" },
        { "add": "contact_btn_img" },
        { "add": "contact_btn_imgStyle" }
    ],

    "contactBox_css": [
        { "add": "flex_container" },
        { "add": "contact_box_mainSection" },
        { "add": "contact_box_style" }
    ],

    "img_conatct_imagesBox_css": [
        { "add": "flex_container" },
        { "add": "contact_imgChild_box" },
        { "add": "contact_imgChild_box_style" }
    ],

    "img_contactPicture": [
        { "add": "block_container" },
        { "add": "contact_img" },
        { "add": "contact_img_style" }
    ],

    "nameContact_css": [
        { "add": "flex_container" },
        { "add": "contact_nameBox" },
        { "add": "contact_name_box_style" }
    ],

    "contactheaderBox": [
        { "add": "flex_container" },
        { "add": "contact_headerBox" },
        { "add": "contact_headerBox_style" }
    ],

    "contactText_css": [
        { "add": "font_standardValue" },
        { "add": "contact_h2_text" },
        { "add": "contactTextStyle" }
    ],

    "contactTextIntro_css": [
        { "add": "font_standardValue" },
        { "add": "contact_h1_text" },
        { "add": "contactTextStyle" }
    ],

    "textContactId": [
        { "add": "font_standardValue" },
        { "add": "contactText" },
        { "add": "contactTextStyle" }
    ],

    "p_Contact_box": [
        { "add": "flex_container" },
        { "add": "contact_paragraphBox" },
        { "add": "contact_paragraphBox_style" }
    ],

    "flipCard_contact": [
        { "add": "flex_container" },
        { "add": "flipCard_parent" },
        { "add": "flipCard_parentStyle" }
    ],

    "flipCard_inner": [
        { "add": "flex_container" },
        { "add": "flipCard_inner" },
        { "add": "flipCard_style" }
    ],

    "contactTextBox_flipCard_front": [
        { "add": "flex_container" },
        { "add": "contact_flipCardFront_textBox" },
        { "add": "contact_Textbox_style" }
    ],

    "contactTextFlipBoxBack": [
        { "add": "flex_container" },
        { "add": "contact_flipCardBack_textBox" },
        { "add": "contact_Textbox_style" }
    ],

    "emailContact": [
        { "add": "flex_container" },
        { "add": "emailContact" },
        { "add": "emailContactStyle_css" }
    ],

    "anchorEmailContact": [
        { "add": "flex_container" },
        { "add": "anchorEmailContact" },
        { "add": "anchorEmailContact_style" }
    ],

    "emailFont_text": [
        { "add": "font_standardValue" },
        { "add": "contactText" },
        { "add": "contactTextStyle" }
    ],

    "vita_css": [
        { "add": "flex_container" },
        { "add": "vitaSection" },
        { "add": "vitaSectionStyle" }
    ],

    "vitaHeader_css": [
        { "add": "flex_container" },
        { "add": "vite_headingSection" },
        { "add": "vita_headingStyle" }
    ],

    "vita_hContent_css": [
        { "add": "flex_container" },
        { "add": "headingTextContent" },
        { "add": "vita_headingText_style" }
    ],

    "viteText_h2_css": [
        { "add": "font_standardValue" },
        { "add": "vitaText_h2" },
        { "add": "vitaTextStyle" }
    ],

    "viteText_h3_css": [
        { "add": "font_standardValue" },
        { "add": "vitaText_h3" },
        { "add": "vitaTextStyle" }
    ],

    "vita_logoContent_css": [
        { "add": "flex_container" },
        { "add": "img_vitaContainer" },
        { "add": "img_vitaContainerStyle" }
    ],

    "vita_img_css": [
        { "add": "block_container" },
        { "add": "img_vita" },
        { "add": "img_vitaStyle" }
    ],

    "vitaMainSection_css": [
        { "add": "flex_container" },
        { "add": "vitaMainSection" },
        { "add": "vitaMainSectionStyle" },
    ],

    "vitaMainLeft_css": [
        { "add": "flex_container" },
        { "add": "vitaLeftBox" },
        { "add": "vitaLeftBoxStyle" }
    ],

    "vitaCenterLine_css": [
        { "add": "flex_container" },
        { "add": "centerLineVita" },
        { "add": "centerLineStyle" }
    ],

    "vitaMainRight_css": [
        { "add": "flex_container" },
        { "add": "vitaRightBox" },
        { "add": "vitaRight_style" }
    ],

    "vitaBox_one_css": [
        { "add": "flex_container" },
        { "add": "vitaBox_one" },
        { "add": "vitaBox_oneStyle" }
    ],

    "boxOne_header_css": [
        { "add": "flex_container" },
        { "add": "header_box_school" },
        { "add": "header_box_schoolStyle" }
    ],

    "vitaLifeHeading_css": [
        { "add": "font_standardValue" },
        { "add": "vitaTextSchool" },
        { "add": "vitaTextSchool_style" }
    ],

    "vitaText_css": [
        { "add": "font_standardValue" },
        { "add": "vitaText_propertys" },
        { "add": "vitaTextStyle" }
    ],

    "vita_para_css": [
        { "add": "flex_container" },
        { "add": "para_container" },
        { "add": "para_containerStyle" }
    ]

}