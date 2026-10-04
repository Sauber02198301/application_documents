
// the mainDOM content body_section

const body_section = document.querySelector('.body_section');

const btn_primaryClass = 'btn_primary';
const btn_secondaryClass = 'secondaryBtn';

body_section.addEventListener('click', (t) => {
    console.log(t);
    const btn_primaryClick = t.target.closest(`.${btn_primaryClass}`);
    const btn_secondaryClick = t.target.closest(`.${btn_secondaryClass}`);

    if (btn_primaryClick && body_section.contains(btn_primaryClick)) {

        switch (btn_primaryClick.dataset.action) {

            case 'openNav':
                console.log(btn_primaryClick);
                const dropDown_nav = document.querySelector('.dropDown_nav');
                const activeDropDown = btn_primaryClick.dataset.action;

                if (!dropDown_nav.classList.contains(`${activeDropDown}`)) {
                    dropDown_nav.classList.add(activeDropDown);
                } else {
                    dropDown_nav.classList.remove(activeDropDown);
                };

                break;

            default: break;
        };

    };

    if (btn_secondaryClick && body_section.contains(btn_secondaryClick)) {
        console.log(btn_secondaryClick);
        switch (btn_secondaryClick.dataset.action) {
            case 'imgBoxSetting':

                const imgSlideBox = document.querySelector('.imgBox');
                const active = btn_secondaryClick.dataset.action;
                console.log(imgSlideBox.classList.contains(`${active}`));
                if (!imgSlideBox.classList.contains(`${active}`)) {
                    imgSlideBox.classList.add(active);
                } else {
                    imgSlideBox.classList.remove(active);
                };

                break;


            default: break;
        };



        console.log(btn_secondaryClick.classList.length);
        let content = btn_secondaryClick.nextElementSibling;

        /*
            Die Animation laeuft von den kinder elementen noch nicht so rund. es slidet auf und 
            aber erst nur halb und der rest plopt dann auf.  
        
        */


        if (content.style.maxHeight && content.style.maxHeight !== '0px') {
            content.style.maxHeight = content.scrollHeight = 'px';

            requestAnimationFrame(() => {
                content.style.maxHeight = null;
            });

        } else {

            content.style.maxHeight = content.scrollHeight + 'px';

            setTimeout(() => {
                if (content.style.maxHeight) {
                    content.style.maxHeight = 'none';
                };
            }, 800);
        };






        /*

        Dies ist nicht so gut gelaufen hier wird immer nur 0 angezeigt was bedeutet das er immer den gleichen Btn zählt wobei es zwei gibt
        ich notiere mir das mal und versuche es auseinander zu nehmen stueck fuer stueck

        1. Frage ich ab ob du der collapsibleBtn bist weil ich eigentlich mit dataset.action arbeite!

        if (btn_secondaryClick.classList.contains('collapsibleBtn')) {

        hier zeigt er auch an ja es gibt mich wenn ich beide collabsibleBtn anklicke geht dies auch. 

            console.log(btn_secondaryClick.classList.length);

            hier checke ich einmal die laenge aber weil er vier classNames besitzt zeigt er mir auch immer vier an. 
            Dann vergebe ich nochmal den namen der classe um den btn zu separieren dies macht er auch 
            const collBtn = document.getElementsByClassName('.collapsibleBtn');

            hier zeigt er mir die laenge 0 an und wenn ich den 2 / index 1 druecke auch 0 also weis er nicht das es zwei gibt. 
            console.log(collBtn.length)
            for (let i = 0; i < collBtn.length; i++ ) {
            Hier kann er auch nicht zaehlen wie denn auch i ist = 0 collBtn.length ist auch = 0 also sind beide gleich 
                console.log(collBtn[i]);

                Wo liegt das Problem?!

                erste vermutung weil ich innerhalb eines eventlistener arbeite sieht er immer nur einen btn das heist egal wenn ich druecke bleibt es einer weil der andere ja noch fuer 
                target nicht exestiert. Dies bedeutet im umkehrschluss ich muss hier mit einen eigenstaendiges 'click' system erstellen was immer sichtbar ist so wird er auch den anderen btn sehen.

                2 moeglichkeit waere das ich ohne einen addEventListener hier arbeite weil ich ja oben scon einen benutze. aber das bringt mich auf den nachsten punkt die variable const collBtn = document.getElementsByClassName('.collapsibleBtn');
                ausserhalb des eventListener legen das macht sie auch sichtbar weil ich den scope bereich dribel der scope bereich ist mein feind hier koennte man auch mit var arbeiten weil dies ist keine global variable und es macht es fuer die seite sichtbar 
                wobei ich sie persoehnlich mit const ausserhalbsetzen wuerde dies macht sie sichtbar aber auch nicht gleich zu einen problem wenn man mal vergessen haben sollte das man diesen namen schon vergeben hat in einen anderen bereich.

                Was gut ist an sowas man lernt jeder fehler ist eine erkenntnis und zum analysieren woran hat es gelegen. Und ich wuerde mich auf die sichtbarkeit berufen. Weil der scope von targe und in kombination mit den eventListener 
                probleme bereiten. 

            };
            
        };
        */
    };

});