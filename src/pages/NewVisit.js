import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router';

import './NewVisitStyle.css'

import {profile} from '../components/forms/login/UseLogin';
import NewVisitValid from '../components/visit/NewVisitValid';

function NewVisit() {
  //user data
  const user = profile[0]
  const id = user.UserId

  let navigate = useNavigate();

  const [errors, setErrors] = useState('');
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');
  const [service, setService] = useState('');

  //Do after click submit
  const handleSubmit = e => {
    e.preventDefault();
    const error = NewVisitValid(hour, date, service)
    if(error){
      setErrors(error)
      console.log(errors)
      return error
    }
    else{
      //Status is N because this is future visit
      var data = {
        userr: user.UserId,
        Hhour: hour,
        Ddate: date,
        ServiceeId: service,
        Status: 'N'
      };

      fetch(`https://fryzjerprojekt.herokuapp.com/visit/${id}/`,
        {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => setErrors(json))
        .then( pass => {
          if (setErrors !== "Failed to Add"){
            navigate('/profile');
            //We need to break loop
            setErrors(true)
          }
        })
    }
  };

  return (
    <div className='text'>
      <h1>Umów wizytę</h1>
      <form onSubmit={handleSubmit}>
        <div className="grey_list">
          <label>Godzina: </label>
          <input type="time" value={hour} onChange={e => setHour(e.target.value)} />

          <label>Data: </label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />

          <div className='lighter'>

            <div className="radio">
              <label>
                <input type="radio" name="Servicee" value="1" onChange={e => setService(e.target.value)}/>
                Strzyżenie 45 zł
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="Servicee" value="2" onChange={e => setService(e.target.value)}/>
                Loki 110 zł
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="Servicee" value="3" onChange={e => setService(e.target.value)}/>
                Koloryzacja 90 zł
              </label>
            </div>
          </div>
        </div>

        <div className='btns-new'>
          <button className='btn' type="submit">Zatwierdź</button>
            <Link to={'/profile'}>
              <button className="btn">Wstecz</button>
            </Link>
        </div>
      </form>
    </div>
    );
  }

export default NewVisit;