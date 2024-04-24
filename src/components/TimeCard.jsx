import React from 'react';
import { Blur, DateS, Details, DetailsContainer, DetailsMain, DetailsValues, Row, Time } from '../styledComponents';
import { WiHumidity } from "react-icons/wi";
const TimeCard = ({ weather }) => {
    const formatDate = (date) => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        const day = days[date.getDay()];
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const dayOfMonth = date.getDate();

        return `${day} ${dayOfMonth} ${month} ${year}`;
    };

    const formatTime = (date) => {
        const hours = date.getHours().toLocaleString().padStart(2, '0');
        const minutes = date.getMinutes().toLocaleString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    return (
        <Blur>
            <Row>
                <Time>{formatTime(new Date())}</Time>
            </Row>
            <DateS>{formatDate(new Date())}</DateS>
            <DetailsContainer>
                <DetailsMain>
                    <Details>Humidity</Details>
                    <DetailsValues>{weather && weather.main && weather.main.humidity}%</DetailsValues>
                </DetailsMain>
                <DetailsMain>
                    <Details>Wind Speed</Details>
                    <DetailsValues>{weather && weather.wind && weather.wind.speed}</DetailsValues>
                </DetailsMain>
            </DetailsContainer>
        </Blur>
    );
};

export default TimeCard;
