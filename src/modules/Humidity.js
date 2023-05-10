import React, { useContext, useEffect, useState } from 'react';
import LineGraph from '../graphs/LineGraph';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const Humidity = () => {
    const [data, setData] = useState([])
    const {baseUrl, authToken, logoutUser} = useContext(AuthContext);

    useEffect(() => {
        axios.get(baseUrl + '/graph/humidity', {headers: {
            Authorization: `Bearer ${authToken}`,
          }})
            .then(res => {
                console.log(JSON.parse(res.data))
                setData(JSON.parse(res.data))
            }).catch(err => {
                console.log(err)
                // logoutUser()
            })

    }, [])

    return (
        <div className='w-1/2 h-1/2 border border-2' draggable>
            <LineGraph data={data} label="Humidity in %" line="#80deea" color="#0097a7" />
        </div>
    )
}

export default Humidity;