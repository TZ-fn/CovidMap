import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { StyledMainMapContainer } from './MainMapContainer.styles';

export default function MainMapContainer(): ReactElement {
  const MapWithNoSSR = dynamic(() => import('./Map/Map'), {
    ssr: false,
  });

  return (
    <StyledMainMapContainer>
      <MapWithNoSSR />
    </StyledMainMapContainer>
  );
}
