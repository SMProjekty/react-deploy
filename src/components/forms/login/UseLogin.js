import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router';

import Validate from './ValidateL';
import Profile from '../../../pages/Profile';




function UseLogin () {
  let navigate = useNavigate();

  const [errors, setErrors] = useState(false);
  const [validOk, setValidOk] = useState();
  const [auth, setAuth] = useState(false);

  const [user, setUser] = useState({
    email: '',
    password: ''
    });

    const data = {
      Email: user.email,
      Pass: user.password,
      }

    const [profile, setProfile] = useState(
      // {
      // Email: '',
      // LastName: '',
      // Name: '',
      // UserId: '',
      // }
      );


  const handleChange = event => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const error = Validate(user)
    if(error){
      setErrors(error)
      console.log(errors)
      return error
    }else{

      setValidOk(true)
    }
  };



  useEffect(() => {
    if (validOk === (true)) {

     fetch("https://fryzjerprojekt.herokuapp.com/login",
      {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(json => setProfile(json))
       .then( pass => {
        if (profile !== "Failed to Add"){
          console.log(profile)
          setErrors(true)
          setValidOk(false)
          setAuth(true)
          navigate('/profile', <Profile user={user}/>);

        }
        setErrors(true)
        setValidOk(false)
      })

  }}
  //,[]
  )




return { handleChange, user, handleSubmit, errors, profile, auth} ;

}

export default UseLogin;
