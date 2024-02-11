'use strict';

AFRAME.registerComponent('move-planets', {
    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.isMoving = false;
        CONTEXT_AF.button = document.querySelector('#move_button');

        // Variables to control animation
        let animationActive = false;
        let movingUp = true;
        let animationInterval;

        // Function to start the animation
        function startAnimation() {
            animationActive = true;
            animationInterval = setInterval(movePlanetsY, 25); // tick rate
        }

        // Function to stop the animation
        function stopAnimation() {
            animationActive = false;
            clearInterval(animationInterval);
        }

        // Function to move the planets
        function movePlanetsY() {
            // Get all the planet entities
            let planets = document.querySelectorAll('.planet');
            //planets.forEach(function(planet) {
            for (let i=0; i<planets.length; i++){
                // Get current position
                let currentPosition = planets[i].object3D.position;
                let newY = currentPosition.y;

                // Calculate new Y position based on the direction
                if(movingUp == true) {
                     newY = currentPosition.y + 0.05;
                }
                else {
                    newY = currentPosition.y - 0.05;
                }

                // Ensure newY stays within the desired range
                if (newY < 0) {
                    newY = 0;
                    movingUp = true;
                } 
                else if (newY > 5) {
                    newY = 5;
                    movingUp = false;
                }

                // Move the planet
                planets[i].setAttribute('position', {
                    x: currentPosition.x, // Adjust the speed by changing this value
                    y: newY,
                    z: currentPosition.z
                });
            };
        }

        CONTEXT_AF.button.addEventListener('click', function() {
            if(CONTEXT_AF.isMoving === false){
                // start spinning
                console.log('start moving');
                startAnimation();
                CONTEXT_AF.isMoving = true;
            }
            else {
                // stop spining
                console.log('stop moving');
                stopAnimation();
                CONTEXT_AF.isMoving = false;

            }
        });
    }
});
