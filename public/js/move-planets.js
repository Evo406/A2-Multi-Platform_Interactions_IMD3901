'use strict';

AFRAME.registerComponent('move-planets', {
    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.isMoving = false;
        CONTEXT_AF.button = document.querySelector('#move_button');

        // Variables to control animation
        let animationActive = false;
        let animationInterval;

        // Function to start the animation
        function startAnimation() {
            animationActive = true;
            animationInterval = setInterval(movePlanets, 100); // Adjust speed here
        }

        // Function to stop the animation
        function stopAnimation() {
            animationActive = false;
            clearInterval(animationInterval);
        }

        // Function to move the planets
        function movePlanets() {
            // Get all the planet entities
            let planets = document.querySelectorAll('.planet');
            planets.forEach(function(planet) {
                // Get current position
                let currentPosition = planet.object3D.position;

                // Calculate new Y position within the range of -2 to 2
                let newY = currentPosition.y + Math.random() * 0.2 - 0.1; // Adjust the range here

                // Ensure newY stays within the desired range
                if (newY < -2) {
                    newY = -2;
                } else if (newY > 2) {
                    newY = 2;
                }

                // Move the planet
                planet.setAttribute('position', {
                    x: currentPosition.x + 0.1, // Adjust the speed by changing this value
                    y: newY,
                    z: currentPosition.z
                });
            });
        }

        CONTEXT_AF.button.addEventListener('click', function() {
            if(CONTEXT_AF.isMoving === false){
                // start spinning
                console.log('start spinning');
                startAnimation();
            }
            else {
                // stop spining
                console.log('stop spinning');
                stopAnimation();
            }
        });
    }
});
