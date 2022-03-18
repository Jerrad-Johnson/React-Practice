import {useEffect, useState} from "react";

const useFetch = (url) => { // custom hooks must always start with "use"

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error("No response from the server.");
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false)
                setError(false);
            }).catch(err => {
            setError(err.message);
            setIsPending(false);
        });
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;