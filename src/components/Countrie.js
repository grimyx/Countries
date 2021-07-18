import Weather from "./Weather"

const Countrie = ({ countrie }) => {
    const flagStyle = {
        width: '100%',
        height: '20vw'
    };

    const flagDiv = {
        width: '60%',
        margin: '0 auto',
    }

    return (
        <div className="country">
            <div style={flagDiv}>
                <img src={countrie.flag} alt={"Countri flag"} style={flagStyle} />
            </div>
            <div>
                <h1>{countrie.name}</h1>
                <div  style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div>
                        <p><strong>Capital:</strong> {countrie.capital}</p>
                        <p><strong>Population :</strong> {countrie.population}</p>
                        <Weather cityName={countrie.capital} />
                    </div>
                    <div>
                        <h3>Languages</h3>
                        <ul>
                            {countrie.languages.map((l, i) => <li key={i}>{l.name}</li>)}
                        </ul>

                        <p><strong>Region : </strong>{countrie.region}</p>
                        <p><strong>Area : </strong>{countrie.area} km<sup>2</sup></p>
                        <p><strong>Currencies : </strong></p>
                        <ul>
                            {countrie.currencies.map((c,i) => <li key={`currencie-${i}`}>{c.code} - {c.name}, {c.symbol}</li>)}
                        </ul>

                    </div>
                </div>
            </div>
            <a href="/" >back</a>
        </div>
    )
}

export default Countrie