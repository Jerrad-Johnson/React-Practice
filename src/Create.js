import {useState} from "react";

const Create = () => {
    const [color, setColor] = useState('');
    const [value, setValue] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const entry = {color, value};

        setIsPending(true);

        fetch('http://localhost:8000/colors', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(entry)
        }).then(() => {
            setIsPending(false);
        })
    }


    return (
        <div className="create">
            <h2>Add a blog</h2>
            <br />
            <form onSubmit={handleSubmit}>
                <label>Color:</label>
                <textarea
                    required
                    value={color}
                    onChange={(c) => setColor(c.target.value)}
                ></textarea>
                <br /><br />
                <label>Value:</label>
                <textarea
                    required
                    value={value}
                    onChange={(v) => setValue(v.target.value)}
                ></textarea>
                <br /><br />
                {!isPending && <input type="submit"></input>}
            </form>
        </div>
    );
}

export default Create;