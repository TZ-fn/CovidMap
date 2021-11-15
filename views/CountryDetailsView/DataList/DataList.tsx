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
      <li> Recovered: {formattedCountryData.recovered}</li>
      <h4>Statistics for today:</h4>
      <li> New cases today: {formattedCountryData.todayCases}</li>
      <li> Deaths today: {formattedCountryData.todayDeaths}</li>
      <li> Active cases for today: {formattedCountryData.active}</li>
      <li> Recovered today: {formattedCountryData.todayRecovered}</li>
      <h4>Statistics per one million:</h4>
      <li>Cases per one million: {formattedCountryData.casesPerOneMillion}</li>
      <li>Deaths per one million: {formattedCountryData.deathsPerOneMillion}</li>
      <li>Active per one million: {formattedCountryData.activePerOneMillion}</li>
      <li>Recovered per one million: {formattedCountryData.recoveredPerOneMillion}</li>
    </StyledDataList>
  );
}
