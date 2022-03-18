import {useEffect, useState} from "react";

const useFetch = (url) => { // custom hooks must always start with "use"

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abort = new AbortController();

        fetch(url, {signal: abort.signal })
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
                if (err.name === 'AbortError'){
                    return;
                }
            setError(err.message);
            setIsPending(false);
        });

        return () => abort.abort();

    }, [url]);

    return {data, isPending, error}
}

export default useFetch;