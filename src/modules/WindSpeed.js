import React, { useContext, useEffect, useState } from 'react';
import LineGraph from '../graphs/LineGraph';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const WindSpeed = ({ startDate, endDate }) => {
    const [data, setData] = useState([])
    const {baseUrl, authToken, logoutUser} = useContext(AuthContext);

    useEffect(() => {
        axios.get(baseUrl + '/graph/wind_speed', {headers: {
            Authorization: `Bearer ${authToken}`,
          }, params: {
            startDate,
            endDate
          }})
            .then(res => {
                console.log(JSON.parse(res.data))
                setData(JSON.parse(res.data))
            }).catch(err => {
                console.log(err)
                // logoutUser()
            })

    }, [startDate, endDate])

    return (
        <div className='w-1/2 h-1/2 border border-2' draggable>
            <LineGraph data={data} label="Wind speed in km/h" line="#81d4fa" color="#03a9f4" />
        </div>
    )
}

export default WindSpeed;