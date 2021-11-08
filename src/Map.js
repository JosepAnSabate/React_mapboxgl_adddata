import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken='pk.eyJ1Ijoiam9zZXBhbnNhYmF0ZSIsImEiOiJja21kejl5bHUxdzhoMnBwaDg0YjJ1bDRxIn0.fVRAXWvmIKHZ-4igiQQeRg'

const data = [
    {
        "location": "Plaça Cívica, Universitat Autònoma de Barcelona",
        "city": "Cerdanyola del Vallès",
        "state": "Catalunya",
        "coordinates": [2.103756, 41.502007]
    },
    {
        "location": "Portal del Bové",
        "city": "Montblanc",
        "state": "Catalunya",
        "coordinates": [ 1.16384, 41.377049]
    },
    {
        "location": "Parc Güell",
        "city": "Barcelona",
        "state": "Catalunya",
        "coordinates": [ 2.153492,41.41432]
    }
]

class Mapp extends Component{
    constructor(props){
        super(props);
        this.state = {
            lng: 1.9,
            lat: 41.5,
            zoom: 8
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