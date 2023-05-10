import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate()

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div>

                <form onSubmit={loginUser}>
                    <div className="mb-4">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control block px-4 py-2 font-normal border m-0 rounded transition ease-in-out"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control block px-4 py-2 font-normal border m-0 rounded transition ease-in-out"
                        />
                    </div>
                    <button className="border border-white bg-blue-500 text-white rounded px-4 py-2">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Login;