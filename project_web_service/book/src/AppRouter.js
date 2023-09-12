import React from "react";
import { BrowserRouter as Router, Link, Route, Switch, useNavigate, Redirect, NavLink, Navigate, Routes } from "react-router-dom"

export default function AppRouter() {
    return (
        <Router>

                <Route path="/admin" render={() => {
                    return localStorage.getItem("accessToken") ? <Admin /> : <Navigate to="/login" />
                }}>
                    <Admin />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>

        </Router>
    )
}
export function Admin() {
    let navigate = useNavigate();
    let logout = () => {
        localStorage.removeItem("accessToken");
        navigate.replace("/login");
    }
    return <div>Admin</div>
}
function Login() {
    let navigate = useNavigate();

    let login = () => {
        localStorage.setItem("accessToken", true);
        navigate.replace("/admin");
    }
    return
    <div>
        <h2>Login</h2>
        <button onClick={login}>Login</button>
    </div>
}