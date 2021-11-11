import { Dispatch, SetStateAction } from 'react';
import { VaccinesData, CovidCasesData, HistoricalDataForCountry } from './APIdata.types';

export async function fetchData(
  API: string,
  setterFunction?: Dispatch<
    SetStateAction<VaccinesData | CovidCasesData | HistoricalDataForCountry | never[]>
  >,
): Promise<void | VaccinesData | CovidCasesData | HistoricalDataForCountry | unknown> {
  try {
    const response = await fetch(API);
    const data = await response.json();
    if (setterFunction) {
      setterFunction(data);
    }
    return data;
  } catch (error) {
    return error;
  }
}
