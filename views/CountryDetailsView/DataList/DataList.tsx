import { ReactElement } from 'react';
import formatObjectNumbersToPolishLocale from 'utils/formatObjectNumbersToPolishLocale.utils';
import { StyledDataList } from './DataList.styles';

interface DataListProps {
  countryData: any;
}

export default function DataList({ countryData }: DataListProps): ReactElement {
  const formattedCountryData = formatObjectNumbersToPolishLocale(countryData);
  return (
    <StyledDataList>
      <h3>Statistics</h3>
      <p> Recovered: {formattedCountryData.recovered}</p>
      <h4>Statistics for today:</h4>
      <p> New cases today: {formattedCountryData.todayCases}</p>
      <p> Deaths today: {formattedCountryData.todayDeaths}</p>
      <p> Active cases for today: {formattedCountryData.active}</p>
      <p> Recovered today: {formattedCountryData.todayRecovered}</p>
      <h4>Statistics per one million:</h4>
      <p>Cases per one million: {formattedCountryData.casesPerOneMillion}</p>
      <p>Deaths per one million: {formattedCountryData.deathsPerOneMillion}</p>
      <p>Active per one million: {formattedCountryData.activePerOneMillion}</p>
      <p>Recovered per one million: {formattedCountryData.recoveredPerOneMillion}</p>
    </StyledDataList>
  );
}
