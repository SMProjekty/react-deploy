//Validation Register data
const Validate = user => {
    if(!user.email){
        return "Niepoprawny email"
    }else if(!/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i.test(user.email)){
        return "Niepoprawny email"
    }

    if(!user.password){
        return "Użyj bezpiecznego hasła"
    }
    else if(!/^(?=.*\d)(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(user.password)){
        return "Niepoprawne hasło"
    }

    if(!user.password2){
        return "Hasło nie jest identyczne"
    } else if(user.password2 !== user.password){
        return "Hasło nie jest identyczne"
    }

    if(!user.fst_name){
        return "Niepoprawne imię"
    } else if(user.fst_name.length<2){
        return "Niepoprawne imię"
    }

    if(!user.sec_name){
        return "Niepoprawne Nazwisko"
    } else if(user.sec_name.length<2){
        return "Niepoprawne Nazwisko"
    }

    if(!user.phone){
        return "Niepoprawny numer telefonu"
    } else if(user.phone.length<9){
        return "Niepoprawny numer telefonu"
    }

    return null
}

export default Validate
