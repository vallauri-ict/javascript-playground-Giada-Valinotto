"use strict";

$(document).ready(function() {

    let wrapper = $("#wrapper");

    for (let i = 0; i < 36; i++) {
        $("<div>").addClass("box").appendTo(wrapper)
    }

    setInterval(aggiorna, 32);

    function aggiorna() {
        let n = generaNumero(0, 36);
        box.animate({ "opacity": 0.3 }, 400)
            .animate({ "opacity": 0.6 }, 400)
            .animate({ "opacity": 0.1 }, 400)
    }

    function generaNumero(min, max) {
        return Math.floor((max - min + 1) * Math.random() + min);
    }

});