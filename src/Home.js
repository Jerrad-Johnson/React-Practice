import { useState, useEffect } from 'react';
import Array from './Array';

function cc(arg){
    console.log(arg);
}

const Home = () => {

const [colors, setColors] = useState(null);
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    fetch('http://localhost:8000/colors')
        .then(response => {
            if (!response.ok) {
                throw Error("No response from the server.");
            }
            return response.json();
        })
        .then(data => {
            setColors(data);
            setIsPending(false)
            setError(false);
        }).catch(err => {
            setError(err.message);
            setIsPending(false);
    });
    }, []);


    return (
        <div className="Home">
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {colors && <Array colors={colors} />}
        </div>
    );
}



export default Home;