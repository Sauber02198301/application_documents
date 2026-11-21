
const secondaryBtn = "btnSecondary";

parentBody.addEventListener('click', (t) => {

    const btnSecondaryEvent = t.target.closest(`.${secondaryBtn}`);

    if (btnSecondaryEvent && parentBody.contains(btnSecondaryEvent)) {


        switch (btnSecondaryEvent.id) {

            case 'btnAdd':
                console.log(btnSecondaryEvent);
                break;

            case 'btn_sub':
                console.log(btnSecondaryEvent);
                break;
            default: break;
        };

    };

});