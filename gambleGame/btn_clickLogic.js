
const secondaryBtn = 'btnSecondary';
const dot_btn = 'dotBtn';

parentBody.addEventListener('click', (t) => {

    const btnSecondaryEvent = t.target.closest(`.${secondaryBtn}`);
    const targetDotEvent = t.target.closest(`.${dot_btn}`);

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

/*case '0':
                console.log(btnSecondaryEvent);
                

                break;
            case '1':
                console.log(btnSecondaryEvent.classList.contains('dotBtn'));
                if (creatorTextArea.copyCounterObject.t_Index !== Number(btnSecondaryEvent.id)) {
                    creatorTextArea.copyCounterObject.t_Index = Number(btnSecondaryEvent.id);
                    creatorTextArea.counterFunction();
                };
                break;
            case '2':
                console.log(btnSecondaryEvent);
                if (creatorTextArea.copyCounterObject.t_Index !== Number(btnSecondaryEvent.id)) {
                    creatorTextArea.copyCounterObject.t_Index = Number(btnSecondaryEvent.id);
                    creatorTextArea.counterFunction();
                };
                break;
                */