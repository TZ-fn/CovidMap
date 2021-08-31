import React, { ReactElement, ReactNode } from 'react';
import { StyledCountriesRanking } from './CountriesRanking.styles';

interface CountriesRankingProps {
  rankingTitle: string;
  children: ReactNode;
}

export default function CountriesRanking({
  rankingTitle,
  children,
}: CountriesRankingProps): ReactElement {
  return (
    <StyledCountriesRanking>
      <h2>{rankingTitle}</h2>
      {children}
    </StyledCountriesRanking>
  );
}
