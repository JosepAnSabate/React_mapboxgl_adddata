import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken='pk.eyJ1Ijoiam9zZXBhbnNhYmF0ZSIsImEiOiJja21kejl5bHUxdzhoMnBwaDg0YjJ1bDRxIn0.fVRAXWvmIKHZ-4igiQQeRg'

const data = [
    {
        "location": "Manhattan Ave & Norman Ave at NE corner",
        "city": "Brooklyn",
        "state": "New York",
        "coordinates": [-73.9516,40.7255]
    },
    {
        "location": "6th Ave & 42nd St at NW corner",
        "city": "Manhattan",
        "state": "New York",
        "coordinates": [-73.9839,40.7553]
    },
    {
        "location": "Manhattan Ave & Norman Ave at NE corner",
        "city": "Manhattam",
        "state": "New York",
        "coordinates": [-73.98827,40.7182]
    }
]

class Mapp extends Component{
    constructor(props){
        super(props);
        this.state = {
            lng: -74,
            lat: 40.74128,
            zoom: 12
        }
    }
    componentDidMount() {
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
        })
        //loop foor each pe cada punt o registre
        data.forEach((location) => {
            console.log(location)
            var marker = new mapboxgl.Marker()
                            .setLngLat(location.coordinates)
                            .setPopup(new mapboxgl.Popup({ offset: 30 })
                            .setHTML('<h4>' + location.city + '</h4>' + location.location ))
                            .addTo(map);
        })
    }
    render(){
        return(
            <div>
                <div ref={el => this.mapContainer = el} style={{width:'90%', height:'80vh',margin: 'auto'/* centra mapa */}}/>
            </div>
        )
    }
}

export default Mapp;