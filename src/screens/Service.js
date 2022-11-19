import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'antd'

function Service () {
  const [temp, settemp] =useState("7 Celcius")

  const[money,setmoney] = useState(12.27);

  const [Feed, setFeed] =useState("Virat Kohli punching ground, like Ramsay Bolton was lying on it; BlackCaps as white walkers & how England made it to the Iron Throne")

  const WeatherAPI = async() => {
    try {
      await axios
        .get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
        .then((data) => {
          console.log(data);
          settemp(data)
        })
        .catch(error => console.log(error))
    } catch (error) {
      console.log(error);
    }
  }
    const CurrencyAPI = ()  => {
      var myHeaders = new Headers();
      myHeaders.append("apikey", "4W881b7aMYHSamXbdzz610rhSOkVsNpD");
      
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };
      
      const url = `https://api.apilayer.com/exchangerates_data/convert?to=IND&from=USD&amount=1000`
  
      fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result["result"])
          setmoney(result["result"]);
        })
        .catch(error => console.log('error', error));
    };
  
  const NewAPI = async() => {
    try {
      await axios
        .get('https://newsapi.org/v2/everything?q=feed&from=2022-10-17&sortBy=publishedAt&apiKey=43259054fsdf345234')
        .then((data) => {
          console.log(data);
          settemp(data)
        })
        .catch(error => console.log(error))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // WeatherAPI()
    // CurrencyAPI()
    // NewAPI()
  }, []);


  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Weather API</h1>
        <h5>{temp}</h5>
        <h1 className='text-center'>Currency API</h1>
        <h5>Converting 1000 INR to USD {money}</h5>
        <h1 className='text-center'>News API</h1>
        <h5>{Feed}</h5>
      </div>

    </>
  )
}

export default Service
