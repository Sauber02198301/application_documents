// controll ui_function
const bdi_UI_controll_setup = {

    bufferPoints_function(btn_points) {
        // Legende: bufferPoints => voruebergehnder behaelter, points => permanenter behaelter & btn_points => die akuellen Punkte
        // legend: bufferPoint => nonPermanent_container, points => is a permanent container & btn_poins is the currentPoinst
        if (bdi_setup.bufferPoints === null) {
            bdi_setup.bufferPoints = btn_points;
            console.log(bdi_setup.bufferPoints);
            bdi_setup.indexBDI++;
        } else {
            bdi_setup.points += Number(bufferPoints);
            bdi_setup.bufferPoints = null;
        }


    },


    clickEvent_contol(btn_information) {

        console.log(btn_information);

        if (bdi_setup.btn_click_i < bdi_setup.buffer_clickEvent) {
            bdi_setup.btn_click_i++;
            if (bdi_setup.inputValue === null) { bdi_setup.inputValue = btn_information.id};
            
            console.log(bdi_setup.btn_click_i, bdi_setup.buffer_clickEvent, 'beide sollten hier auf 1 stehen', bdi_setup.inputValue);
            // hier wird nur geprueft erst wenn der zweite click kommt gehts weiter 
            //versuch englisch: i wan't checkUp to click two and that go to the next step

        } else if (bdi_setup.btn_click_i === bdi_setup.buffer_clickEvent && bdi_setup.inputValue === btn_information.id) {
            console.log(bdi_setup.btn_click_i, bdi_setup.buffer_clickEvent, 'is it equal go to the next step & inputValue is equel btn_information.id'); 
            console.log(bdi_setup.btn_click_i, bdi_setup.buffer_clickEvent, 'es geht weiter '); 
            
            this.bufferPoints_function(btn_information.value); 
        } else if (bdi_setup.btn_click_i === bdi_setup.buffer_clickEvent && bdi_setup.inputValue !== btn_information.id) {
            console.log('btnInformation ist not equal');
            bdi_setup.inputValue = btn_information.id;
            bdi_setup.btn_click_i = 1;
        };  

    },

};
