const EventEmitter = require("events");

const emitter = new EventEmitter();

// fire an event

emitter.on("bellRings", () => {
  console.log("bell rings emitter fire");
});

// rise an event
emitter.emit("bellRings");
