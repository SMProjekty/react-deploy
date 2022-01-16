
const Validate = (hour, date, servicee) => {
    if(!hour){
        return "Wybierz godzinę"
    }

    if(!date){
        return "Wybierz datę"
    }

    if(!servicee){
        return "Wybierz usługę"
    }


    return null
}

export default Validate
