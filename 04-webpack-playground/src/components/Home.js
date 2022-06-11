import { useState } from "react";
import Title from './Title';


const onAddButtonClick = (input, todoList) => {
    return [...todoList, input];
};


const Home = (props) => {
    const [inputTxt, setInputText] = useState('');
    const [todoList, setTodoList] = useState([]);

    return <div className='container'>
        <h2>Home</h2>&nbsp;<span>{props.version}</span>
        <Title/>
        <hr />

        <label htmlFor="inputPassword5" className="form-label">Input</label>
        <textarea type="password"
            id="inputPassword5"
            onChange={e => setInputText(e.target.value)}
            className="form-control"
            value={inputTxt}
            aria-describedby="passwordHelpBlock" />

        <div>
            <button className="btn btn-secondary my-2" onClick={(e) => {
                setTodoList(onAddButtonClick(inputTxt, todoList));
                setInputText('');
            }}>Add</button>
        </div>

        <hr />
        <ul>
            {
                todoList.map((item, i) => {
                    return <div key={i}>
                        <p>{i + 1}:&nbsp;{item}</p>
                    </div>
                })
            }
        </ul>
    </div >
};

export default Home;