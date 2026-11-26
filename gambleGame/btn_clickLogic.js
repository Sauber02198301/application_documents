

const primaryBtn = 'primaryBtn';
const secondaryBtn = 'btnSecondary';
const dot_btn = 'dotBtn';

parentBody.addEventListener('click', (t) => {

    const btnSecondaryEvent = t.target.closest(`.${secondaryBtn}`);
    const btnPrimaryEvent = t.target.closest(`.${primaryBtn}`);
    const targetDotEvent = t.target.closest(`.${dot_btn}`);

    if (btnPrimaryEvent && parentBody.contains(btnPrimaryEvent)) {

        switch (btnPrimaryEvent.dataset.action) {

            case 'gameStart':
                console.log(btnPrimaryEvent);
                const activePoker = {
                    'UI_DisplayActive': {
                        'UI_control': 'pokerGameActive',
                        'active': true,
                        'id_code': String(btnPrimaryEvent.id)
                    },
                    "functionName": "UI_DISPLAY_area",
                    "functionEvent": "UI_toReadout_function"
                };


                UI_DISPLAY_area.btnInputEvaluation(Array(activePoker));
                break;
            default: break;
        };
    };

    if (btnSecondaryEvent && parentBody.contains(btnSecondaryEvent)) {

        switch (btnSecondaryEvent.id) {

            case 'btnAdd':

                creatorTextArea.copyCounterObject.t_Index++;
                if (creatorTextArea.copyCounterObject.t_Index <= creatorTextArea.copyCounterObject.intro_length - 1) {

                    creatorTextArea.counterFunction();
                } else {

                    creatorTextArea.copyCounterObject.t_Index = 0;
                    creatorTextArea.counterFunction();
                };

                break;

            case 'btn_sub':

                creatorTextArea.copyCounterObject.t_Index--;
                if (creatorTextArea.copyCounterObject.t_Index < 0) {
                    creatorTextArea.copyCounterObject.t_Index = creatorTextArea.copyCounterObject.intro_length - 1;
                    //creatorTextArea.counterFunction();
                } else {

                };
                creatorTextArea.counterFunction();
                break;

            default: break;
        };
    };

    if (targetDotEvent && parentBody.contains(targetDotEvent)) {

        if (creatorTextArea.copyCounterObject.t_Index !== Number(targetDotEvent.id)) {
            console.log(targetDotEvent);
            creatorTextArea.copyCounterObject.t_Index = Number(targetDotEvent.id);
            creatorTextArea.counterFunction();
        };
    };
});

