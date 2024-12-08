//usecallback
import { memo, useCallback, useEffect, useState } from 'react'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    },5000)
  }, [])





  const calculateCryptoReturns = useCallback(function() { return exchange1Data.returns + exchange2Data.returns;}
  ,[exchange1Data,exchange2Data]);
  
  const incomeTax = (cryptoReturns + bankData.income) * 0.3

  return (
    <div>
        <CryptoGainCalculator calculateCryptoReturns={calculateCryptoReturns}/>
    </div>
  )
}

const CryptoGainCalculator=memo(function({calculateCryptoReturns}){
console.log("crypto child")
return <div>
  your crypto Returns are {calculateCryptoReturns()}
</div>
})

export default App