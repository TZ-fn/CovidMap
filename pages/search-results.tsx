import { ReactElement } from 'react';
import styled from 'styled-components';

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

interface SearchResultProps {
  searchQuery: string;
  matchingResults: string[];
}

export default function SearchResult({
  searchQuery,
  matchingResults = ['Cannot find any matching results, please try another query.'],
}: SearchResultProps): ReactElement {
  return (
    <StyledContainer>
      {matchingResults.length > 0 ? 
      {<p>{`Can't find ${searchQuery}, did you mean:`}</p>
      <ul>
        {matchingResults.map((result) => {
          return <li key={result}>{result}</li>;
        })}
      </ul>} :
      
    </StyledContainer>
  );
}
