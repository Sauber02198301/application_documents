const gambleMachine = {
    "gameGambleMachine": true,

    "gambleFramework": [
        {
            "createElement": "div",
            "classList": ["grid", "gridGambleProperty", "gambleStyle"],
            "addClassList": ["gambleControl"],
            "id_name": "gambleId_system",
            "children": [
                {
                    "createElement": "header",
                    "classList": ["flex_column", "gamingHeader", "gamingHeaderStyle"],
                    "addClassList": ["score_dispalyArea"],
                    "children": [
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "displayZone", "displayZoneStyle"],
                            "addClassList": ["gameHeading"],
                            "children": [
                                {
                                    "createElement": "h2",
                                    "classList": ["display_block", "font_family_game"],
                                    "addClassList": ["headingGameTxt"],
                                    "createText": "Wie nenne ich das Spiel??"
                                }
                            ]
                        },
                        {
                            "createElement": "div",
                            "classList": ["flex_row", "displayZone", "displayZoneStyle"],
                            "addClassList": ["score"],
                            "children": [
                                {
                                    "createElement": "div",
                                    "classList": ["flex_row", "displayScoreZone"],
                                    "addClassList": ["scoreZone"],
                                    "children": [
                                        {
                                            "createElement": "h3",
                                            "classList": ["display_block", "font_family_game", "headingGameTxt"],
                                            "addClassList": ["paymentText"],
                                            "id_name": "euro",
                                            "createText": "Guthaben:"
                                        },
                                        {
                                            "createElement": "h3",
                                            "classList": ["display_block", "font_family_game", "headingGameTxt"],
                                            "addClassList": ["bigNumber"],
                                            "id_name": "euro",
                                            "createText": "10"
                                        },
                                        {
                                            "createElement": "h3",
                                            "classList": ["display_block", "font_family_game", "headingGameTxt"],
                                            "addClassList": ["pointFont"],
                                            "createText": "."
                                        },
                                        {
                                            "createElement": "h3",
                                            "classList": ["display_block", "font_family_game", "headingGameTxt"],
                                            "addClassList": ["smallNumber"],
                                            "id_name": "cent",
                                            "createText": "00"
                                        },
                                        {
                                            "createElement": "h3",
                                            "classList": ["display_block", "font_family_game", "headingGameTxt"],
                                            "addClassList": ["euroText"],
                                            "createText": "Euro"
                                        }
                                    ]
                                },
                                {
                                    "createElement": "div",
                                    "classList": ["flex_row", "displayScoreZone"],
                                    "addClassList": ["freeGameScore"],
                                    "children": [
                                        {
                                            "createElement": "h3",
                                            "classList": ["display_block", "font_family_game", "headingGameTxt"],
                                            "addClassList": ["textFreeGame"],
                                            "createText": "Freispiel:"
                                        },
                                        {
                                            "createElement": "h3",
                                            "classList": ["display_block", "font_family_game", "headingGameTxt"],
                                            "addClassList": ["freeGame_score"],
                                            "id_name": "freeGame",
                                            "createText": "0"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

const pokerSet = {
    // das mache ich nochmal wenn ich die karten mal ausgelegt habe dann kann ich besser abschatzen wegen den walzen
    "rollerZero": [
        {
            "srcObject": "game_img/poker_cards/jack_pik.png",           // jackPic
            "id_code": "picJack",
            "alt_text": "pic Bube",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "game_img/poker_cards/heart_dame.png",         // DameHeart
            "id_code": "heartDame",
            "alt_text": "Herz Dame",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "game_img/poker_cards/crossFive.png",          // crossFive
            "id_code": "crossFive",
            "alt_text": "Kreuz Fuenf",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "game_img/poker_cards/caroNine.png",           // caroNine
            "id_code": "caroNine",
            "alt_text": "Karo Neun",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "game_img/poker_cards/acePic.png",             // acePic
            "id_code": "picAce",
            "alt_text": "Ass Pik",
            "classList": [""],
            "addClassList": [""]
        },

        {
            "srcObject": "game_img/poker_cards/heartTen.png",           // heartThree
            "id_code": "heartTen",
            "alt_text": "Herz Zehn",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "game_img/poker_cards/crossKing.png",
            "id_code": "crossKing",
            "alt_text": "",
            "classList": [""],
            "addClassList": [""]
        }
    ],
    //Rolle 2
    "rollerOne": [
        {
            "srcObject": "game_img/poker_cards/crossDame.png",
            "id_code": "crossDame",
            "alt_text": "Kreuz Dame",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "",
            "id_code": "",
            "alt_text": "",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "game_img/poker_cards/heart_king.png",
            "id_code": "heartKing",
            "alt_text": "Herz Koenig",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "",
            "id_code": "",
            "alt_text": "",
            "classList": [""],
            "addClassList": [""]
        }
    ],
    "rollerTwo": [
        {
            "srcObject": "game_img/poker_cards/caro_Dame.png",
            "id_code": "caroDame",
            "alt_text": "Karo Dame",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "",
            "id_code": "",
            "alt_text": "",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "",
            "id_code": "",
            "alt_text": "",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "",
            "id_code": "",
            "alt_text": "",
            "classList": [""],
            "addClassList": [""]
        }
    ],
    "rollerThree": [
        {
            "srcObject": "game_img/poker_cards/pik_dame_final.png",
            "id_code": "picDame",
            "alt_text": "Pik Dame",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "",
            "id_code": "",
            "alt_text": "",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "",
            "id_code": "",
            "alt_text": "",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "",
            "id_code": "",
            "alt_text": "",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "",
            "id_code": "",
            "alt_text": "",
            "classList": [""],
            "addClassList": [""]
        }
    ],
    "rollerFour": [
        {
            "srcObject": "",
            "id_code": "",
            "alt_text": "",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "",
            "id_code": "",
            "alt_text": "",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "",
            "id_code": "",
            "alt_text": "",
            "classList": [""],
            "addClassList": [""]
        },
        {
            "srcObject": "",
            "id_code": "",
            "alt_text": "",
            "classList": [""],
            "addClassList": [""]
        }
    ]

};

const cardID = {
    //ace
    "picAce": { "card": "pic", "cardTyp": "ace", "color": "#000", "points": 14, "straightMin": 1 },  // straightMin muss an der WalzeZero geknüpft werden und dann nur als strasse wenn das ass als erstes ist ansonsten 14 hoehste karte
    "heartAce": { "card": "heart", "cardTyp": "ace", "color": "#f00", "points": 14 },
    "crossAce": { "card": "cross", "cardTyp": "ace", "color": "#000", "points": 14 },
    "caroAce": { "card": "caro", "cardTyp": "ace", "color": "#f00", "points": 14 },
    //king
    "crossKing": { "card": "cross", "cardTyp": "king", "color": "#000", "points": 13 },
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
    "heartTwo": { "card": "heart", "cardTyp": "two", "color": "#f00", "points": 2 },
    // notiz den hexaCode fuer black #000000 & #f00 verwenden
};