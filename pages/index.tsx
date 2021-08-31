import React, { ReactElement } from 'react';
import StyledMain from './index.styles';
import MainMapContainer from 'components/Layout/MainMapContainer/MainMapContainer';
import CountriesRanking from 'components/CountriesRanking/CountriesRanking';
import CovidCasesList from 'components/Elements/List/CovidCasesList';
import VaccineDosesList from 'components/Elements/List/VaccineDosesList';

export default function Home(): ReactElement {
  return (
    <StyledMain>
      <CountriesRanking rankingTitle='Covid-19 cases worldwide'>
        <CovidCasesList />
      </CountriesRanking>
      <MainMapContainer />
      <CountriesRanking rankingTitle='Vaccine doses administered'>
        <VaccineDosesList />
      </CountriesRanking>
    </StyledMain>
  );
}
