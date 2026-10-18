// die eigene btn target functin die soll

const bdi_bodyDOM = document.querySelector('.bdi_body_section');

const btn_primeKey = 'btn_primar_bdi';

bdi_bodyDOM.addEventListener('click', (t) => {

    const click_bdi_prime = t.target.closest(`.${btn_primeKey}`);

    if (click_bdi_prime && bdi_bodyDOM.closest(click_bdi_prime)) {

        switch(click_bdi_prime.datset.action) {
            case 'start_BDI':
                console.log(click_bdi_prime);
            break;

            default: break;
        }

    };

});