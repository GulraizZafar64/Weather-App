import React, { useState } from "react";
import clouds from "./images/clouds.svg";
import sunny from "./images/sunny.svg";
import north from "./images/north.svg";

import { Image, Main, Section } from "./styledComponents";
import axios from "axios";
import { config } from "./config";
import { Search, Temperature, TimeCard } from './components';
import toast, { Toaster } from "react-hot-toast";
const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = async (e) => {
    if (e.key === "Enter") {
      try {
        await axios
          .get(
            `${config.base}weather?q=${query}&units=metric&APPID=${config.key}`
          )
          .then((res) => {
            setWeather(res.data);
            setQuery("");
          });
      } catch (error) {
        toast.error('Please enter correct city name')
        console.log(error);
      }
    }
  };
  const renderImage = () => {
    if (typeof weather.main !== "undefined") {
      if (weather.main.temp > 16) {
        return <Image src={sunny} />;
      } else if (weather.main.temp <= 0) {
        return <Image src={north} />;
      } else if (weather.main.temp < 16) {
        return <Image src={clouds} />;
      }
    }
  };

  return (
    <Main>
      <Toaster/>
      <Section>
        <Search query={query} search={search} setQuery={setQuery} />

        {typeof weather.main != "undefined" && (
          <React.Fragment>
            <Temperature weather={weather} renderImage={renderImage} />
            <TimeCard weather={weather} />
          </React.Fragment>
        )}
      </Section>
    </Main>
  );
};

export default App;
