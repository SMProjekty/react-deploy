import { useState} from 'react';
import Validate from './ValidateR';
import { useNavigate } from 'react-router';

const UseRegister = () => {
  let navigate = useNavigate();
  var add="Failed to Add"
  const [errors, setErrors] = useState(null);

  const [user, setUser] = useState({
    email: '',
    password: '',
    password2: '',
    fst_name: '',
    sec_name: '',
    phone: '',
  });

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
      console.log(errors)
    }
    else{
      const data = {
        Email: user.email,
        Pass: user.password,
        Name: user.fst_name,
        LastName: user.sec_name,
        Phone: user.phone,
      }

      fetch("https://fryzjerprojekt.herokuapp.com/register",
      {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(json => add = (json))
       .then( pass => {
        if (add !== "Failed to Add"){
          console.log(add)
          add= null
          navigate('/signin')
          return add
        }
      })
    }
  };

  return { handleChange, user, handleSubmit, errors };
};

export default UseRegister;