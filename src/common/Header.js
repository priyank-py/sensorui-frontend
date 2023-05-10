import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Header = () => {
    const {logoutUser} = useContext(AuthContext);
    const currentPath = window.location.pathname
    return (
        <div className="w-full flex items-center justify-between bg-gray-900 sticky top-0">
            <div className="text-2xl py-2 pl-2 text-zinc-200">SensorUI</div>
            <div className="pr-2 text-zinc-200">
                <div className="p-2 hover:cursor-pointer" onClick={logoutUser}>logout</div>
            </div>
        </div>
    )
}

export default Header;
