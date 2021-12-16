import { ReactElement } from 'react';
import { StyledCountryDetailsContainer } from './CountryDetailsView.styles';
import { useFetch } from 'hooks/useFetch';
import ErrorContainer from 'components/Elements/ErrorContainer/ErrorContainer';
import { HistoricalDataForCountry } from 'utils/APIdata.types';
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
      <h2>
        {/* Capitalise each part of the country's name or entire name if it's a single word */}
        {typeof countryName === 'string' && countryName.split(' ').length < 1
          ? capitalise(countryName)
          : typeof countryName === 'string' &&
            countryName
              .split(' ')
              .map((namePart: string) => capitalise(namePart))
              .join(' ')}
      </h2>
      {error !== null && <ErrorContainer message={error.message} />}
      {status === 'fetching' && <LoadingSpinner />}
      {status === 'fetched' && (
        <ChartsContainer
          chartData={chartData as HistoricalDataForCountry}
          countryName={countryName}
        />
      )}
    </StyledCountryDetailsContainer>
  );
}
