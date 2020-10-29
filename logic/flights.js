function Flights() {
    function calculateNumberOfFlights(pass,cap){
        let f = cap/pass
        if(cap % pass == 0){
            return f
        }else{
            return Math.trunc(f+1)
        }
    }

}

