import React from 'react'
import "../App.css"
import { BounceLoader } from 'react-spinners';


const Loader = ({error}) => {
  return (
    <div className='loader'>
        <BounceLoader color={'aqua'} size={'200px'}/>
        {error && <div>{error}</div>}
  </div>
  )
}

export default Loader