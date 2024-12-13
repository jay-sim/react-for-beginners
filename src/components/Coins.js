import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Coins() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [input, setInput] = useState(0);
    const [submit, setSubmit] = useState(0);
    const onChange = (event) => setInput(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(typeof input);
        setSubmit(input);
    }

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(response => response.json())
            .then((json) => {
                const filterdCoins = json.slice(0, 20);
                setCoins(filterdCoins);
                setLoading(false);
            });
    }, [submit]);

    return (
        <div>

            <h1>The Coins!! {loading ? "" : `(${coins.length})`}</h1>
            <h5>구매하실 금액을 입력해주세요.</h5>
            <form onSubmit={onSubmit}>
                <input
                    value={input}
                    onChange={onChange}
                /><span> $ (USD)</span>
            </form>

            {
                submit === 0 || "" ?
                    ""
                    :
                    <>
                        <h5>구매 가능한 코인은..</h5>
                        {loading ?
                            <strong>Now Loading...</strong>
                            :
                            <select>
                                {
                                    coins.map((coin) =>
                                        <option key={coin.id}>{coin.name} ({coin.symbol}) : {(submit / coin.quotes.USD.price).toFixed(3)} 개
                                        </option>)
                                }
                            </select>
                        }

                    </>
            }
            <Link to={`/`}>
                <button>홈으로</button>
            </Link>
        </div>
    );
}

export default Coins;