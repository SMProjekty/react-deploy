
const Validate = user => {
    if(!user.email){
        return "invalid email"
    }else if(!/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i.test(user.email)){
        return "invalid email"
    }

    if(!user.password){
        return "invalid password"
    }
    else if(!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(user.password)){
        return "invalid password"
    }

    if(!user.password2){
        return "invalid password2"
    } else if(user.password2 !== user.password){
        return "invalid password"
    }

    if(!user.fst_name){
        return "invalid name"
    } else if(user.fst_name.length<2){
        return "invalid name"
    }

    if(!user.sec_name){
        return "invalid name2"
    } else if(user.sec_name.length<2){
        return "invalid name2"
    }

    if(!user.phone){
        return "invalid phone"
    } else if(user.phone.length<9){
        return "invalid phone"
    }

    return null
}

export default Validate
