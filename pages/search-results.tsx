import { ReactElement } from 'react';
import styled from 'styled-components';
import mainTheme from 'theme/theme';
import ErrorContainer from 'components/Elements/ErrorContainer/ErrorContainer';
import { useRouter } from 'next/router';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 90vh;
  min-width: 95vw;
  padding: 5em 1em;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1em;
  }
`;

const MatchingResultsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 2em;
  padding: 2em 2em 0 2em;
  background: ${({ theme }) => theme.backgroundLighter};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${mainTheme.misc.borderRadius};
  box-shadow: ${mainTheme.misc.shadows.mediumElevation};
`;

interface SearchResultsProps {
  searchQuery: string;
  matchingResults: string[];
}

function SearchResults({ matchingResults }: SearchResultsProps) {
  const router = useRouter();
  const searchQuery = Object.keys(router.query)[0];
  console.log(Object.keys(router.query)[0]);

  if (!matchingResults) {
    return (
      <ErrorContainer
        message={`Cannot find any matching results for ${searchQuery}, please try another query.`}
      />
    );
  }

  return (
    <MatchingResultsContainer>
      <p>{`Can't find ${searchQuery}, did you mean:`}</p>
      <ul>
        {matchingResults.map((result) => {
          return <li key={result}>{result}</li>;
        })}
      </ul>
    </MatchingResultsContainer>
  );
}

interface SearchResultsPageProps {
  searchQuery: string;
  matchingResults: string[];
}

export default function SearchResultsPage({
  searchQuery,
  matchingResults,
}: SearchResultsPageProps): ReactElement {
  return (
    <StyledContainer>
      <SearchResults searchQuery={searchQuery} matchingResults={matchingResults} />
    </StyledContainer>
  );
}
