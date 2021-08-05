import React, {useState} from 'react';
import { fetchUsers } from "../../utils";
import { Redirect } from "react-router-dom";

export const Landing = ({ user, setUser }) => {
    const [newUser, setNewUser] = useState(false);
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [pass,setPass] = useState();

    return(
        <div className="pageContainer">
            <div className="header">
                <h2>Welcome</h2>
                <h4>Please Log in or Sign up</h4>
            </div>
            <form className="logForm" onSubmit={(e) => fetchUsers(e, email, username, pass, setUser)}>
                {newUser &&<input 
                className="logInput" 
                onChange={(e) =>setEmail(e.target.value)} 
                placeholder='Email' />}
                <input 
                className="logInput" 
                onChange={(e) =>setUsername(e.target.value)} 
                placeholder='Username' />
                <input 
                className="logInput" 
                onChange={(e) =>setPass(e.target.value)} 
                placeholder='Password' />
                <button 
                className="logBtn" 
                type='submit'>{newUser ? 'Sign Up' : 'Log In'}</button>
            </form>
            <button 
            className="logBtn" 
            type='button' onClick={() => setNewUser(!newUser)}>{newUser ? 'Log In' : 'Sign Up'}</button>
            {user && <Redirect to ='/home' />}
        </div>
    )
}
