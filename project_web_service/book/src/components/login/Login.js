import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function login(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/users/login", {
                email: email,
                password: password,
            }).then((res) => {
                if (res.data.message == "Email not exits") {
                    alert("Email not exits");
                } else if (res.data.message == "Login Success") {
                    alert("Login Success");
                    navigate("/")
                } else {
                    alert("Incorrect Email and Password not match")
                }
            })
        } catch (error) {

        }
    }

    return (
        <>
            <section className="vh-100" style={{ background: "rgb(243, 242, 236)" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                            alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form method="post">

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <a >
                                                        <img style={{ backgroundPosition: "center" }} src="./images/main-logo.png" alt="logo" />
                                                    </a>

                                                </div>
                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your
                                                    account</h5>
                                                {/* <div className="alert alert-success" role="alert" th: if="${param.logout}">
                                                    <strong>
                                                        You have been logged out successfully.
                                                    </strong>
                                                </div> */}

                                                {/* <div className="alert alert-danger" role="alert" th: if="${param.error}">
                                                    <strong>
                                                        Invalid Email or password.
                                                    </strong>
                                                </div> */}
                                                {/* <div className="alert alert-success" role="alert" th: if="${msg==false}" style="z-index: 999">
                                                    <strong>
                                                        Register Success.
                                                    </strong>
                                                </div> */}
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form2Example17"
                                                        className="form-control form-control-lg"
                                                        name="email" value={email}
                                                        onChange={(e) => { setEmail(e.target.value) }} />
                                                    <label className="form-label"
                                                        for="form2Example17">
                                                        Email address
                                                    </label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example27"
                                                        className="form-control form-control-lg"
                                                        name="password"
                                                        value={password}
                                                        onChange={(e) => { setPassword(e.target.value) }}

                                                    />
                                                    <label className="form-label" for="form2Example27">Password</label>
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="submit"
                                                        onClick={login}
                                                    >Login</button>
                                                </div>

                                                <a className="small text-muted" href="#!">Forgot password?</a>
                                                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account?
                                                    <Link to="/register" style={{ color: "#393f81" }}>
                                                        Register here
                                                    </Link>
                                                </p>
                                                <a href="#!" className="small text-muted">Terms of use.</a>
                                                <a href="#!" className="small text-muted">Privacy policy</a>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}