import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited ? 'visited' : 'none-visited'}`}>
            <h3 style={{color: visited ? 'yellowgreen' : 'white'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button style={{margin: "5px"}} onClick={() =>handleVisitedCountry(country)}>Mark as a visited</button>
            <br />
            <button style={{margin: "5px"}} onClick={handleVisited}>{visited ? 'Visited' : 'Visit'}</button>
            <br />
            {/* {visited && 'I have visited this country'} */}
            {visited ? 'I have visited' : 'I want to visit'}
        </div>
    );
};

export default Country;