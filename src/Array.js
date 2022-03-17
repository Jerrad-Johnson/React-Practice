const Array = ({ colors }) => {

    return (
        <div className="people">
            { colors.map((color) => (
                <div className="name" key={color.id}>
                    <h2>{ color.value }</h2>
                    <h2>{ color.id }</h2>
                    <br /><br />
                </div>
            ))}

        </div>
    )
}

export default Array;