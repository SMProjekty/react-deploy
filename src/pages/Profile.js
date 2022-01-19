import React from 'react';
import {Link} from 'react-router-dom';

import './ProfileStyle.css';

import NextVisit from '../components/visit/NextVisit';
import {profile} from '../components/forms/login/UseLogin';

function Profile () {
  //User data from UseLogin
  const user = profile[0]

  return(
    <div className='text'>
      <h1>Witaj, {user.Name} {user.LastName} </h1>
      <div className='btns-three'>
        <Link to={'/visit'}>
          <button className="btn">Umów wizytę</button>
        </Link>

        <Link to={'/last'}>
          <button className="btn">Historia wizyt</button>
        </Link>

        <Link to={'/'}>
          <button className="btn">Wyloguj</button>
        </Link>
      </div>

      <div className="grey_list">
        <h1>Kolejne wizyty</h1>
        <div className='posts'>
          <NextVisit user = {user}/>
        </div>
      </div>
    </div>
  );
}

export default Profile;