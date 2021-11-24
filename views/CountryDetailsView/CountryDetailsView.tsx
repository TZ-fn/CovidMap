import { ReactElement } from 'react';
import { StyledCountryDetailsContainer } from './CountryDetailsView.styles';
import ChartsContainer from './ChartsContainer/ChartsContainer';
import capitalise from 'utils/capitalise.utils';
import LoadingSpinner from 'components/Elements/LoadingSpinner/LoadingSpinner';
import { useFetch } from 'hooks/useFetch';

interface CountryDetailsViewProps {
  countryName: string | string[] | undefined;
}

export default function CountryDetailsView({ countryName }: CountryDetailsViewProps): ReactElement {
  const [chartData, error, status] = useFetch(
    `https://disease.sh/v3/covid-19/historical/${countryName}?lastdays=360`,
  );

  return (
    <StyledCountryDetailsContainer>
      <h2>{typeof countryName === 'string' && capitalise(countryName)}</h2>
      {status === 'fetched' ? (
        <ChartsContainer chartData={chartData} countryName={countryName} />
      ) : (
        <LoadingSpinner />
      )}
    </StyledCountryDetailsContainer>
  );
}
