import React from 'react';
import { Header } from '../Header';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Analytics } from '../Analytics';
import { Footer } from './Footer';

interface PageProps {
  noLogoFnutt?: boolean;
}

const Wrapper = styled.main`
  ${tw`flex-grow`}
`;
const OuterWrapper = styled.div`
  ${tw`flex flex-col min-h-screen`}
`;

const Content = styled.div``;

export const Page: React.FC<PageProps> = props => {
  return (
    <>
      <Header noLogoFnutt={props.noLogoFnutt} />
      <Analytics />
      <OuterWrapper>
        <Wrapper>
          <Content>{props.children}</Content>
        </Wrapper>
        <Footer />
      </OuterWrapper>
    </>
  );
};
