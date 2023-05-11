import React, { useContext, useState } from "react";
import AuthContext from "./context/AuthContext";
import Temperature from "./modules/Temperature";
import Precipitation from "./modules/Precipitation";
import Header from "./common/Header";
import Humidity from "./modules/Humidity";
import WindSpeed from "./modules/WindSpeed";
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const Home = () => {
    const currentDate = new Date();
    const timestamp = currentDate.getTime() - (5 * 60 * 1000);
    const fiveMinsAgo = new Date(timestamp);

    const {logoutUser} = useContext(AuthContext)
    const [startDate, setStartDate] = useState(fiveMinsAgo)
    const [endDate, setEndDate] = useState(currentDate)

    return (
        <div>
			<Header />
            <div className="flex items-center space-x-2 justify-end mr-2">
            <div>
                Pick range
            </div>
            <div className="flex mt-1">
                <div>
                    <DateTimePicker onChange={setStartDate} value={startDate} />
                </div>
                <div>
                    <DateTimePicker onChange={setEndDate} value={endDate} />
                </div>
            </div>
            </div>
            <div className="flex space-x-2 mt-4">
                <Temperature startDate={startDate.getTime()} endDate={endDate.getTime()} />
                <Precipitation startDate={startDate.getTime()} endDate={endDate.getTime()}  />
            </div>
            <div className="flex space-x-2 mt-2">
                <Humidity startDate={startDate.getTime()} endDate={endDate.getTime()}  />
                <WindSpeed startDate={startDate.getTime()} endDate={endDate.getTime()}  />
            </div>
        </div>
    )
}

export default Home;