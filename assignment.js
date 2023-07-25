class Vehicle {
	constructor(make, model, year) {
		if (!typeof this.make === "string" && !typeof this.model === "string") {
			throw new Error("Input");
		}
		this.make = make;
		this.model = model;
		this.year = year;
	}
	honk() {
		return `Beep.`;
	}
	toString() {
		return `The vehicle is a ${this.make}${this.model} from ${this.year}`;
	}
}

class Car extends Vehicle {
	constructor(make, model, year) {
		if (!typeof this.make === "string" && !typeof this.model === "string") {
			throw new Error("Input");
		}
		super(make, model, year);
		this.numWheels = 4;
	}
}

class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		if (!typeof this.make === "string" && !typeof this.model === "string") {
			throw new Error("Input");
		}
		super(make, model, year);
		this.numWheels = 2;
	}
	revEngine() {
		return `Vroom`;
	}
}

class Garage {
	constructor(capacity) {
		if (!typeof this.make === "string" && !typeof this.model === "string") {
			throw new Error("Input");
		}
		this.vehicles = [];
		this.capacity = capacity;
	}
	add(newVehicle) {
		if (!(newVehicle instanceof Vehicle)) {
			return "Only vehicles belong here!";
		}
		if (this.vehicles.length >= this.capacity) {
			return "Sorry, the garage is full :(";
		}
		this.vehicles.push(newVehicle);
		return `Vehicle has been added!`;
	}
}
