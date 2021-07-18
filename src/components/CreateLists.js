// maps data to given component

import Countrie from "./Countrie";

const CreateLists = ({ data, transformFn, maxSize }) => {
    if(data.length === 1) {
        return (
            <Countrie countrie={data[0]} />
        )
    } else if(data.length <= maxSize && data.length > 1)  {
        return (
            <div className="countryList">
                {data.map(d => transformFn(d))}
            </div>
        )
    } else {
        return (
            <div data-testid="empty-container">

            </div>
        )
    }
}

export default CreateLists;