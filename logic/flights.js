function Flights() {

    function calculateNumberOfFlights(pass,cap,){
        let f = cap/pass
        if(cap % pass){
            return f
        }else{
            return Math.trunc(f+1)
        }
    }

}

