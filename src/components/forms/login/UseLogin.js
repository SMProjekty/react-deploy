import { useState} from 'react';
import { useNavigate } from 'react-router';

import Validate from './ValidateL';

//Export personal data
export var profile = "Failed to Add"

function UseLogin () {
  let navigate = useNavigate();

  const [errors, setErrors] = useState(false);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });


  const data = {
    Email: user.email,
    Pass: user.password,
  }

  //downland data from the form
  const handleChange = event => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  //Do after click submit
  const handleSubmit = event => {
    event.preventDefault();
    const error = Validate(user)
    if(error){
      setErrors(error)
      return error
    }else{
      fetch("https://fryzjerprojekt.herokuapp.com/login",
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(json => profile = json)
      .then( pass => {
        if (profile !== "Failed to Add"){
          setErrors(true)
          navigate('/profile');
          return profile
        }
        else{
          setErrors("Niepoprawne dane logowania")
        }
      })
    }
  };

return { handleChange, user, handleSubmit, errors, profile} ;
}

export default UseLogin;
