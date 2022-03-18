import {useParams} from "react-router-dom";
import useFetch from "./useFetch";

const ArrayDetails = () => {
    const { id } = useParams();
    let url = "http://localhost:8000/colors/" + id;
    const { data: singleColor, error, isPending } = useFetch(url);
    return (
        <div className="array-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error}</div> }
            { singleColor && (
                <div>
                    <div>Color: {singleColor.value}</div>
                    <div>id: {singleColor.id}</div>
                </div>
                )}
        </div>
    );
}
export default ArrayDetails;