function Flights() {
    function calculateNumberOfFlights(pass,cap){
        let f;

        if(pass % cap == 0){
            f = pass/cap
        }else{
            f = Math.floor(pass/cap)+1
        }
        return f;
    }

    return {calculateNumberOfFlights};

}

module.exports = Flights();