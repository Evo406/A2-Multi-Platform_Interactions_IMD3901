'use strict';

AFRAME.registerComponent('add-sphere', {
    init:function() {

        const CONTEXT_AF = this;
        CONTEXT_AF.button = document.querySelector('#add_button');
        CONTEXT_AF.scene = document.querySelector('a-scene');
        CONTEXT_AF.planets = document.querySelectorAll('.planet');
        let planetLength = CONTEXT_AF.planets.lenth;

        CONTEXT_AF.button.addEventListener('click', function() {
            console.log("Creating sphere...");
            let r = Math.floor(Math.random()*256); // randomize color
            let g = Math.floor(Math.random()*256); // randomize color
            let b = Math.floor(Math.random()*256); // randomize color
            let posX = Math.random() * 10 - 5; // Random X position between -5, 5
            let posY = Math.random() * 5; // Random Y position between 0, 5

            // Create a new entity for each sphere
            let entity = document.createElement('a-entity');
            entity.setAttribute('geometry', 'primitive: sphere; radius: 0.15;');
            entity.setAttribute('position',{x: posX, y: posY, z: -5});
            entity.setAttribute('class', 'interactive planet');
            entity.setAttribute('color','rgb(' + r + ',' + g + ',' + b + ')');
            // entity.setAttribute('id', planetLength + 1);
            //entity.setAttribute('animation__mouseenter', 'property:material.color; type:color; to:rgb(230,230,230); startEvents:mouseenter; dur:200;')
            //entity.setAttribute('animation__mouseleave', 'property:material.color; type:color; to:rgb(' + r + ',' + g + ',' + b + '); startEvents:mouseleave; dur:200;')
            entity.setAttribute('animation__click', 'startEvents:click;')
            entity.setAttribute('planet-destroy-selected'); 

            CONTEXT_AF.scene.appendChild(entity);
            console.log("Sphere created!");

        });

        
    }
});