# react-weather-station 👋
A customizable react component that displays weather informations about a given city

## Installation
`npm i react-weather-station`

## Demo 👀
[https://axelmy-projects-showcase.firebaseapp.com/react-weather-station](https://axelmy-projects-showcase.firebaseapp.com/react-weather-station)

## Screenshots 
![screenshots](https://i.imgur.com/O6KMXWf.png)

## Usage 💻

```javascript
import React, { useState, useRef } from 'react';
import { WeatherWidget } from 'react-weather-station';

const BasicExample = () => {
    const [location, setLocation] = useState('lausanne')
    const locationRef = useRef()

    return (
        <>
            <input ref={locationRef} type='text' />&nbsp;
            <button onClick={() => setLocation(locationRef.current.value)}>search</button>
            
            <div style={{marginTop: '10px'}}></div>

            <WeatherWidget location={location} />
        </>
    );
};

export default BasicExample;
```

## API ✔

| Properties | type | default | description |
|--|--|--|--|
| location | string | '' | The location to fetch the weather for |
| theme | string | 'main' | |
| color | string | 'secondary | The little splashes of colors | 
| moreDetails | boolean | false | wether to show more details or not|

