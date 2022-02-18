import React from 'react'
import "../App.css"


const Determiner = ({determine, getIp, hands}) => {
  return (
    <div className='determiner'>
    {!determine && <h1>wanna get your IP Details?</h1>}
        {!determine && <div className='hand__button' onClick={getIp}>
            <button>get yo ip details
                <img className='main__hand' src={hands} alt="hands" />
            </button>
    </div>}
  </div>
  )
}

export default Determiner