import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div<{ viewportHeight: string }>`
  ${tw`flex flex-col justify-end -mt-10`}
  height: ${p => p.viewportHeight};

  @media screen and (min-width: 640px) {
    ${tw`pt-48`}
    min-height: 560px;
    margin-top: -144px;
  }

  @media screen and (max-width: 639px) {
    min-height: 480px;
    margin-top: -144px;
  }

  @media screen and (min-width: 768px) {
    ${tw`-mt-10`}
    min-height: 820px; 
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
      viewportHeight={
        windowHeight !== undefined ? `${windowHeight}px` : '100vh'
      }
    >
      {children}
    </Wrapper>
  );
};
