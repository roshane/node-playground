import { useState } from "react";

const LoginForm = ({ }) => {

    const [userName, setUserName] = useState("");

    const onUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    return (
        <>
            <input type="text" placeholder="User Name" onChange={onUserNameChange} />
            <p data-testid="user-name-output">username: {userName}</p>
        </>
    );
}


export default LoginForm;