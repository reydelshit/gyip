import { useEffect, useState } from 'react';
import './App.css';

import hands from "./assets/hand-4.png"
import handDown from "./assets/hand-down.png"
import handUp from "./assets/hand-up.png"

// components 

import Header from "./components/Header"
import Determiner from './components/Determiner';
import MoreDetails from './components/MoreDetails';
import Footer from "./components/Footer"



function App() {

  const [data, setData] = useState([])

  const [determine, setDeterrmine] = useState(false)
  const [details, setDetails] = useState(false)
  const [error, setError] = useState('')

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getApi()
  }, [])

  const getApi = () => {

      setTimeout( async () => {
        try{
          const fetchApi = await fetch('https://ipinfo.io?token=5bc1331736d2eb')        
          const get = await fetchApi.json()
          console.log(get)
          setData([get])
          setLoading(false)

        } catch {
          setError("error can't get the data: make sure your browser did not blocked anything")
        }
      }, 3000);

      // setLoading(true)
      // const fetchApi = await fetch('https://ipinfo.io?token=5bc1331736d2eb')        
      // const get = await fetchApi.json()
      // console.log(get)
      // setData([get])
      // setLoading(false)
  }

  const getIp = () => {
    setDeterrmine(true)
  }

  const moreDetails = () => {
    setDetails(!details)
  }


  return (
    <div className="main">
      <Header />
      <Determiner determine={determine} getIp={getIp} hands={hands}/>
      <MoreDetails determine={determine} loading={loading} error={error} data={data} moreDetails={moreDetails} details={details} handUp={handUp} handDown={handDown} />
      <Footer />
    </div>
  );
}

export default App;
