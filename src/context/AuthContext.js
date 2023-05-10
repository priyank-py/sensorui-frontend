import axios from "axios";
import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const baseUrl = "http://127.0.0.1:5000";

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const localToken = JSON.parse(localStorage.getItem('authToken'));
    const localUser = JSON.parse(localStorage.getItem('user'));
    const defaultUser = localUser ? localUser : null;
    const defaultToken = localToken ? localToken : null;
    const [authToken, setAuthToken] = useState(() => defaultToken ? defaultToken : null);
    const [user, setUser] = useState(defaultUser);

    const navigate = useNavigate();

    let loginUser = (e, setLoader) => {
        e.preventDefault();
        axios.post(baseUrl + '/auth/login', {"email": e.target.email.value, "password": e.target.password.value})
            .then(res => {
                if (res.status === 200) {
                    setAuthToken(res.data.access_token);
                    setUser(res.data.user);
                    localStorage.setItem('authToken', JSON.stringify(res.data.access_token));
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    navigate('/');
                }
            })
    }

    let logoutUser = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        localStorage.removeItem('user');
    }

    let contextData = {
        user: user,
        authToken: authToken,
        loginUser: loginUser,
        logoutUser: logoutUser,
        baseUrl: baseUrl
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}