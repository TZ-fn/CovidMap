import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import allCountries from 'public/geojsonData/allCountries.geo.json';
import countryNamesFromCovidData from 'assets/data/countryNames';
import theme from 'theme/theme';
import { CovidCasesDataForCountry } from 'utils/APIdata.types';

interface MapProps {
  covidCasesData: CovidCasesDataForCountry[];
}

const Map = ({ covidCasesData }: MapProps): JSX.Element => {
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

  function style(feature) {
    return {
      fillColor: mapNumberOfCasesToColor(mapCountryToNumberOfCases(feature.properties.name)),
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
      <GeoJSON data={allCountries} style={style} />
    </MapContainer>
  );
};

export default Map;
