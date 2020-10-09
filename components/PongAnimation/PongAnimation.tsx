import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Hero } from '../Layout';
import { LottieDesktop } from './LottieDesktop';
import { LottieMobile } from './LottieMobile';

const OuterWrapper = styled(Hero)`
  ${tw`bg-gray-700 py-20 px-6 md:px-5 lg:px-0`}
`;
const WrapperMobile = styled.div`
  ${tw`md:hidden`}
`;
const WrapperDesktop = styled.div`
  ${tw`hidden md:block`}
`;

export const PongAnimation = () => {
  return (
    <OuterWrapper>
      {/* <LottieWrapper> */}
      <WrapperMobile>
        <LottieMobile />
      </WrapperMobile>
      <WrapperDesktop>
        <LottieDesktop />
      </WrapperDesktop>
      {/* </LottieWrapper> */}
    </OuterWrapper>
  );
};

export default PongAnimation;
