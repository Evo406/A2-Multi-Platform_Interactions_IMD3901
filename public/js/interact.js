'use strict'

AFRAME.registerComponent('interact', {
    init:function() {

        document.querySelector('#del_button').addEventListener('click', function(e) {
            console.log('delete me');
            let planets = document.querySelectorAll('#planet');
            for(i=0; i<planets.length; i++){
                //planets.parentNode.removeChild(planets[i]);
                console.log('removed planet:' + planets[i] + i);
                planets[i].remove();
            }
        });

        document.querySelector('#add_button').addEventListener('click', function(e) {
            let scene = document.querySelector('a-scene');
            let cube = document.createElement('a-entity');
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

            cube.setAttribute('geometry', 'primitive:sphere; radius:0.15;');
            cube.setAttribute('position',{x:posX,y:posY,z:-5});
            cube.setAttribute('id', 'planet');
            cube.setAttribute('class', 'clickable');
            cube.setAttribute('color','rgb(' + r + ',' + g + ',' + b + ')');
            //cube.setAttribute('animation__click',"property:radius; from:0.15; to:0.0; startEvents:click; dur:050;" );

            scene.appendChild(cube);
        });

        
    }
});