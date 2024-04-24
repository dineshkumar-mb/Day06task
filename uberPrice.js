                        //  ** here this code is used to calculateFare of the uber by class**
   
   //1. by using class
   //2. by using static 
   //3. by using constructer (distance && duration)
   //4. calculating fare by(distance*milerate)
   //5. calculating timefare
   //6. calculating total fare by adding base_fair+distancefare+timefare
   //7.1 in order to calculate the fare get set is used for duration distance.
   //7. uberfare in rupees is calculated
   
   
   
   class UberPriceCalculator {

    static BASE_FARE = 2.0;
    
    static PER_MILE_RATE = 1.5;
    
    static PER_MINUTE_RATE = 0.5;
    
    constructor(distance, duration) {
    
    this.distance = distance;
    
    this.duration = duration;
    
    }
    
    calculateFare() {
    
    const distanceFare = this.distance * UberPriceCalculator.PER_MILE_RATE;
    
    const timeFare = this.duration * UberPriceCalculator.PER_MINUTE_RATE;
    
    const totalFare = UberPriceCalculator.BASE_FARE + distanceFare + timeFare;
    
    return totalFare;
    
    }
    
    getDistance() {
    
    return this.distance;
    
    }
    
    setDistance(distance) {
    
    this.distance = distance;
    
    }
    
    getDuration() {
    
    return this.duration;
    
    }
    
    setDuration(duration) {
    
    this.duration = duration;
    
    }
    
    toString() {
    
    return `UberPriceCalculator[distance=${this.distance.toFixed(2)} miles, duration=${this.duration} minutes]`;
    
    }
    
    }
    
    const calculator = new UberPriceCalculator(5.5, 15);
    
    console.log(calculator.toString());
    
    const fare = calculator.calculateFare();
    
    console.log(`Total Fare: ₹${fare.toFixed(2)}`);
    
    /*********************************************************************
                                                                         *
            // output**
            // UberPriceCalculator[distance=5.50 miles, duration=15 minutes]
            // Total Fare: ₹17.75                                                         
                                                                        *
    /********************************************************************* */                                                                    