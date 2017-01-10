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
		if (this.passengers.length < this.seats) {
			currentSpeed = this.speed;
			this.drive(0);
			this.passengers.push(true);
			this.drive(currentSpeed);
		}
		else {
			var fatalError = new Error('Fatal error');
			try {
				// throw fatalError;
			}
			catch (fatalError) {
				console.error('So many passengers!');
			}
		}
	},

	land: function() {
		var currentSpeed;
		if (this.passengers.length > 0) {
			currentSpeed = this.speed;
			this.speed = 0;
			this.passengers.splice(-1,1);
			this.drive(currentSpeed);
		}
		else {
			var fatalError = new Error('Fatal error');
			try {
				// throw fatalError;
			}
			catch (fatalError) {
				console.error('There are no passengers!');
			}
		}
	},

	drive: function (newSpeed) {
		if  (newSpeed > this.maxSpeed) {
			newSpeed = this.maxSpeed;
			// console.warn("Check your speed!");
		}
		if (newSpeed === 0) {
			// console.log("The car was stopped.");
			return;
		}
		if ((this.passengers[0] === true) && (newSpeed > 0)){
			this.speed = newSpeed;
		}
		else {
			if(this.passengers[0] !== true) {
				var fatalError = new Error('Fatal error');
				this.speed = 0;
				try {
					// throw fatalError;
				}
				catch (fatalError) {
					console.error('There are no driver!');
				}
			}
			else {
				var fatalError = new Error('Fatal error');
				try {
					// throw fatalError;
				}
				catch (fatalError) {
					console.error('Some problems with speed!');
				}
			}
		}
	}

}