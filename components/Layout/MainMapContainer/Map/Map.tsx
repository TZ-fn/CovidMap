import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import allCountries from 'public/geojsonData/allCountries.geo.json';

const Map = (): JSX.Element => {
  const myStyle = {
    color: 'hsl(198, 50%, 25%)',
    weight: 1,
    opacity: 0.5,
    fillColor: '#66c2a5',
    fillOpacity: 0.7,
  };

  return (
    <MapContainer
      center={[45, 0]}
      zoom={2}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <GeoJSON data={allCountries} style={myStyle} />
    </MapContainer>
  );
};

export default Map;
