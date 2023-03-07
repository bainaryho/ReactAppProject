import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState(0);
  const [money, setMoney] = useState();

  const onChange = (event) => {
    setPrice(event.target.value);
  }
  const onChangeInput = (event) => {
    setMoney(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong> 
      ) : ( //로딩중이 아닐때 보여는 화면
        <select onChange={onChange}>
          {coins.map((coin) => (
            <option
            key={coin.id}
            value={coin.quotes.USD.price}
            symbol={coin.symbol}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}

      <div>
        <input onChange={onChangeInput} value={money} placeholder="how much $?"></input>
        <h1>you can get {Math.round((money/price)*10000)/10000}.. </h1>
      </div>
    </div>
  );
}
export default App;