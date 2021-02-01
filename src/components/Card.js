import React, { useState} from 'react';

function Card({ name, email, id, city }) {
    const [trueId, setTrueId] = useState(id*4);
    return (
        <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-3'>
            <img alt='123' src={`https://robohash.org/set_set4/${trueId}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>City: {city}</p>
            </div>
            <p>avatar id - {trueId}</p>
            <button onClick={()=>setTrueId(trueId+1)}>increase</button>
            <button onClick={()=>setTrueId(trueId-1)}>decrease</button>
        </div>
    );
}

export default Card;