import { createContext, useEffect, useState } from 'react';
import './App.css';
import Records from './Records';

const Data = createContext();

function App() {
  const [data, setdata] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://data.covid19india.org/data.json')
      const actualData = await res.json();
      console.log(actualData)
      setdata(actualData.statewise)
    }
    getData()
  }, []);
  return (
    <div>
      <h1 className='text-center mt-5 mb-5'>INDIA COVID REPORTS</h1>
      <div className="Main">
        <Data.Provider value={data}>
              <Records />
        </Data.Provider>
      </div>
    </div>
  )
}

export default App;
export { Data };
