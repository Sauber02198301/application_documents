/*
    Hier gehe ich eine andere herangehensweise an ich baue mal alles extern dies hat vorteile bringt auch nachteile mit sich,
    weil nicht alles in einem Objeckt steht leidet die übersicht massive wenn ich aber moechte das ich wiederverwendbarkeit
    haben mochte muss ich ueben ueben ueben weil viele sachen fuehlen sich sehr unnatuerlich an also muss ich an mir arbeiten.

    An sich was ich gut finde classList_main symbolisiert den body man weis sofort was das ist. 
    Als nachstes baue ich nur im classList bereich die standart werte rein spezifische class kommen als,
    "addClassList" extra hinein. Wenn ich keine brauche nehme ich nur die standard werte! 
*/

/*
    Legende flexList
    flex_directin_row_reverse,
    flex_directin_row,
    flex_directin_column_reverse,
    flex_directin_column 
*/

/*
    Legende property's Name

    "createElement": "",
    "classList": [],
    "addClassList":[],
    "children": [],
    "createText": "",

    "content" *Dieser ist nur fuer eine function reservierter befehl*
    "functionsCall" *functinsname fuer die jeweilige aufgabe.*
*/


const bdiLibrary = {

    // introText

    "bdi_textArea": [
        {
            "createElement": "h2",
            "classList": "font_bdiSet_value",
            "addClassList": "introBDI_h2_style"
        }
    ],

    //body klassen

    "classList_main": {
        "bdi_header": ["flex_directin_row", "bdi_header_section_intro", "bdi_boxSettings"],
        "leftSide_center_bdi": ["flex_directin_column", "bdi_leftSide", "bdi_boxSettings"],
        "bdi_main_section": ["flex_directin_column", "bdi_mainSection", "bdi_boxSettings"],
        "rightSide_center_bdi": ["flex_directin_column", "bdi_rightSide", "bdi_boxSettings"],
        "footer_section_bdi": ["flex_directin_row", "bdi_footer_section", "bdi_boxSettings"]
    },

    //header klassen

    "classList_header": {
        "classHeaderLogo": ["flex_directin_row", "headerChild"],
    },

    //main_section klassen

    "classList_mainChildren": {
        "displayView": ["flex_directin_column", "display_section", "display_sectionStyle"],
        "mainChild_class": ["flex_directin_column", "main_childSection", "mainChildStyle"],
        "bdi_Box": ["flex_directin_column", "bdiBoxStyle"] // boxStyle darf nur styling elemente besitzen die andere auch haben spezifische immer separieren
    },

    // klass text_elemente

    "classListText_icon": {
        "class_iconSet": ["flex_directin_column", "material-symbols-outlined"],
        "font_bdiSet_value": ["font_standardValue", "bdi_fontStyle"],
        "introBDI_h2_style": ["bdi_intro_h2"]
    },

    "bdi_headerChildren": [
        {
            "createElement": "div",
            "classList": "classHeaderLogo",
            "addClassList": ["logosetHeading"],
            "children": [
                {
                    "createElement": "span",
                    "classList": "class_iconSet",
                    "addClassList": ["psychiatry_style", "psy_iconStyle"],
                    "createText": "psychiatry"
                },
                {
                    "createElement": "h1",
                    "classList": "font_bdiSet_value",
                    "addClassList": ["psychiatry_h1_style"],
                    "createText": "BDI-II Testverfahren"
                }
            ],


        }
    ],

    "bdi_displayView": [
        {
            "createElement": "div",
            "classList": "displayView",
            "children": [
                {
                    "createElement": "div",
                    "classList": "bdi_Box",
                    "addClassList": ["parentBoxIntro"],
                    "content": "bdi_textArea",
                    "propertyContent": { "classList_parent": { "classList": "classList_mainChildren" }, "classList_child": { "classList": "font_bdiSet_value", "addClassList": ["introText_setup"] } },
                    "functionsCall": "createParagraph_textFunction"
                }
            ],
        }
    ],

};

const bdi_intro = [
    {
        "createElement": "header",
        "classList": "bdi_header",
        "children": "bdi_headerChildren"
    },
    {
        "createElement": "div",
        "classList": "leftSide_center_bdi",

    },
    {
        "createElement": "main",
        "classList": "bdi_main_section",
        "children": "bdi_displayView",
    },
    {
        "createElement": "div",
        "classList": "rightSide_center_bdi"
    },
    {
        "createElement": "footer",
        "classList": "footer_section_bdi"
    }
]