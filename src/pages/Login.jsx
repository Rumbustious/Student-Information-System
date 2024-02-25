import React from "react";
import "../styles/loginStyle.css";

export default function Login() {
    return (
        <div class="parent">
            <div class="content">
                <div class="login">
                    <div>
                        <h1>
                            <b>Welcome </b>
                        </h1>
                        <h5>please enter your details</h5>
                    </div>
                    <br />
                    <br />
                    <div>
                        <label> User name </label>
                        <br />
                        <input
                            className="input"
                            type="email"
                            id="username"
                            placeholder="User name"
                            required
                        />
                    </div>
                    <div>
                        <label> Password </label>
                        <br />
                        <input
                            className="input"
                            type="password"
                            id="password"
                            placeholder="Password"
                            required
                        />
                        <br />
                        <br />
                        <button onclick="login()">Login</button>
                        <br />
                    </div>
                    <div class="image">
                        <img className="img" src="../assets/admin.PNG" />
                    </div>
                </div>
            </div>
        </div>
    );
}
