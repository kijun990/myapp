import PropTypes from 'prop-types';
import React from 'react';

function Drama({name, poster, rating}) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={poster} />
      <h2>Rating: {rating}</h2>
    </div>
  )
}

const dramaILike = [
  {
    id: 1,
    name: '시그널',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-Kzt3xbxLcGJEl9j-HlJDQHaKt%26pid%3DApi&f=1',
    rating: 4.8
  },
  {
    id: 2,
    name: '도깨비',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2505D649584F80AF11&f=1&nofb=1',
    rating: 4.5
  },
  {
    id: 3,
    name: '구해줘',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.ytn.co.kr%2Fosen%2F2017%2F07%2F20170714_1500001603_81590000_1.jpg&f=1&nofb=1',
    rating: 4.5
  },
  {
    id: 4,
    name: '스토브리그',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffile.mk.co.kr%2Fmeet%2Fneds%2F2019%2F12%2Fimage_readtop_2019_1011282_15753700184000446.jpg&f=1&nofb=1',
    rating: 4.9
  },
  {
    id: 5,
    name: '응답하라 1994',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FhgTgCEkfxPQyXiKVszHomwazm7E.jpg&f=1&nofb=1',
    rating: 4.8
  }
]


function App() {
  return (
    <div>
      {dramaILike.map(drama=> <Drama key={drama.name} name={drama.name} poster={drama.image} rating={drama.rating} />)}
    </div>
  );
}

Drama.propTypes = {
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

export default App;
