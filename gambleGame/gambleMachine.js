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

    "rollerZero": [
        { "srcObject": "game_img/poker_cards/caroTwo.png", "id_code": "caroTwo", "alt_text": "Karo Zwei", "classList": [""], "addClassList": [""] }, // 0 = 1 ... caroTwo
        { "srcObject": "game_img/poker_cards/acePic.png", "id_code": "picAce", "alt_text": "Pik Ass", "classList": [""], "addClassList": [""] }, // 1 = 2 ... picAce
        { "srcObject": "game_img/poker_cards/heartFour.png", "id_code": "heartFour", "alt_text": "Herz Drei", "classList": [""], "addClassList": [""] }, //2 = 3 ... heartFour
        { "srcObject": "game_img/poker_cards/crossFive.png", "id_code": "crossFive", "alt_text": "Kreuz Fuenf", "classList": [""], "addClassList": [""] }, // 3 = 4 ... crossFive
        { "srcObject": "game_img/poker_cards/caroSix.png", "id_code": "caroSix", "alt_text": "Karo Sechs", "classList": [""], "addClassList": [""] }, // 4 = 5 ... caroSix
        { "srcObject": "game_img/poker_cards/joker.png", "id_code": "jokerZero", "alt_text": "Jocker", "classList": [""], "addClassList": [""] }, // 5 = 6 ... joker
        { "srcObject": "game_img/poker_cards/heartEight.png", "id_code": "heartEight", "alt_text": "Herz Acht", "classList": [""], "addClassList": [""] }, // 6 = 7 ... heartEight
        { "srcObject": "game_img/poker_cards/crossNine.png", "id_code": "crossNine", "alt_text": "Kreuz Neun", "classList": [""], "addClassList": [""] }, // crossNine
        { "srcObject": "game_img/poker_cards/caroTen.png", "id_code": "caroTen", "alt_text": "Karo Zehn", "classList": [""], "addClassList": [""] }, // caro 10
        { "emptyCont": null }, // emptyContainer
        { "srcObject": "game_img/poker_cards/heart_dame.png", "id_code": "heartDame", "alt_text": "Herz Dame", "classList": [""], "addClassList": [""] }, // heartDame
        { "srcObject": "game_img/poker_cards/crossKing.png", "id_code": "kingCross", "alt_text": "Kreuz Koenig", "classList": [""], "addClassList": [""] } // kingCross       
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
        { "emptyCont": null  }
    ],


    "rollerFour": [
        { "srcObject": "game_img/poker_cards/caroAce.png", "id_code": "caroAce", "alt_text": "Karo Ass", "classList": [""], "addClassList": [""] },
        { "srcObject": "game_img/poker_cards/picThree.png", "id_code": "picThree", "alt_text": "Pik Drei", "classList": [""], "addClassList": [""] },
        { "srcObject": "game_img/poker_cards/crossFour.png", "id_code": "crossFour", "alt_text": "Kreuz Vier", "classList": [""], "addClassList": [""] },
        { "srcObject": "game_img/poker_cards/heartFive.png", "id_code": "heartFive", "alt_text": "Herz Fuenf", "classList": [""], "addClassList": [""] },
        { "srcObject": "game_img/poker_cards/joker.png", "id_code": "jokerFour", "alt_text": "Joker", "classList": [""], "addClassList": [""] },
        { "srcObject": "game_img/poker_cards/picSeven.png", "id_code": "picSeven", "alt_text": "Pik Sieben", "classList": [""], "addClassList": [""] },
        { "srcObject": "game_img/poker_cards/crossEight.png", "id_code": "crossEight", "alt_text": "Kreuz Acht", "classList": [""], "addClassList": [""] },
        { "srcObject": "game_img/poker_cards/heartNine.png", "id_code": "heartNine", "alt_text": "Herz Neun", "classList": [""], "addClassList": [""] },
        { "emptyCont": null },
        { "srcObject": "game_img/poker_cards/jack_pik.png", "id_code": "picJack", "alt_text": "Pik Bube", "classList": [""], "addClassList": [""] },
        { "srcObject": "game_img/poker_cards/crossDame.png", "id_code": "crossDame", "alt_text": "Kreuz Dame", "classList": [""], "addClassList": [""] },
        { "srcObject": "game_img/poker_cards/heart_king.png", "id_code": "heartKing", "alt_text": "Herz Koenig", "classList": [""], "addClassList": [""] }
    ]

};

const cardID = {
    //Joker
    "jokerZero": {"card": "joker", "cardTyp": "specialCard", "attachaments": true},
    "jokerOne": {"card": "joker", "cardTyp": "specialCard", "attachaments": true},
    "jokerTwo": {"card": "joker", "cardTyp": "specialCard", "attachaments": true},
    "jokerThree": {"card": "joker", "cardTyp": "specialCard", "attachaments": true},
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
};