import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { fakeAuth } from '../service/auth';

export default function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <form>
                <input type="text" placeholder="email-id" autoComplete="new-password" />
                <input type="password" placeholder="password" autoComplete="new-password" />
            </form>
            <button onClick={login}>Log in</button>
        </div>
    );
}