'use strict';

AFRAME.registerComponent('planet-destroy', {
    init:function() {

        const CONTEXT_AF = this;
        CONTEXT_AF.button = document.querySelector('#del_button');
        CONTEXT_AF.planets = document.querySelectorAll('#planet');

        for(let i = 0; i < CONTEXT_AF.planets.length; i++) {
            // Attach a click event listener to the entity
            CONTEXT_AF.planets[i].addEventListener('destroy', function() {
                console.log("Destroying planet: " + i);

                // Remove the planet entity from the scene
                CONTEXT_AF.planets[i].remove();
            });  
        }
        

        // Delete all planets from the scene by pressing the red button
        CONTEXT_AF.button.addEventListener('click', function() {
                let planets = document.querySelectorAll('#planet');
                for(let i=0; i<planets.length; i++){
                    //planets.parentNode.removeChild(planets[i]);
                    console.log('removed planet:' + planets[i] + i);
                    planets[i].remove();
                }
            });
    }
});

