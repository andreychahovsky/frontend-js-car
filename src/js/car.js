'use strict';

module.exports = {

	// properties
	color: "white",
	dours: 4, 
	speed: 0, 
	defaultSpeed: 60, 
	maxSpeed: 100, 
	seats: 4,
	passengers: [],

	// methods
	put: function() {
		var currentSpeed;
		if (this.passengers[0] !== true) {
			this.passengers.push(true);
			this.drive(this.defaultSpeed);
			return;
		} 
		if (this.passengers.length < this.seats) {
			currentSpeed = this.speed;
			this.drive(0);
			this.passengers.push(true);
			this.drive(currentSpeed);
		}
	},

	land: function() {
		var currentSpeed;
		if (this.passengers.length > 0) {
			currentSpeed = this.speed;
			this.drive(0);
			this.passengers.splice(-1,1);
			this.drive(currentSpeed);
		}
	},

	drive: function (newSpeed) {
		if  (newSpeed > this.maxSpeed) {
			newSpeed = this.maxSpeed;
		}
		if (newSpeed === 0) {
			this.speed = 0;
			return;
		}
		if ((this.passengers[0] === true) && (newSpeed > 0)){
			this.speed = newSpeed;
		}
	}

}