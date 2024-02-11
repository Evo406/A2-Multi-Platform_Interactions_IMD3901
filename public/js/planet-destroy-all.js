'use strict';

AFRAME.registerComponent('planet-destroy-all', {
    init:function() {

        const CONTEXT_AF = this;
        CONTEXT_AF.button = document.querySelector('#del_button');
        // Delete all planets from the scene by pressing the red button
        CONTEXT_AF.button.addEventListener('click', function() {
                let planets = document.querySelectorAll('.planet');
                for(let i=0; i<planets.length; i++){
                    //planets.parentNode.removeChild(planets[i]);
                    console.log('removed planet:' + planets[i] + i);
                    planets[i].remove();
                }
            });
    }
});

