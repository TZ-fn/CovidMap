import { useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import allCountries from 'public/geojsonData/allCountries.geo.json';
import countryNamesFromCovidData from 'assets/data/countryNames';
import theme from 'theme/theme';
import { CovidCasesDataForCountry } from 'utils/APIdata.types';

interface MapProps {
  covidCasesData: CovidCasesDataForCountry[];
}

const Map = ({ covidCasesData }: MapProps): JSX.Element => {
  const geoJsonRef = useRef();

  const mapCountriesNamesToCovidDataCountries = (countryNameFromMap: string) => {
    if (countryNamesFromCovidData[countryNameFromMap]) {
      return countryNamesFromCovidData[countryNameFromMap];
    } else {
      return countryNameFromMap;
    }
  };

  const mapCountryToNumberOfCases = (countryNameFromMap: string) => {
    return covidCasesData.filter(
      (CovidCasesDataForCountry) =>
        CovidCasesDataForCountry.country ===
        mapCountriesNamesToCovidDataCountries(countryNameFromMap),
    )[0]?.cases;
  };

  const mapNumberOfCasesToColor = (numberOfCases: number) => {
    switch (true) {
      case numberOfCases > 10000000:
        return theme.dataColors.WebOrange;
      case numberOfCases > 5000000:
        return theme.dataColors.Coral;
      case numberOfCases > 2500000:
        return theme.dataColors.Carnation;
      case numberOfCases > 1000000:
        return theme.dataColors.Cranberry;
      case numberOfCases > 100000:
        return theme.dataColors.Tapestry;
      case numberOfCases > 10000:
        return theme.dataColors.ButterflyBush;
      case numberOfCases > 1000:
        return theme.dataColors.Chambray;
      case numberOfCases > 100:
        return theme.dataColors.AstronautBlue;
      default:
        return theme.dataColors.NoData;
    }
  };

  function styleMap(feature) {
    return {
      fillColor: mapNumberOfCasesToColor(mapCountryToNumberOfCases(feature.properties.name)),
      weight: 0.7,
      opacity: 0.7,
      color: `${theme.darkTheme.background}`,
      fillOpacity: 1,
    };
  }

  function highlightFeature(e: Event) {
    const layer = e.target;

    layer.setStyle({
      weight: 3,
      color: `${theme.darkTheme.background}`,
      dashArray: '',
      fillOpacity: 0.8,
    });

    layer.bringToFront();
  }

  function resetHighlight(e: Event) {
    geoJsonRef.current.resetStyle(e.target);
  }

  // function zoomToFeature(e) {
  //   map.fitBounds(e.target.getBounds());
  // }

  function onEachFeature(feature, layer) {
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
