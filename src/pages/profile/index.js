import Navbar from '../../components/navbar';
import { useState } from 'react';
import { updateUserDetails } from "../../utils";
import { deleteUser } from "../../utils";

export const Profile = ({ user, setUser}) => {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [pass,setPass] = useState();

    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem("MyToken");
        setUser();
    }

    return (
        <div className="pageContainer">
            <Navbar />
            <h1 className="header">User settings</h1>
            <p className="navText">Please enter new username, email or password but all entries MUST be filled</p>
            <form className="logForm" onSubmit={(e) => updateUserDetails(e, email, username, pass, user, setUser)}>
            <h3>Change Username</h3>
            <input 
            className="logInput" 
            type="text" 
            name="name"
            onChange={(e) =>setUsername(e.target.value)} placeholder='New Username' />
            <h3>Change Email</h3>
            <input 
            className="logInput" 
            type="text" 
            name="name"
            onChange={(e) =>setEmail(e.target.value)} placeholder='New Email' />
            <h3>Change Password</h3>
            <input
            className="logInput"  
            type="text" 
            name="name"
            onChange={(e) =>setPass(e.target.value)} placeholder='New Password' />
            <button
            className="logBtn" 
             type="submit" >Update</button>
            </form>

            <h2 className="navText">Log Out</h2>
            <button 
            className="logBtn"
            type="submit" 
            onClick={logoutHandler}>Log Out</button>

            <h2 className="navText">Delete Account</h2>
            <button 
            className="logBtn"
            type="submit"
            onClick={() => {
                deleteUser(user,setUser)
            }}>Delete Account</button>
            
           </div>
    )
};