import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { StyledMainMapContainer } from './MainMapContainer.styles';
import { CovidCasesDataForCountry } from 'utils/APIdata.types';

interface MainMapContainerProps {
  covidCasesData: CovidCasesDataForCountry[];
}

export default function MainMapContainer({ covidCasesData }: MainMapContainerProps): ReactElement {
  const MapWithNoSSR = dynamic(() => import('./Map/Map'), {
    ssr: false,
  });

  return (
    <StyledMainMapContainer>
      <MapWithNoSSR covidCasesData={covidCasesData} />
    </StyledMainMapContainer>
  );
}
