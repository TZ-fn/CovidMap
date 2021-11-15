import { ReactElement, useEffect, useState } from 'react';
import { StyledChartsContainer } from './ChartsContainer.styles';
import ChartContainer from '../Chart/ChartContainer';
import DataList from '../DataList/DataList';
import { HistoricalDataForCountry } from 'utils/APIdata.types';
import { fetchData } from 'utils/fetchData.utils';

interface ChartsContainerProps {
  chartData: HistoricalDataForCountry;
  countryName: string | string[] | undefined;
}

export default function ChartsContainer({
  chartData,
  countryName,
}: ChartsContainerProps): ReactElement {
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    fetchData(
      `https://disease.sh/v3/covid-19/countries/${countryName}?strict=true`,
      setCountryData,
    );
  }, [countryName]);

  return (
    <StyledChartsContainer>
      <ChartContainer
        title='Cases'
        fillColor='WebOrange'
        chartData={chartData.timeline.cases}
      ></ChartContainer>
      <DataList countryData={countryData} />
      <ChartContainer
        title='Deaths'
        fillColor='Cranberry'
        chartData={chartData.timeline.deaths}
      ></ChartContainer>
    </StyledChartsContainer>
  );
}
