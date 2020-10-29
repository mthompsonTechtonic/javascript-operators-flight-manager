function Flights() {
    function calculateNumberOfFlights(passengers,capacity){

        let f;

        if((passengers < 0) || (!Number.isInteger(Number(passengers))) ){
            throw Error( "The number of passengers must be a positive integer value")
        }
        if((capacity < 0)||(!Number.isInteger(Number(capacity)))){
            throw Error ("The capacity of the flight must be a positive integer value")
        }

        if(passengers % capacity == 0){
            f = passengers/capacity
        }else{
            f = Math.floor(passengers/capacity)+1
        }
        return f;
    }

    return {calculateNumberOfFlights};

}

module.exports = Flights();