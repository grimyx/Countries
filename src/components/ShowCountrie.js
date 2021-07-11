import {useState} from 'react';
import Countrie from './Countrie';

const ShowCountrie = ({countrie}) => {
    const [show, setShow ] = useState(false);

    const buttonClikcHandler = () => setShow(!show);

    if(show) {
        return (
            <div>
            {countrie.name} <button onClick={buttonClikcHandler}>Show</button>
            <Countrie countrie={countrie} />
            </div>
        )
    } else {
        return (
            <div>
                {countrie.name} <button onClick={buttonClikcHandler}>Show</button>
            </div>
        )
    }
}

export default ShowCountrie;