import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {useHistory} from "react-router-dom";

const ArrayDetails = () => {
    const { id } = useParams();
    let url = "http://localhost:8000/colors/" + id;
    const { data: singleColor, error, isPending } = useFetch(url);
    const history = useHistory();

    const deleteColor = () => {
        fetch(url, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return (
        <div className="array-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error}</div> }
            { singleColor && (
                <div>
                    <div>Color: {singleColor.color}</div>
                    <div>Color: {singleColor.value}</div>
                    <div>id: {singleColor.id}</div>
                    <br /><br />
                    <button onClick={deleteColor}>delete</button>
                </div>
                )}
        </div>
    );
}
export default ArrayDetails;