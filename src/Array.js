const Array = ({ arrayOfPeople, handleDelete }) => {

    const listOfPeople = arrayOfPeople;

    return (
        <div className="people">
            { listOfPeople.map((person) => (
                <div className="name" key={person.id}>
                    <h2>{ person.name }</h2>
                    <h2>{ person.age }</h2>
                    <button onClick={() => handleDelete(person.id)}>Delete</button>
                    <br /><br />
                </div>
            ))}

        </div>
    )
}

export default Array;