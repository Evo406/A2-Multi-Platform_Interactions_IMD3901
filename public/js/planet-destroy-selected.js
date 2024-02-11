'use strict';

AFRAME.registerComponent('planet-destroy-selected', {
    init:function() {

        const CONTEXT_AF = this;
        // Attach a click event listener to the entity
        CONTEXT_AF.el.addEventListener('click', function() {
            // Remove the planet entity from the scene
            console.log('planet clicked');
            CONTEXT_AF.el.remove();
        });  

    }
});

