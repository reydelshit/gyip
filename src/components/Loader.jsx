import React from 'react'
import "../App.css"
import { BounceLoader } from 'react-spinners';


const Loader = () => {
  return (
    <div className='loader'>
        <BounceLoader color={'aqua'} size={'200px'}/>
  </div>
  )
}

export default Loader