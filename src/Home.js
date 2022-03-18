import { useState, useEffect } from 'react';
import Array from './Array';
import useFetch from './useFetch';

function cc(arg){
    console.log(arg);
}


const Home = () => {

const { data: colors, isPending, error } = useFetch('http://localhost:8000/colors');

    return (
        <div className="Home">
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {colors && <Array colors={colors} />}
        </div>
    );
}

export default Home;