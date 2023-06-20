import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [usersData, setUsersData] = useState("");
    const [firstName, setFirstName] = useState("default first name");
    const [lastName, setLastName] = useState("default last name");

    useEffect(() => {
        //getUsers();

    }, []);


    const checkAndChangeFirstName = event => {
        let input = event.target.value;
        setFirstName(input);
    };

    const checkAndChangeLastName = event => {
        let input = event.target.value;
        setLastName(input);
    };

    const getUsers = () => {
        fetch('http://localhost:8080/users')
            .then(response => response.json())
            .then(jsonData => setUsersData(JSON.stringify(jsonData, null, 2)))
        ;
    }

    const saveNewUser = () => {
        const requestParams = {
            method: 'POST',
            body: JSON.stringify({
                firstName,
                lastName
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        };

        fetch('http://localhost:8080/users/', requestParams)
            .catch((err) => {
                console.log(err.message);
            })
            .finally(() => console.log("POST sended"));
    };

    return (
        <div className="App">
            <header className="App-header">
                <input style={{fontSize: 50}} type="text" onChange={checkAndChangeFirstName} value={firstName}
                       placeholder={"no first name"}/>
                <input style={{fontSize: 50}} type="text" onChange={checkAndChangeLastName} value={lastName}
                       placeholder={"no last name"}/>
                <div>{firstName}</div>
                <div>{lastName}</div>
                <button onClick={() => saveNewUser()}>
                    <div>
                        SAVE
                    </div>
                </button>
                <b/>
                <b/>
                <b/>
                <textarea rows={30} value={usersData}/>
                <button onClick={() => getUsers()}>
                    <div>
                        LOAD
                    </div>
                </button>
            </header>
        </div>
    );
}

export default App;
