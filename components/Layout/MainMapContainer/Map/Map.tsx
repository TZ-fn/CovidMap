import { MapContainer, TileLayer } from 'react-leaflet';
import { StyleFunction } from 'leaflet';
import { Feature, FeatureCollection } from 'geojson';
import allCountries from 'public/geojsonData/allCountries.geo.json';
import theme from 'theme/theme';
import { CovidCasesDataForCountry } from 'utils/APIdata.types';
import { mapCountryToNumberOfCases, mapNumberOfCasesToColor } from './Map.utils';
import GeoJSONwithMap from './GeoJSONwithMap/GeoJSONwithMap';
import MapLegend from './MapLegend/MapLegend';

interface MapProps {
  covidCasesData: CovidCasesDataForCountry[];
}

const Map = ({ covidCasesData }: MapProps): JSX.Element => {
  function styleMap(feature: Feature) {
    if (!feature.properties) {
      return {};
    }
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
      minZoom={2}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
      maxBoundsViscosity={0.8}
      worldCopyJump={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <GeoJSONwithMap
        data={allCountries as FeatureCollection}
        style={styleMap as StyleFunction}
        covidCasesData={covidCasesData}
      />
      <MapLegend />
    </MapContainer>
  );
};

export default Map;
