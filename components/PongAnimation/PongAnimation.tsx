import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Hero } from '../Layout';
import { LottieDesktop } from './LottieDesktop';
import { LottieMobile } from './LottieMobile';

const OuterWrapper = styled(Hero)`
  ${tw`bg-gray-700 py-4`}
`;
const WrapperMobile = styled.div`
  ${tw`w-full sm:hidden`}
`;
const WrapperDesktop = styled.div`
  ${tw`w-full hidden px-6 sm:(block px-5) lg:px-0`}
  max-width: 1080px;
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
