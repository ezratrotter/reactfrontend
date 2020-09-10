import React from 'react';
import mapboxgl from 'mapbox-gl';
import './App.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXpyYXRyb3R0ZXIiLCJhIjoiY2tldWJqa2EwMGFnMDMwdGo1aGpoZm1yaSJ9.TclRbgHkdfv_-cvv-7wiFg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2,
      api: {
        tilesURL: 'http://192.66.38.54/TileService/GetTile.ashx?',
        ticketURL: 'http://daekning.tdc.dk/teleservice2_tst/GenerateTicket.ashx?',
        ticket: '',
        get url() { return `${this.state.api.tiles}Ticket=${this.state.api.ticket}&Level=${this.state.zoom}&X=${this.state.lng}&Y=${this.state.lat}` },
      }
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>
    )
  }

}

export default App;
