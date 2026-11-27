
// object with all section

const mainData = {

    "card_id": {
        //Joker
        "jokerZero": { "card": "joker", "cardTyp": "specialCard", "attachaments": true },
        "jokerOne": { "card": "joker", "cardTyp": "specialCard", "attachaments": true },
        "jokerTwo": { "card": "joker", "cardTyp": "specialCard", "attachaments": true },
        "jokerThree": { "card": "joker", "cardTyp": "specialCard", "attachaments": true },
        //ace
        "picAce": { "card": "pic", "cardTyp": "ace", "color": "#000", "points": 14, "straightMin": 1 },
        "heartAce": { "card": "heart", "cardTyp": "ace", "color": "#f00", "points": 14 },
        "crossAce": { "card": "cross", "cardTyp": "ace", "color": "#000", "points": 14 },
        "caroAce": { "card": "caro", "cardTyp": "ace", "color": "#f00", "points": 14 },
        //king
        "kingCross": { "card": "cross", "cardTyp": "king", "color": "#000", "points": 13 },
        "heartKing": { "card": "heart", "cardTyp": "king", "color": "#f00", "points": 13 },
        "picKing": { "card": "pic", "cardTyp": "king", "color": "#000", "points": 13 },
        "caroKing": { "card": "caro", "cardTyp": "king", "color": "#f00", "points": 13 },
        // dame
        "heartDame": { "card": "heart", "cardTyp": "dame", "color": "#f00", "points": 12 },
        "crossDame": { "card": "cross", "cardTyp": "dame", "color": "#000", "points": 12 },
        "picDame": { "card": "pic", "cardTyp": "dame", "color": "#000", "points": 12 },
        "caroDame": { "card": "caro", "cardTyp": "dame", "color": "#f00", "points": 12 },
        // jack
        "picJack": { "card": "pic", "cardTyp": "jack", "color": "#000", "points": 11 },
        "caroJack": { "card": "caro", "cardTyp": "jack", "color": "#f00", "points": 11 },
        "heartJack": { "card": "heart", "cardTyp": "jack", "color": "#f00", "points": 11 },
        "crossJack": { "card": "cross", "cardTyp": "jack", "color": "#000", "points": 11 },
        // ten
        "heartTen": { "card": "heart", "cardTyp": "ten", "color": "#f00", "points": 10 },
        "picTen": { "card": "pic", "cardTyp": "ten", "color": "#000", "points": 10 },
        "crossTen": { "card": "cross", "cardTyp": "ten", "color": "#000", "points": 10 },
        "caroTen": { "card": "caro", "cardTyp": "ten", "color": "#f00", "points": 10 },
        // nine
        "caroNine": { "card": "caro", "cardTyp": "nine", "color": "#f00", "points": 9 },
        "picNine": { "card": "pic", "cardTyp": "nine", "color": "#000", "points": 9 },
        "heartNine": { "card": "heart", "cardTyp": "nine", "color": "#f00", "points": 9 },
        "crossNine": { "card": "cross", "cardTyp": "nine", "color": "#000", "points": 9 },
        // eight 
        "caroEight": { "card": "caro", "cardTyp": "eight", "color": "#f00", "points": 8 },
        "picEight": { "card": "pic", "cardTyp": "eight", "color": "#000", "points": 8 },
        "crossEight": { "card": "cross", "cardTyp": "eight", "color": "#000", "points": 8 },
        "heartEight": { "card": "heart", "cardTyp": "eight", "color": "#f00", "points": 8 },
        // seven
        "crossSeven": { "card": "cross", "cardTyp": "seven", "color": "#000", "points": 7 },
        "caroSeven": { "card": "caro", "cardTyp": "seven", "color": "#f00", "points": 7 },
        "picSeven": { "card": "pic", "cardTyp": "seven", "color": "#000", "points": 7 },
        "heartSeven": { "card": "heart", "cardTyp": "seven", "color": "#f00", "points": 7 },
        // six
        "heartSix": { "card": "heart", "cardTyp": "six", "color": "#f00", "points": 6 },
        "caroSix": { "card": "caro", "cardTyp": "six", "color": "#f00", "points": 6 },
        "crossSix": { "card": "cross", "cardTyp": "six", "color": "#000", "points": 6 },
        "picSix": { "card": "pic", "cardTyp": "six", "color": "#000", "points": 6 },
        // five
        "crossFive": { "card": "cross", "cardTyp": "five", "color": "#000", "points": 5 },
        "picFive": { "card": "pic", "cardTyp": "five", "color": "#000", "points": 5 },
        "heartFive": { "card": "heart", "cardTyp": "five", "color": "#f00", "points": 5 },
        "caroFive": { "card": "caro", "cardTyp": "five", "color": "#f00", "points": 5 },
        // four
        "crossFour": { "card": "cross", "cardTyp": "four", "color": "#000", "points": 4 },
        "heartFour": { "card": "heart", "cardTyp": "four", "color": "#f00", "points": 4 },
        "picFour": { "card": "pic", "cardTyp": "four", "color": "#000", "points": 4 },
        "caroFour": { "card": "caro", "cardTyp": "four", "color": "#f00", "points": 4 },
        // three
        "heartThree": { "card": "heart", "cardTyp": "three", "color": "#f00", "points": 3 },
        "picThree": { "card": "pic", "cardTyp": "three", "color": "#000", "points": 3 },
        "crossThree": { "card": "cross", "cardTyp": "three", "color": "#000", "points": 3 },
        "caroThree": { "card": "caro", "cardTyp": "three", "color": "#f00", "points": 3 },
        // two
        "caroTwo": { "card": "caro", "cardTyp": "two", "color": "#f00", "points": 2 },
        "picTwo": { "card": "pic", "cardTyp": "two", "color": "#000", "points": 2 },
        "crossTwo": { "card": "cross", "cardTyp": "two", "color": "#000", "points": 2 },
        "heartTwo": { "card": "heart", "cardTyp": "two", "color": "#f00", "points": 2 }
    },

    "pokerSet": {

        "rollerZero": [
            { "srcObject": "game_img/poker_cards/caroTwo.png", "id_code": "caroTwo", "alt_text": "Karo Zwei", "classList": ["flex_row", "browserPokerCard", "mobilPokerCard"], "addClassList": ["pokerCardStyle"] }, // 0 = 1 ... caroTwo
            { "srcObject": "game_img/poker_cards/acePic.png", "id_code": "picAce", "alt_text": "Pik Ass", "classList": ["flex_row", "browserPokerCard", "mobilPokerCard"], "addClassList": ["pokerCardStyle"] }, // 1 = 2 ... picAce
            { "srcObject": "game_img/poker_cards/heartFour.png", "id_code": "heartFour", "alt_text": "Herz Drei", "classList": ["flex_row", "browserPokerCard", "mobilPokerCard"], "addClassList": ["pokerCardStyle"] }, //2 = 3 ... heartFour
            { "srcObject": "game_img/poker_cards/crossFive.png", "id_code": "crossFive", "alt_text": "Kreuz Fuenf", "classList": ["flex_row", "browserPokerCard", "mobilPokerCard"], "addClassList": ["pokerCardStyle"] }, // 3 = 4 ... crossFive
            { "srcObject": "game_img/poker_cards/caroSix.png", "id_code": "caroSix", "alt_text": "Karo Sechs", "classList": ["flex_row", "browserPokerCard", "mobilPokerCard"], "addClassList": ["pokerCardStyle"] }, // 4 = 5 ... caroSix
            { "srcObject": "game_img/poker_cards/joker.png", "id_code": "jokerZero", "alt_text": "Jocker", "classList": ["flex_row", "browserPokerCard", "mobilPokerCard"], "addClassList": ["pokerCardStyle"] }, // 5 = 6 ... joker
            { "srcObject": "game_img/poker_cards/heartEight.png", "id_code": "heartEight", "alt_text": "Herz Acht", "classList": ["flex_row", "browserPokerCard", "mobilPokerCard"], "addClassList": ["pokerCardStyle"] }, // 6 = 7 ... heartEight
            { "srcObject": "game_img/poker_cards/crossNine.png", "id_code": "crossNine", "alt_text": "Kreuz Neun", "classList": ["flex_row", "browserPokerCard", "mobilPokerCard"], "addClassList": ["pokerCardStyle"] }, // crossNine
            { "srcObject": "game_img/poker_cards/caroTen.png", "id_code": "caroTen", "alt_text": "Karo Zehn", "classList": ["flex_row", "browserPokerCard", "mobilPokerCard"], "addClassList": ["pokerCardStyle"] }, // caro 10
            { "srcObject": null }, // emptyContainer
            { "srcObject": "game_img/poker_cards/heart_dame.png", "id_code": "heartDame", "alt_text": "Herz Dame", "classList": ["flex_row", "browserPokerCard", "mobilPokerCard"], "addClassList": ["pokerCardStyle"] }, // heartDame
            { "srcObject": "game_img/poker_cards/crossKing.png", "id_code": "kingCross", "alt_text": "Kreuz Koenig", "classList": ["flex_row", "browserPokerCard", "mobilPokerCard"], "addClassList": ["pokerCardStyle"] } // kingCross       
        ],

        "rollerOne": [
            { "srcObject": "game_img/poker_cards/picTwo.png", "id_code": "picTwo", "alt_text": "Pik Zwei", "classList": [""], "addClassList": [""] }, // picTwo
            { "srcObject": "game_img/poker_cards/heartThree.png", "id_code": "heartThree", "alt_text": "Herz Drei", "classList": [""], "addClassList": [""] }, // heartThree
            { "srcObject": "gambleGame/game_img/poker_cards/crossAce.png", "id_code": "crossAce", "alt_text": "Kreuz Ass", "classList": [""], "addClassList": [""] }, // crossAce
            { "srcObject": "game_img/poker_cards/caroFive.png", "id_code": "caroFive", "alt_text": "Karo Fuenf", "classList": [""], "addClassList": [""] }, // caroFive
            { "srcObject": "game_img/poker_cards/picSix.png", "id_code": "picSix", "alt_text": "Pik Sechs", "classList": [""], "addClassList": [""] }, // picSix
            { "srcObject": "game_img/poker_cards/heartSeven.png", "id_code": "heartSeven", "alt_text": "Herz Sieben", "classList": [""], "addClassList": [""] }, // heartSeven
            { "srcObject": "game_img/poker_cards/joker.png", "id_code": "jokerOne", "alt_text": "Jocker", "classList": [""], "addClassList": [""] }, // jocker
            { "srcObject": "game_img/poker_cards/caroNine.png", "id_code": "caroNine", "alt_text": "karo Neun", "classList": [""], "addClassList": [""] }, // karoNine
            { "srcObject": "game_img/poker_cards/picTen.png", "id_code": "picTen", "alt_text": "Pic Zehn", "classList": [""], "addClassList": [""] }, // picTen
            { "srcObject": "game_img/poker_cards/jack_heart_card.png", "id_code": "heartJack", "alt_text": "HerzBube", "classList": [""], "addClassList": [""] }, //jackHeart
            { "emptyCont": null }, // emptyContainer
            { "srcObject": "game_img/poker_cards/caroKIng.png", "id_code": "caroKing", "alt_text": "Karo Koenig", "classList": [""], "addClassList": [""] } // picTen
        ],

        "rollerTwo": [
            { "srcObject": "game_img/poker_cards/heartTwo.png", "id_code": "heartTwo", "alt_text": "Herz Zwei", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/crossThree.png", "id_code": "crossThree", "alt_text": "Kreuz Drei", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/caroFour.png", "id_code": "caroFour", "alt_text": "Karo Vier", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/picFive.png", "id_code": "picFive", "alt_text": "Pik Fuenf", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/heartSix.png", "id_code": "heartSix", "alt_text": "Herz Sechs", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/crossSeven.png", "id_code": "crossSeven", "alt_text": "Kreuz Sieben", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/caroEight.png", "id_code": "caroEight", "alt_text": "Karo Acht", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/picNine.png", "id_code": "picNine", "alt_text": "Pik Neun", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/heartTen.png", "id_code": "heartTen", "alt_text": "Herz zehn", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/crossJack.png", "id_code": "crossJack", "alt_text": "Kreuz Bube", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/caro_Dame.png", "id_code": "caroDame", "alt_text": "Karo Dame", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/picKing.png", "id_code": "picKing", "alt_text": "Pik Koenig", "classList": [""], "addClassList": [""] }
        ],
        "rollerThree": [
            { "srcObject": "game_img/poker_cards/krossTwo.png", "id_code": "crossTwo", "alt_text": "Kreuz Zwei", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/caroThree.png", "id_code": "caroThree", "alt_text": "Karo Drei", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/picFour.png", "id_code": "picFour", "alt_text": "Pik Vier", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/heartAce.png", "id_code": "heartAce", "alt_text": "Herz Ass", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/crossSix.png", "id_code": "crossSix", "alt_text": "Kreuz Sechs", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/caroSeven.png", "id_code": "caroSeven", "alt_text": "Karo Sieben", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/picEight.png", "id_code": "picEight", "alt_text": "Pik Acht", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/joker.png", "id_code": "jokerTwo", "alt_text": "Joker", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/crossTen.png", "id_code": "crossTen", "alt_text": "Kreuz Zehn", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/caroJack.png", "id_code": "caroJack", "alt_text": "Karo Bube", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/pik_dame_final.png", "id_code": "picDame", "alt_text": "Pik Dame", "classList": [""], "addClassList": [""] },
            { "emptyCont": null }
        ],


        "rollerFour": [
            { "srcObject": "game_img/poker_cards/caroAce.png", "id_code": "caroAce", "alt_text": "Karo Ass", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/picThree.png", "id_code": "picThree", "alt_text": "Pik Drei", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/crossFour.png", "id_code": "crossFour", "alt_text": "Kreuz Vier", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/heartFive.png", "id_code": "heartFive", "alt_text": "Herz Fuenf", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/joker.png", "id_code": "jokerThree", "alt_text": "Joker", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/picSeven.png", "id_code": "picSeven", "alt_text": "Pik Sieben", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/crossEight.png", "id_code": "crossEight", "alt_text": "Kreuz Acht", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/heartNine.png", "id_code": "heartNine", "alt_text": "Herz Neun", "classList": [""], "addClassList": [""] },
            { "emptyCont": null },
            { "srcObject": "game_img/poker_cards/jack_pik.png", "id_code": "picJack", "alt_text": "Pik Bube", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/crossDame.png", "id_code": "crossDame", "alt_text": "Kreuz Dame", "classList": [""], "addClassList": [""] },
            { "srcObject": "game_img/poker_cards/heart_king.png", "id_code": "heartKing", "alt_text": "Herz Koenig", "classList": [""], "addClassList": [""] }
        ]
    },

    "pokerChildFramework": [
        {
            "display_id": "pokerMain",
            "classList": ["flex_column", "pokerLumberContainer_browser", "pokerLumberContainer_mobil"],
            "id_code": "lumber",
            "gameLumber": [
                { "roll": "rollerZero" },
                { "roll": "rollerOne" },
                { "roll": "rollerTwo" },
                { "roll": "rollerThree" },
                { "roll": "rollerFour" },
            ]
        }
    ],

    // für spater die doppelten id's beheben sowie eine function schreiben die mir die Karten img einfügt, so muss ich nur die classList einfügen, bei den poker karte jokerFour habe ich in jokerThree umgeändert. 
    // wenn das steht kommen die Spiellogik zum gelten hier habe ich grob einen aufbau im kopf. guthaben: 20, standart einsatz: 1, manuell einsatz: 0, sowie Joker dann booleans fuer gameOver die kann ich aber an einer controll function setzten der das guthaben überwacht bei jeden zug. oder nach der gewinn auswertung.

    "pokerDomFramework": [
        {
            "createElement": "div",
            "classList": ["grid", "browserPokerDisplaySection", "mobilPokerDisplaySection"],
            "addClassList": ["pokerSettings"],
            "id_code": "pokerDisplayContainer",
            "children": [
                {
                    "createElement": "header",
                    "classList": ["flex_row", "browserPokerHeader", "mobilPokerHeader"],
                    "addClassList": ["poker_headerStyle"],
                    "id_code": "pokerHeader",
                    "children": [
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "headingParentText_browser", "headingParentText_mobil"],
                            "addClassList": ["centerBox"],
                            "id_code": "headingText_parent",
                            "children": [
                                {
                                    "createElement": "h2",
                                    "classList": ["block", "ewert-regular", "ewert_defaultSize"],
                                    "addClassList": ["gamePoker_headingText_browser", "gamePoker_headingText_mobil"],
                                    "id_code": "mainPokerHeading",
                                    "createText": "Poker Fire Explode"
                                }
                            ]
                        }
                    ]
                },
                {
                    "createElement": "div",
                    "classList": ["flex_row", "gameCounterPoker_browser", "gameCounterPoker_mobil"],
                    "addClassList": ["counterContainer"],
                    "id_code": "counterPoker",
                    "children": [
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "counterMoneyBrowser_box", "counterMoneyMobil_box"],
                            "addClassList": ["counterMoneySett"],
                            "children": [
                                {
                                    "createElement": "span",
                                    "classList": ["flex_row", "play-regular", "ewert_defaultSize"],
                                    "addClassList": ["textTotal"],
                                    "id_code": "textDeposit",
                                    "createText": "Guthaben:"
                                },
                                {
                                    "createElement": "div",
                                    "classList": ["flex_row", "counterMoney", "counterMoneyMobil"],
                                    "id_code": "moneyTotal",
                                    "children": [
                                        {
                                            "createElement": "span",
                                            "classList": ["flex_row", "play-regular", "ewert_defaultSize"],
                                            "addClassList": ["textTotal"],
                                            "id_code": "totalMoney",
                                            "createText": "00.00" // platzhalter
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "counterMoneyBrowser_box", "counterMoneyMobil_box"],
                            "addClassList": ["counterRaseSett"],
                            "children": [
                                {
                                    "createElement": "span",
                                    "classList": ["flex_row", "play-regular", "ewert_defaultSize"],
                                    "addClassList": ["textTotal"],
                                    "id_code": "textStake",
                                    "createText": "Einsatz:"
                                },
                                {
                                    "createElement": "div",
                                    "classList": ["flex_row", "counterMoney", "counterMoneyMobil"],
                                    "id_code": "output_moneyStake",
                                    "children": [
                                        {
                                            "createElement": "span",
                                            "classList": ["flex_row", "play-regular", "ewert_defaultSize"],
                                            "addClassList": ["textTotal"],
                                            "id_code": "moneyStake",
                                            "createText": "00.50"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "counterMoneyBrowser_box", "counterMoneyMobil_box"],
                            "addClassList": ["counterRaseSett"],
                            "children": [
                                {
                                    "createElement": "span",
                                    "classList": ["flex_row", "play-regular", "ewert_defaultSize"],
                                    "addClassList": ["textTotal"],
                                    "id_code": "textJoker",
                                    "createText": "Joker:"
                                },
                                {
                                    "createElement": "div",
                                    "classList": ["flex_row", "counterMoney", "counterMoneyMobil"],
                                    "id_code": "jokerSet",
                                    "children": [
                                        {
                                            "createElement": "span",
                                            "classList": ["flex_row", "play-regular", "ewert_defaultSize"],
                                            "addClassList": ["textTotal"],
                                            "id_code": "jokerCounter",
                                            "createText": "0"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "createElement": "main",
                    "classList": ["grid", "browserPokerArea", "mobilPokerArea"],
                    "addClassList": ["pokerMainStyle"],
                    "id_code": "pokerMain",
                    "children": [
                        {
                            "createElement": "div",
                            "classList": ["flex_column", "browserRollSettings", "mobilRollSettings", "rollStyle"],
                            "addClassList": ["addSettings"],
                            "id_code": "roll_zeroBox",
                            "UI_DisplayActive": { "roll": "rollerZero", "libraryName": "pokerSet", "functionPokerEvent": "rollSettFunction", "rollActiveBoolean": "true" },
                            "functionName": "pokerUI_function",
                            "functionEvent": "checkInputFunction"
                        },
                        {
                            "createElement": "div",
                            "classList": ["flex_column", "browserRollSettings", "mobilRollSettings", "rollStyle"],
                            "addClassList": ["addSettings"],
                            "id_code": "roll_OneBox",
                        },
                        {
                            "createElement": "div",
                            "classList": ["flex_column", "browserRollSettings", "mobilRollSettings", "rollStyle"],
                            "addClassList": ["addSettings"],
                            "id_code": "roll_TwoBox",
                        },
                        {
                            "createElement": "div",
                            "classList": ["flex_column", "browserRollSettings", "mobilRollSettings", "rollStyle"],
                            "addClassList": ["addSettings"],
                            "id_code": "roll_ThreeBox",
                        },
                        {
                            "createElement": "div",
                            "classList": ["flex_column", "browserRollSettings", "mobilRollSettings", "rollStyle"],
                            "addClassList": ["addSettings"],
                            "id_code": "roll_FourBox",
                        }
                    ]

                },
                {
                    "createElement": "footer",
                    "classList": ["flex_column", "browserPoker_footer", "mobilPoker_footer"],
                    "addClassList": ["pokerFooterStyle"],
                    "id_code": "pokerFooter"
                },
            ]
        }
    ],

    "introTextDocuments": [
        {
            "headerContent": {
                "headerText": "Die Idee hinter meinem Poker-Spielautomaten"
            },
            "textArea": {
                "classList": ["flex_row", "default_fontProp", "font_family_game"],
                "addClassList": ["text_p"],
                "textArea": [
                    "Ursprünglich wollte ich mit einem eigenen Projekt meine Chancen auf einen Praktikumsplatz bei Merkur verbessern. Dafür habe ich verschiedene Spielideen durchdacht. vom klassischen Drei-Walzen-Automaten bis hin zu älteren Merkur-Spielautomaten.",
                    "Schließlich entschied ich mich für einen Poker-Spielautomaten mit fünf Walzen. Dabei stellte mich besonders die Verteilung der Spielkarten vor eine Herausforderung. Nicht jede Anordnung ermöglichte die gewünschten Pokerkombinationen.",
                    "Deshalb habe ich ganz klassisch mit Papier gearbeitet, verschiedene Kartenanordnungen ausprobiert und miteinander verglichen. Da ich jede reguläre Spielkarte nur einmal verwenden wollte, musste ich einige Kompromisse eingehen.",
                    "Meine Lösung besteht aus 60 Positionen auf fünf Walzen, einschließlich Jokern und Leerfeldern. Dadurch konnte ich viele der gewünschten Kartenkombinationen berücksichtigen, auch wenn nicht jede Kombination möglich ist.",
                    "Als Nächstes folgen die Gestaltung des Spielfeldes und die CSS-Animationen. Fehlendes Wissen werde ich mir dabei Schritt für Schritt aneignen.",
                    "Mit diesem Projekt möchte ich zeigen, wie ich technische Herausforderungen angehe, selbstständig Lösungswege entwickle, Fehler analysiere und meine bisherigen Lösungen kontinuierlich verbessere."
                ]
            }
        },
        {
            "headerContent": {
                "headerText": "Die Gestaltung der Spielkarten"
            },
            "textArea": {
                "classList": ["flex_row", "default_fontProp", "font_family_game"],
                "addClassList": ["text_p"],
                "textArea": [
                    "Ursprünglich wollte ich für die grafische Darstellung Google Icons verwenden. Diese sahen zwar ansprechend aus, allerdings fehlte mir dabei das typische Poker-Feeling.",
                    "Deshalb entschied ich mich, einzelne Bildelemente mithilfe künstlicher Intelligenz zu generieren und diese anschließend in Pixelmator Pro zu bearbeiten und zusammenzusetzen.",
                    "Für die Gestaltung wählte ich einen Barockstil in Verbindung mit einem Flammenhintergrund. Dieses Design soll an moderne Spielautomaten erinnern und symbolisiert das „Spiel mit dem Feuer“. Jede Kartenkategorie erhielt dabei ihren eigenen Farbstil.",
                    "Meine Stärke liegt darin, eine konkrete Vorstellung vom gewünschten Erscheinungsbild zu entwickeln und diese mit den verfügbaren technischen Möglichkeiten umzusetzen.",
                    "Da ich sämtliche Projektbereiche selbstständig bearbeite, beschäftige ich mich nicht nur mit der Programmierung, sondern auch mit der grafischen Gestaltung und der Bedienung unterschiedlicher Software. Dadurch erweitere ich kontinuierlich meine technischen und gestalterischen Fähigkeiten."
                ]
            }
        },
        {
            "headerContent": {
                "headerText": "Um zu wachsen, muss man sich selbst kritisch hinterfragen"
            },
            "textArea": {
                "classList": ["flex_row", "default_fontProp", "font_family_game"],
                "addClassList": ["text_p"],
                "textArea": [
                    "Seit dem 1. Januar 2025 beschäftige ich mich intensiv mit JavaScript. Mithilfe von Fachliteratur, englischsprachigen Lernplattformen und eigenen Projekten habe ich mir Schritt für Schritt neue Kenntnisse angeeignet.",
                    "Von kleinen Anwendungen entwickelte ich mich zunehmend zu umfangreicheren Projekten weiter. Dabei erarbeitete ich mir unter anderem den Umgang mit Objekten, Destructuring, Array-Methoden, rekursiven Funktionen und der dynamischen DOM-Erzeugung.",
                    "Ich entwickle bewusst mit Vanilla JavaScript und verzichte in diesem Projekt auf zusätzliche Bibliotheken und Frameworks. Mein Ziel ist es, die technischen Zusammenhänge nicht nur anzuwenden, sondern auch grundlegend zu verstehen.",
                    "Dabei hinterfrage ich regelmäßig meine bisherigen Lösungen. Fehler, Rückschläge und Phasen der Stagnation gehören für mich zum Lernprozess. Sie zeigen mir, an welchen Stellen ich mein Wissen vertiefen und meine Arbeitsweise verbessern kann.",
                    "Auch deshalb habe ich mich für die Entwicklung eines Poker-Spielautomaten entschieden. Die Kombination aus Spielmechanik, grafischer Gestaltung, Animation und Softwareentwicklung stellt mich vor unterschiedliche Herausforderungen.",
                    "Für mich steht nicht allein das fertige Ergebnis im Vordergrund, sondern auch die Erfahrung, die ich auf dem Weg dorthin sammle.",
                    "Es ist die Herausforderung, an der man wächst."
                ]
            }
        }
    ],

    "introDomFramework": [
        {
            "createElement": "div",
            "classList": ["grid", "browserDisplaySectionIntro", "mobilDisplaySectionIntro"],
            "addClassList": ["controlIntro"],
            "children": [
                {
                    "createElement": "header",
                    "classList": ["flex_row", "introHeader", "introHeaderBrowser"],
                    "addClassList": ["intro_headerMobil"],
                    "id_code": "introHeader",
                    "children": [
                        {
                            "createElement": "h2",
                            "classList": ["flex_row", "default_fontProp", "font_family_game"],
                            "addClassList": ["introHeading_h2"],
                            "id_code": "heading_ID"
                        }
                    ]
                },
                {
                    "createElement": "article",
                    "classList": ["flex_column", "articleIntro", "articleBrowser"],
                    "addClassList": ["articleMobil"],
                    "id_code": "introArticle"
                },
                {
                    "createElement": "footer",
                    "classList": ["flex_row", "introFooter", "introBrowserFooter"],
                    "addClassList": ["introMobilFooter"],
                    "id_code": "introFooter",
                    "children": [
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "btnBox", "boxStyle"],
                            "addClassList": ["btnBoxZero"],
                            "children": [
                                {
                                    "createElement": "button",
                                    "classList": ["flex_row", "btn", "btnSecondary", "btnSecondStyle"],
                                    "addClassList": ["btn_sub"],
                                    "id_code": "btn_sub",
                                    "children": [
                                        {
                                            "createElement": "span",
                                            "classList": ["flex_row", "btnTextStyle", "material-symbols-outlined"],
                                            "addClassList": ["textZeroBtn"],
                                            "createText": "skip_previous"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "dotBox_setting", "boxStyle"],
                            "addClassList": ["dotBox"]
                        },
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "btnBox", "boxStyle"],
                            "addClassList": ["btnBoxOne"],
                            "children": [
                                {
                                    "createElement": "button",
                                    "classList": ["flex_row", "btn", "btnSecondary", "btnSecondStyle"],
                                    "addClassList": ["btn_Add"],
                                    "id_code": "btnAdd",
                                    "children": [
                                        {
                                            "createElement": "span",
                                            "classList": ["flex_row", "btnTextStyle", "material-symbols-outlined"],
                                            "addClassList": ["textZeroBtn"],
                                            "createText": "skip_next"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "UI_DisplayActive": {
                        "id_code": "introTextDocuments",
                        "displayID": {
                            "displayHeader": "heading_ID",
                            "displayArticle": "introArticle",
                            "display_dotBox": "dotBox"
                        },
                        "indexActive": true,
                        "counterObject": {
                            "articleCopy": null,
                            "t_Index": 0,
                            "intro_length": null,
                            "contentText": null,
                            "displayIDCopy": null,
                            "dotActive": false,
                            "dotBtnActive": null,
                            "headerContent": null,
                            "headerDisplay": null,
                            "articleTag": null,
                            "dotTag": null
                        }
                    },
                    "booleanValue": { "introSideActive": true },
                    "functionName": "creatorTextArea",
                    "functionEvent": "controlIntroArea"
                }
            ]
        }

    ],

    "bodyMainFramework": [
        {
            "createElement": "header",
            "classList": ["flex_row", "browser_header_sett", "mobil_header_sett", "header_style"],
            "addClassList": ["controlHeader_section_body"],
            "children": [
                {
                    "createElement": "div",
                    "classList": ["flex_column", "headingBox_browser", "mobil_header_sett", "headingBox_style"],
                    "addClassList": ["div_h_zero"],
                    "children": [
                        {
                            "createElement": "h1",
                            "classList": ["display_block", "default_fontProp", "font_family_game"],
                            "addClassList": ["h1_headerStyle"],
                            "createText": "Casino Games"
                        },
                        {
                            "createElement": "span",
                            "classList": ["display_block", "font_family_game"],
                            "addClassList": ["headerTextStyle"],
                            "createText": "Gambling machine",
                        }
                    ]
                },
                {
                    "createElement": "div",
                    "classList": ["flex_column", "headingBox_browser", "mobil_header_sett", "headingBox_style"],
                    "addClassList": ["div_h_one"],
                    "children": [
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "iconBox", "iconBoxStyle"],
                            "addClassList": ["iconListZero"],
                            "children": [
                                {
                                    "createElement": "span",
                                    "classList": ["display_block", "material-symbols-outlined", "logoHeader"],
                                    "addClassList": ["logoZero"],
                                    "createText": "Casino playing_cards"
                                },
                                {
                                    "createElement": "span",
                                    "classList": ["display_block", "material-symbols-outlined", "logoHeader"],
                                    "addClassList": ["logoOne"],
                                    "createText": "Casino",
                                }
                            ]
                        },
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "iconBox", "iconBoxStyle"],
                            "addClassList": ["iconListZero"],
                            "children": [
                                {
                                    "createElement": "span",
                                    "classList": ["display_block", "material-symbols-outlined", "logoHeader"],
                                    "addClassList": ["logoZero"],
                                    "createText": "Casino"
                                },
                                {
                                    "createElement": "span",
                                    "classList": ["display_block", "material-symbols-outlined", "logoHeader"],
                                    "addClassList": ["logoOne"],
                                    "createText": "playing_cards Casino"
                                }
                            ]
                        }
                    ]
                }
            ]
        },  //header_parent
        {
            "createElement": "nav",
            "classList": ["flex_row", "nav_browser_sett", "nav_mobil_sett", "nav_style"],
            "addClassList": ["control_nav_body"],
            "children": [
                {
                    "createElement": "button",
                    "classList": ["flex_column", "btn", "primaryBtn", "primaryBtn_style"],
                    "addClassList": ["gameList"],
                    "dataset": "gameStart",
                    "id_code": "pokerDomFramework",
                    "children": [
                        {
                            "createElement": "img",
                            "classList": ["display_block", "pokerChip_navIMG"],
                            "addClassList": ["iconNav"],
                            "srcObject": "game_img/pokerChip.png",
                        },
                        {
                            "createElement": "span",
                            "classList": ["display_block", "font_family_game"],
                            "addClassList": ["gaming_instruction"],
                            "createText": "Poker Automat",
                        }
                    ]
                }
            ]
        },  //nav_parent 
        {
            "createElement": "main",
            "classList": ["grid", "grid_property", "main_sectionBrowserBody", "mobilMainBody", "main_section_bodyStyle"],
            "addClassList": ["control_mainsection"],
            "id_code": "displayMainDom",
            "UI_DisplayActive": { "UI_control": "displayActive", "active": true },
            "functionName": "UI_DISPLAY_area",
            "functionEvent": "UI_controlDisplay"
        },
        {
            "createElement": "footer",
            "classList": ["flex_row", "footer_browser_sett", "footer_mobil_sett", "footer_style"],
            "addClassList": ["footer_Control"],
            "children": [
                {
                    "createElement": "div",
                    "classList": ["flex_row", "btnTextBox", "textBoxStyle"],
                    "addClassList": ["kontakt_section"],
                    "children": [
                        {
                            "createElement": "span",
                            "classList": ["display_block", "font_family_game", "footerText"],
                            "addClassList": ["contactTextStyle"],
                            "createText": "Kontakt"
                        },
                        {
                            "createElement": "span",
                            "classList": ["display_block", "material-symbols-outlined", "footerText"],
                            "addClassList": ["contactTextStyle"],
                            "createText": "contacts_product"
                        }
                    ]
                },
                {
                    "createElement": "div",
                    "classList": ["flex_row", "btnTextBox", "textBoxStyle"],
                    "addClassList": ["contakt_section"],
                    "children": [
                        {
                            "createElement": "span",
                            "classList": ["display_block", "font_family_game", "footerText"],
                            "addClassList": ["contactTextStyle"],
                            "createText": "Impressum"
                        },
                        {
                            "createElement": "span",
                            "classList": ["display_block", "material-symbols-outlined", "footerText"],
                            "addClassList": ["contactTextStyle"],
                            "createText": "format_paragraph"
                        }
                    ]
                }
            ]

        },
        {
            "UI_DisplayActive": { "UI_control": "introSideActive", "active": true, "id_code": "introDomFramework" },
            "functionName": "UI_DISPLAY_area",
            "functionEvent": "UI_toReadout_function"
        }
    ]

};

