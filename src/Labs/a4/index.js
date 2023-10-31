import { useState } from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import ReduxExamples from "./ReduxExamples";
function Assignment4() {
    function sayHello() {
        alert("Hello");
    }

    return (
        <div>
            <h1>Assignment 4</h1>
            <ReduxExamples />
            <Add a={1} b={2} />
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
        </div>
    );
}
export default Assignment4;

function PassingDataOnEvent() {
    const add = (a, b) => {
        alert(`${a} + ${b} = ${a + b}`);
    };
    return (
        <div>
            <h2>Passing Data on Event</h2>
            <button onClick={() => add(2, 3)} className="btn btn-primary">
                Pass 2 and 3 to add()
            </button>
        </div>
    );
}

function PassingFunctions({ theFunction }) {
    return (
        <div>
            <h2>Passing Functions</h2>
            <button className="btn btn-primary" onClick={theFunction}>
                Invoke the Function
            </button>
        </div>
    );
}

function EventObject() {
    const [event, setEvent] = useState(null);
    const handleClick = (e) => {
        e.target = e.target.outerHTML;
        delete e.view;
        setEvent(e);
    };
    return (
        <div>
            <h2>Event Object</h2>
            <button
                id="event-button"
                onClick={(e) => handleClick(e)}
                className="btn btn-primary"
            >
                Display Event Object
            </button>
            <pre>{JSON.stringify(event, null, 2)}</pre>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button
                className="btn btn-success"
                onClick={() => setCount(count + 1)}
            >
                Up
            </button>
            <button
                className="btn btn-danger"
                onClick={() => setCount(count - 1)}
            >
                Down
            </button>
        </div>
    );
}

function BooleanStateVariables() {
    const [done, setDone] = useState(true);
    return (
        <div>
            <h2>Boolean State Variables</h2>
            <p>{done ? "Done" : "Not done"}</p>
            <label className="form-control">
                <input
                    type="checkbox"
                    checked={done}
                    onChange={() => setDone(!done)}
                />
                Done
            </label>
            {done && (
                <div className="alert alert-success">Yay! you are done</div>
            )}
        </div>
    );
}

function StringStateVariables() {
    const [firstName, setFirstName] = useState("John");
    return (
        <div>
            <h2>String State Variables</h2>
            <p>{firstName}</p>
            <input
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
        </div>
    );
}

function DateStateVariable() {
    const [startDate, setStartDate] = useState(new Date());
    const dateObjectToHtmlDateString = (date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
            date.getMonth() + 1
        }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
    };
    return (
        <div>
            <h2>Date State Variables</h2>
            <h3>{JSON.stringify(startDate)}</h3>
            <h3>{dateObjectToHtmlDateString(startDate)}</h3>
            <input
                className="form-control"
                type="date"
                value={dateObjectToHtmlDateString(startDate)}
                onChange={(e) => setStartDate(new Date(e.target.value))}
            />
        </div>
    );
}

function ObjectStateVariable() {
    const [person, setPerson] = useState({ name: "Peter", age: 24 });
    return (
        <div>
            <h2>Object State Variables</h2>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            <input
                value={person.name}
                onChange={(e) => setPerson({ ...person, name: e.target.value })}
            />
            <input
                value={person.age}
                onChange={(e) =>
                    setPerson({ ...person, age: parseInt(e.target.value) })
                }
            />
        </div>
    );
}

function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div>
            <h2>Array State Variable</h2>
            <button onClick={addElement}>Add Element</button>
            <ul>
                {array.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteElement(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ParentStateComponent() {
    const [counter, setCounter] = useState(123);
    return (
        <div>
            <h2>Counter {counter}</h2>
            <ChildStateComponent counter={counter} setCounter={setCounter} />
        </div>
    );
}

function ChildStateComponent({ counter, setCounter }) {
    return (
        <div>
            <h3>Counter {counter}</h3>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    );
}
