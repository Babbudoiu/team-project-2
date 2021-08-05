import { PageContainer } from "../../styledComponents"
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
        <PageContainer>
            <Navbar />
            <h1 className="navText">User settings</h1>
            <p className="navText">Please enter new username, email or password but all entries MUST be filled</p>
            <form onSubmit={(e) => updateUserDetails(e, email, username, pass, user, setUser)}>
            <label className="navText">
            Change username:
            <input 
            type="text" 
            name="name"
            onChange={(e) =>setUsername(e.target.value)} placeholder='New Username' />
            </label>
            <label className="navText">
            Change email:
            <input 
            type="text" 
            name="name"
            onChange={(e) =>setEmail(e.target.value)} placeholder='New Email' />
            </label>
            <label className="navText">
            Change password:
            <input 
            type="text" 
            name="name"
            onChange={(e) =>setPass(e.target.value)} placeholder='New Password' />
            </label>
            <button type="submit" >Update</button>
            </form>

            <h2 className="navText">Log Out</h2>
            <button type="submit" onClick={logoutHandler}>Log Out</button>

            <h2 className="navText">Delete Account</h2>
            <button type="submit"onClick={() => {
                deleteUser(user,setUser)
            }}>Delete Account</button>
            
           </PageContainer>
    )
};