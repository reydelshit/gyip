import { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import './App.css';

import hands from "./assets/hand-4.png"
import handDown from "./assets/hand-down.png"
import handUp from "./assets/hand-up.png"



function App() {

  const [data, setData] = useState([])

  const [determine, setDeterrmine] = useState(false)
  const [details, setDetails] = useState(false)
  const [error, setError] = useState('')

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getApi()
  }, [])

  const getApi = async () => {
    try{
        setLoading(true)
      setTimeout( async () => {
        const fetchApi = await fetch('https://ipinfo.io?token=5bc1331736d2eb')        
        const get = await fetchApi.json()
        setLoading(false)
        console.log(get)
        setData([get])
      }, 5000);
    } catch (error) {
      console.log(error, 'error')
      setError('error can"t get the data: make sure your browser did not blocked anything')
    }
  }

  const getIp = () => {
    setDeterrmine(true)
  }

  const moreDetails = () => {
    setDetails(!details)
  }


  return (
    <div className="main">
      {!determine && <h1>wanna get your IP Address Details?</h1>}
      {!determine && <div className='hand__button' onClick={getIp}>
        <button>get yo ip details
          <img className='main__hand' src={hands} alt="hands" />
        </button>
      </div>}
      {determine && <div>
      {loading && <BounceLoader color={'aqua'} size={'200px'}/>}

        {error && <div>{error}</div>}
        {data.map((IPaddressData, index) => <div className='showMore__details' key={index}>
          <h1>your ip address is:</h1>
          <h1>{IPaddressData.ip}</h1>
          <span className='handDown__container'>
            {details ?  <div>
              close
              <img onClick={moreDetails} src={handUp} alt="handsdown" />
            </div> : 
            <div>
              show more
              <img onClick={moreDetails} src={handDown} alt="handsdown" />
            </div> }
          </span>
            {details && <div>
              <span><h1>{IPaddressData.city}</h1></span>
              <span><h1>{IPaddressData.region}</h1></span>
              <span><h1>{IPaddressData.country}</h1></span>
              <span><h1>{IPaddressData.org}</h1></span>
              <span><h1>{IPaddressData.hostname}</h1></span>
              <span><h1>{IPaddressData.timezone}</h1></span>
              <span><h1>{IPaddressData.postal}</h1></span>
            </div>}
        </div>)}
        </div>}
    </div>
  );
}

export default App;
