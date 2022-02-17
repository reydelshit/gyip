import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([])

  const [determine, setDeterrmine] = useState(false)
  const [details, setDetails] = useState(false)

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
    }

  }

  const getIp = () => {
    setDeterrmine(true)
  }

  const moreDetails = () => {
    setDetails(true)
  }
  return (
    <div className="App">
      <h1>wanna get your IP Address Details?</h1>

      <button onClick={getIp}>click me</button>

      {determine && <div>
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
