'use strict'

AFRAME.registerComponent('spinning-effect', {
    schema: {
        duration: {type:'number', default:20000},
    },
    multiple:false,
    init: function() { // this is our setup function
        // get reference to the walls
        // get reference to button
        // then we will add the animation component
        // listen for when button is clicked ie. listen for click event
        // play animation
        // if clicked and animation is already playing, pause it.

        const CONTEXT_AF = this;
        CONTEXT_AF.walls = document.querySelector('#walls');
        CONTEXT_AF.isSpinning = false;

        // enable set to false sets the animation to off until clicked
        CONTEXT_AF.walls.setAttribute('animation', { property:'rotation.y', to:360, loop:true, dur:CONTEXT_AF.data.duration, easing:'linear', enabled:false});
        // this.el refers to the element that this component is attached to
        CONTEXT_AF.el.addEventListener('click', function() {
            // check if animation is playing
            if(CONTEXT_AF.isSpinning === true){
                //stop spinning
                console.log('stop spinning');
                CONTEXT_AF.walls.setAttribute('animation', {enabled:false});
                CONTEXT_AF.isSpinning = false;
            }
            else {
                // start spinning
                console.log('start spinning');
                CONTEXT_AF.walls.setAttribute('animation', {enabled:true});
                CONTEXT_AF.isSpinning = true;
            }
        });
    },

    // Other types of functions
    // update:function() {oldData}, // IS NOT OF's update ... only called when a property in the schema changes
    // tick:function() {time, timeDelta}, // is called every update - this is a true update function
    // tok:function() {time, timeDelta}, // is called immediately after tick
    // remove:function() {},
    // pause:function() {},
    // play:function() {},
    // updateSchema:function() {data},
});