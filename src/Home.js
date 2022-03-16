import { useState, useEffect } from 'react';
import Array from './Array';

function cc(arg){
    console.log(arg);
}

const Home = () => {

const [name, setName] = useState('Tommy');


useEffect(() => {
    cc("test");
}, [name]);

    return (
        <div className="Home">
            <button onClick={() => setName('Jerrad')}>change name</button>
            <p>{ name }</p>
        </div>
    );
}

export default Home;