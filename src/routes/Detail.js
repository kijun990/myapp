import React, {useEffect} from 'react';
import { useLocation, useNavigate} from "react-router-dom";

import './Detail.css';

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(location.state === undefined) {
      navigate("/");
    } else if(location.state === null) {
      navigate("/");
    }
  });

  if (location.state) {
    return(
      <div className='detail__container'>
        <div className='detail__poster'>
          <img src={location.state.poster} alt={location.state.title} title={location.state.title}   />
        </div>
        <div className='detail__data'>
          <h3 className='detail__title'>{location.state.title}</h3>
          <h5 className='detail__year'>{location.state.year}</h5>
          <ul className='detail__genres'>
            {location.state.genres.map((genre, index) => {
              return <li key={index} className='detail__genre'>{genre}</li>
            })}
          </ul>
          <p className='detail__summary'>{location.state.summary}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Detail;