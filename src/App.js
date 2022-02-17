import { useEffect, useState } from 'react';
import './App.css';

import hands from "./assets/hand3.png"


function App() {

  const [data, setData] = useState([])

  const [determine, setDeterrmine] = useState(false)
  const [details, setDetails] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    getApi()
    
  }, [])

  const getApi = async () => {
    try{
      const fetchApi = await fetch('https://ipinfo.io?token=5bc1331736d2eb')
      const get = await fetchApi.json()
      console.log(get)
      setData([get])

    } catch (error) {
      console.log(error, 'error')
      setError('error can"t get the data: make sure your browser did not blocked anything')
    }

  }

  const getIp = () => {
    setDeterrmine(true)
  }

  const moreDetails = () => {
    setDetails(true)
  }
  return (
    <div className="main">
      <h1>wanna get your IP Address Details?</h1>
      {!determine && <div className='hand__button' onClick={getIp}>
        <button>get yo ip details
          <img src={hands} alt="hands" />
        </button>
      </div>}

      {determine && <div>
        {error && <div>{error}</div>}
        {data.map((IPaddressData, index) => <div key={index}>
          <h1>{IPaddressData.ip}</h1>
          <button onClick={moreDetails}>more details</button>
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
