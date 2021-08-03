import { PageContainer } from "../../styledComponents";
import React, {useState} from 'react';
import styled from "styled-components";
import { fetchUsers } from "../../utils";
import { Redirect } from "react-router-dom";

export const Landing = ({ user, setUser }) => {
    const [newUser, setNewUser] = useState(false);
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [pass,setPass] = useState();

    return(
        <PageContainer>
            <Header>
                <h2 >Welcome</h2>
                <h4>Please Log in or Sign up</h4>
            </Header>
            <LogForm onSubmit={(e) => fetchUsers(e, email, username, pass, setUser)}>
                {newUser &&<LogInput onChange={(e) =>setEmail(e.target.value)} placeholder='Email' />}
                <LogInput onChange={(e) =>setUsername(e.target.value)} placeholder='Username' />
                <LogInput onChange={(e) =>setPass(e.target.value)} placeholder='Password' />
                <LogButton type='submit'>{newUser ? 'Sign Up' : 'Log In'}</LogButton>
            </LogForm>
            <LogButton type='button' onClick={() => setNewUser(!newUser)}>{newUser ? 'Log In' : 'Sign Up'}</LogButton>
            {user && <Redirect to ='/home' />}
        </PageContainer>
    )
}

const Header = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
    color: white;
    border-bottom: 2px solid #201e45;
`

const LogInput = styled.input`
    width: 20vw;
`

const LogForm = styled.form`
    width: 35vw;
    align-content: center;
    margin: auto;
`

const LogButton = styled.button`
    width: 20vw;
`