
/**
 * Created by anjali on 20/6/17.
 */

// Custom emmiter just to have a grasp of how Events lib works in Node
function Emitter() {
    // This keeps event and corresponsing listener pair
    this.events = {};
}

Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function (type) {
    if(this.events[type]){
        // Fire corresponding listener from the events object
     this.events[type].forEach(function (listener) {
         listener();
     })
    }
}


module.exports = Emitter;