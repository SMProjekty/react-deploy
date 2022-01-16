import React from 'react';
import {Link} from 'react-router-dom';


const Main = () => {
    return(
      <div className='text'>
        <h1>Salon Fryzjerski</h1>

              Po wejściu do naszego salonu od razu czuć gościnną atmosferę; tę energię, która powoduje, że każdy tu się fantastycznie odnajduje. Wychodzimy z założenia, że cenionego salonu fryzjerskiego nie tworzy miejsce, tylko ludzie, dlatego nasza ekipa to starannie dobrane osoby, które tworzą wspólną zgraną całość. Nasi styliści, to świetni fachowcy - mają wyobraźnie, kreatywność i dobry warsztat. Odwiedź jeden z naszych salonów i poczuj ten wyjątkowy klimat!

          <div className='btns'>
                  <Link to={"/signin"}>
                    <button className='btn'>{"Zaloguj"}</button>
                  </Link>
                  <Link to={"/registration"}>
                    <button className='btn'>{"Rejestracja"}</button>
                  </Link>
          </div>
      </div>
    );
  }

export default Main;