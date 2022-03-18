import {useState} from "react";

const Create = () => {
    const [color, setColor] = useState('');
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const entry = {color, value};

        console.log(entry);
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
                <input type="submit"></input>
            </form>
        </div>
    );
}

export default Create;