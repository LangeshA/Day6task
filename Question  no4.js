class UberPriceCalculator {
    baseFare: number;
    costPerKm: number;
    costPerMinute: number;

    constructor(baseFare: number, costPerKm: number, costPerMinute: number) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distanceInKm: number, timeInMinutes: number): number {
        const distanceCost = distanceInKm * this.costPerKm;
        const timeCost = timeInMinutes * this.costPerMinute;
        return this.baseFare + distanceCost + timeCost;
    }
}


const uberCalculator = new UberPriceCalculator(5, 2, 1); 

const distance = 10; 
const time = 20; 

const totalPrice = uberCalculator.calculatePrice(distance, time);
console.log(`The total price for the ride is: $${totalPrice}`);