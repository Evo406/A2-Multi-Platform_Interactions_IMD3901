'use strict'

AFRAME.registerComponent('add-sphere', {
    init:function() {

        const CONTEXT_AF = this;
        CONTEXT_AF.button = document.querySelector('#add_button');
        CONTEXT_AF.scene = document.querySelector('a-scene');
        CONTEXT_AF.entity = document.createElement('a-entity');

        CONTEXT_AF.el.addEventListener('click', function() {
            console.log("randomize colours");
            let r = Math.floor(Math.random()*256); // randomize color
            let g = Math.floor(Math.random()*256); // randomize color
            let b = Math.floor(Math.random()*256); // randomize color
            
            // We want to randomize the X and Y positions of where each circle spawns.
            // To do that we want to set a random value to both the X and Y coordinates.
            // However because the player starts at origin (0,0), we also need to get some negative X-values
            // so the circles spawn on either side of the screen.
            let negRandom = Math.random();
            if(negRandom > 0.5) {posX = (Math.random()*5)} // This if statement determines if it will generate a pos- or neg- X coordinate value
            else {posX = (Math.random()*-5)}
            let posY = (Math.random()*5); // random y value

            CONTEXT_AF.entity.setAttribute('geometry', 'primitive:sphere; radius:0.15;');
            CONTEXT_AF.entity.setAttribute('position',{x:posX,y:posY,z:-5});
            CONTEXT_AF.entity.setAttribute('id', 'planet');
            CONTEXT_AF.entity.setAttribute('class', 'clickable');
            CONTEXT_AF.entity.setAttribute('color','rgb(' + r + ',' + g + ',' + b + ')');
            //CONTEXT_AF.entity.setAttribute('animation__click',"property:radius; from:0.15; to:0.0; startEvents:click; dur:050;" );

            CONTEXT_AF.scene.appendChild(CONTEXT_AF.entity);
        });

        
    }
});