import { Dispatch, SetStateAction } from 'react';
import { VaccinesData, CovidCasesData } from './APIdata.types';

export async function fetchData(
  API: string,
  setterFunction?: Dispatch<SetStateAction<never[]>>,
): Promise<void | VaccinesData | CovidCasesData | unknown> {
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
