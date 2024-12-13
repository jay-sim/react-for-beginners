import { useState } from "react";
import { Link } from "react-router-dom/";

function ToDo() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") return;
        setToDos((curruntArray) => [toDo, ...curruntArray]);
        setToDo("");
    }
    return (
        <div>
            <h1>ToDo List ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={toDo}
                    onChange={onChange}
                    type="text"
                    placeholder="Write your to do"
                />
                <button>Add To Do</button>
            </form>
            <hr /> {/* horizontal rule */}
            <ul>
                {toDos.map((item, index) => <li key={index} >{item}</li>)}
            </ul>
            <div>
                <Link to={`/`}>
                    <button>홈으로</button>
                </Link>
            </div>
        </div>
    );
}

export default ToDo;