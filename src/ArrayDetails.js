import {useParams} from "react-router-dom";

const ArrayDetails = () => {
    const { id } = useParams();

    return (
        <div className="array-details">
            <h2>Array Details -- { id }</h2>
        </div>
    );
}
export default ArrayDetails;