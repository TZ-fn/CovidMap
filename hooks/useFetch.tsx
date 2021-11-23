import { useState, useEffect } from 'react';
import { VaccinesData, CovidCasesData, HistoricalDataForCountry } from 'utils/APIdata.types';

type APIdata = VaccinesData | CovidCasesData | HistoricalDataForCountry;

export const useFetch = (APIurl: string): [APIdata, unknown, string] => {
  const [data, setData] = useState<APIdata>([]);
  const [error, setError] = useState<unknown | null>(null);
  const [loadingStatus, setLoadingStatus] = useState<string>('idle');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingStatus('fetching');
        const response = await fetch(APIurl);
        const data = await response.json();
        setData(data);
        setLoadingStatus('fetched');
      } catch (error) {
        setError(error);
        setLoadingStatus('error');
      }
    };
    fetchData();
  }, [APIurl]);

  return [data, error, loadingStatus];
};
