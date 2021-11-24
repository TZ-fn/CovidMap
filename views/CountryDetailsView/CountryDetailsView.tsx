import { ReactElement } from 'react';
import { StyledCountryDetailsContainer } from './CountryDetailsView.styles';
import { useFetch } from 'hooks/useFetch';
import ErrorContainer from 'components/Elements/ErrorContainer/ErrorContainer';
import capitalise from 'utils/capitalise.utils';
import ChartsContainer from './ChartsContainer/ChartsContainer';
import LoadingSpinner from 'components/Elements/LoadingSpinner/LoadingSpinner';

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
      {error !== null && <ErrorContainer message={error.message} />}
      {status === 'fetching' && <LoadingSpinner />}
      {status === 'fetched' && <ChartsContainer chartData={chartData} countryName={countryName} />}
    </StyledCountryDetailsContainer>
  );
}
