import { VaccinesData, CovidCasesData } from './APIdata.types';

export async function fetchData(
  API: string,
  setterFunction?: Function,
): Promise<void | VaccinesData | CovidCasesData> {
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
