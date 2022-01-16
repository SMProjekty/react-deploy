
const Validate = user => {
    if(!user.email){
        return "invalid"
    }else if(!/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i.test(user.email)){
        return "invalid email"
    }

    if(!user.password){
        return "invalid"
    }


    return null
}

export default Validate
