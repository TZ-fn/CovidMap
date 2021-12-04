import { ReactElement } from 'react';
import Image from 'next/image';
import { StyledErrorContainer, StyledErrorImageContainer } from './ErrorContainer.styles';
import ErrorIcon from 'public/icons/cross.svg';

interface ErrorContainerProps {
  message: string;
}

export default function ErrorContainer({ message }: ErrorContainerProps): ReactElement {
  return (
    <StyledErrorContainer>
      <StyledErrorImageContainer>
        <Image src={ErrorIcon.src} alt='' width='33px' height='33px' layout='fixed' />
      </StyledErrorImageContainer>
      {message}
    </StyledErrorContainer>
  );
}
