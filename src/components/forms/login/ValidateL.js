//Validation login data
const Validate = user => {
    if(!user.email){
        return "Niepoprawny e-mail"
    }else if(!/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i.test(user.email)){
        return "Niepoprawny e-mail"
    }

    if(!user.password){
        return "Niepoprawne Hasło"
    }

    return null
}

export default Validate
