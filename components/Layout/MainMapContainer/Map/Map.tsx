import { useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { Layer, LeafletMouseEvent } from 'leaflet';
import allCountries from 'public/geojsonData/allCountries.geo.json';
import theme from 'theme/theme';
import { CovidCasesDataForCountry } from 'utils/APIdata.types';
import { mapCountryToNumberOfCases, mapNumberOfCasesToColor } from './Map.utils';

interface MapProps {
  covidCasesData: CovidCasesDataForCountry[];
}

const Map = ({ covidCasesData }: MapProps): JSX.Element => {
  const geoJsonRef = useRef();

  function styleMap(feature) {
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

  function highlightFeature(e: LeafletMouseEvent) {
    const layer = e.target;

    layer.setStyle({
      weight: 3,
      color: `${theme.darkTheme.background}`,
      dashArray: '',
      fillOpacity: 0.8,
    });

    layer.bringToFront();
  }

  function resetHighlight(e: LeafletMouseEvent) {
    geoJsonRef.current.resetStyle(e.target);
  }

  // function zoomToFeature(e) {
  //   map.fitBounds(e.target.getBounds());
  // }

  function onEachFeature(feature, layer: Layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      // click: zoomToFeature,
    });
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
      <GeoJSON
        data={allCountries}
        style={styleMap}
        onEachFeature={onEachFeature}
        ref={geoJsonRef}
      />
    </MapContainer>
  );
};

export default Map;
