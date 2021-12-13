import { useState, useEffect } from 'react';
import { VaccinesData, CovidCasesData, HistoricalDataForCountry, CovidCasesDataForCountry } from 'utils/APIdata.types';

type APIdata = VaccinesData | CovidCasesData | HistoricalDataForCountry | CovidCasesDataForCountry;

export const useFetch = (APIurl: string): [APIdata, Error | null, string] => {
  const [data, setData] = useState<APIdata>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loadingStatus, setLoadingStatus] = useState<string>('idle');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoadingStatus('fetching');
        const response = await fetch(APIurl);
        const data = await response.json();
        if (response.status === 404) {
          throw new Error(data?.message);
        }
        setData(data);
        setLoadingStatus('fetched');
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
        setLoadingStatus('error');
      }
    };
    fetchData();
  }, [APIurl]);

  return [data, error, loadingStatus];
};
