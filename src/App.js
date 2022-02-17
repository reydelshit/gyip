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
    const fetchApi = await fetch('http://ip-api.com/json')
    const get = await fetchApi.json()

    console.log(get)

    setData([get])
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
          <h1>{IPaddressData.query}</h1>
          <button onClick={moreDetails}>more details</button>
            {details && <div>
              <h1>{IPaddressData.city}</h1>
              <h1>{IPaddressData.country}</h1>
              <h1>{IPaddressData.countryCode}</h1>
              <h1>{IPaddressData.isp}</h1>
              <h1>{IPaddressData.region}</h1>
              <h1>{IPaddressData.regionName}</h1>
              <h1>{IPaddressData.zip}</h1>
            </div>}
        </div>)}
        </div>}
    </div>
  );
}

export default App;
