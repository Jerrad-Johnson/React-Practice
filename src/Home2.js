import { useState } from 'react';
import Array from './Array';

function cc(arg){
    console.log(arg);
}

const handleButtonClickAnonymous = (arg) => {
    cc(arg);
}

const Home = () => {
    const [buttonName, setName] = useState('Jerrad');
    const [age, setAge] = useState(32);
    const [title, setTitle] = useState('troll');

    const [defaultArray, newArray] = useState([
        { name: "Tommy", age: 30, occupation: "Unemployed", id: 1 },
        { name: "Jerrad", age: 32, occupation: "Master", id: 2 },
    ]);

    const deleteSingleArray = (id) => {
        const newStuff = defaultArray.filter(defaultArray => defaultArray.id != id);
        newArray(newStuff);
    }

    const handleButtonClick = (e) => {
        setName('Tommy');
        setAge(30);
    }

    const handleDivClick = () => {
        setTitle('wonderful troll');
    }

    return (
        <div className="Home">
            <h1>JJ Media</h1>
            <button onClick={handleButtonClick}> { buttonName } is { age }</button>
            <button onClick={function(){
                handleButtonClickAnonymous("name");
            }}>Anonymous Function Button</button>
            <div onClick={handleDivClick}> I am such a { title }.</div>

            <Array defaultArray={defaultArray} deleteSingleArray={deleteSingleArray}/>


            <Array defaultArray={defaultArray.filter((a) => a.name === 'Jerrad' )}/>

        </div>
    );
}

export default Home;