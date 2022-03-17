import { useState, useEffect } from 'react';
import Array from './Array';

function cc(arg){
    console.log(arg);
}

const Home = () => {

const [name, setName] = useState('Tommy');
const [colors, setColors] = useState(null);

useEffect(() => {
    fetch('http://localhost:8000/colors')
        .then(response => {
            return response.json();
        })
        .then(data => {
            setColors(data);
        });
    }, []);


    return (
        <div className="Home">
            <button onClick={() => setName('Jerrad')}>change name</button>

            {colors && <Array colors={colors} />}
            <p>{ name }</p>
        </div>
    );
}



export default Home;