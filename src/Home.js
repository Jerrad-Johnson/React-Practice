import { useState, useEffect } from 'react';
import Array from './Array';

function cc(arg){
    console.log(arg);
}

const Home = () => {

const [colors, setColors] = useState(null);
const [isPending, setIsPending] = useState(true);

useEffect(() => {
    fetch('http://localhost:8000/colors')
        .then(response => {
            return response.json();
        })
        .then(data => {
            setColors(data);
            setIsPending(false);
        });
    }, []);


    return (
        <div className="Home">
            {isPending && <div>Loading...</div>}
            {colors && <Array colors={colors} />}
        </div>
    );
}



export default Home;