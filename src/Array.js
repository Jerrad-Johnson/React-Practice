import {Link} from "react-router-dom";

const Array = ({ colors }) => {

    return (
        <div className="people">
            { colors.map((color) => (
                <div className="name" key={color.id}>
                    <Link to={`/ArrayDetails/${color.id}`} >
                    <h2>{ color.color}</h2>
                    <h2>{ color.value }</h2>
                    <h2>{ color.id }</h2>
                    </Link>
                    <br /><br />
                </div>
            ))}

        </div>
    )
}

export default Array;