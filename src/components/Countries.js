import Countrie from "./Countrie";
import ShowCountrie from "./ShowCountrie";

const Countries = ({ countries }) => {
    console.log('Countries size: ', countries.length);

    if (countries.length > 10) {
        return (
            <p className="filter-error">Too many matches, specify another filter !!!!</p>
        )
    } else if (countries.length === 1) {
        return (
            <Countrie countrie={countries[0]} />
        )
    } else {
        return (
            <div>
                {countries.map(c => {

                    return (
                        <div>
                            <ShowCountrie countrie={c} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Countries;