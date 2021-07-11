import Weather from "./Weather"

const Countrie = ({countrie}) => {
    return (
        <div>
            <h2>{countrie.name}</h2>
            <p><strong>Capital:</strong> {countrie.capital}</p>
            <p><strong>Population :</strong> {countrie.population}</p>
            <h3>Languages</h3>
            <ul>
                {countrie.languages.map((l, i) => <li key={i}>{l.name}</li>)}
            </ul>

            <img src={countrie.flag} alt="Countrie flag" width="100"/>
            <Weather cityName={countrie.capital} />
        </div>
    )
}

export default Countrie