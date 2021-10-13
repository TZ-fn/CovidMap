import { MapContainer, TileLayer, Tooltip } from 'react-leaflet';
import { Feature } from 'geojson';
import allCountries from 'public/geojsonData/allCountries.geo.json';
import theme from 'theme/theme';
import { CovidCasesDataForCountry } from 'utils/APIdata.types';
import { mapCountryToNumberOfCases, mapNumberOfCasesToColor } from './Map.utils';
import GeoJSONwithMap from './GeoJSONwithMap/GeoJSONwithMap';

interface MapProps {
  covidCasesData: CovidCasesDataForCountry[];
}

const Map = ({ covidCasesData }: MapProps): JSX.Element => {
  function styleMap(feature: Feature) {
    return {
      fillColor: mapNumberOfCasesToColor(
        mapCountryToNumberOfCases(feature.properties.name, covidCasesData),
        theme,
      ),
      weight: 0.7,
      opacity: 0.7,
      color: `${theme.darkTheme.background}`,
      fillOpacity: 1,
    };
  }

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

      <GeoJSONwithMap
        data={allCountries}
        style={styleMap}
        covidCasesData={covidCasesData}
      ></GeoJSONwithMap>
    </MapContainer>
  );
};

export default Map;
