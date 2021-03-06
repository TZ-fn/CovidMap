import { TimelineData } from './APIdata.types';

interface FormattedChartData {
  numberOfPeople: number;
  date: string;
}

export function formatChartDataFromAPI(dataFromAPI: TimelineData): Array<FormattedChartData> {
  return Object.entries(dataFromAPI).map((entry) => {
    return {
      numberOfPeople: entry[1],
      date: formatDate(entry[0]),
    };
  });
}

export function formatDate(dateUSformatted: string): string {
  const dateParts = dateUSformatted.split('/');
  return `${dateParts[1]}/${dateParts[0]}/20${dateParts[2]}`;
}
