import React from 'react'
import Loader from "../components/Loader"

import "../App.css"

const MoreDetails = ({determine, loading, error, data, moreDetails, details, handUp, handDown}) => {
  return (
    <>
    {determine && <div className='more_details'>
      {loading && <Loader />}
        {error && <div>{error}</div>}
        {data.map((IPaddressData, index) => <div className='showMore__details' key={index}>
            <div className='top__details'>
                <h1 className='more__details__title'>your ip address is:</h1>
                <h1>{IPaddressData.ip}</h1>
                <span className='hand__container'>
                    {details ? <img onClick={moreDetails} src={handUp} alt="handsdown" /> : <div className='handsUp__container'><span>see more</span> <img onClick={moreDetails} src={handDown} alt="handsdown" /></div>}
                </span>
            </div>
            {details && <div className='more__details'>
                <div className='details__container'>
                    <span className='more__details__title'>City:</span> 
                    <span>{IPaddressData.city}</span>
                </div>
                <div className='details__container'>
                    <span className='more__details__title'>Region:</span>
                    <span>{IPaddressData.region}</span>
                </div>
                <div className='details__container'>
                    <span className='more__details__title'>Country:</span>
                    <span>{IPaddressData.country}</span>
                </div>
                <div className='details__container'>
                    <span className='more__details__title'>Postal:</span>
                    <span>{IPaddressData.postal}</span>
                </div>
                <div className='details__container'>
                    <span className='more__details__title'>ISP:</span>
                    <span>{IPaddressData.org}</span>
                </div>
                <div className='details__container'>
                    <span className='more__details__title'>Host:</span>
                    <span>{IPaddressData.hostname}</span>
                </div>
                <div className='details__container'>
                    <span className='more__details__title'>Timezone:</span>
                    <span>{IPaddressData.timezone}</span>
                </div>
            </div>}
        </div>)}
        </div>}
    </>
  )
}

export default MoreDetails