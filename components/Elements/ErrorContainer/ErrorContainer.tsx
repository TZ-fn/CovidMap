import { ReactElement } from 'react';
import Image from 'next/image';
import { StyledErrorContainer, StyledErrorImageContainer } from './ErrorContainer.styles';

interface ErrorContainerProps {
  message: string;
}

export default function ErrorContainer({ message }: ErrorContainerProps): ReactElement {
  return (
    <StyledErrorContainer>
      <StyledErrorImageContainer>
        <Image src={'/icons/cross.svg'} alt='' width='33px' height='33px' layout='fixed' />
      </StyledErrorImageContainer>
      {message}
    </StyledErrorContainer>
  );
}
