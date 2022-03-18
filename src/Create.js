import {useState} from "react";

const Create = () => {
    const [color, setColor] = useState('');
    const [value, setValue] = useState('');

    return (
        <div className="create">
            <h2>Add a blog</h2>
            <br />
            <form>
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

            </form>
        </div>
    );
}

export default Create;