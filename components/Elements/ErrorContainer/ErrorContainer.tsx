import { ReactElement } from 'react';
import Image from 'next/image';
import { StyledErrorContainer } from './ErrorContainer.styles';
import ErrorIcon from 'public/icons/cross.svg';

interface ErrorContainerProps {
  message: string;
}

export default function ErrorContainer({ message }: ErrorContainerProps): ReactElement {
  return (
    <StyledErrorContainer>
      <Image src={ErrorIcon.src} alt='' height={33} width={33} layout='fixed' />
      {message}
    </StyledErrorContainer>
  );
}
