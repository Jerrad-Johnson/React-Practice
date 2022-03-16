import { useState } from 'react';
import Array from './Array';

function cc(arg){
    console.log(arg);
}




const Home = () => {
    const [arrayOfPeople, setArrayOfPeople] = useState([
        { name: "Tommy", age: 30, occupation: "Unemployed", id: 1 },
        { name: "Jerrad", age: 32, occupation: "Master", id: 2 },
    ]);

const handleDelete = (id) => {
    const newPeople = arrayOfPeople.filter(person => person.id !== id);
    setArrayOfPeople(newPeople);
}

    return (
        <div className="Home">
            <Array arrayOfPeople={arrayOfPeople} handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;