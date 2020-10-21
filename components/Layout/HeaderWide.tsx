import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div<{ height: string }>`
  height: ${p => p.height};
  ${tw`flex flex-col justify-end sm:pt-48 -mt-10`}

  @media (max-width: 767px) {
    ${tw`justify-end`}
    margin-top: -144px;
  }
  & p {
    ${tw`w-full md:w-3/4 lg:w-3/5`}
  }
`;

export const HeaderWide: React.FC = ({ children }) => {
  const [windowHeight, setWindowHeight] = React.useState<number>();
  React.useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);
  return (
    <Wrapper
      role="main"
      height={windowHeight !== undefined ? `${windowHeight}px` : '100vh'}
    >
      {children}
    </Wrapper>
  );
};
