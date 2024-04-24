import React from 'react'
import { FlexColumn, Row, Temp, Title } from '../styledComponents'

const Temperature = ({weather,renderImage}) => {
  return (
    <FlexColumn>
    <Title>
      {weather.name}, {weather.sys.country}
    </Title>
    <Row>
      {renderImage()}
      <Temp>{Math.round(weather.main.temp)}°c ({weather.weather[0].main})</Temp>
    </Row>
  </FlexColumn>
  )
}

export default Temperature