import React, {useState} from 'react';

const Say = () => {
  const [message, setMessage] = useState('초기값');
  const onClickEnter = () => setMessage('안녕!');
  const onClickLeave = () => setMessage('잘가!');
  
  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{color:color}}>{message}</h1>
      <button onClick={()=>setColor('red')}>Red</button>
    </div>
  );
};


export default Say;