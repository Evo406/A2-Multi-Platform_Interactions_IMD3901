'use strict';

AFRAME.registerComponent('planet-destroy-selected', {
    init:function() {

        const CONTEXT_AF = this;
        CONTEXT_AF.button = document.querySelector('#del_button');
        CONTEXT_AF.planets = document.querySelectorAll('.planet');

        // Attach a click event listener to the entity
        CONTEXT_AF.el.addEventListener('click', function() {
            //console.log("Destroying planet: " + CONTEXT_AF.el.getAttribute('id'));

            // Remove the planet entity from the scene
            CONTEXT_AF.el.remove();
        });  

        // CONTEXT_AF.planets[0].addEventListener('click', function() {
        //     console.log("clicked on a planet!");
        // });
        

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

