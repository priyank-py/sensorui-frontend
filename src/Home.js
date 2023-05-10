import React, { useContext } from "react";
import AuthContext from "./context/AuthContext";
import Temperature from "./modules/Temperature";
import Precipitation from "./modules/Precipitation";
import Header from "./common/Header";
import Humidity from "./modules/Humidity";
import WindSpeed from "./modules/WindSpeed";

const Home = () => {
    const {logoutUser} = useContext(AuthContext)
    return (
        <div>
			<Header />
            <div className="flex space-x-2 mt-4">
                <Temperature />
                <Precipitation />
            </div>
            <div className="flex space-x-2 mt-2">
                <Humidity />
                <WindSpeed />
            </div>
        </div>
    )
}

export default Home;