import styled from "styled-components";
import background from "./images/background.png";

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 11px;
  padding: 8px;
  color: #a6a6a6;
  transition: 0.2s ease-in-out;
  width: 100%;
  padding-left: 10px;
  background: #ffffffc5;
  :focus {
    box-shadow: 0px 6px 9px #b4b4b4;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Section = styled.section`
  width: 29%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1440px) and (min-width: 1024px) {
    width: 45%;
  }
  @media (max-width: 1024px) and (min-width: 425px) {
    width: 50%;
  }
  @media (max-width: 768px) and (min-width: 258px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  margin-top: 55px;
  font-size: 55px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #3d3d3d;
  @media (max-width: 768px) and (min-width: 258px) {
    font-size: 40px;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Temp = styled.h3`
  color: #448fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin-left: 10px;
  font-size: 49px;
  font-weight: 400;
  @media (max-width: 768px) and (min-width: 258px) {
    font-size: 40px;
  }
`;

export const Image = styled.img`
  width: 60px;
`;

export const Time = styled.h1`
  font-size: 46px;
  font-family: "Roboto", sans-serif;
  color: #3d3d3d;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Blur = styled.div`
  width: 100%;
  height: auto;
  padding: 17px 0;
  background: #ffffff54;
  backdrop-filter: blur(16px);
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  @media (max-width: 768px) and (min-width: 258px) {
    width: 100%;
  }
`;

export const DateS = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  margin-top: 9px;
  @media (max-width: 768px) and (min-width: 258px) {
    font-size: 17px;
  }
`;
export const DetailsContainer = styled.div`
 display: flex;
 justify-content: space-around;
 width: 100%;
 margin-top: 20px;
`;
export const DetailsMain = styled.div`
 display: flex;
 gap: 20px;
`;
export const Details = styled.h4`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  margin-top: 9px;
  @media (max-width: 768px) and (min-width: 258px) {
    font-size: 15px;
  }
`;
export const  DetailsValues= styled.h4`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  margin-top: 9px;
  @media (max-width: 768px) and (min-width: 258px) {
    font-size: 15px;
  }
`;



